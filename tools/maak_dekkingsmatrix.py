"""Maak de controleerbare dekkingsmatrix per opleiding (afspraak 21 november 2026).

Per leerdoel: vereiste competentie, STCW-kennisgebied, bron, leerdoel-ID, les en schermen,
leeractiviteiten, geplande minuten (strenge regel), online beoordeling (formatief en de
categorie van de eindtoets), praktijkbeoordeling, medische vrijgave en gesignaleerde gaten.

Bronnen: curriculum/<c>-dekkingsmatrix.csv, curriculum/leerdoel-gedrag.csv,
reviews/*-schermreview.csv, docs/toetsmatrijs-v001.md en tools/studietijd.py.
Uitvoer: curriculum/<c>-dekking-controle.csv en docs/dekkingsmatrix-<c>.md.
Gebruik: python3 tools/maak_dekkingsmatrix.py
"""
import collections
import csv
import datetime
import glob
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools"))
import studietijd  # noqa: E402

KOLOMMEN = ["leerdoel_id", "norm", "competentie", "stcw_kennisgebied", "stcw_vindplaats", "bronnen", "bron_vindplaats", "leerdoel", "gedrag",
            "les", "schermen", "activiteiten", "kennischecks", "geplande_minuten", "eindtoets_categorie",
            "praktijkbeoordeling", "medische_vrijgave", "lesversie", "gaten"]


def soort(x):
    p = x["platform_block"].lower()
    i = x["interaction"]
    s = []
    if "moodle quiz" in p:
        return ["eindtoets"]
    if "storyline" in p or "code block" in p:
        s.append("vertakt scenario")
    if "scenario-blok" in p:
        s.append("casus")
    if re.search(r"sorteer", p) or re.search(r"^I\d\d-\d\d:? ?(sorteer|tikopdracht)", i, re.M | re.I):
        s.append("sorteeroefening")
    if re.search(r"gelabelde|hotspot|tikvlak", p):
        s.append("gelabelde afbeelding")
    if re.search(r"^Vraag:|^(MC-)?K\d\d-\d\d: ", i, re.M):
        s.append("kennischeck")
    return s or ["uitleg"]


def kc_ids(x):
    return sorted(set(re.findall(r"^((?:MC-)?K\d\d-\d\d)[: ]", x["interaction"], re.M)))


def toetscategorieen(cursus):
    t = open(os.path.join(ROOT, "docs", "toetsmatrijs-v001.md"), encoding="utf-8").read()
    uit = {}
    for regel in t.splitlines():
        m = re.match(rf"\| ({cursus}-T\d+) [^|]*\| ([^|]+)\|", regel)
        if not m:
            continue
        cat, doelen = m.group(1), m.group(2).strip()
        if cursus == "MFA":
            r = re.match(r"MFA-(\d\d)\.(\d\d) (tot en met|en) (\d\d)\.(\d\d)", doelen)
            a, b, c = r.group(1), int(r.group(2)), int(r.group(5))
            for n in range(b, c + 1):
                uit[f"MFA-{a}.{n:02d}"] = cat
        else:
            nums = []
            r = re.match(r"MC-(\d\d) tot en met MC-(\d\d)", doelen)
            if r:
                nums = range(int(r.group(1)), int(r.group(2)) + 1)
            else:
                nums = [int(n) for n in re.findall(r"\d\d", doelen)]
            for n in nums:
                uit[f"MC-{n:02d}"] = cat
    return uit


def versie_script():
    try:
        h = subprocess.run(["git", "log", "-1", "--format=%h %cs", "--", "tools/studietijd.py"], cwd=ROOT,
                           capture_output=True, text=True).stdout.strip()
        return h or "niet vastgelegd"
    except OSError:
        return "niet vastgelegd"


