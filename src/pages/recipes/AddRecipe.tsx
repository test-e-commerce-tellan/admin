import AddRecipeComponent from "./components/AddRecipeComponent";

const AddRecipe = () => {
  return (
    <>
      <h4 className="text-base font-bold">New Recipe</h4>

      <div className="mt-4 p-4 bg-white rounded h-full">
        <AddRecipeComponent />
      </div>
    </>
  );
};

export default AddRecipe;
