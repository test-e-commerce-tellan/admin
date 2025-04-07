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

type OrderGraphProps = {
  data: any[];
  showMay21: boolean;
  showMay22: boolean;
};

const OrderGraph = ({ data, showMay21, showMay22 }: OrderGraphProps) => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#A1A7C4" }} />
          <YAxis tick={{ fontSize: 12, fill: "#A1A7C4" }} />
          <Tooltip content={<CustomTooltip />} />
          {showMay21 && (
            <Line
              type="linear"
              dataKey="May21"
              stroke="#0000FF"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
          )}
          {showMay22 && (
            <Line
              type="linear"
              dataKey="May22"
              stroke="#808080"
              strokeWidth={3}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderGraph;
