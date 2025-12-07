import { IconType } from 'react-icons/lib';
import ReactMarkdown from 'react-markdown';
import { IoLogoGithub } from 'react-icons/io5';

import { Title } from '@/app/components/titles';
import { COLOR_MAP } from '@/config/colors_settings';

type HeroProps = {
  t: {
    title: string;
    subtitle: string;
    intro: string;
  };
  icon: IconType;
  href: string;
  color: string;
};

export default function Hero({ t, icon: Icon, href, color }: HeroProps) {
  const colorKey = COLOR_MAP[color];
  return (
    <div className={`card border ${colorKey.border}`}>
      <div className={`flex justify-between items-center gap-6`}>
        <div>
          <Title text={t.title} Icon={Icon} />
          <p className="text-xl text-gray-700 mb-2">{t.subtitle}</p>
          <div className="text-gray-800 leading-relaxed">
            <ReactMarkdown >{t.intro}</ReactMarkdown>
          </div>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-900 ${colorKey.hover_text} cursor-pointer flex-shrink-0 transition-colors`}
        >
          <IoLogoGithub className="text-7xl" />
        </a>
      </div>
    </div>
  );
}