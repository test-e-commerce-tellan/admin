import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 18000 },
  { month: "Apr", revenue: 14000 },
  { month: "May", revenue: 20000 },
  { month: "Jun", revenue: 17000 },
];

const AverageOrdersGraph = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#A1A7C4" }} />
          
          <YAxis
            tick={{ fontSize: 12, fill: "#A1A7C4" }}
            tickFormatter={(value) => `$${value.toFixed(2)}`}
          />

          <Tooltip />
          <Line
            type="linear"
            dataKey="revenue"
            stroke="#0000FF"
            strokeWidth={3}
            activeDot={{ r: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageOrdersGraph;
