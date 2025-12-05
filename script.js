// KOMPLET CONTENT DATABASE
const themes = {
    general: {
        name: "Nervesystemsregulering",
        circles: {
            nervesystem: {
                klient: {
                    title: "Nervesystemsregulering",
                    text: "Dit nervesystem styrer alt - fra hvordan du sover, fordøjer mad, håndterer stress og føler dig i din krop. Et nervesystem i balance giver både dyb indre ro og energi til at leve livet. Jeg hjælper dig med at forstå og regulere dit nervesystem, så du kan finde tilbage til balance og trivsel."
                },
                fagfolk: {
                    title: "Nervesystemsregulering - Klinisk Perspektiv",
                    text: "Polyvagal-informeret tilgang til autonomt nervesystem-regulering som fundament for mental og fysisk sundhed. Arbejder med ventral vagal aktivering, neuroception og co-regulering. Integrerer Stephen Porges' forskning i praktisk terapeutisk anvendelse med fokus på bottom-up processer."
                }
            },
            polyvagal: {
                klient: {
                    title: "Polyvagal Teori",
                    text: "Dit nervesystem har tre forskellige tilstande: Sikkerhed og forbindelse (grøn), alarm og mobilisering (gul), og nedlukning (rød). Når du forstår hvilken tilstand du er i, kan du lære at regulere dig selv tilbage til den grønne sikre tilstand, hvor healing og trivsel kan ske."
                },
                fagfolk: {
                    title: "Polyvagal Teori - Klinisk Anvendelse",
                    text: "Stephen Porges' hierarkiske model af autonomt nervesystem: ventral vagal (social engagement), sympatisk (mobilisering), dorsal vagal (immobilisering). Neuroception som central mekanisme for autonome shifts. Terapeutisk fokus på ventral vagal tone som forudsætning for regulering og healing."
                }
            },
            tilknytning: {
                klient: {
                    title: "Tilknytningsmønstre",
                    text: "Måden du knytter dig til andre på blev skabt tidligt i livet. De fire tilknytningsmønstre (tryg, undvigende, ambivalent, desorganiseret) påvirker hvordan du er i relationer og med dig selv. At forstå dit mønster er første skridt til at skabe nye, sundere måder at være på."
                },
                fagfolk: {
                    title: "Tilknytningsmønstre - Teoretisk Ramme",
                    text: "Bowlby og Ainsworth's tilknytningstypologi: sikker, undvigende, ambivalent, desorganiseret. Indre arbejdsmodeller som implicitte relationelle skemaer. Earned secure attachment gennem terapeutisk relation. Fokus på hvordan tidlige tilknytningsmønstre manifesterer sig i autonome nervesystem-respons og affektregulering."
                }
            },
            kropsterapi: {
                klient: {
                    title: "Kropsterapi & Behandling",
                    text: "Din krop husker alt - både det gode og det svære. Gennem blid behandling på briks, arbejde med åndedræt og fascia hjælper jeg kroppen med at slippe gamle mønstre og spændinger. Kroppen ved hvordan den skal hele sig selv - den har bare brug for de rette betingelser."
                },
                fagfolk: {
                    title: "Kropsterapi - Somatisk Tilgang",
                    text: "Afspændingspædagogisk behandling på briks kombineret med fascial release og åndedrætsarbejde. Integrerer sensorimotorisk psykoterapi og somatic experiencing principper. Bottom-up regulering gennem direkte kropslig intervention. Fokus på proprioceptiv og interoceptiv awareness som vej til autonomt nervesystem-regulering."
                }
            },
            psykobiologi: {
                klient: {
                    title: "Psykobiologi",
                    text: "Dine følelser, tanker og oplevelser er dybt forbundet med din krops biologi - hormoner, neurotransmittere og nervesystemets tilstand. Når biologien kommer i balance, bliver det lettere at tænke klart, føle stabilt og handle fornuftigt. Jeg arbejder med både psyken og biologien."
                },
                fagfolk: {
                    title: "Psykobiologi - Neurobiologisk Integration",
                    text: "Integrativ forståelse af HPA-akse, neurotransmitter-systemer (serotonin, dopamin, GABA) og hormonelle processer (cortisol, oxytocin) i relation til psykisk regulering. Autonomt nervesystem som central moderator. Evidens-baseret tilgang til hvordan kropslige interventioner påvirker neurobiologiske systemer."
                }
            },
            traumer: {
                klient: {
                    title: "Traumer & Dissociation",
                    text: "Traumer sidder fast i nervesystemet, ikke kun i minderne. Når noget overvældende sker, kan dele af dig 'koble fra' (dissociation) for at beskytte dig. Jeg hjælper med forsigtigt at integrere det frakoblede, så du kan føle dig hel og til stede i dit liv igen."
                },
                fagfolk: {
                    title: "Traumer & Dissociation - Traumebearbejdning",
                    text: "Peter Levines Somatic Experiencing og van der Kolks traumeforskning som teoretisk fundament. Fokus på incomplete defensive responses og fryseresponser lagret i nervesystemet. Gradvis titrering og pendulering mellem activation og ro. Dissociation som overlevelsesmekanisme der kræver specifik opmærksomhed på window of tolerance."
                }
            },
            relation: {
                klient: {
                    title: "Terapeutisk Relation",
                    text: "Healing sker i relationer, ikke i isolation. I vores arbejde sammen skaber vi et trygt rum hvor dit nervesystem kan slappe af. Min tilstedeværelse og ro hjælper dit nervesystem med at finde sin egen ro. Relationen er ikke bare rammen - den er selve medicininen."
                },
                fagfolk: {
                    title: "Terapeutisk Relation - Neurobiologisk Grundlag",
                    text: "Relationel neurobiologi som teoretisk ramme. Co-regulering gennem terapeutens ventral vagale tilstand. Mirror neurons og interbrain synchrony som fysiologiske mekanismer. Earned secure attachment gennem korrigerende emotionelle erfaringer. Terapeutisk alliance som forudsætning for autonomt nervesystem-arbejde."
                }
            }
        },
        connections: {
            'nervesystem-polyvagal': {
                klient: "Nervesystemsregulering bygger direkte på polyvagal teori - når du forstår dine tre tilstande (sikkerhed, alarm, nedlukning), kan du lære at regulere mellem dem og finde tilbage til sikkerhed.",
                fagfolk: "Polyvagal teori udgør det teoretiske fundament for nervesystemsregulering. Hierarkisk forståelse af autonome tilstande som basis for terapeutisk intervention gennem ventral vagal aktivering."
            },
            'nervesystem-tilknytning': {
                klient: "Dit tilknytningsmønster påvirker hvordan dit nervesystem reagerer i relationer. At arbejde med nervesystemet hjælper med at ændre gamle tilknytningsmønstre gennem nye oplevelser af sikkerhed.",
                fagfolk: "Tilknytningsmønstre manifesterer sig som autonome nervesystem-mønstre. Nervesystemsregulering faciliterer earned secure attachment gennem somatisk korrigering af implicitte relationelle skemaer."
            },
            'nervesystem-kropsterapi': {
                klient: "Kroppen og nervesystemet er ét - du kan ikke regulere nervesystemet uden at involvere kroppen. Behandling, åndedræt og bevægelse er konkrete måder at hjælpe nervesystemet tilbage i balance.",
                fagfolk: "Somatisk intervention er direkte nervesystemsregulering. Bottom-up processer gennem fascial work, åndedræt og behandling modulerer vagal tone og autonome tilstande mere effektivt end top-down kognitive interventioner alene."
            },
            'nervesystem-psykobiologi': {
                klient: "Når nervesystemet kommer i balance, følger hormonerne og neurotransmitterne med. Bedre søvn, fordøjelse og humør er direkte resultater af et reguleret nervesystem.",
                fagfolk: "Autonomt nervesystem fungerer som master regulator for HPA-akse og neurotransmitter-systemer. Ventral vagal aktivering faciliterer hormonel balance (cortisol-reduktion, oxytocin-frigivelse) og optimal neurotransmitter-funktion."
            },
            'nervesystem-traumer': {
                klient: "Traumer sidder fast som 'frosne' tilstande i nervesystemet. Ved at arbejde forsigtigt med nervesystemets regulering kan traumemateriale integreres uden at overvælde.",
                fagfolk: "Traumatisk materiale er lagret som autonome forsvarstilstande (freeze, collapse). Nervesystemsregulering gennem titrering og pendulering faciliterer completion af incomplete defensive responses uden re-traumatisering."
            },
            'nervesystem-relation': {
                klient: "Dit nervesystem lærer regulering gennem relationer. I terapien 'låner' dit nervesystem ro fra mit, indtil det selv kan finde den. Det kaldes co-regulering.",
                fagfolk: "Terapeutisk relation er primær vej til nervesystemsregulering. Terapeuts ventral vagale tilstand co-regulerer klientens autonome system gennem interpersonal neurobiological synchrony og social engagement-system aktivering."
            },
            'polyvagal-tilknytning': {
                klient: "Hvert tilknytningsmønster har sin egen nervesystem-signatur. Tryg tilknytning lever i den grønne sikre tilstand, mens utryg tilknytning ofte sidder fast i alarm eller nedlukning.",
                fagfolk: "Tilknytningsmønstre er embodied som specifikke autonome profiler. Sikker tilknytning korrelerer med ventral vagal fleksibilitet, mens unsikre mønstre viser rigid sympatisk hyperarousal eller dorsal hypoarousal."
            },
            'polyvagal-kropsterapi': {
                klient: "Når kroppen behandles med nærvær og respekt, sender det sikkerhedssignaler til nervesystemet. Blid berøring og åndedrætsarbejde aktiverer den grønne sikre tilstand.",
                fagfolk: "Somatisk intervention via berøring og åndedræt aktiverer ventral vagale pathways gennem C-fibre (affektiv touch) og respiratorisk sinus arrhythmia. Direkte bottom-up modulering af polyvagal tone."
            },
            'polyvagal-psykobiologi': {
                klient: "Når du er i den grønne sikre tilstand, fungerer din biologi optimalt - god søvn, stærkt immunforsvar, god fordøjelse. I alarm eller nedlukning går alt i ubalance.",
                fagfolk: "Ventral vagal tilstand optimerer alle fysiologiske systemer: HPA-akse regulering, immunfunktion, fordøjelse. Sympatisk eller dorsal dominans dysregulerer hormoner, inflammatoriske markører og metaboliske processer."
            },
            'polyvagal-traumer': {
                klient: "Traumer fryser nervesystemet fast i alarm eller nedlukning. At finde tilbage til sikker tilstand er første skridt i traumehealing - så kan det frosne materiale begynde at tø op.",
                fagfolk: "Traumatisk immobilisering repræsenterer dorsal vagal dominans med sympatisk co-activation. Healing kræver først etablering af ventral vagal sikkerhed før traumatisk materiale kan integreres gennem oscillation mellem activation og ro."
            },
            'polyvagal-relation': {
                klient: "Du kan mærke når et andet menneske er i sikker tilstand - det smitter. I terapi bruger vi denne 'smitte' bevidst, så dit nervesystem lærer sikkerhed gennem mit nærvær.",
                fagfolk: "Social engagement system (ventral vagal) faciliterer co-regulering gennem prosodi, ansigtsudtryk, kropsholdning. Terapeuts autonome tilstand påvirker direkte klientens gennem mirror neurons og interbrain synchronization."
            },
            'tilknytning-kropsterapi': {
                klient: "Tilknytningsmønstre sidder i kroppen - måden du holder vejret, spænder musklerne, lukker ned. Kropsarbejde kan ændre disse mønstre mere effektivt end ord alene.",
                fagfolk: "Tilknytningsmønstre manifesterer sig somatisk i åndedræt, muskeltonus, fascial densitet. Somatisk intervention bypasser verbale forsvarsmekanismer og faciliterer reconsolidation af implicitte relationelle skemaer gennem proprioceptiv og interoceptiv re-patterning."
            },
            'tilknytning-psykobiologi': {
                klient: "Dit tidlige tilknytningsmønster formede din biologi - hvordan du producerer stresshormoner, hvor følsom du er for oxytocin (kærlighedshormonet). Men biologien kan omformes gennem nye erfaringer.",
                fagfolk: "Tidlig tilknytning former HPA-akse respons og oxytocin-receptor sensitivitet. Unsikker tilknytning korrelerer med dysreguleret cortisol og reduceret oxytocin-respons. Earned secure attachment kan modificere disse biologiske mønstre gennem gentagen korrigerende erfaring."
            },
            'tilknytning-traumer': {
                klient: "Traumer i tidlige tilknytningsrelationer skaber ofte desorganiseret tilknytning - hvor relationer både er det farlige og det sikre. Det kræver særlig forsigtighed at arbejde med.",
                fagfolk: "Developmental trauma inden for tilknytningssystem resulterer ofte i desorganiseret tilknytning - simultant activation af attachment og defense systems. Kræver specifik opmærksomhed på terapeutens egen regulering og langsom etablering af relational safety."
            },
            'tilknytning-relation': {
                klient: "Terapeutisk relation kan være det sted hvor du lærer tryg tilknytning for første gang - eller genoplever den. Gennem vores relation omskrives dine indre modeller af hvad relationer kan være.",
                fagfolk: "Earned secure attachment gennem terapeutisk relation som korrigerende emotionel erfaring. Terapeuts konsistente tilgængelighed og afstemning modificerer indre arbejdsmodeller og faciliterer shift fra unsikre til sikre tilknytningsmønstre gennem relational reconsolidation."
            },
            'kropsterapi-psykobiologi': {
                klient: "Kroppen og biologien taler samme sprog. Når du arbejder med åndedræt og fascia, påvirker du direkte hormoner og neurotransmittere - kroppen er indgangen til at ændre kemien.",
                fagfolk: "Fascial release og åndedrætsarbejde påvirker direkte vagal afferent signalering, hvilket modulerer brainstem nuclei og dermed neurotransmitter-frigivelse. Mekanisk stimulation af fascia påvirker interoceptive processing og autonome outputs."
            },
            'kropsterapi-traumer': {
                klient: "Traumer sidder lagret i kroppen som spændinger, begrænsede åndedræt og følelsesløshed. Gennem forsigtigt kropsarbejde kan det frosne begynde at tø, og kroppen husker hvordan den føles hel.",
                fagfolk: "Somatic experiencing principper: traumer manifesterer sig som incomplete motoriske sekvenser og fasicial restrictions. Behandling faciliterer completion gennem titreret proprioceptiv og interoceptiv activation, resolverende defensive immobilization states gennem gradvis mobilisering."
            },
            'kropsterapi-relation': {
                klient: "At blive behandlet med respekt og nærvær lærer din krop at relationer kan være sikre. Berøring i terapien er ikke bare fysisk - det er også relationel healing.",
                fagfolk: "Terapeutisk touch som relationel intervention. Affektiv C-fibre stimulation kombineret med terapeutens ventral vagale tilstedeværelse faciliterer simultant somatisk og relationel reconsolidation. Embodied co-regulering gennem hands-on work."
            },
            'psykobiologi-traumer': {
                klient: "Traumer ændrer din biologi - du producerer mere stresshormon, mindre glædeshormon. Men biologien kan normaliseres igen når traumerne bearbejdes og nervesystemet kommer i balance.",
                fagfolk: "PTSD og developmental trauma modificerer permanent HPA-akse reactivity, cortisol rytmer og inflammatoriske profiler. Traumebehandling gennem nervesystemsregulering kan normalisere disse biologiske markører gennem restoration af autonomic flexibility."
            },
            'psykobiologi-relation': {
                klient: "Gode relationer er biologi-medicin - de øger oxytocin, sænker cortisol, styrker immunforsvaret. Terapeutisk relation har målbar biologisk effekt på din krop.",
                fagfolk: "Secure therapeutic relationship øger endogent oxytocin, reducerer cortisol og pro-inflammatoriske cytokiner. Social connection aktiverer belønningssystemer (dopaminerg) og bufferer HPA-akse respons. Relationel intervention er direkte biologisk intervention."
            },
            'traumer-relation': {
                klient: "At arbejde med traumer kræver dyb sikkerhed i relationen. Uden et trygt fundament vil traumebearbejdning føles overvældende. Relationen kommer først, traumearbejdet bagefter.",
                fagfolk: "Traumebehandling forudsætter etableret therapeutic alliance og terapeutens robuste autonome regulering. Uden relational safety risikeres re-traumatisering gennem overwhelm. Co-regulering er forudsætning for sikker activation af traumatisk materiale."
            }
        }
    },
    angst: {
        name: "Angst",
        circles: {
            nervesystem: {
                klient: {
                    title: "Nervesystemsregulering ved Angst",
                    text: "Angst er nervesystemets alarm der kører konstant. Jeg hjælper dig med at regulere ned fra den kroniske alarmtilstand, så dit nervesystem kan lære at det faktisk er sikkert. Når systemet roer sig, forsvinder angsten naturligt."
                },
                fagfolk: {
                    title: "Nervesystemsregulering ved Angstlidelser",
                    text: "Angst manifesterer sig som kronisk sympatisk activation med nedsat vagal tone. Arbejder med gradvis down-regulation gennem bottom-up interventioner der genopbygger ventral vagal kapacitet og udvider window of tolerance."
                }
            },
            polyvagal: {
                klient: {
                    title: "Polyvagal Forståelse af Angst",
                    text: "Angst er når dit nervesystem sidder fast i gul zone - konstant alarm. Jeg lærer dig at genkende signalerne og finde veje tilbage til grøn sikker tilstand gennem konkrete teknikker."
                },
                fagfolk: {
                    title: "Polyvagal Teori og Angst",
                    text: "Angstlidelser repræsenterer fastholdelse i sympatisk mobilisering uden adgang til ventral vagal regulering. Neuroception fejltolker sikre situationer som farlige. Terapeutisk mål er genskabelse af polyvagal fleksibilitet."
                }
            },
            tilknytning: {
                klient: {
                    title: "Tilknytning og Angst",
                    text: "Meget angst har rødder i utryg tilknytning - hvor verden føltes upålidelig tidligt i livet. Vi arbejder med at skabe nye oplevelser af sikkerhed så angsten kan slippe sit greb."
                },
                fagfolk: {
                    title: "Tilknytningsmønstre ved Angst",
                    text: "Ambivalent og desorganiseret tilknytning korrelerer stærkt med angstlidelser. Hyperactivation af attachment system og konstant scanning for fare. Earned secure attachment reducerer angst-symptomer gennem reguleret autonomt nervesystem."
                }
            },
            kropsterapi: {
                klient: {
                    title: "Kropsarbejde ved Angst",
                    text: "Angst sidder i spændte skuldre, kort åndedræt og sammentrukket krop. Gennem blid behandling og åndedrætsarbejde lærer kroppen at slippe alarmen og finde ro igen."
                },
                fagfolk: {
                    title: "Somatisk Intervention ved Angst",
                    text: "Angst manifesteres somatisk som muskulær hypertonus, shallow breathing og fasicial restrictions. Direkte fascial release og respiratorisk intervention modulerer autonome outputs mere effektivt end top-down kognitive tilgange alene."
                }
            },
            psykobiologi: {
                klient: {
                    title: "Biologien bag Angst",
                    text: "Ved angst producerer kroppen for meget stresshormon og for lidt rolighedshormon. Ved at regulere nervesystemet normaliserer vi biologien - og angsten falder."
                },
                fagfolk: {
                    title: "Neurobiologi ved Angstlidelser",
                    text: "Dysreguleret HPA-akse med forhøjet baseline cortisol, reduceret GABA og serotonin. Autonomt nervesystem-regulering normaliserer neurotransmitter-balance og reducerer inflammatoriske markører associeret med kronisk angst."
                }
            },
            traumer: {
                klient: {
                    title: "Traumer og Angst",
                    text: "Angst er ofte resultatet af gamle traumer hvor nervesystemet aldrig slap alarmen. Vi arbejder forsigtigt med at fuldføre det ufærdige, så systemet kan slappe af."
                },
                fagfolk: {
                    title: "Traumatisk Oprindelse af Angst",
                    text: "Generaliseret angst ofte rodfæstet i uløste traumatiske incomplete defensive responses. Persistent hyperarousal som følge af manglende completion. Intervention gennem titreret trauma-processing reducerer angst-symptomer."
                }
            },
            relation: {
                klient: {
                    title: "Relationel Healing af Angst",
                    text: "I vores trygge relation lærer dit nervesystem at verden kan være sikker. Min ro smitter til dit system - det kaldes co-regulering, og det er fundamentet for at angsten kan forsvinde."
                },
                fagfolk: {
                    title: "Relationel Neurobiologi ved Angst",
                    text: "Terapeutens ventral vagale tilstedeværelse co-regulerer klientens hyperaroused autonome system. Gentagen erfaring af relational safety rekalibrerer neuroception og reducerer baseline angst gennem interpersonal neurobiological synchrony."
                }
            }
        },
        connections: {
            'nervesystem-polyvagal': {
                klient: "Ved angst sidder nervesystemet fast i alarm-tilstand. Polyvagal forståelse giver dig nøglen til at skifte gear tilbage til sikkerhed.",
                fagfolk: "Angst er kronisk sympatisk dominans uden ventral vagal adgang. Polyvagal-intervention genetablerer hierarkisk fleksibilitet."
            },
            'nervesystem-tilknytning': {
                klient: "Angstens nervesystem-mønstre blev ofte skabt i utryg tilknytning. Ved at heale tilknytningen heales angsten.",
                fagfolk: "Angst-relaterede autonome mønstre har ofte oprindelse i unsikker tilknytning. Earned secure attachment modificerer disse mønstre."
            },
            'nervesystem-kropsterapi': {
                klient: "Angst holder kroppen i konstant spænding. Kropsarbejde frigiver spændingerne og lader nervesystemet regulere ned.",
                fagfolk: "Angst-relateret somatisk hypertonus opretholdes autonome stress-responses. Fascial release bryder denne cyklus."
            },
            'nervesystem-psykobiologi': {
                klient: "Angstens biologi - høj cortisol, lav serotonin - normaliseres når nervesystemet finder ro.",
                fagfolk: "Nervesystemsregulering ved angst normaliserer HPA-akse og neurotransmitter-profiler."
            },
            'nervesystem-traumer': {
                klient: "Angst er ofte frosne traumer i nervesystemet. Ved at løsne det frosne forsvinder angsten.",
                fagfolk: "Angst som persisterende incomplete defensive response. Completion gennem titrering reducerer symptomer."
            },
            'nervesystem-relation': {
                klient: "Dit angstfyldte nervesystem lærer ro gennem vores relation - det er kernen i healing.",
                fagfolk: "Co-regulering i terapeutisk alliance er primær vej til modification af angst-relaterede autonome mønstre."
            },
            'polyvagal-tilknytning': {
                klient: "Utryg tilknytning skabte et nervesystem der lever i gul alarm. Vi lærer det grøn sikkerhed.",
                fagfolk: "Ambivalent tilknytning manifesteres som rigid sympatisk activation ved angst. Ventral vagal adgang er terapeutisk mål."
            },
            'polyvagal-kropsterapi': {
                klient: "Når kroppen behandles og lærer ro, sender det direkte beskeder til den gule alarm-zone om at det er sikkert.",
                fagfolk: "Somatisk intervention aktiverer ventral vagale pathways og bryder sympatisk dominans ved angst."
            },
            'polyvagal-psykobiologi': {
                klient: "Den grønne sikre tilstand skaber den rette biologi - lav cortisol, høj serotonin. Angst forsvinder.",
                fagfolk: "Ventral vagal aktivering optimerer neurotransmitter-balance og HPA-akse funktion ved angst."
            },
            'polyvagal-traumer': {
                klient: "Traumer låste systemet i gul alarm. At finde grøn sikkerhed først er nøglen til at heale traumet og angsten.",
                fagfolk: "Etablering af ventral vagal sikkerhed er forudsætning for trauma-processing ved angst."
            },
            'polyvagal-relation': {
                klient: "Min grønne ro smitter til dit gule angst-system gennem vores relation. Det er hvordan healing sker.",
                fagfolk: "Terapeuts ventral vagale tilstand co-regulerer sympatisk hyperarousal gennem social engagement system."
            },
            'tilknytning-kropsterapi': {
                klient: "Utryg tilknytning skabte en anspændt krop. Kropsarbejde lærer både krop og tilknytning ny sikkerhed.",
                fagfolk: "Tilknytningsmønstre ved angst er embodied. Somatisk intervention modificerer implicitte skemaer."
            },
            'tilknytning-psykobiologi': {
                klient: "Utryg tilknytning formede en biologi klar til angst. Ny sikker tilknytning omformer biologien.",
                fagfolk: "Unsikker tilknytning præger HPA-akse sensitivitet ved angst. Earned secure attachment normaliserer biologi."
            },
            'tilknytning-traumer': {
                klient: "Traumer i tidlige tilknytninger skabte angst som livslangt mønster. Healing kræver ekstra forsigtighed.",
                fagfolk: "Developmental trauma resulterer i desorganiseret tilknytning og angst. Kræver langsom relational safety-etablering."
            },
            'tilknytning-relation': {
                klient: "Vores trygge relation bliver det sted hvor du oplever sikker tilknytning - og angsten kan slippe.",
                fagfolk: "Terapeutisk relation som korrigerende tilknytningserfaring modificerer autonome angst-mønstre."
            },
            'kropsterapi-psykobiologi': {
                klient: "Når kroppen slipper angstens spændinger, følger biologien med - hormoner og neurotransmittere balanceres.",
                fagfolk: "Fascial release ved angst påvirker direkte vagal afferenter og neurotransmitter-frigivelse."
            },
            'kropsterapi-traumer': {
                klient: "Angst-traumer sidder frosset i kroppen. Meget forsigtigt kropsarbejde låser det frosne op.",
                fagfolk: "Angst-relaterede traumer manifesteres somatisk. Titreret proprioceptiv activation faciliterer integration."
            },
            'kropsterapi-relation': {
                klient: "At modtage tryg berøring i vores relation lærer din angstfyldte krop at verden kan være sikker.",
                fagfolk: "Terapeutisk touch kombineret med relational safety modificerer angst-relaterede somatiske mønstre."
            },
            'psykobiologi-traumer': {
                klient: "Traumer ændrede din biologi til angst-tilstand. Healing af traumet normaliserer biologien.",
                fagfolk: "Traumatisk modification af HPA-akse skaber angst. Trauma-processing normaliserer biologiske markører."
            },
            'psykobiologi-relation': {
                klient: "Vores trygge relation er biologi-medicin - den sænker cortisol og øger rolighedshormon, angsten falder.",
                fagfolk: "Secure alliance øger oxytocin og reducerer cortisol ved angst gennem neurobiologiske mekanismer."
            },
            'traumer-relation': {
                klient: "Angst-traumerne kan kun heales i dyb relationel sikkerhed. Vores relation er fundamentet.",
                fagfolk: "Trauma-baseret angst kræver robust alliance før processing. Co-regulering er absolut forudsætning."
            }
        }
    },
    tilknytning: {
        name: "Tilknytning",
        circles: {
            nervesystem: {
                klient: {
                    title: "Nervesystemet og Tilknytning",
                    text: "Dit tilknytningsmønster er kodet ind i nervesystemets reaktioner. Når vi regulerer nervesystemet, åbner vi muligheden for at skabe nye, sundere tilknytningsmønstre."
                },
                fagfolk: {
                    title: "Autonomt Nervesystem og Tilknytning",
                    text: "Tilknytningsmønstre er fundamentalt autonome mønstre. Nervesystemsregulering er forudsætning for earned secure attachment."
                }
            }
        },
        connections: {
            'nervesystem-polyvagal': {
                klient: "[Tilknytnings-kontekst dynamik kommer her]",
                fagfolk: "[Faglig tilknytnings-dynamik]"
            }
        }
    },
    stress: {
        name: "Stress",
        circles: {
            nervesystem: {
                klient: {
                    title: "Nervesystemet under Stress",
                    text: "Stress er når nervesystemet kører i overtid uden pause. Vi lærer dit system at skifte gear."
                },
                fagfolk: {
                    title: "Stressregulering via ANS",
                    text: "Kronisk stress repræsenterer manglende polyvagal fleksibilitet med fastholdelse i sympatisk activation."
                }
            }
        },
        connections: {
            'nervesystem-polyvagal': {
                klient: "[Stress-kontekst dynamik]",
                fagfolk: "[Faglig stress-dynamik]"
            }
        }
    },
    traumer: {
        name: "Traumer",
        circles: {
            nervesystem: {
                klient: {
                    title: "Nervesystemet efter Traume",
                    text: "Traumer fryser nervesystemet i forsvarstilstande. Vi arbejder forsigtigt med at optø det frosne."
                },
                fagfolk: {
                    title: "ANS-regulering ved Traume",
                    text: "Traumatisk materiale lagret som autonome forsvarstilstande kræver titreret activation."
                }
            }
        },
        connections: {
            'nervesystem-polyvagal': {
                klient: "[Traume-kontekst dynamik]",
                fagfolk: "[Faglig traume-dynamik]"
            }
        }
    },
    sovn: {
        name: "Søvn",
        circles: {
            nervesystem: {
                klient: {
                    title: "Søvn og Nervesystemet",
                    text: "Søvn kræver at nervesystemet kan slippe kontrollen. Vi lærer dit system at det er sikkert at slappe af."
                },
                fagfolk: {
                    title: "Søvnregulering via ANS",
                    text: "Søvn requires ventral vagal dominans og parasympatisk activation."
                }
            }
        },
        connections: {
            'nervesystem-polyvagal': {
                klient: "[Søvn-kontekst dynamik]",
                fagfolk: "[Faglig søvn-dynamik]"
            }
        }
    }
};

