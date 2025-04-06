import { PrimaryButton } from "../../components/Button";
import { FiDownload } from "react-icons/fi";
import CustomerGrowth from "./components/CustomerGrowth";
import CustomerStatistics from "./components/CustomerStatistics";
import CardComponent from "./components/CardComponent";

const Reports = () => {
  const handleDownload = () => {};

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h4 className="text-base font-bold">Reports</h4>

        <PrimaryButton
          text="Export"
          className="font-bold"
          icon={<FiDownload />}
          onClick={handleDownload}
        />
      </div>

      <div className="mt-4">
        <CustomerGrowth />
      </div>

      <div className="mt-4">
        <CustomerStatistics />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
};

export default Reports;
