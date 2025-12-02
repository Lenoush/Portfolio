type TechStackProps = {
    title: string;
    technologies: string[];
};

export default function TechStack({ title, technologies }: TechStackProps) {
    return (
        <div className="rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl">🔧</span>
                {title}
            </h2>

            <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="bg-gradient-to-br from-slate-700 via-indigo-700 to-indigo-900 text-white px-5 py-2 rounded-full font-semibold shadow-md"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
