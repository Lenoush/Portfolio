"use client";
import { useState } from "react";
import { IoImagesOutline, IoVideocamOutline } from "react-icons/io5";
import { Subtitle } from "@/app/components/titles";

type MediaItem = {
    type: "image" | "video";
    src: string;
    alt?: string;
};

type MediaGalleryProps = {
    title: string;
    color: string;
    media: MediaItem[];
};

export default function MediaGallery({ title, color, media }: MediaGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
    };

    const currentMedia = media[currentIndex];
    const isVideo = currentMedia.type === "video";
    const isUrlLink = currentMedia.src.startsWith("http");

    return (
        <div className="card">
            <Subtitle
                text={title}
                Icon={isVideo ? IoVideocamOutline : IoImagesOutline}
            />

            <div className="relative">
                {/* Média principal */}
                <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                    {isVideo ? (
                        isUrlLink ? (
                            <iframe
                                className="w-full h-full"
                                src={currentMedia.src}
                                title={currentMedia.alt || title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <video
                                className="w-full h-full"
                                src={currentMedia.src}
                                controls
                            />
                        )
                    ) : (
                        <img
                            src={currentMedia.src}
                            alt={currentMedia.alt || `Media ${currentIndex + 1}`}
                            className="w-full h-full object-contain"
                        />
                    )}

                    {/* Boutons navigation - Affichés seulement s'il y a plusieurs médias */}
                    {media.length > 1 && (
                        <>
                            <button
                                onClick={goToPrevious}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-3 transition-all shadow-lg"
                                aria-label="Média précédent"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={goToNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-3 transition-all shadow-lg"
                                aria-label="Média suivant"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>

                {/* Points de navigation */}
                {media.length > 1 && (
                    <div className="flex justify-center gap-4 mt-6">
                        {media.map((item, index) => {
                            const isActive = index === currentIndex;
                            const isVideo = item.type === "video";
                            const Icon = isVideo ? IoVideocamOutline : IoImagesOutline;

                            return (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className="transition-all"
                                >
                                    <Icon
                                        className={
                                            isActive
                                                ? `text-3xl text-${color}-600 drop-shadow-md`
                                                : "text-xl text-gray-400 hover:text-gray-600"
                                        }
                                    />
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}