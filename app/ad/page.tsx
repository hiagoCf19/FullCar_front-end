import Image from "next/image";
import Header from "../components/header";
import { Button } from "../components/ui/button";
import FacilitiesList from "./components/facilities-list";

const HomeAd = () => {
  return (<>
    <Header />
    <div className="px-4 flex flex-col justify-center mt-4 space-y-6">

      <div className="space-y-2">
        <h1 className="text-xl font-bold text-zinc-700 dark:text-zinc-100 leading-6">
          Anuncie com <strong className="font-bold text-primary">mais facilidade</strong> e venda <strong className="font-bold text-primary">mais rápido</strong> !
        </h1>
        <p className="text-muted-foreground leading-5">Divulgamos seu veículo para milhares de compradores com vantagens para fazer sua venda acontecer</p>
      </div>
      <div className="w-full justify-center flex">
        <Button className="text-zinc-50 text-base font-medium w-[80%]">
          Quero anunciar
        </Button>
      </div>
      <img
        src="https://image1.mobiauto.com.br/images/api/images/v1.0/317469806/transform/fl_progressive,f_webp,q_auto,w_413,h_273"
        alt="casal"
      />
      <FacilitiesList />
    </div>


  </>);
}

export default HomeAd;