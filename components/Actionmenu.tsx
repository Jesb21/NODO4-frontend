"use client";

import { useState, useRef, useEffect } from "react";
import { FaEdit, FaShieldAlt, FaLock } from "react-icons/fa";

interface ActionMenuProps {
  onEdit?: () => void;
  onViewPermissions?: () => void;
  onDeactivate?: () => void;
}

export default function ActionMenu({
  onEdit,
  onViewPermissions,
  onDeactivate,
}: ActionMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {/* Botón que abre/cierra el menú */}
      <button
        onClick={() => setOpen(!open)}
        className="btn-icon"
        aria-haspopup="true"
        aria-expanded={open}
      >
        ⋮
      </button>

      {/* Menú desplegable */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
          <ul className="py-1 text-sm text-gray-700">
            <li>
              <button
                onClick={onEdit}
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
              >
                <FaEdit /> Edit
              </button>
            </li>
            <li>
              <button
                onClick={onViewPermissions}
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
              >
                <FaShieldAlt /> View permissions
              </button>
            </li>
            <li>
              <button
                onClick={onDeactivate}
                className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-red-50"
              >
                <FaLock /> Deactivate
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}