"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Card from "@/components/Card";

export default function RoomsPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Room Management</h1>
          <p className="text-sm text-gray-500">Manage hotel rooms</p>
        </div>
        <Button variant="primary">New room</Button>
      </div>

      {/* Filtro de búsqueda */}
      <div className="w-full md:w-1/3">
        <Input placeholder="Search by number or room type..." />
      </div>

      {/* Lista de habitaciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Aquí se mapearán las habitaciones desde el backend */}
        <Card>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">--</h2>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs">
              Status: --
            </span>
          </div>

          <div className="mt-4 space-y-1 text-sm text-gray-600">
            <p>Type: --</p>
            <p>Floor: --</p>
            <p>Base price: --</p>
            <p>Capacity: --</p>
          </div>

          <div className="mt-4 flex gap-2">
            <Button variant="secondary">View Details</Button>
            <Button variant="primary">Edit</Button>
            <Button variant="danger">Delete</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}