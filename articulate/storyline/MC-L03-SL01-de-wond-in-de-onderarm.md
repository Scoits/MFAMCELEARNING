# MC-L03-SL01 De wond in de onderarm

Vertakt scenario bij MC-L03 Wonden en behandeltechnieken. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MC-06.01 en MC-06.02: een wond beoordelen en infectie herkennen en melden. MC-07.02: een instructie van de arts controleren. MC-08.01: wanneer wel en niet hechten, en de afstemming met de arts. MC-10.01 en MC-10.02: steriel werken en een kleine behandeling veilig afronden. MC-11.02: verband aanleggen en controleren. MC-34.01: steriel en niet-steriel materiaal onderscheiden |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MC-L03-S02 (soorten wonden, peesletsel controleren); S08 (hechten of niet, wat je de arts vertelt, tetanus); S06 en S07 (een instructie controleren en hardop herhalen); S10 (steriel werken, bij twijfel niet steriel, allergieën); S11 (verdoven en hechten, zuiger terugtrekken); S05 (verband controleren); S03 en S12 (ontsteking, rode streep, nazorg); S064 en S050, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 10, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical Care; Lisa, elektricien, 29 jaar, fictief; de kapitein; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties of foto's op oefenhuid: een snijwond in de onderarm, een geopende hechtset op een steriele doek, een naaldcontainer, een verband om de onderarm. Geen patiëntbeelden. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Het is 09.15 uur. Lisa komt de ziekenboeg binnen met een doek om haar linkeronderarm. "Ik schoot uit met een nieuw afbreekmes bij het strippen van een kabel. Tien minuten geleden." Door de doek komt bloed.

## Schermen

### Scherm 1 Het bloeden

Vraag: wat doe je eerst?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je haalt de doek eraf en desinfecteert de wond meteen. | Scherm 1B | Niet goed. Eerst stop je het bloeden. Desinfecteren komt later, bij de verzorging van de wond. | 0 |
| B. Je trekt handschoenen aan, laat haar zitten, drukt met steriel gaas op de wond en houdt de arm in rust. | Scherm 2 | Goed. Eerst het bloeden stoppen met druk en rust. Daarna kun je de wond rustig beoordelen. | 1 |
| C. Je pakt de hechtset, want de wond moet dicht. | Scherm 1 opnieuw | Niet goed. Je hecht nooit zonder overleg met de arts, en eerst stop je het bloeden. | 0 |

### Scherm 1B Eerst druk (alleen bij A)

Tekst: Er komt meer bloed. Je drukt met steriel gaas op de wond en houdt de arm in rust tot het bloeden stopt. Doorgaan naar scherm 2. `Omweg` plus 1.

### Scherm 2 De wond beoordelen

Tekst: het bloeden is gestopt. De wond is vier centimeter lang, met gladde randen, en gaapt een beetje. Je ziet geen vuil.

Vraag: wat controleer je nog?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Niets; een snijwond met gladde randen is eenvoudig. | Scherm 2 opnieuw | Te weinig. Bij een snijwond in arm of hand kan een pees geraakt zijn. Controleer of ze haar vingers normaal kan buigen en strekken. | 0 |
| B. Je vraagt haar de wond aan te raken om te voelen hoe diep hij is. | Scherm 2 opnieuw | Niet goed. Zo breng je vuil in de wond. Jij beoordeelt de wond, met handschoenen aan. | 0 |
| C. Je laat haar alle vingers buigen en strekken, controleert kleur, warmte en gevoel van de hand en schrijft op hoe de wond is ontstaan, hoe oud hij is, waar hij zit, hoe groot en diep hij is en of er vuil in zit. | Scherm 3 | Goed. Zo zie je of een pees is geraakt en heb je alles wat de arts wil weten om te beslissen over hechten. | 1 |

### Scherm 3 Hechten of niet?

Tekst: Lisa kan alle vingers normaal buigen en strekken. Het gevoel is in orde.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je overlegt met de arts. Je vertelt hoe de wond is ontstaan, dat hij een kwartier oud is, waar hij zit, hoe groot en diep hij is, dat er geen vuil in zit en dat buigen en strekken goed gaan. Je vraagt Lisa wanneer haar laatste tetanusprik was en meldt dat ook. | Scherm 4 | Goed. Je hecht alleen na overleg. Deze wond is vers, schoon en niet door een vleesmes of vis ontstaan. De arts beslist, met de tetanusvraag erbij. | 1 |
| B. Je hecht zelf, want de wond is schoon en vers. | Scherm 3 opnieuw | Niet goed. Ook een wond die geschikt lijkt, hecht je alleen na overleg met de arts. | 0 |
| C. Je hecht niet, want iedere wond aan boord raakt ontstoken. | Scherm 3 opnieuw | Niet goed. Wonden ouder dan zes uur, bijtwonden, wonden door een vleesmes of van vis, diepe steekwonden en vuile wonden hecht je niet. Deze wond is geen van die. Overleg met de arts. | 0 |

