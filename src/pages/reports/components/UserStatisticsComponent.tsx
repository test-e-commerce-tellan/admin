interface UserStatisticsComponentProps {
  title: string;
  value: number;
  percentage: number;
  isIncrease: boolean;
}

const UserStatisticsComponent: React.FC<UserStatisticsComponentProps> = ({
  title,
  value,
  percentage,
  isIncrease,
}) => {
  return (
    <div className="flex flex-col bg-white shadow p-4">
      <h4 className="text-sm font-semibold text-gray-600">{title}</h4>
      <div className="text-2xl font-bold text-black mt-2">{value}</div>
      <div
        className={`text-sm mt-1 ${
          isIncrease ? "text-green-500" : "text-red-500"
        }`}
      >
        {isIncrease ? "▲" : "▼"} {percentage}%
      </div>
    </div>
  );
};

export default UserStatisticsComponent;
