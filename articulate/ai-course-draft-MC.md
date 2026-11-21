# MC: pakket voor AI Course Drafts in Rise

Werkversie 0.1, 21 november 2026. Dit pakket volgt de werkwijze waarmee Martijn de cursus Security Awareness bouwde. Je start in 360 Home met Create with AI en uploadt de eigen bronnen. Daarna stuur je de outline bij met gerichte correctieprompts en kies je de instellingen. Pas dan laat je Rise de lessen maken. Bij Medical Care gaat het om medische inhoud. Daarom komt alle inhoud uit de lesteksten in de bronbestanden, en controleer je iedere gegenereerde les tegen de bron voordat Mathanje haar beoordeelt.

Doel voor de studietijd: 480 minuten voor MC, samen met MC 16 uur. Een AI-concept haalt die tijd niet vanzelf. Na het genereren tel je de tijd per les met de rekenregel in `docs/studietijd-rekenregel.md`. Vul een tekort aan met de activiteiten uit `docs/leeractiviteiten-plan.md`.

## 1. Bronbestanden uploaden

Upload deze bestanden uit `articulate-proef/ai-course-draft/MC/bronnen/`. Ieder bestand is één les met de goedgekeurde cursistentekst, de leerdoelen per scherm, de beelden, de kennischecks met feedback en de casussen.

- `MC-L00-bron.docx`: Start en aansluiting op Medical First Aid
- `MC-L01-bron.docx`: Aanvullend onderzoek
- `MC-L02-bron.docx`: Verdiepende traumazorg
- `MC-L03-bron.docx`: Wonden en behandeltechnieken
- `MC-L04-bron.docx`: Verpleegkundige zorg en bewaking
- `MC-L05-bron.docx`: Ziekten en medische noodsituaties
- `MC-L06-bron.docx`: Bijzondere zorg aan boord
- `MC-L07-bron.docx`: Preventie, beheer en regelgeving
- `MC-L08-bron.docx`: Gecoördineerde medische hulp en evacuatie
- `MC-L09-bron.docx`: Theorieafronding en voorbereiding op de praktijkdagen

Upload geen boeken, presentaties of model courses als bron voor de tekst. Anders neemt de AI daar zelf inhoud uit die niet is beoordeeld. Wil je dia's als beeld gebruiken, upload ze dan pas na het genereren als bron in de cursus. Kies ze daarna via Replace from your sources.

## 2. Startprompt voor de outline

Plak deze prompt in het veld voor de cursusbeschrijving of de instructie. Is het veld te kort, upload de prompt dan als Word-bestand en schrijf in het veld: "Volg de instructie in het bestand outline-instructie."

