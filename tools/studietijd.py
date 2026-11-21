"""Bereken de studietijd per les met de strenge rekenregel (afspraak 21 november 2026).

- cursistentekst: 150 woorden per minuut;
- kennischeck: 1 minuut per vraag;
- casus als Rise Scenario-blok en vertakt scenario (HTML-pakket in een Code Block, terugval Storyline):
  de tijd van het kortste volledige pad, dus de tekst van iedere scène met de juiste keuze en haar
  feedback (150 woorden per minuut) plus 1 minuut per beslismoment, net als een kennischeck.
  Omwegen en extra paden tellen niet mee (afspraken, hoofdstuk 11);
- sorteeroefening, gelabelde afbeelding of tikopdracht: 2 minuten, want Rise controleert dat de cursist ze afrondt;
- video: de echte duur; die is nog niet gemeten en telt daarom voorlopig niet mee;
- doe-opdracht zonder controle in Rise: 0 minuten;
- de online eindtoets in Moodle telt niet mee (besluit Martijn, 21 november 2026); dat scherm telt voor 0 minuten.

Gebruik: python3 tools/studietijd.py [--md]
"""
import csv
import glob
import math
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def pad_scenarioblok(inter):
    """Kortste volledige pad van een Rise Scenario-blok: scènes, juiste keuzes en hun feedback."""
    woorden, besluiten = 0, 0
    for regel in inter.splitlines():
        if re.match(r"^(Scène \d+|Einde):", regel):
            woorden += len(regel.split())
            besluiten += regel.startswith("Scène")
        elif re.match(r"^I\d\d-\d\d-\d+[A-D]: ", regel) and "(juist)" in regel:
            woorden += len(regel.split())
    return woorden / 150 + besluiten


def pad_script(inter):
    """Kortste volledige pad van een vertakt scenario uit het script in articulate/storyline/."""
    m = re.search(r"^Script: (\S+\.md)", inter, re.M)
    pad = os.path.join(ROOT, m.group(1)) if m else ""
    if not pad or not os.path.exists(pad):
        return 0  # zonder script geen onderbouwing
    tekst = open(pad, encoding="utf-8").read()
    woorden, besluiten = 0, 0
    for kop, inhoud in re.findall(r"^### (?:Slide|Scherm) (\S+)[^\n]*\n(.*?)(?=^##)", tekst + "\n##", re.M | re.S):
        if not kop.isdigit() or "(alleen" in inhoud.split("\n", 1)[0]:
            continue
        rijen = [r for r in inhoud.splitlines() if r.startswith("| ") and not r.startswith(("| Keuze", "| ---"))]
        juist = [r for r in rijen if r.rstrip(" |").endswith(("1", "punt"))][:1]
        rest = [r for r in inhoud.splitlines() if not r.startswith("|")]
        woorden += len(" ".join(rest + juist).split())
        besluiten += any(r.startswith("| Keuze") for r in inhoud.splitlines())
    return woorden / 150 + besluiten


def scherm(x):
    p = x["platform_block"].lower()
    if "moodle quiz" in p:
        return 0  # eindtoets telt niet mee voor de studietijd
    inter = x["interaction"]
    w = len(x["learner_text"].split())
    m = w / 150
    # kennischecks: een regel "Vraag:", of in de oudere vorm alleen de kop "K07-01: enkele keuze ..."
    vragen = len(re.findall(r"^Vraag:", inter, re.M))
    if not vragen:
        vragen = len(set(re.findall(r"^(K\d\d-\d\d): ", inter, re.M)))
    m += vragen
    if "scenario-blok" in p:
        m += pad_scenarioblok(inter)
    if "storyline" in p or "code block" in p:
        m += pad_script(inter)
    if re.search(r"gelabelde|hotspot|tikvlak|sorteer", p) or re.search(r"^I\d\d-\d\d: (tikopdracht|sorteer)", inter, re.M):
        m += 2
    return m


def rijk_per_les():
    """Minuten rijke, vertakte interactie (codepakket of Storyline), kortste pad; afspraken hoofdstuk 4."""
    uit = {}
    for f in sorted(glob.glob(os.path.join(ROOT, "reviews", "*-schermreview.csv"))):
        for x in csv.DictReader(open(f, encoding="utf-8")):
            p = x["platform_block"].lower()
            if "storyline" in p or "code block" in p:
                uit[x["lesson_id"]] = uit.get(x["lesson_id"], 0) + scherm(x)
    return uit


NORM_RIJK = {"MFA": 96, "MC": 192}  # 20 procent van 480 bij MFA, 40 procent bij MC


def per_les():
    uit = {}
    for f in sorted(glob.glob(os.path.join(ROOT, "reviews", "*-schermreview.csv"))):
        rijen = list(csv.DictReader(open(f, encoding="utf-8")))
        if not rijen:
            continue
        les = rijen[0]["lesson_id"]
        uit[les] = (math.floor(sum(scherm(x) for x in rijen) + 0.5),
                    sum(len(x["learner_text"].split()) for x in rijen), len(rijen))
    return uit


def main():
    d = per_les()
    md = "--md" in sys.argv
    if md:
        print("| Les | Schermen | Woorden | Minuten (strenge regel) |")
        print("| --- | --- | --- | --- |")
    for les, (m, w, n) in d.items():
        print(f"| {les} | {n} | {w} | {m} |" if md else f"{les} {n} {w} {m}")
    for c in ("MFA", "MC"):
        tot = sum(m for les, (m, _, _) in d.items() if les.startswith(c + "-"))
        print(f"{c} totaal: {tot} minuten van de minimaal 480; tekort {max(0, 480 - tot)}")
        rijk = round(sum(m for les, m in rijk_per_les().items() if les.startswith(c + "-")))
        print(f"{c} rijke interactie: {rijk} minuten van de minimaal {NORM_RIJK[c]}")


if __name__ == "__main__":
    main()
