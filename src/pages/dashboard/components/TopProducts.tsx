import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { TextPrimary } from "../../../constants/Colors";
import { useEffect, useState } from "react";
import { Product } from "../../../types/Product";
import { getTopProductsByUnitsSold } from "../../../service/ProductService";

const TopProducts = () => {
  const [topProducts, setTopProducts] = useState<Product[] | undefined>(
    undefined
  );

  useEffect(() => {
    getTopProductsByUnitsSold().then((data) => setTopProducts(data));
  }, []);

  const nameTemplate = (rowData: Product) => (
    <div className="flex items-center">
      <img
        src={rowData.imageUrl}
        alt={rowData.name}
        className="w-10 h-10 rounded-full mr-3"
      />
      <span>{rowData.name}</span>
    </div>
  );

  const priceTemplate = (rowData: Product) => (
    <span>${rowData.price.toFixed(2)}</span>
  );

  return (
    <>
      <div className="bg-white rounded w-full p-4 text-black">
        <h3 className="font-bold text-base">Top Products By Units Sold</h3>

        <div className="mt-4">
          <DataTable
            value={topProducts}
            tableStyle={{
              minWidth: "5rem",
              fontSize: "0.875rem",
            }}
          >
            <Column
              field="name"
              header="Name"
              body={nameTemplate}
              headerStyle={{
                fontWeight: "normal",
                fontSize: ".75rem",
                color: TextPrimary,
              }}
            ></Column>
            <Column
              field="price"
              header="Price"
              body= {priceTemplate}
              headerStyle={{
                fontWeight: "normal",
                fontSize: ".75rem",
                color: TextPrimary,
              }}
            ></Column>
            <Column
              field="unitsSold"
              header="Units Sold"
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

export default TopProducts;
