import { Product } from "../types/Product";

export const getTopProductsByUnitsSold = async (): Promise<Product[]> => {
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
    }, 1000);
  });
};