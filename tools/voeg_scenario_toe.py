"""Zet een vertakt scenario (codepakket) als scherm in een les en maak de bouwlijst uit het script.

Gebruik:
  python3 tools/voeg_scenario_toe.py SCRIPT.md --les MC-L05 --titel "Scenario: ..." --doelen MC-14.01;MC-14.02 \
      --intro "Tekst voor de cursist" --bronnen S017;S062 --rvraag R124 --vraag "Tekst van de reviewvraag"

- maakt articulate/storyline/<ID>-bouwlijst.csv uit de schermen in het script;
- voegt een scherm toe aan reviews/<LES>-schermreview.csv en de master in content/nl/, vóór het laatste scherm;
- zet de reviewvraag in reviews/2026-11-20-reviewvragen-mathanje.md onder "Vertakte scenario's".
Een bestaand scherm met hetzelfde script wordt bijgewerkt en verplaatst, niet verdubbeld. Met --na SCHERM komt het na dat scherm.
"""
import argparse
import csv
import glob
import io
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FIELDS = "lesson_id,screen_id,learning_goal_ids,title,learner_text,voice_over,interaction,feedback_correct,feedback_incorrect,source_ids,source_location,media_ids,platform_block,minutes_estimate,review_status,medical_reviewer,mathanje_comment,version,review_date".split(",")
VO = "Niet van toepassing; geen voice-over geselecteerd in deze conceptversie"


def secties(tekst):
    return re.findall(r"^### (?:Slide|Scherm) (\S+) ([^\n]*)\n(.*?)(?=^###|^## )", tekst + "\n## ", re.M | re.S)


def bouwlijst(sid, tekst):
    rijen = [["slide_id", "titel", "type", "inhoud_kort", "keuzes", "volgende", "variabelen", "media"]]
    rijen.append([f"{sid}-00", "Situatie", "Informatieslide", "Situatie vooraf, zie script", "Start", "1", "Punten 0; Omweg 0; punt alleen bij eerste poging per scherm", "Eigen illustratie"])
    for kop, titel, inhoud in secties(tekst):
        regels = [r for r in inhoud.splitlines() if r.startswith("| ") and not r.startswith(("| Keuze", "| ---"))]
        if regels:
            keuzes = "; ".join(r.split("|")[1].strip()[:60] for r in regels)
            volg = "; ".join(f"{r.split('|')[1].strip()[:1]} naar {r.split('|')[2].strip()}" for r in regels)
            punt = [r.split("|")[1].strip()[:1] for r in regels if r.rstrip(" |").endswith("1")]
            rijen.append([f"{sid}-{kop.zfill(2)}", titel.strip(), "Keuzevraag", "Zie script", keuzes, volg, f"Punten +1 bij {', '.join(punt)} (eerste poging)", "Eigen illustratie"])
        elif kop == "Debriefing" or titel.startswith("Debriefing") or kop.lower() == "debriefing":
            rijen.append([f"{sid}-DB", "Debriefing", "Resultaatslide", "Punten en omwegen; lessen; bij bereiken voltooid melden aan Rise", "Opnieuw", "Opnieuw naar 00", "Toon Punten en Omweg", "Geen"])
        else:
            rijen.append([f"{sid}-{kop.zfill(3)}", titel.strip(), "Informatieslide", "Omweg, zie script", "Doorgaan", "Zie script", "Omweg +1", "Eigen illustratie"])
    if not any(r[0].endswith("-DB") for r in rijen):
        rijen.append([f"{sid}-DB", "Debriefing", "Resultaatslide", "Punten en omwegen; lessen; bij bereiken voltooid melden aan Rise", "Opnieuw", "Opnieuw naar 00", "Toon Punten en Omweg", "Geen"])
    return rijen


