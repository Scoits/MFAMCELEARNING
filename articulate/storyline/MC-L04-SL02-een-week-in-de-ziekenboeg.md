# MC-L04-SL02 Een week in de ziekenboeg

Vertakt scenario bij MC-L04 Verpleegkundige zorg en bewaking. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MC-12.01: observaties doen en vastleggen in een zorgperiode. MC-12.02: observaties vergelijken en bepalen wanneer de arts terugkoppeling nodig heeft. MC-13.01: eenvoudige verpleegkundige zorg plannen. MC-13.02: een injectie op advies voorbereiden en geven |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MC-L04-S12 (de ziekenboeg klaarmaken, uitkleden bij beenletsel); S13 (dossier en medicatielijst); S14 (iedere dag in de ziekenboeg, aflossing); S15 (doorliggen voorkomen); S16 (wassen en het bed verschonen); S17 (benauwd in bed); S04 (verandering herkennen en melden); S23 (medicijnen veilig geven); S24 (het schema over de dag verdelen); S07 (een injectie geven in stappen); MC-L08-S12 en S23 (overdracht in de haven en de brief die meegaat); S025 IMGS, S017 GH2, S063 en S049, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 10, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical Care; Henk, eerste machinist, 54 jaar, fictief; Fatima, derde stuurman, fictief; de kapitein; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties: de ziekenboeg met een kooi en slingerschotten, een dossier met medicatielijst, een kalender met zes dagen, een liggende figuur met drukplekken. Geen echte etiketten of doseringen in beeld. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Henk heeft bij een val in de machinekamer zijn rechteronderbeen gebroken. Het been is gespalkt en de arts van de Radio Medische Dienst heeft geadviseerd dat hij in bed blijft. Het schip is zes dagen varen van de haven waar hij van boord gaat. Jij zorgt de komende week voor hem.

## Schermen

### Scherm 1 Henk komt in de ziekenboeg

Vraag: hoe ontvang je Henk?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je helpt hem de broek uit te trekken, eerst het gezonde been en dan het gebroken been. | Scherm 2 opnieuw | Niet goed. Bij een ernstig beenletsel knip je de broek open langs de buitennaad. Uittrekken beweegt het been. | 0 |
| B. Broek openknippen langs de naad, makkelijke kleding, water, urinefles en bel klaar. | Scherm 2 | Goed. Zo beweeg je het gebroken been niet. Met korte mouwen kun je de bloeddruk meten zonder hem uit te kleden. Met de bel kan hij hulp roepen. | 1 |
| C. Hij houdt zijn werkkleding aan; dan hoef je hem helemaal niet te bewegen. | Scherm 2 opnieuw | Niet goed. In werkkleding kun je het been, de huid en de bloeddruk niet goed controleren. Knip de broek open langs de buitennaad. | 0 |

### Scherm 2 Het dossier

Vraag: hoe leg je het dossier aan?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je schrijft het advies van de arts op een los briefje bij het bed. | Scherm 2 opnieuw | Niet goed. Een los briefje raakt kwijt. Alles komt in het eigen dossier van de patiënt, met de datum, de tijd en wie het schreef. | 0 |
| B. Een eigen dossier met medicatielijst, het advies met tijd en naam en zijn allergieën. | Scherm 3 | Goed. Een eigen dossier helpt je niets te vergeten, helpt de arts bij het overleg en laat zien welke zorg je hebt gegeven. | 1 |
| C. Je schrijft alles in het algemene logboek, onder elkaar met de andere opvarenden. | Scherm 2 opnieuw | Niet goed. Iedere patiënt krijgt een eigen dossier en een eigen medicatielijst. Zo is alles over hem bij elkaar en blijft het vertrouwelijk. | 0 |

### Scherm 3 Een injectie op advies

Tekst: fictief oefenadvies van de arts: "Geef middel A onder de huid, één keer per dag om 18.00 uur, in de hoeveelheid die ik u noem." Je schrijft de hoeveelheid op en leest het advies terug.

Vraag: wat doe je voordat je de injectie geeft?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Etiket drie keer lezen, datum controleren, laten nakijken, allergie en naam vragen. | Scherm 4 | Goed. Drie keer het etiket, de vervaldatum, een collega die meekijkt en de vragen aan de patiënt voorkomen het verkeerde middel, de verkeerde hoeveelheid en de verkeerde patiënt. | 1 |
| B. Je pakt het middel en geeft het, want de arts heeft het geadviseerd. | Scherm 3B | Niet goed. Ook bij een advies van de arts kan het misgaan. Controleer het etiket drie keer, de vervaldatum en de allergieën, en laat een collega meekijken. | 0 |
| C. Je laat Fatima de injectie geven, want zij heeft er meer zin in. | Scherm 3 opnieuw | Niet goed. Jij hebt het advies ontvangen en bent verantwoordelijk. Een collega controleert mee, maar jij voert de controles uit. | 0 |

