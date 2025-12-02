import { ImageCarousel } from "@/app/utils/image";

type ImagesGalleryProps = {
    title: string;
    images: string[];
};

export default function ImagesGallery({ title, images }: ImagesGalleryProps) {
    return (
        <div className="rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl">🖼️</span>
                {title}
            </h2>

            <ImageCarousel images={images} />
        </div>
    );
}