> Maak een outline voor de e-learning Medical Care (MC) van DRTC, een STCW-opleiding volgens tabel A-VI/4-2 en IMO Model Course 1.15. De competentie is: medische zorg geven aan zieken en gewonden zolang zij aan boord blijven, en meedoen aan gecoördineerde medische hulp. De e-learning vervangt de klassikale theorie volledig. De cursist oefent en wordt beoordeeld op twee dagen op locatie bij DRTC met handelingen en scenario's.
>
> Doelgroep: zeevarenden zonder medische voorkennis, die eens in de vijf jaar deze cursus doen. Veel van hen lezen Nederlands als tweede taal. Taal: eenvoudig Nederlands, korte zinnen, de cursist wordt met je aangesproken, voorbeelden aan boord van een koopvaardijschip.
>
> Gebruik precies 10 lessen, in deze volgorde en met deze titels. Ieder bronbestand is één les. Neem per les de leerdoelen hieronder over:
>
> MC-L00 Start en aansluiting op Medical First Aid (ongeveer 15 minuten studietijd). Leerdoelen: MC-32.01: Toon de noodzakelijke MFA-voorkennis voor MC aan en herken eigen leerbehoeften.
>
> MC-L01 Aanvullend onderzoek (ongeveer 50 minuten studietijd). Leerdoelen: MC-32.02: Beschrijf doel, grenzen en voorbereiding van eenvoudige aanvullende tests en zeegaande anamnese.
>
> MC-L02 Verdiepende traumazorg (ongeveer 60 minuten studietijd). Leerdoelen: MC-01.01: Herken in een casus signalen van hoofd- of wervelletsel en verzamel relevante waarnemingen. MC-01.02: Beargumenteer en demonstreer veilige zorg en vervoer bij vermoeden van wervelletsel. MC-02.01: Onderscheid in casuïstiek letsel aan oor, neus, keel en ogen en verzamel gerichte informatie. MC-02.02: Demonstreer de voorbereiding van onderzoek en nazorg bij oog- of KNO-letsel binnen de vastgestelde grenzen. MC-03.01: Herken aanwijzingen voor uitwendige of inwendige bloeding en leg urgentie uit. MC-03.02: Demonstreer passende bloedingszorg en bewaking volgens de vastgestelde werkwijze. MC-04.01: Beoordeel in een casus ernst en mogelijke complicaties van brand-, verbrandings- en koudeletsel. MC-04.02: Stel zorgprioriteiten vast en demonstreer voorbereiding en bewaking bij thermisch letsel. MC-05.01: Onderscheid vermoedelijke fractuur, ontwrichting en spier- of gewrichtsletsel en benoem risico’s. MC-05.02: Demonstreer passende ondersteuning of immobilisatie en controleer het effect.
>
> MC-L03 Wonden en behandeltechnieken (ongeveer 45 minuten studietijd). Leerdoelen: MC-06.01: Classificeer wondkenmerken en verklaar welke factoren wondgenezing en infectierisico beïnvloeden. MC-06.02: Herken aanwijzingen voor wondinfectie en demonstreer passende verzorging en vervolgmelding. MC-07.01: Vergelijk niet-medicamenteuze mogelijkheden voor pijnverlichting in een patiëntcasus. MC-07.02: Controleer bij een gegeven medicatie-instructie gegevens, toedieningsroute en noodzaak tot overleg. MC-08.01: Verklaar welke voorbereiding en medische afstemming nodig zijn voor hechten, ligeren of klemmen. MC-08.02: Demonstreer de vastgestelde wondsluitings- en bloedingscontrolevaardigheid op trainingsmateriaal. MC-10.01: Leg de eisen aan patiënt, materiaal en steriel werkveld voor een kleine ingreep uit. MC-10.02: Demonstreer een geselecteerde kleine behandeltechniek en de veilige afronding ervan. MC-11.01: Kies passend verbandmateriaal op grond van doel en letselsituatie. MC-11.02: Leg een passend verband aan en controleer de uitwerking en patiëntreactie. MC-34.01: Onderscheid passende reinigings-, desinfectie- en sterilisatiemaatregelen voor chirurgisch materiaal. MC-34.02: Demonstreer veilig voorbereiden en gebruiken van geselecteerde chirurgische instrumenten.
>
> MC-L04 Verpleegkundige zorg en bewaking (ongeveer 55 minuten studietijd). Leerdoelen: MC-12.01: Selecteer noodzakelijke patiëntobservaties voor een zorgperiode aan boord. MC-12.02: Vergelijk opeenvolgende observaties en bepaal welke verandering medische terugkoppeling vraagt. MC-13.01: Plan eenvoudige verpleegkundige zorg op grond van patiëntbehoeften en ontvangen advies. MC-13.02: Bereid vastgestelde invasieve zorgtaken voor en demonstreer injectie- en kathetervaardigheden afzonderlijk op trainers volgens het vaardigheidsregister.
>
> MC-L05 Ziekten en medische noodsituaties (ongeveer 80 minuten studietijd). Leerdoelen: MC-09.01: Herken alarmsignalen bij acute buikklachten en verzamel gerichte voorgeschiedenis. MC-09.02: Beargumenteer de noodzaak van medisch advies en volg een gegeven zorginstructie. MC-14.01: Herken medische noodsituaties in verschillende orgaansystemen en verzamel gegevens voor medisch advies. MC-14.02: Gebruik een medische gids en gegeven radioadvies voor passende zorg en herbeoordeling. MC-15.01: Herken relevante signalen en informatiebehoeften bij mogelijke seksueel overdraagbare aandoeningen. MC-15.02: Leg passende vervolgstappen en preventieadvies uit binnen ontvangen medische instructie. MC-16.01: Verbind reis- en blootstellingsgegevens met signalen van mogelijke tropische ziekte. MC-16.02: Beargumenteer preventie, medische consultatie en observatie bij een verdenking van tropische ziekte. MC-17.01: Verklaar transmissieroutes en herken signalen van mogelijke infectie aan boord. MC-17.02: Plan en communiceer maatregelen bij een mogelijke gastro-intestinale uitbraak.
>
> MC-L06 Bijzondere zorg aan boord (ongeveer 55 minuten studietijd). Leerdoelen: MC-18.01: Herken in een casus tekenen van middelenmisbruik, afhankelijkheid of ontregeling. MC-18.02: Organiseer passende ondersteuning en medische afstemming bij middelenproblematiek of psychische ontregeling. MC-19.01: Leg mondhygiëne uit en verzamel relevante informatie bij een tandheelkundig probleem. MC-19.02: Bereid passende tijdelijke tandheelkundige zorg voor volgens medisch advies. MC-20.01: Herken informatiebehoeften en alarmsignalen bij zwangerschap of een gynaecologische klacht. MC-20.02: Bereid een door medische ondersteuning begeleide zorgsituatie rond een bevalling voor. MC-21.01: Prioriteer observaties en zorgbehoeften van geredde personen. MC-21.02: Organiseer en demonstreer passende opvang en verdere zorg voor geredden. MC-22.01: Verzamel en rapporteer waarnemingen bij een stervende of mogelijk overleden persoon binnen de eigen rol. MC-22.02: Leg de zorgvuldige vervolgstappen voor omgaan met een overledene aan boord uit.
>
> MC-L07 Preventie, beheer en regelgeving (ongeveer 50 minuten studietijd). Leerdoelen: MC-23.01: Beoordeel risico’s voor scheepshygiëne bij water, voedsel, afval en leefomgeving. MC-23.02: Stel een praktisch verbeter- en communicatieplan voor een hygiënerisico op. MC-24.01: Onderscheid reiniging, desinfectie en bestrijding van vectoren of ongedierte. MC-24.02: Maak een plan om overdracht of een uitbraak te beperken en het effect te volgen. MC-25.01: Leg uit hoe vaccinatie bijdraagt aan bescherming van zeevarenden. MC-25.02: Zoek actuele relevante vaccinatie-informatie voor een fictief vaargebied en leg de vervolgstap vast. MC-26.01: Leg observaties, zorg en gegeven medicatie feitelijk en herleidbaar vast. MC-26.02: Bereid een medische rapportage of overdracht aan een bevoegde ontvanger voor. MC-27.01: Vind de toepasselijke nationale en internationale medische bepalingen voor een concrete scheepssituatie. MC-27.02: Leg vast welke actuele medische voorschriften en gidsen aan boord raadpleegbaar moeten zijn. MC-33.01: Controleer een medische uitrusting en medicijnvoorraad op geschiktheid, beschikbaarheid en vervaldata. MC-33.02: Bereid veilig gebruik van medicatie en medische apparatuur en correcte afvalafhandeling voor.
>
> MC-L08 Gecoördineerde medische hulp en evacuatie (ongeveer 45 minuten studietijd). Leerdoelen: MC-28.01: Bereid een gestructureerde RMD/TMAS-hulpvraag voor met relevante patiënt- en scheepsgegevens. MC-28.02: Controleer ontvangen medisch advies en vertaal dit naar uitvoerbare zorg en terugmelding. MC-29.01: Beoordeel patiënt- en omgevingsfactoren die veilig vervoer en evacuatie beïnvloeden. MC-29.02: Demonstreer de voorbereiding van transport met passende brancard en gesimuleerde evacuatie. MC-30.01: Organiseer medische vervolgzorg met havenautoriteiten of een poliklinische voorziening. MC-30.02: Pas informatieoverdracht aan bij taal- of cultuurverschillen en controleer begrip. MC-31.01: Verbind medisch advies, zorg aan boord en evacuatie tot een samenhangend hulpverleningsplan. MC-31.02: Demonstreer de eigen rol en documenteer overdrachten tijdens een gecoördineerd scenario.
>
> MC-L09 Theorieafronding en voorbereiding op de praktijkdagen (ongeveer 25 minuten studietijd). Leerdoelen: 
>
> Harde grenzen: gebruik uitsluitend de geüploade bronbestanden. Voeg geen medische feiten, getallen, doseringen, middelen, codes of handelingen toe die niet in de bron staan, en vul niet aan uit algemene kennis. Kort geen stappen, waarschuwingen of uitzonderingen in en verander de volgorde van stappen niet. Ontbreekt er iets, zet dan in de les een Note met de tekst VRAAG VOOR MATHANJE en wat er ontbreekt. Begin iedere les met de conceptmelding uit de bron in een Note. Online leren vervangt de praktijkbeoordeling niet: verwijs bij handelingen naar de praktijkdag.

