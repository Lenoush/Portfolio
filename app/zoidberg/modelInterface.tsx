"use client";

import { useState } from "react";
import { GrTestDesktop } from "react-icons/gr";

import { Subtitle } from "@/app/components/titles";
import { MAIN_COLOR } from "@/config/colors_settings";

type ImageCategory = "healthy" | "bacterial" | "viral";

type TestInterfaceProps = {
    t: any;
    images: Record<ImageCategory, string[]>;
};

const allCategories: ImageCategory[] = ["healthy", "bacterial", "viral"];

// Mapping entre les catégories de l'interface et les classes du modèle
const CATEGORY_TO_CLASS: Record<ImageCategory, string> = {
    healthy: "NORMAL",
    bacterial: "BACTERIA",
    viral: "VIRUS"
};

export default function TestInterface({ t, images }: TestInterfaceProps) {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedImage, setSelectedImage] = useState("");
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [uploadedPreview, setUploadedPreview] = useState<string | null>(null);
    const [prediction, setPrediction] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const resetSelection = () => {
        setSelectedCategory("");
        setSelectedImage("");
        setUploadedFile(null);
        setUploadedPreview(null);
        setPrediction(null);
        setError(null);
    };

    const getImageFileName = (path: string) => path.split("/").pop() || path;

    // Fonction pour prétraiter l'image et extraire le vecteur de caractéristiques
    // Correspond exactement au preprocessing Python avec conversion en niveaux de gris
    const preprocessImage = async (imageSrc: string): Promise<number[]> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "anonymous";

            img.onload = () => {
                try {
                    // Créer un canvas pour redimensionner l'image
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    if (!ctx) {
                        reject(new Error('Could not get canvas context'));
                        return;
                    }

                    // Redimensionner à 100x100 (IMG_SIZE dans votre code Python)
                    const IMG_SIZE = 100;
                    canvas.width = IMG_SIZE;
                    canvas.height = IMG_SIZE;

                    // Dessiner l'image redimensionnée
                    ctx.drawImage(img, 0, 0, IMG_SIZE, IMG_SIZE);

                    // Extraire les données de pixels
                    const imageData = ctx.getImageData(0, 0, IMG_SIZE, IMG_SIZE);
                    const pixels = imageData.data;

                    // Convertir en niveaux de gris et normaliser (0-255 -> 0-1)
                    // Formule de conversion RGB vers grayscale : 0.299*R + 0.587*G + 0.114*B
                    const imageVector: number[] = [];
                    for (let i = 0; i < pixels.length; i += 4) {
                        const r = pixels[i];
                        const g = pixels[i + 1];
                        const b = pixels[i + 2];

                        // Conversion en niveaux de gris (même formule que cv2.cvtColor)
                        const gray = 0.299 * r + 0.587 * g + 0.114 * b;

                        // Normalisation (0-255 -> 0-1)
                        imageVector.push(gray / 255.0);
                    }

                    // Vérification : doit avoir exactement 10000 éléments (100x100)
                    if (imageVector.length !== 10000) {
                        reject(new Error(`Invalid vector size: ${imageVector.length}, expected 10000`));
                        return;
                    }

                    resolve(imageVector);
                } catch (err) {
                    reject(err);
                }
            };

            img.onerror = () => reject(new Error('Failed to load image'));
            img.src = imageSrc;
        });
    };

    // Fonction de prédiction
    const handlePredict = async () => {
        setIsLoading(true);
        setError(null);
        setPrediction(null);

        try {
            const imageSrc = uploadedPreview || selectedImage;

            if (!imageSrc) {
                throw new Error('No image selected');
            }

            // Prétraiter l'image pour extraire le vecteur
            const imageVector = await preprocessImage(imageSrc);

            // Appeler l'API de prédiction
            const response = await fetch('/api/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ imageVector }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Prediction failed');
            }

            const result = await response.json();
            setPrediction(result);
        } catch (err) {
            console.error('Prediction error:', err);
            setError(err instanceof Error ? err.message : 'An error occurred during prediction');
        } finally {
            setIsLoading(false);
        }
    };

    const getExpectedClass = () => {
        if (!selectedCategory) return null;
        return CATEGORY_TO_CLASS[selectedCategory as ImageCategory];
    };

    return (
        <div className="card">
            {/* Test */}
            <Subtitle text={t.test_SVC_avec_PCA_title} Icon={GrTestDesktop} />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {allCategories.map((category) => (
                    <div key={category}>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {t[`${category}_label`]}
                        </label>
                        <select
                            value={selectedCategory === category ? selectedImage : ""}
                            onChange={(e) => {
                                setSelectedCategory(category);
                                setSelectedImage(e.target.value);
                                setUploadedFile(null);
                                setUploadedPreview(null);
                                setPrediction(null);
                                setError(null);
                            }}
                            className="w-full border border-gray-300 rounded-lg p-2.5 text-black"
                        >
                            <option value="">--</option>
                            {images[category].map((img, i) => (
                                <option key={i} value={img}>
                                    {getImageFileName(img)}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}

                <div className="flex items-end">
                    <button
                        onClick={resetSelection}
                        className={`w-full ${MAIN_COLOR.bg_fonce} ${MAIN_COLOR.hover_bg} ${MAIN_COLOR.text_color_white} font-semibold py-2.5 px-4 rounded-lg transition-colors`}
                    >
                        {t.reset_button}
                    </button>
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.upload_label}</label>
                <input
                    type="file"
                    accept="image/jpeg,image/png,image/jpg"
                    onChange={(e) => {
                        if (e.target.files?.[0]) {
                            const file = e.target.files[0];
                            setUploadedFile(file);
                            setSelectedCategory("");
                            setSelectedImage("");
                            setPrediction(null);
                            setError(null);
                            const reader = new FileReader();
                            reader.onloadend = () => setUploadedPreview(reader.result as string);
                            reader.readAsDataURL(file);
                        }
                    }}
                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer"
                />
            </div>

            {(selectedImage || uploadedPreview) && (
                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">{t.uploaded_image_caption}</h4>
                    <img
                        src={uploadedPreview || selectedImage}
                        alt="Selected scan"
                        className="w-64 h-64 object-cover rounded-lg shadow-md border border-gray-300 cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setLightboxImage(uploadedPreview || selectedImage)}
                    />
                </div>
            )}

            {error && (
                <div className="mb-6 bg-red-100 border-l-4 border-red-500 text-red-800 px-5 py-4 rounded-lg">
                    <p className="font-semibold">Erreur:</p>
                    <p>{error}</p>
                </div>
            )}

            {(uploadedFile || selectedImage) && (
                <button
                    onClick={handlePredict}
                    disabled={isLoading}
                    className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors disabled:opacity-50 shadow-md"
                >
                    {isLoading ? "⏳ Prédiction en cours..." : "🔬 Faire une prédiction"}
                </button>
            )}

            {prediction && (
                <div className="mt-8 p-6 bg-purple-100 rounded-xl border border-purple-900 shadow-inner">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{t.show_proba}</h3>
                    <div className="space-y-3">
                        {Object.entries(prediction.probabilities).map(([cls, prob]: [string, any]) => {
                            const expectedClass = getExpectedClass();
                            const isExpected = expectedClass === cls;
                            const isPredicted = prediction.predicted === cls;

                            // Déterminer la couleur de fond
                            let bgColor = "bg-white";
                            let textColor = "text-gray-800";
                            let borderColor = "";

                            if (expectedClass) {
                                if ((isExpected && isPredicted) || (isExpected && !isPredicted)) {
                                    // Bonne prédiction - VERT
                                    bgColor = "bg-green-100";
                                    textColor = "text-green-800";
                                    borderColor = "border-2 border-green-500";
                                } else if (!isExpected && isPredicted) {
                                    // Mauvaise prédiction - ROUGE
                                    bgColor = "bg-red-100";
                                    textColor = "text-red-800";
                                    borderColor = "border-2 border-red-500";
                                }
                            }

                            return (
                                <div
                                    key={cls}
                                    className={`flex justify-between items-center p-3 rounded-lg shadow-sm ${bgColor} ${borderColor}`}
                                >
                                    <span className={`font-semibold ${textColor}`}>
                                        {cls}
                                        {isExpected && " ✓"}
                                        {isPredicted && !isExpected && " ✗"}
                                    </span>
                                    <span className={`font-bold text-lg ${isPredicted ? textColor : 'text-purple-800'}`}>
                                        {(prob * 100).toFixed(1)}%
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Lightbox pour agrandir l'image */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setLightboxImage(null)}
                >
                    <div className="max-w-6xl max-h-screen p-4">
                        <img
                            src={lightboxImage}
                            alt="Enlarged view"
                            className="max-w-full max-h-full rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}