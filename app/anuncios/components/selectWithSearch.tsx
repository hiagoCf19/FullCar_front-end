import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Control, Controller } from "react-hook-form";

import { cn } from "@/app/lib/utils";
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
import { Button } from "@/app/base_ui/ui/button";
import { Models } from "../criar/steps/step-1";



interface ComboboxProps {
  name: string;
  control: Control<any>;
  models: Models[]
  setSelectedModel: React.Dispatch<React.SetStateAction<Models | undefined>>
}

export function ControlledCombobox({ name, control, models, setSelectedModel }: ComboboxProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const [open, setOpen] = React.useState(false);
        return (

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
                disabled={models.length === 0}
              >
                {field.value
                  ? field.value
                  : "Selecione um modelo."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Busque pelo nome do modelo" />
                <CommandList>
                  <CommandEmpty>Veículo não encontrado</CommandEmpty>
                  <CommandGroup>
                    {models.map((model) => (
                      <CommandItem
                        key={model.codigo}
                        value={model.nome}
                        onSelect={(currentValue) => {
                          field.onChange(currentValue === field.value ? "" : currentValue);
                          setSelectedModel(model)
                          setOpen(false);

                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            field.value === model.codigo ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {model.nome}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

        );
      }}
    />
  );
}
