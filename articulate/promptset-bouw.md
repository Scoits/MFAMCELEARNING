# Promptset voor de bouw in Articulate

Versie 0.1, 20 november 2026. Deze prompts horen bij de [import- en bouwroute](import-en-bouwroute.md). Ze dragen de vastgelegde inhoud over zonder nieuwe medische tekst te laten ontstaan. Ze zijn nog niet in de DRTC-account getest.

## Werkwijze

1. Maak de importversie met `python3 tools/maak_importversie.py <LES>`. Zonder `--productie` ontstaat een proefversie met de melding dat de inhoud niet medisch is vrijgegeven. Gebruik die alleen voor de technische proef (roadmap stap 4).
2. Na vrijgave door Mathanje zet de reviewregistratie per scherm `medisch_goedgekeurd` met datum. Pas dan levert `--productie` de importversie voor cursisten.
3. Open in Rise de bestaande DRTC-template of cursus voor MFA of MC. Importeer het Word-bestand met Magic Lesson Import in die cursus, zodat de DRTC-stijl behouden blijft.
4. Gebruik daarna de prompts hieronder voor de AI Assistant in Rise, één les tegelijk.
5. Bouw de kennischecks en overige interacties met de hand volgens `<LES>-interactieconfiguratie.csv`. Laat de AI geen vragen of feedback schrijven.
6. Vul het [bouwlog](../templates/bouwlog.md) in en vergelijk de gebouwde les met de master.

## Vaste regels voor iedere prompt

Neem deze alinea letterlijk op aan het begin van iedere prompt:

> Wijzig geen inhoud. Behoud iedere zin van de cursistentekst woordelijk, inclusief getallen, tijden en eenheden. Voeg geen medische informatie, voorbeelden, samenvattingen of vragen toe. Laat tekst tussen rechte haken staan; dat zijn invoegpunten voor de bouwer. Als iets niet past in een bloktype, laat het als tekstblok staan en meld het.

## Prompt 1: blokken indelen na de import

> [Vaste regels.] Deze les is geïmporteerd uit een Word-bestand. Iedere kop van niveau 2 is één scherm. Zet ieder scherm in één sectie met de kop als titel. Als een scherm in de bouwlijst als 'Rise tabbladen' staat, verdeel dan de alinea's die beginnen met een woord gevolgd door een punt over tabbladen, met dat woord als tabtitel. Als een scherm als 'Rise procesblok' staat, maak van de alinea's een procesblok in dezelfde volgorde. Bouwlijst: [plak de kolommen screen_id, title en platform_block uit de interactieconfiguratie].

## Prompt 2: controle na de bouw

> [Vaste regels.] Vergelijk deze les met de bijgevoegde importversie. Noem per sectie elke zin die ontbreekt, is veranderd of is toegevoegd. Noem elk invoegpunt tussen rechte haken dat nog in de les staat. Wijzig zelf niets.

## Wat niet via een prompt gaat

| Onderdeel | Waarom niet | Hoe dan wel |
| --- | --- | --- |
| Kennischecks en feedback | Vraag-ID's, antwoord-ID's en feedback moeten exact gelijk blijven aan de master | Handmatig in een Rise-kennischeckblok, per rij uit de interactieconfiguratie |
| Beelden en video | Rechten, alt-tekst en keuze per media-ID staan in het mediaregister | Handmatig per invoegpunt [Beeld ...] |
| Afsluitende kennistoets | Summatieve items staan niet in deze repository | Moodle Quiz in de afgeschermde omgeving volgens de toetsmatrijs |
| Thema-instellingen | Komen uit de bestaande DRTC-template | Template openen, niet laten genereren |

## Articulate MCP

De Articulate MCP-koppeling kan accounts tonen, trainingen vinden en een conceptoutline maken. Gebruik haar hoogstens om de bestaande DRTC-template of cursus te vinden en vast te leggen in het bouwlog. Laat haar geen outline of inhoud genereren voor deze lessen: de structuur staat al vast in de masters.
