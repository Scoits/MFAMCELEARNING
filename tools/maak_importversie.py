"""Maak een schone importversie van een les voor Rise Magic Lesson Import.

Gebruik:
    python3 tools/maak_importversie.py MFA-L07 [--uit MAP] [--productie]

Uitvoer per les:
    <LES>-import.docx              schone Word-les: koppen, cursistentekst,
                                   media-invoegpunten en kennischecks
    <LES>-interactieconfiguratie.csv  scherm-, vraag- en antwoord-ID's,
                                   feedback, bloktype en media per scherm

Zonder --productie is de uitvoer een proefversie voor de technische proef.
Iedere pagina draagt dan de melding dat de inhoud niet medisch is
vrijgegeven. Met --productie weigert het script zodra een scherm niet de
status medisch_goedgekeurd met een reviewdatum heeft. Het script zet die
status nooit zelf.

De bron is reviews/<LES>-schermreview.csv. Interne kolommen (bronplaats,
reviewstatus, opmerkingen) komen niet in de Word-les.
"""

import argparse
import csv
import os
import re
import sys

from docx import Document
from docx.shared import Pt

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROEFMELDING = "Proefversie voor de technische proef. Niet medisch vrijgegeven; niet gebruiken voor cursisten."
ID_REGEL = re.compile(r"^([A-Z]{2,4}-K\d{2}-\d{2}-[A-Z]|K\d{2}-\d{2}-[A-Z]):\s*(.*)$")
VRAAG_ID = re.compile(r"^([A-Z]{2,4}-K\d{2}-\d{2}|K\d{2}-\d{2}):")


def lees_schermen(les):
    pad = os.path.join(ROOT, "reviews", f"{les}-schermreview.csv")
    if not os.path.exists(pad):
        sys.exit(f"Geen schermreview gevonden: {pad}")
    with open(pad, encoding="utf-8", newline="") as f:
        return list(csv.DictReader(f))


def lestitel(les):
    map_ = os.path.join(ROOT, "content", "nl")
    for naam in sorted(os.listdir(map_)):
        if naam.startswith(les + "-") and naam.endswith(".md"):
            with open(os.path.join(map_, naam), encoding="utf-8") as f:
                for regel in f:
                    if regel.startswith("# "):
                        return regel[2:].strip()
    return les


def splits_oude_vorm(s):
    """Oudere schermen (MFA-L07 versie 0.3) zetten de opties in learner_text.

    Geef (cursistentekst zonder optieregels, vraag) of (learner_text, None)."""
    vraag = ontleed_vraag(s["interaction"])
    if vraag:
        return s["learner_text"], vraag
    m = VRAAG_ID.match(s["interaction"].splitlines()[-1].strip()) if s["interaction"].strip() else None
    if not m:
        return s["learner_text"], None
    juist = set(feedback_per_antwoord(s["feedback_correct"]))
    tekst, opties = [], []
    for regel in s["learner_text"].splitlines():
        r = ID_REGEL.match(regel.strip())
        if r and r.group(1).startswith(m.group(1) + "-"):
            opties.append((r.group(1), r.group(2), r.group(1) in juist))
        else:
            tekst.append(regel)
    if not opties:
        return s["learner_text"], None
    return "\n".join(tekst), (m.group(1), "", opties)


def ontleed_vraag(interactie):
    """Geef (vraag_id, vraagtekst, [(antwoord_id, tekst, juist)]) of None."""
    regels = [r.strip() for r in interactie.splitlines() if r.strip()]
    vraag_id = vraag = None
    opties = []
    for r in regels:
        if vraag_id is None and VRAAG_ID.match(r):
            vraag_id = VRAAG_ID.match(r).group(1)
        if r.startswith("Vraag:"):
            vraag = r[len("Vraag:"):].strip()
            continue
        m = ID_REGEL.match(r)
        if m:
            tekst = m.group(2)
            juist = tekst.endswith("(juist)")
            opties.append((m.group(1), tekst.removesuffix("(juist)").strip(), juist))
    if vraag_id and vraag and opties:
        return vraag_id, vraag, opties
    return None


