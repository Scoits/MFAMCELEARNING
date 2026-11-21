# MC-L02-SL01 Val in het ruim

Vertakt scenario bij MC-L02 Verdiepende traumazorg. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MC-01.01: signalen van ernstig hoofdletsel herkennen en het bewustzijn bewaken. MC-01.02: zorg en vervoer bij vermoeden van wervelletsel. MC-03.01: inwendig bloedverlies herkennen en de urgentie uitleggen. MC-05.01 en MC-05.02: een bekkenbreuk vermoeden, stabiliseren en het effect controleren |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MC-L02-S02 (hoofdletsel bewaken en op tijd melden); S14 (val van meer dan vier meter, meerdere letsels); S15 (bewakingsschema, GCS na 30 minuten); S03 en S18 (wervelletsel en nekletsel, GCS lager dan 15, kraag alleen af op advies); S08 en S24 (inwendig bloedverlies en shock, wat je niet doet); S13 (bekkenbreuk stabiliseren); MC-L01-S02 (veiligheid en vaste volgorde); S045, S065, S025 IMGS en S046, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 9, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical Care; Mark, matroos, 38 jaar, fictief; de bootsman en drie helpers; de kapitein; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties: een open ruim met een ladder, een GCS-blok van het formulier, een reddingsdeken om het bekken, een vacuümmatras op een brancard. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Het is 15.10 uur. De bootsman roept je via de portofoon: "Mark is in ruim 2 gevallen, van ongeveer vijf meter. Hij ligt onderaan de ladder en kreunt." Je pakt de traumatas en gaat naar het ruim.

## Schermen

### Scherm 1 Bij het ruim

Tekst: het luik staat open. De ventilatie van het ruim draait. Onderaan ligt Mark op zijn rug tussen twee pallets.

Vraag: wat doe je eerst?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je klimt direct naar beneden, want iedere seconde telt. | Scherm 1B | Niet goed. Ook bij een gewonde begin je met je eigen veiligheid. Vraag of het ruim veilig is om in te gaan en of er niets meer kan vallen. | 0 |
| B. Je vraagt de bootsman of het ruim veilig is om in te gaan en of er niets kan vallen, laat de kapitein waarschuwen en daalt dan af. | Scherm 2 | Goed. Danger, Response, Send: eerst veiligheid, dan het slachtoffer, en zorg dat er hulp komt. | 1 |
| C. Je roept naar Mark dat hij naar boven moet komen als hij kan. | Scherm 1 opnieuw | Niet goed. Na een val van vijf meter laat je hem niet zelf bewegen. Hij kan letsel aan nek of rug hebben. | 0 |

### Scherm 1B Eerst veiligheid (alleen bij A)

Tekst: Halverwege de ladder stop je. Je vraagt de bootsman of het ruim veilig is en laat de kapitein waarschuwen. Pas dan daal je verder af. Doorgaan naar scherm 2. `Omweg` plus 1.

### Scherm 2 Het hoofd

Tekst: Mark reageert op je stem, maar hij praat traag. Hij zegt dat zijn nek pijn doet.

Vraag: wat doe je nu?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat hem zijn hoofd draaien om te zien waar de pijn zit. | Scherm 2 opnieuw | Niet goed. Na een val van meer dan vier meter denk je aan nekletsel. Laat hem zijn hoofd niet bewegen. | 0 |
| B. Je legt een opgerolde jas onder zijn hoofd, zodat hij makkelijker ligt. | Scherm 2 opnieuw | Niet goed. Daarmee beweeg je de nek. Houd het hoofd stil met je handen. | 0 |
| C. Je stabiliseert zijn hoofd met je handen en laat het niet meer los tot hoofd en nek op een andere manier zijn ondersteund. Een helper neemt het over terwijl jij ABCDE doet. | Scherm 3 | Goed. Na een val van meer dan vier meter heeft iemand vaak meerdere letsels tegelijk, ook aan de nek en de wervelkolom. Het hoofd blijft stil. | 1 |

### Scherm 3 Bewustzijn en nek

Tekst: A, B en C zijn op dit moment in orde. Je meet de GCS met het formulier: 14. Mark weet niet meer hoe hij gevallen is. Zijn pupillen zijn even groot en reageren op licht.

Vraag: wat doe je met de nek?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. De GCS is lager dan 15, dus je kunt de nek niet betrouwbaar beoordelen. Je zet de nek vast met een nekkraag volgens de DRTC-werkwijze, schrijft de GCS en de pupillen op met de tijd en meet na 30 minuten opnieuw. | Scherm 4 | Goed. Bij een GCS lager dan 15 kun je de nek niet beoordelen. De nek blijft vast en je volgt het bewustzijn. | 1 |
| B. Je vraagt hem zijn hoofd voorzichtig te bewegen; als het lukt, is er niets met de nek. | Scherm 3 opnieuw | Niet goed. Met een GCS van 14 is zijn antwoord niet betrouwbaar. Je laat de nek vast zitten. | 0 |
| C. Hij praat, dus de nek is in orde. | Scherm 3 opnieuw | Niet goed. Praten zegt niets over de wervelkolom. Bij een GCS lager dan 15 laat je de nek vast zitten. | 0 |

