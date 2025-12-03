import { IconType } from "react-icons/lib";

type PersoButtonProps = {
  icon: IconType;
  href: string;
  text: string;
};

export default function PersoButton({ icon:Icon, href, text }: PersoButtonProps) {
    return (
      <a 
        href={href}
        className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 group "
      >
        <div className="border border-emerald-600 p-3 rounded-lg group-hover:bg-emerald-100">
          <Icon className="text-2xl text-emerald-600" />
        </div>
        <p>{text}</p>
      </a>
    );
}
