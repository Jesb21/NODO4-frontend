"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Card from "@/components/Card";

export default function GuestsPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Gestión de invitados</h1>
          <p className="text-sm text-gray-500">Administrar la información de los huéspedes</p>
        </div>
        <Button variant="primary">Nuevo huésped</Button>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input placeholder="Search by name, email or phone" />
        <Select options={[]} placeholder="Filter by nationality" />
        {/* Espacio para más filtros si se necesitan */}
      </div>

      {/* Resumen de huéspedes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card name="Total" email="">
          <h3 className="text-sm text-gray-500">Total de huéspedes</h3>
          <p className="text-2xl font-bold text-gray-800">--</p>
        </Card>
        <Card name="Nationalities" email="">
          <h3 className="text-sm text-gray-500">Nacionalidades</h3>
          <p className="text-2xl font-bold text-gray-800">--</p>
        </Card>
        <Card name="Email Stats" email="">
          <h3 className="text-sm text-gray-500">Con correo electrónico</h3>
          <p className="text-2xl font-bold text-gray-800">--</p>
        </Card>
        <Card name="Phone Stats" email="">
          <h3 className="text-sm text-gray-500">Por telefono</h3>
          <p className="text-2xl font-bold text-gray-800">--</p>
        </Card>
      </div>

      {/* Lista de huéspedes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Aquí se mapearán los huéspedes desde el backend */}
        <Card name="Guest" email="guest@example.com">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
              {/* Iniciales dinámicas */}
              --
            </div>
            <div>
              <p className="font-semibold text-gray-800">--</p>
              <p className="text-sm text-gray-500">--</p>
            </div>
          </div>

          <div className="mt-4 space-y-1 text-sm text-gray-600">
            <p>Email: --</p>
            <p>Guest ID: --</p>
            <p>DNI: --</p>
            <p>Billing ID: --</p>
            <p>Nationality: --</p>
            <p>Age: --</p>
            <p>Date: --</p>
          </div>

          <div className="mt-4 flex gap-2">
            <Button variant="secondary">Vista</Button>
            <Button variant="primary">Acción</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}