def main():
    gedrag = {r["leerdoel_id"]: r for r in csv.DictReader(open(os.path.join(ROOT, "curriculum", "leerdoel-gedrag.csv"), encoding="utf-8"))}
    schermen = collections.defaultdict(list)
    lesversie = {}
    for f in sorted(glob.glob(os.path.join(ROOT, "reviews", "*-schermreview.csv"))):
        for x in csv.DictReader(open(f, encoding="utf-8")):
            lesversie[x["lesson_id"]] = x["version"]
            doelen = [d for d in x["learning_goal_ids"].split(";") if d.strip()]
            for d in doelen:
                schermen[d.strip()].append((x, studietijd.scherm(x) / len(doelen)))
    sv = versie_script()
    vandaag = datetime.date.today().isoformat()
    for c in ("MFA", "MC"):
        matrix = list(csv.DictReader(open(os.path.join(ROOT, "curriculum", f"{c.lower()}-dekkingsmatrix.csv"), encoding="utf-8")))
        cats = toetscategorieen(c)
        rijen = []
        for m in matrix:
            d = m["id"]
            sch = schermen.get(d, [])
            act = collections.Counter(s for x, _ in sch for s in soort(x))
            kcs = sorted({k for x, _ in sch for k in kc_ids(x)})
            minuten = sum(mm for _, mm in sch)
            cat = cats.get(d) or cats.get(m["parent_id"]) or ""
            praktijk = m["toetsbewijs_drtc"] or m["praktijkactiviteit"]
            gaten = []
            if not sch:
                gaten.append("geen scherm in een les")
            elif set(act) <= {"uitleg"}:
                gaten.append("alleen uitleg, geen activiteit")
            if sch and not kcs and not (set(act) & {"casus", "vertakt scenario", "sorteeroefening", "gelabelde afbeelding"}):
                gaten.append("geen online oefening met feedback")
            if not cat:
                gaten.append("geen eindtoetscategorie")
            if not praktijk.strip():
                gaten.append("geen praktijkbeoordeling")
            lessen = sorted({x["lesson_id"] for x, _ in sch}) or [m["module_id"]]
            rijen.append(dict(
                leerdoel_id=d, norm=f"STCW {m['stcw_tabel']}; IMO {m['imo_model_course']} {m['model_onderdeel']}", bron_vindplaats=m["bronvindplaats"], lesversie="; ".join(lesversie.get(l, "?") for l in lessen), competentie=m["stcw_competentie_kolom1"], stcw_kennisgebied=m["kennis_vaardigheden_kolom2"],
                stcw_vindplaats=m["stcw_vindplaats"], bronnen=m["bron_ids"], leerdoel=m["concreet_leerdoel"],
                gedrag=gedrag.get(d, {}).get("gedrag_hoofd", ""),
                les="; ".join(f"{l} v{lesversie.get(l, '?')}" for l in lessen),
                schermen="; ".join(x["screen_id"] for x, _ in sch),
                activiteiten="; ".join(f"{k} {v}" for k, v in sorted(act.items())),
                kennischecks="; ".join(kcs), geplande_minuten=f"{minuten:.1f}",
                eindtoets_categorie=cat, praktijkbeoordeling=praktijk,
                medische_vrijgave="concept; niet medisch vrijgegeven", gaten="; ".join(gaten)))
        pad = os.path.join(ROOT, "curriculum", f"{c.lower()}-dekking-controle.csv")
        with open(pad, "w", encoding="utf-8", newline="") as f:
            w = csv.DictWriter(f, fieldnames=KOLOMMEN, lineterminator="\n"); w.writeheader(); w.writerows(rijen)
        schrijf_md(c, rijen, sv, vandaag, lesversie)
        print(c, len(rijen), "leerdoelen;", sum(1 for r in rijen if r["gaten"]), "met een gat")


def schrijf_md(c, rijen, sv, vandaag, lesversie):
    tel = collections.Counter(g for r in rijen for g in r["gaten"].split("; ") if g)
    tot = sum(float(r["geplande_minuten"]) for r in rijen)
    o = [f"# Dekkingsmatrix {c}", "",
         f"Gemaakt op {vandaag} met `tools/maak_dekkingsmatrix.py`. Rekenscript `tools/studietijd.py`, versie {sv}. "
         "Lesversies staan per regel in de kolom Les. De volledige matrix staat in "
         f"[{c.lower()}-dekking-controle.csv](../curriculum/{c.lower()}-dekking-controle.csv); dit document is het overzicht.", "",
         "De matrix laat per leerdoel zien welke STCW-competentie en welk kennisgebied het afdekt, uit welke bron het komt, in welke les en "
         "met welke activiteit het wordt geleerd, hoe het online en op de praktijkdag wordt beoordeeld, en of Mathanje het heeft vrijgegeven. "
         "De minuten zijn geplande minuten volgens de strenge regel: de minuten van een scherm zijn gelijk verdeeld over de leerdoelen van dat scherm. "
         "Het zijn geen gemeten minuten.", "",
         "## Stand", "",
         f"- {len(rijen)} leerdoelen, samen {tot:.0f} geplande minuten in de lessen. Inleidende en afsluitende schermen zonder leerdoel tellen hier niet mee, wel in `tools/studietijd.py`.",
         "- Medische vrijgave: geen enkel leerdoel is vrijgegeven. Mathanje keurt per lesversie.", ""]
    if tel:
        o += ["Gesignaleerde gaten:", ""] + [f"- {k}: {v} leerdoelen" for k, v in tel.most_common()] + [""]
    o += ["## Per leerdoel", "", "| Leerdoel | Kennisgebied | Les en schermen | Activiteiten | Minuten | Eindtoets | Gat |", "| --- | --- | --- | --- | --- | --- | --- |"]
    for r in rijen:
        o.append(f"| {r['leerdoel_id']} | {r['stcw_kennisgebied']} | {r['les']}: {len(r['schermen'].split('; ')) if r['schermen'] else 0} schermen | "
                 f"{r['activiteiten'] or 'geen'} | {r['geplande_minuten']} | {r['eindtoets_categorie'] or 'geen'} | {r['gaten'] or 'geen'} |")
    o.append("")
    if c == "MC":
        o += ["## Zelfstandig en gecombineerd volgen", "",
              "MC bouwt voort op de kennis van MFA. Bij losse MC-deelname controleert DRTC de MFA-instroom; MC-L00 en leerdoel MC-32 vormen de brug "
              "(zie [ontwerpkader](ontwerpkader.md), Zelfstandige en gecombineerde routes). Wie MFA en MC samen volgt, doet beide e-learnings; "
              "MC-L00 is dan herhaling. De MFA-doelen tellen niet mee in de minuten van MC.", ""]
    else:
        o += ["## Zelfstandig en gecombineerd volgen", "",
              "MFA is zelfstandig volledig: alle MFA-leerdoelen staan in de MFA-lessen. Bij gecombineerd volgen komt MC er los bij; "
              "MFA-minuten tellen niet mee voor de 480 minuten van MC.", ""]
    open(os.path.join(ROOT, "docs", f"dekkingsmatrix-{c.lower()}.md"), "w", encoding="utf-8").write("\n".join(o))


if __name__ == "__main__":
    main()
