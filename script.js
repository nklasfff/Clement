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
                    text: "Dit tilknytningsmønster er kodet ind i nervesystemets reaktioner. Når vi regulerer nervesystemet, åbner vi muligheden for at skabe nye, sundere tilknytningsmønstre gennem faktiske oplevelser af sikkerhed."
                },
                fagfolk: {
                    title: "Autonomt Nervesystem og Tilknytning",
                    text: "Tilknytningsmønstre er fundamentalt autonome mønstre. Nervesystemsregulering er forudsætning for earned secure attachment. Arbejder med vagal tone som basis for relationel kapacitet og affektregulering."
                }
            },
            polyvagal: {
                klient: {
                    title: "Polyvagal og Tilknytning",
                    text: "Hvert tilknytningsmønster har sin nervesystem-signatur. Tryg tilknytning lever i grøn zone, mens utryg tilknytning sidder fast i gul eller rød. Vi lærer dit system at finde den grønne sikkerhed."
                },
                fagfolk: {
                    title: "Polyvagal Teori og Tilknytning",
                    text: "Sikker tilknytning korrelerer med ventral vagal dominans og polyvagal fleksibilitet. Unsikre mønstre viser rigid sympatisk (ambivalent) eller dorsal (undvigende) activation. Social engagement system er neurologisk substrat for attachment."
                }
            },
            tilknytning: {
                klient: {
                    title: "Forstå Dit Tilknytningsmønster",
                    text: "Vi udforsker sammen dit tilknytningsmønster - ikke for at dømme det, men for at forstå det. Når du ser mønstret kan du begynde at skabe nye måder at være i relationer på."
                },
                fagfolk: {
                    title: "Tilknytningsteori i Praksis",
                    text: "Adult Attachment Interview-inspireret udforskning af indre arbejdsmodeller. Fokus på reflective functioning og mentalization som veje til earned secure attachment. Integration af tilknytningsteori med neurobiologisk forståelse."
                }
            },
            kropsterapi: {
                klient: {
                    title: "Tilknytning i Kroppen",
                    text: "Tilknytningsmønstre sidder i hvordan du holder vejret, spænder kroppen, lukker ned. Gennem kropsarbejde kan vi skabe nye fysiske oplevelser af sikkerhed der ændrer mønstret."
                },
                fagfolk: {
                    title: "Embodied Tilknytning",
                    text: "Tilknytningsmønstre manifesteres somatisk i åndedræt, tonus, fasicial densitet. Somatisk intervention bypasser verbale forsvarsmekanismer og faciliterer reconsolidation af implicitte relationelle skemaer gennem proprioceptiv re-patterning."
                }
            },
            psykobiologi: {
                klient: {
                    title: "Tilknytningens Biologi",
                    text: "Dit tilknytningsmønster formede din biologis reaktioner på stress og nærhed. Men biologien er ikke fastlåst - gennem nye oplevelser kan vi omforme den."
                },
                fagfolk: {
                    title: "Neurobiologi af Tilknytning",
                    text: "Tidlig tilknytning former HPA-akse sensitivitet og oxytocin-receptor udtryk. Unsikker tilknytning korrelerer med dysreguleret cortisol og reduceret belønningsrespons. Earned secure attachment kan modificere disse biologiske signatures."
                }
            },
            traumer: {
                klient: {
                    title: "Traumer i Tilknytning",
                    text: "Traumer i tidlige relationer skaber desorganiseret tilknytning - hvor relationer er både farlige og det eneste sikre. Det kræver ekstra forsigtighed og tålmodighed at arbejde med."
                },
                fagfolk: {
                    title: "Developmental Trauma og Tilknytning",
                    text: "Developmental trauma inden for attachment system resulterer i desorganiseret tilknytning med simultane modsatrettede attachment og defense responses. Kræver langsom etablering af relational safety før tilknytningsarbejde kan påbegyndes."
                }
            },
            relation: {
                klient: {
                    title: "Nye Tilknytningsoplevelser",
                    text: "Vores terapeutiske relation bliver stedet hvor du kan opleve tryg tilknytning - måske for første gang. Det er gennem denne oplevelse at gamle mønstre kan ændres."
                },
                fagfolk: {
                    title: "Earned Secure Attachment",
                    text: "Terapeutisk relation som korrigerende emotionel erfaring. Konsistent tilgængelighed og afstemning modificerer indre arbejdsmodeller. Earned secure attachment faciliteres gennem gentagen erfaring af secure base og safe haven."
                }
            }
        },
        connections: {
            'nervesystem-polyvagal': {
                klient: "Tilknytningsmønstre er kodet som nervesystem-reaktioner. Polyvagal forståelse viser hvordan tryg tilknytning lever i grøn sikker tilstand.",
                fagfolk: "Tilknytningsmønstre manifesteres som specifikke polyvagale profiler. Sikker tilknytning korrelerer med ventral vagal fleksibilitet."
            },
            'nervesystem-tilknytning': {
                klient: "Når vi arbejder med nervesystemet, arbejder vi direkte med tilknytningsmønstre - de er det samme.",
                fagfolk: "Tilknytningsintervention er nervesystemsintervention. Earned secure attachment kræver autonome modifications."
            },
            'nervesystem-kropsterapi': {
                klient: "Tilknytningsmønstre sidder i kroppen. Kropsarbejde ændrer både nervesystem og tilknytning samtidigt.",
                fagfolk: "Tilknytningsmønstre er embodied. Somatisk intervention modificerer både autonome mønstre og relationelle skemaer."
            },
            'nervesystem-psykobiologi': {
                klient: "Tilknytningsmønstre formede din biologi. Ved at arbejde med nervesystemet omformer vi biologien.",
                fagfolk: "Tilknytning præger neurobiologi. Nervesystemsregulering kan modificere HPA-akse og oxytocin-systemer formet af early attachment."
            },
            'nervesystem-traumer': {
                klient: "Tilknytningstraumer sidder dybt i nervesystemet. Healing kræver særlig forsigtighed og langsom opbygning af sikkerhed.",
                fagfolk: "Developmental trauma skaber desorganiseret tilknytning med komplekse autonome mønstre. Kræver robuste interventionsteknikker."
            },
            'nervesystem-relation': {
                klient: "Dit nervesystem lærer nye tilknytningsmønstre gennem vores trygge relation.",
                fagfolk: "Terapeutisk relation faciliterer earned secure attachment gennem co-regulering og autonome modifications."
            },
            'polyvagal-tilknytning': {
                klient: "Hvert tilknytningsmønster har sin polyvagale signatur. Tryg er grøn, utryg er gul eller rød.",
                fagfolk: "Tilknytningsmønstre korrelerer med specifikke polyvagale profiler og autonome response-patterns."
            },
            'polyvagal-kropsterapi': {
                klient: "Kropsarbejde aktiverer den grønne sikre tilstand som er fundamentet for tryg tilknytning.",
                fagfolk: "Somatisk intervention aktiverer ventral vagale pathways nødvendige for secure attachment capacity."
            },
            'polyvagal-psykobiologi': {
                klient: "Den grønne sikre tilstand skaber den biologi der muliggør tryg tilknytning.",
                fagfolk: "Ventral vagal dominans optimerer neurobiologiske systemer der understøtter secure attachment."
            },
            'polyvagal-traumer': {
                klient: "Tilknytningstraumer låste systemet i usikre tilstande. Grøn sikkerhed er vejen til healing.",
                fagfolk: "Developmental trauma dysregulerer polyvagale responses. Ventral vagal etablering er forudsætning for tilknytningsarbejde."
            },
            'polyvagal-relation': {
                klient: "Min grønne ro lærer dit system tryg tilknytning gennem vores relation.",
                fagfolk: "Terapeuts ventral vagale tilstand co-regulerer og faciliterer secure attachment learning."
            },
            'tilknytning-kropsterapi': {
                klient: "Tilknytningsmønstre lever i kroppen. Kropsarbejde skaber nye oplevelser af sikkerhed.",
                fagfolk: "Embodied tilknytningsmønstre modificeres gennem proprioceptiv og interoceptiv re-patterning."
            },
            'tilknytning-psykobiologi': {
                klient: "Tidlig tilknytning formede din biologi. Ny sikker tilknytning kan omforme den.",
                fagfolk: "Tilknytningsmønstre præger HPA-akse og oxytocin-systemer. Earned secure attachment modificerer biologi."
            },
            'tilknytning-traumer': {
                klient: "Traumer i tidlige tilknytninger kræver ekstra forsigtighed - både farligt og eneste sikkerhed.",
                fagfolk: "Developmental trauma resulterer i desorganiseret tilknytning med modsatrettede impulser. Langsom safety-etablering påkrævet."
            },
            'tilknytning-relation': {
                klient: "Vores relation bliver det sted hvor du oplever tryg tilknytning for første gang eller igen.",
                fagfolk: "Terapeutisk relation som korrigerende erfaring modificerer indre arbejdsmodeller gennem konsistent tilgængelighed."
            },
            'kropsterapi-psykobiologi': {
                klient: "Kropsarbejde skaber nye tilknytningsoplevelser der ændrer biologien.",
                fagfolk: "Somatisk intervention påvirker neurobiologiske systemer der understøtter attachment capacity."
            },
            'kropsterapi-traumer': {
                klient: "Tilknytningstraumer sidder i kroppen. Forsigtigt kropsarbejde integrerer det splittet.",
                fagfolk: "Developmental trauma manifesteres somatisk. Titreret intervention faciliterer integration."
            },
            'kropsterapi-relation': {
                klient: "Tryg berøring i vores relation lærer kroppen at tilknytning kan være sikker.",
                fagfolk: "Terapeutisk touch kombineret med relational safety modificerer embodied tilknytningsmønstre."
            },
            'psykobiologi-traumer': {
                klient: "Tilknytningstraumer ændrede din biologi. Healing normaliserer den.",
                fagfolk: "Developmental trauma modificerer neurobiologi. Tilknytningsarbejde kan normalisere biologiske signatures."
            },
            'psykobiologi-relation': {
                klient: "Vores trygge relation er biologi-medicin der skaber tilknytningssikkerhed.",
                fagfolk: "Secure alliance modificerer oxytocin og cortisol-systemer og faciliterer biologisk grundlag for attachment."
            },
            'traumer-relation': {
                klient: "Tilknytningstraumer kan kun heales i dyb relationel sikkerhed.",
                fagfolk: "Developmental trauma kræver robust alliance før processing. Relational safety er absolut forudsætning."
            }
        }
    },
    stress: {
        name: "Stress",
        circles: {
            nervesystem: {
                klient: {
                    title: "Nervesystemet under Stress",
                    text: "Stress er når nervesystemet kører i overtid uden at få pause. Vi arbejder med at lære dit system at skifte gear - at kunne mobilisere energi når nødvendigt, men også finde dyb hvile."
                },
                fagfolk: {
                    title: "Stressregulering via ANS",
                    text: "Kronisk stress repræsenterer manglende polyvagal fleksibilitet med fastholdelse i sympatisk activation. Terapeutisk fokus på genopbygning af vagal brake-funktion og restoration af naturlig autonome oscillation mellem activation og restoration."
                }
            },
            polyvagal: {
                klient: {
                    title: "Polyvagal Forståelse af Stress",
                    text: "Stress er gul zone uden vej tilbage til grøn. Vi finder sammen de konkrete triggere der sender dig i stress og lærer dig veje tilbage til den sikre grønne tilstand."
                },
                fagfolk: {
                    title: "Polyvagal Teori ved Stress",
                    text: "Kronisk stress er vedvarende sympatisk dominans uden ventral vagal recovery. Nedsat vagal brake function. Intervention gennem aktivering af social engagement system og respiratory sinus arrhythmia restoration."
                }
            },
            tilknytning: {
                klient: {
                    title: "Tilknytning og Stress",
                    text: "Hvis du voksede op uden pålidelig hjælp til at regulere stress, har dit system aldrig lært det. Vi skaber den manglende co-regulering nu, så dit system lærer at stresse ned."
                },
                fagfolk: {
                    title: "Tilknytning og Stressregulering",
                    text: "Manglende early co-regulation resulterer i deficits i selvregulering af stress. Unsikker tilknytning korrelerer med dysreguleret HPA-akse og øget stress-vulnerabilitet. Terapeutisk co-regulation lærer systemet ny stress-respons."
                }
            },
            kropsterapi: {
                klient: {
                    title: "Stress i Kroppen",
                    text: "Stress manifesterer sig som spændinger, hovedpine, dårlig søvn. Gennem behandling og åndedrætsarbejde hjælper vi kroppen med fysisk at slippe stress-mønstrene."
                },
                fagfolk: {
                    title: "Somatisk Stressintervention",
                    text: "Stress-relateret muskulær hypertonus og fasicial restrictions opretholdes autonome stress-responses. Direkte somatisk intervention via fascial release og vagus-aktivering gennem åndedræt modulerer HPA-akse reactivity."
                }
            },
            psykobiologi: {
                klient: {
                    title: "Stress-biologien",
                    text: "Ved kronisk stress producerer kroppen konstant cortisol hvilket nedslider systemet. Vi arbejder med at normalisere din biologi så kroppen kan hele og restituere sig."
                },
                fagfolk: {
                    title: "Neurobiologi ved Kronisk Stress",
                    text: "Kronisk stress dysregulerer HPA-akse med fladt cortisol-døgnrytme, reduceret DHEA, øget inflammatoriske cytokiner. Autonomt nervesystem-regulering kan normalisere disse biomarkører gennem restoration af vagal tone."
                }
            },
            traumer: {
                klient: {
                    title: "Traumer og Stress",
                    text: "Meget kronisk stress har rod i gamle traumer hvor systemet lærte at verden er farlig. Vi arbejder forsigtigt med at heale traumerne så stress-responsen kan normaliseres."
                },
                fagfolk: {
                    title: "Traumatisk Stress",
                    text: "PTSD og developmental trauma skaber persisterende baseline hyperarousal. Incomplete fight/flight responses opretholdes som kronisk stress. Trauma-processing gennem somatic experiencing reducerer stress-symptomer."
                }
            },
            relation: {
                klient: {
                    title: "Relationel Ro ved Stress",
                    text: "I vores trygge relation lærer dit nervesystem at det er okay at slippe kontrollen. Min ro bliver din ro - det er sådan stress-mønstre kan ændres fundamentalt."
                },
                fagfolk: {
                    title: "Co-regulering af Stress",
                    text: "Terapeutens ventral vagale tilstand fungerer som ekstern regulator af klientens stress-response. Gentagen co-regulation opbygger intern kapacitet til selvregulering gennem neuroplasticitet i autonome circuits."
                }
            }
        },
        connections: {
            'nervesystem-polyvagal': {
                klient: "Stress er nervesystemet i gul alarm uden ro. Polyvagal forståelse viser vejen tilbage til grøn.",
                fagfolk: "Kronisk stress er sympatisk dominans uden ventral vagal recovery. Polyvagal intervention restaurerer fleksibilitet."
            },
            'nervesystem-tilknytning': {
                klient: "Stress-mønstre blev ofte skabt i utryg tilknytning uden co-regulering. Vi skaber den manglende regulering nu.",
                fagfolk: "Manglende early co-regulation skaber stress-vulnerabilitet. Terapeutisk co-regulation modificerer autonome mønstre."
            },
            'nervesystem-kropsterapi': {
                klient: "Stress sidder som spændinger i kroppen. Kropsarbejde frigiver spændinger og regulerer nervesystemet.",
                fagfolk: "Stress-relateret somatisk hypertonus opretholdes stress-responses. Fascial release bryder cyklus."
            },
            'nervesystem-psykobiologi': {
                klient: "Stress-biologien med høj cortisol normaliseres når nervesystemet finder ro.",
                fagfolk: "Nervesystemsregulering ved stress normaliserer HPA-akse dysregulation."
            },
            'nervesystem-traumer': {
                klient: "Kronisk stress har ofte rod i gamle traumer. Healing af traumer normaliserer stress-respons.",
                fagfolk: "PTSD skaber persisterende hyperarousal. Trauma-processing reducerer baseline stress."
            },
            'nervesystem-relation': {
                klient: "Dit stress-system lærer ro gennem vores trygge relation - det er vejen til varig ændring.",
                fagfolk: "Co-regulering i alliance modificerer stress-relaterede autonome mønstre gennem neuroplasticitet."
            },
            'polyvagal-tilknytning': {
                klient: "Utryg tilknytning skabte et system der stresser let. Vi lærer det ny sikkerhed.",
                fagfolk: "Unsikker tilknytning korrelerer med stress-vulnerabilitet. Earned secure attachment reducerer sympatisk reactivity."
            },
            'polyvagal-kropsterapi': {
                klient: "Kropsarbejde aktiverer den grønne ro-tilstand som modvægt til gul stress.",
                fagfolk: "Somatisk intervention aktiverer ventral vagale pathways og modulerer stress-responses."
            },
            'polyvagal-psykobiologi': {
                klient: "Grøn sikker tilstand skaber optimal biologi - stress-hormonerne normaliseres.",
                fagfolk: "Ventral vagal aktivering optimerer HPA-akse funktion og reducerer stress-biomarkører."
            },
            'polyvagal-traumer': {
                klient: "Traumer fastlåste systemet i stress. Grøn sikkerhed først, så kan traumet heales.",
                fagfolk: "Traumatisk hyperarousal kræver ventral vagal etablering før trauma-processing."
            },
            'polyvagal-relation': {
                klient: "Min ro smitter til dit stress-system gennem vores relation.",
                fagfolk: "Terapeuts ventral vagale tilstand co-regulerer sympatisk hyperarousal ved stress."
            },
            'tilknytning-kropsterapi': {
                klient: "Manglende early co-regulering skabte stress i kroppen. Kropsarbejde lærer ny regulering.",
                fagfolk: "Stress-vulnerabilitet er embodied. Somatisk intervention modificerer stress-relaterede somatiske mønstre."
            },
            'tilknytning-psykobiologi': {
                klient: "Utryg tilknytning formede en stress-følsom biologi. Ny sikkerhed omformer den.",
                fagfolk: "Unsikker tilknytning præger HPA-akse sensitivitet. Earned secure attachment modificerer stress-biologi."
            },
            'tilknytning-traumer': {
                klient: "Tilknytningstraumer skabte kronisk stress. Healing kræver tryg relation først.",
                fagfolk: "Developmental trauma resulterer i dysreguleret stress-respons. Langsom safety-etablering påkrævet."
            },
            'tilknytning-relation': {
                klient: "Vores relation lærer dit system at stress kan reguleres i trygge relationer.",
                fagfolk: "Terapeutisk co-regulation modificerer stress-vulnerabilitet gennem earned secure attachment."
            },
            'kropsterapi-psykobiologi': {
                klient: "Når kroppen slipper stress-spændinger, normaliseres hormoner og neurotransmittere.",
                fagfolk: "Fascial release ved stress påvirker vagal afferenter og HPA-akse funktion."
            },
            'kropsterapi-traumer': {
                klient: "Stress-traumer sidder frosset i kroppen. Forsigtigt kropsarbejde frigiver dem.",
                fagfolk: "Traumatisk stress manifesteres somatisk. Titreret intervention faciliterer completion."
            },
            'kropsterapi-relation': {
                klient: "Tryg berøring i vores relation lærer kroppen at stress kan reguleres.",
                fagfolk: "Terapeutisk touch kombineret med relational safety modificerer stress-responses."
            },
            'psykobiologi-traumer': {
                klient: "Traumer ændrede stress-biologien. Healing normaliserer cortisol og andre hormoner.",
                fagfolk: "Traumatisk modification af HPA-akse. Trauma-processing kan normalisere stress-biomarkører."
            },
            'psykobiologi-relation': {
                klient: "Vores trygge relation er stress-medicin - sænker cortisol, øger ro-hormoner.",
                fagfolk: "Secure alliance modificerer HPA-akse og oxytocin-systemer ved kronisk stress."
            },
            'traumer-relation': {
                klient: "Stress-traumer kan kun heales i dyb sikkerhed. Vores relation er fundamentet.",
                fagfolk: "Trauma-baseret stress kræver robust alliance før processing. Co-regulering absolut påkrævet."
            }
        }
    },
    traumer: {
        name: "Traumer",
        circles: {
            nervesystem: {
                klient: {
                    title: "Nervesystemet efter Traume",
                    text: "Traumer fryser nervesystemet i forsvarstilstande. Vi arbejder forsigtigt med at optø det frosne så systemet kan finde tilbage til naturlig fleksibilitet og sikkerhed."
                },
                fagfolk: {
                    title: "ANS-regulering ved Traume",
                    text: "Traumatisk materiale lagret som autonome forsvarstilstande (freeze, collapse, fight/flight). Terapeutisk fokus på titreret activation inden for window of tolerance for at facilitere completion af incomplete defensive responses."
                }
            },
            polyvagal: {
                klient: {
                    title: "Polyvagal Forståelse af Traume",
                    text: "Traumer sender systemet i rød nedluknings-zone eller gul alarm. Vi finder veje til gradvis at aktivere den grønne sikre zone som fundament for at traumet kan integreres."
                },
                fagfolk: {
                    title: "Polyvagal Teori ved Traume",
                    text: "Traumatisk immobilisering repræsenterer dorsal vagal dominans med sympatisk co-activation. Healing kræver først etablering af ventral vagal sikkerhed før traumemateriale kan aktiveres gennem oscillation mellem states."
                }
            },
            tilknytning: {
                klient: {
                    title: "Tilknytningstraumer",
                    text: "Traumer i tidlige tilknytningsrelationer er de sværeste fordi de skete hvor du skulle være mest sikker. Vi arbejder med ekstra omsorg for at skabe ny sikkerhed."
                },
                fagfolk: {
                    title: "Developmental Trauma",
                    text: "Developmental trauma inden for attachment system skaber desorganiseret tilknytning og kompleks PTSD. Kræver langvarig etablering af therapeutic alliance før traumemateriale kan adresseres. Fokus på relationel sikkerhed som forudsætning."
                }
            },
            kropsterapi: {
                klient: {
                    title: "Traumer i Kroppen",
                    text: "Traumer sidder som frosne mønstre i kroppen - spændinger, følelsesløshed, fragmentering. Gennem meget forsigtigt kropsarbejde kan det frosne begynde at optø i eget tempo."
                },
                fagfolk: {
                    title: "Somatic Experiencing",
                    text: "Traumatisk materiale manifesteres som incomplete motoriske sekvenser, fasicial immobility, reduced interoception. Intervention gennem titreret proprioceptiv og interoceptiv activation faciliterer completion og restoration af embodied wholeness."
                }
            },
            psykobiologi: {
                klient: {
                    title: "Traumets Biologi",
                    text: "Traumer ændrer kroppens biologi dybtgående - hormoner, immunsystem, søvn. Ved at heale traumet normaliserer biologien sig gradvist og kroppen kan restituere."
                },
                fagfolk: {
                    title: "Neurobiologi efter Traume",
                    text: "PTSD modificerer permanent HPA-akse med fladt cortisol-døgnrytme, øget inflammatoriske cytokiner, altered hippocampal volume. Trauma-processing kan normalisere disse biomarkører gennem restoration af autonomic flexibility."
                }
            },
            traumer: {
                klient: {
                    title: "At Heale Traumer",
                    text: "Traumer heales ikke ved at tale om dem, men ved forsigtigt at fuldføre det der blev afbrudt. Vi arbejder med kroppen og nervesystemet for at integrere det splittet."
                },
                fagfolk: {
                    title: "Traumebearbejdning",
                    text: "Peter Levines Somatic Experiencing og van der Kolks forskning som fundament. Fokus på completion af incomplete defensive responses gennem titrering og pendulering. Dissociation kræver specifik opmærksomhed på window of tolerance."
                }
            },
            relation: {
                klient: {
                    title: "Relationel Sikkerhed ved Traume",
                    text: "At arbejde med traumer kræver dyb tillid. Vores relation bliver det sikre fundament hvorfra du kan se på det svære uden at blive overvældet."
                },
                fagfolk: {
                    title: "Terapeutisk Alliance ved Traume",
                    text: "Traumebehandling forudsætter robust therapeutic alliance og terapeutens egen autonome regulering. Uden relational safety risikeres re-traumatisering. Co-regulering er absolut forudsætning for sikker activation af traumatisk materiale."
                }
            }
        },
        connections: {
            'nervesystem-polyvagal': {
                klient: "Traumer fryser nervesystemet i rød eller gul. Polyvagal forståelse viser vejen til grøn sikkerhed først.",
                fagfolk: "Traumatisk immobilisering er dorsal/sympatisk co-activation. Ventral vagal etablering er forudsætning for processing."
            },
            'nervesystem-tilknytning': {
                klient: "Tilknytningstraumer påvirker nervesystemet dybest fordi de skete hvor du skulle være sikrest.",
                fagfolk: "Developmental trauma skaber komplekse autonome mønstre. Earned secure attachment gennem terapeutisk relation er central."
            },
            'nervesystem-kropsterapi': {
                klient: "Traumer sidder frosset i nervesystem og krop. Forsigtigt kropsarbejde optør begge dele.",
                fagfolk: "Traumatisk materiale manifesteres somatisk og autonomt. Titreret somatisk intervention faciliterer completion."
            },
            'nervesystem-psykobiologi': {
                klient: "Traumer ændrer nervesystem og biologi. Ved at heale det ene, heales det andet.",
                fagfolk: "PTSD modificerer både autonomt nervesystem og neurobiologi. Regulering normaliserer begge."
            },
            'nervesystem-traumer': {
                klient: "At arbejde med traumer ER at arbejde med nervesystemet - de er ét og samme.",
                fagfolk: "Traumatisk materiale ER autonome forsvarstilstande. Trauma-processing ER nervesystemsregulering."
            },
            'nervesystem-relation': {
                klient: "Dit traumatiserede nervesystem lærer sikkerhed gennem vores trygge relation.",
                fagfolk: "Co-regulering i robust alliance faciliterer sikker trauma-processing gennem autonome modifications."
            },
            'polyvagal-tilknytning': {
                klient: "Tilknytningstraumer skabte usikre polyvagale mønstre. Vi lærer systemet grøn sikkerhed.",
                fagfolk: "Developmental trauma dysregulerer polyvagale responses. Earned secure attachment restaurerer fleksibilitet."
            },
            'polyvagal-kropsterapi': {
                klient: "Kropsarbejde aktiverer grøn sikkerhed som fundament for at traumet kan integreres.",
                fagfolk: "Somatisk intervention aktiverer ventral vagale pathways nødvendige for sikker trauma-processing."
            },
            'polyvagal-psykobiologi': {
                klient: "Grøn sikker tilstand skaber den biologi der muliggør trauma-healing.",
                fagfolk: "Ventral vagal aktivering optimerer neurobiologi for trauma-processing og integration."
            },
            'polyvagal-traumer': {
                klient: "Traumer fastlåste systemet i rød/gul. Grøn sikkerhed er nøglen til at låse det op.",
                fagfolk: "Traumatisk immobilisering kræver ventral vagal etablering før materiale kan aktiveres sikkert."
            },
            'polyvagal-relation': {
                klient: "Min grønne sikkerhed lærer dit traumatiserede system at det kan være sikkert.",
                fagfolk: "Terapeuts ventral vagale tilstand co-regulerer og skaber sikker base for trauma-arbejde."
            },
            'tilknytning-kropsterapi': {
                klient: "Tilknytningstraumer er embodied. Forsigtigt kropsarbejde integrerer det splittet.",
                fagfolk: "Developmental trauma manifesteres somatisk. Titreret somatisk intervention faciliterer reconsolidation."
            },
            'tilknytning-psykobiologi': {
                klient: "Tilknytningstraumer formede biologien. Healing af traumer normaliserer den.",
                fagfolk: "Developmental trauma modificerer neurobiologi. Tilknytningsarbejde kan normalisere biologiske signatures."
            },
            'tilknytning-traumer': {
                klient: "Traumer i tilknytning er de dybeste - både farligt og eneste sikkerhed på samme tid.",
                fagfolk: "Developmental trauma resulterer i desorganiseret tilknytning med modsatrettede impulser. Ekstra forsigtighed påkrævet."
            },
            'tilknytning-relation': {
                klient: "Vores relation bliver det sikre sted hvor tilknytningstraumer kan heales.",
                fagfolk: "Terapeutisk relation som korrigerende erfaring er central for developmental trauma healing."
            },
            'kropsterapi-psykobiologi': {
                klient: "Når kroppen integrerer traumet, følger biologien med - hormoner normaliseres.",
                fagfolk: "Somatisk trauma-processing påvirker neurobiologi og normaliserer HPA-akse dysregulation."
            },
            'kropsterapi-traumer': {
                klient: "Traumer sidder i kroppen som ufærdige forsvar. Kropsarbejde fuldfører dem.",
                fagfolk: "Incomplete defensive responses manifesteres somatisk. Titreret intervention faciliterer completion."
            },
            'kropsterapi-relation': {
                klient: "Tryg berøring i vores relation lærer traumatiseret krop at verden kan være sikker.",
                fagfolk: "Terapeutisk touch kombineret med relational safety faciliterer somatisk trauma-integration."
            },
            'psykobiologi-traumer': {
                klient: "Traumer ændrer biologien dybtgående. Healing normaliserer hormoner og immunsystem.",
                fagfolk: "PTSD modificerer HPA-akse og inflammatoriske profiler. Trauma-processing normaliserer biomarkører."
            },
            'psykobiologi-relation': {
                klient: "Vores trygge relation er biologi-medicin der gør trauma-healing mulig.",
                fagfolk: "Secure alliance modificerer neurobiologi og skaber optimal kontekst for trauma-processing."
            },
            'traumer-relation': {
                klient: "Traumer kan kun heales i dyb sikkerhed. Vores relation ER healing.",
                fagfolk: "Traumebehandling forudsætter robust alliance. Uden relational safety risikeres re-traumatisering."
            }
        }
    },
    sovn: {
        name: "Søvn",
        circles: {
            nervesystem: {
                klient: {
                    title: "Søvn og Nervesystemet",
                    text: "Søvn kræver at nervesystemet kan slippe kontrollen og falde til ro. Ved søvnproblemer lærer vi dit system at det er sikkert at slappe helt af og overlade sig til søvnen."
                },
                fagfolk: {
                    title: "Søvnregulering via ANS",
                    text: "Søvn kræver ventral vagal dominans og parasympatisk activation. Søvnforstyrrelser ofte resultat af manglende down-regulation capability. Intervention gennem vagal tone-opbygning og circadian rhythm restoration."
                }
            },
            polyvagal: {
                klient: {
                    title: "Polyvagal og Søvn",
                    text: "Søvn er kun mulig i den grønne sikre zone. Hvis dit system sidder fast i gul alarm kan du ikke sove. Vi finder veje til den dybe grønne ro som er forudsætning for søvn."
                },
                fagfolk: {
                    title: "Polyvagal Teori og Søvn",
                    text: "Søvn kræver ventral vagal sikkerhed. Insomni ofte udtryk for sympatisk hyperarousal eller dorsal shutdown uden ventral vagal adgang. Terapeutisk mål er etablering af polyvagal fleksibilitet for circadian oscillation."
                }
            },
            tilknytning: {
                klient: {
                    title: "Tilknytning og Søvn",
                    text: "Hvis du aldrig lærte at verden var sikker nok til at lukke øjnene i, har dit system svært ved at sove. Vi arbejder med at skabe den manglende grundsikkerhed."
                },
                fagfolk: {
                    title: "Attachment og Søvnregulering",
                    text: "Desorganiseret og unsikker tilknytning korrelerer med søvnforstyrrelser. Manglende early co-regulation af arousal påvirker søvnkapacitet livslangt. Earned secure attachment kan restaurere naturlig søvnregulering."
                }
            },
            kropsterapi: {
                klient: {
                    title: "Kropslig Søvnforbedring",
                    text: "Spændinger i kroppen holder dig vågen. Gennem behandling og særligt åndedrætsarbejde lærer kroppen at slippe og finde den dybe ro der inviterer søvn."
                },
                fagfolk: {
                    title: "Somatisk Søvnintervention",
                    text: "Muskulær hypertonus og fasicial restrictions inhiberer parasympatisk activation nødvendig for søvn. Fascial release og vagus-aktivering gennem diaphragmatisk åndedræt faciliterer transition til søvn-permissive state."
                }
            },
            psykobiologi: {
                klient: {
                    title: "Søvnens Biologi",
                    text: "Din søvn-væk rytme styres af hormoner og nervesystemet. Vi arbejder med at normalisere biologien så din naturlige døgnrytme kan genetableres."
                },
                fagfolk: {
                    title: "Søvn-Neurobiologi",
                    text: "Søvnforstyrrelser involverer dysreguleret HPA-akse med forhøjet natcortisol, reduceret melatonin, altered circadian rhythm. Autonomt nervesystem-regulering kan normalisere disse patterns gennem vagal tone restoration."
                }
            },
            traumer: {
                klient: {
                    title: "Traumer og Søvn",
                    text: "Traumer skaber hyper-vågenhed hvor systemet ikke tør slippe kontrollen nok til at sove. Ved at heale traumerne kan den naturlige søvnevne returnere."
                },
                fagfolk: {
                    title: "Traumatisk Hypervigilance",
                    text: "PTSD-relateret hypervigilance inhiberer søvn gennem persistent sympatisk activation. Traumebearbejdning reducerer baseline arousal og restaurerer capacity for circadian down-regulation nødvendig for søvn."
                }
            },
            relation: {
                klient: {
                    title: "Tryg nok til at Sove",
                    text: "Vores arbejde sammen skaber en dyb sikkerhed som dit system kan tage med sig. Når systemet lærer at verden er sikker nok, kommer søvnen naturligt."
                },
                fagfolk: {
                    title: "Relationel Søvnregulering",
                    text: "Terapeutisk co-regulation opbygger intern kapacitet til self-soothing nødvendig for søvn. Gentagen erfaring af ventral vagal sikkerhed i relation generaliserer til capacity for autonomous down-regulation ved sengetid."
                }
            }
        },
        connections: {
            'nervesystem-polyvagal': {
                klient: "Søvn kræver at nervesystemet er i grøn ro. Polyvagal forståelse viser vejen dertil.",
                fagfolk: "Søvn kræver ventral vagal dominans. Polyvagal intervention faciliterer transition til søvn-permissive state."
            },
            'nervesystem-tilknytning': {
                klient: "Søvnproblemer har ofte rod i utryg tilknytning uden co-regulering. Vi skaber den manglende sikkerhed.",
                fagfolk: "Manglende early co-regulation af arousal påvirker søvn. Earned secure attachment restaurerer søvnregulering."
            },
            'nervesystem-kropsterapi': {
                klient: "Kroppen kan ikke sove når den er anspændt. Kropsarbejde lærer den at slippe.",
                fagfolk: "Somatisk hypertonus inhiberer søvn. Fascial release faciliterer parasympatisk activation nødvendig for søvn."
            },
            'nervesystem-psykobiologi': {
                klient: "Når nervesystemet roer sig, normaliseres søvn-biologien - melatonin stiger, cortisol falder.",
                fagfolk: "Nervesystemsregulering normaliserer circadian rhythm og søvn-relaterede hormoner."
            },
            'nervesystem-traumer': {
                klient: "Traumer skaber vågenhed der forhindrer søvn. Healing af traumer genopretter søvnevne.",
                fagfolk: "PTSD-relateret hypervigilance inhiberer søvn. Trauma-processing reducerer baseline arousal."
            },
            'nervesystem-relation': {
                klient: "Dit nervesystem lærer dyb ro gennem vores relation - ro nok til søvn.",
                fagfolk: "Terapeutisk co-regulation opbygger intern kapacitet til down-regulation nødvendig for søvn."
            },
            'polyvagal-tilknytning': {
                klient: "Utryg tilknytning skabte et system der ikke kan slappe af til søvn. Vi lærer det sikkerhed.",
                fagfolk: "Unsikker tilknytning korrelerer med søvnforstyrrelser. Earned secure attachment faciliterer søvn."
            },
            'polyvagal-kropsterapi': {
                klient: "Kropsarbejde aktiverer den grønne ro der gør søvn mulig.",
                fagfolk: "Somatisk intervention aktiverer ventral vagale pathways for søvn-transition."
            },
            'polyvagal-psykobiologi': {
                klient: "Grøn sikker tilstand skaber den rette søvn-biologi - melatonin, lav cortisol.",
                fagfolk: "Ventral vagal aktivering optimerer circadian hormoner og faciliterer søvn."
            },
            'polyvagal-traumer': {
                klient: "Traumer fastlåste systemet i vågenhed. Grøn sikkerhed er vejen til søvn igen.",
                fagfolk: "Traumatisk hyperarousal inhiberer ventral vagal access. Sikkerhed-etablering er forudsætning."
            },
            'polyvagal-relation': {
                klient: "Min ro lærer dit system den dybe sikkerhed der muliggør søvn.",
                fagfolk: "Terapeuts ventral vagale tilstand co-regulerer og lærer systemet down-regulation for søvn."
            },
            'tilknytning-kropsterapi': {
                klient: "Manglende sikkerhed skabte en kropp der ikke kan slappe af til søvn. Kropsarbejde lærer ro.",
                fagfolk: "Søvnproblemer er ofte embodied tilknytningsproblemer. Somatisk intervention modificerer mønstre."
            },
            'tilknytning-psykobiologi': {
                klient: "Utryg tilknytning formede søvn-biologi. Ny sikkerhed normaliserer den.",
                fagfolk: "Unsikker tilknytning præger HPA-akse og søvn-hormoner. Earned secure attachment modificerer biologi."
            },
            'tilknytning-traumer': {
                klient: "Tilknytningstraumer skabte vågenhed og søvnløshed. Healing kræver dyb sikkerhed.",
                fagfolk: "Developmental trauma resulterer i søvnforstyrrelser. Langsom relational safety-etablering påkrævet."
            },
            'tilknytning-relation': {
                klient: "Vores trygge relation lærer dit system at det er sikkert nok til at sove.",
                fagfolk: "Terapeutisk relation som sikker base faciliterer internalisering af self-soothing for søvn."
            },
            'kropsterapi-psykobiologi': {
                klient: "Når kroppen lærer ro, følger søvn-biologien med - hormoner normaliseres.",
                fagfolk: "Somatisk ro-aktivering påvirker HPA-akse og circadian hormoner for søvn."
            },
            'kropsterapi-traumer': {
                klient: "Traumer holder kroppen vågen. Forsigtigt kropsarbejde frigiver den til søvn.",
                fagfolk: "Traumatisk somatisk hyperarousal inhiberer søvn. Titreret intervention reducerer activation."
            },
            'kropsterapi-relation': {
                klient: "Tryg berøring lærer kroppen at den kan slappe af nok til søvn.",
                fagfolk: "Terapeutisk touch kombineret med relational safety faciliterer somatisk down-regulation."
            },
            'psykobiologi-traumer': {
                klient: "Traumer ødelagde søvn-biologien. Healing normaliserer hormoner og søvnrytme.",
                fagfolk: "PTSD modificerer circadian rhythm og HPA-akse. Trauma-processing kan normalisere søvn-biologi."
            },
            'psykobiologi-relation': {
                klient: "Vores trygge relation er søvn-medicin - normaliserer hormoner og skaber ro.",
                fagfolk: "Secure alliance modificerer HPA-akse og faciliterer biologisk grundlag for søvn."
            },
            'traumer-relation': {
                klient: "Traumer kan kun heales i dyb sikkerhed - og så kommer søvnen tilbage.",
                fagfolk: "Traumebehandling kræver robust alliance. Relational safety faciliterer resolution af hypervigilance."
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

// UDDANNELSER
const educations = {
    nervesystemsterapeut: {
        name: "Nervesystemsterapeut",
        circles: {
            nervesystem: { kursist: { title: "Nervesystemsterapeut", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            polyvagal: { kursist: { title: "Polyvagal", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            tilknytning: { kursist: { title: "Tilknytning", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            kropsterapi: { kursist: { title: "Kropsterapi", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            psykobiologi: { kursist: { title: "Psykobiologi", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            traumer: { kursist: { title: "Traumer", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            relation: { kursist: { title: "Relation", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }}
        },
        connections: {}
    },
    teachertraining: {
        name: "Teacher Training",
        circles: {
            nervesystem: { kursist: { title: "Teacher Training", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            polyvagal: { kursist: { title: "Polyvagal", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            tilknytning: { kursist: { title: "Tilknytning", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            kropsterapi: { kursist: { title: "Kropsterapi", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            psykobiologi: { kursist: { title: "Psykobiologi", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            traumer: { kursist: { title: "Traumer", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            relation: { kursist: { title: "Relation", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }}
        },
        connections: {}
    },
    tilknytningsspeciale: {
        name: "Tilknytningsspeciale",
        circles: {
            nervesystem: { kursist: { title: "3-dages Kursus", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            polyvagal: { kursist: { title: "Polyvagal", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            tilknytning: { kursist: { title: "4 Mønstre", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            kropsterapi: { kursist: { title: "Kropsterapi", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            psykobiologi: { kursist: { title: "Psykobiologi", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            traumer: { kursist: { title: "Traumer", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }},
            relation: { kursist: { title: "Relation", text: "[Fase 2]" }, fagfolk: { title: "Fagligt", text: "[Fase 2]" }}
        },
        connections: {}
    }
};

const educationNames = {
    nervesystemsterapeut: 'Nervesystemsterapeut',
    teachertraining: 'Teacher Training',
    tilknytningsspeciale: 'Tilknytningsspeciale'
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

window.addEventListener('load', () => {
    resetToWelcome();
});

document.addEventListener('DOMContentLoaded', () => {
    setupTopCircles();
    setupThemeSelector();
    setupEducationSelector();
    setupExercisesButton();
    setupCircleClicks();
    setupConnectionClicks();
    resetToWelcome();
    updateCenterCircle();
});

function updateCenterCircle() {
    const centerTexts = document.querySelectorAll('.center-text');
    const displayName = currentEducation ? educations[currentEducation].name : themes[currentTheme].name;
    
    if (displayName === "Nervesystemsregulering") {
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
    currentTheme = 'general';
    currentEducation = null;
    
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
            currentEducation = null;
            
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
            currentTheme = 'general';
            
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
    document.getElementById('exercises-btn').addEventListener('click', () => {
        document.querySelectorAll('.top-circle').forEach(c => c.classList.remove('active'));
        document.getElementById('exercises-btn').classList.add('active');
        currentEducation = null;
        currentTheme = 'general';
        document.getElementById('education-label').innerHTML = 'Uddan-<br>nelser';
        document.getElementById('theme-label').innerHTML = 'Vælg<br>tema';
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
    
    const sourceData = currentEducation ? educations[currentEducation] : themes[currentTheme];
    const circleData = sourceData.circles[circleId];
    
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
        const connectionData = sourceData.connections ? (sourceData.connections[key1] || sourceData.connections[key2]) : null;
        
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
