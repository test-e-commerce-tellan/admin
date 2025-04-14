import { useEffect, useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Recipe } from "../../../types/Recipe";
import {
  deleteRecipe,
  fetchRecipes,
} from "../../../store/features/recipe/recipeSlice.ts";
import {
  DataTableStyle,
  TableHeaderStyle,
} from "../../../constants/TableStyles";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import ProgressIndicator from "../../../components/ProgressIndicator.tsx";
import { FiEdit, FiTrash } from "react-icons/fi";
import { IconButton, PrimaryButton } from "../../../components/Button.tsx";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const RecipeTable = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { recipes, status, error } = useAppSelector((state) => state.recipes);
  const { deleteStatus, deleteError } = useAppSelector(
    (state) => state.recipes
  );
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [recipeToDelete, setRecipeToDelete] = useState<Recipe | null>(null);
  const [deletionInProgress, setDeletionInProgress] = useState(false);


  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    if (!deletionInProgress) return;

    if (deleteStatus === "succeeded") {
      toast.success("Recipe deleted successfully.");
      setOpenDialog(false);
      setDeletionInProgress(false);
    }

    if (deleteStatus === "failed") {
      toast.error(deleteError || "Failed to delete recipe.");
      setDeletionInProgress(false);
    }
  }, [deleteStatus, deletionInProgress, deleteError]);

  const imageTemplate = (rowData: Recipe) => (
    <img
      src={rowData.image}
      alt={rowData.name}
      className="w-16 h-16 object-cover rounded"
    />
  );

  if (status === "loading") {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <ProgressIndicator />
      </div>
    );
  }

  if (status === "failed") {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  const handleEdit = (id: string) => {
    navigate(`/recipes/${id}/edit`);
  };

  const handleDeleteConfirm = () => {
    if (recipeToDelete) {
      setDeletionInProgress(true)
      dispatch(deleteRecipe(recipeToDelete.id));
    }
  };

  return (
    <div className="bg-white h-screen rounded">
      <DataTable
        value={recipes}
        dataKey="id"
        tableStyle={DataTableStyle}
        selection={selectedRecipes}
        selectionMode="checkbox"
        size="small"
        onSelectionChange={(e) => {
          const selected = Array.isArray(e.value) ? e.value : [e.value];
          setSelectedRecipes(selected);
        }}
        paginator
        rows={10}
        rowsPerPageOptions={[10, 20, 50]}
        scrollable
        scrollHeight="500px"
        className="flex-grow"
      >
        <Column selectionMode="multiple" headerStyle={TableHeaderStyle} />
        <Column
          field="image"
          header="Image"
          body={imageTemplate}
          headerStyle={TableHeaderStyle}
        />
        <Column field="name" header="Name" headerStyle={TableHeaderStyle} />
        <Column
          field="short_description"
          header="Description"
          headerStyle={TableHeaderStyle}
        />
        <Column
          header="Actions"
          body={(rowData: Recipe) => (
            <div className="flex items-center space-x-3">
              <IconButton
                icon={<FiEdit />}
                onClick={() => handleEdit(rowData.id)}
                className="text-blue-600 hover:text-blue-800"
              />

              <IconButton
                icon={<FiTrash />}
                onClick={() => {
                  setRecipeToDelete(rowData);
                  setOpenDialog(true);
                }}
                className="text-red-600 hover:text-red-800"
              />
            </div>
          )}
          headerStyle={TableHeaderStyle}
        />
      </DataTable>

      {/* ShadCN Dialog for delete confirmation */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Recipe</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete{" "}
              <span className="font-semibold text-black">
                {recipeToDelete?.name}
              </span>
              ?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-end gap-2">
            <button
              onClick={() => setOpenDialog(false)}
              className="text-sm px-4 py-1 rounded bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>

            <PrimaryButton
              text={deleteStatus === "loading" ? "Deleting..." : "Yes, Delete"}
              disabled={deleteStatus === "loading"}
              onClick={handleDeleteConfirm}
              className="text-sm py-1 rounded bg-red-600 text-white hover:bg-red-700"
            />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RecipeTable;
