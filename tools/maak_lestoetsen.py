"""Maak de lestoetsen (korte Moodle-toets na iedere les) uit een afgeschermd bronbestand.

Gebruik:
  python3 tools/maak_lestoetsen.py BRON.txt --uit MAP [--overzicht docs/lestoetsen-v001.md]

Het bronbestand staat buiten deze openbare repository (de vragen en antwoorden zijn toetsmateriaal).
Per vraag: ID, Doel, Scherm, Niveau, Vraag, een regel '* ' met het goede antwoord, regels '- ' met
afleiders, Goed: en Fout: (feedback). Het script
- controleert ID's, leerdoelen (moeten bij de les horen), het lesscherm, vijf tot acht vragen per les,
  de lengte van de opties (goed antwoord hooguit 1,3 keer de langste afleider) en dubbele vragen
  met de kennischecks in de les;
- verdeelt de plaats van het goede antwoord gelijkmatig over de opties;
- neemt de bronverwijzing over van het lesscherm;
- schrijft <cursus>-lestoetsen.csv en <cursus>-lestoetsen-moodle.xml (Moodle XML, één categorie per les)
  in MAP;
- schrijft met --overzicht een overzicht zonder vragen en antwoorden voor de repository.
"""
import argparse
import collections
import csv
import os
import random
import re
import sys
from xml.sax.saxutils import escape

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LETTERS = "ABCDEFG"


def lees_bron(pad):
    vragen, huidig = [], None
    for regel in open(pad, encoding="utf-8"):
        regel = regel.rstrip("\n")
        if regel.startswith("#") or not regel.strip():
            continue
        if regel.startswith("ID: "):
            huidig = {"id": regel[4:].strip(), "goed": None, "fout": [], "volgorde": []}
            vragen.append(huidig)
        elif regel.startswith("* "):
            huidig["goed"] = regel[2:].strip(); huidig["volgorde"].append(("goed", regel[2:].strip()))
        elif regel.startswith("- "):
            huidig["fout"].append(regel[2:].strip())
        else:
            sleutel, _, waarde = regel.partition(": ")
            sleutel = {"goed": "fb_goed", "fout": "fb_fout"}.get(sleutel.strip().lower(), sleutel.strip().lower())
            huidig[sleutel] = waarde.strip()
    return vragen


def schermen(les):
    p = os.path.join(ROOT, "reviews", f"{les}-schermreview.csv")
    return {r["screen_id"]: r for r in csv.DictReader(open(p, encoding="utf-8"))}


def woorden(t):
    return len(t.split())


