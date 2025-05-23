import UserStatisticsComponent from "./UserStatisticsComponent";

const CustomerStatistics = () => {
  const statistics = [
    {
      title: "Existing Users",
      value: 5.653,
      percentage: 15,
      isIncrease: true,
    },
    {
      title: "New Users",
      value: 1.65,
      percentage: 10, 
      isIncrease: true,
    },
    {
      title: "Total Visits",
      value: 9.504,
      percentage: 5,
      isIncrease: false,
    },
    {
      title: "Unique Visits",
      value: 5.423,
      percentage: 20,
      isIncrease: true,
    },
  ];

  return (
    <div className="grid grid-cols-4 bg-white rounded relative">
      {statistics.map((stat, index) => (
        <div key={index} className="relative">
          <UserStatisticsComponent
            title={stat.title}
            value={stat.value}
            percentage={stat.percentage}
            isIncrease={stat.isIncrease}
          />

          {index !== statistics.length - 1 && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3/4 w-[1px] bg-gray-300"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomerStatistics;
