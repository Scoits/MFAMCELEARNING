# Van reviewmaster naar Articulate

Werkversie 0.1, 20 november 2026. De Nederlandse reviewmaster blijft de inhoudelijke bron. Het bouwpakket is een afgeleide van een vastgelegde versie, geen nieuwe medische tekstgeneratie. De importmogelijkheden hieronder zijn nagegaan in officiële productdocumentatie; de DRTC-account en gebouwde cursus zijn nog niet getest.

## Producten per les

| Product | Bevat | Gebruik |
| --- | --- | --- |
| Reviewmaster | Scherm-ID, leerdoelen, complete tekst, voice-over, interactie, antwoordfeedback, bronplaats, media en review | Mathanjes inhoudelijke beoordeling en versiebeheer |
| Schone importversie | Vastgestelde cursistentekst met duidelijke koppen en geschikte bloklabels; herkenbare media-invoegpunten | Invoer voor de gekozen Rise-bouwroute |
| Interactieconfiguratie | Stabiele vraag- en antwoord-ID's, logica, feedback, voorwaarden en registratiekeuze | Controle en inrichting van vragen of Storyline |
| Bouw- en testlog | Masterversie, importdatum, handmatige aanpassingen, exportinstellingen en proefresultaten | Vergelijken van bron, bouw en Moodle-resultaat |

Gebruik [het schermschema](../templates/schermreview.csv) en [de stijlgids](stijlgids.md). Het eerste ingevulde voorbeeld staat in [de RMD-schermreview](../reviews/MFA-L07-schermreview.csv). De huidige conceptstatus is geschikt voor review en een technische proef; medische vrijgave blijft nodig voor definitieve cursistpublicatie.

## Bestaande stijl als bouwbron

Gebruik de bestaande DRTC-stijl en templates in Articulate voor de proef en verdere productie, zoals door Martijn bevestigd. Leg de gebruikte broncursus of template, versie en overgenomen thema-instellingen vast in het bouwlog. Controleer na import of logo, kleuren, lettertypen, blokopmaak en navigatie overeenkomen met die bestaande inrichting. De exacte bronlink is nog niet opgenomen in dit dossier. Het inhoudelijke schermschema blijft bruikbaar terwijl die bouwbron wordt gelokaliseerd.

## Gekozen proefroute

Maak na inhoudelijke vaststelling één schone Word-les uit dezelfde schermrecords. Rise Magic Lesson Import kan met ingeschakelde AI Assistant één Word-, PDF- of PowerPoint-bestand omzetten in een les. De documentstructuur stuurt de blokken. De documentatie beschrijft tekstbehoud, verwerking van beschikbare beelden en placeholders waar materiaal ontbreekt. De functie is als bèta beschreven. Controleer daarom in de eigen account welke blokken werkelijk worden gemaakt en vergelijk alle tekst, volgorde en feedback met de master.

Een volledige reviewtabel rechtstreeks importeren is ongeschikt: bronnotities, akkoordvelden en opmerkingen zouden als cursistentekst kunnen verschijnen. Een schone Word-les bevat die interne kolommen niet. Het uploaden van één document maakt bovendien niet vanzelf een gecontroleerde keuze uit alle SharePoint-foto's en video's.

Gebruik AI-coursegeneratie hoogstens voor een conceptstructuur wanneer dat zinvol is. Laat goedgekeurde teksten niet opnieuw vrij herschrijven. Als de documentimport in de eigen account niet beschikbaar blijkt of onvoldoende resultaat geeft, bouw dezelfde schermrecords met de gewone Rise-blokken. Dat verandert de inhoudelijke bron niet.

Voor het RMD-prototype volstaan Rise-blokken en kennischecks. De drie oefenvragen zijn geen formeel cursus-examen. Een Storyline-scenario krijgt een afzonderlijke specificatie wanneer vertakkingen iets aan het leerdoel toevoegen. PowerPoint-import in Storyline is een andere bouwroute en geen automatische omzetting van een review-CSV naar een complete interactieve cursus.

## Automatisering en grenzen

De officiële Articulate MCP-documentatie beschrijft onder meer accountcontrole, trainingen vinden en een conceptoutline maken. Zij onderbouwt geen volledige automatische bouw van alle lesblokken, medische scenario's of een bewerkbaar Storyline-bestand. In deze projectcontrole is geen Articulate-account gekoppeld of MCP-bouw uitgevoerd. Beoordeel eventuele automatisering later op de werkelijk beschikbare functies.

Een promptset moet dus de exacte masterversie, scherm- en vraag-ID's, bloktype, media-ID en feedbacklogica overdragen. Ontbrekende informatie blijft een bouwtaak in het dossier; een AI mag haar niet invullen met nieuwe medische claims. Een betaald account bewijst op zichzelf geen specifieke afspraken over vertrouwelijkheid of gegevensverwerking. Gebruik de beheerde DRTC-omgeving volgens de vastgestelde instellingen en laat echte patiëntgegevens en actieve summatieve vragen buiten openbare prompts en deze repository.

## Hulpmiddelen

`tools/maak_importversie.py <LES>` maakt uit de schermreview een schone Word-les en een interactieconfiguratie met scherm-, vraag- en antwoord-ID's en feedback. Zonder `--productie` is het een proefversie met op iedere pagina de melding dat de inhoud niet medisch is vrijgegeven. Met `--productie` weigert het script zolang een scherm niet `medisch_goedgekeurd` met reviewdatum is. De [promptset](promptset-bouw.md) beschrijft de stappen in Rise en het [bouwlog](../templates/bouwlog.md) legt iedere bouw vast. De uitvoer staat in `build/` en wordt niet in de repository opgenomen.

## Acceptatie van het proefpakket

| Controle | Benodigd resultaat |
| --- | --- |
| Tekstvergelijking | Cursistentekst en feedback stemmen overeen met de gekozen masterversie |
| Media | Juiste asset, gebruiksrecht, alt-tekst en eventuele ondertiteling zijn vastgelegd |
| Interactie | Elke keuze heeft de bedoelde feedback en vervolgactie |
| Toegankelijkheid | Toetsenbord, leesvolgorde, contrast en afgesproken apparaten zijn gecontroleerd |
| Registratie | Afronding, score en antwoorddetails zijn afzonderlijk getest volgens het integratieplan |
| Keten | Cursist, inschrijving, theorie en praktijk blijven herkenbaar in Moodle en ChainWise |

Zie [het integratieplan](integratieplan.md) voor tracking en [de ketenproef](../moodle/chainwise-keten.md) voor website, ChainWise en Moodle. Een technisch correcte import of geslaagd online onderdeel verleent geen volledig cursuscertificaat.

## Geraadpleegde productdocumentatie

[Rise Magic Lesson Import](https://www.articulatesupport.com/article/AI-Assistant-in-Rise-360-Creating-Lessons-From-Imported-Documents), bijgewerkt 9 november 2026; [Using Articulate MCP](https://www.articulatesupport.com/article/Using-Articulate-MCP), bijgewerkt 30 oktober 2026. Beide gecontroleerd op 20 november 2026. Gebruik voor export en Storyline-blokken de officiële bronnen in het integratieplan.
