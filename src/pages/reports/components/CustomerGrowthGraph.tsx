import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";
import { Gray } from "../../../constants/Colors";
import { CustomerGrowthData } from "../../../types/CustomerGrowthData";

interface CustomerGrowthGraphProps {
  data: CustomerGrowthData[];
  showReturningCustomers: boolean;
  showNewCustomers: boolean;
}

const CustomerGrowthGraph: React.FC<CustomerGrowthGraphProps> = ({
  data,
  showReturningCustomers,
  showNewCustomers,
}) => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#A1A7C4" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fontSize: 12, fill: "#A1A7C4" }}
            axisLine={false}
            tickLine={false}
            label={{
              value: "Customers",
              angle: -90,
              position: "insideLeft",
              offset: -20,
            }}
          />

          <Tooltip cursor={{ fill: "transparent" }} />

          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          {showReturningCustomers && (
            <Bar
              dataKey="returningCustomers"
              fill={Gray}
              barSize={10}
              radius={[10, 10, 0, 0]}
              name="Returning Customers"
            />
          )}

          {showNewCustomers && (
            <Bar
              dataKey="newCustomers"
              fill="#3b82f6"
              barSize={10}
              radius={[10, 10, 0, 0]}
              name="New Customers"
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomerGrowthGraph;
