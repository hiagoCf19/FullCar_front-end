import { Label } from "@radix-ui/react-label";
import { Input } from "@/app/base_ui/ui/input";
import { Control, FieldErrors, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { Step1FormData } from "@/app/validations/adStepsSchema";
import ControlledSelect from "@/app/base_ui/wrapper_select";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ControlledCombobox } from "../../components/selectWithSearch";
import { ClientVehicle } from "../page";


interface RegisterCarProps {
  control: Control<Step1FormData>;
  register: UseFormRegister<Step1FormData>;
  errors: FieldErrors<Step1FormData>;
  getValues: UseFormGetValues<Step1FormData>
  clientVehicle: ClientVehicle | undefined;
  setValue: UseFormSetValue<Step1FormData>;
  setClientVehicle: Dispatch<SetStateAction<ClientVehicle | undefined>>
}
export type Models = {
  codigo: string;
  nome: string
}
const RegisterCar = ({
  control,
  register,
  errors,
  getValues,
  setValue,
  clientVehicle,
  setClientVehicle
}: RegisterCarProps) => {
  const [models, setModels] = useState<Models[]>([])
  const [selectedModel, setSelectedModel] = useState<Models>()
  const [yearModels, setYearsModel] = useState<Models[]>([])
  const [brandNotFound, setBrandNotFound] = useState<Boolean>(false)
  console.log(yearModels.length)

  const SearchBrands = async (brand: string) => {
    if (!brand) return
    try {
      const response = await fetch(`https://fullcar-backend.onrender.com/fipe/${brand}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setBrandNotFound(false)
      const data = await response.json();
      setModels(data.modelos)
    }
    catch (e) {
      setBrandNotFound(true)
      console.error(e);
    }
  }
  useEffect(() => {
    if (!selectedModel) return;
    const searchClientModel = async () => {
      try {
        const response = await fetch(`https://fullcar-backend.onrender.com/fipe/${getValues('brand')}/${selectedModel?.codigo}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setYearsModel(data)
      }
      catch (e) {
        console.error(e);
      }
    }
    searchClientModel()
  }, [selectedModel])

  const handleSelectedYear = async (selectedYear: any) => {
    if (!selectedYear) return
    try {
      const response = await fetch(`https://fullcar-backend.onrender.com/fipe/${getValues('brand')}/${selectedModel?.codigo}/${selectedYear?.codigo}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("algo deu errado");
      }
      // Informações finais do veículo
      const data = await response.json();
      setClientVehicle({
        tipoVeiculo: data.TipoVeiculo,
        fipe_price: data.Valor,
        brand: data.Marca,
        model: data.Modelo,
        year_model: data.AnoModelo,
        fuel: data.Combustivel,
        code_fipe: data.CodigoFipe,
        reference_mounth: data.MesReferencia,
      });
    }
    catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (clientVehicle) {
      setValue('fuel', clientVehicle.fuel);
      setValue('reference_month', clientVehicle.reference_mounth);
    }
  }, [clientVehicle, setValue]);

  return (
    <div className="border w-full p-4 rounded-lg space-y-4">
      <h3 className="font-medium">
        Prencha os dados do veículo
      </h3>
      <div className="space-y-3">
        {/* brand */}
        <div className="space-y-1 flex-1">
          <Label className="text-sm">Marca</Label>
          <Input
            {...register("brand")}
            placeholder="Marca"
            onBlur={() => {
              const brandValue = getValues('brand');
              SearchBrands(brandValue);
            }}
          />
          {errors.brand &&
            <span className="text-red-700 text-xs font-medium ">
              {errors.brand.message}
            </span>
          }
          {brandNotFound && <span className="text-red-700 text-xs font-medium ">
            Marca não encontrada. Verifique o nome e tente novamente.
          </span>}
        </div>
        <div className="space-y-1 flex-1">
          <Label className="text-sm">Modelo</Label>
          <ControlledCombobox
            models={models}
            setSelectedModel={setSelectedModel}
            name={"model"}
            control={control} />

        </div>

        <div className="flex w-full space-x-4">
          <div className="space-y-1 flex-1">
            <Label className="text-sm">Ano do Modelo </Label>
            <ControlledSelect
              name="model_year"
              control={control}
              options={yearModels.map((modelYear) => {
                const [ano] = modelYear.nome.split(' ');
                return {
                  value: modelYear.codigo,
                  label: ano,
                };
              })}
              onValueChange={(selectedYear) => {
                const selected = yearModels.find((model) => model.codigo === selectedYear);
                handleSelectedYear(selected);
              }}
            />
            {errors.model_year &&
              <span className="text-red-700 text-xs font-medium ">
                Selecione o ano
              </span>
            }
          </div>
          <div className="space-y-1 flex-1">
            <Label className="text-sm">Código da tabela FIPE</Label>
            <Input
              disabled
              type="text"
              placeholder=""
              readOnly
              value={clientVehicle?.code_fipe}
            />
          </div>
        </div>
        {/* fuel and fipe_code */}
        <div className="flex w-full space-x-4">
          <div className="space-y-1 flex-1">
            <Label className="text-sm">Combustível</Label>
            <Input
              type="text"
              placeholder="Combustível"
              {...register("fuel")}
            />
            {errors.fuel &&
              <span className="text-red-700 text-xs font-medium ">
                Selecione o combustível do veículo
              </span>
            }
          </div>
          {/* gear_box */}
          <div className="space-y-1 flex-1">
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


        </div>

        {/* kms / placa */}
        <div className="flex w-full space-x-4">
          <div className="space-y-1 flex-1">
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
          <div className="space-y-1 ">
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
        <div className="flex w-full space-x-4">
          <div className="space-y-1 flex-1 ">
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

        {/* type_of_vehicle and color */}
        <div className="flex space-x-4 w-full">
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
                { value: "hatch", label: "Hatchback" },
                { value: "suv", label: "SUV" }
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
      <div className="hidden">
        <Input
          type="text"
          {...register("reference_month")}
        />
      </div>
    </div>);
}

export default RegisterCar;