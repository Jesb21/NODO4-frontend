import Button from "@/components/Button";

interface CardProps {
  name: string;
  email: string;
  children: React.ReactNode;
  phone?: string;
  role?: string;
  state?: string;
  createdAt?: string;
  dni?: string;
  age?: number;
  registerDate?: string;
}

export default function Card({
  name,
  email,
  phone,
  role,
  state,
  createdAt,
  dni,
  age,
  registerDate,
}: CardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 w-80">
      {/* Header con avatar e info básica */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 text-white font-bold">
          {name ? name.substring(0, 2) : "??"}
        </div>
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      {/* Información adicional */}
      <div className="mt-4 space-y-1 text-sm text-gray-700">
        {role && <p><span className="font-medium">Role:</span> {role}</p>}
        {phone && <p><span className="font-medium">Phone:</span> {phone}</p>}
        {state && <p><span className="font-medium">State:</span> {state}</p>}
        {createdAt && <p><span className="font-medium">Created at:</span> {createdAt}</p>}
        {dni && <p><span className="font-medium">DNI:</span> {dni}</p>}
        {age && <p><span className="font-medium">Age:</span> {age} años</p>}
        {registerDate && <p><span className="font-medium">Register:</span> {registerDate}</p>}
      </div>

      {/* Acciones */}
      <div className="mt-4 flex gap-2">
        <Button variant="secondary">View</Button>
        <Button variant="primary">Action</Button>
      </div>
    </div>
  );
}