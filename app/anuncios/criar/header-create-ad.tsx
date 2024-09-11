import { Progress } from "@/app/base_ui/ui/progress";
import CircleStep from "../components/circle-step";
interface HeaderCreateAdProps {
  step: number;
}
const HeaderCreateAd = ({ step }: HeaderCreateAdProps) => {

  return (

    <div className="space-y-4">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="rounded-full bg-primary size-6 text-zinc-50 flex justify-center items-center p-2">
            {step}
          </div>
          <h3 className="font-medium">Preencha os dados do veículo</h3>
        </div>
        {step < 4 && <div className="flex gap-2">
          <CircleStep current={step + 1} />
        </div>}
      </div>
      <Progress value={(step / 4) * 100} className="h-3" />
    </div>


  );
}

export default HeaderCreateAd;