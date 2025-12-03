import { IoBuildOutline } from "react-icons/io5";
import { Subtitle } from "./titles";
import COLOR_MAP from "@/app/colorMap";

type TechStackProps = {
    title: string;
    technologies: string[];
    color: string;
};

export default function TechStack({ title, technologies, color }: TechStackProps) {
    const colorKey = color in COLOR_MAP ? color : "emerald";
    const { bg, border} = COLOR_MAP[colorKey];

    return (
        <div className="card">
            <Subtitle text={title} Icon={IoBuildOutline} />

            <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className={` text-black px-5 py-2 rounded-full font-semibold border ${border} ${bg}`}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
