type LearningSectionProps = {
  learn_title: string;
  learn_points: string;
};

export default function LearningSection({ learn_title, learn_points }: LearningSectionProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
      <h2 className="text-3xl font-bold mb-4">
        <span className="mr-2">💡</span>
        {learn_title}
      </h2>

      <div className="text-lg leading-relaxed whitespace-pre-line opacity-95">
        {learn_points}
      </div>
    </div>
  );
}
