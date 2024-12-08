"use client";
import { StarIcon } from "lucide-react";
import Ad from "@/app/class/AdClass";
import Header from "@/app/base_ui/_components/header";
import BottomNavigation from "@/app/base_ui/_components/bottom-navigation";
import { Button } from "@/app/base_ui/ui/button";
import Table from "./_components/fake-table";
import Footer from "@/app/base_ui/_components/footer";
import { useEffect, useState } from "react";
import api from "@/app/services/apiService";
import { Vehicle } from "@/app/types/vehicle";
import Loading from "@/app/base_ui/_components/loading";
import Image from "next/image";
import { ImageGallery } from "./_components/image-gallery";
import ContactSeller from "./_components/contact-seller";
import AbboutSeller from "./_components/abbout-seller";
import AboutSeller from "./_components/abbout-seller";

function AdPage({ params }: { params: { id: string } }) {
  const [ad, setAd] = useState<Vehicle>();
  const [loading, setLoading] = useState<boolean>(true);
  const [fotoFocada, setFotoFocada] = useState(0);
  useEffect(() => {
    const searchClientModel = async () => {
      try {
        const response = await api.get(`/ads/${params.id}`);
        setAd(response.data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    searchClientModel();
  }, []);
  const handleChatClick = () => {
    // Implement your chat opening logic here
    console.log("Opening chat...");
  };
  return loading ? (
    <div>
      <Header />
      <div className="w-full h-[90vh] flex items-center justify-center">
        <Loading className="w-12 h-12" />
      </div>
    </div>
  ) : (
    <>
      <Header />
      <div className="w-full h-14 md:h-16 border-b border-primary/40" />

      <div className="w-full md:px-40 ">
        <h1 className="py-4 px-2 md:px-0 text-bold text-2xl truncate font-bold ">
          {ad?.title}
        </h1>
        <div className="flex space-x-4">
          <ImageGallery
            images={ad?.images || []}
            fotoFocada={fotoFocada}
            onFotoClick={setFotoFocada}
          />

          <div className="hidden md:flex flex-col w-[25%] gap-2">
            <ContactSeller
              name="John Doe"
              email="john@example.com"
              photoUrl="/john-doe.jpg"
              whatsappNumber="5551234567890"
              onChatClick={handleChatClick}
            />
            <AboutSeller
              name="João da Silva"
              memberSince="Janeiro de 2022"
              totalAds={25}
              location="São Paulo, SP"
              verified={true}
            />
          </div>
        </div>

        <div className="py-4 space-y-4 dark:text-zinc-200 text-zinc-700 h-full ">
          <div className="flex w-full justify-between items-center">
            <h3 className="text-3xl font-bold">
              {Ad.formatPrice(ad?.user_price as number)}
            </h3>
            <Button className="bg-transparent">
              <StarIcon />
            </Button>
          </div>
          <h4 className="text-xl">{ad?.model}</h4>
          <div className="space-y-4">
            <div>
              <span className="mt-18 text-muted-foreground">
                Anunciado em {Ad.formatDate(ad?.created_at as string)}
              </span>
            </div>
            <div className="w-full  text-justify flex flex-col justify-start space-y-2">
              <h3 className="font-bold text-xl">Descrição</h3>
              <span className=" text-muted-foreground">{ad?.description}</span>
              <Button
                variant={"link"}
                className="px-0 mt-2 text-start justify-start text-base"
              >
                Ver descrição completa
              </Button>
            </div>
            <div className="space-y-4">
              <h3>Detalhes</h3>
              <div className="flex flex-col space-y-2">
                <Table
                  label="Categoria"
                  content={ad?.type_of_vehicle as string}
                />
                <Table label="Marca" content={ad?.brand as string} />
                <Table label="Ano" content={ad?.model_year as number} />
                <Table label="Cor" content={ad?.car_color as string} />
                <Table label="FIPE" content={ad?.code_fipe as string} />
                <Table
                  label="Quilometragem"
                  content={ad?.kilometers_driven as number}
                />
                <Table
                  label="Direção"
                  content={ad?.type_of_direction as string}
                />
                <Table label="Combustível" content={ad?.fuel as string} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Footer />
      </div>

      <BottomNavigation />
    </>
  );
}
export default AdPage;
