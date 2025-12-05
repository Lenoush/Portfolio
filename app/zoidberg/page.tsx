"use client";

import { useRef, useState } from "react";
import { RiBodyScanFill } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { CiSettings } from "react-icons/ci";
import { GiMirrorMirror, GiTrophyCup } from "react-icons/gi";

import { LANG_ZOIDBERG } from "@/i18n/lang-zoidberg";

import Header from "@/app/components/header_components/header";
import Footer from "@/app/components/footer";
import TestInterfaceProps from "@/app/zoidberg/modelInterface";
import images from "@/app/zoidberg/zoidbergImages";
import LearningSection from "@/app/components/learningSection";
import Hero from "@/app/components/hero";
import { Subtitle } from "@/app/components/titles";
import LeftSidebarNavigation from "@/app/components/zoidberg_components/leftSidebarNavigation";
import DatasetStat from "@/app/components/zoidberg_components/datasetStat";
import Preprocessing from "@/app/components/zoidberg_components/preprocessing";
import ModelsBenchmark from "@/app/components/zoidberg_components/modelsBenchmark";
import COLOR_MAP from "../../config/colorMap";
import { PAGE_COLORS } from "@/config/theme";

type Language = "fr" | "en";

export default function ZoidbergPage() {
    const [lang, setLang] = useState<Language>("fr");
    const t = LANG_ZOIDBERG[lang];

    const mainColor = COLOR_MAP.main;
    const zoidbergColor = COLOR_MAP[PAGE_COLORS.zoidberg];


    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const [activeSection, setActiveSection] = useState("dataset");
    const sections = [
        { id: "dataset", label: t.dataset_title_global, icon: ImStatsDots },
        { id: "preprocessing", label: t.preprocessing_title, icon: CiSettings },
        { id: "models", label: t.models_comparison_title, icon: GiMirrorMirror }
    ];
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <main className={`min-h-screen ${mainColor.bg_page} py-8 px-4`}>
            <div className="max-w-6xl mx-auto rounded-xl p-8">
                {/* Header */}
                <Header lang={lang} setLang={setLang} />

                {/* Hero Section */}
                <Hero t={t} icon={RiBodyScanFill} href="https://github.com/Lenoush/Zoidberg" color={zoidbergColor.color} />

                {/* Try the model yourself */}
                <TestInterfaceProps
                    t={t}
                    images={images}
                />

                {/* Main Content with Sidebar Navigation */}
                <div className={`${mainColor.bg} rounded-2xl shadow-lg border ${zoidbergColor.border} overflow-hidden mb-8`}>
                    <div className="flex flex-col md:flex-row min-h-[600px]">

                        {/* Left Sidebar Navigation */}
                        <LeftSidebarNavigation 
                            sections={sections} 
                            activeSection={activeSection} 
                            setActiveSection={setActiveSection}
                            color={zoidbergColor.color}
                            scrollContainerRef={scrollContainerRef}
                        />

                        {/* Right Content Area */}
                        <div ref={scrollContainerRef} className="flex-1 p-8 overflow-y-auto max-h-[600px]">
                            {/* Dataset Section */}
                            {activeSection === "dataset" && (
                                <DatasetStat t={t} setLightboxImage={setLightboxImage} color={zoidbergColor.color} />
                            )}
                            {activeSection === "preprocessing" && (
                                <Preprocessing preprocessing_steps={t.preprocessing_steps} setLightboxImage={setLightboxImage} color={zoidbergColor.color} />
                            )}
                            {activeSection === "models" && (
                                <ModelsBenchmark t={t} color={zoidbergColor.color} />
                            )}
                        </div>
                    </div>
                </div>

                {/* Best Model & Learning Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {/* Meilleur modèle */}
                    <div className={`${mainColor.bg} border ${zoidbergColor.border} rounded-2xl shadow-sm p-8 mb-8 ${mainColor.text_color}`}>
                        <Subtitle text={t.best_models_title} Icon={GiTrophyCup} />
                        <div className="text-lg leading-relaxed whitespace-pre-line opacity-95">
                            {t.best_modeling_text.split('\n').map((line, idx) => {
                                const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                                return <p key={idx} dangerouslySetInnerHTML={{ __html: formatted }} />;
                            })}
                        </div>
                    </div>

                    <LearningSection
                        learn_title={t.learn_title}
                        learn_points={t.learn_points}
                        color={zoidbergColor.color}
                    />
                </div>

                {/* Footer */}
                <Footer />

                {/* Lightbox */}
                {lightboxImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                        onClick={() => setLightboxImage(null)} >
                        <div className="relative max-w-7xl max-h-full">
                            <button className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 cursor-pointer"
                                onClick={() => setLightboxImage(null)} >
                                ✕
                            </button>
                            <img src={lightboxImage} alt="Enlarged view" className="max-w-full max-h-[90vh] object-contain rounded-lg"
                                onClick={(e) => e.stopPropagation()} />
                        </div>
                    </div>
                )}

            </div>
        </main>
    );
}

