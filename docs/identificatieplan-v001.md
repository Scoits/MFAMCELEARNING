# Identificatieplan online toets en praktijkstart

Versie 0.1, 20 november 2026. Ontwerpvoorstel bij CBT-01, CBT-12 en E01. Nog niet vastgesteld door DRTC en niet getoetst op de werkelijke Moodle-installatie.

## Aanleiding

Martijn vroeg op 20 november 2026 of IaT 4 eisen stelt aan de identiteitscontrole bij de online eindtoets, en stelde als alternatief een korte entreetoets op locatie voor. Wat de cursist meeneemt naar de praktijkdag regelt DRTC zelf via de uitnodiging; dat valt buiten dit plan.

## Wat de bronnen eisen

| Bron | Eis | Wat de bron niet zegt |
| --- | --- | --- |
| S002 IaT 4 par. 6.3 punt 1, PDF p20 | Identificatiecontrole ten minste bij de start, bij elke keer inloggen en vóór het examen | Hoe de controle moet gebeuren |
| S002 IaT 4 par. 6.3 punt 12, PDF p20 | Toegang met een beveiligde, unieke inlog per cursist | |
| S002 IaT 4 par. 6.3 punt 15, PDF p20 | Gegevensbeheer met inachtneming van de AVG | |
| S035 aandachtspunt 1 en 2 | Extra aandacht voor identificatie; toetsing na de theorie en een controle aan het begin van het praktijkdeel | Methode |

IaT 4 noemt als beoordelingskader ook STCW A-I/6 en B-I/6, STCW.7/Circ.13 en de ILT-richtlijn voor e-learning. STCW.7/Circ.13 staat niet in het register en is niet gelezen. Dit plan zegt daarom niets over wat die circulaire precies vraagt.

Lezing: punt 1 en punt 12 staan in IaT 4 als afzonderlijke eisen. Een persoonlijke inlog alleen is daarom waarschijnlijk niet genoeg voor de controle vóór het examen. Dit is een interpretatie. Of ILT een bepaalde methode accepteert, staat niet in de gelezen bronnen. DRTC kan dit bij de aanvraag of in het overleg met ILT voorleggen.

## Wat de systemen kunnen

Articulate Rise en Storyline hebben geen functie voor identiteitscontrole. Het pakket draait als SCORM-activiteit in Moodle. Toegang, inlog en toetsvoorwaarden lopen dus via Moodle.

Moodle Quiz heeft standaard een aantal toegangsinstellingen. Deze instellingen zijn bekend uit de Moodle-documentatie. Of ze op de DRTC-installatie bij Hetzner beschikbaar en ingeschakeld zijn, is niet gecontroleerd; de Moodle-versie is nog niet vastgesteld.

| Voorziening | Wat het doet | Wat het niet doet | Geschikt voor |
| --- | --- | --- | --- |
| Quizwachtwoord | De toets start pas na invoer van een wachtwoord dat een surveillant of instructeur geeft | Stelt zelf geen identiteit vast | Koppelen van de start van de toets aan een controle door een persoon |
| IP-beperking | De toets kan alleen worden gemaakt vanaf opgegeven netwerkadressen, bijvoorbeeld het DRTC-netwerk | Werkt niet voor thuis maken | Toets op locatie |
| Safe Exam Browser | De toets opent alleen in een afgeschermde browser; andere programma's en websites zijn afgesloten | Stelt geen identiteit vast | Toets op locatie op DRTC-apparaten, of thuis met geïnstalleerde browser |
| Openings- en sluitingstijd, tijdslimiet, aantal pogingen | Begrenzen wanneer en hoe vaak de toets kan worden gemaakt | | Alle varianten |
| Tweestapsverificatie bij het inloggen | Een extra code naast het wachtwoord, standaard in nieuwere Moodle-versies | Bewijst niet wie achter het scherm zit | Controle bij elke inlog (punt 1, tweede moment) |
| Proctoring-plugins | Plugins van derden met webcamfoto's, schermopname of live toezicht | | Thuis maken onder toezicht; vraagt een AVG-afweging, verwerkersafspraken en vaak een licentie |

## Voorgestelde controles per moment

