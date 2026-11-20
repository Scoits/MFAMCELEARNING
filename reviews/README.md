# Review en inhoudelijke goedkeuring

Mathanje geeft de definitieve medische inhoudelijke goedkeuring. Het project bevat bij de start nog geen medisch goedgekeurde nieuwe lessen of vragen. Een AI-review is een voorbereidende controle en wordt niet als Mathanjes goedkeuring geregistreerd.

| Veld | Vast te leggen gegevens |
| --- | --- |
| Object | Leerdoel-, les-, scenario-, vraag- of assessment-ID |
| Versie | Exact beoordeelde versie of commit |
| Reviewtype | Broncontrole, didactisch, medisch, technisch of vertaling |
| Bevinding | Concrete wijziging met bronplaats |
| Beoordelaar | Naam van degene die de controle werkelijk uitvoerde |
| Datum | Werkelijke beoordelingsdatum |
| Uitkomst | Aanpassen, akkoord of openstaand |
| Afhandeling | Wijzigingsverwijzing en eventueel benodigde herbeoordeling |

Gebruik in werkbestanden de status `concept`, `broncontrole_nodig`, `medische_review_nodig`, `medisch_goedgekeurd` of `technisch_getest` uitsluitend voor de controle die werkelijk is uitgevoerd. Medische goedkeuring en technische test zijn verschillende aspecten en kunnen daarom apart worden bijgehouden.

Na inhoudelijke wijzigingen wordt bekeken welke medische goedkeuring opnieuw nodig is en welke vertalingen en vragen worden geraakt. Vermeld geen echte patiënt- of cursistgegevens in reviewvoorbeelden. Summatieve examenvragen en antwoorden krijgen hun reviewregistratie in de afgeschermde toetsomgeving.

## Eerste ingevulde schermreview

[MFA-L07-schermreview.csv](MFA-L07-schermreview.csv) bevat acht schermrecords met bron- en leerdoelkoppeling, interactie, feedback, tijdsraming en Mathanjes commentaarveld. Alle medische beoordelingen staan open. De [Markdown-master](../content/nl/MFA-L07-radiomedisch-advies.md) beschrijft expliciet de gedeeltelijke RMD-dekking; een administratieve tijdafspraak is nog geen beoordeelde toepassing van medisch advies in patiëntzorg.