## 3. Correctiechecklist voor de outline

Loop de outline na voordat je de lessen laat maken. Stuur bij met een korte correctieprompt per punt, zoals: "Zet les 3 terug op de titel uit de bron en neem leerdoel MFA-12.02 op."

- Zijn er precies 10 lessen, in de volgorde en met de titels uit de startprompt?
- Staat bij iedere les ieder leerdoel uit de startprompt, en geen leerdoel dat er niet bij hoort?
- Komen alle onderwerpen in de beschrijving uit het bronbestand van die les? Schrap onderwerpen die er niet in staan.
- Belooft een beschrijving geen handeling die alleen op de praktijkdag hoort, zoals zelf injecteren of hechten in MFA?
- Staat er een eindtoets in de outline? Haal die eruit: de afsluitende kennistoets komt in Moodle Quiz.
- Is de beschrijving van de cursus kort, zonder beloften over certificering of goedkeuring?
- Klopt de verdeling van de studietijd ongeveer met de minuten per les?

## 4. Instellingen

| Instelling | Keuze |
| --- | --- |
| Course content | Text and interactive content |
| AI images | Uit; beelden komen uit de bron en uit de beeldbank |
| Final quiz | Uit; de eindtoets komt in Moodle Quiz |
| Knowledge checks | Aan, met de instructie hieronder |
| Taal | Nederlands |
| Stijl | De DRTC-stijl uit Security Awareness |

