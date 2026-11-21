# MC-L08-SL02 Overdracht in de haven

Vertakt scenario bij MC-L08 Gecoördineerde medische hulp en evacuatie. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MC-30.01: overdracht en vervolgzorg in de haven organiseren. MC-30.02: overdragen bij een taal- of cultuurverschil en begrip controleren |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MC-L08-S12 (overdracht in de haven: vooraf, meegeven, terugkoppeling); S23 (de brief die met de patiënt meegaat); S13 (taal en cultuur: eenvoudig spreken, opschrijven, begrip controleren, tolk met toestemming); S14 (een arts die geen Engels spreekt); S15 (overdrachten vastleggen); S025 IMGS, S048 en S004, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 9, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical Care; Rafael, matroos, 33 jaar, fictief; Diego, kok, fictief, spreekt Spaans; de kapitein; een havenarts die weinig Engels spreekt, fictief |
| Media | Eigen illustraties: de ziekenboeg, een medische kaart en een brief in het Engels, een loopplank, een havenarts aan boord. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Rafael heeft sinds drie dagen koorts en diarree. Hij ligt afgezonderd in de ziekenboeg. De arts van de Radio Medische Dienst heeft geadviseerd hem in de volgende haven door een arts te laten zien. Het schip komt over tien uur aan in een Spaanse haven.

## Schermen

### Scherm 1 Tien uur voor aankomst

Vraag: wat regel je nu?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je overlegt met de kapitein, die via de agent een arts of ziekenhuis regelt. | Scherm 2 | Goed. De kapitein regelt het contact met de wal. Jij levert de medische informatie. | 1 |
| B. Niets bijzonders; in de haven bel je gewoon een ambulance. | Scherm 1B | Niet goed. Bereid de overdracht vooraf voor. Dan staat de zorg klaar als het schip aankomt. | 0 |
| C. Je zegt tegen Rafael dat hij in de haven zelf naar een dokter kan gaan. | Scherm 1 opnieuw | Niet goed. Een zieke opvarende laat je niet zelf zijn zorg regelen in een vreemde haven. Bereid de overdracht met de kapitein voor. | 0 |

### Scherm 1B Toch vooraf regelen (alleen bij B)

Tekst: De kapitein vraagt je om de overdracht nu al voor te bereiden, zodat de haven weet wat er komt. Doorgaan naar scherm 2. `Omweg` plus 1.

### Scherm 2 Wat de haven vooraf moet weten

Tekst: Rafael heeft koorts en diarree en ligt afgezonderd, omdat het een besmettelijke ziekte kan zijn.

Vraag: wat geef je de kapitein door voor de melding vooraf?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Koorts en diarree sinds drie dagen, afgezonderd, en het advies van de RMD. | Scherm 3 | Goed. Een mogelijk besmettelijke ziekte meld je altijd vooraf, met wat je hebt gedaan om verspreiding te voorkomen. | 1 |
| B. Alleen dat er een zieke opvarende aan boord is. | Scherm 2 opnieuw | Te weinig. Een mogelijk besmettelijke ziekte meld je altijd vooraf. Dan kan de haven maatregelen nemen. | 0 |
| C. Niets over de diarree, anders mag het schip misschien niet aanmeren. | Scherm 2 opnieuw | Niet goed. Een mogelijk besmettelijke ziekte verzwijg je niet. Je meldt het altijd vooraf. | 0 |

### Scherm 3 De brief

Vraag: wat zet je in de brief die met Rafael meegaat?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Patient has diarrhoea and fever since three days. Please treat." | Scherm 3 opnieuw | Te weinig. Een vreemde arts heeft het verloop, de metingen, de medicijnen en de adviezen nodig. | 0 |
| B. Gegevens van hem en het schip, klachten, metingen, middelen en adviezen, in eenvoudig Engels. | Scherm 4 | Goed. De arts kent Rafael niet en spreekt misschien een andere taal. De brief moet zonder uitleg te begrijpen zijn. | 1 |
| C. Je schrijft niets op; je vertelt het de arts als hij aan boord komt. | Scherm 3 opnieuw | Niet goed. Geef altijd een brief of formulier mee. Getallen en tijden zijn op papier minder snel verkeerd begrepen. | 0 |

### Scherm 4 De havenarts komt aan boord

Tekst: de havenarts spreekt weinig Engels. Diego, de kok, spreekt Spaans.

Vraag: hoe pak je dit aan?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat Diego de hele overdracht doen, want hij spreekt de taal. | Scherm 4 opnieuw | Onvoldoende. Diego kan tolken, maar jij blijft verantwoordelijk voor de inhoud van de overdracht. En Rafael moet toestemming geven. | 0 |
| B. Je vertelt alles snel in het Engels; medische woorden zijn internationaal. | Scherm 4 opnieuw | Niet goed. Je weet niet of de arts je begrijpt. Snelle uitleg met vaktaal vergroot de kans op misverstanden. | 0 |
| C. Met toestemming van Rafael laat je Diego tolken; jij doet de overdracht. | Scherm 5 | Goed. Een collega kan tolken als de patiënt dat goedvindt; medische informatie is vertrouwelijk. Jij blijft verantwoordelijk voor de inhoud. | 1 |

### Scherm 5 Zo vertel je het

