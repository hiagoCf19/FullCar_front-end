"use client"
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

  return (
    <div className="border w-full p-4 rounded-lg space-y-4">
      <h3 className="font-medium text-lg">Hora de adicionar suas fotos</h3>
      <div className="space-y-4">
        <p className="text-lg">
          Adicione até 6 fotos do seu veículo para que fique mais fácil de encontrar
        </p>
        <div className="space-y-3">
          {/* Input para a foto principal */}
          <div className="space-y-1">
            <Label>Foto principal</Label>
            <input
              type="file"
              {...register('imageMain')}
              accept="image/*" // Aceitar apenas arquivos de imagem
            />
            {errors.imageMain && <p>{String(errors.imageMain.message)}</p>}
          </div>

          {/* Input para a Foto 2 */}
          <div className="space-y-1">
            <Label>Foto 2</Label>
            <input
              type="file"
              {...register('image2')}
              accept="image/*"
            />
          </div>

          {/* Input para a Foto 3 */}
          <div className="space-y-1">
            <Label>Foto 3</Label>
            <input
              type="file"
              {...register('image3')}
              accept="image/*"
            />
          </div>

          {/* Input para a Foto 4 */}
          <div className="space-y-1">
            <Label>Foto 4</Label>
            <input
              type="file"
              {...register('image4')}
              accept="image/*"
            />
          </div>

          {/* Input para a Foto 5 */}
          <div className="space-y-1">
            <Label>Foto 5</Label>
            <input
              type="file"
              {...register('image5')}
              accept="image/*"
            />
          </div>

          {/* Input para a Foto 6 */}
          <div className="space-y-1">
            <Label>Foto 6</Label>
            <input
              type="file"
              {...register('image6')}
              accept="image/*"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAddImagesToAd;