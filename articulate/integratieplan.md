# Integratie van Rise Storyline en Moodle

Ontwerpvoorstel versie 0.1, 20 november 2026. Aanvulling op de inhoudelijke ontwerpversie 0.2. De door Martijn aangeleverde Copilot-notities zijn beoordeeld als ontwerpinput, niet als medische, normatieve of technische autoriteit. Er zijn nog geen Articulate-bestanden gebouwd of Moodle-instellingen getest.

## Functie per toepassing

| Toepassing | Functie in het voorstel |
| --- | --- |
| Moodle | Persoonlijke toegang, cursusactiviteiten, voortgang, begeleidingsinformatie en bij voorkeur de afsluitende kennistoetsen |
| Rise 360 | De samenhangende online lessen met cursistentekst, beeld, demonstratie en kennischecks |
| Storyline 360 | Gerichte scenario's met keuzes, vertakkingen, feedback, variabelen en afrondingslogica |
| Review 360 | Publicatie- en reviewstap voor Storyline-inhoud die als blok in Rise wordt geplaatst |
| DRTC op locatie | Fysiek oefenen, samenwerking, individuele observatie en beoordeling |

Moodle is het leerplatform. Rise is de cursusinhoud en wordt niet als vervangend LMS ontworpen. Een digitaal scenario oefent beslissingen; beheersing van fysieke handelingen vraagt bewijs op locatie.

## Voorgestelde opbouw

Maak een afzonderlijke Moodle-cursus voor MFA en MC. Verdeel de online inhoud in samenhangende Rise-lespakketten, zodat een gewijzigd lesblok afzonderlijk kan worden onderhouden. De huidige module-ID's en leerdoelen vormen de indeling; het definitieve aantal pakketten wordt na een technische proef vastgesteld.

Binnen een lespakket staan de uitleg, voorbeelden en kennischecks. Voeg een Storyline-blok toe wanneer keuzes een betekenisvol ander vervolg opleveren. Een eenvoudige kennischeck, reflectievraag of ordeningsopdracht kan in Rise blijven. Het bestaande RMD-prototype hoeft daarom niet uitsluitend om technische redenen naar Storyline te worden omgebouwd.

De voorstelroute is: Moodle-activiteit openen, Rise-les doorlopen, eventueel ingebed Storyline-scenario uitvoeren, leerpunten verwerken en lesafronding registreren. De afsluitende Moodle-kennistoets per opleiding volgt volgens het nog vast te stellen toetsontwerp. De praktijkdag of -dagen blijven onderdeel van de volledige opleiding.

## Publicatie en integratie

Bouw het Storyline-scenario met een expliciete afrondingsvoorwaarde. Publiceer het naar Review 360 met de passende trackingkeuze. Voeg die publicatie als Storyline-blok toe aan Rise. Leg vast welke versie van de scenariobron bij het Rise-lespakket hoort.

Na een wijziging in Storyline moet de nieuwe publicatie opnieuw in het Rise-blok worden geselecteerd en het betrokken lespakket opnieuw worden gepubliceerd. Ga niet uit van automatische vervanging van een bestaand ingebed blok. Leg de hele versieketen vast.

Als de cursist het blok moet afronden voordat de les verdergaat, ontwerp dan een Continue-blok met een passende voltooiingsvoorwaarde. Test zowel correct afronden als opnieuw proberen. Het bereiken van een resultaatscherm betekent niet zonder meer dat de cursist is geslaagd; wanneer slagen nodig is, moet de logica dat afzonderlijk afdwingen.

Publiceer het Rise-lespakket voor de beoogde LMS-inrichting en plaats het als activiteit in Moodle. SCORM 1.2 is het voorlopige uitgangspunt voor de reguliere Moodle-SCORM-activiteit. Native Moodle-ondersteuning voor SCORM 2004 wordt niet aangenomen. Alleen een bewust gekozen en geteste aanvullende speler kan aanleiding zijn om van dit uitgangspunt af te wijken.

