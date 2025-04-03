import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Product } from "../../../types/Product";
import { Button } from "primereact/button";
import ProductsTableHeader from "./ProductsTableHeader";
import StatusBadge from "../../../components/StatusBadge";
import { inventoryStatusColor } from "../../../constants/StatusColors";

interface ProductsTableProps {
  products: Product[];
  selectedProducts: Product[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  globalFilter: string;
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
  onDeleteSelected: () => void;
  onEditClicked: () => void;
  dtRef: React.RefObject<DataTable<Product[]>>;
}

export default function ProductsTable({
  products,
  selectedProducts,
  setSelectedProducts,
  globalFilter,
  setGlobalFilter,
  onDeleteSelected,
  onEditClicked,
  dtRef,
}: ProductsTableProps) {
  const dropdownOptions = [
    { label: "All", value: "All" },
    { label: "Ready", value: "Ready" },
    { label: "Shipped", value: "Shipped" },
    { label: "Received", value: "Received" },
    { label: "Cancelled", value: "Cancelled" },
  ];

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const imageBodyTemplate = (rowData: Product) => {
    return (
      <div className="flex items-center">
        <img
          src={rowData.imageUrl}
          alt={rowData.name}
          className="shadow-2 border-round mr-3"
          style={{ width: "64px", height: "64px", objectFit: "cover" }}
        />

        <div>
          <div className="font-medium text-gray-900">{rowData.name}</div>
          <div className="text-sm text-gray-500">{rowData.category}</div>
        </div>
      </div>
    );
  };

  const priceBodyTemplate = (rowData: Product) => {
    return formatCurrency(rowData.price);
  };

  const ratingBodyTemplate = (rowData: Product) => {
    return <span>{rowData.rating.toFixed(1)} (20 votes)</span>;
  };

  const inventoryBodyTemplate = (rowData: Product) => {
    return rowData.totalInventory > 0 ? (
      rowData.totalInventory + " in stock"
    ) : (
      <StatusBadge status="Out Of Stock" statusColors={inventoryStatusColor} />
    );
  };

  const actionBodyTemplate = () => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={onEditClicked}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={onDeleteSelected}
        />
      </React.Fragment>
    );
  };

  return (
    <div>
      <div className="card">
        <DataTable
          ref={dtRef}
          value={products}
          selection={selectedProducts}
          onSelectionChange={(e) =>
            setSelectedProducts(Array.isArray(e.value) ? e.value : [])
          }
          selectionMode="multiple"
          dataKey="name"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          globalFilter={globalFilter}
          header={
            <ProductsTableHeader
              searchTerm={globalFilter}
              onSearchChange={(e) => setGlobalFilter(e.target.value)}
              selectedStatus={null}
              onStatusChange={() => null}
              dropdownOptions={dropdownOptions}
            />
          }
        >
          <Column selectionMode="multiple" exportable={false}></Column>
          <Column
            field="name"
            header="Product"
            body={imageBodyTemplate}
            style={{ minWidth: "16rem" }}
          ></Column>
          <Column
            field="totalInventory"
            header="Inventory"
            body={inventoryBodyTemplate}
            sortable
            style={{ minWidth: "12rem" }}
          ></Column>
          <Column
            field="color"
            header="Color"
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="price"
            header="Price"
            body={priceBodyTemplate}
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field="rating"
            header="Rating"
            body={ratingBodyTemplate}
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "12rem" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
