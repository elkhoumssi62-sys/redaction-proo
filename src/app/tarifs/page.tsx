import Link from "next/link";
import { CheckCircle2, Sparkles, Crown, ArrowLeft } from "lucide-react";

export default function TarifsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Retour
      </Link>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900">Tarifs simples et clairs</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          L'atelier est gratuit pour un usage personnel. Passez à Pro pour accéder aux fonctionnalités avancées
          et soutenir le développement de contenus académiques de qualité.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Gratuit */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4">
            Gratuit
          </div>
          <div className="text-4xl font-extrabold text-slate-900">0 <span className="text-lg font-semibold text-slate-500">DH</span></div>
          <div className="text-sm text-slate-500">pour toujours</div>
          <ul className="mt-6 space-y-3 text-sm">
            <Feature ok>Accès complet à la bibliothèque</Feature>
            <Feature ok>Les 6 types de rédaction détaillés</Feature>
            <Feature ok>Tous les genres et leurs structures</Feature>
            <Feature ok>Analyseur de texte (5 / jour)</Feature>
            <Feature ok>3 documents sauvegardés</Feature>
            <Feature>Modèles premium</Feature>
            <Feature>Analyseur IA avancé</Feature>
            <Feature>Export PDF</Feature>
          </ul>
          <Link href="/inscription" className="mt-8 block text-center px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50">
            Commencer
          </Link>
        </div>

        {/* Pro */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-6 shadow-xl relative transform scale-105">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold rounded-full inline-flex items-center gap-1 shadow">
            <Crown className="w-3 h-3" /> Le plus populaire
          </div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 text-white text-xs font-semibold mb-4">
            <Sparkles className="w-3 h-3" /> Pro
          </div>
          <div className="text-4xl font-extrabold">99 <span className="text-lg font-semibold text-indigo-200">DH/mois</span></div>
          <div className="text-sm text-indigo-200">sans engagement</div>
          <ul className="mt-6 space-y-3 text-sm">
            <Feature ok light>Tout ce qui est inclus dans Gratuit</Feature>
            <Feature ok light>Analyseur illimité</Feature>
            <Feature ok light>Tous les modèles & canevas premium</Feature>
            <Feature ok light>Documents illimités</Feature>
            <Feature ok light>Sauvegarde automatique</Feature>
            <Feature ok light>Export PDF & DOCX</Feature>
            <Feature ok light>Suggestions IA avancées</Feature>
            <Feature ok light>Accès prioritaire aux nouveautés</Feature>
          </ul>
          <Link href="/inscription?plan=pro" className="mt-8 block text-center px-4 py-2.5 rounded-xl bg-white text-indigo-700 font-bold hover:bg-indigo-50">
            Essayer Pro 7 jours
          </Link>
        </div>

        {/* Établissement */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-4">
            Équipe / École
          </div>
          <div className="text-4xl font-extrabold text-slate-900">Sur devis</div>
          <div className="text-sm text-slate-500">tarif établissement</div>
          <ul className="mt-6 space-y-3 text-sm">
            <Feature ok>Tout Pro, pour un groupe</Feature>
            <Feature ok>Tableau de bord enseignant</Feature>
            <Feature ok>Création de sujets personnalisés</Feature>
            <Feature ok>Suivi des progrès des élèves</Feature>
            <Feature ok>Connexion ENT / SSO</Feature>
            <Feature ok>Formation pédagogique</Feature>
            <Feature ok>Support dédié</Feature>
          </ul>
          <Link href="mailto:contact@atelier-redaction.ma" className="mt-8 block text-center px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50">
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}

function Feature({ children, ok, light }: { children: React.ReactNode; ok?: boolean; light?: boolean }) {
  return (
    <li className={`flex gap-2 ${light ? "text-white" : ok ? "text-slate-700" : "text-slate-400 line-through"}`}>
      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${light ? "text-emerald-300" : ok ? "text-emerald-500" : "text-slate-300"}`} />
      {children}
    </li>
  );
}
