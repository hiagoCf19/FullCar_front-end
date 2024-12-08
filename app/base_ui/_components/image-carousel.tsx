import { Vehicle } from "@/app/types/vehicle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

interface ImageCarouselProps {
  images: {
    // Array de imagens do anúncio
    id: number; // Identificador único da imagem
    url: string; // URL da imagem
    ad_id: number; // ID do anúncio relacionado
  }[];
}
const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <Carousel className="relative">
      <CarouselContent>
        {images.map((image: any) => (
          <CarouselItem key={image.id}>
            <img
              src={image.url}
              alt={"Foto do veículo"}
              className="w-full rounded rounded-b-none h-[22vh] object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute inset-0  w-full z-40">
        <CarouselPrevious className="left-0  border-none hover:bg-transparent" />
        <CarouselNext className="right-0  border-none hover:bg-transparent" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
