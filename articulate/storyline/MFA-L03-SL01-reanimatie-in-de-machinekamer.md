# MFA-L03-SL01 Reanimatie in de machinekamer

Vertakt scenario bij MFA-L03 Levensbedreigende situaties. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap. Het scenario bereidt voor op het BLS-scenario in MFA-P02 en vervangt de oefening en beoordeling op de oefenpop niet.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MFA-12.01: circulatiestilstand herkennen en alarmeren. MFA-12.02: reanimatie, beademing en AED |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MFA-L03-S02 (circulatiestilstand herkennen, maximaal tien seconden, alarmeren); S19 (snakken en trekken); S04 (borstcompressies en beademing); S20 (lukt beademen niet?); S05 en S06 (de AED, natte huid, niemand raakt het slachtoffer aan); S07 (samen reanimeren, wisselen, noteren); S21 (melden aan de Radio Medische Dienst); S052, S043, S034 en S016 GH1, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 10, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical First Aid; Wim, tweede machinist, 58 jaar, fictief; Ayoub, motorman, fictief; de kapitein; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties: de controlekamer en de machinekamer, handen op de borstkas, een AED met elektroden, een notitieblok met tijden. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Het is 10.40 uur. Je loopt met Ayoub de machinekamer in. Bij de werkbank ligt Wim op de vloer. Er draait een pomp vlak naast hem en het lawaai is groot.

## Schermen

### Scherm 1 De eerste seconden

Vraag: wat doe je eerst?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je rent naar Wim en begint direct met drukken op de borstkas. | Scherm 1B | Niet goed. Ook nu begin je met veiligheid en het lezen van de situatie. Een draaiende pomp of een ander gevaar kan ook jou raken. | 0 |
| B. Je loopt naar de controlekamer om de brug te bellen en komt dan terug. | Scherm 1 opnieuw | Niet goed. Je weet nog niet wat er met Wim is. Kijk eerst of het veilig is, spreek hem aan en laat Ayoub om hulp roepen. | 0 |
| C. Je let op de draaiende pomp, en spreekt Wim dan luid aan en schudt hem. | Scherm 2 | Goed. Eerst veiligheid, dan aanspreken en schudden. Zo weet je of hij reageert. | 1 |

### Scherm 1B Eerst veiligheid (alleen bij A)

Tekst: Je stopt en kijkt om je heen. De pomp draait, maar je kunt veilig naast Wim zitten. Je spreekt hem luid aan en schudt aan zijn schouders. Doorgaan naar scherm 2. `Omweg` plus 1.

### Scherm 2 Ademt hij?

Tekst: Wim reageert niet. Je kantelt zijn hoofd en tilt zijn kin op. Je ziet af en toe een snakkende beweging met de mond. Zijn armen trekken kort.

Vraag: wat is dit?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Hij ademt en heeft een aanval. Je legt hem in stabiele zijligging. | Scherm 2 opnieuw | Niet goed. Snakkende bewegingen zijn geen normale ademhaling. Trekkingen kunnen direct na een hartstilstand voorkomen. | 0 |
| B. Hij reageert niet en ademt niet normaal. Dit kan een circulatiestilstand zijn. | Scherm 3 | Goed. Kort nadat het hart stopt, zie je vaak nog een moeizame, snakkende adembeweging. Dat is geen normale ademhaling. Snakken en trekken zijn geen tekenen van leven. | 1 |
| C. Je blijft kijken tot je zeker weet of hij ademt. | Scherm 2 opnieuw | Niet goed. Je controleert maximaal tien seconden. Twijfel je daarna nog, dan start je reanimatie. | 0 |

### Scherm 3 Alarmeren

Vraag: wat doe je nu?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je gaat zelf de AED halen en laat Ayoub bij Wim wachten. | Scherm 3 opnieuw | Niet goed. Laat Wim niet zonder reanimatie liggen. De een begint direct, de ander alarmeert en haalt de AED. | 0 |
| B. Je begint met reanimeren en alarmeert pas als je moe wordt. | Scherm 3 opnieuw | Niet goed. Snelle alarmering komt eerst, zodat de AED en hulp onderweg zijn. | 0 |
| C. Ayoub laat alarmeren en haalt de AED; jij begint met reanimeren. | Scherm 4 | Goed. Zorg eerst voor snelle alarmering en laat de AED halen. Met twee personen begint de een direct en alarmeert de ander. | 1 |

### Scherm 4 Drukken

