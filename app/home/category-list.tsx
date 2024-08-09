import CategoryItem from "./category-item";
import { CategoryItemProps } from "./category-item";

interface CategoryListProps {
  cards: CategoryItemProps[]
}
const CategoryList = ({ cards }: CategoryListProps) => {
  return (
    <div className="space-y-4 ">
      <h2 className="text-2xl font-semibold text-foreground">Categorias</h2>
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden gap-4">
        {cards.map((card, i) => (
          <CategoryItem
            key={i}
            image={card.image}
            text={card.text}
            strong={card.strong}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;