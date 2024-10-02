import { Label } from "@radix-ui/react-label";
import { Input } from "@/app/base_ui/ui/input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Step3FormData } from "@/app/validations/adStepsSchema";
interface UserPriceAndAdInfoProps {
  register: UseFormRegister<Step3FormData>;
  errors: FieldErrors<Step3FormData>;
  adId: number | null;
}
const UserAddImagesToAd = ({ register, errors, adId }: UserPriceAndAdInfoProps) => {
  console.log(adId)
  return (
    <div className="border w-full p-4 rounded-lg space-y-4">
      <h3 className="font-medium text-lg">Hora de adicinar suas fotos</h3>
      <div className="space-y-4">
        <p className="text-lg ">
          Adicione até 6 fotos do seu veículo para que fique mais fácil de encontrar
        </p>
        <div className="space-y-3">

          <div className="space-y-1">
            <Label>Foto principal</Label>
            <Input type="file" {...register('imageMain')} />
            {errors.imageMain && <p>{String(errors.imageMain.message)}</p>}
          </div>
          <div className="space-y-1">
            <Label>Foto 2</Label>
            <Input type="file" />
          </div>
          <div className="space-y-1">
            <Label>Foto 3</Label>
            <Input type="file" />
          </div>
          <div className="space-y-1">
            <Label>Foto 4</Label>
            <Input type="file" />
          </div>
          <div className="space-y-1">
            <Label>Foto 5</Label>
            <Input type="file" />
          </div>
          <div className="space-y-1">
            <Label>Foto 6</Label>
            <Input type="file" />
          </div>

        </div>


      </div>
    </div>
  );
}

export default UserAddImagesToAd;