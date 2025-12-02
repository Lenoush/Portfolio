// app/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { LANG, Language } from "@/i18n/lang";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import LanguageSwitcher from "@/app/components/header_utils/languageSwitcher";
import Footer from "./components/footer";
import PersoButton from "./components/home_components/persoButton";
import ProjectButton from "./components/home_components/projectButton";

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

          {/* LINKEDIN*/}
          <div className="text-gray-700">{t.location} : Paris, France</div>
          <PersoButton
            title={t.linkedin}
            href="https://www.linkedin.com/in/lena-oudjman-0a36b6226/"
          />

          {/* GITHUB*/}
          <div className="text-gray-700">{t.email} : lenaoudjman@yahoo.fr</div>
          <PersoButton
            title={t.github}
            href="https://github.com/Lenoush"
          />

          {/* CV*/}
          <div className="text-gray-700">{t.phone} : +33 6 66 21 57 10</div>
          <PersoButton
            title={t.cv}
            href="/CV_Lena_Oudjman_FR.pdf"
            download
          />
        </div>

        <hr className="border-gray-300 mb-8" />

        {/* Projets */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          💼 {t.click_project}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Projet 1 - Zoidberg */}
          <ProjectButton 
            title={t.proj_zoidberg}
            description={t.proj_zoidberg_description}
            link="/zoidberg"
            click_on={t.place_to_click_on}
            color="blue"
          />

          {/* Projet 2 - Travel */}
          <ProjectButton 
            title={t.proj_travel}
            description={t.proj_travel_description}
            link="/travel"
            click_on={t.place_to_click_on}
            color="green"
          />

          {/* Projet 3 - Battleship */}
          <ProjectButton 
            title={t.proj_battleship}
            description={t.proj_battleship_description}
            link="/battleship"
            click_on={t.place_to_click_on}
            color="purple"
          />

          {/* Projet 4 - Sparta */}
          <ProjectButton
            title={t.proj_sparta}
            description={t.proj_sparta_description}
            link="https://spartainvest.fr/landing"
            click_on={t.place_to_click_on}
            color="pink"
          />

          {/* Projet 5 - VR Space Game */}
          <ProjectButton
            title={t.proj_vr_space_game}
            description={t.proj_vr_space_game_description}
            link="/spaceVrGame"
            click_on={t.place_to_click_on}
            color="cyan"          />

        </div>

        {/* Footer */}
        <Footer
          href="https://www.linkedin.com/in/lena-oudjman-0a36b6226/"
          text={t.footer}
        />
      </div>
    </div>
  );
}