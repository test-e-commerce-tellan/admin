import { OldProduct } from "../types/OldProduct";
import { TopProduct } from "../types/TopProduct";

export const getTopProductsByUnitsSold = async (): Promise<TopProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Product A",
          imageUrl: "/images/top-product-1.png",
          price: 29.99,
          unitsSold: 500,
        },
        {
          name: "Product B",
          imageUrl: "/images/top-product-2.png",
          price: 49.99,
          unitsSold: 450,
        },
        {
          name: "Product C",
          imageUrl: "/images/top-product-3.png",
          price: 19.99,
          unitsSold: 400,
        },
        {
          name: "Product D",
          imageUrl: "/images/top-product-4.png",
          price: 99.99,
          unitsSold: 350,
        },
        {
            name: "Product E",
            imageUrl: "/images/top-product-5.png",
            price: 99.99,
            unitsSold: 350,
          },
    
      ]);
    }, 100);
  });
};

const imageUrls = [
  "/images/top-product-1.png",
  "/images/top-product-2.png",
  "/images/top-product-3.png",
  "/images/top-product-4.png",
  "/images/top-product-5.png",
];


const categories = ["Electronics", "Clothing", "Home", "Sports", "Toys"];
const colors = ["Red", "Blue", "Green", "Black", "White", "Yellow"];

export const generateProducts = async (): Promise<OldProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products: OldProduct[] = Array.from({ length: 100 }, (_, index) => {
        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomPrice = parseFloat((Math.random() * 100 + 10).toFixed(2));
        const randomRating = parseFloat((Math.random() * 5).toFixed(1));
        const randomInventory = Math.random() < 0.1 ? 0 : Math.floor(Math.random() * 500) + 1;

        return {
          name: `Product ${index + 1}`,
          imageUrl: randomImage,
          category: randomCategory,
          totalInventory: randomInventory,
          color: randomColor,
          price: randomPrice,
          rating: randomRating,
        };
      });

      resolve(products);
    }, 100);
  });
};