"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Card from "@/components/Card";

export default function UsersPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Gestión de usuarios</h1>
          <p className="text-sm text-gray-500">
            Administrar los usuarios del sistema y sus roles
          </p>
        </div>
        <Button variant="primary">Añadir</Button>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input placeholder="Search by name or email" />
        <Select
          options={[]}
          placeholder="Filter by role"
        />
        <Select
          options={[]}
          placeholder="Filter by state"
        />
      </div>

      {/* Resumen de usuarios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card name="" email="">
          <h3 className="text-sm text-gray-500">Total de usuarios</h3>
          <p className="text-2xl font-bold text-gray-800">--</p>
        </Card>
        <Card name="" email="">
          <h3 className="text-sm text-gray-500">Usuarios activos</h3>
          <p className="text-2xl font-bold text-gray-800">--</p>
        </Card>
        <Card name="" email="">
          <h3 className="text-sm text-gray-500">Administradores</h3>
          <p className="text-2xl font-bold text-gray-800">--</p>
        </Card>
        <Card name="" email="">
          <h3 className="text-sm text-gray-500">Personal del hotel</h3>
          <p className="text-2xl font-bold text-gray-800">--</p>
        </Card>
      </div>

      {/* Lista de usuarios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Aquí se mapearán los usuarios desde el backend */}
        <Card name={""} email={""}>
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
            <p>Role: --</p>
            <p>Phone: --</p>
            <p>State: --</p>
            <p>Created at: --</p>
          </div>
        </Card>
      </div>
    </div>
  );
}