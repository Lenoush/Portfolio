import { COLOR_MAP, MAIN_COLOR } from "@/config/colors_settings";


type Step = {
  text: string;
  images: readonly string[];
};

type PreprocessingProps = {
  preprocessing_steps: readonly Step[];
  setLightboxImage: (img: string) => void;
  color: string;
};

export default function Preprocessing({ preprocessing_steps, setLightboxImage, color }: PreprocessingProps) {
  const colorKey = COLOR_MAP[color];
  const mainColor = MAIN_COLOR;

  return (
    <div>
      {preprocessing_steps.map((step, i) => (
        <div
          key={i}
          className={`mb-8 ${colorKey.bg} p-6 rounded-xl border ${colorKey.border}`}
        >
          <p className={`mb-4 ${mainColor.text_color} font-medium text-lg`}>{step.text}</p>
          <div
            className={`grid gap-4 ${step.images.length === 1
              ? "grid-cols-1"
              : step.images.length === 2
                ? "grid-cols-2"
                : "grid-cols-3"
              }`}
          >
            {step.images.map((img, j) => (
              <img
                key={j}
                src={img}
                alt=""
                className="w-full max-w-md mx-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setLightboxImage(img)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
