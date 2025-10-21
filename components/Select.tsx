"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function Select({
  options,
  placeholder = "Select an option",
  value,
  onChange,
}: SelectProps) {
  const [open, setOpen] = useState(false);

  const selected = options.find((opt) => opt.value === value);

  return (
    <div className="relative w-64">
      {/* Botón principal */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 hover:border-gray-400 focus:outline-none"
      >
        <span>{selected ? selected.label : placeholder}</span>
        <FaChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Opciones */}
      {open && (
        <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded shadow-lg z-50 max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <li key={opt.value}>
              <button
                type="button"
                onClick={() => {
                  onChange?.(opt.value);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                  value === opt.value ? "bg-gray-50 font-medium" : ""
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}