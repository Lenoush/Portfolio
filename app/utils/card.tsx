import { COLOR_MAP, MAIN_COLOR } from '@/config/colors_settings';
import { IconType } from 'react-icons';


export function MetricCard({ title, value, icon: Icon, color }: { title: string; value: string; icon: IconType, color: string }) {
    const colorKey = COLOR_MAP[color];
    return (
        <div className={`${colorKey.bg} border ${colorKey.border} rounded-xl p-6 shadow-sm`}>
            <div className="flex items-center gap-2">
                {Icon && <span className={`mb-2 text-2xl ${colorKey.text_color}`}>
                    <Icon />
                </span>}
                <p className={` ${MAIN_COLOR.title_color} text-md`}>
                    {title}
                </p>
            </div>
            <div className={`text-2xl font-bold ${colorKey.text_color} mt-2 text-center`}>
                {value}
            </div>
        </div>
    );
}

export function StepCard({ number, title, content, color }: { number: number; title: string; content: string; color: string }) {
    const colorKey = COLOR_MAP[color];
    return (
        <div className={`relative border ${colorKey.border} rounded-xl p-6 shadow-sm`}>
            <div className={`absolute -top-3 -left-3 w-10 h-10 ${colorKey.bg_fonce} rounded-full flex items-center justify-center ${MAIN_COLOR.text_color_white} font-bold border ${colorKey.border}`}>
                {number}
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-2">{title}</h4>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content}</p>
        </div>
    );
}

export function FeatureCard({ icon: Icon, text }: { icon: IconType; text: string }) {
    return (
        <div className={`flex items-start gap-3 p-4 rounded-lg shadow-sm ${MAIN_COLOR.bg} ${MAIN_COLOR.text_color}`}>
            <span className="text-2xl">
                <Icon />
            </span>
            <p className={`leading-relaxed ${MAIN_COLOR.text_color}`}>{text}</p>
        </div>
    );
}

export function ContributionCard({ icon, text, color }: { icon: IconType | IconType[]; text: string; color: string }) {
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

    const colorKey = COLOR_MAP[color];

    return (
        <div className={`relative ${colorKey.bg} p-6 pt-8 rounded-lg shadow-sm border ${colorKey.border}`}>
            {/* Rond avec icône sur le bord */}
            <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 ${MAIN_COLOR.bg} rounded-full flex items-center justify-center ${colorKey.text_color} font-bold border-2 ${colorKey.border} shadow-sm`}>
                {renderIcons()}
            </div>

            <p className={`leading-relaxed text-center ${MAIN_COLOR.text_color}`}>{text}</p>
        </div>
    );
}