import { IconType } from "react-icons/lib";
import { Subtitle } from "@/app/components/titles";

import { COLOR_MAP, MAIN_COLOR } from "@/config/colors_settings";

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
  const mainColor = MAIN_COLOR;

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
