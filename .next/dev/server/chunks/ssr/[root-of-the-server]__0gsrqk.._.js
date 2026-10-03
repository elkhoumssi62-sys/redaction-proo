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
"[project]/OneDrive/Bureau/rédaction proo/src/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeText",
    ()=>analyzeText,
    "cn",
    ()=>cn,
    "suggestConnectors",
    ()=>suggestConnectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function analyzeText(text) {
    if (!text || text.trim().length === 0) {
        return null;
    }
    const lower = text.toLowerCase();
    const wordCount = text.trim().split(/\s+/).filter((w)=>w.length > 0).length;
    const charCount = text.length;
    const sentenceCount = text.split(/[.!?]+/).filter((s)=>s.trim().length > 0).length;
    const avgWordsPerSentence = sentenceCount > 0 ? Math.round(wordCount / sentenceCount) : 0;
    const paragraphCount = text.split(/\n\n+/).filter((p)=>p.trim().length > 0).length;
    // Count indicators per type
    const indicators = {
        narratif: {
            count: 0,
            words: []
        },
        descriptif: {
            count: 0,
            words: []
        },
        explicatif: {
            count: 0,
            words: []
        },
        argumentatif: {
            count: 0,
            words: []
        },
        injonctif: {
            count: 0,
            words: []
        },
        expressif: {
            count: 0,
            words: []
        }
    };
    const indicatorLists = {
        narratif: [
            "puis",
            "soudain",
            "alors",
            "un jour",
            "ensuite",
            "enfin",
            "pendant que",
            "tandis que",
            "lorsque",
            "quand",
            "dès que",
            "enfin",
            "puis",
            "histoire",
            "raconter",
            "personnage",
            "récit",
            "aventure",
            "narrer",
            "conte",
            "roman"
        ],
        descriptif: [
            "voir",
            "apercevoir",
            "beau",
            "joli",
            "grand",
            "petit",
            "gros",
            "mince",
            "bleu",
            "rouge",
            "vert",
            "à gauche",
            "à droite",
            "au loin",
            "près",
            "derrière",
            "devant",
            "au-dessus",
            "au-dessous",
            "comme",
            "semble",
            "paraît",
            "on dirait"
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
            "consiste",
            "on appelle",
            "c'est un",
            "il s'agit de",
            "autrement dit"
        ],
        argumentatif: [
            "je pense",
            "selon moi",
            "il me semble",
            "cependant",
            "pourtant",
            "néanmoins",
            "toutefois",
            "thèse",
            "argument",
            "exemple",
            "démontrer",
            "prouver",
            "convaincre",
            "contraire",
            "objection",
            "mais",
            "donc",
            "ainsi",
            "alors que",
            "même si",
            "bien que",
            "quoique",
            "en revanche"
        ],
        injonctif: [
            "il faut",
            "vous devez",
            "veuillez",
            "interdit",
            "consigne",
            "attention",
            "étape",
            "recette",
            "règlement",
            "impératif",
            "prié",
            "obligatoire",
            "défense de",
            "il est",
            "recommandé"
        ],
        expressif: [
            "je ressens",
            "j'aime",
            "je hais",
            "ému",
            "hélas",
            "oh",
            "joie",
            "bonheur",
            "tristesse",
            "peine",
            "chagrin",
            "amour",
            "haine",
            "douleur",
            "plaisir",
            "extase",
            "quelle",
            "quel",
            "mon coeur",
            "âme",
            "sentiment",
            "émotion",
            "!",
            "...",
            "?"
        ]
    };
    for (const [type, words] of Object.entries(indicatorLists)){
        for (const w of words){
            const regex = new RegExp(`(^|\\s|[!?,.;:])${escapeRegex(w.toLowerCase())}`, "g");
            const matches = lower.match(regex);
            if (matches && matches.length > 0) {
                indicators[type].count += matches.length;
                if (!indicators[type].words.includes(w)) {
                    indicators[type].words.push(w);
                }
            }
        }
    }
    // Detect first person
    const firstPerson = (lower.match(/\bje\b|\bj'|\bmon\b|\bma\b|\bmoi\b|\bme\b|\bmien/g) || []).length;
    const imperativeMatches = text.match(/^\s*(?:Veuillez|Faites|Ajoutez|Mélangez|Prendre|Aller|Faire|Prendre|Écrivez|Lisez|Répondez|Respectez|Assurez-vous)/im);
    const hasImperative = !!imperativeMatches;
    // Detect tenses (heuristic)
    const passeSimple = (text.match(/\b(?:il|elle|on|je|tu|ils|elles)\s+\w+(?:a|ai|as|èrent|èrent|it|irent|ut|urent)\b/g) || []).length;
    const imparfait = (text.match(/\b(?:je|tu|il|elle|on|nous|vous|ils|elles)\s+\w+(?:ais|ait|ions|iez|aient)\b/g) || []).length;
    const present = (text.match(/\b(?:je|tu|il|elle|on|nous|vous|ils|elles)\s+\w+(?:e|es|ons|ez|ent|t|s)\b/g) || []).length;
    if (hasImperative) indicators.injonctif.count += 3;
    if (firstPerson > 2) indicators.expressif.count += Math.min(firstPerson, 3);
    // Calculate percentages
    const total = Object.values(indicators).reduce((a, b)=>a + b.count, 0);
    const scores = {};
    let dominantType = "";
    let highestScore = 0;
    for (const [type, data] of Object.entries(indicators)){
        scores[type] = total > 0 ? Math.round(data.count / total * 100) : 0;
        if (data.count > highestScore) {
            highestScore = data.count;
            dominantType = type;
        }
    }
    // Determine readability
    const readability = avgWordsPerSentence < 12 ? "Facile" : avgWordsPerSentence < 20 ? "Moyenne" : "Complexe";
    // Suggestions
    const suggestions = [];
    if (avgWordsPerSentence > 25) {
        suggestions.push("Vos phrases sont longues. Envisagez de les raccourcir pour améliorer la clarté.");
    }
    if (paragraphCount === 1 && wordCount > 100) {
        suggestions.push("Votre texte est dense. Pensez à aérer avec des paragraphes.");
    }
    if (!dominantType && wordCount > 50) {
        suggestions.push("Le type de texte n'est pas très marqué. Affirmez davantage votre intention.");
    }
    if (firstPerson > 5 && dominantType === "explicatif") {
        suggestions.push("Votre texte explicatif contient beaucoup de marques de la première personne. Un ton plus neutre pourrait être approprié.");
    }
    const typeLabels = {
        narratif: "Narratif",
        descriptif: "Descriptif",
        explicatif: "Explicatif / Informatif",
        argumentatif: "Argumentatif",
        injonctif: "Injonctif / Prescriptif",
        expressif: "Expressif / Émotif"
    };
    return {
        stats: {
            wordCount,
            charCount,
            sentenceCount,
            avgWordsPerSentence,
            paragraphCount
        },
        scores,
        dominantType: dominantType ? typeLabels[dominantType] : "Indéterminé",
        indicators,
        tenses: {
            passeSimple,
            imparfait,
            present
        },
        firstPerson,
        hasImperative,
        readability,
        suggestions
    };
}
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function suggestConnectors(typeId) {
    const map = {
        narratif: [
            "d'abord",
            "puis",
            "ensuite",
            "soudain",
            "brusquement",
            "enfin",
            "pendant que",
            "tandis que",
            "finalement",
            "alors"
        ],
        descriptif: [
            "à gauche",
            "à droite",
            "au centre",
            "au loin",
            "près de",
            "en haut",
            "en bas",
            "on distingue",
            "on aperçoit",
            "tel que"
        ],
        explicatif: [
            "car",
            "en effet",
            "c'est pourquoi",
            "ainsi",
            "donc",
            "par exemple",
            "c'est-à-dire",
            "autrement dit",
            "en d'autres termes"
        ],
        argumentatif: [
            "tout d'abord",
            "de plus",
            "en outre",
            "cependant",
            "pourtant",
            "néanmoins",
            "donc",
            "c'est pourquoi",
            "en effet",
            "au contraire",
            "par ailleurs"
        ],
        injonctif: [
            "d'abord",
            "puis",
            "ensuite",
            "enfin",
            "il faut",
            "veuillez",
            "pensez à",
            "attention"
        ],
        expressif: [
            "oh!",
            "hélas!",
            "comme",
            "que de",
            "quelle",
            "je ressens",
            "mon cœur",
            "j'éprouve"
        ]
    };
    return map[typeId] || [];
}
}),
"[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GenresPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/src/lib/content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-rsc] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-rsc] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$complex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/building-complex.mjs [app-rsc] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-rsc] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const categoryIcons = {
    litteraire: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
    journalistique: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
    professionnel: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$complex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
    academique: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
};
const categoryIds = [
    "litteraire",
    "journalistique",
    "professionnel",
    "academique"
];
function GenresPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/bibliotheque",
                className: "inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    "Retour à la bibliothèque"
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold mb-3",
                        children: "Genres rédactionnels"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extrabold text-slate-900",
                        children: "Les grands genres de rédaction"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-lg text-slate-600 max-w-3xl",
                        children: [
                            "Le ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "genre"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                lineNumber: 32,
                                columnNumber: 14
                            }, this),
                            " désigne la catégorie formelle et institutionnelle dans laquelle s'inscrit l'écrit. C'est la « boîte » dans laquelle on écrit ; le type est le « mode de rédaction » utilisé à l'intérieur."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-12",
                children: categoryIds.map((cat)=>{
                    const catGenres = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["genres"].filter((g)=>g.category === cat);
                    const Icon = categoryIcons[cat];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: cat,
                        className: "scroll-mt-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("w-12 h-12 rounded-xl bg-gradient-to-br text-white flex items-center justify-center shadow", __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categoryColors"][cat]),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-slate-900",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categoryLabels"][cat]
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500",
                                                children: [
                                                    catGenres.length,
                                                    " genre(s) recensé(s)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
                                children: catGenres.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group bg-white rounded-xl border border-slate-200 p-5 hover:border-indigo-300 hover:shadow-lg transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-slate-900 mb-2",
                                                children: g.name
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                                lineNumber: 64,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-600 leading-relaxed mb-3 line-clamp-3",
                                                children: g.description
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5",
                                                        children: "Types dominants"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-1",
                                                        children: g.typesDominants.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700",
                                                                children: t
                                                            }, t, false, {
                                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                                                lineNumber: 74,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5",
                                                        children: "Structure"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "text-xs text-slate-600 space-y-0.5",
                                                        children: [
                                                            g.structure.slice(0, 3).map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-indigo-400 font-bold",
                                                                            children: [
                                                                                i + 1,
                                                                                "."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                                                            lineNumber: 90,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "line-clamp-1",
                                                                            children: s
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                                                            lineNumber: 91,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, i, true, {
                                                                    fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                                                    lineNumber: 89,
                                                                    columnNumber: 27
                                                                }, this)),
                                                            g.structure.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-[10px] text-slate-400 italic",
                                                                children: [
                                                                    "+ ",
                                                                    g.structure.length - 3,
                                                                    " autre(s) élément(s)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, g.id, true, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this)
                        ]
                    }, cat, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-16 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-slate-900 mb-2",
                        children: "Synthèse : Genre vs Type"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold text-indigo-700 mb-1",
                                        children: "Le Genre, c'est la « boîte »"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-700",
                                        children: "Exemple : une lettre de motivation. C'est la catégorie formelle dans laquelle s'inscrit votre texte."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold text-purple-700 mb-1",
                                        children: "Le Type, c'est le « mode de rédaction »"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-700",
                                        children: "Exemple : principalement argumentatif et explicatif. C'est la manière dont vous écrivez à l'intérieur du genre."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/atelier",
                            className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow hover:shadow-lg transition-all",
                            children: [
                                "Passer à l'atelier ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 32
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/src/app/genres/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0gsrqk.._.js.map