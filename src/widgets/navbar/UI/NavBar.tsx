"use client";

import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="w-full bg-gray-900 text-white flex justify-between items-center px-6 py-4 shadow-md">
      {/* Logo y nombre */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo.jpeg"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
          priority
        />
        <span className="text-xl font-bold">StartUp-App 🚀</span>
      </div>

      {/* Menú de navegación */}
      <div className="flex gap-4">
        <Link href="/" className="bg-green-400 hover:text-black-100 px-4 py-2 rounded-md">
          Inicio
        </Link>
        <Link href="/clientes" className="bg-green-400 hover:text-black-100 px-4 py-2 rounded-md">
          Nuestros clientes
        </Link>
        <Link
          href="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}


