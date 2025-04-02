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
        `flex items-center justify-between p-3 rounded mb-2 ${
          isActive
            ? "bg-white text-gray-700"
            : "hover:bg-gray-800 text-gray-300"
        }`
      }
    >
      <div className="flex items-center space-x-5">
        {/* Increased spacing between icon and text */}
        <span className="text-lg pr-4">{icon}</span>
        <span>{text}</span>
      </div>
      {trailingText && (
        <span className="text-sm font-bold">{trailingText}</span>
      )}
    </NavLink>
  );
}