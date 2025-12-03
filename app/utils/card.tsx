import { IconType } from 'react-icons';
import COLOR_MAP from "@/app/colorMap";


export function MetricCard({ title, value, icon: Icon , color}: { title: string; value: string; icon: IconType, color: string }) {
    const colorKey = color in COLOR_MAP ? color : "emerald";
    const { bg, border, text_color} = COLOR_MAP[colorKey];
    return (
        <div className={`${bg} border ${border} rounded-xl p-6 shadow-sm`}>
            <div className="flex items-center gap-2">
                {Icon && <span className={`mb-2 text-2xl ${text_color}`}>
                    <Icon />
                    </span>}
                <p className="text-black text-md">
                    {title}
                </p>
            </div>
            <div className={`text-2xl font-bold ${text_color} mt-2 text-center`}>
                {value}
            </div>
        </div>
    );
}

export function StepCard({ number, title, content, color }: { number: number; title: string; content: string; color: string }) {
    const colorKey = color in COLOR_MAP ? color : "emerald";
    const { bg, border, text_color, bg_fonce} = COLOR_MAP[colorKey];
    return (
        <div className={`relative border ${border} rounded-xl p-6 shadow-sm`}>
            <div className={`absolute -top-3 -left-3 w-10 h-10 ${bg_fonce} rounded-full flex items-center justify-center text-white font-bold border ${border}`}>
                {number}
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-2">{title}</h4>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content}</p>
        </div>
    );
}

export function FeatureCard({ icon: Icon, text }: { icon: IconType; text: string }) {
    return (
        <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-300 shadow-sm bg-white text-black">
            <span className="text-2xl">
                <Icon />
            </span>
            <p className="text-gray-800 leading-relaxed">{text}</p>
        </div>
    );
}

export function ContributionCard({ icon, text, color }: { icon: IconType | IconType[]; text: string ; color: string }) {
    const renderIcons = () => {
        if (Array.isArray(icon)) {
            return (
                <span className="flex gap-1 text-xl">
                    {icon.map((Icon, idx) => (
                        <Icon key={idx} />
                    ))}
                </span>
            );
        }
        const Icon = icon;
        return <Icon className="text-xl" />;
    };

    const colorKey = color in COLOR_MAP ? color : "emerald";
    const { bg, border, text_color} = COLOR_MAP[colorKey];

    return (
        <div className={`relative ${bg} p-6 pt-8 rounded-lg shadow-sm border ${border}`}>
            {/* Rond avec icône sur le bord */}
            <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center ${text_color} font-bold border-2 ${border} shadow-sm`}>
                {renderIcons()}
            </div>
            
            <p className="text-gray-800 leading-relaxed text-center">{text}</p>
        </div>
    );
}