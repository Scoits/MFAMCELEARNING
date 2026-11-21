# MC-L05-SL02 Buikpijn die erger wordt

Vertakt scenario bij MC-L05 Ziekten en medische noodsituaties. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MC-09.01: acute buikklachten en alarmsignalen herkennen en de buik onderzoeken. MC-09.02: de arts tijdig inschakelen en het advies uitvoeren en bewaken |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MC-L05-S02 (alarmsignalen); S21 (vier soorten buikpijn); S23 (de buik onderzoeken en vastleggen); S03 (de arts inschakelen, geen pijnstillers, eten of drinken voor overleg); S24 (blindedarmontsteking: verloop, vragen of de blindedarm is verwijderd, wat je doet); S25 (buikvliesontsteking, wat je doet); S017 GH2, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 10, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical Care; Daan, matroos, 23 jaar, fictief; de kapitein; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties: een hut met een kooi, een schema van de vier delen van de buik, een stethoscoop, het patiëntevaluatieformulier. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Het is 07.30 uur. Daan meldt zich bij je. Hij heeft sinds gisteravond buikpijn en heeft slecht geslapen. Het schip is twee dagen varen van de dichtstbijzijnde haven.

## Schermen

### Scherm 1 Wat vraag je eerst?

Tekst: Daan zegt: "Het begon gisteravond rond mijn navel, zeurend. Ik was misselijk. Nu zit het hier." Hij wijst rechtsonder.

Vraag: welke vraag stel je als eerste?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Is je blindedarm ooit verwijderd?" | Scherm 2 | Goed. Pijn die rond de navel begint en na enkele uren naar rechtsonder trekt, past bij een blindedarmontsteking. Vraag altijd eerst of de blindedarm al is verwijderd. | 1 |
| B. "Wil je iets tegen de pijn?" | Scherm 1B | Niet goed. Geef geen pijnstiller voordat je met de arts hebt overlegd. Een pijnstiller kan de klachten verbergen die de arts wil weten. | 0 |
| C. "Heb je iets verkeerds gegeten?" | Scherm 1 opnieuw | Dat kan later een vraag zijn, maar het verloop van de pijn wijst op iets anders. Vraag eerst of de blindedarm al is verwijderd. | 0 |

### Scherm 1B Geen pijnstiller (alleen bij B)

Tekst: Je legt Daan uit dat hij eerst niets krijgt, omdat de arts moet kunnen zien hoe de pijn is. Doorgaan naar scherm 2. `Omweg` plus 1.

### Scherm 2 Wat voor pijn?

Tekst: de blindedarm is nooit verwijderd. Daan loopt krom. Hij zegt dat de pijn scherp is en erger wordt als hij hoest.

Vraag: welke soort pijn is dit het meest?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Een koliek: pijn in aanvallen met pauzes. | Scherm 2 opnieuw | Niet goed. Bij een koliek komt de pijn in aanvallen en is de patiënt onrustig. Daan heeft scherpe pijn die erger wordt bij hoesten. | 0 |
| B. Pijn die past bij het buikvlies: scherp, op één plek, erger bij bewegen en hoesten. | Scherm 3 | Goed. Dat past bij prikkeling van het buikvlies. Dat is een reden om goed te onderzoeken en met de arts te overleggen. | 1 |
| C. Zeurende pijn uit een orgaan, die meestal binnen een dag overgaat. | Scherm 2 opnieuw | Zo begon het gisteravond. Nu is de pijn scherp en zit hij op één plek. Dat is een andere soort pijn. | 0 |

### Scherm 3 Voorbereiden

Vraag: hoe bereid je het onderzoek van de buik voor?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Daan ligt plat op zijn rug in een warme, goed verlichte ruimte. De kleding is opgeschoven tot boven de tepels en de broek tot de knieën. | Scherm 4 | Goed. Zo zie je de hele buik en ook de liezen. | 1 |
| B. Daan blijft zitten met zijn shirt aan; je voelt eronder. | Scherm 3 opnieuw | Niet goed. Je moet de hele buik en de liezen kunnen zien. Laat hem plat liggen en schuif de kleding op. | 0 |
| C. Je onderzoekt hem op het dek, waar het licht beter is. | Scherm 3 opnieuw | Niet goed. Onderzoek hem in een warme, goed verlichte ruimte, waar hij kan liggen. | 0 |

