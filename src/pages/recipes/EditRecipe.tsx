import { useNavigate } from "react-router-dom";
import EditRecipeComponent from "./components/EditRecipeComponent";
import { FiArrowLeft } from "react-icons/fi";

const EditRecipe = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <>
      <div className="flex items-center justify-between">
        <button
          onClick={handleBack}
          className="flex items-center text-medium text-primary hover:underline"
        >
          <FiArrowLeft className="mr-2" />
          Back
        </button>
        <h4 className="text-base font-bold">Edit Recipe</h4>
      </div>

      <div className="mt-4 p-4 bg-white rounded h-full">
        <EditRecipeComponent />
      </div>
    </>
  );
};

export default EditRecipe;
