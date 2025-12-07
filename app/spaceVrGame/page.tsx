"use client";

import { useState } from "react";
import {
    IoGameControllerOutline,
    IoColorWandOutline,
    IoFlashlightOutline,
    IoFlashOutline,
    IoAppsOutline,
    IoAccessibilityOutline,
    IoCompassOutline,
    IoPlanetOutline,
    IoCardOutline,
    IoHelpBuoyOutline
} from "react-icons/io5";

import {
    GiSoundWaves,
    GiAutoRepair,
    GiSecretDoor,
    GiRocket
} from "react-icons/gi";

import { LANG_SPACEVRGAME } from "@/i18n/lang-spaceVrGame";
import { FeatureCard, ContributionCard } from "@/app/utils/card";
import Header from "@/app/components/header_components/header";
import Footer from "@/app/components/footer";
import LearningSection from "@/app/components/learningSection";
import TechStack from "@/app/components/techStack";
import { Subtitle } from "@/app/components/titles";
import Hero from "@/app/components/hero";
import MediaGallery from "@/app/components/mediaGallery";
import { PAGE_COLORS } from "@/config/theme";
import { COLOR_MAP, MAIN_COLOR } from "@/config/colors_settings";


type Lang = "fr" | "en";

export default function SpaceVrGamePage() {
    const [lang, setLang] = useState<Lang>("fr");
    const t = LANG_SPACEVRGAME[lang];

    const mainColor = MAIN_COLOR;
    const spaceColor = COLOR_MAP[PAGE_COLORS.spaceVrGame];

    const featureIcons = [
        IoFlashlightOutline,
        IoCompassOutline,
        IoFlashOutline,
        IoPlanetOutline,
        IoAppsOutline,
        IoCardOutline,
        IoAccessibilityOutline,
        GiAutoRepair,
        GiSoundWaves
    ];

    const contributionIcons = [
        IoCardOutline,
        GiSecretDoor,
        GiAutoRepair,
        IoHelpBuoyOutline
    ];


    return (
        <main className={`min-h-screen ${mainColor.bg_page} py-8 px-4`}>
            <div className="max-w-6xl mx-auto rounded-xl p-8">
                {/* Header */}
                <Header lang={lang} setLang={setLang} />

                {/* Hero Section */}
                <Hero t={t} icon={GiRocket} href="https://github.com/kilian-le-calvez/VIR-2025" color={spaceColor.color} />

                {/* Demo Media */}
                <MediaGallery
                    title={t.demo_title}
                    color={spaceColor.color}
                    media={[
                        {
                            type: "video",
                            src: "https://www.youtube.com/embed/JeNqxFEgccM",
                            alt: "Space VR Game Demo Video"
                        },
                        {
                            type: "image",
                            src: "/spaceVrGame/SpaceVrScreen1.png",
                            alt: "Space VR Game Screenshot 1"
                        },
                        {
                            type: "image",
                            src: "/spaceVrGame/SpaceVrScreen2.png",
                            alt: "Space VR Game Screenshot 2"
                        }
                    ]}
                />

                {/* Description & Features */}
                <div className={`card ${spaceColor.bg}`}>
                    <Subtitle text={t.description_title} Icon={IoGameControllerOutline} />
                    <p className={`${mainColor.text_color} leading-relaxed mb-6`}>
                        {t.description_text}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {t.features.map((feature, idx) => (
                            <FeatureCard
                                key={idx}
                                icon={featureIcons[idx]}
                                text={feature}
                            />
                        ))}
                    </div>
                </div>

                {/* Mes Contributions */}
                <div className={`${mainColor.bg} rounded-2xl shadow-sm p-8 mb-8`}>
                    <Subtitle text={t.my_contributions_title} Icon={IoColorWandOutline} />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {t.my_contributions.map((contribution, idx) => (
                            <ContributionCard
                                key={idx}
                                icon={contributionIcons[idx]}
                                text={contribution}
                                color={spaceColor.color}
                            />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {/* Learning Section */}
                    <LearningSection
                        learn_title={t.learn_title}
                        learn_points={t.learn_points}
                        color={spaceColor.color}
                    />

                    {/* Tech Stack */}
                    <TechStack
                        title={t.tech_stack_title}
                        technologies={["Unity", "C#", "Meta Quest 3", "Blender", "VR Toolkit"]}
                        color={spaceColor.color}
                    />
                </div>

                {/* Footer */}
                <Footer />

            </div>
        </main>
    );
}