"use client";

import { useState } from "react";
import { LANG_ZOIDBERG } from "@/i18n/lang-zoidberg";
import ReactMarkdown from "react-markdown";
import { modelsData } from "@/app/zoidberg/metadata";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import TestInterfaceProps from "@/app/zoidberg/modelInterface";
import images from "./zoidbergImages";
import LearningSection from "../components/learningSection";


type Language = "fr" | "en";

export default function ZoidbergPage() {
    const [lang, setLang] = useState<Language>("fr");
    const t = LANG_ZOIDBERG[lang];

    const [selectedModel, setSelectedModel] = useState(modelsData[0].name);
    const [selectedMetricType, setSelectedMetricType] = useState<"macro" | "weighted">("macro");

    const [valMetricType, setValMetricType] = useState<"macro" | "weighted">("macro");
    const [testMetricType, setTestMetricType] = useState<"macro" | "weighted">("macro");

    const [isDatasetOpen, setIsDatasetOpen] = useState(false);
    const [isPreprocessOpen, setIsPreprocessOpen] = useState(false);
    const [isBenchmarkOpen, setIsBenchmarkOpen] = useState(false);

    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
                {/* Header */}
                <Header lang={lang} setLang={setLang} />

                {/* Hero Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">🩻 {t.title}</h1>
                    <p className="text-xl text-gray-700 mb-4">{t.subtitle}</p>
                    <div className="text-lg text-gray-800 leading-relaxed">
                        <ReactMarkdown>{t.intro}</ReactMarkdown>
                    </div>
                </div>

                {/* Try the model yourself */}
                <TestInterfaceProps
                    t={t}
                    images={images}
                />

                {/* Dataset Statistics */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <div className="cursor-pointer transition-transform hover:scale-[1.02]"
                        onClick={() => setIsDatasetOpen(!isDatasetOpen)}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            📊 {t.dataset_title_global}
                        </h2>
                    </div>

                    {isDatasetOpen && ( <div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
                                <div className="text-sm text-gray-600 font-medium">Train</div>
                                <div className="text-2xl font-bold text-blue-600">{t.dataset_summary_train}</div>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
                                <div className="text-sm text-gray-600 font-medium">Test</div>
                                <div className="text-2xl font-bold text-green-600">{t.dataset_summary_test}</div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
                                <div className="text-sm text-gray-600 font-medium">Validation</div>
                                <div className="text-2xl font-bold text-purple-600">{t.dataset_summary_val}</div>
                            </div>
                            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl border border-orange-200">
                                <div className="text-sm text-gray-600 font-medium"><b>Total</b></div>
                                <div className="text-2xl font-bold text-orange-600">{t.dataset_summary_total}</div>
                            </div>
                        </div>

                        {/* Exemples de scans */}
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">🔬 {t.example_scans_title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {t.example_scans.map((scan, i) => (
                                <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                                    <img
                                        src={scan.path}
                                        alt={scan.caption}
                                        className="w-full rounded-lg shadow-md mb-3 cursor-pointer hover:opacity-90 transition-opacity"
                                        onClick={() => setLightboxImage(scan.path)}
                                    />
                                    <p className="text-center text-gray-800 font-semibold">{scan.caption}</p>
                                </div>
                            ))}
                        </div>
                        <br />

                        <h3 className="text-xl font-semibold mb-4 text-gray-800">{t.dataset_title_train}</h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                                <thead className="bg-gradient-to-r from-blue-100 to-cyan-100">
                                    <tr>
                                        {t.dataset.headers.map((h, i) => (
                                            <th key={i} className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {t.dataset.rows.map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            {row.map((cell, j) => (
                                                <td key={j} className="border border-gray-300 px-6 py-3 text-gray-800">
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <img
                            src="/zoidberg/DatasetPop.png"
                            alt={t.dataset_image_caption}
                            className="w-full max-w-3xl mx-auto rounded-xl shadow-lg border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setLightboxImage("/zoidberg/DatasetPop.png")}
                        />
                    </div>)}
                </div>

                {/* Preprocessing */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <div className="cursor-pointer transition-transform hover:scale-[1.02]"
                        onClick={() => setIsPreprocessOpen(!isPreprocessOpen)}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            ⚙️ {t.preprocessing_title}
                        </h2>
                    </div>

                    {isPreprocessOpen && ( <div>

                        {t.preprocessing_steps.map((step, i) => (
                            <div key={i} className="mb-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <p className="mb-4 text-gray-800 font-medium text-lg">{step.text}</p>
                                <div
                                    className={`grid gap-4 ${step.images.length === 1 ? "grid-cols-1" : step.images.length === 2 ? "grid-cols-2" : "grid-cols-3"
                                        }`}
                                >
                                    {step.images.map((img, j) => (
                                        <img
                                            key={j}
                                            src={img}
                                            alt=""
                                            className="w-full max-w-md mx-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                                            onClick={() => setLightboxImage(img)}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>)}
                </div>

                {/* Métriques des modèles */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <div className="cursor-pointer transition-transform hover:scale-[1.02]"
                        onClick={() => setIsBenchmarkOpen(!isBenchmarkOpen)}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            📈 {t.models_comparison_title}
                        </h2>
                    </div>

                    {isBenchmarkOpen &&  ( <div>

                        {/* Comparaison Test vs Validation pour chaque modèle */}
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">{t.same_models_comparison_title}</h3>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                            {/* Dropdown pour sélectionner le modèle */}
                            <div>
                                <select
                                    className="border border-gray-300 rounded-md p-2 text-black bg-white"
                                    value={selectedModel}
                                    onChange={(e) => setSelectedModel(e.target.value)}
                                >
                                    {modelsData.map((model, i) => (
                                        <option key={i} value={model.name}>{model.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Dropdown pour sélectionner Macro ou Weighted */}
                            <div>
                                <select
                                    className="border border-gray-300 rounded-md p-2 text-black bg-white"
                                    value={selectedMetricType}
                                    onChange={(e) => setSelectedMetricType(e.target.value as "macro" | "weighted")}
                                >
                                    <option value="macro">Macro</option>
                                    <option value="weighted">Weighted</option>
                                </select>
                            </div>
                        </div>

                        {(() => {
                            const model = modelsData.find((m) => m.name === selectedModel);
                            if (!model) return null;

                            const type = selectedMetricType; // "macro" ou "weighted"

                            return (
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 bg-green-50 rounded-xl border border-green-200 text-gray-800">
                                        <h5 className="font-semibold mb-2">Validation</h5>
                                        <p>Accuracy: {model.val.accuracy}</p>
                                        <p>AUC: {model.val.auc}</p>
                                        <p>F1 {type}: {type === "macro" ? model.val.f1_macro : model.val.f1_weighted}</p>
                                        <p>Precision {type}: {type === "macro" ? model.val.precision_macro : model.val.precision_weighted}</p>
                                        <p>Recall {type}: {type === "macro" ? model.val.recall_macro : model.val.recall_weighted}</p>
                                    </div>
                                    <div className="p-4 bg-orange-50 rounded-xl border border-orange-200 text-gray-800">
                                        <h5 className="font-semibold mb-2">Test</h5>
                                        <p>Accuracy: {model.test.accuracy}</p>
                                        <p>AUC: {model.test.auc}</p>
                                        <p>F1 {type}: {type === "macro" ? model.test.f1_macro : model.test.f1_weighted}</p>
                                        <p>Precision {type}: {type === "macro" ? model.test.precision_macro : model.test.precision_weighted}</p>
                                        <p>Recall {type}: {type === "macro" ? model.test.recall_macro : model.test.recall_weighted}</p>
                                    </div>
                                </div>
                            );
                        })()}


                        {/* Comparaison validation */}
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">{t.validation_metrics_title}</h3>
                            <select
                                className="border border-gray-300 rounded-md p-2 text-black bg-white"
                                value={valMetricType}
                                onChange={(e) => setValMetricType(e.target.value as "macro" | "weighted")}
                            >
                                <option value="macro">Macro</option>
                                <option value="weighted">Weighted</option>
                            </select>
                        </div>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                                <thead className="bg-purple-100">
                                    <tr>
                                        <th className="border px-4 py-2 text-gray-900">Model</th>
                                        <th className="border px-4 py-2 text-gray-900">Accuracy</th>
                                        <th className="border px-4 py-2 text-gray-900">AUC</th>
                                        <th className="border px-4 py-2 text-gray-900">F1 {valMetricType}</th>
                                        <th className="border px-4 py-2 text-gray-900">Precision {valMetricType}</th>
                                        <th className="border px-4 py-2 text-gray-900">Recall {valMetricType}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {modelsData.map((model, i) => (
                                        <tr key={i} className="hover:bg-gray-50">
                                            <td className="border px-4 py-2 font-medium text-gray-800">{model.name}</td>
                                            <td className="border px-4 py-2 text-gray-800">{model.val.accuracy}</td>
                                            <td className="border px-4 py-2 text-gray-800">{model.val.auc}</td>
                                            <td className="border px-4 py-2 text-gray-800">
                                                {valMetricType === "macro" ? model.val.f1_macro : model.val.f1_weighted}
                                            </td>
                                            <td className="border px-4 py-2 text-gray-800">
                                                {valMetricType === "macro" ? model.val.precision_macro : model.val.precision_weighted}
                                            </td>
                                            <td className="border px-4 py-2 text-gray-800">
                                                {valMetricType === "macro" ? model.val.recall_macro : model.val.recall_weighted}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Comparaison test */}
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">{t.test_metrics_title}</h3>
                            <select
                                className="border border-gray-300 rounded-md p-2 text-black bg-white"
                                value={testMetricType}
                                onChange={(e) => setTestMetricType(e.target.value as "macro" | "weighted")}
                            >
                                <option value="macro">Macro</option>
                                <option value="weighted">Weighted</option>
                            </select>
                        </div>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="border px-4 py-2 text-gray-900">Model</th>
                                        <th className="border px-4 py-2 text-gray-900">Accuracy</th>
                                        <th className="border px-4 py-2 text-gray-900">AUC</th>
                                        <th className="border px-4 py-2 text-gray-900">F1 {testMetricType}</th>
                                        <th className="border px-4 py-2 text-gray-900">Precision {testMetricType}</th>
                                        <th className="border px-4 py-2 text-gray-900">Recall {testMetricType}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {modelsData.map((model, i) => (
                                        <tr key={i} className="hover:bg-gray-50">
                                            <td className="border px-4 py-2 font-medium text-gray-800">{model.name}</td>
                                            <td className="border px-4 py-2 text-gray-800">{model.test.accuracy}</td>
                                            <td className="border px-4 py-2 text-gray-800">{model.test.auc}</td>
                                            <td className="border px-4 py-2 text-gray-800">
                                                {testMetricType === "macro" ? model.test.f1_macro : model.test.f1_weighted}
                                            </td>
                                            <td className="border px-4 py-2 text-gray-800">
                                                {testMetricType === "macro" ? model.test.precision_macro : model.test.precision_weighted}
                                            </td>
                                            <td className="border px-4 py-2 text-gray-800">
                                                {testMetricType === "macro" ? model.test.recall_macro : model.test.recall_weighted}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    )}
                </div>

                {/* Meilleur modèle */}
                <div className="bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 rounded-2xl shadow-xl p-8 mb-8 text-gray-800">
                    <h2 className="text-3xl font-bold mb-4">
                        🏆 {t.best_models_title}
                    </h2>
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
                />

                {/* Footer */}
                <Footer
                    href="https://github.com/Lenoush/Zoidberg_private"
                    text={t.footer}
                />

                {/* Lightbox */}
                {lightboxImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                        onClick={() => setLightboxImage(null)} >
                        <div className="relative max-w-7xl max-h-full">
                            <button className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
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