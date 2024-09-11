import { Button } from "@/app/base_ui/ui/button";
import { Input } from "@/app/base_ui/ui/input";
import { Search } from "lucide-react";
import { FaCar, FaMotorcycle, FaTruck } from "react-icons/fa";

const VehicleFilter = () => {
  return (
    <>
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
    </>
  );
}

export default VehicleFilter


