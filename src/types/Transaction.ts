export interface Transaction {
    name: string;
    date: string;
    amount: number;
    status: "Paid" | "Pending";
  }