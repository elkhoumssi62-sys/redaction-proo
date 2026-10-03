(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Bureau/rédaction proo/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeText",
    ()=>analyzeText,
    "cn",
    ()=>cn,
    "suggestConnectors",
    ()=>suggestConnectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Bureau/rédaction proo/src/components/NavLinks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavLinks",
    ()=>NavLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/book-bookmark.mjs [app-client] (ecmascript) <export default as BookMarked>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/microscope.mjs [app-client] (ecmascript) <export default as Microscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/layout-dashboard.mjs [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const links = [
    {
        href: "/",
        label: "Accueil",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
    },
    {
        href: "/bibliotheque",
        label: "Bibliothèque",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__["BookMarked"]
    },
    {
        href: "/types",
        label: "Types",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        href: "/genres",
        label: "Genres",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        href: "/modeles",
        label: "Modèles",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__["BookMarked"]
    },
    {
        href: "/atelier",
        label: "Atelier",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    },
    {
        href: "/analyse",
        label: "Analyser",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__["Microscope"]
    },
    {
        href: "/tableau-de-bord",
        label: "Tableau de bord",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    }
];
function NavLinks() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "hidden md:flex items-center gap-1",
        children: links.map((link)=>{
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: link.href,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1.5 rounded-lg text-sm font-medium transition-all", isActive ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"),
                children: link.label
            }, link.href, false, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/components/NavLinks.tsx",
                lineNumber: 27,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/components/NavLinks.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(NavLinks, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavLinks;
var _c;
__turbopack_context__.k.register(_c, "NavLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Bureau_r%C3%A9daction%20proo_src_0.phk_f._.js.map