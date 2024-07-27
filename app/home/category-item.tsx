import Image from "next/image";

export interface CategoryItemProps {
  image: string;
  text: string;
  strong: string;
}
const CategoryItem = ({ image, strong, text }: CategoryItemProps) => {

  return (
    <div className=" space-y-2 min-w-56 min-h-48 " >
      <Image
        src={image}
        alt={strong}
        width={224}
        height={192}
        className="rounded-md"
      />
      <p className="text-md font-medium">{text} <br /><strong className="text-xl">{strong}</strong></p>
    </div>
  );
}

export default CategoryItem;