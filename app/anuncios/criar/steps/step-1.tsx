import { Label } from "@radix-ui/react-label";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"
const RegisterCar = () => {
  return (<div className="border w-full p-4 rounded-lg space-y-4">
    <h3 className="font-medium">Prencha os dados do veículo</h3>
    <form className="space-y-3">
      {/* brand and FIPE code */}
      <div className="flex gap-2">
        <div className="space-y-1 flex-1">
          <Label className="text-sm">Código FIPE</Label>
          <Input type="text" placeholder="Código FIPE" />
        </div>
        <div className="space-y-1 flex-1">
          <Label className="text-sm">Marca</Label>
          <Select>
            <SelectTrigger className="w-full focus:ring-1 ">
              <SelectValue placeholder="Marca" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="brand1">brand-1</SelectItem>
            </SelectContent>
          </Select>

        </div>
      </div>
      {/* model */}
      <div className="space-y-1">
        <Label className="text-sm">Modelo</Label>
        <Select>
          <SelectTrigger className="w-full focus:ring-1 ">
            <SelectValue placeholder="Modelo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="modelo-x">modelo-1</SelectItem>
          </SelectContent>
        </Select>

      </div>
      {/* year model */}
      <div className="flex gap-2">
        <div className="space-y-1 flex-1">
          <Label className="text-sm">Ano do Modelo </Label>
          <Select>
            <SelectTrigger className="w-full focus:ring-1 ">
              <SelectValue placeholder="ex: 1999" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="brand1">1999</SelectItem>
            </SelectContent>
          </Select>

        </div>
        <div className="space-y-1 flex-1">
          <Label className="text-sm">Mês de referência</Label>
          <Select>
            <SelectTrigger className="w-full focus:ring-1 ">
              <SelectValue placeholder="ex: Janeiro" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="brand1">Janeiro</SelectItem>
            </SelectContent>
          </Select>

        </div>
      </div>
      {/* gear_box */}
      <div className="space-y-1">
        <Label className="text-sm">Câmbio</Label>
        <Select>
          <SelectTrigger className="w-full focus:ring-1 ">
            <SelectValue placeholder="automático" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="modelo-x">Automático</SelectItem>
          </SelectContent>
        </Select>

      </div>
      {/* kms / placa */}
      <div className="flex gap-2">
        <div className="space-y-1">
          <Label className="text-sm">Quilômetros rodados</Label>
          <Input type="number" placeholder="ex: 80.850 km " />
        </div>
        <div className="space-y-1">
          <Label className="text-sm">Placa do veículo</Label>
          <Input type="text" placeholder="ex: BRA0S17" />
        </div>
      </div>
      {/* type_of_direction and engine_power */}
      <div className="flex gap-2">
        <div className="space-y-1 flex-1">
          <Label className="text-sm">Potência do motor</Label>
          <Select>
            <SelectTrigger className="w-full focus:ring-1 ">
              <SelectValue placeholder="ex: 1.0" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="brand1">1.0</SelectItem>
            </SelectContent>
          </Select>

        </div>
        <div className="space-y-1 flex-1">
          <Label className="text-sm">Tipo de direção</Label>
          <Select>
            <SelectTrigger className="w-full focus:ring-1 ">
              <SelectValue placeholder="ex: hidráulica" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="brand1">hidráulica</SelectItem>
            </SelectContent>
          </Select>

        </div>
      </div>
      {/* type_of_vehicle and color */}
      <div className="flex gap-2">
        <div className="space-y-1 flex-1">
          <Label className="text-sm">Cor do veículo</Label>
          <Input type="text" placeholder="ex: Branco" />

        </div>
        <div className="space-y-1 flex-1">
          <Label className="text-sm">Tipo de veiculo</Label>
          <Select>
            <SelectTrigger className="w-full focus:ring-1 ">
              <SelectValue placeholder="ex: Hatchback" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modelo-x">Hatchback</SelectItem>
            </SelectContent>
          </Select>

        </div>
      </div>

    </form>

  </div>);
}

export default RegisterCar;