De werkelijk gebruikte exportinstellingen, pakket-ID, datum en inhoudsversies worden vastgelegd bij de technische proef. Een tekstbestand, storyboard of AI-prompt is nog geen uitvoerbaar SCORM-pakket.

## Afronding score en detailgegevens

Deze drie gegevenssoorten zijn verschillend. Een scenario kan melden dat het is afgerond, een totaalscore opleveren of gegevens over afzonderlijke beslissingen bevatten. Neem niet aan dat al deze gegevens automatisch door iedere combinatie van Storyline, Rise en Moodle worden doorgegeven.

Kies bij de LMS-export van Rise vooraf de te gebruiken trackingmethode: cursusafronding, een geselecteerde Rise-quiz of een geselecteerd Storyline-blok. Dit is geen automatische afzonderlijke cijferlijst van alle ingebedde scenario's.

| Gewenst bewijs | Voorgestelde route | Controle in de proef |
| --- | --- | --- |
| Een oefenscenario is afgerond | Storyline-afrondingslogica met passende Rise-doorgang | Afrondingssignaal, hervatten en opnieuw proberen |
| De Rise-les is doorlopen | Passende LMS-tracking voor het lespakket | Moodle-status correspondeert met de gekozen voorwaarde |
| Eén geselecteerd scenario levert een score | Ondersteunde combinatie van Storyline-resulttracking en tracking van het geselecteerde Storyline-blok in Rise | Werkelijk ontvangen score en status controleren |
| Iedere scenariokeuze is afzonderlijk bewijs | Niet vertrouwen op een ingebed Storyline-blok als volledige toetsregistratie | Afzonderlijke Moodle-toets of apart gepubliceerd scenario onderzoeken |
| Afsluitende theoriebeoordeling | Bij voorkeur Moodle Quiz met eigen vragenbank en toetsmatrijs | Trekking, versie, poging, antwoorden en beoordeling controleren |

Articulate beschrijft tracking van een geselecteerd Storyline-blok en ook de mogelijkheid om daarbij een score te rapporteren. De afzonderlijke antwoorden en andere quizdetails van een ingebed Storyline-blok worden volgens de Rise-documentatie niet als volledige quizdetailregistratie aan het LMS gerapporteerd. Selecteer daarom vooraf welk bewijs nodig is.

Als DRTC formele resultaten per afzonderlijk scenario wil bewaren, onderzoek dan een zelfstandige LMS-publicatie van dat scenario of een Moodle-activiteit met geschikte vraagtypen. Dat is een andere inrichting dan alleen het opnemen van een oefenblok in Rise. Extra technische voorzieningen worden pas gekozen wanneer hun toegevoegde waarde en werking zijn onderbouwd.

## Eerste scenariobibliotheek

Dit zijn voorgestelde ontwikkelonderwerpen. De scènes, correcte beslissingen, gevolgen, feedback en beoordeling moeten nog worden geschreven en medisch beoordeeld. De lijst stelt geen extra verplichte lesuren of vaste verhouding tussen producten vast.

| Scenario-ID | Onderwerp | Leskoppeling | Reden voor een mogelijke vertakking |
| --- | --- | --- | --- |
| MFA-S01 | Een incident veilig benaderen en de eerste prioriteit kiezen | MFA-L00 en MFA-L02 | Onveilige toegang of ontbrekende informatie beïnvloedt het vervolg |
| MFA-S02 | Een ernstig bloedingsincident aan boord | MFA-L04 | De cursist kiest en onderbouwt prioriteiten en hulporganisatie |
| MFA-S03 | Een niet-reagerende opvarende beoordelen | MFA-L03 | Observaties bepalen welke volgende stap passend is |
| MFA-S04 | Een uit zee geredde opvarende opvangen | MFA-L05 | Omstandigheden en observaties veranderen de benodigde voorbereiding |
| MC-S01 | Buikklachten tijdens een reis | MC-L05 | Gegevens verzamelen, medisch overleg en vervolgwaarneming beïnvloeden de casus |
| MC-S02 | Pijn op de borst tijdens de wacht | MC-L05 | De cursist ordent urgentie, informatie en communicatie |
| MC-S03 | Een patiënt volgen en met de RMD overleggen | MC-L04 en MC-L08 | Nieuwe informatie vraagt herbeoordeling en een aangepaste overdracht |