### Scherm 4 De instructie

Tekst: fictief oefenadvies: "Verdoof met lidocaïne en hecht de wond." De arts noemt geen hoeveelheid.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je neemt de hoeveelheid die je de vorige keer gebruikte. | Scherm 4 opnieuw | Niet goed. Je geeft alleen wat de arts nu adviseert. Vraag na wat ontbreekt. | 0 |
| B. Je vraagt Lisa naar allergieën, ook voor verdoving, pleister en desinfectiemiddel. Je vraagt de arts welke sterkte en hoeveel, herhaalt de instructie hardop en schrijft hem op. | Scherm 5 | Goed. Je voert een instructie pas uit als middel, sterkte en hoeveelheid duidelijk zijn en de arts weet of er een allergie is. | 1 |
| C. Je hecht zonder verdoving, want dan hoef je niets na te vragen. | Scherm 4 opnieuw | Niet goed. De arts heeft verdoving geadviseerd. Vraag na wat onduidelijk is en voer het advies dan uit. | 0 |

### Scherm 5 Het werkveld

Tekst: Lisa heeft geen allergieën. De arts heeft de instructie aangevuld. Je pakt een hechtset uit de kast.

Vraag: hoe bereid je het werkveld voor?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je pakt de set die vorige week is gebruikt en daarna is schoongemaakt en gedesinfecteerd. | Scherm 5 opnieuw | Niet goed. Reinigen en desinfecteren maakt instrumenten niet steriel. Gebruik steriel wegwerpmateriaal of een nieuwe steriele set. | 0 |
| B. Je controleert of de verpakking heel en droog is en de houdbaarheidsdatum niet is verstreken. Je opent de set zonder de binnenkant aan te raken en laat de inhoud op de steriele doek vallen. Je zorgt voor goed licht. Dan was je je handen en trek je steriele handschoenen aan. | Scherm 6 | Goed. Steriel materiaal komt uit een gesloten, onbeschadigde verpakking. Na het aantrekken van de steriele handschoenen raak je alleen nog steriel materiaal aan. | 1 |
| C. Je trekt eerst steriele handschoenen aan en scheurt dan de verpakking open. | Scherm 5 opnieuw | Niet goed. Met de buitenkant van de verpakking maak je de handschoenen onsteriel. Open eerst de set, was je handen en trek dan de steriele handschoenen aan. | 0 |

### Scherm 6 Een moment van twijfel

Tekst: terwijl je de gatdoek wilt pakken, schuift het schip. Je steunt even met je hand. Je weet niet zeker of je de rand van de tafel hebt geraakt.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je gaat door; het was maar heel even. | Scherm 6 opnieuw | Niet goed. Twijfel je of iets steriel is, dan is het niet steriel. | 0 |
| B. Je veegt de handschoen af met een gaasje en gaat door. | Scherm 6 opnieuw | Niet goed. Afvegen maakt een handschoen niet weer steriel. | 0 |
| C. Je trekt de handschoenen uit, wast je handen opnieuw en trekt nieuwe steriele handschoenen aan. | Scherm 7 | Goed. Bij twijfel is het niet steriel. Nieuwe handschoenen kosten een minuut; een wondinfectie kost veel meer. | 1 |

### Scherm 7 Verdoven

Tekst: je spuit langs de wondranden in. Voordat je de eerste keer inspuit, trek je de zuiger iets terug. Je ziet bloed in de spuit.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je spuit toch in, want dan werkt de verdoving sneller. | Scherm 7B | Niet goed. Bloed in de spuit betekent dat je in een bloedvat zit. Daar spuit je niet in. | 0 |
| B. Je verplaatst de naald en trekt opnieuw de zuiger iets terug voordat je inspuit. | Scherm 8 | Goed. Zie je bloed, dan zit je in een bloedvat en verplaats je de naald. Controleer het opnieuw voordat je inspuit. | 1 |
| C. Je stopt met verdoven en hecht zonder verdere verdoving. | Scherm 7 opnieuw | Niet goed. Je hoeft niet te stoppen. Verplaats de naald en controleer opnieuw. | 0 |

### Scherm 7B Naald verplaatsen (alleen bij A)

Tekst: Je stopt voordat je inspuit, verplaatst de naald en trekt opnieuw de zuiger terug. Er komt geen bloed. Doorgaan naar scherm 8. `Omweg` plus 1.

