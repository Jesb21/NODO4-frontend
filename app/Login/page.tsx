"use client";

import Image from "next/image";
import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isRegister) {
      // Aquí iría la llamada al backend para registrar
      console.log("Registrando:", { name, email, password });
    } else {
      // Aquí iría la llamada al backend para login
      console.log("Iniciando sesión:", { email, password });
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Lado izquierdo: imagen o branding */}
      <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center">
        <Image
          src="/loginPage/loginimg.png"
          alt="Hotel room"
          fill // hace que ocupe todo el contenedor
          className="object-cover"
          priority
        />
      </div>

      {/* Lado derecho: formulario */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-6">
          {isRegister ? "Registro" : "Inicio de sesión"}
        </h2>

        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          {isRegister && (
            <Input
              label="Nombre"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <Input
            label="Usuario"
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Contraseña"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" variant="primary" className="w-full">
            {isRegister ? "Registrarse" : "Iniciar sesión"}
          </Button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          {isRegister ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-purple-600 hover:underline"
          >
            {isRegister ? "Inicia sesión" : "Regístrate"}
          </button>
        </p>
      </div>
    </div>
  );
}
