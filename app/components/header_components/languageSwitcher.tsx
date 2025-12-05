"use client";

import COLOR_MAP from "@/config/colorMap";

type LanguageSwitcherProps = {
    lang: "fr" | "en";
    setLang: (lang: "fr" | "en") => void;
};

export default function LanguageSwitcher({ lang, setLang }: LanguageSwitcherProps) {
    const mainColor = COLOR_MAP.main;

    return (
        <div className={`inline-flex rounded-lg border ${mainColor.border} p-1`}>
            <button
                onClick={() => setLang("fr")}
                className={`px-4 py-2 rounded-md transition-all ${lang === "fr"
                    ? `  shadow ${mainColor.text_color_emerald} font-semibold`
                    : `text-gray-500 ${mainColor.hover_text}`
                    }`}
            >
                FR
            </button>
            <button
                onClick={() => setLang("en")}
                className={`px-4 py-2 rounded-md transition-all ${lang === "en"
                    ? `  shadow ${mainColor.text_color_emerald} font-semibold`
                    : `text-gray-500 ${mainColor.hover_text}`
                    }`}
            >
                EN
            </button>
        </div>
    );
}