### Scherm 4 Pijn in het bekken

Tekst: bij E zie je dat Marks voeten en benen naar buiten vallen. Hij heeft pijn laag in zijn buik en zijn broek is nat van urine.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat de benen liggen zoals ze liggen; aan een breuk doe je niets. | Scherm 4 opnieuw | Niet goed. Een val van hoogte, benen die naar buiten vallen en urineverlies passen bij een bekkenbreuk. Die stabiliseer je. | 0 |
| B. Je laat de kapitein contact leggen met de arts. Je brengt de voeten naar elkaar toe, legt met de kantelmethode een reddingsdeken onder het bekken, sluit hem stevig met tape en controleert vóór en na pols, bloeddruk, gevoel en doorbloeding van de benen. | Scherm 5 | Goed. Zo sluit je het open boek. Met de controle voor en na zie je of het effect heeft en of er iets verandert. | 1 |
| C. Je laat Mark even rechtop zitten om te zien of hij zijn benen kan bewegen. | Scherm 4 opnieuw | Niet goed. Bij vermoeden van een bekkenbreuk en nekletsel laat je hem niet zelf bewegen. | 0 |

### Scherm 5 Uit het ruim

Tekst: Mark moet naar de ziekenboeg. Er zijn drie helpers, een vacuümmatras, een brancard en een hijsmogelijkheid.

Vraag: hoe verplaats je hem?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Twee helpers tillen hem onder zijn armen en knieën op de brancard. | Scherm 5 opnieuw | Niet goed. Zo buig je de wervelkolom en het bekken. Beweeg hem als één geheel. | 0 |
| B. Je wacht met verplaatsen tot de arts terugbelt, ook als dat een uur duurt. | Scherm 5 opnieuw | Niet goed. In een ruim kun je hem niet goed verzorgen en bewaken. Verplaats hem, maar op een manier die de wervelkolom en het bekken beschermt. | 0 |
| C. Je controleert kracht en gevoel in armen en benen. Eén persoon aan het hoofd stuurt de kantelmethode aan. Mark gaat in de vacuümmatras en met de brancard naar boven. In de ziekenboeg controleer je kracht en gevoel opnieuw en schrijf je alles op. | Scherm 6 | Goed. Zo weinig mogelijk bewegen, als één geheel, met één persoon die aanstuurt. De controle voor en na laat zien of er iets is veranderd. | 1 |

### Scherm 6 In de ziekenboeg

Tekst: om 15.40 uur is Mark bleek en klam. Hij zegt dat hij dorst heeft. De pols was in het ruim 88 per minuut en is nu 116. Je ziet geen bloeding.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Hij blijft liggen in de vacuümmatras. Je houdt hem warm, geeft niets te drinken, meet bewustzijn, ademhaling, pols en bloeddruk met de tijd en laat direct contact leggen met de arts met het oog op evacuatie. | Scherm 7 | Goed. Een stijgende pols, bleekheid en dorst na een val wijzen op inwendig bloedverlies, bijvoorbeeld bij een bekkenbreuk. Die bloeding kun je aan boord niet stoppen. | 1 |
| B. Je geeft hem een beker water, want hij heeft dorst. | Scherm 6B | Niet goed. Geef niets via de mond aan iemand met een verminderd bewustzijn of die misschien geopereerd moet worden. | 0 |
| C. Je wacht tot de volgende meting om te zien of de pols nog verder stijgt. | Scherm 6B | Niet goed. Wacht niet. Het verloop wijst nu al op bloedverlies. Meld het direct. | 0 |

### Scherm 6B Direct handelen (alleen bij B of C)

Tekst: Je zet de beker weg, houdt Mark warm en laat de kapitein direct contact leggen met de arts. Doorgaan naar scherm 7. `Omweg` plus 1.

### Scherm 7 Het gesprek met de arts

