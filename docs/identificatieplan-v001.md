# Identificatieplan online toets en praktijkstart

Versie 0.2, 20 november 2026. Ontwerpvoorstel bij CBT-01, CBT-12 en E01. Nog niet vastgesteld door DRTC en niet getoetst op de werkelijke Moodle-installatie.

## Aanleiding

Martijn vroeg op 20 november 2026 of IaT 4 eisen stelt aan de identiteitscontrole bij de online eindtoets, en stelde als alternatief een korte entreetoets op locatie voor. Wat de cursist meeneemt naar de praktijkdag regelt DRTC zelf via de uitnodiging; dat valt buiten dit plan.

Op 20 november 2026 gaf Martijn als uitgangspunt dat de controle volledig automatisch moet werken, zonder medewerkers. Versie 0.2 vergelijkt daarom diensten die het identiteitsbewijs scannen, het gezicht met de webcam vergelijken en tijdens de toets automatisch surveilleren. De videocall uit versie 0.1 valt af.

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

## Automatische diensten vergeleken

Bronnen: de productpagina's en Moodle-pluginpagina's die op 20 november 2026 zijn gelezen (zie onder). Prijzen en hostinglocaties staan vaak niet openbaar; waar dat zo is, staat 'op aanvraag' of 'niet vermeld'. Niets hiervan is getest op de DRTC-installatie.

| Dienst | Identiteitsbewijs automatisch met gezicht vergeleken | Automatisch toezicht tijdens de toets | Koppeling met zelf gehoste Moodle | Kosten bij kleine aantallen | Opslag en AVG | Past bij IaT 4 par. 6.3 punt 1 |
| --- | --- | --- | --- | --- | --- | --- |
| SMOWL | Ja. Volgens SMOWL wordt het officiële identiteitsbewijs vóór en tijdens de toets automatisch met het gezicht vergeleken; een handmatige controle door SMOWL is optioneel | Ja, AI-detectie; ook opname met nabeoordeling of live toezicht als duurdere optie | Gecertificeerde Moodle-integratie; plugintype en versies nog op te vragen | In de pakketten Plus en Pro; prijs op aanvraag | Biometrie op basis van uitdrukkelijke toestemming (art. 9 lid 2a AVG); DRTC verwerkingsverantwoordelijke, SMOWL verwerker; biometrisch sjabloon wordt na de controle verwijderd; ISO 27001. Opslaglocatie niet vermeld op de gelezen pagina | Dekt 'vóór het examen' en tijdens het examen. Of SMOWL ook bij iedere inlog in de cursus kan controleren, is niet vastgesteld |
| Proctorio | Deels. 'Live ID check' met documentvalidatie en beeldvergelijking vóór de toets; daarnaast handmatige controle achteraf als optie. Niet duidelijk of het zonder mens beslist | Ja, automatisch; toezicht door eigen medewerkers is optie | Niet vermeld op de gelezen pagina; integratiepagina nog te lezen | Op aanvraag | EU-opslag en biometrie niet vermeld op de gelezen pagina | Dekt 'vóór het examen' als de automatische ID-check volstaat |
| Respondus Monitor | Nee. De cursist toont een identiteitsbewijs aan de webcam, maar Respondus verwerkt die foto niet verder; een docent moet het beoordelen | Ja, automatische signalen; de instelling beoordeelt ze | Vereist LockDown Browser; Moodle-koppeling via de leverancier | Niet vermeld | Gezichtssjabloon tijdelijk op het apparaat van de cursist; foto's op servers van Respondus; EU-locatie niet vermeld | Niet volledig automatisch voor de identiteit |
| Integrity Advocate | Neemt een foto van het identiteitsbewijs op; of de vergelijking automatisch is, staat er niet | Combinatie van AI en menselijke beoordeling door de leverancier | Moodle-blokplugin, Moodle 3.5 en hoger | Betaald, prijs op aanvraag | Slaat niets op in Moodle; noemt AVG, maar geen opslaglocatie | Waarschijnlijk wel, maar beoordeling deels door mensen van de leverancier, niet van DRTC |
| Quilgo | Gezichtsvergelijking met een score; vergelijking met een identiteitsbewijs niet vermeld | Ja, volledig automatisch volgens Quilgo | Moodle-plugin (quizaccess_quilgo) met externe dienst | Lite: 160 dollar per maand of 1536 dollar per jaar, tot 500 gelijktijdige gebruikers | Opslagregio op aanvraag; noemt AVG en verwerkersovereenkomst | Alleen als een referentiefoto als identiteitscontrole geldt |
| quizaccess_proctoring (open bron) | Nee. Een beheerder uploadt per cursist een referentiefoto; gezichtsvergelijking via een externe dienst | Webcamfoto's ieder half minuut, beoordeling achteraf | Moodle-plugin, Moodle 4.1 en 4.2 | Gratis; Pro-versie betaald | Foto's op de eigen Hetzner-server; externe vergelijkingsdienst onbekend | Niet zonder handwerk |
| ID-verificatiediensten zoals iDenfy | Ja, document met selfie en echtheidscontrole, standaard automatisch; handmatige nacontrole als betaalde optie | Nee, geen toezicht tijdens de toets | Geen Moodle-plugin gevonden; koppeling via API of SDK, dus maatwerk | Per goedgekeurde controle | Niet vermeld op de gelezen pagina | Alleen voor 'start'; voor het examen een tweede dienst nodig |

