import Progress from "@/app/login/components/progress";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/app/base_ui/ui/carousel"
import { slides } from "@/app/mocks/register-slides";
import { useEffect, useState } from "react";
import Autoplay from 'embla-carousel-autoplay'


const Slides = () => {
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
    <Carousel setApi={setApi} plugins={[
      Autoplay({
        delay: 3000
      })
    ]}>
      <CarouselContent>
        {slides.map(slide => (
          <CarouselItem className="space-y-4" key={slide.title}>
            <h1 className="text-4xl font-semibold ">{slide.title}</h1>
            <p className=" px-20 font-medium text-xl ">{slide.description}
            </p>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center py-3">
        {slides.map((_, i) => (
          <Progress
            activated={i + 1 === currentSlide}
            key={i} />
        ))}
      </div>
    </Carousel>

  );
}

export default Slides;