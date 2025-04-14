type IngredientItemProps = {
  image: string;
  description: string;
  checked: boolean;
  onToggle: () => void;
};

const IngredientItem = ({
  image,
  description,
  checked,
  onToggle,
}: IngredientItemProps) => {
  return (
    <div
      onClick={onToggle}
      className="flex items-center gap-4 border p-2 rounded-md"
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="accent-primary"
      />
      <img
        src={image}
        alt="Product"
        className="w-12 h-12 rounded-md object-cover"
      />
      <p className="flex-1 text-sm text-gray-800">{description}</p>
    </div>
  );
};

export default IngredientItem;
