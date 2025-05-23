import React, { useState } from "react";

interface DropdownButtonProps {
  label: string; 
  options: string[]; 
  onSelect: (option: string) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative inline-block text-left">
    <button
      onClick={toggleDropdown}
      className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
    >
        {label}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-sm bg-white focus:outline-none">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left focus:outline-none"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;