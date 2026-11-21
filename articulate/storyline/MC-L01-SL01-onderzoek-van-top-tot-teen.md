# MC-L01-SL01 Onderzoek van top tot teen

Vertakt scenario bij MC-L01 Aanvullend onderzoek. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MC-32.02: uitgebreid onderzoek in een vaste volgorde, gerichte vragen, metingen herhalen, het verloop volgen en rapporteren aan de arts |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MC-L01-S12 en S13 (toestemming en geheimhouding); S02 (werkwijze in vijf stappen); S14 (het ziekteverhaal opnemen); S15 (niet sturen, wel doorvragen, ontbrekende verschijnselen); S16 (medicijnen, leefstijl en voorgeschiedenis); S18 (onderzoek van top tot teen); S08 (het verloop volgen); S11 (bevindingen doorgeven); S017 GH2, S025 IMGS en S046, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 10, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical Care; Joost, stuurman, 45 jaar, fictief; de kapitein; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties: de ziekenboeg, het patiëntevaluatieformulier, een lichaamsfiguur met de volgorde van hoofd naar voeten, een tabel met metingen. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Het is 10.00 uur. Joost komt naar de ziekenboeg. "Ik voel me al twee dagen niet lekker," zegt hij. "Moe, slap, wat hoofdpijn. Ik weet niet precies wat het is." Het schip is vier dagen varen van de volgende haven.

## Schermen

### Scherm 1 Voordat je begint

Vraag: wat doe je voordat je Joost onderzoekt?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je begint meteen met het onderzoek, want hij komt zelf naar je toe en wil hulp. | Scherm 1B | Niet goed. Ook als iemand zelf komt, vraag je toestemming. Zwijgen of langskomen is geen toestemming. | 0 |
| B. Je legt uit wat je wilt doen en waarom, vraagt zijn toestemming en noteert die. | Scherm 2 | Goed. Je onderzoekt niemand zonder toestemming. Je legt vast wanneer je begon en dat hij toestemming gaf. | 1 |
| C. Je vraagt eerst de kapitein of je hem mag onderzoeken, omdat hij de baas is. | Scherm 1 opnieuw | Niet goed. Toestemming komt van de patiënt zelf, niet van de kapitein. | 0 |

### Scherm 1B Alsnog toestemming (alleen bij A)

Tekst: Je stopt, legt Joost uit wat je wilt doen en waarom, en vraagt of hij het goedvindt. Hij zegt ja. Je schrijft het op. Doorgaan naar scherm 2. `Omweg` plus 1.

### Scherm 2 De eerste vraag

Vraag: hoe begin je het ziekteverhaal?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Je hebt griep, hè? Dat heeft de halve bemanning nu." | Scherm 2 opnieuw | Niet goed. Dat is een sturende vraag, en je geeft er een diagnose mee. Jij stelt geen diagnose; dat doet de arts. | 0 |
| B. "Heb je hoofdpijn, koorts of last van je keel?" | Scherm 2 opnieuw | Niet goed. Je vraagt twee dingen tegelijk, en het is geen open vraag. Laat hem eerst zelf vertellen. | 0 |
| C. "Wanneer voelde je je voor het laatst goed, en wat merkte je eerst?" | Scherm 3 | Goed. Met open vragen laat je hem uitpraten. De volgorde waarin de klachten begonnen, helpt de arts vaak het meest. | 1 |

### Scherm 3 Moe en slap

Tekst: Joost vertelt dat hij eergisteren slecht sliep en sindsdien moe is. Gisteren kwam de hoofdpijn erbij. "En slap. Gewoon slap."

Vraag: wat doe je met "moe" en "slap"?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je schrijft "moe en slap" op het formulier en gaat verder met meten. | Scherm 3 opnieuw | Te weinig. Vage klachten diep je uit, anders heeft de arts er niets aan. | 0 |
| B. Je zegt dat moe zijn normaal is op zee na een paar zware wachten. | Scherm 3 opnieuw | Niet goed. Je trekt zelf een conclusie. Vraag door en laat de arts oordelen. | 0 |
| C. Je vraagt door naar slapen, zin, eetlust en waar de hoofdpijn zit. | Scherm 4 | Goed. Moe, slap en geen eetlust passen bij bijna iedere ziekte. Pas door door te vragen worden ze bruikbaar voor de arts. | 1 |

### Scherm 4 De achtergrond

Tekst: Joost slaapt meer dan normaal. Eten smaakt hem niet. De hoofdpijn zit voor in zijn hoofd.

