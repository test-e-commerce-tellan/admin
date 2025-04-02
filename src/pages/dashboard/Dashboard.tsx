import { FiSettings, FiDollarSign, FiShoppingCart, FiUsers, FiUserPlus, FiUserCheck } from "react-icons/fi";
import StatisticsBox from "./components/StatisticsBox";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col space-y-4 p-2">
      <div className="flex justify-between items-center p-4 rounded">
        <h2 className="text-lg font-semibold text-black">Dashboard</h2>
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium">
          <FiSettings className="text-lg mr-2" />
          <span>Manage</span>
        </button>
      </div>

      <div className="flex justify-between gap-4">
        <StatisticsBox
          name="Total Revenue"
          value="$50,000"
          percentage={12}
          isPositive={true}
          icon={<FiDollarSign className="text-blue-500 text-2xl" />}
        />
        <StatisticsBox
          name="Orders"
          value="1,200"
          percentage={8.3}
          isPositive={true}
          icon={<FiShoppingCart className="text-blue-500 text-2xl" />}
        />
        <StatisticsBox
          name="Unique Visitors"
          value="15,000"
          percentage={5.9}
          isPositive={true}
          icon={
            <img
            src="/images/chart-yellow.png"
            alt="Chart Icon"
            className="w-10 h-10"
            />
          }
        />
        <StatisticsBox
          name="New Users"
          value="500"
          percentage={10}
          isPositive={false}
          icon={
            <img
            src="/images/chart-green.png"
            alt="Chart Icon"
            className="w-10 h-10"
            />
          }
        />
        <StatisticsBox
          name="Existing Users"
          value="4,500"
          percentage={1.65}
          isPositive={true}
          icon={
            <img
            src="/images/chart-blue.png"
            alt="Chart Icon"
            className="w-10 h-10"
            />
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;