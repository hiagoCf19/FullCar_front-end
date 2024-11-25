import { Label } from "@radix-ui/react-label";
import { Input } from "@/app/base_ui/ui/input";
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { Step1FormData } from "@/app/validations/adStepsSchema";
import ControlledSelect from "@/app/base_ui/wrapper_select";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ControlledCombobox } from "../../_components/selectWithSearch";
import { ClientVehicle } from "../page";
import api from "@/app/services/apiService";
import { InputSearchBrand } from "../../_components/inputSearchBrand";

interface RegisterCarProps {
  control: Control<Step1FormData>;
  register: UseFormRegister<Step1FormData>;
  errors: FieldErrors<Step1FormData>;
  getValues: UseFormGetValues<Step1FormData>;
  clientVehicle: ClientVehicle | undefined;
  setValue: UseFormSetValue<Step1FormData>;
  setClientVehicle: Dispatch<SetStateAction<ClientVehicle | undefined>>;
}
export type Models = {
  codigo: string;
  nome: string;
};

const RegisterCar = ({
  control,
  register,
  errors,
  getValues,
  setValue,
  clientVehicle,
  setClientVehicle,
}: RegisterCarProps) => {
  const [models, setModels] = useState<Models[]>([]);
  const [allbrands, setAllbrands] = useState<Models[]>([]); // Tipagem explícita
  const [selectedModel, setSelectedModel] = useState<Models>();
  const [yearModels, setYearsModel] = useState<Models[]>([]);
  const [_, setBrandNotFound] = useState<Boolean>(false);

  const SearchBrands = async (brand: string) => {
    if (!brand) return;
    try {
      const response = await api.get(`fipe/${brand}`);
      setBrandNotFound(false);
      setModels(response.data.modelos);
    } catch (e) {
      setBrandNotFound(true);
      console.error(e);
    }
  };
  useEffect(() => {
    if (!selectedModel) return;
    const searchClientModel = async () => {
      try {
        const response = await api.get(
          `fipe/${getValues("brand")}/${selectedModel?.codigo}`
        );
        setYearsModel(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    searchClientModel();
  }, [selectedModel]);

  const handleSelectedYear = async (selectedYear: any) => {
    if (!selectedYear) return;
    try {
      const response = await api.get(
        `fipe/${getValues("brand")}/${selectedModel?.codigo}/${
          selectedYear?.codigo
        }`
      );
      // Informações finais do veículo
      const data = response.data;
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
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (clientVehicle) {
      setValue("fuel", clientVehicle.fuel);
      setValue("reference_month", clientVehicle.reference_mounth);
    }
  }, [clientVehicle, setValue]);
  const tiposDeCambio = [
    { value: "manual", label: "Manual" },
    { value: "automatico", label: "Automático" },
    { value: "automatizado", label: "Automatizado (Semi-automático)" },
    { value: "cvt", label: "CVT (Transmissão Continuamente Variável)" },
    { value: "dual_clutch", label: "Dual Clutch (Dupla Embreagem)" },
    { value: "sequencial", label: "Sequencial" },
    { value: "4x4", label: "4x4 (Reduzida ou Integral)" },
    { value: "hidramatico", label: "Hidramático" },
  ];
  const tiposDeVeiculo = [
    { value: "suv", label: "SUV" },
    { value: "sedan", label: "Sedan" },
    { value: "hatch", label: "Hatch" },
    { value: "pickup", label: "Pickup" },
    { value: "crossover", label: "Crossover" },
    { value: "coupe", label: "Coupé" },
    { value: "conversivel", label: "Conversível" },
    { value: "minivan", label: "Minivan" },
    { value: "van", label: "Van" },
    { value: "esportivo", label: "Esportivo" },
    { value: "utilitario", label: "Utilitário" },
    { value: "moto", label: "Moto" },
    { value: "caminhao", label: "Caminhão" },
  ];

  return (
    <div className="border w-full p-4 rounded-lg space-y-4">
      <h3 className="font-medium">Prencha os dados do veículo</h3>
      <div className="space-y-3">
        {/* brand */}
        <Label className="text-sm">Marca</Label>
        <InputSearchBrand
          name={"brand"}
          control={control}
          allBrands={allbrands}
          setAllBrands={setAllbrands}
          onBrandSelect={SearchBrands}
        />

        <div className="space-y-1 flex-1">
          <Label className="text-sm">Modelo</Label>
          <ControlledCombobox
            models={models}
            setSelectedModel={setSelectedModel}
            name={"model"}
            control={control}
          />
        </div>

        <div className="flex w-full space-x-4">
          <div className="space-y-1 flex-1">
            <Label className="text-sm">Ano do Modelo </Label>
            <ControlledSelect
              name="model_year"
              control={control}
              options={yearModels.map((modelYear) => {
                const [ano] = modelYear.nome.split(" ");
                return {
                  value: modelYear.codigo,
                  label: ano,
                };
              })}
              onValueChange={(selectedYear) => {
                const selected = yearModels.find(
                  (model) => model.codigo === selectedYear
                );
                handleSelectedYear(selected);
              }}
            />
            {errors.model_year && (
              <span className="text-red-700 text-xs font-medium ">
                Selecione o ano
              </span>
            )}
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
            {errors.fuel && (
              <span className="text-red-700 text-xs font-medium ">
                Selecione o combustível do veículo
              </span>
            )}
          </div>
          {/* gear_box */}
          <div className="space-y-1 flex-1">
            <Label className="text-sm">Câmbio</Label>
            <ControlledSelect
              name="gear_box"
              control={control}
              options={tiposDeCambio}
            />
            {errors.gear_box && (
              <span className="text-red-700 text-xs font-medium ">
                Selecione o câmbio
              </span>
            )}
          </div>
        </div>

        {/* kms / placa */}
        <div className="flex w-full space-x-4 items-center">
          <div className="space-y-1 w-[40%]">
            <Label className="text-sm">Quilômetragem</Label>
            <Input
              type="number"
              placeholder="ex: 80.850 km "
              {...register("kilometers_driven")}
            />
            {errors.kilometers_driven && (
              <span className="text-red-700 text-xs font-medium ">
                {errors.kilometers_driven?.message}
              </span>
            )}
          </div>
          <div className="space-y-1 w-[60%] ">
            <Label className="text-sm">Placa do veículo</Label>
            <Input
              type="text"
              placeholder="ex: BRA0S17"
              {...register("traffic_signs")}
            />
            {errors.traffic_signs && (
              <span className="text-red-700 text-xs font-medium ">
                {errors.traffic_signs?.message}
              </span>
            )}
          </div>
        </div>
        {/* type_of_direction and engine_power */}
        <div className="flex w-full space-x-4">
          <div className="space-y-1 flex-1 ">
            <Label className="text-sm">Potência do motor</Label>
            <Input
              type="string"
              placeholder="ex: 1.0"
              {...register("engine_power")}
            />
            {errors.engine_power && (
              <span className="text-red-700 text-xs font-medium ">
                Informe a potência do motor
              </span>
            )}
          </div>
          <div className="space-y-1 flex-1">
            <Label className="text-sm">Tipo de direção</Label>
            <Input type="text" {...register("type_of_direction")} />
            {errors.type_of_direction && (
              <span className="text-red-700 text-xs font-medium ">
                {errors.type_of_direction?.message}
              </span>
            )}
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
            {errors.car_color && (
              <span className="text-red-700 text-xs font-medium ">
                {errors.car_color?.message}
              </span>
            )}
          </div>
          <div className="space-y-1 flex-1">
            <Label className="text-sm">Tipo de veiculo</Label>
            <ControlledSelect
              name="type_of_vehicle"
              control={control}
              options={tiposDeVeiculo}
            />
            {errors.type_of_vehicle && (
              <span className="text-red-700 text-xs font-medium ">
                Informe o tipo do veículo
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="hidden">
        <Input type="text" {...register("reference_month")} />
      </div>
    </div>
  );
};

export default RegisterCar;