Maak voor het genereren een kopie van de cursus. Als je een generatie annuleert, kan Rise al gemaakte lessen verwijderen.

## 5. Instructie voor kennischecks en scenario's

> Neem de kennischecks uit de bron letterlijk over: de vraag, de antwoorden in dezelfde volgorde, het juiste antwoord en de feedback per antwoord.
>
> Voeg per onderwerp oefenvragen toe als het antwoord letterlijk in de bron staat. Maak er bij voorkeur een korte situatie aan boord van, met de vraag wat de cursist doet of ziet.
>
> Foute antwoorden zijn echte denkfouten uit de bron, geen onzin. Begin de feedback met Juist. of Onjuist. en leg uit waarom, met de reden uit de bron.
>
> Alle vragen zijn formatief: de cursist mag opnieuw proberen en er is geen score.
>
> Bouw de casussen met keuzes uit de bron als Scenario-blok: één scène per keuze, en een onjuiste keuze gaat met uitleg terug naar dezelfde scène. Personen en dialogen mogen verzonnen zijn. Wat zij medisch doen of zeggen, komt uit de bron.
>
> Wissel uitleg en activiteit af: na hoogstens twee tekstblokken komt een interactief blok of een oefenvraag. Gebruik geen flashcards. Gebruik een accordeon alleen voor naslag.
>
> Waar de bron SCENARIO-PAKKET noemt, laat je een lege plek met de tekst SCENARIO-PAKKET. DRTC plaatst daar een kant-en-klaar scenario in een Code Block.

