import { IoVideocamOutline } from "react-icons/io5";
import { Subtitle } from "@/app/components/titles";

type VideoDemoProps = {
    title: string;
    src: string; 
};

export default function VideoDemo({ title, src }: VideoDemoProps) {
    const isUrlLink = src.startsWith("http");

    return (
        <div className="card">
            <Subtitle text={title} Icon={IoVideocamOutline} />

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
