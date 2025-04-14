export interface Product {
  id: string;
  images: string[];
  name: string;
  description: string;
  weight: number;
  unit_type: string;
  category_id: string;
  tag_id: string | null;
  category_tag: string;
  regular_price: number;
  promotional_price: number;
  is_favourite: boolean;
}
