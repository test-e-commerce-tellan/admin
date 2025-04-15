import { Order } from "../store/features/orders/orderTypes";

export const getAllOrders = async (): Promise<Order[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 100);
  });
};
