import type { ComponentType } from "react";

type Section = {
    id: string;
    label: string;
    icon: ComponentType<{ size?: number | string }>;
};

type LeftSidebarNavigationProps = {
    sections: Section[];
    activeSection: string;
    setActiveSection: (id: string) => void;
};

export default function LeftSidebarNavigation({
  sections,
  activeSection,
  setActiveSection,
}: LeftSidebarNavigationProps) {
  return (
    <div className="md:w-64 bg-purple-50 border-r border-gray-200 flex flex-col min-h-[600px]">
      <nav className="flex-1 flex flex-col">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex-1 w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeSection === section.id
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-purple-100"
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
