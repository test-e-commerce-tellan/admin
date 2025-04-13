import { useEffect, useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Recipe } from "../../../types/Recipe";
import { fetchRecipes } from "../../../store/features/recipe/recipeSlice.ts";
import {
  DataTableStyle,
  TableHeaderStyle,
} from "../../../constants/TableStyles";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import ProgressIndicator from "../../../components/ProgressIndicator.tsx";

const RecipeTable = () => {
  const dispatch = useAppDispatch();
  const { recipes, status, error } = useAppSelector((state) => state.recipes);
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRecipes());
    }
  }, [status, dispatch]);

  const imageTemplate = (rowData: Recipe) => (
    <img
      src={rowData.image}
      alt={rowData.name}
      className="w-16 h-16 object-cover rounded"
    />
  );

  if (status === "loading") {
    return (
      <div className="p-4 flex justify-center items-center h-full">
        <ProgressIndicator />
      </div>
    );
  }

  if (status === "failed") {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-white h-screen rounded">
      <DataTable
        value={recipes}
        dataKey="id"
        tableStyle={DataTableStyle}
        selection={selectedRecipes}
        size="small"
        selectionMode="multiple"
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
      </DataTable>
    </div>
  );
};

export default RecipeTable;
