# Keten van inschrijving tot certificering

Ontwerpvoorstel versie 0.1, 20 november 2026. Dit document beschrijft de te controleren keten voor MFA en MC. Het bevat geen geteste configuratie of bevestiging dat alle gegevens al automatisch worden uitgewisseld.

## Bevestigde architectuur

Volgens de projectcontext van 31 oktober 2026 heeft de DRTC-website een inschrijvingskoppeling en zijn ChainWise en Moodle gekoppeld. Hetzner verzorgt de hosting van Moodle, niet van ChainWise. Deze expliciete gebruikerscorrectie is het uitgangspunt. De technische werking is in dit project nog niet onderzocht.

Articulate 360 is vastgesteld voor de productie van de leerinhoud. De plaats van de afsluitende kennistoets in Moodle Quiz is een ontwerpvoorstel. Zie [Moodle levering en toetsing](README.md) en [het Articulate-integratieplan](../articulate/integratieplan.md).

De eerdere AI-voorstellen over API's, LTI, SSO en automatische resultaatterugmelding zijn geen bewijs van de bestaande inrichting. Het gekozen protocol, de uitwisselingsrichting en de werkelijke velden worden uit het bestaande koppelcontract en de configuratie afgeleid.

## Voorgesteld gegevenseigenaarschap

Onderstaande verdeling is een voorstel voor de administratieve bronregistratie. Controleer de verdeling tegenover de bestaande inrichting voordat gegevensstromen worden aangepast.

| Gegevens of taak | Voorgestelde bronregistratie | Verantwoordelijke rol |
| --- | --- | --- |
| Boeking, gekozen opleiding en administratieve cursistidentiteit | ChainWise, met aanlevering vanuit het bestaande inschrijvingsproces | Opleidingsadministratie |
| Koppeling tussen boeking, cursist en Moodle-account | Bestaande koppelinrichting, met herleidbare identifiers | Functioneel beheer |
| Toegang, leeractiviteiten, pogingen, theoriebeoordeling en gebruikte pakketversie | Moodle | LMS-beheer en bevoegde beoordelaar |
| Beoordeelde lesinhoud en medische versiegoedkeuring | Gecontroleerd inhoudsdossier | Mathanje voor medische eindgoedkeuring |
| Praktijkdeelname, individuele beoordeling, assessor en datum | Bestaande DRTC-beoordelingsregistratie; opslagplaats nog vastleggen | Bevoegde praktijkassessor |
| Besluit tot cursusafronding en certificaatregistratie per opleiding | DRTC-proces, administratief vastgelegd in ChainWise volgens de bestaande inrichting | Bevoegde certificeringsrol |

Wissel uitsluitend de voor de betreffende stap benodigde gegevens uit. De definitieve veldmapping bepaalt welke samenvatting naar ChainWise gaat en waar het onderliggende bewijs blijft. Bewaar echte cursistgegevens, configuratie en toegangsgegevens buiten deze openbare repository.

## Beslisregels voor de volledige opleiding

Maak onderscheid tussen theorie doorlopen, theorie behaald, praktijk beoordeeld, praktijk behaald, volledige opleiding afgerond en certificaat uitgegeven. Dit zijn begrippen voor het ontwerp, geen veronderstelde ChainWise-statuscodes. Leg hun vertaling naar bestaande velden en statussen vast.

Een afgerond Articulate-pakket is geen bewijs dat de afsluitende kennistoets is behaald. Een behaalde kennistoets leidt niet rechtstreeks tot het volledige cursuscertificaat. Controleer vóór praktijkdeelname de vereiste identiteit, theoriegegevens en actuele kennis volgens de vast te stellen uitvoering. Neem daarbij geen onbevestigde maximale tussenperiode over.