Tekst: Wim ligt op de stalen vloer.

Vraag: hoe geef je borstcompressies?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je trekt eerst zijn overall uit en drukt dan rustig, ongeveer 60 keer per minuut. | Scherm 4 opnieuw | Niet goed. Kleed het slachtoffer niet uit voor de compressies; dat kost tijd. Druk met een tempo van ten minste 100 per minuut. | 0 |
| B. Je legt Wim eerst op een matras, zodat hij zacht en stabiel ligt. | Scherm 4 opnieuw | Niet goed. Reanimeer op een harde ondergrond. Op een matras druk je de matras in en niet de borstkas. | 0 |
| C. Midden op de borstkas, 5 tot 6 centimeter diep, 100 tot 120 per minuut, 30 op 2. | Scherm 5 | Goed. Een harde ondergrond, de juiste plaats, diep genoeg, snel genoeg en volledig loslaten. Onderbreek zo kort mogelijk. | 1 |

### Scherm 5 De borstkas komt niet omhoog

Tekst: bij de eerste beademing komt de borstkas niet omhoog. Je voelt weerstand.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je blaast harder, tot de borstkas toch omhoog komt. | Scherm 5 opnieuw | Niet goed. Harder blazen geeft lucht in de maag en braken. Controleer eerst de houding en kijk in de mond. | 0 |
| B. Hoofd en kin controleren, in de mond kijken, zichtbare voorwerpen weghalen. | Scherm 6 | Goed. Vaak is de houding de oorzaak. Haal alleen weg wat je ziet. De compressies kunnen een voorwerp losmaken. | 1 |
| C. Je stopt met beademen en geeft alleen compressies tot de AED er is. | Scherm 5 opnieuw | Niet de eerste stap. Controleer eerst de houding en kijk in de mond. Lukt beademen dan nog niet, ga dan door met de compressies en kijk na iedere 30 opnieuw. | 0 |

### Scherm 6 De AED is er

Tekst: Ayoub komt met de AED. Wims borstkas is nat van het zweet en er zit olie op zijn overall.

Vraag: wat doet Ayoub, terwijl jij doorgaat met drukken?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Hij plakt de elektroden direct op de natte huid; ze plakken toch wel. | Scherm 6 opnieuw | Niet goed. Een natte huid maak je eerst droog, zodat de elektroden goed contact maken. | 0 |
| B. AED aan, plakplaatsen droog, op een pacemaker letten en elektroden plakken. | Scherm 7 | Goed. Aanzetten, drogen, opletten bij een pacemaker en plakken, terwijl de compressies doorgaan. Zo is de onderbreking zo kort mogelijk. | 1 |
| C. Jullie dragen Wim eerst naar de droge controlekamer en beginnen daar opnieuw. | Scherm 6B | Niet goed. Verplaatsen kost tijd zonder compressies. Verplaats alleen als de omgeving onveilig is. Maak de huid droog op de plakplaatsen. | 0 |

### Scherm 6B Ter plaatse blijven (alleen bij C)

Tekst: Na een paar meter stoppen jullie. Je gaat direct verder met drukken. Ayoub maakt de borstkas droog en plakt de elektroden. Doorgaan naar scherm 7. `Omweg` plus 1.

### Scherm 7 De AED analyseert

Tekst: de AED zegt: "Analyse. Raak de patiënt niet aan." Daarna: "Schok geadviseerd."

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je houdt een hand op de borstkas, zodat je meteen verder kunt. | Scherm 7 opnieuw | Niet goed. Tijdens de analyse en de schok raakt niemand het slachtoffer aan. | 0 |
| B. Je wacht na de schok tot Wim zelf weer gaat ademen. | Scherm 7 opnieuw | Niet goed. Na de schok ga je direct door met reanimeren tot de AED opnieuw analyseert. | 0 |
| C. Iedereen afstand laten houden, controleren, schok geven en direct doordrukken. | Scherm 8 | Goed. Niemand raakt hem aan tijdens analyse en schok. Na de schok ga je direct door, tot de AED opnieuw analyseert. | 1 |

### Scherm 8 Twee minuten later

Tekst: je drukt al twee minuten. Je armen worden moe. De kapitein komt de machinekamer in.

