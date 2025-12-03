export function Subsubtitle({ text, Icon, color }: { text: string; Icon: React.ComponentType; color?: string }) {
    return (
        <p className={`font-bold mb-4 flex items-center gap-2 text-1xl ${color ? color : "text-gray-900"}`}>
            <Icon />
            {text}
        </p>
    );
}

export function Subtitle({ text, Icon, color }: { text: string; Icon: React.ComponentType; color?: string }) {
    return (
        <p className={`font-bold mb-4 flex items-center gap-2 text-2xl ${color ? color : "text-gray-900"}`}>
            <Icon />
            {text}
        </p>
    );
}

export function Title({ text, Icon }: { text: string; Icon: React.ComponentType }) {
    return (
        <p className="font-bold text-gray-900 mb-6 flex items-center gap-2 text-3xl">
            <Icon />
            {text}
        </p>
    );
}
