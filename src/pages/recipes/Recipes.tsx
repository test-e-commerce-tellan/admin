import { FiPlus } from "react-icons/fi";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
import RecipeTable from "./components/RecipeTable";

const Recipes = () => {
  function handleExport(): void {
    throw new Error("Function not implemented.");
  }

  function handleAddRecipe(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h4 className="text-base font-bold">Recipes</h4>
          <div className="flex space-x-2">
            <SecondaryButton
              text="Export"
              className="mr-2 font-bold"
              onClick={handleExport}
            />

            <PrimaryButton
              text="Add Recipe"
              className="font-bold"
              icon={<FiPlus />}
              onClick={handleAddRecipe}
            />
          </div>
        </div>

        <div className="mt-4">
          <RecipeTable />
        </div>
      </div>
    </>
  );
};
export default Recipes;