Vraag: hoe organiseer je het nu?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Jij blijft drukken zolang het lukt, want wisselen kost tijd. | Scherm 8 opnieuw | Niet goed. Na ongeveer twee minuten wordt drukken minder effectief. Wissel om de twee minuten. | 0 |
| B. Je wisselt nu meteen, midden in een reeks compressies, met Ayoub. | Scherm 8 opnieuw | Niet de beste keuze. Wissel bij voorkeur tijdens een analyse van de AED, zodat er geen extra onderbreking is. | 0 |
| C. Wisselen bij de volgende analyse en de kapitein tijd en schokken laten noteren. | Scherm 9 | Goed. Om de twee minuten wisselen, bij voorkeur tijdens de analyse, hardop afspreken en iemand die noteert. Die gegevens heeft de arts later nodig. | 1 |

### Scherm 9 Wim ademt weer

Tekst: na de tweede schok en een paar minuten reanimeren gaat Wim weer normaal ademen. Hij reageert nog niet.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je haalt de elektroden eraf en zet de AED uit, want hij ademt weer. | Scherm 9 opnieuw | Niet goed. Laat de elektroden zitten en de AED aan. Stopt het hart opnieuw, dan analyseert de AED direct. | 0 |
| B. Je laat hem op zijn rug liggen en gaat zelf de brug bellen. | Scherm 9 opnieuw | Niet goed. Een slachtoffer dat niet reageert maar wel ademt, leg je in stabiele zijligging. Blijf bij hem en laat een ander bellen. | 0 |
| C. Stabiele zijligging, AED aan laten en de ademhaling blijven controleren. | Scherm 10 | Goed. Gaat het slachtoffer weer normaal ademen, dan leg je het in stabiele zijligging. De AED blijft aan, want het hart kan opnieuw stoppen. | 1 |

### Scherm 10 Melden

Tekst: de Radio Medische Dienst is aan de lijn.

Vraag: wat geef je door?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Hij had een hartaanval en is gereanimeerd. Het gaat nu beter." | Scherm 10 opnieuw | Te weinig. Geef de feiten: tijden, hoe lang, hoeveel schokken en wat je nu ziet. | 0 |
| B. Je laat de kapitein bellen en gaat zelf de AED alvast opruimen. | Scherm 10 opnieuw | Niet goed. Blijf bij Wim en laat de AED aan. Jij weet wat er is gebeurd; geef het door of geef de notities aan de kapitein. | 0 |
| C. Wie, tijden van vinden en reanimatie, aantal schokken, toestand nu, AED aan. | Debriefing | Goed. Je geeft hoe laat je begon, hoe lang je reanimeerde, hoeveel schokken de AED gaf, eventuele complicaties en hoe het nu met hem gaat. | 1 |

### Debriefing

Tekst: "De Radio Medische Dienst geeft advies voor de bewaking en regelt met de kapitein de verdere hulp. Jij blijft bij Wim."

Toon `Punten` van de 10 en het aantal omwegen. Toon daarna de lessen:

1. Begin met veiligheid, ook als iemand stil op de grond ligt.
2. Reageert iemand niet en ademt hij niet normaal, of twijfel je na maximaal tien seconden, start dan reanimatie. Snakken en trekken zijn geen tekenen van leven.
3. Alarmeer eerst en laat de AED halen. Met twee personen begint de een direct.
4. Druk op een harde ondergrond midden op de borstkas, 5 tot 6 centimeter diep, ten minste 100 keer per minuut. Na 30 compressies 2 beademingen.
5. Lukt beademen niet, controleer dan de houding en kijk in de mond.
6. Maak een natte huid droog, plak de elektroden en raak het slachtoffer niet aan tijdens analyse en schok.
7. Wissel om de twee minuten, bij voorkeur tijdens de analyse. Laat iemand tijden en schokken noteren.
8. Ademt het slachtoffer weer normaal, leg het dan in stabiele zijligging met de AED aan.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- Past het verloop met twee schokken en herstel na ongeveer elf minuten als oefening, zonder valse verwachtingen over de uitkomst van een reanimatie aan boord?
- Moet de draaiende pomp stilgezet worden voordat de cursist bij het slachtoffer gaat? Het scenario laat dat open en zegt alleen dat de cursist veilig naast hem kan zitten.
- Is olie op de kleding een reden om de elektroden anders te plakken? Het scenario noemt alleen het drogen van de huid, volgens S043 dia52.

- De getallen voor compressies en beademing volgen de DRTC-presentaties en PH4, zoals de les. De leidende actuele reanimatierichtlijn is nog niet gekozen (OB-03, S041). Na die keuze wordt het scenario daarop nagelopen.

Reviewvraag: R136.
