import AverageOrdersGraph from "./AverageOrdersGraph";

const AverageOrderComponent = () => {
  return (
    <>
      <div className="card h-auto space-y-4">
        <h4 className="font-bold text-lg">Average Order Value</h4>
        <div className="flex flex-row space-x-3">
          <div className="flex space-x-1">
            <h4 className="text-gray-500 font-light">This Month: </h4>{" "}
            <span className="font-bold">$48.90</span>
          </div>

          <div className="flex space-x-1">
            <h4 className="text-gray-500 font-light">Previous Month: </h4>{" "}
            <span className="font-bold">$48.90</span>
          </div>
        </div>

        <AverageOrdersGraph />
      </div>
    </>
  );
};

export default AverageOrderComponent;
