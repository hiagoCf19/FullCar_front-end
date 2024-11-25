"use client";

import { useState } from "react";
import { Button } from "@/app/base_ui/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/base_ui/ui/card";
import { Input } from "@/app/base_ui/ui/input";
import { Label } from "@/app/base_ui/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/base_ui/ui/select";
import { Slider } from "@/app/base_ui/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/base_ui/ui/tooltip";

import {
  Calendar,
  Car,
  DollarSign,
  Edit,
  Eye,
  MoreVertical,
  Plus,
  Star,
  Trash2,
} from "lucide-react";
import Header from "../base_ui/_components/header";
import BottomNavigation from "../base_ui/_components/bottom-navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../base_ui/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../base_ui/ui/carousel";
import ImageCarousel from "../base_ui/_components/image-carousel";
import Ad from "../class/AdClass";

// Mock data for car listings

const carListings = [
  {
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
  },
];
export default function Search() {
  const [sortBy, setSortBy] = useState("recent");
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }
  return (
    <div className="h-screen md:overflow-hidden">
      <Header />
      <div className="w-full h-14 md:h-16 border-b border-primary/40" />
      <div className="p-2 sm:p-0 flex flex-col md:flex-row gap-6 md:h-[93h]">
        {/* Sidebar with filters */}

        <aside className="md:bg-border/20 dark:bg-card/40 dark:shadow-primary/40 md:shadow-lg md:shadow-primary/40 border-none w-full md:w-1/5 md:p-4  space-y-6 md:h-[93vh]">
          <div>
            <h2 className="text-lg font-semibold mb-2">Buscar</h2>
            <Input placeholder="Busque por uma marca ou veículo" />
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem
              className="text-lg font-semibold mb-2"
              value="item-1"
            >
              <AccordionTrigger>Filtrar</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="brand">Marca</Label>
                    <Select>
                      <SelectTrigger id="brand">
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="honda">Honda</SelectItem>
                        <SelectItem value="ford">Ford</SelectItem>
                        {/* Add more brands */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Preço</Label>
                    <Slider />
                  </div>
                  <div>
                    <Label htmlFor="year">Ano</Label>
                    <Select>
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Selecione o ano" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        {/* Add more years */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Quilometragem</Label>
                    <Slider
                      defaultValue={[0, 100000]}
                      max={200000}
                      step={5000}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </aside>

        {/* Main content area */}
        <main className="flex-1 md:p-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Buscar</h1>
            <Button className="text-zinc-50">
              <Plus className="mr-2 h-4 w-4" /> Criar um anúncio
            </Button>
          </div>

          {/* Sorting dropdown */}
          <div className="mb-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Mais recentes</SelectItem>
                <SelectItem value="price-asc">Menor preço</SelectItem>
                <SelectItem value="price-desc">Maior preço</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Grid of car listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {carListings.map((ad) => (
              <Card
                key={ad.id}
                className="overflow-hidden bg-border/50 dark:bg-card/40 shadow-primary/20 shadow-lg border-none"
              >
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

                  <div className="flex gap-2"></div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
      <BottomNavigation />
    </div>
  );
}
