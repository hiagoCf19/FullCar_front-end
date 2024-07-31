"use client"
import Progress from "@/app/login/components/progress";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel"

import { useEffect, useState } from "react";
import Autoplay from 'embla-carousel-autoplay'
import { steps } from "@/app/mocks/steps-to-create-ad";
import { Button } from "@/app/components/ui/button";


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
          <CarouselItem className="space-y-4 flex w-full  justify-center " key={slide.text}>
            <div className="  w-[80%] h-60 bg-zinc-100 dark:bg-background dark:shadow-md dark:shadow-primary/50 shadow-lg rounded-lg my-2">
              <div className="flex justify-end p-2">
                <Button className="bg-primary/60">{i + 1}</Button>

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