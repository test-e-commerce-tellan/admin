import { FiTrash } from "react-icons/fi";

type IngredientItemProps = {
  image: string;
  description: string;
  onDelete: () => void;
};

const IngredientItem = ({
  image,
  description,
  onDelete,
}: IngredientItemProps) => {
  return (
    <div className="flex items-center gap-4 border p-2 rounded-md">
      <img
        src={image}
        alt="Product"
        className="w-12 h-12 rounded-md object-cover"
      />
      <p className="flex-1 text-sm text-gray-800">{description}</p>
      <button
        onClick={onDelete}
        className="text-red-400 hover:text-red-700 p-2"
      >
        <FiTrash />
      </button>
    </div>
  );
};

export default IngredientItem;
