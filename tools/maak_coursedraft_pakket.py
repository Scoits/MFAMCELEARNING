"""Maak het pakket voor AI Course Drafts in Rise per cursus (MFA of MC).

Gebruik: python3 tools/maak_coursedraft_pakket.py MFA [--uit MAP]
Schrijft <CURSUS>-ai-course-draft-pakket.md met bronbestanden, startprompt,
correctiechecklist, instellingen, instructie voor kennischecks en scenario's en
de controleprompt per les. De leerdoelen komen uit de dekkingsmatrix en de
schermreviews. Draai eerst maak_rise_word.py <LES> --bron per les.
"""
import argparse
import csv
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

CURSUS = {
    "MFA": dict(
        naam="Medical First Aid", stcw="A-VI/4-1", imo="1.14", lessen=9, minuten=480,
        competentie="direct eerste hulp verlenen bij een ongeval of ziekte aan boord",
        praktijk="één dag op locatie bij DRTC: een halve dag handelingen en een halve dag LOTUS-scenario's",
        storyline={"MFA-L07": "MFA-L07-SL01 RMD-gesprek"},
        tijd={"MFA-L00": 20, "MFA-L01": 50, "MFA-L02": 80, "MFA-L03": 70, "MFA-L04": 85,
              "MFA-L05": 60, "MFA-L06": 40, "MFA-L07": 45, "MFA-L08": 30}),
    "MC": dict(
        naam="Medical Care", stcw="A-VI/4-2", imo="1.15", lessen=10, minuten=480,
        competentie="medische zorg geven aan zieken en gewonden zolang zij aan boord blijven, en meedoen aan gecoördineerde medische hulp",
        praktijk="twee dagen op locatie bij DRTC met handelingen en scenario's",
        storyline={"MC-L04": "MC-L04-SL01 verslechtering in de nacht", "MC-L08": "MC-L08-SL01 helikopterevacuatie"},
        tijd={"MC-L00": 15, "MC-L01": 50, "MC-L02": 60, "MC-L03": 45, "MC-L04": 55, "MC-L05": 80,
              "MC-L06": 55, "MC-L07": 50, "MC-L08": 45, "MC-L09": 25}),
}


def lessen(cursus):
    n = CURSUS[cursus]["lessen"]
    doelen = {r["id"]: r for r in csv.DictReader(open(os.path.join(ROOT, "curriculum", f"{cursus.lower()}-dekkingsmatrix.csv"), encoding="utf-8"))}
    gedrag = {r["leerdoel_id"]: r for r in csv.DictReader(open(os.path.join(ROOT, "curriculum", "leerdoel-gedrag.csv"), encoding="utf-8"))}
    uit = []
    for i in range(n):
        les = f"{cursus}-L{i:02d}"
        rijen = list(csv.DictReader(open(os.path.join(ROOT, "reviews", f"{les}-schermreview.csv"), encoding="utf-8")))
        ids = []
        for x in rijen:
            for g in x["learning_goal_ids"].split(";"):
                g = g.strip()
                if g and g not in ids and g in doelen:
                    ids.append(g)
        naam = next(f for f in os.listdir(os.path.join(ROOT, "content", "nl")) if f.startswith(les))
        titel = open(os.path.join(ROOT, "content", "nl", naam), encoding="utf-8").readline().lstrip("# ").strip()
        uit.append((les, titel, [(g, doelen[g]["concreet_leerdoel"], gedrag.get(g, {}).get("gedrag_hoofd", "")) for g in sorted(ids)]))
    return uit


