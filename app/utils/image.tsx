"use client";
import { useState } from "react";

export function ImageCarousel({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative">
            {/* Image principale */}
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                <img
                    src={images[currentIndex]}
                    alt={`Space VR Game screenshot ${currentIndex + 1}`}
                    className="w-full h-full object-contain"
                />

                {/* Boutons navigation */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-3 transition-all shadow-lg"
                    aria-label="Image précédente"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-3 transition-all shadow-lg"
                    aria-label="Image suivante"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Compteur */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full font-semibold">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Points de navigation */}
            <div className="flex justify-center gap-3 mt-6">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all rounded-full ${index === currentIndex
                            ? "w-12 h-3 bg-emerald-600 shadow-lg"
                            : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Aller à l'image ${index + 1}`}
                    />
                ))}
            </div>

            {/* Miniatures (optionnel)
            <div className="grid grid-cols-4 gap-3 mt-6">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`rounded-lg overflow-hidden border-2 transition-all ${index === currentIndex
                            ? "border-indigo-600 shadow-lg scale-105"
                            : "border-gray-300 hover:border-gray-400 opacity-70 hover:opacity-100"
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Miniature ${index + 1}`}
                            className="w-full aspect-video object-cover"
                        />
                    </button>
                ))}
            </div> */}
        </div>
    );
}
