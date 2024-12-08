import { Gauge, PaintRoller } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/base_ui/ui/carousel";
import Ad from "../class/AdClass";
import { useEffect, useState } from "react";
import api from "../services/apiService";
import { Vehicle } from "../types/vehicle";
import axios from "axios";
import { Card, CardContent, CardHeader } from "../base_ui/ui/card";
import ImageCarousel from "../base_ui/_components/image-carousel";
import Link from "next/link";
import SkeltonCard from "../anuncios/meus-anuncios/_components/skelton-card";
import { SkeltonHighlightedAds } from "./_components/SkeltonHighlightedAds";

interface Ads {
  ads: Vehicle[];
}
const HighlightedAdsList = () => {
  const [highlightedAds, setHighlightedAds] = useState<Ads>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchClientModel = async () => {
      try {
        const response = await api.get(`/ads`);
        setHighlightedAds(response.data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    searchClientModel();
  }, []);

  return (
    <div className="space-y-4 ">
      <h2 className="text-2xl font-semibold  md:text-4xl ">Destaques</h2>
      <p></p>
      <Carousel>
        <CarouselContent className="p-2">
          {loading ? (
            <>
              <CarouselItem className="md:basis-1/5 basis-1/2 ">
                <SkeltonHighlightedAds />
              </CarouselItem>
              <CarouselItem className="md:basis-1/5 basis-1/2">
                <SkeltonHighlightedAds />
              </CarouselItem>
            </>
          ) : (
            highlightedAds?.ads.map((ad, i) => (
              <CarouselItem key={i} className="md:basis-1/5 basis-1/2 ">
                <Card className=" md:w-60 md:h-[40vh] h-[32vh] flex flex-col space-y-2  shadow-[#0000005d] shadow-md dark:bg-card bg-[#e6e6e6d0]">
                  <CardHeader className="p-0 rounded-b-none">
                    <ImageCarousel images={ad.images} />
                  </CardHeader>

                  <Link href={`/anuncios/${ad.id}`}>
                    <CardContent className="flex flex-col gap-3 p-2 ">
                      <p className="md:text-xl font-medium">
                        {Ad.formatPrice(ad.user_price)}
                      </p>
                      <span className="text-sm text-muted-foreground mb-2 line-clamp-1">
                        {ad.model}
                      </span>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Gauge className="size-4 text-muted-foreground" />
                          <span className="block text-sm">
                            {ad.kilometers_driven} km
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <PaintRoller className="size-4 text-muted-foreground" />
                          <span className="block text-sm">{ad.car_color}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HighlightedAdsList;
