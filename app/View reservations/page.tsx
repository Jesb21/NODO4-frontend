"use client";

import Button from "@/components/Button";
import Select from "@/components/Select";
import Card from "@/components/Card";
import Table from "@/components/Table";

export default function ReservationsPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reservation Management</h1>
          <p className="text-sm text-gray-500">Manage hotel reservations</p>
        </div>
        <Button variant="primary">New reservation</Button>
      </div>

      {/* Filtros */}
      <div className="w-64">
        <Select options={[]} placeholder="All states" />
      </div>

      {/* Resumen de reservas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card name="" email="">
          <h3 className="text-sm text-gray-500">Total reservations</h3>
          <p className="text-2xl font-bold text-gray-800">--</p>
        </Card>
        <Card name="" email="">
          <h3 className="text-sm text-gray-500">Confirmed</h3>
          <p className="text-2xl font-bold text-gray-800">--</p>
        </Card>
        <Card name="" email="">
          <h3 className="text-sm text-gray-500">Check-in</h3>
          <p className="text-2xl font-bold text-gray-800">--</p>
        </Card>
        <Card name="" email="">
          <h3 className="text-sm text-gray-500">Earnings</h3>
          <p className="text-2xl font-bold text-gray-800">--</p>
        </Card>
      </div>

      {/* Tabla de reservas */}
      <div className="bg-white shadow rounded-lg p-4">
        <Table
          columns={[
            { key: "guest", label: "Guest" },
            { key: "room", label: "Room" },
            { key: "checkIn", label: "Check-in" },
            { key: "checkOut", label: "Check-out" },
            { key: "guests", label: "Guests" },
            { key: "total", label: "Total" },
            { key: "state", label: "State" },
            { key: "actions", label: "Actions" },
          ]}
          data={[]} // 👈 vacío, se llenará con datos del backend
        />
      </div>
    </div>
  );
}