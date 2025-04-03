import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getRecentTransactions } from "../service/TransactionService";
import { Transaction } from "../types/Transaction";
import { useEffect, useState } from "react";
import StatusBadge from "./StatusBadge";
import { transactionStatusColors } from "../constants/StatusColors";
import { TextPrimary } from "../constants/Colors";

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[] | undefined>(
    undefined
  );

  useEffect(() => {
    getRecentTransactions().then((data) => setTransactions(data));
  }, []);

  const statusTemplate = (rowData: Transaction) => (
    <StatusBadge
      status={rowData.status}
      statusColors={transactionStatusColors}
    />
  );

  return (
    <>
      <div className="bg-white rounded w-full p-4 text-black">
        <h3 className="font-bold text-base">Recent Transactions</h3>

        <div className="mt-4">
          <DataTable
            value={transactions}
            tableStyle={{ minWidth: "5rem", fontSize: "0.875rem" }}
          >
            <Column
              field="name"
              header="Name"
              headerStyle={{
                fontWeight: "normal",
                fontSize: ".75rem",
                color: TextPrimary,
              }}
            ></Column>
            <Column
              field="date"
              header="Date"
              headerStyle={{
                fontWeight: "normal",
                fontSize: ".75rem",
                color: TextPrimary,
              }}
            ></Column>
            <Column
              field="amount"
              header="Amount"
              headerStyle={{
                fontWeight: "normal",
                fontSize: ".75rem",
                color: TextPrimary,
              }}
            ></Column>
            <Column
              field="status"
              header="Status"
              body={statusTemplate}
              headerStyle={{
                fontWeight: "normal",
                fontSize: ".75rem",
                color: TextPrimary,
              }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default RecentTransactions;
