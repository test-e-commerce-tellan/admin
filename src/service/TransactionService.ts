import { Transaction } from "../types/Transaction";

export const getRecentTransactions = async (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Jonathan S",
          date: "2025-04-01",
          amount: 150.0,
          status: "Paid",
        },
        {
          name: "Rakesh",
          date: "2025-04-02",
          amount: 200.0,
          status: "Pending",
        },
        {
          name: "Anup",
          date: "2025-04-03",
          amount: 300.0,
          status: "Paid",
        },
        {
          name: "Dan Lock",
          date: "2025-04-03",
          amount: 120.0,
          status: "Pending",
        },
      ]);
    }, 1000); // Simulate a 1-second delay
  });
};