Vertakte scenario's die DRTC als HTML-pakket levert en die je met een Code Block in de les zet: MC-L04-SL01 verslechtering in de nacht in MC-L04; MC-L08-SL01 helikopterevacuatie in MC-L08. De scripts staan in `articulate/storyline/`; Storyline is de terugval.

Zet na de generatie bij Settings > Navigation de navigatie op Restricted. Zet na ieder interactief blok en iedere kennischeck een Continue-blok met Complete block above.

## 6. Controleprompt per gegenereerde les

Plak deze prompt in de AI Assistant bij iedere les, met het bronbestand van die les geselecteerd:

> Vergelijk deze les met het geselecteerde bronbestand. Maak een lijst van:
>
> 1. iedere stap, waarschuwing, uitzondering of lijstonderdeel uit de bron dat ontbreekt;
>
> 2. iedere zin met een medisch feit, getal, middel, code of handeling die niet in de bron staat;
>
> 3. iedere kennischeck uit de bron die anders is overgenomen;
>
> 4. iedere plek waar de volgorde van stappen anders is dan in de bron;
>
> 5. iedere nieuwe oefenvraag waarvan het antwoord niet letterlijk in de bron staat.
>
> Geef per punt het blok en de bronzin. Herschrijf niets.

Herstel ieder punt in het betreffende blok, met de tekst uit de bron. Laat de les niet opnieuw genereren. Tel daarna de studietijd met `tools/studietijd.py` (strenge rekenregel) en leg de les vast in `articulate/revisieregister.csv`. Mathanje beoordeelt daarna de gepubliceerde les, met de nieuwe oefenvragen en casussen. Een gegenereerde les krijgt geen andere status dan een les uit de letterlijke import: medische review nodig.

## Leerdoelen per les

