# MFA-L04-SL01 Brand in de kombuis

Vertakt scenario bij MFA-L04 Trauma, brandwonden, hitte en koude. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap. Het scenario bereidt voor op SC-MFA-03 en het afdekken in MFA-P04 en vervangt die niet.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MFA-06.01: oorzaken en diepte van brandwonden herkennen. MFA-06.02: eerste hulp bij brandwonden. MFA-06.03: doel en uitvoering van steriel afdekken |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MFA-L04-S27 (iemand staat in brand); S04 en S28 (koelen, sieraden, niets op de wond); S02 en S23 (diepte van de brandwond); S25 (de regel van negen); S24 (vochtverlies en shock, letsel van de luchtwegen); S05 en S29 (steriel afdekken, geen watten); S016 GH1 en S044, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 10, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical First Aid; Erik, kok, 41 jaar, fictief; Sem, steward, fictief; de kapitein; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties, geen foto's van echte brandwonden: de kombuis met een blusdeken, een slachtoffer dat met een deken wordt gedoofd, een arm onder de kraan, een lichaamsfiguur met de regel van negen, steriel brandwondenverband. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Het is 17.30 uur. In de kombuis vat een pan met olie vlam. Sem dooft de pan met de blusdeken. Maar de rechtermouw van Eriks koksbuis brandt, en hij begint in paniek naar de deur te rennen.

## Schermen

### Scherm 1 Erik staat in brand

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat Erik direct liggen, pakt een wollen deken en slaat die eerst om zijn hals, met het hoofd vrij, en bedekt daarna de rest van zijn lichaam. | Scherm 2 | Goed. Rennen wakkert het vuur aan. Door eerst de hals af te sluiten slaan de vlammen niet langs het gezicht omhoog. | 1 |
| B. Je laat hem doorrennen naar de douche op de gang. | Scherm 1B | Niet goed. Rennen wakkert het vuur aan. Laat hem direct liggen en doof de vlammen. | 0 |
| C. Je richt de brandblusser op zijn bovenlichaam en gezicht. | Scherm 1 opnieuw | Niet goed. Richt een blusser niet op het gezicht. Laat hem liggen en doof met een deken of met water. | 0 |

### Scherm 1B Liggen en doven (alleen bij B)

Tekst: Bij de deur houd je Erik tegen en laat je hem liggen. Je slaat een wollen deken eerst om zijn hals en bedekt daarna de rest. De vlammen zijn uit. Doorgaan naar scherm 2. `Omweg` plus 1.

### Scherm 2 Koelen

Tekst: de vlammen zijn uit. De rechteronderarm en de pols zijn verbrand. Er zit een stukje stof vast aan de huid.

Vraag: hoe koel je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je legt een zak ijs op de arm tot de pijn weg is. | Scherm 2 opnieuw | Niet goed. IJs kan de huid verder beschadigen en het slachtoffer laten afkoelen. | 0 |
| B. Je trekt eerst de koksbuis uit, ook het stuk dat vastzit, zodat je goed kunt koelen. | Scherm 2 opnieuw | Niet goed. Koel eerst met de kleding aan. Kleding die vastzit aan de huid haal je niet los. | 0 |
| C. Je koelt direct, tien tot twintig minuten, met zacht stromend lauw leidingwater, met de kleding aan. Het stuk stof dat vastzit, laat je zitten. | Scherm 3 | Goed. Koelen is de belangrijkste eerste hulp. Zonder koelen gaat de warmte door en wordt de wond dieper. | 1 |

### Scherm 3 Ring en horloge

Tekst: terwijl je koelt, zie je dat Erik een trouwring en een horloge draagt aan de verbrande hand.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat ze zitten; dat is zijn eigen spul. | Scherm 3 opnieuw | Niet goed. De verbrande huid zwelt op. Een ring of horloge kan dan gaan afknellen en later niet meer af. | 0 |
| B. Je haalt de ring en het horloge nu al af, tijdens het koelen. | Scherm 4 | Goed. Haal sieraden zo snel mogelijk af, het liefst al tijdens het koelen, voordat de hand opzwelt. | 1 |
| C. Je haalt ze af als de hand dik wordt. | Scherm 3 opnieuw | Te laat. Als de hand is opgezwollen, gaat een ring er vaak niet meer af. Haal hem nu af. | 0 |

### Scherm 4 Hoe diep?

Tekst: na het koelen bekijk je de arm. Het grootste deel van de onderarm is rood en nat, met blaren, en zeer pijnlijk. Op de pols zit een plek die grauwwit en leerachtig is. Erik zegt dat die plek geen pijn doet.