### Scherm 8 Afronden

Tekst: de wond is gehecht met vier hechtingen.

Vraag: hoe rond je af?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je maakt de wond schoon, dekt hem af met een steriele pleister of gaas, gooit de naalden en het mesje direct in de naaldcontainer en schrijft de behandeling in het medisch logboek. | Scherm 9 | Goed. Een behandeling is pas klaar als de wond is afgedekt, scherpe materialen veilig weg zijn en alles is vastgelegd. | 1 |
| B. Je legt de naalden op het blad en ruimt alles op als Lisa weg is. | Scherm 8 opnieuw | Niet goed. Naalden en mesjes gooi je direct in de naaldcontainer, zodat niemand zich kan prikken. | 0 |
| C. Je laat de wond open aan de lucht drogen, dan geneest hij sneller. | Scherm 8 opnieuw | Niet goed. Dek een gehechte wond af met een steriele pleister of gaas. | 0 |

### Scherm 9 Het verband

Tekst: je legt een verband om de onderarm, zodat de pleister op zijn plek blijft tijdens het werk.

Vraag: wat controleer je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Niets; een verband om een arm kan niet te strak zitten. | Scherm 9 opnieuw | Niet goed. Ieder verband kan te strak zitten. Controleer de doorbloeding voorbij het verband. | 0 |
| B. Je controleert kleur, warmte en gevoel van de vingers, vraagt of het verband knelt en spreekt af dat Lisa iedere dag langskomt en eerder als de wond pijnlijker wordt of het verband nat of vuil is. | Scherm 10 | Goed. Je controleert de doorbloeding, en een gehechte wond controleer je iedere dag. Een nat of vuil verband vervang je. | 1 |
| C. Je vraagt alleen of het verband goed voelt. | Scherm 9 opnieuw | Te weinig. Kijk zelf ook naar kleur, warmte en gevoel van de vingers, en spreek een dagelijkse controle af. | 0 |

### Scherm 10 Dag drie

Tekst: op de derde dag is de wond rood, gezwollen en warm. Vanaf de wond loopt een rode streep richting de elleboog. Lisa voelt zich koortsig.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je maakt de wond schoon, legt een nieuw verband aan en kijkt morgen opnieuw. | Scherm 10 opnieuw | Niet goed. Een rode streep met koorts wijst op een lymfevatontsteking. Daarvoor raadpleeg je direct de arts. | 0 |
| B. Je wacht af, want roodheid hoort bij genezing. | Scherm 10 opnieuw | Niet goed. Een rode streep en koorts horen niet bij normale genezing. | 0 |
| C. Je meet de temperatuur en de andere vitale functies, schrijft op wat je ziet en raadpleegt direct de arts. Bij ontsteking verwijder je de hechtingen, zoals de les beschrijft, en je volgt het advies van de arts. | Debriefing | Goed. De infectie breidt zich uit. Direct overleg is nodig, en bij ontsteking gaan de hechtingen eruit. | 1 |

### Debriefing

Tekst: "De arts geeft een advies voor de wond en de koorts. Jij controleert de wond iedere dag en legt alles vast in het medisch logboek."

Toon `Punten` van de 10 en het aantal omwegen. Toon daarna de lessen:

1. Stop eerst het bloeden. Controleer bij een snijwond in arm of hand of de vingers normaal buigen en strekken.
2. Je hecht alleen na overleg met de arts. Vertel hoe de wond is ontstaan, hoe oud hij is, waar hij zit, hoe groot en diep hij is, of er vuil in zit en wanneer de laatste tetanusprik was.
3. Voer een instructie pas uit als middel, sterkte en hoeveelheid duidelijk zijn. Vraag naar allergieën en herhaal de instructie hardop.
4. Bij twijfel is iets niet steriel. Gereinigde instrumenten zijn niet steriel.
5. Zie je bloed in de spuit, verplaats dan de naald.
6. Rond af met afdekken, scherpe materialen direct in de naaldcontainer en een notitie in het logboek. Controleer het verband en de wond iedere dag.
7. Een rode streep met koorts meld je direct.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- Is een verse, schone snijwond door een nieuw afbreekmes een goed oefenvoorbeeld van een wond die na overleg gehecht mag worden?
- Het scenario noemt geen hoeveelheid of sterkte van lidocaïne (R56). Is de keuze om die bij de arts na te vragen een goede oefening?
- In scherm 10 volgt het scenario S12: bij ontsteking de hechtingen direct verwijderen en de arts raadplegen. Moet de cursist de hechtingen eerst verwijderen of eerst overleggen?
- Is de dagelijkse controle van de wond zoals in scherm 9 juist voor een gehechte wond aan boord?

Reviewvraag: R133.
