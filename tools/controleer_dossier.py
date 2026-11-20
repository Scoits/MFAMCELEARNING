"""Consistentiecontrole van het MFA/MC-dossier.

Gebruik: python3 tools/controleer_dossier.py

Controleert uitsluitend de samenhang van de bestanden in deze repository:
matrices, bronregister, schermreviews en Markdown-masters. Een geslaagde
controle zegt niets over medische juistheid, bronactualiteit of technische
werking in Articulate of Moodle.
"""

import csv
import glob
import os
import re
import sys
from collections import Counter, defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STCW_KOLOMMEN = [
    "stcw_competentie_kolom1",
    "kennis_vaardigheden_kolom2",
    "bewijs_kolom3",
    "beoordelingscriteria_kolom4",
]
LESSEN = {
    "MFA": [f"MFA-L0{i}" for i in range(0, 9)],
    "MC": [f"MC-L0{i}" for i in range(0, 10)],
}
TOEGESTANE_REVIEWSTATUS = {
    "concept",
    "broncontrole_nodig",
    "medische_review_nodig",
    "medisch_goedgekeurd",
    "technisch_getest",
}

fouten = []
meldingen = []


def lees(pad):
    with open(os.path.join(ROOT, pad), encoding="utf-8", newline="") as f:
        return list(csv.DictReader(f))


def kop(pad):
    with open(os.path.join(ROOT, pad), encoding="utf-8", newline="") as f:
        return next(csv.reader(f))


bronnen = {r["bron_id"] for r in lees("sources/register.csv")}
doelen = {}

for cursus, pad in (("MFA", "curriculum/mfa-dekkingsmatrix.csv"), ("MC", "curriculum/mc-dekkingsmatrix.csv")):
    rijen = lees(pad)
    if len(kop(pad)) != 28:
        fouten.append(f"{pad}: {len(kop(pad))} kolommen in plaats van 28")
    dubbel = [i for i, n in Counter(r["id"] for r in rijen).items() if n > 1]
    if dubbel:
        fouten.append(f"{pad}: dubbele ID's {dubbel}")
    per_module = defaultdict(list)
    for r in rijen:
        doelen[r["id"]] = r
        per_module[r["module_id"]].append(r["id"])
        for k in STCW_KOLOMMEN:
            if not r[k].strip():
                fouten.append(f"{r['id']}: lege STCW-kolom {k}")
        for b in filter(None, r["bron_ids"].split(";")):
            if b not in bronnen:
                fouten.append(f"{r['id']}: bron {b} staat niet in het register")
        if r["module_id"] not in LESSEN[cursus]:
            fouten.append(f"{r['id']}: onbekende module {r['module_id']}")
        if r["medische_review"] == "medisch_goedgekeurd":
            meldingen.append(f"{r['id']}: status medisch_goedgekeurd; controleer reviewregistratie")
    leeg = [m for m in LESSEN[cursus] if m not in per_module]
    meldingen.append(f"{cursus}: {len(rijen)} doelen; modules zonder leerdoel: {', '.join(leeg) or 'geen'}")

schema = kop("templates/schermreview.csv")
for pad in sorted(glob.glob(os.path.join(ROOT, "reviews", "*-schermreview.csv"))):
    rel = os.path.relpath(pad, ROOT)
    if kop(rel) != schema:
        fouten.append(f"{rel}: kolommen wijken af van templates/schermreview.csv")
        continue
    rijen = lees(rel)
    ids = [r["screen_id"] for r in rijen]
    if len(ids) != len(set(ids)):
        fouten.append(f"{rel}: dubbele scherm-ID's")
    minuten = 0.0
    for r in rijen:
        if not r["screen_id"].startswith(r["lesson_id"] + "-S"):
            fouten.append(f"{r['screen_id']}: past niet bij les {r['lesson_id']}")
        for d in filter(None, r["learning_goal_ids"].split(";")):
            if d not in doelen:
                fouten.append(f"{r['screen_id']}: leerdoel {d} bestaat niet")
        for b in filter(None, r["source_ids"].split(";")):
            if b not in bronnen:
                fouten.append(f"{r['screen_id']}: bron {b} staat niet in het register")
        if r["review_status"] not in TOEGESTANE_REVIEWSTATUS:
            fouten.append(f"{r['screen_id']}: onbekende reviewstatus {r['review_status']}")
        if r["review_status"] == "medisch_goedgekeurd" and not r["review_date"]:
            fouten.append(f"{r['screen_id']}: goedgekeurd zonder reviewdatum")
        for veld in ("learner_text", "voice_over", "interaction", "feedback_correct", "feedback_incorrect"):
            if not r[veld].strip():
                fouten.append(f"{r['screen_id']}: leeg veld {veld}; vul in of zet niet van toepassing")
        try:
            minuten += float(r["minutes_estimate"])
        except ValueError:
            fouten.append(f"{r['screen_id']}: minuten niet numeriek")
    les = rijen[0]["lesson_id"] if rijen else "?"
    masters = glob.glob(os.path.join(ROOT, "content", "nl", les + "-*.md"))
    if len(masters) != 1:
        fouten.append(f"{rel}: geen eenduidige Markdown-master voor {les}")
    else:
        tekst = open(masters[0], encoding="utf-8").read()
        for s in ids:
            if not re.search(r"^## " + re.escape(s) + r"\b", tekst, re.M):
                fouten.append(f"{s}: geen kop in {os.path.relpath(masters[0], ROOT)}")
    meldingen.append(f"{rel}: {len(rijen)} schermen, {minuten:g} minuten")

for m in meldingen:
    print("INFO ", m)
for f in fouten:
    print("FOUT ", f)
print(f"{len(fouten)} fouten")
sys.exit(1 if fouten else 0)
