"""Maak curriculum/leerdoel-gedrag.csv: per leerdoel het gedrag en waar het wordt beoordeeld.

Volgens de productiehandleiding van 21 november 2026 (action mapping) wordt
ieder leerdoel beschreven als herkennen, beslissen of doen. Uitleggen staat
apart als het doel alleen kennis vraagt. Het script leidt dit af uit
concreet_leerdoel en toetsbewijs_drtc in de dekkingsmatrices. Het resultaat
is een voorstel: controleer en corrigeer de kolom gedrag_hoofd met de hand en
zet dan status op vastgesteld.
"""
import csv
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PATRONEN = [
    ("doen", r"demonstr|toepass|uitvoer|voer\b|voer .* uit|aanbreng|aanleg|leg .* aan|reanim|beadem|"
             r"verplaats|immobilis|injecte|hecht|katheter|meet|meten|gereedma|klaarma|bedien|gebruik|zorg voor|verzorg|"
             r"stop|stelp|vul .* in|invul|noteer|registreer|rapporteer|communiceer|meld"),
    ("beslissen", r"beslis|kies|keuze|prioriteit|prioriter|beoordeel|inschat|bepaal|organiseer|organiseren|"
                  r"beargumenteer|afweg|wanneer .* inschakel|inschakel|verifi|overleg"),
    ("herkennen", r"herken|onderscheid|signal|verschijnsel|aanwijzing|waarneem|waarnem|observeer|opmerk"),
]


def gedrag(tekst):
    t = tekst.lower()
    gevonden = [naam for naam, pat in PATRONEN if re.search(pat, t)]
    return gevonden or ["uitleggen"]


def beoordeling(bewijs, alle):
    """Praktijk volgt uit toetsbewijs_drtc; online kennistoets is een voorstel uit het
    ontwerpkader voor doelen die herkennen, beslissen of uitleggen vragen."""
    b = bewijs.lower()
    praktijk = bool(re.search(r"individuele|observatie|demonstr|uitvoering|station|scenario|lotus|"
                              r"trainingsmiddel|rollenspel|mondeling|keuze|overdracht|registratie|werkstuk|formulier", b))
    online = any(g in alle for g in ("herkennen", "beslissen", "uitleggen"))
    delen = []
    if online:
        delen.append("online kennistoets (voorstel)")
    if praktijk:
        delen.append("praktijkdag, individueel")
    return " en ".join(delen) or "nog te bepalen"


def main():
    uitpad = os.path.join(ROOT, "curriculum", "leerdoel-gedrag.csv")
    n = 0
    with open(uitpad, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, lineterminator="\n")
        w.writerow(["leerdoel_id", "cursus", "concreet_leerdoel", "gedrag_hoofd", "gedrag_alle",
                    "beoordeeld", "online_voorbereiding", "status"])
        for naam in ("mfa-dekkingsmatrix.csv", "mc-dekkingsmatrix.csv"):
            with open(os.path.join(ROOT, "curriculum", naam), encoding="utf-8") as g:
                for r in csv.DictReader(g):
                    alle = gedrag(r["concreet_leerdoel"])
                    w.writerow([r["id"], r["cursus"], r["concreet_leerdoel"], alle[0], "; ".join(alle),
                                beoordeling(r["toetsbewijs_drtc"], alle), r["online_activiteit"],
                                "voorstel; automatisch afgeleid, nog te controleren"])
                    n += 1
    print(uitpad, n)


if __name__ == "__main__":
    main()