| Les | Leerdoel | Gedrag |
| --- | --- | --- |
| MC-L00 | MC-32.01 Toon de noodzakelijke MFA-voorkennis voor MC aan en herken eigen leerbehoeften. | herkennen |
| MC-L01 | MC-32.02 Beschrijf doel, grenzen en voorbereiding van eenvoudige aanvullende tests en zeegaande anamnese. | uitleggen |
| MC-L02 | MC-01.01 Herken in een casus signalen van hoofd- of wervelletsel en verzamel relevante waarnemingen. | herkennen |
| MC-L02 | MC-01.02 Beargumenteer en demonstreer veilige zorg en vervoer bij vermoeden van wervelletsel. | doen |
| MC-L02 | MC-02.01 Onderscheid in casuïstiek letsel aan oor, neus, keel en ogen en verzamel gerichte informatie. | herkennen |
| MC-L02 | MC-02.02 Demonstreer de voorbereiding van onderzoek en nazorg bij oog- of KNO-letsel binnen de vastgestelde grenzen. | doen |
| MC-L02 | MC-03.01 Herken aanwijzingen voor uitwendige of inwendige bloeding en leg urgentie uit. | herkennen |
| MC-L02 | MC-03.02 Demonstreer passende bloedingszorg en bewaking volgens de vastgestelde werkwijze. | doen |
| MC-L02 | MC-04.01 Beoordeel in een casus ernst en mogelijke complicaties van brand-, verbrandings- en koudeletsel. | beslissen |
| MC-L02 | MC-04.02 Stel zorgprioriteiten vast en demonstreer voorbereiding en bewaking bij thermisch letsel. | doen |
| MC-L02 | MC-05.01 Onderscheid vermoedelijke fractuur, ontwrichting en spier- of gewrichtsletsel en benoem risico’s. | herkennen |
| MC-L02 | MC-05.02 Demonstreer passende ondersteuning of immobilisatie en controleer het effect. | doen |
| MC-L03 | MC-06.01 Classificeer wondkenmerken en verklaar welke factoren wondgenezing en infectierisico beïnvloeden. | uitleggen |
| MC-L03 | MC-06.02 Herken aanwijzingen voor wondinfectie en demonstreer passende verzorging en vervolgmelding. | doen |
| MC-L03 | MC-07.01 Vergelijk niet-medicamenteuze mogelijkheden voor pijnverlichting in een patiëntcasus. | uitleggen |
| MC-L03 | MC-07.02 Controleer bij een gegeven medicatie-instructie gegevens, toedieningsroute en noodzaak tot overleg. | beslissen |
| MC-L03 | MC-08.01 Verklaar welke voorbereiding en medische afstemming nodig zijn voor hechten, ligeren of klemmen. | doen |
| MC-L03 | MC-08.02 Demonstreer de vastgestelde wondsluitings- en bloedingscontrolevaardigheid op trainingsmateriaal. | doen |
| MC-L03 | MC-10.01 Leg de eisen aan patiënt, materiaal en steriel werkveld voor een kleine ingreep uit. | doen |
| MC-L03 | MC-10.02 Demonstreer een geselecteerde kleine behandeltechniek en de veilige afronding ervan. | doen |
| MC-L03 | MC-11.01 Kies passend verbandmateriaal op grond van doel en letselsituatie. | beslissen |
| MC-L03 | MC-11.02 Leg een passend verband aan en controleer de uitwerking en patiëntreactie. | doen |
| MC-L03 | MC-34.01 Onderscheid passende reinigings-, desinfectie- en sterilisatiemaatregelen voor chirurgisch materiaal. | herkennen |
| MC-L03 | MC-34.02 Demonstreer veilig voorbereiden en gebruiken van geselecteerde chirurgische instrumenten. | doen |
| MC-L04 | MC-12.01 Selecteer noodzakelijke patiëntobservaties voor een zorgperiode aan boord. | uitleggen |
| MC-L04 | MC-12.02 Vergelijk opeenvolgende observaties en bepaal welke verandering medische terugkoppeling vraagt. | beslissen |
| MC-L04 | MC-13.01 Plan eenvoudige verpleegkundige zorg op grond van patiëntbehoeften en ontvangen advies. | uitleggen |
| MC-L04 | MC-13.02 Bereid vastgestelde invasieve zorgtaken voor en demonstreer injectie- en kathetervaardigheden afzonderlijk op trainers volgens het vaardigheidsregister. | doen |
| MC-L05 | MC-09.01 Herken alarmsignalen bij acute buikklachten en verzamel gerichte voorgeschiedenis. | herkennen |
| MC-L05 | MC-09.02 Beargumenteer de noodzaak van medisch advies en volg een gegeven zorginstructie. | beslissen |
| MC-L05 | MC-14.01 Herken medische noodsituaties in verschillende orgaansystemen en verzamel gegevens voor medisch advies. | herkennen |
| MC-L05 | MC-14.02 Gebruik een medische gids en gegeven radioadvies voor passende zorg en herbeoordeling. | doen |
| MC-L05 | MC-15.01 Herken relevante signalen en informatiebehoeften bij mogelijke seksueel overdraagbare aandoeningen. | herkennen |
| MC-L05 | MC-15.02 Leg passende vervolgstappen en preventieadvies uit binnen ontvangen medische instructie. | uitleggen |
| MC-L05 | MC-16.01 Verbind reis- en blootstellingsgegevens met signalen van mogelijke tropische ziekte. | herkennen |
| MC-L05 | MC-16.02 Beargumenteer preventie, medische consultatie en observatie bij een verdenking van tropische ziekte. | beslissen |
| MC-L05 | MC-17.01 Verklaar transmissieroutes en herken signalen van mogelijke infectie aan boord. | herkennen |
| MC-L05 | MC-17.02 Plan en communiceer maatregelen bij een mogelijke gastro-intestinale uitbraak. | doen |
| MC-L06 | MC-18.01 Herken in een casus tekenen van middelenmisbruik, afhankelijkheid of ontregeling. | herkennen |
| MC-L06 | MC-18.02 Organiseer passende ondersteuning en medische afstemming bij middelenproblematiek of psychische ontregeling. | beslissen |
| MC-L06 | MC-19.01 Leg mondhygiëne uit en verzamel relevante informatie bij een tandheelkundig probleem. | uitleggen |
| MC-L06 | MC-19.02 Bereid passende tijdelijke tandheelkundige zorg voor volgens medisch advies. | doen |
| MC-L06 | MC-20.01 Herken informatiebehoeften en alarmsignalen bij zwangerschap of een gynaecologische klacht. | herkennen |
| MC-L06 | MC-20.02 Bereid een door medische ondersteuning begeleide zorgsituatie rond een bevalling voor. | uitleggen |
| MC-L06 | MC-21.01 Prioriteer observaties en zorgbehoeften van geredde personen. | uitleggen |
| MC-L06 | MC-21.02 Organiseer en demonstreer passende opvang en verdere zorg voor geredden. | doen |
| MC-L06 | MC-22.01 Verzamel en rapporteer waarnemingen bij een stervende of mogelijk overleden persoon binnen de eigen rol. | doen |
| MC-L06 | MC-22.02 Leg de zorgvuldige vervolgstappen voor omgaan met een overledene aan boord uit. | doen |
| MC-L07 | MC-23.01 Beoordeel risico’s voor scheepshygiëne bij water, voedsel, afval en leefomgeving. | beslissen |
| MC-L07 | MC-23.02 Stel een praktisch verbeter- en communicatieplan voor een hygiënerisico op. | uitleggen |
| MC-L07 | MC-24.01 Onderscheid reiniging, desinfectie en bestrijding van vectoren of ongedierte. | herkennen |
| MC-L07 | MC-24.02 Maak een plan om overdracht of een uitbraak te beperken en het effect te volgen. | uitleggen |
| MC-L07 | MC-25.01 Leg uit hoe vaccinatie bijdraagt aan bescherming van zeevarenden. | doen |
| MC-L07 | MC-25.02 Zoek actuele relevante vaccinatie-informatie voor een fictief vaargebied en leg de vervolgstap vast. | uitleggen |
| MC-L07 | MC-26.01 Leg observaties, zorg en gegeven medicatie feitelijk en herleidbaar vast. | uitleggen |
| MC-L07 | MC-26.02 Bereid een medische rapportage of overdracht aan een bevoegde ontvanger voor. | uitleggen |
| MC-L07 | MC-27.01 Vind de toepasselijke nationale en internationale medische bepalingen voor een concrete scheepssituatie. | doen |
| MC-L07 | MC-27.02 Leg vast welke actuele medische voorschriften en gidsen aan boord raadpleegbaar moeten zijn. | doen |
| MC-L07 | MC-33.01 Controleer een medische uitrusting en medicijnvoorraad op geschiktheid, beschikbaarheid en vervaldata. | uitleggen |
| MC-L07 | MC-33.02 Bereid veilig gebruik van medicatie en medische apparatuur en correcte afvalafhandeling voor. | doen |
| MC-L08 | MC-28.01 Bereid een gestructureerde RMD/TMAS-hulpvraag voor met relevante patiënt- en scheepsgegevens. | uitleggen |
| MC-L08 | MC-28.02 Controleer ontvangen medisch advies en vertaal dit naar uitvoerbare zorg en terugmelding. | doen |
| MC-L08 | MC-29.01 Beoordeel patiënt- en omgevingsfactoren die veilig vervoer en evacuatie beïnvloeden. | doen |
| MC-L08 | MC-29.02 Demonstreer de voorbereiding van transport met passende brancard en gesimuleerde evacuatie. | doen |
| MC-L08 | MC-30.01 Organiseer medische vervolgzorg met havenautoriteiten of een poliklinische voorziening. | beslissen |
| MC-L08 | MC-30.02 Pas informatieoverdracht aan bij taal- of cultuurverschillen en controleer begrip. | uitleggen |
| MC-L08 | MC-31.01 Verbind medisch advies, zorg aan boord en evacuatie tot een samenhangend hulpverleningsplan. | uitleggen |
| MC-L08 | MC-31.02 Demonstreer de eigen rol en documenteer overdrachten tijdens een gecoördineerd scenario. | doen |