Vraag: wat zeg je over de plek op de pols?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Die is minder ernstig, want hij doet geen pijn. | Scherm 4 opnieuw | Niet goed. Een volledige brandwond doet geen pijn, omdat de zenuwen in de huid zijn verbrand. Een brandwond zonder pijn is dus niet minder ernstig. | 0 |
| B. Dat is een oppervlakkige brandwond; die geneest vanzelf. | Scherm 4 opnieuw | Niet goed. Een oppervlakkige brandwond is rood en pijnlijk. Grauwwit, leerachtig en gevoelloos past bij een volledige brandwond. | 0 |
| C. Dat kan een volledige brandwond zijn. De onderarm is een gedeeltelijke brandwond. Je beschouwt het geheel als ernstig. | Scherm 5 | Goed. Nat met blaren en pijnlijk past bij een gedeeltelijke brandwond. Grauwwit, leerachtig en gevoelloos past bij een volledige brandwond. Twijfel je over de diepte, beschouw de wond dan als ernstig. | 1 |

### Scherm 5 Hoe groot?

Tekst: je kijkt nog eens goed. Ook de bovenarm heeft blaren, en op de borst zitten twee plekken met blaren, samen ongeveer zo groot als twee handen van Erik. De hele rechterarm is verbrand.

Vraag: hoe groot is het verbrande deel ongeveer volgens de regel van negen?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Ongeveer 27 procent. | Scherm 5 opnieuw | Te hoog. Een hele arm is 9 procent. De plekken op de borst samen zijn ongeveer 2 procent, want een hand met vingers is ongeveer 1 procent. | 0 |
| B. Ongeveer 11 procent: 9 procent voor de hele arm en ongeveer 2 procent voor de plekken op de borst. | Scherm 6 | Goed. Iedere arm telt voor 9 procent. Voor kleine plekken gebruik je de hand van het slachtoffer, die is ongeveer 1 procent. | 1 |
| C. Ongeveer 2 procent. | Scherm 5 opnieuw | Te laag. Je telt alleen de plekken op de borst. De hele arm telt voor 9 procent. | 0 |

### Scherm 6 Een hese stem

Tekst: Erik praat hees en hoest. Zijn rechterwenkbrauw is verschroeid en er zit roet rond zijn neus.

Vraag: wat betekent dit en wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Dat komt van de rook in de kombuis; het gaat vanzelf over. | Scherm 6 opnieuw | Niet goed. Een hese stem, verbrande wenkbrauwen, roet rond mond en neus en hoesten kunnen wijzen op letsel van de luchtwegen. De ademhaling kan pas later slechter worden. | 0 |
| B. Je laat hem een glas koud water drinken om de keel te koelen. | Scherm 6 opnieuw | Niet goed. Dat helpt niet tegen letsel van de luchtwegen. Raadpleeg direct de Radio Medische Dienst. | 0 |
| C. Dit kunnen tekenen van letsel van de luchtwegen zijn. Is hij benauwd, dan laat je hem halfzittend rusten. Je laat direct contact leggen met de Radio Medische Dienst. | Scherm 7 | Goed. Letsel van de luchtwegen kan pas na enige tijd de ademhaling verslechteren. Daarom raadpleeg je direct de arts. | 1 |

### Scherm 7 Afdekken

Vraag: hoe dek je de brandwonden af?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je doet brandzalf op de wond en legt er watten op. | Scherm 7 opnieuw | Niet goed. Smeer niets op de wond. Gewone watten plakken vast als het wondvocht opdroogt. | 0 |
| B. Je prikt de grote blaren door, zodat het vocht eruit kan, en dekt dan af. | Scherm 7 opnieuw | Niet goed. Laat blaren heel. Een open wond raakt makkelijk besmet. | 0 |
| C. Je wast of desinfecteert je handen, trekt handschoenen aan, controleert of de verpakking heel is en legt steriel brandwondenverband los op de wonden, zonder te drukken. De blaren blijven heel, vastzittende stof laat je zitten en de vingers verbind je apart als die verbrand zijn. | Scherm 8 | Goed. Een brandwond heeft geen beschermende huid meer. Steriel en los afdekken beschermt tegen besmetting. | 1 |

### Scherm 8 Erik rilt

