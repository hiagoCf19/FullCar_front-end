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



const CrateAd = () => {
  const [step, setStep] = useState(1);

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
    getValues
  } = useForm<any>({
    resolver: zodResolver(stepSchemas[step - 1]), // Resolver baseado no passo atual
    mode: "onChange",
  });

  const submit = (data: any) => {
    // console.log({ ...formData, [`step${step}`]: data });
    const requestData = {
      user_id: 3, // Pode ser dinâmico se necessário
      title: formData.step2.title,
      description: formData.step2.description,
      user_price: parseFloat(formData.step2.price), // Converte preço para número
      brand: formData.step1.brand,
      code_fipe: formData.step1.code_FIPE,
      fuel: formData.step1.fuel,
      model: formData.step1.model,
      model_year: parseInt(formData.step1.model_year, 10), // Converte ano para número
      fipe_price: 62445.0, // Este valor não está no formulário, então você pode pegar de outra fonte ou definir fixo
      reference_month: formData.step1.reference_month,
      created_at: new Date().toISOString(), // Gera a data atual no formato ISO
      kilometers_driven: parseFloat(formData.step1.kilometers_driven), // Converte para número
      type_of_vehicle: formData.step1.type_of_vehicle,
      traffic_signs: formData.step1.traffic_signs,
      car_color: formData.step1.car_color,
      type_of_direction: formData.step1.type_of_direction,
      gear_box: formData.step1.gear_box,
      engine_power: parseFloat(formData.step1.engine_power), // Converte para número
      imageMain: formData.step3.imageMain
    };

    console.log(requestData);

    //if success:
    setStep(step + 1);
  };

  // Função que avança para o próximo passo apenas se a validação for bem-sucedida
  const handleNextStep = (data: any) => {
    // Atualiza o estado com os dados do passo atual
    setFormData((prevData: any) => ({
      ...prevData,
      [`step${step}`]: data,
    }));

    setStep(step + 1);
  };

  return (

    <form className="px-2 py-4 space-y-6" onSubmit={handleSubmit(submit)}>
      {/* step-1/register car */}
      <HeaderCreateAd step={step} />
      {step === 1 && <RegisterCar register={register} errors={errors} control={control} />}
      {/* step-2/ */}
      {step === 2 && <UserPriceAndAdInfo register={register} errors={errors} />}
      {/* step 3 */}
      {step === 3 && <UserAddImagesToAd register={register} errors={errors} />}
      {/* fim */}
      {step === 4 && <FinalLayout />}
      {/* Footer */}
      <div className="w-full inset-x-0 flex justify-between bottom-5 px-2">
        {
          step === 1
            ? <Link
              className="flex items-center justify-center gap-4 px-4 "
              href={"/anuncios"}
            >
              <ArrowLeft className="size-5" />
              Sair
            </Link> :
            <Button
              className="flex gap-3 text-base items-center dark:text-zinc-50 w-[35%]"
              variant={"outline"}
              disabled={step === 4}
              onClick={() => setStep(step - 1)}
            >
              Voltar
            </Button>
        }
        {step != 4 ?
          <Button
            type={step === 3 ? 'submit' : 'button'}
            className="flex gap-3 text-base items-center text-zinc-50 w-[35%] m-0 py-4"
            onClick={step === 3 ? undefined : handleSubmit(handleNextStep)} // Use handleSubmit para validar antes de avançar
          >
            Continuar
          </Button> :
          <Link
            href={"/anuncios/meus-anuncios"}
            className="flex items-center justify-center gap-4 px-4 bg-primary rounded-md text-zinc-50"
          >
            Meus anúncios
            <Home className="size-5" />
          </Link>
        }
      </div>
    </form >
  );
};

export default CrateAd;

