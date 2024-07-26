"use client"
import Image from "next/image";
import Header from "./components/header";
import { Button } from "./components/ui/button";
import { FaCar, FaMotorcycle, FaTruck } from "react-icons/fa";
import { Search } from "lucide-react";
import { Input } from "./components/ui/input";




export default function Home() {
  return (
    <>
      <Header />
      <div className="space-y-6 px-4">
        <div className="w-ful h-44 relative -mx-4">
          <Image src="./bg.svg" alt="banner com casal dirigindo" fill className="object-cover" />
        </div>
        <h2 className="text-2xl font-semibold">Busque por
          <a className="text-primary"> texto dinâmico ajishbqosd</a>
        </h2>
        <div className="space-y-5">
          <div className="flex space-x-4">
            <Button className="flex-1 text-primary  flex gap-2 shadow-md shadow-black/30" variant={"outline"} >
              <FaCar className="size-5" />
              Carros
            </Button>
            <Button className="flex-1 text-primary  flex gap-2 shadow-md shadow-black/30" variant={"outline"} >
              <FaMotorcycle className="size-5" />
              Motos
            </Button>
            <Button className="flex-1 text-primary flex gap-2 shadow-md shadow-black/30" variant={"outline"} >
              <FaTruck className="size-5" />
              Pesados
            </Button>
          </div>
          <div className="flex items-center gap-2">

            <Input className=" bg-transparent outline-none focus-visible:ring-1 border-primary" placeholder="Descreva o veículo" />
            <Button size={"icon"} variant={"outline"} className="border-primary">
              <Search className="size-5 text-primary " />
            </Button>
          </div>
          <Button className="w-full text-zinc-50 font-medium text-md">
            Ver ofertas
          </Button>

        </div>
      </div>


    </>
  );
}
