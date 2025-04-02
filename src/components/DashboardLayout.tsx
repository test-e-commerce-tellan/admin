import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Topbar />
      <div className="flex flex-1 mt-16"> {/* Add mt-16 to push the content below the fixed topbar */}
        <Sidebar />
        <main className="flex-1 overflow-auto p-6">
          <Outlet /> {/* Dynamically rendered pages */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
