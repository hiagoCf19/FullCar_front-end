"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/app/base_ui/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/base_ui/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/base_ui/ui/popover";
import { cn } from "@/app/lib/utils";
import api from "@/app/services/apiService";
import { Models } from "../criar/steps/step-1";
import { Control, Controller } from "react-hook-form";
import Loading from "@/app/base_ui/_components/loading";
import { toast } from "sonner";

interface InputSearchBrandProps {
  name: string;
  control: Control<any>;
  allBrands: Models[];
  setAllBrands: (allBrands: Models[]) => void;
  onBrandSelect: (brand: string) => void;
}
export function InputSearchBrand({
  name,
  control,
  allBrands,
  setAllBrands,
  onBrandSelect,
}: InputSearchBrandProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [loading, setLoading] = React.useState<boolean>(true);
  const loadAllBrands = async () => {
    try {
      const response = await api.get("/fipe/marcas");
      setAllBrands(response.data);
      setLoading(false);
    } catch (error) {
      toast.error("Ops! Algo deu errado ao buscar a marca");
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const [open, setOpen] = React.useState(false);
        return (
          <Popover
            open={open}
            onOpenChange={(isOpen) => {
              setOpen(isOpen);
              if (isOpen) {
                loadAllBrands(); // Carrega as marcas ao abrir o Popover
              }
            }}
          >
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                {field.value ? field.value : "Selecione um modelo."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className=" p-0">
              <Command>
                <CommandInput placeholder="Busque por uma marca" />
                <CommandList>
                  {loading ? (
                    <div className="flex w-full justify-center p-4">
                      <Loading />
                    </div>
                  ) : (
                    allBrands.map((brand) => (
                      <CommandItem
                        key={brand.codigo}
                        value={brand.nome}
                        onSelect={(currentValue) => {
                          field.onChange(
                            currentValue === field.value ? "" : currentValue
                          );
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                          onBrandSelect(brand.nome);
                        }}
                      >
                        {brand.nome}
                        <Check
                          className={cn(
                            "ml-auto",
                            value === brand.codigo ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))
                  )}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        );
      }}
    />
  );
}
