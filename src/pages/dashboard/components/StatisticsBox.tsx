import React from "react";

interface StatisticsBoxProps {
  name: string;
  value: string | number;
  percentage: number;
  isPositive: boolean;
  icon: React.ReactNode;
}

const StatisticsBox: React.FC<StatisticsBoxProps> = ({ name, value, percentage, isPositive = true, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between min-w-[200px] max-w-[240px] h-auto">
      <div className="space-y-1">
        <div className="text-sm font-medium text-gray-600">{name}</div>
        <div className="text-xl font-bold text-gray-800">{value}</div>
        <div
          className={`text-xs font-medium flex items-center ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? `+${percentage}%` : `${percentage}%`}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d={
                isPositive
                  ? "M5.293 9.707a1 1 0 011.414 0L10 13.586l3.293-3.879a1 1 0 111.414 1.414l-4 4.707a1 1 0 01-1.414 0l-4-4.707a1 1 0 010-1.414z"
                  : "M14.707 10.293a1 1 0 00-1.414 0L10 13.586l-3.293-3.879a1 1 0 10-1.414 1.414l4 4.707a1 1 0 001.414 0l4-4.707a1 1 0 000-1.414z"
              }
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
        {icon}
      </div>
    </div>
  );
};

export default StatisticsBox;