### Scherm 4 Kijken en luisteren

Tekst: de buik beweegt nauwelijks mee met de ademhaling. Daan ligt stil. Je luistert twee minuten rechts naast de navel en hoort een paar keer per minuut een zacht gorgelend geluid.

Vraag: wat schrijf je op?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Buik beweegt weinig mee met ademen. Ligt stil. Darmgeluiden: enkele per minuut gehoord." | Scherm 5 | Goed. Je schrijft op wat je zag en hoorde, zonder er een diagnose van te maken. | 1 |
| B. "Blindedarmontsteking." | Scherm 4 opnieuw | Niet goed. Dat stel je niet vast. Schrijf op wat je zag en hoorde. De arts beoordeelt het. | 0 |
| C. "Buik normaal." | Scherm 4 opnieuw | Niet goed. De buik beweegt weinig mee en hij ligt stil. Dat schrijf je op. | 0 |

### Scherm 5 Voelen

Vraag: hoe voel je aan de buik?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je begint zo ver mogelijk van de pijnlijke plek, met je hand plat en gestrekte, gesloten vingers. De pijnlijkste plek bewaar je voor het laatst en je kijkt naar zijn gezicht. | Scherm 6 | Goed. Zo veroorzaak je zo weinig mogelijk pijn en zie je aan zijn gezicht waar het pijn doet. | 1 |
| B. Je drukt met je vingertoppen meteen op de plek waar het pijn doet. | Scherm 5 opnieuw | Niet goed. Druk nooit met je vingertoppen en begin ver van de pijnlijke plek. | 0 |
| C. Je laat Daan zelf drukken en vraagt waar het pijn doet. | Scherm 5 opnieuw | Niet goed. Jij onderzoekt, met de hand plat en ver van de pijnlijke plek beginnend. Kijk naar zijn gezicht. | 0 |

### Scherm 6 Metingen en het formulier

Tekst: rechtsonder spannen de buikspieren zich aan als je voelt. De oefenwaarden: temperatuur 38,0 °C, pols 96. Hij heeft sinds gisteren geen ontlasting gehad.

Vraag: wat doe je nu?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je vult de vragen bij buikpijn van het patiëntevaluatieformulier in, meet ook bloeddruk en ademhaling, schrijft alles op met de tijd en laat de kapitein contact leggen met de arts. | Scherm 7 | Goed. Je overlegt bij iedere mogelijke blindedarmontsteking met de arts, met complete gegevens. | 1 |
| B. Je laat hem een paar uur rusten en kijkt dan of het beter is. | Scherm 6B | Niet goed. Bij een mogelijke blindedarmontsteking overleg je met de arts. Wachten zonder overleg is hier niet goed. | 0 |
| C. Je geeft hem een licht ontbijt, want hij heeft niets gegeten. | Scherm 6B | Niet goed. Geef niets te eten of te drinken voordat je met de arts hebt overlegd. | 0 |

### Scherm 6B Toch overleggen (alleen bij B of C)

Tekst: Je laat de kapitein alsnog contact leggen met de arts en zorgt dat de gegevens klaarliggen. Doorgaan naar scherm 7. `Omweg` plus 1.

### Scherm 7 Het gesprek

Vraag: hoe begin je het gesprek met de arts?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Het verloop sinds gisteravond, waar de pijn nu zit en hoe hij is, dat de blindedarm niet is verwijderd, wat je zag, hoorde en voelde, de metingen met de tijd, en dat hij niets heeft gekregen. | Scherm 8 | Goed. De arts krijgt het verloop en de feiten, en weet dat er niets is gegeven wat de klachten verbergt. | 1 |
| B. "Ik denk dat het zijn blindedarm is. Moet hij van boord?" | Scherm 7 opnieuw | Te weinig. Geef eerst de feiten en het verloop. De arts beoordeelt wat het is en wat er moet gebeuren. | 0 |
| C. Je geeft alleen de temperatuur en de pols. | Scherm 7 opnieuw | Te weinig. De arts heeft ook het verloop van de pijn en jouw onderzoek van de buik nodig. | 0 |

### Scherm 8 Het advies uitvoeren

Tekst: fictief oefenadvies: "Bedrust, hij kiest zelf de houding. Niets eten of drinken en geen medicijnen. Meet ieder uur temperatuur en pols en voel de buik. Bel om 10.00 uur terug, eerder als het erger wordt."