const exercises = [
    {
        title: "Find ro i nervesystemet",
        intro: "Denne øvelse er kernen i mit arbejde. Ved at lande i kroppen og mærke vejrtrækningen, aktiverer du naturligt den del af nervesystemet der skaber ro og sikkerhed. Det er simpelt, men dybt virkningsfuldt - og du kan gøre det hvor som helst.",
        steps: [
            "Sid eller læg dig komfortabelt. Luk gerne øjnene.",
            "Læg én hånd på dit bryst og én på maven.",
            "Mærk vejrtrækningen bevæge sig under dine hænder.",
            "Pust langsomt ud gennem munden - længere end du puster ind.",
            "Fortsæt i 3-5 minutter. Mærk kroppen blive tungere og mere afslappet."
        ]
    },
    {
        title: "Mærk din sikre tilstand",
        intro: "Polyvagal teori lærer os at nervesystemet har forskellige tilstande. I denne øvelse lærer du at genkende og aktivere din 'grønne' sikre tilstand - den tilstand hvor healing sker. At kunne finde tilbage hertil er fundamentalt for dit velvære.",
        steps: [
            "Tænk på et sted hvor du føler dig tryg - måske dit hjem, naturen, eller hos en elsket person.",
            "Luk øjnene og forestil dig at være der nu. Se detaljerne.",
            "Mærk hvordan din krop reagerer. Bliver skuldrene bløde? Bliver vejret dybere?",
            "Læg mærke til disse signaler - det er din sikre tilstand.",
            "Øv dig i at genkalde denne følelse når du har brug for ro."
        ]
    },
    {
        title: "Vagus-aktivering gennem åndedræt",
        intro: "Vagusnerven er motorvejen mellem hjerne og krop. Når vi aktiverer den gennem åndedræt, sender vi direkte besked til nervesystemet om at det er sikkert at slappe af. Denne øvelse er særligt kraftfuld ved stress og uro.",
        steps: [
            "Sid oprejst med en lige ryg.",
            "Pust ind gennem næsen i 4 tællinger.",
            "Hold vejret i 4 tællinger.",
            "Pust langsomt ud gennem munden i 6-8 tællinger.",
            "Gentag 10 gange. Mærk roen brede sig i kroppen."
        ]
    },
    {
        title: "Selvafgrænsning - mærk dit rum",
        intro: "Tilknytning handler også om at kunne mærke hvor du slutter og andre begynder. Denne øvelse styrker din kropslige selvfornemmelse og giver en følelse af at have et eget sikkert rum - særligt værdifuldt hvis du let 'mister dig selv' i relationer.",
        steps: [
            "Stå med fødderne i hoftebredde. Mærk kontakten med gulvet.",
            "Ryk let op og ned i knæene - mærk din vægt i benene.",
            "Løft langsomt armene ud til siden - mærk dit rum omkring dig.",
            "Forestil dig en boble omkring dig - det er dit rum.",
            "Ånd roligt og mærk: 'Dette er mit rum. Jeg er her.'"
        ]
    },
    {
        title: "Body scan - lyt til kroppen",
        intro: "Kroppen taler konstant til os gennem fornemmelser, men vi har glemt at lytte. Body scan genåbner denne dialog. Det er en grundlæggende øvelse i min praksis fordi den lærer dig at mærke hvad kroppen faktisk har brug for - før det bliver til symptomer.",
        steps: [
            "Læg dig på ryggen. Luk øjnene.",
            "Start med fødderne - mærk dem uden at ændre noget.",
            "Bevæg langsomt opmærksomheden op gennem ben, mave, bryst, arme, hoved.",
            "Hvis du finder spændinger, ånd blidt ind i dem - lad dem være der.",
            "Når du når hovedet, mærk hele kroppen på én gang i 1-2 minutter."
        ]
    }
];