def feedback_per_antwoord(*velden):
    uit = {}
    for veld in velden:
        for r in veld.splitlines():
            m = ID_REGEL.match(r.strip())
            if m:
                uit[m.group(1)] = m.group(2)
    return uit


def controleer_productie(schermen):
    niet_vrij = [s["screen_id"] for s in schermen
                 if s["review_status"] != "medisch_goedgekeurd" or not s["review_date"].strip()]
    if niet_vrij:
        sys.exit("Geen productieversie: deze schermen zijn niet medisch vrijgegeven met reviewdatum: "
                 + ", ".join(niet_vrij))


def voeg_alinea_toe(doc, alinea):
    """Zet een Markdown-tabel om in een Word-tabel; anders een alinea per regel."""
    regels = [r.strip() for r in alinea.splitlines() if r.strip()]
    if regels and all(r.startswith("|") for r in regels):
        rijen = [[c.strip() for c in r.strip("|").split("|")] for r in regels
                 if not re.fullmatch(r"\|?[\s:|-]+\|?", r)]
        tabel = doc.add_table(rows=len(rijen), cols=max(len(r) for r in rijen))
        tabel.style = "Table Grid"
        for i, rij in enumerate(rijen):
            for j, cel in enumerate(rij):
                tabel.cell(i, j).text = cel
        return
    for regel in regels:
        doc.add_paragraph(regel)


def maak_docx(les, schermen, uitpad, proef):
    doc = Document()
    stijl = doc.styles["Normal"]
    stijl.font.size = Pt(11)
    if proef:
        for sectie in doc.sections:
            sectie.header.paragraphs[0].text = PROEFMELDING
    doc.add_heading(lestitel(les), level=1)
    if proef:
        doc.add_paragraph(PROEFMELDING)
    for s in schermen:
        doc.add_heading(s["title"], level=2)
        cursistentekst, vraag = splits_oude_vorm(s)
        for alinea in [a.strip() for a in cursistentekst.split("\n\n") if a.strip()]:
            voeg_alinea_toe(doc, alinea)
        for media in [m.strip() for m in s["media_ids"].split(";") if m.strip()]:
            doc.add_paragraph(f"[Beeld {media}]")
        if vraag:
            vraag_id, tekst, opties = vraag
            doc.add_paragraph(f"[Kennischeck {vraag_id}; bouwen als Rise kennischeck volgens de interactieconfiguratie]")
            if tekst:
                doc.add_paragraph(tekst)
            for _, optie, _ in opties:
                doc.add_paragraph(optie, style="List Bullet")
    doc.save(uitpad)


# Vindplaats in SharePoint-map 025 per bron-ID; volgt bronnen/INDEX-025-MFA-MC.md.
MAP_025 = "SharePoint 025 - Medical First Aid - Medical Care (MFA-MC)"
BRONPAD = {
    "S026": "4. Overig/Filmpjes",
    "S029": "3. Praktijkhandelingen",
    "S034": "2. Presentaties/Nederlands/3. MFA dag 2 ochtend 2025 rev 003.pptx",
    "S043": "2. Presentaties/Nederlands/2. MFA dag 1 middag 2025 rev 003.pptx",
    "S044": "2. Presentaties/Nederlands/4. MFA dag 2 middag 2025 rev 003.pptx",
    "S045": "2. Presentaties/Nederlands/1. MFA dag 1 ochtend 2025 rev 003.pptx",
    "S058": "3. Praktijkhandelingen/PH 10 Aanleggen van een dekverband en wonddrukverband.pdf",
    "S061": "3. Praktijkhandelingen/PH 14 Urinekatheter inbrengen.pdf",
    "S066": "4. Overig/Archief/025 - MFA-MC/Info/Regeling-medische-uitrusting-en-toelichting.pdf",
    "S062": "2. Presentaties/Nederlands/5. MC dag 1 ochtend 2024 rev.001.pptx",
    "S063": "2. Presentaties/Nederlands/6. MC dag 1 middag 2024 rev.001.pptx",
    "S064": "2. Presentaties/Nederlands/7. MC dag 2 ochtend  2024 rev.001.pptx",
    "S065": "2. Presentaties/Nederlands/1.1 Bekkenfractuur rev001 2024.pptx",
}
BRONLINK = {"S031": "https://www.knrm.nl/images/over-ons/wat-doet-de-knrm/radio-medische-dienst/Downloads/RMD_vragenlijst-v3.pdf"}


