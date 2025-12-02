import Link from "next/link";
import ReactMarkdown from "react-markdown";

type ProjectButtonProps = {
  title: string;
  description: string;
  link: string;
  click_on: string;
  color: string; 
};

const COLOR_MAP: Record<string, { bg: string; hover: string, from: string }> = {
  blue:   { bg: "bg-blue-600",   hover: "hover:bg-blue-700" , from: "from-blue-50"},
  green:  { bg: "bg-green-600",  hover: "hover:bg-green-700" , from: "from-green-50"},
  purple: { bg: "bg-purple-600", hover: "hover:bg-purple-700" , from: "from-purple-50"},
  indigo: { bg: "bg-indigo-600", hover: "hover:bg-indigo-700" , from: "from-indigo-50"},
  pink:   { bg: "bg-pink-600",   hover: "hover:bg-pink-700" , from: "from-pink-50"},
  gray:   { bg: "bg-gray-600",   hover: "hover:bg-gray-700" , from: "from-gray-50"},
  slate:  { bg: "bg-slate-600",  hover: "hover:bg-slate-700" , from: "from-slate-50"},
  red:    { bg: "bg-red-600",    hover: "hover:bg-red-700" , from: "from-red-50"},
  cyan:  { bg: "bg-cyan-600",   hover: "hover:bg-cyan-700" , from: "from-cyan-50"},
};

export default function ProjectButton({
  title,
  description,
  link,
  click_on,
  color,
}: ProjectButtonProps) {
  const colorKey = color in COLOR_MAP ? color : "blue";
  const { bg, hover, from} = COLOR_MAP[colorKey];

  const buttonClass = [
    "inline-block",
    "w-full md:w-auto",
    bg,
    hover,
    "text-white",
    "font-semibold",
    "py-2",
    "px-6",
    "rounded-lg",
    "text-center",
    "transition-colors",
  ].join(" ");

  return (
    <div className={`border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-gradient-to-br ${from} to-white`}>
      <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>

      <div className="text-gray-600 mb-4">
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>

      <Link href={link} className={buttonClass} >
        {click_on}
      </Link>
    </div>
  );
}
