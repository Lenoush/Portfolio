"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TRAVEL } from "@/i18n/lang-travel";
import ReactMarkdown from "react-markdown";
import { MetricCard, StepCard } from "@/app/utils/card";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import LearningSection from "@/app/components/learningSection";
import VideoDemo from "@/app/components/videoDemo";

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
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
            <div className="max-w-4xl mx-auto   rounded-xl shadow-lg p-8">
                {/* Header */}
                <Header lang={lang} setLang={setLang} />

                {/* Hero Section */}
                <div className="  rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">🌍 {t.title}</h1>
                    <p className="text-xl text-gray-600 mb-6">{t.subtitle}</p>
                    <div className="text-gray-800 leading-relaxed text-lg">
                        <ReactMarkdown>{t.intro}</ReactMarkdown>
                    </div>
                </div>

                {/* Image + Metrics Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2">
                        <div className="  rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                            <Image
                                src="/travel/resume_goal.png"
                                alt="Project visualization"
                                width={900}
                                height={400}
                                unoptimized
                                className="w-full object-cover"
                            />
                            <Image
                                src="/travel/dijkstrasAlgorithm.jpg"
                                alt="Data visualization"
                                width={900}
                                height={400}
                                unoptimized
                                className="w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <MetricCard title={t.metricCard1Title} value="3000+" icon="🏙️" />
                        <MetricCard title={t.metricCard2Title} value="96%" icon="🎯" />
                        <MetricCard title={t.metricCard3Title} value="99%" icon="🗺️" />
                    </div>
                </div>

                {/* Demo Video */}
                <VideoDemo
                    title={t.demo_title}
                    src="/travel/Travel_project_video.mp4"
                />

                {/* Technical Steps */}
                <div className="  rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        <span className="mr-2">⚙️ </span>
                        {t.technical_title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {steps.map((step, idx) => (
                            <StepCard
                                key={idx}
                                number={idx + 1}
                                title={step.title}
                                content={step.content}
                            />
                        ))}
                    </div>
                </div>

                {/* Learning Section */}
                <LearningSection
                    learn_title={t.learn_title}
                    learn_points={t.learn_points}
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