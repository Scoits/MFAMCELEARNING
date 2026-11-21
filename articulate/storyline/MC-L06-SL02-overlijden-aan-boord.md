# MC-L06-SL02 Een collega gevonden

Vertakt scenario bij MC-L06 Bijzondere zorg. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MC-22.01: waarnemingen bij een vermoedelijk overlijden doen en doorgeven. MC-22.02: handelen na een overlijden aan boord, met vastleggen, bewaren en aandacht voor de bemanning |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MC-L06-S13 (bij twijfel reanimeren, de waarnemingen, de arts stelt de dood vast); S14 (overleggen met de Radio Medische Dienst, onderzoek, vastleggen met twee getuigen, bewaren volgens de wet, aandacht voor de bemanning); S30 (het lichaam onderzoeken en bewaren, foto's, kleding, getuige); S27 (na een ernstige gebeurtenis); S017 GH2, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 9, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical Care; Willem, machinist, fictief; Sven, de collega die hem vond; de kapitein; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties: de trap in de machinekamer (zonder lichaam in beeld), een notitieblok, het logboek. Geen foto's van een overledene. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Om 06.10 uur boordtijd roept Sven je over de portofoon. Hij heeft Willem gevonden onderaan de trap in de machinekamer. Willem beweegt niet. Niemand heeft gezien wat er gebeurde.

## Schermen

### Scherm 1 Leeft hij nog?

Tekst: Willem ligt op zijn zij. Hij reageert niet als je hem aanspreekt en schudt. Je ziet niet of hij ademt. Hij voelt nog warm aan.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat Sven alarm slaan en de AED halen, controleert de ademhaling en start reanimatie als hij niet normaal ademt. | Scherm 2 | Goed. Is er twijfel of iemand nog leeft, dan start je reanimatie en neem je contact op met de arts. | 1 |
| B. Je gaat ervan uit dat hij overleden is, omdat hij van de trap is gevallen. | Scherm 1B | Niet goed. Bij twijfel start je reanimatie. Je stelt de dood niet zelf vast. | 0 |
| C. Je gaat eerst foto's maken van hoe hij ligt. | Scherm 1B | Niet goed. Zolang er twijfel is of hij leeft, gaat reanimeren voor alles. | 0 |

### Scherm 1B Bij twijfel reanimeren (alleen bij B of C)

Tekst: Je laat alsnog alarm slaan en start reanimatie. Doorgaan naar scherm 2. `Omweg` plus 1.

### Scherm 2 Wat je ziet

Tekst: als je Willem op zijn rug draait, zie je dat zijn kaak en armen stijf zijn. Aan de onderkant van zijn arm zijn paarsrode vlekken. De AED geeft geen schok. De kapitein heeft contact met de arts.

Vraag: wat geef je door aan de arts?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Hij is dood." | Scherm 2 opnieuw | Niet goed. De arts stelt de dood vast. Jij geeft je waarnemingen door. | 0 |
| B. Je waarnemingen met het tijdstip: geen ademhaling, geen hartslag met de stethoscoop, wijde pupillen die niet kleiner worden bij licht, stijfheid in kaak en armen, en vlekken op de laagste delen van het lichaam. | Scherm 3 | Goed. Lijkstijfheid en lijkvlekken wijzen erop dat de dood al langer geleden is ingetreden. De arts stelt de dood vast; jij noteert wat je hebt waargenomen. | 1 |
| C. "Ik denk dat hij al uren dood is, door een val." | Scherm 2 opnieuw | Niet goed. Je trekt geen conclusies over de oorzaak of het tijdstip. Geef je waarnemingen door. | 0 |

### Scherm 3 Na het overlijden

Tekst: de arts stelt op basis van je waarnemingen vast dat Willem is overleden en dat reanimeren niet meer zinvol is.

Vraag: wat doe je nu met de plek?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat de plek zoveel mogelijk ongemoeid, laat er niemand bij en overlegt met de Radio Medische Dienst en de kapitein over wat er moet gebeuren. | Scherm 4 | Goed. Niemand heeft gezien wat er gebeurde. Laat de plek ongemoeid tot duidelijk is wat er moet gebeuren. De arts heeft een protocol voor deze situatie. | 1 |
| B. Je laat de trap direct schoonmaken, zodat de wacht door kan. | Scherm 3 opnieuw | Niet goed. Bij een onverklaard overlijden kan later onderzoek nodig zijn. Laat de plek ongemoeid. | 0 |
| C. Je brengt Willem direct naar zijn hut. | Scherm 3 opnieuw | Niet goed. Overleg eerst. Bij een onverklaard overlijden worden eerst foto's gemaakt van het lichaam op de plek waar het lag. | 0 |

### Scherm 4 Foto's

Tekst: de kapitein vraagt je de foto's te maken, in overleg met de arts.

Vraag: hoe doe je dat?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je maakt foto's van het lichaam op de plek waar het lag, uit verschillende hoeken. Na het verplaatsen maak je ook foto's van de plek zelf. | Scherm 5 | Goed. Zo is later te zien hoe de situatie was. | 1 |
| B. Eén foto van dichtbij is genoeg. | Scherm 4 opnieuw | Te weinig. Fotografeer uit verschillende hoeken, en na het verplaatsen ook de plek zelf. | 0 |
| C. Je verplaatst hem eerst, zodat hij er beter bij ligt. | Scherm 4 opnieuw | Niet goed. Fotografeer het lichaam eerst op de plek waar het lag. | 0 |

### Scherm 5 Het onderzoek

Tekst: Willem is in overleg naar de ziekenboeg gebracht. Je gaat het lichaam onderzoeken.

Vraag: hoe begin je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je trekt handschoenen aan, en zo nodig een schort en een bril. Je noteert de datum en het precieze tijdstip en vraagt een collega erbij als getuige. | Scherm 6 | Goed. Je beschermt jezelf, legt vast wanneer je onderzoekt en zorgt voor een getuige. | 1 |
| B. Je begint meteen, alleen; dan gaat het sneller. | Scherm 5 opnieuw | Niet goed. Bescherm jezelf en laat een getuige erbij zijn die je aantekeningen meeondertekent. | 0 |
| C. Je wast eerst het lichaam. | Scherm 5 opnieuw | Niet goed. Was het lichaam niet als onderzoek nodig kan zijn. Vraag bij twijfel advies. | 0 |

### Scherm 6 Kleding en spullen

Vraag: wat doe je met Willems kleding?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je knipt de overall open, dat gaat het snelst. | Scherm 6 opnieuw | Niet goed. Trek de kleding uit zonder te scheuren of te knippen. | 0 |
| B. Je trekt de kleding uit zonder te scheuren of te knippen, noteert ieder kledingstuk, wat erop staat en of er bloed op zit, en doet alles droog in een gesloten, gemerkte zak. Ook zijn papieren en portemonnee noteer en bewaar je. | Scherm 7 | Goed. Zo blijft alles bruikbaar voor de politie of andere instanties. | 1 |
| C. Je gooit de vuile kleding weg en bewaart alleen zijn portemonnee. | Scherm 6 opnieuw | Niet goed. Bewaar alle kleding en spullen, genoteerd en gemerkt. | 0 |

### Scherm 7 Vastleggen

Vraag: waar en hoe leg je alles vast?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. In je eigen notitieboekje. | Scherm 7 opnieuw | Niet genoeg. Alle gegevens komen in het officiële logboek. | 0 |
| B. In het officiële logboek, met de beschrijving en de foto's van het lichaam, en mede ondertekend door twee collega's als getuigen. | Scherm 8 | Goed. Zo is het verslag volledig en betrouwbaar. | 1 |
| C. Alleen het tijdstip van het overlijden. | Scherm 7 opnieuw | Te weinig. Beschrijf alles wat je zag en deed, met de tijden, en laat het meeondertekenen. | 0 |

### Scherm 8 Bewaren

Tekst: de arts en de kapitein verwachten dat het schip over zes dagen een haven bereikt.

Vraag: hoe bewaar je het lichaam?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Afgezonderd van de opvarenden, zonder koeling, want het is maar zes dagen. | Scherm 8 opnieuw | Niet goed. Zonder koeling mag dat volgens de Nederlandse wet hoogstens vijf dagen. | 0 |
| B. In een lijkzak, in een hermetisch gesloten omhulsel, bij hoogstens 4 graden Celsius, en in overleg met de arts en de kapitein. | Scherm 9 | Goed. Tot acht dagen bewaar je het lichaam bij ten hoogste 4 graden in een hermetisch gesloten omhulsel. Houd zoveel mogelijk rekening met zijn godsdienst. | 1 |
| C. In de vriezer van de kombuis, bij de levensmiddelen. | Scherm 8 opnieuw | Niet goed. Bewaar het lichaam afgezonderd, in een lijkzak, volgens de regels en in overleg. | 0 |

### Scherm 9 De bemanning

Tekst: twee dagen later zie je dat Sven slecht slaapt, nauwelijks eet en de machinekamer ontloopt.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je zegt dat het wel overgaat en laat hem met rust. | Scherm 9 opnieuw | Niet goed. Nare dromen en eraan blijven denken zijn een normale reactie, maar let op wie het moeilijk heeft. | 0 |
| B. Je praat met hem, luistert, vraagt of hij meer drinkt om het te dempen en of hij eraan denkt zichzelf iets aan te doen. Je bespreekt met de kapitein hoe hij gesteund kan worden. | Debriefing | Goed. Een overlijden raakt iedereen. Duren de klachten lang en belemmeren ze het werk, dan heeft hij professionele hulp nodig. | 1 |
| C. Je zegt tegen de kapitein dat Sven niet meer geschikt is voor zijn werk. | Scherm 9 opnieuw | Niet goed. Help hem eerst en kijk samen wat hij nodig heeft. Regel zo nodig een arts in de volgende haven. | 0 |

### Debriefing

Tekst: "In de haven worden Willem en het logboek overgedragen. Jouw verslag maakt het onderzoek mogelijk."

Toon `Punten` van de 9 en het aantal omwegen. Toon daarna de lessen:

1. Bij twijfel of iemand nog leeft, start je reanimatie.
2. De arts stelt de dood vast. Jij geeft je waarnemingen door, met het tijdstip.
3. Bij een onverklaard overlijden laat je de plek ongemoeid en maak je foto's uit verschillende hoeken voordat je iets verplaatst.
4. Onderzoek met handschoenen en een getuige. Bewaar kleding en spullen genoteerd en gemerkt.
5. Leg alles vast in het officiële logboek, mede ondertekend door twee getuigen.
6. Bewaar het lichaam volgens de wet, in overleg met de arts en de kapitein.
7. Let op collega's die het moeilijk hebben.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- Is de volgorde in scherm 1 en 2 juist: reanimatie starten bij twijfel, en pas bij lijkstijfheid en lijkvlekken stoppen in overleg met de arts? Moet het scenario zeggen wanneer je stopt?
- Kloppen de bewaartermijnen uit MC-L06-S14 (vijf dagen, acht dagen bij hoogstens 4 graden in een hermetisch gesloten omhulsel) nog met de actuele wet?
- Is het passend om de cursist zelf de foto's te laten maken, of doet de kapitein dat?

Reviewvraag: R127.
