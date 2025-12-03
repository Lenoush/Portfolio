"use client";

type LanguageSwitcherProps = {
    lang: "fr" | "en";
    setLang: (lang: "fr" | "en") => void;
};

export default function LanguageSwitcher({ lang, setLang }: LanguageSwitcherProps) {
    return (
        <div className="inline-flex rounded-lg border border-emerald-600 bg-gray-50 p-1">
            <button
                onClick={() => setLang("fr")}
                className={`px-4 py-2 rounded-md transition-all ${lang === "fr"
                    ? "  shadow text-emerald-600 font-semibold"
                    : "text-gray-500 hover:text-emerald-600"
                    }`}
            >
                FR
            </button>
            <button
                onClick={() => setLang("en")}
                className={`px-4 py-2 rounded-md transition-all ${lang === "en"
                    ? "  shadow text-emerald-600 font-semibold"
                    : "text-gray-500 hover:text-emerald-600"
                    }`}
            >
                EN
            </button>
        </div>
    );
}
