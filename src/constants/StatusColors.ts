import { OrderStatus } from "../store/features/orders/orderTypes";

export type StatusColors = { [key: string]: string };

export const transactionStatusColors: StatusColors = {
  Paid: "bg-green-500 text-white",
  Pending: "bg-yellow-500 text-white",
};

export const paymentStatusColors: StatusColors = {
  Paid: "bg-green-500 text-white",
  Pending: "bg-yellow-500 text-white",
  Failed: "bg-red-500 text-white",
};

export const inventoryStatusColor: StatusColors = {
  OutOfStock: "bg-gray-500 text-white",
};

export const orderStatusColors: Record<OrderStatus, string> = {
  [OrderStatus.Pending]: "bg-yellow-200 text-yellow-800",
  [OrderStatus.Preparing]: "bg-blue-200 text-blue-800",
  [OrderStatus.Picked]: "bg-indigo-200 text-indigo-800",
  [OrderStatus.Dispatch]: "bg-purple-200 text-purple-800",
  [OrderStatus.Delivered]: "bg-green-500 text-white",
  [OrderStatus.Cancelled]: "bg-red-200 text-red-800",
};
