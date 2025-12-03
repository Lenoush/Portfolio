import { IoBulbOutline } from "react-icons/io5";
import { Subtitle } from "@/app/components/titles";
import COLOR_MAP from "@/app/colorMap";

type LearningSectionProps = {
  learn_title: string;
  learn_points: string;
  color: string;
};

export default function LearningSection({ learn_title, learn_points, color }: LearningSectionProps) {
  const colorKey = color in COLOR_MAP ? color : "emerald";
  const { bg_fonce } = COLOR_MAP[colorKey];
  return (
    <div className={`${bg_fonce} rounded-2xl shadow-sm p-8 mb-8`}>
      <Subtitle text={learn_title} Icon={IoBulbOutline} color="text-white"/>

      <div className="text-md leading-relaxed whitespace-pre-line text-white">
        {learn_points}
      </div>
    </div>
  );
}