Tekst: na het koelen en afdekken rilt Erik. Hij zegt dat hij het koud heeft.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat hem nog tien minuten onder de kraan staan. | Scherm 8 opnieuw | Niet goed. Hij heeft lang genoeg gekoeld. Bij lang koelen kan onderkoeling ontstaan. | 0 |
| B. Je zet hem in een warme ruimte en legt een deken om hem heen, zonder druk op de afgedekte wonden. | Scherm 9 | Goed. Bescherm het slachtoffer tegen afkoelen. Lauw water en een warme ruimte helpen onderkoeling voorkomen. | 1 |
| C. Je laat hem buiten aan dek wat frisse lucht halen. | Scherm 8 opnieuw | Niet goed. Buiten koelt hij verder af. Houd hem warm. | 0 |

### Scherm 9 Het gesprek met de arts

Vraag: wat geef je door aan de Radio Medische Dienst?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "De kok heeft zich verbrand. Wat moet ik doen?" | Scherm 9B | Te weinig. De arts heeft de grootte, de diepte, de plaats, de tijd en de signalen van de luchtwegen nodig. | 0 |
| B. Om 17.30 uur verbrand door vlammen. Hele rechterarm en twee plekken op de borst, samen ongeveer 11 procent. Gedeeltelijk, met een mogelijk volledige plek op de pols. Hese stem, verschroeide wenkbrauw, roet rond de neus en hoesten. Gekoeld en steriel afgedekt, ring en horloge af, warm gehouden. Wat je meet aan ademhaling, pols en bewustzijn. | Scherm 10 | Goed. De arts hoort het percentage, de diepte, de plaats, de tijd, de signalen van de luchtwegen en wat je al hebt gedaan. | 1 |
| C. "Hij heeft derdegraads brandwonden en moet van boord." | Scherm 9B | Niet goed. Geef de feiten en laat de arts oordelen over evacuatie. | 0 |

### Scherm 9B Volledig melden (alleen bij A of C)

Tekst: De arts vraagt door. Je geeft alsnog het percentage, de diepte, de plaats, de tijd, de signalen van de luchtwegen en wat je hebt gedaan. Doorgaan naar scherm 10. `Omweg` plus 1.

### Scherm 10 De uren daarna

Tekst: Erik voelt zich na een uur redelijk goed en wil naar zijn hut.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat hem gaan en kijkt morgen naar het verband. | Scherm 10 opnieuw | Niet goed. Bij een grote brandwond kan geleidelijk een shock ontstaan, en de ademhaling kan later slechter worden. Blijf controleren. | 0 |
| B. Je blijft bij hem of laat iemand bij hem blijven. Je controleert regelmatig zijn ademhaling, pols, huid en bewustzijn, schrijft alles op met de tijd en meldt een verslechtering direct. | Debriefing | Goed. Uit een brandwond lekt vocht weg, en een shock kan zich langzaam ontwikkelen. Ook letsel van de luchtwegen kan pas later klachten geven. | 1 |
| C. Je geeft hem iets tegen de pijn uit de medicijnkist, zodat hij kan slapen. | Scherm 10 opnieuw | Niet goed. Medicijnen geef je alleen op advies van de arts. Blijf hem controleren. | 0 |

### Debriefing

Tekst: "De arts geeft advies voor de bewaking en bespreekt met de kapitein of Erik van boord moet. Jij blijft Erik controleren."

Toon `Punten` van de 10 en het aantal omwegen. Toon daarna de lessen:

1. Staat iemand in brand, laat hem dan liggen en doof met een deken: eerst de hals, het hoofd vrij.
2. Koel tien tot twintig minuten met zacht stromend lauw leidingwater, met de kleding aan. Haal sieraden af tijdens het koelen.
3. Een brandwond zonder pijn kan juist een volledige brandwond zijn. Twijfel je over de diepte, beschouw hem dan als ernstig.
4. Schat de grootte met de regel van negen en de hand van het slachtoffer.
5. Een hese stem, verbrande wenkbrauwen, roet en hoesten kunnen wijzen op letsel van de luchtwegen. Raadpleeg direct de arts.
6. Dek steriel en los af. Smeer niets, laat blaren heel en gebruik geen watten op de wond.
7. Houd het slachtoffer warm en blijf hem controleren, want shock kan later ontstaan.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- Klopt de koeltijd van tien tot twintig minuten met lauw leidingwater met de actuele richtlijn (R27)?
- Is de schatting van ongeveer 11 procent een goed oefenvoorbeeld voor de regel van negen, ook al ligt het onder de grens van ongeveer vijftien procent die de les noemt?
- Moet de cursist bij tekenen van letsel van de luchtwegen nog iets anders doen dan halfzittend laten rusten en direct de arts raadplegen?

Reviewvraag: R138.
