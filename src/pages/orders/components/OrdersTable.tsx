import { useEffect, useState } from "react";
import { getAllOrders } from "../../../service/OrderService";
import OrdersTableHeader from "./OrdersTableHeader";
import { Order } from "../../../types/Order";
import { Column } from "primereact/column";
import {
  DataTableStyle,
  TableHeaderStyle,
} from "../../../constants/TableStyles";
import {
  orderStatusColors,
  paymentStatusColors,
} from "../../../constants/StatusColors";
import StatusBadge from "../../../components/StatusBadge";
import { DataTable } from "primereact/datatable";

const OrdersTable = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedOrders, setSelectedOrders] = useState<Order[]>([]);

  const orderStatusOptions = [
    { label: "All", value: "All" },
    { label: "Ready", value: "Ready" },
    { label: "Shipped", value: "Shipped" },
    { label: "Received", value: "Received" },
    { label: "Cancelled", value: "Cancelled" },
  ];

  useEffect(() => {
    getAllOrders().then((data) => {
      setOrders(data);
      setFilteredOrders(data);
    });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    filterOrders(value, selectedStatus);
  };

  const handleStatusChange = (e: { value: string | null }) => {
    setSelectedStatus(e.value);

    if (e.value === "All") {
      setSearchTerm("");
      getAllOrders().then((data) => {
        setOrders(data);
        setFilteredOrders(data);
      });
    } else {
      filterOrders(searchTerm, e.value);
    }
  };

  const filterOrders = (search: string, status: string | null) => {
    let filtered = orders.filter(
      (order) =>
        order.orderNumber.toLowerCase().includes(search) ||
        order.customerName.toLowerCase().includes(search)
    );

    if (status) {
      filtered = filtered.filter((order) => order.orderStatus === status);
    }

    setFilteredOrders(filtered);
  };

  const statusTemplate = (
    rowData: Order,
    statusField: "paymentStatus" | "orderStatus"
  ) => {
    const statusColors =
      statusField === "paymentStatus" ? paymentStatusColors : orderStatusColors;
    return (
      <StatusBadge status={rowData[statusField]} statusColors={statusColors} />
    );
  };

  const totalTemplate = (rowData: Order) => {
    return <span>${rowData.total.toFixed(2)}</span>;
  };

  return (
    <div className="bg-white h-full rounded">
      <DataTable
        value={filteredOrders}
        dataKey="orderNumber"
        tableStyle={DataTableStyle}
        selection={selectedOrders}
        size="small"
        selectionMode="multiple"
        onSelectionChange={(e) => {
          const selected = Array.isArray(e.value) ? e.value : [e.value];
          setSelectedOrders(selected);
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
        <Column field="date" header="Date" headerStyle={TableHeaderStyle} />
        <Column
          field="customerName"
          header="Customer Name"
          headerStyle={TableHeaderStyle}
        />
        <Column
          field="paymentStatus"
          header="Payment Status"
          body={(rowData) => statusTemplate(rowData, "paymentStatus")}
          headerStyle={TableHeaderStyle}
          bodyStyle={{ textAlign: "start" }}
        />
        <Column
          field="orderStatus"
          header="Order Status"
          body={(rowData) => statusTemplate(rowData, "orderStatus")}
          headerStyle={TableHeaderStyle}
          bodyStyle={{ textAlign: "start" }}
        />
        <Column
          field="total"
          header="Total"
          body={totalTemplate}
          headerStyle={TableHeaderStyle}
        />
      </DataTable>
    </div>
  );
};

export default OrdersTable;
