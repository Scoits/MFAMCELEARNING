"""Maak Word-bestanden in Rise-opmaak voor Magic lesson import.

Gebruik:
    python3 tools/maak_rise_word.py MFA-L01 [--uit MAP] [--media MAP] [--minuten 15]

Rise maakt van ieder geimporteerd bestand een les en laat de AI de blokken
kiezen. Zonder sturing komt een hele les dan in een tabs-blok met lange lappen
tekst. Dit script legt de vorm daarom vast:

- de les wordt verdeeld in delen van ongeveer --minuten studietijd; ieder deel
  is een eigen Word-bestand en wordt in Rise een eigen les;
- ieder scherm begint met een kop en ieder blok met een label
  [Rise-blok: ...] dat het bloktype noemt;
- alinea's krijgen hoogstens drie zinnen;
- onderdelen in de vorm "Naam: tekst" worden tabbladen, een accordeon of
  flashcards, volgens het bloktype in de schermreview;
- opsommingen worden echte Word-opsommingen;
- kennischecks staan als gelabelde meerkeuzevraag met juist antwoord en
  feedback;
- beelden uit de mediamap van de les zitten in het bestand.

De tekst zelf verandert niet: het script splitst en ordent alleen. Daarnaast
schrijft het per les een bouwlijst met per blok het bloktype, zodat de bouwer
na de import kan controleren wat Rise ervan heeft gemaakt.

De bron is reviews/<LES>-schermreview.csv. Interne kolommen komen niet in Word.
"""

import argparse
import csv
import math
import os
import re
import sys

from docx import Document
from docx.shared import Cm, Pt, RGBColor

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from maak_importversie import (PROEFMELDING, feedback_per_antwoord, lees_schermen,  # noqa: E402
                               lestitel, splits_oude_vorm)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MEDIA_STANDAARD = "/mnt/project-files/articulate-proef/media"

ZIN = re.compile(r"(?<=[.!?])\s+(?=[A-ZÀ-Ý\"'(])")
LABEL = re.compile(r"^([A-ZÀ-Ý][^:.?!]{1,60}):\s+(\S.*)$", re.S)
KERNZIN = re.compile(r"^(Je hoeft|Onthoud|Let op|Belangrijk|Wel moet|Meld |Bekijk |Twijfel|Gebruik nooit|Geef nooit)")
OPSOMMING_START = re.compile(r"^(.*?\b(?:onder meer|zijn er|Er zijn))\s+(.+)$")
AANHANGSEL = re.compile(r"^(zoals|die|dat|waarmee|waarin)\b")


# Tekst opdelen

def zinnen(tekst):
    return [z.strip() for z in ZIN.split(tekst.strip()) if z.strip()]


def brokken(tekst, maximum=3):
    """Deel een alinea op in stukken van hoogstens `maximum` zinnen."""
    z = zinnen(tekst)
    if len(z) <= maximum + 1 and len(z) <= 4 and len(" ".join(z).split()) <= 70:
        return [" ".join(z)]
    aantal = math.ceil(len(z) / maximum)
    grootte = math.ceil(len(z) / aantal)
    return [" ".join(z[i:i + grootte]) for i in range(0, len(z), grootte)]


def opsomming(zin):
    """Herken een lange opsomming in een zin. Geef (inleiding, items) of None."""
    m = OPSOMMING_START.match(zin)
    if not m or not zin.endswith("."):
        return None
    inleiding, rest = m.group(1), m.group(2)[:-1]
    delen = [d.strip() for d in rest.split(", ")]
    if len(delen) < 4:
        return None
    items = []
    for d in delen:
        if items and AANHANGSEL.match(d):
            items[-1] += ", " + d
        elif items and " en " in d and len(d.split()) <= 3 and " voor " in items[-1] and d is not delen[-1]:
            items[-1] += ", " + d  # zoals "spalken voor vingers, hand en onderarm"
        else:
            items.append(d)
    laatste = re.split(r"(?<!-) en ", items[-1], maxsplit=1)
    if len(laatste) == 2:
        items[-1:] = laatste
    if len(items) < 4 or any(len(i.split()) > 16 for i in items):
        return None
    return inleiding + ":", items


