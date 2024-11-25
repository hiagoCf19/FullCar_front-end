"use client"
import Progress from "@/app/login/components/progress";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/app/base_ui/ui/carousel"

import { useEffect, useState } from "react";
import Autoplay from 'embla-carousel-autoplay'
import { steps } from "@/app/mocks/steps-to-create-ad";
import Image from "next/image";


const FacilitiesItem = () => {
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
      plugins={[
        Autoplay({
          delay: 3000
        })
      ]}>
      <CarouselContent>
        {steps.map((slide, i) => (
          <CarouselItem className="space-y-4 flex w-full  justify-center " key={i}>
            <div className="  w-full h-60 bg-zinc-100 dark:bg-background/10 border-primary border shadow-lg rounded-lg my-2 relative flex items-center">
              <div className="p-2 absolute right-0 top-0">
                <div className="px-4 py-2 rounded-md  bg-primary/60">
                  {i + 1}
                </div>
              </div>
              <div className=" flex flex-col items-center  text-center px-3 w-full">
                <div className="relative h-24 w-[28%]">
                  <Image
                    src={slide.image}
                    alt={slide.span}
                    fill
                    sizes="auto"
                  />
                </div>
                <h2 className="text-2xl font-semibold">{slide.text}</h2>
                <span className="text-muted-foreground">{slide.span}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center py-3">
        {steps.map((_, i) => (
          <Progress
            activated={i + 1 === currentSlide}
            key={i} />
        ))}
      </div>
    </Carousel>

  );
}

export default FacilitiesItem;