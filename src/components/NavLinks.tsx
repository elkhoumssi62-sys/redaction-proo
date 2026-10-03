"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, BookMarked, Sparkles, Microscope, LayoutDashboard, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Accueil", icon: BookOpen },
  { href: "/bibliotheque", label: "Bibliothèque", icon: BookMarked },
  { href: "/types", label: "Types", icon: FileText },
  { href: "/genres", label: "Genres", icon: FileText },
  { href: "/modeles", label: "Modèles", icon: BookMarked },
  { href: "/atelier", label: "Atelier", icon: Sparkles },
  { href: "/analyse", label: "Analyser", icon: Microscope },
  { href: "/tableau-de-bord", label: "Tableau de bord", icon: LayoutDashboard },
];

export function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex items-center gap-1">
      {links.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
              isActive
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