const circleNames = {
    nervesystem: 'Nervesystemsregulering',
    polyvagal: 'Polyvagal teori',
    tilknytning: 'Tilknytningsmønstre',
    kropsterapi: 'Kropsterapi & Behandling',
    psykobiologi: 'Psykobiologi',
    traumer: 'Traumer & Dissociation',
    relation: 'Terapeutisk Relation'
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
let currentView = 'welcome';
let currentCircle = null;

window.addEventListener('load', () => {
    resetToWelcome();
});

document.addEventListener('DOMContentLoaded', () => {
    setupTopCircles();
    setupThemeSelector();
    setupExercisesButton();
    setupCircleClicks();
    setupConnectionClicks();
    resetToWelcome();
    updateCenterCircle();
});

function updateCenterCircle() {
    const centerTexts = document.querySelectorAll('.center-text');
    const themeName = themes[currentTheme].name;
    
    if (themeName === "Nervesystemsregulering") {
        centerTexts[0].textContent = "Nervesystem-";
        centerTexts[1].textContent = "regulering";
    } else {
        const words = themeName.split(' ');
        if (words.length === 1) {
            centerTexts[0].textContent = themeName;
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
    currentTheme = 'general';
    
    document.querySelectorAll('.top-circle[data-mode]').forEach(circle => {
        circle.classList.remove('active');
        if (circle.dataset.mode === 'klient') {
            circle.classList.add('active');
        }
    });
    
    document.getElementById('theme-label').textContent = 'Vælg tema';
    document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
    document.querySelector('.theme-option[data-theme="general"]').classList.add('active');
    document.getElementById('exercises-btn').classList.remove('active');
    
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
            
            document.getElementById('theme-label').textContent = 'Vælg tema';
            document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
            document.querySelector('.theme-option[data-theme="general"]').classList.add('active');
            
            updateCenterCircle();
            
            const infoPanel = document.getElementById('info-content');
            infoPanel.style.opacity = '0.3';
            setTimeout(() => {
                infoPanel.style.opacity = '1';
            }, 150);
            
            if (currentView === 'circle' && currentCircle) {
                showCircleView(currentCircle);
            } else {
                showWelcome();
            }
        });
    });
}

