"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LANG_BATTLESHIP } from "@/i18n/lang-battleship";
import ReactMarkdown from "react-markdown";
import { ImageCarousel } from "@/app/utils/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import LearningSection from "@/app/components/learningSection";
import ImagesGallery from "../components/imagesGallery";

export default function BattleshipPage() {
    const [lang, setLang] = useState<"fr" | "en">("fr");
    const t = LANG_BATTLESHIP[lang];

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
            <div className="max-w-4xl mx-auto   rounded-xl shadow-lg p-8">
                {/* Header */}
                <Header lang={lang} setLang={setLang} />

                {/* Hero Section */}
                <div className="  rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        <span className="mr-2">🚢 </span>
                        {t.title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">{t.subtitle}</p>
                    <div className="text-gray-800 leading-relaxed text-lg">
                        <ReactMarkdown>{t.intro}</ReactMarkdown>
                    </div>
                </div>

                {/* Demo Video */}
                <div className="  rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        <span className="mr-2">🎥 </span>
                        {t.demo_title}
                    </h2>
                    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
                        <video
                            className="w-full h-full"
                            src="/battleship/Battleship_project_video.mp4"
                            controls
                            autoPlay={false}
                        />
                    </div>
                </div>

                {/* DESCRIPTION */}
                <div className="  rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        <span className="mr-2">🧩 </span>
                        {t.description_title}
                    </h2>
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
                />

                {/*Images Gallery */}
                <ImagesGallery
                    title={t.gallerie_name}
                    images={["/battleship/screen1.png", "/battleship/screen2.png"]}
                />

                {/* Footer */}
                <Footer
                    href="https://github.com/Lenoush/Battleship"
                    text={t.footer}
                />

            </div>
        </main>
    );
}
