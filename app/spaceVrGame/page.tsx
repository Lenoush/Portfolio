"use client";

import { useState } from "react";
import Link from "next/link";
import { LANG_SPACEVRGAME } from "@/i18n/lang-spaceVrGame";
import { ImageCarousel } from "@/app/utils/image";
import { FeatureCard, ContributionCard } from "@/app/utils/card";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import LearningSection from "../components/learningSection";
import ImagesGallery from "../components/imagesGallery";

type Lang = "fr" | "en";

export default function SpaceVrGamePage() {
    const [lang, setLang] = useState<Lang>("fr");
    const t = LANG_SPACEVRGAME[lang];

    const featureIcons = ["💡", "🧭", "⚡", "🌌", "🚪", "🎴", "🔄", "🔧", "🔊"];
    const contributionIcons = ["🚪", "🤖", "🔧", "⚡"];

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
            <div className="max-w-4xl mx-auto   rounded-xl shadow-lg p-8">
                {/* Header */}
                <Header lang={lang} setLang={setLang} />

                {/* Hero Section */}
                <div className="  rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        <span className="text-4xl">🚀 </span>
                        {t.title}
                    </h1>
                    <p className="text-xl text-gray-700 mb-4">{t.subtitle}</p>
                    <p className="text-lg text-gray-800 leading-relaxed">{t.intro}</p>
                </div>

                {/* Demo Video */}
                <div className="  rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="text-4xl">🎥 </span>
                        {t.demo_title}
                    </h2>
                    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/JeNqxFEgccM"
                            title="Demo Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Description & Features */}
                <div className="  rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="text-4xl">🎮 </span>
                        {t.description_title}
                    </h2>
                    <p className="text-gray-800 text-lg leading-relaxed mb-6">
                        {t.description_text}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t.features.map((feature, idx) => (
                            <FeatureCard
                                key={idx}
                                icon={featureIcons[idx] || "✨"}
                                text={feature}
                            />
                        ))}
                    </div>
                </div>

                {/* Mes Contributions */}
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl shadow-xl p-8 mb-8 border border-purple-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="text-4xl">🛠️ </span>
                        {t.my_contributions_title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t.my_contributions.map((contribution, idx) => (
                            <ContributionCard
                                key={idx}
                                icon={contributionIcons[idx] || "⭐"}
                                text={contribution}
                            />
                        ))}
                    </div>
                </div>

                {/* Learning Section */}
                <LearningSection
                    learn_title={t.learn_title}
                    learn_points={t.learn_points}
                />


                {/* Tech Stack */}
                <div className="  rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="text-4xl">🔧 </span>
                        Technologies utilisées
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {["Unity", "C#", "Meta Quest 3", "Blender", "VR Toolkit"].map((tech) => (
                            <span
                                key={tech}
                                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full font-semibold shadow-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/*Images Gallery */}
                <ImagesGallery
                    title={t.gallerie_name}
                    images={[
                        "/spaceVrGame/SpaceVrScreen1.png",
                        "/spaceVrGame/SpaceVrScreen2.png",
                    ]}
                />

                {/* Footer */}
                <Footer
                    href="https://github.com/kilian-le-calvez/VIR-2025"
                    text={t.footer}
                />

            </div>
        </main>
    );
}