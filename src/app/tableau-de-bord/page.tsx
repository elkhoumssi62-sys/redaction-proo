"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  Sparkles,
  Microscope,
  Plus,
  Trash2,
  LogOut,
  Crown,
} from "lucide-react";

type LocalDoc = {
  title: string;
  content: string;
  type: string;
  genre: string;
  savedAt: string;
};

type User = { email: string; name: string; plan?: string };

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [docs, setDocs] = useState<LocalDoc[]>([]);

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (!u) {
      router.push("/connexion");
      return;
    }
    setUser(JSON.parse(u));
    setDocs(JSON.parse(localStorage.getItem("documents") || "[]"));
  }, [router]);

  const deleteDoc = (idx: number) => {
    const next = docs.filter((_, i) => i !== idx);
    setDocs(next);
    localStorage.setItem("documents", JSON.stringify(next));
  };

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-slate-500">
        Chargement...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-2">
            <LayoutDashboard className="w-7 h-7 text-indigo-600" />
            Bonjour, {user.name}
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Bienvenue dans votre atelier. Voici un aperçu de vos travaux et de vos raccourcis.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs font-bold inline-flex items-center gap-1">
            <Crown className="w-3.5 h-3.5" />
            Plan {user.plan || "Gratuit"}
          </div>
          <button
            onClick={logout}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
          >
            <LogOut className="w-4 h-4" /> Déconnexion
          </button>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <QuickAction href="/atelier" icon={Sparkles} label="Nouveau document" color="from-indigo-600 to-purple-600" />
        <QuickAction href="/analyse" icon={Microscope} label="Analyser un texte" color="from-amber-500 to-orange-600" />
        <QuickAction href="/bibliotheque" icon={BookOpen} label="Bibliothèque" color="from-emerald-500 to-teal-600" />
        <QuickAction href="/modeles" icon={FileText} label="Modèles" color="from-sky-500 to-blue-600" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Mes documents</h2>
            <Link
              href="/atelier"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
            >
              <Plus className="w-4 h-4" /> Nouveau
            </Link>
          </div>
          {docs.length === 0 ? (
            <div className="text-center py-10 text-slate-500">
              <FileText className="w-10 h-10 mx-auto mb-2 text-slate-300" />
              <p className="text-sm">Vous n'avez pas encore de document sauvegardé.</p>
              <Link href="/atelier" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600">
                Commencer à rédiger
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-slate-100">
              {docs.map((d, i) => {
                const wordCount = d.content.trim().split(/\s+/).filter(Boolean).length;
                return (
                  <li key={i} className="py-3 flex items-center justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-slate-900 truncate">{d.title}</div>
                      <div className="text-xs text-slate-500 flex flex-wrap gap-2 mt-0.5">
                        <span className="px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700">{d.type}</span>
                        <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-700">{d.genre}</span>
                        <span>{wordCount} mots</span>
                        <span>· {new Date(d.savedAt).toLocaleDateString("fr-FR")}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteDoc(i)}
                      className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                      aria-label="Supprimer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-6">
            <h3 className="font-bold mb-2">Astuce du jour</h3>
            <p className="text-sm text-indigo-100 leading-relaxed">
              Dans une <strong>dissertation</strong>, placez vos arguments du moins convaincant au plus convaincant
              : c'est la progression qui emporte l'adhésion.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3">Ressources populaires</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/types#argumentatif" className="text-indigo-600 hover:underline">→ Type argumentatif</Link></li>
              <li><Link href="/genres#academique" className="text-indigo-600 hover:underline">→ Genres académiques</Link></li>
              <li><Link href="/modeles" className="text-indigo-600 hover:underline">→ Modèle de dissertation</Link></li>
              <li><Link href="/types#narratif" className="text-indigo-600 hover:underline">→ Schéma narratif</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickAction({
  href,
  icon: Icon,
  label,
  color,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
}) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-lg transition-all"
    >
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="font-semibold text-slate-900">{label}</div>
    </Link>
  );
}
