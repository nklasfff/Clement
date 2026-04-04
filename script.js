// KOMPLET CONTENT DATABASE
const themes = {
    general: {
    name: "Nervesystemsregulering",
    circles: {
        nervesystem: {
            klient: {
                title: "Nervesystemsregulering",
                text: "Dit nervesystem styrer alt i din krop og dit sind - fra hvordan du sover og fordøjer mad, til hvordan du håndterer stress, mærker følelser og føler dig tilpas i din egen krop. Et nervesystem i god balance giver dig både en dyb indre ro og samtidig den nødvendige energi til at leve livet fuldt ud. Gennem vores arbejde sammen hjælper jeg dig med at forstå og aktivt regulere dit nervesystem, så du gradvist kan finde tilbage til en tilstand af naturlig balance, trivsel og velvære i hverdagen."
            },
            fagfolk: {
                title: "Nervesystemsregulering - Klinisk Perspektiv",
                text: "Polyvagal-informeret tilgang til autonomt nervesystem-regulering udgør det centrale fundament for både mental og fysisk sundhed i denne terapeutiske metode. Der arbejdes systematisk med ventral vagal aktivering, neuroception og co-regulering som primære interventionsstrategier. Tilgangen integrerer Stephen Porges' banebrydende forskning i praktisk terapeutisk anvendelse med særligt fokus på bottom-up processer. Metoden anerkender nervesystemets hierarkiske organisering og anvender denne forståelse til at skabe varige forandringer i klientens autonome reguleringskapacitet gennem relationelle og somatiske interventioner."
            }
        },
        polyvagal: {
            klient: {
                title: "Polyvagal Teori",
                text: "Dit nervesystem har tre fundamentalt forskellige tilstande som konstant skifter: Sikkerhed og forbindelse, som vi kalder den grønne tilstand, alarm og mobilisering som er den gule tilstand, og nedlukning som er den røde tilstand. Når du lærer at genkende hvilken tilstand du befinder dig i lige nu, kan du aktivt begynde at regulere dig selv tilbage til den grønne sikre tilstand. Det er netop i denne trygge tilstand at ægte healing, vækst og personlig trivsel kan finde sted i dit liv."
            },
            fagfolk: {
                title: "Polyvagal Teori - Klinisk Anvendelse",
                text: "Stephen Porges' hierarkiske model af det autonome nervesystem beskriver tre distinkte tilstande: ventral vagal komplekset som understøtter social engagement, det sympatiske system der muliggør mobilisering, og dorsal vagal komplekset der medierer immobilisering. Neuroception fungerer som central underbevidst mekanisme for autonome shifts mellem disse tilstande. Det terapeutiske fokus rettes mod opbygning af ventral vagal tone som afgørende forudsætning for effektiv regulering, healing og udvidelse af klientens kapacitet til at navigere mellem autonome tilstande med fleksibilitet."
            }
        },
        tilknytning: {
            klient: {
                title: "Tilknytningsmønstre",
                text: "Måden du knytter dig til andre mennesker på blev grundlagt meget tidligt i dit liv, allerede fra de første levemåneder. De fire tilknytningsmønstre - tryg, undvigende, ambivalent og desorganiseret - påvirker dybt hvordan du fungerer i relationer og hvordan du forholder dig til dig selv. At forstå dit eget mønster er det vigtige første skridt på vejen til at skabe nye og sundere måder at være sammen med andre på. Forandring er mulig, og nye erfaringer kan omforme gamle mønstre."
            },
            fagfolk: {
                title: "Tilknytningsmønstre - Teoretisk Ramme",
                text: "Bowlby og Ainsworths tilknytningstypologi identificerer fire primære mønstre: sikker, undvigende, ambivalent og desorganiseret tilknytning. Indre arbejdsmodeller fungerer som implicitte relationelle skemaer der organiserer interpersonel adfærd og affektregulering. Earned secure attachment opnås gennem den terapeutiske relation som korrigerende erfaring. Der lægges særligt fokus på hvordan tidlige tilknytningsmønstre manifesterer sig direkte i autonome nervesystem-responser, påvirker affektregulering og former klientens kapacitet for interpersonel nærvær og emotionel tolerance i voksenlivet."
            }
        },
        kropsterapi: {
            klient: {
                title: "Kropsterapi & Behandling",
                text: "Din krop husker alt hvad du har oplevet - både de gode og de svære erfaringer lagres som mønstre i kroppen. Gennem blid og respektfuld behandling på briks, målrettet arbejde med åndedræt og fascia, hjælper jeg din krop med gradvist at slippe gamle mønstre og dybtliggende spændinger. Kroppen besidder en iboende visdom om hvordan den skal hele sig selv. Den har bare brug for de rette betingelser, tilstrækkelig tryghed og den nødvendige tid til at processen kan udfolde sig naturligt og i dit eget tempo."
            },
            fagfolk: {
                title: "Kropsterapi - Somatisk Tilgang",
                text: "Afspændingspædagogisk behandling på briks kombineres med fascial release teknikker og struktureret åndedrætsarbejde. Tilgangen integrerer principper fra sensorimotorisk psykoterapi og somatic experiencing i en sammenhængende behandlingsramme. Bottom-up regulering opnås gennem direkte kropslig intervention der adresserer somatiske manifestationer af dysregulering. Der arbejdes med fokus på udvikling af proprioceptiv og interoceptiv awareness som primær vej til autonomt nervesystem-regulering, hvilket giver klienten varige redskaber til selvregulering gennem kropslig bevidsthed og sensorisk integration."
            }
        },
        psykobiologi: {
            klient: {
                title: "Psykobiologi",
                text: "Dine følelser, tanker og personlige oplevelser er dybt og uløseligt forbundet med din krops biologi - med hormoner, neurotransmittere og nervesystemets aktuelle tilstand. Disse systemer arbejder sammen hele tiden og påvirker hinanden konstant. Når biologien kommer i bedre balance, bliver det naturligt lettere at tænke klart, føle stabilt og handle fornuftigt i hverdagens mange situationer. I vores arbejde sammen adresserer jeg både den psykologiske og den biologiske dimension, fordi ægte og varig forandring kræver at begge sider integreres i behandlingen."
            },
            fagfolk: {
                title: "Psykobiologi - Neurobiologisk Integration",
                text: "Integrativ forståelse af HPA-aksens funktion, neurotransmitter-systemer herunder serotonin, dopamin og GABA, samt hormonelle processer som cortisol og oxytocin, analyseres i direkte relation til psykisk regulering og emotionel stabilitet. Det autonome nervesystem fungerer som central moderator der forbinder disse biologiske systemer med psykologisk funktion. En evidensbaseret tilgang anvendes til at forstå og klinisk udnytte hvordan målrettede kropslige interventioner kan påvirke og optimere neurobiologiske systemer, hvilket skaber fundamentet for varig terapeutisk forandring."
            }
        },
        traumer: {
            klient: {
                title: "Traumer & Dissociation",
                text: "Traumer sidder fast i nervesystemet som kropslige mønstre, ikke kun i dine bevidste minder og erindringer. Når noget overvældende sker, kan dele af dig automatisk koble fra - det kaldes dissociation - som en beskyttelsesmekanisme der holder dig i live. Denne frakoblings evne var nødvendig dengang, men kan blive et problem i dag. Jeg hjælper dig med forsigtigt og i dit eget tempo at integrere det frakoblede materiale, så du igen kan føle dig hel, tilstede og forbundet med dig selv og dit liv."
            },
            fagfolk: {
                title: "Traumer & Dissociation - Traumebearbejdning",
                text: "Peter Levines Somatic Experiencing og Bessel van der Kolks banebrydende traumeforskning danner det teoretiske fundament for denne tilgang. Fokus rettes mod incomplete defensive responses og fryseresponser der forbliver lagret som aktiverede mønstre i nervesystemet. Behandlingen anvender gradvis titrering og pendulering mellem activation og ro for at undgå overvældelse. Dissociation forstås som en adaptiv overlevelsesmekanisme der kræver specifik terapeutisk opmærksomhed på klientens window of tolerance og kapacitet for interoceptiv kontakt med kropslige fornemmelser."
            }
        },
        relation: {
            klient: {
                title: "Terapeutisk Relation",
                text: "Healing sker først og fremmest i relationer, ikke i isolation fra andre mennesker. I vores terapeutiske arbejde sammen skaber vi et trygt og nærende rum hvor dit nervesystem kan slappe af og åbne sig. Min rolige tilstedeværelse og stabile regulering hjælper aktivt dit nervesystem med gradvist at finde sin egen indre ro og balance. Den terapeutiske relation er ikke bare en ydre ramme for behandlingen - den er i sig selv den vigtigste medicin og det mest kraftfulde redskab til varig forandring og personlig heling."
            },
            fagfolk: {
                title: "Terapeutisk Relation - Neurobiologisk Grundlag",
                text: "Relationel neurobiologi udgør den overordnede teoretiske ramme for forståelsen af terapeutisk forandring. Co-regulering faciliteres gennem terapeutens stabile ventral vagale tilstand som aktivt påvirker klientens autonome system. Mirror neurons og interbrain synchrony fungerer som de underliggende fysiologiske mekanismer for denne interpersonelle resonans. Earned secure attachment udvikles gennem gentagne korrigerende emotionelle erfaringer i den terapeutiske relation. Den terapeutiske alliance betragtes som den afgørende forudsætning for effektivt autonomt nervesystem-arbejde og varig neurobiologisk forandring hos klienten."
            }
        }
    },
    connections: {
        'nervesystem-polyvagal': {
            klient: "Nervesystemsregulering bygger direkte på den polyvagale teori som sit videnskabelige fundament. Når du forstår dine tre grundlæggende nervesystem-tilstande - sikkerhed, alarm og nedlukning - får du et konkret kort over din indre verden. Med denne forståelse kan du lære at genkende hvor du befinder dig, og aktivt regulere dig selv tilbage til den grønne sikre tilstand. Denne viden gør regulering til noget håndgribeligt og praktisk, frem for noget abstrakt og uforståeligt, og giver dig redskaber til daglig selvregulering.",
            fagfolk: "Polyvagal teori udgør det centrale teoretiske fundament for al nervesystemsregulering i denne tilgang. Den hierarkiske forståelse af autonome tilstande - ventral vagal, sympatisk og dorsal vagal - danner basis for systematisk terapeutisk intervention. Klinisk anvendelse fokuserer på at facilitere ventral vagal aktivering som primær reguleringsmekanisme. Forståelsen af neuroception som underbevidst sikkerhedsvurdering informerer den terapeutiske tilrettelæggelse og hjælper terapeuten med at skabe optimale betingelser for klientens autonome regulering og udvidelse af tolerancevinduet."
        },
        'nervesystem-tilknytning': {
            klient: "Dit tidlige tilknytningsmønster har dybt formet hvordan dit nervesystem automatisk reagerer i relationer med andre mennesker. Hvis du voksede op med utryghed, kan dit nervesystem stadig reagere med alarm eller nedlukning i nære relationer. Ved at arbejde direkte med nervesystemets regulering kan vi hjælpe med at ændre disse gamle automatiske tilknytningsmønstre. Gennem nye gentagede oplevelser af sikkerhed og tryghed i den terapeutiske relation kan nervesystemet lære nye og sundere måder at være i kontakt med andre mennesker.",
            fagfolk: "Tilknytningsmønstre manifesterer sig primært som karakteristiske autonome nervesystem-mønstre der aktiveres i relationelle kontekster. Unsikker tilknytning korrelerer med specifik autonom dysregulering, herunder sympatisk hyperaktivering ved ambivalent tilknytning og dorsal shutdown ved undvigende mønstre. Nervesystemsregulering faciliterer processen mod earned secure attachment gennem somatisk korrigering af dybtliggende implicitte relationelle skemaer. Denne tilgang adresserer tilknytningsmønstre på det fysiologiske niveau hvor de oprindeligt blev encodet, hvilket muliggør mere fundamental forandring end kognitive interventioner."
        },
        'nervesystem-kropsterapi': {
            klient: "Kroppen og nervesystemet udgør en uadskillelig helhed - du kan simpelthen ikke regulere nervesystemet uden aktivt at involvere kroppen i processen. Behandling på briks, bevidst åndedrætsarbejde og målrettet bevægelse er konkrete og effektive måder at hjælpe nervesystemet tilbage i balance. Gennem kroppen får du direkte adgang til at påvirke dit nervesystems tilstand, ofte hurtigere og mere effektivt end gennem samtale alene. Kroppen er den mest direkte vej til at skabe varige forandringer i nervesystemets grundlæggende reguleringsmønstre og kapacitet.",
            fagfolk: "Somatisk intervention udgør direkte nervesystemsregulering gennem kropslig adgang til det autonome system. Bottom-up processer gennem fascial work, åndedrætsinterventioner og behandling på briks modulerer vagal tone og autonome tilstande betydeligt mere effektivt end top-down kognitive interventioner anvendt isoleret. Kropslig intervention adresserer autonome mønstre på det fysiologiske niveau hvor dysregulering er encodet. Denne tilgang er særligt effektiv fordi somatiske interventioner kan nå subsymboliske niveauer af nervesystem-regulering der ikke er tilgængelige gennem verbal bearbejdning alene."
        },
        'nervesystem-psykobiologi': {
            klient: "Når dit nervesystem gradvist kommer i bedre balance, følger hormonerne og neurotransmitterne naturligt med i den positive retning. Bedre og dybere søvn, mere effektiv fordøjelse, stabilere humør og øget energi er alle direkte og mærkbare resultater af et mere reguleret nervesystem. Din krop fungerer som et sammenhængende system hvor nervesystemet spiller rollen som dirigent. Når dirigenten finder sin rytme, begynder hele orkestret at spille harmonisk sammen, og du mærker forbedringen på mange forskellige niveauer i din dagligdag.",
            fagfolk: "Det autonome nervesystem fungerer som master regulator for HPA-aksens aktivitet og de centrale neurotransmitter-systemer. Ventral vagal aktivering faciliterer direkte hormonel balance gennem cortisol-reduktion og øget oxytocin-frigivelse, samt understøtter optimal neurotransmitter-funktion. Denne kaskadeeffekt forklarer hvorfor nervesystemsregulering har vidtrækkende psykobiologiske konsekvenser. Klinisk betyder dette at interventioner rettet mod autonom regulering samtidigt adresserer multiple biologiske systemer, hvilket giver en mere omfattende terapeutisk effekt end isolerede farmakologiske interventioner der kun målretter enkelte neurotransmitter-pathways."
        },
        'nervesystem-traumer': {
            klient: "Traumer sidder fast som frosne og fastlåste tilstande dybt i dit nervesystem. Kroppen holder stadig på den energi der aldrig blev udløst under den oprindelige overvældende oplevelse. Ved at arbejde forsigtigt, gradvist og respektfuldt med nervesystemets naturlige reguleringsmekanismer kan det traumatiske materiale langsomt integreres uden at overvælde dig. Processen handler om at skabe tilstrækkelig sikkerhed til at nervesystemet tør åbne op for det frosne. Tempoet er afgørende - vi arbejder altid i det tempo der føles trygt og håndterbart for dig.",
            fagfolk: "Traumatisk materiale er primært lagret som autonome forsvarstilstande, herunder freeze og collapse responser der repræsenterer ufuldstændige defensive handlinger. Nervesystemsregulering gennem kontrolleret titrering og systematisk pendulering mellem activation og ro faciliterer completion af incomplete defensive responses uden risiko for re-traumatisering. Denne proces respekterer nervesystemets hierarkiske organisering og arbejder inden for klientens aktuelle window of tolerance. Terapeutisk succes afhænger af præcis dosering af traumatisk activation kombineret med tilstrækkelig ventral vagal ressource til at integrere materialet."
        },
        'nervesystem-relation': {
            klient: "Dit nervesystem lærer regulering primært gennem relationer med andre regulerede nervesystemer. I den terapeutiske proces låner dit nervesystem ro og stabilitet fra mit, indtil det selv gradvist udvikler kapaciteten til at finde og fastholde sin egen indre ro. Denne proces kaldes co-regulering og er en helt grundlæggende biologisk mekanisme. Ligesom et barn lærer at regulere sig selv gennem kontakt med en rolig forælder, kan voksne også lære ny regulering gennem en tryg og stabil terapeutisk relation med en reguleret terapeut.",
            fagfolk: "Den terapeutiske relation udgør den primære vej til effektiv nervesystemsregulering i denne behandlingsmodel. Terapeutens stabile ventral vagale tilstand co-regulerer aktivt klientens autonome system gennem interpersonal neurobiological synchrony og direkte activation af social engagement-systemet. Denne mekanisme er understøttet af forskning i interbrain coupling og fysiologisk synkronisering mellem terapeut og klient. Terapeutens egen autonome reguleringskapacitet er derfor afgørende for behandlingseffekt, hvilket understreger vigtigheden af terapeutens personlige reguleringsarbejde og supervision med fokus på somatisk selvbevidsthed."
        },
        'polyvagal-tilknytning': {
            klient: "Hvert tilknytningsmønster har sin helt egen karakteristiske nervesystem-signatur som kan genkendes i kroppen. Tryg tilknytning lever naturligt i den grønne sikre tilstand med fleksibel regulering, mens utryg tilknytning ofte sidder fast i enten alarm eller nedlukning. Når du forstår denne sammenhæng, giver dine reaktioner i relationer pludselig mening på en helt ny og befriende måde. Dit nervesystems automatiske reaktioner er ikke tilfældige - de afspejler præcist det tilknytningsmønster du udviklede tidligt i livet.",
            fagfolk: "Tilknytningsmønstre er embodied som specifikke og genkendelige autonome profiler der aktiveres i relationelle kontekster. Sikker tilknytning korrelerer konsistent med ventral vagal fleksibilitet og bred autonom variabilitet, mens unsikre mønstre typisk viser enten rigid sympatisk hyperarousal ved ambivalent tilknytning eller dominerende dorsal hypoarousal ved undvigende tilknytning. Desorganiseret tilknytning viser karakteristisk oscillation mellem modstridende autonome tilstande. Denne polyvagale forståelse af tilknytningstypologi informerer den kliniske vurdering og muliggør målrettede interventioner baseret på klientens specifikke autonome profil."
        },
        'polyvagal-kropsterapi': {
            klient: "Når din krop behandles med ægte nærvær, omsorg og respekt, sender det kraftige sikkerhedssignaler direkte til dit nervesystem. Blid og opmærksom berøring sammen med roligt åndedrætsarbejde aktiverer den grønne sikre tilstand i din krop. Dit nervesystem aflæser konstant om omgivelserne er sikre, og terapeutisk berøring givet med den rette kvalitet kommunikerer dyb sikkerhed. Denne form for kropsarbejde er derfor ikke kun fysisk behandling men en direkte samtale med dit nervesystem på det sprog det forstår allerbedst.",
            fagfolk: "Somatisk intervention via kvalificeret berøring og struktureret åndedrætsarbejde aktiverer ventral vagale pathways gennem stimulering af C-fibre afferenter, som medierer affektiv touch, samt gennem modulering af respiratorisk sinus arrhythmia. Denne tilgang muliggør direkte bottom-up modulering af polyvagal tone uden krav om kognitiv bearbejdning. Fascial release teknikker påvirker desuden interoceptive afferenter der signalerer til nucleus tractus solitarius og dermed direkte modulerer autonom balance. Kombinationen af berøring og åndedræt skaber synergistisk effekt på ventral vagal kapacitet."
        },
        'polyvagal-psykobiologi': {
            klient: "Når du befinder dig i den grønne sikre tilstand, fungerer hele din biologi optimalt - du oplever god og dyb søvn, et stærkt og aktivt immunforsvar, samt effektiv og behagelig fordøjelse. Din krop producerer de rigtige hormoner i den rette mængde og dine neurotransmittere er i balance. Når du derimod er fanget i alarm eller nedlukning, går alle disse biologiske systemer i ubalance. Dit nervesystems tilstand er altså direkte afgørende for hele din krops biologiske funktion og dit overordnede helbred.",
            fagfolk: "Ventral vagal tilstand optimerer alle centrale fysiologiske systemer simultant: HPA-akse regulering normaliseres med passende cortisol diurnale rytmer, immunfunktion styrkes, og fordøjelsesprocesser effektiviseres. Sympatisk eller dorsal vagal dominans dysregulerer derimod hormoner, øger inflammatoriske markører og forstyrrer metaboliske processer. Denne polyvagale forståelse af psykobiologisk funktion forklarer den udbredte komorbiditet mellem autonom dysregulering og somatiske symptomer. Klinisk understreger det vigtigheden af at adressere det autonome nervesystems tilstand som primær intervention for at opnå bred psykobiologisk forbedring."
        },
        'polyvagal-traumer': {
            klient: "Traumer fryser nervesystemet fast i enten alarm eller nedlukning, ofte i en kombination af begge tilstande samtidig. At finde gradvist tilbage til den grønne sikre tilstand er det afgørende første skridt i al traumehealing. Først når nervesystemet oplever tilstrækkelig sikkerhed, kan det frosne traumatiske materiale langsomt begynde at tø op og blive bearbejdet. Uden denne grundlæggende sikkerhed vil kroppen forståeligt nok holde fast i sine forsvarsmekanismer, fordi den stadig oplever verden som farlig og uforudsigelig.",
            fagfolk: "Traumatisk immobilisering repræsenterer dorsal vagal dominans ofte med simultant sympatisk co-activation, hvilket skaber den karakteristiske freeze respons med høj intern arousal kombineret med ydre immobilitet. Healing kræver først systematisk etablering af ventral vagal sikkerhed som stabil ressource, før traumatisk materiale kan tilgås og integreres sikkert. Processen involverer kontrolleret oscillation mellem traumatisk activation og ventral vagal ro, kaldet pendulering. Terapeutens evne til at monitorere klientens autonome tilstand og dosere activation præcist er afgørende for vellykket traumebehandling."
        },
        'polyvagal-relation': {
            klient: "Du kan instinktivt mærke når et andet menneske befinder sig i en sikker og rolig tilstand - den tryghed smitter direkte over på dit eget nervesystem. I den terapeutiske proces bruger vi denne naturlige smitteeffekt helt bevidst og målrettet, så dit nervesystem lærer at genkende og fastholde sikkerhed gennem mit stabile nærvær. Din krop aflæser ubevidst min stemme, mit ansigtsudtryk og min kropsholdning, og når disse signaler kommunikerer ro og tryghed, begynder dit eget nervesystem automatisk at regulere sig i samme retning.",
            fagfolk: "Social engagement systemet, medieret af ventral vagal komplekset, faciliterer co-regulering gennem prosodiske kvaliteter i stemmen, ansigtsudtryk og kropsholdning. Terapeutens autonome tilstand påvirker direkte klientens fysiologiske regulering gennem mirror neuron systemer og interbrain synchronization. Denne mekanisme opererer primært på subkortikalt niveau og kræver ikke bevidst kognitiv bearbejdning. Forskning i interpersonel neurobiologi dokumenterer at fysiologisk synkronisering mellem terapeut og klient er en pålidelig prædiktor for terapeutisk outcome, hvilket understreger den relationelle dimensions fundamentale betydning."
        },
        'tilknytning-kropsterapi': {
            klient: "Dine tilknytningsmønstre sidder dybt forankret i kroppen - i måden du ubevidst holder vejret, spænder bestemte muskelgrupper eller lukker følelsesmæssigt ned. Disse kropslige mønstre blev skabt i dine tidligste relationer og gentager sig automatisk. Kropsarbejde kan ændre og omforme disse dybtliggende mønstre ofte mere effektivt end samtale og ord alene, fordi det adresserer mønstrene direkte der hvor de sidder. Gennem kroppen kan vi nå lag af erfaring som den bevidste hukommelse ikke har adgang til men som stadig påvirker dit liv.",
            fagfolk: "Tilknytningsmønstre manifesterer sig somatisk som karakteristiske mønstre i åndedræt, muskeltonus og fascial densitet der afspejler det specifikke tilknytningsmønsters autonome profil. Somatisk intervention bypasser effektivt verbale forsvarsmekanismer og intellektualisering, og faciliterer reconsolidation af implicitte relationelle skemaer gennem proprioceptiv og interoceptiv re-patterning. Denne bottom-up tilgang adresserer tilknytningsmønstre på det subsymboliske niveau hvor de oprindeligt blev encodet i den præverbale periode. Kropslig intervention er derfor særligt velegnet til arbejde med tidlige tilknytningsmønstre der ikke er tilgængelige for narrativ bearbejdning."
        },
        'tilknytning-psykobiologi': {
            klient: "Dit tidlige tilknytningsmønster har konkret formet din biologi helt ned på celleniveau - det påvirker hvordan din krop producerer stresshormoner, og hvor følsom du er for oxytocin, det såkaldte kærlighedshormon. Disse biologiske mønstre blev grundlagt i dine allerførste leveår. Men her er den gode nyhed: biologien kan omformes og justeres gennem nye korrigerende erfaringer. Når du oplever tryg tilknytning i den terapeutiske relation, begynder din krop gradvist at ændre sine hormonelle og neurobiologiske reaktionsmønstre i en sundere og mere fleksibel retning.",
            fagfolk: "Tidlig tilknytning former fundamentalt HPA-akse responsmønstre og oxytocin-receptor sensitivitet med vidtrækkende konsekvenser for livslang stressregulering. Unsikker tilknytning korrelerer konsistent med dysregulerede cortisol diurnale rytmer og signifikant reduceret oxytocin-respons ved social kontakt. Desorganiseret tilknytning viser den mest udtalte neurobiologiske dysregulering med aberrant HPA-akse funktion. Earned secure attachment kan modificere disse tidligt etablerede biologiske mønstre gennem gentagen korrigerende interpersonel erfaring, hvilket demonstrerer neuroplasticitetens potentiale selv for dybt encodede psykobiologiske tilknytningsmønstre."
        },
        'tilknytning-traumer': {
            klient: "Traumer der opstår i tidlige tilknytningsrelationer skaber ofte det mest komplekse mønster kaldet desorganiseret tilknytning. Her bliver relationer på paradoksal vis både kilden til fare og det eneste sted du kan søge tryghed. Barnet kan ikke flygte fra den person det er afhængigt af. Denne indre konflikt kræver særlig forsigtighed og tålmodighed i det terapeutiske arbejde, fordi nærhed både er det der heler og det der aktiverer frygten. Tempoet må være langsomt og respektfuldt for at undgå overvældelse.",
            fagfolk: "Developmental trauma inden for tilknytningssystemet resulterer ofte i desorganiseret tilknytning karakteriseret ved simultant activation af attachment og defense systems, hvilket skaber fundamentalt modstridende autonome impulser. Denne tilstand repræsenterer en særlig klinisk udfordring, da den terapeutiske relation selv kan aktivere traumatiske mønstre. Behandlingen kræver specifik opmærksomhed på terapeutens egen autonome regulering og kapacitet for affektiv tolerance, samt langsom og systematisk etablering af relational safety. Terapeutisk arbejde med desorganiseret tilknytning forudsætter udvidet tidshorisont og konsistent terapeutisk tilgængelighed."
        },
        'tilknytning-relation': {
            klient: "Den terapeutiske relation kan blive det helt særlige sted hvor du for første gang i dit liv erfarer hvad tryg tilknytning virkelig føles som, eller genoplever en tryghed du måske kun har haft glimt af tidligere. Gennem vores vedvarende og stabile relation begynder dine indre modeller af hvad relationer kan være gradvist at blive omskrevet. Du opdager at nærhed ikke behøver at være farligt, at dine behov er gyldige, og at et andet menneske kan være til stede for dig på en pålidelig og konsistent måde.",
            fagfolk: "Earned secure attachment udvikles gennem den terapeutiske relation som gentagen korrigerende emotionel erfaring over tid. Terapeutens konsistente tilgængelighed, præcise affektive afstemning og robuste autonome regulering modificerer gradvist klientens indre arbejdsmodeller. Denne process faciliterer et fundamentalt shift fra unsikre til sikre tilknytningsmønstre gennem det der betegnes relational reconsolidation. Forskning dokumenterer at terapeutisk opnået tryg tilknytning viser sammenlignelige neurobiologiske karakteristika med oprindelig sikker tilknytning, herunder normaliseret oxytocin-respons og forbedret HPA-akse regulering."
        },
        'kropsterapi-psykobiologi': {
            klient: "Kroppen og din biologi taler præcis det samme sprog og påvirker hinanden direkte og umiddelbart. Når du arbejder målrettet med åndedræt og fascia i den terapeutiske behandling, påvirker du direkte produktionen af hormoner og neurotransmittere i hele din krop. Kroppen er den mest effektive indgang til at ændre den indre kemi på en naturlig og holdbar måde. Dybe vejrtrækninger aktiverer eksempelvis vagusnerven, som sænker stresshormonet cortisol og øger produktionen af beroligende neurotransmittere, hvilket du kan mærke som øget ro og klarhed.",
            fagfolk: "Fascial release og struktureret åndedrætsarbejde påvirker direkte vagal afferent signalering fra periferien til hjernestammen, hvilket modulerer aktiviteten i brainstem nuclei og dermed neurotransmitter-frigivelse til højere hjernecentre. Mekanisk stimulation af fascia påvirker interoceptive processing pathways og autonome outputs gennem ændringer i vævsspænding og proprioceptiv input. Denne bottom-up mekanisme forklarer den klinisk observerede effekt af kropslige interventioner på stemningsleje, angst og kognition. Forskning i fascial neurobiologi dokumenterer den tætte innervation af fasciale strukturer og deres betydning for autonom regulering."
        },
        'kropsterapi-traumer': {
            klient: "Traumer sidder lagret i din krop som kroniske spændinger, begrænset og overfladisk åndedræt, områder af følelsesløshed og nedsat kropslig fornemmelse. Disse kropslige mønstre er dit nervesystems måde at holde det overvældende materiale på afstand. Gennem forsigtigt og respektfuldt kropsarbejde i et trygt tempo kan det frosne traumatiske materiale langsomt begynde at tø op. Kroppen begynder at huske hvordan det føles at være hel, levende og tilstede. Processen kræver tålmodighed, men kroppen har en bemærkelsesværdig evne til at hele sig selv.",
            fagfolk: "Somatic experiencing principper danner grundlag for kropslig traumebehandling: traumer manifesterer sig som incomplete motoriske sekvenser og karakteristiske fasciale restrictions der repræsenterer fastfrosne defensive responser. Behandling faciliterer completion af disse ufuldstændige forsvarshandlinger gennem titreret proprioceptiv og interoceptiv activation der gradvist mobiliserer det immobiliserede materiale. Processen resolverer defensive immobilization states gennem kontrolleret gradvis mobilisering indenfor klientens tolerancevindue. Terapeuten monitorerer løbende autonome markører for at sikre at activation forbliver indenfor et integrerbart niveau."
        },
        'kropsterapi-relation': {
            klient: "At blive behandlet med ægte respekt, varme og fuldt nærvær lærer din krop på et dybt niveau at relationer faktisk kan være sikre og nærende. Terapeutisk berøring er ikke bare en fysisk intervention der løsner spændinger - det er samtidig en kraftfuld form for relationel healing. Hver gang du modtager opmærksom og respektfuld berøring, får dit nervesystem en ny erfaring af at en anden persons nærhed kan føles tryg og godt. Denne dobbelte virkning gør kropslig behandling til et særligt effektivt redskab i den terapeutiske proces.",
            fagfolk: "Terapeutisk touch fungerer som en integreret relationel intervention der simultant adresserer somatiske og relationelle dimensioner af dysregulering. Affektiv C-fibre stimulation gennem kvalificeret berøring kombineret med terapeutens ventral vagale tilstedeværelse faciliterer simultant somatisk og relationel reconsolidation af tidlige erfaringer. Embodied co-regulering gennem hands-on work skaber en unik terapeutisk kontekst hvor kropslig intervention og relationel reparation sker parallelt. Denne integration af somatisk og relationel dimension gør kropslig behandling særligt effektiv ved tilknytningsrelateret problematik og developmental trauma."
        },
        'psykobiologi-traumer': {
            klient: "Traumer ændrer konkret din biologi på dybtgående vis - din krop begynder at producere mere stresshormon og mindre af de hormoner der skaber glæde, ro og forbindelse. Din biologiske baseline forskydes i retning af konstant alarmberedskab. Men denne biologiske forandring er ikke permanent eller irreversibel. Biologien kan gradvist normaliseres igen når traumerne forsigtigt bearbejdes og nervesystemet finder tilbage til en mere reguleret og fleksibel tilstand. Kroppen har en iboende kapacitet til at genoprette balance, når de rette betingelser skabes.",
            fagfolk: "PTSD og developmental trauma modificerer HPA-akse reactivity, cortisol diurnale rytmer og inflammatoriske profiler på måder der kan vedvare i årtier uden intervention. Kronisk traumerelateret dysregulering resulterer i forhøjede pro-inflammatoriske markører, dysreguleret cortisol awakening response og reduceret vagal tone. Traumebehandling gennem målrettet nervesystemsregulering kan normalisere disse biologiske markører gennem systematisk restoration af autonomic flexibility. Forskning dokumenterer at vellykket traumebehandling korrelerer med målbare forbedringer i neuroendokrine og inflammatoriske biomarkører, hvilket validerer den psykobiologiske tilgang til traumeterapi."
        },
        'psykobiologi-relation': {
            klient: "Gode og trygge relationer fungerer som ægte biologisk medicin for din krop - de øger produktionen af oxytocin, sænker niveauet af stresshormonet cortisol og styrker dit immunforsvar mærkbart. Den terapeutiske relation har en direkte og målbar biologisk effekt på din krop, ikke kun på dine tanker og følelser. Hver gang du oplever ægte forbindelse og tryghed i vores terapeutiske rum, responderer din biologi positivt. Relationen er derfor ikke blot en psykologisk intervention men en reel biologisk behandling der påvirker din krop på celleniveau.",
            fagfolk: "En sikker terapeutisk relation øger dokumenteret endogent oxytocin, reducerer cortisol og pro-inflammatoriske cytokiner som IL-6 og TNF-alpha. Social connection aktiverer dopaminerge belønningssystemer og bufferer HPA-akse respons ved stresseksponering. Relationel intervention er dermed direkte biologisk intervention med målbare effekter på neuroendokrine og immunologiske parametre. Forskning i social neurobiologi dokumenterer at kvaliteten af den terapeutiske alliance korrelerer signifikant med biologiske outcome-markører, hvilket understreger at relationel kvalitet ikke blot er en nonspecifik faktor men en aktiv behandlingsmekanisme."
        },
        'traumer-relation': {
            klient: "At arbejde med traumer kræver en dyb og solid oplevelse af sikkerhed i den terapeutiske relation som det absolutte fundament. Uden dette trygge relationelle grundlag vil al traumebearbejdning uundgåeligt føles overvældende og potentielt retraumatiserende. Relationen kommer altid først, og traumearbejdet følger naturligt bagefter, når fundamentet er tilstrækkeligt stærkt og stabilt. Det kan tage tid at opbygge denne dybe tillid, og den tid er aldrig spildt. Jo stærkere det relationelle fundament er, desto mere effektivt og sikkert kan det efterfølgende traumearbejde foregå.",
            fagfolk: "Effektiv traumebehandling forudsætter en veletableret therapeutic alliance og terapeutens robuste og stabile autonome regulering som ufravigelig forudsætning. Uden tilstrækkelig relational safety risikeres re-traumatisering gennem ureguleret overwhelm og destabilisering af klientens autonome system. Co-regulering gennem terapeutens ventral vagale stabilitet er den afgørende forudsætning for sikker activation og integration af traumatisk materiale. Forskning i traumebehandling dokumenterer konsistent at kvaliteten af den terapeutiske alliance er den stærkeste prædiktor for behandlingsoutcome, vigtigere end den specifikke terapeutiske metode der anvendes."
        }
    }
},
    angst: {
    name: "Angst",
    circles: {
        nervesystem: {
            klient: {
                title: "Nervesystemsregulering ved Angst",
                text: "Angst er nervesystemets alarmklokke der ringer uden pause, dag og nat. Dit system er blevet overbevist om at faren er konstant, og det kører i højeste beredskab hele tiden. Jeg hjælper dig med forsigtigt og gradvist at regulere ned fra denne kroniske alarmtilstand, så dit nervesystem langsomt kan lære at det faktisk er sikkert at være her. Når systemet begynder at finde ro og opdager at verden ikke er så farlig som det troede, begynder angsten helt naturligt at forsvinde af sig selv. Det kræver tålmodighed, men forandringen er varig."
            },
            fagfolk: {
                title: "Nervesystemsregulering ved Angstlidelser",
                text: "Angst manifesterer sig som kronisk sympatisk activation med vedvarende nedsat vagal tone og kompromitteret autonom fleksibilitet. Det terapeutiske arbejde fokuserer på gradvis down-regulation af det overaktiverede sympatiske system gennem målrettede bottom-up interventioner. Disse interventioner genopbygger systematisk ventral vagal kapacitet og udvider klientens window of tolerance. Ved at styrke den ventrale vagale bremse genskabes evnen til at vende tilbage til homeostase efter arousal. Målet er ikke blot symptomreduktion men fundamental reorganisering af det autonome nervesystems baseline-tilstand, hvilket muliggør varig bedring af angstlidelsen."
            }
        },
        polyvagal: {
            klient: {
                title: "Polyvagal Forståelse af Angst",
                text: "Angst er når dit nervesystem sidder fast i den gule alarmzone og ikke kan finde vejen ud. Du lever i konstant beredskab hvor kroppen hele tiden forbereder sig på fare der ikke kommer. Jeg lærer dig at genkende de tidlige signaler på at systemet skifter til alarm, og sammen finder vi konkrete og praktiske veje tilbage til den grønne sikre tilstand. Med tiden bliver disse teknikker til naturlige vaner, og dit system lærer at det har en vej tilbage til tryghed og ro når angsten melder sig."
            },
            fagfolk: {
                title: "Polyvagal Teori og Angst",
                text: "Angstlidelser repræsenterer en vedvarende fastholdelse i sympatisk mobilisering uden tilstrækkelig adgang til ventral vagal regulering og social engagement. Neuroception fejltolker konsistent sikre situationer som potentielt farlige, hvilket opretholder den autonome dysregulering. Det primære terapeutiske mål er genskabelse af polyvagal fleksibilitet, så klienten kan bevæge sig frit mellem autonome tilstande efter situationens krav. Dette indebærer systematisk styrkelse af den ventrale vagale pathway gennem både relationelle og somatiske interventioner der gradvist rekalibrerer det neuroceptive system mod mere præcis vurdering af sikkerhed og fare."
            }
        },
        tilknytning: {
            klient: {
                title: "Tilknytning og Angst",
                text: "Meget angst har sine dybeste rødder i utryg tilknytning fra de tidlige leveår, hvor verden føltes upålidelig og de voksne omkring dig ikke altid var til stede på den måde du havde brug for. Dit nervesystem lærte dengang at være på vagt hele tiden. I terapien arbejder vi sammen med at skabe nye, gentagende oplevelser af ægte sikkerhed og pålidelighed i vores relation. Gennem disse nye erfaringer kan angsten langsomt begynde at slippe sit greb, fordi systemet opdager at tilknytning også kan være tryg."
            },
            fagfolk: {
                title: "Tilknytningsmønstre ved Angst",
                text: "Ambivalent og desorganiseret tilknytning korrelerer stærkt med udvikling af angstlidelser gennem livsforløbet. Hyperactivation af attachment systemet medfører konstant scanning for potentiel fare og afvisning i relationelle kontekster. Denne vedvarende vagtsomhed opretholder sympatisk arousal og underminerer kapaciteten for selvregulering. Klinisk erfaring viser at earned secure attachment gennem terapeutisk relation signifikant reducerer angst-symptomer ved at etablere et reguleret autonomt nervesystem som ny baseline. Processen kræver konsistent terapeutisk tilgængelighed og afstemning over tid for at modificere dybt indlejrede tilknytningsstrategier."
            }
        },
        kropsterapi: {
            klient: {
                title: "Kropsarbejde ved Angst",
                text: "Angst sidder ikke kun i tankerne men helt konkret i kroppen som spændte skuldre, kort og overfladisk åndedræt, sammentrukken mave og en krop der aldrig rigtig slipper spændingen. Kroppen holder sig i konstant beredskab som om faren er lige om hjørnet. Gennem blid og respektfuld behandling kombineret med bevidst åndedrætsarbejde lærer din krop gradvist at slippe denne dybe alarm og finde en ro den måske ikke har kendt længe. Når kroppen slapper af, følger sindet naturligt med og angsten letter."
            },
            fagfolk: {
                title: "Somatisk Intervention ved Angst",
                text: "Angst manifesteres somatisk som vedvarende muskulær hypertonus, shallow breathing patterns, fasicial restrictions og reduceret interoceptiv awareness. Disse somatiske manifestationer er ikke blot symptomer men aktive opretholdere af den autonome dysregulering. Direkte fascial release kombineret med målrettet respiratorisk intervention modulerer autonome outputs gennem afferente vagale pathways betydeligt mere effektivt end top-down kognitive tilgange alene. Den somatiske tilgang adresserer angstens kropslige forankring direkte og faciliterer en bottom-up regulering der skaber varige ændringer i det autonome nervesystems baseline-tonus og reaktionsmønstre."
            }
        },
        psykobiologi: {
            klient: {
                title: "Biologien bag Angst",
                text: "Ved angst producerer din krop konstant for meget af stresshormonet cortisol og for lidt af de hormoner og signalstoffer der skaber ro og velvære i krop og sind. Denne ubalance holder dig fanget i en tilstand af uro og bekymring som føles umulig at slippe. Ved at arbejde direkte med at regulere nervesystemet gennem kropslige og relationelle tilgange normaliserer vi gradvist den underliggende biologi. Når balancen mellem stress og ro genoprettes, falder angsten mærkbart fordi kroppen ikke længere sender konstante faresignaler til hjernen."
            },
            fagfolk: {
                title: "Neurobiologi ved Angstlidelser",
                text: "Kronisk angst karakteriseres ved dysreguleret HPA-akse med forhøjet baseline cortisol, reduceret GABAerg inhibition og nedsat serotonerg transmission. Denne neurobiologiske profil opretholder en selvforstærkende cyklus af hyperarousal og anxiogenese. Autonomt nervesystem-regulering gennem somatiske og relationelle interventioner normaliserer progressivt neurotransmitter-balance og genopretter HPA-aksens negative feedback-mekanisme. Samtidig reduceres de inflammatoriske markører som er konsistent associeret med kronisk angst, herunder forhøjet IL-6 og TNF-alpha. Denne tilgang adresserer angstens biologiske substrat direkte fremfor udelukkende at fokusere på kognitive manifestationer."
            }
        },
        traumer: {
            klient: {
                title: "Traumer og Angst",
                text: "Angst er ofte det direkte resultat af gamle traumer hvor dit nervesystem blev sat i alarmberedskab og aldrig fik chancen for at slippe det igen. Noget skete dengang som var overvældende, og kroppen holder stadig fast i den oplevelse uden at vide at faren er ovre. I terapien arbejder vi meget forsigtigt og i dit tempo med at fuldføre det der blev afbrudt og forblev ufærdigt i nervesystemet. Når disse gamle reaktioner får lov at afsluttes trygt, kan systemet endelig slappe af og angsten letter."
            },
            fagfolk: {
                title: "Traumatisk Oprindelse af Angst",
                text: "Generaliseret angst er ofte rodfæstet i uløste traumatiske oplevelser med incomplete defensive responses der aldrig nåede completion. Nervesystemet fastholder en persistent hyperarousal som direkte følge af den manglende completion af orienterings- og forsvarsresponser. Denne kroniske aktivering generaliseres over tid til en diffus angstlidelse. Intervention gennem omhyggeligt titreret trauma-processing med fokus på somatisk experiencing og pendulering mellem ressource og aktivering reducerer angst-symptomer ved at facilitere den fysiologiske completion som nervesystemet har ventet på, ofte i årevis eller årtier."
            }
        },
        relation: {
            klient: {
                title: "Relationel Healing af Angst",
                text: "I vores trygge terapeutiske relation får dit nervesystem en helt ny erfaring der viser at verden faktisk kan være sikker og at andre mennesker kan være til at stole på. Min ro og tilstedeværelse smitter gradvist til dit system gennem det vi kalder co-regulering, hvor mit rolige nervesystem hjælper dit urolige system med at finde balancen. Denne dybe relationelle oplevelse af sikkerhed er selve fundamentet for at angsten kan begynde at forsvinde. Hver gang vi mødes, styrkes dit systems evne til at finde ro på egen hånd."
            },
            fagfolk: {
                title: "Relationel Neurobiologi ved Angst",
                text: "Terapeutens stabile ventral vagale tilstedeværelse co-regulerer aktivt klientens hyperaroused autonome system gennem interpersonal neurobiologisk resonans. Gentagen erfaring af autentisk relational safety inden for den terapeutiske ramme rekalibrerer gradvist klientens neuroceptive system og reducerer den forhøjede baseline angst. Denne proces medieres gennem interpersonal neurobiological synchrony hvor terapeutens autonome regulering fungerer som ekstern regulator for klientens dysregulerede system. Over tid internaliseres denne reguleringskapacitet, hvilket resulterer i øget autonom fleksibilitet og reduceret angst-symptomatologi også uden for den terapeutiske kontekst."
            }
        }
    },
    connections: {
        'nervesystem-polyvagal': {
            klient: "Ved angst sidder nervesystemet fast i en vedvarende alarm-tilstand hvor kroppen konstant forbereder sig på fare. Den polyvagale forståelse giver dig en konkret og brugbar nøgle til at forstå hvad der sker i dit system, og vigtigst af alt, hvordan du aktivt kan skifte gear og bevæge dig tilbage mod en tilstand af sikkerhed og ro. Når du forstår mekanismen bag din angst, bliver det lettere at arbejde med den og finde vejen til den trygge grønne zone.",
            fagfolk: "Angst repræsenterer kronisk sympatisk dominans uden tilstrækkelig ventral vagal adgang, hvilket resulterer i tab af autonom fleksibilitet. Polyvagal-informeret intervention fokuserer på at genetablere den hierarkiske fleksibilitet i det autonome nervesystem, så klienten kan bevæge sig flydende mellem tilstande. Gennem målrettet styrkelse af den ventrale vagale pathway genskabes kapaciteten for at vende tilbage til homeostase efter aktivering. Dette indebærer systematisk arbejde med neuroceptive processer der gradvist rekalibrerer systemets vurdering af sikkerhed og fare i hverdagens situationer."
        },
        'nervesystem-tilknytning': {
            klient: "Angstens karakteristiske nervesystem-mønstre med konstant alarmberedskab blev ofte grundlagt og formet i tidlige utryg tilknytningsrelationer, hvor du som barn ikke oplevede tilstrækkelig tryghed og forudsigelighed. Dit nervesystem lærte at verden var usikker og reagerer stadig efter dette gamle mønster. I terapien arbejder vi med at heale tilknytningen gennem nye relationelle erfaringer, og når tilknytningen heles, heles angsten også, fordi nervesystemet opdager at det er muligt at føle sig tryg sammen med et andet menneske.",
            fagfolk: "Angst-relaterede autonome mønstre har ofte deres primære oprindelse i usikker tilknytning i de tidlige udviklingsfaser. Tilknytningsstrategier formes som autonome response-patterns der persisterer gennem livsforløbet og manifesteres som angstlidelser. Earned secure attachment gennem terapeutisk relation modificerer disse dybt indlejrede mønstre ved at tilbyde gentagne korrigerende erfaringer. Processen involverer gradvis restrukturering af indre arbejdsmodeller og deres tilhørende autonome signaturer, hvilket resulterer i fundamental ændring af nervesystemets baseline-tilstand fra kronisk hypervigilans mod øget kapacitet for regulering og tryghed."
        },
        'nervesystem-kropsterapi': {
            klient: "Angst holder din krop fanget i en tilstand af konstant spænding og beredskab, hvor musklerne aldrig rigtig slipper og åndedrættet forbliver overfladisk og kort. Denne kropslige spænding er ikke bare et symptom på angsten men en aktiv del af det der holder den kørende. Målrettet kropsarbejde frigiver de dybtliggende spændinger direkte og sender dermed klare signaler til nervesystemet om at regulere ned fra alarmtilstanden. Når kroppen finder ro, følger nervesystemet med, og angsten begynder at lette mærkbart.",
            fagfolk: "Angst-relateret somatisk hypertonus opretholdes af og opretholder samtidig de autonome stress-responses i en selvforstærkende feedbackloop. Muskulær spænding, fasicial restriction og respiratorisk dysregulering fungerer som vedvarende afferente signaler der opretholder sympatisk dominans. Målrettet fascial release og somatisk intervention bryder denne cyklus ved direkte at modulere afferent vagal input. Når de somatiske opretholdere af angst-tilstanden adresseres, reduceres den autonome hyperarousal, og nervesystemet kan begynde at genetablere en mere reguleret baseline med øget kapacitet for ventral vagal aktivering."
        },
        'nervesystem-psykobiologi': {
            klient: "Angstens biologi er kendetegnet ved forhøjet cortisol og reduceret serotonin, en ubalance der holder dig fanget i uro og bekymring dag efter dag. Denne biologiske ubalance er ikke en fejl i dig men en naturlig konsekvens af et nervesystem i kronisk alarmberedskab. Når vi arbejder med at hjælpe nervesystemet til at finde genuin ro og regulering, normaliseres den underliggende biologi gradvist af sig selv. Hormonerne finder balance, signalstofferne genoprettes, og angsten falder mærkbart som et direkte resultat af den biologiske normalisering.",
            fagfolk: "Nervesystemsregulering ved angst adresserer direkte de neurobiologiske dysfunktioner der opretholder lidelsen. Gennem autonome interventioner normaliseres progressivt HPA-aksens dysregulerede cortisol-produktion og den kompromitterede negative feedback-mekanisme. Parallelt genoprettes neurotransmitter-profilerne med øget GABAerg inhibition og forbedret serotonerg transmission. Denne bottom-up tilgang til biologisk normalisering er ofte mere effektiv end farmakologisk intervention alene, da den adresserer den autonome dysregulering som er den primære driver af de neurobiologiske forandringer. Resultatet er en varig ændring af den biologiske baseline."
        },
        'nervesystem-traumer': {
            klient: "Angst er ofte udtryk for frosne traumer der stadig lever aktivt i nervesystemet mange år efter den oprindelige hændelse. Din krop og dit nervesystem husker det der skete, selvom din bevidste hukommelse måske har glemt det eller skubbet det væk. Ved forsigtigt og respektfuldt at løsne det frosne materiale og lade de ufærdige kropslige reaktioner komme til afslutning, kan nervesystemet endelig slippe alarmtilstanden. Når traumet frigives fra kroppen, forsvinder angsten som en naturlig konsekvens af nervesystemets nye frihed.",
            fagfolk: "Angst konceptualiseres her som en persisterende incomplete defensive response, hvor nervesystemet fastholder mobiliseringsenergi fra uafsluttede traumatiske oplevelser. Denne energi manifesteres som kronisk hyperarousal og generaliseret angst. Completion af disse defensive responses gennem omhyggeligt titreret somatisk experiencing faciliterer fysiologisk afslutning og reducerer dermed angst-symptomer signifikant. Titreringen er afgørende for at undgå retraumatisering og sikre at processen forbliver inden for klientens window of tolerance. Gradvis completion resulterer i varig reduktion af autonom hyperarousal og genoprettet reguleringskapacitet."
        },
        'nervesystem-relation': {
            klient: "Dit angstfyldte nervesystem har brug for at lære ro og sikkerhed på et helt grundlæggende kropsligt niveau, og denne læring sker mest effektivt gennem vores terapeutiske relation. Når du gentagne gange oplever ægte tryghed og accept i mødet med mig, begynder dit system langsomt at justere sin opfattelse af verden. Co-regulering betyder at min ro og mit stabile nervesystem direkte påvirker dit system mod større balance. Denne relationelle erfaring er selve kernen i healingen af angst og skaber varige forandringer i dit nervesystems grundtilstand.",
            fagfolk: "Co-regulering inden for den terapeutiske alliance udgør den primære vej til modification af angst-relaterede autonome mønstre. Terapeutens stabile ventral vagale tilstand fungerer som ekstern regulator for klientens dysregulerede system gennem interpersonal neurobiologisk resonans. Gentagen eksponering for autentisk relational safety inden for den terapeutiske ramme modificerer gradvist de neuroceptive processer der opretholder angsten. Denne tilgang er særligt effektiv fordi den adresserer angstens relationelle dimension direkte og faciliterer internalisering af reguleringskapacitet som klienten over tid kan anvende autonomt."
        },
        'polyvagal-tilknytning': {
            klient: "Utryg tilknytning i de tidlige leveår skabte et nervesystem der har lært at leve permanent i den gule alarmzone, altid parat til fare og aldrig rigtig tryg. Dit system fik aldrig chancen for at lære hvad grøn sikkerhed virkelig føles som i kroppen. I terapien arbejder vi sammen om at give dit nervesystem helt nye oplevelser af den grønne trygge tilstand gennem vores relation og konkrete øvelser. Langsomt lærer systemet at sikkerhed er mulig, og angstens greb løsner sig naturligt.",
            fagfolk: "Ambivalent tilknytning manifesteres som rigid sympatisk activation ved angstlidelser, hvor det autonome system er fastlåst i mobiliseringsmodus uden adgang til ventral vagal regulering. Tilknytningsstrategien har formet et nervesystem der konstant scanner for fare og afvisning. Det primære terapeutiske mål er at etablere ventral vagal adgang gennem korrigerende relationelle erfaringer der gradvist modificerer de tilknytningsbaserede autonome mønstre. Dette arbejde kræver konsistent terapeutisk tilgængelighed og afstemning over tid for at facilitere overgangen fra usikker til earned secure attachment."
        },
        'polyvagal-kropsterapi': {
            klient: "Når din krop modtager behandling og langsomt lærer at slippe spændingerne og finde dyb ro, sender det kraftfulde og direkte beskeder gennem nervesystemet til den gule alarm-zone om at det faktisk er sikkert nu. Kroppen taler et sprog som nervesystemet forstår bedre end ord og tanker. Hver gang kroppen oplever ægte afslapning og sikkerhed, styrkes forbindelsen til den grønne trygge zone, og dit system får nye erfaringer der viser at ro er mulig og at alarmen kan slukkes.",
            fagfolk: "Somatisk intervention ved angst aktiverer ventral vagale pathways direkte gennem afferent stimulering og bryder dermed den sympatiske dominans der kendetegner angstlidelser. Fascial release, respiratorisk intervention og proprioceptiv stimulering modulerer autonome outputs via vagale afferenter, hvilket faciliterer et skifte fra sympatisk mobilisering mod ventral vagal engagement. Denne bottom-up tilgang er særligt effektiv ved angst fordi den omgår de kognitive processer der ofte opretholder bekymringscykler. Den somatiske pathway tilbyder en direkte vej til autonome ændring som supplerer og ofte accelererer relationelle interventioner."
        },
        'polyvagal-psykobiologi': {
            klient: "Den grønne sikre tilstand er ikke bare en følelse af ro men skaber helt konkret den rette biologi i din krop med lavt cortisol, godt niveau af serotonin og andre signalstoffer der fremmer velvære og indre balance. Når dit nervesystem finder og lærer at blive i den grønne zone, normaliseres biologien automatisk, og angsten begynder at forsvinde fordi kroppen ikke længere producerer de kemiske signaler der holder den i gang. Det er derfor det polyvagale arbejde er så vigtigt for varig healing.",
            fagfolk: "Ventral vagal aktivering ved angstbehandling optimerer direkte neurotransmitter-balance og HPA-akse funktion gennem autonome-endokrine koblinger. Når det ventrale vagale system styrkes, øges parasympatisk modulation af stressresponsen med resulterende normalisering af cortisol-produktion og forbedret serotonerg og GABAerg transmission. Denne polyvagal-biologiske kobling forklarer hvorfor autonome interventioner har dokumenteret effekt på de neurobiologiske markører der er associeret med angstlidelser. Klinisk indebærer dette at polyvagal-orienteret terapi adresserer angstens biologiske substrat gennem regulering af det autonome nervesystem."
        },
        'polyvagal-traumer': {
            klient: "Traumer i din fortid låste dit nervesystem fast i den gule alarmzone, og siden har systemet ikke kunnet finde vej tilbage til sikkerhed af sig selv. At arbejde med traumerne direkte uden først at have etableret solid adgang til den grønne sikre zone kan være overvældende og utilrådeligt. Derfor er det første skridt altid at hjælpe dit nervesystem med at finde og forankre sig i grøn sikkerhed. Når det fundament er på plads, kan vi forsigtigt begynde at heale traumet, og angsten letter.",
            fagfolk: "Etablering af solid ventral vagal sikkerhed er en ufravigelig forudsætning for effektiv trauma-processing ved angstlidelser. Uden tilstrækkelig ventral vagal kapacitet risikerer trauma-intervention at retraumatisere klienten ved at aktivere materiale uden tilgængelige reguleringsressourcer. Den polyvagale tilgang til traumebaseret angst prioriterer derfor systematisk opbygning af den ventrale vagale pathway før egentlig trauma-processing påbegyndes. Denne sekvensering sikrer at klienten har intern reguleringskapacitet til at tolerere den aktivering der uundgåeligt opstår under traumearbejde, og muliggør dermed integration frem for fragmentering."
        },
        'polyvagal-relation': {
            klient: "Min grønne rolige tilstand smitter direkte over til dit gule angstfyldte system hver gang vi mødes, og det sker helt naturligt gennem vores terapeutiske relation. Det er ikke noget du behøver at anstrenge dig for at opnå. Dit nervesystem opfanger automatisk signaler om sikkerhed fra mit regulerede system, og langsomt begynder det at justere sin egen tilstand. Denne co-regulering er selve fundamentet for hvordan healing sker i nervesystemsterapi. Med tiden internaliserer du evnen til at finde ro på egen hånd.",
            fagfolk: "Terapeutens stabile ventral vagale tilstand co-regulerer klientens sympatiske hyperarousal aktivt gennem det sociale engagement system og interpersonal neurobiologisk synkronisering. Denne co-regulering medieres primært via ansigtsudtryk, prosodi og tilstedeværelseskvalitet som aktiverer klientens ventrale vagale system. Ved angstbehandling er denne mekanisme særligt vigtig fordi den tilbyder en direkte autonom pathway til regulering der omgår de kognitive bekymringsprocesser. Gentagen eksponering for terapeutens regulerede tilstand faciliterer gradvis internalisering af reguleringskapacitet og udvidelse af klientens autonome fleksibilitet og window of tolerance."
        },
        'tilknytning-kropsterapi': {
            klient: "Utryg tilknytning fra dine tidlige år skabte en krop der holder sig konstant anspændt og på vagt, som om fare altid er lige rundt om hjørnet. Disse spændingsmønstre i muskler og bindevæv er kroppens måde at beskytte sig selv på baseret på gamle erfaringer. Gennem trygt og respektfuldt kropsarbejde lærer både din krop og dit tilknytningssystem en helt ny oplevelse af sikkerhed. Når kroppen slipper sine gamle forsvarsmønstre, åbner det samtidig for nye måder at være i relationer på med mindre angst.",
            fagfolk: "Tilknytningsmønstre ved angst er fundamentalt embodied og manifesteres som specifikke somatiske signaturer i muskeltonus, åndedræt og fascial organisation. Disse kropslige mønstre opretholder den autonome dysregulering der driver angsten. Somatisk intervention modificerer direkte de implicitte relationelle skemaer der er lagret i kroppen ved at tilbyde nye proprioceptive og interoceptive erfaringer. Denne tilgang er særligt effektiv fordi den adresserer tilknytningsmønstrene på det procedurale niveau hvor de primært opererer, fremfor udelukkende at arbejde med eksplicitte narrative repræsentationer af tilknytningshistorien."
        },
        'tilknytning-psykobiologi': {
            klient: "Utryg tilknytning i dine første leveår formede helt konkret en biologi der er konstant klar til angst og alarm. Dit stresssystem blev indstillet til høj følsomhed, og de beroligende signalstoffer fik ikke optimale betingelser for udvikling. Men denne biologi er ikke hugget i sten. Gennem nye oplevelser af sikker og pålidelig tilknytning i terapien kan vi gradvist omforme den biologiske programmering, så kroppen producerer mindre stresshormon og mere af de stoffer der skaber ro og tryghed.",
            fagfolk: "Usikker tilknytning i de tidlige udviklingsperioder præger HPA-aksens sensitivitet og reaktivitet markant, hvilket skaber en biologisk sårbarhed for angstlidelser gennem livsforløbet. Specifikt resulterer utryg tilknytning i forhøjet cortisol-reaktivitet, reduceret oxytocin-receptor densitet og kompromitteret GABAerg modulation. Earned secure attachment opnået gennem konsistent terapeutisk relation demonstrerer kapacitet til at normalisere disse biologiske parametre. Processen involverer gradvis neuroendokrin restrukturering faciliteret af gentagne erfaringer af relationel sikkerhed der modificerer de epigenetiske markører associeret med tidlig tilknytningsstress."
        },
        'tilknytning-traumer': {
            klient: "Traumer der fandt sted inden for dine tidlige tilknytningsrelationer, altså i forholdet til dine primære omsorgspersoner, skabte en særlig dyb form for angst der blev til et livslangt mønster i dit nervesystem. Denne type traumer er ekstra kompleks fordi de mennesker der skulle have været din sikkerhed også var kilden til smerten. Healing af denne angst kræver derfor ekstra forsigtighed, tålmodighed og meget langsom opbygning af tillid i vores terapeutiske relation, så dit system tør åbne sig igen.",
            fagfolk: "Developmental trauma inden for det primære tilknytningssystem resulterer i desorganiseret tilknytning med simultane og modstridende attachment og defense responses, hvilket danner grundlag for kompleks angstproblematik. Denne angstform er særligt behandlingsresistent fordi den relationelle kontekst der skulle facilitere healing samtidig trigger de traumatiske mønstre. Klinisk kræver dette en langsommere og mere gradueret tilgang med fokus på etablering af relational safety som absolut førsteprioritet. Terapeutens evne til at tolerere klientens ambivalens og tilbyde konsistent tilgængelighed er afgørende for at muliggøre gradvis modification af de desorganiserede mønstre."
        },
        'tilknytning-relation': {
            klient: "Vores trygge terapeutiske relation bliver det helt centrale sted hvor du får mulighed for at opleve hvad sikker tilknytning virkelig føles som, måske for allerførste gang i dit liv. Hver gang du mærker at du kan være dig selv uden at blive afvist eller svigtet, svækkes angstens greb en lille smule mere. Over tid skaber disse gentagende oplevelser af pålidelighed og accept nye mønstre i dit nervesystem der erstatter de gamle angstfyldte tilknytningsmønstre. Angsten kan langsomt slippe fordi dit system lærer at relationer kan være trygge.",
            fagfolk: "Den terapeutiske relation fungerer som korrigerende tilknytningserfaring der direkte modificerer de autonome angst-mønstre der er rodfæstet i usikker tilknytningshistorie. Gennem konsistent terapeutisk tilgængelighed, sensitiv afstemning og reparation af uundgåelige brud i alliancen transformeres klientens indre arbejdsmodeller gradvist. Denne proces faciliterer overgangen fra usikre tilknytningsstrategier med tilhørende autonom dysregulering mod earned secure attachment med forbedret reguleringskapacitet. Den relationelle intervention er særligt potent ved tilknytningsbaseret angst fordi den adresserer problemets kerne direkte i den kontekst hvor forandring er mulig."
        },
        'kropsterapi-psykobiologi': {
            klient: "Når kroppen gennem behandling langsomt slipper de dybe spændinger som angsten har skabt og vedligeholdt i muskler og bindevæv, følger biologien automatisk med i en positiv retning. Hormoner og neurotransmittere begynder at finde en sundere balance når kroppen ikke længere sender konstante alarmsignaler til hjernen. Cortisol falder, serotonin og andre rolighedsfremmende stoffer stiger, og kroppens inflammationsniveau reduceres. Denne biologiske normalisering sker naturligt som konsekvens af det kropslige arbejde og bidrager markant til den varige reduktion af angst.",
            fagfolk: "Fascial release og somatisk intervention ved angst påvirker direkte vagale afferenter og modulerer derigennem neurotransmitter-frigivelse og neuroendokrin funktion. Den mekaniske frigørelse af fasciale restriktioner ændrer det afferente input til nucleus tractus solitarius, hvilket påvirker autonom regulering og downstream neurobiologiske processer. Specifikt resulterer somatisk intervention i reduceret cortisol-output, øget GABAerg transmission og forbedret serotonerg funktion. Denne direkte kobling mellem somatisk intervention og neurobiologisk forandring understreger vigtigheden af at inkludere kropsbaserede tilgange i behandlingen af angstlidelser."
        },
        'kropsterapi-traumer': {
            klient: "Angst-traumer sidder bogstaveligt frosset fast i din krop som spændinger, fastlåste bevægelsesmønstre og et nervesystem der aldrig slapper af. Kroppen husker det traumatiske som skete, selv når tanken har glemt det. Gennem meget forsigtigt og respektfuldt kropsarbejde i et tempo der føles trygt for dig, begynder vi langsomt at låse det frosne op. Vi lader kroppen fuldføre de reaktioner der blev afbrudt under traumet, og gradvist frigives den fastholdte energi så angsten kan lette.",
            fagfolk: "Angst-relaterede traumer manifesteres primært somatisk som fasciale restriktioner, muskulær hypertonus og incomplete motoriske sekvenser der fastholder autonomt hyperarousal. Disse somatiske manifestationer repræsenterer ufuldstændige defensive responses der opretholder angst-symptomatologien. Titreret proprioceptiv activation faciliterer gradvis integration af det traumatiske materiale ved at tillade kroppen at fuldføre afbrudte motoriske sekvenser inden for klientens window of tolerance. Denne somatiske tilgang til traumebehandling er særligt relevant ved angstlidelser hvor den kropslige komponent ofte er den primære opretholder af den kroniske hyperarousal."
        },
        'kropsterapi-relation': {
            klient: "At modtage tryg og omsorgsfuld berøring inden for rammerne af vores sikre terapeutiske relation giver din angstfyldte krop en dybtgående ny erfaring der viser at verden og andre mennesker faktisk kan være sikre. Mange med angst har en krop der har lært at trække sig fra berøring eller spænde op ved kontakt. Når du oplever at berøring kan være blid, respektfuld og forudsigelig i vores trygge relation, begynder kroppen at omskrive sine gamle angstfyldte programmer og åbne sig mod en ny oplevelse af sikkerhed.",
            fagfolk: "Terapeutisk touch kombineret med solid relational safety udgør en potent intervention der modificerer angst-relaterede somatiske mønstre på multiple niveauer simultant. Den trygge berøring inden for den terapeutiske relation aktiverer oxytocin-medierede beroligelseskredsløb mens den samtidig tilbyder korrigerende somatiske erfaringer der modvirker de kropslige manifestationer af angst. Denne dobbelte mekanisme, hvor relationel sikkerhed og somatisk intervention virker synergistisk, faciliterer dybere og mere varig forandring end enten relationel eller somatisk intervention alene kan opnå ved behandling af angstlidelser."
        },
        'psykobiologi-traumer': {
            klient: "Traumer ændrede helt konkret din krops biologi til en permanent angst-tilstand, hvor stresssystemet blev skruet op og rolighedssystemet blev skruet ned. Disse biologiske ændringer er ikke din skyld men en naturlig reaktion på overvældende oplevelser som dit nervesystem ikke kunne håndtere dengang. Gennem forsigtigt og titreret arbejde med healing af de underliggende traumer normaliseres biologien gradvist igen. Når traumet frigives fra kroppen, genopretter stresshormoner og signalstoffer deres naturlige balance, og angsten reduceres markant som direkte konsekvens.",
            fagfolk: "Traumatisk modification af HPA-aksen skaber en biologisk sårbarhed der manifesteres som kronisk angst med forhøjet baseline cortisol, øget cortisol-reaktivitet og kompromitteret negativ feedback-regulering. Disse neurobiologiske forandringer opretholder en selvforstærkende cyklus af hyperarousal og anxiogenese. Målrettet trauma-processing normaliserer progressivt de biologiske markører ved at adressere den autonome dysregulering der driver de endokrine forandringer. Klinisk observeres reduktion i cortisol-niveauer, normalisering af inflammatoriske markører og forbedret neurotransmitter-balance som konsekvens af vellykket traumebehandling hos klienter med angstlidelser."
        },
        'psykobiologi-relation': {
            klient: "Vores trygge terapeutiske relation virker som den mest naturlige medicin for din biologi, fordi den direkte påvirker de kemiske processer i din krop. Hver gang du oplever ægte sikkerhed og forbindelse i vores møde, sænkes dit cortisol-niveau og produktionen af oxytocin og andre rolighedsfremmende hormoner øges mærkbart. Denne biologiske forandring sker helt automatisk når nervesystemet registrerer sikkerhed i relationen. Over tid akkumuleres disse positive biologiske erfaringer, og angsten falder som en naturlig konsekvens af kroppens ændrede kemiske balance.",
            fagfolk: "Den sikre terapeutiske alliance faciliterer direkte neurobiologiske forandringer ved angst gennem veldokumenterede mekanismer. Specifikt øger den trygge relation oxytocin-frigivelse som modulerer amygdala-reaktivitet og reducerer cortisol-produktion gennem påvirkning af HPA-aksens negative feedback. Disse neurobiologiske forandringer er ikke blot symptomatiske men repræsenterer fundamental restrukturering af de biologiske systemer der opretholder angsten. Forskning dokumenterer at kvaliteten af den terapeutiske alliance korrelerer direkte med neurobiologiske outcome-markører, hvilket understreger relationens centrale betydning som aktiv ingredient i behandling af angstlidelser."
        },
        'traumer-relation': {
            klient: "Angst-traumerne der lever i dit nervesystem kan kun heales i en kontekst af dyb og gennemgribende relationel sikkerhed, hvor dit system tør slippe sine forsvar og åbne sig for forandring. Vores terapeutiske relation skaber præcis denne sikkerhed som fundamentet for hele healingsprocessen. Uden denne trygge base ville traumearbejdet være for overvældende for dit nervesystem. Fordi traumerne ofte blev skabt i relationer, er det også i en relation de mest effektivt kan heles, og det er netop det vores samarbejde tilbyder dig.",
            fagfolk: "Trauma-baseret angst kræver etablering af en robust terapeutisk alliance som absolut forudsætning før egentlig trauma-processing kan påbegyndes sikkert og effektivt. Co-regulering inden for alliancen er den primære mekanisme der muliggør klientens engagement med traumatisk materiale uden retraumatisering. Den terapeutiske relation fungerer som en sikker container der holder den aktivering som traumearbejdet uundgåeligt genererer. Uden tilstrækkelig relational safety vil traumebehandling ved angst risikere at destabilisere klienten yderligere. Den investering der lægges i alliance-opbygning betaler sig gennem markant mere effektiv og varig traumebehandling."
        }
    }
},
   
   tilknytning: {
    name: "Tilknytning",
    circles: {
        nervesystem: {
            klient: {
                title: "Nervesystemet og Tilknytning",
                text: "Dit tilknytningsmønster er kodet dybt ind i nervesystemets automatiske reaktioner og påvirker hvordan du møder andre mennesker. Når vi regulerer nervesystemet gennem målrettede øvelser og terapeutisk arbejde, åbner vi muligheden for at skabe nye, sundere tilknytningsmønstre gennem faktiske oplevelser af sikkerhed i relationer. Dit system har brug for gentagne oplevelser af tryghed for gradvist at ændre de gamle mønstre. Denne proces kræver tålmodighed, men forandringen er dyb og varig fordi den sker på det mest grundlæggende neurologiske niveau."
            },
            fagfolk: {
                title: "Autonomt Nervesystem og Tilknytning",
                text: "Tilknytningsmønstre er fundamentalt autonome mønstre indlejret i nervesystemets basale reguleringsmekanismer. Nervesystemsregulering er en afgørende forudsætning for udvikling af earned secure attachment. Det terapeutiske arbejde fokuserer på vagal tone som basis for relationel kapacitet og affektregulering. Gennem systematisk opbygning af autonome reguleringsressourcer styrkes klientens evne til at tolerere relationel nærhed og håndtere separationsangst. Interventioner rettes mod at øge det autonome nervesystems fleksibilitet, så skift mellem tilstande af social engagement og fysiologisk ro sker mere flydende og adaptivt."
            }
        },
        polyvagal: {
            klient: {
                title: "Polyvagal og Tilknytning",
                text: "Hvert tilknytningsmønster har sin egen nervesystem-signatur, som vi kan lære at genkende sammen. Tryg tilknytning lever i den grønne zone med ro og åbenhed, mens utryg tilknytning sidder fast i gul alarmberedskab eller rød nedlukning. Vi lærer dit system at finde den grønne sikkerhed, som er fundamentet for trygge relationer. Gennem øvelser der aktiverer dit sociale engagementsystem, kan vi gradvist udvide din kapacitet til at forblive i den trygge grønne tilstand, selv når relationer bliver udfordrende eller uforudsigelige."
            },
            fagfolk: {
                title: "Polyvagal Teori og Tilknytning",
                text: "Sikker tilknytning korrelerer konsistent med ventral vagal dominans og polyvagal fleksibilitet, der muliggør adaptiv social engagement. Usikre tilknytningsmønstre viser rigid sympatisk activation ved ambivalent tilknytning eller dorsal vagal shutdown ved undvigende tilknytning. Det sociale engagementsystem udgør det neurologiske substrat for attachment-adfærd. Klinisk intervention fokuserer på at øge polyvagal fleksibilitet gennem neuroception af sikkerhed i den terapeutiske relation. Målet er at facilitere skift fra defensive autonome strategier til ventral vagal engagement som basis for earned secure attachment og relationel kapacitet."
            }
        },
        tilknytning: {
            klient: {
                title: "Forstå Dit Tilknytningsmønster",
                text: "Vi udforsker sammen dit tilknytningsmønster med nysgerrighed og respekt, ikke for at dømme det, men for at forstå det som en naturlig reaktion på dine tidlige erfaringer. Når du begynder at se mønstret tydeligt, åbner der sig nye muligheder for at skabe andre måder at være i relationer på. Dit mønster var engang den bedste strategi dit system kunne finde, og det fortjener anerkendelse. Gennem terapien udvikler vi sammen nye relationelle erfaringer, som giver dit nervesystem mulighed for at lære tryggere måder at forbinde med andre mennesker."
            },
            fagfolk: {
                title: "Tilknytningsteori i Praksis",
                text: "Adult Attachment Interview-inspireret udforskning af indre arbejdsmodeller danner grundlag for terapeutisk intervention. Fokus rettes mod reflective functioning og mentalization som primære veje til udvikling af earned secure attachment. Integration af tilknytningsteori med neurobiologisk forståelse muliggør multilevel intervention. Terapeuten vurderer klientens tilknytningsklassifikation og tilrettelægger interventioner der adresserer specifikke tilknytningsrelaterede deficit. Ved ambivalent tilknytning arbejdes med affektregulering, ved undvigende med affekttolerering og ved desorganiseret tilknytning med etablering af basal relationel sikkerhed før dybere tilknytningsarbejde påbegyndes."
            }
        },
        kropsterapi: {
            klient: {
                title: "Tilknytning i Kroppen",
                text: "Tilknytningsmønstre sidder i hvordan du holder vejret, spænder kroppen og lukker ned, når nærhed bliver overvældende. Kroppen bærer hele historien om dine tidlige relationer. Gennem kropsarbejde kan vi skabe nye fysiske oplevelser af sikkerhed, der gradvist ændrer de gamle mønstre indefra. Når kroppen lærer at slappe af i nærvær af en anden person, ændres tilknytningsmønstret på det dybeste niveau. Vi arbejder langsomt og respektfuldt med de kropslige signaler, så dit system aldrig bliver presset ud over dets grænser."
            },
            fagfolk: {
                title: "Embodied Tilknytning",
                text: "Tilknytningsmønstre manifesteres somatisk i karakteristiske mønstre af åndedræt, muskulær tonus og fascial densitet, der afspejler tidlige relationelle erfaringer. Somatisk intervention bypasser verbale forsvarsmekanismer og faciliterer reconsolidation af implicitte relationelle skemaer gennem proprioceptiv og interoceptiv re-patterning. Kropslig intervention muliggør direkte adgang til procedurale tilknytningsmønstre, som ikke er tilgængelige gennem verbal terapi alene. Fascial release i kombination med relationel sikkerhed i den terapeutiske kontekst skaber betingelser for neuroplastiske ændringer i de autonome kredsløb, der understøtter tilknytningsadfærd og relationel kapacitet."
            }
        },
        psykobiologi: {
            klient: {
                title: "Tilknytningens Biologi",
                text: "Dit tilknytningsmønster formede din biologis reaktioner på både stress og nærhed fra de allertidligste leveår. De biokemiske systemer der styrer tryghed og tilknytning blev indstillet af dine tidlige erfaringer med omsorgspersoner. Men biologien er ikke fastlåst, og det er den gode nyhed. Gennem nye gentagne oplevelser af sikkerhed og nærhed i terapien kan vi gradvist omforme de biologiske reaktionsmønstre. Din krop kan lære at producere mere af de hormoner der skaber ro og forbindelse, og mindre af dem der holder dig i alarmberedskab."
            },
            fagfolk: {
                title: "Neurobiologi af Tilknytning",
                text: "Tidlig tilknytning former HPA-akse sensitivitet, oxytocin-receptor densitet og vasopressin-system udtryk gennem epigenetiske mekanismer. Usikker tilknytning korrelerer med dysreguleret cortisol-døgnrytme, reduceret belønningsrespons i nucleus accumbens og nedsat prefrontal reguleringskapacitet. Earned secure attachment kan modificere disse biologiske signatures gennem neuroplasticitet og epigenetisk re-programmering. Terapeutisk intervention fokuserer på at genopbygge oxytocin-systemets funktion gennem gentagen relationel sikkerhed, hvorved de biologiske markører for tilknytningstryg gradvist normaliseres og klientens kapacitet for nærhed og stressregulering forbedres."
            }
        },
        traumer: {
            klient: {
                title: "Traumer i Tilknytning",
                text: "Traumer i tidlige relationer skaber en særlig form for desorganiseret tilknytning, hvor relationer opleves som både farlige og det eneste sikre sted. Det betyder at du kan svinge mellem intens længsel efter nærhed og dyb frygt for den. Det kræver ekstra forsigtighed og tålmodighed at arbejde med dette mønster, fordi tillid er det sværeste tema. I terapien bygger vi meget langsomt op, respekterer dit systems tempo, og skaber gradvist nye erfaringer af relationer, hvor sikkerhed og nærhed kan eksistere sammen."
            },
            fagfolk: {
                title: "Developmental Trauma og Tilknytning",
                text: "Developmental trauma inden for tilknytningssystemet resulterer i desorganiseret tilknytning karakteriseret ved simultane og modsatrettede attachment og defense responses. Klienten udviser paradoksal adfærd med tilnærmelse og undgåelse aktiveret samtidigt. Dette kræver langsom og systematisk etablering af relational safety før egentligt tilknytningsarbejde kan påbegyndes. Terapeuten skal navigere komplekse overføringsmønstre og opretholde konsistent tilgængelighed trods klientens modstand. Interventionsteknikker inkluderer titreret eksponering for relationel nærhed, somatisk ressourceopbygning og gradvis udvidelse af window of tolerance for tilknytningsrelaterede affekter og kropslige fornemmelser."
            }
        },
        relation: {
            klient: {
                title: "Nye Tilknytningsoplevelser",
                text: "Vores terapeutiske relation bliver det sikre sted, hvor du kan opleve tryg tilknytning, måske for første gang i dit liv. Her er det tilladt at have behov, at være sårbar, og at blive mødt med varme og forståelse. Det er netop gennem denne levende oplevelse af en anden form for relation, at gamle tilknytningsmønstre gradvist kan ændres indefra. Din hjerne og dit nervesystem har brug for faktiske oplevelser af tryghed, ikke kun forståelse. Vores relation giver dit system den erfaring det manglede."
            },
            fagfolk: {
                title: "Earned Secure Attachment",
                text: "Den terapeutiske relation fungerer som korrigerende emotionel erfaring, der direkte adresserer indre arbejdsmodeller for tilknytning. Konsistent tilgængelighed, emotionel afstemning og reparation af brud modificerer gradvist klientens forventninger til relationer. Earned secure attachment faciliteres gennem gentagen erfaring af terapeuten som secure base og safe haven. Terapeuten opretholder en konsistent og reguleret tilstedeværelse, der muliggør klientens udforskning af nye relationelle erfaringer inden for en tryg ramme. Denne proces kræver vedvarende terapeutisk engagement over tid for at konsolidere neuroplastiske ændringer i tilknytningssystemet."
            }
        }
    },
    connections: {
        'nervesystem-polyvagal': {
            klient: "Tilknytningsmønstre er kodet som automatiske nervesystem-reaktioner, der aktiveres i relationer til andre mennesker. Polyvagal forståelse viser os, hvordan tryg tilknytning lever i den grønne sikre tilstand med ro og åbenhed. Når vi forstår denne forbindelse, kan vi arbejde målrettet med at hjælpe dit nervesystem til at finde den grønne zone oftere, især i nære relationer. Vi bruger konkrete øvelser, der styrker din evne til at forblive tryg og forbundet, selv når relationer udfordrer dig.",
            fagfolk: "Tilknytningsmønstre manifesteres som specifikke polyvagale profiler med karakteristiske autonome reaktionsmønstre. Sikker tilknytning korrelerer konsistent med ventral vagal fleksibilitet og evne til social engagement under moderate udfordringer. Usikre mønstre afspejler rigid autonome strategier, hvor sympatisk hyperactivation kendetegner ambivalent tilknytning og dorsal vagal dominans karakteriserer undvigende tilknytning. Klinisk intervention fokuserer på at genopbygge polyvagal fleksibilitet som neurologisk forudsætning for relationel kapacitet og tilknytningssikkerhed. Dette indebærer systematisk vagal toning og neuroceptiv kalibrering."
        },
        'nervesystem-tilknytning': {
            klient: "Når vi arbejder med nervesystemet, arbejder vi direkte med dine tilknytningsmønstre, fordi de i bund og grund er det samme. Dit nervesystem lærte at reagere på bestemte måder i dine tidligste relationer, og disse reaktioner gentager sig automatisk i voksne relationer. Ved at regulere nervesystemet skaber vi nye muligheder for, hvordan du kan være i kontakt med andre. Gradvist lærer dit system, at nærhed kan være sikker, og at du kan bevare din ro, selv når du er tæt forbundet med et andet menneske.",
            fagfolk: "Tilknytningsintervention er fundamentalt nervesystemsintervention, idet tilknytningsmønstre er lagret som autonome reaktionsmønstre. Earned secure attachment kræver autonome modifikationer på det procedurale niveau, som ikke kan opnås gennem kognitiv indsigt alene. Effektiv intervention kombinerer top-down og bottom-up strategier for at adressere de autonome tilknytningsskemaer. Nervesystemsregulering etablerer den fysiologiske kapacitet, der er nødvendig for at tolerere relationel nærhed og separationsangst. Denne forståelse integrerer neurobiologisk viden med tilknytningsteori og danner grundlag for somatisk orienteret tilknytningsarbejde."
        },
        'nervesystem-kropsterapi': {
            klient: "Tilknytningsmønstre sidder dybt i kroppen som fysiske spændingsmønstre og åndedrætsrestriktioner. Kropsarbejde ændrer derfor både nervesystem og tilknytning samtidigt, fordi det adresserer mønstrene direkte der, hvor de lever. Når vi arbejder med kroppen i en tryg terapeutisk relation, lærer dit system helt nye måder at reagere på i nærheden af andre. De fysiske forandringer er med til at åbne for emotionel fleksibilitet og større kapacitet til at være til stede i relationer med både tryghed og åbenhed.",
            fagfolk: "Tilknytningsmønstre er embodied i karakteristiske somatiske konfigurationer, der opretholder autonome reaktionsmønstre. Somatisk intervention modificerer både autonome mønstre og relationelle skemaer simultant, da disse er neurobiologisk integrerede. Fascial release og proprioceptiv re-patterning adresserer de procedurale tilknytningsmønstre direkte i det somatiske felt. Denne tilgang er særligt effektiv, fordi verbale interventioner sjældent når de implicitte lag, hvor tilknytningsstrategier er lagret. Kropslig intervention i kombination med relationel sikkerhed skaber optimale betingelser for reconsolidation af tilknytningsrelaterede neurale netværk."
        },
        'nervesystem-psykobiologi': {
            klient: "Tilknytningsmønstre formede din biologi allerede fra de tidligste leveår og påvirkede, hvordan din krop håndterer stress og nærhed. Ved at arbejde med nervesystemet omformer vi gradvist biologien, så de kemiske processer der styrer tryghed og forbindelse kan normaliseres. Din krop lærer at producere mere af de hormoner der skaber ro og tilknytning, når den gentagne gange oplever sikkerhed i relationer. Denne biologiske forandring er dyb og varig, fordi den sker på det mest grundlæggende niveau i dit system og påvirker alt.",
            fagfolk: "Tilknytning præger neurobiologi gennem epigenetiske mekanismer og erfaring-afhængig neural udvikling fra de tidligste leveår. Nervesystemsregulering kan modificere HPA-akse sensitivitet og oxytocin-systemer, der blev formet af early attachment erfaringer. Gennem systematisk autonome reguleringsintervention normaliseres cortisol-døgnrytme og oxytocin-receptor udtryk gradvist. Denne neurobiologiske modifikation understøtter øget kapacitet for relationel nærhed og stressregulering i tilknytningskontekster. Forskning dokumenterer at earned secure attachment medfører målbare ændringer i disse biologiske systemer, der nærmer sig profilen for primær sikker tilknytning."
        },
        'nervesystem-traumer': {
            klient: "Tilknytningstraumer sidder dybt i nervesystemet som automatiske forsvarsreaktioner, der blev dannet i dine tidligste og vigtigste relationer. Healing kræver derfor særlig forsigtighed og en langsom, respektfuld opbygning af sikkerhed i vores terapeutiske relation. Vi presser aldrig på, men følger dit systems tempo og kapacitet. Gradvist lærer dit nervesystem at skelne mellem fortid og nutid, og at nærhed kan være sikker. Denne proces kræver tålmodighed, men de forandringer der sker, er dybt forankrede og varige, fordi de sker på det autonome niveau.",
            fagfolk: "Developmental trauma skaber desorganiseret tilknytning med komplekse autonome mønstre, hvor attachment-søgning og defense-responses aktiveres simultant. Dette kræver robuste interventionsteknikker, der kan adressere paradoksale autonome tilstande. Terapeuten må navigere kompleks overføring og opretholde reguleret tilstedeværelse trods klientens modsatrettede signaler. Intervention fokuserer på at etablere basal autonome stabilitet og gradvis udvidelse af window of tolerance for tilknytningsrelaterede affekter. Somatisk ressourceopbygning kombineret med titreret relationel eksponering skaber forudsætninger for at integrere fragmenterede tilknytningserfaringer og udvikle sammenhængende narrativ."
        },
        'nervesystem-relation': {
            klient: "Dit nervesystem lærer nye tilknytningsmønstre gennem vores trygge terapeutiske relation, fordi det er i samspillet mellem to mennesker, at tilknytning formes. Når du gentagne gange oplever at blive mødt med ro, afstemning og tilgængelighed, begynder dit system at justere sine forventninger til, hvad relationer kan være. Denne læring sker automatisk på det autonome niveau og kræver ikke kognitiv indsats. Min opgave er at tilbyde en konsistent og tryg tilstedeværelse, som dit nervesystem gradvist kan internalisere som en ny model for sikker tilknytning.",
            fagfolk: "Den terapeutiske relation faciliterer earned secure attachment gennem konsistent co-regulering og autonome modifikationer, der opstår i det intersubjektive felt. Terapeutens ventral vagale tilstand fungerer som neural skabelon for klientens autonome reorganisering. Gentagen erfaring af emotionel afstemning og reparation modificerer indre arbejdsmodeller på det procedurale niveau. Neuroplasticitet i autonome kredsløb muliggør gradvis internalisering af nye relationelle forventninger. Denne proces kræver vedvarende terapeutisk engagement over tid for at konsolidere ændringer i tilknytningssystemets neurale arkitektur og opbygge robust kapacitet for relationel nærhed."
        },
        'polyvagal-tilknytning': {
            klient: "Hvert tilknytningsmønster har sin egen polyvagale signatur, der bestemmer hvordan dit nervesystem reagerer i relationer. Tryg tilknytning lever i den grønne zone med åbenhed og ro, mens utryg tilknytning holder systemet fast i gul alarmberedskab eller rød nedlukning. Ved at forstå denne sammenhæng kan vi arbejde målrettet med at udvide din grønne zone i relationer. Gennem øvelser og den terapeutiske relation lærer dit system gradvist, at det er sikkert at forblive i den åbne, forbundne tilstand, selv når relationer bliver intense.",
            fagfolk: "Tilknytningsmønstre korrelerer med specifikke polyvagale profiler og autonome response-patterns, der er empirisk dokumenterede. Sikker tilknytning afspejler ventral vagal dominans med fleksibel autonome oscillation. Ambivalent tilknytning viser sympatisk hyperactivation med nedsat vagal brake funktion, mens undvigende tilknytning karakteriseres af dorsal vagal engagement med begrænset social engagement kapacitet. Desorganiseret tilknytning udviser kaotisk skift mellem alle tre autonome tilstande. Klinisk intervention tilrettelægges specifikt efter den polyvagale profil for at adressere de autonome mekanismer, der opretholder det usikre tilknytningsmønster."
        },
        'polyvagal-kropsterapi': {
            klient: "Kropsarbejde aktiverer den grønne sikre tilstand, som er det helt grundlæggende fundament for at opleve tryg tilknytning. Når kroppen finder ro og åbenhed gennem berøring og åndedrætsøvelser, skabes der et fysiologisk grundlag for at kunne være nærværende i relationer. Dit system lærer at nærhed er forbundet med sikkerhed frem for fare. Vi arbejder med konkrete teknikker, der styrker din krops evne til at forblive i den grønne zone, så du gradvist kan tåle mere intimitet og forbindelse med andre mennesker uden at gå i forsvar.",
            fagfolk: "Somatisk intervention aktiverer ventral vagale pathways, der er nødvendige for secure attachment kapacitet og social engagement. Fascial release reducerer den kroniske muskulære hypertonus, der opretholder sympatiske eller dorsale autonome mønstre. Åndedrætsinterventioner styrker respiratory sinus arrhythmia og vagal brake funktion. Proprioceptiv stimulation via kropsarbejde øger interoceptiv bevidsthed og faciliterer neuroception af sikkerhed i relationel kontekst. Denne kombination af somatiske interventioner genopbygger den fysiologiske kapacitet for ventral vagal engagement, som er det neurologiske fundament for tilknytningsadfærd og relationel tilgængelighed."
        },
        'polyvagal-psykobiologi': {
            klient: "Den grønne sikre tilstand skaber den optimale biologi, der muliggør tryg tilknytning og dybe forbindelser med andre mennesker. Når dit nervesystem er i grøn zone, producerer kroppen naturligt de hormoner der fremmer tryghed, nærhed og tillid. Stresshormonerne falder, og dit system kan fokusere sin energi på forbindelse frem for forsvar. Denne biologiske tilstand er fundamentet for at kunne danne og vedligeholde sunde relationer. Vi arbejder målrettet med at hjælpe dit system til at opholde sig i denne tilstand oftere og længere.",
            fagfolk: "Ventral vagal dominans optimerer de neurobiologiske systemer, der understøtter secure attachment og relationel kapacitet. Ventral vagal aktivering fremmer oxytocin-frigivelse, reducerer cortisol-reaktivitet og styrker dopaminerge belønningskredsløb forbundet med social forbindelse. Denne polyvagale tilstand muliggør optimal funktion af det sociale engagementsystem og dets neurobiologiske substrater. Gennem systematisk intervention, der øger ventral vagal tone, kan de biologiske forudsætninger for tilknytningssikkerhed gradvist genopbygges. Forskning viser at vedvarende ventral vagal dominans medfører epigenetiske ændringer, der konsoliderer biologisk kapacitet for relationel nærhed."
        },
        'polyvagal-traumer': {
            klient: "Tilknytningstraumer låste dit system fast i usikre tilstande, hvor enten gul alarm eller rød nedlukning blev din konstante følgesvend i relationer. Grøn sikkerhed er vejen til healing, fordi det kun er fra denne trygge base, at traumerne forsigtigt kan bearbejdes. Vi bygger langsomt op og respekterer dit systems tempo, så du aldrig bliver overvældet. Først når den grønne zone er robust nok, begynder vi forsigtigt at berøre de smertefulde tilknytningserfaringer, altid med mulighed for at vende tilbage til sikkerhed.",
            fagfolk: "Developmental trauma dysregulerer polyvagale responses og skaber kaotiske autonome mønstre med utilstrækkelig ventral vagal kapacitet. Ventral vagal etablering er en absolut forudsætning for tilknytningsarbejde ved traumatiserede klienter. Uden tilstrækkelig ventral vagal ressource vil aktivering af tilknytningsrelateret materiale medføre retraumatisering. Klinisk protokol prioriterer systematisk opbygning af vagal tone gennem somatiske interventioner og co-regulering, før traumeprocessering påbegyndes. Titreret oscillation mellem ventral vagal sikkerhed og kontrolleret aktivering af tilknytningsmateriale faciliterer gradvis integration uden at overvælde det autonome system."
        },
        'polyvagal-relation': {
            klient: "Min grønne ro og trygge tilstedeværelse lærer dit system, hvad tryg tilknytning føles som, gennem vores terapeutiske relation. Når du sidder sammen med et menneske, der er i den grønne zone, begynder dit eget nervesystem automatisk at spejle denne tilstand. Denne co-regulering er en dyb biologisk proces, der ikke kræver ord eller forklaring. Over tid internaliserer dit system denne oplevelse af ro og sikkerhed, så den bliver en del af din egen kapacitet til at finde tryghed i relationer til andre mennesker.",
            fagfolk: "Terapeutens ventral vagale tilstand co-regulerer klientens autonome system og faciliterer secure attachment learning gennem interpersonel neurobiologisk synkronisering. Terapeutens regulerede tilstedeværelse aktiverer klientens social engagement system og neuroception af sikkerhed. Denne co-regulering modellerer den tidlige omsorgsgiver-barn interaktion og tilbyder en korrigerende neurobiologisk erfaring. Gennem gentagen eksponering for terapeutens ventral vagale tilstand opbygger klienten intern kapacitet for autonome selvregulering i tilknytningskontekster. Processen faciliterer neuroplastiske ændringer i autonome kredsløb, der understøtter vedvarende forbedring af relationel kapacitet."
        },
        'tilknytning-kropsterapi': {
            klient: "Tilknytningsmønstre lever i kroppen som fysiske spændinger, åndedrætsrestriktioner og automatiske reaktioner på nærhed. Kropsarbejde skaber nye, direkte oplevelser af sikkerhed på det fysiske plan, som dit nervesystem kan integrere. Når kroppen lærer at slappe af i nærvær af en anden, ændres tilknytningsmønstret indefra. Vi arbejder langsomt og opmærksomt med de kropslige signaler, der fortæller om gamle tilknytningsmønstre. Gennem berøring og bevægelse i en tryg ramme opstår der nye erfaringer, som gradvist erstatter de gamle mønstre med mere fleksible reaktioner.",
            fagfolk: "Embodied tilknytningsmønstre modificeres effektivt gennem proprioceptiv og interoceptiv re-patterning, der adresserer de procedurale lag hvor tilknytningsstrategier er lagret. Somatisk intervention tilbyder direkte adgang til implicitte relationelle skemaer, som ikke er tilgængelige via verbal terapi. Fascial release kombineret med relationel sikkerhed faciliterer reconsolidation af tilknytningsrelaterede somatiske mønstre. Kropslig intervention er særligt indiceret ved undvigende tilknytning, hvor kroppen er den primære kanal for at nå de afspaltet tilknytningsbehov. Proprioceptiv stimulation styrker interoceptiv bevidsthed og øger klientens kapacitet for somatisk ressourcering."
        },
        'tilknytning-psykobiologi': {
            klient: "Tidlig tilknytning formede din biologi på grundlæggende måder, der stadig påvirker, hvordan du reagerer på nærhed og stress i relationer. Men ny, sikker tilknytning kan omforme den biologi, der blev skabt af usikre tidlige erfaringer. Når du gentagne gange oplever tryghed i vores terapeutiske relation, begynder din krop at producere mere af de hormoner, der fremmer ro og forbindelse. Denne biologiske forandring sker gradvist, men den er ægte og varig, og den betyder at relationer langsomt begynder at føles mere sikre og behagelige.",
            fagfolk: "Tilknytningsmønstre præger HPA-akse sensitivitet, oxytocin-receptor densitet og cortisol-reaktivitet gennem epigenetiske mekanismer etableret i tidlig udvikling. Earned secure attachment kan modificere disse biologiske signatures, som dokumenteret i longitudinelle studier. Terapeutisk intervention rettet mod tilknytningssikkerhed medfører målbare ændringer i neurobiologiske markører over tid. Normalisering af oxytocin-system funktion og HPA-akse regulering understøtter øget kapacitet for relationel nærhed og stresshåndtering i tilknytningskontekster. Denne biologiske modifikation konsoliderer de psykologiske ændringer opnået gennem tilknytningsfokuseret terapi og sikrer varig forandring."
        },
        'tilknytning-traumer': {
            klient: "Traumer i tidlige tilknytningsrelationer skaber en særlig smertefuld situation, hvor den person der burde være sikkerhed samtidig var kilden til fare. Det kræver ekstra forsigtighed at arbejde med dette, fordi det at have brug for et andet menneske kan føles livsfarligt. I terapien respekterer vi denne kompleksitet og arbejder i dit tempo. Vi bygger langsomt en ny erfaring af, at relationer kan rumme både nærhed og sikkerhed. Denne proces kræver tålmodighed, men den skaber dyb og varig forandring.",
            fagfolk: "Developmental trauma inden for tilknytningssystemet resulterer i desorganiseret tilknytning med simultane modsatrettede impulser, hvor attachment-søgning og defense-responses aktiveres samtidigt. Langsom og systematisk safety-etablering er absolut påkrævet før egentligt tilknytningsarbejde kan påbegyndes. Terapeuten navigerer komplekse overføringsmønstre og opretholder konsistent tilgængelighed trods klientens modstand og push-pull dynamik. Titreret eksponering for relationel nærhed kombineret med somatisk ressourceopbygning skaber gradvist udvidet window of tolerance for tilknytningsrelaterede affekter. Behandlingsforløbet kræver typisk længere varighed end andre tilknytningsmønstre."
        },
        'tilknytning-relation': {
            klient: "Vores terapeutiske relation bliver det trygge sted, hvor du kan opleve sikker tilknytning, måske for første gang eller igen efter lang tid. Her er der plads til at udforske, hvad det vil sige at være i en relation, hvor du bliver mødt med konsistent varme og tilgængelighed. Gamle tilknytningsmønstre vil naturligt dukke op i vores relation, og det er netop det der gør det muligt at arbejde med dem. Hver gang vi sammen navigerer en udfordring i relationen, skabes der en ny erfaring, som langsomt omformer dine forventninger.",
            fagfolk: "Den terapeutiske relation fungerer som korrigerende emotionel erfaring, der direkte modificerer indre arbejdsmodeller gennem konsistent tilgængelighed, emotionel afstemning og reparation af brud. Terapeuten tilbyder sig som secure base og safe haven, og den gentagne erfaring af dette relationsformat muliggør gradvis internalisering af nye tilknytningsforventninger. Earned secure attachment faciliteres gennem vedvarende terapeutisk engagement, hvor klienten eksponeres for en konsistent relationel kontekst, der adskiller sig kvalitativt fra tidlige tilknytningserfaringer. Reparation af relationelle brud er særligt terapeutisk, da det modificerer forventningen om permanent relationelt tab."
        },
        'kropsterapi-psykobiologi': {
            klient: "Kropsarbejde skaber nye tilknytningsoplevelser på det fysiske plan, som direkte ændrer biologien i en positiv retning. Når kroppen oplever sikkerhed og ro i nærvær af et andet menneske, frigives hormoner der fremmer tilknytning og tryghed. Stresshormoner reduceres, og systemet begynder at fungere mere optimalt. Denne biologiske forandring understøtter din evne til at være i relationer med større åbenhed og mindre forsvar. Over tid akkumulerer disse erfaringer sig og skaber varige forandringer i den biologi, der styrer dine tilknytningsreaktioner i hverdagen.",
            fagfolk: "Somatisk intervention påvirker direkte de neurobiologiske systemer, der understøtter attachment kapacitet og relationel funktion. Fascial release og vagus-aktivering modulerer oxytocin-frigivelse og cortisol-reaktivitet. Proprioceptiv re-patterning påvirker afferente vagale pathways, der modulerer HPA-akse funktion og neurobiologisk stress-reaktivitet. Denne somatisk-biologiske kaskade faciliterer genopbygning af de neurobiologiske forudsætninger for sikker tilknytning. Kropslig intervention er særligt effektiv, fordi den adresserer tilknytningsmønstre på det procedurale niveau, hvor biologisk modifikation kan ske direkte uden kognitivt mellemled."
        },
        'kropsterapi-traumer': {
            klient: "Tilknytningstraumer sidder frosset i kroppen som fysiske spændinger, nedlukning og automatiske forsvarsreaktioner. Forsigtigt kropsarbejde kan hjælpe med at integrere det, der blev splittet af traumatiske tilknytningserfaringer. Vi arbejder langsomt og i dit tempo, så kroppen aldrig bliver presset ud over sin grænse. Når kroppen gradvist lærer at slippe de gamle forsvarsmønstre, åbner der sig nye muligheder for at opleve nærhed som trygt. Denne fysiske integration er en vigtig del af helingsprocessen, fordi tilknytningstraumer primært er lagret i kroppen.",
            fagfolk: "Developmental trauma manifesteres somatisk i karakteristiske spændingsmønstre, fasciale restriktioner og autonome dysreguleringsmønstre. Titreret somatisk intervention faciliterer integration af fragmenterede tilknytningsrelaterede somatiske erfaringer uden at overvælde systemet. Terapeuten modulerer intensiteten af kropslig intervention baseret på klientens autonome tilstand og window of tolerance. Fascial release kombineret med relationel sikkerhed muliggør completion af frosne forsvarsresponser. Denne somatiske tilgang er særligt indiceret ved developmental trauma, hvor de traumatiske erfaringer er prælinguistisk og derfor primært tilgængelige gennem det somatiske felt."
        },
        'kropsterapi-relation': {
            klient: "Tryg berøring i vores terapeutiske relation lærer din krop, at tilknytning kan være sikker og behagelig. For mange mennesker med utryg tilknytning er kroppen det sted, hvor forandringen begynder, fordi den fysiske oplevelse af sikkerhed er mere overbevisende end ord alene. Når du mærker ro og tryghed i kroppen, mens du er i kontakt med et andet menneske, skabes der en dyb, ny erfaring. Denne kropslige læring integrerer sig med de emotionelle og relationelle forandringer og skaber et solidt fundament for tryggere tilknytning.",
            fagfolk: "Terapeutisk touch kombineret med relational safety skaber optimale betingelser for modifikation af embodied tilknytningsmønstre. Den somatiske intervention inden for en sikker relationel ramme adresserer simultant de kropslige, autonome og relationelle dimensioner af tilknytning. Tryg berøring aktiverer oxytocin-systemet og faciliterer neuroception af sikkerhed, mens den relationelle kontekst muliggør reconsolidation af implicitte tilknytningsforventninger. Denne kombination er klinisk potent, fordi den tilbyder en korrigerende erfaring på det procedurale niveau, hvor tilknytningsmønstre originalt blev etableret gennem tidlig berøring og omsorg."
        },
        'psykobiologi-traumer': {
            klient: "Tilknytningstraumer ændrede din biologi grundlæggende og skabte en krop, der konstant er på vagt i relationer. Healing af disse traumer normaliserer gradvist de biologiske systemer, der styrer tryghed og forbindelse. Når dit nervesystem lærer, at relationer kan være sikre, begynder kroppen at producere mere af de hormoner, der fremmer ro og tilknytning. Stresshormoner falder, og systemet finder en ny balance, der understøtter din evne til at være i nære relationer uden konstant alarmberedskab. Denne biologiske normalisering er en central del af healing.",
            fagfolk: "Developmental trauma modificerer neurobiologi grundlæggende med dysreguleret HPA-akse, reduceret oxytocin-receptor densitet og øget inflammatorisk aktivitet. Tilknytningsarbejde kan gradvist normalisere disse biologiske signatures gennem neuroplasticitet og epigenetisk re-programmering. Systematisk intervention rettet mod at genopbygge tilknytningssikkerhed medfører målbare ændringer i cortisol-reaktivitet, oxytocin-niveau og inflammatoriske markører over tid. Denne biologiske normalisering understøtter og konsoliderer de psykologiske forandringer opnået i terapi. Forskning dokumenterer at earned secure attachment efter developmental trauma medfører biologiske profiler der nærmer sig normal variation."
        },
        'psykobiologi-relation': {
            klient: "Vores trygge terapeutiske relation er biologisk medicin, der aktivt skaber tilknytningssikkerhed i din krop. Hver gang du oplever ro og tryghed i vores samvær, frigives hormoner, der fremmer forbindelse og reducerer stress. Over tid akkumulerer disse biologiske forandringer sig og skaber et nyt fundament for, hvordan din krop reagerer i relationer. Det er som om din biologi langsomt kalibrerer sig til en ny virkelighed, hvor nærhed er forbundet med sikkerhed og velvære. Denne biologiske forandring er dyb, varig og understøtter alle andre aspekter af din udvikling.",
            fagfolk: "Den terapeutiske alliance modificerer direkte oxytocin og cortisol-systemer og faciliterer det biologiske grundlag for secure attachment. Gentagen co-regulering i den terapeutiske relation stimulerer oxytocin-frigivelse og reducerer HPA-akse reaktivitet. Disse neurobiologiske ændringer understøtter øget kapacitet for relationel nærhed og stresshåndtering i tilknytningskontekster. Forskning dokumenterer at kvaliteten af den terapeutiske alliance korrelerer med biologiske markører for tilknytningssikkerhed over tid. Denne evidens understøtter den kliniske prioritering af allianceopbygning som primær intervention ved tilknytningsrelaterede problematikker og biologisk dysregulering."
        },
        'traumer-relation': {
            klient: "Tilknytningstraumer kan kun heales i dyb relationel sikkerhed, fordi det netop var i relationer, at skaden opstod. Vores terapeutiske relation bliver det helende rum, hvor nye erfaringer af tilknytning kan finde sted. Vi bygger langsomt op og respekterer dit systems behov for kontrol og distance. Gradvist udvider vi sammen det rum, hvor du kan være sårbar og forbundet. Denne proces kræver stor tålmodighed fra os begge, men den skaber forandringer på det dybeste niveau, fordi den adresserer selve kernen i tilknytningstraumet.",
            fagfolk: "Developmental trauma kræver en robust terapeutisk alliance, der er etableret før processing af tilknytningsrelateret traumemateriale kan påbegyndes. Relational safety er den absolutte forudsætning for ethvert tilknytningsarbejde ved developmental trauma. Terapeuten må konsistent demonstrere tilgængelighed, afstemning og reparation for gradvist at modificere klientens forventninger om relationel fare. Allianceopbygning ved desorganiseret tilknytning er en langvarig proces, der kræver terapeutens tolerance for paradoksal adfærd og modoverføring. Den terapeutiske relation fungerer simultant som interventionskontekst og primær korrigerende erfaring ved tilknytningstraumer."
        }
    }
},
    stress: {
    name: "Stress",
    circles: {
        nervesystem: {
            klient: {
                title: "Nervesystemet under Stress",
                text: "Stress er når nervesystemet kører i overtid uden at få de nødvendige pauser til restitution og genopladning. Dit system er fanget i en konstant alarmberedskabstilstand, der langsomt slider kroppen ned. Vi arbejder med at lære dit system at skifte gear, så du kan mobilisere energi, når det virkelig er nødvendigt, men også finde dyb hvile bagefter. Gennem konkrete øvelser og terapeutisk arbejde genopbygger vi den naturlige balance mellem aktivitet og ro, som er afgørende for dit helbred og velvære."
            },
            fagfolk: {
                title: "Stressregulering via ANS",
                text: "Kronisk stress repræsenterer manglende polyvagal fleksibilitet med vedvarende fastholdelse i sympatisk activation uden tilstrækkelig ventral vagal recovery. Det terapeutiske fokus rettes mod genopbygning af vagal brake-funktion og restoration af den naturlige autonome oscillation mellem activation og restoration. Interventioner inkluderer systematisk vagal toning gennem åndedrætsøvelser, somatisk intervention og co-regulering i den terapeutiske relation. Målet er at genopbygge det autonome nervesystems fleksibilitet, så klienten kan mobilisere energi adaptivt under udfordringer og returnere til fysiologisk ro efterfølgende."
            }
        },
        polyvagal: {
            klient: {
                title: "Polyvagal Forståelse af Stress",
                text: "Stress er at sidde fast i den gule alarmzone uden at finde vej tilbage til den grønne sikre tilstand med ro og balance. Dit nervesystem er konstant på vagt og bruger enorm energi på at opretholde denne tilstand. Vi finder sammen de konkrete triggere, der sender dig i stress, og lærer dig effektive veje tilbage til den sikre grønne tilstand. Gennem øvelser, der aktiverer dit sociale engagementsystem og styrker din vagale bremse, genopbygger vi din evne til at pendulere naturligt mellem aktivering og dybere afslapning."
            },
            fagfolk: {
                title: "Polyvagal Teori ved Stress",
                text: "Kronisk stress er karakteriseret ved vedvarende sympatisk dominans uden tilstrækkelig ventral vagal recovery og markant nedsat vagal brake funktion. Den autonome fleksibilitet, der muliggør adaptiv oscillation mellem activation og restoration, er kompromitteret. Intervention fokuserer på aktivering af det sociale engagementsystem og restoration af respiratory sinus arrhythmia som markør for vagal tone. Kliniske teknikker inkluderer prosodisk stimulation, åndedrætsøvelser med forlænget udånding og co-regulering i den terapeutiske relation. Systematisk genopbygning af ventral vagal kapacitet er fundamentet for varig stressreduktion og autonome fleksibilitet."
            }
        },
        tilknytning: {
            klient: {
                title: "Tilknytning og Stress",
                text: "Hvis du voksede op uden pålidelig hjælp til at regulere stress, har dit system aldrig rigtig lært, hvordan det gøres. Den tidlige co-regulering med omsorgspersoner er fundamentet for vores evne til at håndtere stress som voksne. Vi skaber den manglende co-regulering nu i vores terapeutiske relation, så dit system gradvist lærer at stresse ned og finde ro. Gennem gentagne oplevelser af at blive hjulpet med at finde balance, opbygger dit nervesystem nye veje til selvregulering, som bliver stærkere over tid og giver varig forandring."
            },
            fagfolk: {
                title: "Tilknytning og Stressregulering",
                text: "Manglende early co-regulation resulterer i vedvarende deficits i kapaciteten for selvregulering af stress gennem hele livsforløbet. Usikker tilknytning korrelerer konsistent med dysreguleret HPA-akse, øget stress-vulnerabilitet og reduceret stressresiliens. Terapeutisk co-regulation tilbyder en korrigerende relationel erfaring, der gradvist lærer systemet nye stress-respons mønstre. Gennem gentagen erfaring af reguleret tilstedeværelse i den terapeutiske relation opbygger klienten internaliserede reguleringsressourcer. Denne proces bygger på neuroplasticitet i autonome kredsløb og muliggør gradvis modifikation af de stress-reaktionsmønstre, der blev etableret i tidlige tilknytningsrelationer."
            }
        },
        kropsterapi: {
            klient: {
                title: "Stress i Kroppen",
                text: "Stress manifesterer sig som spændinger i nakke og skuldre, hovedpine, dårlig søvn, fordøjelsesproblemer og generel uro i kroppen. Disse fysiske symptomer er kroppen signal om, at nervesystemet er overbelastet. Gennem målrettet behandling og åndedrætsarbejde hjælper vi kroppen med fysisk at slippe de fastlåste stress-mønstre. Når musklerne slipper deres spænding og åndedrættet bliver dybere og friere, sender kroppen signaler til hjernen om, at det er sikkert at slappe af. Denne kropslige vej til stressreduktion er dyb og effektiv."
            },
            fagfolk: {
                title: "Somatisk Stressintervention",
                text: "Stress-relateret muskulær hypertonus og fasciale restriktioner opretholder autonome stress-responses gennem afferente feedback-loops, der fastholder sympatisk dominans. Direkte somatisk intervention via fascial release og vagus-aktivering gennem diafragmatisk åndedræt modulerer HPA-akse reaktivitet og reducerer cortisol-produktion. Behandling af specifikke somatiske stress-markører som cervical hypertonus, thorakal restriktion og diafragmatisk spænding adresserer de kropslige mekanismer, der opretholder kronisk stress. Somatisk intervention kombineret med co-regulering i den terapeutiske relation skaber optimale betingelser for genopbygning af autonome fleksibilitet og varig stressreduktion."
            }
        },
        psykobiologi: {
            klient: {
                title: "Stress-biologien",
                text: "Ved kronisk stress producerer kroppen konstant cortisol og andre stresshormoner, hvilket gradvist nedslider hele systemet og påvirker immunforsvar, fordøjelse, søvn og kognition. Din krop er i konstant alarmberedskab, og det tærer på alle organsystemer over tid. Vi arbejder målrettet med at normalisere din biologi, så kroppen kan hele og restituere sig igen. Gennem nervesystemsregulering, åndedrætsøvelser og den trygge terapeutiske relation kan de biologiske stress-markører gradvist vende tilbage til normale niveauer, og din krop genfinder sin naturlige balance."
            },
            fagfolk: {
                title: "Neurobiologi ved Kronisk Stress",
                text: "Kronisk stress dysregulerer HPA-aksen med afladning af cortisol-døgnrytme, reduceret DHEA-produktion, øgede inflammatoriske cytokiner og kompromitteret immunfunktion. Vedvarende sympatisk dominans medfører kardiovaskulær belastning og metabolisk dysregulering. Autonomt nervesystem-regulering kan normalisere disse biomarkører gennem systematisk restoration af vagal tone og genopbygning af den parasympatiske modvægt til kronisk sympatisk activation. Interventioner rettet mod respiratory sinus arrhythmia og barorefleks-sensitivitet har dokumenteret effekt på normalisering af HPA-akse funktion. Biologisk monitorering kan anvendes til at evaluere behandlingsrespons."
            }
        },
        traumer: {
            klient: {
                title: "Traumer og Stress",
                text: "Meget kronisk stress har rødder i gamle traumer, hvor dit system lærte, at verden er et farligt sted, og alarmberedskabet aldrig rigtig blev slukket. De traumatiske oplevelser programmerede dit nervesystem til konstant vagtsomhed, som nu opleves som vedvarende stress. Vi arbejder forsigtigt med at heale de underliggende traumer, så stress-responsen gradvist kan normaliseres og dit system kan finde den ro det fortjener. Denne tilgang adresserer årsagen til stressen frem for kun symptomerne og skaber derfor dybere og mere varig forandring i din hverdag."
            },
            fagfolk: {
                title: "Traumatisk Stress",
                text: "PTSD og developmental trauma skaber persisterende baseline hyperarousal med forhøjet sympatisk tonus og nedsat vagal brake funktion. Incomplete fight og flight responses opretholdes som kronisk stress i form af fastfrosne defensive mønstre i det autonome nervesystem. Trauma-processing gennem somatic experiencing faciliterer completion af disse ufuldstændige forsvarsresponser og reducerer derved stress-symptomer. Interventionen fokuserer på titreret aktivering inden for window of tolerance, hvilket muliggør gradvis aflading af traumatisk energi. Somatisk orienteret traumebearbejdning adresserer de autonome mekanismer, der opretholder kronisk stress."
            }
        },
        relation: {
            klient: {
                title: "Relationel Ro ved Stress",
                text: "I vores trygge terapeutiske relation lærer dit nervesystem, at det er okay at slippe kontrollen og give slip på den konstante vagtsomhed. Min ro og regulerede tilstedeværelse bliver en model for dit eget system. Når du gentagne gange oplever at være i nærvær af et roligt nervesystem, begynder dit eget system at spejle denne tilstand. Det er sådan stress-mønstre kan ændres fundamentalt fra bunden. Denne relationelle co-regulering opbygger gradvist din egen kapacitet til at finde ro, også uden for terapirummet og i hverdagens udfordringer."
            },
            fagfolk: {
                title: "Co-regulering af Stress",
                text: "Terapeutens ventral vagale tilstand fungerer som ekstern regulator af klientens stress-response gennem interpersonel neurobiologisk synkronisering. Gentagen co-regulation i den terapeutiske relation opbygger gradvist intern kapacitet til selvregulering gennem neuroplasticitet i autonome kredsløb. Terapeutens konsistente regulerede tilstedeværelse tilbyder en neural skabelon for klientens autonome reorganisering. Denne proces rekapitulerer den tidlige omsorgsgiver-barn co-regulering og tilbyder en korrigerende erfaring for klienter med utilstrækkelig tidlig regulering. Effekten konsolideres over tid og generaliserer til klientens øvrige relationer og stresshåndtering."
            }
        }
    },
    connections: {
        'nervesystem-polyvagal': {
            klient: "Stress er nervesystemet fanget i gul alarm uden mulighed for at finde ro og restitution. Polyvagal forståelse giver os et konkret landkort, der viser vejen tilbage til den grønne sikre tilstand. Når vi forstår præcis, hvilke mekanismer der holder dig fast i stress-tilstanden, kan vi arbejde målrettet med at aktivere de systemer, der bringer dig tilbage til ro. Øvelser der styrker din vagale bremse og aktiverer dit sociale engagementsystem er nøglen til at genoprette den naturlige balance mellem aktivering og afslapning.",
            fagfolk: "Kronisk stress repræsenterer sympatisk dominans uden tilstrækkelig ventral vagal recovery og kompromitteret autonome fleksibilitet. Polyvagal intervention restaurerer denne fleksibilitet gennem målrettet aktivering af ventral vagale pathways. Kliniske teknikker fokuserer på at styrke vagal brake funktion og genopbygge respiratory sinus arrhythmia som markør for autonome reguleringskapacitet. Social engagement system aktivering gennem prosodisk stimulation og relationel co-regulering understøtter denne proces. Systematisk polyvagal intervention adresserer de specifikke autonome mekanismer, der opretholder kronisk stress og danner grundlag for varig symptomreduktion."
        },
        'nervesystem-tilknytning': {
            klient: "Stress-mønstre blev ofte skabt i utryg tilknytning, hvor du som barn ikke fik tilstrækkelig hjælp til at regulere dine følelser og dit nervesystem. Uden denne tidlige co-regulering lærte dit system aldrig fuldt ud at stresse ned og finde ro. Vi skaber den manglende regulering nu i vores terapeutiske relation, hvor du kan opleve, hvordan det føles at blive hjulpet med at finde balance. Denne erfaring opbygger gradvist nye neurale veje til selvregulering, som styrker din kapacitet til at håndtere stress i hverdagen.",
            fagfolk: "Manglende early co-regulation i tilknytningsrelationer skaber vedvarende stress-vulnerabilitet med deficits i autonome selvregulering. Terapeutisk co-regulation modificerer disse autonome mønstre gennem gentagen erfaring af ekstern regulering i den terapeutiske alliance. Neuroplasticitet i autonome kredsløb muliggør gradvis internalisering af reguleringskapacitet. Earned secure attachment korrelerer med forbedret HPA-akse regulering og reduceret stress-reaktivitet. Denne forståelse integrerer tilknytningsteori med neurobiologisk stressforskning og danner grundlag for relationelt orienterede stressinterventioner, der adresserer de interpersonelle rødder til kronisk stress."
        },
        'nervesystem-kropsterapi': {
            klient: "Stress sidder som spændinger i nakke, skuldre, kæbe og ryg, og disse fysiske spændinger holder nervesystemet fast i alarm. Kropsarbejde frigiver spændingerne direkte og sender dermed et kraftigt signal til nervesystemet om, at det er sikkert at slappe af. Når musklerne slipper og åndedrættet bliver dybere, begynder hele systemet at finde ro. Denne kropslige tilgang til stressreduktion er særligt effektiv, fordi den arbejder direkte med de fysiske mekanismer, der opretholder stress-tilstanden, i stedet for kun at adressere tankemønstre.",
            fagfolk: "Stress-relateret somatisk hypertonus opretholder autonome stress-responses gennem afferente feedback-loops, der fastholder sympatisk dominans og forhindrer ventral vagal recovery. Fascial release bryder denne selvforstærkende cyklus ved at reducere den perifere sensoriske input, der signalerer fare til centralnervesystemet. Diafragmatisk mobilisering og cervical fascial release har særlig effekt på vagal tone gennem direkte påvirkning af vagus-nervens forløb. Somatisk intervention kombineret med åndedrætsarbejde og co-regulering skaber optimale betingelser for genopbygning af den autonome fleksibilitet, der er kompromitteret ved kronisk stress."
        },
        'nervesystem-psykobiologi': {
            klient: "Stress-biologien med konstant høj cortisol og andre stresshormoner normaliseres gradvist, når nervesystemet finder vej tilbage til ro og balance. Det handler om at genoprette den naturlige rytme, hvor kroppen kan veksle mellem aktivering og dyb afslapning. Når nervesystemet reguleres, begynder hele den biologiske kaskade at vende, og hormonniveauer, immunfunktion og søvnkvalitet forbedres. Denne normalisering sker ikke fra den ene dag til den anden, men gennem vedvarende arbejde med nervesystemet kan vi gradvist genoprette den biologiske balance, der er fundamentet for dit helbred.",
            fagfolk: "Nervesystemsregulering ved kronisk stress normaliserer HPA-akse dysregulation gennem genopbygning af vagal modulation af cortisol-produktion. Restoration af vagal tone reducerer sympatisk drive og genopretter baroreflex-sensitivitet, hvilket medfører normalisering af cortisol-døgnrytme og reduktion af inflammatoriske markører. Systematisk intervention rettet mod autonome fleksibilitet har dokumenteret effekt på biologiske stress-markører. Denne neurobiologiske normalisering understøtter forbedret immunfunktion, søvnarkitektur og metabolisk regulation. Monitorering af biologiske markører som cortisol-awakening response og heart rate variability kan anvendes klinisk til at evaluere behandlingseffekt."
        },
        'nervesystem-traumer': {
            klient: "Kronisk stress har ofte sine rødder i gamle traumer, der programmerede dit nervesystem til konstant vagtsomhed og alarmberedskab. Selv når den ydre fare for længst er ovre, fortsætter systemet med at reagere, som om faren stadig er til stede. Healing af de underliggende traumer er nøglen til at normalisere stress-responsen varigt. Vi arbejder forsigtigt og i dit tempo med at bearbejde de traumatiske oplevelser, så dit nervesystem gradvist kan slippe alarmberedskabet og finde den ro, der har været utilgængelig så længe.",
            fagfolk: "PTSD og developmental trauma skaber persisterende hyperarousal med forhøjet baseline sympatisk tonus, der opleves som kronisk stress. Incomplete fight og flight responses opretholdes i det autonome nervesystem og forhindrer tilbagevenden til fysiologisk homeostase. Trauma-processing gennem somatisk orienterede metoder reducerer baseline stress ved at facilitere completion af disse ufuldstændige defensive responses. Titreret aktivering inden for window of tolerance muliggør gradvis aflading af traumatisk energi. Denne tilgang adresserer de autonome mekanismer, der opretholder kronisk stress, og skaber forudsætning for varig normalisering af stress-reaktivitet."
        },
        'nervesystem-relation': {
            klient: "Dit stress-system lærer ro og balance gennem vores trygge terapeutiske relation, og det er vejen til varig ændring af dine stress-mønstre. Når du gentagne gange oplever at sidde sammen med et nervesystem i ro, begynder dit eget system at spejle denne tilstand. Denne co-regulering er en dyb biologisk proces, der gradvist opbygger din egen kapacitet til at finde ro, også i udfordrende situationer uden for terapirummet. Over tid bliver den ro du oplever i terapien til en ressource, du kan trække på i hverdagens stressende momenter.",
            fagfolk: "Co-regulering i den terapeutiske alliance modificerer stress-relaterede autonome mønstre gennem neuroplasticitet i autonome kredsløb. Terapeutens ventral vagale tilstand fungerer som neural skabelon for klientens autonome reorganisering. Gentagen erfaring af reguleret tilstedeværelse opbygger gradvist internaliseret kapacitet for stresshåndtering. Denne interpersonelle neurobiologiske proces rekapitulerer den tidlige omsorgsgiver-barn co-regulering og tilbyder en korrigerende erfaring for klienter med deficits i selvregulering af stress. Effekten konsolideres over tid og generaliserer til klientens øvrige relationer."
        },
        'polyvagal-tilknytning': {
            klient: "Utryg tilknytning i barndommen skabte et nervesystem, der stresser lettere og har sværere ved at finde ro igen. Dit system lærte aldrig fuldt ud den reguleringskapacitet, som tryg tilknytning giver. Vi lærer dit system ny sikkerhed gennem vores terapeutiske relation, hvor du kan opleve den co-regulering, der manglede i barndommen. Gradvist opbygger dit nervesystem stærkere veje til den grønne ro-tilstand, og din stress-tærskel hæves. Denne forandring er dyb, fordi den adresserer selve fundamentet for din stress-sårbarhed i de tidlige tilknytningsmønstre.",
            fagfolk: "Usikker tilknytning korrelerer konsistent med øget stress-vulnerabilitet og nedsat autonome reguleringskapacitet. Earned secure attachment reducerer sympatisk reaktivitet og styrker ventral vagal recovery-kapacitet. Den terapeutiske relation tilbyder en kontekst for genopbygning af de reguleringsressourcer, der ikke blev tilstrækkeligt udviklet i tidlige tilknytningsrelationer. Intervention fokuserer på at etablere terapeutisk co-regulering som basis for gradvis opbygning af internaliseret selvregulering. Polyvagal teori og tilknytningsteori integreres klinisk for at adressere de relationelle rødder til kronisk stress."
        },
        'polyvagal-kropsterapi': {
            klient: "Kropsarbejde aktiverer den grønne ro-tilstand direkte og skaber en kraftig modvægt til den gule stresszone, som dit system har været fanget i. Når kroppen oplever dyb afslapning gennem berøring og åndedrætsøvelser, sender den et stærkt signal til nervesystemet om sikkerhed. Denne fysiske vej til den grønne zone er ofte mere effektiv end forsøg på at tænke sig til ro. Vi bruger konkrete kropslige teknikker, der aktiverer den parasympatiske del af nervesystemet og hjælper dit system med at huske, hvordan ro føles.",
            fagfolk: "Somatisk intervention aktiverer ventral vagale pathways og modulerer sympatiske stress-responses gennem direkte påvirkning af autonome reguleringsmekanismer. Diafragmatisk åndedræt med forlænget udånding styrker vagal brake funktion og reducerer sympatisk tonus. Fascial release i cervikale og thorakale regioner påvirker vagus-nervens afferente forløb og faciliterer ventral vagal aktivering. Proprioceptiv stimulation øger interoceptiv bevidsthed og styrker klientens evne til at registrere autonome tilstandsskift. Denne kombination af somatiske interventioner genopbygger systematisk den polyvagale fleksibilitet, der er kompromitteret ved kronisk stress."
        },
        'polyvagal-psykobiologi': {
            klient: "Den grønne sikre tilstand skaber den optimale biologi, hvor stresshormoner normaliseres, og kroppens helende processer aktiveres. Når dit nervesystem finder den grønne zone, falder cortisol, immunforsvaret styrkes, og din søvn forbedres. Denne biologiske forandring sker automatisk, når systemet finder ro, og den understøtter din krop i at hele efter lang tids stress. Vi arbejder med at hjælpe dit nervesystem til at opholde sig i den grønne zone oftere og længere, så de biologiske fordele kan akkumulere og skabe varig forbedring af dit helbred.",
            fagfolk: "Ventral vagal aktivering optimerer HPA-akse funktion og reducerer stress-biomarkører gennem parasympatisk modulation af cortisol-produktion og inflammatoriske processer. Restoration af vagal tone medfører normalisering af cortisol-døgnrytme, øget DHEA-produktion og reduktion af proinflammatoriske cytokiner. Denne polyvagale-biologiske kaskade er veldokumenteret og danner grundlag for somatisk orienterede stressinterventioner. Systematisk intervention rettet mod ventral vagal kapacitet har målbar effekt på biologiske stress-markører. Heart rate variability som markør for vagal tone kan anvendes klinisk til monitorering af behandlingsrespons."
        },
        'polyvagal-traumer': {
            klient: "Traumer fastlåste dit system i kronisk stress, fordi de programmerede nervesystemet til konstant vagtsomhed og alarmberedskab. Grøn sikkerhed skal etableres først som et solidt fundament, før traumerne forsigtigt kan bearbejdes. Uden denne trygge base risikerer vi at overvælde systemet og forstærke stressmønstret. Vi bygger langsomt op og respekterer dit systems tempo, så den grønne zone gradvist bliver robust nok til at rumme arbejdet med de gamle traumer. Denne tilgang sikrer varig forandring frem for kortvarig lindring.",
            fagfolk: "Traumatisk hyperarousal med persisterende sympatisk dominans kræver solid ventral vagal etablering før trauma-processing kan påbegyndes sikkert. Uden tilstrækkelig ventral vagal kapacitet vil aktivering af traumemateriale medføre retraumatisering og forværring af stress-symptomer. Klinisk protokol prioriterer systematisk opbygning af polyvagal fleksibilitet og autonome reguleringsressourcer som forudsætning for traumebearbejdning. Titreret oscillation mellem ventral vagal sikkerhed og kontrolleret aktivering af traumerelateret materiale faciliterer gradvis integration. Denne sekventielle tilgang sikrer varig reduktion af traumatisk stress."
        },
        'polyvagal-relation': {
            klient: "Min ro og trygge tilstedeværelse smitter direkte til dit stress-belastede system gennem vores terapeutiske relation. Når to nervesystemer er i kontakt, påvirker de hinanden automatisk, og min grønne tilstand inviterer dit system til at finde samme ro. Denne co-regulering er en biologisk proces, der sker uden ord, og den er en af de mest kraftfulde veje til stressreduktion. Over tid internaliserer dit nervesystem denne oplevelse af ro, så den bliver en del af din egen kapacitet til at regulere stress i hverdagen.",
            fagfolk: "Terapeutens ventral vagale tilstand co-regulerer klientens sympatiske hyperarousal ved kronisk stress gennem interpersonel neurobiologisk synkronisering. Den terapeutiske relations regulerende funktion rekapitulerer den tidlige omsorgsgiver-barn co-regulering og tilbyder en korrigerende neurobiologisk erfaring. Terapeutens konsistente regulerede tilstedeværelse faciliterer neuroception af sikkerhed og aktiverer klientens sociale engagementsystem. Gentagen co-regulering opbygger gradvist internaliseret kapacitet for selvregulering af stress. Denne proces er dokumenteret gennem forskning i interpersonel neurobiologi og danner grundlag for relationelt orienterede stressinterventioner."
        },
        'tilknytning-kropsterapi': {
            klient: "Manglende tidlig co-regulering i tilknytningsrelationer skabte stress, der nu sidder fast i kroppen som kroniske spændinger og åndedrætsrestriktioner. Kropsarbejde lærer dit system ny regulering ved at adressere disse fysiske stress-mønstre direkte. Når kroppen oplever afslapning og sikkerhed i nærvær af en anden person, begynder hele systemet at lære nye måder at regulere stress på. Denne kombination af kropslig intervention og relationel tryghed er særligt effektiv, fordi den adresserer stress-mønstrene på det niveau, hvor de oprindeligt blev skabt.",
            fagfolk: "Stress-vulnerabilitet forankret i utilstrækkelig tidlig co-regulering er embodied i karakteristiske somatiske konfigurationer med kronisk hypertonus og fasciale restriktioner. Somatisk intervention modificerer disse stress-relaterede somatiske mønstre og adresserer derved de kropslige mekanismer, der opretholder øget stress-reaktivitet. Fascial release kombineret med relationel sikkerhed faciliterer reconsolidation af procedurale stress-mønstre etableret i tidlig tilknytning. Proprioceptiv re-patterning og interoceptiv træning styrker klientens kapacitet for kropslig stress-regulering. Denne somatiske tilgang komplementerer relationelle interventioner ved at adressere de embodied dimensioner af stress-vulnerabilitet."
        },
        'tilknytning-psykobiologi': {
            klient: "Utryg tilknytning i barndommen formede en biologi, der er mere følsom over for stress end normalt. Dit system blev indstillet til højere alarmberedskab, fordi de tidlige relationer ikke gav tilstrækkelig tryghed. Men ny sikkerhed i relationer kan omforme denne biologi, så stresshormonerne normaliseres, og kroppen genfinder sin balance. Gennem vores terapeutiske relation oplever dit system gentagne gange den tryghed, det manglede, og gradvist kalibrerer biologien sig til et nyt og sundere niveau med mere ro og mindre stress.",
            fagfolk: "Usikker tilknytning præger HPA-akse sensitivitet og cortisol-reaktivitet gennem epigenetiske mekanismer etableret i tidlig udvikling. Earned secure attachment kan modificere denne stress-biologi, som dokumenteret i longitudinelle studier. Terapeutisk intervention rettet mod tilknytningssikkerhed medfører målbare ændringer i biologiske stress-markører over tid. Normalisering af HPA-akse funktion og cortisol-døgnrytme understøtter reduceret stress-vulnerabilitet og øget resiliens. Denne biologiske modifikation konsoliderer de psykologiske ændringer opnået gennem tilknytningsfokuseret terapi og sikrer varig reduktion af stress-sårbarhed."
        },
        'tilknytning-traumer': {
            klient: "Tilknytningstraumer i de tidligste relationer skabte kronisk stress, fordi dit system lærte, at verden og mennesker er uforudsigelige og potentielt farlige. Healing af denne dybe stress kræver, at vi først etablerer en tryg relation, hvor dit nervesystem kan erfare sikkerhed. Vi presser aldrig på med at bearbejde traumerne, før fundamentet af relationel tryghed er solidt nok. Gradvist bygger vi denne sikkerhed op, og når dit system er klar, kan vi forsigtigt begynde at adressere de traumatiske oplevelser, der holder dig fast i stress.",
            fagfolk: "Developmental trauma inden for tilknytningssystemet resulterer i dysreguleret stress-respons med persisterende hyperarousal og kompromitteret autonome fleksibilitet. Langsom og systematisk safety-etablering i den terapeutiske relation er absolut påkrævet før traumeprocessering. Terapeuten opretholder konsistent tilgængelighed og reguleret tilstedeværelse trods klientens ambivalens og modstand. Allianceopbygning er den primære intervention i den indledende fase, og prematur traumeprocessering risikerer retraumatisering og forværring. Den terapeutiske relation fungerer som kontekst for gradvis neuroplastisk modifikation af stress-relaterede autonome kredsløb."
        },
        'tilknytning-relation': {
            klient: "Vores terapeutiske relation lærer dit system, at stress kan reguleres i trygge relationer med andre mennesker. Måske har du altid håndteret stress alene, fordi tidlige erfaringer lærte dig, at andre ikke er pålidelige. I vores relation får du mulighed for at opleve noget andet, at det er muligt at finde ro sammen med et andet menneske. Denne erfaring ændrer gradvist dit nervesystems forventninger til relationer og opbygger nye veje til stressregulering, der involverer forbindelse frem for isolation. Det er en dyb og transformativ forandring.",
            fagfolk: "Terapeutisk co-regulation modificerer stress-vulnerabilitet gennem gradvis opbygning af earned secure attachment i den kliniske kontekst. Konsistent relationel tilgængelighed og emotionel afstemning tilbyder en korrigerende erfaring, der adresserer de tilknytningsrelaterede rødder til kronisk stress. Gentagen co-regulering opbygger internaliseret kapacitet for selvregulering og reducerer afhængighed af maladaptive stressmestringsstrategier. Denne tilgang integrerer tilknytningsteori med polyvagal teori og neurobiologisk stressforskning. Terapeutisk alliance er den primære virkningsmekanisme ved tilknytningsrelateret stress-vulnerabilitet og danner grundlag for varig forandring."
        },
        'kropsterapi-psykobiologi': {
            klient: "Når kroppen slipper sine stress-spændinger gennem kropsarbejde og åndedrætsøvelser, begynder hormoner og neurotransmittere at normalisere sig automatisk. Cortisol falder, immunforsvaret styrkes, og søvnkvaliteten forbedres mærkbart. Denne biologiske forandring sker, fordi kroppen og hjernen er forbundet i et konstant feedback-loop, hvor kropslig afslapning direkte påvirker hjernens kemiske balance. Regelmæssigt kropsarbejde akkumulerer disse biologiske fordele over tid og skaber et stærkere og mere modstandsdygtigt system, der bedre kan håndtere hverdagens udfordringer uden at gå i stress.",
            fagfolk: "Fascial release ved kronisk stress påvirker vagale afferenter og modulerer HPA-akse funktion gennem somatisk-autonome feedback-mekanismer. Reduktion af perifert sensorisk input fra kronisk hypertoniske muskler og fasciale restriktioner normaliserer central stress-processing. Diafragmatisk mobilisering styrker respiratory sinus arrhythmia og vagal brake funktion med dokumenteret effekt på cortisol-døgnrytme og inflammatoriske markører. Denne somatisk-biologiske kaskade danner grundlag for evidensbaseret kropslig stressintervention. Systematisk somatisk intervention kan monitoreres biologisk gennem heart rate variability og salivary cortisol som behandlingsrespons-markører."
        },
        'kropsterapi-traumer': {
            klient: "Stress-traumer sidder frosset i kroppen som fastlåste spændingsmønstre, der holder nervesystemet i konstant alarm. Forsigtigt kropsarbejde kan frigive disse frosne mønstre og hjælpe din krop med at fuldende de forsvarsreaktioner, der aldrig blev afsluttet. Vi arbejder langsomt og i dit tempo, så du aldrig bliver overvældet. Når kroppen gradvist slipper de gamle forsvarsmønstre, oplever du en dybere ro og frihed, som har været utilgængelig så længe traumerne holdt dit system i spænd. Denne kropslige frigørelse er en vigtig del af helingsprocessen.",
            fagfolk: "Traumatisk stress manifesteres somatisk i karakteristiske mønstre af muskulær hypertonus, fasciale restriktioner og autonome dysregulering. Titreret somatisk intervention faciliterer completion af ufuldstændige defensive responses, der opretholdes som kronisk stress i det autonome nervesystem. Terapeuten modulerer intensiteten af kropslig intervention baseret på klientens autonome tilstand og window of tolerance. Fascial release kombineret med relationel sikkerhed muliggør gradvis aflading af traumatisk energi. Denne somatiske tilgang er særligt indiceret ved traumatisk stress, hvor de defensive mønstre er primært lagret i det somatiske felt."
        },
        'kropsterapi-relation': {
            klient: "Tryg berøring i vores terapeutiske relation lærer din krop, at stress kan reguleres i kontakt med et andet menneske. For mange stressramte er kroppen det sted, hvor forandringen begynder, fordi den fysiske oplevelse af ro er mere overbevisende end ord. Når du mærker afslapning og tryghed i kroppen, mens du er i kontakt med et andet menneske, skabes en dyb ny erfaring. Denne kropslige læring integrerer sig med de emotionelle og relationelle forandringer og skaber et solidt fundament for varig stressreduktion.",
            fagfolk: "Terapeutisk berøring kombineret med relational safety skaber optimale betingelser for modifikation af stress-relaterede somatiske og autonome mønstre. Den somatiske intervention inden for en sikker relationel ramme adresserer simultant de kropslige, autonome og relationelle dimensioner af kronisk stress. Tryg berøring aktiverer oxytocin-systemet og faciliterer neuroception af sikkerhed, mens den relationelle kontekst muliggør reconsolidation af stress-relaterede procedurale mønstre. Denne kombination er klinisk potent, fordi den tilbyder en korrigerende erfaring på det somatiske niveau, hvor stress-mønstre ofte er mest resistent."
        },
        'psykobiologi-traumer': {
            klient: "Traumer ændrede din stress-biologi grundlæggende og skabte et system, der konstant producerer for mange stresshormoner. Healing af traumerne normaliserer gradvist cortisol og andre hormoner, så din krop kan genfinde sin naturlige balance. Når de traumatiske oplevelser bearbejdes, og dit nervesystem lærer, at faren er ovre, begynder hele den biologiske kaskade at vende. Immunforsvaret styrkes, søvnen forbedres, og din krop får mulighed for at hele og restituere sig efter lang tids overbelastning. Denne biologiske normalisering er en central del af recovery.",
            fagfolk: "Traumatisk modifikation af HPA-aksen med dysreguleret cortisol-produktion, reduceret DHEA og øget inflammatorisk aktivitet opretholder biologisk stress-tilstand. Trauma-processing kan normalisere disse stress-biomarkører gennem genopbygning af autonome reguleringskapacitet og resolution af fastfrosne forsvarsresponser. Systematisk traumebearbejdning medfører målbare ændringer i cortisol-døgnrytme, inflammatoriske markører og heart rate variability over tid. Denne biologiske normalisering understøtter og konsoliderer de psykologiske forandringer opnået i terapi. Monitorering af biologiske stress-markører kan anvendes klinisk til at evaluere behandlingsrespons og guide interventionsplanlægning."
        },
        'psykobiologi-relation': {
            klient: "Vores trygge terapeutiske relation er stress-medicin, der aktivt sænker cortisol og øger de hormoner der skaber ro og forbindelse i din krop. Hver gang du sidder i vores trygge rum og oplever regulering og nærvær, sker der biologiske forandringer, der styrker dit systems evne til at håndtere stress. Over tid akkumulerer disse små biologiske forbedringer sig og skaber et nyt fundament for, hvordan din krop reagerer på udfordringer. Det er som om din biologi langsomt kalibrerer sig til et nyt normalniveau med mere ro og resiliens.",
            fagfolk: "Den terapeutiske alliance modificerer direkte HPA-akse funktion og oxytocin-systemer ved kronisk stress gennem interpersonel neurobiologisk regulering. Gentagen co-regulering i den terapeutiske relation stimulerer oxytocin-frigivelse og reducerer cortisol-reaktivitet. Disse neurobiologiske ændringer konsoliderer sig over tid og understøtter varig reduktion af stress-vulnerabilitet. Forskning dokumenterer at kvaliteten af den terapeutiske alliance korrelerer med biologiske stress-markører og behandlingsrespons. Denne evidens understøtter den kliniske prioritering af allianceopbygning som primær intervention ved biologisk stress-dysregulering."
        },
        'traumer-relation': {
            klient: "Stress-traumer kan kun heales i dyb relationel sikkerhed, fordi dit nervesystem har brug for at erfare, at det er sikkert at slippe vagtsomheden. Vores terapeutiske relation er det fundamentale grundlag for denne healing. Her kan du langsomt og gradvist lære, at det er muligt at slappe af i nærvær af et andet menneske, og at du ikke behøver at være på vagt hele tiden. Denne relationelle erfaring ændrer dit systems grundlæggende forventninger og skaber varig forandring i, hvordan du oplever og håndterer stress.",
            fagfolk: "Trauma-baseret kronisk stress kræver en robust terapeutisk alliance etableret som absolut forudsætning før traumeprocessering kan påbegyndes sikkert. Co-regulering i den terapeutiske relation er afgørende for at opbygge den autonome kapacitet, der er nødvendig for at rumme traumemateriale. Terapeuten opretholder konsistent reguleret tilstedeværelse og fungerer som ekstern regulator af klientens stress-response under traumebearbejdning. Alliancekvalitet er den stærkeste prædiktor for behandlingsrespons ved traumatisk stress. Relationel sikkerhed muliggør titreret eksponering for traumemateriale inden for window of tolerance og faciliterer varig resolution."
        }
    }
},
    traumer: {
        name: "Traumer",
        circles: {
            nervesystem: {
                klient: {
                    title: "Nervesystemet efter Traume",
                    text: "Traumer fryser nervesystemet i forsvarstilstande som kan føles helt overvældende og uforståelige. Kroppen reagerer som om faren stadig er til stede, selvom den i virkeligheden er ovre. Vi arbejder forsigtigt og respektfuldt med at optø det frosne, lag for lag, i et tempo der føles sikkert for dig. Målet er at nervesystemet gradvist kan finde tilbage til sin naturlige fleksibilitet og evne til at skelne mellem fortid og nutid. Denne proces kræver tålmodighed og tillid, men systemet har en medfødt kapacitet for at heale når betingelserne er rigtige."
                },
                fagfolk: {
                    title: "ANS-regulering ved Traume",
                    text: "Traumatisk materiale lagres som autonome forsvarstilstande, herunder freeze, collapse, fight og flight, der persisterer som incomplete defensive responses i nervesystemet. Disse tilstande opretholder en kronisk dysregulering af det autonome nervesystem med vedvarende hyperarousal eller hypoarousal. Terapeutisk fokus rettes mod titreret activation inden for klientens window of tolerance for at facilitere completion af de afbrudte forsvarsresponser. Denne proces kræver præcis dosering og konstant monitorering af autonome markører. Gennem systematisk pendulering mellem activation og ressource kan nervesystemet gradvist genforhandle traumatisk materiale og restaurere autonom fleksibilitet og adaptiv kapacitet."
                }
            },
            polyvagal: {
                klient: {
                    title: "Polyvagal Forståelse af Traume",
                    text: "Traumer sender nervesystemet ned i rød nedluknings-zone hvor alt føles fjernt og uvirkeligt, eller op i gul alarm hvor alt føles farligt og truende. Begge tilstande er kroppens forsøg på at beskytte dig mod overvældende oplevelser. Sammen finder vi trygge veje til gradvist at aktivere den grønne sikre zone, skridt for skridt, med stor respekt for dit tempo. Når den grønne zone styrkes som et stabilt fundament, bliver det muligt for traumet langsomt at integreres uden at du føler dig overvældet eller fortabt i smerten."
                },
                fagfolk: {
                    title: "Polyvagal Teori ved Traume",
                    text: "Traumatisk immobilisering repræsenterer dorsal vagal dominans med sympatisk co-activation, en tilstand af høj arousal kombineret med immobilitet der opleves som frygtelammelse. Denne paradoksale tilstand reflekterer nervesystemets mest primitive forsvarsstrategi. Healing kræver først etablering af ventral vagal sikkerhed som stabil platform før traumemateriale kan aktiveres terapeutisk. Gennem kontrolleret oscillation mellem autonome states, fra ventral vagal sikkerhed til forsigtig kontakt med traumatisk materiale og tilbage igen, opbygges gradvist tolerance og integrationskapacitet. Terapeutens egen ventrale vagale regulering er afgørende som co-regulerende ressource gennem hele denne proces."
                }
            },
            tilknytning: {
                klient: {
                    title: "Tilknytningstraumer",
                    text: "Traumer i tidlige tilknytningsrelationer er de sværeste at hele, fordi de skete netop der hvor du skulle være mest sikker og beskyttet. Når den person der skulle give tryghed også var kilden til frygt, skaber det en dyb forvirring i nervesystemet der kan påvirke alle senere relationer. Vi arbejder med ekstra omsorg og tålmodighed for at skabe en ny erfaring af ægte sikkerhed i vores relation. Langsomt kan dit system lære at tillid er mulig, og at nærhed ikke nødvendigvis betyder fare eller smerte."
                },
                fagfolk: {
                    title: "Developmental Trauma",
                    text: "Developmental trauma inden for attachment systemet skaber desorganiseret tilknytning og kompleks PTSD med pervasive påvirkning af affektregulering, selvoplevelse og relationel kapacitet. Den desorganiserede tilknytningsstrategi reflekterer et uløseligt dilemma hvor tilknytningsfiguren simultant er kilde til trøst og frygt. Behandling kræver langvarig og tålmodig etablering af en robust therapeutic alliance med konsistent responsivitet før traumemateriale kan adresseres direkte. Fokus på relationel sikkerhed som absolut forudsætning for enhver traumeintervention. Terapeutens kapacitet for at rumme modsatrettede affekter og tilknytningsbehov er central for behandlingens effektivitet."
                }
            },
            kropsterapi: {
                klient: {
                    title: "Traumer i Kroppen",
                    text: "Traumer sidder som frosne mønstre i kroppen i form af kroniske spændinger, områder af følelsesløshed og en oplevelse af fragmentering hvor kroppen ikke føles hel. Disse mønstre er kroppens måde at holde det overvældende materiale på afstand. Gennem meget forsigtigt og respektfuldt kropsarbejde, altid i dit eget tempo, kan det frosne begynde at optø gradvist. Vi lytter nøje til kroppens signaler og respekterer dens visdom. Når kroppen langsomt åbner sig, kan de fastlåste forsvarsresponser endelig fuldføres og energien frigøres på en sikker måde."
                },
                fagfolk: {
                    title: "Somatic Experiencing",
                    text: "Traumatisk materiale manifesteres somatisk som incomplete motoriske sekvenser, fascial immobility, reduceret interoception og fragmenteret kropsoplevelse. Disse somatiske manifestationer repræsenterer nervesystemets forsøg på at indkapsle overvældende materiale gennem muskulær og fascial binding. Intervention sker gennem titreret proprioceptiv og interoceptiv activation der faciliterer completion af afbrudte forsvarsresponser og gradvis restoration af embodied wholeness. Terapeutens somatiske afstemning og evne til at aflæse subtile autonome markører er afgørende for sikker dosering af interventionen. Målet er at genintegrere dissocierede kropsområder og restaurere den interoceptive kapacitet som er fundamental for selvregulering."
                }
            },
            psykobiologi: {
                klient: {
                    title: "Traumets Biologi",
                    text: "Traumer ændrer kroppens biologi dybtgående og påvirker hormoner, immunsystem, søvnmønstre og fordøjelse på måder der kan føles uforklarlige og udmattende. Stresshormonerne kan være konstant forhøjede eller flade, immunforsvaret svækkes, og kroppen har svært ved at finde hvile og restituere sig ordentligt. Den gode nyhed er at biologien ikke er permanent fastlåst. Ved at heale traumet og genoprette nervesystemets balance normaliserer biologien sig gradvist. Kroppen har en bemærkelsesværdig evne til at restituere sig selv når den rette støtte og de rigtige betingelser er til stede."
                },
                fagfolk: {
                    title: "Neurobiologi efter Traume",
                    text: "PTSD modificerer permanent HPA-aksen med fladt cortisol-døgnrytme og dysreguleret stressrespons, forhøjede inflammatoriske cytokiner der bidrager til systemisk inflammation, samt altered hippocampal og prefrontal cortex volume med konsekvenser for hukommelseskonsolidering og eksekutive funktioner. Disse neurobiologiske ændringer opretholder en vedvarende tilstand af biologisk stress uafhængigt af aktuel kontekst. Effektiv trauma-processing kan dokumenterbart normalisere disse biomarkører gennem restoration af autonomic flexibility og rebalancering af det neuroendokrine system. Longitudinelle studier viser at succesfuld behandling medfører normalisering af cortisolprofiler, reduktion af inflammatoriske markører og øget hippocampal neurogenese."
                }
            },
            traumer: {
                klient: {
                    title: "At Heale Traumer",
                    text: "Traumer heales ikke ved at tale om dem igen og igen, men ved forsigtigt at fuldføre det som blev afbrudt dengang det skete. Kroppen husker det nervesystemet ikke kunne færdiggøre, og dette ufærdige holdes fastlåst som spænding, følelsesløshed eller uro. Vi arbejder respektfuldt med kroppen og nervesystemet for at integrere det der blev splittet og adskilt. I små doser og i trygge rammer kan de ufærdige forsvarsresponser endelig afsluttes. Denne fuldførelse bringer en dyb lettelse og en følelse af at komme hjem til dig selv igen."
                },
                fagfolk: {
                    title: "Traumebearbejdning",
                    text: "Peter Levines Somatic Experiencing og Bessel van der Kolks forskning udgør det teoretiske og kliniske fundament for denne tilgang til traumebehandling. Fokus rettes mod completion af incomplete defensive responses gennem systematisk titrering og pendulering mellem traumatisk activation og ressourcetilstande. Dissociative processer kræver specifik klinisk opmærksomhed med nøje monitorering af klientens window of tolerance og tilpasning af interventionens intensitet i realtid. Terapeutens kapacitet for at spore subtile autonome skift, herunder vasomotoriske ændringer, respirationsændringer og muskeltonus, er afgørende for sikker og effektiv traumebehandling der undgår retraumatisering."
                }
            },
            relation: {
                klient: {
                    title: "Relationel Sikkerhed ved Traume",
                    text: "At arbejde med traumer kræver dyb tillid fordi du skal turde åbne for noget der engang var overvældende og farligt. Vores relation bliver det sikre fundament, det trygge sted hvorfra du kan begynde at se på det svære uden at blive overvældet af det. Min opgave er at være en stabil og pålidelig tilstedeværelse der kan rumme det hele. Sammen skaber vi en erfaring af at smerte kan deles og bæres i fællesskab. Denne nye relationelle erfaring er i sig selv en dybt helende kraft for dit traumatiserede nervesystem."
                },
                fagfolk: {
                    title: "Terapeutisk Alliance ved Traume",
                    text: "Traumebehandling forudsætter en robust therapeutic alliance og terapeutens egen autonome regulering som stabil co-regulerende ressource. Uden etableret relational safety risikeres retraumatisering, idet aktivering af traumatisk materiale uden tilstrækkelig relationel containment kan overvælde klientens reguleringskapacitet. Terapeutens evne til at opretholde ventral vagal regulering under eksponering for klientens traumatiske materiale er afgørende for behandlingens sikkerhed og effektivitet. Co-regulering gennem den terapeutiske relation er den absolutte forudsætning for sikker aktivering og integration af traumatisk materiale. Terapeutens egen traumebearbejdning og supervisionsdeltagelse understøtter denne kapacitet."
                }
            },
        },
        connections: {
            'nervesystem-polyvagal': {
                klient: "Traumer fryser nervesystemet i røde og gule alarmtilstande hvor kroppen konstant forbereder sig på fare eller lukker helt ned. Polyvagal forståelse giver os et præcist landkort over disse tilstande og viser vejen til den grønne sikre zone som det første og vigtigste skridt. Vi arbejder ikke direkte med traumet i starten, men fokuserer på at styrke din kapacitet for grøn sikkerhed. Når denne zone er etableret som et stabilt fundament, har nervesystemet den nødvendige ressource til gradvist at integrere det traumatiske materiale uden overvældelse.",
                fagfolk: "Traumatisk immobilisering repræsenterer en kompleks autonom tilstand af dorsal vagal dominans med sympatisk co-activation, hvor høj arousal kombineres med fysiologisk shutdown. Denne paradoksale tilstand er karakteristisk for uløst traumatisk materiale i nervesystemet. Ventral vagal etablering er den absolutte forudsætning for sikker trauma-processing, idet ventral vagal kapacitet muliggør kontrolleret oscillation mellem traumatisk activation og sikkerhedstilstand. Uden tilstrækkelig ventral vagal ressource risikeres destabilisering og retraumatisering. Terapeutisk intervention fokuserer derfor primært på opbygning af autonome ressourcer før traumemateriale adresseres direkte."
            },
            'nervesystem-tilknytning': {
                klient: "Tilknytningstraumer påvirker nervesystemet allerdybest fordi de skete i de relationer hvor du skulle være allermest sikker og beskyttet. Når den person der skulle give tryghed også skabte frygt, lærer nervesystemet at nærhed er farligt og at det aldrig rigtig kan slappe af. Denne dybe forvirring præger hele kroppens måde at møde verden på. I terapien arbejder vi med at give nervesystemet nye erfaringer af sikker tilknytning, så systemet gradvist kan lære at relationer også kan være et sted for tryghed og hvile.",
                fagfolk: "Developmental trauma inden for tilknytningssystemet skaber komplekse autonome mønstre karakteriseret ved simultane og modsatrettede behov for nærhed og afstand. Disse desorganiserede autonome strategier reflekterer tilknytningsfigurens dobbeltrolle som kilde til både trøst og fare, hvilket forhindrer dannelsen af en kohærent reguleringstrategi. Earned secure attachment gennem den terapeutiske relation er central for behandlingen, idet konsistent terapeutisk responsivitet gradvist reorganiserer klientens autonome tilknytningsmønstre. Denne proces kræver langvarig terapeutisk forpligtelse og terapeutens kapacitet for at tolerere klientens oscillation mellem tilknytningssøgen og tilknytningsundgåelse."
            },
            'nervesystem-kropsterapi': {
                klient: "Traumer sidder frosset i både nervesystem og krop som uadskillelige lag af fastlåst energi og spænding. Nervesystemet holder kroppen i alarm, og kroppen holder nervesystemet låst i forsvarstilstand. De to opretholder hinanden i en cirkel der kan føles umulig at bryde. Forsigtigt kropsarbejde kan optø begge dele samtidig ved at give kroppen nye oplevelser af sikkerhed og bevægelse. Når kroppen begynder at slippe sine spændinger, får nervesystemet signal om at faren er ovre, og begge systemer kan finde tilbage til balance.",
                fagfolk: "Traumatisk materiale manifesteres simultant somatisk og autonomt som incomplete motoriske sekvenser, fascial binding, reduceret interoception og kronisk autonom dysregulering. Disse parallelle manifestationer opretholder hinanden i selvforstærkende feedback loops der persisterer traumatilstanden. Titreret somatisk intervention faciliterer completion af afbrudte forsvarsresponser ved at adressere begge dimensioner simultant. Proprioceptiv og interoceptiv activation inden for window of tolerance muliggør gradvis frigørelse af somatisk bundne forsvarsresponser med samtidig normalisering af autonome parametre. Denne dobbelte integration er afgørende for varig traumeresolution og restaurering af funktionel kapacitet."
            },
            'nervesystem-psykobiologi': {
                klient: "Traumer ændrer både nervesystem og biologi på dybe og sammenvævede måder, så hormoner kommer i ubalance, immunforsvaret påvirkes og søvnen forstyrres. Det ene påvirker det andet i en cirkel der kan føles uendelig. Men den gode nyhed er at det også virker den anden vej: ved at heale nervesystemet begynder biologien at normalisere sig, og når biologien forbedres, understøtter det nervesystemets healing. Vi arbejder med begge niveauer for at skabe den positive spiral hvor krop og nervesystem gradvist finder tilbage til balance sammen.",
                fagfolk: "PTSD modificerer både det autonome nervesystem og den underliggende neurobiologi i gensidigt forstærkende feedback loops. Kronisk autonom dysregulering driver neurobiologiske ændringer herunder HPA-akse dysregulering, forhøjede inflammatoriske markører og altered hjernevolumen, som igen opretholder den autonome dysregulering. Effektiv intervention adresserer begge niveauer simultant. Regulering af det autonome nervesystem normaliserer gradvist neurobiologiske parametre, mens forbedret neurobiologisk funktion understøtter autonom fleksibilitet. Denne bidirektionelle healingsproces dokumenteres gennem normalisering af cortisolprofiler, reduktion af inflammatoriske biomarkører og restaurering af adaptiv autonom responsivitet over behandlingsforløbet."
            },
            'nervesystem-traumer': {
                klient: "At arbejde med traumer er i sin essens det samme som at arbejde med nervesystemet, for de er uløseligt forbundne. Traumet er ikke bare en smertefuld erindring der bor i hovedet, men en tilstand der lever i nervesystemets reaktioner og kroppens forsvarsmønstre. Når vi hjælper nervesystemet med at finde sikkerhed og balance, bearbejder vi samtidig traumet. Og når traumet gradvist integreres, finder nervesystemet tilbage til sin naturlige fleksibilitet. Der er ikke to separate processer, men én samlet helingsrejse der udfolder sig i krop og nervesystem sammen.",
                fagfolk: "Traumatisk materiale eksisterer fundamentalt som autonome forsvarstilstande der persisterer i nervesystemet som incomplete defensive responses. Der er ikke en meningsfuld distinktion mellem traumatisk materiale og den autonome dysregulering det skaber, idet de udgør to aspekter af samme fænomen. Trauma-processing er derfor i sit fundament nervesystemsregulering, og nervesystemsregulering er den primære vej til traumeresolution. Denne forståelse informerer den kliniske tilgang hvor fokus rettes mod autonome processer frem for kognitiv narrativ bearbejdning. Titreret autonom regulering faciliterer naturlig completion og integration af traumatisk materiale uden behov for eksplicit reeksponering."
            },
            'nervesystem-relation': {
                klient: "Dit traumatiserede nervesystem lærte engang at verden og andre mennesker er farlige, og det bærer stadig denne lærdom i sine automatiske reaktioner. I vores trygge terapeutiske relation får dit nervesystem mulighed for at gøre nye erfaringer, hvor det langsomt lærer at nærhed også kan betyde sikkerhed og ro. Min rolige tilstedeværelse sender konstante signaler til dit system om at det er trygt at slappe af og åbne sig. Denne nye læring sker ikke gennem ord, men gennem den direkte nervesystem-til-nervesystem forbindelse i vores relation.",
                fagfolk: "Co-regulering inden for en robust terapeutisk alliance faciliterer sikker trauma-processing gennem direkte autonome modifikationer i klientens nervesystem. Terapeutens ventrale vagale regulering fungerer som ekstern reguleringsressource der gradvist internaliseres af klientens autonome system. Denne proces muliggør aktivering af traumatisk materiale inden for et relationelt sikkerhedsnet der forebygger retraumatisering og destabilisering. Den neurobiologiske mekanisme involverer spejlneuroner, prosodisk afstemning og autonome feedback loops mellem terapeut og klient. Konsistent co-regulering over tid reorganiserer klientens autonome baseline og udvider window of tolerance for traumerelateret activation."
            },
            'polyvagal-tilknytning': {
                klient: "Tilknytningstraumer i barndommen skabte usikre polyvagale mønstre i dit nervesystem, hvor systemet lærte at skifte mellem alarm og nedlukning i stedet for at hvile trygt i den grønne zone. Disse mønstre blev din normale måde at være i verden på og påvirker stadig dine relationer og dit velbefindende. I terapien arbejder vi systematisk med at lære dit nervesystem en ny erfaring af grøn sikkerhed, gradvist og respektfuldt. Når den grønne zone styrkes, bliver det muligt at nærme sig andre mennesker uden automatisk at gå i alarm.",
                fagfolk: "Developmental trauma inden for tilknytningssystemet dysregulerer polyvagale responses fundamentalt og skaber maladaptive autonome strategier der persisterer som karakterologiske mønstre. Det desorganiserede tilknytningsmønster reflekterer en polyvagal tilstand af simultant aktiverede men inkompatible autonome strategier. Earned secure attachment gennem den terapeutiske relation restaurerer polyvagal fleksibilitet ved at etablere ventral vagal kapacitet som stabil platform for relationel engagement. Denne proces kræver konsistent terapeutisk co-regulering over tid, hvor terapeutens egen ventrale vagale regulering gradvist internaliseres og muliggør mere fleksible autonome skift mellem tilstande i relationelle kontekster."
            },
            'polyvagal-kropsterapi': {
                klient: "Kropsarbejde er en af de mest direkte veje til at aktivere den grønne sikre zone i nervesystemet, som er fundamentet for al trauma-healing. Når kroppen oplever sikker berøring, rolig bevægelse og tryg kontakt, sender den kraftige signaler til nervesystemet om at det er sikkert at slappe af. Denne kropslige erfaring af grøn sikkerhed er langt stærkere end ord alene kan skabe. Med den grønne zone som stabilt fundament bliver det muligt for traumatisk materiale gradvist at integreres uden at nervesystemet overvældes af røde eller gule alarmtilstande.",
                fagfolk: "Somatisk intervention aktiverer ventrale vagale pathways der er nødvendige for sikker trauma-processing og integration af traumatisk materiale. Proprioceptiv stimulation, reguleret respiration og titreret interoceptiv opmærksomhed engagerer specifikt den ventrale vagale kompleks og styrker kapaciteten for social engagement og sikkerhedssignalering. Denne somatisk faciliterede ventrale vagale aktivering skaber det autonome fundament der muliggør kontrolleret oscillation mellem traumatisk activation og ressourcetilstande. Uden tilstrækkelig ventral vagal kapacitet risikerer trauma-processing at destabilisere klienten i dorsal vagal shutdown eller ukontrolleret sympatisk arousal. Kropsbaseret intervention er derfor central for etablering af autonome forudsætninger for traumebehandling."
            },
            'polyvagal-psykobiologi': {
                klient: "Den grønne sikre tilstand i nervesystemet skaber præcis den biologi som gør trauma-healing mulig. Når du er i den grønne zone, producerer kroppen hormoner der fremmer healing, immunforsvaret fungerer optimalt, og hjernen har kapacitet til at bearbejde og integrere svære oplevelser. I de røde og gule alarmzoner bruger kroppen al sin energi på overlevelse, og der er ingen ressourcer til healing. Derfor er vores første opgave altid at styrke din grønne zone, fordi den bogstaveligt talt skaber den biologiske kontekst hvor traumet kan heales.",
                fagfolk: "Ventral vagal aktivering optimerer den neurobiologiske kontekst for trauma-processing og integration gennem multiple parallelle mekanismer. Ventral vagal dominans normaliserer HPA-akse funktion, reducerer inflammatoriske cytokiner, øger BDNF-produktion og faciliterer hippocampal neurogenese, alle faktorer der er afgørende for succesfuld traumebearbejdning og hukommelsesrekonsolidering. Omvendt opretholder sympatisk og dorsal vagal dominans de neurobiologiske ændringer der karakteriserer PTSD. Den polyvagale tilstands direkte indflydelse på neurobiologisk funktion understreger vigtigheden af at etablere autonom sikkerhed som forudsætning for traumeintervention frem for at fokusere primært på kognitiv reprocessering."
            },
            'polyvagal-traumer': {
                klient: "Traumer fastlåste dit nervesystem i røde og gule alarmtilstande, hvor kroppen konstant forbereder sig på fare eller lukker helt ned for at overleve. Nøglen til at låse dette op er ikke at tale om traumet, men at finde vejen til den grønne sikre zone. Når nervesystemet har en stabil oplevelse af grøn sikkerhed, kan det traumatiske materiale gradvist begynde at bevæge sig og integreres. Uden denne grønne base vil ethvert forsøg på at arbejde med traumet risikere at overvælde systemet og forstærke de fastlåste mønstre.",
                fagfolk: "Traumatisk immobilisering, karakteriseret ved dorsal vagal dominans med sympatisk co-activation, repræsenterer nervesystemets mest primitive forsvarsstrategi og kræver ventral vagal etablering som absolut forudsætning før traumemateriale kan aktiveres sikkert i terapeutisk kontekst. Uden tilstrækkelig ventral vagal kapacitet vil aktivering af traumatisk materiale resultere i enten ukontrolleret sympatisk arousal eller dorsal vagal shutdown, begge potentielt retraumatiserende. Terapeutisk intervention prioriterer derfor systematisk opbygning af ventral vagale ressourcer gennem co-regulering, somatisk stabilisering og gradueret eksponering for sikkerhedssignaler. Denne sekvens er fundamental for ethvert traumebehandlingsforløb."
            },
            'polyvagal-relation': {
                klient: "Min rolige og sikre grønne tilstand sender konstante signaler til dit traumatiserede nervesystem om at det kan være trygt og sikkert her. Dit system aflæser automatisk min krop, min stemme og min tilstedeværelse for tegn på fare eller sikkerhed. Når det gentagne gange erfarer grøn sikkerhed i vores relation, begynder det langsomt at stole på at verden også kan rumme tryghed. Denne nervesystem-til-nervesystem kommunikation er langt kraftigere end ord alene, og den er selve fundamentet for at traumet kan heales i vores fælles rum.",
                fagfolk: "Terapeutens ventrale vagale tilstand fungerer som primær co-regulerende ressource der via neuroception direkte påvirker klientens autonome tilstand og skaber en sikker base for traumebearbejdning. Prosodisk afstemning, facial engagement og autonom resonans mellem terapeut og klient aktiverer klientens sociale engagementsystem og faciliterer gradvis ventral vagal kapacitetsopbygning. Denne co-reguleringsproces er afgørende for traumebehandling idet den etablerer det autonome sikkerhedsnet der muliggør kontrolleret aktivering af traumatisk materiale. Terapeutens kapacitet for at opretholde ventral vagal regulering under eksponering for klientens traumatiske materiale er en kernekompetence der kræver kontinuerlig supervision og egenomsorg."
            },
            'tilknytning-kropsterapi': {
                klient: "Tilknytningstraumer er dybt forankrede i kroppen fordi de blev indlært i en tid hvor din krop var din primære måde at opleve verden på. Spædbarnet forstår ikke med ord, men med krop og berøring. Derfor er forsigtigt kropsarbejde en særlig kraftfuld vej til at nå de tidligste tilknytningsmønstre og gradvist integrere det der blev splittet. Når kroppen erfarer sikker og opmærksom berøring i terapien, skaber det nye somatiske erfaringer der kan supplere og gradvist erstatte de gamle mønstre af utryghed og forsvar.",
                fagfolk: "Developmental trauma manifesteres primært somatisk idet præverbale tilknytningserfaringer kodes som implicitte kropslige procedurer frem for eksplicitte narrative erindringer. Disse somatiske tilknytningsmønstre inkluderer kronisk muskulær holding, respiratoriske restriktioner og reduceret kapacitet for interoceptiv awareness. Titreret somatisk intervention faciliterer memory reconsolidation ved at adressere traumatisk materiale i det somatiske format det oprindeligt blev encodet. Proprioceptiv og taktil stimulation inden for en sikker terapeutisk relation aktiverer implicitte tilknytningsminder og muliggør gradvis reorganisering af somatisk bundne tilknytningsmønstre. Denne proces kræver langvarig terapeutisk forpligtelse og præcis somatisk afstemning."
            },
            'tilknytning-psykobiologi': {
                klient: "Tilknytningstraumer i de tidlige leveår formede din biologi på et tidspunkt hvor krop og hjerne var mest sårbare og formbare. Stresshormoner, immunsystem og hjernens udvikling blev alle påvirket af den manglende tryghed, og disse biologiske forandringer kan stadig mærkes i dag som træthed, sygdom eller følelsesmæssig ustabilitet. Men biologien er ikke fastlåst for altid. Healing af tilknytningstraumer gennem trygge relationer og terapeutisk arbejde kan gradvist normalisere de biologiske mønstre og give kroppen mulighed for at finde den balance den aldrig fik chancen for at etablere.",
                fagfolk: "Developmental trauma modificerer neurobiologi fundamentalt i kritiske udviklingsperioder og påvirker HPA-akse kalibrering, synaptisk pruning, myelinisering og epigenetisk programmering med langvarige konsekvenser for stressrespons og reguleringskapacitet. Disse neurobiologiske ændringer reflekterer tilpasning til et utrygt tilknytningsmiljø og persisterer som biologiske signatures af tidlig adversity. Terapeutisk tilknytningsarbejde inden for en konsistent og responsiv terapeutisk relation kan gradvist normalisere disse biologiske signatures gennem neuroplasticitetsmekanismer. Longitudinelle studier dokumenterer at earned secure attachment associeres med normalisering af cortisoldøgnrytme, reduktion af inflammatoriske markører og øget prefrontal cortex aktivitet under emotionel regulering."
            },
            'tilknytning-traumer': {
                klient: "Traumer i tilknytning er de dybeste og mest forvirrende af alle traumer, fordi den person der skulle beskytte dig også var kilden til faren. Dit nervesystem lærte at nærhed er både livsnødvendig og farlig på samme tid, en umulig situation for et barn. Denne doble binding skaber en indre splittelse der kan påvirke alle dine relationer som voksen. I terapien arbejder vi med ekstra forsigtighed og tålmodighed, fordi vi ved at tillid både er det du mest har brug for og det sværeste for dig at give.",
                fagfolk: "Developmental trauma inden for tilknytningssystemet resulterer i desorganiseret tilknytning karakteriseret ved modsatrettede impulser af tilknytningssøgen og tilknytningsflugt, hvor tilknytningsfiguren simultant aktiverer tilknytnings- og frygtresponser. Denne paradoksale tilstand skaber kompleks PTSD med pervasive vanskeligheder med affektregulering, selvoplevelse og relationel funktion. Terapeutisk intervention kræver ekstra forsigtighed og specifik opmærksomhed på overførings- og modoverføringsdynamikker der aktiveres i behandlingen. Terapeutens evne til at forblive konsistent og responsiv trods klientens oscillation mellem idealisering og devaluering er afgørende for gradvis reorganisering af tilknytningsrepræsentationer."
            },
            'tilknytning-relation': {
                klient: "Vores terapeutiske relation bliver det sikre og trygge sted hvor dine tilknytningstraumer gradvist kan heales og transformeres. Her får du mulighed for at gøre nye erfaringer med nærhed, erfaringer der er fundamentalt anderledes end dem du voksede op med. Min konsistente og pålidelige tilstedeværelse viser dit nervesystem at relationer også kan være et sted for tryghed og ro. Langsomt kan det tillidsfulde bånd mellem os blive en bro til nye måder at være i relation med andre mennesker på. Denne helende kraft i relationen er uerstattelig.",
                fagfolk: "Den terapeutiske relation fungerer som primær korrigerende emotionel erfaring for klienter med developmental trauma og er central for reorganisering af indre arbejdsmodeller for tilknytning. Konsistent terapeutisk responsivitet over tid etablerer earned secure attachment der gradvist modificerer klientens tilknytningsmønstre og autonome reguleringsstrategier. Denne proces kræver langvarig terapeutisk forpligtelse og terapeutens kapacitet for at rumme de intense overføringsdynamikker der karakteriserer arbejdet med tilknytningstraumatiserede klienter. Terapeutens egen tilknytningssikkerhed og supervisionsdeltagelse er afgørende forudsætninger for at opretholde den relationelle kvalitet der muliggør dyb tilknytningsheling."
            },
            'kropsterapi-psykobiologi': {
                klient: "Når kroppen gennem forsigtigt terapeutisk arbejde begynder at integrere det traumatiske materiale der har været frosset og fastlåst, følger biologien med i helingsprocessen. Stresshormoner normaliseres gradvist, immunforsvaret styrkes, søvnkvaliteten forbedres, og inflammationstilstande aftager. Kroppen kender vejen til sin egen balance, og kropsarbejdet hjælper med at fjerne de forhindringer der har stået i vejen. Denne biologiske normalisering er ikke bare en sidegevinst, men en central del af healingen der skaber fundamentet for varig bedring og øget livskvalitet i hverdagen.",
                fagfolk: "Somatisk trauma-processing påvirker den underliggende neurobiologi direkte og kan dokumenterbart normalisere HPA-akse dysregulering der karakteriserer kronisk traumatisering. Completion af incomplete somatiske forsvarsresponser reducerer den toniske sympatiske aktivering der driver forhøjet cortisolproduktion og inflammatorisk cytokinudskillelse. Denne normalisering af det neuroendokrine stressresponssystem har kaskadeeffekter på immunfunktion, søvnarkitektur og neuroplasticitet. Longitudinelle studier af kropsbaserede traumeinterventioner viser signifikant reduktion i inflammatoriske biomarkører og normalisering af cortisoldøgnrytme. Den somatiske tilgangs direkte engagement med autonome processer forklarer dens effektivitet i at modificere de biologiske konsekvenser af traumatisering."
            },
            'kropsterapi-traumer': {
                klient: "Traumer sidder i kroppen som ufærdige forsvarsbevægelser der aldrig blev fuldført, fordi situationen var for overvældende. Måske ville du løbe men kunne ikke, eller ville skubbe væk men var for lille. Disse ufærdige handlinger lever stadig som spændinger, rysten eller følelsesløshed i din krop. Forsigtigt kropsarbejde giver disse forsvarsbevægelser mulighed for endelig at blive fuldført i et trygt rum. Når kroppen fuldfører det der blev afbrudt, opleves ofte en dyb lettelse og frigørelse af energi der har været bundet i årevis.",
                fagfolk: "Incomplete defensive responses, herunder flugt, kamp, orienteringsreaktioner og beskyttende bevægelser, manifesteres somatisk som kronisk muskulær holding, fascial binding og autonome dysreguleringsmønstre der opretholder traumatilstanden. Disse somatiske manifestationer repræsenterer nervesystemets forsøg på at fuldføre afbrudte overlevelseshandlinger. Titreret somatisk intervention faciliterer completion af disse responses gennem gradueret proprioceptiv aktivering inden for window of tolerance. Terapeutisk fokus rettes mod at støtte de naturlige motoriske sekvenser der spontant emergerer når somatisk bundne forsvarsresponser mobiliseres i et sikkert terapeutisk rum med tilstrækkelig relational containment."
            },
            'kropsterapi-relation': {
                klient: "Tryg og opmærksom berøring i vores terapeutiske relation lærer din traumatiserede krop at fysisk kontakt med et andet menneske også kan betyde sikkerhed, omsorg og ro. For mange traumatiserede mennesker har berøring været forbundet med fare, smerte eller grænseoverskridelse, og kroppen bærer denne erfaring som automatisk anspændthed eller tilbagetrækning. Når du gentagne gange oplever respektfuld og tilpasset berøring i et trygt rum, begynder kroppen langsomt at revidere sin grundlæggende forståelse af verden. Denne kropslige erfaring af sikker relation er dybt transformerende.",
                fagfolk: "Terapeutisk touch kombineret med robust relational safety faciliterer somatisk trauma-integration gennem simultant engagement af tilknytningssystemet og det somatiske processerende system. Den taktile kontakt inden for en sikker terapeutisk relation aktiverer oxytocinproduktion og ventrale vagale pathways der modulerer den autonome stressrespons og skaber optimale betingelser for somatisk reconsolidation af traumatisk materiale. Terapeutens somatiske afstemning, herunder tilpasning af trykintensitet, tempo og placering baseret på kontinuerlig aflæsning af klientens autonome tilstand, er afgørende for at opretholde den somatiske intervention inden for klientens window of tolerance og undgå somatisk retraumatisering."
            },
            'psykobiologi-traumer': {
                klient: "Traumer ændrer kroppens biologi dybtgående og efterlader spor i hormonsystemet, immunforsvaret, hjernens struktur og kroppens inflammationsniveau. Disse biologiske forandringer er ikke tegn på svaghed men på nervesystemets forsøg på at tilpasse sig en overvældende situation. Når traumet heales gennem terapeutisk arbejde, begynder disse biologiske markører gradvist at normalisere sig. Stresshormoner finder en sundere rytme, immunforsvaret styrkes, og inflammationen aftager. Denne biologiske normalisering bekræfter at healing ikke bare sker i sindet, men i hele kroppens fysiologi og cellebiologi.",
                fagfolk: "PTSD modificerer fundamentalt HPA-aksen med karakteristisk fladt cortisoldøgnrytme og dysreguleret stressrespons, samt forhøjede inflammatoriske profiler med øgede proinflammatoriske cytokiner der bidrager til systemisk inflammation og øget sygdomsrisiko. Effektiv trauma-processing kan dokumenterbart normalisere disse biomarkører gennem restaurering af autonom fleksibilitet og rebalancering af det neuroendokrine system. Longitudinelle behandlingsstudier viser at succesfuld traumebehandling associeres med normalisering af cortisolprofiler, reduktion af inflammatoriske markører herunder CRP og IL-6, samt øget hippocampal volumen. Disse biologiske forandringer korrelerer med klinisk bedring og udgør objektive mål for behandlingseffektivitet."
            },
            'psykobiologi-relation': {
                klient: "Vores trygge terapeutiske relation er bogstaveligt talt en form for biologisk medicin der gør trauma-healing mulig. Når du sidder sammen med et andet menneske der er roligt og trygt til stede, ændrer det din krops kemi i retning af balance og healing. Stresshormoner dæmpes, immunforsvaret styrkes, og hjernen producerer stoffer der fremmer tilknytning og tryghed. Denne biologiske forandring sker automatisk gennem den direkte nervesystem-til-nervesystem forbindelse mellem os. Vores relation skaber altså ikke bare en psykologisk oplevelse af tryghed, men en reel fysiologisk transformation.",
                fagfolk: "En secure terapeutisk alliance modificerer klientens neurobiologi direkte gennem co-reguleringsmekanismer og skaber den optimale neurobiologiske kontekst for trauma-processing og integration. Oxytocinudskillelse faciliteret af konsistent relationel sikkerhed modulerer HPA-akse aktivitet, reducerer amygdala reaktivitet og øger prefrontal cortex kapacitet for emotionel regulering. Disse neurobiologiske ændringer etablerer forudsætningerne for effektiv traumebearbejdning ved at optimere nervesystemets kapacitet for at tolerere og integrere traumatisk materiale. Den terapeutiske relations direkte neurobiologiske indflydelse understreger at relationen ikke blot er kontekst for behandling, men en aktiv neurobiologisk intervention i sig selv."
            },
            'traumer-relation': {
                klient: "Traumer kan kun heales i en atmosfære af dyb sikkerhed og tillid, og vores terapeutiske relation er selve det helende rum hvor denne transformation kan ske. Alene kan traumet føles uoverskueligt og overvældende, men i vores fælles relation kan smerten deles og bæres. Min stabile tilstedeværelse giver dit nervesystem den trygge base hvorfra det kan begynde at se på det svære uden at gå i stykker. Vores relation er ikke bare rammen for healing, den er i sig selv en dybt helende kraft der transformerer traumets isolation til forbundethed.",
                fagfolk: "Traumebehandling forudsætter en robust terapeutisk alliance som absolut klinisk nødvendighed, idet aktivering af traumatisk materiale uden tilstrækkelig relationel containment og co-regulering risikerer retraumatisering med potentiel forværring af symptomatologi og autonom dysregulering. Uden etableret relational safety mangler klienten den eksterne reguleringsressource der er nødvendig for at tolerere den autonome aktivering som traumeprocessering uundgåeligt medfører. Terapeutens evne til at opretholde egen regulering, til konsistent at tilbyde co-regulering og til præcist at dosere traumeeksponering inden for klientens aktuelle window of tolerance er afgørende kernekompetencer der skal vedligeholdes gennem kontinuerlig supervision og egenomsorg."
            },
        }
    },
    sovn: {
        name: "Søvn",
        circles: {
            nervesystem: {
                klient: {
                    title: "Søvn og Nervesystemet",
                    text: "Søvn kræver at nervesystemet kan slippe kontrollen og falde til ro. Når du har søvnproblemer, er det ofte fordi dit nervesystem stadig er i alarmberedskab, selv når du lægger dig. Det føler sig ikke trygt nok til at give slip. I vores arbejde sammen lærer vi dit system, at det er sikkert at slappe helt af og overlade sig til søvnen. Vi bruger beroligende øvelser og teknikker, der gradvist signalerer til dit nervesystem, at det kan hvile nu. Langsomt genopdager kroppen den naturlige evne til at glide ind i dyb, genoprettende søvn."
                },
                fagfolk: {
                    title: "Søvnregulering via ANS",
                    text: "Søvn kræver ventral vagal dominans og parasympatisk activation med sufficient down-regulation af sympatisk arousal. Søvnforstyrrelser er ofte resultat af manglende down-regulation capability, hvor systemet forbliver i hypervigilant tilstand trods søvnbehov. Den terapeutiske intervention fokuserer på vagal tone-opbygning gennem targeted øvelser der styrker den ventrale vagale bremse. Circadian rhythm restoration understøttes gennem regulering af autonome mønstre og normalisering af arousal-cyklus. Systematisk neuroception-kalibrering muliggør at systemet kan registrere sengetidssituationen som sikker nok til at tillade den nødvendige bevidsthedstransition fra vågen tilstand til søvn."
                }
            },
            polyvagal: {
                klient: {
                    title: "Polyvagal og Søvn",
                    text: "Søvn er kun mulig i den grønne sikre zone, hvor kroppen føler sig tryg og beskyttet. Hvis dit system sidder fast i den gule alarmzone, er du for aktiveret til at falde i søvn - hjertet banker, tankerne kører, og kroppen er parat til handling. Nogle sidder fast i den røde zone og oplever en udmattelse der ikke fører til rigtig søvn. Vi finder sammen veje til den dybe grønne ro, som er den absolutte forudsætning for naturlig, genoprettende søvn. Det handler om at lære dit system vejen tilbage til ægte sikkerhed."
                },
                fagfolk: {
                    title: "Polyvagal Teori og Søvn",
                    text: "Søvn kræver ventral vagal sikkerhed som fundament for den fysiologiske transition fra vågenhed til søvn. Insomni er ofte udtryk for sympatisk hyperarousal, hvor systemet forbliver i mobiliseringstilstand, eller dorsal shutdown uden ventral vagal adgang, hvilket producerer udslidte men ikke-restorativ søvntilstande. Det terapeutiske mål er etablering af polyvagal fleksibilitet, der muliggør naturlig circadian oscillation mellem activation og deactivation. Interventionen fokuserer på at styrke den ventrale vagale pathway, så systemet kan navigere smidigt ned gennem arousal-niveauerne og opnå den parasympatiske dominans der tillader dyb søvn."
                }
            },
            tilknytning: {
                klient: {
                    title: "Tilknytning og Søvn",
                    text: "Hvis du aldrig lærte at verden var sikker nok til at lukke øjnene i, har dit system svært ved at sove. Som lille havde du måske brug for at være vågen og opmærksom for at holde dig sikker. Den strategi var nødvendig dengang, men nu forstyrrer den din søvn. Vi arbejder med at skabe den manglende grundsikkerhed, som du ikke fik tidligt i livet. Gennem vores trygge relation og målrettede øvelser kan dit nervesystem gradvist lære, at det er sikkert at give slip og hvile dybt - også når du er alene om natten."
                },
                fagfolk: {
                    title: "Attachment og Søvnregulering",
                    text: "Desorganiseret og usikker tilknytning korrelerer signifikant med søvnforstyrrelser gennem hele livsspannet. Manglende early co-regulation af arousal i tilknytningsrelationen påvirker udviklingen af autonom reguleringskapacitet, herunder søvnkapacitet, livslangt. Børn med utrygge tilknytningsmønstre internaliserer ikke tilstrækkeligt effektive self-soothing strategier, hvilket manifesterer sig som vedvarende søvnproblemer i voksenlivet. Earned secure attachment, opbygget gennem terapeutisk relation, kan restaurere naturlig søvnregulering ved at tilbyde de korrigerende erfaringer af co-regulation og sikkerhed, der muliggør internalisering af kapacitet til autonom down-regulation ved sengetid."
                }
            },
            kropsterapi: {
                klient: {
                    title: "Kropslig Søvnforbedring",
                    text: "Spændinger i kroppen holder dig vågen, selv når du er træt og desperat gerne vil sove. Kæben er spændt, skuldrene sidder oppe ved ørerne, og maven er hård. Din krop er stadig i alarmberedskab. Gennem kropsbehandling og særligt åndedrætsarbejde lærer kroppen langsomt at slippe disse spændinger og finde den dybe ro, der inviterer søvn. Vi arbejder med blid berøring, fasciel udløsning og vejrtrækningsøvelser, der aktiverer dit afslappende nervesystem. Efterhånden husker kroppen, hvordan det føles at være tryg nok til at lade søvnen komme helt naturligt."
                },
                fagfolk: {
                    title: "Somatisk Søvnintervention",
                    text: "Muskulær hypertonus og fasciale restriktioner inhiberer den parasympatiske activation, der er nødvendig for søvn-transition. Kronisk somatisk spænding, særligt i diaphragma, psoas og cervikale region, fastholder sympatisk arousal og forhindrer den fysiologiske nedregulering som søvn kræver. Fascial release-teknikker kombineret med vagus-aktivering gennem diaphragmatisk åndedræt faciliterer transition til en søvn-permissiv somatisk tilstand. Interventionen adresserer den embodied hypervigilance der manifesterer sig som muskelspænding og overfladisk respiration. Systematisk somatisk arbejde genopretter kroppens kapacitet til at indgå i den dybe parasympatiske tilstand som er forudsætningen for restorativ søvn."
                }
            },
            psykobiologi: {
                klient: {
                    title: "Søvnens Biologi",
                    text: "Din søvn-vågen rytme styres af hormoner og nervesystemet i et fint samspil. Når du er stresset eller urolig, producerer kroppen for meget cortisol om natten, mens søvnhormonet melatonin undertrykkes. Det er derfor du ligger vågen trods træthed. Vi arbejder med at normalisere denne biologi, så din naturlige døgnrytme kan genetableres. Gennem nervesystemsøvelser og reguleringsteknikker hjælper vi kroppen med at genfinde sin naturlige rytme. Når stresshormoner falder og melatonin stiger på de rigtige tidspunkter, vender den gode søvn gradvist tilbage af sig selv."
                },
                fagfolk: {
                    title: "Søvn-Neurobiologi",
                    text: "Søvnforstyrrelser involverer dysreguleret HPA-akse med forhøjet natkortisol, som modvirker den naturlige søvn-inducerende proces. Reduceret melatoninsyntese og altered circadian rhythm forstyrrer den normale søvn-vågen cyklus yderligere. Den sympatiske dominans opretholder en katabol tilstand, der er inkompatibel med den anabole restorationsproces, som søvn repræsenterer. Autonomt nervesystemregulering kan normalisere disse neuroendokrine mønstre gennem vagal tone restoration, hvilket gradvist genetablerer den fysiologiske oscillation mellem kortisol og melatonin. Terapeutisk intervention sigter mod at restituere den naturlige circadiane rytme gennem systematisk nedregulering af HPA-aksens baseline aktivering."
                }
            },
            traumer: {
                klient: {
                    title: "Traumer og Søvn",
                    text: "Traumer skaber en tilstand af hyper-vågenhed, hvor dit system ikke tør slippe kontrollen nok til at sove. Det er som om din indre vagt aldrig går af vagt - den scanner konstant for fare, selv i dit trygge soveværelse. Denne reaktion gav engang mening som beskyttelse, men nu holder den dig fanget i søvnløshed. Ved at arbejde med traumerne i et trygt tempo kan vi berolige dit alarmsystem. Efterhånden som de uforløste oplevelser bearbejdes og integreres, kan den naturlige søvnevne gradvist returnere, fordi systemet ikke længere behøver konstant vagtsomhed."
                },
                fagfolk: {
                    title: "Traumatisk Hypervigilance",
                    text: "PTSD-relateret hypervigilance inhiberer søvn gennem persistent sympatisk activation, hvor amygdalas trusselsvurdering forbliver forhøjet uanset kontekstuel sikkerhed. Traumatiske erfaringer konsoliderer neurale mønstre der prioriterer vågenhed over søvn som overlevelsesrespons. Natlige flashbacks og mareridt forstyrrer søvnarkitekturen yderligere og cementerer søvn som en usikker tilstand. Systematisk traumebearbejdning reducerer baseline arousal og restaurerer kapacitet for den circadiane down-regulation, der er nødvendig for søvn. Titreret intervention gennem somatisk og relationel traumeterapi muliggør gradvis rekalibrering af neuroceptionen, så søvnsituationen genetableres som sikker."
                }
            },
            relation: {
                klient: {
                    title: "Tryg nok til at Sove",
                    text: "Vores arbejde sammen skaber en dyb sikkerhed, som dit nervesystem kan tage med sig hjem og ind i natten. Hver gang vi mødes, og du oplever ægte tryghed i vores relation, lagrer dit system en ny erfaring af sikkerhed. Disse erfaringer bygger sig langsomt op og bliver til en indre ro, som du kan trække på, når du lægger dig til at sove. Når nervesystemet har lært gennem gentagne oplevelser, at verden er sikker nok, og at du kan stole på din krop, kommer søvnen mere og mere naturligt tilbage."
                },
                fagfolk: {
                    title: "Relationel Søvnregulering",
                    text: "Terapeutisk co-regulation opbygger intern kapacitet til self-soothing, som er nødvendig for autonom søvn-transition. Gentagen erfaring af ventral vagal sikkerhed i den terapeutiske relation generaliserer gradvist til kapacitet for autonomous down-regulation ved sengetid. Klienten internaliserer terapeuten som regulerende objekt, hvilket muliggør en indre oplevelse af sikkerhed uden ekstern co-regulering. Denne proces kræver konsistent terapeutisk tilstedeværelse over tid, da hvert møde konsoliderer neurale pathways for selvregulering. Den relationelle erfaring transformerer søvnsituationen fra en potentiel trussel til en kontekst af tilstrækkelig sikkerhed for at tillade bevidsthedstransition."
                }
            },
        },
        connections: {
            'nervesystem-polyvagal': {
                klient: "Søvn kræver at nervesystemet er i den grønne, rolige zone. Polyvagal forståelse viser os præcist, hvorfor dit system ikke kan falde til ro, og hvad der skal til for at komme derhen. Når vi forstår de tre tilstande - grøn sikkerhed, gul alarm og rød nedlukning - kan vi identificere, hvor dit system sidder fast om natten. Med målrettede øvelser hjælper vi dit nervesystem med at finde vej ned i den dybe grønne tilstand, hvor kroppen føler sig tryg nok til at overlade sig helt til søvnen og den naturlige hvile.",
                fagfolk: "Søvn kræver ventral vagal dominans som fysiologisk fundament for bevidsthedstransitionen fra vågenhed til søvn. Polyvagal teori giver den teoretiske ramme for at forstå, hvorfor søvnforstyrrelser opstår som resultat af autonom dysregulering. Intervention baseret på polyvagal forståelse faciliterer systematisk transition til en søvn-permissiv tilstand gennem målrettet aktivering af ventrale vagale pathways. Dette inkluderer prosodisk stimulation, respiratorisk sinus arrhythmia-træning og neuroception-kalibrering. Den polyvagale tilgang muliggør præcis identifikation af det autonome mønster der opretholder søvnforstyrrelsen og guide den specifikke intervention."
            },
            'nervesystem-tilknytning': {
                klient: "Søvnproblemer har ofte dybe rødder i utryg tilknytning, hvor du som barn ikke fik den co-regulering, der lærte nervesystemet at falde til ro. Når ingen hjalp dig med at berolige dig, lærte dit system aldrig den naturlige vej ind i søvn. Vi skaber den manglende sikkerhed gennem vores terapeutiske relation, så dit nervesystem kan lære det, det ikke lærte dengang. Gradvist opbygger vi en indre følelse af tryghed, der gør det muligt for dit system at slippe kontrollen og hvile dybt, også når du er alene.",
                fagfolk: "Manglende early co-regulation af arousal i tilknytningsrelationen påvirker udviklingen af søvnkapacitet fundamentalt. Uden tilstrækkelig ekstern regulering i de tidlige år udvikler barnet ikke de interne reguleringsmekanismer, der er nødvendige for autonom søvn-transition. Denne tilknytningsbaserede søvndysfunktion manifesterer sig som vedvarende vanskeligheder med self-soothing ved sengetid. Earned secure attachment, etableret gennem den terapeutiske relation, kan restaurere søvnregulering ved at tilbyde korrigerende co-regulerende erfaringer. Disse erfaringer internaliseres gradvist og opbygger den autonome reguleringskapacitet, som den oprindelige tilknytningsrelation ikke faciliterede tilstrækkeligt."
            },
            'nervesystem-kropsterapi': {
                klient: "Kroppen kan simpelthen ikke sove, når den er anspændt og i alarmberedskab. Spændinger i nakke, skuldre, kæbe og mave holder nervesystemet aktiveret, selv når du er udmattet. Kropsarbejde lærer kroppen at slippe disse dybe spændingsmønstre, lag for lag. Gennem blid berøring, fasciel udløsning og vejrtrækningsøvelser begynder nervesystemet at registrere, at det er trygt at slappe af. Når kroppen finder ro, følger nervesystemet med, og den naturlige vej ind i søvnen åbner sig. Det er en gradvis proces, hvor kroppen genontdækker sin medfødte evne til hvile.",
                fagfolk: "Somatisk hypertonus inhiberer den parasympatiske activation, der er nødvendig for søvn-transition. Kronisk muskulær spænding, særligt i diaphragma og cervikale fascia, opretholder sympatisk arousal og forhindrer den fysiologiske nedregulering, som søvn kræver. Fascial release-teknikker adresserer de somatiske barrierer for parasympatisk dominans og faciliterer den autonome transition til søvn-permissiv tilstand. Kombinationen af manuel intervention og respiratorisk træning aktiverer vagale pathways, der direkte understøtter søvn-processen. Den somatiske tilgang er særligt effektiv, fordi den omgår kognitive processer og arbejder direkte med det autonome nervesystems fysiologiske grundlag."
            },
            'nervesystem-psykobiologi': {
                klient: "Når nervesystemet roer sig, normaliseres søvnens biologi helt naturligt. Stresshormonet cortisol falder til det niveau, der hører natten til, og søvnhormonet melatonin stiger, som det skal. Det er et fint samspil mellem nervesystemet og hormonerne, og når den ene side kommer i balance, følger den anden med. Vi arbejder med at berolige nervesystemet gennem målrettede øvelser og teknikker, hvilket gradvist genopretter den naturlige døgnrytme. Dit system genfinder sin biologiske visdom om, hvornår det er tid til at være vågen, og hvornår det er tid til søvn.",
                fagfolk: "Nervesystemsregulering normaliserer den circadiane rytme og søvn-relaterede neuroendokrine processer gennem direkte påvirkning af HPA-aksen. Sympatisk hyperarousal opretholder forhøjet kortisolproduktion, der inhiberer melatoninsyntese og forstyrrer den naturlige søvn-vågen cyklus. Terapeutisk intervention rettet mod autonom regulering reducerer baseline sympatisk tonus og muliggør genetablering af normal kortisol-diurnal rytme. Den resulterende normalisering af HPA-akse funktionen faciliterer appropriate melatoninfrigivelse og restoration af circadian oscillation. Denne neuroendokrine normalisering er et direkte resultat af forbedret vagal tone og parasympatisk kapacitet opnået gennem systematisk nervesystemsarbejde."
            },
            'nervesystem-traumer': {
                klient: "Traumer skaber en konstant vågenhed i nervesystemet, der direkte forhindrer søvn. Dit system lærte, at det var farligt at slippe kontrollen, og den lektie sidder dybt i kroppen. Selv i et trygt soveværelse reagerer nervesystemet, som om fare er nært forestående. Healing af traumer handler om at vise dit nervesystem, at den gamle fare er overstået, og at det nu er sikkert at hvile. Efterhånden som traumerne bearbejdes, falder det autonome arousal-niveau, og nervesystemet genopdager sin naturlige evne til at glide ind i dyb, genoprettende søvn.",
                fagfolk: "PTSD-relateret hypervigilance inhiberer søvn gennem persistent sympatisk activation, hvor det autonome nervesystem forbliver i en forhøjet alarmberedskabstilstand uanset kontekstuel sikkerhed. Traumatisk arousal konsolideres i neurale netværk, der prioriterer vagtsomhed over hvile. Systematisk trauma-processing reducerer baseline arousal gennem rekalibrering af amygdalas trusselsvurdering og nedregulering af den sympatiske tonus. Somatisk traumebearbejdning er særligt relevant for søvnrestauration, da den direkte adresserer den kropslige hyperaktivering. Gradvis desensitisering af traumerelaterede triggere muliggør, at nervesystemet kan registrere søvnsituationen som tilstrækkeligt sikker til at tillade bevidsthedstransition."
            },
            'nervesystem-relation': {
                klient: "Dit nervesystem lærer dyb ro gennem vores terapeutiske relation - en ro, der er dyb nok til søvn. Hver gang vi mødes, og du oplever at blive mødt med varme og tilstedeværelse, lagrer dit system en ny erfaring af sikkerhed. Disse erfaringer bygger sig langsomt op inde i dig og bliver til en indre ressource, du kan trække på om natten. Nervesystemet lærer gradvist, at det er trygt at give slip, fordi det har erfaret ægte sikkerhed i relationen. Denne indre tryghed er den bro, der fører fra vågenhed til naturlig, dyb søvn.",
                fagfolk: "Terapeutisk co-regulation opbygger intern kapacitet til den autonome down-regulation, der er nødvendig for søvn-transition. Gennem gentagen erfaring af ventral vagal sikkerhed i den terapeutiske relation udvikler klienten progressivt evnen til selvregulering ved sengetid. Den relationelle erfaring internaliseres som nye neurale pathways for autonomt selvberoligelse, der kan aktiveres uafhængigt af ekstern co-regulering. Denne generalisering fra terapeutisk kontekst til søvnsituation kræver konsistent relationel sikkerhed over tid. Processen transformerer søvn fra en kontekst af potentiel sårbarhed til en situation, hvor systemet kan tillade nedregulering."
            },
            'polyvagal-tilknytning': {
                klient: "Utryg tilknytning skabte et nervesystem, der aldrig rigtig lærte at slappe af til søvn. Fordi du ikke oplevede tilstrækkelig tryghed som lille, blev dit system vant til at være på vagt, selv om natten. Den grønne sikre zone, som søvn kræver, var sjældent tilgængelig. I terapien lærer vi dit system sikkerhed på ny. Gennem trygge, gentagne oplevelser bygger vi den polyvagale fleksibilitet op, der gør det muligt at bevæge sig ned i den dybe grønne ro. Gradvist opdager dit system, at det er sikkert at lukke øjnene og sove.",
                fagfolk: "Usikker tilknytning korrelerer signifikant med søvnforstyrrelser, medieret gennem det polyvagale systems manglende udvikling af ventral vagal kapacitet. Uden tilstrækkelig co-regulation i tilknytningsrelationen udvikles den autonome fleksibilitet, der er nødvendig for circadian oscillation, ikke optimalt. Det polyvagale system forbliver biased mod defensive tilstande, der er inkompatible med søvn. Earned secure attachment, faciliteret gennem den terapeutiske relation, opbygger den ventrale vagale kapacitet, der muliggør transition til søvn-permissiv tilstand. Denne proces restaurerer den polyvagale fleksibilitet og faciliterer den naturlige autonome nedregulering, som søvn kræver."
            },
            'polyvagal-kropsterapi': {
                klient: "Kropsarbejde er en af de mest direkte veje til at aktivere den grønne ro, der gør søvn mulig. Når vi arbejder med kroppen gennem blid berøring, fasciel udløsning og dybe vejrtrækningsøvelser, sender vi kraftige signaler til nervesystemet om sikkerhed. Kroppen begynder at slippe sine spændinger, og det polyvagale system skifter fra alarm til ro. Denne kropslige erfaring af dyb afslapning lærer dit system vejen ind i den grønne zone, hvor søvnen naturligt kan komme. Efterhånden bliver denne vej lettere og lettere at finde, også på egen hånd.",
                fagfolk: "Somatisk intervention aktiverer ventrale vagale pathways, der faciliterer den autonome transition nødvendig for søvn. Kropslige teknikker som fascial release, diaphragmatisk åndedræt og afferent vagal stimulation påvirker direkte det polyvagale systems tilstandsregulering. Disse interventioner omgår kognitive processer og arbejder direkte med det autonome nervesystems fysiologiske mekanismer. Den somatiske tilgang er særligt effektiv for søvnproblemer, fordi den adresserer den kropslige komponent af polyvagal dysregulering. Systematisk kropsarbejde opbygger kapacitet for ventral vagal dominans og faciliterer den polyvagale fleksibilitet, der muliggør naturlig søvn-transition."
            },
            'polyvagal-psykobiologi': {
                klient: "Når dit system er i den grønne sikre tilstand, skabes den rette biologi for søvn helt naturligt. Stresshormonet cortisol falder, og søvnhormonet melatonin begynder at stige, præcis som det skal om aftenen. Det er den polyvagale sikkerhed, der giver kroppen tilladelse til at skifte til natmodus. Når systemet derimod er i gul alarm, forbliver cortisol højt og blokerer søvnens biologi. Vi arbejder med at hjælpe dit system til den grønne zone, hvor hormonerne automatisk finder deres naturlige natlige rytme og inviterer søvnen.",
                fagfolk: "Ventral vagal aktivering optimerer de circadiane hormoner og faciliterer den neuroendokrine profil, der er nødvendig for søvn. Polyvagal sikkerhed muliggør appropriate HPA-akse nedregulering med faldende kortisol og stigende melatoninsyntese i aftentimerne. Sympatisk hyperarousal, karakteristisk for manglende ventral vagal adgang, opretholder forhøjet kortisolproduktion, der direkte inhiberer melatoninfrigivelse. Den polyvagale intervention adresserer denne autonome dysregulering ved at styrke ventral vagal kapacitet, hvilket normaliserer den neuroendokrine oscillation, der understøtter den naturlige circadiane rytme og dermed søvnens biologiske forudsætninger."
            },
            'polyvagal-traumer': {
                klient: "Traumer har fastlåst dit system i en tilstand af konstant vågenhed, hvor den grønne sikkerhed er svær at nå. Dit polyvagale system lærte, at fare var overalt, og den lektie sidder dybt. Selv om natten forbliver systemet i gul alarm eller rød nedlukning, begge tilstande der forhindrer ægte, genoprettende søvn. Vejen tilbage til søvn går gennem genetablering af den grønne polyvagale sikkerhed. Det kræver tid og tålmodighed, men gennem forsigtigt traumearbejde kan dit system gradvist lære, at faren er ovre, og at søvn er sikkert.",
                fagfolk: "Traumatisk hyperarousal inhiberer ventral vagal adgang og fastholder det polyvagale system i defensive tilstande, der er inkompatible med søvn. Den traumatisk konsoliderede neuroception vurderer søvnsituationens sårbarhed som truende, hvilket opretholder sympatisk mobilisering eller dorsal immobilisering. Genetablering af polyvagal sikkerhed er en nødvendig forudsætning for søvnrestauration. Titreret traumebearbejdning, der respekterer det polyvagale systems kapacitet, muliggør gradvis rekalibrering af neuroceptionen. Denne proces udvider det autonome tolerancevindue og genetablerer kapaciteten for den ventrale vagale dominans, som søvn-transitionen kræver."
            },
            'polyvagal-relation': {
                klient: "Min ro og tilstedeværelse i vores møder lærer dit nervesystem den dybe sikkerhed, der muliggør søvn. Når du sidder overfor et nervesystem i grøn ro, begynder dit eget system at spejle den tilstand. Det er polyvagal teori i praksis - vi regulerer hinanden. Hver session giver dit system en erfaring af, at det er muligt at være i dyb ro sammen med et andet menneske. Disse erfaringer akkumuleres og bliver til en indre kapacitet, som du kan trække på, når du lægger dig om aftenen og har brug for at finde ro.",
                fagfolk: "Terapeutens ventrale vagale tilstand co-regulerer klientens autonome nervesystem og lærer det kapaciteten for den down-regulation, der er nødvendig for søvn. Denne polyvagale co-regulering sker primært gennem non-verbale kanaler som prosodi, ansigtsudtryk og fysiologisk tilstedeværelse. Gentagen eksponering for terapeutens ventrale vagale tilstand konsoliderer nye neurale pathways for autonom regulering hos klienten. Over tid internaliseres denne co-reguleringserfaring som øget kapacitet for selvregulering, herunder evnen til at facilitere egen down-regulation ved sengetid. Processen illustrerer det polyvagale princip om, at sikkerhed læres gennem relationen."
            },
            'tilknytning-kropsterapi': {
                klient: "Manglende sikkerhed i dine tidlige relationer skabte en krop, der aldrig rigtig lærte at slappe af til søvn. Spændingerne sidder dybt i muskler og væv som et kropsligt minde om, at det ikke var sikkert at give slip. Kropsarbejde adresserer disse dybe mønstre direkte og lærer kroppen en ny erfaring af ro og sikkerhed. Gennem blid behandling og vejrtrækningsøvelser begynder de gamle spændingsmønstre at opløses. Kroppen opdager gradvist, at det er muligt at slappe helt af, og dermed åbnes vejen til naturlig, genoprettende søvn og dyb hvile.",
                fagfolk: "Søvnproblemer er ofte somatisk manifesterede tilknytningsforstyrrelser, hvor den manglende tidlige co-regulation har konsolideret sig som kronisk muskulær hypertonus og fasciale restriktioner. Disse embodied tilknytningsmønstre opretholder en autonom tilstand, der er inkompatibel med søvn. Somatisk intervention modificerer disse dybe kropslige mønstre direkte gennem fascial release, kropsbevidsthedstræning og respiratorisk regulering. Tilgangen omgår kognitive forsvarsmekanismer og arbejder direkte med det kropslige substrat af tilknytningsusikkerheden. Den somatiske erfaring af sikkerhed og ro kan transformere de tidligt etablerede mønstre og genoprette kapaciteten for autonom søvn-transition."
            },
            'tilknytning-psykobiologi': {
                klient: "Utryg tilknytning tidligt i livet formede din søvnbiologi på en dyb måde. Når du som barn levede med konstant utryghed, tilpassede din krop sig ved at holde stresshormoner høje og søvnhormoner lave. Denne biologiske indstilling kan fortsætte ind i voksenlivet og gøre det svært at sove. Den gode nyhed er, at ny sikkerhed i terapeutiske relationer kan normalisere biologien igen. Når dit system erfarer dyb tryghed, begynder hormonbalancen gradvist at ændre sig - cortisol falder til naturligt natligt niveau, melatonin stiger, og søvnens biologi genetableres.",
                fagfolk: "Usikker tilknytning præger HPA-aksens udvikling og funktion, med direkte konsekvenser for søvnrelaterede hormoner. Tidlig tilknytningsstress programmerer en forhøjet kortisol-baseline, der persisterer i voksenlivet og inhiberer den circadiane nedregulering, som søvn kræver. Melatoninsyntesen påvirkes negativt af den kronisk forhøjede sympatiske tonus, der følger af usikker tilknytning. Earned secure attachment, udviklet gennem terapeutisk relation, kan modificere denne biologi ved at nedregulere HPA-aksens reaktivitet og normalisere den autonome balance. Denne neurobiologiske modifikation restaurerer de hormonelle forudsætninger for naturlig circadian oscillation og dermed søvnkapacitet."
            },
            'tilknytning-traumer': {
                klient: "Tilknytningstraumer - oplevelser af svigt, uforudsigelighed eller fare i dine nærmeste relationer - skabte en dyb vågenhed og søvnløshed. Dit system lærte, at de mennesker, der skulle beskytte dig, ikke altid var sikre, og den erfaring gør det enormt svært at give slip om natten. Healing af tilknytningstraumer kræver dyb sikkerhed i en terapeutisk relation, hvor du gradvist kan erfare, at det er muligt at stole på et andet menneske. Denne nye erfaring bygger langsomt den indre tryghed op, der er forudsætningen for at kunne lukke øjnene og sove.",
                fagfolk: "Developmental trauma i tilknytningsrelationen resulterer i pervasive søvnforstyrrelser, der manifesterer sig som kronisk hypervigilance ved sengetid, natlige opvågninger og manglende konsolideret søvn. Tilknytningstraumet kompromitterer udviklingen af autonom reguleringskapacitet og etablerer neurale mønstre, der prioriterer vagtsomhed over hvile. Terapeutisk intervention kræver langsom relational safety-etablering, der respekterer det traumatiserede systems behov for kontrol. Gradvis eksponering for relationel sikkerhed rekalibrerer neuroceptionen og opbygger den interne reguleringskapacitet, der muliggør autonom søvn-transition. Denne proces kræver konsistens og tålmodighed fra terapeutens side."
            },
            'tilknytning-relation': {
                klient: "Vores trygge terapeutiske relation lærer dit nervesystem, at det er sikkert nok til at sove. Hvis dine tidlige tilknytningsrelationer ikke gav dig den grundlæggende følelse af sikkerhed, mangler dit system en vigtig erfaring. I vores arbejde sammen tilbyder vi den erfaring nu. Hver gang vi mødes, og du oplever at blive set, hørt og holdt i tryghed, bygger vi den indre sikkerhed op, som søvn kræver. Din krop og dit nervesystem lærer gradvist, at verden er et sted, hvor det er sikkert at lukke øjnene og hvile dybt.",
                fagfolk: "Den terapeutiske relation fungerer som sikker base og faciliterer internalisering af self-soothing kapacitet, der er nødvendig for autonom søvn-transition. For klienter med usikker tilknytning tilbyder relationen korrigerende erfaringer af co-regulation, som den oprindelige tilknytning ikke leverede. Terapeutens konsistente tilstedeværelse og responsivitet opbygger earned secure attachment, der transformerer klientens interne arbejdsmodeller. Denne internalisering af relationel sikkerhed generaliserer til søvnsituationen, hvor klienten gradvist udvikler kapacitet til selvregulering og selvberoligelse. Processen illustrerer, hvordan tilknytningserfaringer i den terapeutiske relation direkte faciliterer udvikling af søvnkompetence."
            },
            'kropsterapi-psykobiologi': {
                klient: "Når kroppen lærer at finde ro gennem kropsarbejde, følger søvnbiologien naturligt med. Spændingerne i muskler og væv har holdt dit nervesystem i alarmberedskab, og det har forstyrret din hormonbalance. Når kroppen slipper sine spændinger, falder stresshormonerne, og søvnhormonet melatonin kan stige igen. Det er en smuk kædereaktion - kropslig ro fører til hormonal balance, som fører til bedre søvn. Gennem regelmæssigt kropsarbejde og daglige øvelser genetableres den naturlige biologiske rytme, der styrer din søvn-vågen cyklus og giver dig din søvn tilbage.",
                fagfolk: "Somatisk ro-aktivering gennem kropslige interventioner påvirker HPA-aksen direkte og faciliterer normalisering af de circadiane hormoner, der er nødvendige for søvn. Fascial release og respiratorisk regulering reducerer den afferente sympatiske signalering, der opretholder forhøjet kortisolproduktion. Den resulterende parasympatiske dominans muliggør appropriate melatoninsyntese og normalisering af den circadiane hormonelle oscillation. Denne somatisk medierede neuroendokrine modifikation illustrerer den direkte pathway fra kropslig intervention til søvnbiologisk normalisering. Regelmæssig somatisk praksis konsoliderer disse ændringer og etablerer nye fysiologiske baseline-mønstre, der understøtter stabil søvnregulering."
            },
            'kropsterapi-traumer': {
                klient: "Traumer holder kroppen i en tilstand af konstant vågenhed, hvor muskler er spændte og vejrtrækningen er overfladisk. Denne kropslige alarmberedskab forhindrer den dybe afslapning, som søvn kræver. Forsigtigt og respektfuldt kropsarbejde hjælper med at frigøre kroppen fra disse traumemønstre. Vi arbejder langsomt og i dit tempo, så dit system aldrig bliver overvældet. Lag for lag slipper kroppen de gamle spændinger, og nervesystemet opdager, at det er sikkert at give slip. Når den traumatiske spænding løsner, åbner vejen til naturlig søvn sig gradvist igen.",
                fagfolk: "Traumatisk somatisk hyperarousal manifesteret som kronisk muskulær spænding, fasciale restriktioner og dysreguleret respiration inhiberer direkte den parasympatiske activation, der er nødvendig for søvn. Den somatiske komponent af traumeresponsen konsoliderer sig i kroppens væv og opretholder autonom dysregulering uafhængigt af kognitiv processing. Titreret somatisk intervention, der respekterer det traumatiserede systems tolerancevindue, reducerer gradvist den kropslige activation. Denne tilgang er særligt vigtig for søvnrestauration, da den adresserer den direkte fysiologiske barriere for søvn. Forsigtigt kropsarbejde kombineret med relational safety muliggør gradvis somatisk nedregulering."
            },
            'kropsterapi-relation': {
                klient: "Tryg berøring i den terapeutiske relation lærer kroppen, at den kan slappe af nok til at sove. Når du oplever blid, respektfuld behandling i et trygt rum, modtager dit nervesystem et kraftigt signal om sikkerhed. Kroppen begynder at huske, hvordan det føles at være helt afslappet i nærvær af et andet menneske. Denne kropslige erfaring af sikkerhed og ro akkumuleres over tid og bliver til en indre ressource. Gradvist kan kroppen genfinde denne tilstand af dyb afslapning på egen hånd, når du lægger dig til at sove om aftenen.",
                fagfolk: "Terapeutisk touch kombineret med relational safety faciliterer en unik form for somatisk down-regulation, der er særligt potent for søvnrestauration. Den samtidige erfaring af kropslig intervention og relationel sikkerhed aktiverer både somatiske og tilknytningsbaserede pathways til parasympatisk dominans. Denne dobbelte aktivering konsoliderer dybere neurale mønstre for ro end enten modalitet alene kan opnå. Den kropslige erfaring af sikkerhed i relation internaliseres som øget kapacitet for autonom somatisk selvregulering ved sengetid. Tilgangen adresserer søvnforstyrrelsens somatiske og relationelle dimensioner simultant og faciliterer integreret healing."
            },
            'psykobiologi-traumer': {
                klient: "Traumer ødelagde din søvnbiologi ved at sætte kroppen i permanent alarmberedskab. Stresshormonerne forblev høje, selv om natten, og søvnhormonet melatonin blev undertrykt. Din naturlige døgnrytme blev forstyrret, fordi kroppen prioriterede overlevelse over hvile. Healing af traumerne normaliserer gradvist denne biologi. Efterhånden som dit system bearbejder de traumatiske oplevelser og lærer, at faren er overstået, begynder hormonerne at finde deres naturlige rytme igen. Cortisol falder om aftenen, melatonin stiger, og søvnens biologiske forudsætninger genoprettes langsomt men sikkert.",
                fagfolk: "PTSD modificerer den circadiane rytme og HPA-aksens funktion fundamentalt, med forhøjet natligt kortisol, reduceret melatoninsyntese og fragmenteret søvnarkitektur. Traumatisk stress konsoliderer neuroendokrine mønstre, der prioriterer hypervigilance over restorativ søvn. Systematisk trauma-processing kan normalisere denne søvnbiologi ved at reducere amygdalas toniske aktivering og nedregulere HPA-aksens reaktivitet. Den resulterende normalisering af den autonome balance faciliterer genetablering af circadian hormonel oscillation. Denne neurobiologiske restauration illustrerer den direkte pathway fra traumeresolution til søvnforbedring og understreger vigtigheden af integreret behandling."
            },
            'psykobiologi-relation': {
                klient: "Vores trygge terapeutiske relation er i sig selv en form for søvnmedicin, der arbejder på det biologiske niveau. Når du er i nærvær af et menneske, der er roligt og trygt, begynder din krop at ændre sin hormonproduktion. Stresshormonet cortisol falder, og kroppen producerer i stedet hormoner forbundet med tryghed og tilknytning. Denne biologiske effekt af relationen akkumuleres over tid og normaliserer gradvist din søvnbiologi. Det er ikke bare psykologi - det er målbar biokemi. Vores relation skaber bogstaveligt de hormonelle betingelser for god, dyb søvn.",
                fagfolk: "En sikker terapeutisk alliance modificerer HPA-aksens funktion og faciliterer det biologiske grundlag for søvnrestauration. Relational safety aktiverer oxytocin-medierede pathways, der direkte antagoniserer kortisols søvninhiberende effekt. Gentagen erfaring af co-regulation i den terapeutiske relation nedregulerer HPA-aksens reaktivitet og normaliserer den diurnale kortisolkurve. Denne relationelt medierede neuroendokrine modifikation er et målbart biologisk substrat for den terapeutiske effekt på søvn. Over tid internaliseres den relationelle regulering som modificeret autonom baseline, der muliggør independent circadian hormonel normalisering og stabil søvnkvalitet."
            },
            'traumer-relation': {
                klient: "Traumer kan kun heales i dyb sikkerhed - og når de heler, kommer søvnen tilbage. Dit system har brug for at erfare, at det er muligt at være sårbar i nærvær af et andet menneske, uden at det er farligt. Vores terapeutiske relation tilbyder netop det trygge rum, hvor traumerne kan bearbejdes i et tempo, dit system kan håndtere. Hver session bygger mere sikkerhed og tillid op, og gradvist løsner traumernes greb om dit nervesystem. Når hypervigilancen aftager, og kroppen ikke længere er i konstant alarm, genopdager dit system den naturlige søvnrytme.",
                fagfolk: "Effektiv traumebehandling kræver en robust terapeutisk alliance, der tilbyder tilstrækkelig relational safety til at facilitere resolution af den hypervigilance, der inhiberer søvn. Den terapeutiske relations ventrale vagale sikkerhed skaber det nødvendige fundament for titreret traumeprocessering. Uden denne relationelle sikkerhed risikerer traumebearbejdning retraumatisering snarere end integration. Den gradvise traumeresolution, faciliteret af den sikre relation, reducerer baseline arousal og rekalibrerer neuroceptionen, så søvnsituationen ikke længere aktiverer defensive responser. Denne proces illustrerer den uadskillelige sammenhæng mellem relationel sikkerhed, traumehealing og søvnrestauration i terapeutisk kontekst."
            },
        }
    }
   
};

// ── Selvvurdering: 6 cirkler × 3 spørgsmål ──
const vurderingData = {
    polyvagal: {
        label: 'Polyvagal teori',
        ikon: '◎',
        farve: '#8A7F93',
        klient: {
            intro: 'Hvordan oplever du dit nervesystems tre tilstande i hverdagen?',
            spoergsmaal: [
                'Hvor ofte føler du dig tryg og rolig i kroppen?',
                'Kan du mærke forskel på, om du er i alarm eller i ro?',
                'Hvor let er det for dig at finde tilbage til ro efter stress?'
            ]
        },
        fagfolk: {
            intro: 'Vurder klientens autonome reguleringskapacitet.',
            spoergsmaal: [
                'I hvilken grad kan klienten identificere egne autonome tilstande?',
                'Hvor effektivt kan klienten skifte fra sympatisk aktivering til ventral vagal?',
                'Vurder klientens window of tolerance bredde.'
            ]
        }
    },
    tilknytning: {
        label: 'Tilknytningsmønstre',
        ikon: '❋',
        farve: '#A79DB0',
        klient: {
            intro: 'Hvordan oplever du tryghed og nærhed i dine relationer?',
            spoergsmaal: [
                'Føler du dig tryg nok til at vise sårbarhed over for andre?',
                'Kan du bede om hjælp, når du har brug for det?',
                'Hvor meget påvirker din opvækst dine relationer i dag?'
            ]
        },
        fagfolk: {
            intro: 'Vurder klientens tilknytningsmønstre og relationelle kapacitet.',
            spoergsmaal: [
                'I hvilken grad viser klienten organiseret vs. desorganiseret tilknytning?',
                'Vurder klientens kapacitet for at modtage co-regulering.',
                'Hvor bevidst er klienten om egne tilknytningsmønstre?'
            ]
        }
    },
    kropsterapi: {
        label: 'Kropsterapi & Behandling',
        ikon: '✦',
        farve: '#b8956a',
        klient: {
            intro: 'Hvordan er din forbindelse til din krop?',
            spoergsmaal: [
                'Hvor godt kan du mærke signaler fra din krop (spænding, smerter, ro)?',
                'Føler du dig til stede i kroppen i hverdagen?',
                'Kan din krop slappe af, når du giver den mulighed for det?'
            ]
        },
        fagfolk: {
            intro: 'Vurder klientens kropslige bevidsthed og somatiske ressourcer.',
            spoergsmaal: [
                'Vurder klientens interoceptive bevidsthed.',
                'I hvilken grad viser klienten somatisk dissociation vs. embodiment?',
                'Hvor responsiv er klienten over for somatiske interventioner?'
            ]
        }
    },
    psykobiologi: {
        label: 'Psykobiologi',
        ikon: '◈',
        farve: '#9B93A6',
        klient: {
            intro: 'Hvordan oplever du forbindelsen mellem krop og sind?',
            spoergsmaal: [
                'Hvordan er din søvnkvalitet og dit energiniveau?',
                'Hvor meget påvirker stress din krop (mave, hovedpine, spænding)?',
                'Føler du at dine tanker og din krop arbejder sammen?'
            ]
        },
        fagfolk: {
            intro: 'Vurder klientens psykobiologiske integration.',
            spoergsmaal: [
                'Vurder graden af allostatisk belastning hos klienten.',
                'I hvilken grad påvirker autonom dysregulering klientens kognitive funktion?',
                'Vurder klientens HPA-akse reaktivitet baseret på symptombillede.'
            ]
        }
    },
    traumer: {
        label: 'Traumer & Bearbejdning',
        ikon: '◇',
        farve: '#d4b898',
        klient: {
            intro: 'Hvordan påvirker tidligere svære oplevelser dig i dag?',
            spoergsmaal: [
                'Hvor ofte reagerer du kraftigt på ting der minder om noget fra fortiden?',
                'Kan du tænke på svære oplevelser uden at blive overvældet?',
                'Føler du at du har bearbejdet det der er sket dig?'
            ]
        },
        fagfolk: {
            intro: 'Vurder klientens traumebelastning og integrative kapacitet.',
            spoergsmaal: [
                'Vurder graden af ubearbejdet traumemateriale.',
                'I hvilken grad viser klienten dissociative reaktioner under aktivering?',
                'Hvor stor er klientens kapacitet for titreret traumeeksponering?'
            ]
        }
    },
    relation: {
        label: 'Terapeutisk Relation',
        ikon: '∞',
        farve: '#7D7589',
        klient: {
            intro: 'Hvordan oplever du det at modtage støtte og hjælp?',
            spoergsmaal: [
                'Føler du dig tryg i relationen til din terapeut/behandler?',
                'Kan du mærke en forskel i din krop, når du er sammen med nogen der forstår dig?',
                'Hvor åben er du for at lade andre hjælpe dig?'
            ]
        },
        fagfolk: {
            intro: 'Vurder den terapeutiske alliance og relationelle dynamik.',
            spoergsmaal: [
                'Vurder kvaliteten af den terapeutiske alliance.',
                'I hvilken grad kan klienten bruge den terapeutiske relation til co-regulering?',
                'Vurder klientens kapacitet for relationel sårbarhed i terapien.'
            ]
        }
    }
};

const exercises = [
    {
        title: "Find ro i nervesystemet",
        kategori: "regulering",
        tid: "3-5 min",
        intro: "Denne øvelse er kernen i mit arbejde. Ved at lande i kroppen og mærke vejrtrækningen, aktiverer du naturligt den del af nervesystemet der skaber ro og sikkerhed. Det er simpelt, men dybt virkningsfuldt.",
        steps: [
            "Sid eller læg dig komfortabelt. Luk gerne øjnene.",
            "Læg én hånd på dit bryst og én på maven.",
            "Mærk vejrtrækningen bevæge sig under dine hænder.",
            "Pust langsomt ud gennem munden \u2014 længere end du puster ind.",
            "Fortsæt i 3-5 minutter. Mærk kroppen blive tungere og mere afslappet."
        ],
        refleksion: "Hvad lagde du mærke til? Var det lettere at mærke brystet eller maven? Den del der var sværest at mærke, er ofte den del der har mest brug for opmærksomhed."
    },
    {
        title: "Mærk din sikre tilstand",
        kategori: "regulering",
        tid: "5 min",
        intro: "Polyvagal teori lærer os at nervesystemet har forskellige tilstande. I denne øvelse lærer du at genkende og aktivere din sikre tilstand \u2014 den tilstand hvor healing sker.",
        steps: [
            "Tænk på et sted hvor du føler dig tryg \u2014 måske dit hjem, naturen, eller hos en elsket person.",
            "Luk øjnene og forestil dig at være der nu. Se detaljerne.",
            "Mærk hvordan din krop reagerer. Bliver skuldrene bløde? Bliver vejret dybere?",
            "Læg mærke til disse signaler \u2014 det er din sikre tilstand.",
            "Øv dig i at genkalde denne følelse når du har brug for ro."
        ],
        refleksion: "Hvilket billede kom først? Og hvad skete der i kroppen da du fandt det? Denne forbindelse mellem indre billede og kropslig respons er nervesystemets sprog."
    },
    {
        title: "Vagus-aktivering gennem åndedræt",
        kategori: "aandedraet",
        tid: "4 min",
        intro: "Vagusnerven er motorvejen mellem hjerne og krop. Når vi aktiverer den gennem åndedræt, sender vi direkte besked til nervesystemet om at det er sikkert at slappe af.",
        steps: [
            "Sid oprejst med en lige ryg.",
            "Pust ind gennem næsen i 4 tællinger.",
            "Hold vejret i 4 tællinger.",
            "Pust langsomt ud gennem munden i 6-8 tællinger.",
            "Gentag 10 gange. Mærk roen brede sig i kroppen."
        ],
        refleksion: "Blev udåndingen lettere mod slutningen? Når udåndingen forlænges naturligt, er det et tegn på at vagusnerven responderer \u2014 dit nervesystem begynder at stole på roen."
    },
    {
        title: "Selvafgrænsning \u2014 mærk dit rum",
        kategori: "krop",
        tid: "3 min",
        intro: "Denne øvelse styrker din kropslige selvfornemmelse og giver en følelse af at have et eget sikkert rum \u2014 særligt værdifuldt hvis du let mister dig selv i relationer.",
        steps: [
            "Stå med fødderne i hoftebredde. Mærk kontakten med gulvet.",
            "Ryk let op og ned i knæene \u2014 mærk din vægt i benene.",
            "Løft langsomt armene ud til siden \u2014 mærk dit rum omkring dig.",
            "Forestil dig en boble omkring dig \u2014 det er dit rum.",
            "Ånd roligt og mærk: \u2018Dette er mit rum. Jeg er her.\u2019"
        ],
        refleksion: "Føltes boblen stor eller lille? Var den tæt på kroppen eller langt ude? Din grænse i dag fortæller noget om hvad dit nervesystem har brug for lige nu."
    },
    {
        title: "Body scan \u2014 lyt til kroppen",
        kategori: "krop",
        tid: "5-8 min",
        intro: "Kroppen taler konstant til os gennem fornemmelser, men vi har glemt at lytte. Body scan genåbner denne dialog og lærer dig at mærke hvad kroppen har brug for.",
        steps: [
            "Læg dig på ryggen. Luk øjnene.",
            "Start med fødderne \u2014 mærk dem uden at ændre noget.",
            "Bevæg langsomt opmærksomheden op gennem ben, mave, bryst, arme, hoved.",
            "Hvis du finder spændinger, ånd blidt ind i dem \u2014 lad dem være der.",
            "Når du når hovedet, mærk hele kroppen på én gang i 1-2 minutter."
        ],
        refleksion: "Hvor holdt du spænding uden at vide det? Bare det at opdage det er begyndelsen på forandring. Kroppen løsner når den bliver set."
    },
    {
        title: "Grounding — land i nuet",
        kategori: "regulering",
        tid: "2-3 min",
        intro: "Når tankerne løber og nervesystemet er i alarm, har du brug for at lande. Grounding forbinder dig til din krop og til nuet — det simpleste og mest effektive første skridt.",
        steps: [
            "Mærk dine fødder mod gulvet. Pres dem let ned.",
            "Navngiv 5 ting du kan se omkring dig.",
            "Navngiv 4 ting du kan røre ved eller mærke.",
            "Navngiv 3 lyde du kan høre.",
            "Tag én dyb indånding og én lang udånding.",
            "Mærk: du er her. Du er til stede."
        ],
        refleksion: "Hvad ændrede sig i kroppen da du begyndte at navngive? Grounding virker fordi det skifter nervesystemet fra indre alarm til ydre opmærksomhed."
    },
    {
        title: "Beroligende berøring",
        kategori: "krop",
        tid: "3 min",
        intro: "Berøring aktiverer oxytocin og sender sikkerhedssignaler direkte til nervesystemet. Du kan give dig selv den berøring der regulerer — også når du er alene.",
        steps: [
            "Læg begge hænder på dit bryst. Mærk varmen.",
            "Pust langsomt ind og ud. Mærk brystkassen hæve og sænke sig under hænderne.",
            "Bevæg én hånd til siden af halsen. Mærk pulsen.",
            "Giv dig selv et let tryk — som en hånd der siger: du er okay.",
            "Bliv her i 1-2 minutter. Mærk hvad der sker i kroppen."
        ],
        refleksion: "Var det uvant at røre dig selv sådan? Mange af os er frakoblet selvberøring. Men kroppen genkender det — den husker at berøring betyder tryghed."
    },
    {
        title: "Orienteringsrespons",
        kategori: "regulering",
        tid: "2 min",
        intro: "Orienteringsresponsen er nervesystemets måde at scanne for sikkerhed. Denne øvelse bruger den bevidst til at signalere til dit system at der ikke er fare.",
        steps: [
            "Sid eller stå stille et øjeblik.",
            "Drej langsomt hovedet til højre. Lad øjnene følge med.",
            "Kig på noget specifikt. Mærk det. Tag dig tid.",
            "Drej langsomt hovedet til venstre. Gør det samme.",
            "Drej til midten. Tag en dyb udånding.",
            "Gentag 2-3 gange. Mærk om skuldrene falder."
        ],
        refleksion: "Denne øvelse er særligt kraftfuld efter en belastende oplevelse. Nervesystemet har brug for at bekræfte at faren er ovre — og øjnene er døren ind."
    },
    {
        title: "Summe-åndedræt (Bhramari)",
        kategori: "aandedraet",
        tid: "3-4 min",
        intro: "Vibration fra summen stimulerer vagusnerven dybt og effektivt. Denne urgamle teknik skaber en direkte kropslig vej til ro.",
        steps: [
            "Sid med lukket mund og afslappet kæbe.",
            "Pust ind gennem næsen i 4 tællinger.",
            "Pust ud mens du summer — en lang, rolig mmmm-lyd.",
            "Mærk vibrationen i brystet, halsen og ansigtet.",
            "Gentag 8-10 gange. Lad summen blive roligere for hvert åndedræt."
        ],
        refleksion: "Hvor mærkede du vibrationen tydeligst? Vibration er kroppens eget reguleringssprog — tænk på hvordan en mors nynnen beroliger et barn."
    },
    {
        title: "Penduløvelse — mellem spænding og ro",
        kategori: "krop",
        tid: "4-5 min",
        intro: "Nervesystemet healer ikke ved at fryse i én tilstand, men ved at pendle mellem aktivering og ro. Denne øvelse træner netop den fleksibilitet.",
        steps: [
            "Mærk et sted i kroppen der føles neutralt eller behageligt. Bliv her et øjeblik.",
            "Flyt nu opmærksomheden til et sted med spænding eller ubehag. Vær kort.",
            "Vend tilbage til det behagelige sted. Mærk forskellen.",
            "Pendlér langsomt mellem de to — 3-4 gange.",
            "Afslut altid på det behagelige sted. Lad kroppen hvile der."
        ],
        refleksion: "Blev det lettere at vende tilbage til det behagelige? Denne pendulering er præcis hvad nervesystemet gør når det healer — det lærer at bevægelsen er sikker."
    }
];
// Merge fordybelse data into themes
if (typeof fordybelseData !== 'undefined') {
    Object.keys(fordybelseData).forEach(function(themeKey) {
        if (themes[themeKey]) {
            Object.keys(fordybelseData[themeKey]).forEach(function(circleKey) {
                if (themes[themeKey].circles[circleKey]) {
                    Object.keys(fordybelseData[themeKey][circleKey]).forEach(function(mode) {
                        if (themes[themeKey].circles[circleKey][mode]) {
                            themes[themeKey].circles[circleKey][mode].fordybelse = fordybelseData[themeKey][circleKey][mode];
                        }
                    });
                }
            });
        }
    });
}

const circleNames = {
    nervesystem: 'Nervesystemsregulering',
    polyvagal: 'Polyvagal teori',
    tilknytning: 'Tilknytningsmønstre',
    kropsterapi: 'Kropsterapi & Behandling',
    psykobiologi: 'Psykobiologi',
    traumer: 'Traumer & Dissociation',
    relation: 'Terapeutisk Relation'
};

// UDDANNELSER - KOMPLET VERSION
const educations = {
  nervesystemsterapeut: {
    name: "Nervesystemsterapeut",
    circles: {
      nervesystem: {
        kursist: {
          title: "Bliv Certificeret Nervesystemsterapeut",
          text: "På denne 70 timers uddannelse lærer du at arbejde professionelt med nervesystemer. Du får konkrete værktøjer til at guide andre i regulering gennem øvelser, behandling og forståelse af autonome tilstande. Uddannelsen er både teoretisk funderet og dybt erfaringsbaseret gennem din egen proces."
        },
        fagfolk: {
          title: "Certificeret Nervesystemsterapeut - 70 Timer",
          text: "Efteruddannelse der certificerer til professionelt arbejde med nervesystemsregulering. Integrerer polyvagal teori, afspændingspædagogik, åndedrætsarbejde og behandling. Evidensbaseret tilgang kombineret med embodied læring. 5 moduler over 9 måneder med praktisk supervision."
        }
      },
      polyvagal: {
        kursist: {
          title: "Polyvagal Teori i Praksis",
          text: "Du lærer Stephen Porges' polyvagale teori grundigt - de tre tilstande, neuroception og hvordan nervesystemet reagerer på sikkerhed vs. fare. Dette bliver dit primære navigationsværktøj i arbejdet med andre menneskers nervesystemer og din egen regulering."
        },
        fagfolk: {
          title: "Polyvagal Teori - Klinisk Anvendelse",
          text: "Dybdegående studium af Porges' teori med fokus på praktisk anvendelse. Lærer at identificere autonome tilstande hos klienter og facilitere ventral vagal aktivering gennem konkrete interventioner. Træning i neuroception-assessment og polyvagal-informeret samtale."
        }
      },
      tilknytning: {
        kursist: {
          title: "Tilknytning og Nervesystemet",
          text: "Du lærer hvordan tilknytningsmønstre er kodet i nervesystemet og hvordan utryg tilknytning manifesterer sig som dysregulering. Du får værktøjer til at arbejde med tilknytning gennem nervesystemsregulering og forstå din egen tilknytningshistorie."
        },
        fagfolk: {
          title: "Tilknytningsteori Integreret",
          text: "Integration af Bowlby og Ainsworth's attachment teori med nervesystemsarbejde. Forståelse af hvordan early co-regulation former autonome mønstre. Kompetencer til at facilitere earned secure attachment gennem reguleringsarbejde og terapeutisk relation."
        }
      },
      kropsterapi: {
        kursist: {
          title: "Kropsarbejde og Behandling",
          text: "Du lærer afspændingspædagogisk behandling på briks, åndedrætsarbejde og kropslige øvelser. Du får hands-on erfaring med at guide andre gennem embodied regulering og lærer at lytte til kroppens signaler. Stort fokus på egen kropslig proces."
        },
        fagfolk: {
          title: "Somatisk Intervention - Praktisk Træning",
          text: "Afspændingspædagogisk behandlingsteknik, fascial work og respiratorisk intervention. Praktisk træning i bottom-up regulering gennem direkte kropslig kontakt. Embodied facilitation som kerneværktøj. Supervision i behandlingsteknik gennem hele uddannelsen."
        }
      },
      psykobiologi: {
        kursist: {
          title: "Kroppens Biologi og Nervesystemet",
          text: "Du får forståelse for hormoner, neurotransmittere og hvordan nervesystemets tilstand påvirker hele biologien. Du lærer at forklare sammenhænge mellem stress, søvn, fordøjelse og mental sundhed på en måde dine klienter kan forstå."
        },
        fagfolk: {
          title: "Psykobiologi - HPA-akse og Neurotransmittere",
          text: "HPA-akse funktion, neurotransmitter-systemer (serotonin, dopamin, GABA, oxytocin) og hormonelle processer i relation til nervesystemstilstande. Forståelse af ANS som master regulator. Lærer at kommunikere kompleks neurobiologi til klienter."
        }
      },
      traumer: {
        kursist: {
          title: "Traumer i Nervesystemet",
          text: "Du lærer hvordan traumer sidder fast som frosne forsvarstilstande og hvordan man arbejder forsigtigt med traumemateriale gennem nervesystemsregulering. Du får dyb forståelse for dissociation, window of tolerance og din egen traumehistorie."
        },
        fagfolk: {
          title: "Traumeforståelse - Somatic Experiencing",
          text: "Peter Levines Somatic Experiencing principper, incomplete defensive responses og titreret aktivering af traumatisk materiale. Forståelse af hvordan PTSD manifesterer sig autonomt. Kompetencer til sikker facilitering inden for window of tolerance med praktisk supervision."
        }
      },
      relation: {
        kursist: {
          title: "Terapeutisk Tilstedeværelse",
          text: "Du lærer at bruge din egen regulerede tilstand som værktøj - co-regulering er fundamentet i alt arbejde. Du udvikler evnen til at holde rum og guide andre gennem limbisk afstemning og embodied presence. Din egen proces er central."
        },
        fagfolk: {
          title: "Co-regulering som Primær Metode",
          text: "Terapeutens autonome tilstand som primær intervention. Træning i at facilitere sikkerhed gennem egen ventral vagale tilstedeværelse. Mirror neurons, interbrain synchrony og relationel neurobiologi som teoretisk og praktisk fundament. Supervision i terapeutisk tilstedeværelse."
        }
      }
    },
    connections: {
      'nervesystem-polyvagal': {
        kursist: "På uddannelsen lærer du at bruge polyvagal teori som dit primære kort til at forstå og arbejde med nervesystemsregulering. Stephen Porges' model giver dig et klart og praktisk sprog for de tre autonome tilstande, og du træner i at genkende dem hos dig selv og dine klienter. Denne forståelse bliver fundamentet for alle de interventioner og tilgange du lærer på uddannelsen.",
        fagfolk: "Polyvagal teori udgør det teoretiske fundament for al nervesystemsregulering i uddannelsen. Kursister opnår kompetencer i at identificere ventral vagal, sympatisk og dorsal vagal aktivering samt anvende Porges' neuroceptionsmodel i klinisk assessment. Teorien integreres med praktisk intervention gennem alle fem moduler og danner rammen for både behandlingsteknik og terapeutisk tilstedeværelse. Denne systematiske tilgang sikrer at kursister opnår klinisk kompetence i autonomt nervesystem-intervention."
      },
      'nervesystem-tilknytning': {
        kursist: "Du lærer at se tilknytningsmønstre som nervesystem-mønstre og arbejde med begge dele samtidigt. Når du forstår at utryg tilknytning er kodet som kronisk dysregulering i nervesystemet, åbner det for en helt ny tilgang til forandring. Du får konkrete redskaber til at arbejde med tilknytning gennem regulering i stedet for kun gennem samtale og kognitiv forståelse. Denne integration af teori og praksis gør dig i stand til at arbejde helhedsorienteret med dine klienters nervesystemer.",
        fagfolk: "Integration af attachment teori med autonomt nervesystem-arbejde som kernekompetence i uddannelsen. Kursister lærer at identificere tilknytningsmønstre som specifikke autonome profiler og intervenere på nervesystemsniveau. Denne tilgang muliggør somatisk baseret tilknytningsarbejde der bypasser verbale forsvarsmekanismer og adresserer mønstre på det niveau hvor de oprindeligt blev encodet. Denne systematiske tilgang sikrer at kursister opnår klinisk kompetence i autonomt nervesystem-intervention. Denne systematiske tilgang sikrer at kursister opnår klinisk kompetence i autonomt nervesystem-intervention."
      },
      'nervesystem-kropsterapi': {
        kursist: "Kropsarbejde er den primære vej til nervesystemsregulering - du lærer behandling på briks, åndedrætsteknikker og konkrete øvelser du kan bruge med klienter. Den kropslige tilgang gør regulering til noget mærkbart og konkret frem for abstrakt og teoretisk. Du oplever selv effekten gennem din egen proces, hvilket giver dig autentisk erfaring at arbejde ud fra. Denne integration af teori og praksis gør dig i stand til at arbejde helhedsorienteret med dine klienters nervesystemer.",
        fagfolk: "Bottom-up somatisk intervention som hovedmetode til autonome modifikationer. Uddannelsen træner i afspændingspædagogisk behandling, fascial release, struktureret åndedrætsarbejde og guidede somatiske øvelser. Praktisk supervision sikrer kompetent håndtering af somatiske reaktioner og autonome shifts under behandling. Embodied læring er centralt gennemgående princip. Denne kompetence udvikles progressivt gennem uddannelsens fem moduler med løbende superviseret klinisk træning og refleksiv praksis som sikrer faglig forsvarlighed."
      },
      'nervesystem-psykobiologi': {
        kursist: "Du får dyb forståelse for sammenhængen mellem nervesystem og biologi - hvordan autonome tilstande direkte påvirker hormoner, søvn, fordøjelse og immunsystem. Denne viden gør dig i stand til at forklare dine klienter hvorfor nervesystemsarbejde har effekt på hele kroppen. Du lærer at se biologiske symptomer som udtryk for nervesystemets tilstand. Denne integration af teori og praksis gør dig i stand til at arbejde helhedsorienteret med dine klienters nervesystemer.",
        fagfolk: "Forståelse af ANS som master regulator for alle fysiologiske systemer. Uddannelsen dækker HPA-akse funktion, neurotransmitter-systemer og hormonelle kaskader i relation til autonome tilstande. Kursister opnår kompetencer i at kommunikere kompleks neurobiologi tilgængeligt til klienter og forankre interventioner i evidensbaseret psykobiologisk forståelse. Klinisk kompetenceopbygning sker systematisk med integreret supervision der sikrer forsvarlig autonom praksis ved endt uddannelse. Denne kompetence udvikles progressivt gennem uddannelsens fem moduler med løbende superviseret klinisk træning og refleksiv praksis som sikrer faglig forsvarlighed."
      },
      'nervesystem-traumer': {
        kursist: "Du lærer at arbejde forsigtigt med traumer gennem nervesystemsregulering og embodied processing. Uddannelsen giver dig redskaber til at genkende traumetilstande, respektere window of tolerance og facilitere gradvis integration af fastfrosset materiale. Du lærer at dosere aktivering præcist, så dine klienter oplever sikker bearbejdning uden overvældelse. Denne integration af teori og praksis gør dig i stand til at arbejde helhedsorienteret med dine klienters nervesystemer.",
        fagfolk: "Trauma-informeret tilgang med fokus på autonome forsvarstilstande og titreret aktivering. Kursister trænes i Somatic Experiencing-principper, identificering af incomplete defensive responses og kontrolleret pendulering mellem aktivering og regulering. Supervision sikrer kompetent monitorering af klientens autonome tilstand under traumebearbejdning. Uddannelsens modulstruktur sikrer progressiv kompetenceopbygning fra grundlæggende forståelse til selvstændig klinisk anvendelse med supervision. Klinisk kompetenceopbygning sker systematisk med integreret supervision der sikrer forsvarlig autonom praksis ved endt uddannelse."
      },
      'nervesystem-relation': {
        kursist: "Din egen regulering bliver dit vigtigste værktøj - du lærer at co-regulere dine klienter gennem din tilstedeværelse og dit regulerede nervesystem. Uddannelsen lægger stor vægt på din personlige proces, fordi kvaliteten af din terapeutiske tilstedeværelse afhænger af din egen reguleringskapacitet. Du træner i at bruge dig selv som instrument for andres healing. Denne integration af teori og praksis gør dig i stand til at arbejde helhedsorienteret med dine klienters nervesystemer.",
        fagfolk: "Co-regulering som primær intervention - terapeutens autonome tilstand faciliterer klientens regulering. Uddannelsen prioriterer udvikling af terapeutisk tilstedeværelse gennem facilitatorens egen vedvarende nervesystemsproces. Kursister lærer at monitorere egen autonom tilstand under sessioner og anvende embodied co-regulering som bevidst klinisk strategi. Denne tilgang er forankret i evidensbaseret forskning og understøttes af praktisk supervision gennem hele uddannelsens forløb. Uddannelsens modulstruktur sikrer progressiv kompetenceopbygning fra grundlæggende forståelse til selvstændig klinisk anvendelse med supervision."
      },
      'polyvagal-tilknytning': {
        kursist: "Du lærer at se tilknytningsmønstre som polyvagale profiler og arbejde med sikkerhed som basis for forandring. Tryg tilknytning svarer til ventral vagal fleksibilitet, mens utryg tilknytning afspejler fastlåste sympatiske eller dorsale tilstande. Denne mapping giver dig et præcist sprog for hvad der sker i klientens nervesystem og hvordan du kan hjælpe. Du får en dyb forståelse der gør dig til en mere kompetent og sikker terapeut i dit arbejde med klienter.",
        fagfolk: "Tilknytningsmønstre manifesteres som specifikke autonome signaturer der kan identificeres og interveneres på. Uddannelsen integrerer Porges' og Bowlbys modeller i en samlet forståelsesramme. Kursister trænes i at mappe tilknytningstyper til polyvagale profiler og designe mønster-specifikke interventioner baseret på den autonome signatur. Kompetencerne evalueres løbende gennem superviseret klinisk praksis der sikrer integration af teori og praktisk anvendelse. Denne tilgang er forankret i evidensbaseret forskning og understøttes af praktisk supervision gennem hele uddannelsens forløb."
      },
      'polyvagal-kropsterapi': {
        kursist: "Kropsarbejde aktiverer ventral vagal tilstand - det er den mest direkte vej til at skabe sikkerhed i nervesystemet. Du lærer specifikke behandlingsteknikker og øvelser der målrettet stimulerer det ventrale vagale system. Gennem din egen kropslige proces erfarer du hvordan denne aktivering føles, så du kan guide andre med autentisk forståelse. Du får en dyb forståelse der gør dig til en mere kompetent og sikker terapeut i dit arbejde med klienter.",
        fagfolk: "Somatisk intervention aktiverer ventral vagale pathways gennem bottom-up processer. Uddannelsen træner i specifikke teknikker som fascial release, vagal toning-øvelser og åndedrætsinterventioner der stimulerer afferente vagale fibre. Kursister lærer at monitorere polyvagale skift under kropslig behandling og tilpasse intensitet efter klientens autonome respons. Denne kompetence udvikles progressivt gennem uddannelsens fem moduler med løbende superviseret klinisk træning og refleksiv praksis som sikrer faglig forsvarlighed."
      },
      'polyvagal-psykobiologi': {
        kursist: "Når nervesystemet er i grøn sikker tilstand, fungerer hele biologien optimalt - hormoner balanceres, immunsystemet styrkes og hjernen kan tænke klart. Du lærer at forstå denne sammenhæng mellem polyvagale tilstande og biologisk funktion. Denne viden hjælper dig med at motivere klienter og forklare hvorfor reguleringsarbejde påvirker hele deres sundhed. Du får en dyb forståelse der gør dig til en mere kompetent og sikker terapeut i dit arbejde med klienter.",
        fagfolk: "Ventral vagal aktivering optimerer HPA-akse funktion og alle fysiologiske systemer. Uddannelsen integrerer polyvagal teori med psykobiologisk forståelse af neurotransmitter-balance, hormonregulering og immunfunktion. Kursister opnår kompetencer i at forklare biologiske mekanismer bag polyvagal-informerede interventioners kliniske effekt. Klinisk kompetenceopbygning sker systematisk med integreret supervision der sikrer forsvarlig autonom praksis ved endt uddannelse. Kompetencerne evalueres løbende gennem superviseret klinisk praksis der sikrer integration af teori og praktisk anvendelse."
      },
      'polyvagal-traumer': {
        kursist: "Traumer fryser systemet i rød eller gul tilstand - du lærer at etablere grøn sikkerhed som det nødvendige fundament før traumearbejde kan begynde. Uden ventral vagal forankring bliver traumebearbejdning overvældende og potentielt retraumatiserende. Du træner i at vurdere din klients polyvagale tilstand og kun arbejde med traumemateriale når der er tilstrækkelig sikkerhed. Du får en dyb forståelse der gør dig til en mere kompetent og sikker terapeut i dit arbejde med klienter.",
        fagfolk: "Ventral vagal etablering som ufravigelig forudsætning for sikker trauma-processing. Uddannelsen træner i polyvagal assessment af klientens reguleringskapacitet forud for traumeintervention. Kursister lærer at monitorere autonome skift under aktivering og anvende polyvagale principper til dosering og titration af traumatisk materiale inden for tolerancevinduet. Uddannelsens modulstruktur sikrer progressiv kompetenceopbygning fra grundlæggende forståelse til selvstændig klinisk anvendelse med supervision. Denne kompetence udvikles progressivt gennem uddannelsens fem moduler med løbende superviseret klinisk træning og refleksiv praksis som sikrer faglig forsvarlighed."
      },
      'polyvagal-relation': {
        kursist: "Din grønne ro smitter direkte til andres nervesystem - det er den biologiske kerne i co-regulering. Du lærer at dit eget nervesystems tilstand konstant kommunikerer sikkerhed eller fare til dine klienter gennem stemme, ansigt og kropsholdning. Uddannelsen hjælper dig med at udvikle en stabil ventral vagal tilstedeværelse som dit primære terapeutiske redskab. Du får en dyb forståelse der gør dig til en mere kompetent og sikker terapeut i dit arbejde med klienter.",
        fagfolk: "Social engagement systemet faciliterer co-regulering gennem terapeutens ventral vagale tilstand. Uddannelsen fokuserer på at udvikle kursisternes ventral vagale kapacitet som primær klinisk ressource. Prosodisk stemmekvalitet, ansigtsudtryk og kropsholdning trænes bevidst som kanaler for neuroceptiv signalering af sikkerhed til klientens autonome nervesystem. Denne tilgang er forankret i evidensbaseret forskning og understøttes af praktisk supervision gennem hele uddannelsens forløb. Klinisk kompetenceopbygning sker systematisk med integreret supervision der sikrer forsvarlig autonom praksis ved endt uddannelse."
      },
      'tilknytning-kropsterapi': {
        kursist: "Tilknytningsmønstre sidder dybt forankret i kroppen - du lærer at arbejde med dem gennem behandling, berøring og kropslige øvelser. Denne somatiske tilgang når lag af tilknytningserfaring som samtale ikke kan nå, fordi mønstrene blev dannet før sproget udviklede sig. Du oplever selv denne kropslige tilknytningsproces gennem uddannelsens eget forløb. Denne viden og erfaring giver dig et solidt fundament at bygge din terapeutiske praksis på.",
        fagfolk: "Embodied tilknytningsmønstre modificeres gennem proprioceptiv og interoceptiv intervention. Uddannelsen træner i somatiske teknikker der adresserer tilknytningsmønstre på det subsymboliske niveau hvor de blev encodet. Kursister lærer at identificere mønster-specifikke somatiske markører og anvende målrettede kropslige interventioner til reconsolidation af implicitte relationelle skemaer. Kompetencerne evalueres løbende gennem superviseret klinisk praksis der sikrer integration af teori og praktisk anvendelse. Uddannelsens modulstruktur sikrer progressiv kompetenceopbygning fra grundlæggende forståelse til selvstændig klinisk anvendelse med supervision."
      },
      'tilknytning-psykobiologi': {
        kursist: "Tidlig tilknytning formede din biologi på dybtgående vis - du lærer at se sammenhængen mellem tilknytningsmønstre og hormonelle profiler. Utryg tilknytning påvirker stresshormonet cortisol og kærlighedshormonet oxytocin på specifikke måder. Denne viden giver dig en biologisk forståelse af hvorfor tilknytningsarbejde har så vidtrækkende effekter på hele menneskets sundhed. Denne viden og erfaring giver dig et solidt fundament at bygge din terapeutiske praksis på.",
        fagfolk: "Forståelse af hvordan attachment præger HPA-akse responsivitet og oxytocin-receptor sensitivitet. Uddannelsen dækker neurobiologiske konsekvenser af forskellige tilknytningsmønstre, herunder variationer i cortisol diurnale rytmer og inflammatoriske profiler. Kursister lærer at anvende psykobiologisk viden til at informere tilknytningsinterventioner og forklare biologiske mekanismer. Denne kompetence udvikles progressivt gennem uddannelsens fem moduler med løbende superviseret klinisk træning og refleksiv praksis som sikrer faglig forsvarlighed."
      },
      'tilknytning-traumer': {
        kursist: "Tilknytningstraumer kræver særlig forsigtighed fordi nærhed paradoksalt nok både er kilden til smerte og vejen til heling. Du lærer at arbejde langsomt og respektfuldt med denne kompleksitet, så dine klienter gradvist kan erfare at relationer også kan være sikre. Uddannelsen giver dig redskaber til at navigere i dette delikate felt med faglig sikkerhed. Denne viden og erfaring giver dig et solidt fundament at bygge din terapeutiske praksis på.",
        fagfolk: "Developmental trauma skaber komplekse autonome mønstre med simultant aktiverede attachment- og defense-systemer. Uddannelsen træner i at navigere det kliniske paradoks at den terapeutiske relation selv kan aktivere traumatiske mønstre. Kursister lærer specifik dosering, langsom safety-etablering og monitorering af desorganiserede tilknytningsreaktioner i sessioner. Klinisk kompetenceopbygning sker systematisk med integreret supervision der sikrer forsvarlig autonom praksis ved endt uddannelse. Denne tilgang er forankret i evidensbaseret forskning og understøttes af praktisk supervision gennem hele uddannelsens forløb."
      },
      'tilknytning-relation': {
        kursist: "Den terapeutiske relation bliver det levende sted hvor nye sikre tilknytningsmønstre kan læres og erfares. Du træner i at skabe en konsistent og tryg relation der gradvist ændrer dine klienters indre arbejdsmodeller. Gennem din egen tilknytningsproces på uddannelsen forstår du denne forandring indefra, hvilket giver dig autentisk kapacitet til at facilitere den. Denne viden og erfaring giver dig et solidt fundament at bygge din terapeutiske praksis på.",
        fagfolk: "Earned secure attachment udvikles gennem terapeutisk relation som gentagen korrigerende emotionel erfaring. Uddannelsen træner kursister i konsistent terapeutisk tilgængelighed, affektiv afstemning og bevidst brug af rupture-repair cykler. Fokus på at udvikle kursisternes egen relationelle kapacitet som fundament for at facilitere tilknytningsforandring hos klienter. Denne integration understøttes af løbende klinisk supervision med fokus på tilknytningsrelateret intervention. Denne integration understøttes af løbende klinisk supervision med fokus på tilknytningsrelateret intervention."
      },
      'kropsterapi-psykobiologi': {
        kursist: "Når kroppen reguleres gennem behandling, følger biologien med - stresshormoner falder, beroligende neurotransmittere stiger og immunsystemet styrkes. Du lærer at forstå de biologiske mekanismer bag det du mærker under kropsbehandling. Denne viden gør dig i stand til at forklare klienter hvorfor kropsarbejde har så vidtrækkende effekter på deres samlede velbefindende. Den kropslige dimension af uddannelsen giver dig redskaber der supplerer og fordyber alt det teoretiske du lærer.",
        fagfolk: "Somatisk intervention påvirker direkte HPA-akse funktion og neurotransmitter-systemer. Uddannelsen integrerer forståelse af fascial innervation, vagal afferent signalering og neuroendokrine kaskader med praktisk behandlingsteknik. Kursister lærer at forbinde klinisk observation med psykobiologiske mekanismer og forankre deres behandlingspraksis i evidensbaseret forståelse. Uddannelsens modulstruktur sikrer progressiv kompetenceopbygning fra grundlæggende forståelse til selvstændig klinisk anvendelse med supervision. Kompetencerne evalueres løbende gennem superviseret klinisk praksis der sikrer integration af teori og praktisk anvendelse."
      },
      'kropsterapi-traumer': {
        kursist: "Traumer sidder lagret i kroppen som frosne spændinger og begrænset åndedræt - du lærer forsigtigt kropsarbejde der gradvist hjælper med at frigøre og integrere dette fastlåste materiale. Uddannelsen giver dig kompetencer i at dosere den kropslige aktivering præcist, så dine klienter oplever sikker og bæredygtig traumebearbejdning gennem kroppen. Den kropslige dimension af uddannelsen giver dig redskaber der supplerer og fordyber alt det teoretiske du lærer.",
        fagfolk: "Incomplete motoriske sekvenser og defensive responses faciliteres gennem titreret proprioceptiv aktivering. Uddannelsen træner i Somatic Experiencing-principper anvendt i kropslig behandling. Kursister opnår kompetencer i at identificere somatiske traumemarkører, monitorere autonome skift under behandling og facilitere completion af fastfrosne forsvarshandlinger. Denne tilgang er forankret i evidensbaseret forskning og understøttes af praktisk supervision gennem hele uddannelsens forløb. Denne kompetence udvikles progressivt gennem uddannelsens fem moduler med løbende superviseret klinisk træning og refleksiv praksis som sikrer faglig forsvarlighed."
      },
      'kropsterapi-relation': {
        kursist: "Behandling i en tryg relation lærer kroppen ny sikkerhed på det mest fundamentale niveau. Berøring fra et reguleret nervesystem kommunikerer direkte til din klients krop at det er sikkert at slippe spændinger og åbne sig. Du lærer at bruge den kropslige kontakt bevidst som en relationel intervention der healer på mange lag samtidig. Den kropslige dimension af uddannelsen giver dig redskaber der supplerer og fordyber alt det teoretiske du lærer.",
        fagfolk: "Terapeutisk touch kombineret med relational safety modificerer somatiske mønstre på det implicitte niveau. Uddannelsen træner i embodied co-regulering gennem hands-on behandling, hvor terapeutens ventral vagale tilstedeværelse transmitteres direkte gennem kvalificeret berøring. Kursister udvikler kompetencer i simultant somatisk og relationel intervention. Kompetencerne evalueres løbende gennem superviseret klinisk praksis der sikrer integration af teori og praktisk anvendelse. Klinisk kompetenceopbygning sker systematisk med integreret supervision der sikrer forsvarlig autonom praksis ved endt uddannelse."
      },
      'psykobiologi-traumer': {
        kursist: "Traumer ændrer biologien konkret - stresshormoner forhøjes kronisk, immunsystemet svækkes og nervesystemets baseline forskydes. Du lærer at se og forstå disse biologiske konsekvenser af traumer og arbejde målrettet med at normalisere dem gennem nervesystemsregulering. Denne viden giver dig et stærkere fundament for dit traumearbejde. Denne videnskabelige forståelse styrker din faglige identitet og troværdighed som nervesystemsterapeut. Denne videnskabelige forståelse styrker din faglige identitet og troværdighed som nervesystemsterapeut.",
        fagfolk: "PTSD og developmental trauma modificerer HPA-akse reaktivitet, inflammatoriske profiler og vagal tone. Uddannelsen dækker neurobiologiske konsekvenser af kronisk traumerelateret dysregulering. Kursister lærer at anvende psykobiologisk forståelse til at informere traumeintervention og monitorere biologiske markører for reguleringskapacitet og behandlingsrespons. Denne kompetence udvikles progressivt gennem uddannelsens fem moduler med løbende superviseret klinisk træning og refleksiv praksis som sikrer faglig forsvarlighed. Uddannelsens modulstruktur sikrer progressiv kompetenceopbygning fra grundlæggende forståelse til selvstændig klinisk anvendelse med supervision."
      },
      'psykobiologi-relation': {
        kursist: "Trygge relationer er biologisk medicin - de øger oxytocin, sænker cortisol og styrker immunforsvaret. Du lærer at bruge denne viden aktivt og forstå at den terapeutiske relation ikke kun er psykologisk støtte, men en reel biologisk intervention der forandrer din klients krop. Denne forståelse giver dybde og overbevisning til dit relationelle arbejde. Denne videnskabelige forståelse styrker din faglige identitet og troværdighed som nervesystemsterapeut.",
        fagfolk: "Secure therapeutic alliance modificerer neurobiologi målbart - oxytocin øges, cortisol og pro-inflammatoriske cytokiner reduceres. Uddannelsen integrerer relationel neurobiologi med praktisk terapeutisk arbejde. Kursister lærer at forstå og kommunikere de biologiske mekanismer bag relationens terapeutiske kraft som evidensbaseret fundament for deres praksis. Klinisk kompetenceopbygning sker systematisk med integreret supervision der sikrer forsvarlig autonom praksis ved endt uddannelse. Denne tilgang er forankret i evidensbaseret forskning og understøttes af praktisk supervision gennem hele uddannelsens forløb."
      },
      'traumer-relation': {
        kursist: "Traumearbejde kræver dyb sikkerhed i relationen som absolut forudsætning - uden tillid og tryghed kan traumemateriale ikke bearbejdes sikkert. Du lærer at opbygge denne robuste alliance tålmodigt og anvende din egen regulerede tilstedeværelse som det trygge fundament hvorfra dine klienter kan møde deres smerte uden at blive overvældet. Du opbygger gradvist kompetencer og selvtillid til at møde komplekst traumemateriale med faglig sikkerhed.",
        fagfolk: "Robust terapeutisk alliance er absolut forudsætning for sikker trauma-processing. Uddannelsen træner i systematisk alliance-opbygning forud for traumeintervention. Kursister lærer at vurdere relationel sikkerhed, monitorere alliance-kvalitet løbende under traumebearbejdning og anvende egen ventral vagal stabilitet som klientens primære reguleringsstøtte under aktivering. Uddannelsens modulstruktur sikrer progressiv kompetenceopbygning fra grundlæggende forståelse til selvstændig klinisk anvendelse med supervision. Kompetencerne evalueres løbende gennem superviseret klinisk praksis der sikrer integration af teori og praktisk anvendelse."
      }
    }
  },
  teachertraining: {
    name: "Teacher Training",
    circles: {
      nervesystem: {
        kursist: {
          title: "Lederuddannelse med Nervesystemet",
          text: "På denne 9 måneders lederuddannelse lærer du at facilitere nervesystemsarbejde for andre. Du udvikler kompetencer til at holde rum, guide grupper og undervise i nervesystemsregulering. Din egen dybe proces er fundamentet for at kunne lede andre."
        },
        fagfolk: {
          title: "Teacher Training - Certificeret Facilitator",
          text: "9 måneders lederuddannelse i 6 moduler. Certificerer til at facilitere nervesystemsarbejde professionelt. Fokus på gruppedynamik, undervisningskompetencer, supervision og etik. Kræver forudgående certificering som nervesystemsterapeut eller tilsvarende."
        }
      },
      polyvagal: {
        kursist: {
          title: "Undervise i Polyvagal Teori",
          text: "Du lærer at formidle polyvagal teori til forskellige målgrupper - fra klienter til fagfolk. Du udvikler evnen til at gøre kompleks neurobiologi tilgængelig og relevant gennem metaforer, øvelser og embodied læring."
        },
        fagfolk: {
          title: "Polyvagal Pædagogik",
          text: "Didaktiske kompetencer i formidling af polyvagal teori. Lærer at tilpasse kompleksitet til målgruppe. Udvikling af undervisningsmaterialer og øvelser der illustrerer teorien embodied. Træning i at facilitere polyvagal-informerede samtaler i grupper."
        }
      },
      tilknytning: {
        kursist: {
          title: "Facilitere Tilknytningsarbejde",
          text: "Du lærer at holde rum for tilknytningsarbejde i grupper - at navigere i komplekse følelser, skabe sikkerhed og facilitere earned secure attachment gennem gruppens co-regulering. Din egen tilknytningsproces fordybes."
        },
        fagfolk: {
          title: "Tilknytnings-gruppefacilitation",
          text: "Kompetencer til at facilitere attachment-arbejde i gruppekontekst. Forståelse af gruppedynamik gennem tilknytningslinsen. Håndtering af desorganiseret tilknytning i grupper. Supervision i at skabe relational safety som fundament for gruppeproces."
        }
      },
      kropsterapi: {
        kursist: {
          title: "Embodied Facilitation",
          text: "Du lærer at facilitere kropslige processer i grupper - at guide åndedrætsarbejde, bevægelse og gruppebehandling. Du udvikler evnen til at læse gruppens somatiske tilstand og justere efter behov. Din egen embodiment er værktøjet."
        },
        fagfolk: {
          title: "Somatisk Gruppefacilitation",
          text: "Facilitering af somatiske processer i gruppeformat. Kompetencer i at guide kollektive åndedræts- og bevægelsesøvelser. Håndtering af somatisk overwhelm i grupper. Træning i at bruge egen embodiment som gruppens regulator."
        }
      },
      psykobiologi: {
        kursist: {
          title: "Formidle Neurobiologi",
          text: "Du lærer at undervise i psykobiologi på en måde der engagerer og giver mening. Du udvikler evnen til at forbinde abstrakt neurobiologi med konkret livserfaring gennem cases, metaforer og interaktive øvelser."
        },
        fagfolk: {
          title: "Neurobiologisk Didaktik",
          text: "Pædagogiske kompetencer i formidling af kompleks neurobiologi. Udvikling af undervisningsdesign der integrerer teori med praksis. Træning i at bruge cases og metaforer. Supervision i at skabe neurobiologisk literacy hos kursister."
        }
      },
      traumer: {
        kursist: {
          title: "Trauma-informeret Facilitation",
          text: "Du lærer at facilitere i trauma-informeret tilgang - at skabe sikkerhed, håndtere aktivering og arbejde inden for gruppens window of tolerance. Du får supervision i at navigere komplekse traumereaktioner i gruppekontekst."
        },
        fagfolk: {
          title: "Trauma-informeret Gruppefacilitation",
          text: "Specialiserede kompetencer i trauma-informeret gruppefacilitation. Forståelse af kollektiv window of tolerance. Håndtering af gruppeaktivering og dissociation. Supervision i etiske dilemmaer ved traumearbejde i grupper."
        }
      },
      relation: {
        kursist: {
          title: "Terapeutisk Ledelse",
          text: "Du udvikler din terapeutiske ledelsesidentitet - at være både facilitator og co-regulator. Du lærer at bruge gruppens relationelle felt aktivt og navigere i overføring og modoverføring. Din egen supervision er central."
        },
        fagfolk: {
          title: "Relationel Ledelse og Etik",
          text: "Udvikling af lederidentitet som nervesystemsfacilitator. Forståelse af gruppens relationelle dynamikker. Håndtering af magt, grænser og etiske dilemmaer. Obligatorisk løbende supervision. Fokus på facilitatorens egen fortsatte proces."
        }
      }
    },
    connections: {
      'nervesystem-polyvagal': {
        kursist: "Du lærer at facilitere polyvagal forståelse som grundlag for alt nervesystemsarbejde i grupper. På lederuddannelsen udvikler du evnen til at undervise i de tre autonome tilstande på måder der engagerer og giver mening for forskellige målgrupper. Du træner i at bruge metaforer, øvelser og embodied demonstration så deltagerne forstår teorien gennem egen erfaring. Denne facilitationskompetence er central for din udvikling som leder inden for nervesystemsfeltet.",
        fagfolk: "Polyvagal teori som didaktisk fundament for nervesystemsfacilitation. Kursister udvikler pædagogiske kompetencer i formidling af Porges' model tilpasset forskellige målgruppers forudsætninger. Træning omfatter design af undervisningsforløb, øvelsesbaseret læring og supervision i at facilitere polyvagal forståelse som grundlag for gruppebaseret nervesystemsarbejde. Kursister demonstrerer disse kompetencer gennem superviseret facilitation med struktureret feedback og refleksiv evaluering af egen praksis. Disse facilitationskompetencer evalueres gennem superviseret praksis med struktureret feedback fra erfarne undervisere og medkursister."
      },
      'nervesystem-tilknytning': {
        kursist: "Du lærer at facilitere tilknytningsarbejde gennem nervesystemsregulering i grupper. Lederuddannelsen giver dig kompetencer i at holde rum for komplekse tilknytningsprocesser og guide deltagere sikkert gennem følelsesmæssigt krævende materiale. Du træner i at bruge gruppens relationelle felt aktivt som ressource for den enkeltes tilknytningshealing. Denne facilitationskompetence er central for din udvikling som leder inden for nervesystemsfeltet. Denne facilitationskompetence er central for din udvikling som leder inden for nervesystemsfeltet.",
        fagfolk: "Integration af attachment-arbejde i nervesystemsfacilitation som kernekompetence. Kursister trænes i at facilitere gruppeprocesser der adresserer tilknytningsmønstre gennem autonomt nervesystem-regulering. Supervision fokuserer på håndtering af gruppeoverføring og kontrolleret eksponering for tilknytningsrelateret materiale i sikker gruppekontekst. Facilitationskompetencerne integreres med lederuddannelsens øvrige elementer og evalueres gennem superviseret praksis og faglig refleksion. Kompetencerne opbygges progressivt gennem lederuddannelsens seks moduler med fokus på faglig refleksion og superviseret facilitationspraksis."
      },
      'nervesystem-kropsterapi': {
        kursist: "Du lærer at guide kropslige nervesystemsøvelser for grupper med sikkerhed og tilstedeværelse. Lederuddannelsen træner dig i at facilitere kollektive åndedrætsøvelser, bevægelsessekvenser og somatiske reguleringsøvelser. Du udvikler evnen til at aflæse gruppens samlede kropslige tilstand og tilpasse dine instruktioner efter hvad gruppen har brug for i øjeblikket. Denne facilitationskompetence er central for din udvikling som leder inden for nervesystemsfeltet. Denne facilitationskompetence er central for din udvikling som leder inden for nervesystemsfeltet.",
        fagfolk: "Somatisk facilitationskompetence som kernefærdighed i lederuddannelsen. Kursister udvikler kompetencer i at guide gruppebaserede kropslige interventioner, monitorere kollektive somatiske reaktioner og håndtere individuel overwhelm i gruppeformat. Træning i at bruge egen embodiment som regulator for gruppens samlede autonome tilstand. Disse facilitationskompetencer evalueres gennem superviseret praksis med struktureret feedback fra erfarne undervisere og medkursister. Denne didaktiske kompetence udvikles gennem superviseret undervisningspraksis med løbende evaluering og faglig sparring."
      },
      'nervesystem-psykobiologi': {
        kursist: "Du lærer at formidle sammenhængen mellem nervesystem og biologi på en engagerende og tilgængelig måde. Lederuddannelsen giver dig didaktiske værktøjer til at gøre kompleks neurobiologi forståelig gennem cases, metaforer og interaktive øvelser. Du træner i at tilpasse dit sprog og dine forklaringer til den specifikke gruppe du arbejder med. Denne facilitationskompetence er central for din udvikling som leder inden for nervesystemsfeltet.",
        fagfolk: "Didaktiske kompetencer i neurobiologisk undervisning som central færdighed. Kursister lærer at designe undervisningsforløb der integrerer psykobiologisk teori med praktisk erfaring. Supervision i formidling af HPA-akse funktion, neurotransmitter-systemer og autonom fysiologi tilpasset forskellige faglige niveauer og målgrupper. Kompetencerne opbygges progressivt gennem lederuddannelsens seks moduler med fokus på faglig refleksion og superviseret facilitationspraksis. Kursister demonstrerer disse kompetencer gennem superviseret facilitation med struktureret feedback og refleksiv evaluering af egen praksis."
      },
      'nervesystem-traumer': {
        kursist: "Du lærer trauma-informeret facilitation af nervesystemsarbejde i grupper. Lederuddannelsen giver dig kompetencer i at skabe sikkerhed, genkende aktivering og navigere i gruppens samlede window of tolerance. Du træner i at holde rum for traumerelaterede reaktioner uden at overvælde gruppen eller den enkelte deltager. Denne facilitationskompetence er central for din udvikling som leder inden for nervesystemsfeltet. Denne facilitationskompetence er central for din udvikling som leder inden for nervesystemsfeltet.",
        fagfolk: "Trauma-informeret tilgang som grundprincip i al facilitation. Kursister udvikler specialiserede kompetencer i at vurdere gruppens kollektive reguleringskapacitet, identificere traumatisk aktivering i gruppeformat og intervenere med passende dosering. Supervision i etiske dilemmaer ved traumearbejde i åbne gruppesammenhænge. Denne didaktiske kompetence udvikles gennem superviseret undervisningspraksis med løbende evaluering og faglig sparring. Facilitationskompetencerne integreres med lederuddannelsens øvrige elementer og evalueres gennem superviseret praksis og faglig refleksion."
      },
      'nervesystem-relation': {
        kursist: "Du bruger din egen regulering til at co-regulere hele gruppen som leder og facilitator. Lederuddannelsen hjælper dig med at forstå at dit nervesystems tilstand sætter tonen for hele rummet. Du træner i at opretholde ventral vagal tilstedeværelse selv under pres og bruge din rolige stabilitet som det ankerpunkt gruppen orienterer sig efter. Denne facilitationskompetence er central for din udvikling som leder inden for nervesystemsfeltet.",
        fagfolk: "Facilitatorens autonome tilstand som primær gruppeintervention. Lederuddannelsen fokuserer på udvikling af kursisternes kapacitet til at fungere som autonom regulator for gruppen. Træning i bevidst anvendelse af prosodi, ansigtsudtryk og embodied tilstedeværelse som neuroceptive signaler der faciliterer kollektiv ventral vagal aktivering. Kursister demonstrerer disse kompetencer gennem superviseret facilitation med struktureret feedback og refleksiv evaluering af egen praksis. Disse facilitationskompetencer evalueres gennem superviseret praksis med struktureret feedback fra erfarne undervisere og medkursister."
      },
      'polyvagal-tilknytning': {
        kursist: "Du lærer at formidle hvordan tilknytning og polyvagal teori hænger uløseligt sammen. Lederuddannelsen giver dig kompetencer i at undervise i denne integration på måder der gør det konkret og genkendeligt for deltagerne. Du træner i at bruge gruppeøvelser der illustrerer sammenhængen mellem tilknytningsmønstre og autonome tilstande gennem direkte erfaring. Du opbygger gradvist den didaktiske sikkerhed der gør dig til en effektiv formidler af polyvagal teori.",
        fagfolk: "Didaktik i integration af attachment og polyvagal teori som undervisningsfelt. Kursister udvikler kompetencer i at præsentere tilknytningsmønstre som polyvagale profiler og designe læringsaktiviteter der illustrerer denne integration. Supervision i at facilitere gruppedeltageres forståelse af egne tilknytnings-autonome mønstre. Facilitationskompetencerne integreres med lederuddannelsens øvrige elementer og evalueres gennem superviseret praksis og faglig refleksion. Kompetencerne opbygges progressivt gennem lederuddannelsens seks moduler med fokus på faglig refleksion og superviseret facilitationspraksis."
      },
      'polyvagal-kropsterapi': {
        kursist: "Du guider grupper i kropsøvelser der målrettet aktiverer ventral vagal sikkerhed og regulering. Lederuddannelsen træner dig i at designe og facilitere somatiske øvelsessekvenser baseret på polyvagale principper. Du lærer at justere intensitet og tempo efter gruppens behov og skabe en tryg ramme for kropslig udforskning. Du opbygger gradvist den didaktiske sikkerhed der gør dig til en effektiv formidler af polyvagal teori.",
        fagfolk: "Facilitering af somatiske øvelser baseret på polyvagale principper i gruppekontekst. Kursister udvikler kompetencer i at designe øvelsesforløb der systematisk aktiverer ventral vagale pathways. Træning omfatter monitorering af gruppens kollektive autonome respons og tilpasning af somatiske interventioners intensitet i realtid. Disse facilitationskompetencer evalueres gennem superviseret praksis med struktureret feedback fra erfarne undervisere og medkursister. Denne didaktiske kompetence udvikles gennem superviseret undervisningspraksis med løbende evaluering og faglig sparring."
      },
      'polyvagal-psykobiologi': {
        kursist: "Du lærer at formidle polyvagal teori som biologisk fundament for nervesystemets funktion. Lederuddannelsen giver dig redskaber til at forbinde de tre autonome tilstande med konkrete biologiske processer som hormoner og immunfunktion. Du træner i at gøre denne sammenhæng levende og motiverende for dine deltagere gennem illustrative eksempler. Du opbygger gradvist den didaktiske sikkerhed der gør dig til en effektiv formidler af polyvagal teori.",
        fagfolk: "Integration af polyvagal og neurobiologisk undervisning som didaktisk kompetence. Kursister lærer at sammenbinde Porges' autonome hierarki med psykobiologiske processer i engagerende undervisningsdesign. Supervision i formidling af komplekse neuroendokrine mekanismer tilpasset deltagernes faglige baggrund og erfaringsniveau. Kompetencerne opbygges progressivt gennem lederuddannelsens seks moduler med fokus på faglig refleksion og superviseret facilitationspraksis. Kursister demonstrerer disse kompetencer gennem superviseret facilitation med struktureret feedback og refleksiv evaluering af egen praksis."
      },
      'polyvagal-traumer': {
        kursist: "Du lærer at facilitere polyvagal forståelse i trauma-informeret gruppearbejde. Lederuddannelsen giver dig kompetencer i at undervise i hvordan traumer fastlåser nervesystemet i defensive tilstande. Du træner i at skabe sikkerhed i gruppen når traumerelateret materiale aktiveres og guide deltagerne tilbage til ventral vagal forankring. Du opbygger gradvist den didaktiske sikkerhed der gør dig til en effektiv formidler af polyvagal teori.",
        fagfolk: "Polyvagal teori som ramme for trauma-informeret gruppearbejde og facilitation. Kursister udvikler kompetencer i at anvende polyvagal assessment af gruppemedlemmers reguleringskapacitet og tilpasse traumeorienteret gruppearbejde efter kollektiv tolerancevindue. Supervision i håndtering af dissociative reaktioner i gruppeformat. Denne didaktiske kompetence udvikles gennem superviseret undervisningspraksis med løbende evaluering og faglig sparring. Facilitationskompetencerne integreres med lederuddannelsens øvrige elementer og evalueres gennem superviseret praksis og faglig refleksion."
      },
      'polyvagal-relation': {
        kursist: "Du bruger polyvagal teori til at forstå og navigere gruppedynamikker med indsigt og overblik. Lederuddannelsen lærer dig at aflæse gruppens kollektive autonome tilstand og bruge denne forståelse aktivt i din facilitation. Du træner i at skabe ventral vagal sikkerhed i relationen mellem dig og gruppen som fundament for alt arbejde. Du opbygger gradvist den didaktiske sikkerhed der gør dig til en effektiv formidler af polyvagal teori.",
        fagfolk: "Polyvagal forståelse af gruppens relationelle felt som facilitationskompetence. Kursister lærer at anvende social engagement system-teori til at forstå og navigere gruppedynamikker. Træning i at facilitere kollektiv co-regulering og anvende polyvagal ramme til at intervenere præcist i gruppens relationelle processer. Kursister demonstrerer disse kompetencer gennem superviseret facilitation med struktureret feedback og refleksiv evaluering af egen praksis. Disse facilitationskompetencer evalueres gennem superviseret praksis med struktureret feedback fra erfarne undervisere og medkursister."
      },
      'tilknytning-kropsterapi': {
        kursist: "Du lærer at facilitere embodied tilknytningsarbejde i grupper med sikkerhed og nærvær. Lederuddannelsen giver dig kompetencer i at guide kropslige øvelser der adresserer tilknytningsmønstre direkte. Du træner i at holde rum for de følelser der opstår når deltagerne mærker deres tilknytningsmønstre i kroppen og navigere gruppens process. Denne evne til at facilitere gruppeprocesser udvikles gennem din egen dybe tilknytningsproces på uddannelsen.",
        fagfolk: "Somatisk facilitation af attachment-processer i gruppeformat som specialiseret kompetence. Kursister trænes i at designe og guide kropslige øvelser der adresserer embodied tilknytningsmønstre. Supervision i håndtering af somatisk aktivering ved tilknytningsrelateret materiale og facilitering af kropslig reconsolidation i gruppekontekst. Facilitationskompetencerne integreres med lederuddannelsens øvrige elementer og evalueres gennem superviseret praksis og faglig refleksion. Kompetencerne opbygges progressivt gennem lederuddannelsens seks moduler med fokus på faglig refleksion og superviseret facilitationspraksis."
      },
      'tilknytning-psykobiologi': {
        kursist: "Du lærer at formidle tilknytningens biologiske fundament engagerende og forståeligt for dine deltagere. Lederuddannelsen giver dig didaktiske værktøjer til at forklare hvordan tidlig tilknytning former hormonsystemer og stressrespons. Du træner i at gøre denne viden relevant og motiverende, så deltagerne forstår hvorfor tilknytningsarbejde har biologisk effekt. Denne evne til at facilitere gruppeprocesser udvikles gennem din egen dybe tilknytningsproces på uddannelsen.",
        fagfolk: "Undervisning i neurobiologi bag tilknytningsmønstre som didaktisk kompetence. Kursister udvikler evnen til at formidle HPA-akse modifikation, oxytocin-receptor sensitivitet og cortisol-reaktivitet i relation til attachment-mønstre. Supervision i at tilpasse kompleks psykobiologisk formidling til forskellige målgruppers faglige forudsætninger. Disse facilitationskompetencer evalueres gennem superviseret praksis med struktureret feedback fra erfarne undervisere og medkursister. Denne didaktiske kompetence udvikles gennem superviseret undervisningspraksis med løbende evaluering og faglig sparring."
      },
      'tilknytning-traumer': {
        kursist: "Du lærer at facilitere tilknytningstraumer med særlig forsigtighed og opmærksomhed i gruppesammenhæng. Lederuddannelsen giver dig kompetencer i at skabe tilstrækkelig sikkerhed til at berøre dette sårbare felt. Du træner i at navigere den særlige kompleksitet der opstår når deltagere med desorganiseret tilknytning aktiveres i gruppens relationelle felt. Denne evne til at facilitere gruppeprocesser udvikles gennem din egen dybe tilknytningsproces på uddannelsen.",
        fagfolk: "Specialiseret facilitation af developmental trauma i gruppekontekst. Kursister udvikler kompetencer i at håndtere desorganiseret tilknytningsaktivering i grupper, herunder simultane attachment- og defense-responser. Supervision fokuserer på etiske overvejelser, doseringsprincipper og vedligeholdelse af gruppens samlede reguleringskapacitet under arbejde med tilknytningstraumer. Kompetencerne opbygges progressivt gennem lederuddannelsens seks moduler med fokus på faglig refleksion og superviseret facilitationspraksis. Kursister demonstrerer disse kompetencer gennem superviseret facilitation med struktureret feedback og refleksiv evaluering af egen praksis."
      },
      'tilknytning-relation': {
        kursist: "Du bruger gruppens relationelle felt aktivt til tilknytningshealing og nye relationelle erfaringer. Lederuddannelsen lærer dig at facilitere gruppeprocesser hvor deltagerne oplever earned secure attachment gennem forbindelse med hinanden. Du træner i at bruge din egen tilknytningssikkerhed som fundament og skabe et rum hvor nye mønstre kan dannes. Denne evne til at facilitere gruppeprocesser udvikles gennem din egen dybe tilknytningsproces på uddannelsen.",
        fagfolk: "Facilitering af earned secure attachment gennem gruppeprocesser og relationelle erfaringer. Kursister udvikler kompetencer i at anvende gruppens relationelle felt som kontekst for tilknytningsforandring. Supervision i at facilitere korrigerende emotionelle erfaringer mellem gruppemedlemmer og håndtere tilknytningsrelateret overføring i gruppedynamikker. Denne didaktiske kompetence udvikles gennem superviseret undervisningspraksis med løbende evaluering og faglig sparring. Facilitationskompetencerne integreres med lederuddannelsens øvrige elementer og evalueres gennem superviseret praksis og faglig refleksion."
      },
      'kropsterapi-psykobiologi': {
        kursist: "Du lærer at formidle hvordan kropsarbejde påvirker biologien direkte og mærkbart for dine deltagere. Lederuddannelsen giver dig kompetencer i at undervise i sammenhængen mellem somatisk intervention og biologisk respons. Du træner i at bruge konkrete eksempler og øvelser der lader deltagerne erfare de biologiske forandringer i deres egen krop. Din egen kropslige proces på uddannelsen er fundamentet for at kunne guide andre autentisk og sikkert.",
        fagfolk: "Undervisning i somatisk interventions neurobiologiske basis som didaktisk kompetence. Kursister udvikler evnen til at formidle fascial innervation, vagal afferent signalering og neuroendokrine kaskader i relation til praktisk kropsarbejde. Supervision i at integrere psykobiologisk teori med embodied undervisning. Kursister demonstrerer disse kompetencer gennem superviseret facilitation med struktureret feedback og refleksiv evaluering af egen praksis. Disse facilitationskompetencer evalueres gennem superviseret praksis med struktureret feedback fra erfarne undervisere og medkursister."
      },
      'kropsterapi-traumer': {
        kursist: "Du lærer at guide trauma-informeret kropsarbejde sikkert i gruppesammenhænge. Lederuddannelsen giver dig kompetencer i at facilitere somatiske øvelser der hjælper med at frigøre fastfrosset traumemateriale i et tempo gruppen kan bære. Du træner i at monitorere deltagernes kropslige reaktioner og intervenere når aktivering overskrider tolerancevinduet. Din egen kropslige proces på uddannelsen er fundamentet for at kunne guide andre autentisk og sikkert.",
        fagfolk: "Facilitering af titreret somatisk trauma-processing i grupper som specialkompetence. Kursister udvikler evnen til at guide kollektive kropslige processer med traumebevidst dosering. Supervision i monitorering af individuelle somatiske traumeresponser i gruppeformat og intervention ved overvældelse under gruppebaseret kropsligt traumearbejde. Facilitationskompetencerne integreres med lederuddannelsens øvrige elementer og evalueres gennem superviseret praksis og faglig refleksion. Kompetencerne opbygges progressivt gennem lederuddannelsens seks moduler med fokus på faglig refleksion og superviseret facilitationspraksis."
      },
      'kropsterapi-relation': {
        kursist: "Du bruger kropsligt nærvær til at co-regulere gruppen og skabe sikkerhed gennem din egen embodiment. Lederuddannelsen træner dig i at bruge din krop bevidst som kommunikationsredskab og reguleringsressource for hele gruppen. Du lærer at din kropslige tilstedeværelse taler direkte til deltagernes nervesystemer og sætter tonen for hele rummet. Din egen kropslige proces på uddannelsen er fundamentet for at kunne guide andre autentisk og sikkert.",
        fagfolk: "Embodied facilitation som relationel intervention i gruppekontekst. Kursister udvikler kompetencer i at anvende egen somatisk tilstedeværelse som grupperegulerende faktor. Træning i bevidst brug af kropslig positionering, berøringskvalitet og embodied co-regulering som kanaler for neuroceptiv signalering af sikkerhed i gruppearbejde. Disse facilitationskompetencer evalueres gennem superviseret praksis med struktureret feedback fra erfarne undervisere og medkursister. Denne didaktiske kompetence udvikles gennem superviseret undervisningspraksis med løbende evaluering og faglig sparring."
      },
      'psykobiologi-traumer': {
        kursist: "Du lærer at formidle traumets neurobiologiske konsekvenser på en måde der skaber forståelse og håb hos deltagerne. Lederuddannelsen giver dig kompetencer i at undervise i hvordan traumer ændrer biologien og hvordan reguleringsarbejde kan normalisere den igen. Du træner i at gøre kompleks traumebiologi tilgængelig og meningsfuld for dine grupper. Denne formidlingskompetence gør dig i stand til at gøre kompleks videnskab levende og meningsfuld for dine deltagere.",
        fagfolk: "Undervisning i PTSD-neurobiologi som tilgængelig og klinisk relevant formidlingskompetence. Kursister udvikler didaktiske færdigheder i at præsentere traumets biologiske konsekvenser, herunder HPA-akse dysregulering og inflammatoriske profiler. Supervision i at balancere videnskabelig præcision med pædagogisk tilgængelighed i traumebiologisk undervisning. Kompetencerne opbygges progressivt gennem lederuddannelsens seks moduler med fokus på faglig refleksion og superviseret facilitationspraksis. Kursister demonstrerer disse kompetencer gennem superviseret facilitation med struktureret feedback og refleksiv evaluering af egen praksis."
      },
      'psykobiologi-relation': {
        kursist: "Du lærer at formidle relationens neurobiologiske kraft og betydning for dine deltagere. Lederuddannelsen giver dig kompetencer i at undervise i hvordan trygge relationer konkret ændrer biologien gennem oxytocin, cortisol-reduktion og immunstimulering. Du træner i at gøre denne viden levende og motiverende for arbejdet med relationel healing. Denne formidlingskompetence gør dig i stand til at gøre kompleks videnskab levende og meningsfuld for dine deltagere.",
        fagfolk: "Undervisning i relationel neurobiologi som didaktisk kompetenceområde. Kursister udvikler evnen til at formidle biologiske mekanismer bag terapeutisk alliance og co-regulering. Supervision i at integrere forskningsbaseret viden om social neurobiologi med praktisk undervisning i relationens terapeutiske kraft og evidensgrundlag. Denne didaktiske kompetence udvikles gennem superviseret undervisningspraksis med løbende evaluering og faglig sparring. Facilitationskompetencerne integreres med lederuddannelsens øvrige elementer og evalueres gennem superviseret praksis og faglig refleksion."
      },
      'traumer-relation': {
        kursist: "Du lærer at facilitere traumearbejde i et dybt sikkert relationelt rum hvor gruppen bærer den enkelte. Lederuddannelsen giver dig kompetencer i at opbygge den nødvendige tillid og sikkerhed før traumemateriale adresseres i gruppen. Du træner i at holde rum for intens aktivering og guide gruppen gennem processen med rolig tilstedeværelse. Denne specialiserede kompetence kræver løbende supervision og din egen vedvarende personlige proces.",
        fagfolk: "Skabelse af relational safety som forudsætning for traumearbejde i grupper. Kursister udvikler kompetencer i systematisk alliance-opbygning i gruppeformat og vurdering af gruppens relationelle bærekapacitet forud for traumeintervention. Supervision i at vedligeholde terapeutisk sikkerhed under høj gruppeaktivering og facilitere kollektiv regulering. Kursister demonstrerer disse kompetencer gennem superviseret facilitation med struktureret feedback og refleksiv evaluering af egen praksis. Disse facilitationskompetencer evalueres gennem superviseret praksis med struktureret feedback fra erfarne undervisere og medkursister."
      }
    }
  },
  tilknytningsspeciale: {
    name: "Tilknytningsspeciale",
    circles: {
      nervesystem: {
        kursist: {
          title: "3-Dages Intensivkursus",
          text: "På disse tre intensive dage dykker vi dybt ned i tilknytningsmønstre gennem nervesystemslinsen. Du lærer de 4 mønstre grundigt og får konkrete værktøjer til at arbejde med hver især. Kurset er både teoretisk og dybt personligt."
        },
        fagfolk: {
          title: "Tilknytningsspeciale - 3 Dage",
          text: "Intensivkursus i tilknytningsmønstre med fokus på nervesystemsmanifestationer. Dybdegående studium af de 4 mønstre med konkrete interventionsstrategier. Omfatter både teori, cases og egen tilknytningsproces. Forudsætter grundlæggende viden om nervesystemsarbejde."
        }
      },
      polyvagal: {
        kursist: {
          title: "Polyvagale Tilknytningsmønstre",
          text: "Du lærer at se hvert tilknytningsmønster som en specifik polyvagal profil. Tryg tilknytning som ventral vagal fleksibilitet, utryg tilknytning som rigid sympatisk eller dorsal dominans. Dette giver dig nøglen til at arbejde med mønsterne."
        },
        fagfolk: {
          title: "Tilknytning som Polyvagale Profiler",
          text: "Detaljeret mapping af tilknytningsmønstre til polyvagale profiler. Sikker = ventral vagal fleksibilitet. Ambivalent = sympatisk hyperactivation. Undvigende = dorsal deactivation. Desorganiseret = simultane modsatrettede states. Interventionsstrategier for hver profil."
        }
      },
      tilknytning: {
        kursist: {
          title: "De 4 Tilknytningsmønstre Grundigt",
          text: "Du lærer tryg, undvigende, ambivalent og desorganiseret tilknytning i dybden. Hvordan de opstår, hvordan de manifesterer sig i voksenlivet og hvordan de kan ændres. Du udforsker dit eget mønster og får redskaber til forandring."
        },
        fagfolk: {
          title: "Tilknytningstypologi - Dybdeforståelse",
          text: "Omfattende studium af Ainsworth's typologi med Main's Adult Attachment Interview-perspektiv. Developmental oprindelse, neurobiologisk substrat og kliniske manifestationer af hvert mønster. Assessment-værktøjer og interventionsstrategier. Fokus på earned secure attachment som terapeutisk mål."
        }
      },
      kropsterapi: {
        kursist: {
          title: "Tilknytning i Kroppen",
          text: "Du lærer hvordan hvert tilknytningsmønster sidder som specifikke kropslige mønstre - i åndedræt, tonus, bevægelse. Du får konkrete somatiske øvelser til arbejde med hvert mønster og lærer at læse tilknytning through kroppen."
        },
        fagfolk: {
          title: "Embodied Tilknytningsmønstre",
          text: "Tilknytningsmønstre manifesteret somatisk. Sikker = åben krop, dyb åndedræt. Undvigende = rigid tonus, shallow breathing. Ambivalent = hypervigilant muskulatur. Desorganiseret = fragmenteret embodiment. Somatiske interventioner specifikt tilpasset hvert mønster."
        }
      },
      psykobiologi: {
        kursist: {
          title: "Tilknytningens Neurobiologi",
          text: "Du lærer hvordan tidlig tilknytning formede din biologi - HPA-akse, oxytocin-system, stressrespons. Du får forståelse for hvordan forskellige mønstre har forskellige biologiske signatures og hvordan de kan modificeres."
        },
        fagfolk: {
          title: "Neurobiologisk Substrat af Tilknytning",
          text: "HPA-akse modificering gennem early attachment experiences. Oxytocin og vasopressin-receptor sensitivitet former tilknytningsmønstre. Cortisol-reaktivitet varierer systematisk mellem mønstre. Neuroplasticitet som basis for earned secure attachment gennem terapeutisk intervention."
        }
      },
      traumer: {
        kursist: {
          title: "Tilknytningstraumer",
          text: "Du lærer om developmental trauma inden for tilknytningssystemet - når omsorgspersonen var både kilde til fare og sikkerhed. Du får forståelse for desorganiseret tilknytning og særlige metoder til at arbejde med det."
        },
        fagfolk: {
          title: "Developmental Trauma og Desorganisering",
          text: "Desorganiseret tilknytning som resultat af frightened/frightening caregiving. Simultane activation af attachment og defense systems. Neurobiologiske konsekvenser omfatter dysreguleret HPA-akse og fragmenteret selvoplevelse. Specialiserede interventioner kræver robust alliance og langsom safety-etablering."
        }
      },
      relation: {
        kursist: {
          title: "Earned Secure Attachment",
          text: "Du lærer hvordan unsikker tilknytning kan ændres til sikker gennem terapeutisk relation. Du får forståelse for hvordan du selv kan facilitere earned secure attachment og oplever det gennem kursets relationelle rum."
        },
        fagfolk: {
          title: "Terapeutisk Facilitation af ESA",
          text: "Earned secure attachment gennem korrigerende emotionelle erfaringer i terapeutisk relation. Terapeuts konsistente tilgængelighed, afstemning og rupture-repair cycles modificerer indre arbejdsmodeller. Requires langvarig terapeutisk alliance med fokus på relationel reconsolidation gennem gentagen experience."
        }
      }
    },
    connections: {
      'nervesystem-polyvagal': {
        kursist: "Tilknytningsmønstre er i bund og grund polyvagale mønstre - de er to sider af samme sag. På dette intensive kursus lærer du at se hvert tilknytningsmønster som en specifik autonom profil. Tryg tilknytning afspejler ventral vagal fleksibilitet, mens de utrygge mønstre viser sig som fastlåste sympatiske eller dorsale tilstande. Denne forståelse giver dig præcise interventionsstrategier. Denne forståelse giver dig et kraftfuldt perspektiv på tilknytningsmønstre og deres forandringspotentiale.",
        fagfolk: "Tilknytningsmanifestationer forstået gennem polyvagal ramme som integreret forståelsesmodel. Kurset præsenterer systematisk mapping af de fire tilknytningsmønstre til polyvagale profiler med fokus på autonome signaturer og interventionsimplikationer. Deltagerne opnår kompetencer i at identificere tilknytningsrelaterede autonome mønstre og designe polyvagal-informerede interventioner specifikt tilpasset den enkelte klients tilknytningsmønster. Deltagerne opnår specialiseret klinisk kompetence der understøtter præcis og effektiv tilknytningsbaseret intervention i praksis. Deltagerne opnår disse kompetencer gennem det intensive kursusformat med fokus på integration af teori, cases og superviseret klinisk praksis."
      },
      'nervesystem-tilknytning': {
        kursist: "At arbejde med tilknytning er i sin essens at arbejde med nervesystemet, fordi tilknytningsmønstre er kodet direkte i den autonome regulering. På kurset lærer du at se tilknytningsarbejde og nervesystemsarbejde som én integreret proces. Du får konkrete værktøjer til at adressere tilknytningsmønstre gennem autonome interventioner, hvilket åbner for forandring på det niveau hvor mønstrene sidder. Denne forståelse giver dig et kraftfuldt perspektiv på tilknytningsmønstre og deres forandringspotentiale.",
        fagfolk: "Tilknytningsintervention som nervesystemsintervention - den teoretiske og praktiske integration der udgør kursets kerne. Deltagerne opnår forståelse for at tilknytningsmønstre manifesterer sig som specifikke autonome reguleringsmønstre og at effektiv tilknytningsintervention derfor kræver direkte adressering af det autonome nervesystems tilstand. Denne integration informerer alle interventionsstrategier på kurset. Denne specialiserede kompetence opnås gennem kursets intensive format der integrerer teori med praktisk træning og klinisk supervision."
      },
      'nervesystem-kropsterapi': {
        kursist: "Tilknytningsmønstre sidder lagret i kroppen som specifikke spændingsmønstre, åndedrætsrestriktioner og bevægelsesvaner. På kurset lærer du at aflæse disse kropslige tilknytningssignaturer og arbejde direkte med dem gennem somatiske teknikker. Kropsarbejde giver adgang til tilknytningsmønstre der blev dannet før sproget udviklede sig og som derfor ikke kan nås gennem samtale alene. Denne forståelse giver dig et kraftfuldt perspektiv på tilknytningsmønstre og deres forandringspotentiale.",
        fagfolk: "Somatisk intervention modificerer embodied tilknytningsmønstre på det subsymboliske niveau. Kurset træner i identificering af mønster-specifikke somatiske markører for hvert tilknytningsmønster og tilpassede kropslige interventioner. Deltagerne lærer at anvende proprioceptiv og interoceptiv re-patterning til reconsolidation af implicit encodede tilknytningsmønstre der ikke er tilgængelige for narrativ bearbejdning. Deltagerne opnår disse kompetencer gennem det intensive kursusformat med fokus på integration af teori, cases og superviseret klinisk praksis."
      },
      'nervesystem-psykobiologi': {
        kursist: "Tilknytning formede din biologi helt ned på celleniveau - men biologien kan omformes gennem nye erfaringer. På kurset lærer du hvordan hvert tilknytningsmønster har sin egen biologiske signatur i form af specifikke hormonniveauer, stressrespons og oxytocin-følsomhed. Denne viden giver dig dyb forståelse for hvorfor tilknytningsarbejde har så vidtrækkende effekter på hele menneskets sundhed og trivsel. Denne forståelse giver dig et kraftfuldt perspektiv på tilknytningsmønstre og deres forandringspotentiale.",
        fagfolk: "Tilknytningsmønstre præger neurobiologi på fundamentale måder der er modificerbare gennem målrettet intervention. Kurset dækker mønster-specifik variation i HPA-akse responsivitet, oxytocin-receptor densitet, cortisol diurnale rytmer og inflammatoriske profiler. Deltagerne opnår kompetencer i at anvende psykobiologisk viden til at informere tilknytningsinterventioner og monitorere biologiske markører for behandlingsrespons. Kursets intensive format sikrer dybdegående kompetenceopbygning i tilknytningsspecialiseret intervention med løbende supervision og feedback. Kursets intensive format sikrer dybdegående kompetenceopbygning i tilknytningsspecialiseret intervention med løbende supervision og feedback."
      },
      'nervesystem-traumer': {
        kursist: "Tilknytningstraumer kræver særlig forsigtighed i nervesystemsarbejdet, fordi nærhed paradoksalt nok er både kilden til smerten og vejen til healing. På kurset lærer du at arbejde langsomt og respektfuldt med denne kompleksitet. Du får konkrete redskaber til at skabe tilstrækkelig sikkerhed og navigere i det delikate felt hvor tilknytning og traume mødes. Denne forståelse giver dig et kraftfuldt perspektiv på tilknytningsmønstre og deres forandringspotentiale.",
        fagfolk: "Developmental trauma skaber komplekse autonome mønstre med simultant aktiverede attachment- og defense-systemer. Kurset fokuserer specifikt på den kliniske udfordring ved desorganiseret tilknytning, herunder håndtering af det terapeutiske paradoks at relationen selv kan aktivere traumatiske mønstre. Deltagerne trænes i langsom safety-etablering og specifik dosering af tilknytningsrelateret traumearbejde. Disse kompetencer udvikles gennem kursets tre intensive dage med integration af evidensbaseret teori og superviseret klinisk træning."
      },
      'nervesystem-relation': {
        kursist: "Nye tilknytningsoplevelser sker gennem et reguleret nervesystem i en tryg relation - det er den vej forandring tager. På kurset lærer du at skabe de betingelser der gør earned secure attachment mulig. Du træner i at bruge dit eget regulerede nervesystem til at tilbyde dine klienter den sikre relationelle erfaring der gradvist kan omforme deres tilknytningsmønstre. Denne forståelse giver dig et kraftfuldt perspektiv på tilknytningsmønstre og deres forandringspotentiale.",
        fagfolk: "Earned secure attachment faciliteres gennem co-regulering i terapeutisk alliance som korrigerende emotionel erfaring. Kurset træner i at anvende den terapeutiske relation bevidst som kontekst for tilknytningsforandring. Deltagerne lærer at opretholde konsistent terapeutisk tilgængelighed, affektiv afstemning og rupture-repair processer der modificerer klientens indre arbejdsmodeller over tid. Deltagerne opnår specialiseret klinisk kompetence der understøtter præcis og effektiv tilknytningsbaseret intervention i praksis. Disse kompetencer udvikles gennem kursets tre intensive dage med integration af evidensbaseret teori og superviseret klinisk træning."
      },
      'polyvagal-tilknytning': {
        kursist: "Hvert tilknytningsmønster har sin helt specifikke polyvagale signatur som du lærer at genkende og arbejde med. Tryg tilknytning viser sig som ventral vagal fleksibilitet, undvigende som dorsal shutdown, ambivalent som sympatisk hyperaktivering og desorganiseret som kaotisk skift mellem tilstande. Denne mapping giver dig et præcist autonomt kort over dine klienters tilknytningsmønstre. Denne integration af polyvagal teori og tilknytningsforståelse giver dig konkrete redskaber til præcist klinisk arbejde.",
        fagfolk: "Systematisk mapping af attachment-mønstre til autonome profiler udgør kursets teoretiske kerne. Deltagerne opnår detaljeret forståelse af polyvagale signaturer for hvert tilknytningsmønster: sikker tilknytning som ventral vagal fleksibilitet, undvigende som dorsal deaktivering, ambivalent som sympatisk hyperaktivering og desorganiseret som simultane modsatrettede autonome states. Denne kompetence understøtter præcis klinisk intervention baseret på den enkelte klients autonome tilknytningsmønster. Denne kompetence understøtter præcis klinisk intervention baseret på den enkelte klients autonome tilknytningsmønster."
      },
      'polyvagal-kropsterapi': {
        kursist: "Kropsarbejde aktiverer den ventrale sikkerhed der er nødvendig for at tilknytningshealing kan finde sted. På kurset lærer du specifikke somatiske teknikker der skaber den regulerede tilstand hvor gamle tilknytningsmønstre trygt kan mødes og omformes. Du erfarer selv hvordan kropslig sikkerhed åbner for dybere tilknytningsarbejde end det er muligt fra en dysreguleret tilstand. Denne integration af polyvagal teori og tilknytningsforståelse giver dig konkrete redskaber til præcist klinisk arbejde.",
        fagfolk: "Ventral vagal aktivering gennem somatisk intervention som forudsætning for tilknytningsarbejde. Kurset træner i kropslige teknikker der etablerer autonom sikkerhed som fundament for tilknytningsintervention. Deltagerne lærer at anvende fascial release, åndedrætsarbejde og proprioceptiv stimulering til at skabe den ventral vagale forankring der er nødvendig for sikker bearbejdning af tilknytningsmønstre. Denne kompetence understøtter præcis klinisk intervention baseret på den enkelte klients autonome tilknytningsmønster."
      },
      'polyvagal-psykobiologi': {
        kursist: "Din polyvagale tilstand påvirker direkte tilknytningsbiologien - når du er i grøn sikker tilstand producerer kroppen mere oxytocin og mindre cortisol. På kurset lærer du denne sammenhæng i dybden og forstår hvorfor reguleringsarbejde er så afgørende for tilknytningshealing. Du får viden der forklarer de biologiske mekanismer bag det du mærker i klientarbejdet. Denne integration af polyvagal teori og tilknytningsforståelse giver dig konkrete redskaber til præcist klinisk arbejde.",
        fagfolk: "Ventral vagal aktivering optimerer attachment-relaterede neurotransmittere og hormonsystemer. Kurset integrerer polyvagal teori med psykobiologisk forståelse af tilknytningens biologiske substrat. Deltagerne opnår kompetencer i at forklare sammenhængen mellem autonome tilstande og tilknytningsrelaterede biologiske markører, herunder oxytocin-respons, cortisol-reaktivitet og vagal tone. Denne specialiserede kompetence opnås gennem kursets intensive format der integrerer teori med praktisk træning og klinisk supervision. Deltagerne opnår specialiseret klinisk kompetence der understøtter præcis og effektiv tilknytningsbaseret intervention i praksis."
      },
      'polyvagal-traumer': {
        kursist: "Tilknytningstraumer fastlåste nervesystemet i kronisk usikre tilstande der gentager sig automatisk i nye relationer. På kurset lærer du at forstå denne dynamik gennem den polyvagale ramme og arbejde med at genetablere ventral vagal sikkerhed som fundament. Du træner i at genkende når tilknytningstraumer aktiveres og guide dine klienter forsigtigt tilbage til regulering. Denne integration af polyvagal teori og tilknytningsforståelse giver dig konkrete redskaber til præcist klinisk arbejde.",
        fagfolk: "Developmental trauma dysregulerer polyvagale responses og skaber rigide autonome mønstre. Kurset fokuserer på den polyvagale forståelse af tilknytningstraumers manifestation som kronisk autonome forsvarstilstande. Deltagerne lærer at anvende polyvagal assessment til at identificere traumerelateret autonom dysregulering og designe interventioner der genetablerer ventral vagal fleksibilitet. Denne kompetence understøtter præcis klinisk intervention baseret på den enkelte klients autonome tilknytningsmønster. Denne kompetence understøtter præcis klinisk intervention baseret på den enkelte klients autonome tilknytningsmønster."
      },
      'polyvagal-relation': {
        kursist: "Ventral vagal sikkerhed i den terapeutiske relation er det der lærer nervesystemet nye tilknytningsmønstre. På kurset forstår du at forandring sker når din klients nervesystem gentagne gange oplever sikkerhed i forbindelse med et andet reguleret nervesystem. Du træner i at tilbyde denne ventral vagale tilstedeværelse konsistent som grundlag for tilknytningsforandring. Denne integration af polyvagal teori og tilknytningsforståelse giver dig konkrete redskaber til præcist klinisk arbejde.",
        fagfolk: "Co-regulering gennem ventral vagal tilstedeværelse faciliterer earned secure attachment. Kurset præsenterer den neurobiologiske mekanisme bag relationel tilknytningsforandring: gentagen neuroceptiv registrering af sikkerhed modificerer klientens autonome standardtilstand. Deltagerne trænes i at anvende bevidst ventral vagal tilstedeværelse som primær intervention ved tilknytningsrelateret problematik. Deltagerne opnår disse kompetencer gennem det intensive kursusformat med fokus på integration af teori, cases og superviseret klinisk praksis."
      },
      'tilknytning-kropsterapi': {
        kursist: "Hvert tilknytningsmønster har sit helt specifikke kropslige udtryk der kan identificeres og arbejdes med direkte. På kurset lærer du at aflæse tilknytning i kroppen - i muskeltonus, åndedræt, kropsholdning og bevægelseskvalitet. Du får konkrete somatiske øvelser og behandlingsteknikker tilpasset hvert enkelt tilknytningsmønster, så du kan arbejde præcist og målrettet. Denne dybdegående forståelse af tilknytningsmønstre er kernen i kursets intensive tre dage.",
        fagfolk: "Mønster-specifikke somatiske interventioner baseret på systematisk kortlægning af embodied tilknytningsmønstre. Kurset præsenterer detaljerede somatiske profiler for hvert tilknytningsmønster og tilhørende kropslige interventionsstrategier. Deltagerne opnår kompetencer i at identificere tilknytningsmønstres kropslige manifestationer og anvende målrettede proprioceptive og interoceptive interventioner til reconsolidation. Kursets intensive format sikrer dybdegående kompetenceopbygning i tilknytningsspecialiseret intervention med løbende supervision og feedback. Denne specialiserede kompetence opnås gennem kursets intensive format der integrerer teori med praktisk træning og klinisk supervision."
      },
      'tilknytning-psykobiologi': {
        kursist: "Forskellige tilknytningsmønstre har forskellige biologiske signaturer som du lærer at forstå og arbejde med. På kurset får du indsigt i hvordan tryg tilknytning viser sig som balanceret hormonsystem, mens utryg tilknytning afspejler sig i forhøjet cortisol og nedsat oxytocin-følsomhed. Denne biologiske forståelse giver dybde til dit tilknytningsarbejde med klienter. Denne dybdegående forståelse af tilknytningsmønstre er kernen i kursets intensive tre dage.",
        fagfolk: "Systematisk variation i HPA-akse responsivitet og oxytocin-receptor sensitivitet mellem tilknytningsmønstre. Kurset præsenterer detaljeret forskning i neurobiologiske konsekvenser af forskellige tilknytningsmønstre. Deltagerne opnår kompetencer i at anvende mønster-specifik psykobiologisk viden til at informere tilknytningsinterventioner og forstå biologiske markører for behandlingsrespons. Disse kompetencer udvikles gennem kursets tre intensive dage med integration af evidensbaseret teori og superviseret klinisk træning. Deltagerne opnår disse kompetencer gennem det intensive kursusformat med fokus på integration af teori, cases og superviseret klinisk praksis."
      },
      'tilknytning-traumer': {
        kursist: "Desorganiseret tilknytning opstår fra traumer i tidlige relationer, hvor omsorgspersonen var både kilde til fare og sikkerhed. På kurset lærer du at forstå og arbejde med dette mest komplekse tilknytningsmønster. Du får specialiserede redskaber til at navigere den indre konflikt mellem behov for nærhed og frygt for kontakt der kendetegner desorganiseret tilknytning. Denne dybdegående forståelse af tilknytningsmønstre er kernen i kursets intensive tre dage.",
        fagfolk: "Developmental trauma som oprindelse til desorganiseret attachment med simultant aktiverede attachment- og defense-systemer. Kurset dykker i dybden med desorganiseret tilknytning som klinisk fænomen, herunder frightened/frightening caregiving, fragmenteret selvoplevelse og neurobiologiske konsekvenser. Deltagerne trænes i specialiserede interventioner der adresserer den fundamentale ambivalens ved desorganiseret tilknytning. Specialiseret kompetence i tilknytningsassessment og mønsterspecifik intervention opnås gennem intensivt kursusformat. Specialiseret kompetence i tilknytningsassessment og mønsterspecifik intervention opnås gennem intensivt kursusformat."
      },
      'tilknytning-relation': {
        kursist: "Nye tilknytningsmønstre læres gennem nye relationelle oplevelser der gentages tilstrækkeligt mange gange til at omforme de indre arbejdsmodeller. På kurset forstår du at earned secure attachment er mulig og hvordan den terapeutiske relation kan facilitere denne forandring. Du træner i at tilbyde den konsistente tryghed og afstemning der gradvist ændrer dine klienters tilknytningsmønstre. Denne dybdegående forståelse af tilknytningsmønstre er kernen i kursets intensive tre dage.",
        fagfolk: "Earned secure attachment gennem korrigerende emotionel erfaring som terapeutisk mål og strategi. Kurset præsenterer forskning i hvordan gentagne relationelle erfaringer modificerer indre arbejdsmodeller og autonome tilknytningsmønstre. Deltagerne opnår kompetencer i at facilitere tilknytningsforandring gennem konsistent terapeutisk tilgængelighed, affektiv afstemning og bevidste rupture-repair processer. Deltagerne opnår specialiseret klinisk kompetence der understøtter præcis og effektiv tilknytningsbaseret intervention i praksis. Kursets intensive format sikrer dybdegående kompetenceopbygning i tilknytningsspecialiseret intervention med løbende supervision og feedback."
      },
      'kropsterapi-psykobiologi': {
        kursist: "Kropsarbejde påvirker tilknytningsbiologien direkte og mærkbart - når du arbejder somatisk med tilknytningsmønstre ændres hormonniveauer, neurotransmitter-balance og stressrespons. På kurset lærer du at forstå disse biologiske mekanismer og bruge dem bevidst i dit arbejde. Du får viden der forklarer hvorfor kropslig tilknytningsintervention har så dybtgående og varige effekter. De kropslige teknikker du lærer på kurset giver dig direkte adgang til tilknytningsmønstre der ellers er svære at nå.",
        fagfolk: "Somatisk intervention modificerer attachment-relateret neurobiologi gennem direkte påvirkning af vagal afferent signalering og neuroendokrine kaskader. Kurset integrerer forståelse af kropslig interventions biologiske virkningsmekanismer med praktisk tilknytningsarbejde. Deltagerne opnår kompetencer i at forbinde somatisk observation med psykobiologiske processer og forankre kropsligt tilknytningsarbejde i evidensbaseret forståelse. Kompetencer i somatisk tilknytningsintervention opnås gennem praktisk træning med supervision og feedback. Kompetencer i somatisk tilknytningsintervention opnås gennem praktisk træning med supervision og feedback."
      },
      'kropsterapi-traumer': {
        kursist: "Tilknytningstraumer er dybt embodied og kræver somatisk arbejde for at kunne integreres fuldt ud. På kurset lærer du at tilgå tilknytningstraumer gennem kroppen med respekt for nervesystemets tempo. Du får specifikke teknikker til at arbejde med de kropslige spor af tidlig tilknytningstraume og hjælpe kroppen med at fuldende de forsvarsbevægelser der blev afbrudt. De kropslige teknikker du lærer på kurset giver dig direkte adgang til tilknytningsmønstre der ellers er svære at nå.",
        fagfolk: "Developmental trauma manifesteres somatisk som incomplete defensive sekvenser og karakteristiske fasciale restrictions. Kurset træner i kropslige interventioner specifikt designet til tilknytningstraume, herunder titreret proprioceptiv aktivering og facilitation af frosne forsvarshandlinger. Deltagerne opnår kompetencer i at identificere og intervenere med embodied tilknytningstraumer inden for klientens tolerancevindue. Kompetencer i somatisk tilknytningsintervention opnås gennem praktisk træning med supervision og feedback. Kompetencer i somatisk tilknytningsintervention opnås gennem praktisk træning med supervision og feedback."
      },
      'kropsterapi-relation': {
        kursist: "Tryg berøring i en sikker terapeutisk relation lærer kroppen nye tilknytningsmønstre på det mest fundamentale niveau. På kurset forstår du at kvalificeret kropslig kontakt kommunikerer sikkerhed direkte til nervesystemet og kan omforme dybtliggende tilknytningsmønstre. Du træner i at bruge berøring bevidst som en relationel intervention der skaber nye kropslige tilknytningserfaringer. De kropslige teknikker du lærer på kurset giver dig direkte adgang til tilknytningsmønstre der ellers er svære at nå.",
        fagfolk: "Terapeutisk touch modificerer embodied attachment-mønstre gennem simultant somatisk og relationel intervention. Kurset præsenterer affektiv C-fibre stimulation kombineret med ventral vagal tilstedeværelse som mekanisme for kropslig tilknytningsforandring. Deltagerne trænes i at anvende kvalificeret berøring som kontekst for reconsolidation af implicitte tilknytningsskemaer på det subsymboliske niveau. Kompetencer i somatisk tilknytningsintervention opnås gennem praktisk træning med supervision og feedback. Kompetencer i somatisk tilknytningsintervention opnås gennem praktisk træning med supervision og feedback."
      },
      'psykobiologi-traumer': {
        kursist: "Tilknytningstraumer ændrede din biologi på konkrete måder - men healing og regulering kan normalisere den igen. På kurset lærer du hvordan developmental trauma påvirker hormonsystemer, immunfunktion og hjernens udvikling. Du får viden der hjælper dig med at forklare dine klienter de biologiske konsekvenser af tidlig tilknytningstraume og veje til biologisk normalisering. Denne biologiske forståelse giver dig et videnskabeligt fundament for dit tilknytningsarbejde med klienter.",
        fagfolk: "Developmental trauma modificerer HPA-akse reaktivitet, neurotransmitter-systemer og inflammatoriske profiler med vidtrækkende konsekvenser. Kurset præsenterer forskningsbaseret viden om neurobiologiske konsekvenser af tidlig tilknytningstraume. Deltagerne opnår kompetencer i at anvende psykobiologisk forståelse til at informere traumeintervention og monitorere biologiske markører for behandlingsrespons. Denne specialiserede kompetence opnås gennem kursets intensive format der integrerer teori med praktisk træning og klinisk supervision. Disse kompetencer udvikles gennem kursets tre intensive dage med integration af evidensbaseret teori og superviseret klinisk træning."
      },
      'psykobiologi-relation': {
        kursist: "Trygge relationer er tilknytnings-medicin på biologisk niveau - de ændrer konkret din hormonbalance, immunfunktion og stressrespons. På kurset lærer du at forstå den terapeutiske relations biologiske kraft og bruge denne viden aktivt. Du får indsigt i hvordan earned secure attachment modificerer neurobiologien og skaber varige forandringer i hele organismen. Denne biologiske forståelse giver dig et videnskabeligt fundament for dit tilknytningsarbejde med klienter.",
        fagfolk: "Secure therapeutic alliance modificerer attachment-relateret neurobiologi målbart gennem øget oxytocin, reduceret cortisol og forbedret vagal tone. Kurset integrerer forskning i relationel neurobiologi med praktisk tilknytningsarbejde. Deltagerne opnår kompetencer i at forstå og kommunikere biologiske mekanismer bag earned secure attachment som evidensbaseret fundament for klinisk praksis. Deltagerne opnår disse kompetencer gennem det intensive kursusformat med fokus på integration af teori, cases og superviseret klinisk praksis."
      },
      'traumer-relation': {
        kursist: "Tilknytningstraumer kan kun heales i en meget tryg og sikker terapeutisk relation, fordi det netop var i relationer traumerne opstod. På kurset lærer du at opbygge den dybe alliance der er nødvendig for dette sårbare arbejde. Du træner i at skabe et relationelt rum hvor dine klienter gradvist kan erfare at nærhed og forbindelse kan være trygt og helende. Du opbygger kompetencer til at møde dette komplekse felt med den nødvendige forsigtighed og faglige sikkerhed.",
        fagfolk: "Developmental trauma kræver robust terapeutisk alliance som ufravigelig forudsætning for sikker bearbejdning. Kurset fokuserer på systematisk alliance-opbygning specifikt tilpasset tilknytningstraumatiserede klienter. Deltagerne trænes i at navigere det terapeutiske paradoks at relationen både aktiverer og healer tilknytningstraume, med fokus på konsistent tilgængelighed og tolerancen for rupture-repair processer. Klinisk kompetence i arbejdet med tilknytningstraume evalueres gennem superviseret praksis og case-analyse. Klinisk kompetence i arbejdet med tilknytningstraume evalueres gennem superviseret praksis og case-analyse."
      }
    }
  }
};
const educationNames = {
    nervesystemsterapeut: 'Nervesystem-<br>sterapeut',
    teachertraining: 'Teacher<br>Training',
    tilknytningsspeciale: 'Tilknytnings-<br>speciale'
};
const themeNames = {
    general: 'Generelt',
    angst: 'Angst',
    tilknytning: 'Tilknytning',
    stress: 'Stress',
    traumer: 'Traumer',
    sovn: 'Søvn'
};
let currentMode = 'klient';
let currentTheme = 'general';
let currentEducation = null;
let currentView = 'welcome';
let currentCircle = null;

function getBookmarks() {
    try { return JSON.parse(localStorage.getItem('bookmarks') || '[]'); } catch(e) { return []; }
}

function getBookmarkId() {
    if (currentView === 'exercises') return 'exercises';
    if (currentView === 'dynamics') return 'dynamics';
    return currentCircle + '-' + currentTheme + '-' + currentMode + '-' + (currentEducation || 'none');
}

function isBookmarked(id) {
    return getBookmarks().some(function(b) { return b.id === id; });
}

function toggleBookmark() {
    var id = getBookmarkId();
    var bookmarks = getBookmarks();
    var existing = bookmarks.findIndex(function(b) { return b.id === id; });

    if (existing !== -1) {
        bookmarks.splice(existing, 1);
        try { localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); } catch(e) {}
        return false;
    }

    var label = '';
    if (currentView === 'exercises') {
        label = 'Prøv øvelserne';
    } else if (currentView === 'dynamics') {
        label = 'Dynamikken bag cirkelmodellen';
    } else if (currentCircle) {
        label = circleNames[currentCircle] || currentCircle;
        var themeName = themeNames[currentTheme] || currentTheme;
        if (currentEducation) {
            var eduNames = { nervesystemsterapeut: 'Nervesystemsterapeut', teachertraining: 'Teacher Training', tilknytningsspeciale: 'Tilknytningsspeciale' };
            label += ' — ' + (eduNames[currentEducation] || currentEducation);
        } else if (currentTheme !== 'general') {
            label += ' — ' + themeName;
        }
        label += ' (' + (currentMode === 'fagfolk' ? 'fagfolk' : 'klient') + ')';
    }

    bookmarks.push({
        id: id,
        circleId: currentCircle,
        theme: currentTheme,
        mode: currentMode,
        education: currentEducation,
        view: currentView,
        label: label,
        timestamp: Date.now()
    });
    try { localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); } catch(e) {}
    return true;
}

function navigateToBookmark(bookmark) {
    currentTheme = bookmark.theme || 'general';
    currentMode = bookmark.mode || 'klient';
    currentEducation = bookmark.education || null;

    // Update UI to reflect mode
    document.querySelectorAll('.top-circle[data-mode]').forEach(function(c) { c.classList.remove('active'); });
    var modeCircle = document.querySelector('.top-circle[data-mode="' + currentMode + '"]');
    if (modeCircle) modeCircle.classList.add('active');

    updateCenterCircle();

    if (bookmark.view === 'exercises') {
        showExercises();
    } else if (bookmark.view === 'dynamics') {
        showDynamics();
    } else if (bookmark.circleId) {
        showCircleView(bookmark.circleId);
    }
}

function showBookmarks() {
    var bookmarks = getBookmarks();
    var html = '<h2>Gemte sider</h2>';

    if (bookmarks.length === 0) {
        html += '<p class="bookmarks-empty">Du har ikke gemt nogen sider endnu.<br><br>Når du læser om en cirkel, en øvelse eller dynamikken bag modellen, kan du trykke på bogmærke-ikonet for at gemme siden her.</p>';
    } else {
        html += '<p class="menu-intro">Dine gemte sider — tryk for at gå direkte til indholdet.</p>';
        bookmarks.sort(function(a, b) { return b.timestamp - a.timestamp; });
        for (var i = 0; i < bookmarks.length; i++) {
            html += '<div class="bookmark-item" data-bookmark-index="' + i + '">' +
                '<span class="bookmark-label">' + bookmarks[i].label + '</span>' +
                '<button class="bookmark-remove" data-bookmark-id="' + bookmarks[i].id + '" aria-label="Fjern">&times;</button>' +
                '</div>';
        }
    }

    html += '<div style="margin-top: 30px; text-align: center;"><button onclick="resetToWelcome()" class="back-btn">↑ Tilbage til toppen</button></div>';

    document.getElementById('info-content').innerHTML = html;

    // Close menu overlay
    document.getElementById('menu-overlay').classList.remove('active');
    document.body.classList.remove('menu-open');

    // Wire up click handlers
    document.querySelectorAll('.bookmark-item').forEach(function(item) {
        item.addEventListener('click', function(e) {
            if (e.target.classList.contains('bookmark-remove')) return;
            var idx = parseInt(item.getAttribute('data-bookmark-index'));
            var bm = bookmarks[idx];
            if (bm) navigateToBookmark(bm);
        });
    });

    document.querySelectorAll('.bookmark-remove').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            var id = btn.getAttribute('data-bookmark-id');
            var stored = getBookmarks();
            stored = stored.filter(function(b) { return b.id !== id; });
            try { localStorage.setItem('bookmarks', JSON.stringify(stored)); } catch(ex) {}
            showBookmarks();
        });
    });

    var infoPanel = document.getElementById('info-panel');
    requestAnimationFrame(function() {
        infoPanel.scrollTop = 0;
        requestAnimationFrame(function() {
            var rect = infoPanel.getBoundingClientRect();
            window.scrollTo({ top: window.pageYOffset + rect.top - 80, behavior: 'smooth' });
        });
    });
}

function buildActionBar() {
    var bookmarkClass = isBookmarked(getBookmarkId()) ? ' bookmarked' : '';
    return '<div class="content-actions">' +
        '<button class="action-btn" id="action-copy" aria-label="Kopiér" title="Kopiér tekst">' +
            '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>' +
        '</button>' +
        '<button class="action-btn" id="action-share" aria-label="Del" title="Del">' +
            '<svg viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>' +
        '</button>' +
        '<button class="action-btn' + bookmarkClass + '" id="action-bookmark" aria-label="Gem" title="Gem side">' +
            '<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>' +
        '</button>' +
    '</div>' +
    '<div style="margin-top: 15px; text-align: center;">' +
        (currentEducation && currentView === 'circle' ?
            '<button onclick="showUddannelser()" class="back-btn">← Tilbage til uddannelser</button>' :
        currentView === 'circle' && currentTheme !== 'general' ?
            '<button onclick="showTemaer()" class="back-btn">← Tilbage til temaer</button>' :
            '<button onclick="resetToWelcome()" class="back-btn">↑ Tilbage til toppen</button>') +
    '</div>';
}

function setupActionButtons() {
    var copyBtn = document.getElementById('action-copy');
    var shareBtn = document.getElementById('action-share');
    var bookmarkBtn = document.getElementById('action-bookmark');

    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            var text = document.getElementById('info-content').innerText;
            try {
                navigator.clipboard.writeText(text).then(function() {
                    copyBtn.classList.add('copied');
                    copyBtn.innerHTML = '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
                    setTimeout(function() {
                        copyBtn.classList.remove('copied');
                        copyBtn.innerHTML = '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
                    }, 1500);
                });
            } catch(e) {
                var ta = document.createElement('textarea');
                ta.value = text;
                ta.style.position = 'fixed';
                ta.style.left = '-9999px';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
                copyBtn.classList.add('copied');
                setTimeout(function() { copyBtn.classList.remove('copied'); }, 1500);
            }
        });
    }

    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            var text = document.getElementById('info-content').innerText;
            var title = document.querySelector('#info-content h2');
            title = title ? title.textContent : 'Nervesystemsterapi';

            if (navigator.share) {
                try {
                    navigator.share({ title: title, text: text });
                } catch(e) {}
            } else {
                try {
                    navigator.clipboard.writeText(text);
                    shareBtn.classList.add('copied');
                    setTimeout(function() { shareBtn.classList.remove('copied'); }, 1500);
                } catch(e) {}
            }
        });
    }

    if (bookmarkBtn) {
        bookmarkBtn.addEventListener('click', function() {
            var saved = toggleBookmark();
            if (saved) {
                bookmarkBtn.classList.add('bookmarked');
            } else {
                bookmarkBtn.classList.remove('bookmarked');
            }
        });
    }
}

window.addEventListener('load', () => {
    resetToWelcome();
    // Trigger bloom animation (respects user preference)
    try {
        var bloomPref = localStorage.getItem('pref-bloom');
        if (bloomPref === null || bloomPref === '1') {
            requestAnimationFrame(function() {
                document.getElementById('nervesystem-model').classList.add('bloom-ready');
            });
        } else {
            document.getElementById('nervesystem-model').classList.add('bloom-skip');
        }
    } catch(e) {
        requestAnimationFrame(function() {
            document.getElementById('nervesystem-model').classList.add('bloom-ready');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    setupTopCircles();
    setupThemeSelector();
    setupEducationSelector();
    setupExercisesButton();
    setupCircleClicks();
    setupConnectionClicks();
    setupMenu();
    setupNewsletter();
    setupNotifications();
    setupSearch();
    setupOnboarding();
    resetToWelcome();
    updateCenterCircle();

    // New premium UI features
    setupBottomNav();
    setupRollePills();
    setupDropdownPanels();
    setupHeroScrollObserver();

    // Accordion toggle — event delegation on info-content
    document.getElementById('info-content').addEventListener('click', function(e) {
        const header = e.target.closest('.accordion-header');
        if (!header) return;
        const item = header.parentElement;
        item.classList.toggle('open');
    });
});

function updateCenterCircle() {
    const centerTexts = document.querySelectorAll('.center-text');
    const displayName = currentEducation ? educations[currentEducation].name : themes[currentTheme].name;
    
    // Specielle splittings for lange navne
    if (displayName === "Nervesystemsterapeut") {
        centerTexts[0].textContent = "Nervesystem-";
        centerTexts[1].textContent = "sterapeut";
    } else if (displayName === "Tilknytningsspeciale") {
        centerTexts[0].textContent = "Tilknytnings-";
        centerTexts[1].textContent = "speciale";
    } else if (displayName === "Teacher Training") {
        centerTexts[0].textContent = "Teacher";
        centerTexts[1].textContent = "Training";
    } else if (displayName === "Nervesystemsregulering") {
        centerTexts[0].textContent = "Nervesystem-";
        centerTexts[1].textContent = "regulering";
    } else {
        const words = displayName.split(' ');
        if (words.length === 1) {
            centerTexts[0].textContent = displayName;
            centerTexts[1].textContent = '';
        } else {
            const mid = Math.ceil(words.length / 2);
            centerTexts[0].textContent = words.slice(0, mid).join(' ');
            centerTexts[1].textContent = words.slice(mid).join(' ');
        }
    }
}

function resetToWelcome() {
    currentView = 'welcome';
    currentCircle = null;
    currentMode = 'klient';
    try { if (localStorage.getItem('pref-fagfolk') === '1') currentMode = 'fagfolk'; } catch(e) {}
    currentTheme = 'general';
    currentEducation = null;
    
    document.querySelectorAll('.top-circle[data-mode]').forEach(circle => {
        circle.classList.remove('active');
        if (circle.dataset.mode === currentMode) {
            circle.classList.add('active');
        }
    });
    
    document.getElementById('theme-label').innerHTML = 'Vælg<br>tema';
    document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
    document.querySelector('.theme-option[data-theme="general"]').classList.add('active');
    document.getElementById('exercises-btn').classList.remove('active');
    document.getElementById('education-label').innerHTML = 'Uddan-<br>nelser';
    document.querySelectorAll('.education-option').forEach(opt => opt.classList.remove('active'));
    document.querySelectorAll('.exercise-option').forEach(opt => opt.classList.remove('active'));
    
    clearAllActive();
    updateCenterCircle();
    showWelcome();
}

function setupTopCircles() {
    document.querySelectorAll('.top-circle[data-mode]').forEach(circle => {
        circle.addEventListener('click', () => {
            document.querySelectorAll('.top-circle[data-mode]').forEach(c => c.classList.remove('active'));
            document.getElementById('exercises-btn').classList.remove('active');
            circle.classList.add('active');
            
            currentMode = circle.dataset.mode;
            currentTheme = 'general';
            currentEducation = null;
            
            document.getElementById('theme-label').innerHTML = 'Vælg<br>tema';
            document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
            document.querySelector('.theme-option[data-theme="general"]').classList.add('active');
            
            document.getElementById('education-label').innerHTML = 'Uddan-<br>nelser';
            document.querySelectorAll('.education-option').forEach(opt => opt.classList.remove('active'));
            document.querySelectorAll('.exercise-option').forEach(opt => opt.classList.remove('active'));
            
            updateCenterCircle();
            
            const infoPanelContent = document.getElementById('info-content');
            infoPanelContent.style.opacity = '0.3';
            setTimeout(() => {
                if (currentView === 'circle' && currentCircle) {
                    showCircleView(currentCircle);
                } else {
                    showWelcome();
                }
                infoPanelContent.style.opacity = '1';
            }, 150);
        });
    });
}

function setupThemeSelector() {
    const selector = document.getElementById('theme-selector');
    const dropdown = document.getElementById('theme-dropdown');
    
    selector.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
        const eduDrop = document.getElementById('education-dropdown');
        if (eduDrop) eduDrop.classList.remove('show');
    });
    
    document.addEventListener('click', () => {
        dropdown.classList.remove('show');
    });
    
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            
            currentTheme = option.dataset.theme;
            currentEducation = null;
            if (currentMode === 'kursist') {
                currentMode = 'klient';
                document.querySelectorAll('.top-circle[data-mode]').forEach(c => c.classList.remove('active'));
                const klientBtn = document.querySelector('.top-circle[data-mode="klient"]');
                if (klientBtn) klientBtn.classList.add('active');
            }

            document.getElementById('education-label').innerHTML = 'Uddan-<br>nelser';
            document.querySelectorAll('.education-option').forEach(opt => opt.classList.remove('active'));
            document.getElementById('exercises-btn').classList.remove('active');
            document.querySelectorAll('.exercise-option').forEach(opt => opt.classList.remove('active'));
            
            document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            document.getElementById('theme-label').textContent = themeNames[currentTheme];
            dropdown.classList.remove('show');
            
            updateCenterCircle();
            
            showCircleView('nervesystem');
        });
    });
}

function setupEducationSelector() {
    const selector = document.getElementById('education-selector');
    const dropdown = document.getElementById('education-dropdown');
    
    if (!selector || !dropdown) return;
    
    selector.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
        document.getElementById('theme-dropdown').classList.remove('show');
    });
    
    document.addEventListener('click', () => {
        dropdown.classList.remove('show');
    });
    
    document.querySelectorAll('.education-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            
            currentEducation = option.dataset.education;
currentMode = 'kursist';
currentTheme = 'general';
            
            document.getElementById('theme-label').innerHTML = 'Vælg<br>tema';
            document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
            document.getElementById('exercises-btn').classList.remove('active');
            document.querySelectorAll('.exercise-option').forEach(opt => opt.classList.remove('active'));
            
            
            document.querySelectorAll('.education-option').forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            const label = educationNames[currentEducation];
            document.getElementById('education-label').innerHTML = label.replace(' ', '<br>');
            dropdown.classList.remove('show');
            
          updateCenterCircle();
showCircleView('nervesystem');
        });
    });
}

function setupExercisesButton() {
    const selector = document.getElementById('exercises-btn');
    const dropdown = document.getElementById('exercises-dropdown');

    selector.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
        const themeDrop = document.getElementById('theme-dropdown');
        const eduDrop = document.getElementById('education-dropdown');
        if (themeDrop) themeDrop.classList.remove('show');
        if (eduDrop) eduDrop.classList.remove('show');
    });

    document.addEventListener('click', () => {
        dropdown.classList.remove('show');
    });

    document.querySelectorAll('.exercise-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();

            const exerciseIndex = parseInt(option.dataset.exercise);

            document.querySelectorAll('.top-circle').forEach(c => c.classList.remove('active'));
            selector.classList.add('active');

            currentEducation = null;
            currentTheme = 'general';
            if (currentMode === 'kursist') {
                currentMode = 'klient';
            }
            document.getElementById('education-label').innerHTML = 'Uddan-<br>nelser';
            document.getElementById('theme-label').innerHTML = 'Vælg<br>tema';

            document.querySelectorAll('.exercise-option').forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            dropdown.classList.remove('show');

            showExercises(exerciseIndex);

            // Scroll to specific exercise after showing all exercises
            setTimeout(() => {
                const exerciseCard = document.querySelectorAll('.exercise-card')[exerciseIndex];
                if (exerciseCard) {
                    const rect = exerciseCard.getBoundingClientRect();
                    const offset = 80;
                    window.scrollTo({
                        top: window.pageYOffset + rect.top - offset,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        });
    });
}


// ── Refleksioner for nervesystemsterapi ──
var refleksioner = [
    {
        id: "lytte",
        titel: "At lytte indad",
        ikon: "◎",
        farve: "primary",
        spoergsmaal: "Hvornår lyttede du sidst til din krop før den råbte? Hvad fortalte den dig — og lyttede du?",
        uddybning: "Kroppen kommunikerer konstant. Spændinger, træthed, uro — det er ikke støj. Det er nervesystemets forsvar på at føre en samtale med dig. Når du lærer at lytte før symptomerne eskalerer, begynder healing at ske naturligt."
    },
    {
        id: "tryghed",
        titel: "Tryghed",
        ikon: "◈",
        farve: "sage",
        spoergsmaal: "Hvornår føler du dig mest tryg — og hvad er det ved den situation der skaber trygheden? Er det et sted, en person, en fornemmelse?",
        uddybning: "Tryghed er ikke fravær af fare. Det er nervesystemets aktive signal om at du er beskyttet nok til at være åben. At kende dine tryghedskilder er at kende vejen hjem til dig selv."
    },
    {
        id: "moenstre",
        titel: "Mønstre",
        ikon: "◇",
        farve: "amber",
        spoergsmaal: "Hvilket mønster gentager sig i dit liv — i relationer, i stress, i den måde du møder verden? Hvad tror du mønsteret oprindeligt beskyttede dig mod?",
        uddybning: "Mønstre er nervesystemets autopilot. De opstod for at beskytte dig i en tid hvor du havde brug for dem. At se dem med nåde i stedet for dom er første skridt. De løsner ikke når du kæmper mod dem — de løsner når de bliver set."
    },
    {
        id: "graenser",
        titel: "Grænser",
        ikon: "◆",
        farve: "rose",
        spoergsmaal: "Hvor i dit liv siger du ja når din krop siger nej? Hvad ville der ske hvis du lyttede til kroppen?",
        uddybning: "Grænser er neurobiologisk nødvendige. Hver gang du overskrider dine egne grænser, sender du et signal til nervesystemet om at dine behov ikke tæller. Over tid fører det til udmattelse og afkobling fra dig selv."
    },
    {
        id: "forandring",
        titel: "Forandring",
        ikon: "◉",
        farve: "primary",
        spoergsmaal: "Hvis dit liv kunne føles anderledes om seks måneder — ikke omstændighederne, men fornemmelsen i kroppen — hvordan ville det føles?",
        uddybning: "Forandring starter ikke med en plan men med en fornemmelse. Når du kan mærke den tilstand du ønsker dig hen imod, giver du dit nervesystem et mål at orientere sig efter. Det er ikke drømmeri — det er regulering gennem retning."
    }
];

// ── HTML-sanitering af brugerinput ──
function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Proces-tracking (localStorage) ──
function getProces() {
    try { return JSON.parse(localStorage.getItem('nst_proces') || '{"oevelser":[],"refleksioner":[],"journal":[]}'); }
    catch(e) { return { oevelser: [], refleksioner: [], journal: [] }; }
}
function saveProces(p) { try { localStorage.setItem('nst_proces', JSON.stringify(p)); } catch(e) {} }

function markerOevelseGennemfoert(titel) {
    var p = getProces();
    p.oevelser.push({ titel: titel, dato: new Date().toISOString().slice(0,10), tid: new Date().toLocaleTimeString('da-DK', {hour:'2-digit',minute:'2-digit'}) });
    saveProces(p);
}

function gemRefleksionSvar(id, titel, svar) {
    var p = getProces();
    p.refleksioner.push({ id: id, titel: titel, svar: svar, dato: new Date().toISOString().slice(0,10) });
    saveProces(p);
}

function gemJournalNotat(tekst) {
    var p = getProces();
    p.journal.push({ tekst: tekst, dato: new Date().toISOString().slice(0,10), tid: new Date().toLocaleTimeString('da-DK', {hour:'2-digit',minute:'2-digit'}) });
    saveProces(p);
}

// ── Selvvurdering (localStorage) ──
function getVurderinger() {
    try { return JSON.parse(localStorage.getItem('nst_vurdering') || '[]'); }
    catch(e) { return []; }
}
function saveVurdering(entry) {
    var arr = getVurderinger();
    arr.push(entry);
    try { localStorage.setItem('nst_vurdering', JSON.stringify(arr)); } catch(e) {}
}

// ===== TEMA & UDDANNELSE VIEWS =====

var themeDescriptions = {
    general: 'Helhedsorienteret overblik over nervesystemsterapi',
    angst: 'Forstå angstens aftryk i nervesystemet',
    tilknytning: 'Udforskning af tilknytningsmønstre og relationer',
    stress: 'Stressens indvirkning på krop og sind',
    traumer: 'Traumebearbejdning og nervesystemet',
    sovn: 'Søvnens forbindelse til nervesystemets tilstand'
};

var themeIcons = {
    general: '◎',
    angst: '☁',
    tilknytning: '❋',
    stress: '⚡',
    traumer: '◈',
    sovn: '☾'
};

var educationDescriptions = {
    nervesystemsterapeut: 'Bliv certificeret nervesystemsterapeut. 5 moduler, 70 timer. For behandlere, terapeuter, yogalærere og pædagoger der vil arbejde professionelt med nervesystemet.',
    teachertraining: 'En lederuddannelse med nervesystemet i centrum. 9 måneder, 100 timer, 6 moduler. For ledere, HR-professionelle, facilitatorer og organisationsudviklere der vil lede med ro, klarhed og autenticitet.',
    tilknytningsspeciale: '3-dages intensivkursus i de fire tilknytningsmønstre og deres indvirkning på nervesystemet, relationer og den terapeutiske proces. Inkl. 50 siders kompendium.'
};

var educationIcons = {
    nervesystemsterapeut: '🎓',
    teachertraining: '🧭',
    tilknytningsspeciale: '🔗'
};

var educationBadges = {
    nervesystemsterapeut: '70 timer · 24.500 kr',
    teachertraining: '100 timer · 34.500 kr',
    tilknytningsspeciale: '3 dage · 6.000 kr'
};

function showTemaer() {
    currentView = 'temaer';
    clearAllActive();
    updateBottomNavActive('temaer');

    var html = '<h2>Udforsk temaer</h2>';
    html += '<p class="tema-page-subtitle">Hvert tema belyser nervesystemet fra en bestemt vinkel. Vælg et tema for at se hvordan det påvirker alle seks dimensioner i cirkelmodellen.</p>';

    html += '<p class="selection-current">Aktivt tema: <strong>' + (themeNames[currentTheme] || 'Generelt') + '</strong></p>';

    html += '<div class="tema-card-grid">';
    var themeKeys = Object.keys(themeNames);
    themeKeys.forEach(function(key) {
        var isActive = (currentTheme === key && !currentEducation) ? ' tema-card-active' : '';
        html += '<div class="tema-card' + isActive + '" data-theme="' + key + '">';
        html += '<span class="tema-card-icon">' + (themeIcons[key] || '◎') + '</span>';
        html += '<div class="tema-card-name">' + themeNames[key] + '</div>';
        html += '<div class="tema-card-desc">' + (themeDescriptions[key] || '') + '</div>';
        html += '</div>';
    });
    html += '</div>';

    html += buildActionBar();

    document.getElementById('info-content').innerHTML = html;
    setupActionButtons();

    // Bind card clicks
    document.querySelectorAll('.tema-card').forEach(function(card) {
        card.addEventListener('click', function() {
            var theme = this.dataset.theme;
            currentTheme = theme;
            currentEducation = null;
            if (currentMode === 'kursist') {
                currentMode = 'klient';
                try { if (localStorage.getItem('pref-fagfolk') === '1') currentMode = 'fagfolk'; } catch(e) {}
                updateRollePills();
            }
            // Update old UI for compatibility
            document.querySelectorAll('.theme-option').forEach(function(opt) { opt.classList.remove('active'); });
            var oldOpt = document.querySelector('.theme-option[data-theme="' + theme + '"]');
            if (oldOpt) oldOpt.classList.add('active');
            document.querySelectorAll('.education-option').forEach(function(opt) { opt.classList.remove('active'); });

            updateCenterCircle();
            showCircleView('nervesystem');
        });
    });

    var infoPanel = document.getElementById('info-panel');
    infoPanel.scrollTop = 0;
    setTimeout(function() {
        var heading = infoPanel.querySelector('h2');
        if (heading) {
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}

function showUddannelser() {
    currentView = 'uddannelser';
    clearAllActive();
    updateBottomNavActive('uddannelser');

    var html = '<h2>Uddannelser</h2>';
    html += '<p class="tema-page-subtitle">Tre specialiserede uddannelsesveje der bygger på cirkelmodellen. Alle uddannelser afholdes i København og inkluderer personlig vejledning fra Annemarie. Vælg et spor for at udforske indholdet.</p>';

    if (currentEducation) {
        var cleanName = (educationNames[currentEducation] || '').replace(/-<br>/g, '').replace(/<br>/g, ' ');
        html += '<p class="selection-current">Aktivt spor: <strong>' + cleanName + '</strong></p>';
    }

    html += '<div class="edu-card-grid">';
    var eduKeys = Object.keys(educationDescriptions);
    eduKeys.forEach(function(key) {
        var isActive = (currentEducation === key) ? ' edu-card-active' : '';
        var cleanName = (educationNames[key] || key).replace(/-<br>/g, '').replace(/<br>/g, ' ');
        html += '<div class="edu-card' + isActive + '" data-education="' + key + '">';
        html += '<span class="edu-card-icon">' + (educationIcons[key] || '🎓') + '</span>';
        html += '<div class="edu-card-name">' + cleanName + '</div>';
        html += '<div class="edu-card-desc">' + (educationDescriptions[key] || '') + '</div>';
        html += '<span class="edu-card-badge">' + (educationBadges[key] || '') + '</span>';
        html += '</div>';
    });
    html += '</div>';

    html += '<div style="margin-top: 28px; padding: 20px; background: linear-gradient(135deg, #f7faf8, #eef4f0); border-radius: 14px; text-align: center;">';
    html += '<p style="font-family: Georgia, serif; font-size: 0.92rem; color: var(--text-light); margin-bottom: 12px;">Har du spørgsmål om uddannelserne, eller vil du tilmelde dig?</p>';
    html += '<a href="https://annemarieclement.dk" target="_blank" rel="noopener" style="display: inline-block; padding: 10px 24px; background: var(--primary); color: white; border-radius: 24px; text-decoration: none; font-family: Georgia, serif; font-size: 0.9rem;">Læs mere på annemarieclement.dk</a>';
    html += '</div>';

    html += buildActionBar();

    document.getElementById('info-content').innerHTML = html;
    setupActionButtons();

    // Bind card clicks
    document.querySelectorAll('.edu-card').forEach(function(card) {
        card.addEventListener('click', function() {
            var edu = this.dataset.education;
            currentEducation = edu;
            currentMode = 'kursist';
            currentTheme = 'general';
            // Update old UI for compatibility
            document.querySelectorAll('.education-option').forEach(function(opt) { opt.classList.remove('active'); });
            var oldOpt = document.querySelector('.education-option[data-education="' + edu + '"]');
            if (oldOpt) oldOpt.classList.add('active');
            document.querySelectorAll('.theme-option').forEach(function(opt) { opt.classList.remove('active'); });
            document.querySelector('.theme-option[data-theme="general"]').classList.add('active');

            updateRollePills();
            updateCenterCircle();
            showCircleView('nervesystem');
        });
    });

    var infoPanel = document.getElementById('info-panel');
    infoPanel.scrollTop = 0;
    setTimeout(function() {
        var heading = infoPanel.querySelector('h2');
        if (heading) {
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}

function showExercises() {
    currentView = 'exercises';
    clearAllActive();
    updateBottomNavActive('oevelser');

    var html = '<h2>Øvelser & refleksioner</h2>';
    html += '<p>Konkrete redskaber og stille rum til eftertanke. Her finder du både øvelser der regulerer dit nervesystem, refleksionsspørgsmål der hjælper dig med at se dybere — og en oversigt over din proces.</p>';

    // ── Del 1: Øvelser ──
    html += '<div class="oevelser-section-label"><span class="oevelser-section-icon">◎</span><span>Øvelser</span></div>';

    html += '<div class="oevelser-filter">';
    html += '<button class="oevelser-filter-btn active" data-filter="alle">Alle</button>';
    html += '<button class="oevelser-filter-btn" data-filter="regulering">Regulering</button>';
    html += '<button class="oevelser-filter-btn" data-filter="aandedraet">Åndedræt</button>';
    html += '<button class="oevelser-filter-btn" data-filter="krop">Krop</button>';
    html += '</div>';

    html += '<div class="oevelser-grid">';
    exercises.forEach(function(exercise, index) {
        html += '<div class="exercise-card" data-index="' + index + '" data-kategori="' + exercise.kategori + '">';
        html += '<div class="exercise-card-inner">';
        html += '<div class="exercise-card-top">';
        html += '<h3>' + exercise.title + '</h3>';
        html += '<span class="exercise-tid-badge">' + exercise.tid + '</span>';
        html += '</div>';
        html += '<p class="exercise-intro">' + exercise.intro + '</p>';
        html += '<ol class="exercise-steps" data-total="' + exercise.steps.length + '">';
        exercise.steps.forEach(function(step, i) {
            html += '<li data-step="' + (i + 1) + '">' + step + '</li>';
        });
        html += '</ol>';
        if (exercise.refleksion) {
            html += '<div class="exercise-refleksion">';
            html += '<div class="exercise-refleksion-header">Refleksion efter øvelsen</div>';
            html += '<p class="exercise-refleksion-tekst">' + exercise.refleksion + '</p>';
            html += '</div>';
        }
        html += '<div class="exercise-guide-controls">';
        html += '<button class="exercise-guide-btn exercise-guide-start">Start øvelse</button>';
        html += '<div class="exercise-guide-progress"><div class="exercise-guide-progress-bar"></div></div>';
        html += '<button class="exercise-guide-btn exercise-guide-next" style="display:none;">Næste trin</button>';
        html += '</div>';
        html += '<button class="exercise-toggle">Se øvelse</button>';
        html += '</div></div>';
    });
    html += '</div>';

    // ── Del 2: Refleksioner ──
    html += '<div class="oevelser-divider"></div>';
    html += '<div class="oevelser-section-label"><span class="oevelser-section-icon">◈</span><span>Refleksioner</span></div>';
    html += '<p class="oevelser-section-intro">Refleksioner kræver ikke handling — kun ærlighed. Sæt dig et stille sted, læs spørgsmålet, og lad svaret komme. Der er ingen rigtige svar. Der er kun dine.</p>';

    html += '<div class="refleksioner-grid">';
    refleksioner.forEach(function(r) {
        html += '<div class="refleksion-card refleksion-card-' + r.farve + '" data-ref-id="' + r.id + '">';
        html += '<div class="refleksion-card-header">';
        html += '<span class="refleksion-card-ikon">' + r.ikon + '</span>';
        html += '<h3 class="refleksion-card-titel">' + r.titel + '</h3>';
        html += '</div>';
        html += '<p class="refleksion-card-spoergsmaal">' + r.spoergsmaal + '</p>';
        html += '<div class="refleksion-card-body">';
        html += '<p class="refleksion-card-uddybning">' + r.uddybning + '</p>';
        html += '<textarea class="refleksion-card-input" placeholder="Skriv din refleksion her..." rows="3"></textarea>';
        html += '<div class="refleksion-card-actions">';
        html += '<button class="refleksion-gem-btn" data-ref-id="' + r.id + '" data-ref-titel="' + r.titel + '">Gem refleksion</button>';
        html += '</div></div></div>';
    });
    html += '</div>';

    // ── Del 3: Din proces ──
    html += '<div class="oevelser-divider"></div>';
    html += '<div class="oevelser-section-label"><span class="oevelser-section-icon">◉</span><span>Din proces</span></div>';
    html += '<p class="oevelser-section-intro">Hold øje med din udvikling. Hver gang du gennemfører en øvelse eller skriver en refleksion, gemmes det her.</p>';
    html += '<div id="dinProcesContainer"></div>';

    html += buildActionBar();

    document.getElementById('info-content').innerHTML = html;
    setupActionButtons();
    renderDinProces();
    bindExerciseEvents();

    var infoPanel = document.getElementById('info-panel');
    requestAnimationFrame(function() {
        infoPanel.scrollTop = 0;
        requestAnimationFrame(function() {
            var heading = infoPanel.querySelector('h2');
            if (heading) {
                var rect = heading.getBoundingClientRect();
                window.scrollTo({ top: window.pageYOffset + rect.top - 20, behavior: 'smooth' });
            } else {
                var rect = infoPanel.getBoundingClientRect();
                window.scrollTo({ top: window.pageYOffset + rect.top - 20, behavior: 'smooth' });
            }
        });
    });
}

function bindExerciseEvents() {
    // Bind filter buttons
    document.querySelectorAll('.oevelser-filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.oevelser-filter-btn').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            var filter = this.dataset.filter;
            document.querySelectorAll('.exercise-card').forEach(function(card) {
                card.style.display = (filter === 'alle' || card.dataset.kategori === filter) ? '' : 'none';
            });
        });
    });

    // Bind expand/collapse
    document.querySelectorAll('.exercise-card').forEach(function(card) {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.exercise-guide-controls')) return;
            var wasExpanded = this.classList.contains('expanded');
            document.querySelectorAll('.exercise-card').forEach(function(c) {
                c.classList.remove('expanded');
                var btn = c.querySelector('.exercise-toggle');
                if (btn) btn.textContent = 'Se øvelse';
                resetExerciseGuide(c);
            });
            if (!wasExpanded) {
                this.classList.add('expanded');
                var toggleBtn = this.querySelector('.exercise-toggle');
                if (toggleBtn) toggleBtn.textContent = 'Luk øvelse';
            }
        });
    });

    // Bind guided mode
    document.querySelectorAll('.exercise-guide-start').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            startExerciseGuide(this.closest('.exercise-card'));
        });
    });
    document.querySelectorAll('.exercise-guide-next').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            advanceExerciseGuide(this.closest('.exercise-card'));
        });
    });

    // Bind refleksion cards
    document.querySelectorAll('.refleksion-card').forEach(function(card) {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.refleksion-card-input')) return;
            if (e.target.closest('.refleksion-gem-btn')) return;
            var wasActive = this.classList.contains('active');
            document.querySelectorAll('.refleksion-card').forEach(function(c) { c.classList.remove('active'); });
            if (!wasActive) this.classList.add('active');
        });
    });

    // Bind gem buttons
    document.querySelectorAll('.refleksion-gem-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            var card = this.closest('.refleksion-card');
            var textarea = card.querySelector('.refleksion-card-input');
            var svar = textarea.value.trim();
            if (!svar) { textarea.focus(); textarea.style.borderColor = '#c4a67a'; setTimeout(function() { textarea.style.borderColor = ''; }, 2000); return; }
            if (svar.length > 5000) { svar = svar.slice(0, 5000); }
            gemRefleksionSvar(this.dataset.refId, this.dataset.refTitel, svar);
            this.textContent = 'Gemt ✓';
            this.style.background = 'var(--primary)';
            this.style.color = 'white';
            var self = this;
            setTimeout(function() { self.textContent = 'Gem refleksion'; self.style.background = ''; self.style.color = ''; textarea.value = ''; renderDinProces(); }, 1500);
        });
    });
}

function renderDinProces() {
    var container = document.getElementById('dinProcesContainer');
    if (!container) return;
    var p = getProces();
    var html = '';

    var totalOev = p.oevelser.length;
    var totalRef = p.refleksioner.length;
    var totalJournal = p.journal.length;
    var unikkeOev = [];
    p.oevelser.forEach(function(o) { if (unikkeOev.indexOf(o.titel) === -1) unikkeOev.push(o.titel); });

    html += '<div class="proces-stats">';
    html += '<div class="proces-stat"><span class="proces-stat-tal">' + totalOev + '</span><span class="proces-stat-label">øvelser gennemført</span></div>';
    html += '<div class="proces-stat"><span class="proces-stat-tal">' + unikkeOev.length + '</span><span class="proces-stat-label">forskellige øvelser</span></div>';
    html += '<div class="proces-stat"><span class="proces-stat-tal">' + totalRef + '</span><span class="proces-stat-label">refleksioner skrevet</span></div>';
    html += '<div class="proces-stat"><span class="proces-stat-tal">' + totalJournal + '</span><span class="proces-stat-label">journal-notater</span></div>';
    html += '</div>';

    // Journal
    html += '<div class="proces-journal">';
    html += '<h4 class="proces-journal-title">Dagbog</h4>';
    html += '<p class="proces-journal-hint">Skriv hvad du mærker lige nu. Det behøver ikke være mere end et par ord.</p>';
    html += '<textarea class="proces-journal-input" id="procesJournalInput" placeholder="Hvad fylder lige nu?" rows="3"></textarea>';
    html += '<button class="proces-journal-gem" id="procesJournalGem">Gem notat</button>';
    html += '</div>';

    // Timeline
    var allEntries = [];
    p.oevelser.forEach(function(o) { allEntries.push({ type: 'oevelse', titel: o.titel, dato: o.dato, tid: o.tid || '' }); });
    p.refleksioner.forEach(function(r) { allEntries.push({ type: 'refleksion', titel: r.titel, dato: r.dato, svar: r.svar }); });
    p.journal.forEach(function(j) { allEntries.push({ type: 'journal', tekst: j.tekst, dato: j.dato, tid: j.tid || '' }); });
    allEntries.sort(function(a, b) { return b.dato.localeCompare(a.dato); });

    if (allEntries.length > 0) {
        html += '<div class="proces-tidslinje">';
        html += '<h4 class="proces-tidslinje-title">Din tidslinje</h4>';
        var shown = Math.min(allEntries.length, 20);
        for (var i = 0; i < shown; i++) {
            var entry = allEntries[i];
            html += '<div class="proces-entry proces-entry-' + entry.type + '">';
            html += '<div class="proces-entry-dot"></div>';
            html += '<div class="proces-entry-content">';
            if (entry.type === 'oevelse') {
                html += '<div class="proces-entry-label">Øvelse gennemført</div>';
                html += '<div class="proces-entry-titel">' + entry.titel + '</div>';
            } else if (entry.type === 'refleksion') {
                html += '<div class="proces-entry-label">Refleksion</div>';
                html += '<div class="proces-entry-titel">' + escapeHtml(entry.titel) + '</div>';
                html += '<div class="proces-entry-svar">' + escapeHtml(entry.svar) + '</div>';
            } else if (entry.type === 'journal') {
                html += '<div class="proces-entry-label">Dagbog</div>';
                html += '<div class="proces-entry-svar">' + escapeHtml(entry.tekst) + '</div>';
            }
            html += '<div class="proces-entry-dato">' + entry.dato + (entry.tid ? ' kl. ' + entry.tid : '') + '</div>';
            html += '</div></div>';
        }
        html += '</div>';
    } else {
        html += '<div class="proces-tom">';
        html += '<p>Din tidslinje er tom endnu</p>';
        html += '<p class="proces-tom-hint">Gennemfør en øvelse eller skriv en refleksion — så begynder din proces at tage form her.</p>';
        html += '</div>';
    }

    container.innerHTML = html;

    // Bind journal
    var gemBtn = document.getElementById('procesJournalGem');
    var journalInput = document.getElementById('procesJournalInput');
    if (gemBtn && journalInput) {
        gemBtn.addEventListener('click', function() {
            var tekst = journalInput.value.trim();
            if (!tekst) { journalInput.focus(); journalInput.style.borderColor = '#c4a67a'; setTimeout(function() { journalInput.style.borderColor = ''; }, 2000); return; }
            if (tekst.length > 5000) { tekst = tekst.slice(0, 5000); }
            gemJournalNotat(tekst);
            journalInput.value = '';
            gemBtn.textContent = 'Gemt ✓';
            gemBtn.style.background = 'var(--primary)';
            gemBtn.style.color = 'white';
            setTimeout(function() { gemBtn.textContent = 'Gem notat'; gemBtn.style.background = ''; gemBtn.style.color = ''; renderDinProces(); }, 1500);
        });
    }
}

function resetExerciseGuide(card) {
    var steps = card.querySelector('.exercise-steps');
    if (!steps) return;
    steps.classList.remove('guided');
    steps.querySelectorAll('li').forEach(function(li) { li.classList.remove('step-active', 'step-done'); });
    var startBtn = card.querySelector('.exercise-guide-start');
    var nextBtn = card.querySelector('.exercise-guide-next');
    var bar = card.querySelector('.exercise-guide-progress-bar');
    if (startBtn) { startBtn.style.display = ''; startBtn.textContent = 'Start øvelse'; }
    if (nextBtn) nextBtn.style.display = 'none';
    if (bar) bar.style.width = '0%';
    card.removeAttribute('data-guide-step');
}

function startExerciseGuide(card) {
    var steps = card.querySelector('.exercise-steps');
    if (!steps) return;
    steps.classList.add('guided');
    var lis = steps.querySelectorAll('li');
    lis.forEach(function(li) { li.classList.remove('step-active', 'step-done'); });
    if (lis[0]) lis[0].classList.add('step-active');
    card.setAttribute('data-guide-step', '0');
    var startBtn = card.querySelector('.exercise-guide-start');
    var nextBtn = card.querySelector('.exercise-guide-next');
    var bar = card.querySelector('.exercise-guide-progress-bar');
    if (startBtn) startBtn.style.display = 'none';
    if (nextBtn) { nextBtn.style.display = ''; nextBtn.textContent = 'Næste trin'; }
    var total = parseInt(steps.dataset.total) || lis.length;
    if (bar) bar.style.width = (1 / total * 100) + '%';
}

function advanceExerciseGuide(card) {
    var steps = card.querySelector('.exercise-steps');
    if (!steps) return;
    var lis = steps.querySelectorAll('li');
    var current = parseInt(card.getAttribute('data-guide-step')) || 0;
    var total = lis.length;
    if (lis[current]) { lis[current].classList.remove('step-active'); lis[current].classList.add('step-done'); }
    var next = current + 1;
    if (next < total) { lis[next].classList.add('step-active'); card.setAttribute('data-guide-step', next); lis[next].scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
    var bar = card.querySelector('.exercise-guide-progress-bar');
    if (bar) bar.style.width = ((next + 1) / total * 100) + '%';
    if (next >= total - 1) { var nextBtn = card.querySelector('.exercise-guide-next'); if (nextBtn) nextBtn.textContent = 'Færdig'; }
    if (next >= total) {
        var startBtn = card.querySelector('.exercise-guide-start');
        var nextBtn2 = card.querySelector('.exercise-guide-next');
        if (startBtn) { startBtn.style.display = ''; startBtn.textContent = 'Start igen'; }
        if (nextBtn2) nextBtn2.style.display = 'none';
        lis.forEach(function(li) { li.classList.remove('step-active'); li.classList.add('step-done'); });
        var idx2 = parseInt(card.getAttribute('data-index'));
        if (exercises[idx2]) { markerOevelseGennemfoert(exercises[idx2].title); renderDinProces(); }
    }
}


function showWelcome() {
    currentView = 'welcome';
    currentCircle = null;
    clearAllActive();
    updateBottomNavActive('hjem');

    var welcomeHTML = '';

    if (currentMode === 'fagfolk') {
        welcomeHTML = `
        <h2>Velkommen, kollega</h2>
        <p>Jeg hedder Annemarie Clement. Jeg er nervesystemsterapeut, afspændingspædagog, psykoterapeut MPF og biologisk traumeterapeut — og jeg har viet mit faglige liv til at forstå det system der ligger under alt det vi behandler.</p>

        <h2>Du kender frustrationen</h2>
        <p>Som behandler har du sikkert oplevet det: kurser der lover dybde men leverer overflade. Uddannelser der giver teori uden krop. Metoder der virker i isolation men ikke fanger helheden. Du ved at dine klienter bærer på noget der kræver mere end én tilgang — men det er svært at finde en ramme der samler det hele.</p>
        <p>Måske arbejder du allerede med kroppen, med relationen, med traumet. Men du mærker at der mangler noget. At de enkelte redskaber ikke helt rækker. At forandringen hos dine klienter rammer et loft.</p>

        <h2>Nervesystemet som fælles fundament</h2>
        <p>I min tilgang er nervesystemet det der binder det hele sammen. Polyvagal teori, tilknytningsmønstre, traumebearbejdning, psykobiologi, kropsterapi og den terapeutiske relation — det er ikke seks adskilte discipliner. Det er seks dimensioner af ét og samme system. Og det er først når vi forstår dem som en helhed, at vi kan arbejde med den dybde vores klienter har brug for.</p>
        <p>Det er også her de fleste enkeltstående metoder rammer deres begrænsning. De adresserer én dimension uden at se hvordan den påvirker — og påvirkes af — alle de andre.</p>

        <h2>Hvad denne app giver dig</h2>
        <p>Her kan du udforske cirkelmodellen — den dynamiske helhedsmodel der bærer hele min metode. For hvert af de seks områder finder du fagligt indhold med klinisk dybde, videnskabelig forankring og konkret relevans for dit behandlingsarbejde.</p>
        <p>Du kan filtrere efter temaer som angst, stress, traumer, tilknytning og søvn for at se hvordan hvert tema påvirker systemet på tværs. Og du kan udforske de tre uddannelsesspor der bygger på denne model.</p>

        <h2>En invitation</h2>
        <p>Tryk på en cirkel for at begynde. Skift mellem temaer for at se systemet fra forskellige vinkler. Denne app er bygget til at du kan bruge den som et fagligt opslagsværk — et redskab du vender tilbage til når du har brug for at forstå sammenhængene dybere.</p>

        <div style="text-align: center; margin-top: 40px; margin-bottom: 10px;">
            <a href="#" id="dynamics-link" class="dynamics-link">Forstå dynamikken bag ›</a>
        </div>
    `;
    } else {
        welcomeHTML = `
        <h2>Velkommen til min verden</h2>
        <p>Jeg hedder Annemarie Clement. Jeg er nervesystemsterapeut, supervisor, psykoterapeut MPF og biologisk traumeterapeut — med 20 års erfaring. Denne app er dit redskab til at forstå min metode og udforske hvordan nervesystemet påvirker alt i dit liv.</p>

        <p style="text-align: center; font-style: italic; color: var(--primary); margin: 28px 0; font-size: 1.05rem;"><em>Pas på dit nervesystem — det passer på dig.</em></p>

        <h2>Du kender følelsen</h2>
        <p>Vi kender den alle sammen. At sidde fast. At have ondt — i kroppen, i sindet, i relationer der ikke fungerer. At føle stress eller angst der ikke vil slippe, eller en træthed så dyb at livet mister farve. At mærke at noget fundamentalt er ude af balance, men ikke helt vide hvad eller hvordan.</p>

        <h2>Hvad ligger bag?</h2>
        <p>Bag smerten ligger ofte nervesystemet. Dit nervesystem styrer søvn, fordøjelse, stress, relationer, følelser — det er dit fundament. Og i vores kultur er de fleste nervesystemer overstimulerede og underernærede.</p>
        <p>Når vi overser sammenhængen — at alt hænger sammen med alt — udebliver resultaterne. Men når du lærer at møde din krop og dit nervesystem på dets egne præmisser — ikke gennem vilje, men gennem nærvær — begynder forandringen.</p>

        <h2>Min metode</h2>
        <p>Min tilgang bygger på en dynamisk cirkelmodel med seks sammenhængende dimensioner: Nervesystemregulering, Polyvagal Teori, Tilknytningsmønstre, Kropsterapi, Psykobiologi, Traumer og den Terapeutiske Relation.</p>
        <p>I min klinik i Hellerup arbejder jeg med kropsbaseret behandling på briks — fasciel frigørelse, åndedrætsarbejde og co-regulering. Jeg underviser også kommende terapeuter og ledere, og tilbyder supervision til behandlere.</p>

        <h2>Hvad du kan her</h2>
        <p>Tryk på en cirkel for at udforske en dimension. Skift mellem temaer som angst, stress, traumer og søvn for at se nervesystemet fra forskellige vinkler. Prøv øvelserne der bringer teorien ned i kroppen.</p>
        <p>Selv når livet er svært, har vi et valg. Lad os begynde.</p>

        <div style="text-align: center; margin-top: 40px; margin-bottom: 10px;">
            <a href="#" id="dynamics-link" class="dynamics-link">Forstå dynamikken bag ›</a>
        </div>
    `;
    }

    document.getElementById('info-content').innerHTML = welcomeHTML;

    document.getElementById('dynamics-link').addEventListener('click', function(e) {
        e.preventDefault();
        showDynamics();
    });

    const infoPanel = document.getElementById('info-panel');
    requestAnimationFrame(() => {
        infoPanel.scrollTop = 0;
        window.scrollTo(0, 0);
    });
}

function createMiniDiagram(coords, options) {
    options = options || {};
    var stressed = options.stressed || [];
    var caption = options.caption || '';

    var ids = ['polyvagal', 'tilknytning', 'kropsterapi', 'psykobiologi', 'traumer', 'relation'];
    var labels = {
        nervesystem: ['Nerve-', 'system'],
        polyvagal: ['Polyvagal', 'teori'],
        tilknytning: ['Tilknyt-', 'ning'],
        kropsterapi: ['Krops-', 'terapi'],
        psykobiologi: ['Psyko-', 'biologi'],
        traumer: ['Traumer', ''],
        relation: ['Relation', '']
    };

    var lineColor = '#8A7F93';
    var diagramId = 'dyn-' + Math.random().toString(36).substr(2, 6);

    var svg = '<svg viewBox="-20 -5 360 330" class="dynamics-figure">';

    // Gradient definitions matching main circle model
    svg += '<defs>';
    svg += '<radialGradient id="' + diagramId + '-centerGrad" cx="40%" cy="35%" r="65%">';
    svg += '<stop offset="0%" stop-color="#9B93A6"/>';
    svg += '<stop offset="100%" stop-color="#6B6278"/>';
    svg += '</radialGradient>';
    svg += '<radialGradient id="' + diagramId + '-outerGrad" cx="40%" cy="35%" r="65%">';
    svg += '<stop offset="0%" stop-color="#F2F0F5"/>';
    svg += '<stop offset="60%" stop-color="#E4E0EB"/>';
    svg += '<stop offset="100%" stop-color="#D5D0DE"/>';
    svg += '</radialGradient>';
    svg += '<radialGradient id="' + diagramId + '-stressGrad" cx="40%" cy="35%" r="65%">';
    svg += '<stop offset="0%" stop-color="#e8d5c8"/>';
    svg += '<stop offset="100%" stop-color="#d1b9a8"/>';
    svg += '</radialGradient>';
    svg += '<filter id="' + diagramId + '-shadow" x="-30%" y="-30%" width="160%" height="160%">';
    svg += '<feDropShadow dx="0" dy="1.5" stdDeviation="3" flood-color="rgba(138, 127, 147,0.15)"/>';
    svg += '</filter>';
    svg += '<filter id="' + diagramId + '-centerShadow" x="-30%" y="-30%" width="160%" height="160%">';
    svg += '<feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="rgba(74, 67, 84,0.25)"/>';
    svg += '</filter>';
    svg += '</defs>';

    // Connection lines - center to all
    ids.forEach(function(id) {
        svg += '<line x1="' + coords.nervesystem.cx + '" y1="' + coords.nervesystem.cy + '" x2="' + coords[id].cx + '" y2="' + coords[id].cy + '" stroke="' + lineColor + '" stroke-width="0.8" stroke-dasharray="5 5" opacity="0.35"/>';
    });
    // Ring connections
    for (var i = 0; i < ids.length; i++) {
        var next = ids[(i + 1) % ids.length];
        svg += '<line x1="' + coords[ids[i]].cx + '" y1="' + coords[ids[i]].cy + '" x2="' + coords[next].cx + '" y2="' + coords[next].cy + '" stroke="' + lineColor + '" stroke-width="0.8" stroke-dasharray="5 5" opacity="0.35"/>';
    }
    // Cross connections
    var crosses = [['polyvagal','kropsterapi'],['polyvagal','traumer'],['tilknytning','psykobiologi'],['tilknytning','relation'],['kropsterapi','traumer'],['psykobiologi','relation']];
    crosses.forEach(function(pair) {
        svg += '<line x1="' + coords[pair[0]].cx + '" y1="' + coords[pair[0]].cy + '" x2="' + coords[pair[1]].cx + '" y2="' + coords[pair[1]].cy + '" stroke="' + lineColor + '" stroke-width="0.6" stroke-dasharray="5 5" opacity="0.35"/>';
    });

    // White mask circles behind colored circles so lines don't show through
    svg += '<circle cx="' + coords.nervesystem.cx + '" cy="' + coords.nervesystem.cy + '" r="' + coords.nervesystem.r + '" fill="white"/>';
    ids.forEach(function(id) {
        svg += '<circle cx="' + coords[id].cx + '" cy="' + coords[id].cy + '" r="' + coords[id].r + '" fill="white"/>';
    });

    // Center circle with gradient and shadow
    svg += '<circle cx="' + coords.nervesystem.cx + '" cy="' + coords.nervesystem.cy + '" r="' + coords.nervesystem.r + '" fill="url(#' + diagramId + '-centerGrad)" stroke="rgba(255,255,255,0.15)" stroke-width="1" filter="url(#' + diagramId + '-centerShadow)"/>';
    svg += '<text x="' + coords.nervesystem.cx + '" y="' + (coords.nervesystem.cy - 5) + '" text-anchor="middle" fill="white" font-size="9" font-family="Georgia" letter-spacing="0.02em">Nerve-</text>';
    svg += '<text x="' + coords.nervesystem.cx + '" y="' + (coords.nervesystem.cy + 7) + '" text-anchor="middle" fill="white" font-size="9" font-family="Georgia" letter-spacing="0.02em">system</text>';

    // Outer circles with gradients and shadows
    ids.forEach(function(id) {
        var isStressed = stressed.indexOf(id) !== -1;
        var fillRef = isStressed ? 'url(#' + diagramId + '-stressGrad)' : 'url(#' + diagramId + '-outerGrad)';
        var strokeColor = isStressed ? 'rgba(177,150,128,0.3)' : 'rgba(138, 127, 147,0.15)';
        svg += '<circle cx="' + coords[id].cx + '" cy="' + coords[id].cy + '" r="' + coords[id].r + '" fill="' + fillRef + '" stroke="' + strokeColor + '" stroke-width="1" filter="url(#' + diagramId + '-shadow)"/>';
        svg += '<text x="' + coords[id].cx + '" y="' + (coords[id].cy - 4) + '" text-anchor="middle" fill="#4A4354" font-size="8" font-family="Georgia" letter-spacing="0.01em">' + labels[id][0] + '</text>';
        if (labels[id][1]) {
            svg += '<text x="' + coords[id].cx + '" y="' + (coords[id].cy + 7) + '" text-anchor="middle" fill="#4A4354" font-size="8" font-family="Georgia" letter-spacing="0.01em">' + labels[id][1] + '</text>';
        }
    });

    svg += '</svg>';
    if (caption) {
        svg += '<p class="dynamics-caption">' + caption + '</p>';
    }
    return svg;
}

function showDynamics() {
    currentView = 'dynamics';
    currentCircle = null;
    clearAllActive();
    updateBottomNavActive('hjem');

    var balanced = {
        nervesystem: { cx: 160, cy: 160, r: 41 },
        polyvagal: { cx: 160, cy: 46, r: 31 },
        tilknytning: { cx: 268, cy: 103, r: 31 },
        kropsterapi: { cx: 268, cy: 217, r: 31 },
        psykobiologi: { cx: 160, cy: 274, r: 31 },
        traumer: { cx: 52, cy: 217, r: 31 },
        relation: { cx: 52, cy: 103, r: 31 }
    };

    var imbalanced = {
        nervesystem: { cx: 155, cy: 158, r: 41 },
        polyvagal: { cx: 168, cy: 36, r: 28 },
        tilknytning: { cx: 288, cy: 80, r: 34 },
        kropsterapi: { cx: 282, cy: 240, r: 28 },
        psykobiologi: { cx: 132, cy: 275, r: 26 },
        traumer: { cx: 32, cy: 212, r: 35 },
        relation: { cx: 30, cy: 80, r: 33 }
    };

    var traumeStressed = {
        nervesystem: { cx: 152, cy: 162, r: 39 },
        polyvagal: { cx: 165, cy: 48, r: 27 },
        tilknytning: { cx: 265, cy: 110, r: 27 },
        kropsterapi: { cx: 262, cy: 222, r: 27 },
        psykobiologi: { cx: 148, cy: 278, r: 26 },
        traumer: { cx: 35, cy: 208, r: 43 },
        relation: { cx: 45, cy: 95, r: 28 }
    };

    var multiStressed = {
        nervesystem: { cx: 155, cy: 168, r: 37 },
        polyvagal: { cx: 178, cy: 32, r: 25 },
        tilknytning: { cx: 292, cy: 85, r: 36 },
        kropsterapi: { cx: 280, cy: 245, r: 26 },
        psykobiologi: { cx: 135, cy: 285, r: 24 },
        traumer: { cx: 28, cy: 220, r: 39 },
        relation: { cx: 32, cy: 88, r: 35 }
    };

    var html = '<div class="dynamics-page">';

    html += '<h2>Dynamikken bag cirkelmodellen</h2>';
    html += '<p>Cirkelmodellen er ikke bare en illustration. Den er et spejl af den måde dit nervesystem faktisk fungerer på — som ét sammenhængende system, hvor intet område står alene. Forstår du denne dynamik, forstår du også hvorfor forandring kræver mere end én isoleret indsats.</p>';

    // Figure 1: Balanced
    html += '<h3>Når alt er i balance</h3>';
    html += '<div class="dynamics-figure-container">';
    html += createMiniDiagram(balanced, { caption: 'Systemet i balance — alle områder støtter hinanden' });
    html += '</div>';
    html += '<p>Når nervesystemet er i balance, arbejder alle seks dimensioner sammen i en gensidig vekselvirkning. Polyvagal teori beskriver det som den ventrale vagale tilstand — den tilstand hvor du føler dig tryg, forbundet og til stede.</p>';
    html += '<p>I denne tilstand fungerer kroppen optimalt. Søvnen kommer naturligt. Fordøjelsen arbejder. Relationer føles nærende. Tilknytningsmønstre er fleksible. Kroppen er afspændt men levende. Psykobiologien — alle de biologiske processer der styrer din daglige funktion — kører i et roligt, stabilt gear.</p>';
    html += '<p>Læg mærke til figuren. Symmetrien. De lige afstande. Forbindelseslinjerne der fordeler sig jævnt. Du kan se det med det samme — her er noget der fungerer. Det er ikke tilfældigt. Symmetrien afspejler et system i harmoni.</p>';

    // Figure 2: General imbalance
    html += '<h3>Når systemet er under pres</h3>';
    html += '<div class="dynamics-figure-container">';
    html += createMiniDiagram(imbalanced, { caption: 'Systemet under pres — symmetrien er brudt' });
    html += '</div>';
    html += '<p>Men livet ser ikke altid sådan ud. Stress, traumer, angst, relationelle sår, søvnmangel, kronisk smerte — alt dette trækker systemet ud af balance. Og det sker ikke isoleret. Når ét område belastes, mærker alle de andre det.</p>';
    html += '<p>Se på figuren. Sammenlign den med den forrige. Symmetrien er brudt. Nogle cirkler er trukket tættere sammen, andre skubbet fra hinanden. Forbindelserne der før bar ligeligt, er nu spændte og ujævne. Proportionerne er forskudt.</p>';
    html += '<p>Det er præcis sådan det føles. Noget er skævt. Noget sidder fast. Du kan mærke det i kroppen, i dine tanker, i dine relationer — men det er svært at sætte fingeren på hvad det egentlig er. Og det er fordi det ikke er ét enkelt problem. Det er hele systemet der er trukket ud af sin naturlige balance.</p>';

    // Figure 3: Trauma dominance
    html += '<h3>Når ét område dominerer</h3>';
    html += '<div class="dynamics-figure-container">';
    html += createMiniDiagram(traumeStressed, { stressed: ['traumer'], caption: 'Ubearbejdet traume trækker hele systemet mod sig' });
    html += '</div>';
    html += '<p>Lad os se nærmere på hvad der sker når ét specifikt område er under pres — for eksempel ubearbejdet traume.</p>';
    html += '<p>Traume bliver ikke i sin egen cirkel. Det udvider sig. Det fylder mere. Og i takt med at det vokser, trækker det alle andre områder ud af deres naturlige position:</p>';
    html += '<ul class="dynamics-list">';
    html += '<li><strong>Polyvagal teori:</strong> Nervesystemet skifter til overlevelsestilstand. Den ventrale vagale bremse slippes, og systemet låser sig i kamp, flugt eller frys.</li>';
    html += '<li><strong>Tilknytningsmønstre:</strong> Relationer bliver utrygge. Tillid er svær. Du trækker dig eller klamrer dig — begge dele er nervesystemets forsøg på at beskytte dig.</li>';
    html += '<li><strong>Kropsterapi & Behandling:</strong> Kroppen trækker sig sammen. Musklerne holder. Åndedrættet bliver overfladisk. Kroppen bærer det som sindet ikke kan rumme.</li>';
    html += '<li><strong>Psykobiologi:</strong> Søvn forstyrres. Fordøjelsen reagerer. Immunforsvaret svækkes. De biologiske processer der normalt kører automatisk, kommer under pres.</li>';
    html += '<li><strong>Terapeutisk Relation:</strong> Evnen til at tage imod hjælp reduceres. Tillid til andre — også til en terapeut — kræver et nervesystem der føler sig trygt nok.</li>';
    html += '</ul>';
    html += '<p>Det er ikke svaghed. Det er nervesystemet der gør præcis det det er designet til — at overleve. Men prisen er at hele systemets balance går tabt.</p>';

    // Figure 4: Multiple areas stressed
    html += '<h3>Når flere områder belastes samtidig</h3>';
    html += '<div class="dynamics-figure-container">';
    html += createMiniDiagram(multiStressed, { stressed: ['traumer', 'tilknytning', 'relation'], caption: 'Flere områder under pres — systemet trækkes i flere retninger' });
    html += '</div>';
    html += '<p>I virkeligheden er det sjældent kun ét område der er belastet. Et menneske med relationelt traume har ofte også forstyrrede tilknytningsmønstre OG en krop der holder spænding OG et polyvagalt system der sidder fast i alarmberedskab. Hvert presset område forstærker de andre.</p>';
    html += '<p>Det er derfor isolerede tilgange ofte rammer et loft. At behandle kun kroppen uden at adressere traume. At arbejde med tilknytning uden at forstå den polyvagale respons. At fokusere på psykologi uden at inkludere kroppen. Hver tilgang kan noget — men ingen af dem alene kan genskabe balancen i et system der trækkes i flere retninger samtidig.</p>';

    // Why holistic approach
    html += '<h3>Hvorfor helheden er afgørende</h3>';
    html += '<p>Cirkelmodellen er ikke bare et kort — den er en behandlingsfilosofi. Når vi forstår at alt påvirker alt, ændrer det måden vi arbejder med regulering på. Vi behandler ikke symptomer. Vi adresserer systemet.</p>';
    html += '<p>Det er derfor nervesystemsterapi arbejder på alle niveauer samtidig. Ikke fordi kompleksitet er målet, men fordi nervesystemet selv er en integreret helhed. Balance vender tilbage når vi møder det på dets egne præmisser — med tålmodighed, med nærvær, og med forståelse for at forandring i én dimension sender bølger gennem alle de andre.</p>';

    // For clients
    html += '<h3>For dig som klient</h3>';
    html += '<p>Når du ser den skæve figur, genkender du måske dig selv. Den trækken. Den fornemmelse af at alt er lidt forskudt. Vid at det ikke er permanent. Dit nervesystem har kapaciteten til balance — det har bare brug for de rette betingelser for at finde tilbage. Det er det vi arbejder med sammen.</p>';

    // For professionals
    html += '<h3>For dig som fagperson</h3>';
    html += '<p>Modellen giver dig en ramme for at forstå hvorfor enkeltstående metoder ofte når et loft. Når du kan se hele systemet — ikke bare det symptom klienten kommer med — kan du identificere hvilke forbindelser der er belastet og hvor reguleringen har brug for støtte. Det er fundamentet i Annemaries metode og i de uddannelser hun tilbyder.</p>';

    // CTA: Kortlæg dit eget billede
    html += '<div class="vurdering-cta">';
    html += '<div class="vurdering-cta-inner">';
    html += '<h3>Kortlæg dit eget billede</h3>';
    html += '<p>Nu hvor du forstår dynamikken, kan du kortlægge din egen situation. Besvar 18 korte spørgsmål og få et personligt overblik over dit nervesystems balance.</p>';
    var tidligereCount = getVurderinger().length;
    if (tidligereCount > 0) {
        html += '<p class="vurdering-cta-note">Du har ' + tidligereCount + ' tidligere ' + (tidligereCount === 1 ? 'vurdering' : 'vurderinger') + '. Start en ny for at se din udvikling.</p>';
    }
    html += '<button class="vurdering-cta-btn" onclick="startVurdering()">Start din vurdering</button>';
    if (tidligereCount > 0) {
        html += '<button class="vurdering-historik-btn" onclick="showVurderingHistorik()">Se din udvikling over tid</button>';
    }
    html += '</div>';
    html += '</div>';

    // Action bar and back link
    html += buildActionBar().replace('resetToWelcome()', 'resetToWelcome()');

    html += '</div>';

    document.getElementById('info-content').innerHTML = html;

    setupActionButtons();

    var infoPanel = document.getElementById('info-panel');
    infoPanel.scrollTop = 0;
    setTimeout(function() {
        var heading = infoPanel.querySelector('h2');
        if (heading) {
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}




// ══════ SELVVURDERING ══════

var vurderingState = {
    trinIndex: 0,
    cirkelKeys: Object.keys(vurderingData),
    scores: {}
};

function startVurdering() {
    vurderingState.trinIndex = 0;
    vurderingState.scores = {};
    vurderingState.cirkelKeys.forEach(function(key) {
        vurderingState.scores[key] = { generel: 5, vinkler: [5, 5, 5] };
    });
    currentView = 'vurdering';
    renderVurderingTrin();
}

function renderVurderingTrin() {
    var keys = vurderingState.cirkelKeys;
    var idx = vurderingState.trinIndex;
    var key = keys[idx];
    var data = vurderingData[key];
    var mode = (currentMode === 'fagfolk') ? 'fagfolk' : 'klient';
    var modeData = data[mode];
    var sc = vurderingState.scores[key];

    var html = '<div class="vurdering-flow">';

    // Progress bar
    html += '<div class="vurdering-progress">';
    for (var i = 0; i < keys.length; i++) {
        var cls = i < idx ? 'done' : (i === idx ? 'active' : '');
        html += '<div class="vurdering-step ' + cls + '">';
        html += '<span class="vurdering-step-dot" style="background:' + vurderingData[keys[i]].farve + '"></span>';
        html += '<span class="vurdering-step-label">' + vurderingData[keys[i]].label.split(' ')[0] + '</span>';
        html += '</div>';
    }
    html += '</div>';

    // Trin-header
    html += '<div class="vurdering-header" style="border-left: 4px solid ' + data.farve + '">';
    html += '<span class="vurdering-ikon">' + data.ikon + '</span>';
    html += '<div><h2>' + data.label + '</h2>';
    html += '<p class="vurdering-intro">' + modeData.intro + '</p></div>';
    html += '</div>';

    // Generel score
    html += '<div class="vurdering-sektion">';
    html += '<label class="vurdering-label">Samlet oplevelse</label>';
    html += '<div class="vurdering-slider-row">';
    html += '<input type="range" min="1" max="10" value="' + sc.generel + '" class="vurdering-slider" data-target="generel" style="accent-color:' + data.farve + '">';
    html += '<span class="vurdering-value" id="val-generel">' + sc.generel + '</span>';
    html += '</div>';
    html += '<div class="vurdering-scale-labels"><span>1 — Meget udfordret</span><span>10 — Optimal</span></div>';
    html += '</div>';

    // 3 uddybende spoergsmaal
    html += '<div class="vurdering-uddybning">';
    html += '<h3>Tre vinkler</h3>';
    for (var v = 0; v < 3; v++) {
        html += '<div class="vurdering-sektion">';
        html += '<label class="vurdering-label">' + modeData.spoergsmaal[v] + '</label>';
        html += '<div class="vurdering-slider-row">';
        html += '<input type="range" min="1" max="10" value="' + sc.vinkler[v] + '" class="vurdering-slider" data-target="vinkel-' + v + '" style="accent-color:' + data.farve + '">';
        html += '<span class="vurdering-value" id="val-vinkel-' + v + '">' + sc.vinkler[v] + '</span>';
        html += '</div>';
        html += '</div>';
    }
    html += '</div>';

    // Mini-opsummering
    html += '<div class="vurdering-mini-opsummering">';
    html += '<h4>Din score for ' + data.label + '</h4>';
    html += renderMiniBarChart(key);
    html += '</div>';

    // Navigation
    html += '<div class="vurdering-nav">';
    if (idx > 0) {
        html += '<button class="vurdering-btn-back" onclick="vurderingForrige()">← Forrige</button>';
    } else {
        html += '<button class="vurdering-btn-back" onclick="showDynamics()">← Tilbage</button>';
    }
    if (idx < keys.length - 1) {
        html += '<button class="vurdering-btn-next" onclick="vurderingNaeste()">Næste →</button>';
    } else {
        html += '<button class="vurdering-btn-next vurdering-btn-finish" onclick="afslutVurdering()">Se dit resultat →</button>';
    }
    html += '</div>';

    html += '</div>';

    document.getElementById('info-content').innerHTML = html;

    // Bind sliders
    document.querySelectorAll('.vurdering-slider').forEach(function(slider) {
        slider.addEventListener('input', function() {
            var target = this.dataset.target;
            var val = parseInt(this.value);
            if (target === 'generel') {
                vurderingState.scores[key].generel = val;
            } else {
                var vi = parseInt(target.split('-')[1]);
                vurderingState.scores[key].vinkler[vi] = val;
            }
            var valEl = document.getElementById('val-' + target);
            if (valEl) valEl.textContent = val;
            var mini = document.querySelector('.vurdering-mini-opsummering');
            if (mini) {
                mini.innerHTML = '<h4>Din score for ' + data.label + '</h4>' + renderMiniBarChart(key);
            }
        });
    });

    var infoPanel = document.getElementById('info-panel');
    infoPanel.scrollTop = 0;
}

function renderMiniBarChart(cirkelKey) {
    var sc = vurderingState.scores[cirkelKey];
    var data = vurderingData[cirkelKey];
    var mode = (currentMode === 'fagfolk') ? 'fagfolk' : 'klient';
    var avg = Math.round((sc.generel + sc.vinkler[0] + sc.vinkler[1] + sc.vinkler[2]) / 4 * 10) / 10;

    var html = '<div class="mini-bar-chart">';
    html += '<div class="mini-bar-row">';
    html += '<span class="mini-bar-label">Samlet</span>';
    html += '<div class="mini-bar-track"><div class="mini-bar-fill" style="width:' + (sc.generel * 10) + '%;background:' + data.farve + '"></div></div>';
    html += '<span class="mini-bar-val">' + sc.generel + '</span>';
    html += '</div>';
    for (var i = 0; i < 3; i++) {
        var shortLabel = data[mode].spoergsmaal[i].split(' ').slice(0, 4).join(' ') + '…';
        html += '<div class="mini-bar-row">';
        html += '<span class="mini-bar-label">' + shortLabel + '</span>';
        html += '<div class="mini-bar-track"><div class="mini-bar-fill" style="width:' + (sc.vinkler[i] * 10) + '%;background:' + data.farve + ';opacity:0.7"></div></div>';
        html += '<span class="mini-bar-val">' + sc.vinkler[i] + '</span>';
        html += '</div>';
    }
    html += '<div class="mini-bar-avg">Gennemsnit: <strong>' + avg + '</strong> / 10</div>';
    html += '</div>';
    return html;
}

function vurderingNaeste() {
    if (vurderingState.trinIndex < vurderingState.cirkelKeys.length - 1) {
        vurderingState.trinIndex++;
        renderVurderingTrin();
    }
}

function vurderingForrige() {
    if (vurderingState.trinIndex > 0) {
        vurderingState.trinIndex--;
        renderVurderingTrin();
    }
}

function afslutVurdering() {
    var entry = {
        dato: new Date().toISOString().slice(0, 10),
        tid: new Date().toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' }),
        mode: currentMode,
        scores: JSON.parse(JSON.stringify(vurderingState.scores))
    };
    saveVurdering(entry);
    showVurderingResultat(entry);
}

function showVurderingResultat(entry) {
    currentView = 'vurdering-resultat';
    var keys = Object.keys(entry.scores);
    var html = '<div class="vurdering-resultat">';

    html += '<h2>Dit nervesystems billede</h2>';
    html += '<p class="vurdering-dato">Vurdering fra ' + entry.dato + ' kl. ' + (entry.tid || '') + '</p>';

    // ── SVG Radar-chart ──
    html += buildRadarChart(entry.scores);

    // ── Sorteret bar-chart ──
    var sorted = keys.map(function(k) {
        var s = entry.scores[k];
        return { key: k, avg: Math.round((s.generel + s.vinkler[0] + s.vinkler[1] + s.vinkler[2]) / 4 * 10) / 10 };
    }).sort(function(a, b) { return a.avg - b.avg; });

    html += '<h3>Dine dimensioner — sorteret</h3>';
    html += '<div class="resultat-bars">';
    sorted.forEach(function(item) {
        var d = vurderingData[item.key];
        html += '<div class="resultat-bar-row">';
        html += '<span class="resultat-bar-label">' + d.ikon + ' ' + d.label + '</span>';
        html += '<div class="resultat-bar-track"><div class="resultat-bar-fill" style="width:' + (item.avg * 10) + '%;background:' + d.farve + '"></div></div>';
        html += '<span class="resultat-bar-val">' + item.avg + '</span>';
        html += '</div>';
    });
    html += '</div>';

    // ── Algoritmisk analyse med SAMMENHAENGE ──
    html += buildAnalyse(entry.scores, sorted);

    // ── Anbefalinger ──
    html += buildAnbefalinger(sorted);

    // Navigation
    html += '<div class="vurdering-nav">';
    html += '<button class="vurdering-btn-back" onclick="showDynamics()">← Tilbage til dynamikken</button>';
    var alleVurd = getVurderinger();
    if (alleVurd.length > 1) {
        html += '<button class="vurdering-btn-next" onclick="showVurderingHistorik()">Se din udvikling →</button>';
    }
    html += '</div>';

    html += '</div>';
    document.getElementById('info-content').innerHTML = html;
    document.getElementById('info-panel').scrollTop = 0;
}

function buildRadarChart(scores) {
    var keys = Object.keys(scores);
    var cx = 160, cy = 160, r = 120;
    var svg = '<div class="radar-container"><svg viewBox="0 0 320 340" class="radar-svg">';

    // Background grid (5 rings)
    for (var ring = 1; ring <= 5; ring++) {
        var rr = r * ring / 5;
        var points = [];
        for (var i = 0; i < keys.length; i++) {
            var angle = (Math.PI * 2 * i / keys.length) - Math.PI / 2;
            points.push(Math.round(cx + rr * Math.cos(angle)) + ',' + Math.round(cy + rr * Math.sin(angle)));
        }
        svg += '<polygon points="' + points.join(' ') + '" fill="none" stroke="#DDD9E3" stroke-width="0.5"/>';
    }

    // Axis lines
    for (var i = 0; i < keys.length; i++) {
        var angle = (Math.PI * 2 * i / keys.length) - Math.PI / 2;
        var ex = Math.round(cx + r * Math.cos(angle));
        var ey = Math.round(cy + r * Math.sin(angle));
        svg += '<line x1="' + cx + '" y1="' + cy + '" x2="' + ex + '" y2="' + ey + '" stroke="#CCC8D3" stroke-width="0.5"/>';
    }

    // Data polygon
    var dataPoints = [];
    for (var i = 0; i < keys.length; i++) {
        var s = scores[keys[i]];
        var avg = (s.generel + s.vinkler[0] + s.vinkler[1] + s.vinkler[2]) / 4;
        var val = avg / 10;
        var angle = (Math.PI * 2 * i / keys.length) - Math.PI / 2;
        var px = Math.round(cx + r * val * Math.cos(angle));
        var py = Math.round(cy + r * val * Math.sin(angle));
        dataPoints.push(px + ',' + py);
    }
    svg += '<polygon points="' + dataPoints.join(' ') + '" fill="rgba(138, 127, 147,0.2)" stroke="#8A7F93" stroke-width="2"/>';

    // Data dots + labels
    for (var i = 0; i < keys.length; i++) {
        var s = scores[keys[i]];
        var avg = (s.generel + s.vinkler[0] + s.vinkler[1] + s.vinkler[2]) / 4;
        var val = avg / 10;
        var angle = (Math.PI * 2 * i / keys.length) - Math.PI / 2;
        var px = Math.round(cx + r * val * Math.cos(angle));
        var py = Math.round(cy + r * val * Math.sin(angle));
        var d = vurderingData[keys[i]];
        svg += '<circle cx="' + px + '" cy="' + py + '" r="4" fill="' + d.farve + '" stroke="white" stroke-width="1.5"/>';

        // Label
        var lx = Math.round(cx + (r + 18) * Math.cos(angle));
        var ly = Math.round(cy + (r + 18) * Math.sin(angle));
        var anchor = 'middle';
        if (Math.cos(angle) < -0.3) anchor = 'end';
        if (Math.cos(angle) > 0.3) anchor = 'start';
        svg += '<text x="' + lx + '" y="' + ly + '" text-anchor="' + anchor + '" fill="#4A4354" font-size="10" font-family="Georgia">' + d.label.split(' ')[0] + '</text>';
        svg += '<text x="' + lx + '" y="' + (ly + 12) + '" text-anchor="' + anchor + '" fill="#918B9A" font-size="9" font-family="Georgia">' + (Math.round(avg * 10) / 10) + '/10</text>';
    }

    svg += '</svg></div>';
    return svg;
}

function buildAnalyse(scores, sorted) {
    var html = '<div class="resultat-analyse">';
    html += '<h3>Analyse: Hvordan dine dimensioner påvirker hinanden</h3>';

    // Find de 2 laveste
    var laveste = sorted.slice(0, 2);
    var sourceData = themes[currentTheme] || themes.general;
    var connections = sourceData.connections || {};

    laveste.forEach(function(item) {
        var d = vurderingData[item.key];
        html += '<div class="analyse-blok" style="border-left: 3px solid ' + d.farve + '">';
        html += '<h4>' + d.ikon + ' ' + d.label + ' <span class="analyse-score">(' + item.avg + '/10)</span></h4>';

        // Find forbindelser til andre lave areas
        var forbindelser = [];
        sorted.forEach(function(other) {
            if (other.key === item.key) return;
            var connKey1 = item.key + '-' + other.key;
            var connKey2 = other.key + '-' + item.key;
            var conn = connections[connKey1] || connections[connKey2];
            if (conn) {
                var mode = (currentMode === 'fagfolk') ? 'fagfolk' : 'klient';
                var text = conn[mode] || conn.klient || '';
                if (text && other.avg < 7) {
                    forbindelser.push({
                        otherKey: other.key,
                        otherLabel: vurderingData[other.key] ? vurderingData[other.key].label : other.key,
                        otherScore: other.avg,
                        text: text
                    });
                }
            }
        });

        if (forbindelser.length > 0) {
            html += '<p class="analyse-intro">Denne dimension påvirkes af:</p>';
            html += '<ul class="analyse-forbindelser">';
            forbindelser.slice(0, 3).forEach(function(f) {
                html += '<li><strong>' + f.otherLabel + '</strong> (' + f.otherScore + '/10): ' + f.text.substring(0, 150) + (f.text.length > 150 ? '…' : '') + '</li>';
            });
            html += '</ul>';
        }
        html += '</div>';
    });

    html += '</div>';
    return html;
}

function buildAnbefalinger(sorted) {
    var html = '<div class="resultat-anbefalinger">';
    html += '<h3>Dine anbefalinger</h3>';
    html += '<p>Baseret på din vurdering anbefaler vi at starte her:</p>';

    // Map cirkel-keys til exercise-kategorier
    var exerciseMap = {
        polyvagal: 'regulering',
        kropsterapi: 'krop',
        psykobiologi: 'aandedraet',
        traumer: 'regulering',
        tilknytning: 'regulering',
        relation: 'regulering'
    };

    var topPriority = sorted.slice(0, 3);
    html += '<div class="anbefaling-liste">';
    topPriority.forEach(function(item, i) {
        var d = vurderingData[item.key];
        html += '<div class="anbefaling-kort">';
        html += '<div class="anbefaling-nr">' + (i + 1) + '</div>';
        html += '<div class="anbefaling-indhold">';
        html += '<h4>' + d.ikon + ' ' + d.label + '</h4>';
        html += '<p class="anbefaling-score">Din score: ' + item.avg + '/10</p>';

        // Find relevant exercise
        var kat = exerciseMap[item.key] || 'regulering';
        var ex = null;
        for (var e = 0; e < exercises.length; e++) {
            if (exercises[e].kategori === kat) { ex = exercises[e]; break; }
        }
        if (ex) {
            html += '<p class="anbefaling-oevelse">Prøv øvelsen: <a href="javascript:void(0)" onclick="showExercises()">' + ex.title + '</a></p>';
        }

        html += '<p class="anbefaling-tema"><a href="javascript:void(0)" onclick="showCircleView(\x27' + item.key + '\x27)">Udforsk ' + d.label + ' i cirkelmodellen \u2192</a></p>';
        html += '</div>';
        html += '</div>';
    });
    html += '</div>';

    html += '</div>';
    return html;
}

function showVurderingHistorik() {
    currentView = 'vurdering-historik';
    var alle = getVurderinger();
    var keys = Object.keys(vurderingData);

    var html = '<div class="vurdering-historik">';
    html += '<h2>Din udvikling over tid</h2>';

    if (alle.length === 0) {
        html += '<p>Du har ingen vurderinger endnu. <a href="javascript:void(0)" onclick="startVurdering()">Start din første vurdering</a></p>';
        html += '</div>';
        document.getElementById('info-content').innerHTML = html;
        return;
    }

    // ── Udviklingsgraf (SVG) ──
    if (alle.length >= 2) {
        html += buildUdviklingsgraf(alle);
    }

    // ── Sammenligning siden sidst ──
    if (alle.length >= 2) {
        html += buildSammenligning(alle);
    }

    // ── Liste over vurderinger ──
    html += '<h3>Alle vurderinger</h3>';
    html += '<div class="historik-liste">';
    for (var i = alle.length - 1; i >= 0; i--) {
        var e = alle[i];
        var totalAvg = 0;
        keys.forEach(function(k) {
            var s = e.scores[k];
            if (s) totalAvg += (s.generel + s.vinkler[0] + s.vinkler[1] + s.vinkler[2]) / 4;
        });
        totalAvg = Math.round(totalAvg / keys.length * 10) / 10;

        html += '<div class="historik-entry" onclick="showVurderingResultat(getVurderinger()[' + i + '])">';
        html += '<div class="historik-dato">' + e.dato + (e.tid ? ' kl. ' + e.tid : '') + '</div>';
        html += '<div class="historik-avg">Gennemsnit: <strong>' + totalAvg + '</strong>/10</div>';

        // Mini inline bars
        html += '<div class="historik-mini-bars">';
        keys.forEach(function(k) {
            var s = e.scores[k];
            if (!s) return;
            var avg = (s.generel + s.vinkler[0] + s.vinkler[1] + s.vinkler[2]) / 4;
            var d = vurderingData[k];
            html += '<div class="historik-mini-bar" title="' + d.label + ': ' + (Math.round(avg*10)/10) + '">';
            html += '<div class="historik-mini-fill" style="height:' + (avg * 10) + '%;background:' + d.farve + '"></div>';
            html += '</div>';
        });
        html += '</div>';

        html += '</div>';
    }
    html += '</div>';

    // Nav
    html += '<div class="vurdering-nav">';
    html += '<button class="vurdering-btn-back" onclick="showDynamics()">← Tilbage</button>';
    html += '<button class="vurdering-btn-next" onclick="startVurdering()">Ny vurdering</button>';
    html += '</div>';

    html += '</div>';
    document.getElementById('info-content').innerHTML = html;
    document.getElementById('info-panel').scrollTop = 0;
}

function buildUdviklingsgraf(alle) {
    var keys = Object.keys(vurderingData);
    var w = 300, h = 180, padL = 30, padR = 10, padT = 10, padB = 30;
    var plotW = w - padL - padR;
    var plotH = h - padT - padB;
    var n = alle.length;

    var svg = '<div class="udvikling-graf-container">';
    svg += '<h3>Udvikling over tid</h3>';
    svg += '<svg viewBox="0 0 ' + w + ' ' + h + '" class="udvikling-svg">';

    // Y-axis grid
    for (var y = 0; y <= 10; y += 2) {
        var yy = padT + plotH - (y / 10 * plotH);
        svg += '<line x1="' + padL + '" y1="' + yy + '" x2="' + (w - padR) + '" y2="' + yy + '" stroke="#E8E5ED" stroke-width="0.5"/>';
        svg += '<text x="' + (padL - 4) + '" y="' + (yy + 3) + '" text-anchor="end" fill="#918B9A" font-size="8" font-family="Georgia">' + y + '</text>';
    }

    // X-axis labels (dates)
    for (var i = 0; i < n; i++) {
        var xx = padL + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW);
        var label = alle[i].dato.slice(5);
        svg += '<text x="' + xx + '" y="' + (h - 5) + '" text-anchor="middle" fill="#918B9A" font-size="7" font-family="Georgia">' + label + '</text>';
    }

    // Lines per dimension
    keys.forEach(function(k) {
        var d = vurderingData[k];
        var points = [];
        for (var i = 0; i < n; i++) {
            var s = alle[i].scores[k];
            if (!s) continue;
            var avg = (s.generel + s.vinkler[0] + s.vinkler[1] + s.vinkler[2]) / 4;
            var xx = padL + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW);
            var yy = padT + plotH - (avg / 10 * plotH);
            points.push(Math.round(xx) + ',' + Math.round(yy));
        }
        if (points.length > 1) {
            svg += '<polyline points="' + points.join(' ') + '" fill="none" stroke="' + d.farve + '" stroke-width="1.5" stroke-linecap="round"/>';
        }
        // Dots
        points.forEach(function(p) {
            var parts = p.split(',');
            svg += '<circle cx="' + parts[0] + '" cy="' + parts[1] + '" r="3" fill="' + d.farve + '" stroke="white" stroke-width="1"/>';
        });
    });

    svg += '</svg>';

    // Legend
    svg += '<div class="udvikling-legend">';
    keys.forEach(function(k) {
        var d = vurderingData[k];
        svg += '<span class="udvikling-legend-item"><span class="udvikling-legend-dot" style="background:' + d.farve + '"></span>' + d.label.split(' ')[0] + '</span>';
    });
    svg += '</div>';

    svg += '</div>';
    return svg;
}

function buildSammenligning(alle) {
    var keys = Object.keys(vurderingData);
    var seneste = alle[alle.length - 1];
    var forrige = alle[alle.length - 2];

    var html = '<div class="sammenligning">';
    html += '<h3>Ændringer siden sidst</h3>';
    html += '<p class="sammenligning-periode">' + forrige.dato + ' → ' + seneste.dato + '</p>';

    html += '<div class="sammenligning-liste">';
    keys.forEach(function(k) {
        var s1 = forrige.scores[k];
        var s2 = seneste.scores[k];
        if (!s1 || !s2) return;
        var avg1 = Math.round((s1.generel + s1.vinkler[0] + s1.vinkler[1] + s1.vinkler[2]) / 4 * 10) / 10;
        var avg2 = Math.round((s2.generel + s2.vinkler[0] + s2.vinkler[1] + s2.vinkler[2]) / 4 * 10) / 10;
        var diff = Math.round((avg2 - avg1) * 10) / 10;
        var d = vurderingData[k];
        var cls = diff > 0 ? 'positiv' : (diff < 0 ? 'negativ' : 'neutral');

        html += '<div class="sammenligning-row ' + cls + '">';
        html += '<span class="sammenligning-ikon" style="color:' + d.farve + '">' + d.ikon + '</span>';
        html += '<span class="sammenligning-label">' + d.label + '</span>';
        html += '<span class="sammenligning-scores">' + avg1 + ' → ' + avg2 + '</span>';
        html += '<span class="sammenligning-diff">' + (diff > 0 ? '+' : '') + diff + '</span>';
        html += '</div>';
    });
    html += '</div>';

    // Samlet vurdering i ord
    var totalDiff = 0;
    var count = 0;
    keys.forEach(function(k) {
        var s1 = forrige.scores[k]; var s2 = seneste.scores[k];
        if (!s1 || !s2) return;
        var a1 = (s1.generel + s1.vinkler[0] + s1.vinkler[1] + s1.vinkler[2]) / 4;
        var a2 = (s2.generel + s2.vinkler[0] + s2.vinkler[1] + s2.vinkler[2]) / 4;
        totalDiff += (a2 - a1);
        count++;
    });
    var avgDiff = count > 0 ? Math.round(totalDiff / count * 10) / 10 : 0;

    html += '<div class="sammenligning-opsummering">';
    if (avgDiff > 0.5) {
        html += '<p>Dit nervesystem viser positiv udvikling. Den gennemsnitlige forbedring er <strong>+' + avgDiff + '</strong> point. Bliv ved med det du gør.</p>';
    } else if (avgDiff < -0.5) {
        html += '<p>Dine scores er faldet en smule (gennemsnit: <strong>' + avgDiff + '</strong>). Det er helt normalt — regulering er ikke lineær. Vær tålmodig med dig selv.</p>';
    } else {
        html += '<p>Dine scores er stabile. Stabilitet er også fremgang — det betyder at dit nervesystem holder fast i de ressourcer det har opbygget.</p>';
    }
    html += '</div>';

    html += '</div>';
    return html;
}

function setupCircleClicks() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            const id = circle.dataset.id;
            showCircleView(id);
        });
    });
}

function showCircleView(circleId) {
    currentView = 'circle';
    updateBottomNavActive('hjem');
    currentCircle = circleId;
    clearAllActive();
    
    if (circleId !== 'nervesystem') {
        const circle = document.querySelector(`[data-id="${circleId}"]`);
        if (circle) {
            circle.classList.add('active');
            const texts = document.querySelectorAll(`[data-circle="${circleId}"]`);
            texts.forEach(t => {
                t.style.fill = 'white';
                t.setAttribute('fill', 'white');
            });
        }
    }
    
    const sourceData = currentEducation ? educations[currentEducation] : themes[currentTheme];
    const circleData = sourceData.circles[circleId];
    
    if (!circleData || !circleData[currentMode]) {
        document.getElementById('info-content').innerHTML = `
            <h2>Indhold kommer snart</h2>
            <p>Dette tema er under udvikling. Prøv "Angst" temaet for at se fuldt indhold.</p>
            ${buildActionBar()}
        `;
        setupActionButtons();
        // Scroll to info panel
        const infoPanel = document.getElementById('info-panel');
        infoPanel.scrollTop = 0;
        requestAnimationFrame(() => {
            const rect = infoPanel.getBoundingClientRect();
            const offset = 80;
            window.scrollTo({
                top: window.pageYOffset + rect.top - offset,
                behavior: 'smooth'
            });
        });
        return;
    }
    
    const data = circleData[currentMode];
    const connectedCircles = getConnectedCircles(circleId);
    
    let accordionItems = '';
    var autoExpand = '';
    try { if (localStorage.getItem('pref-auto-expand') === '1') autoExpand = ' open'; } catch(e) {}
    connectedCircles.forEach(targetId => {
        const key1 = `${circleId}-${targetId}`;
        const key2 = `${targetId}-${circleId}`;
        const connectionData = sourceData.connections ? (sourceData.connections[key1] || sourceData.connections[key2]) : null;
        
        if (connectionData && connectionData[currentMode]) {
            const targetName = circleNames[targetId];
            const dynamikText = connectionData[currentMode];
            
            accordionItems += `
                <div class="accordion-item${autoExpand}" data-target-circle="${targetId}">
                    <div class="accordion-header">
                        <span class="accordion-header-text">${circleNames[circleId]} ↔ ${targetName}</span>
                        <span class="accordion-chevron">▸</span>
                    </div>
                    <div class="accordion-body">
                        <p>${dynamikText}</p>
                    </div>
                </div>
            `;
        }
    });

    const connectionsSection = accordionItems ? `
        <div class="connection-list">
            <p class="accordion-section-title">Sammenhænge</p>
            ${accordionItems}
        </div>
    ` : '';

    // Use dedicated fordybelse field if available, otherwise use full text
    var overviewText = data.text;
    var deeperText = data.fordybelse || '';

    var tabsHTML = '<div class="content-tabs">' +
        '<button class="content-tab active" data-tab="overblik">Overblik</button>' +
        (deeperText ? '<button class="content-tab" data-tab="fordybelse">Fordybelse</button>' : '') +
        (accordionItems ? '<button class="content-tab" data-tab="forbindelser">Forbindelser</button>' : '') +
        '</div>';

    var overviewPanel = '<div class="tab-panel active" data-panel="overblik">' +
        '<p>' + overviewText + '</p>' +
        '</div>';

    var deeperPanel = deeperText ? '<div class="tab-panel" data-panel="fordybelse">' +
        '<p>' + deeperText + '</p>' +
        '</div>' : '';

    var connectionsPanel = accordionItems ? '<div class="tab-panel" data-panel="forbindelser">' +
        '<p class="accordion-section-title">Dynamiske sammenh\u00e6nge</p>' +
        accordionItems +
        '</div>' : '';

    document.getElementById('info-content').innerHTML =
        '<h2>' + data.title + '</h2>' +
        tabsHTML +
        overviewPanel +
        deeperPanel +
        connectionsPanel +
        buildActionBar();

    // Wire up tab clicks
    document.querySelectorAll('#info-content .content-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('#info-content .content-tab').forEach(function(t) { t.classList.remove('active'); });
            document.querySelectorAll('#info-content .tab-panel').forEach(function(p) { p.classList.remove('active'); });
            tab.classList.add('active');
            var panel = document.querySelector('#info-content .tab-panel[data-panel="' + tab.dataset.tab + '"]');
            if (panel) panel.classList.add('active');
        });
    });

    setupActionButtons();

    // Scroll to info panel so the user sees the content
    const infoPanel = document.getElementById('info-panel');
    requestAnimationFrame(() => {
        infoPanel.scrollTop = 0;
        requestAnimationFrame(() => {
            const rect = infoPanel.getBoundingClientRect();
            const offset = 80;
            window.scrollTo({
                top: window.pageYOffset + rect.top - offset,
                behavior: 'smooth'
            });
        });
    });
}

function getConnectedCircles(circleId) {
    const allCircles = ['polyvagal', 'tilknytning', 'kropsterapi', 'psykobiologi', 'traumer', 'relation'];
    if (circleId === 'nervesystem') {
        return allCircles;
    }
    return ['nervesystem'].concat(allCircles.filter(id => id !== circleId));
}

function setupConnectionClicks() {
    const connections = document.querySelectorAll('.connection');
    connections.forEach(line => {
        line.addEventListener('click', (e) => {
            e.stopPropagation();
            const from = line.dataset.from;
            const to = line.dataset.to;
            const circleToShow = from === 'nervesystem' ? to : from;
            showCircleView(circleToShow);
        });
    });
}

function clearAllActive() {
    document.querySelectorAll('.circle:not([data-id="nervesystem"])').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.connection').forEach(c => c.classList.remove('active'));
    
    document.querySelectorAll('.outer-text').forEach(t => {
        t.style.fill = '#8A7F93';
        t.setAttribute('fill', '#8A7F93');
    });
}

// ===== HAMBURGER MENU =====
function setupMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuClose = document.getElementById('menu-close');

    if (!menuBtn || !menuOverlay) return;

    menuBtn.addEventListener('click', () => {
        menuOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    function closeMenu() {
        menuOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    menuClose.addEventListener('click', closeMenu);

    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) closeMenu();
    });

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const menuAction = item.dataset.menu;
            closeMenu();
            showMenuContent(menuAction);
        });
    });
}

function showMenuContent(action) {
    const content = {
        about: {
            title: 'Om Annemarie Clement',
            html: `
                <p class="menu-intro">Pas p\u00e5 dit nervesystem \u2014 det passer p\u00e5 dig.</p>
                <div class="menu-section">
                    <h3>20 \u00e5rs erfaring</h3>
                    <p>Annemarie Clement er nervesystemsterapeut, supervisor, psykoterapeut MPF og biologisk traumeterapeut med en professionsbachelor i psykomotorik (afsp\u00e6ndingsp\u00e6dagogik). Med 20 \u00e5rs erfaring som selvst\u00e6ndig psykoterapeut har hun viet sit faglige liv til at forst\u00e5 det system der ligger under alt det vi behandler.</p>
                    <p>Hendes rejse begyndte med en nysgerrighed: <em>Hvorfor reagerer vi som vi g\u00f8r?</em> Det sp\u00f8rgsm\u00e5l f\u00f8rte hende gennem uddannelser i polyvagal teori, tilknytningsm\u00f8nstre og traumebearbejdning \u2014 og ind i en helhedsforst\u00e5else der i dag b\u00e6rer hele hendes arbejde.</p>
                </div>
                <div class="menu-section">
                    <h3>Behandling, undervisning og supervision</h3>
                    <p>Fra sin klinik i Hellerup arbejder Annemarie med individuel kropsbaseret nervesystemsterapi \u2014 p\u00e5 briks, med fasciel frig\u00f8relse, \u00e5ndedr\u00e6tsarbejde og co-regulering. Hun underviser kommende terapeuter og ledere gennem sine certificeringsuddannelser, og tilbyder supervision til psykoterapeuter og psykologer.</p>
                    <p>Annemarie er ogs\u00e5 foredragsholder og arbejder med virksomheder omkring mental trivsel og ledelse med nervesystemet i centrum.</p>
                </div>
                <div class="menu-section">
                    <h3>Det der driver hende</h3>
                    <p>For Annemarie handler det om <strong>n\u00e6rv\u00e6r, livsgl\u00e6de, begejstring og nysgerrighed</strong>. Hun tror p\u00e5 at forandring sker nedefra og op \u2014 gennem kroppen, ikke kun gennem forstanden. At nervesystemet er dit fundament, og at det skal n\u00e6res, \u00e6res og plejes.</p>
                    <p><em>Selv n\u00e5r livet er sv\u00e6rt, har vi et valg.</em></p>
                </div>
            `
        },
        method: {
            title: 'Min metode',
            html: `
                <p class="menu-intro">Nervesystemsterapi er ikke \u00e9n teknik \u2014 det er en hel m\u00e5de at forst\u00e5 mennesket p\u00e5.</p>
                <div class="menu-section">
                    <h3>Cirkelmodellen</h3>
                    <p>Min tilgang bygger p\u00e5 en dynamisk cirkelmodel med syv dimensioner der alle h\u00e6nger sammen: Nervesystemregulering i centrum, omgivet af Polyvagal teori, Tilknytningsm\u00f8nstre, Kropsterapi & Behandling, Psykobiologi, Traumer & Dissociation, og Terapeutisk Relation.</p>
                    <p>Disse dimensioner er ikke adskilte skuffer \u2014 de er levende forbindelser. Forandring i \u00e9n dimension sender b\u00f8lger gennem alle de andre. Det er pr\u00e6cis derfor modellen er en <em>cirkel</em> og ikke en liste.</p>
                </div>
                <div class="menu-section">
                    <h3>Hvorfor det virker</h3>
                    <p>De fleste metoder fokuserer p\u00e5 \u00e9t aspekt \u2014 enten kroppen, tankerne eller f\u00f8lelserne. Men dit nervesystem skelner ikke mellem dem. Smerte i kroppen p\u00e5virker dine tanker. Utrygge relationer p\u00e5virker din biologi. Ubearbejdede traumer p\u00e5virker alt.</p>
                    <p>Ved at arbejde med hele cirklen \u2014 ikke bare et udsnit \u2014 skaber vi forandringer der holder. Forandringer du kan m\u00e6rke. I din krop, i dine relationer, i din hverdag.</p>
                </div>
                <div class="menu-section">
                    <h3>Hvad du kan her</h3>
                    <p>I appen kan du udforske hver dimension \u2014 se hvordan de h\u00e6nger sammen, l\u00e6s om dem fra dit eget perspektiv, og pr\u00f8v \u00f8velser der bringer teorien ned i kroppen. Tryk p\u00e5 en cirkel og begynd din udforskning.</p>
                </div>
            `
        },
        behandling: {
            title: 'Kom i behandling',
            html: `
                <p class="menu-intro">Nervesystemsterapi er en kropsbaseret tilgang der arbejder med dit nervesystem som indgang til dyb og varig forandring.</p>
                <div class="menu-section">
                    <h3>Hvad sker der i en session?</h3>
                    <p>Behandlingen foreg\u00e5r p\u00e5 briks i Annemaries klinik i Hellerup. Gennem fasciel frig\u00f8relse, \u00e5ndedr\u00e6tsarbejde og kropslig opm\u00e6rksomhed arbejder I sammen med at bringe dit nervesystem tilbage i balance. Annemaries eget regulerede nervesystem fungerer som co-regulerende anker \u2014 du m\u00e6rker det som en dyb tryghed i rummet.</p>
                    <p>Tilgangen er bottom-up: vi starter med kroppen, ikke tankerne. Det er her de dybeste forandringer sker.</p>
                </div>
                <div class="menu-section">
                    <h3>Hvem kan have gl\u00e6de af det?</h3>
                    <p>Mennesker der oplever stress, angst, traumer, overv\u00e6ldelse, tr\u00e6thed, psykosomatiske symptomer, smerter, s\u00f8vnproblemer, fordøjelsesbesvær, hovedpine, ensomhed, depression eller en f\u00f8lelse af meningsl\u00f8shed.</p>
                    <p>Kort sagt: alle der m\u00e6rker at noget fundamentalt er ude af balance \u2014 men ikke helt ved hvad eller hvordan.</p>
                </div>
                <div class="menu-section">
                    <h3>Praktisk information</h3>
                    <p><strong>Klinik:</strong> Marievej 2, 1. tv \u2014 2900 Hellerup</p>
                    <p><strong>Beliggenhed:</strong> T\u00e6t p\u00e5 vandet, p\u00e5 en sidegade til Strandvejen</p>
                    <p><strong>Booking:</strong> Ring <a href="tel:+4522544542" style="color: var(--primary);">+45 2254 4542</a> eller skriv til <a href="mailto:annemarie@annemarieclement.dk" style="color: var(--primary);">annemarie@annemarieclement.dk</a></p>
                    <p>L\u00e6s mere og book tid p\u00e5 <a href="https://annemarieclement.dk" target="_blank" rel="noopener" style="color: var(--primary); font-weight: 600;">annemarieclement.dk</a></p>
                </div>
            `
        },
        supervision: {
            title: 'Supervision',
            html: `
                <p class="menu-intro">Faglig sparring der styrker din terapeutiske praksis \u2014 med nervesystemet som omdrejningspunkt.</p>
                <div class="menu-section">
                    <h3>For hvem?</h3>
                    <p>Annemarie tilbyder b\u00e5de gruppe- og individuel supervision til kvalificerede psykoterapeuter, psykologer og terapeuter under uddannelse. Supervisionen er forankret i nervesystemsterapi og integrerer polyvagal teori, tilknytningsm\u00f8nstre og kropsbaseret arbejde.</p>
                </div>
                <div class="menu-section">
                    <h3>Hvad f\u00e5r du?</h3>
                    <p>Et trygt fagligt rum hvor du kan bringe dine cases, dine tvivl og dine fornemmelser. Supervision hos Annemarie handler ikke kun om klienten \u2014 den handler ogs\u00e5 om <em>dig som terapeut</em>. Om hvad der sker i dit eget nervesystem i m\u00f8det med klienten.</p>
                    <p>Du f\u00e5r hj\u00e6lp til at se m\u00f8nstre, udvide din tolerancezone og arbejde med den co-regulering der er kernen i terapeutisk forandring.</p>
                </div>
                <div class="menu-section">
                    <h3>Kontakt</h3>
                    <p>Skriv til <a href="mailto:annemarie@annemarieclement.dk" style="color: var(--primary);">annemarie@annemarieclement.dk</a> eller ring <a href="tel:+4522544542" style="color: var(--primary);">+45 2254 4542</a> for at h\u00f8re mere om muligheder og priser.</p>
                </div>
            `
        },
        contact: {
            title: 'Kontakt',
            html: `
                <p class="menu-intro">Du er altid velkommen til at r\u00e6kke ud \u2014 uanset om du s\u00f8ger behandling, overvejer en uddannelse, eller bare har et sp\u00f8rgsm\u00e5l.</p>

                <div class="contact-cards">
                    <a href="https://annemarieclement.dk" target="_blank" rel="noopener" class="contact-card">
                        <span class="contact-card-icon">🌐</span>
                        <div class="contact-card-info">
                            <div class="contact-card-label">Hjemmeside</div>
                            <div class="contact-card-value">annemarieclement.dk</div>
                        </div>
                        <span class="contact-card-arrow">›</span>
                    </a>
                    <a href="mailto:annemarie@annemarieclement.dk" class="contact-card">
                        <span class="contact-card-icon">✉</span>
                        <div class="contact-card-info">
                            <div class="contact-card-label">E-mail</div>
                            <div class="contact-card-value">annemarie@annemarieclement.dk</div>
                        </div>
                        <span class="contact-card-arrow">›</span>
                    </a>
                    <a href="tel:+4522544542" class="contact-card">
                        <span class="contact-card-icon">📞</span>
                        <div class="contact-card-info">
                            <div class="contact-card-label">Telefon</div>
                            <div class="contact-card-value">+45 2254 4542</div>
                        </div>
                        <span class="contact-card-arrow">›</span>
                    </a>
                    <a href="https://www.instagram.com/annemarieclement" target="_blank" rel="noopener" class="contact-card">
                        <span class="contact-card-icon">📷</span>
                        <div class="contact-card-info">
                            <div class="contact-card-label">Instagram</div>
                            <div class="contact-card-value">@annemarieclement</div>
                        </div>
                        <span class="contact-card-arrow">›</span>
                    </a>
                    <a href="https://linkedin.com/in/annemarie-clement-ba703731" target="_blank" rel="noopener" class="contact-card">
                        <span class="contact-card-icon">💼</span>
                        <div class="contact-card-info">
                            <div class="contact-card-label">LinkedIn</div>
                            <div class="contact-card-value">Annemarie Clement</div>
                        </div>
                        <span class="contact-card-arrow">›</span>
                    </a>
                </div>

                <div class="menu-section" style="margin-top: 28px;">
                    <h3>Bes\u00f8g hjemmesiden</h3>
                    <p>P\u00e5 <strong>annemarieclement.dk</strong> kan du l\u00e6se mere om behandlinger, uddannelsesprogrammer og kommende kurser. Her kan du ogs\u00e5 booke en tid eller tilmelde dig nyhedsbrevet.</p>
                </div>
            `
        },
        privacy: {
            title: 'Privatlivspolitik',
            html: `
                <p class="menu-intro">Din tryghed er vigtig \u2014 ogs\u00e5 digitalt. Denne app er bygget med respekt for dit privatliv.</p>
                <div class="menu-section">
                    <h3>Ingen sporing, ingen data</h3>
                    <p>Denne app indsamler <strong>ingen personlige data</strong>. Der bruges ingen cookies, ingen tracking, ingen analytics og ingen tredjepartstjenester. Intet forlader din enhed.</p>
                </div>
                <div class="menu-section">
                    <h3>Alt forbliver hos dig</h3>
                    <p>Al indhold vises lokalt i din browser. Der sendes ingen information til eksterne servere. Dine valg, dine klik og din udforskning er helt din egen.</p>
                    <p>Appen fungerer offline efter f\u00f8rste indl\u00e6sning \u2014 ligesom et opslagsv\u00e6rk du altid har ved h\u00e5nden.</p>
                </div>
                <div class="menu-section">
                    <h3>Hvorfor det er vigtigt</h3>
                    <p>N\u00e5r du udforsker emner som traumer, tilknytning og nervesystemregulering, skal du ikke bekymre dig om at nogen kigger med. Det rum vi skaber her er dit eget.</p>
                </div>
            `
        },
        settings: {
            title: 'Indstillinger',
            html: `
                <div class="menu-section">
                    <h3>Visning</h3>
                    <div class="menu-setting">
                        <div class="setting-info">
                            <span class="setting-label">Start som fagfolk</span>
                            <span class="setting-desc">Vis fagligt perspektiv som standard</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="setting-fagfolk">
                            <span class="toggle-track"><span class="toggle-thumb"></span></span>
                        </label>
                    </div>
                    <div class="menu-setting">
                        <div class="setting-info">
                            <span class="setting-label">Vis sammenh\u00e6nge \u00e5bne</span>
                            <span class="setting-desc">Fold automatisk sammenh\u00e6nge ud ved cirkelklik</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="setting-auto-expand">
                            <span class="toggle-track"><span class="toggle-thumb"></span></span>
                        </label>
                    </div>
                </div>
                <div class="menu-section">
                    <h3>Oplevelse</h3>
                    <div class="menu-setting">
                        <div class="setting-info">
                            <span class="setting-label">Bloom-animation</span>
                            <span class="setting-desc">Anim\u00e9r cirkler ved sideindl\u00e6sning</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="setting-bloom" checked>
                            <span class="toggle-track"><span class="toggle-thumb"></span></span>
                        </label>
                    </div>
                    <div class="menu-setting">
                        <div class="setting-info">
                            <span class="setting-label">Vis onboarding igen</span>
                            <span class="setting-desc">Se introduktionen n\u00e6ste gang du \u00e5bner appen</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="setting-onboarding">
                            <span class="toggle-track"><span class="toggle-thumb"></span></span>
                        </label>
                    </div>
                </div>
                <div class="menu-section">
                    <h3>Om appen</h3>
                    <p>Nervesystemsterapi-appen er udviklet som et digitalt opslagsv\u00e6rk og l\u00e6ringsredskab til Annemarie Clements terapeutiske univers.</p>
                    <p class="setting-version">Version 1.0</p>
                </div>
            `
        }
    };

    if (action === 'bookmarks') {
        showBookmarks();
        return;
    }
    if (action === 'gave') {
        showGaveEssay();
        return;
    }

    const c = content[action];
    if (!c) return;

    document.getElementById('info-content').innerHTML = '<h2>' + c.title + '</h2>' + c.html + '<div style="margin-top: 30px; text-align: center;"><button onclick="resetToWelcome()" class="back-btn">\u2191 Tilbage til toppen</button></div>';

    // Wire up settings toggles if this is the settings view
    if (action === 'settings') {
        setupSettingsToggles();
    }

    const infoPanel = document.getElementById('info-panel');
    requestAnimationFrame(() => {
        infoPanel.scrollTop = 0;
        requestAnimationFrame(() => {
            const rect = infoPanel.getBoundingClientRect();
            const offset = 80;
            window.scrollTo({
                top: window.pageYOffset + rect.top - offset,
                behavior: 'smooth'
            });
        });
    });
}

function setupSettingsToggles() {
    // Start som fagfolk
    const fagfolkToggle = document.getElementById('setting-fagfolk');
    if (fagfolkToggle) {
        try { fagfolkToggle.checked = localStorage.getItem('pref-fagfolk') === '1'; } catch(e) {}
        fagfolkToggle.addEventListener('change', function() {
            try { localStorage.setItem('pref-fagfolk', this.checked ? '1' : '0'); } catch(e) {}
        });
    }

    // Auto-expand sammenhænge
    const expandToggle = document.getElementById('setting-auto-expand');
    if (expandToggle) {
        try { expandToggle.checked = localStorage.getItem('pref-auto-expand') === '1'; } catch(e) {}
        expandToggle.addEventListener('change', function() {
            try { localStorage.setItem('pref-auto-expand', this.checked ? '1' : '0'); } catch(e) {}
        });
    }

    // Bloom animation
    const bloomToggle = document.getElementById('setting-bloom');
    if (bloomToggle) {
        try {
            const bloomPref = localStorage.getItem('pref-bloom');
            bloomToggle.checked = bloomPref === null || bloomPref === '1';
        } catch(e) {}
        bloomToggle.addEventListener('change', function() {
            try { localStorage.setItem('pref-bloom', this.checked ? '1' : '0'); } catch(e) {}
        });
    }

    // Vis onboarding igen
    const onboardingToggle = document.getElementById('setting-onboarding');
    if (onboardingToggle) {
        onboardingToggle.addEventListener('change', function() {
            if (this.checked) {
                try { localStorage.removeItem('onboarding-seen'); } catch(e) {}
            } else {
                try { localStorage.setItem('onboarding-seen', '1'); } catch(e) {}
            }
        });
    }
}

// ===== NEWSLETTER & GAVE =====
function setupNewsletter() {
    var form = document.getElementById('newsletter-form');
    var gaveItem = document.getElementById('menu-gave-item');
    var newsletterBox = document.getElementById('menu-newsletter');
    // Show gave menu item if already subscribed
    try {
        if (localStorage.getItem('newsletter-subscribed') === '1') {
            if (gaveItem) gaveItem.style.display = '';
            if (newsletterBox) newsletterBox.innerHTML = '<p class="menu-newsletter-done">Du er tilmeldt nyhedsbrevet.</p>';
        }
    } catch(e) {}
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var emailInput = document.getElementById('newsletter-email');
            var email = emailInput ? emailInput.value.trim() : '';
            if (!email) return;
            // Basic email format check
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                if (newsletterBox) {
                    var errP = newsletterBox.querySelector('.menu-newsletter-error');
                    if (!errP) {
                        errP = document.createElement('p');
                        errP.className = 'menu-newsletter-error';
                        errP.style.cssText = 'color:#a94442;font-size:0.85em;margin:0.3em 0 0;';
                        newsletterBox.appendChild(errP);
                    }
                    errP.textContent = 'Indtast venligst en gyldig email-adresse.';
                }
                return;
            }
            // Send til Supabase hvis konfigureret
            if (window.SupabaseClient && SupabaseClient.isConfigured()) {
                var btn = form.querySelector('button');
                if (btn) { btn.disabled = true; btn.textContent = 'Sender...'; }
                SupabaseClient.subscribeEmail(email).then(function(result) {
                    if (result.error) {
                        if (btn) { btn.disabled = false; btn.textContent = 'Tilmeld'; }
                        if (newsletterBox) {
                            var errP = newsletterBox.querySelector('.menu-newsletter-error');
                            if (!errP) {
                                errP = document.createElement('p');
                                errP.className = 'menu-newsletter-error';
                                errP.style.cssText = 'color:#a94442;font-size:0.85em;margin:0.3em 0 0;';
                                newsletterBox.appendChild(errP);
                            }
                            errP.textContent = 'Noget gik galt. Prøv igen.';
                        }
                    } else {
                        try { localStorage.setItem('newsletter-subscribed', '1'); } catch(ex) {}
                        if (gaveItem) gaveItem.style.display = '';
                        if (newsletterBox) newsletterBox.innerHTML = '<p class="menu-newsletter-done">Tak for din tilmelding!</p>';
                        document.getElementById('menu-overlay').classList.remove('open');
                        document.body.style.overflow = '';
                        showGaveEssay();
                    }
                });
            } else {
                // Supabase ikke konfigureret — gem lokalt og vis gave alligevel
                try { localStorage.setItem('newsletter-subscribed', '1'); } catch(ex) {}
                if (gaveItem) gaveItem.style.display = '';
                if (newsletterBox) newsletterBox.innerHTML = '<p class="menu-newsletter-done">Tak! Din gave venter nedenfor.</p>';
                document.getElementById('menu-overlay').classList.remove('open');
                document.body.style.overflow = '';
                showGaveEssay();
            }
        });
    }
}

// ===== NOTIFIKATIONER =====
function setupNotifications() {
    var checkbox = document.getElementById('notif-checkbox');
    var container = document.getElementById('menu-notifications');
    if (!checkbox || !container) return;

    // Restore saved state
    var isEnabled = false;
    try { isEnabled = localStorage.getItem('notif-enabled') === '1'; } catch(e) {}
    checkbox.checked = isEnabled;
    if (isEnabled) {
        showNotifStatus(container, 'Notifikationer er slået til');
    }

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            // Request notification permission
            if ('Notification' in window) {
                Notification.requestPermission().then(function(permission) {
                    if (permission === 'granted') {
                        try { localStorage.setItem('notif-enabled', '1'); } catch(e) {}
                        showNotifStatus(container, 'Notifikationer er slået til');
                        registerNotificationCheck();
                    } else {
                        checkbox.checked = false;
                        showNotifStatus(container, 'Browseren tillader ikke notifikationer. Tjek dine indstillinger.');
                    }
                });
            } else {
                checkbox.checked = false;
                showNotifStatus(container, 'Din browser understøtter ikke notifikationer.');
            }
        } else {
            try { localStorage.setItem('notif-enabled', '0'); } catch(e) {}
            removeNotifStatus(container);
        }
    });

    // If already enabled, start periodic check
    if (isEnabled && 'Notification' in window && Notification.permission === 'granted') {
        registerNotificationCheck();
    }
}

function showNotifStatus(container, text) {
    removeNotifStatus(container);
    var p = document.createElement('p');
    p.className = 'menu-notifications-status';
    p.textContent = text;
    container.appendChild(p);
}

function removeNotifStatus(container) {
    var existing = container.querySelector('.menu-notifications-status');
    if (existing) existing.remove();
}

function registerNotificationCheck() {
    // Check for new notifications on load and periodically
    checkForNewNotifications();
    // Check every 30 minutes while app is open
    setInterval(checkForNewNotifications, 30 * 60 * 1000);
}

function checkForNewNotifications() {
    var lastSeen = '';
    try { lastSeen = localStorage.getItem('notif-last-seen') || ''; } catch(e) {}

    // Brug Supabase hvis konfigureret, ellers fald tilbage til notifications.json
    var notifPromise;
    if (window.SupabaseClient && SupabaseClient.isConfigured()) {
        notifPromise = SupabaseClient.getNotifications().then(function(result) {
            return result.data || [];
        });
    } else {
        notifPromise = fetch('notifications.json?t=' + Date.now())
            .then(function(r) { return r.ok ? r.json() : Promise.reject(); })
            .then(function(data) { return data.notifications || []; })
            .catch(function() { return []; });
    }

    notifPromise.then(function(notifications) {
        if (!notifications.length) return;
        var latest = notifications[0];
        if (latest.id && latest.id !== lastSeen) {
            try { localStorage.setItem('notif-last-seen', latest.id); } catch(e) {}
            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification(latest.title || 'Nyt fra Annemarie', {
                    body: latest.body || '',
                    icon: 'hero.jpg',
                    tag: 'clement-' + latest.id
                });
            }
        }
    });
}

function showGaveEssay() {
    currentView = 'gave';
    clearAllActive();
    updateBottomNavActive('');

    var ill1 = '<div class="gave-illustration"><svg viewBox="0 0 200 140"><rect width="200" height="140" rx="16" fill="#F0EEF3"/><circle cx="100" cy="60" r="30" fill="none" stroke="#8A7F93" stroke-width="1.5" opacity="0.6"/><circle cx="100" cy="60" r="18" fill="none" stroke="#8A7F93" stroke-width="1" opacity="0.4"/><circle cx="100" cy="60" r="6" fill="#8A7F93" opacity="0.3"/><path d="M60 105 C80 85, 120 85, 140 105" fill="none" stroke="#b8956a" stroke-width="1.2" opacity="0.5"/></svg></div>';

    var ill2 = '<div class="gave-illustration"><svg viewBox="0 0 200 140"><rect width="200" height="140" rx="16" fill="#F0EEF3"/><line x1="40" y1="110" x2="160" y2="110" stroke="#8A7F93" stroke-width="1" opacity="0.3"/><path d="M40 110 Q60 40, 100 70 Q140 100, 160 50" fill="none" stroke="#8A7F93" stroke-width="1.8" opacity="0.5"/><circle cx="100" cy="70" r="3" fill="#b8956a" opacity="0.6"/></svg></div>';

    var ill3 = '<div class="gave-illustration"><svg viewBox="0 0 200 140"><rect width="200" height="140" rx="16" fill="#F0EEF3"/><ellipse cx="80" cy="70" rx="25" ry="25" fill="none" stroke="#8A7F93" stroke-width="1.5" opacity="0.4"/><ellipse cx="120" cy="70" rx="25" ry="25" fill="none" stroke="#8A7F93" stroke-width="1.5" opacity="0.4"/><path d="M95 55 Q100 50, 105 55" fill="none" stroke="#b8956a" stroke-width="1" opacity="0.5"/><path d="M95 85 Q100 90, 105 85" fill="none" stroke="#b8956a" stroke-width="1" opacity="0.5"/></svg></div>';

    var ill4 = '<div class="gave-illustration"><svg viewBox="0 0 200 140"><rect width="200" height="140" rx="16" fill="#F0EEF3"/><path d="M50 100 L50 50 Q50 35, 65 35 L75 35" fill="none" stroke="#8A7F93" stroke-width="1.5" opacity="0.4"/><path d="M75 35 Q90 35, 95 50 L100 70 Q105 85, 115 85 L135 85" fill="none" stroke="#8A7F93" stroke-width="1.5" opacity="0.4"/><circle cx="50" cy="100" r="4" fill="#b8956a" opacity="0.5"/><circle cx="135" cy="85" r="4" fill="#8A7F93" opacity="0.5"/><path d="M135 85 L135 50 Q135 40, 150 40 L160 40" fill="none" stroke="#8A7F93" stroke-width="1" stroke-dasharray="3 3" opacity="0.3"/></svg></div>';

    var ill5 = '<div class="gave-illustration"><svg viewBox="0 0 200 140"><rect width="200" height="140" rx="16" fill="#F0EEF3"/><circle cx="100" cy="70" r="40" fill="none" stroke="#8A7F93" stroke-width="1" opacity="0.2"/><circle cx="100" cy="70" r="28" fill="none" stroke="#8A7F93" stroke-width="1.2" opacity="0.3"/><circle cx="100" cy="70" r="16" fill="none" stroke="#8A7F93" stroke-width="1.5" opacity="0.4"/><circle cx="100" cy="70" r="5" fill="#8A7F93" opacity="0.4"/><path d="M55 110 Q100 95, 145 110" fill="none" stroke="#b8956a" stroke-width="1.2" opacity="0.4"/></svg></div>';

    var html = '<div class="gave-page">';
    html += '<div class="gave-hero">';
    html += '<div class="gave-badge">Din gave</div>';
    html += '<h2>Kroppen husker det hele</h2>';
    html += '<p class="gave-byline">En personlig fort\u00e6lling af Annemarie Clement</p>';
    html += '<p class="gave-epigraph">Om h\u00e6nderne der l\u00e6rte mig at lytte.<br>Om de stille \u00f8jeblikke hvor alt vendte.</p>';
    html += '</div>';

    html += '<div class="gave-body">';
    html += '<p class="gave-greeting"><em>K\u00e6re dig.</em></p>';

    html += '<p>Jeg ved ikke, hvem du er. M\u00e5ske er du en der ligger v\u00e5gen om natten og m\u00e6rker, at noget i kroppen ikke vil falde til ro. M\u00e5ske er du en behandler, der b\u00e6rer andres tunge historier med hjem. Eller m\u00e5ske er du bare et menneske, der leder efter noget, der giver mening.</p>';

    html += '<p>Jeg vil gerne fort\u00e6lle dig noget. Ikke en teori. Ikke en metode. Men en historie \u2014 min historie \u2014 og de fem ting, den l\u00e6rte mig om at m\u00f8de mennesker.</p>';

    html += '<p>Den begynder med en plante.</p>';

    html += ill1;

    html += '<h3 class="gave-section-title">Planten p\u00e5 vindueskarmen</h3>';
    html += '<p>For mange \u00e5r siden stod der en plante p\u00e5 min vindueskarm. Den s\u00e5 kedelig ud \u2014 lidt trist, lidt halvvisnet. Jeg glemte den tit. Gav den vand n\u00e5r jeg huskede det. Flyttede den aldrig. Den overlevede, men den trivedes ikke.</p>';
    html += '<p>En dag flyttede jeg den hen i lyset. Begyndte at vande den regelm\u00e6ssigt. Ikke for meget. Ikke for lidt. Bare n\u00e5r den havde brug for det. Inden for et par uger stod den med nye skud. Blade jeg ikke vidste den havde i sig.</p>';
    html += '<p>Mange \u00e5r senere, da jeg begyndte at arbejde med nervesystemer, t\u00e6nkte jeg p\u00e5 den plante. For det er pr\u00e6cis s\u00e5dan nervesystemet er. Det har brug for lys, for vand, for n\u00e6ring \u2014 men det har ogs\u00e5 brug for at nogen <em>l\u00e6gger m\u00e6rke til det</em>. At nogen ser det, f\u00f8r det er helt visnet.</p>';
    html += '<p>Det var det f\u00f8rste, kroppen l\u00e6rte mig: <em>At n\u00e6rv\u00e6r er n\u00e6ring.</em></p>';

    html += ill2;

    html += '<h3 class="gave-section-title">Den stille viden</h3>';
    html += '<p>Jeg uddannede mig som afsp\u00e6ndingsp\u00e6dagog \u2014 psykomotorisk terapeut, som det hedder i dag. Jeg l\u00e6rte om muskler, om sp\u00e6ndingsm\u00f8nstre, om \u00e5ndedr\u00e6t. Men det der virkelig forandrede mig, var det jeg l\u00e6rte med h\u00e6nderne.</p>';
    html += '<p>N\u00e5r du l\u00e6gger h\u00e6nderne p\u00e5 et andet menneskes krop, sker der noget. Du m\u00e6rker, hvad ord ikke kan sige. Skuldrene der aldrig helt slipper. Maven der knuger sig sammen n\u00e5r stemmen bliver en anelse for h\u00f8j. \u00c5ndedr\u00e6ttet der bliver fladt og hurtigt n\u00e5r vi n\u00e6rmer os det sv\u00e6re.</p>';
    html += '<p>I over tolv \u00e5r studerede jeg under Ulla Rung Weeke \u2014 psykolog og traumespecialist, forfatter til <em>At danse med nervesystemet</em>. Hun l\u00e6rte mig, at det jeg m\u00e6rkede med h\u00e6nderne ikke bare var sp\u00e6ndinger. Det var nervesystemets sprog. Et sprog der er \u00e6ldre end ord. Mere ærligt end tanker.</p>';
    html += '<p>Det var det andet, kroppen l\u00e6rte mig: <em>At lytte med h\u00e6nderne er at lytte til sandheden.</em></p>';

    html += ill3;

    html += '<h3 class="gave-section-title">Det f\u00f8rste m\u00f8de</h3>';
    html += '<p>Tidligt i min karriere arbejdede jeg p\u00e5 en klinik for spiseforstyrrelser p\u00e5 Gentofte Hospital. Jeg m\u00f8dte unge mennesker, der havde mistet forbindelsen til deres egen krop. Som ikke kunne m\u00e6rke sult. Ikke kunne m\u00e6rke gr\u00e6nser. Ikke vidste hvorn\u00e5r nok var nok \u2014 hverken af mad eller af smerte.</p>';
    html += '<p>Jeg s\u00e5 det samme m\u00f8nster hos stressramte ledere, da jeg senere blev coach hos Unilever. Mennesker der havde l\u00e6rt at k\u00f8re i femte gear s\u00e5 l\u00e6nge, at de havde glemt, at der fandtes et nul. Deres krop r\u00e5bte \u2014 med hovedpine, med s\u00f8vnl\u00f8shed, med en rastl\u00f8shed der aldrig h\u00f8rte op \u2014 men de havde l\u00e6rt at overhøre den.</p>';
    html += '<p>I begge tilf\u00e6lde var grundproblemet det samme: en afbrydelse mellem mennesket og dets nervesystem. Ikke fordi de var svage. Men fordi ingen nogensinde havde vist dem, <em>hvordan man lytter til sin egen krop</em>.</p>';
    html += '<p>Det var det tredje, kroppen l\u00e6rte mig: <em>At vi ikke er g\u00e5et i stykker. Vi har bare glemt at lytte.</em></p>';

    html += ill4;

    html += '<h3 class="gave-section-title">Det ordl\u00f8se sprog</h3>';
    html += '<p>Noget af det der ligger mig allerdybest p\u00e5 sinde, er det ordl\u00f8se samspil mellem mor og barn i de allerf\u00f8rste leve\u00e5r. Det \u00f8jeblik hvor et sp\u00e6dbarn m\u00f8der sin mors \u00f8jne og finder \u2014 eller ikke finder \u2014 tryghed.</p>';
    html += '<p>Det er i de \u00f8jeblikke, vores nervesystem formes. F\u00f8r vi har ord for det. F\u00f8r vi kan fort\u00e6lle nogen, hvad vi f\u00f8ler. I de f\u00f8rste tre \u00e5r er hjernen som bl\u00f8d modellervoks \u2014 og de m\u00f8nstre der dannes, b\u00e6rer vi med os hele livet.</p>';
    html += '<p>Men her er det vidunderlige: de m\u00f8nstre kan \u00e6ndres. Ikke ved at t\u00e6nke sig ud af dem. Men ved at skabe nye erfaringer i kroppen. Ved co-regulering \u2014 ved at et andet nervesystem siger til dit: <em>du er tryg her. Du kan slippe.</em></p>';
    html += '<p>Det er pr\u00e6cis det, der sker p\u00e5 min briks i Hellerup. N\u00e5r jeg l\u00e6gger h\u00e6nderne p\u00e5 din krop, bruger jeg mit eget regulerede nervesystem som et anker. Ikke fordi jeg har en teknik. Men fordi <em>ro smitter</em>. Tryghed er en biologisk tilstand \u2014 og den kan overf\u00f8res fra \u00e9t nervesystem til et andet.</p>';
    html += '<p>Det var det fjerde, kroppen l\u00e6rte mig: <em>At vi hele livet kan skabe nye begyndelser.</em></p>';

    html += ill5;

    html += '<h3 class="gave-section-title">Cirklen</h3>';
    html += '<p>I dag, tyve \u00e5r inde i dette arbejde, ved jeg \u00e9n ting med sikkerhed: alt h\u00e6nger sammen med alt. Nervesystemet binder det hele sammen \u2014 kroppen og psyken, traumet og relationen, biologien og tilknytningen. Det er derfor min metode er en cirkel og ikke en liste. Fordi forandring i \u00e9n dimension sender b\u00f8lger gennem alle de andre.</p>';
    html += '<p>Og det er derfor, jeg stadig g\u00e5r til mit arbejde med begejstring hver eneste dag. Fordi jeg aldrig har m\u00f8dt to ens nervesystemer. Fordi hvert menneske, der l\u00e6gger sig p\u00e5 min briks, b\u00e6rer p\u00e5 en helt unik historie. Og fordi den historie fortjener at blive lyttet til \u2014 ikke kun med \u00f8rerne, men med h\u00e6nderne, med kroppen, med hele mit n\u00e6rv\u00e6r.</p>';
    html += '<p>Det var det femte, kroppen l\u00e6rte mig: <em>At n\u00e6rv\u00e6r, livsgl\u00e6de, begejstring og nysgerrighed ikke er noget man finder. Det er noget man d\u00e6rker. Hver dag. Som en plante man vander.</em></p>';

    html += '<div class="gave-closing">';
    html += '<p>Selv n\u00e5r livet er sv\u00e6rt, har vi et valg.<br>Vi kan v\u00e6lge at lytte. At m\u00e6rke. At v\u00e6re til stede.<br>Og derfra begynder alt.</p>';
    html += '<p>Pas p\u00e5 dit nervesystem \u2014 det passer p\u00e5 dig.</p>';
    html += '<p class="gave-sign">Med varme fra klinikken i Hellerup,<br><strong>Annemarie Clement</strong></p>';
    html += '<p class="gave-sign-title">Nervesystemsterapeut, Supervisor, Psykoterapeut MPF</p>';
    html += '</div>';

    html += '<button class="gave-back-btn" onclick="resetToWelcome()">\u2190 Tilbage til forsiden</button>';

    html += '</div>'; // gave-body
    html += '</div>'; // gave-page

    document.getElementById('info-content').innerHTML = html;

    var infoPanel = document.getElementById('info-panel');
    infoPanel.scrollTop = 0;
    setTimeout(function() {
        var hero = document.querySelector('.gave-hero');
        if (hero) hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// ===== SEARCH =====
function buildSearchIndex() {
    const index = [];

    for (const [themeId, theme] of Object.entries(themes)) {
        for (const [circleId, circle] of Object.entries(theme.circles)) {
            for (const mode of ['klient', 'fagfolk']) {
                if (circle[mode]) {
                    index.push({
                        title: circle[mode].title,
                        text: circle[mode].text,
                        type: 'circle',
                        themeId: themeId,
                        themeName: theme.name,
                        circleId: circleId,
                        mode: mode,
                        label: theme.name + ' — ' + circleNames[circleId]
                    });
                }
            }
        }
        for (const [connId, conn] of Object.entries(theme.connections || {})) {
            for (const mode of ['klient', 'fagfolk']) {
                if (conn[mode]) {
                    var parts = connId.split('-');
                    index.push({
                        title: circleNames[parts[0]] + ' ↔ ' + circleNames[parts[1]],
                        text: conn[mode],
                        type: 'connection',
                        themeId: themeId,
                        themeName: theme.name,
                        circleId: parts[0] === 'nervesystem' ? parts[1] : parts[0],
                        mode: mode,
                        label: theme.name + ' — ' + circleNames[parts[0]] + ' ↔ ' + circleNames[parts[1]]
                    });
                }
            }
        }
    }

    var eduNames = { nervesystemsterapeut: 'Nervesystemsterapeut', teachertraining: 'Teacher Training', tilknytningsspeciale: 'Tilknytningsspeciale' };
    for (const [eduId, edu] of Object.entries(educations)) {
        for (const [circleId, circle] of Object.entries(edu.circles)) {
            for (const mode of ['kursist', 'fagfolk']) {
                if (circle[mode]) {
                    index.push({
                        title: circle[mode].title,
                        text: circle[mode].text,
                        type: 'education-circle',
                        educationId: eduId,
                        educationName: eduNames[eduId],
                        circleId: circleId,
                        mode: mode,
                        label: eduNames[eduId] + ' — ' + circleNames[circleId]
                    });
                }
            }
        }
    }

    return index;
}

function setupSearch() {
    var searchBtn = document.getElementById('search-btn');
    var searchOverlay = document.getElementById('search-overlay');
    var searchInput = document.getElementById('search-input');
    var searchClear = document.getElementById('search-clear');
    var searchClose = document.getElementById('search-close');
    var searchResults = document.getElementById('search-results');

    if (!searchBtn || !searchOverlay) return;

    var searchIndex = buildSearchIndex();

    function openSearch() {
        searchOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        setTimeout(function() { searchInput.focus(); }, 300);
    }

    function closeSearch() {
        searchOverlay.classList.remove('open');
        document.body.style.overflow = '';
        searchInput.value = '';
        searchClear.classList.remove('visible');
        searchResults.innerHTML = '';
        document.querySelectorAll('.search-tag').forEach(function(t) { t.classList.remove('active'); });
    }

    searchBtn.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);

    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        searchClear.classList.remove('visible');
        searchResults.innerHTML = '';
        document.querySelectorAll('.search-tag').forEach(function(t) { t.classList.remove('active'); });
        searchInput.focus();
    });

    searchInput.addEventListener('input', function() {
        var query = searchInput.value.trim();
        searchClear.classList.toggle('visible', query.length > 0);
        if (query.length > 0) {
            document.querySelectorAll('.search-tag').forEach(function(t) { t.classList.remove('active'); });
        }
        performSearch(query, searchIndex, searchResults, closeSearch);
    });

    document.querySelectorAll('.search-tag').forEach(function(tag) {
        tag.addEventListener('click', function() {
            var term = tag.dataset.search;
            document.querySelectorAll('.search-tag').forEach(function(t) { t.classList.remove('active'); });
            tag.classList.add('active');
            searchInput.value = term;
            searchClear.classList.add('visible');
            performSearch(term, searchIndex, searchResults, closeSearch);
        });
    });
}

function performSearch(query, index, resultsContainer, closeCallback) {
    if (query.length < 2) {
        resultsContainer.innerHTML = '';
        return;
    }

    var lower = query.toLowerCase();
    var matches = [];

    for (var i = 0; i < index.length; i++) {
        var item = index[i];
        var titleMatch = item.title.toLowerCase().indexOf(lower) >= 0;
        var textMatch = item.text.toLowerCase().indexOf(lower) >= 0;
        if (titleMatch || textMatch) {
            matches.push({ item: item, titleMatch: titleMatch });
        }
    }

    matches.sort(function(a, b) {
        if (a.titleMatch && !b.titleMatch) return -1;
        if (!a.titleMatch && b.titleMatch) return 1;
        return a.item.label.localeCompare(b.item.label);
    });

    var shown = matches.slice(0, 15);

    if (shown.length === 0) {
        resultsContainer.innerHTML = '<div class="search-no-results">Ingen resultater fundet</div>';
        return;
    }

    var html = '';
    for (var j = 0; j < shown.length; j++) {
        var m = shown[j].item;
        var snippet = getSnippet(m.text, lower);
        var modeLabel = m.mode === 'klient' ? 'Klient' : m.mode === 'kursist' ? 'Kursist' : 'Fagfolk';
        html += '<div class="search-result-item" data-type="' + m.type + '" data-theme="' + (m.themeId || '') + '" data-education="' + (m.educationId || '') + '" data-circle="' + m.circleId + '" data-mode="' + m.mode + '">';
        html += '<div class="search-result-title">' + m.label + ' <span style="font-size:0.8rem;color:#9aaa9e;font-weight:400;">(' + modeLabel + ')</span></div>';
        html += '<div class="search-result-context">' + snippet + '</div>';
        html += '</div>';
    }
    resultsContainer.innerHTML = html;

    resultsContainer.querySelectorAll('.search-result-item').forEach(function(el) {
        el.addEventListener('click', function() {
            var type = el.dataset.type;
            var circleId = el.dataset.circle;
            var mode = el.dataset.mode;
            var themeId = el.dataset.theme;
            var eduId = el.dataset.education;

            closeCallback();

            if (type === 'education-circle') {
                currentEducation = eduId;
                currentMode = mode;
                currentTheme = 'general';
                var label = educations[eduId].name;
                document.getElementById('education-label').innerHTML = label.replace(' ', '<br>');
                document.querySelectorAll('.education-option').forEach(function(opt) {
                    opt.classList.toggle('active', opt.dataset.education === eduId);
                });
                updateCenterCircle();
            } else {
                currentEducation = null;
                currentMode = mode;
                currentTheme = themeId;
                document.getElementById('education-label').innerHTML = 'Uddan-<br>nelser';
                document.querySelectorAll('.education-option').forEach(function(opt) { opt.classList.remove('active'); });
                var themeLabel = themes[themeId].name;
                document.getElementById('theme-label').innerHTML = themeLabel === 'Nervesystemsregulering' ? 'Vælg<br>tema' : themeLabel;
                document.querySelectorAll('.theme-option').forEach(function(opt) {
                    opt.classList.toggle('active', opt.dataset.theme === themeId);
                });
                updateCenterCircle();
            }

            document.querySelectorAll('.top-circle[data-mode]').forEach(function(c) {
                c.classList.toggle('active', c.dataset.mode === mode);
            });

            showCircleView(circleId);
        });
    });
}

function getSnippet(text, query) {
    var lower = text.toLowerCase();
    var idx = lower.indexOf(query);
    if (idx === -1) return text.substring(0, 120) + '...';

    var start = Math.max(0, idx - 40);
    var end = Math.min(text.length, idx + query.length + 80);
    var snippet = '';
    if (start > 0) snippet += '...';
    snippet += text.substring(start, end);
    if (end < text.length) snippet += '...';

    var escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    snippet = snippet.replace(new RegExp(escaped, 'gi'), function(match) { return '<mark>' + match + '</mark>'; });
    return snippet;
}

// ===== ONBOARDING =====
function setupOnboarding() {
    var overlay = document.getElementById('onboarding-overlay');
    var nextBtn = document.getElementById('onboarding-next');
    var skipBtn = document.getElementById('onboarding-skip');
    if (!overlay || !nextBtn) return;

    // Check if already seen
    try {
        if (localStorage.getItem('onboarding-seen')) return;
    } catch(e) {}

    var currentStep = 0;
    var totalSteps = 5;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    function goToStep(step) {
        currentStep = step;
        document.querySelectorAll('.onboarding-step').forEach(function(s) { s.classList.remove('active'); });
        document.querySelectorAll('.onboarding-dot').forEach(function(d) { d.classList.remove('active'); });

        var stepEl = document.querySelector('.onboarding-step[data-step="' + step + '"]');
        var dotEl = document.querySelector('.onboarding-dot[data-dot="' + step + '"]');
        if (stepEl) stepEl.classList.add('active');
        if (dotEl) dotEl.classList.add('active');

        if (step === totalSteps - 1) {
            nextBtn.textContent = 'Kom i gang';
        } else {
            nextBtn.textContent = 'Næste';
        }
    }

    function closeOnboarding() {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
        try { localStorage.setItem('onboarding-seen', '1'); } catch(e) {}
    }

    nextBtn.addEventListener('click', function() {
        if (currentStep < totalSteps - 1) {
            goToStep(currentStep + 1);
        } else {
            closeOnboarding();
        }
    });

    skipBtn.addEventListener('click', closeOnboarding);

    document.querySelectorAll('.onboarding-dot').forEach(function(dot) {
        dot.addEventListener('click', function() {
            goToStep(parseInt(dot.dataset.dot));
        });
    });
}

// ===== PREMIUM UI FEATURES =====

// Bottom navigation

function updateBottomNavActive(navName) {
    var bottomNav = document.getElementById('bottom-nav');
    if (!bottomNav) return;
    bottomNav.querySelectorAll('.bottom-nav-item').forEach(function(n) { n.classList.remove('active'); });
    var target = bottomNav.querySelector('[data-nav="' + navName + '"]');
    if (target) target.classList.add('active');
}

function setupBottomNav() {
    var bottomNav = document.getElementById('bottom-nav');
    if (!bottomNav) return;

    bottomNav.querySelectorAll('.bottom-nav-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var nav = item.dataset.nav;

            if (nav === 'hjem') {
                resetToWelcome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (nav === 'temaer') {
                showTemaer();
            } else if (nav === 'uddannelser') {
                showUddannelser();
            } else if (nav === 'oevelser') {
                showExercises();
            }
        });
    });
}

function toggleDropdownPanel(panelId, navItem) {
    var panel = document.getElementById(panelId);
    var overlay = document.getElementById('dropdown-overlay');
    if (!panel) return;

    var isOpen = panel.classList.contains('show');
    closeAllDropdowns();

    if (!isOpen) {
        panel.classList.add('show');
        overlay.classList.add('show');
        navItem.classList.add('active');
    }
}

function closeAllDropdowns() {
    document.querySelectorAll('.theme-dropdown-panel').forEach(function(p) { p.classList.remove('show'); });
    var overlay = document.getElementById('dropdown-overlay');
    if (overlay) overlay.classList.remove('show');
    // Reset bottom nav active state to hjem
    var bottomNav = document.getElementById('bottom-nav');
    if (bottomNav) {
        bottomNav.querySelectorAll('.bottom-nav-item').forEach(function(n) { n.classList.remove('active'); });
        var hjemBtn = bottomNav.querySelector('[data-nav="hjem"]');
        if (hjemBtn) hjemBtn.classList.add('active');
    }
}

function setupDropdownPanels() {
    // Overlay close
    var overlay = document.getElementById('dropdown-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeAllDropdowns);
    }

    // Theme panel items
    document.querySelectorAll('#theme-panel .dropdown-panel-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var themeId = item.dataset.theme;
            currentTheme = themeId;
            currentEducation = null;
            if (currentMode === 'kursist') {
                currentMode = 'klient';
                updateRollePills();
            }

            // Update old hidden elements for compatibility
            document.getElementById('education-label').innerHTML = 'Uddan-<br>nelser';
            document.querySelectorAll('.education-option').forEach(function(opt) { opt.classList.remove('active'); });
            document.querySelectorAll('.theme-option').forEach(function(opt) { opt.classList.remove('active'); });
            var oldOpt = document.querySelector('.theme-option[data-theme="' + themeId + '"]');
            if (oldOpt) oldOpt.classList.add('active');
            document.getElementById('theme-label').textContent = themeNames[themeId] || themeId;

            // Update panel active state
            document.querySelectorAll('#theme-panel .dropdown-panel-item').forEach(function(i) { i.classList.remove('active'); });
            item.classList.add('active');

            closeAllDropdowns();
            updateCenterCircle();
            showCircleView('nervesystem');
        });
    });

    // Education panel items
    document.querySelectorAll('#education-panel .dropdown-panel-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var eduId = item.dataset.education;
            currentEducation = eduId;
            currentMode = 'kursist';
            currentTheme = 'general';

            // Update old hidden elements for compatibility
            document.getElementById('theme-label').innerHTML = 'Vælg<br>tema';
            document.querySelectorAll('.theme-option').forEach(function(opt) { opt.classList.remove('active'); });
            document.querySelectorAll('.education-option').forEach(function(opt) { opt.classList.remove('active'); });
            var oldOpt = document.querySelector('.education-option[data-education="' + eduId + '"]');
            if (oldOpt) oldOpt.classList.add('active');
            var label = educationNames[eduId];
            document.getElementById('education-label').innerHTML = label.replace(' ', '<br>');

            // Update panel active state
            document.querySelectorAll('#education-panel .dropdown-panel-item').forEach(function(i) { i.classList.remove('active'); });
            item.classList.add('active');

            updateRollePills();
            closeAllDropdowns();
            updateCenterCircle();
            showCircleView('nervesystem');
        });
    });

    // Exercises panel items
    document.querySelectorAll('#exercises-panel .dropdown-panel-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var exerciseIndex = parseInt(item.dataset.exercise);
            currentEducation = null;
            currentTheme = 'general';
            if (currentMode === 'kursist') {
                currentMode = 'klient';
                updateRollePills();
            }

            document.querySelectorAll('#exercises-panel .dropdown-panel-item').forEach(function(i) { i.classList.remove('active'); });
            item.classList.add('active');

            closeAllDropdowns();
            showExercises(exerciseIndex);

            setTimeout(function() {
                var cards = document.querySelectorAll('.exercise-card');
                if (cards[exerciseIndex]) {
                    var rect = cards[exerciseIndex].getBoundingClientRect();
                    window.scrollTo({ top: window.pageYOffset + rect.top - 80, behavior: 'smooth' });
                }
            }, 100);
        });
    });
}

// Rolle pills (perspektiv-switch)
function setupRollePills() {
    document.querySelectorAll('.rolle-pill').forEach(function(pill) {
        pill.addEventListener('click', function() {
            var mode = pill.dataset.mode;
            currentMode = mode;
            currentEducation = null;
            currentTheme = 'general';

            updateRollePills();

            // Update old hidden elements
            document.querySelectorAll('.top-circle[data-mode]').forEach(function(c) { c.classList.remove('active'); });
            var oldBtn = document.querySelector('.top-circle[data-mode="' + mode + '"]');
            if (oldBtn) oldBtn.classList.add('active');
            document.getElementById('theme-label').innerHTML = 'Vælg\u003cbr\u003etema';
            document.querySelectorAll('.theme-option').forEach(function(opt) { opt.classList.remove('active'); });
            var genOpt = document.querySelector('.theme-option[data-theme="general"]');
            if (genOpt) genOpt.classList.add('active');
            document.getElementById('education-label').innerHTML = 'Uddan-\u003cbr\u003enelser';
            document.querySelectorAll('.education-option').forEach(function(opt) { opt.classList.remove('active'); });

            // Reset dropdown panels
            document.querySelectorAll('#theme-panel .dropdown-panel-item').forEach(function(i) { i.classList.remove('active'); });
            var genTheme = document.querySelector('#theme-panel .dropdown-panel-item[data-theme="general"]');
            if (genTheme) genTheme.classList.add('active');
            document.querySelectorAll('#education-panel .dropdown-panel-item').forEach(function(i) { i.classList.remove('active'); });

            updateCenterCircle();

            var infoPanelContent = document.getElementById('info-content');
            infoPanelContent.style.opacity = '0.3';
            setTimeout(function() {
                if (currentView === 'circle' && currentCircle) {
                    showCircleView(currentCircle);
                } else {
                    showWelcome();
                }
                infoPanelContent.style.opacity = '1';
            }, 150);
        });
    });
}

function updateRollePills() {
    document.querySelectorAll('.rolle-pill').forEach(function(pill) {
        pill.classList.remove('active');
        if (pill.dataset.mode === currentMode || (pill.dataset.mode === 'fagfolk' && currentMode === 'kursist')) {
            pill.classList.add('active');
        }
        if (currentMode === 'kursist' && pill.dataset.mode === 'klient') {
            pill.classList.remove('active');
        }
    });
}

// Hero scroll observer — change top bar icon colors
function setupHeroScrollObserver() {
    var hero = document.getElementById('hero-section');
    if (!hero || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                document.body.classList.remove('scrolled-past-hero');
            } else {
                document.body.classList.add('scrolled-past-hero');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(hero);
}