def alinea_blokken(tekst):
    """Zet een alinea om in een reeks ('tekst', str) en ('lijst', inleiding, items)."""
    uit = []
    buffer = []
    for z in zinnen(tekst):
        o = opsomming(z)
        if o:
            if buffer:
                uit.extend(("tekst", b) for b in brokken(" ".join(buffer)))
                buffer = []
            uit.append(("lijst", o[0], o[1]))
        else:
            buffer.append(z)
    if buffer:
        uit.extend(("tekst", b) for b in brokken(" ".join(buffer)))
    return uit


def is_tabel(alinea):
    regels = [r.strip() for r in alinea.splitlines() if r.strip()]
    return bool(regels) and all(r.startswith("|") for r in regels)


def label_item(alinea):
    m = LABEL.match(alinea)
    if m and len(m.group(1).split()) <= 6 and not is_tabel(alinea):
        inhoud = m.group(2).strip()
        return m.group(1).strip(), inhoud[0].upper() + inhoud[1:]
    return None


# Schermen omzetten in blokken

def soort_items(platform, items):
    p = platform.lower()
    if "tabblad" in p:
        return "Tabbladen"
    if "accordeon" in p:
        return "Accordeon"
    if "tijdlijn" in p:
        return "Tijdlijn"
    if all(len(t.split()) <= 30 for _, t in items) and len(items) <= 8:
        return "Flashcards"
    return "Accordeon"


def scherm_blokken(s):
    """Geef een lijst blokken (dicts) voor een scherm."""
    tekst, vraag = splits_oude_vorm(s)
    alineas = [a.strip() for a in tekst.split("\n\n") if a.strip()]
    platform = s["platform_block"]
    p = platform.lower()
    blokken = []
    if vraag and not any(is_tabel(a) for a in alineas):
        alineas = []  # de aanloop staat in de vraag zelf
    media = [m.strip() for m in s["media_ids"].split(";") if m.strip()]

    if "proces" in p and len(alineas) >= 3:
        intro = []
        while alineas and not intro or (alineas and intro and not intro[-1].endswith(":")):
            intro.append(alineas.pop(0))
            if len(intro) >= 2:
                break
        stappen = alineas
        blokken.append({"type": "Proces", "intro": " ".join(intro), "stappen": stappen})
        alineas = []

    i = 0
    while i < len(alineas):
        a = alineas[i]
        if is_tabel(a):
            blokken.append({"type": "Tabel", "tabel": a})
            i += 1
            continue
        if label_item(a):
            items = []
            while i < len(alineas) and label_item(alineas[i]):
                items.append(label_item(alineas[i]))
                i += 1
            if len(items) >= 2:
                blokken.append({"type": soort_items(platform, items), "items": items})
            else:
                blokken.append({"type": "Tekst", "delen": alinea_blokken(alineas[i - 1])})
            continue
        if a.endswith(":") and i + 2 < len(alineas) and alineas[i + 1].endswith(";"):
            items = []
            j = i + 1
            while j < len(alineas):
                items.append(alineas[j].rstrip(";."))
                j += 1
                if not alineas[j - 1].endswith(";"):
                    break
            blokken.append({"type": "Opsomming", "inleiding": a, "items": items})
            i = j
            continue
        laatste = i == len(alineas) - 1 and i > 0
        if laatste and not vraag and KERNZIN.match(a) and len(zinnen(a)) <= 3:
            blokken.append({"type": "Opvallend kader", "tekst": a})
        else:
            blokken.append({"type": "Tekst", "delen": alinea_blokken(a)})
        i += 1

    # Aangrenzende tekstblokken samenvoegen tot een blok met meerdere alinea's.
    samen = []
    for b in blokken:
        if b["type"] == "Tekst" and samen and samen[-1]["type"] == "Tekst":
            samen[-1]["delen"].extend(b["delen"])
        else:
            samen.append(b)
    blokken = samen

    if media:
        beeldsoort = "Afbeelding met tekst" if "afbeelding met tekst" in p else (
            "Gelabelde afbeelding" if "gelabelde afbeelding" in p else "Afbeelding")
        beeld = {"type": beeldsoort, "media": media}
        if beeldsoort == "Afbeelding met tekst" and blokken and blokken[0]["type"] == "Tekst":
            beeld["delen"] = [blokken[0]["delen"].pop(0)]
            if not blokken[0]["delen"]:
                blokken.pop(0)
            blokken.insert(0, beeld)
        elif beeldsoort == "Gelabelde afbeelding":
            beeld["interactie"] = s["interaction"]
            blokken.append(beeld)
        elif blokken and blokken[0]["type"] == "Tekst":
            blokken.insert(1, beeld)
        else:
            blokken.insert(0, beeld)

    if vraag:
        blokken.append({"type": "Kennischeck", "vraag": vraag, "scherm": s})
    elif (s["interaction"].strip() and not s["interaction"].startswith("Niet van toepassing")
          and not any(b.get("interactie") for b in blokken)):
        blokken.append({"type": "Interactie", "tekst": s["interaction"]})
    return blokken


