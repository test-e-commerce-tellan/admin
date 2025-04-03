export interface Order {
    orderNumber: string;
    date: string;
    customerName: string;
    paymentStatus: "Paid" | "Pending" | "Failed";
    orderStatus: "Ready" | "Shipped" | "Received" | "Cancelled";
    total: number;
  }
  