import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const name = payload[0].name.replace(/(\D+)(\d+)/, "$1 $2");
    return (
      <div className="bg-gray-900 text-white px-6 py-2 rounded-lg shadow-md border border-gray-300 text-center">
        <p className="text-xs font-semibold">{payload[0].value} Orders</p>
        <p className="text-xs font-light">
          {name}, {label}
        </p>
      </div>
    );
  }

  return null;
};

const OrderGraph = () => {
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
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#A1A7C4" }} />
          <YAxis tick={{ fontSize: 12, fill: "#A1A7C4" }} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="linear"
            dataKey="May21"
            stroke="#0000FF"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
          <Line
            type="linear"
            dataKey="May22"
            stroke="#808080"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderGraph;
