import Link from "next/link";
import {
  BookOpen,
  FileText,
  BookMarked,
  Library,
  ArrowRight,
  ListTree,
  Link2,
  Lightbulb,
} from "lucide-react";
import { textTypes, genres, connecteursLogiques } from "@/lib/content";

export default function BibliothequePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-4">
          <Library className="w-3.5 h-3.5" />
          Bibliothèque académique
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900">La source officielle du rédacteur</h1>
        <p className="mt-4 text-lg text-slate-600">
          Toute la théorie de la rédaction selon le Pr. Mohamed EL KHOUMSSI, structurée et accessible.
          Types, genres, connecteurs logiques, conseils, structures : votre banque de connaissances.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Link
          href="/types"
          className="group relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-xl hover:shadow-2xl transition-shadow"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-12 -mt-12"></div>
          <ListTree className="w-10 h-10 mb-4 opacity-90" />
          <h2 className="text-2xl font-bold mb-2">Les 6 types de rédaction</h2>
          <p className="text-indigo-100 mb-6 leading-relaxed">
            Narratif, descriptif, explicatif, argumentatif, injonctif, expressif :
            intentions, caractéristiques, temps verbaux, exemples et conseils.
          </p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {textTypes.map((t) => (
              <span key={t.id} className="text-xs px-2 py-0.5 rounded-md bg-white/20">
                {t.name}
              </span>
            ))}
          </div>
          <div className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
            Explorer les types <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link
          href="/genres"
          className="group relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xl hover:shadow-2xl transition-shadow"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-12 -mt-12"></div>
          <BookMarked className="w-10 h-10 mb-4 opacity-90" />
          <h2 className="text-2xl font-bold mb-2">Les grands genres</h2>
          <p className="text-orange-50 mb-6 leading-relaxed">
            Littéraires, journalistiques, professionnels, académiques : toutes les catégories
            formelles avec leurs structures et types dominants.
          </p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            <span className="text-xs px-2 py-0.5 rounded-md bg-white/20">{genres.length} genres</span>
            <span className="text-xs px-2 py-0.5 rounded-md bg-white/20">4 catégories</span>
          </div>
          <div className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
            Explorer les genres <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Link
          href="/modeles"
          className="group p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-emerald-300 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Modèles & canevas</h3>
          <p className="text-sm text-slate-600 mb-3">
            Plans types, structures à remplir et exemples pour tous les genres : dissertation, lettre, article, roman, poésie...
          </p>
          <div className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 group-hover:gap-2 transition-all">
            Accéder aux modèles <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link
          href="/atelier"
          className="group p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-pink-300 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center mb-4">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Atelier de rédaction</h3>
          <p className="text-sm text-slate-600 mb-3">
            Rédigez en étant guidé : suggestions de connecteurs, rappel des règles du genre choisi, structure en temps réel.
          </p>
          <div className="inline-flex items-center gap-1 text-sm font-semibold text-pink-700 group-hover:gap-2 transition-all">
            Ouvrir l'atelier <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </div>

      {/* Connecteurs */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center">
            <Link2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Banque des connecteurs logiques</h2>
            <p className="text-sm text-slate-500">Classés par fonction pour enrichir et structurer vos textes.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(connecteursLogiques).map(([cat, list]) => (
            <div key={cat} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 mb-2 capitalize">{cat}</h4>
              <div className="flex flex-wrap gap-1">
                {list.slice(0, 8).map((c) => (
                  <span
                    key={c}
                    className="text-[11px] px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700"
                  >
                    {c}
                  </span>
                ))}
                {list.length > 8 && (
                  <span className="text-[11px] px-1.5 py-0.5 text-violet-600 font-semibold">
                    +{list.length - 8}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contenu du cours */}
      <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-8">
        <BookOpen className="w-10 h-10 text-indigo-300 mb-4" />
        <h2 className="text-2xl font-bold mb-3">Un contenu académique rigoureux</h2>
        <p className="text-slate-300 leading-relaxed mb-6 max-w-3xl">
          Cette plateforme est conçue comme un véritable manuel numérique, bâti autour du cours
          <em>« L'atelier de rédaction de Machine à Langue »</em> du Pr. Mohamed EL KHOUMSSI.
          Chaque notion est définie, illustrée d'exemples concrets, et accompagnée de conseils d'expert
          pour que vous puissiez la mobiliser immédiatement dans vos écrits.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="text-3xl font-extrabold text-indigo-300 mb-1">{textTypes.length}</div>
            <div className="text-slate-300">types de rédaction détaillés</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="text-3xl font-extrabold text-indigo-300 mb-1">{genres.length}+</div>
            <div className="text-slate-300">genres passés au crible</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="text-3xl font-extrabold text-indigo-300 mb-1">100+</div>
            <div className="text-slate-300">connecteurs logiques recensés</div>
          </div>
        </div>
      </section>
    </div>
  );
}
