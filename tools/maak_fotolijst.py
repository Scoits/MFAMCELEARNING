"""Maak de fotolijst voor de fotosessie met een instructeur van DRTC.

Bron: articulate/beeldbank-register.csv (soort "echte foto of video") en de opnames hieronder.
Uitvoer: articulate/fotolijst-fotosessie.md en articulate/fotolijst-fotosessie.csv.
Gebruik: python3 tools/maak_fotolijst.py
"""
import csv
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# code: (plek in de sessie, wat erop moet, standpunt, reeks of enkel, opmerking)
OPNAMES = {
    "MFA-L01-M01": ("A Medische kist", "De medische kast of kist aan boord of in het lesschip, deur of deksel open, de vakken en de inhoud zichtbaar.", "Recht van voren op borsthoogte, de hele kast in beeld met wat ruimte eromheen.", "enkel", ""),
    "MFA-L01-M02": ("A Medische kist", "De inhoud per functiegroep op een lichte, effen ondergrond: 1 wond- en verbandmateriaal, 2 instrumenten voor onderzoek en verzorging, 3 middelen voor vervoer en ondersteuning, 4 beschermingsmiddelen.", "Recht van boven, alle middelen van één groep naast elkaar, niet overlappend.", "reeks van 4", "Per groep één foto: MFA-L01-M02-1 tot en met -4."),
    "MFA-L01-M07": ("A Medische kist", "De medicijnkast met het afgesloten vak voor de bijzondere middelen. Etiketten mogen niet leesbaar zijn.", "Schuin van voren, het slot van het afgesloten vak goed zichtbaar.", "enkel", "Geen leesbare namen of doseringen."),
    "MFA-L01-M08": ("A Medische kist", "Een geopende waterdichte medicijnkist met verbandmiddelen, een reddingsdeken en de inhoudsopgave in het deksel.", "Schuin van boven, deksel open, inhoudsopgave in beeld maar niet leesbaar nodig.", "enkel", ""),
    "MFA-L01-M09": ("A Medische kist", "Handschoenen, een snelverband, steriele gaasjes, synthetische watten en zwachtels naast elkaar, in hun verpakking.", "Recht van boven op een lichte ondergrond, van links naar rechts in deze volgorde.", "enkel", ""),
    "MFA-L06-M01": ("A Medische kist", "Een geordende medicijnkast met een oefenetiket met een fictieve code en zonder dosering.", "Recht van voren, één vak dichtbij zodat het oefenetiket te zien is.", "enkel", "Plak het oefenetiket zelf; geen echte doseringen in beeld."),
    "MC-L07-M06": ("A Medische kist", "Een geordende medicijnkast, de afgesloten kluis en een controlelijst op een klembord.", "Schuin van voren, kluis en controlelijst samen in beeld.", "enkel", "De controlelijst hoeft niet leesbaar te zijn."),
    "MC-L03-M03": ("A Medische kist", "Een snelverband, gaas, watten en zwachtels naast elkaar.", "Recht van boven op een lichte ondergrond.", "enkel", "Kan dezelfde opname zijn als MFA-L01-M09 als daar alles op staat."),
    "MC-L03-M04": ("A Medische kist", "Een geopende hechtset: schaar, pincetten, naaldvoerder en scalpel, op een steriel doek.", "Recht van boven, de instrumenten naast elkaar met wat ruimte ertussen.", "enkel", "Scalpel met beschermkapje."),
    "MFA-L01-M04": ("B Vlotpakket", "De inhoud van het waterdichte eerstehulppakket uit een reddingsvlot, uitgepakt naast de geopende verpakking.", "Recht van boven op een lichte ondergrond.", "enkel", ""),
    "MFA-L05-M05": ("C Zuurstof", "Een zuurstofmasker met reservoirzakje, correct over mond, neus en kin, op een oefenpop of bij een vrijwilliger.", "Van opzij, schuin van voren; het reservoirzakje gevuld.", "enkel", "Bij een vrijwilliger: alleen de onderkant van het gezicht in beeld."),
    "MFA-L05-M13": ("C Zuurstof", "De geopende zuurstofkoffer met de fles, het drukventiel en de maskers.", "Schuin van boven, deksel open, het drukventiel goed zichtbaar.", "enkel", "Nieuwe opname op verzoek van Martijn. Wordt na de sessie toegevoegd aan MFA-L05-S07 en aan de uitrusting in MFA-L01."),
    "MFA-L01-M05": ("D Handelingen", "Een instructeur trekt handschoenen aan, controleert de verpakking van een verband en legt het materiaal klaar.", "Over de schouder van de hulpverlener; handen en materiaal in beeld, gezicht niet.", "reeks van 3", "MFA-L01-M05-1 handschoenen aan, -2 verpakking controleren, -3 materiaal klaarleggen."),
    "MFA-L01-M10": ("D Handelingen", "Een steriel gaasje aanbrengen op de onderarm van een vrijwilliger: verpakking openen, gaasje laten vallen, watten erover, zwachtelen, vastzetten.", "Van boven, dicht bij de arm; alleen handen en arm in beeld.", "reeks van 5", "MFA-L01-M10-1 tot en met -5, in de volgorde van MFA-L01-S18."),
    "MFA-L02-M09": ("D Handelingen", "De meting van pols, ademhaling, bloeddruk en temperatuur bij een vrijwilliger.", "Per meting dicht bij de handen; gezicht niet in beeld.", "reeks van 4", "MFA-L02-M09-1 pols, -2 ademhaling tellen, -3 bloeddruk met manchet en stethoscoop, -4 temperatuur."),
    "MFA-L02-M20": ("D Handelingen", "Een slachtoffer van buik naar rug draaien, met twee instructeurs of een instructeur en een vrijwilliger.", "Van opzij op ooghoogte van de knielende hulpverlener, het hele lichaam in beeld.", "reeks van 4", "Vier momenten uit MFA-L02-S44; het slachtoffer met het gezicht van de camera af."),
    "MFA-L03-M03": ("D Handelingen", "Reanimatie op een oefenpop door één hulpverlener: handen midden op de borst, armen gestrekt.", "Van opzij, de hele hulpverlener en de pop in beeld.", "enkel", "Gezicht van de hulpverlener naar de pop, niet naar de camera."),
    "MFA-L03-M04": ("D Handelingen", "Maskerbeademing op een oefenpop.", "Van opzij en iets van boven, het masker en beide handen in beeld.", "enkel", ""),
    "MFA-L03-M05": ("D Handelingen", "Een hulpverlener plakt de elektroden van een trainings-AED op een oefenpop.", "Van boven, de AED en de plaats van de elektroden goed zichtbaar.", "enkel", "Alleen een trainings-AED."),
    "MFA-L03-M06": ("D Handelingen", "Twee hulpverleners reanimeren samen met een AED.", "Van opzij op enige afstand, beide hulpverleners, de pop en de AED in beeld.", "enkel", ""),
    "MFA-L04-M04": ("D Handelingen", "Een hulpverlener met handschoenen legt steriel brandwondenverband op de onderarm van een vrijwilliger.", "Van boven, dicht bij de arm.", "enkel", "Geen echte brandwond; een geschminkte plek mag."),
    "MFA-L04-M09": ("D Handelingen", "Hulpverleners stabiliseren het hoofd en draaien een slachtoffer met de log-roll.", "Van opzij, de hele groep in beeld.", "reeks van 3", "MFA-L04-M09-1 hoofd stabiliseren, -2 draaien, -3 neerleggen."),
    "MFA-L04-M10": ("D Handelingen", "Een slachtoffer in stabiele zijligging.", "Van schuin boven, het hele lichaam in beeld.", "enkel", "Gezicht van het slachtoffer van de camera af."),
    "MFA-L04-M13": ("D Handelingen", "Een arm in een brede das en een been in een spalk.", "Van voren voor de das, van opzij voor het been.", "reeks van 2", "MFA-L04-M13-1 brede das, -2 spalk."),
    "MFA-L04-M14": ("D Handelingen", "Hulpverleners sluiten het bekken met een gevouwen deken.", "Van boven of schuin van boven.", "enkel", ""),
    "MFA-L06-M04": ("D Handelingen", "Een schaar wordt gereinigd en daarna gedesinfecteerd.", "Dicht bij de handen, met handschoenen.", "reeks van 2", "MFA-L06-M04-1 reinigen, -2 desinfecteren volgens de gebruiksaanwijzing."),
    "MC-L02-M01": ("E Handelingen Medical Care", "Van stabiliseren tot vervoer in een vacuümmatras.", "Van opzij, de hele groep in beeld.", "reeks van 4", "Vier stappen uit MC-L02-S03."),
    "MC-L02-M06": ("E Handelingen Medical Care", "Een bekkenbreuk stabiliseren, van open boek tot vervoer in de vacuümmatras.", "Van boven of schuin van boven.", "reeks van 7", "Zeven stappen uit MC-L02-S13."),
    "MC-L03-M05": ("E Handelingen Medical Care", "Hechten op oefenhuid met naaldvoerder en pincet.", "Dicht bij de handen, van boven.", "enkel", ""),
    "MC-L04-M05": ("E Handelingen Medical Care", "Een injectie op een trainingsmodel: opzuigen, ontluchten, prikken, pleister.", "Dicht bij de handen; het trainingsmodel, niet een persoon.", "reeks van 4", "Vier stappen uit MC-L04-S07. Geen herkenbaar etiket op de ampul."),
    "MC-L05-M09": ("E Handelingen Medical Care", "Het onderzoek van de buik: kijken, luisteren met de stethoscoop, voelen.", "Van opzij; de buik van een vrijwilliger of een oefenpop, het gezicht niet in beeld.", "reeks van 3", "Drie stappen uit MC-L05-S23."),
}

