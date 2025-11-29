'use client'; 

import { useState } from 'react';
// import { useRouter } from 'next/navigation'; // Comentado para compatibilidad con la vista previa

export default function LoginPage() {
  // const router = useRouter();
  
  // Estado para guardar email y password
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Función que actualiza el estado al escribir
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Funcion que envía los datos al Backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Guardamos el usuario
        localStorage.setItem('usuario', JSON.stringify(data.user));
        
        alert("✅ ¡Login Exitoso! Bienvenido " + data.user.name);
        
        // Redirección usando window.location para evitar errores en la vista previa
        
        window.location.href = '/'; 
      } else {
        alert("❌ Error: " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Iniciar sesión
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="usuario@ejemplo.com"
            className="block w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
            className="block w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition"
          >
            Iniciar
          </button>
           <p className="text-center text-gray-300 mt-4">
            ¿No tienes cuenta?{" "}
            <a
              href="/registro"
              className="text-green-400 hover:text-green-300 font-medium transition"
            >
              Regístrate
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};