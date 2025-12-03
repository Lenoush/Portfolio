"use client";

import { useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { GiTechnoHeart, GiModernCity, GiTargetArrows, GiPathDistance } from "react-icons/gi";


import { TRAVEL } from "@/i18n/lang-travel";
import { MetricCard, StepCard } from "@/app/utils/card";
import Header from "@/app/components/header_components/header";
import Footer from "@/app/components/footer";
import LearningSection from "@/app/components/learningSection";
import { Subtitle, Title } from "../components/titles";
import Hero from "@/app/components/hero";
import MediaGallery from "../components/mediaGallery";

type Lang = "fr" | "en";

export default function TravelPage() {
    const [lang, setLang] = useState<Lang>("fr");
    const t = TRAVEL[lang];

    // Parser les étapes techniques
    const steps = t.technical_steps
        .split(/\n\d+\.\s/)
        .filter(Boolean)
        .map((step) => {
            const [title, ...rest] = step.split("\n");
            return { title, content: rest.join("\n").trim() };
        });

    return (
        <main className="min-h-screen bg-slate-50 py-8 px-4">
            <div className="max-w-6xl mx-auto rounded-xl p-8">
                {/* Header */}
                <Header lang={lang} setLang={setLang} />

                {/* Hero Section */}
                <Hero t={t} icon={MdOutlineTravelExplore} href="https://github.com/Lenoush/Travel_Order_Desorder" color="green" />

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <MetricCard title={t.metricCard1Title} value="3000+" icon={GiModernCity} color="green" />
                    <MetricCard title={t.metricCard2Title} value="96%" icon={GiTargetArrows} color="green" />
                    <MetricCard title={t.metricCard3Title} value="99%" icon={GiPathDistance} color="green" />
                </div>

                {/* Demo Media */}
                <MediaGallery
                    title={t.demo_title}
                    color="green"
                    media={[
                        {
                            type: "video",
                            src: "/travel/Travel_project_video.mp4",
                            alt: "Travel Order Desorder Demo Video"
                        },
                        {
                            type: "image",
                            src: "/travel/resume_goal.png",
                            alt: "Travel Order Desorder Screenshot 2"
                        },
                        {
                            type: "image",
                            src: "/travel/dijkstrasAlgorithm.jpg",
                            alt: "Travel Order Desorder Screenshot 1"
                        }
                    ]}
                />

                {/* Technical Steps */}
                <div className="card">
                    <Subtitle text={t.technical_title} Icon={GiTechnoHeart} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {steps.map((step, idx) => (
                            <StepCard
                                key={idx}
                                number={idx + 1}
                                title={step.title}
                                content={step.content}
                                color="green"
                            />
                        ))}
                    </div>
                </div>

                {/* Learning Section */}
                <LearningSection
                    learn_title={t.learn_title}
                    learn_points={t.learn_points}
                    color="green"
                />

                {/* Footer */}
                <Footer
                    href="https://github.com/Lenoush/Travel_Order_Desorder"
                    text={t.footer}
                />

            </div>
        </main>
    );
}