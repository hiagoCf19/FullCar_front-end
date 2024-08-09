import { Verified } from "lucide-react";
import Link from "next/link";

const FinalLayout = () => {
  return (<div className="  w-full  justify-center flex items-center flex-col space-y-4 h-[60vh]">
    <Verified className="size-32 text-primary" />
    <h3 className="font-semibold text-2xl">Anúncio criado com sucesso</h3>
    <p className="text-center text-lg">Agora você pode acompanhar as novidades sobre o seu anuncio em <Link className="underline text-primary text-lg" href={"/anuncios/meus-anuncios"}>
      meus anuncios </Link>
    </p>
  </div>);
}

export default FinalLayout;