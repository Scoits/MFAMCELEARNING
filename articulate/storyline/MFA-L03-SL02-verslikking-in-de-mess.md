# MFA-L03-SL02 Verslikking in de mess

Vertakt scenario bij MFA-L03 Levensbedreigende situaties. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap. Het scenario bereidt voor op de oefening met veilige trainingsmiddelen in MFA-P02 en vervangt die niet.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MFA-12.03: verslikking en verstikking. MFA-12.02: reanimatie bij een slachtoffer dat bewusteloos raakt |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MFA-L03-S23 (gedeeltelijke en volledige afsluiting); S08 (hoesten, vijf slagen, vijf buikstoten, afwisselen, borststoten, bewusteloos, contact met de Radio Medische Dienst); S02 (alarmeren); S04 (harde ondergrond); S20 (in de mond kijken, niet blind zoeken); S05 (stabiele zijligging na herstel); S034 en S016 GH1, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 9, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical First Aid; Bas, bootsman, 47 jaar, groot en zwaar gebouwd, fictief; Noor, matroos, fictief; de kapitein; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties zonder bloed: de mess met een tafel, een slachtoffer dat voorover buigt, handen voor buikstoten en borststoten, een slachtoffer op de vloer. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Het is 12.15 uur. Je zit in de mess. Tegenover je eet Bas een stuk vlees. Plotseling stopt hij met praten en grijpt naar zijn keel.

## Schermen

### Scherm 1 Hij hoest

Tekst: Bas hoest hard. Je hoort een gierende ademhaling. Hij kijkt angstig.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je geeft hem direct stevige klappen tussen de schouderbladen. | Scherm 1 opnieuw | Nog niet. Kan hij hoesten, dan kan er nog lucht langs. Hoesten is dan het beste middel. | 0 |
| B. Je geeft hem een glas water om het weg te spoelen. | Scherm 1 opnieuw | Niet goed. Drinken kan de verslikking erger maken. Moedig hem aan krachtig te hoesten. | 0 |
| C. Je blijft bij hem en moedigt hem aan krachtig te blijven hoesten. | Scherm 2 | Goed. Hoest het slachtoffer nog, dan is de luchtweg niet helemaal dicht. Krachtig hoesten is dan het beste middel. | 1 |

### Scherm 2 Het hoesten stopt

Tekst: na een paar seconden kan Bas niet meer hoesten of praten. Hij maakt geen geluid meer. Zijn lippen worden paarsblauw.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je roept Noor om de brug te alarmeren. Je gaat schuin achter Bas staan, laat hem voorover buigen en geeft maximaal vijf slagen tussen de schouderbladen. | Scherm 3 | Goed. De luchtweg is nu helemaal dicht. Begin direct met de slagen en laat een ander alarmeren. | 1 |
| B. Je wacht nog even; misschien gaat het hoesten weer lukken. | Scherm 2B | Niet goed. Zonder lucht raakt hij binnen enkele minuten bewusteloos. Begin direct. | 0 |
| C. Je probeert met je vingers het stuk vlees uit zijn keel te halen. | Scherm 2 opnieuw | Niet goed. Blind zoeken kan het voorwerp dieper duwen. Geef slagen tussen de schouderbladen. | 0 |

### Scherm 2B Direct beginnen (alleen bij B)

Tekst: Bas wordt blauwer. Je roept Noor om te alarmeren en begint met de slagen tussen de schouderbladen. Doorgaan naar scherm 3. `Omweg` plus 1.

### Scherm 3 Geen effect

Tekst: na vijf slagen zit het stuk vlees nog vast.

Vraag: wat doe je nu?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je geeft nog eens tien slagen, harder. | Scherm 3 opnieuw | Niet goed. Hebben vijf slagen geen effect, dan ga je over op vijf buikstoten. | 0 |
| B. Je geeft vijf buikstoten. | Scherm 4 | Goed. Hebben de slagen geen effect, dan geef je vijf buikstoten. | 1 |
| C. Je legt hem op de grond en begint met reanimeren. | Scherm 3 opnieuw | Nog niet. Bas is nog bij bewustzijn. Reanimatie start pas als hij bewusteloos raakt. | 0 |

### Scherm 4 Je krijgt je armen niet om hem heen

Tekst: Bas is groot en zwaar. Je krijgt je handen niet goed om zijn buik.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je gaat alleen door met slagen tussen de schouderbladen. | Scherm 4 opnieuw | Niet de beste keuze. Lukken buikstoten niet door de omvang van het slachtoffer, dan geef je borststoten in plaats van buikstoten. | 0 |
| B. Je geeft borststoten in plaats van buikstoten. | Scherm 5 | Goed. Lukken buikstoten niet door de omvang van het slachtoffer, dan geef je borststoten. | 1 |
| C. Je wacht tot iemand komt die groter is. | Scherm 4 opnieuw | Niet goed. Er is geen tijd om te wachten. Geef borststoten. | 0 |

### Scherm 5 Nog steeds vast

Tekst: ook na vijf borststoten zit het stuk vlees nog vast. Bas is nog bij bewustzijn.

Vraag: hoe ga je verder?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je wisselt vijf slagen tussen de schouderbladen af met vijf borststoten, tot de belemmering is opgeheven of Bas het bewustzijn verliest. | Scherm 6 | Goed. Blijven slagen en stoten zonder effect, dan wissel je ze af. Je stopt pas als het voorwerp loskomt of als hij bewusteloos raakt. | 1 |
| B. Je stopt; het lukt niet. | Scherm 5 opnieuw | Niet goed. Geef niet op. Wissel slagen en stoten af tot het voorwerp loskomt of hij bewusteloos raakt. | 0 |
| C. Je laat hem rechtop zitten en wacht op de Radio Medische Dienst. | Scherm 5 opnieuw | Niet goed. De arts kan het voorwerp niet op afstand verwijderen. Jij gaat door met afwisselen. | 0 |

