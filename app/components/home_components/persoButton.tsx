import Link from "next/link";

type PersoButtonProps = {
  title: string;
  href: string;
  download?: boolean;
};

export default function PersoButton({ title, href, download }: PersoButtonProps) {
  const baseClass =
    "bg-gradient-to-br from-slate-500 via-slate-600 to-indigo-700 hover:to-indigo-900 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors inline-block";

  // --- Si bouton download → on utilise <a> classique ---
  if (download) {
    return (
      <a href={href} download className={baseClass}>
        {title}
      </a>
    );
  }

  // --- Sinon si lien normal Next.js ---
  else {
    return (
      <Link href={href} className={baseClass} target="_blank">
        {title}
      </Link>
    );
  }
}
