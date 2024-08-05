import Image from "next/image";

export interface CategoryItemProps {
  image: string;
  text: string;
  strong: string;
}
const CategoryItem = ({ image, strong, text }: CategoryItemProps) => {

  return (
    <div className=" space-y-2 min-w-56 min-h-48 " >
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={strong}
          fill
          sizes="auto"
          className="rounded-md object-contain"
        />
      </div>
      <p className="text-md font-medium">{text} <br /><strong className="text-xl">{strong}</strong></p>
    </div>
  );
}

export default CategoryItem;