

export interface BrandItemProps {
  brand: {
    name: string;
    image: string;
  }
}
const BrandItem = ({ brand }: BrandItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center  min-w-28" key={brand.image}>
      <img src={brand.image} alt={brand.name} className="size-10" />
      <p className="text-sm text-zinc-600">{brand.name}</p>
    </div>
  );
}

export default BrandItem;