Volledige afronding vraagt het vastgestelde theorie- en praktijkbewijs en het bevoegde afrondingsbesluit. Pas daarna volgt certificaatuitgifte. Leg MFA en MC afzonderlijk vast, ook bij één gecombineerde boeking. Een voldoende voor MFA vult ontbrekend MC-bewijs niet aan. Toetsnormen, herkansingen en de exacte certificeringshandeling worden vanuit het vastgestelde toets- en uitvoeringsbeleid ingericht.

## Acceptatieproef met fictieve gegevens

Voer deze acht proeven uit op de bestaande keten. Noteer per proef gebruikte versies, verwacht resultaat, werkelijk resultaat, bewijs en verantwoordelijke. De benoemde resultaten zijn acceptatiecriteria; geen ervan is hier al getest.

| Nr. | Proef | Te bewijzen resultaat |
| --- | --- | --- |
| 1 | Boek MFA, MC en de combinatie via het inschrijvingsproces | Juiste opleiding en boeking verschijnen bij dezelfde bedoelde cursist; de combinatie bewaart afzonderlijke MFA- en MC-trajecten. |
| 2 | Activeer toegang en log opnieuw in | De accountkoppeling blijft correct; de identificatieprocedure dekt de vastgestelde controlemomenten. Een persoonlijke login alleen geldt niet als bewijs daarvan. |
| 3 | Start, onderbreek en hervat een les, ook bij verbindingsverlies | Voortgang hoort bij de juiste persoon, activiteit en poging. Herstel veroorzaakt geen onbedoeld slagen of verlies van herleidbaar bewijs. |
| 4 | Behaal de theorie eerst niet en daarna via een toegestane herkansing wel | Pogingen en toetsversies blijven onderscheiden. Alleen het geldige resultaat voedt de afgesproken administratieve status; er verschijnt geen volledig cursuscertificaat. |
| 5 | Meld de cursist aan bij de praktijkstart | Instructeur ziet het juiste theorie- en instroombewijs. Identiteit en vereiste actuele kennis worden gecontroleerd; ontbrekend bewijs heeft een vastgelegde vervolgactie. |
| 6 | Registreer ontbrekend praktijkbewijs, een onvoldoende en vervolgens een geldige voldoende | Alleen volledige, individueel herleidbare beoordelingen maken het afrondingsbesluit mogelijk. MFA en MC krijgen elk uitsluitend hun eigen passende certificaatregistratie. |
| 7 | Annuleer een boeking en bied dezelfde aanlevering of resultaatmelding opnieuw aan | Toegang en administratieve status volgen het annuleringsbeleid; er ontstaan geen dubbele accounts, boekingen of certificaten. Historisch bewijs blijft volgens beleid bewaard. |
| 8 | Corrigeer een resultaat, publiceer een nieuwe pakketversie en herstel de vorige versie | Correctie en herstel zijn herleidbaar. Oude pogingen houden hun oorspronkelijke versie en beoordeling; vertraagde meldingen overschrijven geen nieuwer geldig besluit. |

## Nog vast te leggen bij de bestaande inrichting

| Benodigd bewijs | Vast te leggen inhoud |
| --- | --- |
| Koppelcontract en configuratie | Werkelijke systemen, richting, identifiers, velden, moment van uitwisseling en verwerking van fouten of herhaalde meldingen |
| Authenticatie en toegang | Feitelijke loginroute, eventuele SSO- of LTI-inrichting, rollen en identificatieprocedure |
| Status- en certificaatmapping | Betekenis per bestaande status, vereiste bewijsstukken en bevoegde afrondingshandeling |
| Beheer en herstel | Signalering van fouten, handmatige vergelijking van registraties, correctiebevoegdheid, bewaarbeleid en versieherstel |

Gebruik de bestaande beheerinformatie om deze plaatsen in te vullen. Nieuwe endpoints, protocolkeuzes of serverbouw zijn daarvoor niet als uitgangspunt nodig. De eerste oplevering is een ingevulde ketenproef met een aantoonbaar juiste ChainWise-registratie na volledige afronding.
