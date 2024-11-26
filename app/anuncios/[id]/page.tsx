"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/base_ui/ui/card";

import {
  Fuel,
  Gauge,
  PaintBucket,
  Car,
  StarIcon,
  CarIcon,
  PaletteIcon,
  Code2,
  FileDigit,
  CircleGaugeIcon,
  CarFront,
} from "lucide-react";
import { ImageGallery } from "./_components/image-gallery";
import { Vehicle } from "@/app/types/vehicle";
import { Badge } from "@/app/base_ui/ui/badge";
import Ad from "@/app/class/AdClass";
import { Separator } from "@radix-ui/react-select";
import Header from "@/app/base_ui/_components/header";
import BottomNavigation from "@/app/base_ui/_components/bottom-navigation";
import { Button } from "@/app/base_ui/ui/button";
import Table from "./_components/fake-table";
import Footer from "@/app/base_ui/_components/footer";

function AdPage() {
  const car = {
    id: 18,
    title: "Vendo Elantra 2.0 2015 carro único leia o anúncio",
    description:
      "Esse carro aí é o Hyundai Elantra 2013/2014, motor 2.0, com 60.000km originais. Um carro único para quem quer pagar o GOSTO de ter um carro desse. Um carro que dá prazer de dirigir pelo seu conforto, confiabilidade, tamanho, presença, enfim. Vamos aos fatos:",
    user_price: 8000000.0,
    brand: "Hyundai",
    code_fipe: "015104-1",
    fuel: "Gasolina",
    model: "Elantra GLS 2.0 16V Flex Aut.",
    model_year: 2015,
    fipe_price: 6561200.0,
    reference_month: "novembro de 2024",
    created_at: "2024-11-24T19:09:58.331899",
    kilometers_driven: 60800.0,
    type_of_vehicle: "1",
    traffic_signs: "BR4S1L",
    car_color: "Branco",
    type_of_direction: "Elétirca",
    gear_box: "automatico",
    engine_power: "2",
    images: [
      {
        id: 14,
        url: "https://upload-archive-fullcar-backend.s3.amazonaws.com/5c0a3269-76a9-4382-aabb-60653b6308ee.png",
        ad_id: 18,
      },
      {
        id: 15,
        url: "https://upload-archive-fullcar-backend.s3.amazonaws.com/9957fbaa-0d6e-49c3-b1b5-d4c0bf78a771.png",
        ad_id: 18,
      },
    ],
  };
  return (
    <>
      <Header />
      <div className="w-full h-14 md:h-16 border-b border-primary/40" />

      <div className="w-full">
        <ImageGallery images={car.images} />
        <div className="p-4 space-y-4 dark:text-zinc-200 text-zinc-700 h-full ">
          <div className="flex w-full justify-between items-center">
            <h3 className="text-3xl font-bold">
              {Ad.formatPrice(car.user_price)}
            </h3>
            <Button className="bg-transparent">
              <StarIcon />
            </Button>
          </div>
          <h4 className="text-xl">{car.model}</h4>
          <div className="space-y-4">
            <div>
              <span className="mt-18 text-muted-foreground">
                Anunciado em {Ad.formatDate(car.created_at)}
              </span>
            </div>
            <div className="w-full  text-justify flex flex-col justify-start space-y-2">
              <h3 className="font-bold text-xl">Descrição</h3>
              <span className=" text-muted-foreground">{car.description}</span>
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
                <Table label="Categoria" content={car.type_of_vehicle} />
                <Table label="Marca" content={car.brand} />
                <Table label="Ano" content={car.model_year} />
                <Table label="Cor" content={car.car_color} />
                <Table label="FIPE" content={car.code_fipe} />
                <Table label="Quilometragem" content={car.kilometers_driven} />
                <Table label="Direção" content={car.type_of_direction} />
                <Table label="Combustível" content={car.fuel} />
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