### Scherm 3B De controles alsnog (alleen bij B)

Tekst: Je zet het middel neer. Je leest het etiket opnieuw, controleert de vervaldatum, vraagt naar allergieën en laat Fatima meekijken. Doorgaan naar scherm 4. `Omweg` plus 1.

### Scherm 4 Onder de huid

Vraag: hoe geef je de injectie onder de huid?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je spant de huid strak met duim en wijsvinger en prikt loodrecht diep in. | Scherm 4 opnieuw | Niet goed. Zo geef je een injectie in de spier. Voor een injectie onder de huid pak je een huidplooi. | 0 |
| B. Huidplooi, snel prikken, zuiger terug, langzaam inspuiten, naald direct in de container. | Scherm 5 | Goed. Huidplooi, snel prikken, controleren op bloed, langzaam inspuiten, de naald direct weg en direct opschrijven. | 1 |
| C. Je prikt, spuit in en steekt de naald terug in het hulsje om hem later weg te gooien. | Scherm 4 opnieuw | Niet goed. Steek een naald nooit terug in het hulsje. Gooi hem direct in de naaldcontainer. | 0 |

### Scherm 5 Het schema

Tekst: de arts adviseert ook een middel tegen de pijn via de mond, drie keer per dag. De eerste dosis geef je om 08.00 uur.

Vraag: op welke tijden geef je de volgende doses?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Bij het ontbijt, de lunch en het avondeten, dan vergeet je het niet. | Scherm 5 opnieuw | Niet goed. Dan zitten er ongelijke tussenpozen tussen. Verdeel de doses gelijkmatig over het etmaal, of vraag de arts wat hij bedoelt. | 0 |
| B. Om 12.00 en 16.00 uur, zodat hij 's nachts kan slapen. | Scherm 5 opnieuw | Niet goed. Dan zitten de doses dicht op elkaar en is er 's nachts een lange pauze. | 0 |
| C. Om 16.00 en 24.00 uur, gelijk verdeeld; bij twijfel vraag je het na. | Scherm 6 | Goed. Drie keer per dag betekent een gelijkmatige verdeling over het etmaal, bijvoorbeeld 08.00, 16.00 en 24.00 uur. | 1 |

### Scherm 6 Dag drie

Tekst: bij het verzorgen zie je op zijn linkerhiel een rode plek. Als je erop drukt, trekt de roodheid niet weg.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je wrijft de plek stevig in, zodat het bloed weer gaat stromen. | Scherm 6 opnieuw | Niet goed. Wrijven beschadigt de huid. Ontlast de plek en draai de patiënt regelmatig. | 0 |
| B. Je wacht af, want een rode plek gaat meestal vanzelf weer weg. | Scherm 6 opnieuw | Niet goed. Een rode plek die niet wegtrekt, meld je aan de arts. Wie lang stil ligt, krijgt snel een doorligwond. | 0 |
| C. Melden, minstens iedere twee uur draaien, hiel ontlasten en drukplekken controleren. | Scherm 7 | Goed. Een rode plek die niet wegtrekt, is het begin van een doorligwond. Die meld je, en je voorkomt dat het erger wordt. Bij een gebroken been vraag je de arts ook hoe je hem veilig draait. | 1 |

### Scherm 7 Wassen en het bed

Tekst: het is warm aan boord en Henk zweet.

Vraag: hoe verzorg je hem?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Dagelijks wassen, deel voor deel, en het bed verschonen terwijl hij opzij rolt. | Scherm 8 | Goed. Bij warm weer of koorts was je hem iedere dag. Per deel wassen houdt hem warm en bedekt. Een bed verschoon je nooit alleen. | 1 |
| B. Je wast hem eens per week, want hij ligt toch stil en zweet weinig. | Scherm 7 opnieuw | Niet goed. Een bedlegerige patiënt was je minstens om de dag, en iedere dag bij warm weer of koorts. Een schone, droge huid helpt doorligwonden voorkomen. | 0 |
| C. Je verschoont het bed alleen, terwijl Henk even op de stoel zit. | Scherm 7 opnieuw | Niet goed. Henk moet in bed blijven. Verschoon het bed met twee personen terwijl hij erin ligt. | 0 |

### Scherm 8 Dag vijf, 03.00 uur