Constructor Proctor kon niet worden gelezen; de documentatiepagina gaf geen tekst terug.

## Wat 'volledig automatisch' betekent

Drie punten maken een helemaal automatische route minder eenvoudig dan de productnamen doen vermoeden.

1. Signalen van automatisch toezicht moeten door iemand worden beoordeeld. Alle gelezen leveranciers leggen de beslissing bij de instelling. Iemand bij DRTC kijkt dan alleen naar toetsen met een signaal, niet naar alle toetsen.
2. De AVG verbiedt in beginsel een besluit met aanzienlijke gevolgen dat uitsluitend automatisch is genomen (art. 22). Een afwijzing van de toets of de identiteit alleen op grond van het systeem vraagt daarom een menselijke herbeoordeling op verzoek.
3. Gezichtsvergelijking is verwerking van biometrische gegevens (art. 9 AVG). Dat vraagt uitdrukkelijke toestemming die vrij gegeven moet zijn, dus een alternatief voor wie weigert. De Autoriteit Persoonsgegevens noemt biometrische verwerking op haar lijst waarvoor een DPIA verplicht is; controleer dat bij de uitwerking.

## Voorstel

SMOWL is de enige gelezen dienst die uitdrukkelijk zegt het identiteitsbewijs automatisch met het gezicht te vergelijken, vóór en tijdens de toets, met een gecertificeerde Moodle-koppeling en een AVG-onderbouwing voor biometrie. Voorstel:

1. Vraag bij SMOWL een offerte en een demo aan voor twee toetsen (MFA en MC) bij het werkelijke aantal cursisten per jaar, en vraag naar de opslaglocatie, de verwerkersovereenkomst, de plugin voor de Moodle-versie op Hetzner en of de controle ook bij het openen van de cursus kan.
2. Vraag Proctorio als tweede offerte, omdat ook die een automatische ID-check noemt.
3. Gebruik bij de start de bestaande controle bij inschrijving en bij iedere inlog een persoonlijke login met tweestapsverificatie. Dat is automatisch en zonder extra kosten.
4. Laat iemand bij DRTC alleen toetsen met een signaal beoordelen. Dat is de enige handmatige stap en is nodig voor de AVG.
5. Bied wie geen biometrie wil de bevestigingstoets op locatie (variant 3) als alternatief.
6. Maak een DPIA voordat de dienst in gebruik gaat.

De videocall uit versie 0.1 vervalt omdat die medewerkers vraagt.

## Te controleren

1. Moodle-versie op de Hetzner-installatie, en of Safe Exam Browser, IP-beperking en tweestapsverificatie beschikbaar zijn (functioneel beheer).
2. Of ILT variant 1 of variant 3 accepteert als identificatiecontrole vóór het examen (DRTC in het ILT-overleg).
3. Wie de videocontrole uitvoert en hoe die wordt vastgelegd zonder kopie van het identiteitsbewijs te bewaren (opleidingscoördinatie, AVG).
4. Bij variant 3: de omvang van de bevestigingstoets en de regel bij een grote afwijking. Dit volgt de toetsmatrijs en wordt pas vastgesteld met de slagingsgrens (OB-02).
5. Offerte, demo en verwerkersovereenkomst van SMOWL en Proctorio; DPIA voor biometrie (opleidingscoördinatie en privacyfunctionaris).

## Gelezen webpagina's op 20 november 2026

smowl.net/en/features/user-authentication; proctorio.com/solutions/integrity; web.respondus.com/privacy-additional-monitor; moodle.org/plugins/block_integrityadvocate; moodle.com/us/certified-integrations/integrity-advocate; moodle.org/plugins/quizaccess_quilgo; moodle.org/plugins/quizaccess_proctoring; documentation.idenfy.com full feature list; octoproctor.com/integrations/moodle; moodle.com/functionality-with-moodle/moodle-and-proctoring. Niet leesbaar: docs.constructor.tech.
