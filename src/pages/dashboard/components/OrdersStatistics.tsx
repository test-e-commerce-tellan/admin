import { useState } from "react";
import DropdownButton from "../../../components/DropdownButton";
import OrderGraph from "./OrderGraph";

const OrderStatistics = () => {
  const [showMay21, setShowMay21] = useState(false);
  const [showMay22, setShowMay22] = useState(true);

  const handleDropdown = () => {};
  const dropdownOptions: string[] = ["Last 12 hours"];

  const data = [
    { name: "4 AM", May21: 400, May22: 240 },
    { name: "5 AM", May21: 300, May22: 139 },
    { name: "6 AM", May21: 200, May22: 98 },
    { name: "7 AM", May21: 278, May22: 390 },
    { name: "8 AM", May21: 189, May22: 480 },
    { name: "9 AM", May21: 239, May22: 380 },
    { name: "10 AM", May21: 349, May22: 430 },
    { name: "11 AM", May21: 400, May22: 240 },
    { name: "12 PM", May21: 300, May22: 139 },
    { name: "1 PM", May21: 200, May22: 98 },
    { name: "2 PM", May21: 278, May22: 390 },
    { name: "3 PM", May21: 189, May22: 480 },
  ];

  return (
    <div className="flex flex-col bg-white rounded text-black p-4">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col">
          <h4 className="text-md font-semibold">Orders Over Time</h4>
          <div className="flex flex-row mt-3">
            <div className="mr-8">
              <h3 className="text-xl font-bold">645</h3>
              <span className="text-gray-500">Orders on May 22</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">472</h3>
              <span className="text-gray-500">Orders on May 21</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <DropdownButton
            label={"Last 12 hours"}
            options={dropdownOptions}
            onSelect={handleDropdown}
          />

          <div className="flex flex-row justify-between gap-x-4 mt-4">
            <label className="flex items-center mr-4">
              <input
                type="checkbox"
                checked={showMay21}
                onChange={(e) => setShowMay21(e.target.checked)}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="text-gray-700 pl-1">May 21</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showMay22}
                onChange={(e) => setShowMay22(e.target.checked)}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="text-gray-700 pl-1">May 22</span>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <OrderGraph data={data} showMay21={showMay21} showMay22={showMay22} />
      </div>
    </div>
  );
};

export default OrderStatistics;
