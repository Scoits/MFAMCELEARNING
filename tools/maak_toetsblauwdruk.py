"""Maak de toetsblauwdruk voor de eindtoets van MFA en MC (afspraken 2.0, stap 3 van de productievolgorde).

Per leerdoel: toetscategorie, niveau (kennis of toepassing), of het online toetsbaar is,
het minimum aantal goedgekeurde items in de vragenbank en of het een kandidaat-kritiek onderwerp is.
Per categorie: items per afname, verdeling over kennis en toepassing, en de minimale omvang van de bank.

Bronnen: docs/toetsmatrijs-v001.md, curriculum/<c>-dekkingsmatrix.csv en curriculum/leerdoel-gedrag.csv.
Uitvoer: curriculum/toetsblauwdruk.csv en docs/toetsblauwdruk-v001.md. Er staan geen toetsvragen in.
Gebruik: python3 tools/maak_toetsblauwdruk.py
"""
import collections
import csv
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools"))
from maak_dekkingsmatrix import toetscategorieen  # noqa: E402

BANKFACTOR = 3  # voorstel uit de toetsmatrijs: drie goedgekeurde items per getrokken item


def niveau(gedrag):
    if gedrag in ("beslissen", "doen"):
        return "toepassing"
    return "kennis"


def items_per_categorie(cursus):
    t = open(os.path.join(ROOT, "docs", "toetsmatrijs-v001.md"), encoding="utf-8").read()
    uit, kritiek = {}, {}
    for regel in t.splitlines():
        m = re.match(rf"\| ({cursus}-T\d+) ([^|]+)\| [^|]+\| (\d+) \|(.*)\|$", regel)
        if m:
            cellen = [c.strip() for c in m.group(4).split("|")]
            uit[m.group(1)] = (m.group(2).strip(), int(m.group(3)))
            kritiek[m.group(1)] = cellen[-1]
    return uit, kritiek


