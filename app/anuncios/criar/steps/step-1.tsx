import { Label } from "@radix-ui/react-label";
import { Input } from "@/app/base_ui/ui/input";
import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import { Step1FormData } from "@/app/validations/adStepsSchema";
import ControlledSelect from "@/app/base_ui/wrapper_select";

interface RegisterCarProps {
  control: Control<Step1FormData>;
  register: UseFormRegister<Step1FormData>;
  errors: FieldErrors<Step1FormData>;
}

const RegisterCar = ({
  control,
  register,
  errors
}: RegisterCarProps) => {
  return (
    <div className="border w-full p-4 rounded-lg space-y-4">
      <h3 className="font-medium">
        Prencha os dados do veículo
      </h3>
      <div className="space-y-3">
        {/* brand and FIPE code */}
        <div className="flex gap-2">
          <div className="space-y-1 flex-1">
            <Label className="text-sm">Código FIPE</Label>
            <Input
              {...register("code_FIPE")}
              placeholder="Código FIPE"
            />
            {errors.code_FIPE &&
              <span className="text-red-700 text-xs font-medium ">
                {errors.code_FIPE.message}
              </span>
            }
          </div>
          <div className="space-y-1 flex-1">
            <Label className="text-sm">Marca</Label>
            <ControlledSelect
              name="brand"
              control={control}
              placeholder="Marca"
              options={[
                { value: "brand1", label: "brand-1" },
                { value: "brand2", label: "brand-2" },
                { value: "brand3", label: "brand-3" }
              ]}
            />
            {errors.brand &&
              <span className="text-red-700 text-xs font-medium ">
                Selecione uma marca
              </span>
            }
          </div>
        </div>
        {/* model */}
        <div className="space-y-1">
          <Label className="text-sm">Modelo</Label>
          <ControlledSelect
            name="model"
            control={control}
            placeholder="Modelo"
            options={[
              { value: "modelo1", label: "modelo-1" },
              { value: "modelo2", label: "modelo-2" },
              { value: "modelo3", label: "modelo-3" }
            ]}
          />
          {errors.model &&
            <span className="text-red-700 text-xs font-medium ">Selecione um modelo</span>
          }

        </div>
        {/* year model */}
        <div className="flex gap-2">
          <div className="space-y-1 flex-1">
            <Label className="text-sm">Ano do Modelo </Label>
            <ControlledSelect
              name="model_year"
              control={control}
              options={[
                { value: "1990", label: "1990" },
                { value: "1992", label: "1992" },
                { value: "1993", label: "1993" }
              ]}
            />
            {errors.model_year &&
              <span className="text-red-700 text-xs font-medium ">
                Selecione o ano
              </span>
            }
          </div>
          <div className="space-y-1 flex-1">
            <Label className="text-sm">Mês de referência</Label>
            <ControlledSelect
              name="reference_month"
              control={control}
              options={[
                { value: "1990", label: "1990" },
                { value: "1992", label: "1992" },
                { value: "1993", label: "1993" }
              ]}
            />
            {errors.reference_month &&
              <span className="text-red-700 text-xs font-medium ">
                Selecione o mês
              </span>
            }

          </div>
        </div>
        {/* gear_box */}
        <div className="space-y-1">
          <Label className="text-sm">Câmbio</Label>
          <ControlledSelect
            name="gear_box"
            control={control}
            options={[
              { value: "automatico", label: "Automático" },
              { value: "manual", label: "Manual" }
            ]}
          />
          {errors.gear_box &&
            <span className="text-red-700 text-xs font-medium ">
              Selecione o câmbio
            </span>
          }

        </div>
        {/* kms / placa */}
        <div className="flex gap-2">
          <div className="space-y-1">
            <Label className="text-sm">Quilômetros rodados</Label>
            <Input
              type="number"
              placeholder="ex: 80.850 km "
              {...register("kilometers_driven")}
            />
            {errors.kilometers_driven &&
              <span className="text-red-700 text-xs font-medium ">
                {errors.kilometers_driven?.message}
              </span>
            }
          </div>
          <div className="space-y-1">
            <Label className="text-sm">Placa do veículo</Label>
            <Input
              type="text"
              placeholder="ex: BRA0S17"
              {...register("traffic_signs")}
            />
            {errors.traffic_signs &&
              <span className="text-red-700 text-xs font-medium ">
                {errors.traffic_signs?.message}
              </span>
            }
          </div>
        </div>
        {/* type_of_direction and engine_power */}
        <div className="flex gap-2">
          <div className="space-y-1 flex-1">
            <Label className="text-sm">Potência do motor</Label>
            <ControlledSelect
              name="engine_power"
              control={control}
              options={[
                { value: "1.0", label: "1.0" },
                { value: "2.0", label: "2.0" }
              ]}
            />
            {errors.engine_power &&
              <span className="text-red-700 text-xs font-medium ">
                Informe a potência do motor
              </span>
            }

          </div>
          <div className="space-y-1 flex-1">
            <Label className="text-sm">Tipo de direção</Label>
            <Input
              type="text"
              {...register("type_of_direction")}
            />
            {errors.type_of_direction &&
              <span className="text-red-700 text-xs font-medium ">
                {errors.type_of_direction?.message}
              </span>
            }

          </div>
        </div>
        <div className="space-y-1">
          <Label className="text-sm">Combustível</Label>
          <ControlledSelect
            name="fuel"
            control={control}
            options={[
              { value: "alcool", label: "Álcool" },
              { value: "gasolina", label: "Gasolina" },
              { value: "flex", label: "Flex" }
            ]}
          />
          {errors.fuel &&
            <span className="text-red-700 text-xs font-medium ">
              Selecione o combustível do veículo
            </span>
          }
        </div>
        {/* type_of_vehicle and color */}
        <div className="flex gap-2">
          <div className="space-y-1 flex-1">
            <Label className="text-sm">Cor do veículo</Label>
            <Input
              type="text"
              placeholder="ex: Branco"
              {...register("car_color")}
            />
            {errors.car_color &&
              <span className="text-red-700 text-xs font-medium ">
                {errors.car_color?.message}
              </span>
            }
          </div>
          <div className="space-y-1 flex-1">
            <Label className="text-sm">Tipo de veiculo</Label>
            <ControlledSelect
              name="type_of_vehicle"
              control={control}
              options={[
                { value: "1.0", label: "1.0" },
                { value: "2.0", label: "2.0" }
              ]}
            />
            {errors.type_of_vehicle &&
              <span className="text-red-700 text-xs font-medium ">
                Informe o tipo do veículo
              </span>
            }
          </div>
        </div>
      </div>
    </div>);
}

export default RegisterCar;