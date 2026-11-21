# MC-L05-SL01 Pijn op de borst tijdens de wacht

Vertakt scenario bij MC-L05 Ziekten en medische noodsituaties. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap. De schermen hieronder zijn schermen in het pakket.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MC-14.01: medische noodsituaties herkennen en de eerste zorg geven. MC-14.02: de medische gids en het advies van de arts gebruiken voor zorg en herbeoordeling |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MC-L05-S05 (oorzaken, wat je doet, afwijkende klachten bij vrouwen); MC-L05-S31 (aderverkalking, risicofactoren); MC-L05-S32 (angina pectoris of hartinfarct, niet laten lopen, liggend vervoeren, halfzittend, meten en opschrijven, AED klaar, contact met de arts, middel onder de tong alleen op advies, bij aanhoudende pijn opnieuw contact, reanimatie 30:2 met AED, niet iedere pijn komt van het hart); MC-L05-S12 (medische gids, advies van de arts gaat voor, herbeoordelen); MFA-L03 en S052 PH4 (AED, niemand raakt het slachtoffer aan tijdens de schok, daarna direct doorgaan, na herstel stabiele zijligging met de AED aan); S017 GH2 boek p38-42 / PDF p40-44; S062 dia49, 51 en 53 |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 11, één punt per hoofdscherm met een keuze, alleen bij de eerste poging; alleen feedback voor de cursist), `Omweg` (aantal omwegen) |
| Personages | Jij, de opvarende met Medical Care; Peter, tweede machinist, 54 jaar, fictief; Lisa, motordrijver; de kapitein; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties: de machinekamer, de controlekamer, een hut met een kooi, de AED, het patiëntevaluatieformulier. Geen foto's van patiënten. Iedere keuze is een knop met de volledige tekst, zodat alles op een telefoon werkt |

## Situatie vooraf

Het is 03.10 uur boordtijd. Lisa belt je wakker: Peter voelt zich niet goed in de controlekamer van de machinekamer. Hij is net de trappen op en af geweest om een lek te zoeken. Jij hebt aan boord de taak van medische zorg.

## Schermen

### Scherm 1 Eerste indruk

Tekst: Peter zit op een stoel. Hij houdt zijn hand op zijn borst. "Het drukt, alsof er een band om mijn borst zit. Het trekt naar mijn linkerarm." Hij zweet en ziet bleek.

Vraag: wat doe je eerst?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je vraagt hem mee te lopen naar de ziekenboeg, want daar liggen de spullen. | Scherm 1B | Niet goed. Bij pijn op de borst laat je de patiënt niet lopen. Inspanning kan het hart verder belasten. | 0 |
| B. Gemakkelijk laten zitten, geruststellen en vragen sinds wanneer en wat hij deed. | Scherm 2 | Goed. Een drukkende pijn die uitstraalt naar de arm, met zweten en bleek zien, kan van het hart komen. Je laat hem rusten en verzamelt de eerste gegevens. | 1 |
| C. Je geeft hem een glas water en zegt dat het vast door de warmte komt. | Scherm 1B | Niet goed. Je stelt niet zelf vast waar de pijn door komt. Deze klachten kunnen van het hart komen. | 0 |

### Scherm 1B Niet lopen (alleen bij A of C)

Tekst: "Peter staat op en grijpt naar de leuning. De pijn wordt erger." Je laat hem weer zitten en stelt hem gerust. Doorgaan naar scherm 2. `Omweg` plus 1.

### Scherm 2 De gegevens

Tekst: Peter vertelt dat de pijn begon toen hij boven aan de trap was. Hij zit nu tien minuten. "Het wordt niet minder." Hij rookt. Hij weet niet of hij medicijnen gebruikt voor zijn hart: "Alleen iets voor mijn bloeddruk."

Vraag: wat is nu het belangrijkste verschil dat je in de gaten houdt?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Of de pijn links of rechts zit. | Scherm 2 opnieuw | Niet goed. De plaats helpt weinig. Het verschil tussen angina pectoris en een hartinfarct zit vooral in wanneer de pijn begint en of hij in rust wegzakt. | 0 |
| B. Of de pijn wegzakt in rust. | Scherm 3 | Goed. Bij angina pectoris zakt de pijn snel weg in rust. Bij een hartinfarct blijft hij, ook na een kwartier rust. | 1 |
| C. Of hij al eerder pijn op de borst heeft gehad. | Scherm 2 opnieuw | Dat is goed om te vragen voor de arts, maar het zegt niet wat er nu gebeurt. Let op of de pijn in rust wegzakt. | 0 |

### Scherm 3 Wie doet wat

Tekst: Lisa staat naast je. De kapitein is nog niet gewaarschuwd.

Vraag: welke opdracht geef je Lisa?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Waarschuw de kapitein voor spoedadvies en haal AED, zuurstof en formulier." | Scherm 4 | Goed. De arts moet snel worden ingeschakeld, en de AED ligt klaar voor het geval het hart stopt. | 1 |
| B. "Haal een pijnstiller uit de medicijnkist, dan kijken we of het helpt." | Scherm 3B | Niet goed. Je geeft geen middel zonder advies van de arts. Vraag eerst hulp en laat de AED halen. | 0 |
| C. "Blijf hier en kijk mee, dan bellen we straks als het niet beter gaat." | Scherm 3B | Niet goed. Bij pijn op de borst neem je met spoed contact op met de arts. Wachten kost tijd. | 0 |