NIET_IN_SESSIE = {
    "MFA-L04-M18": "Dit is een tabel en geen foto. Wij maken haar zelf als schema.",
    "MC-L03-M01": "Echte wonden kan een instructeur niet fotograferen. Wij zoeken een beeld met gebruiksrecht of maken een tekening (reviewvraag voor Mathanje bij de keuze).",
}

REGELS = [
    "Liggend (16:9), minstens 1920 x 1080 pixels, scherp, met daglicht of gelijkmatig licht en zonder flits.",
    "Laat rond het onderwerp wat ruimte, zodat het beeld ook op een telefoon goed uitsnijdt.",
    "Geen herkenbare gezichten. Fotografeer handen, armen en romp, of mensen van achteren. Op een oefenpop mag alles.",
    "Gebruik de DRTC-uitrusting en vermijd merknamen in beeld.",
    "Geen leesbare medicijnnamen, doseringen of persoonsgegevens in beeld.",
    "Noem ieder bestand naar de code, bijvoorbeeld MFA-L01-M01.jpg. Bij een reeks: MFA-L01-M10-1.jpg, MFA-L01-M10-2.jpg, enzovoort.",
    "Zet de bestanden in de projectmap uploads. Wij zetten een reeks zelf samen tot één beeld met de code van het scherm.",
    "Leg vast wie de foto's maakte en dat DRTC ze mag gebruiken; dat komt in het beeldbankregister.",
]


