import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavigationItemProps {
  to: string;
  icon: ReactNode;
  text: string;
  trailingText?: string;
}

export default function NavigationItem({
  to,
  icon,
  text,
  trailingText,
}: NavigationItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-between p-3 rounded ${
          isActive
            ? "bg-gray-700 text-white"
            : "hover:bg-gray-800 text-gray-300"
        }`
      }
    >
      <div className="flex items-center space-x-3">
        <span className="text-lg">{icon}</span>
        <span>{text}</span>
      </div>
      {trailingText && (
        <span className="text-sm text-gray-400">{trailingText}</span>
      )}
    </NavLink>
  );
}
