"""Statusoverzicht per les met de Definition of Done (afspraken, hoofdstuk 11).

Zet bovenaan iedere master in content/nl/ een regel "Status: ..." en schrijft docs/lesstatus.md.
De status van een les staat in STATUS hieronder; wijzig hem alleen als de stap echt is gezet.
Gebruik: python3 tools/maak_lesstatus.py
"""
import csv
import glob
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools"))
import studietijd  # noqa: E402

REEKS = ["concept", "bron gecontroleerd", "didactisch gereed", "medische review", "medisch vrijgegeven", "productie",
         "technisch getest in Moodle", "definitief"]
STATUS = {}  # les -> status; ontbreekt een les, dan is de status concept
# Per les wat van de Definition of Done al is gedaan; alleen invullen als het aantoonbaar is.
GEDAAN = {}  # les -> set van punten uit DOD


DOD = ["bron gecontroleerd", "studietijd berekend", "mobiel gecontroleerd", "taalredactie", "medische review",
       "media compleet", "navigatie en Continue getest", "in dekkingsmatrix"]


def media(les):
    reg = list(csv.DictReader(open(os.path.join(ROOT, "articulate", "beeldbank-register.csv"), encoding="utf-8")))
    eigen = [r for r in reg if r["asset_id"].startswith(les + "-")]
    klaar = [r for r in eigen if r["bestand_projectmap"].endswith((".png", ".jpg")) and "tijdelijk" not in r["bestand_projectmap"]]
    return len(klaar), len(eigen)


def main():
    sv = subprocess.run(["git", "log", "-1", "--format=%h %cs", "--", "tools/studietijd.py"], cwd=ROOT,
                        capture_output=True, text=True).stdout.strip() or "niet vastgelegd"
    tijden = studietijd.per_les()
    dekking = set()
    for c in ("mfa", "mc"):
        p = os.path.join(ROOT, "curriculum", f"{c}-dekking-controle.csv")
        if os.path.exists(p):
            for r in csv.DictReader(open(p, encoding="utf-8")):
                dekking.update(x.split(" v")[0] for x in r["les"].split("; "))
    rijen = []
    for f in sorted(glob.glob(os.path.join(ROOT, "content", "nl", "M*-*.md"))):
        les = re.match(r"(M[A-Z]+-L\d\d)", os.path.basename(f)).group(1)
        rev = list(csv.DictReader(open(os.path.join(ROOT, "reviews", f"{les}-schermreview.csv"), encoding="utf-8")))
        versie = rev[0]["version"] if rev else "?"
        status = STATUS.get(les, "concept")
        gedaan = set(GEDAAN.get(les, set())) | {"studietijd berekend"}
        if les in dekking:
            gedaan.add("in dekkingsmatrix")
        k, n = media(les)
        if k == n:
            gedaan.add("media compleet")
        regel = (f"Status: {status} (versie {versie}). Vaste reeks: {', '.join(REEKS)}. "
                 "Medisch nog niet vrijgegeven door Mathanje." if REEKS.index(status) < 4 else f"Status: {status} (versie {versie}).")
        t = open(f, encoding="utf-8").read()
        t = re.sub(r"\nStatus: [^\n]*\n", "\n", t, count=1)
        kop, rest = t.split("\n", 1)
        open(f, "w", encoding="utf-8").write(kop + "\n\n" + regel + "\n\n" + rest.lstrip("\n"))
        m = tijden.get(les, (0, 0, 0))[0]
        rijen.append((les, versie, status, m, f"{k} van {n}", [p for p in DOD if p not in gedaan]))
    o = ["# Status per les", "",
         f"Gemaakt met `tools/maak_lesstatus.py`. Minuten met de strenge regel, rekenscript `tools/studietijd.py` versie {sv}. "
         f"Vaste statusreeks: {', '.join(REEKS)}. Een les krijgt pas de volgende status als de stap echt is gezet.", "",
         "Definition of Done per les: " + "; ".join(DOD) + ".", "",
         "| Les | Versie | Status | Minuten (gepland) | Definitieve beelden | Nog te doen voor Klaar |", "| --- | --- | --- | --- | --- | --- |"]
    for les, v, s, m, beeld, open_ in rijen:
        o.append(f"| {les} | {v} | {s} | {m} | {beeld} | {'; '.join(open_) or 'niets'} |")
    o.append("")
    open(os.path.join(ROOT, "docs", "lesstatus.md"), "w", encoding="utf-8").write("\n".join(o))
    print(len(rijen), "lessen")


if __name__ == "__main__":
    main()
