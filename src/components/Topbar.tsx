import React from "react";

const Topbar: React.FC = () => {
  return (
    <header className="bg-gray-700 text-white shadow-md fixed top-0 left-0 right-0 h-16 flex items-center px-6 z-50">
      <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
      <h2 className="text-lg font-semibold ml-4">Top Bar header</h2>
    </header>
  );
};

export default Topbar;