# Delen

def verdeel(schermen, doel):
    delen, huidig, minuten = [], [], 0.0
    for s in schermen:
        is_vraag = bool(splits_oude_vorm(s)[1])
        if huidig and ((minuten >= doel and not is_vraag) or minuten >= 1.5 * doel):
            delen.append(huidig)
            huidig, minuten = [], 0.0
        huidig.append(s)
        minuten += float(s["minutes_estimate"] or 0)
    if huidig:
        if delen and minuten < doel / 2:
            delen[-1].extend(huidig)
        else:
            delen.append(huidig)
    return delen


# Word

RISE = {
    "Kop": ("Heading", "Text > Heading"),
    "Tekst": ("Paragraph", "Text > Paragraph; ieder stuk een eigen alinea, opsommingen als List > Bulleted list"),
    "Opsomming": ("List", "List > Bulleted list; de inleidende zin als Paragraph erboven"),
    "Opvallend kader": ("Note", "Text > Note"),
    "Tabbladen": ("Tabs", "Magic text import > Tabs; plak de koppen en hun tekst"),
    "Accordeon": ("Accordion", "Magic text import > Accordion; plak de koppen en hun tekst"),
    "Tijdlijn": ("Timeline", "Interactive > Timeline; iedere kop is een moment, de tekst eronder de beschrijving"),
    "Flashcards": ("Flashcard grid", "Interactive > Flashcard grid; kop op de voorkant, tekst op de achterkant"),
    "Proces": ("Process", "Magic text import > Process; plak de inleiding en de stappen"),
    "Sorteeroefening": ("Sorting activity", "Interactive > Sorting activity; categorieen en kaarten zoals hieronder"),
    "Tabel": ("Table", "Text > Table"),
    "Afbeelding": ("Image centered", "Image > Image centered; beeld uit de mediamap"),
    "Afbeelding met tekst": ("Image & text", "Image > Image & text; beeld uit de mediamap, tekst ernaast"),
    "Gelabelde afbeelding": ("Labeled graphic", "Interactive > Labeled graphic; markeringen volgens de interactieconfiguratie"),
    "Kennischeck": ("Multiple choice", "Knowledge check > Multiple choice; juist antwoord en feedback per keuze zoals hieronder"),
    "Interactie": ("zie interactieconfiguratie", "bouwen volgens de interactieconfiguratie"),
}
INTERACTIEF = {"Tabbladen", "Accordeon", "Tijdlijn", "Flashcards", "Proces", "Sorteeroefening",
               "Gelabelde afbeelding", "Kennischeck", "Interactie"}


def blokkop(doc, n, soort):
    naam, route = RISE[soort]
    p = doc.add_paragraph()
    r = p.add_run(f"Blok {n}: {soort} ({naam})")
    r.bold = True
    r.font.color.rgb = RGBColor(0x1F, 0x3A, 0x5F)
    p2 = doc.add_paragraph()
    r2 = p2.add_run(f"In Rise: {route}.")
    r2.italic = True
    r2.font.size = Pt(9)


