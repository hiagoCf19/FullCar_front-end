import { Label } from "@radix-ui/react-label";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Step2FormData } from "@/app/validations/adStepsSchema";
import { FieldErrors, UseFormRegister } from "react-hook-form";
interface UserPriceAndAdInfoProps {
  register: UseFormRegister<Step2FormData>;
  errors: FieldErrors<Step2FormData>;
}
const UserPriceAndAdInfo = ({ register, errors }: UserPriceAndAdInfoProps) => {
  return (
    <div className="border w-full p-4 rounded-lg space-y-4 ">
      <h3 className="font-medium">Defina o preço</h3>
      <div>
        <p className="text-lg text-center">
          Esse é o preço de compra para o seu veículo
        </p>


        <p className="text-center font-medium text-lg text-primary">
          R$ 13.010,00
        </p>
        <span className="text-muted-foreground">
          Preço médio na Tabela FIPE em agosto de 2024
        </span>
      </div>
      <div className="space-y-1">
        <Label className="text-sm">
          Defina seu preço
        </Label>
        <Input type="number" {...register("price")} placeholder="ex: R$ 13.010,00" />
        {errors.price && <p>{errors.price.message}</p>}
      </div>
      <h3 className="text-xl font-semibold">Insira mais informações para deixar seu anuncio completo</h3>
      <div className="space-y-1">
        <Label className="text-sm">
          Título
        </Label>
        <Input type="text" placeholder="Insira o título que será exibido em seu anuncio" />

      </div>
      <div className="space-y-1">
        <Label className="text-sm">
          Descrição
        </Label>
        <Textarea className="focus:ring-1 h-40 " placeholder="Descreva seu veículo" {...register("description")} />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
    </div>);
}

export default UserPriceAndAdInfo;