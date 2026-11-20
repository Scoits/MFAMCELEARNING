# Articulate productie

De cursus wordt gebouwd in Articulate 360 en geleverd via zelf gehost Moodle. De bestaande DRTC-stijl en templates in Articulate zijn het visuele uitgangspunt. Definitieve productie volgt op het Nederlandse lesontwerp en de inhoudelijke beoordeling.

Rise is het voorgestelde uitgangspunt voor theorie, visuele uitleg, demonstraties en kennischecks. Storyline wordt gebruikt wanneer beslispunten met verschillende vervolgstappen bijdragen aan het leerdoel. De keuze per les wordt onderbouwd in het storyboard.

[Het integratieplan](integratieplan.md) werkt de combinatie van Rise, Storyline en Moodle verder uit, inclusief publicatie, afronding, score en detailregistratie. Het bevat ook een voorstel voor zeven scenario-onderwerpen en een beoordeling van de aanvullende Copilot-notities. Er is geen vaste verhouding tussen Rise en Storyline vastgesteld.

Het bouwdossier bevat per les de vastgestelde tekst, bronverwijzingen, beeld- en videoverwijzingen, alternatieve tekst, eventuele voice-over en ondertiteling, interacties, feedback, geschatte studieduur en transfer naar de praktijk. Een AI-bouwprompt verwijst naar dat dossier en mag geen nieuwe medische handelingen of toetsnormen toevoegen.

Maak eerst een klein proefpakket voor Moodle. Controleer hervatten, afronding en resultaten in de werkelijke Moodle-installatie. Werk met een herleidbare koppeling tussen lesbron, reviewversie en gepubliceerde pakketversie. De exacte instelling wordt na de technische proef vastgelegd in [Moodle](../moodle/README.md).

Productiebestanden en exports worden op de daarvoor bestemde plek beheerd. Deze openbare repository bevat aanvankelijk de bouwinstructies en verwijzingen, geen gelicentieerde media of volledige Articulate-binaries.

## Vaste overdracht naar de bouw

Gebruik [de stijlgids](stijlgids.md), [de import- en bouwroute](import-en-bouwroute.md) en [het schermreviewschema](../templates/schermreview.csv). De ingevulde [RMD-schermreview](../reviews/MFA-L07-schermreview.csv) bevat acht schermen met leerdoelen, tekst, interactie, feedback en open medische reviewvelden. Het [mediaregister](mediaregister.csv) beschrijft twee geplande onderdelen; er zijn nog geen productiebeelden gemaakt.

De reviewmaster bevat bronplaatsen en opmerkingen. De schone importversie bevat de vastgestelde cursistentekst. Magic Lesson Import en eventuele MCP-mogelijkheden zijn nagegaan in productdocumentatie, maar niet in de eigen account beproefd. Een promptset is geen gebouwd Articulate-pakket. De [promptset](promptset-bouw.md) en `tools/maak_importversie.py` maken de overdracht reproduceerbaar; zie de bouwroute.
