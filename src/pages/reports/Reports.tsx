import { PrimaryButton } from "../../components/Button";
import { FiDownload } from "react-icons/fi";
import CustomerGrowth from "./components/CustomerGrowth";

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
    </div>
  );
};

export default Reports;
