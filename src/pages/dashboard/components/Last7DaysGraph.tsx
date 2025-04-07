import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const Last7DaysGraph = () => {
  const data = [
    { name: "12", amt: 1500 },
    { name: "13", amt: 1800 },
    { name: "14", amt: 1750 },
    { name: "15", amt: 1700 },
    { name: "16", amt: 2181 },
    { name: "17", amt: 2500 },
  ];

  return (
    <div className="w-full h-48">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name"  tick={{ fontSize: 12, fill: "#A1A7C4" }} />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar
            dataKey="amt"
            fill="#22c55e"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Last7DaysGraph;