def lees_media():
    pad = os.path.join(ROOT, "articulate", "mediaregister.csv")
    with open(pad, encoding="utf-8", newline="") as f:
        return {r["media_id"]: r for r in csv.DictReader(f)}


def mediabron(media_id, register):
    """Beschrijf voor de bouwer welk bestand of welke link bij een media-ID hoort."""
    r = register.get(media_id)
    if not r:
        return f"{media_id}: niet in het mediaregister"
    tekst = f"{r['vindplaats']} {r['omschrijving']}"
    delen = []
    for sid in sorted(set(re.findall(r"S0\d\d", tekst))):
        if sid in BRONLINK:
            delen.append(f"link {BRONLINK[sid]}")
        elif sid in BRONPAD:
            dia = re.search(sid + r" dia\s?([\d\-, en]+)", tekst)
            delen.append(f"{MAP_025}/{BRONPAD[sid]}" + (f", dia {dia.group(1).strip()}" if dia else ""))
    if "Eigen ontwerp" in r["vindplaats"]:
        delen.insert(0, f"eigen beeld, bestand {media_id}.png in de mediamap van de les")
    elif not delen:
        delen.append("geen bestand in map 025; eigen beeld maken of tijdelijk een placeholder gebruiken")
    rechten = "" if "rechten" not in tekst and "Eigen" in r["gebruiksrecht"] else f"; gebruiksrecht: {r['gebruiksrecht']}"
    return f"{media_id}: {r['omschrijving']}. Bron: {'; '.join(delen)}{rechten}. Alt-tekst: {r['alt_tekst']}"


def maak_config(schermen, uitpad):
    kolommen = ["screen_id", "title", "platform_block", "minutes_estimate", "media_ids",
                "question_id", "answer_id", "answer_text", "correct", "feedback",
                "interaction_other", "media_source", "voice_over", "version", "review_status"]
    register = lees_media()
    with open(uitpad, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, lineterminator="\n")
        w.writerow(kolommen)
        for s in schermen:
            basis = [s["screen_id"], s["title"], s["platform_block"], s["minutes_estimate"], s["media_ids"]]
            bron = " | ".join(mediabron(m.strip(), register) for m in s["media_ids"].split(";") if m.strip())
            staart = [bron, s["voice_over"], s["version"], s["review_status"]]
            _, vraag = splits_oude_vorm(s)
            if vraag:
                vraag_id, _, opties = vraag
                fb = feedback_per_antwoord(s["feedback_correct"], s["feedback_incorrect"])
                for aid, tekst, juist in opties:
                    w.writerow(basis + [vraag_id, aid, tekst, "ja" if juist else "nee", fb.get(aid, ""), ""] + staart)
            else:
                w.writerow(basis + ["", "", "", "", "", s["interaction"]] + staart)


def main():
    p = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    p.add_argument("les")
    p.add_argument("--uit", default=os.path.join(ROOT, "build"))
    p.add_argument("--productie", action="store_true")
    a = p.parse_args()
    schermen = lees_schermen(a.les)
    if a.productie:
        controleer_productie(schermen)
    os.makedirs(a.uit, exist_ok=True)
    achtervoegsel = "" if a.productie else "-proef"
    docx_pad = os.path.join(a.uit, f"{a.les}-import{achtervoegsel}.docx")
    csv_pad = os.path.join(a.uit, f"{a.les}-interactieconfiguratie{achtervoegsel}.csv")
    maak_docx(a.les, schermen, docx_pad, proef=not a.productie)
    maak_config(schermen, csv_pad)
    vragen = sum(1 for s in schermen if splits_oude_vorm(s)[1])
    print(f"{a.les}: {len(schermen)} schermen, {vragen} kennischecks")
    print(docx_pad)
    print(csv_pad)


if __name__ == "__main__":
    main()
