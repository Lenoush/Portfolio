import type { ComponentType } from "react";
import { COLOR_MAP, MAIN_COLOR } from "@/config/colors_settings";

type Section = {
  id: string;
  label: string;
  icon: ComponentType<{ size?: number | string }>;
};

type LeftSidebarNavigationProps = {
  sections: Section[];
  activeSection: string;
  setActiveSection: (id: string) => void;
  color: string;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
};

export default function LeftSidebarNavigation({
  sections,
  activeSection,
  setActiveSection,
  color,
  scrollContainerRef
}: LeftSidebarNavigationProps) {

  const colorKey = COLOR_MAP[color];
  const mainColor = MAIN_COLOR;

  const handleSectionChange = (id: string) => {
    setActiveSection(id);
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  return (
    <div className={`md:w-64 ${colorKey.bg} border-r ${colorKey.border} flex flex-col min-h-[600px]`}>
      <nav className="flex-1 flex flex-col">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => handleSectionChange(section.id)}
              className={`flex-1 w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeSection === section.id
                ? `${colorKey.bg_fonce} ${mainColor.text_color_white} shadow-md`
                : `${mainColor.subtitle_color} ${colorKey.hover_bg_100}`
                }`}
            >
              <Icon size={20} />
              <span className="font-medium">{section.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
