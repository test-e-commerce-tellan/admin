import DropdownButton from "../../../components/DropdownButton";
import OrderGraph from "./OrderGraph";

const OrderStatistics = () => {
  const handleDropdown = () => {};
  const dropdownOptions: string[] = ["Last 12 hours"];
  return (
    <>
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

            <div className="flex flex-row justify-betweeen gap-x-4 mt-4">
              <label className="flex items-center mr-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="text-gray-700 pl-1">May 21</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  defaultChecked
                />
                <span className="text-gray-700 pl-1">May 22</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <OrderGraph />
        </div>
      </div>
    </>
  );
};

export default OrderStatistics;
