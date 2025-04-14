import EditRecipeComponent from "./components/EditRecipeComponent";

const EditRecipe = () => {
  return (
    <>
      <h4 className="text-base font-bold">Edit Recipe</h4>

      <div className="mt-4 p-4 bg-white rounded h-full">
        <EditRecipeComponent />
      </div>
    </>
  );
};

export default EditRecipe;
