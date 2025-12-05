import { IoBuildOutline } from "react-icons/io5";
import { Subtitle } from "@/app/components/titles";
import COLOR_MAP from "@/config/colorMap";

type TechStackProps = {
    title: string;
    technologies: string[];
    color: string;
};

export default function TechStack({ title, technologies, color }: TechStackProps) {
    const colorKey = COLOR_MAP[color];
    const mainColor = COLOR_MAP.main;

    return (
        <div className="card">
            <Subtitle text={title} Icon={IoBuildOutline} />

            <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className={`${mainColor.text_color} px-5 py-2 rounded-full font-semibold border ${colorKey.border} ${colorKey.bg}`}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
