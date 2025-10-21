import { ReactNode } from "react";

interface MenuItemProps {
  icon?: ReactNode;
  label: string;
  onClick?: () => void;
  danger?: boolean; // para estilos de acciones destructivas
}

export default function MenuItem({ icon, label, onClick, danger }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 w-full px-4 py-2 text-sm rounded 
        ${danger 
          ? "text-red-600 hover:bg-red-50" 
          : "text-gray-700 hover:bg-gray-100"}`}
    >
      {icon && <span className="text-base">{icon}</span>}
      <span>{label}</span>
    </button>
  );
}