# MC-L07-SL02 De controle voor de inspectie

Vertakt scenario bij MC-L07 Preventie, beheer en regelgeving. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief; het middel heet hier middel X.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MC-26.01 en MC-26.02: medische gegevens juist vastleggen, vertrouwelijk behandelen en meegeven bij overdracht. MC-33.01 en MC-33.02: de medische uitrusting beheren, middelen onder de Opiumwet registreren en veilig afvoeren |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MC-L07-S09 (medische verslaglegging); S12 (de medische uitrusting beheren, kluis, controle, jaarlijkse inspectie); S30 (vertrouwelijk omgaan met medische gegevens); S32 (geneesmiddelen bewaren en vervallen middelen); S33 (middelen onder de Opiumwet: het register); S14 (veilig gebruik en medisch afval); S10 (de medische kaart bij overdracht); S025 en de Regeling medische uitrusting, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 10, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical Care, aan wie de kapitein het beheer heeft overgedragen; de kapitein; Mark, tweede stuurman; een medewerker van de rederij (aan de telefoon) |
| Media | Eigen illustraties: de medicijnkast, de kluis, het register, de koelkast, de naaldcontainer, een oefenetiket zonder dosering. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Over twee weken is de jaarlijkse inspectie van de medische uitrusting. De kapitein vraagt je de controle voor te bereiden. Je begint bij de medicijnkast in het ziekenverblijf.

## Schermen

### Scherm 1 De la

Tekst: in een gewone la van de medicijnkast vind je twee ampullen van middel X. Middel X valt onder de Opiumwet.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je legt ze in de kluis, telt de voorraad, vergelijkt met het register en meldt het aan de kapitein. | Scherm 2 | Goed. Middelen onder de Opiumwet liggen apart in een afgesloten kluis. Klopt er iets niet, dan meld je het direct aan de kapitein. | 1 |
| B. Je laat ze liggen; dan zijn ze snel bij de hand in een noodgeval. | Scherm 1 opnieuw | Niet goed. Deze middelen kunnen worden misbruikt. Ze horen in de kluis, waarvan de kapitein of de aangewezen beheerder de sleutel heeft. | 0 |
| C. Je legt ze in de kluis en zegt er verder niets over. | Scherm 1B | Bijna. Ze horen in de kluis, maar je moet ook tellen, vergelijken met het register en het aan de kapitein melden. | 0 |

### Scherm 1B Tellen en melden (alleen bij C)

Tekst: Je telt alsnog de voorraad, vergelijkt met het register en meldt het aan de kapitein. Doorgaan naar scherm 2. `Omweg` plus 1.

### Scherm 2 Het register

Tekst: oefenregister van middel X. Laatste telling: 10 ampullen. Daarna: twee toedieningen op advies van de arts van de Radio Medische Dienst, en één ampul die brak bij het openen. In de kluis liggen nu 6 ampullen, plus de 2 uit de la.

Vraag: wat is je conclusie?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Het klopt: 10 min 3 is 7, en er zijn er 8. | Scherm 2 opnieuw | Reken het nog eens na: volgens het register zouden er 7 moeten zijn. Er zijn er 8. Dat klopt niet. | 0 |
| B. Er is er één te veel. Mogelijk is een toediening of een gebroken ampul niet goed geregistreerd, of zijn de ampullen in de la nooit in het register gekomen. Je meldt het direct aan de kapitein. | Scherm 3 | Goed. Klopt de telling niet, dan meld je dat direct aan de kapitein, ook als er te veel is. | 1 |
| C. Je past de telling in het register aan naar 8, dan klopt het weer. | Scherm 2 opnieuw | Niet goed. Je verandert niets stilzwijgend. Je meldt het verschil aan de kapitein en verbetert een fout zichtbaar. | 0 |

### Scherm 3 Wat in het register hoort

Tekst: de kapitein vraagt je het register voortaan zelf goed bij te houden.