def doorgaan(doc, n, verplicht):
    p = doc.add_paragraph()
    tekst = "Complete block above" if verplicht else "None"
    r = p.add_run(f"Blok {n}: Doorgaan-knop (Interactive > Continue), instelling {tekst}")
    r.bold = True
    r.font.color.rgb = RGBColor(0xA0, 0x30, 0x20) if verplicht else RGBColor(0x55, 0x55, 0x55)


def beeldpad(media_map, mid):
    for naam in (f"{mid}.png", f"{mid}-tijdelijk.png"):
        pad = os.path.join(media_map, naam)
        if os.path.exists(pad):
            return pad
    return None


def zet_tabel(doc, alinea):
    regels = [r.strip() for r in alinea.splitlines() if r.strip()]
    rijen = [[c.strip() for c in r.strip("|").split("|")] for r in regels
             if not re.fullmatch(r"\|?[\s:|-]+\|?", r)]
    tabel = doc.add_table(rows=len(rijen), cols=max(len(r) for r in rijen))
    tabel.style = "Table Grid"
    for i, rij in enumerate(rijen):
        for j, cel in enumerate(rij):
            tabel.cell(i, j).text = cel
            if i == 0:
                for r in tabel.cell(i, j).paragraphs[0].runs:
                    r.bold = True


def zet_delen(doc, delen):
    for d in delen:
        doc.add_paragraph(d[1])
        if d[0] == "lijst":
            for item in d[2]:
                doc.add_paragraph(item, style="List Bullet")


def zet_beelden(doc, media, media_map, ontbreekt):
    for mid in media:
        pad = beeldpad(media_map, mid)
        if pad:
            doc.add_picture(pad, width=Cm(12))
            doc.add_paragraph(f"Bestand: {os.path.basename(pad)}")
        else:
            ontbreekt.append(mid)
            doc.add_paragraph(f"Beeld {mid}: nog geen bestand in de mediamap")


def sorteeroefening(b):
    """Maak uit tabbladen of een accordeon met opsommingen een sorteeroefening.

    De categorieen zijn de koppen, de kaarten komen uit de opsommingen van de
    schermtekst zelf. Geef None als er te weinig geschikte opsommingen zijn."""
    stapels = []
    for kop, tekst in b["items"]:
        lijsten = [d for d in alinea_blokken(tekst) if d[0] == "lijst"]
        if lijsten:
            kaarten = [i[0].upper() + i[1:] for i in lijsten[0][2] if len(i.split()) <= 8][:3]
            if len(kaarten) >= 2:
                stapels.append((kop, kaarten))
    if len(stapels) < 2:
        return None
    return {"type": "Sorteeroefening", "stapels": stapels[:4]}


