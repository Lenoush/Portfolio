import { MAIN_COLOR } from "@/config/colors_settings";


export function Subsubtitle({ text, Icon }: { text: string; Icon: React.ComponentType }) {
    const mainColor = MAIN_COLOR;
    return (
        <p className={`font-bold mb-4 flex items-center gap-2 text-1xl ${mainColor.text_color}`}>
            <Icon />
            {text}
        </p>
    );
}

export function Subtitle({ text, Icon, white = false }: { text: string; Icon: React.ComponentType; white?: boolean }) {
    const mainColor = MAIN_COLOR;
    return (
        <p className={`font-bold mb-4 flex items-center gap-2 text-2xl ${white ? mainColor.text_color_white : mainColor.text_color}`}>
            <Icon />
            {text}
        </p>
    );
}

export function Title({ text, Icon }: { text: string; Icon: React.ComponentType }) {
    const mainColor = MAIN_COLOR;
    return (
        <p className={`font-bold mb-6 flex items-center gap-2 text-3xl ${mainColor.text_color}`}>
            <Icon />
            {text}
        </p>
    );
}
