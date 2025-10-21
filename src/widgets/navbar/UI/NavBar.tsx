"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full bg-gray-900 text-white flex justify-between items-center px-6 py-4 shadow-md">
      <div className="flex items-center gap-2">
        <Image src="startup-app/public/logo.jpeg" alt="logo" width={32} height={32} />
        <span className="text-xl font-bold">StartUp-App 🚀</span>
      </div>
      <div className="flex gap-4">
        <Link href="/">Inicio</Link>
        <Link href="/about">Nosotros</Link>
        <Link href="/contact">Contacto</Link>
      </div>
    </nav>
  );
}
