import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store.ts";
import { fetchOrders } from "../../../store/features/orders/orderSlice.ts";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import StatusBadge from "../../../components/StatusBadge";
import OrdersTableHeader from "./OrdersTableHeader";
import {
  DataTableStyle,
  TableHeaderStyle,
} from "../../../constants/TableStyles";

import { orderStatusColors } from "../../../constants/StatusColors";
import {
  Order,
  OrderStatus,
} from "../../../store/features/orders/orderTypes.ts";
import { LoadingState } from "../../../types/LoadingStatus.ts";
import LoadingPage from "../../../components/LoadingPage.tsx";
import { DurationOption, getDateRange } from "../../../utils/dateUtils.ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import { Button } from "../../../components/ui/button.tsx";

const OrdersTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { orders, status } = useSelector((state: RootState) => state.orders);

  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedOrders, setSelectedOrders] = useState<Order[]>([]);
  const [selectedDuration] = useState<DurationOption>("this_month");

  const orderStatusOptions = [
    { label: "All", value: "All" },
    ...Object.values(OrderStatus).map((status) => ({
      label: status.charAt(0).toUpperCase() + status.slice(1),
      value: status,
    })),
  ];

  useEffect(() => {
    const { start_date, end_date } = getDateRange(selectedDuration);
    dispatch(fetchOrders({ start_date, end_date }));
  }, [dispatch, selectedDuration]);

  useEffect(() => {
    setFilteredOrders(orders);
  }, [orders]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    filterOrders(value, selectedStatus);
  };

  const handleStatusChange = (e: { value: string | null }) => {
    setSelectedStatus(e.value);

    if (e.value === "All") {
      setSearchTerm("");
      setFilteredOrders(orders);
    } else {
      filterOrders(searchTerm, e.value);
    }
  };

  const filterOrders = (search: string, status: string | null) => {
    let filtered = orders.filter(
      (order) =>
        order.order_id.toString().includes(search) ||
        order.order_id.toString().includes(search)
    );

    if (status && status !== "All") {
      filtered = filtered.filter((order) => order.status === status);
    }

    setFilteredOrders(filtered);
  };

  const statusTemplate = (rowData: Order) => {
    const colorClass = orderStatusColors[rowData.status];
    return <StatusBadge text={rowData.status} className={colorClass} />;
  };

  const handleEdit = (order: Order) => {
    console.log("Edit order " + order.id);
  };

  const handleDelete = (order: Order) => {
    console.log("Delete order " + order.id);
  };

  const actionsTemplate = (order: Order) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-full"
          aria-label="Actions"
        >
          <EllipsisVertical className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-auto">
        <DropdownMenuItem onClick={() => handleEdit(order)}>
          <Pencil className="mr-2 h-4 w-4" /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDelete(order)}>
          <Trash2 className="mr-2 h-4 w-4 text-red-400" /> <span className="text-red-400">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  if (status == LoadingState.Loading) {
    return <LoadingPage />;
  }

  return (
    <div className="card">
      <DataTable
        value={filteredOrders}
        dataKey="id"
        tableStyle={DataTableStyle}
        selection={selectedOrders}
        size="small"
        selectionMode="checkbox"
        onSelectionChange={(e) => {
          setSelectedOrders(Array.isArray(e.value) ? e.value : []);
        }}
        paginator
        rows={10}
        rowsPerPageOptions={[10, 20, 50]}
        scrollable
        scrollHeight="500px"
        header={
          <OrdersTableHeader
            searchTerm={searchTerm}
            onSearchChange={handleSearch}
            selectedStatus={selectedStatus}
            onStatusChange={handleStatusChange}
            orderStatusOptions={orderStatusOptions}
          />
        }
      >
        <Column selectionMode="multiple" headerStyle={TableHeaderStyle} />
        <Column
          header="Order ID"
          body={(order: Order) => `MG${order.order_id}`}
          headerStyle={TableHeaderStyle}
          className="font-bold text-xs"
        />
        <Column
          header="Full Name"
          body={(order: Order) => order.recipient.full_name}
          headerStyle={TableHeaderStyle}
          className="text-xs"
        />
        <Column
          field="address"
          header="Address"
          headerStyle={TableHeaderStyle}
          className="text-xs"
        />
        <Column
          field="orderStatus"
          header="Status"
          body={(rowData) => statusTemplate(rowData)}
          headerStyle={TableHeaderStyle}
          className="text-xs"
        />
        <Column
          field="total"
          header="Total Cost"
          body={(order: Order) => (
            <span className="text-xs">KES {order.total_cost.toFixed(2)}</span>
          )}
          headerStyle={TableHeaderStyle}
          className="text-xs"
        />
        <Column
          field="createdAt"
          header="Created At"
          body={(order: Order) =>
            new Date(order.created_at).toLocaleDateString("en-KE", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          }
          headerStyle={TableHeaderStyle}
          className="text-xs"
        />
        <Column
          body={actionsTemplate}
          header="Actions"
          headerStyle={TableHeaderStyle}
          style={{ width: "4rem", textAlign: "center" }}
        />
      </DataTable>
    </div>
  );
};

export default OrdersTable;
