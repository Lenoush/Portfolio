import COLOR_MAP from "@/app/colorMap";
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

  const colorKey = color in COLOR_MAP ? color : "gray";
  const { bg, border } = COLOR_MAP[colorKey];

  const handleClickOpenLink = () => {
    window.open(link, targetBlank ? "_blank" : "_self");
  }

  return (
    <div className={`rounded-lg p-6 hover:shadow-md cursor-pointer ${bg} border ${border}`}
      onClick={handleClickOpenLink}
    >
      <Subtitle text={title} Icon={Icon} />

      <div className="text-gray-600 mb-1">
        {description}
      </div>

    </div>
  );
}
