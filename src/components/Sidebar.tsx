import NavigationItem from "./NavigationItem";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FaHome />,
    trailingText: "3",
  },
  { name: "Profile", path: "/profile", icon: <FaUser />, trailingText: "New" },
  { name: "Settings", path: "/settings", icon: <FaCog /> },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-full p-4">
      <nav className="flex flex-col space-y-2">
        {menuItems.map(({ name, path, icon, trailingText }) => (
          <NavigationItem
            key={path}
            to={path}
            icon={icon}
            text={name}
            trailingText={trailingText}
          />
        ))}
      </nav>
    </aside>
  );
}