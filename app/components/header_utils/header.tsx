"use client";

import Link from "next/link";
import LanguageSwitcher from "@/app/components/header_utils/languageSwitcher";

type HeaderProps = {
    lang: "fr" | "en";
    setLang: (lang: "fr" | "en") => void;
};

export default function Header({ lang, setLang }: HeaderProps) {
    return (
        <div className="flex items-center justify-between mb-8">
            <div>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Portfolio - Léna Oudjman
                </Link>
            </div>

            {/* Lang switcher */}
            <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
    );
}
