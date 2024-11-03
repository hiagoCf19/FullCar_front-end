"use client"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/app/base_ui/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
interface BrandsListProps {
  brands: {
    name: string;
    image: string;
  }[]
}



const BrandList = ({ brands }: BrandsListProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [_, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length)
    setCurrentSlide(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <Carousel
      setApi={setApi}
      className="-mx-40 py-1  bg-primary/20"
      plugins={[
        Autoplay({
          delay: 1000
        })
      ]}>

      <CarouselContent className="space-x-4">
        {brands.map((brand, i) => (
          <CarouselItem key={i} className={`basis-${i + i}/${brands.length} flex items-center`}>
            <img src={brand.image} alt={brand.name} className="aspect-square w-10 h-10" />
            <i>{brand.name}</i>

          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default BrandList;