import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";
import {
  PenTool,
  BookOpen,
  LayoutDashboard,
  BookMarked,
  FileText,
  Microscope,
  Sparkles,
  Menu,
  X,
  GraduationCap,
} from "lucide-react";
import { NavLinks } from "@/components/NavLinks";

export const metadata: Metadata = {
  title: "L'Atelier de Rédaction — Machine à Langue",
  description:
    "Plateforme SaaS académique de référence pour la rédaction tous genres et tous types de textes. Par le Pr. Mohamed EL KHOUMSSI.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col">
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-shadow">
                  <PenTool className="w-5 h-5" />
                </div>
                <div className="leading-tight hidden sm:block">
                  <div className="font-bold text-slate-900 text-base">Atelier de Rédaction</div>
                  <div className="text-[11px] text-slate-500 font-medium -mt-0.5">
                    Machine à Langue · Pr. EL KHOUMSSI
                  </div>
                </div>
              </Link>
              <NavLinks />
              <div className="hidden md:flex items-center gap-2">
                <Link
                  href="/connexion"
                  className="px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                >
                  Connexion
                </Link>
                <Link
                  href="/inscription"
                  className="px-4 py-1.5 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow hover:shadow-lg transition-all"
                >
                  Commencer gratuitement
                </Link>
              </div>
              <MobileMenu />
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-slate-900 text-slate-300 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white">L'Atelier de Rédaction</div>
                  <div className="text-xs text-slate-400">Machine à Langue</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 max-w-md">
                La plateforme SaaS académique de référence pour maîtriser tous les types et genres de rédaction.
                Un contenu conforme au programme du Pr. Mohamed EL KHOUMSSI, conçu comme une véritable banque de ressources pour étudiants, enseignants et professionnels.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">Ressources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/bibliotheque" className="hover:text-white transition-colors">Bibliothèque</Link></li>
                <li><Link href="/types" className="hover:text-white transition-colors">Types de rédaction</Link></li>
                <li><Link href="/genres" className="hover:text-white transition-colors">Genres</Link></li>
                <li><Link href="/modeles" className="hover:text-white transition-colors">Modèles & Canevas</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">Atelier</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/atelier" className="hover:text-white transition-colors">Éditeur</Link></li>
                <li><Link href="/analyse" className="hover:text-white transition-colors">Analyseur de texte</Link></li>
                <li><Link href="/tarifs" className="hover:text-white transition-colors">Tarifs</Link></li>
                <li><Link href="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-2">
              <div>© {new Date().getFullYear()} L'Atelier de Rédaction — Machine à Langue. Tous droits réservés.</div>
              <div>Conçu avec rigueur pour la rédaction académique.</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function MobileMenu() {
  return (
    <details className="md:hidden relative">
      <summary className="list-none cursor-pointer p-2 text-slate-700">
        <Menu className="w-6 h-6 open:hidden block" />
      </summary>
      <div className="absolute right-0 top-12 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-4 z-50">
        <nav className="flex flex-col gap-1">
          <MobileLink href="/" icon={<BookOpen className="w-4 h-4" />}>Accueil</MobileLink>
          <MobileLink href="/bibliotheque" icon={<BookMarked className="w-4 h-4" />}>Bibliothèque</MobileLink>
          <MobileLink href="/types" icon={<FileText className="w-4 h-4" />}>Types</MobileLink>
          <MobileLink href="/genres" icon={<FileText className="w-4 h-4" />}>Genres</MobileLink>
          <MobileLink href="/modeles" icon={<BookMarked className="w-4 h-4" />}>Modèles</MobileLink>
          <MobileLink href="/atelier" icon={<Sparkles className="w-4 h-4" />}>Atelier</MobileLink>
          <MobileLink href="/analyse" icon={<Microscope className="w-4 h-4" />}>Analyser</MobileLink>
          <MobileLink href="/tableau-de-bord" icon={<LayoutDashboard className="w-4 h-4" />}>Tableau de bord</MobileLink>
          <div className="border-t border-slate-200 my-2"></div>
          <Link href="/connexion" className="text-sm px-3 py-2 rounded-lg hover:bg-slate-100">Connexion</Link>
          <Link href="/inscription" className="text-sm px-3 py-2 rounded-lg bg-indigo-600 text-white text-center font-medium">
            Commencer
          </Link>
        </nav>
      </div>
    </details>
  );
}

function MobileLink({ href, children, icon }: { href: string; children: ReactNode; icon: ReactNode }) {
  return (
    <Link href={href} className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-slate-100 text-slate-700">
      {icon}
      {children}
    </Link>
  );
}
