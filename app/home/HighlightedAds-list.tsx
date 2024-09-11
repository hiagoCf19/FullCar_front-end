import { Gauge, PaintRoller } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/base_ui/ui/carousel";
import Ad from "../class/AdClass";


const HighlightedAdsList = () => {
  const MockAds = {
    "ads": [
      {
        "id": 23,
        "title": "Fiat Mobi 1.0 evo flex like manual - 2022 / 2023",
        "description": "O Fiat Mobi é um compacto perfeito para quem busca um carro ágil, econômico e com design moderno. Ideal para o trânsito urbano, o Mobi combina eficiência de combustível com um desempenho dinâmico, tornando-o uma excelente escolha para quem valoriza economia e praticidade no dia a dia.",
        "images": [
          "https://img.olx.com.br/images/89/891427064966858.jpg",
          "https://img.olx.com.br/images/94/946489305430231.jpg",
          "https://img.olx.com.br/images/94/946408548700637.jpg",
          "https://img.olx.com.br/images/94/941432066884957.jpg",
          "https://img.olx.com.br/images/94/941429181044923.jpg",
          "https://img.olx.com.br/images/94/948449666372782.jpg",
          "https://img.olx.com.br/images/94/945423665845029.jpg",
          "https://img.olx.com.br/images/94/949415664044342.jpg",
          "https://img.olx.com.br/images/94/944456308173866.jpg",
          "https://img.olx.com.br/images/94/942434661210646.jpg",
          "https://img.olx.com.br/images/94/946493540486933.jpg",
          "https://img.olx.com.br/images/94/940432783909767.jpg",
          "https://img.olx.com.br/images/94/942423548566014.jpg"
        ],
        "user_price": 51290.0,
        "brand": "Fiat",
        "code_fipe": "123456-7",
        "fuel": "flex",
        "model": "FIAT MOBI LIKE 1.0 FIRE FLEX 5P",
        "model_year": 2023,
        "fipe_price": 53784.0,
        "reference_month": "Maio de 2024",
        "created_at": "2024-07-28T16:07:49.168056",
        "kilometers_driven": 80.850,
        "type_of_vehicle": "Hatch",
        "traffic_signs": "FBR2A29",
        "car_color": "Prata",
        "type_of_direction": "Hidráulica",
        "gear_box": "Manual",
        "engine_power": 1.0
      },
      {
        "id": 24,
        "title": "Hyundai Hb20 2022 1.0 12v flex vision manual",
        "description": "O Hyundai HB20 é um hatchback versátil que oferece uma combinação ideal de estilo, conforto e eficiência. Com um design moderno e arrojado, o HB20 se destaca tanto no trânsito urbano quanto em viagens mais longas. Equipado com tecnologia avançada e um motor eficiente, este carro proporciona uma condução suave e econômica. Ideal para quem busca praticidade sem abrir mão de desempenho, o Hyundai HB20 é a escolha certa para o dia a dia e aventuras de fim de semana.",
        "images": [
          "https://img.olx.com.br/images/58/586402186379142.jpg",
          "	https://img.olx.com.br/images/58/584434183340938.jpg",
          "https://img.olx.com.br/images/58/582494662750177.jpg",
          " https://img.olx.com.br/images/58/587461426229558.jpg",
          "https://img.olx.com.br/images/58/584426782722682.jpg",
          "https://img.olx.com.br/images/58/588414066291675.jpg",
          "https://img.olx.com.br/images/58/589427781379231.jpg",
          "https://img.olx.com.br/images/59/595462429299533.jpg",
          "https://img.olx.com.br/images/58/584475067797820.jpg",
          "https://img.olx.com.br/images/59/594498543668547.jpg",
          "https://img.olx.com.br/images/59/598408909811503.jpg",
          "https://img.olx.com.br/images/58/585422904605925.jpg",
          "https://img.olx.com.br/images/59/590403429449199.jpg"
        ],
        "user_price": 63990.0,
        "brand": "Hyundai",
        "code_fipe": "654321-0",
        "fuel": "flex",
        "model": "HYUNDAI HB20 VISION 1.0 FLEX 12V MEC",
        "model_year": 2022,
        "fipe_price": 62445.0,
        "reference_month": "Fevereiro de 2022",
        "created_at": "2024-07-28T16:39:56.489417",
        "kilometers_driven": 68.531,
        "type_of_vehicle": "Hatch",
        "traffic_signs": "FBR2A26",
        "car_color": "Prata",
        "type_of_direction": "Elétrica",
        "gear_box": "Manual",
        "engine_power": 1.0
      }
    ]
  }

  return (
    <div className="space-y-4 ">
      <h2 className="text-2xl font-semibold text-foreground">Destaques</h2>
      <div className="flex overflow-x-scroll gap-4  [&::-webkit-scrollbar]:hidden">
        {MockAds.ads.map(ad => (
          <div className="min-w-60 flex flex-col space-y-4" key={ad.id}>
            <Carousel className="relative">
              <CarouselContent>
                {ad.images.map(image => (
                  <CarouselItem key={image}>
                    <div className="relative w-full h-44 ">
                      <img src={image} alt="foto do carro" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className=" absolute inset-0 flex justify-between  w-full h-full items-center px-4">
                <CarouselPrevious className="left-0 bg-transparent border-none hover:bg-transparent" />
                <CarouselNext className="right-0 bg-transparent border-none hover:bg-transparent" />
              </div>

            </Carousel>
            <div className="flex flex-col gap-3">

              <p className="text-lg font-normal">{Ad.formatPrice(ad.user_price)}</p>
              <span className="text-sm text-muted-foreground">{ad.title}</span>

              <div className="flex items-center justify-between px-2">
                <div className="flex gap-2">
                  <Gauge className="size-4 text-muted-foreground" />
                  <span className="block text-sm">{ad.kilometers_driven.toFixed(3)} km</span>
                </div>
                <div className="flex gap-2">
                  <PaintRoller className="size-4 text-muted-foreground" />
                  <span className="block text-sm">{ad.car_color}</span>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighlightedAdsList;