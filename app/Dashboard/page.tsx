"use client";

import CountingCard from "@/components/Counting-card";
import ReservationMenu from "@/components/ReservationMenu";
import Button from "@/components/Button";

export default function DashboardPage() {
  // Aquí NO ponemos datos fijos, solo dejamos la estructura
  // Los datos reales vendrán del backend más adelante

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <Button variant="primary">Nueva Reservación</Button>
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CountingCard title="Total Rooms" value="--" subtitle="Available" />
        <CountingCard title="Occupation" value="--" subtitle="Current rate" />
        <CountingCard title="Reservations" value="--" subtitle="This month" />
        <CountingCard title="Monthly Income" value="--" subtitle="October" />
      </div>

      {/* Reservas recientes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Reservaciones Recientes</h2>
          {/* Aquí se mapearán las reservas que vengan del backend */}
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Atención Requerida</h2>
          {/* Aquí se mapearán las alertas que vengan del backend */}
        </div>
      </div>

      {/* Ocupación últimos 7 días */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Ocupación (últimos 7 días)</h2>
        {/* Aquí se renderizará un gráfico o lista con datos dinámicos */}
      </div>
    </div>
  );
}