Vraag: wat schrijf je in het register?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Iedere toediening met wie hem opdroeg, wie hem gaf en wie hem kreeg; iedere dosis die verloren gaat; een lopende telling na ieder gebruik; en minstens één keer per week een telling van de kluis. | Scherm 4 | Goed. Zo is ieder middel onder de Opiumwet altijd te verantwoorden. | 1 |
| B. Alleen de wekelijkse telling. | Scherm 3 opnieuw | Te weinig. Ook iedere toediening, iedere verloren dosis en een lopende telling horen erin. | 0 |
| C. Alleen de toedieningen; gebroken ampullen tellen niet mee. | Scherm 3 opnieuw | Niet goed. Ook een dosis die verloren gaat, schrijf je op, met datum en tijd. | 0 |

### Scherm 4 Over de datum

Tekst: in de kast staat een doos tabletten die drie maanden over de datum is. Bij een andere doos is het etiket onleesbaar.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je gebruikt ze nog; drie maanden is niet lang. | Scherm 4 opnieuw | Niet goed. Vervallen middelen vervang je en lever je in. | 0 |
| B. Je zet beide apart, noteert ze, vervangt ze en levert ze in bij een apotheek in de haven, volgens de afspraak van het schip. | Scherm 5 | Goed. Een vervallen middel en een middel waarvan je niet zeker weet wat het is, gebruik je niet. Sommige landen geven een boete voor vervallen middelen aan boord. | 1 |
| C. Je gooit beide in de afvalbak. | Scherm 4 opnieuw | Niet goed. Geneesmiddelen lever je in volgens de afspraak, bijvoorbeeld bij een apotheek in de haven. Noteer ook wat je vervangt. | 0 |

### Scherm 5 De koelkast

Tekst: de koelkast in het ziekenverblijf bevat een middel dat koel moet, maar ook twee blikjes frisdrank van Mark.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je haalt de blikjes eruit en vraagt Mark ze ergens anders te bewaren. Je controleert of de koelkast afgesloten kan worden. | Scherm 6 | Goed. Middelen die koel moeten, gaan in een afsluitbare koelkast die alleen daarvoor wordt gebruikt. | 1 |
| B. Je laat ze staan; ze nemen weinig ruimte in. | Scherm 5 opnieuw | Niet goed. De koelkast is alleen voor geneesmiddelen, en hij moet afgesloten kunnen worden. | 0 |
| C. Je haalt het middel eruit en zet het in de kast; dat is overzichtelijker. | Scherm 5 opnieuw | Niet goed. Een middel dat koel moet, kan buiten de koelkast onbruikbaar worden. | 0 |

### Scherm 6 Het vlot

Vraag: wat vergeet je bij de controle niet?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. De medicijnkisten in de reddingsmiddelen. | Scherm 7 | Goed. Ook daarin controleer je of alles aanwezig, onbeschadigd en niet over de datum is. | 1 |
| B. De EHBO-trommel van de kombuis, maar de reddingsmiddelen niet; die worden apart gekeurd. | Scherm 6 opnieuw | Niet goed. De medicijnkisten in de reddingsmiddelen horen bij jouw controle. | 0 |
| C. Niets; alleen het ziekenverblijf telt. | Scherm 6 opnieuw | Niet goed. Vergeet de medicijnkisten in de reddingsmiddelen niet. | 0 |

### Scherm 7 De naald

Tekst: bij het opruimen ligt een gebruikte naald met het hulsje ernaast op het werkblad.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je doet het hulsje er voorzichtig weer op en gooit hem weg. | Scherm 7 opnieuw | Niet goed. Steek een naald nooit terug in het hulsje. Daarbij prik je je makkelijk. | 0 |
| B. Je gooit de naald direct in de naaldcontainer, zonder hulsje, en bespreekt met wie hem gebruikte dat dat direct na gebruik moet. | Scherm 8 | Goed. Scherp afval gaat direct na gebruik in de naaldcontainer. | 1 |
| C. Je wikkelt hem in papier en gooit hem in de gewone afvalbak. | Scherm 7 opnieuw | Niet goed. Iemand kan zich eraan prikken. Naalden gaan in de naaldcontainer. | 0 |

### Scherm 8 Een regel in het logboek

Tekst: je kijkt het medisch logboek na. Je vindt deze regel: "Matroos had koorts, pilletje gegeven, ging wel beter."

