"use client";

import { useState } from "react";
import { IoBoatOutline, IoExtensionPuzzleOutline } from "react-icons/io5";

import { LANG_BATTLESHIP } from "@/i18n/lang-battleship";

import Header from "@/app/components/header_components/header";
import Footer from "@/app/components/footer";
import LearningSection from "@/app/components/learningSection";
import { Subtitle } from "@/app/components/titles";
import Hero from "@/app/components/hero";
import MediaGallery from "@/app/components/mediaGallery";
import { PAGE_COLORS } from "@/config/theme";
import { COLOR_MAP, MAIN_COLOR } from "@/config/colors_settings";


export default function BattleshipPage() {
    const [lang, setLang] = useState<"fr" | "en">("fr");
    const t = LANG_BATTLESHIP[lang];

    // Définir la couleur principale de la page
    const battleshipColor = COLOR_MAP[PAGE_COLORS.battleship];
    const mainColor = MAIN_COLOR;

    return (
        <main className={`min-h-screen ${mainColor.bg_page} py-8 px-4`}>
            <div className="max-w-6xl mx-auto rounded-xl p-8">
                {/* Header */}
                <Header lang={lang} setLang={setLang} />

                {/* Hero Section */}
                <Hero t={t} icon={IoBoatOutline} href="https://github.com/Lenoush/Battleship" color={battleshipColor.color} />

                {/* Demo Media */}
                <MediaGallery
                    title={t.demo_title}
                    color={battleshipColor.color}
                    media={[
                        {
                            type: "video",
                            src: "/battleship/Battleship_project_video.mp4",
                        },
                        {
                            type: "image",
                            src: "/battleship/screen1.png",
                        },
                        {
                            type: "image",
                            src: "/battleship/screen2.png",
                        },
                    ]}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {/* DESCRIPTION */}
                    <div className={`card border ${battleshipColor.border}`}>
                        <Subtitle text={t.description_title} Icon={IoExtensionPuzzleOutline} />
                        <p className={`${mainColor.text_color} leading-relaxed`}>{t.description_text}</p>
                        <ul className={`list-disc ml-6 mt-3 space-y-1 ${mainColor.text_color}`}>
                            {t.features.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Learning Section */}
                    <LearningSection
                        learn_title={t.learn_title}
                        learn_points={t.learn_points}
                        color={battleshipColor.color}
                    />
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </main>
    );
}
