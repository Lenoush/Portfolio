// app/page.tsx
"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { RiBodyScanFill } from "react-icons/ri";
import { MdOutlineTravelExplore, MdOutlinePhoneCallback } from "react-icons/md";
import { IoBoatOutline, IoLocationOutline, IoMailUnreadOutline, IoLogoGithub } from "react-icons/io5";
import { GiSpartanHelmet, GiRocket } from "react-icons/gi";
import { BsLinkedin } from "react-icons/bs";
import { TbFileCv } from "react-icons/tb";

import { LANG, Language } from "@/i18n/lang";

import Image from "next/image";
import LanguageSwitcher from "@/app/components/header_components/languageSwitcher";
import Footer from "./components/footer";
import PersoButton from "./components/home_components/persoButton";
import ProjectButton from "./components/home_components/projectButton";
import { Subtitle } from "./components/titles";

export default function Home() {
  const [lang, setLang] = useState<Language>("fr");
  const t = LANG[lang];

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-6xl mx-auto rounded-xl p-8">
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

          {/* Colonne gauche - Informations textuelles */}
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="items-center justify-center space-y-6">
              {/* EMAIL */}
              <PersoButton
                icon={IoMailUnreadOutline}
                href="mailto:lenaoudjman@yahoo.fr"
                text="lenaoudjman@yahoo.fr"
              />

              {/* PHONE */}
              <PersoButton
                icon={MdOutlinePhoneCallback}
                href="tel:+33666215710"
                text="+33 6 66 21 57 10"
              />
            </div>
          </div>

          {/* Colonne droite - Icônes sociales */}
          <div className="flex items-center gap-35">
            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/lena-oudjman-0a36b6226/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-emerald-600 cursor-pointer"
            >
              <BsLinkedin className="text-7xl" />
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/Lenoush"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-emerald-600 cursor-pointer"
            >
              <IoLogoGithub className="text-7xl" />
            </a>

            {/* CV */}
            <a
              href="/CV_Lena_Oudjman_FR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download={true}
              className="text-red-800 hover:text-emerald-600 cursor-pointer"
            >
              <TbFileCv className="text-8xl" />
            </a>
          </div>
        </div>

        <hr className="border-gray-300 mb-8" id="projects" />

        {/* Projets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Projet 1 - Zoidberg */}
          <ProjectButton
            title={t.proj_zoidberg}
            icon={RiBodyScanFill}
            description={t.proj_zoidberg_description}
            link="/zoidberg"
            color="purple"
          />

          {/* Projet 2 - Travel */}
          <ProjectButton
            title={t.proj_travel}
            icon={MdOutlineTravelExplore}
            description={t.proj_travel_description}
            link="/travel"
            color="green"
          />

          {/* Projet 3 - Battleship */}
          <ProjectButton
            title={t.proj_battleship}
            icon={IoBoatOutline}
            description={t.proj_battleship_description}
            link="/battleship"
            color="indigo"
          />

          {/* Projet 4 - Sparta */}
          <ProjectButton
            title={t.proj_sparta}
            icon={GiSpartanHelmet}
            description={t.proj_sparta_description}
            link="https://spartainvest.fr/landing"
            color="pink"
            targetBlank
          />

          {/* Projet 5 - VR Space Game */}
          <ProjectButton
            title={t.proj_vr_space_game}
            icon={GiRocket}
            description={t.proj_vr_space_game_description}
            link="/spaceVrGame"
            color="orange" />

        </div>
      </div>
      {/* Footer */}
      <Footer
        href="https://www.linkedin.com/in/lena-oudjman-0a36b6226/"
        text={t.footer}
      />
    </div>
  );
}