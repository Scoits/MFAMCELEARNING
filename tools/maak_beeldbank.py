"""Maak articulate/beeldbank-register.csv uit het mediaregister.

Het beeldbankregister volgt de velden uit de productiehandleiding van
21 november 2026: asset-ID en versie, leerdoel, wat zichtbaar moet zijn,
inhoudelijke controle, bron en gebruiksrecht, gebruikslocaties, bewerkbaar
origineel en het soort beeld. Het mediaregister blijft de bron; draai dit
script opnieuw na iedere wijziging daarin.

Soort beeld:
- echte foto of video: handelingen, uitrusting en apparatuur;
- eigen schema: stappen, tabellen, plattegronden en grafieken;
- AI-sfeerbeeld: alleen voor een fictieve situatie of achtergrond.
"""
import csv
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MEDIA_MAP = "/mnt/project-files/articulate-proef/media"


def doelen_per_scherm():
    uit = {}
    rev = os.path.join(ROOT, "reviews")
    for naam in os.listdir(rev):
        if naam.endswith("-schermreview.csv"):
            with open(os.path.join(rev, naam), encoding="utf-8") as f:
                for r in csv.DictReader(f):
                    uit[r.get("screen_id", "")] = r.get("learning_goal_ids", "")
    return uit


def soort(oms):
    o = oms.lower()
    if re.search(r"foto|video|film|opname|dia\b|dia's|presentatie", o):
        return "echte foto of video"
    if re.search(r"sfeer|achtergrond", o):
        return "AI-sfeerbeeld toegestaan"
    return "eigen schema of illustratie"


def bestand(mid):
    les = "-".join(mid.split("-")[:2])
    for naam in (f"{mid}.png", f"{mid}-tijdelijk.png"):
        if os.path.exists(os.path.join(MEDIA_MAP, les, naam)):
            return f"media/{les}/{naam}"
    return "nog geen bestand"


def main():
    doelen = doelen_per_scherm()
    with open(os.path.join(ROOT, "articulate", "mediaregister.csv"), encoding="utf-8") as f:
        rijen = list(csv.DictReader(f))
    uitpad = os.path.join(ROOT, "articulate", "beeldbank-register.csv")
    with open(uitpad, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, lineterminator="\n")
        w.writerow(["asset_id", "versie", "soort_beeld", "leerdoelen", "wat_zichtbaar_moet_zijn",
                    "inhoudelijke_controle", "bron_en_gebruiksrecht", "gebruikslocaties",
                    "bestand_projectmap", "bewerkbaar_origineel"])
        for r in rijen:
            mid = r["media_id"]
            schermen = [s.strip() for s in re.split(r"[;,]", r["screen_ids"]) if s.strip()]
            ld = sorted({d.strip() for s in schermen for d in re.split(r"[;,]", doelen.get(s, "")) if d.strip()})
            b = bestand(mid)
            versie = "v01 concept" if b.endswith(f"{mid}.png") else "nog geen definitieve versie"
            w.writerow([mid, versie, soort(r["omschrijving"]), "; ".join(ld), r["alt_tekst"],
                        r["inhoudelijke_review"], f"{r['maker']}; {r['gebruiksrecht']}",
                        "; ".join(schermen), b,
                        "kaartbron in de projectmap" if versie.startswith("v01") else "nog vast te leggen"])
    print(uitpad, len(rijen))


if __name__ == "__main__":
    main()
