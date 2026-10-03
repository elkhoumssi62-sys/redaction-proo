import Link from "next/link";
import { ArrowLeft, GraduationCap, Mail, Target, Users, BookOpen } from "lucide-react";

export default function AProposPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Retour
      </Link>

      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
          <GraduationCap className="w-3.5 h-3.5" /> À propos
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900">L'Atelier de Rédaction — Machine à Langue</h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          Une plateforme SaaS académique dédiée à la maîtrise de la rédaction
          <em> tous genres</em> et <em>tous types</em> de textes. Pensée comme une véritable
          banque de ressources, elle s'appuie sur le cours du <strong>Pr. Mohamed EL KHOUMSSI</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <Card icon={Target} title="Notre mission" text="Donner à chacun·e — élève, étudiant, enseignant ou professionnel — les outils théoriques et pratiques pour rédiger avec clarté, rigueur et efficacité." />
        <Card icon={BookOpen} title="Notre approche" text="Croiser la typologie textuelle et la théorie des genres : toute situation d'écriture relève d'un ou plusieurs types dans un genre donné." />
        <Card icon={Users} title="Notre public" text="Collèges, lycées, universités, écoles supérieures, professionnels en charge de rédaction et toute personne désireuse d'améliorer sa plume." />
      </div>

      <section className="prose max-w-none bg-white rounded-2xl border border-slate-200 p-8 mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Le projet pédagogique</h2>
        <p className="text-slate-700 leading-relaxed">
          L'Atelier est conçu comme un <strong>compagnon de rédaction</strong> :
        </p>
        <ul className="mt-3 space-y-1.5 text-slate-700 list-disc pl-5">
          <li>Une <strong>bibliothèque</strong> complète avec les 6 types de rédaction et les grands genres (littéraires, journalistiques, professionnels, académiques).</li>
          <li>Des <strong>modèles et canevas</strong> directement utilisables pour structurer vos écrits.</li>
          <li>Un <strong>atelier</strong> de rédaction qui vous rappelle en temps réel les consignes liées au type et au genre choisis.</li>
          <li>Un <strong>analyseur</strong> qui détecte le type dominant de votre texte, ses forces et ses points faibles.</li>
          <li>Une <strong>banque de connecteurs logiques</strong> classés par fonction.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Cadre théorique</h2>
        <p className="text-slate-700 leading-relaxed">
          Le contenu s'appuie sur la distinction fondamentale posée en cours :
        </p>
        <div className="mt-3 grid md:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
            <div className="font-bold text-indigo-900">Le genre = la boîte</div>
            <p className="text-sm text-indigo-900 mt-1">C'est la catégorie formelle et institutionnelle : roman, lettre, dissertation, article, etc.</p>
          </div>
          <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
            <div className="font-bold text-purple-900">Le type = le mode de rédaction</div>
            <p className="text-sm text-purple-900 mt-1">C'est l'intention de communication : narratif, descriptif, argumentatif, etc.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-slate-300 mb-6">
          Une question, une suggestion, un partenariat pédagogique ? N'hésitez pas à nous écrire.
        </p>
        <a
          href="mailto:contact@atelier-redaction.ma"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-indigo-700 font-semibold hover:bg-indigo-50"
        >
          <Mail className="w-4 h-4" /> contact@atelier-redaction.ma
        </a>
      </section>
    </div>
  );
}

function Card({ icon: Icon, title, text }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5">
      <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}
