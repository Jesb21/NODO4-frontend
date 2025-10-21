import { ReactNode } from "react";

interface ReservationMenuProps {
  guestName: string;
  room: string;
  dateRange: string;
  status: "confirmed" | "checkin" | "pending";
  actions?: ReactNode; // opcional, por si quieres meter botones o menú contextual
}

export default function ReservationMenu({
  guestName,
  room,
  dateRange,
  status,
  actions,
}: ReservationMenuProps) {
  const statusStyles: Record<string, string> = {
    confirmed: "bg-blue-100 text-blue-700",
    checkin: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
  };

  const statusLabels: Record<string, string> = {
    confirmed: "Confirmed",
    checkin: "Check in",
    pending: "Pending",
  };

  return (
    <div className="flex items-center justify-between bg-white shadow rounded-lg p-4 mb-3">
      {/* Info principal */}
      <div>
        <h4 className="font-semibold text-gray-800">{guestName}</h4>
        <p className="text-sm text-gray-500">{room}</p>
        <p className="text-xs text-gray-400">{dateRange}</p>
      </div>

      {/* Estado */}
      <span
        className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}
      >
        {statusLabels[status]}
      </span>

      {/* Acciones opcionales */}
      {actions && <div className="ml-4">{actions}</div>}
    </div>
  );
}