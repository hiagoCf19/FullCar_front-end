import { Card, CardContent, CardHeader } from "@/app/base_ui/ui/card";
import { Skeleton } from "@/app/base_ui/ui/skeleton";
import { Gauge, PaintRoller } from "lucide-react"; // Importando ícones

function SkeltonHighlightedAds() {
  return (
    <Card className=" md:w-60 md:h-[40vh] h-[32vh] flex flex-col space-y-2  shadow-[#0000005d] shadow-md dark:bg-card bg-[#e6e6e6d0]">
      <Skeleton className="h-48 rounded-md" />{" "}
      {/* Esqueleto para o ImageCarousel */}
      <CardHeader className="p-0 rounded-b-none">
        <Skeleton className=" mx-2 h-3 w-3/4" /> {/* Título do anúncio */}
      </CardHeader>
      <CardContent className="flex flex-col md:gap-3 p-2">
        <Skeleton className="h-2 w-1/2 mb-2 md:mb-0" /> {/* Preço */}
        <Skeleton className="h-2 w-3/4 mb-2" /> {/* Modelo */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Skeleton className="h-4 w-4 rounded-full" />{" "}
            {/* Ícone de quilometragem */}
            <Skeleton className="h-2 w-16" /> {/* Quilometragem */}
          </div>
          <div className="flex gap-2 items-center">
            <Skeleton className="h-4 w-4 rounded-full" />{" "}
            {/* Ícone de quilometragem */}
            <Skeleton className="h-2 w-16" /> {/* Quilometragem */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export { SkeltonHighlightedAds };
