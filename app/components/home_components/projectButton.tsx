import COLOR_MAP from "@/config/colorMap";
import { IconType } from "react-icons/lib";
import { Subtitle } from "@/app/components/titles";

type ProjectButtonProps = {
  title: string;
  icon: IconType;
  description: string;
  link: string;
  color: string;
  targetBlank?: boolean;
};

export default function ProjectButton({
  title,
  icon: Icon,
  description,
  link,
  color,
  targetBlank = false,
}: ProjectButtonProps) {

  const colorKey = COLOR_MAP[color];
  const mainColor = COLOR_MAP.main;

  const handleClickOpenLink = () => {
    window.open(link, targetBlank ? "_blank" : "_self");
  }

  return (
    <div className={`rounded-lg p-6 hover:shadow-md cursor-pointer ${colorKey.bg} border ${colorKey.border}`}
      onClick={handleClickOpenLink}
    >
      <Subtitle text={title} Icon={Icon} />

      <div className={`${mainColor.text_color} mb-1`}>
        {description}
      </div>

    </div>
  );
}
