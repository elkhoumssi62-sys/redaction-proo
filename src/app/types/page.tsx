import Link from "next/link";
import { textTypes } from "@/lib/content";
import {
  BookOpen,
  Image as ImageIcon,
  Info,
  Scale,
  ClipboardList,
  Heart,
  ArrowLeft,
  CheckCircle2,
  Link2,
  Clock,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "book-open": BookOpen,
  image: ImageIcon,
  info: Info,
  scale: Scale,
  "clipboard-list": ClipboardList,
  heart: Heart,
};

export default function TypesPage() {
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
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
          Typologie textuelle
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900">Les types de rédaction</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Le <strong>type de texte</strong> correspond à l'intention de l'auteur et à la manière dont l'information est structurée.
          Un même genre (ex. un roman) peut combiner plusieurs types de rédaction.
        </p>
      </div>

      <div className="space-y-8">
        {textTypes.map((type, idx) => {
          const Icon = iconMap[type.icon] || BookOpen;
          return (
            <section
              key={type.id}
              id={type.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden scroll-mt-24"
            >
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-4 border-b border-slate-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                    Type n°{idx + 1}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{type.name}</h2>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Intention principale
                  </h3>
                  <p className="text-slate-800 leading-relaxed">{type.intention}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                      Caractéristiques clés
                    </h3>
                    <ul className="space-y-2">
                      {type.caracteristiques.map((c, i) => (
                        <li key={`${c}-${i}`} className="flex gap-2 text-sm text-slate-700">
                          <span className="text-indigo-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                      <Link2 className="w-4 h-4 text-indigo-600" />
                      Connecteurs logiques typiques
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {type.connecteurs.map((c, i) => (
                        <span
                          key={`${c}-${i}`}
                          className="px-2 py-1 text-xs rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-indigo-600" />
                      Temps verbaux privilégiés
                    </h3>
                    <p className="text-sm text-slate-700 bg-amber-50 border border-amber-100 rounded-lg p-3">
                      {type.temps}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                      Exemples d'utilisation
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {type.exemples.map((ex, i) => (
                        <span
                          key={`${ex}-${i}`}
                          className="px-2 py-1 text-xs rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-emerald-800 mb-2">
                    💡 Conseils de rédaction
                  </h3>
                  <ul className="space-y-1.5">
                    {type.conseils.map((c, i) => (
                      <li key={`${c}-${i}`} className="text-sm text-emerald-900 flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}