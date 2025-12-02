type VideoDemoProps = {
    title: string;
    src: string; 
};

export default function VideoDemo({ title, src }: VideoDemoProps) {
    const isUrlLink = src.startsWith("http");

    return (
        <div className="rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl">🎥</span>
                {title}
            </h2>

            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
                {isUrlLink ? (
                    <iframe
                        className="w-full h-full"
                        src={src}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <video
                        className="w-full h-full"
                        src={src}
                        controls
                    />
                )}
            </div>
        </div>
    );
}
