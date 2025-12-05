import { IoBulbOutline } from "react-icons/io5";
import { Subtitle } from "@/app/components/titles";
import COLOR_MAP from "@/config/colorMap";

type LearningSectionProps = {
  learn_title: string;
  learn_points: string;
  color: string;
};

export default function LearningSection({ learn_title, learn_points, color }: LearningSectionProps) {
  const colorKey = COLOR_MAP[color];
  const mainColor = COLOR_MAP.main;

  return (
    <div className={`${colorKey.bg_fonce} rounded-2xl shadow-sm p-8 mb-8`}>
      <Subtitle text={learn_title} Icon={IoBulbOutline} white={true} />

      <div className={`text-md leading-relaxed whitespace-pre-line ${mainColor.text_color_white}`}>
        {learn_points}
      </div>
    </div>
  );
}