def main():
    a = argparse.ArgumentParser()
    a.add_argument("script"); a.add_argument("--les", required=True); a.add_argument("--titel", required=True)
    a.add_argument("--doelen", required=True); a.add_argument("--intro", required=True); a.add_argument("--bronnen", required=True)
    a.add_argument("--rvraag", required=True); a.add_argument("--vraag", required=True)
    a.add_argument("--na", help="scherm-ID waarna het scenario komt; standaard vóór het laatste scherm")
    x = a.parse_args()
    script = os.path.relpath(os.path.abspath(x.script), ROOT)
    sid = os.path.basename(script).split("-")[0] + "-" + os.path.basename(script).split("-")[1] + "-" + os.path.basename(script).split("-")[2]
    tekst = open(os.path.join(ROOT, script), encoding="utf-8").read()
    bl = os.path.join(ROOT, "articulate", "storyline", f"{sid}-bouwlijst.csv")
    with open(bl, "w", encoding="utf-8", newline="") as f:
        csv.writer(f, lineterminator="\n").writerows(bouwlijst(sid, tekst))
    # schermreview
    p = os.path.join(ROOT, "reviews", f"{x.les}-schermreview.csv")
    rows = list(csv.DictReader(open(p, encoding="utf-8")))
    bestaand = next((r for r in rows if f"Script: {script}" in r["interaction"]), None)
    if bestaand:
        nr = bestaand["screen_id"]
    else:
        hoogste = max(int(r["screen_id"].split("-S")[-1]) for r in rows)
        nr = f"{x.les}-S{hoogste + 1:02d}"
    inter = (f"Scenario-pakket {sid}, als HTML-pakket in een Rise Code Block met afrondingseis; terugval Rise Scenario-blok of Storyline-blok.\n"
             f"Script: {script}\nBouwlijst: articulate/storyline/{sid}-bouwlijst.csv\n"
             "Afronding bij het bereiken van de debriefing; punten formatief, niet in Moodle")
    rij = dict(lesson_id=x.les, screen_id=nr, learning_goal_ids=x.doelen, title=x.titel,
               learner_text=x.intro.replace("\\n", "\n"), voice_over=VO, interaction=inter,
               feedback_correct="Niet van toepassing; er wordt geen antwoord gevraagd",
               feedback_incorrect="Niet van toepassing; er wordt geen antwoord gevraagd",
               source_ids=x.bronnen, source_location=f"Zie het script {script}; keuzes en feedback komen uit de schermen van de les; de casus is DRTC-ontwerp. TE VERIFIËREN: Mathanje beoordeelt het script, de juiste keuzes en de feedback ({x.rvraag}).",
               media_ids="", platform_block="Rise Storyline-blok (codepakket)", minutes_estimate="14",
               review_status="medische_review_nodig", medical_reviewer="Mathanje", mathanje_comment="",
               version=rows[0]["version"], review_date="")
    if bestaand:
        rows.remove(bestaand)
    if x.na:
        pos = next(i for i, r in enumerate(rows) if r["screen_id"] == x.na) + 1
    else:
        pos = len(rows) - 1
    rows.insert(pos, rij)
    buf = io.StringIO(); w = csv.DictWriter(buf, fieldnames=FIELDS, lineterminator="\n"); w.writeheader(); w.writerows(rows)
    open(p, "w", encoding="utf-8", newline="").write(buf.getvalue())
    # master
    m = glob.glob(os.path.join(ROOT, "content", "nl", f"{x.les}-*.md"))[0]
    t = open(m, encoding="utf-8").read()
    blok = (f"## {nr} {x.titel}\n\nLeerdoelen: {x.doelen.replace(';', '; ')}. Bronplaats: zie het script [{sid}](../../{script}); de keuzes en de feedback komen uit de schermen van deze les; de casus is DRTC-ontwerp. Media: eigen illustraties volgens het script. Reviewstatus: medische_review_nodig; Mathanjes akkoord/opmerking: nog niet vastgelegd.\n\n"
            f"Leerfunctie: de cursist beslist in een doorlopende situatie, met keuzes die een ander vervolg geven.\n\n**Cursistentekst**\n\n" + x.intro.replace("\\n", "\n\n") +
            f"\n\n**Interactie**\n\nScenario-pakket {sid} in een Rise Code Block met afrondingseis. Script: [{sid}](../../{script}), bouwlijst: [{sid}-bouwlijst.csv](../../articulate/storyline/{sid}-bouwlijst.csv). Het blok is afgerond als de cursist de debriefing bereikt. De punten zijn alleen feedback en gaan niet naar Moodle.\n\n"
            f"**Te verifiëren door Mathanje of DRTC**\n\nTE VERIFIËREN: Mathanje beoordeelt het script, de juiste keuzes en de feedback ({x.rvraag}).\n\n")
    t = re.sub(rf"## {re.escape(nr)} .*?(?=^## )", "", t, flags=re.S | re.M)
    volgende = rows[pos + 1]["screen_id"] if pos + 1 < len(rows) else None
    i = t.find(f"## {volgende} ") if volgende else -1
    if i < 0 and volgende is None:
        i = t.find("\n## ", t.rfind(f"## {rows[pos - 1]['screen_id']} ") + 3) + 1
    if i < 0:
        raise SystemExit(f"Plaats voor {nr} niet gevonden in {m}")
    t = t[:i] + blok + t[i:]
    open(m, "w", encoding="utf-8").write(t)
    # reviewvraag
    rp = os.path.join(ROOT, "reviews", "2026-11-20-reviewvragen-mathanje.md")
    r = open(rp, encoding="utf-8").read()
    regel = f"| {x.rvraag} | {nr} en {script} | {x.vraag} |"
    if f"| {x.rvraag} |" not in r:
        kop = "## Vertakte scenario's voor de verhouding Rise en Storyline-niveau"
        if kop not in r:
            j = r.index("## Antwoorden van Martijn")
            r = r[:j] + kop + "\n\nVanaf 21 november 2026 krijgt MC 40 procent en MFA 20 procent van de studietijd aan vertakte scenario's (afspraken, hoofdstuk 4). Per scenario een vraag over de casus, de keuzes en de feedback.\n\n| Nr | Scherm | Vraag |\n| --- | --- | --- |\n" + regel + "\n\n" + r[j:]
        else:
            j = r.index(kop); k = r.index("\n\n## ", j + len(kop))
            r = r[:k] + "\n" + regel + r[k:]
        open(rp, "w", encoding="utf-8").write(r)
    print(nr, "toegevoegd;", bl)


if __name__ == "__main__":
    main()
