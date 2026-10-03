module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModelesPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-rsc] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-rsc] (ecmascript) <export default as Copy>");
;
;
;
const metadata = {
    title: "Modèles & canevas — L'Atelier de Rédaction"
};
const canevas = [
    {
        id: "lettre-motivation",
        titre: "Lettre de motivation",
        categorie: "Professionnel",
        couleur: "from-sky-500 to-blue-600",
        description: "Structure classique en trois temps : Vous / Moi / Nous.",
        elements: [
            "Coordonnées (expéditeur + destinataire)",
            "Lieu, date",
            "Objet de la lettre",
            "Formule d'appel (Madame, Monsieur)",
            "Paragraphe « Vous » : ce qui vous attire dans l'entreprise/l'établissement",
            "Paragraphe « Moi » : mes atouts, compétences, expériences en adéquation",
            "Paragraphe « Nous » : ce que nous pouvons construire ensemble",
            "Demande d'entretien",
            "Formule de politesse",
            "Signature"
        ]
    },
    {
        id: "dissertation",
        titre: "Dissertation",
        categorie: "Académique",
        couleur: "from-violet-500 to-purple-600",
        description: "Plan dialectique (thèse / antithèse / synthèse) et structure canonique.",
        elements: [
            "Accroche (citation, fait d'actualité)",
            "Définition des termes du sujet",
            "Problématique explicite",
            "Annonce claire du plan",
            "I. Thèse (arguments qui confirment la position initiale)",
            "II. Antithèse (objections, limites, point de vue opposé)",
            "III. Synthèse / Dépassement (position nuancée et supérieure)",
            "Conclusion : bilan + réponse à la problématique + ouverture"
        ]
    },
    {
        id: "commentaire",
        titre: "Commentaire composé",
        categorie: "Académique",
        couleur: "from-violet-500 to-purple-600",
        description: "Analyse linéaire ou composée d'un extrait littéraire.",
        elements: [
            "Introduction : présentation de l'œuvre, auteur, extrait, situer le passage",
            "Projet de lecture (annonce des axes)",
            "Corps : 2 à 3 axes (thématiques ou formels)",
            "Chaque axe : sous-parties avec citations + analyse",
            "Figures de style à identifier et analyser",
            "Conclusion : bilan + ouverture"
        ]
    },
    {
        id: "article-presse",
        titre: "Article de presse",
        categorie: "Journalistique",
        couleur: "from-amber-500 to-orange-600",
        description: "Structure pyramidale inversée : l'essentiel d'abord.",
        elements: [
            "Titre accrocheur et informatif",
            "Chapô (répond aux 5 W : qui, quoi, où, quand, pourquoi)",
            "Premier paragraphe : l'information essentielle",
            "Corps : détails, témoignages, citations, chiffres",
            "Fin : détails secondaires, contexte",
            "Chute (dernière phrase forte)"
        ]
    },
    {
        id: "compte-rendu",
        titre: "Compte rendu de réunion",
        categorie: "Professionnel",
        couleur: "from-sky-500 to-blue-600",
        description: "Rapport structuré des échanges et décisions.",
        elements: [
            "Titre (objet de la réunion)",
            "Date, heure, lieu",
            "Présents / Excusés / Absents",
            "Ordre du jour",
            "Pour chaque point : discussions, décisions prises",
            "Actions à mener (responsable + délai)",
            "Points en suspens",
            "Date de la prochaine réunion",
            "Signature du secrétaire / animateur"
        ]
    },
    {
        id: "rapport",
        titre: "Rapport d'activité",
        categorie: "Professionnel",
        couleur: "from-sky-500 to-blue-600",
        description: "Document de synthèse à visée évaluative.",
        elements: [
            "Page de garde (titre, auteur(s), date, destinataire)",
            "Sommaire",
            "Introduction : contexte, objectifs, périmètre",
            "Méthodologie",
            "Présentation des résultats / actions menées",
            "Analyse et interprétation",
            "Recommandations",
            "Conclusion générale",
            "Annexes"
        ]
    },
    {
        id: "recette",
        titre: "Recette de cuisine",
        categorie: "Injonctif",
        couleur: "from-emerald-500 to-teal-600",
        description: "Texte injonctif classique.",
        elements: [
            "Titre du plat",
            "Nombre de personnes",
            "Temps de préparation / cuisson",
            "Difficulté",
            "Liste des ingrédients (quantités)",
            "Ustensiles nécessaires",
            "Étapes numérotées (à l'impératif ou infinitif)",
            "Astuces / variantes"
        ]
    },
    {
        id: "conte",
        titre: "Conte merveilleux",
        categorie: "Littéraire",
        couleur: "from-rose-500 to-pink-600",
        description: "Schéma narratif classique du conte.",
        elements: [
            "Formule d'ouverture (« Il était une fois »)",
            "Situation initiale (cadre + héros + équilibre)",
            "Élément perturbateur / Problème",
            "Aide(s) / adjuvant(s) et opposant(s)",
            "Épreuves (3 en général)",
            "Élément magique",
            "Résolution du problème",
            "Situation finale (retour à l'équilibre, mariage, royauté)",
            "Morale explicite ou implicite",
            "Formule de clôture"
        ]
    },
    {
        id: "poeme",
        titre: "Poème lyrique",
        categorie: "Littéraire",
        couleur: "from-rose-500 to-pink-600",
        description: "Expression des sentiments personnels.",
        elements: [
            "Choix de la forme (sonnet, ode, ballade, vers libres)",
            "Thème (amour, mort, nature, temps qui passe)",
            "Champ lexical dominant",
            "Rythme et sonorités (allitérations, assonances)",
            "Figures de style (métaphores, comparaisons, hyperboles)",
            "Images sensorielles (vue, ouïe, odorat, toucher)",
            "Disposition strophique"
        ]
    }
];
function ModelesPage() {
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
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    " Retour à la bibliothèque"
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-3",
                        children: "Canevas prêts à l'emploi"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extrabold text-slate-900",
                        children: "Modèles & plans types"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-lg text-slate-600 max-w-3xl",
                        children: "Des structures complètes pour les genres les plus courants : chaque élément est détaillé pour vous permettre de rédiger pas à pas."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: canevas.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `bg-gradient-to-r ${c.couleur} px-5 py-4 text-white flex items-start justify-between`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] uppercase tracking-wider opacity-80 font-semibold",
                                                children: c.categorie
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-bold",
                                                children: c.titre
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-6 h-6 opacity-80"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-600 mb-4",
                                        children: c.description
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 mb-4",
                                        children: [
                                            c.elements.slice(0, 5).map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 text-sm text-slate-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5",
                                                            children: i + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "line-clamp-1",
                                                            children: e
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this)),
                                            c.elements.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500 pl-7",
                                                children: [
                                                    "… et ",
                                                    c.elements.length - 5,
                                                    " autre(s) élément(s)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/modeles/${c.id}`,
                                        className: "inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$r$e9$daction__proo$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this),
                                            " Utiliser ce modèle"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this)
                        ]
                    }, c.id, true, {
                        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Bureau/rédaction proo/src/app/modeles/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0u6q-v2._.js.map