def main():
    a = argparse.ArgumentParser()
    a.add_argument("bron"); a.add_argument("--uit", required=True); a.add_argument("--overzicht")
    x = a.parse_args()
    vragen = lees_bron(x.bron)
    fouten = []
    cursus = vragen[0]["id"].split("-")[0]
    per_les = collections.OrderedDict()
    gezien = set()
    for v in vragen:
        les = f"{cursus}-L{v['id'].split('-LT')[1][:2]}"
        v["les"] = les
        per_les.setdefault(les, []).append(v)
        if v["id"] in gezien: fouten.append(f"{v['id']}: dubbel ID")
        gezien.add(v["id"])
        for veld in ("doel", "scherm", "niveau", "vraag", "fb_goed", "fb_fout"):
            if not v.get(veld):
                fouten.append(f"{v['id']}: veld {veld} ontbreekt")
        if not v["goed"] or len(v["fout"]) < 2: fouten.append(f"{v['id']}: te weinig opties")
    kennischecks = set()
    for les, lijst in per_les.items():
        sch = schermen(les)
        doelen = {d.strip() for s in sch.values() for d in s["learning_goal_ids"].replace(",", ";").split(";") if d.strip()}
        for s in sch.values():
            for r in s["interaction"].splitlines():
                if r.strip().startswith("Vraag:"):
                    kennischecks.add(r.strip()[6:].strip().lower())
        if not 5 <= len(lijst) <= 8: fouten.append(f"{les}: {len(lijst)} vragen, afspraak is vijf tot acht")
        for v in lijst:
            if v["scherm"] not in sch: fouten.append(f"{v['id']}: scherm {v['scherm']} bestaat niet"); continue
            if v["doel"] not in doelen: fouten.append(f"{v['id']}: doel {v['doel']} hoort niet bij {les}")
            v["bron"] = f"{sch[v['scherm']]['source_ids']}: {sch[v['scherm']]['source_location']}"
            if v["vraag"].lower() in kennischecks: fouten.append(f"{v['id']}: zelfde vraag als een kennischeck")
            if v["goed"] and v["fout"] and woorden(v["goed"]) > 1.3 * max(woorden(f) for f in v["fout"]):
                fouten.append(f"{v['id']}: goed antwoord {woorden(v['goed'])} woorden, langste afleider {max(woorden(f) for f in v['fout'])}")
    # plaats van het goede antwoord: per aantal opties een gelijk verdeelde, vaste reeks
    rnd = random.Random(20261121)
    reeksen = {}
    for v in vragen:
        n = len(v["fout"]) + 1
        if not reeksen.get(n):
            r = list(range(n)) * 50; rnd.shuffle(r); reeksen[n] = r
        plek = reeksen[n].pop()
        opties = list(v["fout"]); opties.insert(plek, v["goed"])
        v["opties"] = opties; v["plek"] = plek
    for f in fouten: print("FOUT", f)
    os.makedirs(x.uit, exist_ok=True)
    velden = ["vraag_id", "les", "leerdoel", "lesscherm", "niveau", "vraag"] + [f"optie_{l}" for l in "ABCD"] + ["goed", "feedback_goed", "feedback_fout", "bron", "status"]
    with open(os.path.join(x.uit, f"{cursus}-lestoetsen.csv"), "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, lineterminator="\n"); w.writerow(velden)
        for v in vragen:
            ops = v["opties"] + [""] * (4 - len(v["opties"]))
            w.writerow([v["id"], v["les"], v["doel"], v["scherm"], v["niveau"], v["vraag"]] + ops[:4] + [LETTERS[v["plek"]], v["fb_goed"], v["fb_fout"], v.get("bron", ""), "concept, medische review open"])
    xml = ['<?xml version="1.0" encoding="UTF-8"?>', "<quiz>"]
    for les, lijst in per_les.items():
        xml += ['  <question type="category">', f"    <category><text>$course$/top/Lestoetsen/{les}</text></category>", "  </question>"]
        for v in lijst:
            xml += ['  <question type="multichoice">',
                    f"    <name><text>{escape(v['id'])}</text></name>",
                    f'    <questiontext format="html"><text><![CDATA[<p>{v["vraag"]}</p>]]></text></questiontext>',
                    f'    <generalfeedback format="html"><text></text></generalfeedback>',
                    "    <defaultgrade>1</defaultgrade><penalty>0</penalty><hidden>0</hidden>",
                    f"    <idnumber>{escape(v['id'])}</idnumber>",
                    "    <single>true</single><shuffleanswers>false</shuffleanswers><answernumbering>ABCD</answernumbering>",
                    f'    <correctfeedback format="html"><text><![CDATA[<p>{v["fb_goed"]}</p>]]></text></correctfeedback>',
                    '    <partiallycorrectfeedback format="html"><text></text></partiallycorrectfeedback>',
                    f'    <incorrectfeedback format="html"><text><![CDATA[<p>{v["fb_fout"]}</p>]]></text></incorrectfeedback>']
            for i, o in enumerate(v["opties"]):
                xml += [f'    <answer fraction="{100 if i == v["plek"] else 0}" format="html"><text><![CDATA[<p>{o}</p>]]></text><feedback format="html"><text></text></feedback></answer>']
            xml += [f"    <tags><tag><text>{v['doel']}</text></tag><tag><text>{v['niveau']}</text></tag></tags>", "  </question>"]
    xml.append("</quiz>")
    open(os.path.join(x.uit, f"{cursus}-lestoetsen-moodle.xml"), "w", encoding="utf-8").write("\n".join(xml) + "\n")
    plekken = collections.Counter(LETTERS[v["plek"]] for v in vragen)
    print(f"{cursus}: {len(vragen)} vragen in {len(per_les)} lessen; plaats goed antwoord {dict(sorted(plekken.items()))}; {len(fouten)} fouten")
    if x.overzicht:
        maak_overzicht(x.overzicht, cursus, per_les)
    sys.exit(1 if fouten else 0)


def maak_overzicht(pad, cursus, per_les):
    """Schrijf of vervang het deel van één cursus in het overzicht; zonder vragen en antwoorden."""
    regels = [f"<!-- {cursus} begin -->", f"### {cursus}", "",
              "| Les | Vragen | Kennis / toepassing | Leerdoelen in de toets | Leerdoelen van de les zonder toetsvraag |", "| --- | --- | --- | --- | --- |"]
    for les, lijst in per_les.items():
        sch = schermen(les)
        doelen = sorted({d.strip() for s in sch.values() for d in s["learning_goal_ids"].replace(",", ";").split(";") if d.strip()})
        getoetst = sorted({v["doel"] for v in lijst})
        k = sum(v["niveau"] == "kennis" for v in lijst)
        regels.append(f"| {les} | {len(lijst)} | {k} / {len(lijst) - k} | {', '.join(getoetst)} | {', '.join(d for d in doelen if d not in getoetst) or 'geen'} |")
    regels.append(f"| Totaal | {sum(len(l) for l in per_les.values())} | | | |")
    regels.append(f"<!-- {cursus} einde -->")
    tekst = open(pad, encoding="utf-8").read() if os.path.exists(pad) else ""
    blok = "\n".join(regels)
    patroon = re.compile(rf"<!-- {cursus} begin -->.*?<!-- {cursus} einde -->", re.S)
    tekst = patroon.sub(lambda m: blok, tekst) if patroon.search(tekst) else tekst.rstrip() + "\n\n" + blok + "\n"
    open(pad, "w", encoding="utf-8").write(tekst)


if __name__ == "__main__":
    main()
