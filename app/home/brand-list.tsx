"use client"
import { useState } from "react";
import BrandItem from "./brand-item";
import { Button } from "@/app/base_ui/ui/button";
interface BrandsListProps {
  brands: {
    name: string;
    image: string;
  }[]
}



const BrandList = ({ brands }: BrandsListProps) => {
  const [numberOfVisibleBrands, setNumberOfVisibleBrands] = useState(9);
  return (
    <div className="space-y-4 ">
      <h2 className="text-2xl font-semibold text-foreground">Busque por marca</h2>
      <div className="flex  gap-4">
        <div className="grid grid-cols-3 place-items-center min-w-full gap-y-4">
          {brands.slice(0, numberOfVisibleBrands).map(brand => (
            <BrandItem brand={brand} key={brand.name} />
          ))}
        </div>
      </div>
      {numberOfVisibleBrands <= 9 ?
        <Button
          className="text-lg font-semibold flex justify-center w-full"
          variant={"link"}
          onClick={() => setNumberOfVisibleBrands(brands.length)}
        >
          Ver mais marcas de carros

        </Button>
        :
        <Button
          className="text-lg font-semibold flex justify-center w-full"
          variant={"link"}
          onClick={() => setNumberOfVisibleBrands(9)}
        >
          Ver menos marcas de carros

        </Button>
      }
    </div>
  );
}

export default BrandList;