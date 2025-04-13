export interface Recipe {
  id: string;
  image: string;
  name: string;
  short_description: string;
  description: string | null;
  created_at: string;
}
