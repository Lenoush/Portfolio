import { ImageCarousel } from "@/app/utils/image";
import { IoImagesOutline } from "react-icons/io5";
import { Subtitle } from "@/app/components/titles";

type ImagesGalleryProps = {
    title: string;
    images: string[];
};

export default function ImagesGallery({ title, images }: ImagesGalleryProps) {
    return (
        <div className="card">
            <Subtitle text={title} Icon={IoImagesOutline} />
            <ImageCarousel images={images} />
        </div>
    );
}
