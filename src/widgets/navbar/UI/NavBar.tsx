"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full bg-gray-900 text-white flex justify-between items-center px-6 py-4 shadow-md">
      <div className="text-xl font-bold">StartUp-App 🚀</div>
      <div className="flex gap-4">
        <Link href="/">Inicio</Link>
        <Link href="/about">Nosotros</Link>
        <Link href="/contact">Contacto</Link>
      </div>
    </nav>
  );
}