Tekst: Henk belt. Hij is benauwd en zegt dat het plat liggen niet gaat. De ademhaling is sneller dan bij de vorige meting.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Halfzittend leggen, alles meten, vergelijken met eerder en direct de arts laten bellen. | Scherm 9 | Goed. De juiste houding helpt bij benauwdheid. Wordt een patiënt benauwder, dan meld je dat direct aan de arts, met de metingen naast elkaar. | 1 |
| B. Je zegt dat hij moet proberen te slapen en kijkt over een uur weer. | Scherm 8B | Niet goed. Als de patiënt benauwder wordt, meld je dat direct. Wacht niet. | 0 |
| C. Je geeft hem een extra dosis van het middel tegen de pijn, zodat hij rustiger wordt. | Scherm 8B | Niet goed. Je geeft alleen wat de arts adviseert. Benauwdheid meld je direct. | 0 |

### Scherm 8B Direct melden (alleen bij B of C)

Tekst: Je legt Henk halfzittend, meet opnieuw en laat de kapitein direct contact leggen met de arts. Doorgaan naar scherm 9. `Omweg` plus 1.

### Scherm 9 Hoe gaat het met jou?

Tekst: na de nacht vraagt de kapitein hoe het met je gaat. Je hebt vijf nachten slecht geslapen naast je eigen wachten.

Vraag: wat zeg je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Het gaat wel, ik red me. Het is maar een paar dagen." | Scherm 9 opnieuw | Niet goed. Zorg voor een patiënt is zwaar naast je eigen werk. Een vermoeide verzorger maakt fouten. Spreek aflossing af. | 0 |
| B. "Ik doe het allemaal zelf, anders gaat het mis met de metingen." | Scherm 9 opnieuw | Niet goed. Je kunt taken verdelen, zoals de nachtelijke metingen en het draaien met twee personen. Spreek af wie je aflost. | 0 |
| C. Je zegt eerlijk dat je moe bent en regelt met de kapitein een vervanger. | Scherm 10 | Goed. De kapitein let erop hoe de verzorger het volhoudt. Een goede aflossing is ook zorg voor de patiënt. | 1 |

### Scherm 10 Van boord

Tekst: op dag zes gaat Henk in de haven van boord naar het ziekenhuis.

Vraag: wat geef je mee?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Medische kaart of brief met metingen, middelen en adviezen, plus documenten en medicijnen. | Debriefing | Goed. De arts aan de wal kent Henk niet. Met deze gegevens weet hij wat er aan boord is gebeurd. Het dossier aan boord bewaar je. | 1 |
| B. Niets, want het ziekenhuis onderzoekt hem toch helemaal opnieuw. | Scherm 10 opnieuw | Niet goed. Het verloop aan boord is belangrijk voor het ziekenhuis. De patiënt krijgt een kopie van zijn medische gegevens mee. | 0 |
| C. Alleen een mondelinge overdracht aan de ambulance, dat is het snelst. | Scherm 10 opnieuw | Te weinig. Geef altijd een kaart of brief mee. Een vreemde arts moet het zonder uitleg kunnen begrijpen, ook in een andere taal. | 0 |

### Debriefing

Tekst: "Henk wordt in het ziekenhuis opgenomen. Dankzij jouw dossier weet het ziekenhuis hoe de week aan boord is verlopen."

Toon `Punten` van de 10 en het aantal omwegen. Toon daarna de lessen:

1. Ontvang een patiënt zo dat je het letsel niet beweegt en hem later goed kunt verzorgen en meten.
2. Iedere patiënt krijgt een eigen dossier en een eigen medicatielijst, met datum, tijd en naam bij iedere aantekening.
3. Ook bij een advies van de arts: etiket drie keer, vervaldatum, een collega die meekijkt, allergieën en de naam van de patiënt.
4. Verdeel doses gelijkmatig over het etmaal en vraag na als het schema niet duidelijk is.
5. Draai een bedlegerige patiënt minstens iedere twee uur met twee personen. Een rode plek die niet wegtrekt, meld je.
6. Wordt een patiënt benauwder, meld dat dan direct, met de metingen naast elkaar.
7. Zorg ook voor jezelf en spreek aflossing af.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- Het advies "middel A onder de huid" is fictief en noemt geen middel. Is een injectie onder de huid in deze casus een passende oefening, of kiest Mathanje een ander voorbeeld?
- Hoe draai je een patiënt met een gespalkt onderbeen veilig? Het scenario laat de cursist dit aan de arts vragen.
- Benauwdheid bij een bedlegerige patiënt met een beenbreuk kan om meer vragen dan direct melden. Is de juiste keuze in scherm 8 volledig?
- Sluit de overdracht in scherm 10 aan bij MC-L08-S12 en S23 en bij de afspraken van DRTC over de medische kaart en de brief (R85)?

Reviewvraag: R134.
