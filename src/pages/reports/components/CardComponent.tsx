import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type Stat = {
  label: string;
  value: string | number;
};

type CardComponentProps = {
  title: string;
  value: number;
  totalValue: number;
  color: string;
  statistics: Stat[];
};

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  value,
  totalValue,
  color,
  statistics,
}) => {
  const percentage = Math.round((value / totalValue) * 100);

  return (
    <div className="card flex flex-col w-full max-w-sm">
      <h4 className="text-lg font-semibold text-gray-700">{title}</h4>

      <div className="relative flex justify-center items-center my-4 h-[180px]">
        <ResponsiveContainer width="80%" height="100%">
          <PieChart>
            <Pie
              data={[
                { name: title, value },
                { name: "Other", value: totalValue - value },
              ]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={60}
              fill="#8884d8"
              stroke="none"
            >
              <Cell fill={color} />
              <Cell fill="#e0e0e0" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute text-center">
          <span className="text-xl font-bold text-gray-800">{percentage}%</span>
        </div>
      </div>

      <div className="pt-1">
        {statistics.map((stat, index) => (
          <div key={index} className="flex justify-between py-1">
            <span className="text-sm font-light text-gray-500">
              {stat.label}
            </span>
            <span className="text-medium font-bold text-gray-800">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
