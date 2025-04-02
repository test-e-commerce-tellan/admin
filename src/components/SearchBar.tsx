
const SearchBar = () => {
  return (
    <div className="flex items-center bg-gray-200 p-2 rounded-lg shadow-md max-w-2xl mx-auto">
      {/* Logo */}
      <div className="flex items-center mr-4">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" /> {/* Replace with your logo */}
      </div>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Search Icon */}
      <div className="ml-2 cursor-pointer">
        icon here
      </div>
    </div>
  );
};

export default SearchBar;
