# MFA-L02-SL01 De collega in de werkplaats

Vertakt scenario bij MFA-L02 Lichaamsbouw en systematisch slachtofferonderzoek. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap. Het scenario bereidt voor op het systematisch onderzoek in MFA-P03 en de herbeoordeling in SC-MFA-02 en vervangt die niet.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MFA-04.01: veilig benaderen, eerste indruk en systematische volgorde. MFA-04.02: gerichte anamnese. MFA-04.03: metingen uitvoeren, vastleggen en gebruiken. MFA-04.04: herbeoordelen en veranderingen overdragen |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MFA-L02-S09 (veilig benaderen en eerste indruk); S41 (vijf vaste regels); S10 en S11 (DRS-ABCDE, catastrofale bloeding eerst); S42 en S43 (vitale functies en bewustzijn); S12 (de anamnese, collega's vragen); S14 (metingen); S16 en S17 (herbeoordelen en overdragen); S016 GH1, S034 en S046, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 10, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical First Aid; Robin, lasser, 35 jaar, fictief; Tim, motorman, fictief, zag het gebeuren; de officier van de wacht; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties: de werkplaats met een slijpmachine, een slachtoffer op de vloer, het patiëntevaluatieformulier, een tabel met metingen op twee tijdstippen. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Het is 14.05 uur. Tim roept je naar de werkplaats. "Robin is bij de slijpmachine in elkaar gezakt. Hij is niet gevallen, hij zakte langzaam door zijn knieën." Je hoort de slijpmachine nog draaien.

## Schermen

### Scherm 1 In de deuropening

Vraag: wat doe je eerst?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je loopt direct naar Robin; de slijpmachine staat toch aan de andere kant. | Scherm 1B | Niet goed. Kijk eerst of er gevaar is voor jou, het slachtoffer of anderen. Als jou iets overkomt, kun je niemand meer helpen. | 0 |
| B. Je kijkt om je heen, laat de machine uitzetten en gaat dan naar Robin. | Scherm 2 | Goed. Eerst veiligheid. Bewegende delen kunnen ook jou raken. Neem het gevaar weg en help dan. | 1 |
| C. Je sleept Robin meteen de gang in, weg van de machine. | Scherm 1 opnieuw | Niet goed. Verplaatsen kan letsel erger maken. Neem eerst het gevaar weg; help waar het slachtoffer ligt als dat veilig kan. | 0 |

### Scherm 1B Eerst veiligheid (alleen bij A)

Tekst: Je stopt en laat Tim de slijpmachine uitzetten. Dan ga je naar Robin. Doorgaan naar scherm 2. `Omweg` plus 1.

### Scherm 2 Reageert hij?

Tekst: Robin ligt op zijn rug. Er ligt bloed op de vloer naast zijn linkerarm.

Vraag: wat doe je nu?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je begint meteen met het onderzoek van zijn hoofd en hals. | Scherm 2 opnieuw | Te vroeg. Spreek hem eerst aan en roep om hulp. Dan weet je of hij reageert en komt er hulp. | 0 |
| B. Je spreekt hem aan, schudt zacht, vraagt wat er gebeurde en laat alarmeren. | Scherm 3 | Goed. Reactie en hulp: zo weet je of hij reageert en komt er hulp. | 1 |
| C. Je wacht tot de officier van de wacht er is en zegt wat te doen. | Scherm 2 opnieuw | Niet goed. Begin zelf. Spreek hem aan en laat een ander alarmeren. | 0 |

### Scherm 3 De bloeding

Tekst: Robin reageert met een kreun. Uit een wond in zijn linkeronderarm spuit bloed. Je hoort een snurkend geluid bij het ademen.

Vraag: wat behandel je eerst?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Eerst de ademweg, want A komt voor C. | Scherm 3 opnieuw | Niet goed. Een catastrofale bloeding stop je als eerste, nog voor de ademweg. Dat is de eerste C van DRS-ABCDE. | 0 |
| B. Je stopt eerst de spuitende bloeding, zoals in les 3. | Scherm 4 | Goed. Behandel eerst wat het eerst doodt. Een levensbedreigende uitwendige bloeding stop je als eerste. | 1 |
| C. Je onderzoekt hem eerst helemaal en behandelt daarna alles tegelijk. | Scherm 3 opnieuw | Niet goed. Je behandelt wat je vindt voordat je naar de volgende letter gaat. Een spuitende bloeding wacht niet. | 0 |

### Scherm 4 Het snurken

Tekst: de bloeding is gestopt. Robin snurkt nog bij het ademen.

Vraag: wat doe je bij A?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat het zo, want snurken betekent dat hij ademt. | Scherm 4 opnieuw | Niet goed. Snurken kan betekenen dat de ademweg gedeeltelijk dicht is, bijvoorbeeld door de tong. | 0 |
| B. Je laat hem een slok water drinken om de keel vrij te maken. | Scherm 4 opnieuw | Niet goed. Geef niets te drinken aan iemand die niet goed reageert. Maak de ademweg vrij. | 0 |
| C. Hoofd kantelen, kin optillen, in de mond kijken en luisteren of het stopt. | Scherm 5 | Goed. Bij A kijk je of de ademweg vrij is. Snurken of rochelen wijst op een probleem dat je eerst oplost. | 1 |

### Scherm 5 De ademhaling

Tekst: het snurken stopt.

Vraag: wat doe je bij B?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je vraagt Robin of hij goed kan ademen en of het pijn doet. | Scherm 5 opnieuw | Te weinig. Hij reageert nauwelijks. Kijk, tel en luister zelf. | 0 |
| B. Je telt de ademhaling, kijkt naar moeite, geluid en beide kanten. | Scherm 6 | Goed. Zo ontdek je een ademhalingsprobleem, zoals een kant die niet meebeweegt. | 1 |
| C. Je gaat verder met C, want hij ademt en dat is genoeg. | Scherm 5 opnieuw | Te weinig. Bij B tel je de ademhaling, kijk je of het moeite kost, luister je en kijk je of beide kanten gelijk bewegen. | 0 |

### Scherm 6 De circulatie

Vraag: wat doe je bij C?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Alleen de pols, want de bloeding is al gestopt en hij is wakker. | Scherm 6 opnieuw | Te weinig. Er kan nog een andere bloeding zijn, ook een inwendige. Kijk ook naar de huid en denk aan grote breuken. | 0 |
| B. Je meet eerst de bloeddruk; de rest van C komt later wel. | Scherm 6 opnieuw | Niet de goede volgorde. Bij C begin je met de pols, de huid en het zoeken naar bloedingen. De metingen leg je daarna vast. | 0 |
| C. Pols tellen, huid bekijken, andere bloedingen zoeken en denken aan grote breuken. | Scherm 7 | Goed. Pols, huid, andere bloedingen en grote breuken. Een gebroken bekken of bovenbeen kan veel bloedverlies geven. | 1 |

### Scherm 7 Het bewustzijn

Tekst: na luid aanspreken doet Robin zijn ogen open. Op je vraag waar hij is, zegt hij: "Thuis, bij mijn moeder."

Vraag: wat zegt dit over D?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Hij is bij bewustzijn en praat, dus het bewustzijn is normaal. | Scherm 7 opnieuw | Niet goed. Alleen wie de ogen uit zichzelf opent en normaal antwoord geeft, heeft een normaal bewustzijn. | 0 |
| B. Hij maakt een grapje; je vraagt het later nog eens. | Scherm 7 opnieuw | Niet goed. Een verkeerd antwoord op een eenvoudige vraag is een teken van een verminderd bewustzijn. Leg het nu vast. | 0 |
| C. Verminderd: GCS, pupillen en bewegen van armen en benen, met tijd noteren. | Scherm 8 | Goed. Hij opent de ogen pas bij aanspreken en is niet georiënteerd. Het bewustzijn is de beste graadmeter voor de vitale functies. | 1 |

### Scherm 8 Van top tot teen

Vraag: wat doe je bij E?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je onderzoekt alleen de arm met de wond, want daar zit het letsel. | Scherm 8 opnieuw | Te weinig. Ook als iemand in elkaar zakt, kan er ander letsel zijn. Onderzoek het hele lichaam van top tot teen. | 0 |
| B. Van top tot teen volgens het formulier, warm houden en niet onnodig bewegen. | Scherm 9 | Goed. Een vaste volgorde voorkomt dat je iets mist. Houd hem warm en beweeg hem niet onnodig. | 1 |
| C. Je trekt al zijn kleren uit om alles goed te kunnen bekijken. | Scherm 8 opnieuw | Niet goed. Houd het slachtoffer warm en respecteer de privacy. Kijk per deel en beweeg hem niet onnodig. | 0 |

### Scherm 9 Wat is er gebeurd?

Tekst: Robin kan je vragen niet goed beantwoorden.

Vraag: hoe kom je aan de anamnese?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je slaat de anamnese over, want Robin kan nu toch niets vertellen. | Scherm 9 opnieuw | Niet goed. De arts op afstand is afhankelijk van jouw vragen. Vraag het aan anderen als het slachtoffer niet kan antwoorden. | 0 |
| B. Je vraagt Tim en collega's wat er gebeurde en naar Robins gezondheid. | Scherm 10 | Goed. Kan het slachtoffer niet antwoorden, vraag dan collega's wat zij hebben gezien en weten. De toedracht helpt de arts in te schatten wat er aan de hand is. | 1 |
| C. Je blijft Robin dezelfde vragen stellen tot hij antwoordt. | Scherm 9 opnieuw | Niet goed. Een slachtoffer dat niet kan antwoorden, kun je niet bevragen. Vraag collega's wat zij hebben gezien. | 0 |

### Scherm 10 Een kwartier later

Tekst: om 14.10 uur was de pols 88 per minuut en reageerde Robin op aanspreken. Om 14.25 uur is de pols 112. Hij is bleker, zweet en reageert alleen als je hem hard aanspreekt.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je wacht op de volgende meting om zeker te weten dat het erger wordt. | Scherm 10B | Niet goed. Een snellere pols, een bleke, klamme huid en minder goed reageren zijn tekenen van verslechtering. Meld het direct. | 0 |
| B. Je laat hem rustig liggen, want hij is moe van de val. | Scherm 10B | Niet goed. Suffer worden kan betekenen dat een vitale functie tekortschiet. Herhaal ABCDE en meld het direct. | 0 |
| C. ABCDE herhalen, noteren en de verslechtering direct melden aan wacht en arts. | Debriefing | Goed. Je blijft herbeoordelen tot de zorg is overgedragen. Een verslechtering meld je direct, in een vaste volgorde. | 1 |

### Scherm 10B Direct melden (alleen bij A of B)

Tekst: Je herhaalt ABCDE en de metingen en laat direct de officier van de wacht en de arts van de Radio Medische Dienst waarschuwen. Doorgaan naar Debriefing. `Omweg` plus 1.

### Debriefing

Tekst: "De arts geeft advies voor de verdere zorg en vraagt naar de oorzaak van het in elkaar zakken. Jouw formulier laat precies zien wat je vond en wanneer het veranderde."

Toon `Punten` van de 10 en het aantal omwegen. Toon daarna de lessen:

1. Begin met veiligheid: neem het gevaar weg voordat je helpt.
2. Spreek aan, schud voorzichtig en laat alarmeren.
3. Werk volgens DRS-ABCDE. Een catastrofale bloeding stop je als eerste, en je behandelt wat je vindt voordat je verder gaat.
4. Alleen wie de ogen uit zichzelf opent en normaal antwoord geeft, heeft een normaal bewustzijn.
5. Onderzoek van top tot teen, houd het slachtoffer warm en beweeg het niet onnodig.
6. Kan het slachtoffer niet antwoorden, vraag dan collega's wat zij hebben gezien.
7. Herhaal ABCDE en de metingen. Meld een verslechtering direct, in een vaste volgorde.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- De casus is bewust geen val van hoogte, zodat hoofd kantelen en kin optillen past. Bij een val van hoogte geldt MFA-L04-S42. Is het voorbeeld zo duidelijk genoeg?
- Passen de oefenwaarden (pols 88 en daarna 112 in een kwartier) als oefening, zonder dat het scenario grenswaarden suggereert?

Reviewvraag: R141.