### Scherm 3B De juiste opdracht (alleen bij B of C)

Tekst: Je geeft Lisa alsnog de opdracht de kapitein te waarschuwen en de AED, de zuurstof en het formulier te halen. Doorgaan naar scherm 4. `Omweg` plus 1.

### Scherm 4 Meten

Tekst: Lisa is terug. Peter zit halfrechtop tegen de wand.

Vraag: wat meet je en wat doe je ermee?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Alleen de pols, want die zegt het meest over het hart. | Scherm 4 opnieuw | Te weinig. Meet bewustzijn, ademhaling, pols en bloeddruk. Bij een hartinfarct kunnen de vitale functies uitvallen. | 0 |
| B. Je meet alles, maar schrijft niets op; je onthoudt het wel. | Scherm 4 opnieuw | Niet goed. Schrijf de waarden op met de tijd. Anders kun je het verloop niet laten zien. | 0 |
| C. Bewustzijn, ademhaling, pols en bloeddruk, en je schrijft ze op met de tijd erbij. | Scherm 5 | Goed. Met de metingen en de tijd kan de arts beoordelen hoe het gaat, en zie jij of het verandert. | 1 |

### Scherm 5 Het contact met de arts

Tekst: de oefenwaarden staan op het formulier. De kapitein meldt: de arts van de Radio Medische Dienst is aan de lijn.

Vraag: wat geef je als eerste door?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Wat gebeurde en wanneer, zijn klachten, pijn na rust, metingen, roken en medicijnen. | Scherm 6 | Goed. Je geeft feiten, het verloop en wat je nog niet weet. | 1 |
| B. "De tweede machinist heeft een hartinfarct. Moet hij van boord?" | Scherm 5 opnieuw | Niet goed. Dat stel je niet zelf vast. Geef de feiten en laat de arts beoordelen. | 0 |
| C. "Hij heeft pijn op de borst sinds een kwartier. Wat moet ik geven?" | Scherm 5 opnieuw | Te weinig. Zonder het verloop en de metingen kan de arts niet goed adviseren. | 0 |

### Scherm 6 Het advies

Tekst: fictief oefenadvies om 03.30 uur: "Laat hem halfzittend rusten. Geef zuurstof. Geef het middel onder de tong uit de kist, zoals in de gids staat. Meet om 03.40 uur opnieuw en bel dan terug. Bel direct als het erger wordt."

Vraag: wat doe je met dit advies?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Advies teruglezen, met tijd opschrijven en het middel opzoeken in de medische gids. | Scherm 7 | Goed. Je controleert of je het goed hebt begrepen en zoekt op hoe je het middel veilig geeft. | 1 |
| B. Je geeft het middel direct, want de arts heeft het gezegd en het is dringend. | Scherm 6 opnieuw | Bijna. Lees het advies eerst terug en zoek in de gids op hoe je het middel geeft en waar je op let. | 0 |
| C. Je geeft twee keer zoveel als geadviseerd, omdat de pijn erg is. | Scherm 6 opnieuw | Niet goed. Je past een advies nooit zelf aan. | 0 |

### Scherm 7 De gids en het advies

Tekst: in de gids lees je iets over de bloeddruk dat je niet zeker weet bij dit middel. Peters bloeddruk was bij de laatste meting lager dan bij de eerste.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je belt de arts terug, noemt wat je las en de lage bloeddruk. | Scherm 8 | Goed. Twijfel je of wijkt wat je leest af, dan vraag je het de arts. Het advies van de arts, die jouw patiënt en jouw gegevens kent, gaat voor. | 1 |
| B. Je laat het middel weg zonder er iets over te zeggen tegen de arts. | Scherm 7 opnieuw | Niet goed. Je past het advies niet zelf aan. Overleg met de arts. | 0 |
| C. Je volgt wat in de gids staat in plaats van het advies van de arts. | Scherm 7 opnieuw | Niet goed. Het advies van de arts gaat voor. Overleg als je twijfelt. | 0 |

### Scherm 8 Herbeoordelen

Tekst: de arts bevestigt het advies. Je hebt het middel gegeven zoals afgesproken. Het is 03.40 uur.

Vraag: wat doe je nu?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat Peter slapen, want rust is na een middel het beste voor hem. | Scherm 8 opnieuw | Niet goed. Je hebt afgesproken om 03.40 uur te meten en terug te bellen. Houd hem in de gaten. | 0 |
| B. Je meet opnieuw, vraagt naar de pijn, noteert alles en belt terug. | Scherm 9 | Goed. Na iedere behandeling beoordeel je de patiënt opnieuw en je houdt je aan de afspraak. | 1 |
| C. Je belt terug zonder opnieuw te meten, want de arts wacht al. | Scherm 8 opnieuw | Te weinig. De arts wil weten wat het middel heeft gedaan. Meet eerst opnieuw. | 0 |

