module.exports = [
"[project]/OneDrive/Bureau/rédaction proo/src/lib/content.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Contenu académique officiel : L'atelier de rédaction de Machine à Langue
// Pr. Mohamed EL KHOUMSSI
__turbopack_context__.s([
    "analysisIndicators",
    ()=>analysisIndicators,
    "categoryColors",
    ()=>categoryColors,
    "categoryLabels",
    ()=>categoryLabels,
    "connecteursLogiques",
    ()=>connecteursLogiques,
    "genres",
    ()=>genres,
    "plansTypes",
    ()=>plansTypes,
    "textTypes",
    ()=>textTypes
]);
const textTypes = [
    {
        id: "narratif",
        name: "Narratif",
        icon: "book-open",
        intention: "Raconter une histoire ou une suite d'actions situées dans le temps.",
        caracteristiques: [
            "Schéma narratif (situation initiale, élément perturbateur, péripéties, résolution, situation finale)",
            "Verbes d'action",
            "Indicateurs temporels",
            "Temps du passé (passé simple, imparfait, passé composé)",
            "Présence de personnages, d'un narrateur"
        ],
        exemples: [
            "Contes et légendes",
            "Romans et nouvelles",
            "Faits divers journalistiques",
            "Comptes rendus d'événements",
            "Récits autobiographiques"
        ],
        conseils: [
            "Respectez la cohérence temporelle",
            "Utilisez des connecteurs chronologiques (puis, ensuite, soudain, enfin)",
            "Variez les verbes d'action",
            "Équilibrez dialogues, descriptions et actions"
        ],
        connecteurs: [
            "alors",
            "puis",
            "ensuite",
            "soudain",
            "brusquement",
            "enfin",
            "pendant que",
            "tandis que",
            "d'abord",
            "ensuite",
            "finalement"
        ],
        temps: "Passé simple / Imparfait / Passé antérieur / Plus-que-parfait"
    },
    {
        id: "descriptif",
        name: "Descriptif",
        icon: "image",
        intention: "Représenter un lieu, un objet, un personnage (portrait) ou un paysage.",
        caracteristiques: [
            "Indicateurs spatiaux",
            "Adjectifs qualificatifs",
            "Verbes d'état (être, sembler, paraître, avoir l'air)",
            "Figures de style : comparaison, métaphore, personnification",
            "Imparfait pour les descriptions dans un récit",
            "Organisation spatiale (de gauche à droite, de haut en bas, du général au particulier)"
        ],
        exemples: [
            "Descriptions physiques de personnages",
            "Portraits littéraires (physiques et moraux)",
            "Guides touristiques",
            "Descriptions de paysages dans les romans",
            "Fiches descriptives de produits"
        ],
        conseils: [
            "Faites appel aux cinq sens (vue, ouïe, odorat, toucher, goût)",
            "Utilisez un vocabulaire précis et varié",
            "Organisez la description de manière logique",
            "Évitez les accumulations d'adjectifs"
        ],
        connecteurs: [
            "à gauche",
            "à droite",
            "au centre",
            "devant",
            "derrière",
            "au loin",
            "près de",
            "en haut",
            "en bas",
            "d'abord",
            "ensuite",
            "on voit",
            "on distingue"
        ],
        temps: "Imparfait / Présent de description"
    },
    {
        id: "explicatif",
        name: "Explicatif / Informatif",
        icon: "info",
        intention: "Faire comprendre un phénomène, analyser une idée ou transmettre un savoir.",
        caracteristiques: [
            "Vocabulaire spécialisé et précis",
            "Ton neutre et objectif (absence d'implication du locuteur)",
            "Connecteurs logiques (car, donc, en effet, c'est pourquoi)",
            "Présent de vérité générale",
            "Structure hiérarchisée (définitions, exemples, comparaisons)"
        ],
        exemples: [
            "Articles encyclopédiques",
            "Manuels scolaires",
            "Rapports d'analyse",
            "Articles scientifiques",
            "Notices explicatives",
            "Exposés scolaires"
        ],
        conseils: [
            "Définissez les termes techniques",
            "Hiérarchisez l'information (titres, sous-titres)",
            "Illustrez par des exemples concrets",
            "Évitez le jargon inutile"
        ],
        connecteurs: [
            "car",
            "en effet",
            "c'est pourquoi",
            "ainsi",
            "donc",
            "par exemple",
            "autrement dit",
            "c'est-à-dire",
            "en d'autres termes",
            "d'une part... d'autre part"
        ],
        temps: "Présent de l'indicatif (vérité générale)"
    },
    {
        id: "argumentatif",
        name: "Argumentatif",
        icon: "scale",
        intention: "Convaincre ou persuader le lecteur de partager une thèse.",
        caracteristiques: [
            "Présence explicite d'une thèse (position défendue)",
            "Arguments (raisons qui appuient la thèse)",
            "Exemples concrets pour illustrer",
            "Connecteurs logiques",
            "Vocabulaire appréciatif ou dépréciatif",
            "Marques de subjectivité (je pense, selon moi, il me semble)",
            "Objection et réfutation possibles"
        ],
        exemples: [
            "Essais littéraires et philosophiques",
            "Plaidoyers et réquisitoires",
            "Articles d'opinion",
            "Lettres de motivation",
            "Discours politiques",
            "Publicités argumentées",
            "Dissertations"
        ],
        conseils: [
            "Exprimez clairement votre thèse en introduction",
            "Structurez vos arguments du moins fort au plus fort",
            "Anticipez les objections possibles",
            "Utilisez des exemples pertinents et variés",
            "Utilisez des connecteurs logiques pour lier les idées"
        ],
        connecteurs: [
            "d'abord",
            "ensuite",
            "enfin",
            "tout d'abord",
            "de plus",
            "en outre",
            "par ailleurs",
            "cependant",
            "néanmoins",
            "pourtant",
            "donc",
            "c'est pourquoi",
            "en effet",
            "au contraire"
        ],
        temps: "Présent de l'indicatif / Conditionnel / Subjonctif"
    },
    {
        id: "injonctif",
        name: "Injonctif / Prescriptif",
        icon: "clipboard-list",
        intention: "Donner des ordres, des instructions, des conseils ou imposer des règles.",
        caracteristiques: [
            "Emploi de l'impératif",
            "Infinitif ou subjonctif",
            "Tournures impersonnelles (il faut, il est interdit de)",
            "Structure énumérative",
            "Phrases courtes et directes",
            "Vocabulaire précis"
        ],
        exemples: [
            "Recettes de cuisine",
            "Règlements intérieurs",
            "Modes d'emploi",
            "Consignes d'examen",
            "Conseils et recommandations",
            "Avertissements"
        ],
        conseils: [
            "Soyez clair et direct",
            "Utilisez des listes numérotées ou à puces",
            "Ordrez logiquement les étapes",
            "Précisez les conditions d'application"
        ],
        connecteurs: [
            "d'abord",
            "puis",
            "ensuite",
            "enfin",
            "il faut",
            "il est interdit de",
            "vous devez",
            "veuillez",
            "pensez à",
            "attention"
        ],
        temps: "Impératif présent / Infinitif / Subjonctif"
    },
    {
        id: "expressif",
        name: "Expressif / Émotif",
        icon: "heart",
        intention: "Exprimer des sentiments, des émotions ou des états d'âme.",
        caracteristiques: [
            "Emploi de la 1ère personne",
            "Ponctuation expressive (!, ?, ..., --)",
            "Champ lexical des émotions",
            "Figures de style (hyperbole, exagération, exclamation)",
            "Subjectivité assumée",
            "Questions rhétoriques"
        ],
        exemples: [
            "Poésie lyrique",
            "Journaux intimes",
            "Correspondances personnelles",
            "Mémoires",
            "Chansons",
            "Discours émouvants"
        ],
        conseils: [
            "Utilisez un vocabulaire des émotions riche",
            "Variez les figures de style",
            "Soyez authentique",
            "Jouez avec le rythme des phrases"
        ],
        connecteurs: [
            "oh!",
            "hélas!",
            "comme",
            "que de",
            "quel(le)s",
            "je ressens",
            "j'éprouve",
            "mon cœur",
            "je suis ému(e) par"
        ],
        temps: "Temps variables (présent, passé composé, imparfait)"
    }
];
const genres = [
    // Genres littéraires
    {
        id: "roman",
        name: "Roman",
        category: "litteraire",
        description: "Œuvre narrative en prose qui raconte une histoire fictive centrée sur des personnages et leurs aventures, avec une dimension psychologique.",
        typesDominants: [
            "narratif",
            "descriptif",
            "dialogal"
        ],
        structure: [
            "Incipit (situation initiale)",
            "Élément perturbateur",
            "Péripéties",
            "Climax",
            "Dénouement / Situation finale"
        ]
    },
    {
        id: "nouvelle",
        name: "Nouvelle",
        category: "litteraire",
        description: "Récit bref qui présente une intrigue simple avec peu de personnages et souvent une chute finale.",
        typesDominants: [
            "narratif",
            "descriptif"
        ],
        structure: [
            "Exposition brève",
            "Un seul événement",
            "Chute ou révélation finale"
        ]
    },
    {
        id: "conte",
        name: "Conte",
        category: "litteraire",
        description: "Récit court d'aventures imaginaires, souvent merveilleux, avec une morale implicite ou explicite.",
        typesDominants: [
            "narratif",
            "descriptif"
        ],
        structure: [
            "Il était une fois",
            "Épreuves",
            "Élément magique",
            "Morale"
        ]
    },
    {
        id: "fable",
        name: "Fable",
        category: "litteraire",
        description: "Court récit en vers ou en prose mettant en scène des animaux et qui se termine par une morale.",
        typesDominants: [
            "narratif",
            "argumentatif"
        ],
        structure: [
            "Récit allégorique",
            "Animaux personnifiés",
            "Morale explicite"
        ]
    },
    {
        id: "autobiographie",
        name: "Autobiographie",
        category: "litteraire",
        description: "Récit que fait une personne de sa propre vie, écrit à la première personne.",
        typesDominants: [
            "narratif",
            "expressif",
            "descriptif"
        ],
        structure: [
            "Je / Naissance et origines",
            "Parcours de vie",
            "Bilan / Héritage"
        ]
    },
    {
        id: "poesie",
        name: "Poésie",
        category: "litteraire",
        description: "Texte en vers ou en prose qui joue avec le rythme, les sonorités et les images pour exprimer des émotions.",
        typesDominants: [
            "expressif",
            "descriptif"
        ],
        structure: [
            "Vers ou prose poétique",
            "Strophes",
            "Rimes et rythme",
            "Figures de style"
        ]
    },
    {
        id: "calligramme",
        name: "Calligramme",
        category: "litteraire",
        description: "Poème dont la disposition des mots dessine un objet en rapport avec le sujet du poème.",
        typesDominants: [
            "expressif",
            "descriptif"
        ],
        structure: [
            "Forme visuelle = sens du texte"
        ]
    },
    {
        id: "theatre",
        name: "Théâtre",
        category: "litteraire",
        description: "Genre dramatique fait pour être joué sur scène, composé de répliques et de didascalies.",
        typesDominants: [
            "narratif",
            "dialogal",
            "expressif"
        ],
        structure: [
            "Actes",
            "Scènes",
            "Dialogues",
            "Didascalies",
            "Exposition / Nœud / Dénouement"
        ]
    },
    {
        id: "essai",
        name: "Essai",
        category: "litteraire",
        description: "Œuvre en prose où l'auteur expose sa réflexion personnelle sur un sujet, avec liberté de ton.",
        typesDominants: [
            "argumentatif",
            "explicatif"
        ],
        structure: [
            "Introduction / Thèse",
            "Arguments",
            "Réflexions",
            "Conclusion"
        ]
    },
    {
        id: "pamphlet",
        name: "Pamphlet",
        category: "litteraire",
        description: "Court écrit polémique et agressif qui attaque violemment une personne, une institution ou une idée.",
        typesDominants: [
            "argumentatif",
            "expressif"
        ],
        structure: [
            "Attaque frontale",
            "Arguments satiriques",
            "Conviction forte"
        ]
    },
    // Journalistiques
    {
        id: "breve",
        name: "Brève",
        category: "journalistique",
        description: "Information courte et factuelle sur un événement récent, sans commentaire.",
        typesDominants: [
            "explicatif",
            "narratif"
        ],
        structure: [
            "Qui ? Quoi ? Où ? Quand ?",
            "Faits essentiels",
            "Style concis"
        ]
    },
    {
        id: "compte-rendu",
        name: "Compte rendu",
        category: "journalistique",
        description: "Rapport fidèle et structuré de ce qui s'est dit ou passé lors d'un événement ou d'une réunion.",
        typesDominants: [
            "explicatif",
            "narratif"
        ],
        structure: [
            "Contexte",
            "Ordre du jour",
            "Points abordés",
            "Décisions",
            "Questions en suspens"
        ]
    },
    {
        id: "reportage",
        name: "Reportage",
        category: "journalistique",
        description: "Article de presse qui relate de manière détaillée et vivante un événement ou un sujet, recueilli sur place.",
        typesDominants: [
            "narratif",
            "descriptif",
            "explicatif"
        ],
        structure: [
            "Accroche",
            "Contexte",
            "Témoignages",
            "Descriptions",
            "Analyse"
        ]
    },
    {
        id: "interview",
        name: "Interview",
        category: "journalistique",
        description: "Entretien rapporté sous forme de questions-réponses entre un journaliste et une personne.",
        typesDominants: [
            "dialogal",
            "explicatif"
        ],
        structure: [
            "Présentation de la personne",
            "Questions-réponses",
            "Conclusion / Formule de politesse"
        ]
    },
    {
        id: "editorial",
        name: "Éditorial",
        category: "journalistique",
        description: "Article de tête d'un journal qui exprime la position de la rédaction sur un sujet d'actualité.",
        typesDominants: [
            "argumentatif",
            "explicatif"
        ],
        structure: [
            "Mise en contexte",
            "Prise de position",
            "Arguments",
            "Conclusion"
        ]
    },
    {
        id: "critique",
        name: "Critique",
        category: "journalistique",
        description: "Article qui donne un avis argumenté sur une œuvre (littéraire, cinématographique, artistique).",
        typesDominants: [
            "argumentatif",
            "explicatif",
            "descriptif"
        ],
        structure: [
            "Présentation de l'œuvre",
            "Résumé",
            "Analyse",
            "Jugement argumenté"
        ]
    },
    {
        id: "billet",
        name: "Billet",
        category: "journalistique",
        description: "Court article de presse souvent humoristique ou polémique sur un sujet d'actualité.",
        typesDominants: [
            "argumentatif",
            "expressif"
        ],
        structure: [
            "Ton libre",
            "Poing de vue marqué",
            "Style alerte"
        ]
    },
    {
        id: "chronique",
        name: "Chronique",
        category: "journalistique",
        description: "Article régulier dans lequel le chroniqueur livre son point de vue personnel sur l'actualité ou un sujet.",
        typesDominants: [
            "argumentatif",
            "expressif"
        ],
        structure: [
            "Style personnel",
            "Analyse récurrente",
            "Point de vue assumé"
        ]
    },
    // Professionnels et administratifs
    {
        id: "lettre-admin",
        name: "Lettre administrative",
        category: "professionnel",
        description: "Correspondance formelle adressée à une administration ou une institution.",
        typesDominants: [
            "argumentatif",
            "explicatif",
            "injonctif"
        ],
        structure: [
            "Coordonnées",
            "Objet",
            "Formule d'appel",
            "Corps structuré",
            "Formule de politesse",
            "Signature"
        ]
    },
    {
        id: "courriel-pro",
        name: "Courriel professionnel",
        category: "professionnel",
        description: "Message électronique dans un contexte professionnel, qui doit être clair, concis et poli.",
        typesDominants: [
            "explicatif",
            "injonctif"
        ],
        structure: [
            "Objet clair",
            "Formule d'appel",
            "Message court",
            "Formule de politesse",
            "Signature"
        ]
    },
    {
        id: "lettre-motivation",
        name: "Lettre de motivation",
        category: "professionnel",
        description: "Lettre qui accompagne un CV pour expliquer les motivations du candidat pour un poste ou une formation.",
        typesDominants: [
            "argumentatif",
            "expressif"
        ],
        structure: [
            "Vous (l'entreprise / l'école)",
            "Moi (mon profil)",
            "Nous (notre collaboration future)",
            "Formule de politesse"
        ]
    },
    {
        id: "pv",
        name: "Procès-verbal",
        category: "professionnel",
        description: "Document officiel qui rend compte des décisions prises lors d'une assemblée ou réunion.",
        typesDominants: [
            "explicatif",
            "injonctif"
        ],
        structure: [
            "Date / Participants",
            "Ordre du jour",
            "Délibérations",
            "Résolutions",
            "Signatures"
        ]
    },
    {
        id: "rapport",
        name: "Rapport d'activité",
        category: "professionnel",
        description: "Document qui présente le bilan des actions menées sur une période donnée.",
        typesDominants: [
            "explicatif",
            "argumentatif"
        ],
        structure: [
            "Introduction",
            "Méthodologie",
            "Résultats",
            "Analyse",
            "Conclusion / Recommandations"
        ]
    },
    {
        id: "note-synthese",
        name: "Note de synthèse",
        category: "professionnel",
        description: "Document court et structuré qui résume un dossier et propose éventuellement des recommandations.",
        typesDominants: [
            "explicatif"
        ],
        structure: [
            "Contexte",
            "Faits essentiels",
            "Analyse",
            "Recommandations"
        ]
    },
    // Académiques et scolaires
    {
        id: "dissertation",
        name: "Dissertation",
        category: "academique",
        description: "Réflexion structurée et argumentée répondant à une problématique posée.",
        typesDominants: [
            "argumentatif",
            "explicatif"
        ],
        structure: [
            "Introduction (accroche + problématique + annonce du plan)",
            "Développement en 2-3 parties avec arguments et exemples",
            "Conclusion (synthèse + ouverture)"
        ]
    },
    {
        id: "commentaire",
        name: "Commentaire composé",
        category: "academique",
        description: "Analyse critique et stylistique d'un extrait textuel, qui rend compte de sa cohérence et de sa signification.",
        typesDominants: [
            "argumentatif",
            "explicatif"
        ],
        structure: [
            "Introduction (présentation + projet de lecture)",
            "Développement en axes de lecture thématiques ou formels",
            "Conclusion (bilan + ouverture)"
        ]
    },
    {
        id: "synthese-docs",
        name: "Synthèse de documents",
        category: "academique",
        description: "Mise en relation neutre et structurée de plusieurs documents autour d'une problématique.",
        typesDominants: [
            "explicatif",
            "argumentatif"
        ],
        structure: [
            "Introduction (présentation des docs + problématique)",
            "Développement en 2-3 parties",
            "Conclusion (sans avis personnel)"
        ]
    }
];
const categoryLabels = {
    litteraire: "Genres littéraires",
    journalistique: "Genres journalistiques et médiatiques",
    professionnel: "Genres professionnels et administratifs",
    academique: "Genres académiques et scolaires"
};
const categoryColors = {
    litteraire: "from-rose-500 to-pink-600",
    journalistique: "from-amber-500 to-orange-600",
    professionnel: "from-sky-500 to-blue-600",
    academique: "from-violet-500 to-purple-600"
};
const connecteursLogiques = {
    addition: [
        "de plus",
        "en outre",
        "par ailleurs",
        "également",
        "aussi",
        "de surcroît",
        "en plus",
        "tout d'abord",
        "ensuite",
        "enfin"
    ],
    cause: [
        "car",
        "parce que",
        "puisque",
        "étant donné que",
        "en raison de",
        "du fait de",
        "grâce à",
        "sous prétexte que",
        "comme"
    ],
    consequence: [
        "donc",
        "ainsi",
        "c'est pourquoi",
        "par conséquent",
        "de ce fait",
        "dès lors",
        "alors",
        "en conséquence",
        "si bien que"
    ],
    opposition: [
        "mais",
        "cependant",
        "pourtant",
        "néanmoins",
        "toutefois",
        "par contre",
        "en revanche",
        "au contraire",
        "or",
        "seulement"
    ],
    condition: [
        "si",
        "à condition que",
        "pourvu que",
        "à moins que",
        "dans la mesure où",
        "supposé que",
        "en admettant que"
    ],
    but: [
        "pour",
        "afin que",
        "de peur que",
        "en vue de",
        "dans le but de",
        "pour que"
    ],
    temps: [
        "pendant que",
        "tandis que",
        "alors que",
        "lorsque",
        "quand",
        "depuis que",
        "dès que",
        "avant que",
        "après que",
        "puis",
        "ensuite",
        "enfin"
    ],
    explication: [
        "c'est-à-dire",
        "autrement dit",
        "en d'autres termes",
        "soit",
        "je veux dire que"
    ],
    illustration: [
        "par exemple",
        "comme",
        "ainsi",
        "notamment",
        "tel",
        "telle que",
        "comme le montre",
        "à l'instar de"
    ],
    comparaison: [
        "comme",
        "tel que",
        "de même que",
        "contrairement à",
        "à la différence de",
        "plus que",
        "moins que",
        "autant que"
    ],
    structure: [
        "d'une part... d'autre part",
        "premièrement",
        "deuxièmement",
        "troisièmement",
        "tout d'abord",
        "ensuite",
        "enfin",
        "pour conclure",
        "en guise de conclusion"
    ]
};
const analysisIndicators = {
    narratif: [
        "puis",
        "soudain",
        "alors",
        "un jour",
        "ensuite",
        "enfin",
        "il était une fois",
        "pendant que",
        "passé simple",
        "imparfait",
        "raconter",
        "arriver",
        "personnage",
        "histoire"
    ],
    descriptif: [
        "on voit",
        "on aperçoit",
        "comme un",
        "semblable à",
        "tel un",
        "à droite",
        "à gauche",
        "au loin",
        "tout près",
        "beau",
        "joli",
        "grand",
        "petit",
        "adjectif"
    ],
    explicatif: [
        "car",
        "en effet",
        "c'est pourquoi",
        "parce que",
        "donc",
        "c'est-à-dire",
        "par exemple",
        "définition",
        "explication",
        "phénomène",
        "analyse",
        "consiste à",
        "on appelle"
    ],
    argumentatif: [
        "je pense",
        "selon moi",
        "il me semble",
        "d'abord",
        "ensuite",
        "enfin",
        "cependant",
        "pourtant",
        "néanmoins",
        "thèse",
        "argument",
        "exemple",
        "démontrer",
        "prouver",
        "convaincre",
        "contraire",
        "objection"
    ],
    injonctif: [
        "il faut",
        "vous devez",
        "veuillez",
        "interdit",
        "consignes",
        "mode d'emploi",
        "impératif",
        "étape",
        "attention",
        "recette",
        "règlement",
        "prié(e) de"
    ],
    expressif: [
        "je",
        "mon",
        "ma",
        "mien",
        "je ressens",
        "j'aime",
        "je hais",
        "je suis ému",
        "hélas",
        "oh",
        "quelle joie",
        "quel bonheur",
        "quelle tristesse",
        "!",
        "?"
    ]
};
const plansTypes = {
    dissertation: {
        nom: "Plan dialectique (thèse / antithèse / synthèse)",
        parties: [
            {
                titre: "Introduction",
                elements: [
                    "Accroche",
                    "Définition des termes",
                    "Problématique",
                    "Annonce du plan"
                ]
            },
            {
                titre: "I. Thèse",
                elements: [
                    "Argument principal 1",
                    "Argument principal 2",
                    "Exemples",
                    "Références"
                ]
            },
            {
                titre: "II. Antithèse",
                elements: [
                    "Contre-arguments",
                    "Objections",
                    "Limites de la thèse",
                    "Points de vue adverses"
                ]
            },
            {
                titre: "III. Synthèse / Dépassement",
                elements: [
                    "Nouvelle perspective",
                    "Réponse nuancée",
                    "Position personnelle argumentée"
                ]
            },
            {
                titre: "Conclusion",
                elements: [
                    "Bilan de la réflexion",
                    "Réponse à la problématique",
                    "Ouverture"
                ]
            }
        ]
    },
    lettre: {
        nom: "Lettre formelle",
        parties: [
            {
                titre: "En-tête",
                elements: [
                    "Vos coordonnées",
                    "Coordonnées du destinataire",
                    "Lieu et date"
                ]
            },
            {
                titre: "Objet",
                elements: [
                    "Objet clair et précis"
                ]
            },
            {
                titre: "Formule d'appel",
                elements: [
                    "Madame, Monsieur,",
                    "Cher(e) ...,"
                ]
            },
            {
                titre: "Corps",
                elements: [
                    "Paragraphe d'introduction",
                    "Votre demande / exposé",
                    "Argumentation",
                    "Appel à l'action"
                ]
            },
            {
                titre: "Formule de politesse",
                elements: [
                    "Veuillez agréer...",
                    "Je vous prie d'agréer...",
                    "Cordialement,"
                ]
            },
            {
                titre: "Signature",
                elements: [
                    "Votre nom et prénom"
                ]
            }
        ]
    },
    article: {
        nom: "Article de presse",
        parties: [
            {
                titre: "Titre",
                elements: [
                    "Titre accrocheur et informatif"
                ]
            },
            {
                titre: "Chapô",
                elements: [
                    "Résumé de l'information (5W)"
                ]
            },
            {
                titre: "Corps",
                elements: [
                    "Paragraphe d'attaque",
                    "Développement (informations du + au - important)",
                    "Témoignages / Citations"
                ]
            },
            {
                titre: "Chute",
                elements: [
                    "Dernière phrase forte"
                ]
            }
        ]
    },
    roman: {
        nom: "Schéma narratif",
        parties: [
            {
                titre: "Situation initiale",
                elements: [
                    "Cadre spatial et temporel",
                    "Présentation des personnages",
                    "État d'équilibre"
                ]
            },
            {
                titre: "Élément perturbateur",
                elements: [
                    "Événement qui rompt l'équilibre"
                ]
            },
            {
                titre: "Péripéties",
                elements: [
                    "Actions du héros",
                    "Épreuves",
                    "Retours en arrière"
                ]
            },
            {
                titre: "Élément de résolution",
                elements: [
                    "Résolution du problème"
                ]
            },
            {
                titre: "Situation finale",
                elements: [
                    "Équilibre nouveau",
                    "Morale éventuelle"
                ]
            }
        ]
    }
};
}),
"[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AtelierPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/save.mjs [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/download.mjs [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/type.mjs [app-ssr] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/src/lib/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function AtelierPage() {
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("argumentatif");
    const [selectedGenre, setSelectedGenre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dissertation");
    const [savedMessage, setSavedMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const wordCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return content.trim().split(/\s+/).filter((w)=>w.length > 0).length;
    }, [
        content
    ]);
    const sentenceCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return content.split(/[.!?]+/).filter((s)=>s.trim().length > 0).length;
    }, [
        content
    ]);
    const connectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["suggestConnectors"])(selectedType);
    const currentType = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textTypes"].find((t)=>t.id === selectedType);
    const currentGenre = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genres"].find((g)=>g.id === selectedGenre);
    const insertConnector = (c)=>{
        setContent((prev)=>prev ? prev + " " + c + " " : c + " ");
        setSavedMessage(null);
    };
    const handleSave = ()=>{
        const doc = {
            title: title || "Document sans titre",
            content,
            type: selectedType,
            genre: selectedGenre,
            savedAt: new Date().toISOString()
        };
        const docs = JSON.parse(localStorage.getItem("documents") || "[]");
        docs.push(doc);
        localStorage.setItem("documents", JSON.stringify(docs));
        setSavedMessage("Document sauvegardé localement.");
        setTimeout(()=>setSavedMessage(null), 2500);
    };
    const handleExport = ()=>{
        const blob = new Blob([
            `# ${title || "Document sans titre"}\n\nType : ${currentType?.name}\nGenre : ${currentGenre?.name}\n\n${content}`
        ], {
            type: "text/plain;charset=utf-8"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${title || "document"}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    };
    const reset = ()=>{
        setContent("");
        setTitle("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    " Retour"
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-extrabold text-slate-900 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-7 h-7 text-indigo-600"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    "L'Atelier de rédaction"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 text-sm mt-1",
                                children: "Rédigez avec la méthode du Pr. EL KHOUMSSI : votre texte est guidé par le type et le genre choisis."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: reset,
                                className: "inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    " Réinitialiser"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                className: "inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    " Sauvegarder"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleExport,
                                className: "inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow hover:shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    " Exporter"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            savedMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    " ",
                    savedMessage
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-[280px_1fr_280px] gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl border border-slate-200 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                                className: "w-4 h-4 text-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this),
                                            " Type de texte"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textTypes"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-start gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "radio",
                                                        name: "type",
                                                        value: t.id,
                                                        checked: selectedType === t.id,
                                                        onChange: ()=>setSelectedType(t.id),
                                                        className: "mt-0.5 accent-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-medium text-slate-900",
                                                                children: t.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-slate-500 leading-tight line-clamp-2",
                                                                children: t.intention
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, t.id, true, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl border border-slate-200 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                className: "w-4 h-4 text-amber-600"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this),
                                            " Genre"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedGenre,
                                        onChange: (e)=>setSelectedGenre(e.target.value),
                                        className: "w-full text-sm rounded-lg border border-slate-200 px-3 py-2 bg-white",
                                        children: [
                                            "litteraire",
                                            "journalistique",
                                            "professionnel",
                                            "academique"
                                        ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                label: cat,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genres"].filter((g)=>g.category === cat).map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: g.id,
                                                        children: g.name
                                                    }, g.id, false, {
                                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 23
                                                    }, this))
                                            }, cat, false, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    currentGenre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-600 mt-3 leading-relaxed",
                                        children: currentGenre.description
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: title,
                                onChange: (e)=>setTitle(e.target.value),
                                placeholder: "Titre de votre production...",
                                className: "w-full px-4 py-3 text-lg font-semibold rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: content,
                                onChange: (e)=>setContent(e.target.value),
                                placeholder: `Commencez à rédiger votre ${currentGenre?.name.toLowerCase()} (type ${currentType?.name.toLowerCase()})...\n\n💡 Conseil : respectez la structure du genre et utilisez les connecteurs logiques à droite.`,
                                className: "w-full min-h-[500px] px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 text-sm leading-relaxed resize-y"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-xs text-slate-500 px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-slate-900",
                                                        children: wordCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 21
                                                    }, this),
                                                    " mots"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-slate-900",
                                                        children: sentenceCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this),
                                                    " phrases"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-slate-900",
                                                        children: content.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 21
                                                    }, this),
                                                    " caractères"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-400",
                                        children: [
                                            "Temps verbaux recommandés : ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-slate-700",
                                                children: currentType?.temps
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 73
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "space-y-4",
                        children: [
                            currentType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-indigo-50 border border-indigo-100 rounded-xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-indigo-900 mb-2 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this),
                                            " Conseils pour le type ",
                                            currentType.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-1.5 text-xs text-indigo-900",
                                        children: currentType.conseils.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        className: "w-3.5 h-3.5 text-indigo-600 flex-shrink-0 mt-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, this),
                                                    c
                                                ]
                                            }, c, true, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            currentGenre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl border border-slate-200 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-slate-900 mb-3",
                                        children: [
                                            "Structure du ",
                                            currentGenre.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "space-y-1.5 text-xs",
                                        children: currentGenre.structure.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2 text-slate-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0",
                                                        children: i + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: s
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl border border-slate-200 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-slate-900 mb-3",
                                        children: "Connecteurs logiques"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-500 mb-2",
                                        children: "Cliquez pour insérer :"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1.5",
                                        children: connectors.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>insertConnector(c),
                                                className: "px-2 py-1 text-xs rounded-md bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 border border-slate-200 transition-colors",
                                                children: c
                                            }, c, false, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/atelier/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/save.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Save
]);
/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "save",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
                key: "1c8476"
            }
        ],
        [
            "path",
            {
                d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
                key: "1ydtos"
            }
        ],
        [
            "path",
            {
                d: "M7 3v4a1 1 0 0 0 1 1h7",
                key: "t51u73"
            }
        ]
    ]
};
__iconData.node;
const Save = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/save.mjs [app-ssr] (ecmascript) <export default as Save>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Save",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/save.mjs [app-ssr] (ecmascript)");
}),
"[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/download.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Download
]);
/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "download",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M12 15V3",
                key: "m9g1x1"
            }
        ],
        [
            "path",
            {
                d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
                key: "ih7n3h"
            }
        ],
        [
            "path",
            {
                d: "m7 10 5 5 5-5",
                key: "brsn70"
            }
        ]
    ]
};
__iconData.node;
const Download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/download.mjs [app-ssr] (ecmascript) <export default as Download>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Download",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/download.mjs [app-ssr] (ecmascript)");
}),
"[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/type.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Type
]);
/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "type",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M12 4v16",
                key: "1654pz"
            }
        ],
        [
            "path",
            {
                d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",
                key: "e0r10z"
            }
        ],
        [
            "path",
            {
                d: "M9 20h6",
                key: "s66wpe"
            }
        ]
    ]
};
__iconData.node;
const Type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/type.mjs [app-ssr] (ecmascript) <export default as Type>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Type",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/type.mjs [app-ssr] (ecmascript)");
}),
"[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>CircleCheck
]);
/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "circle-check",
    size: 24,
    node: [
        [
            "circle",
            {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }
        ],
        [
            "path",
            {
                d: "m16 9-5.5 5.5L8 12",
                key: "xofnsj"
            }
        ]
    ],
    aliases: [
        "check-circle-2"
    ]
};
__iconData.node;
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript)");
}),
"[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Lightbulb
]);
/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "lightbulb",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
                key: "1gvzjb"
            }
        ],
        [
            "path",
            {
                d: "M9 18h6",
                key: "x1upvd"
            }
        ],
        [
            "path",
            {
                d: "M10 22h4",
                key: "ceow96"
            }
        ]
    ]
};
__iconData.node;
const Lightbulb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-ssr] (ecmascript) <export default as Lightbulb>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lightbulb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-ssr] (ecmascript)");
}),
"[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>RotateCcw
]);
/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "rotate-ccw",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
                key: "1357e3"
            }
        ],
        [
            "path",
            {
                d: "M3 3v5h5",
                key: "1xhq8a"
            }
        ]
    ]
};
__iconData.node;
const RotateCcw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-ssr] (ecmascript) <export default as RotateCcw>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotateCcw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-ssr] (ecmascript)");
}),
"[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>ArrowLeft
]);
/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "arrow-left",
    size: 24,
    node: [
        [
            "path",
            {
                d: "m12 19-7-7 7-7",
                key: "1l729n"
            }
        ],
        [
            "path",
            {
                d: "M19 12H5",
                key: "x3x0zl"
            }
        ]
    ]
};
__iconData.node;
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-ssr] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=OneDrive_Bureau_r%C3%A9daction%20proo_0g2-2ig._.js.map