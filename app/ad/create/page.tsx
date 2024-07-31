import BottomNavigation from "@/app/components/bottom-navigation";
import Header from "@/app/components/header";

const CrateAd = () => {
  return (<>
    <Header />
    <div className="p-4">
      <h2 className="text-xl font-medium">Insira informações sobre seu veículo</h2>
    </div>
    <BottomNavigation />
  </>);
}

export default CrateAd;