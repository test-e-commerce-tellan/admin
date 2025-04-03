export type StatusColors = { [key: string]: string };

export const transactionStatusColors: StatusColors = {
  Paid: "bg-green-500 text-white",
  Pending: "bg-yellow-500 text-white",
};

export const orderStatusColors: StatusColors = {
  Ready: "bg-orange-500 text-white",
  Received: "bg-blue-500 text-white",
  Shipped: "bg-gray-500 text-white",
  Cancelled: "bg-red-500 text-white",
};

export const paymentStatusColors: StatusColors = {
  Paid: "bg-green-500 text-white",
  Pending: "bg-yellow-500 text-white",
  Failed: "bg-red-500 text-white",
};

export const inventoryStatusColor: StatusColors = {
  OutOfStock: "bg-gray-500 text-white",
};