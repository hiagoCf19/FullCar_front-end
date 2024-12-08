import { AdPhotoUpload } from "@/app/anuncios/_components/AdPhotoUpload";

const CompleteAd = ({
  params,
}: {
  params: { userId: string; adId: string };
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <AdPhotoUpload adId={params.adId} />
    </div>
  );
};

export default CompleteAd;
