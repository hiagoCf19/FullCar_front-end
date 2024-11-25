"use client";

import BottomNavigation from "@/app/base_ui/_components/bottom-navigation";
import Header from "@/app/base_ui/_components/header";
import Loading from "@/app/base_ui/_components/loading";
import api from "@/app/services/apiService";
import { Vehicle } from "@/app/types/vehicle";
import { useEffect, useState } from "react";
import Ad from "@/app/class/AdClass";
import { Calendar, Car, Eye, PenIcon, Trash2 } from "lucide-react";
import ImageCarousel from "@/app/base_ui/_components/image-carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/base_ui/ui/card";
import { Badge } from "@/app/base_ui/ui/badge";
import { Button } from "@/app/base_ui/ui/button";
import SkeltonCard from "./_components/skelton-card";
import { UseSession } from "@/app/hooks/useSession";

const MyAdsPage = () => {
  const [ads, setAds] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { userDetails } = UseSession();

  useEffect(() => {
    const searchUserAds = async () => {
      if (!userDetails?.id) return;
      try {
        const response = await api.get(`ads/user/${userDetails?.id}`);
        setAds(response.data);
      } catch (error) {
        setLoading(false);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    searchUserAds();
  }, [userDetails?.id]);
  const onDelete = (adId: number) => {
    console.log("delete to ad id", adId);
  };
  const onEdit = (adId: number) => {
    console.log("patch to ad id: ", adId);
  };

  return (
    <div className="md:min-h-screen ">
      <Header />
      <div className="w-full h-14 md:h-16 border-b border-primary/40" />
      <main className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-6">Meus Anúncios</h1>
        {loading ? (
          <div className="space-y-5">
            <SkeltonCard />
            <SkeltonCard />
            <SkeltonCard />
          </div>
        ) : ads.length > 0 ? (
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ads.map((ad) => (
              <Card
                key={ad.id}
                className="overflow-hidden bg-border/50 dark:bg-card/40 shadow-primary/30 shadow-lg border-none"
              >
                <Badge className="bg-green-500 hover:bg-green-500/80 absolute m-2 z-30">
                  Ativo
                </Badge>

                <CardHeader className="p-0">
                  <ImageCarousel images={ad.images} />
                </CardHeader>
                <CardContent className="px-4">
                  <h2 className="text-xl font-semibold mt-2">{ad.model}</h2>
                  <div className="mt-6 flex items-center justify-between mb-2">
                    <span className="font-bold ">
                      {Ad.formatPrice(ad.user_price)}
                    </span>

                    <div className="flex items-center">
                      <Car className="size-4 mr-1" />
                      <span>{ad.kilometers_driven.toLocaleString()} Km</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Anunciado em {Ad.formatDate(ad.created_at)}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button
                    variant="link"
                    size="sm"
                    className="text-muted-foreground"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Ver
                  </Button>

                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant={"outline"}
                      onClick={() => onEdit(ad.id)}
                    >
                      <PenIcon className="size-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant={"destructive"}
                      onClick={() => onDelete(ad.id)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">
            <p className="text-xl">Nenhum anúncio encontrado</p>
            <Button className="mt-4">Criar novo anúncio</Button>
          </div>
        )}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default MyAdsPage;
