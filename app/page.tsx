// app/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { LANG, Language } from "@/i18n/lang";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import LanguageSwitcher from "@/app/components/languageSwitcher";
import Footer from "./components/footer";

export default function Home() {
  const [lang, setLang] = useState<Language>("fr");
  const t = LANG[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-4xl mx-auto   rounded-xl shadow-lg p-8">
        {/* Sélecteur de langue */}
        <div className="flex justify-end mb-6">
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>

        {/* En-tête */}
        <div className="flex items-center gap-6 mb-8">
          <Image
            src="/favicon.png"
            alt="Léna Oudjman"
            width={120}
            height={120}
            className="rounded-full"
          />

          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {t.title}
            </h1>
            <h2 className="text-xl text-gray-600">
              {t.subtitle}
            </h2>
          </div>
        </div>

        <hr className="border-gray-300 mb-8" />


        {/* Présentation */}
        <div className="text-gray-700 mb-8 prose max-w-none">
          <ReactMarkdown>{t.intro}</ReactMarkdown>
        </div>
        <hr className="border-gray-300 mb-8" />

        {/* Informations de contact - 2 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Ligne 1 */}
          <div className="text-gray-700">{t.location} : Paris, France</div>
          <Link
            href="https://www.linkedin.com/in/lena-oudjman-0a36b6226/"
            target="_blank"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors"
          >
            {t.linkedin}
          </Link>

          {/* Ligne 2 */}
          <div className="text-gray-700">{t.email} : lenaoudjman@yahoo.fr</div>
          <Link
            href="https://github.com/Lenoush"
            target="_blank"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors"
          >
            {t.github}
          </Link>

          {/* Ligne 3 */}
          <div className="text-gray-700">{t.phone} : +33 6 66 21 57 10</div>
          <a
            href="/CV_Lena_Oudjman_FR.pdf"
            download
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors"
          >
            {t.cv}
          </a>
        </div>

        <hr className="border-gray-300 mb-8" />

        {/* Projets */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          💼 {t.click_project}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Projet 1 - Zoidberg */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-white">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {t.proj_zoidberg}
            </h4>
            <div className="text-gray-600 mb-4">
              <ReactMarkdown>{t.proj_zoidberg_description}</ReactMarkdown>
            </div>
            <Link
              href="/zoidberg"
              className="inline-block w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-center transition-colors"
            >
              {t.place_to_click_on}
            </Link>
          </div>

          {/* Projet 2 - Travel */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-white">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {t.proj_travel}
            </h4>
            <div className="text-gray-600 mb-4">
              <ReactMarkdown>{t.proj_travel_description}</ReactMarkdown>
            </div>
            <Link
              href="/travel"
              className="inline-block w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg text-center transition-colors"
            >
              {t.place_to_click_on}
            </Link>
          </div>

          {/* Projet 3 - Battleship */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-white">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {t.proj_battleship}
            </h4>
            <div className="text-gray-600 mb-4">
              <ReactMarkdown>{t.proj_battleship_description}</ReactMarkdown>
            </div>
            <Link
              href="/battleship"
              className="inline-block w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg text-center transition-colors"
            >
              {t.place_to_click_on}
            </Link>
          </div>

          {/* Projet 4 - Sparta */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-pink-50 to-white">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {t.proj_sparta}
            </h4>
            <div className="text-gray-600 mb-4">
              <ReactMarkdown>{t.proj_sparta_description}</ReactMarkdown>
            </div>
            <Link
              href="https://spartainvest.fr/landing"
              target="_blank"
              className="inline-block w-full md:w-auto bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg text-center transition-colors"
            >
              {t.place_to_click_on}
            </Link>
          </div>

          {/* Projet 5 - VR Space Game */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-cyan-50 to-white">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {t.proj_vr_space_game}
            </h4>
            <div className="text-gray-600 mb-4">
              <ReactMarkdown>{t.proj_vr_space_game_description}</ReactMarkdown>
            </div>
            <Link
              href="/spaceVrGame"
              className="inline-block w-full md:w-auto bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg text-center transition-colors"
            >
              {t.place_to_click_on}
            </Link>
          </div>

        </div>

        <hr className="border-gray-300 my-8" />

        {/* Footer */}
        <Footer
          href="https://www.linkedin.com/in/lena-oudjman-0a36b6226/"
          text={t.footer}
        />
      </div>
    </div>
  );
}