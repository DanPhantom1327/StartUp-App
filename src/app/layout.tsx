import "./globals.css";
import NavBar from "@/widgets/navbar/UI/NavBar";

export const metadata = {
  title: "StartUp App",
  description: "Landing page creada con Next.js y arquitectura FSD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

