import { useEffect, useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Coupon } from "../../../types/Coupon";
import { fetchCoupons } from "../../../store/features/coupons/couponSlice.ts";
import { ProgressSpinner } from "primereact/progressspinner";
import {
  DataTableStyle,
  TableHeaderStyle,
} from "../../../constants/TableStyles";
import StatusBadge from "../../../components/StatusBadge";
import { useAppDispatch, useAppSelector } from "../../../store/hooks.ts";

const CouponsTable = () => {
  const dispatch = useAppDispatch();
  const { coupons, status, error } = useAppSelector((state) => state.coupons);
  const [selectedCoupons, setSelectedCoupons] = useState<Coupon[]>([]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCoupons());
    }
  }, [status, dispatch]);

  const activeTemplate = (rowData: Coupon) => (
    <StatusBadge
      text={rowData.active ? "Active" : "Used"}
      className={
        rowData.active
          ? "bg-green-500 text-white font-extrabold"
          : "bg-red-400 text-white"
      }
    />
  );

  const dateTemplate = (rowData: Coupon) =>
    new Date(rowData.created_at).toLocaleString();

  const amountTemplate = (rowData: Coupon) => (
    <span>KES {rowData.amount.toFixed(2)}</span>
  );

  if (status === "loading") {
    return (
      <div className="p-4 flex justify-center items-center h-full">
        <ProgressSpinner/>
      </div>
    );
  }

  if (status === "failed") {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-white h-screen rounded">
      <DataTable
        value={coupons}
        dataKey="coupon_key"
        tableStyle={DataTableStyle}
        selection={selectedCoupons}
        size="small"
        selectionMode="multiple"
        onSelectionChange={(e) => {
          const selected = Array.isArray(e.value) ? e.value : [e.value];
          setSelectedCoupons(selected);
        }}
        paginator
        rows={10}
        rowsPerPageOptions={[10, 20, 50]}
        scrollable
        scrollHeight="500px"
        className="flex-grow"
      >
        <Column selectionMode="multiple" headerStyle={TableHeaderStyle} />
        <Column field="name" header="Name" headerStyle={TableHeaderStyle} />
        <Column
          field="description"
          header="Description"
          headerStyle={TableHeaderStyle}
        />
        <Column
          field="coupon_key"
          header="Coupon Key"
          headerStyle={TableHeaderStyle}
        />
        <Column
          field="active"
          header="Status"
          body={activeTemplate}
          headerStyle={TableHeaderStyle}
        />
        <Column
          field="amount"
          header="Amount"
          body={amountTemplate}
          headerStyle={TableHeaderStyle}
        />
        <Column field="used" header="Used" headerStyle={TableHeaderStyle} />
        <Column
          field="max_used"
          header="Max Used"
          headerStyle={TableHeaderStyle}
        />
        <Column
          field="created_at"
          header="Created At"
          body={dateTemplate}
          headerStyle={TableHeaderStyle}
        />
      </DataTable>
    </div>
  );
};

export default CouponsTable;
