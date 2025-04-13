import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "../../../service/api";
import { Recipe } from "../../../types/Recipe";

interface RecipesState {
  recipes: Recipe[];
  selectedRecipe: Recipe | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: RecipesState = {
  recipes: [],
  selectedRecipe: null,
  status: "idle",
  error: null,
};

export const fetchRecipes = createAsyncThunk<
  Recipe[],
  void,
  { rejectValue: string }
>("/marketting/recipes", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("/marketing/recipes");
    return response.data;
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || "Failed to fetch recipes"
    );
  }
});

export const fetchRecipeById = createAsyncThunk<
  Recipe,
  string,
  { rejectValue: string }
>("recipes/fetchRecipeById", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/marketing/recipes/info?id=${id}`);
    return response.data;
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || "Failed to fetch recipe"
    );
  }
});

export const createRecipe = createAsyncThunk<
  Recipe,
  Partial<Recipe>,
  { rejectValue: string }
>("/recipes/createRecipe", async (recipeData, { rejectWithValue }) => {
  try {
    const response = await axios.post("/marketing/recipes", recipeData);
    return response.data;
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.error || "Failed to create recipe"
    );
  }
});

export const updateRecipe = createAsyncThunk<
  Recipe,
  { id: string; data: Partial<Recipe> },
  { rejectValue: string }
>("/recipes/udateRecipe", async ({ id, data }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`/marketing/recipes?id=${id}`, data);
    return response.data;
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.error || "Failed to update recipe"
    );
  }
});

export const deleteRecipe = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("recipes/deleteRecipe", async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`/marketing/recipes/${id}`);
    return id;
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.error || "Failed to delete recipe"
    );
  }
});

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    clearSelectedRecipe: (state) => {
      state.selectedRecipe = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchRecipes.fulfilled,
        (state, action: PayloadAction<Recipe[]>) => {
          state.status = "succeeded";
          state.recipes = action.payload;
        }
      )
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch recipes";
      })

      .addCase(fetchRecipeById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchRecipeById.fulfilled,
        (state, action: PayloadAction<Recipe>) => {
          state.status = "succeeded";
          state.selectedRecipe = action.payload;
        }
      )
      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch recipe";
      })

      .addCase(createRecipe.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        createRecipe.fulfilled,
        (state, action: PayloadAction<Recipe>) => {
          state.recipes.push(action.payload);
          state.status = "succeeded";
        }
      )
      .addCase(createRecipe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to create recipe";
      })

      .addCase(
        updateRecipe.fulfilled,
        (state, action: PayloadAction<Recipe>) => {
          const index = state.recipes.findIndex(
            (r) => r.id === action.payload.id
          );
          if (index !== -1) {
            state.recipes[index] = action.payload;
          }
        }
      )

      .addCase(
        deleteRecipe.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.recipes = state.recipes.filter((r) => r.id !== action.payload);
        }
      );
  },
});

export const { clearSelectedRecipe } = recipesSlice.actions;

export default recipesSlice.reducer;
