"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sparkles,
  Save,
  Download,
  Type,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  RotateCcw,
  ArrowLeft,
} from "lucide-react";
import { textTypes, genres } from "@/lib/content";
import { suggestConnectors } from "@/lib/utils";

export default function AtelierPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedType, setSelectedType] = useState<string>("argumentatif");
  const [selectedGenre, setSelectedGenre] = useState<string>("dissertation");
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  const wordCount = useMemo(() => {
    return content.trim().split(/\s+/).filter((w) => w.length > 0).length;
  }, [content]);

  const sentenceCount = useMemo(() => {
    return content.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
  }, [content]);

  const connectors = suggestConnectors(selectedType);
  const currentType = textTypes.find((t) => t.id === selectedType);
  const currentGenre = genres.find((g) => g.id === selectedGenre);

  const insertConnector = (c: string) => {
    setContent((prev) => (prev ? prev + " " + c + " " : c + " "));
    setSavedMessage(null);
  };

  const handleSave = () => {
    const doc = { title: title || "Document sans titre", content, type: selectedType, genre: selectedGenre, savedAt: new Date().toISOString() };
    const docs = JSON.parse(localStorage.getItem("documents") || "[]");
    docs.push(doc);
    localStorage.setItem("documents", JSON.stringify(docs));
    setSavedMessage("Document sauvegardé localement.");
    setTimeout(() => setSavedMessage(null), 2500);
  };

  const handleExport = () => {
    const blob = new Blob(
      [`# ${title || "Document sans titre"}\n\nType : ${currentType?.name}\nGenre : ${currentGenre?.name}\n\n${content}`],
      { type: "text/plain;charset=utf-8" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title || "document"}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setContent("");
    setTitle("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 mb-4">
        <ArrowLeft className="w-4 h-4" /> Retour
      </Link>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            L'Atelier de rédaction
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Rédigez avec la méthode du Pr. EL KHOUMSSI : votre texte est guidé par le type et le genre choisis.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={reset}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw className="w-4 h-4" /> Réinitialiser
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
          >
            <Save className="w-4 h-4" /> Sauvegarder
          </button>
          <button
            onClick={handleExport}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow hover:shadow-lg"
          >
            <Download className="w-4 h-4" /> Exporter
          </button>
        </div>
      </div>

      {savedMessage && (
        <div className="mb-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> {savedMessage}
        </div>
      )}

      <div className="grid lg:grid-cols-[280px_1fr_280px] gap-6">
        {/* Left column : type & genre */}
        <aside className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
              <Type className="w-4 h-4 text-indigo-600" /> Type de texte
            </h3>
            <div className="space-y-1.5">
              {textTypes.map((t) => (
                <label key={t.id} className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value={t.id}
                    checked={selectedType === t.id}
                    onChange={() => setSelectedType(t.id)}
                    className="mt-0.5 accent-indigo-600"
                  />
                  <div>
                    <div className="text-sm font-medium text-slate-900">{t.name}</div>
                    <div className="text-[11px] text-slate-500 leading-tight line-clamp-2">{t.intention}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-600" /> Genre
            </h3>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full text-sm rounded-lg border border-slate-200 px-3 py-2 bg-white"
            >
              {["litteraire", "journalistique", "professionnel", "academique"].map((cat) => (
                <optgroup key={cat} label={cat}>
                  {genres
                    .filter((g) => g.category === cat)
                    .map((g) => (
                      <option key={g.id} value={g.id}>{g.name}</option>
                    ))}
                </optgroup>
              ))}
            </select>
            {currentGenre && (
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">{currentGenre.description}</p>
            )}
          </div>
        </aside>

        {/* Editor */}
        <div className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre de votre production..."
            className="w-full px-4 py-3 text-lg font-semibold rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={`Commencez à rédiger votre ${currentGenre?.name.toLowerCase()} (type ${currentType?.name.toLowerCase()})...\n\n💡 Conseil : respectez la structure du genre et utilisez les connecteurs logiques à droite.`}
            className="w-full min-h-[500px] px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 text-sm leading-relaxed resize-y"
          />
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <div className="flex gap-4">
              <span><strong className="text-slate-900">{wordCount}</strong> mots</span>
              <span><strong className="text-slate-900">{sentenceCount}</strong> phrases</span>
              <span><strong className="text-slate-900">{content.length}</strong> caractères</span>
            </div>
            <div className="text-slate-400">Temps verbaux recommandés : <span className="font-medium text-slate-700">{currentType?.temps}</span></div>
          </div>
        </div>

        {/* Right column : aides */}
        <aside className="space-y-4">
          {currentType && (
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
              <h3 className="text-sm font-bold text-indigo-900 mb-2 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4" /> Conseils pour le type {currentType.name}
              </h3>
              <ul className="space-y-1.5 text-xs text-indigo-900">
                {currentType.conseils.map((c) => (
                  <li key={c} className="flex gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {currentGenre && (
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Structure du {currentGenre.name}</h3>
              <ol className="space-y-1.5 text-xs">
                {currentGenre.structure.map((s, i) => (
                  <li key={i} className="flex gap-2 text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Connecteurs logiques</h3>
            <p className="text-[11px] text-slate-500 mb-2">Cliquez pour insérer :</p>
            <div className="flex flex-wrap gap-1.5">
              {connectors.map((c) => (
                <button
                  key={c}
                  onClick={() => insertConnector(c)}
                  className="px-2 py-1 text-xs rounded-md bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 border border-slate-200 transition-colors"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
