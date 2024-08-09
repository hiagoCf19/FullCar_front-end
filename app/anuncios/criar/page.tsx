"use client";

import { useState } from "react";
import Header from "@/app/components/header";
import HeaderCreateAd from "./header-create-ad";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import RegisterCar from "./steps/step-1";
import UserPriceAndAdInfo from "./steps/step-2";
import UserAddImagesToAd from "./steps/step-3";
import FinalLayout from "./steps/step-4";
import Link from "next/link";



const CrateAd = () => {

  const [step, setStep] = useState(1);


  return (
    <>
      <Header />
      <div className="px-2 py-4 space-y-6">
        {/* step-1/register car */}
        <HeaderCreateAd step={step} />
        {step === 1 && <RegisterCar />}
        {/* step-2/  */}
        {step === 2 && <UserPriceAndAdInfo />}
        {/* step 3 */}
        {step === 3 && <UserAddImagesToAd />}
        {/* fim */}
        {step === 4 && <FinalLayout />}
        {/* Footer */}
        <div className="w-full fixed inset-x-0 flex justify-between bottom-10 px-2">
          {
            step === 1
              ? <Link
                className="flex items-center justify-center gap-4 px-4 "
                href={"/anunciar"}
              >

                <ArrowLeft className="size-5" />
                Sair


              </Link> :
              <Button
                className=" flex gap-3 text-base items-center dark:text-zinc-50 w-[35%]" variant={"outline"}
                disabled={step === 4}
                onClick={() => setStep(step - 1)}

              >
                <ArrowLeft className="size-5" />
                Voltar
              </Button>
          }
          {step != 4 ?
            <Button
              type="submit"
              className=" flex gap-3 text-base items-center text-zinc-50 w-[35%] m-0 py-4"
              onClick={() => step < 4 && setStep(step + 1)}
            >
              Continuar
              < ArrowRight className="size-5" />
            </Button> :
            <Link
              href={"/anuncios/meus-anuncios"}

              className="flex items-center justify-center gap-4 px-4 bg-primary rounded-md text-zinc-50"
            >
              Meus anúncios
              < Home className="size-5" />
            </Link>
          }
        </div>
      </div >

    </>
  );
}

export default CrateAd;
