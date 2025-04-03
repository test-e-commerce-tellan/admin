import Last7DaysGraph from "./Last7DaysGraph";

const Last7DaysSales = () => {
  return (
    <>
      <div className="flex flex-col space-y-2 bg-white rounded text-black p-4">
        <h2 className="text-md font-bold">Last 7 Days Sales</h2>
        <div className="flex flex-col pt-2">
          <p className="font-bold">1,259</p>
          <span className="text-gray-500">Items sold</span>
        </div>

        <div className="flex flex-col pt-2">
          <p className="font-bold">$12,546</p>
          <span className="text-gray-500">Revenue</span>
        </div>

        <div className="pt-2">
          <Last7DaysGraph />
        </div>
      </div>
    </>
  );
};

export default Last7DaysSales;
