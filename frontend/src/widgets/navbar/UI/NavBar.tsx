'use client'; 

import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation'; // Comentado para compatibilidad
// import Link from 'next/link';

export default function Navbar() {
  // const router = useRouter();
  const [usuario, setUsuario] = useState<any>(null); // Estado para guardar el usuario

  //Al cargar la página, buscamos si hay alguien guardado
  useEffect(() => {
    // IMPORTANTE: Esto solo funciona si el Login guardó el usuario en localStorage antes
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  // esta funcion guarda la secion 
  const handleLogout = () => {
    localStorage.removeItem('usuario'); // Borramos datos
    setUsuario(null); // Limpiamos estado
    // lo redireciona
    window.location.href = '/login'; 
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
      {/* Tu Logo */}
      <div className="text-xl font-bold flex items-center gap-2">
        💡 StartUp-App 🚀
      </div>

      {/* Botones del menú */}
      <div className="flex items-center gap-4">
        {/* Usamos etiquetas <a> estándar para máxima compatibilidad */}
        <a href="/">
            <button className="px-4 py-2 bg-green-500 rounded text-white">Inicio</button>
        </a>
        <button className="px-4 py-2 bg-green-500 rounded text-white">Nuestros clientes</button>

        {/* Logica del usuario */}
        {usuario ? (
          // SI HAY USUARIO
          <div className="flex items-center gap-4">
            <span className="text-green-400 font-bold">
              Hola, {usuario.name.split(' ')[0]} 
            </span>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
            >
              Salir
            </button>
          </div>
        ) : (
          // SI NO HAY USUARIO
          <a href="/login">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
              Login
            </button>
          </a>
        )}
        
      </div>
    </nav>
  );
};