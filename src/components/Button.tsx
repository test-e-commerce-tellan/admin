import React from "react";
import { FiDelete, FiEdit } from "react-icons/fi";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  icon,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none transition duration-200 ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-100 focus:outline-none transition duration-200 ${className}`}
    >
      {text}
    </button>
  );
};

interface IconButtonProps {
  onClick?: () => void;
  icon: React.ReactNode;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-2 border rounded hover:bg-gray-100 focus:outline-none transition duration-200 ${className}`}
    >
      {icon}
    </button>
  );
};
