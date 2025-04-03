interface StatusBadgeProps {
  status: string;
  statusColors: { [key: string]: string }; 
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, statusColors }) => {
  const colorClass = statusColors[status] || "bg-gray-500 text-white";
  return (
    <span className={`px-2 py-1 rounded text-sm font-semibold ${colorClass}`}>
      {status}
    </span>
  );
};

export default StatusBadge;