type Step = {
  text: string;
  images: readonly string[];
};

type PreprocessingProps = {
  preprocessing_steps: readonly Step[];
  setLightboxImage: (img: string) => void;
};

export default function Preprocessing({ preprocessing_steps, setLightboxImage }: PreprocessingProps) {
  return (
    <div>
      {preprocessing_steps.map((step, i) => (
        <div
          key={i}
          className="mb-8 bg-purple-50 p-6 rounded-xl border border-purple-200"
        >
          <p className="mb-4 text-gray-800 font-medium text-lg">{step.text}</p>
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
