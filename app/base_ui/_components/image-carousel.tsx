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
            <div className="relative w-[100%]   md:w-full md:h-max  ">
              <img
                src={image.url}
                alt={"Foto do veículo"}
                className="rounded rounded-b-none"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className=" md:absolute inset-0 flex justify-between  w-full h-full items-center px-4 ">
        <CarouselPrevious className="left-0 bg-transparent border-none hover:bg-transparent" />
        <CarouselNext className="right-0 bg-transparent border-none hover:bg-transparent" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
