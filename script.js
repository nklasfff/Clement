// CONTENT DATABASE
const themes = {
    general: {
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
        }
    },
    angst: {
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
        }
    },
    tilknytning: {
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
        }
    },
    stress: {
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
        }
    },
    traumer: {
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
        }
    },
    sovn: {
        circles: {
            nervesystem: {
                klient: {
                    title: "Søvn og Nervesystemet",
                    text: "Søvn kræver at nervesystemet kan slippe kontrollen og falde til ro. Ved søvnproblemer lærer vi dit system at det er sikkert at slappe helt af og overlade sig til søvnen."
                },
                fagfolk: {
                    title: "Søvnregulering via ANS",
                    text: "Søvn requires ventral vagal dominans og parasympatisk activation. Søvnforstyrrelser ofte resultat af manglende down-regulation capability. Intervention gennem vagal tone-opbygning og circadian rhythm restoration."
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
});

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
    
    clearAllActive();
    showWelcome();
}

function setupTopCircles() {
    document.querySelectorAll('.top-circle[data-mode]').forEach(circle => {
        circle.addEventListener('click', () => {
            document.querySelectorAll('.top-circle[data-mode]').forEach(c => c.classList.remove('active'));
            document.getElementById('exercises-btn').classList.remove('active');
            circle.classList.add('active');
            
            currentMode = circle.dataset.mode;
            
            const infoPanel = document.getElementById('info-content');
            infoPanel.style.opacity = '0.3';
            setTimeout(() => {
                infoPanel.style.opacity = '1';
            }, 150);
            
            if (currentView === 'circle' && currentCircle) {
                showCircleView(currentCircle);
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
            
            if (currentView === 'circle' && currentCircle) {
                showCircleView(currentCircle);
            }
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
    
    document.querySelectorAll('.top-circle').forEach(c => c.classList.remove('active'));
    document.querySelector('.top-circle[data-mode="klient"]').classList.add('active');
    
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
    
    const data = themes[currentTheme].circles[circleId][currentMode];
    const connectedCircles = getConnectedCircles(circleId);
    
    let connectionsHTML = '';
    connectedCircles.forEach(targetId => {
        const targetName = circleNames[targetId];
        connectionsHTML += `
            <div style="margin-top: 30px; padding-top: 25px; border-top: 2px solid #e8f0ec;">
                <h3>${circleNames[circleId]} ↔ ${targetName}</h3>
                <p>Dynamik mellem disse to metoder beskrives her i den valgte kontekst.</p>
            </div>
        `;
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
    const allCircles = ['nervesystem', 'polyvagal', 'tilknytning', 'kropsterapi', 'psykobiologi', 'traumer', 'relation'];
    return allCircles.filter(id => id !== circleId);
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
