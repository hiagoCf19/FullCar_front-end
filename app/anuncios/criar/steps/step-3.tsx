"use client";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/app/base_ui/ui/input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Step3FormData } from "@/app/validations/adStepsSchema";
import { toast } from "sonner";
interface UserPriceAndAdInfoProps {
  register: UseFormRegister<Step3FormData>;
  errors: FieldErrors<Step3FormData>;
  adId: number | null;
}
const UserAddImagesToAd = ({
  register,
  errors,
  adId,
}: UserPriceAndAdInfoProps) => {
  const sendImages = async (images: File) => {
    /* const imageFile = formData.step3.imageMain[0];
      if (imageFile) {
        const files = new FormData();

        if (data.imageMain.length > 0) {
          files.append("files", data.imageMain[0]);
        }
        if (data.image2.length > 0) {
          files.append("files", data.image2[0]);
        }
        if (data.image3.length > 0) {
          files.append("files", data.image3[0]);
        }
        if (data.image4.length > 0) {
          files.append("files", data.image4[0]);
        }
        if (data.image5.length > 0) {
          files.append("files", data.image5[0]);
        }
        if (data.image6.length > 0) {
          files.append("files", data.image6[0]);
        } */

    try {
      const response = await fetch(
        `https://fullcar-backend.onrender.com/api/integration/aws-s3/upload-multiple/${adId}`,
        {
          method: "POST",
          body: images,
        }
      );

      if (!response.ok) throw new Error("Erro ao enviar imagem");
      const data = await response.json();
      console.log("Imagem enviada com sucesso:", data);
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
      toast.error("Ops! Falha ao enviar a imagem, tente novamente.");
      return; // Impede o avanço se houver erro
    }
  };

  return (
    <div className="border w-full p-4 rounded-lg space-y-4">
      <h3 className="font-medium text-lg">Hora de adicionar suas fotos</h3>
      <div className="space-y-4">
        <p className="text-lg">
          Adicione até 6 fotos do seu veículo para que fique mais fácil de
          encontrar
        </p>
        <div className="space-y-3">
          {/* Input para a foto principal */}
          <div className="space-y-1">
            <Label>Foto principal</Label>
            <input
              type="file"
              {...register("imageMain")}
              accept="image/*" // Aceitar apenas arquivos de imagem
            />
            {/*             {errors.imageMain && <p>{String(errors.imageMain.message)}</p>}
             */}{" "}
          </div>

          {/* Input para a Foto 2 */}
          <div className="space-y-1">
            <Label>Foto 2</Label>
            <input type="file" {...register("image2")} accept="image/*" />
          </div>

          {/* Input para a Foto 3 */}
          <div className="space-y-1">
            <Label>Foto 3</Label>
            <input type="file" {...register("image3")} accept="image/*" />
          </div>

          {/* Input para a Foto 4 */}
          <div className="space-y-1">
            <Label>Foto 4</Label>
            <input type="file" {...register("image4")} accept="image/*" />
          </div>

          {/* Input para a Foto 5 */}
          <div className="space-y-1">
            <Label>Foto 5</Label>
            <input type="file" {...register("image5")} accept="image/*" />
          </div>

          {/* Input para a Foto 6 */}
          <div className="space-y-1">
            <Label>Foto 6</Label>
            <input type="file" {...register("image6")} accept="image/*" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAddImagesToAd;