Vraag: wat is er mis?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Niets, het is duidelijk genoeg. | Scherm 8 opnieuw | Niet goed. Er ontbreken datum, tijd, metingen, het advies van de arts, het middel en de hoeveelheid. | 0 |
| B. Er ontbreken datum en tijd, de metingen, het advies en wie het gaf, het middel, de hoeveelheid en het tijdstip, en het effect. | Scherm 9 | Goed. Schrijf feitelijk en volledig, met datum en tijd. Vul niets achteraf in alsof het eerder was. | 1 |
| C. Je herschrijft de regel zelf met een datum die je denkt dat klopt. | Scherm 8 opnieuw | Niet goed. Vul niets achteraf in alsof het eerder was. Bespreek het met wie de regel schreef en verbeter zichtbaar wat bekend is. | 0 |

### Scherm 9 De rederij belt

Tekst: een medewerker van de rederij belt. Hij vraagt welke middelen een opvarende die nu in het ziekenverblijf ligt precies krijgt. De opvarende is goed aanspreekbaar.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je geeft het door; de rederij is de werkgever. | Scherm 9B | Niet goed. Medische gegevens zijn vertrouwelijk. Geef geen informatie zonder eerst de patiënt te vragen. | 0 |
| B. Je zegt dat je eerst de patiënt vraagt of hij dat goed vindt, en belt dan terug. | Scherm 10 | Goed. Zonder toestemming van de patiënt geef je geen informatie, tenzij de wet het eist of de veiligheid van anderen het nodig maakt. | 1 |
| C. Je zegt dat hij het de kapitein moet vragen. | Scherm 9B | Niet goed. Ook de kapitein geeft niet zomaar medische gegevens door. Vraag eerst de patiënt. | 0 |

### Scherm 9B Eerst de patiënt (alleen bij A of C)

Tekst: Je belt de rederij terug en zegt dat je eerst de patiënt vraagt. Doorgaan naar scherm 10. `Omweg` plus 1.

### Scherm 10 Van boord

Tekst: de opvarende gaat in de haven naar een arts aan wal.

Vraag: wat gaat er mee?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. De medische kaart, waarvan de kapitein deel I invult met jouw verslag, het patiëntevaluatieformulier en een kopie van de relevante regels uit het logboek. | Debriefing | Goed. Zo weet de arts aan wal wat er aan boord is gebeurd. De patiënt krijgt een kopie van zijn medische gegevens mee. | 1 |
| B. Het originele logboek, zodat de arts alles kan lezen. | Scherm 10 opnieuw | Niet goed. Het logboek blijft aan boord. Er gaat een kopie van de relevante regels mee, met de medische kaart. | 0 |
| C. Niets; de arts onderzoekt hem zelf opnieuw. | Scherm 10 opnieuw | Niet goed. De medische kaart en jouw verslag gaan mee. Anders mist de arts het verloop aan boord. | 0 |

### Debriefing

Tekst: "Je controlelijst voor de inspectie is klaar. De kapitein ondertekent hem."

Toon `Punten` van de 10 en het aantal omwegen. Toon daarna de lessen:

1. Middelen onder de Opiumwet liggen in de kluis. Houd het register bij en tel minstens één keer per week.
2. Klopt de telling niet, ook als er te veel is, meld het direct aan de kapitein. Verander niets stilzwijgend.
3. Vervallen of onherkenbare middelen gebruik je niet. Vervang ze en lever ze in.
4. De koelkast voor geneesmiddelen is afsluitbaar en alleen daarvoor.
5. Vergeet de medicijnkisten in de reddingsmiddelen niet.
6. Naalden gaan direct na gebruik in de naaldcontainer, nooit terug in het hulsje.
7. Schrijf feitelijk en volledig, met datum en tijd. Medische gegevens zijn vertrouwelijk.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje of DRTC

- Is het verschil van één ampul te veel in het register een goed oefenvoorbeeld, of is een tekort herkenbaarder?
- Klopt de werkwijze bij inleveren van vervallen middelen met de afspraken van DRTC en de reders waarmee DRTC werkt?

Reviewvraag: R129.
