"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Mail, Lock, User, UserPlus } from "lucide-react";
import { Suspense } from "react";

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestedPlan = searchParams.get("plan") || "gratuit";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ email, name, plan: requestedPlan }));
    router.push("/tableau-de-bord");
  };

  return (
    <div className="w-full max-w-md">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
      </Link>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8">
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center mb-4">
            <UserPlus className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Créer un compte</h1>
          <p className="text-sm text-slate-500 mt-1">
            Plan sélectionné : <strong className="text-indigo-600 capitalize">{requestedPlan}</strong>
          </p>
        </div>
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-sm">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Nom complet</label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Prénom NOM"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">E-mail</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@exemple.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Mot de passe</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="6 caractères minimum"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow hover:shadow-lg transition-shadow"
          >
            Créer mon compte
          </button>
        </form>
        <div className="text-center mt-5 text-sm text-slate-500">
          Déjà inscrit ?{" "}
          <Link href="/connexion" className="text-indigo-600 font-semibold hover:text-indigo-700">
            Se connecter
          </Link>
        </div>
        <p className="text-[11px] text-slate-400 text-center mt-4">
          Démo : les comptes sont stockés localement dans votre navigateur.
        </p>
      </div>
    </div>
  );
}

export default function InscriptionPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <Suspense fallback={<div>Chargement...</div>}>
        <SignupForm />
      </Suspense>
    </div>
  );
}
