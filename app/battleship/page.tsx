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


export default function BattleshipPage() {
    const [lang, setLang] = useState<"fr" | "en">("fr");
    const t = LANG_BATTLESHIP[lang];

    return (
        <main className="min-h-screen bg-slate-50 py-8 px-4">
            <div className="max-w-6xl mx-auto rounded-xl p-8">
                {/* Header */}
                <Header lang={lang} setLang={setLang} />

                {/* Hero Section */}
                <Hero t={t} icon={IoBoatOutline} href="https://github.com/Lenoush/Battleship" color="indigo" />

                {/* Demo Media */}
                <MediaGallery
                    title={t.demo_title}
                    color="indigo"
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
                    <div className="card border border-indigo-600">
                        <Subtitle text={t.description_title} Icon={IoExtensionPuzzleOutline} />
                        <p className="text-gray-800 leading-relaxed">{t.description_text}</p>
                        <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-800">
                            {t.features.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Learning Section */}
                    <LearningSection
                        learn_title={t.learn_title}
                        learn_points={t.learn_points}
                        color="indigo"
                    />
                </div>

                {/* Footer */}
                <Footer
                    href="https://github.com/Lenoush/Battleship"
                    text={t.footer}
                />

            </div>
        </main>
    );
}