def main():
    reg = {r["asset_id"]: r for r in csv.DictReader(open(os.path.join(ROOT, "articulate", "beeldbank-register.csv"), encoding="utf-8"))}
    fotos = [k for k, r in reg.items() if r["soort_beeld"] == "echte foto of video"]
    ontbreekt = [k for k in fotos if k not in OPNAMES and k not in NIET_IN_SESSIE]
    if ontbreekt:
        raise SystemExit("Geen opname beschreven voor: " + ", ".join(ontbreekt))
    rijen = []
    for code, (plek, wat, standpunt, soort, opm) in sorted(OPNAMES.items(), key=lambda x: (x[1][0], x[0])):
        r = reg.get(code)
        schermen = r["gebruikslocaties"] if r else "na de sessie toe te voegen"
        rijen.append(dict(plek=plek, code=code, schermen=schermen, wat_erop_moet=wat, standpunt=standpunt, aantal=soort, opmerking=opm))
    with open(os.path.join(ROOT, "articulate", "fotolijst-fotosessie.csv"), "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(rijen[0]), lineterminator="\n"); w.writeheader(); w.writerows(rijen)
    n = sum(1 if r["aantal"] == "enkel" else int(r["aantal"].split()[-1]) for r in rijen)
    o = ["# Fotolijst voor de fotosessie", "",
         f"21 november 2026. Een instructeur van DRTC maakt de foto's (akkoord van Martijn, 21 november 2026). De lijst is zo opgebouwd dat alles in één sessie kan: eerst de uitrusting (A, B en C), daarna de handelingen (D en E). Samen {len(rijen)} opnames en {n} foto's. Benodigd: de medische kist, het vlotpakket, de zuurstofkoffer, een oefenpop, een trainings-AED, een vacuümmatras, een trainingsmodel voor injecties, oefenhuid, twee of drie vrijwilligers en een lichte, effen ondergrond.", "",
         "## Regels voor iedere foto", ""]
    o += [f"- {x}" for x in REGELS] + [""]
    plek = None
    for r in rijen:
        if r["plek"] != plek:
            plek = r["plek"]
            o += [f"## {plek[0]}. {plek[2:]}", "", "| Code | Scherm | Wat erop moet | Standpunt | Aantal | Opmerking |", "| --- | --- | --- | --- | --- | --- |"]
        o.append(f"| {r['code']} | {r['schermen']} | {r['wat_erop_moet']} | {r['standpunt']} | {r['aantal']} | {r['opmerking']} |")
        nxt = rijen.index(r) + 1
        if nxt == len(rijen) or rijen[nxt]["plek"] != plek:
            o.append("")
    o += ["## Niet in deze sessie", "", "| Code | Reden |", "| --- | --- |"]
    o += [f"| {k} | {v} |" for k, v in NIET_IN_SESSIE.items()] + [""]
    o += ["Video's staan niet in deze lijst. De films uit map 025 worden apart gekoppeld (zie docs/leeractiviteiten-plan.md).", ""]
    open(os.path.join(ROOT, "articulate", "fotolijst-fotosessie.md"), "w", encoding="utf-8").write("\n".join(o))
    print(len(rijen), "opnames,", n, "foto's")


if __name__ == "__main__":
    main()