| Moment uit IaT 4 | Voorstel | Bewijs |
| --- | --- | --- |
| Start | De administratie controleert het identiteitsbewijs bij inschrijving in ChainWise. Moodle-account op naam, aangemaakt via de bestaande koppeling | Inschrijving met controledatum en medewerker |
| Elke keer bij het inloggen | Persoonlijke Moodle-login met tweestapsverificatie, als de installatie dat ondersteunt. Geen gedeelde accounts | Moodle-logboek van inlogpogingen |
| Vóór het examen | Zie de drie varianten hieronder | Per variant |
| Begin praktijkdeel (S035) | Controle van het identiteitsbewijs bij de opening van de praktijkdag; dit staat al in MFA-L08-S04 en MC-L09-S04 | Startcontrole per cursist (E03) |

## Drie varianten voor de controle vóór het examen

| Variant | Werkwijze | Voordeel | Nadeel |
| --- | --- | --- | --- |
| 1 Online met korte videocontrole | De cursist meldt zich op een afgesproken tijd in een korte videocall. Een DRTC-medewerker vergelijkt gezicht en identiteitsbewijs en geeft daarna het quizwachtwoord. De toets wordt thuis gemaakt, zo mogelijk in Safe Exam Browser | Past in de online studiedag; alleen standaardfuncties van Moodle; weinig AVG-risico, omdat er niets wordt opgenomen | Vraagt planning en een medewerker per toetsmoment; geen toezicht tijdens de toets zelf |
| 2 Online met proctoring-plugin | Een plugin maakt bij de start een foto van cursist en identiteitsbewijs en tijdens de toets webcamopnamen | Geen vaste toetsmomenten nodig | Licentie of beheer, AVG-afweging en verwerkersafspraken nodig; technische drempel voor cursisten; niet onderzocht welke plugin op de DRTC-versie werkt |
| 3 Entreetoets op locatie | De online eindtoets blijft. Bij de start van de praktijkdag maakt de cursist een korte bevestigingstoets op locatie: ongeveer tien items uit dezelfde vragenbank, ongeveer 10 minuten, na controle van het identiteitsbewijs, met quizwachtwoord, IP-beperking op het DRTC-netwerk en zo mogelijk Safe Exam Browser. Wijkt de uitslag sterk af van de online toets, dan volgt een gesprek en zo nodig een herkansing onder toezicht | Identiteit en kennis worden samen vastgesteld op één moment met fysieke controle; geen extra techniek thuis; sluit aan op de controle aan het begin van het praktijkdeel (S035, E03) | Kost tijd op de praktijkdag: de MFA-dag is al vol, bij MC past het in het startblok van 20 minuten op dag 1. De online toets zelf blijft zonder identiteitscontrole vooraf, dus of dit voldoet aan 'vóór het examen' hangt af van wat ILT als het examen ziet |

Een vierde mogelijkheid is de summatieve kennistoets helemaal naar de praktijkdag te verplaatsen, onder toezicht. Dat voldoet het duidelijkst aan punt 1, maar kost op de MFA-dag 45 minuten en op de eerste MC-dag 50 minuten of meer. De online studiedag krijgt dan een oefentoets in plaats van de eindtoets. Dit is alleen een terugvaloptie.

## Voorstel

Variant 1 als standaard: een korte videocontrole met quizwachtwoord vóór de online eindtoets. Daarbij komt de bestaande controle van het identiteitsbewijs bij de start van de praktijkdag. Variant 1 dekt de drie momenten uit IaT 4 met standaardfuncties van Moodle, zonder opnamen en zonder extra tijd op locatie.

Kiest DRTC liever voor geen toetsmomenten thuis, dan is variant 3 de beste tweede keus. Leg dan aan ILT voor dat de bevestigingstoets op locatie samen met de online toets als examen geldt.

## Te controleren

1. Moodle-versie op de Hetzner-installatie, en of Safe Exam Browser, IP-beperking en tweestapsverificatie beschikbaar zijn (functioneel beheer).
2. Of ILT variant 1 of variant 3 accepteert als identificatiecontrole vóór het examen (DRTC in het ILT-overleg).
3. Wie de videocontrole uitvoert en hoe die wordt vastgelegd zonder kopie van het identiteitsbewijs te bewaren (opleidingscoördinatie, AVG).
4. Bij variant 3: de omvang van de bevestigingstoets en de regel bij een grote afwijking. Dit volgt de toetsmatrijs en wordt pas vastgesteld met de slagingsgrens (OB-02).
