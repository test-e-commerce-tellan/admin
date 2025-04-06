import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const CardComponent = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md p-4">
      {/* Title at the top-left */}
      <h4 className="text-lg font-semibold text-gray-700">Card Title</h4>

      {/* Center: Pie Chart */}
      <div className="flex justify-center items-center my-4">
        <ResponsiveContainer width="80%" height={150}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between items-center border-t border-gray-300 pt-4">
        <span className="text-sm font-medium text-gray-600">Bottom Title</span>
        <span className="text-lg font-bold text-gray-800">Value</span>
      </div>
    </div>
  );
};

export default CardComponent;