### Scherm 6 Bas zakt in elkaar

Tekst: Bas zakt in elkaar. Je vangt hem op en legt hem op de vloer van de mess. Hij reageert niet en ademt niet normaal.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je legt hem in stabiele zijligging, zodat het vlees eruit kan vallen. | Scherm 6 opnieuw | Niet goed. Hij ademt niet normaal. De stabiele zijligging is voor iemand die wel normaal ademt. Start reanimatie. | 0 |
| B. Je laat Noor de AED halen en de Radio Medische Dienst alarmeren en start reanimatie op de harde vloer. | Scherm 7 | Goed. Raakt het slachtoffer bewusteloos, start dan reanimatie. De compressies kunnen het voorwerp losmaken. | 1 |
| C. Je geeft nog vijf buikstoten terwijl hij ligt. | Scherm 6 opnieuw | Niet goed. Is hij bewusteloos, dan start je reanimatie. | 0 |

### Scherm 7 In de mond kijken

Tekst: na 30 compressies kijk je in de mond. Achter in de mond zie je het stuk vlees.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je haalt het zichtbare stuk vlees weg met een gaasje om je vingers en gaat verder met beademen. | Scherm 8 | Goed. Een zichtbaar voorwerp haal je weg. Kijk na iedere 30 compressies opnieuw zolang dat nodig is. | 1 |
| B. Je laat het zitten; je mag niet in de mond komen. | Scherm 7 opnieuw | Niet goed. Een voorwerp dat je ziet, haal je weg. Wat je niet mag, is blind zoeken. | 0 |
| C. Je duwt het verder naar binnen, zodat de luchtweg vrij komt. | Scherm 7 opnieuw | Niet goed. Zo komt het voorwerp dieper in de luchtweg. Haal het weg als je het ziet. | 0 |

### Scherm 8 Hij ademt weer

Tekst: na de beademingen en een paar reeksen compressies gaat Bas hoesten en weer normaal ademen. Hij reageert nog nauwelijks. Noor is terug met de AED.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je zet hem rechtop op een stoel, zodat hij beter kan ademen. | Scherm 8 opnieuw | Niet goed. Hij reageert nauwelijks. Een slachtoffer dat niet goed reageert maar wel normaal ademt, leg je in stabiele zijligging. | 0 |
| B. Je stopt en laat hem liggen; het gevaar is voorbij. | Scherm 8 opnieuw | Niet goed. Blijf zijn ademhaling controleren. Hij kan opnieuw verslechteren. | 0 |
| C. Je legt hem in stabiele zijligging en blijft zijn ademhaling controleren. Je houdt de AED bij de hand. | Scherm 9 | Goed. Normaal ademen maar nauwelijks reageren: stabiele zijligging en blijven controleren. | 1 |

### Scherm 9 Een uur later

Tekst: Bas is weer helemaal helder. Hij heeft pijn in zijn borst en zegt: "Het gaat prima. Ik ga weer aan het werk."

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat hem gaan; hij is weer helder. | Scherm 9 opnieuw | Niet goed. Na stoten en een reanimatie kan inwendig letsel zijn ontstaan. Laat hem altijd beoordelen. | 0 |
| B. Je neemt contact op met de Radio Medische Dienst. Je vertelt wat er is gebeurd: hoe laat het begon, hoeveel slagen en stoten je gaf, hoe lang hij bewusteloos was en dat je hebt gereanimeerd, en dat hij nu pijn in zijn borst heeft. | Debriefing | Goed. Na buikstoten of borststoten en een reanimatie laat je het slachtoffer altijd beoordelen. De arts heeft het hele verloop nodig. | 1 |
| C. Je geeft hem iets tegen de pijn uit de medicijnkist. | Scherm 9 opnieuw | Niet goed. Medicijnen geef je alleen op advies van de arts. Neem eerst contact op. | 0 |

### Debriefing

Tekst: "De arts geeft advies voor de bewaking van Bas. Jij legt alles vast met de tijden."

Toon `Punten` van de 9 en het aantal omwegen. Toon daarna de lessen:

1. Kan het slachtoffer hoesten, moedig dan krachtig hoesten aan.
2. Kan het niet meer hoesten, praten of geluid maken, geef dan direct vijf slagen tussen de schouderbladen en daarna vijf buikstoten.
3. Lukken buikstoten niet door de omvang van het slachtoffer, geef dan borststoten.
4. Wissel af tot het voorwerp loskomt of het slachtoffer bewusteloos raakt.
5. Bewusteloos: start reanimatie. Haal een zichtbaar voorwerp weg, maar zoek niet blind.
6. Laat het slachtoffer na stoten altijd beoordelen door de arts.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- De volgorde en de aantallen volgen S034 dia56 en dia58. De leidende reanimatierichtlijn is nog niet gekozen (OB-03, S041). Na die keuze wordt het scenario nagelopen.
- Klopt het afwisselen van slagen met borststoten in scherm 5, als buikstoten niet lukken door de omvang? S034 noemt borststoten in plaats van buikstoten, zonder het afwisselen apart uit te werken.
- Moet de cursist het slachtoffer actief laten zakken als het bewusteloos raakt? Het scenario laat de cursist hem opvangen en neerleggen.

Reviewvraag: R137.
