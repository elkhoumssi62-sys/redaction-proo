"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Microscope,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Trash2,
} from "lucide-react";
import { analyzeText } from "@/lib/utils";
import { textTypes } from "@/lib/content";

export default function AnalysePage() {
  const [text, setText] = useState("");
  const result = useMemo(() => analyzeText(text), [text]);

  const colorForType: Record<string, string> = {
    narratif: "bg-indigo-500",
    descriptif: "bg-emerald-500",
    explicatif: "bg-sky-500",
    argumentatif: "bg-violet-500",
    injonctif: "bg-amber-500",
    expressif: "bg-rose-500",
  };

  const labelForType: Record<string, string> = {
    narratif: "Narratif",
    descriptif: "Descriptif",
    explicatif: "Explicatif",
    argumentatif: "Argumentatif",
    injonctif: "Injonctif",
    expressif: "Expressif",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Retour
      </Link>

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold mb-3">
          <Microscope className="w-3.5 h-3.5" /> Analyseur intelligent
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900">Analyser un texte</h1>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Collez ou saisissez votre texte : l'analyseur détecte le type dominant,
          les indicateurs présents, et vous donne des pistes d'amélioration.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-slate-700">Votre texte</label>
            <button
              onClick={() => setText("")}
              className="text-xs text-slate-500 hover:text-rose-600 inline-flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" /> Vider
            </button>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Collez ou écrivez votre texte ici. Il peut s'agir d'un extrait de dissertation, d'une lettre, d'un récit, d'un article, d'un poème..."
            className="w-full min-h-[420px] p-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 text-sm leading-relaxed"
          />
        </div>

        <div className="space-y-4">
          {!result ? (
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center text-slate-500">
              <BarChart3 className="w-10 h-10 mx-auto mb-3 text-slate-300" />
              Commencez à taper pour voir l'analyse apparaître en temps réel.
            </div>
          ) : (
            <>
              {/* Dominant type */}
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Type dominant détecté
                </div>
                <div className="text-2xl font-extrabold text-slate-900">{result.dominantType}</div>
                <div className="mt-3 space-y-2">
                  {Object.entries(result.scores)
                    .sort((a, b) => b[1] - a[1])
                    .map(([type, pct]) => (
                      <div key={type}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-700 font-medium">{labelForType[type]}</span>
                          <span className="text-slate-500">{pct}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${colorForType[type]} transition-all`}
                            style={{ width: `${pct}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <StatCard label="Mots" value={result.stats.wordCount} />
                <StatCard label="Phrases" value={result.stats.sentenceCount} />
                <StatCard label="Paragraphes" value={result.stats.paragraphCount} />
                <StatCard label="Mots/phrase" value={result.stats.avgWordsPerSentence} />
                <StatCard label="1re personne" value={result.firstPerson} />
                <StatCard label="Lisibilité" value={result.readability} />
              </div>

              {/* Suggestions */}
              {result.suggestions.length > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="text-sm font-bold text-amber-900 mb-2 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" /> Pistes d'amélioration
                  </div>
                  <ul className="space-y-1.5">
                    {result.suggestions.map((s, i) => (
                      <li key={i} className="text-sm text-amber-900 flex gap-2">
                        <span>•</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {result.suggestions.length === 0 && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-emerald-900">
                    Votre texte présente une cohérence claire. Continuez ainsi !
                  </div>
                </div>
              )}

              {/* Indicateurs détectés */}
              <details className="bg-white rounded-xl border border-slate-200 p-4">
                <summary className="text-sm font-bold text-slate-900 cursor-pointer">
                  Détail des indicateurs détectés
                </summary>
                <div className="mt-3 space-y-2">
                  {Object.entries(result.indicators).map(([type, data]) => (
                    <div key={type} className="text-xs">
                      <div className="font-semibold text-slate-700 mb-1">
                        {labelForType[type]} ({data.count})
                      </div>
                      {data.words.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {data.words.slice(0, 12).map((w) => (
                            <span key={w} className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-600">
                              {w}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <div className="text-slate-400 italic">Aucun indicateur</div>
                      )}
                    </div>
                  ))}
                </div>
              </details>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-3 text-center">
      <div className="text-lg font-extrabold text-slate-900">{value}</div>
      <div className="text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">{label}</div>
    </div>
  );
}