Vraag: hoe regel je dit?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je leest het advies terug, schrijft het op, laat Daan in zijn kooi de houding met de minste pijn kiezen en spreekt met een collega af dat Daan niet alleen is. | Scherm 9 | Goed. Je voert het advies uit en laat de patiënt niet alleen. | 1 |
| B. Je laat Daan alleen in zijn hut slapen en komt ieder uur langs. | Scherm 8 opnieuw | Niet goed. Laat de patiënt niet alleen. Hij kan snel zieker worden. | 0 |
| C. Je geeft hem een slokje water, want dat kan geen kwaad. | Scherm 8 opnieuw | Niet goed. De arts heeft gezegd: niets eten of drinken. Je past een advies niet zelf aan. | 0 |

### Scherm 9 Twee uur later

Tekst: om 09.30 uur roept je collega je. Daan is plotseling veel zieker. De pijn zit nu in de hele buik. De buik voelt plankhard. Hij is bleek, zijn ogen liggen diep en zijn pols is snel.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je wacht tot 10.00 uur, zoals afgesproken. | Scherm 9B | Niet goed. Dit zijn alarmsignalen. Een plotseling veel zieker wordende patiënt met een plankharde buik meld je direct. | 0 |
| B. Je meet direct bewustzijn, ademhaling, pols, bloeddruk en temperatuur, schrijft ze op en laat direct contact leggen met de arts. Je meldt wat er is veranderd en hoe laat. | Scherm 10 | Goed. Dit kan een buikvliesontsteking zijn. Je meldt het direct en houdt rekening met evacuatie. | 1 |
| C. Je geeft hem een pijnstiller, want de pijn is nu heel erg. | Scherm 9B | Niet goed. Geen pijnstillers zonder advies van de arts. Meld de verandering direct. | 0 |

### Scherm 9B Direct melden (alleen bij A of C)

Tekst: Je laat de kapitein alsnog direct contact leggen en meldt de verandering met de tijd. Doorgaan naar scherm 10. `Omweg` plus 1.

### Scherm 10 Voorbereiden op wat komt

Tekst: de arts en de kapitein bespreken een evacuatie. Jij blijft bij Daan.

Vraag: wat is nu jouw taak?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Bij Daan blijven, regelmatig meten en alles opschrijven met de tijd, en de gegevens klaarleggen om mee te geven bij de overdracht. | Debriefing | Goed. Je bewaakt de patiënt en zorgt dat de volgende hulpverlener weet wat er is gebeurd. | 1 |
| B. Je gaat aan dek helpen met de voorbereiding van de evacuatie. | Scherm 10 opnieuw | Niet goed. Een patiënt die verslechtert, laat je niet alleen. Anderen bereiden het dek voor. | 0 |
| C. Je laat Daan rustig slapen tot de helikopter er is. | Scherm 10 opnieuw | Niet goed. Blijf meten en opschrijven. Een verandering meld je direct. | 0 |

### Debriefing

Tekst: "Daan wordt overgebracht naar een ziekenhuis aan de wal. De gegevens die jij hebt vastgelegd gaan met hem mee."

Toon `Punten` van de 10 en het aantal omwegen. Toon daarna de lessen:

1. Vraag hoe de pijn is begonnen en hoe hij is veranderd, en of de blindedarm al is verwijderd.
2. Herken de soort pijn: zeurend, koliek, pijn van het buikvlies of pijn door een afgesloten bloedtoevoer.
3. Onderzoek de buik in een warme, lichte ruimte: kijken, twee minuten luisteren, en voelen met de hand plat, ver van de pijnlijke plek beginnend.
4. Geef geen pijnstillers, eten of drinken voordat je met de arts hebt overlegd.
5. Laat de patiënt niet alleen. Een patiënt die plotseling veel zieker wordt, met een plankharde buik, meld je direct.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- Passen de oefenwaarden (38,0 °C, pols 96) en het verloop bij een blindedarmontsteking als oefening, zonder dat het scenario grenswaarden suggereert?
- Is het fictieve advies (bedrust, niets eten of drinken, ieder uur meten) passend als oefening?
- Is het juist dat de cursist niet zelf kiest tussen blindedarmontsteking en buikvliesontsteking, maar de verandering meldt?

Reviewvraag: R125.
