import Link from "next/link";
import { genres, categoryLabels, categoryColors } from "@/lib/content";
import { ArrowLeft, BookOpen, FileText, Building2, GraduationCap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  litteraire: BookOpen,
  journalistique: FileText,
  professionnel: Building2,
  academique: GraduationCap,
};

const categoryIds = ["litteraire", "journalistique", "professionnel", "academique"] as const;

export default function GenresPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/bibliotheque"
        className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour à la bibliothèque
      </Link>

      <div className="mb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold mb-3">
          Genres rédactionnels
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900">Les grands genres de rédaction</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Le <strong>genre</strong> désigne la catégorie formelle et institutionnelle dans laquelle s'inscrit l'écrit.
          C'est la « boîte » dans laquelle on écrit ; le type est le « mode de rédaction » utilisé à l'intérieur.
        </p>
      </div>

      <div className="space-y-12">
        {categoryIds.map((cat) => {
          const catGenres = genres.filter((g) => g.category === cat);
          const Icon = categoryIcons[cat];
          return (
            <section key={cat} id={cat} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl bg-gradient-to-br text-white flex items-center justify-center shadow",
                    categoryColors[cat]
                  )}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{categoryLabels[cat]}</h2>
                  <p className="text-sm text-slate-500">{catGenres.length} genre(s) recensé(s)</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {catGenres.map((g) => (
                  <div
                    key={g.id}
                    className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-indigo-300 hover:shadow-lg transition-all"
                  >
                    <h3 className="font-bold text-slate-900 mb-2">{g.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-3">
                      {g.description}
                    </p>
                    <div className="mb-3">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                        Types dominants
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {g.typesDominants.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                        Structure
                      </div>
                      <ul className="text-xs text-slate-600 space-y-0.5">
                        {g.structure.slice(0, 3).map((s, i) => (
                          <li key={i} className="flex gap-1.5">
                            <span className="text-indigo-400 font-bold">{i + 1}.</span>
                            <span className="line-clamp-1">{s}</span>
                          </li>
                        ))}
                        {g.structure.length > 3 && (
                          <li className="text-[10px] text-slate-400 italic">
                            + {g.structure.length - 3} autre(s) élément(s)
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-16 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
        <h3 className="text-lg font-bold text-slate-900 mb-2">Synthèse : Genre vs Type</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white rounded-xl p-4">
            <div className="font-semibold text-indigo-700 mb-1">Le Genre, c'est la « boîte »</div>
            <p className="text-slate-700">
              Exemple : une lettre de motivation. C'est la catégorie formelle dans laquelle s'inscrit votre texte.
            </p>
          </div>
          <div className="bg-white rounded-xl p-4">
            <div className="font-semibold text-purple-700 mb-1">Le Type, c'est le « mode de rédaction »</div>
            <p className="text-slate-700">
              Exemple : principalement argumentatif et explicatif. C'est la manière dont vous écrivez à l'intérieur du genre.
            </p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <Link
            href="/atelier"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow hover:shadow-lg transition-all"
          >
            Passer à l'atelier <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