def schrijf_blok(doc, n, b, media_map, ontbreekt):
    t = b["type"]
    blokkop(doc, n, t)
    if t == "Tekst":
        zet_delen(doc, b["delen"])
    elif t == "Opvallend kader":
        doc.add_paragraph(b["tekst"])
    elif t == "Opsomming":
        doc.add_paragraph(b["inleiding"])
        for item in b["items"]:
            doc.add_paragraph(item, style="List Bullet")
    elif t in ("Tabbladen", "Accordeon", "Tijdlijn", "Flashcards"):
        for kop, tekst in b["items"]:
            doc.add_heading(kop, level=4)
            zet_delen(doc, alinea_blokken(tekst))
    elif t == "Proces":
        doc.add_heading("Inleiding", level=4)
        doc.add_paragraph(b["intro"])
        for k, stap in enumerate(b["stappen"], 1):
            doc.add_heading(f"Stap {k}", level=4)
            zet_delen(doc, alinea_blokken(stap))
    elif t == "Sorteeroefening":
        doc.add_paragraph("Opdracht: Sleep iedere kaart naar de juiste groep.")
        for kop, kaarten in b["stapels"]:
            doc.add_paragraph(f"Categorie: {kop}")
            for k in kaarten:
                doc.add_paragraph(k, style="List Bullet")
    elif t == "Tabel":
        zet_tabel(doc, b["tabel"])
    elif t in ("Afbeelding", "Afbeelding met tekst", "Gelabelde afbeelding"):
        zet_beelden(doc, b["media"], media_map, ontbreekt)
        if b.get("delen"):
            zet_delen(doc, b["delen"])
        if b.get("interactie"):
            regels = [r.strip() for r in b["interactie"].splitlines() if r.strip()]
            eerste = regels[0]
            if "Opdracht:" in eerste:
                doc.add_paragraph(eerste.split("Opdracht:", 1)[1].strip())
            doc.add_paragraph("Markeringen (de uitleg per markering staat in de interactieconfiguratie):")
            for r in regels[1:]:
                m = re.match(r"^\S+-(H\d+):\s*(.*?)(\s*\((?:juist|onjuist)[^)]*\))?$", r)
                if m:
                    doc.add_paragraph(f"{m.group(1)}: {m.group(2)}", style="List Bullet")
    elif t == "Kennischeck":
        vraag_id, vraagtekst, opties = b["vraag"]
        s = b["scherm"]
        fb = feedback_per_antwoord(s["feedback_correct"], s["feedback_incorrect"])
        aanloop = splits_oude_vorm(s)[0].strip()
        if "|" in aanloop:
            aanloop = ""
        doc.add_paragraph(f"Vraag: {aanloop} {vraagtekst}".replace("  ", " ").strip())
        letters = "ABCDEFGH"
        for k, (aid, optie, ok) in enumerate(opties):
            doc.add_paragraph(f"{letters[k]}. {optie}" + ("   (juist)" if ok else ""))
        for k, (aid, _, _) in enumerate(opties):
            if fb.get(aid):
                doc.add_paragraph(f"Feedback bij {letters[k]}: {fb[aid]}")
    elif t == "Interactie":
        eerste = b["tekst"].splitlines()[0]
        opdracht = eerste.split("Opdracht:", 1)[1].strip() if "Opdracht:" in eerste else eerste
        doc.add_paragraph(opdracht)


def samenvatting(b):
    t = b["type"]
    if t == "Tekst":
        tekst = " ".join(d[1] for d in b["delen"])
        lijsten = sum(1 for d in b["delen"] if d[0] == "lijst")
        extra = f" en {lijsten} opsomming" if lijsten else ""
        return f"{len(b['delen'])} korte alinea's{extra}: {tekst[:70]}"
    if t in ("Tabbladen", "Accordeon", "Tijdlijn", "Flashcards"):
        return f"{len(b['items'])} onderdelen: " + "; ".join(k for k, _ in b["items"])
    if t == "Proces":
        return f"inleiding en {len(b['stappen'])} stappen"
    if t == "Opsomming":
        return f"{len(b['items'])} punten: {b['inleiding'][:60]}"
    if t == "Sorteeroefening":
        return "categorieen: " + "; ".join(k for k, _ in b["stapels"])
    if t == "Kennischeck":
        return b["vraag"][1][:80]
    if t == "Tabel":
        return "tabel uit de schermtekst"
    if t == "Interactie":
        return b["tekst"].splitlines()[0][:90]
    if t == "Opvallend kader":
        return b["tekst"][:80]
    return "; ".join(b.get("media", []))


def met_extra(blokken):
    """Voeg sorteeroefeningen en doorgaan-knoppen toe aan de blokken van een scherm."""
    uit = []
    for b in blokken:
        uit.append(b)
        if b["type"] in ("Tabbladen", "Accordeon"):
            sort = sorteeroefening(b)
            if sort:
                uit.append(sort)
    return uit