def main():
    gedrag = {r["leerdoel_id"]: r for r in csv.DictReader(open(os.path.join(ROOT, "curriculum", "leerdoel-gedrag.csv"), encoding="utf-8"))}
    rijen, o = [], ["# Toetsblauwdruk", "",
                    "Werkversie 0.1, 21 november 2026. Gemaakt met `tools/maak_toetsblauwdruk.py` uit de [toetsmatrijs](toetsmatrijs-v001.md), "
                    "de dekkingsmatrix en de [leerdoelen als gedrag](../curriculum/leerdoel-gedrag.csv). Alle getallen zijn voorstellen. "
                    "Volgens de afspraken komt de blauwdruk vóór de vragenbank. DRTC is eigenaar van de vragenbank, Mathanje keurt de vragen medisch goed, wij leveren voorstellen. "
                    "Echte vragen en antwoorden staan niet in deze openbare repository. De eindtoets telt niet mee voor de studietijd.", "",
                    "## Regels voor iedere vraag", "",
                    "- Een vraag-ID volgens het patroon `<cursus>-Q-<categorie>-<volgnummer>`, bijvoorbeeld MFA-Q-T09-003. Een ID wordt nooit hergebruikt; een herziene vraag krijgt een versienummer.",
                    "- Precies één leerdoel-ID, uit de dekkingsmatrix.",
                    "- Een bronverwijzing met editie en pagina of paragraaf voor iedere medische bewering, handeling, waarschuwing en dosering in vraag en antwoord.",
                    "- Een niveau: kennis (herkennen, uitleggen) of toepassing (beslissen in een situatie aan boord).",
                    "- De status: concept, medische review, medisch vrijgegeven, in gebruik, uit gebruik. Alleen medisch vrijgegeven vragen komen in een afname.",
                    "- Een vraag mag niet gelijk zijn aan een kennischeck uit de lessen.",
                    "- Een leerdoel dat alleen op de praktijkdag wordt beoordeeld (doen), krijgt online alleen kennis- of beslisvragen over de voorbereiding. De vraag vervangt de praktijkbeoordeling niet.", ""]
    for c in ("MFA", "MC"):
        cats = toetscategorieen(c)
        items, kritiek = items_per_categorie(c)
        matrix = list(csv.DictReader(open(os.path.join(ROOT, "curriculum", f"{c.lower()}-dekkingsmatrix.csv"), encoding="utf-8")))
        per_cat = collections.defaultdict(list)
        for m in matrix:
            d = m["id"]
            cat = cats.get(d) or cats.get(m["parent_id"]) or ""
            g = gedrag.get(d, {})
            beoordeeld = g.get("beoordeeld", "")
            online = "ja" if "online" in beoordeeld else ("voorbereiding" if "praktijk" in beoordeeld else "nog te bepalen")
            per_cat[cat].append((d, niveau(g.get("gedrag_hoofd", "")), online))
        o += [f"## {c}", "", "| Categorie | Leerdoelen | Items per afname | Kennis / toepassing | Minimaal in de bank | Kandidaat kritiek |", "| --- | --- | --- | --- | --- | --- |"]
        tot_items = tot_bank = 0
        for cat in sorted(items, key=lambda x: int(x.split("T")[-1])):
            naam, n = items[cat]
            doelen = per_cat.get(cat, [])
            toep = sum(1 for _, nv, _ in doelen if nv == "toepassing")
            n_toep = round(n * toep / len(doelen)) if doelen else 0
            if n >= 2 and doelen and 0 < toep < len(doelen):
                n_toep = min(max(n_toep, 1), n - 1)
            bank = max(n * BANKFACTOR, len(doelen))
            tot_items += n; tot_bank += bank
            o.append(f"| {cat} {naam} | {len(doelen)} | {n} | {n - n_toep} / {n_toep} | {bank} | {kritiek.get(cat, '')} |")
            per_doel = max(1, round(bank / len(doelen))) if doelen else 0
            for d, nv, online in doelen:
                rijen.append(dict(cursus=c, categorie=cat, leerdoel_id=d, niveau=nv, online_toetsbaar=online,
                                  minimaal_bankitems=per_doel, kandidaat_kritiek=kritiek.get(cat, "")))
        zonder = [m["id"] for m in matrix if not (cats.get(m["id"]) or cats.get(m["parent_id"]))]
        o += [f"| Totaal | {len(matrix)} | {tot_items} | | {tot_bank} | |", ""]
        if zonder:
            o += [f"Leerdoelen zonder toetscategorie: {', '.join(zonder)}.", ""]
    o += ["## Verdeling en trekking", "",
          "- Moodle trekt per categorie het afgesproken aantal items, en binnen een categorie verdeeld over kennis en toepassing zoals hierboven. Daarvoor krijgt iedere categorie twee subcategorieën in Moodle.",
          "- Iedere categorie heeft ten minste drie goedgekeurde items per getrokken item, zodat een herkansing andere vragen krijgt. Ieder leerdoel heeft ten minste één item in de bank.",
          "- Kritieke items wijst Mathanje aan binnen de kandidaat-kritieke categorieën. De regel bij een fout op een kritiek item stelt DRTC vast.",
          "- De slagingsgrens volgt uit de Angoff-procedure in de [toetsmatrijs](toetsmatrijs-v001.md), pas als de bank medisch is vrijgegeven.", "",
          "## Lestoetsen na iedere les", "",
          "- Naast de eindtoets komt er na iedere les een korte toets in Moodle (besluit Martijn 21 november, ILT IaT nr. 4, par. 6.3). Die toets volgt de prestaties per les en is niet de formele eindtoets.",
          "- De lestoetsen hebben een eigen vragenbank met eigen ID's (`MFA-LT<les>-<nr>` en `MC-LT<les>-<nr>`). Een lestoetsvraag komt niet in de eindtoetsbank en een eindtoetsitem niet in een lestoets. Beide zijn anders dan de kennischecks in de lessen.",
          "- Stand 21 november: MFA 58 vragen over 8 lessen, MC 67 vragen over 9 lessen, alles concept. Aantallen en dekking per les in [lestoetsen](lestoetsen-v001.md); de vragen zelf staan in de afgeschermde projectmap.",
          "- Of de lestoetsen meetellen voor de studietijd, is nog open. De eindtoets telt niet mee.", "",
          "## Open punten", "",
          "- De lengte (40 items MFA, 50 items MC) en de duur worden vastgesteld na een proefafname.",
          "- Waar de toets wordt afgenomen, staat open. Een optie is de toets onder toezicht aan het begin van de eerste praktijkdag; dat raakt de identiteitscontrole (open punt in de afspraken).",
          "- Infuus: zolang het scopebesluit open is, komen er geen items over in de afname.", ""]
    with open(os.path.join(ROOT, "curriculum", "toetsblauwdruk.csv"), "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(rijen[0]), lineterminator="\n"); w.writeheader(); w.writerows(rijen)
    open(os.path.join(ROOT, "docs", "toetsblauwdruk-v001.md"), "w", encoding="utf-8").write("\n".join(o))
    print(len(rijen), "leerdoelen in de blauwdruk")


if __name__ == "__main__":
    main()
