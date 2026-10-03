import Link from "next/link";
import { ArrowLeft, FileText, Copy, CheckCircle2 } from "lucide-react";
import { plansTypes } from "@/lib/content";

export const metadata = {
  title: "Modèles & canevas — L'Atelier de Rédaction",
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
      "Signature",
    ],
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
      "Conclusion : bilan + réponse à la problématique + ouverture",
    ],
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
      "Conclusion : bilan + ouverture",
    ],
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
      "Chute (dernière phrase forte)",
    ],
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
      "Signature du secrétaire / animateur",
    ],
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
      "Annexes",
    ],
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
      "Astuces / variantes",
    ],
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
      "Formule de clôture",
    ],
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
      "Disposition strophique",
    ],
  },
];

export default function ModelesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/bibliotheque" className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Retour à la bibliothèque
      </Link>

      <div className="mb-10">
        <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-3">
          Canevas prêts à l'emploi
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900">Modèles & plans types</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Des structures complètes pour les genres les plus courants : chaque élément est détaillé pour
          vous permettre de rédiger pas à pas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {canevas.map((c) => (
          <div key={c.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className={`bg-gradient-to-r ${c.couleur} px-5 py-4 text-white flex items-start justify-between`}>
              <div>
                <div className="text-[11px] uppercase tracking-wider opacity-80 font-semibold">{c.categorie}</div>
                <h2 className="text-lg font-bold">{c.titre}</h2>
              </div>
              <FileText className="w-6 h-6 opacity-80" />
            </div>
            <div className="p-5">
              <p className="text-sm text-slate-600 mb-4">{c.description}</p>
              <div className="space-y-2 mb-4">
                {c.elements.slice(0, 5).map((e, i) => (
                  <div key={i} className="flex gap-2 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="line-clamp-1">{e}</span>
                  </div>
                ))}
                {c.elements.length > 5 && (
                  <div className="text-xs text-slate-500 pl-7">
                    … et {c.elements.length - 5} autre(s) élément(s)
                  </div>
                )}
              </div>
              <Link
                href={`/modeles/${c.id}`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                <Copy className="w-4 h-4" /> Utiliser ce modèle
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
