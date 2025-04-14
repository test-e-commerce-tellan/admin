import { Recipe } from "./Recipe";

export interface RecipeWithDetails extends Recipe {
  description: string;
  product_ids: string[];
  created_at: string;
}
