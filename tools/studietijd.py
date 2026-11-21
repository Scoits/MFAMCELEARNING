"""Bereken de studietijd per les met de strenge rekenregel (afspraak 21 november 2026).

- cursistentekst: 150 woorden per minuut;
- kennischeck: 1 minuut per vraag;
- casus als Rise Scenario-blok: 7 minuten;
- vertakt scenario (HTML-pakket in een Code Block, terugval Storyline): 10 minuten, na de proef te meten;
- sorteeroefening, gelabelde afbeelding of tikopdracht: 2 minuten, want Rise controleert dat de cursist ze afrondt;
- video: de echte duur; die is nog niet gemeten en telt daarom voorlopig niet mee;
- doe-opdracht zonder controle in Rise: 0 minuten;
- de online eindtoets in Moodle telt niet mee (open punt).

Gebruik: python3 tools/studietijd.py [--md]
"""
import csv
import glob
import math
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def scherm(x):
    p = x["platform_block"].lower()
    inter = x["interaction"]
    w = len(x["learner_text"].split())
    m = w / 150
    # kennischecks: een regel "Vraag:", of in de oudere vorm alleen de kop "K07-01: enkele keuze ..."
    vragen = len(re.findall(r"^Vraag:", inter, re.M))
    if not vragen:
        vragen = len(set(re.findall(r"^(K\d\d-\d\d): ", inter, re.M)))
    m += vragen
    if "scenario-blok" in p:
        m += 7
    if "storyline" in p or "code block" in p:
        m += 10
    if re.search(r"gelabelde|hotspot|tikvlak|sorteer", p) or re.search(r"^I\d\d-\d\d: (tikopdracht|sorteer)", inter, re.M):
        m += 2
    return m


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


if __name__ == "__main__":
    main()