### Scherm 9 De pijn blijft

Tekst: om 03.45 uur zegt Peter: "Het is niet minder. Het wordt erger." Hij is onrustig en ziet asgrauw.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je neemt direct opnieuw contact op, meldt de verandering en houdt de AED bij de hand. | Scherm 10 | Goed. Pijn die aanhoudt of erger wordt, past bij een hartinfarct. Je meldt het direct en houdt er rekening mee dat het hart kan stoppen. | 1 |
| B. Je wacht nog even, want het middel heeft misschien wat meer tijd nodig. | Scherm 9B | Niet goed. Houdt de pijn aan of wordt hij erger, dan neem je opnieuw contact op. Wacht niet. | 0 |
| C. Je geeft het middel nog een keer, omdat het de eerste keer niet hielp. | Scherm 9B | Niet goed. Een nieuwe dosis geef je alleen op advies van de arts. Meld de verandering direct. | 0 |

### Scherm 9B Direct melden (alleen bij B of C)

Tekst: Je laat de kapitein alsnog direct contact leggen en meldt de verandering met de tijd. Doorgaan naar scherm 10. `Omweg` plus 1.

### Scherm 10 Het hart stopt

Tekst: om 03.55 uur zakt Peters hoofd opzij. Hij reageert niet als je hem aanspreekt en schudt. Hij ademt niet normaal.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je geeft hem zuurstof met het masker en wacht tot hij weer bijkomt. | Scherm 10 opnieuw | Niet goed. Hij reageert niet en ademt niet normaal. Start direct reanimatie en gebruik de AED. | 0 |
| B. Je belt eerst de arts om te vragen wat je nu precies moet doen. | Scherm 10 opnieuw | Niet goed. Bij een hartstilstand start je direct met reanimatie en de AED. Laat een ander alarm slaan en de arts waarschuwen. | 0 |
| C. Alarm laten slaan, op een harde ondergrond reanimeren en de AED laten aansluiten. | Scherm 11 | Goed. Bij een hartstilstand start je direct reanimatie en gebruik je de AED. | 1 |

### Scherm 11 Na de schok

Tekst: de AED geeft een schok. Niemand raakt Peter aan tijdens de schok. Daarna ga je direct verder met reanimeren tot de AED opnieuw analyseert. Na een paar minuten begint Peter te bewegen en weer normaal te ademen.

Vraag: wat doe je nu?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Stabiele zijligging met de AED aan, bij hem blijven, meten en de arts laten informeren. | Debriefing | Goed. Het hart kan opnieuw stoppen. De AED blijft aangesloten en de arts krijgt het hele verloop. | 1 |
| B. Je haalt de elektroden eraf en zet de AED uit, want hij ademt weer. | Scherm 11 opnieuw | Niet goed. Laat de elektroden zitten en de AED aan. Het hart kan opnieuw stoppen. | 0 |
| C. Je laat hem rechtop gaan zitten en wat drinken, zodat hij bijkomt. | Scherm 11 opnieuw | Niet goed. Leg hem in stabiele zijligging met de AED aan, blijf bij hem en meet opnieuw. Meld het verloop aan de arts. | 0 |

### Debriefing

Tekst: "De arts en de kapitein bespreken een evacuatie. Jij blijft bij Peter, de AED blijft aangesloten en je legt alles vast met de tijd erbij."

Toon `Punten` van de 11 en het aantal omwegen. Toon daarna de lessen:

1. Bij pijn op de borst laat je de patiënt niet lopen. Laat hem halfzittend rusten en stel hem gerust.
2. Zakt de pijn niet weg in rust, denk dan aan een hartinfarct. Je stelt het niet zelf vast, maar meldt het met spoed aan de arts.
3. Meet bewustzijn, ademhaling, pols en bloeddruk, en schrijf ze op met de tijd.
4. Een middel onder de tong en zuurstof geef je alleen op advies van de arts. Zoek in de gids op hoe je het geeft. Het advies van de arts gaat voor.
5. Beoordeel opnieuw na iedere behandeling. Wordt het erger, meld het direct.
6. Leg de AED klaar. Stopt het hart, start dan direct reanimatie: 30 borstcompressies en 2 beademingen, en gebruik de AED.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- Het fictieve oefenadvies noemt zuurstof en het middel onder de tong zonder naam of dosis. Is dat passend als oefening, zonder dat het een protocol lijkt?
- Is een lagere bloeddruk na het middel een geschikte aanleiding om de cursist te laten overleggen, zonder dat het scenario een grenswaarde suggereert?
- Klopt het verloop na de schok (stabiele zijligging, elektroden laten zitten, AED aan, opnieuw meten, zoals in MFA-L03 en PH4) met de DRTC-werkwijze en de actuele reanimatierichtlijn?
- Moet het scenario ook de afwijkende klachten bij vrouwen laten zien, bijvoorbeeld in een tweede versie met een vrouwelijke patiënt?

Reviewvraag: R124.
