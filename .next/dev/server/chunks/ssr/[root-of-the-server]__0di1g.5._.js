module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/OneDrive/Bureau/rédaction proo/src/lib/content.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BibliothequePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-rsc] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-rsc] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$bookmark$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/book-bookmark.mjs [app-rsc] (ecmascript) <export default as BookMarked>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/library.mjs [app-rsc] (ecmascript) <export default as Library>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$tree$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTree$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/list-tree.mjs [app-rsc] (ecmascript) <export default as ListTree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/link-2.mjs [app-rsc] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-rsc] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/src/lib/content.ts [app-rsc] (ecmascript)");
;
;
;
;
function BibliothequePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-12 text-center max-w-3xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__["Library"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            "Bibliothèque académique"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extrabold text-slate-900",
                        children: "La source officielle du rédacteur"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-lg text-slate-600",
                        children: "Toute la théorie de la rédaction selon le Pr. Mohamed EL KHOUMSSI, structurée et accessible. Types, genres, connecteurs logiques, conseils, structures : votre banque de connaissances."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/types",
                        className: "group relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-xl hover:shadow-2xl transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-12 -mt-12"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$tree$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTree$3e$__["ListTree"], {
                                className: "w-10 h-10 mb-4 opacity-90"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-2",
                                children: "Les 6 types de rédaction"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-indigo-100 mb-6 leading-relaxed",
                                children: "Narratif, descriptif, explicatif, argumentatif, injonctif, expressif : intentions, caractéristiques, temps verbaux, exemples et conseils."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5 mb-6",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["textTypes"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs px-2 py-0.5 rounded-md bg-white/20",
                                        children: t.name
                                    }, t.id, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all",
                                children: [
                                    "Explorer les types ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/genres",
                        className: "group relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xl hover:shadow-2xl transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-12 -mt-12"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$bookmark$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__["BookMarked"], {
                                className: "w-10 h-10 mb-4 opacity-90"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-2",
                                children: "Les grands genres"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-orange-50 mb-6 leading-relaxed",
                                children: "Littéraires, journalistiques, professionnels, académiques : toutes les catégories formelles avec leurs structures et types dominants."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs px-2 py-0.5 rounded-md bg-white/20",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["genres"].length,
                                            " genres"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs px-2 py-0.5 rounded-md bg-white/20",
                                        children: "4 catégories"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all",
                                children: [
                                    "Explorer les genres ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/modeles",
                        className: "group p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-emerald-300 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-slate-900 mb-2",
                                children: "Modèles & canevas"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-600 mb-3",
                                children: "Plans types, structures à remplir et exemples pour tous les genres : dissertation, lettre, article, roman, poésie..."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 group-hover:gap-2 transition-all",
                                children: [
                                    "Accéder aux modèles ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/atelier",
                        className: "group p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-pink-300 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-slate-900 mb-2",
                                children: "Atelier de rédaction"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-600 mb-3",
                                children: "Rédigez en étant guidé : suggestions de connecteurs, rappel des règles du genre choisi, structure en temps réel."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-1 text-sm font-semibold text-pink-700 group-hover:gap-2 transition-all",
                                children: [
                                    "Ouvrir l'atelier ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white rounded-2xl border border-slate-200 p-8 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-slate-900",
                                        children: "Banque des connecteurs logiques"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500",
                                        children: "Classés par fonction pour enrichir et structurer vos textes."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connecteursLogiques"]).map(([cat, list])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-slate-50 border border-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-bold text-slate-900 mb-2 capitalize",
                                        children: cat
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: [
                                            list.slice(0, 8).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700",
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this)),
                                            list.length > 8 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] px-1.5 py-0.5 text-violet-600 font-semibold",
                                                children: [
                                                    "+",
                                                    list.length - 8
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, cat, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                        className: "w-10 h-10 text-indigo-300 mb-4"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-3",
                        children: "Un contenu académique rigoureux"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-300 leading-relaxed mb-6 max-w-3xl",
                        children: [
                            "Cette plateforme est conçue comme un véritable manuel numérique, bâti autour du cours",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "« L'atelier de rédaction de Machine à Langue »"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            " du Pr. Mohamed EL KHOUMSSI. Chaque notion est définie, illustrée d'exemples concrets, et accompagnée de conseils d'expert pour que vous puissiez la mobiliser immédiatement dans vos écrits."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-3 gap-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/5 border border-white/10 rounded-xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-extrabold text-indigo-300 mb-1",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["textTypes"].length
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-300",
                                        children: "types de rédaction détaillés"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/5 border border-white/10 rounded-xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-extrabold text-indigo-300 mb-1",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["genres"].length,
                                            "+"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-300",
                                        children: "genres passés au crible"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/5 border border-white/10 rounded-xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-extrabold text-indigo-300 mb-1",
                                        children: "100+"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-300",
                                        children: "connecteurs logiques recensés"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/src/app/bibliotheque/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0di1g.5._.js.map