def maak_bouwboek(les, titel, delen, uitpad, media_map, proef, bouw):
    doc = Document()
    doc.styles["Normal"].font.size = Pt(11)
    if proef:
        doc.sections[0].header.paragraphs[0].text = PROEFMELDING
    doc.add_heading(f"{titel}: bouwboek voor Rise", level=0)
    if proef:
        doc.add_paragraph(PROEFMELDING)
    doc.add_paragraph(
        "Ieder deel wordt een eigen les in Rise. Bouw de blokken van boven naar beneden. "
        "Bij ieder blok staat welk Rise-blok het is en waar je het vindt. Plak de tekst onder "
        "de blokkop in dat blok. De tekst is vastgesteld; laat de AI niets herschrijven.")
    doc.add_paragraph(
        "Zet in Rise bij Settings > Navigation de navigatie op Restricted, zodat de "
        "doorgaan-knoppen met Complete block above de cursist echt tegenhouden.")
    ontbreekt = []
    for d, schermen in enumerate(delen, 1):
        minuten = sum(float(s["minutes_estimate"] or 0) for s in schermen)
        doc.add_page_break()
        doc.add_heading(f"Deel {d}: {schermen[0]['title']}", level=1)
        doc.add_paragraph(f"Rise-les: {titel}, deel {d}. Ongeveer {minuten:g} minuten, "
                          f"{len(schermen)} schermen.")
        for s in schermen:
            doc.add_heading(s["title"], level=2)
            p = doc.add_paragraph()
            r = p.add_run(f"Scherm {s['screen_id']}. Blok 1 is de kop (Text > Heading): {s['title']}")
            r.font.size = Pt(9)
            bouw.append([les, d, s["screen_id"], s["title"], 1, "Kop", "Heading", s["title"], "", ""])
            n = 2
            blokken = met_extra(scherm_blokken(s))
            for k, b in enumerate(blokken):
                schrijf_blok(doc, n, b, media_map, ontbreekt)
                bouw.append([les, d, s["screen_id"], s["title"], n, b["type"], RISE[b["type"]][0],
                             samenvatting(b), "; ".join(b.get("media", [])),
                             b["vraag"][0] if b["type"] == "Kennischeck" else ""])
                n += 1
                laatste = k == len(blokken) - 1
                if b["type"] in INTERACTIEF or laatste:
                    verplicht = b["type"] in INTERACTIEF
                    doorgaan(doc, n, verplicht)
                    bouw.append([les, d, s["screen_id"], s["title"], n, "Doorgaan-knop",
                                 "Continue", "Complete block above" if verplicht else "None", "", ""])
                    n += 1
    doc.save(uitpad)
    return ontbreekt


def main():
    p = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    p.add_argument("les")
    p.add_argument("--uit", default=os.path.join(ROOT, "build", "rise"))
    p.add_argument("--media", default=MEDIA_STANDAARD)
    p.add_argument("--minuten", type=float, default=15)
    a = p.parse_args()
    schermen = lees_schermen(a.les)
    titel = lestitel(a.les)
    if ":" in titel:
        titel = titel.split(":", 1)[1].strip()
    os.makedirs(a.uit, exist_ok=True)
    media_map = os.path.join(a.media, a.les)
    delen = verdeel(schermen, a.minuten)
    bouw = []
    pad = os.path.join(a.uit, f"{a.les}-rise-bouwboek.docx")
    ontbreekt = maak_bouwboek(a.les, titel, delen, pad, media_map, True, bouw)
    for d, deel in enumerate(delen, 1):
        minuten = sum(float(s["minutes_estimate"] or 0) for s in deel)
        print(f"deel {d}: {len(deel)} schermen, {minuten:g} minuten")
    print(pad)
    bouwpad = os.path.join(a.uit, f"{a.les}-bouwlijst-blokken.csv")
    with open(bouwpad, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, lineterminator="\n")
        w.writerow(["les", "deel", "screen_id", "schermtitel", "blok", "soort", "rise_blok",
                    "inhoud_of_instelling", "media_ids", "question_id"])
        w.writerows(bouw)
    print(bouwpad)
    if ontbreekt:
        print("Geen beeldbestand gevonden voor: " + ", ".join(sorted(set(ontbreekt))))

if __name__ == "__main__":
    main()
