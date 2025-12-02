

export function MetricCard({ title, value, icon }: { title: string; value: string; icon: string }) {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2">
                {icon && <span className="text-3xl mb-2">{icon}</span>}
                <h3 className="text-sm text-gray-600 font-medium">{title}</h3>
            </div>
            <div className="text-3xl font-bold text-indigo-600 mt-2">{value}</div>
        </div>
    );
}

export function StepCard({ number, title, content }: { number: number; title: string; content: string }) {
    return (
        <div className="relative   border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {number}
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-2">{title}</h4>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content}</p>
        </div>
    );
}

export function FeatureCard({ icon, text }: { icon: string; text: string }) {
    return (
        <div className="flex items-start gap-3   p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-2xl flex-shrink-0">{icon}</span>
            <p className="text-gray-800 leading-relaxed">{text}</p>
        </div>
    );
}

export function ContributionCard({ icon, text }: { icon: string; text: string }) {
    return (
        <div className="flex items-start gap-3 bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-2xl flex-shrink-0">{icon}</span>
            <p className="text-gray-800 leading-relaxed font-medium">{text}</p>
        </div>
    );
}
