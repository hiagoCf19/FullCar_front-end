import { Button } from "@/app/base_ui/ui/button";
import { Input } from "@/app/base_ui/ui/input";
import { Search } from "lucide-react";
import { FaCar, FaMotorcycle, FaTruck } from "react-icons/fa";

const VehicleFilter = () => {
  return (
    <>
      <div className="space-y-5 overflow-hidden">
        <div className="flex  gap-1">
          <Button className="flex-1 text-primary   flex gap-1 shadow-md shadow-black/30 border-primary/40 dark:text-zinc-50" variant={"outline"} >
            <FaCar className="size-4" />
            Carros
          </Button>
          <Button className="flex-1 text-primary   flex gap-2 shadow-md shadow-black/30 border-primary/40 dark:text-zinc-50" variant={"outline"} >
            <FaMotorcycle className="size-4" />
            Motos
          </Button>
          <Button className="flex-1 text-primary   flex gap-2 shadow-md shadow-black/30 border-primary/40 dark:text-zinc-50" variant={"outline"} >
            <FaTruck className="size-4" />
            Pesados
          </Button>
        </div>
        <div className="flex items-center gap-2">

          <Input className=" bg-transparent outline-none focus-visible:ring-1 border-primary/40 mb-2 shadow-md shadow-black/30" placeholder="Descreva o veículo" />
          <Button size={"icon"} variant={"outline"} className="border-primary/40 shadow-md shadow-black/30 mb-2">
            <Search className="size-5 text-primary " />
          </Button>
        </div>
        <Button className="w-full sm:hidden text-zinc-50 font-medium text-md">
          Ver ofertas
        </Button>

      </div>
    </>
  );
}

export default VehicleFilter