def schrijf(cursus, uitpad):
    c = CURSUS[cursus]
    ls = lessen(cursus)
    r = []
    a = r.append
    a(f"# {cursus}: pakket voor AI Course Drafts in Rise")
    a("")
    a(f"Werkversie 0.1, 21 november 2026. Dit pakket volgt de werkwijze waarmee Martijn de cursus Security Awareness bouwde. Je start in 360 Home met Create with AI en uploadt de eigen bronnen. Daarna stuur je de outline bij met gerichte correctieprompts en kies je de instellingen. Pas dan laat je Rise de lessen maken. Bij {c['naam']} gaat het om medische inhoud. Daarom komt alle inhoud uit de lesteksten in de bronbestanden, en controleer je iedere gegenereerde les tegen de bron voordat Mathanje haar beoordeelt.")
    a("")
    a(f"Doel voor de studietijd: {c['minuten']} minuten voor {cursus}, samen met MC 16 uur. Een AI-concept haalt die tijd niet vanzelf. Na het genereren tel je de tijd per les met de rekenregel in `docs/studietijd-rekenregel.md`. Vul een tekort aan met de activiteiten uit `docs/leeractiviteiten-plan.md`.")
    a("")
    a("## 1. Bronbestanden uploaden")
    a("")
    a(f"Upload deze bestanden uit `articulate-proef/ai-course-draft/{cursus}/bronnen/`. Ieder bestand is één les met de goedgekeurde cursistentekst, de leerdoelen per scherm, de beelden, de kennischecks met feedback en de casussen.")
    a("")
    for les, titel, _ in ls:
        a(f"- `{les}-bron.docx`: {titel}")
    a("")
    a("Upload geen boeken, presentaties of model courses als bron voor de tekst. Anders neemt de AI daar zelf inhoud uit die niet is beoordeeld. Wil je dia's als beeld gebruiken, upload ze dan pas na het genereren als bron in de cursus. Kies ze daarna via Replace from your sources.")
    a("")
    a("## 2. Startprompt voor de outline")
    a("")
    a("Plak deze prompt in het veld voor de cursusbeschrijving of de instructie. Is het veld te kort, upload de prompt dan als Word-bestand en schrijf in het veld: \"Volg de instructie in het bestand outline-instructie.\"")
    a("")
    s = []
    s.append(f"Maak een outline voor de e-learning {c['naam']} ({cursus}) van DRTC, een STCW-opleiding volgens tabel {c['stcw']} en IMO Model Course {c['imo']}. De competentie is: {c['competentie']}. De e-learning vervangt de klassikale theorie volledig. De cursist oefent en wordt beoordeeld op {c['praktijk']}.")
    s.append("Doelgroep: zeevarenden zonder medische voorkennis, die eens in de vijf jaar deze cursus doen. Veel van hen lezen Nederlands als tweede taal. Taal: eenvoudig Nederlands, korte zinnen, de cursist wordt met je aangesproken, voorbeelden aan boord van een koopvaardijschip.")
    s.append(f"Gebruik precies {c['lessen']} lessen, in deze volgorde en met deze titels. Ieder bronbestand is één les. Neem per les de leerdoelen hieronder over:")
    for les, titel, doelen in ls:
        s.append(f"{les} {titel} (ongeveer {c['tijd'][les]} minuten studietijd). Leerdoelen: " + " ".join(f"{g}: {t}" for g, t, _ in doelen))
    s.append("Harde grenzen: gebruik uitsluitend de geüploade bronbestanden. Voeg geen medische feiten, getallen, doseringen, middelen, codes of handelingen toe die niet in de bron staan, en vul niet aan uit algemene kennis. Kort geen stappen, waarschuwingen of uitzonderingen in en verander de volgorde van stappen niet. Ontbreekt er iets, zet dan in de les een Note met de tekst VRAAG VOOR MATHANJE en wat er ontbreekt. Online leren vervangt de praktijkbeoordeling niet: verwijs bij handelingen naar de praktijkdag.")
    for t in s:
        a("> " + t)
        a(">")
    r.pop()
    a("")
    a("## 3. Correctiechecklist voor de outline")
    a("")
    a("Loop de outline na voordat je de lessen laat maken. Stuur bij met een korte correctieprompt per punt, zoals: \"Zet les 3 terug op de titel uit de bron en neem leerdoel MFA-12.02 op.\"")
    a("")
    a(f"- Zijn er precies {c['lessen']} lessen, in de volgorde en met de titels uit de startprompt?")
    a("- Staat bij iedere les ieder leerdoel uit de startprompt, en geen leerdoel dat er niet bij hoort?")
    a("- Komen alle onderwerpen in de beschrijving uit het bronbestand van die les? Schrap onderwerpen die er niet in staan.")
    a("- Belooft een beschrijving geen handeling die alleen op de praktijkdag hoort, zoals zelf injecteren of hechten in MFA?")
    a("- Staat er een eindtoets in de outline? Haal die eruit: de afsluitende kennistoets komt in Moodle Quiz.")
    a("- Is de beschrijving van de cursus kort, zonder beloften over certificering of goedkeuring?")
    a("- Klopt de verdeling van de studietijd ongeveer met de minuten per les?")
    a("")
    a("## 4. Instellingen")
    a("")
    a("| Instelling | Keuze |")
    a("| --- | --- |")
    a("| Course content | Text and interactive content |")
    a("| AI images | Uit; beelden komen uit de bron en uit de beeldbank |")
    a("| Final quiz | Uit; de eindtoets komt in Moodle Quiz |")
    a("| Knowledge checks | Aan, met de instructie hieronder |")
    a("| Taal | Nederlands |")
    a("| Stijl | De DRTC-stijl uit Security Awareness |")
    a("")
    a("Maak voor het genereren een kopie van de cursus. Als je een generatie annuleert, kan Rise al gemaakte lessen verwijderen.")
    a("")
    a("## 5. Instructie voor kennischecks en scenario's")
    a("")
    for t in [
        "Neem de kennischecks uit de bron letterlijk over: de vraag, de antwoorden in dezelfde volgorde, het juiste antwoord en de feedback per antwoord.",
        "Voeg per onderwerp oefenvragen toe als het antwoord letterlijk in de bron staat. Maak er bij voorkeur een korte situatie aan boord van, met de vraag wat de cursist doet of ziet.",
        "Foute antwoorden zijn echte denkfouten uit de bron, geen onzin. Begin de feedback met Juist. of Onjuist. en leg uit waarom, met de reden uit de bron.",
        "Alle vragen zijn formatief: de cursist mag opnieuw proberen en er is geen score.",
        "Bouw de casussen met keuzes uit de bron als Scenario-blok: één scène per keuze, en een onjuiste keuze gaat met uitleg terug naar dezelfde scène. Personen en dialogen mogen verzonnen zijn. Wat zij medisch doen of zeggen, komt uit de bron.",
        "Wissel uitleg en activiteit af: na hoogstens twee tekstblokken komt een interactief blok of een oefenvraag. Gebruik geen flashcards. Gebruik een accordeon alleen voor naslag.",
        "Waar de bron een Storyline-scenario noemt, laat je een lege plek met de tekst STORYLINE-BLOK.",
    ]:
        a("> " + t)
        a(">")
    r.pop()
    a("")
    if c["storyline"]:
        a("Storyline-scenario's die DRTC apart bouwt en daarna in de les zet: " + "; ".join(f"{v} in {k}" for k, v in c["storyline"].items()) + ". Zie `articulate/storyline/`.")
        a("")
    a("Zet na de generatie bij Settings > Navigation de navigatie op Restricted. Zet na ieder interactief blok en iedere kennischeck een Continue-blok met Complete block above.")
    a("")
    a("## 6. Controleprompt per gegenereerde les")
    a("")
    a("Plak deze prompt in de AI Assistant bij iedere les, met het bronbestand van die les geselecteerd:")
    a("")
    for t in [
        "Vergelijk deze les met het geselecteerde bronbestand. Maak een lijst van:",
        "1. iedere stap, waarschuwing, uitzondering of lijstonderdeel uit de bron dat ontbreekt;",
        "2. iedere zin met een medisch feit, getal, middel, code of handeling die niet in de bron staat;",
        "3. iedere kennischeck uit de bron die anders is overgenomen;",
        "4. iedere plek waar de volgorde van stappen anders is dan in de bron;",
        "5. iedere nieuwe oefenvraag waarvan het antwoord niet letterlijk in de bron staat.",
        "Geef per punt het blok en de bronzin. Herschrijf niets.",
    ]:
        a("> " + t)
        a(">")
    r.pop()
    a("")
    a("Herstel ieder punt in het betreffende blok, met de tekst uit de bron. Laat de les niet opnieuw genereren. Tel daarna de studietijd met de rekenregel en leg de les vast in `articulate/revisieregister.csv`. Mathanje beoordeelt daarna de gepubliceerde les, met de nieuwe oefenvragen en casussen. Een gegenereerde les krijgt geen andere status dan een les uit de letterlijke import: medische review nodig.")
    a("")
    a("## Leerdoelen per les")
    a("")
    a("| Les | Leerdoel | Gedrag |")
    a("| --- | --- | --- |")
    for les, titel, doelen in ls:
        for g, t, gd in doelen:
            a(f"| {les} | {g} {t} | {gd} |")
    a("")
    open(uitpad, "w", encoding="utf-8").write("\n".join(r))
    return uitpad


def main():
    p = argparse.ArgumentParser()
    p.add_argument("cursus", choices=sorted(CURSUS))
    p.add_argument("--uit", default=os.path.join(ROOT, "articulate"))
    a = p.parse_args()
    print(schrijf(a.cursus, os.path.join(a.uit, f"ai-course-draft-{a.cursus}.md")))


if __name__ == "__main__":
    main()
