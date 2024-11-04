"use client";

import { useState } from "react";
import HeaderCreateAd from "./header-create-ad";
import { Button } from "@/app/base_ui/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import RegisterCar from "./steps/step-1";
import UserPriceAndAdInfo from "./steps/step-2";
import UserAddImagesToAd from "./steps/step-3";
import FinalLayout from "./steps/step-4";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema, step2Schema, step3Schema } from "@/app/validations/adStepsSchema";
import { useAuth } from "@/app/hooks/useAuth";
import { UseSession } from "@/app/hooks/useSession";
import axios from "axios";
import { toast } from "sonner";
import api from "@/app/services/apiService";

export type ClientVehicle = {
  tipoVeiculo: number,
  fipe_price: string,
  brand: string,
  model: string,
  year_model: number,
  fuel: string,
  code_fipe: string,
  reference_mounth: string
}

const CrateAd = () => {
  const { userDetails } = UseSession()
  const { token } = useAuth();
  const [step, setStep] = useState(1);
  const [clientVehicle, setClientVehicle] = useState<ClientVehicle | undefined>();
  const [adId, setAdId] = useState<number | null>();
  const stepSchemas = [step1Schema, step2Schema, step3Schema];
  const [formData, setFormData] = useState<any>({
    step1: {},
    step2: {},
    step3: {}
  });
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue
  } = useForm<any>({
    resolver: zodResolver(stepSchemas[step - 1]), // Resolver baseado no passo atual
    mode: "onChange",
  });
  const convertPrice = (value: string | undefined) => {
    if (!value) return 0;
    return Math.round(parseFloat(value.replace(/[R$\s.]/g, '').replace(',', '.')) * 100); // Multiplicando por 100 para obter o valor em centavos
  };
  const handleNextStep = async (data: any) => {
    // Atualiza o estado com os dados do passo atual
    setFormData((prevData: any) => ({
      ...prevData,
      [`step${step}`]: data,
    }));

    if (step === 2) {
      const requestData = {
        user_id: userDetails?.id,
        title: data.title,
        description: data.description,
        user_price: parseFloat(data.price),
        brand: formData.step1.brand,
        code_fipe: clientVehicle?.code_fipe,
        fuel: formData.step1.fuel,
        model: formData.step1.model,
        model_year: parseInt(formData.step1.model_year, 10),
        fipe_price: convertPrice(clientVehicle?.fipe_price),
        reference_month: formData.step1.reference_month,
        created_at: new Date().toISOString(),
        kilometers_driven: parseFloat(formData.step1.kilometers_driven),
        type_of_vehicle: clientVehicle?.tipoVeiculo,
        traffic_signs: formData.step1.traffic_signs,
        car_color: formData.step1.car_color,
        type_of_direction: formData.step1.type_of_direction,
        gear_box: formData.step1.gear_box,
        engine_power: parseFloat(formData.step1.engine_power),
      };

      try {
        const response = await api.post('ads/create', requestData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        setAdId(response.data.id);
        setStep(step + 1);
      } catch (error) {
        toast.error("Ops! Houve uma falha ao se conectar com o servidor, tente novamente mais tarde.");
        console.error('Error:', error);
        return; // Impede o avanço se houver erro
      }
    } else if (step === 3) {
      const files = new FormData();
      const imageFile = formData.step3.imageMain[0]; // Acessando o arquivo selecionado

      // Verifica se há um arquivo selecionado antes de tentar anexar
      if (imageFile) {
        const files = new FormData();

        // Verifica se cada arquivo existe antes de anexar
        if (data.imageMain.length > 0) {
          files.append('files', data.imageMain[0]);
        }
        if (data.image2.length > 0) {
          files.append('files', data.image2[0]);
        }
        if (data.image3.length > 0) {
          files.append('files', data.image3[0]);
        }
        if (data.image4.length > 0) {
          files.append('files', data.image4[0]);
        }
        if (data.image5.length > 0) {
          files.append('files', data.image5[0]);
        }
        if (data.image6.length > 0) {
          files.append('files', data.image6[0]);
        }

        try {
          const response = await fetch(`https://fullcar-backend.onrender.com/api/integration/aws-s3/upload-multiple/${adId}`, {
            method: 'POST',
            body: files,
          });

          if (!response.ok) throw new Error('Erro ao enviar imagem');
          const data = await response.json();
          console.log('Imagem enviada com sucesso:', data);

          // Avança para o próximo passo após sucesso no upload da imagem
          setStep(step + 1);
        } catch (error) {
          console.error('Erro ao enviar imagem:', error);
          toast.error("Ops! Falha ao enviar a imagem, tente novamente.");
          return; // Impede o avanço se houver erro
        }
      } else {
        toast.error("Por favor, selecione uma imagem antes de prosseguir.");
      }
    } else {
      setStep(step + 1);
    }

  };


  return (


    <form className="px-2 py-4 space-y-6" onSubmit={handleSubmit(handleNextStep)}>
      {/* step-1/register car */}
      <HeaderCreateAd step={step} />

      {step === 1 && (
        <RegisterCar
          register={register}
          errors={errors}
          control={control}
          getValues={getValues}
          setValue={setValue}
          clientVehicle={clientVehicle}
          setClientVehicle={setClientVehicle}
        />
      )}

      {/* step-2/ */}
      {step === 2 && (
        <UserPriceAndAdInfo
          register={register}
          setValue={setValue}
          errors={errors}
          clientVehicle={clientVehicle}
        />
      )}

      {/* step 3 */}
      {step === 3 && (
        <UserAddImagesToAd adId={adId || null} register={register} errors={errors} />
      )}

      {/* fim */}
      {step === 4 && <FinalLayout />}

      {/* Footer */}
      <div className="w-full inset-x-0 flex justify-between bottom-5 px-2">
        {step === 1 ? (
          <Link
            className="flex items-center justify-center gap-4 px-4"
            href={"/anuncios"}
          >
            <ArrowLeft className="size-5" />
            Sair
          </Link>
        ) : (
          <Button
            className="flex gap-3 text-base items-center dark:text-zinc-50 w-[35%]"
            variant={"outline"}
            disabled={step === 3}
            onClick={() => setStep(step - 1)}
          >
            Voltar
          </Button>
        )}

        {step !== 4 ? (
          <Button
            type="submit"
            className="flex gap-3 text-base items-center text-zinc-50 w-[35%] m-0 py-4"
          >
            Continuar
          </Button>
        ) : (
          <Link
            href={"/anuncios/meus-anuncios"}
            className="flex items-center justify-center gap-4 px-4 bg-primary rounded-md text-zinc-50"
          >
            Meus anúncios
            <Home className="size-5" />
          </Link>
        )}
      </div>
    </form>

  );
};

export default CrateAd;