Gebruik het scenarioformat incident, informatieverzameling, beslissingen, gevolgen en debrief als ontwerpsteun. Het aantal beslispunten volgt uit het leerdoel. Een vaste eis van vijf keuzes per scenario kan onnodige handelingen of kunstmatige gevolgen introduceren.

## Herbruikbaar scenarioformat

Leg per scenario vast: scenario-ID, gekoppelde doelen, noodzakelijke voorkennis, beginsituatie, informatie die de cursist kan opvragen, beslispunten, vervolg per keuze, onderbouwde feedback, debrief, afrondingslogica en registratiebehoefte. Vermeld medische bronplaatsen en de exacte beoordeelde versie.

Een onjuist antwoord krijgt uitleg over de redenering. Medische gevolgen, tijdsverloop en verslechtering worden uitsluitend opgenomen wanneer deze inhoudelijk verdedigbaar zijn en door Mathanje zijn beoordeeld. Het scenario mag een aandoening niet zonder onderbouwing als zekere diagnose presenteren.

## Wat uit Copilot is overgenomen

De combinatie van een samenhangende Rise-les en gerichte Storyline-scenario's is bruikbaar. Ook de nadruk op feedback, debrief en aansluiting op de locatiedagen past bij het ontwerp.

De percentages 80/20, 60/40 en 70/30 zijn niet onderbouwd voor deze DRTC-opleiding en worden geen ontwerpeis. De twaalfweekse planning, het aantal scenario's en vier tot zes uur zelfstudie zijn evenmin vastgestelde DRTC-afspraken. De modulebegroting, beschikbare bronnen en pilot bepalen de werkelijke omvang.

De Copilot-koppeling van MFA aan Model Course 1.15 is gecorrigeerd naar 1.14. De route van een online toets rechtstreeks naar het volledige cursuscertificaat wordt niet overgenomen: de voorgeschreven praktijk en beoordeling horen bij de afronding. Vergelijkingen tussen AI-modellen en claims over twee- tot driemaal sneller ontwikkelen zijn geen projectonderbouwing.

## Acceptatie van de eerste technische proef

Gebruik een korte Rise-les met een eenvoudig Storyline-testblok en fictieve gegevens. Controleer doorgang, afronding, score waar van toepassing, herstart, hervatten en gedrag bij een onderbroken verbinding. Inspecteer wat Moodle werkelijk registreert, met name het verschil tussen totaalscore en detailgegevens. Test op het beoogde schermformaat, toetsenbordbediening en relevante mobiele apparaten.

Leg daarna de gekozen pakketindeling en instellingen vast. Pas na deze proef wordt het scenarioformat voor de overige lessen als productiestandaard gebruikt. De medische review van de inhoud blijft een afzonderlijke stap.

## Officiële technische bronnen

Geraadpleegd 20 november 2026. Deze documentatie beschrijft productmogelijkheden en vervangt geen proef in de eigen Moodle-installatie.

1. [Articulate Rise Storyline-blokken](https://www.articulatesupport.com/article/Rise-Use-Storyline-Blocks-to-Embed-Storyline-360-Courses).
2. [Articulate tracking via een Storyline-blok](https://www.articulatesupport.com/article/Rise-How-to-Track-Course-Completion-with-a-Storyline-Block).
3. [Articulate een Storyline-blok verplicht afronden](https://www.articulatesupport.com/article/Rise-How-to-Require-Learners-to-Complete-a-Storyline-Block).
4. [Articulate quizgegevens naar het LMS](https://www.articulatesupport.com/article/Rise-Quiz-Data-Sent-to-an-LMS).
5. [Moodle SCORM FAQ](https://docs.moodle.org/en/SCORM_FAQ).