function setupThemeSelector() {
    const selector = document.getElementById('theme-selector');
    const dropdown = document.getElementById('theme-dropdown');
    
    selector.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });
    
    document.addEventListener('click', () => {
        dropdown.classList.remove('show');
    });
    
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            
            currentTheme = option.dataset.theme;
            
            document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            document.getElementById('theme-label').textContent = themeNames[currentTheme];
            dropdown.classList.remove('show');
            
            updateCenterCircle();
            
            showCircleView('nervesystem');
        });
    });
}

function setupExercisesButton() {
    document.getElementById('exercises-btn').addEventListener('click', () => {
        document.querySelectorAll('.top-circle').forEach(c => c.classList.remove('active'));
        document.getElementById('exercises-btn').classList.add('active');
        showExercises();
    });
}

function showExercises() {
    currentView = 'exercises';
    clearAllActive();
    
    const exercisesHTML = exercises.map((exercise, index) => `
        <div class="exercise-card">
            <h3>${exercise.title}</h3>
            <p class="exercise-intro">${exercise.intro}</p>
            <div class="exercise-steps">
                ${exercise.steps.map((step, i) => `
                    <div class="exercise-step" data-step="${i + 1}">
                        ${step}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    document.getElementById('info-content').innerHTML = `
        <div style="margin-bottom: 20px;">
            <button onclick="showWelcome()" class="back-btn">← Tilbage til oversigt</button>
        </div>
        <h2>Prøv øvelserne</h2>
        <p>Her er fem simple øvelser du kan prøve for at mærke hvordan nervesystemsregulering virker i praksis. Hver øvelse tager 3-5 minutter.</p>
        ${exercisesHTML}
    `;
}

function showWelcome() {
    currentView = 'welcome';
    currentCircle = null;
    clearAllActive();
    
    document.getElementById('info-content').innerHTML = `
        <h2>Velkommen</h2>
        <p>Her kan du udforske hvordan jeg arbejder med nervesystemet gennem seks forskellige perspektiver.</p>
        <p><strong>Sådan bruger du modellen:</strong></p>
        <ul>
            <li>Klik på en cirkel for at forstå metoden</li>
            <li>Skift mellem "Til klienter" og "Til fagfolk" for forskellige dybder</li>
            <li>Vælg et tema for at se hvordan jeg arbejder med det konkret</li>
            <li>Prøv øvelserne for at mærke metoderne i praksis</li>
        </ul>
    `;
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
    
    const themeData = themes[currentTheme];
    const circleData = themeData.circles[circleId];
    
    if (!circleData || !circleData[currentMode]) {
        document.getElementById('info-content').innerHTML = `
            <div style="margin-bottom: 20px;">
                <button onclick="showWelcome()" class="back-btn">← Tilbage til oversigt</button>
            </div>
            <h2>Indhold kommer snart</h2>
            <p>Dette tema er under udvikling. Prøv "Angst" temaet for at se fuldt indhold.</p>
        `;
        return;
    }
    
    const data = circleData[currentMode];
    const connectedCircles = getConnectedCircles(circleId);
    
    let connectionsHTML = '';
    connectedCircles.forEach(targetId => {
        const key1 = `${circleId}-${targetId}`;
        const key2 = `${targetId}-${circleId}`;
        const connectionData = themeData.connections ? (themeData.connections[key1] || themeData.connections[key2]) : null;
        
        if (connectionData && connectionData[currentMode]) {
            const targetName = circleNames[targetId];
            const dynamikText = connectionData[currentMode];
            
            connectionsHTML += `
                <div style="margin-top: 30px; padding-top: 25px; border-top: 2px solid #e8f0ec;">
                    <h3>${circleNames[circleId]} ↔ ${targetName}</h3>
                    <p>${dynamikText}</p>
                </div>
            `;
        }
    });
    
    document.getElementById('info-content').innerHTML = `
        <div style="margin-bottom: 20px;">
            <button onclick="showWelcome()" class="back-btn">← Tilbage til oversigt</button>
        </div>
        <h2>${data.title}</h2>
        <p>${data.text}</p>
        ${connectionsHTML}
    `;
}

window.showWelcome = showWelcome;
window.showCircleView = showCircleView;
window.showExercises = showExercises;

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
        t.style.fill = '#5a7a68';
        t.setAttribute('fill', '#5a7a68');
    });
}