Vraag: hoe geef je de metingen door?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Korte zinnen, met eenheid en tijd, en je wijst de metingen aan in de brief. | Scherm 6 | Goed. Korte zinnen, gewone woorden, eenheden en tijden, en de getallen op papier erbij. | 1 |
| B. "T 38,9, P 104, BD 110/70, RMD-advies opgevolgd, verder geen bijzonderheden." | Scherm 5 opnieuw | Niet goed. Afkortingen en vaktaal worden snel verkeerd begrepen, zeker via een tolk. Noem de metingen voluit, met de eenheid en het tijdstip. | 0 |
| C. "Hij is echt heel erg ziek, met hoge koorts en veel diarree." | Scherm 5 opnieuw | Te weinig. Geef de metingen zelf, met de eenheid en het tijdstip. "Hoge koorts" betekent voor iedereen iets anders. | 0 |

### Scherm 6 Heeft de arts het begrepen?

Tekst: de havenarts knikt en zegt: "Okay, okay."

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je bent klaar, want hij heeft geknikt en lijkt het te begrijpen. | Scherm 6B | Niet goed. Knikken betekent niet dat iemand het heeft begrepen. Controleer het. | 0 |
| B. Je laat de arts via Diego herhalen wat hij heeft gehoord. | Scherm 7 | Goed. Laat de ander in eigen woorden herhalen, zoals bij het radiomedisch advies. Zo merk je een misverstand op tijd. | 1 |
| C. Je herhaalt alles nog een keer, langzamer en harder. | Scherm 6 opnieuw | Niet goed. Harder praten maakt het niet begrijpelijker. Laat de arts in eigen woorden herhalen. | 0 |

### Scherm 6B Begrip controleren (alleen bij A)

Tekst: Je vraagt de arts alsnog, via Diego, te herhalen wat hij heeft gehoord. Hij noemt de koorts op de verkeerde dag. Je corrigeert het met de brief erbij. Doorgaan naar scherm 7. `Omweg` plus 1.

### Scherm 7 Rafael

Tekst: de arts wil Rafael meenemen naar het ziekenhuis voor onderzoek. Rafael kijkt bezorgd en zegt weinig.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je legt het eenvoudig uit en laat hem herhalen waar hij heen gaat en waarom. | Scherm 8 | Goed. Ook bij de patiënt controleer je of hij het begrijpt. Culturele verschillen kunnen bepalen hoe iemand over klachten praat; vraag daarom door. | 1 |
| B. Je zegt dat het wel goed komt en pakt alvast zijn tas in. | Scherm 7 opnieuw | Te weinig. Vraag na of Rafael begrijpt wat er gaat gebeuren. Een patiënt die weet waar hij aan toe is, is rustiger. | 0 |
| C. Je laat de havenarts het hem uitleggen, want dat is diens taak. | Scherm 7 opnieuw | Niet goed. De arts spreekt weinig Engels. Jij kent Rafael en kunt nagaan of hij het begrijpt. | 0 |

### Scherm 8 Wat gaat er mee?

Vraag: wat geef je mee?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Kaart, brief, formulier, logboekregels, documenten en eigen medicijnen. | Scherm 9 | Goed. Met deze stukken kan de zorg aan de wal verder waar jij bent gebleven. | 1 |
| B. Alleen de brief voor de havenarts, in een envelop. | Scherm 8 opnieuw | Te weinig. Geef ook de medische kaart, het ingevulde evaluatieformulier, de logboekregels, zijn documenten en zijn eigen medicijnen mee. | 0 |
| C. Zijn hele dossier van boord, zodat het ziekenhuis alles heeft. | Scherm 8 opnieuw | Niet goed. Het dossier en een kopie van de brief blijven aan boord. Geef de kaart, de brief, het formulier en de logboekregels mee. | 0 |

### Scherm 9 Na de overdracht

Vraag: wat regel je nog?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Niets, want Rafael is van boord, dus jouw taak is klaar. | Scherm 9 opnieuw | Niet goed. Vraag om terugkoppeling op de medische kaart en leg de overdracht vast. Het schip moet weten of hij kan terugkomen. | 0 |
| B. Je belt morgen het ziekenhuis om te vragen wat Rafael heeft. | Scherm 9 opnieuw | Te weinig. Regel de terugkoppeling nu via de medische kaart, en leg de overdracht direct vast. | 0 |
| C. Havenarts zijn deel van de kaart laten invullen en de overdracht noteren. | Debriefing | Goed. Met de terugkoppeling weet het schip of Rafael terugkomt en wat er nodig is. De overdracht leg je vast met tijdstip, aan wie en wat. | 1 |

### Debriefing

Tekst: "Rafael wordt in het ziekenhuis onderzocht. De havenarts heeft zijn deel van de medische kaart ingevuld. Het schip weet wat de vervolgzorg is."

Toon `Punten` van de 9 en het aantal omwegen. Toon daarna de lessen:

1. Bereid een overdracht in de haven vooraf voor met de kapitein. Een mogelijk besmettelijke ziekte meld je altijd vooraf.
2. Geef altijd een brief of kaart mee die een vreemde arts zonder uitleg begrijpt, en bewaar een kopie.
3. Een collega kan tolken als de patiënt dat goedvindt. Jij blijft verantwoordelijk voor de inhoud.
4. Spreek in korte zinnen, zonder afkortingen, en noem metingen met de eenheid en het tijdstip.
5. Knikken is geen begrip. Laat de arts en de patiënt in eigen woorden herhalen.
6. Vraag om terugkoppeling op de medische kaart en leg de overdracht vast met tijdstip, aan wie en wat.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- Kloppen de rol van de agent en de havenautoriteit en het vooraf melden van een besmettelijke ziekte met de werkwijze van DRTC (R85)?
- Is de brief een apart document naast de medische kaart, of volstaat de kaart (vraag bij MC-L08-S23)? Het scenario geeft beide mee.
- Wordt de medische kaart in het Engels ingevuld (R80)?
- Is een collega als tolk een goede oefenkeuze, of noemt DRTC ook een telefonische tolk?

Reviewvraag: R135.
