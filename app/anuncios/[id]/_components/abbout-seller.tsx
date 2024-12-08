import { MessageCircle, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/base_ui/ui/card";
import { Button } from "@/app/base_ui/ui/button";

interface AboutSellerProps {
  name: string;
  memberSince: string;
  totalAds: number;
  location?: string; // Campo opcional
  verified?: boolean; // Campo opcional para conta verificada
}

export default function AboutSeller({
  name,
  memberSince,
  totalAds,
  location = "Localização não informada",
  verified = false,
}: AboutSellerProps) {
  return (
    <Card className="w-full mx-auto dark:bg-background">
      <CardHeader className="text-xl font-semibold">
        Informações do vendedor
      </CardHeader>
      <CardContent>
        {/* Nome do vendedor e selo de verificado */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold flex items-center gap-2">
            {name}{" "}
            {verified && (
              <span className="text-blue-500 text-xs bg-blue-100 px-2 py-1 rounded-full">
                Verificado
              </span>
            )}
          </h2>
          <p className="text-muted-foreground text-sm">{location}</p>
        </div>
        {/* Estatísticas do vendedor */}
        <div className="mt-4">
          <p className="text-sm">
            <span className="font-bold">Anúncios publicados:</span> {totalAds}
          </p>
          <p className="text-sm">
            <span className="font-bold">Membro desde:</span> {memberSince}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