Vraag: wat vraag je nog?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Medicijnen, ziekten, allergieën, roken en alcohol, reizen en zieke collega's, vertrouwelijk. | Scherm 5 | Goed. De arts heeft de achtergrond nodig. Door uit te leggen waarom je het vraagt, krijg je eerlijker antwoorden. | 1 |
| B. Alleen of hij allergisch is, want dat is voor de arts het belangrijkste. | Scherm 4 opnieuw | Te weinig. Allergieën zijn belangrijk, maar de arts wil de hele achtergrond weten. | 0 |
| C. Niets, want hij is een gezonde man die nooit iets heeft gehad. | Scherm 4 opnieuw | Niet goed. Ook bij iemand die gezond lijkt, vraag je naar medicijnen, eerdere ziekten en leefstijl. Neem niets aan. | 0 |

### Scherm 5 Het lichamelijk onderzoek

Tekst: Joost gebruikt geen medicijnen, rookt niet en drinkt in het weekend een paar glazen. Hij is de afgelopen maanden niet in de tropen geweest. Niemand anders aan boord heeft dezelfde klachten.

Vraag: hoe onderzoek je hem?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je onderzoekt alleen zijn hoofd en hals, want daar zitten de klachten. | Scherm 5 opnieuw | Te weinig. Bij vage klachten zoek je het hele lichaam af. Wat de arts nodig heeft, kan ergens anders zitten. | 0 |
| B. Je onderzoekt van hoofd tot voeten en vergelijkt steeds links en rechts. | Scherm 6 | Goed. Door altijd van hoofd naar voeten te werken, sla je niets over, ook niet bij een klacht op één plek. | 1 |
| C. Je meet alleen de temperatuur; als die normaal is, is meer onderzoek niet nodig. | Scherm 5 opnieuw | Niet goed. Eén meting vervangt het onderzoek niet. Werk van hoofd naar voeten. | 0 |

### Scherm 6 Wat je vindt

Tekst: Joost zit wat ineengedoken. De huid is warm en droog. Je ziet geen huiduitslag. In de hals voel je links een paar gezwollen klieren die pijnlijk zijn. De keel is rood. Hij weet waar hij is, welke dag het is en wat de laatste haven was.

Vraag: wat schrijf je op?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Keelontsteking, waarschijnlijk door een virus. Verder geen bijzonderheden." | Scherm 6 opnieuw | Niet goed. Dat is een diagnose. Schrijf op wat je zag en voelde, en laat de arts beoordelen wat het is. | 0 |
| B. "Huid warm en droog, keel rood, links gezwollen pijnlijke klieren, georiënteerd." | Scherm 7 | Goed. Je beschrijft wat je zag en voelde, ook wat er niet was, zoals huiduitslag. | 1 |
| C. "Geen bijzonderheden gevonden bij het onderzoek van hoofd tot voeten." | Scherm 6 opnieuw | Niet goed. De klieren en de rode keel zijn bevindingen. Ook de afwezigheid van huiduitslag schrijf je op. | 0 |

### Scherm 7 Meten

Tekst: de oefenwaarden om 10.30 uur: temperatuur 38,2 °C, pols 92, ademhaling 16 per minuut, bloeddruk 125/80.

Vraag: hoe leg je de metingen vast?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je schrijft alle metingen op met de tijd en spreekt af wanneer je herhaalt. | Scherm 8 | Goed. Eén meting zegt weinig, het verloop zegt veel. Met het tijdstip erbij kun je de metingen later naast elkaar zetten. | 1 |
| B. Je onthoudt de waarden en schrijft ze straks op als je weer in de ziekenboeg bent. | Scherm 7 opnieuw | Niet goed. Schrijf iedere meting direct op met het tijdstip. Uit je hoofd raak je details kwijt. | 0 |
| C. Je meet één keer goed; dat is genoeg om de arts een beeld te geven. | Scherm 7 opnieuw | Te weinig. Herhaal de metingen, zodat je ziet of de toestand verandert. | 0 |

### Scherm 8 De kapitein vraagt

Tekst: de kapitein komt kijken. "Wat heeft hij? Kan hij vannacht zijn wacht lopen?"

