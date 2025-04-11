import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getRecentTransactions } from "../service/TransactionService";
import { Transaction } from "../types/Transaction";
import { useEffect, useState } from "react";
import StatusBadge from "./StatusBadge";
import { transactionStatusColors } from "../constants/StatusColors";
import { DataTableStyle, TableHeaderStyle } from "../constants/TableStyles";

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[] | undefined>(
    undefined
  );

  useEffect(() => {
    getRecentTransactions().then((data) => setTransactions(data));
  }, []);

  const statusTemplate = (rowData: Transaction) => {
    const status = rowData.status;
    const colorClass =
      transactionStatusColors[status] || "bg-gray-500 text-white";
    return <StatusBadge text={status} className={colorClass} />;
  };

  return (
    <>
      <div className="bg-white rounded w-full p-4 text-black">
        <h3 className="font-bold text-base">Recent Transactions</h3>

        <div className="mt-4">
          <DataTable
            value={transactions}
            tableStyle={{ ...DataTableStyle, minWidth: "5rem" }}
          >
            <Column
              field="name"
              header="Name"
              headerStyle={TableHeaderStyle}
            ></Column>
            <Column
              field="date"
              header="Date"
              headerStyle={TableHeaderStyle}
            ></Column>
            <Column
              field="amount"
              header="Amount"
              headerStyle={TableHeaderStyle}
            ></Column>
            <Column
              field="status"
              header="Status"
              body={statusTemplate}
              headerStyle={TableHeaderStyle}
            ></Column>
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default RecentTransactions;