Vraag: wat vertel je de arts?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Hij is gevallen en heeft overal pijn. Kunt u een helikopter sturen?" | Scherm 7 opnieuw | Te weinig. De arts heeft het ongeval, je bevindingen en het verloop nodig. Het besluit over evacuatie neemt de arts met het MRCC. | 0 |
| B. Een val van ongeveer vijf meter om 15.10 uur. GCS 14, weet niet hoe hij viel, pupillen gelijk en reageren. Nekpijn, nek vastgezet. Benen vielen naar buiten, urineverlies, bekken gestabiliseerd. Kracht en gevoel voor en na de verplaatsing. Pols van 88 naar 116, bleek, klam en dorst. Niets te drinken of te eten gegeven. | Scherm 8 | Goed. De arts hoort het ongeval, het bewustzijn met de tijd, wat je hebt gedaan en het verloop van de pols. | 1 |
| C. "Hij heeft een gebroken bekken en een inwendige bloeding." | Scherm 7 opnieuw | Niet goed. Dat zijn conclusies zonder de waarnemingen. Geef de feiten en laat de arts oordelen. | 0 |

### Scherm 8 Na 30 minuten

Tekst: de arts vraagt je de GCS en de pupillen te blijven controleren. Om 15.50 uur meet je opnieuw. De GCS is gedaald naar 12. Zijn rechterpupil is groter dan de linker.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat hem rusten; met het bewakingsschema kijk je over twee uur opnieuw. | Scherm 8B | Niet goed. Een dalende GCS en ongelijke pupillen zijn signalen van ernstig hoofdletsel. Die meld je direct. | 0 |
| B. Je laat hem slapen, want hij is moe van de schrik. | Scherm 8B | Niet goed. Suffer worden na hoofdletsel kan betekenen dat een bloeding onder de schedel erger wordt. Meld het direct. | 0 |
| C. Je schrijft de GCS en de pupillen op met de tijd en laat direct contact leggen met de arts. Je meldt dat de GCS van 14 naar 12 is gedaald en dat de pupillen nu ongelijk zijn. | Scherm 9 | Goed. Iemand die eerst redelijk helder is, kan later suf worden. Een daling meld je direct, met de waarden en de tijd. | 1 |

### Scherm 8B Direct melden (alleen bij A of B)

Tekst: Je laat de kapitein alsnog direct contact leggen en meldt de daling van de GCS en de ongelijke pupillen met de tijd. Doorgaan naar scherm 9. `Omweg` plus 1.

### Scherm 9 Wachten op de helikopter

Tekst: de arts en het MRCC regelen een evacuatie. De helikopter is over ongeveer een uur bij het schip. Mark klaagt dat de nekkraag knelt.

Vraag: wat doe je tot de overdracht?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je doet de nekkraag even af, zodat hij beter ligt. | Scherm 9 opnieuw | Niet goed. De kraag gaat alleen af als de arts dat adviseert en je voldoende helpers hebt. | 0 |
| B. Je bewaakt GCS, pupillen, kracht en gevoel, pols, ademhaling en bloeddruk en schrijft alles op met de tijd. Je geeft niets via de mond, houdt hem warm en legt de gegevens klaar voor de overdracht. | Debriefing | Goed. Je volgt hem tot de overdracht, zodat de volgende hulpverlener het hele verloop kent. | 1 |
| C. Je gaat aan dek helpen met de voorbereiding van de landing. | Scherm 9 opnieuw | Niet goed. Een patiënt die verslechtert, laat je niet alleen. Anderen bereiden het dek voor. | 0 |

### Debriefing

Tekst: "Mark wordt met de helikopter naar een ziekenhuis gebracht. Jouw formulier met de metingen en de tijden gaat met hem mee."

Toon `Punten` van de 9 en het aantal omwegen. Toon daarna de lessen:

1. Begin met je eigen veiligheid, ook als iemand gewond ligt.
2. Na een val van meer dan vier meter denk je aan meerdere letsels, ook aan de nek en de wervelkolom. Houd het hoofd stil.
3. Bij een GCS lager dan 15 kun je de nek niet beoordelen. De nek blijft vast tot de arts iets anders adviseert.
4. Een bekken dat openvalt als een boek stabiliseer je met een reddingsdeken. Controleer voor en na pols, bloeddruk, gevoel en doorbloeding.
5. Een stijgende pols, bleekheid en dorst zonder zichtbare bloeding kunnen wijzen op inwendig bloedverlies. Geef niets te drinken en overleg direct.
6. Een dalende GCS of ongelijke pupillen meld je direct, met de waarden en de tijd.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- Passen de oefenwaarden (GCS 14 en daarna 12, pols 88 en daarna 116) en het verloop binnen 40 minuten als oefening, zonder dat het scenario grenswaarden suggereert?
- Het scenario laat de benen niet omhoog leggen bij tekenen van shock, omdat er een bekkenbreuk en wervelletsel worden vermoed. S24 noemt benen omhoog bij shock door bloedverlies. Klopt het dat dit hier niet past?
- Het scenario noemt geen zuurstof. S03 zegt zuurstof volgens de afspraak, S24 noemt een masker met reservoir. Moet de juiste keuze in scherm 6 zuurstof bevatten (R38)?
- Blijft de nekkraag in de MC-werkwijze (R05)?

Reviewvraag: R132.