Vraag: wat zeg je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Dat Joost ziek is, dat je met de arts overlegt en later laat weten of hij kan werken. | Scherm 9 | Goed. De kapitein krijgt wat nodig is voor de veiligheid en de planning, zonder de medische details. | 1 |
| B. Je vertelt alles wat Joost je heeft verteld, ook over zijn alcoholgebruik en medicijnen. | Scherm 8 opnieuw | Niet goed. Wat de patiënt je vertelt, is vertrouwelijk. De kapitein krijgt alleen wat hij nodig heeft voor zijn besluit. | 0 |
| C. Je zegt dat je niets mag vertellen, ook niet of hij kan werken. | Scherm 8 opnieuw | Niet goed. De kapitein mag weten wat nodig is voor de veiligheid en de planning aan boord. | 0 |

### Scherm 9 Het gesprek met de arts

Tekst: de kapitein legt contact met de Radio Medische Dienst. Jij hebt het formulier bij je.

Vraag: welke rapportage geef je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Klachten en verloop, voorgeschiedenis en reizen, je bevindingen, de metingen met tijd, niets gegeven. | Scherm 10 | Goed. De arts hoort de klacht en het verloop, de achtergrond, je bevindingen, ook wat er niet was, de metingen en wat je al hebt gedaan. | 1 |
| B. "Hij heeft waarschijnlijk een keelontsteking. Welk middel moet ik hem geven?" | Scherm 9B | Onvoldoende. Je geeft een conclusie zonder de waarnemingen. De arts heeft je bevindingen nodig om zelf te beoordelen. | 0 |
| C. "Hij voelt zich sinds twee dagen niet lekker, is moe en heeft hoofdpijn." | Scherm 9B | Onvoldoende. Zonder verloop, bevindingen en metingen kan de arts weinig met deze melding. | 0 |

### Scherm 9B Volledig rapporteren (alleen bij B of C)

Tekst: De arts vraagt door. Je pakt het formulier en geeft alsnog het verloop, de achtergrond, je bevindingen en de metingen met de tijd. Doorgaan naar scherm 10. `Omweg` plus 1.

### Scherm 10 Vier uur later

Tekst: de arts heeft gevraagd iedere vier uur te meten en terug te bellen bij verandering. Om 14.30 uur meet je opnieuw. Temperatuur 39,0 °C, pols 108. Joost is suffer dan vanochtend en zegt dat slikken nu veel pijn doet.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je vergelijkt met vanochtend, noteert wat veranderde en laat direct de arts bellen. | Debriefing | Goed. De temperatuur en de pols stijgen, hij is suffer en slikken doet meer pijn. Een verslechtering meld je direct, met de metingen naast elkaar. | 1 |
| B. Je schrijft de metingen op en wacht tot het volgende afgesproken contact. | Scherm 10 opnieuw | Niet goed. De metingen naast elkaar laten een verslechtering zien. Meld dat direct en wacht niet op het afgesproken contact. | 0 |
| C. Je laat hem slapen, want hij is moe en rust helpt hem het meest. | Scherm 10 opnieuw | Niet goed. Suffer worden is een verandering die je meldt. Meet en meld direct. | 0 |

### Debriefing

Tekst: "De arts geeft een nieuw advies en vraagt je de metingen voort te zetten. Jouw formulier laat precies zien hoe het verloop was."

Toon `Punten` van de 10 en het aantal omwegen. Toon daarna de lessen:

1. Vraag toestemming voordat je onderzoekt, en schrijf de datum, de tijd, je naam en de toestemming op.
2. Begin met open vragen, stuur niet en vraag door bij vage klachten zoals moe en slap.
3. Vraag naar de achtergrond: medicijnen, eerdere ziekten, allergieën, leefstijl, reizen en andere zieken.
4. Onderzoek altijd van hoofd naar voeten en schrijf op wat je zag en voelde, ook wat er niet was. Een diagnose stelt de arts.
5. Schrijf iedere meting op met de tijd en herhaal de metingen. Een verslechtering meld je direct.
6. De kapitein krijgt wat hij nodig heeft voor zijn besluit; de medische details blijven vertrouwelijk.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- Passen de bevindingen (rode keel, gezwollen pijnlijke halsklieren) en de oefenwaarden (38,2 °C en pols 92, later 39,0 °C en pols 108) als oefening, zonder dat het scenario grenswaarden of een diagnose suggereert?
- Is de rapportage in scherm 9 volledig genoeg, of mist de arts nog iets uit het patiëntevaluatieformulier?
- Moet het scenario bij de klacht "slikken doet pijn" ook vragen naar ademhalingsproblemen of speeksel dat niet weg kan? De les noemt dit niet.

Reviewvraag: R131.
