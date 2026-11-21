"""Controleer de antwoordopties van alle kennischecks op twee hints die toetsslimheid belonen.

1. Het juiste antwoord is duidelijk het langste (meer dan 1,3 keer de langste afleider in woorden).
2. De plek van het juiste antwoord is ongelijk verdeeld over A, B en C.

De plek is de weergavevolgorde: de volgorde van de optieregels in de schermreview. De
antwoord-ID's blijven aan hun tekst gekoppeld; een ID als K06-01-B kan dus op plek A staan.

Gebruik: python3 tools/controleer_antwoordopties.py [--details]
"""
import csv
import glob
import os
import sys
from collections import Counter

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from maak_importversie import vragen_van  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GRENS = 1.3


def main():
    details = "--details" in sys.argv
    totaal, langste, plek = 0, 0, Counter()
    for pad in sorted(glob.glob(os.path.join(ROOT, "reviews", "*-schermreview.csv"))):
        for s in csv.DictReader(open(pad, encoding="utf-8")):
            for vid, _, opties in vragen_van(s):
                if len(opties) < 2 or sum(o[2] for o in opties) != 1:
                    continue
                totaal += 1
                n = [len(o[1].split()) for o in opties]
                j = next(i for i, o in enumerate(opties) if o[2])
                plek["ABCDEFGH"[j]] += 1
                rest = max(x for i, x in enumerate(n) if i != j)
                if n[j] > GRENS * rest:
                    langste += 1
                    if details:
                        print(f"{s['screen_id']} {vid}: juist {n[j]} woorden, langste afleider {rest}")
    print(f"{totaal} vragen; juiste antwoord duidelijk het langste: {langste}; plek: "
          + ", ".join(f"{k} {v}" for k, v in sorted(plek.items())))
    return 0


if __name__ == "__main__":
    sys.exit(main())
