import React from "react";
import { Dropdown } from "primereact/dropdown";
import { FiEdit3, FiSearch } from "react-icons/fi";
import { IconButton } from "../../../components/Button";
import { AiOutlineDelete } from "react-icons/ai";

interface OrdersTableHeaderProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedStatus: string | null;
  onStatusChange: (e: { value: string | null }) => void;
  orderStatusOptions: { label: string; value: string | null }[];
}

const OrdersTableHeader: React.FC<OrdersTableHeaderProps> = ({
  searchTerm,
  onSearchChange,
  selectedStatus,
  onStatusChange,
  orderStatusOptions,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-2 bg-gray-50 border-b border-gray-200 rounded-t">
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
        <Dropdown
          value={selectedStatus}
          options={orderStatusOptions}
          onChange={onStatusChange}
          placeholder="Filter"
          className="w-full md:w-48 h-12 md:mr-3"
        />

        <div className="relative flex items-center w-full md:w-64">
          <FiSearch className="absolute ml-2 text-gray-400" />
          <input
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Search..."
            className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded focus:outline-none font-light text-sm"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <IconButton
          icon={<FiEdit3 />}
          onClick={() => null}
          className="h-10 w-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 mr-2"
        />
        <IconButton
          icon={<AiOutlineDelete />}
          onClick={() => null}
          className="h-10 w-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
        />
      </div>
    </div>
  );
};

export default OrdersTableHeader;
