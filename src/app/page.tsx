import Link from "next/link";
import {
  BookOpen,
  FileText,
  Scale,
  Image as ImageIcon,
  Info,
  ClipboardList,
  Heart,
  Sparkles,
  Microscope,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Users,
  Building2,
  Quote,
  PenTool,
} from "lucide-react";
import { textTypes, genres } from "@/lib/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "book-open": BookOpen,
  image: ImageIcon,
  info: Info,
  scale: Scale,
  "clipboard-list": ClipboardList,
  heart: Heart,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl -z-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-6">
                <GraduationCap className="w-3.5 h-3.5" />
                Par le Pr. Mohamed EL KHOUMSSI
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                L'Atelier de{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Rédaction
                </span>
              </h1>
              <p className="mt-4 text-xl text-slate-600 leading-relaxed">
                La{" "}
                <strong className="text-slate-900">banque académique de référence</strong>{" "}
                pour maîtriser <em>tous</em> les types et genres de textes :
                dissertation, roman, lettre, article, poésie, rapport, plaidoyer...
                Apprenez, écrivez, analysez et progressez.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/atelier"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  <PenTool className="w-5 h-5" />
                  Ouvrir l'atelier
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/bibliotheque"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold hover:bg-slate-50 transition-all"
                >
                  <BookOpen className="w-5 h-5" />
                  Explorer la bibliothèque
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Gratuit pour commencer
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Contenu conforme aux programmes
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Analyseur intelligent
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-3 text-xs text-slate-400 font-mono">dissertation.md</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="text-xs uppercase tracking-wider text-indigo-600 font-bold">Type détecté : Argumentatif</div>
                  <div className="h-2.5 bg-slate-200 rounded-full w-3/4"></div>
                  <div className="h-2.5 bg-slate-200 rounded-full w-full"></div>
                  <div className="h-2.5 bg-slate-200 rounded-full w-5/6"></div>
                  <div className="h-2.5 bg-indigo-200 rounded-full w-2/3"></div>
                  <div className="mt-4 p-3 rounded-lg bg-indigo-50 border border-indigo-100">
                    <div className="text-xs font-semibold text-indigo-900 mb-1">💡 Suggestion du Pr. EL KHOUMSSI</div>
                    <div className="text-xs text-indigo-700">
                      Votre thèse est claire. Pensez à ajouter un argument d'autorité et une nuance en troisième partie.
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="p-2 rounded-lg bg-slate-50 text-center">
                      <div className="text-lg font-bold text-slate-900">342</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wide">Mots</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 text-center">
                      <div className="text-lg font-bold text-emerald-600">B+</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wide">Niveau</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 text-center">
                      <div className="text-lg font-bold text-violet-600">3</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wide">Arguments</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-slate-200 p-3 flex items-center gap-2 w-60">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">Connecteurs logiques</div>
                  <div className="text-[10px] text-slate-500">+12 détectés · bonne structure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de rédaction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold mb-4">
              Typologie textuelle
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Les 6 types fondamentaux de rédaction
            </h2>
            <p className="mt-4 text-slate-600">
              Le type correspond à l'<strong>intention</strong> de l'auteur et à la manière dont l'information est structurée.
              Un même genre peut combiner plusieurs types de rédaction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {textTypes.map((type) => {
              const Icon = iconMap[type.icon] || FileText;
              return (
                <Link
                  key={type.id}
                  href={`/types#${type.id}`}
                  className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -mr-8 -mt-8 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{type.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {type.intention}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {type.exemples.slice(0, 2).map((ex) => (
                        <span key={ex} className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {ex}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 group-hover:gap-2 transition-all">
                      Découvrir <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Genres */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold mb-4">
              Genres rédactionnels
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Tous les grands genres, de la prose à l'administratif
            </h2>
            <p className="mt-4 text-slate-600">
              Le genre désigne la <strong>catégorie formelle et institutionnelle</strong> dans laquelle s'inscrit l'écrit.
              C'est la « boîte » ; le type est le « mode de rédaction » utilisé à l'intérieur.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { cat: "litteraire", label: "Littéraires", color: "from-rose-500 to-pink-600", count: genres.filter(g => g.category === "litteraire").length, icon: BookOpen },
              { cat: "journalistique", label: "Journalistiques", color: "from-amber-500 to-orange-600", count: genres.filter(g => g.category === "journalistique").length, icon: FileText },
              { cat: "professionnel", label: "Professionnels", color: "from-sky-500 to-blue-600", count: genres.filter(g => g.category === "professionnel").length, icon: Building2 },
              { cat: "academique", label: "Académiques", color: "from-violet-500 to-purple-600", count: genres.filter(g => g.category === "academique").length, icon: GraduationCap },
            ].map((g) => {
              const Icon = g.icon;
              return (
                <Link
                  key={g.cat}
                  href={`/genres#${g.cat}`}
                  className="group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${g.color} text-white flex items-center justify-center mb-4 shadow group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Genres {g.label.toLowerCase()}</h3>
                  <p className="text-3xl font-extrabold mt-2 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                    {g.count}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">genres détaillés avec structure et exemples</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Une boîte à outils complète du rédacteur
            </h2>
            <p className="mt-4 text-slate-600">
              Tout ce qu'il faut pour comprendre, rédiger, analyser et progresser.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Bibliothèque académique",
                desc: "Toute la théorie : types, genres, caractéristiques, connecteurs logiques, temps verbaux, avec des exemples.",
                color: "bg-indigo-100 text-indigo-700",
              },
              {
                icon: FileText,
                title: "Modèles & canevas",
                desc: "Plans types, structures à remplir, pour dissertation, lettre, article, rapport et bien d'autres.",
                color: "bg-emerald-100 text-emerald-700",
              },
              {
                icon: Sparkles,
                title: "Atelier de rédaction",
                desc: "Éditeur intelligent qui vous guide dans l'écriture avec suggestions de connecteurs et d'éléments.",
                color: "bg-pink-100 text-pink-700",
              },
              {
                icon: Microscope,
                title: "Analyseur de texte",
                desc: "Détection automatique du type dominant, statistiques, lisibilité, points d'amélioration.",
                color: "bg-amber-100 text-amber-700",
              },
              {
                icon: ClipboardList,
                title: "Banque de sujets",
                desc: "Sujets d'entraînement classés par genre et par niveau, avec corrigés indicatifs.",
                color: "bg-sky-100 text-sky-700",
              },
              {
                icon: Users,
                title: "Pour tous les profils",
                desc: "Collégiens, lycéens, étudiants, enseignants, professionnels : une plateforme évolutive.",
                color: "bg-violet-100 text-violet-700",
              },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 mx-auto mb-6 text-indigo-300 opacity-60" />
          <blockquote className="text-2xl sm:text-3xl font-serif italic leading-relaxed">
            « Le genre est la boîte, le type est le mode de rédaction utilisé à l'intérieur.
            Maîtriser les deux, c'est pouvoir écrire <span className="text-indigo-300">n'importe quel texte</span>,
            dans n'importe quelle situation de communication. »
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold">
              ME
            </div>
            <div className="text-left">
              <div className="font-bold">Pr. Mohamed EL KHOUMSSI</div>
              <div className="text-sm text-slate-400">Machine à Langue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Commencez gratuitement, progressez à votre rythme
            </h2>
            <p className="mt-4 text-slate-600">
              Accès gratuit à la bibliothèque complète. Passez à Pro pour débloquer l'atelier avancé et les modèles premium.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl border border-slate-200 bg-white">
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Gratuit</div>
              <div className="mt-4 text-4xl font-extrabold text-slate-900">0 DH</div>
              <div className="text-sm text-slate-500">pour toujours</div>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />Bibliothèque complète des types & genres</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />Analyseur de texte (5 textes/jour)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />3 documents sauvegardés</li>
              </ul>
              <Link href="/inscription" className="mt-6 block text-center px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 transition-colors">
                Créer un compte gratuit
              </Link>
            </div>
            <div className="p-8 rounded-2xl border-2 border-indigo-600 bg-gradient-to-br from-indigo-50 to-white relative shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold rounded-full">
                Recommandé
              </div>
              <div className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Pro</div>
              <div className="mt-4 text-4xl font-extrabold text-slate-900">99 DH</div>
              <div className="text-sm text-slate-500">/mois</div>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />Tout le contenu Gratuit</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />Analyseur illimité avec IA</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />Tous les modèles & canevas premium</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />Documents illimités</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />Sauvegarde & export PDF</li>
              </ul>
              <Link href="/tarifs" className="mt-6 block text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow hover:shadow-lg transition-shadow">
                Passer à Pro
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
