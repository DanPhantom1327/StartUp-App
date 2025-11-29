"use client";

import Image from "next/image";

const clientes = [
  { nombre: "ÉXITO", img: "/exito.png" },
  { nombre: "OXXO", img: "/oxxo.png" },
  { nombre: "D1", img: "/D1.png" },
  { nombre: "Licorera Bucaros", img: "/licorera-bucaros.jpg" },
];

export default function ClientesPage() {
  return (
    <section className="mt-16 px-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-blue-400">
        Nuestros Clientes 🤝
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {clientes.map((cliente) => (
          <div
            key={cliente.nombre}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-5 flex flex-col items-center"
          >
            <Image
              src={cliente.img}
              alt={cliente.nombre}
              width={120}
              height={120}
              className="object-contain mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {cliente.nombre}
            </h2>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition">
              Ver más
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
