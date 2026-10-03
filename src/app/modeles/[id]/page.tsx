import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText } from "lucide-react";

const canevas: Record<string, { titre: string; categorie: string; description: string; elements: string[]; conseils: string[] }> = {
  "lettre-motivation": {
    titre: "Lettre de motivation",
    categorie: "Professionnel",
    description:
      "Structure canonique en trois temps : Vous (l'entreprise/l'école), Moi (mon profil), Nous (notre collaboration future).",
    elements: [
      "Coordonnées de l'expéditeur (nom, prénom, adresse, téléphone, e-mail)",
      "Coordonnées du destinataire (nom, fonction, entreprise, adresse)",
      "Lieu et date",
      "Objet : candidature au poste de X / à la formation Y",
      "Formule d'appel : Madame, Monsieur (si inconnu), ou Madame X / Monsieur Y",
      "Paragraphe « Vous » : ce qui vous attire dans cette entreprise, cette formation, ce poste. Évitez les généralités (« depuis toujours je rêve de... ») : soyez précis et factuel.",
      "Paragraphe « Moi » : mes expériences, compétences, qualités en lien avec le poste/la formation. Illustrez par un exemple concret.",
      "Paragraphe « Nous » : ce que nous pouvons apporter l'un à l'autre. C'est la proposition de valeur.",
      "Demande d'entretien et de rendez-vous.",
      "Formule de politesse (Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.)",
      "Signature manuscrite en version papier.",
    ],
    conseils: [
      "Maximum une page",
      "Personnalisez chaque lettre : pas de modèle standard envoyé à tous",
      "Évitez le « je » excessif",
      "Relisez-vous : les fautes d'orthographe sont rédhibitoires",
      "Adaptez votre ton : sobre pour un cabinet, plus créatif pour une agence",
    ],
  },
  dissertation: {
    titre: "Dissertation",
    categorie: "Académique",
    description:
      "Plan dialectique (thèse / antithèse / synthèse) — le schéma le plus courant en philosophie, français, culture générale.",
    elements: [
      "Accroche (citation, fait historique, exemple littéraire, question ouverte)",
      "Définition des termes clés du sujet",
      "Contexte (si nécessaire)",
      "Problématique : une question ouverte qui oriente tout le devoir",
      "Annonce claire du plan (en deux ou trois parties)",
      "I. Thèse : on examine la position la plus évidente, on lui donne ses meilleurs arguments",
      "II. Antithèse : on remet en cause cette position, on montre ses limites, on envisage le point de vue opposé",
      "III. Synthèse (ou dépassement) : on dépasse l'opposition en proposant une réponse plus fine, plus nuancée, à la problématique",
      "Conclusion : on résume le parcours, on répond explicitement à la problématique, on ouvre sur une autre question, une perspective, une œuvre",
    ],
    conseils: [
      "Une idée = un paragraphe, avec argument + exemple + commentaire",
      "Utilisez des connecteurs logiques pour articuler les parties",
      "Évitez les généralités : appuyez chaque argument sur un exemple précis (références)",
      "N'écrivez pas « je » (sauf en philosophie)",
      "La conclusion ne doit pas apporter d'argument nouveau",
    ],
  },
  commentaire: {
    titre: "Commentaire composé",
    categorie: "Académique",
    description: "Analyse d'un extrait textuel en plusieurs axes de lecture (2 ou 3 axes).",
    elements: [
      "Introduction : présenter l'œuvre (titre, auteur, date), la situer dans son époque, indiquer où se trouve l'extrait, annoncer brièvement le sens du passage",
      "Projet de lecture : annoncer clairement les 2 ou 3 axes qui structurent le commentaire",
      "Corps du devoir : 2 ou 3 parties, chacune divisée en sous-parties",
      "Chaque sous-partie : une idée directrice, une citation précise du texte, une analyse (figures de style, grammaire, tonalité, visée)",
      "Des transitions entre les parties",
      "Conclusion : bilan de l'analyse, sens global du texte, ouverture (mise en perspective avec une autre œuvre, une autre lecture)",
    ],
    conseils: [
      "Ne paraphrasez pas : analysez le texte",
      "Citez abondamment mais brièvement",
      "Nommez les figures de style quand elles sont significatives",
      "Construisez un plan qui progresse : n'allez pas du plus important au moins important",
    ],
  },
  "article-presse": {
    titre: "Article de presse",
    categorie: "Journalistique",
    description:
      "Structure pyramidale inversée : les informations essentielles d'abord, les détails ensuite.",
    elements: [
      "Titre (accrocheur et informatif)",
      "Surtitre / sous-titre éventuels",
  "Chapô (3 à 4 lignes) : répond aux 5 W : Qui ? Quoi ? Où ? Quand ? Pourquoi ? Comment ?",
      "Attaque (premier paragraphe) : l'information la plus importante",
      "Corps : détails, citations, témoignages, chiffres, contextualisation",
      "Arrière-plan (historique, dossier)",
      "Chute : dernière phrase qui clôt l'article avec force, humour, ou émotion",
    ],
    conseils: [
      "Écrivez court : phrases courtes, mots simples",
      "Une idée par paragraphe",
      "Citez des sources et les personnes interrogées",
      "Évitez le jargon",
      "Restez factuel : la règle des 5 W",
    ],
  },
  "compte-rendu": {
    titre: "Compte rendu de réunion",
    categorie: "Professionnel",
    description: "Document factuel et neutre qui relate les échanges et les décisions prises.",
    elements: [
      "Titre : Compte rendu de la réunion du [date]",
      "Ordre du jour",
      "Liste des présents / excusés / absents",
      "Heure de début et de fin",
      "Rappel du contexte si nécessaire",
      "Pour chaque point à l'ordre du jour : synthèse des discussions, décisions actées, points de divergence éventuels",
      "Tableau des actions à mener : action, responsable, délai",
      "Points en suspens",
      "Date et heure de la prochaine réunion",
      "Nom et signature du rédacteur, visa de l'animateur",
    ],
    conseils: [
      "Rédigez dans les 24 heures qui suivent la réunion",
      "Restez neutre : ne rapportez pas les opinions personnelles, seulement les consensus et décisions",
      "Soyez précis sur les actions (qui fait quoi pour quand ?)",
      "Numérotez les pages pour des réunions longues",
    ],
  },
  rapport: {
    titre: "Rapport d'activité",
    categorie: "Professionnel",
    description: "Document de synthèse rédigé à intervalles réguliers pour rendre compte de l'activité d'un service ou d'une personne.",
    elements: [
      "Page de couverture (titre, période, auteur, destinataire)",
      "Sommaire paginé",
      "Introduction : contexte et objectifs de la période",
      "Moyens mis en œuvre (humains, budgétaires, matériels)",
      "Réalisations principales (par thème ou par objectif)",
      "Résultats chiffrés (indicateurs, tableaux, graphiques)",
      "Analyse : points forts, points faibles, difficultés rencontrées",
      "Perspectives et recommandations pour la période suivante",
      "Conclusion générale",
      "Annexes (tableaux détaillés, documents supports)",
    ],
    conseils: [
      "Structurez par objectifs plutôt que par activités",
      "Appuyez-vous sur des chiffres et indicateurs mesurables",
      "Ne masquez pas les difficultés : proposez des pistes",
      "Adressez le rapport au bon destinataire",
      "Soignez la forme (tableaux, graphiques)",
    ],
  },
  recette: {
    titre: "Recette de cuisine",
    categorie: "Injonctif",
    description: "Texte injonctif classique : liste + étapes numérotées.",
    elements: [
      "Nom du plat",
      "Nombre de convives",
      "Temps de préparation / temps de cuisson / temps de repos",
      "Niveau de difficulté",
      "Liste des ingrédients (classés par ordre d'utilisation, avec quantités précises et unités)",
      "Liste du matériel spécifique",
      "Étapes numérotées, rédigées à l'impératif ou à l'infinitif",
      "Conseils de présentation ou de service",
      "Variantes possibles",
    ],
    conseils: [
      "Verbes à l'impératif (prenez, mélangez, faites cuire...) ou à l'infinitif",
      "Soyez précis sur les quantités",
      "Indiquez les temps de cuisson et températures",
      "Classez les étapes dans l'ordre chronologique",
    ],
  },
  conte: {
    titre: "Conte merveilleux",
    categorie: "Littéraire",
    description: "Récit bref avec une structure canonique et une dimension morale.",
    elements: [
      "Formule d'ouverture (Il était une fois... / Dans un pays lointain...)",
      "Situation initiale : présentation du cadre, du héros ou de l'héroïne, d'un équilibre",
      "Élément perturbateur : un manque, une injustice, une épreuve",
      "Personnages typiques : le héros, l'opposant, l'adjuvant (une fée, un animal qui parle, un vieux sage), le mandateur (le roi qui envoie le héros)",
      "Trois épreuves successives (chiffre magique dans le conte)",
      "Un objet magique ou une aide surnaturelle",
      "Un combat ou une épreuve finale décisive",
      "La récompense (mariage, royauté, trésor)",
      "Situation finale : retour à l'équilibre, transformation du héros",
      "Formule de clôture (Et ils vécurent heureux..., etc.)",
      "Morale (implicite ou explicite)",
    ],
    conseils: [
      "Utilisez l'imparfait et le passé simple",
      "Des personnages archétypaux",
      "Des indicateurs temporels (un jour, tandis que, tout à coup...)",
      "Des descriptions soutenues par des comparaisons et métaphores",
    ],
  },
  poeme: {
    titre: "Poème lyrique",
    categorie: "Littéraire",
    description: "Texte poétique centré sur l'expression des sentiments.",
    elements: [
      "Choix de la forme (sonnet, haïku, odes, vers libres, prose poétique)",
      "Définition du thème (amour, nostalgie, nature, exil, mort, etc.)",
      "Choix du registre (élégiaque, épique, satirique, lyrique)",
      "Champ lexical dominant (ex. : la nature, le feu, l'eau)",
      "Rythme : comptage des syllabes, disposition des strophes (quatrains, tercets, sizains)",
      "Sonorités : rimes (croisées, plates, embrassées), allitérations, assonances",
      "Figures de style obligées : métaphores, comparaisons, personnifications, hyperboles, anaphores",
      "Images sensorielles (vue, ouïe, odorat, toucher, goût)",
      "Ponctuation expressive (points d'exclamation, suspensions)",
    ],
    conseils: [
      "Ne racontez pas : suggérez",
      "Travaillez le rythme et la musique du vers",
      "Une émotion par poème",
      "Soyez concis : un poème est dense",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(canevas).map((id) => ({ id }));
}

export default function ModeleDetail({ params }: { params: { id: string } }) {
  const m = canevas[params.id];
  if (!m) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/modeles" className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Tous les modèles
      </Link>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-6 text-white flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider opacity-80 font-semibold">{m.categorie}</div>
            <h1 className="text-2xl font-extrabold">{m.titre}</h1>
            <p className="text-indigo-100 text-sm mt-1">{m.description}</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
              Structure détaillée ({m.elements.length} étapes)
            </h2>
            <ol className="space-y-3">
              {m.elements.map((e, i) => (
                <li key={i} className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="pt-1 text-sm text-slate-700 leading-relaxed">{e}</div>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
            <h3 className="text-sm font-bold text-emerald-900 mb-2">Conseils pratiques</h3>
            <ul className="space-y-1.5">
              {m.conseils.map((c, i) => (
                <li key={i} className="text-sm text-emerald-900 flex gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3">
            <Link
              href={`/atelier?genre=${params.id}`}
              className="flex-1 text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow hover:shadow-lg"
            >
              Utiliser dans l'atelier
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
