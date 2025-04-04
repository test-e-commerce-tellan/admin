import DropdownButton from "../../../components/DropdownButton";
import CustomerGrowthGraph from "./CustomerGrowthGraph";
import { CustomerGrowthData } from "../../../types/CustomerGrowthData";
import { useState } from "react";

const CustomerGrowth = () => {
  const dropdownOptions: string[] = ["Last 12 months"];
  const handleDropdown = (selectedOption: string) => {
    console.log("Selected option:", selectedOption);
  };

  const customerGrowthData: CustomerGrowthData[] = [
    { month: "Jan", returningCustomers: 300, newCustomers: 200 },
    { month: "Feb", returningCustomers: 280, newCustomers: 220 },
    { month: "Mar", returningCustomers: 350, newCustomers: 150 },
    { month: "Apr", returningCustomers: 400, newCustomers: 300 },
    { month: "May", returningCustomers: 450, newCustomers: 250 },
    { month: "Jun", returningCustomers: 500, newCustomers: 300 },
    { month: "Jul", returningCustomers: 550, newCustomers: 350 },
    { month: "Aug", returningCustomers: 600, newCustomers: 400 },
    { month: "Sep", returningCustomers: 580, newCustomers: 420 },
    { month: "Oct", returningCustomers: 620, newCustomers: 380 },
    { month: "Nov", returningCustomers: 640, newCustomers: 360 },
    { month: "Dec", returningCustomers: 700, newCustomers: 400 },
  ];

  const [showReturningCustomers, setShowReturningCustomers] = useState(true);
  const [showNewCustomers, setShowNewCustomers] = useState(true);

  return (
    <>
      <div className="flex flex-col bg-white rounded text-black p-4">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col">
            <h4 className="text-md font-semibold">Customer Growth</h4>
            <div className="flex flex-row justify-betweeen gap-x-4 mt-4">
              <label className="flex items-center mr-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={showReturningCustomers}
                  onChange={(e) => setShowReturningCustomers(e.target.checked)}
                />
                <span className="text-gray-700 pl-1">Returning Customers</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={showNewCustomers}
                  onChange={(e) => setShowNewCustomers(e.target.checked)}
                />
                <span className="text-gray-700 pl-1">New Customers</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <DropdownButton
              label={"Last 12 Months"}
              options={dropdownOptions}
              onSelect={handleDropdown}
            />
          </div>
        </div>
        <div className="mt-8">
          <CustomerGrowthGraph
            data={customerGrowthData}
            showReturningCustomers={showReturningCustomers}
            showNewCustomers={showNewCustomers}
          />
        </div>
      </div>
    </>
  );
};

export default CustomerGrowth;
