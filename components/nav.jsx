import Image from "next/image";
import Link from "next/link";
import { Norican, Inter } from "@next/font/google";
import { useState } from "react";

const norican = Norican({
  weight: "400",
  subsets: ["latin"],
  fallback: ["brush script m7"],
});

const inter = Inter({ subsets: ["latin"], fallback: ["arial"] });

export default function Nav({ logo }) {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  const menuItems = [
    { n: "Quién soy", l: "/quien-soy" },
    { n: "Neuroalma chat-Ai", l: "https://n8n-production-bc2e.up.railway.app/webhook/428e6420-d978-492e-accd-fe9037add400/chat" },
    { n: "Entrevistas", l: "/entrevistas" },
    { n: "Conversaciones con Mayka", l: "/conversaciones" },
    { n: "Consultoría Organizacional", l: "/consultoria" },
    { n: "Mensajes del Más Allá", l: "/mensajes" },
    { n: "Canalización a Distancia", l: "/canalizacion" },
    { n: "Registros Akáshicos", l: "/registros" },
    { n: "Regresiones", l: "/regresiones" },
    { n: "Análisis de Sueños", l: "/suenos" },
    { n: "Terapia del Duelo", l: "/duelo" },
    { n: "Contacto", l: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100000] bg-[#131210]/95 backdrop-blur-md border-b border-[#D4AF37]/20">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        
          
        {/* BOTÓN HAMBURGUESA / CERRAR */}
        <button 
          onClick={handleNavOpen} 
          aria-label="Toggle menu"
          className="z-[100001] p-2 text-[#D4AF37] focus:outline-none"
        >
          {navOpen ? (
            <span style={{ fontSize: '1.8rem', color: '#D4AF37', fontWeight: 'bold' }}>✕</span>
          ) : (
            <Image
              src="/assets/Menu-Icon.svg"
              height={40}
              width={40}
              alt="menu icon"
              style={{ filter: 'brightness(0) invert(1)' }} // Hace el icono blanco/dorado
              onError={(e) => {
                // Si la imagen falla, muestra las 3 rayas en oro
                e.target.style.display = 'none';
              }}
            />
          )}
        </button>

      </div>

      {/* MENÚ DESPLEGABLE LATERAL (SÓLO RENDERIZA CUANDO navOpen ES TRUE) */}
      {navOpen && (
        <div className={inter.className}>
          {/* Fondo traslúcido para cerrar al hacer clic fuera */}
          <div 
            onClick={handleNavOpen} 
            className="fixed inset-0 bg-black/60 z-[99998]"
          />

          <nav className="fixed top-0 right-0 h-screen w-[85%] max-w-[320px] bg-[#1A1916] border-l border-[#D4AF37]/30 z-[99999] shadow-[-10px_0_30px_rgba(0,0,0,0.8)] overflow-y-auto">
            <ul className="flex flex-col text-left text-[0.8rem] gap-y-4 px-8 pt-28 uppercase tracking-[0.15em] text-[#EAE6DF] font-medium">
              {menuItems.map((item, i) => (
                <li key={i} className="border-b border-[#D4AF37]/20 pb-3 hover:text-[#D4AF37] transition-colors">
                  <Link 
                    href={item.l} 
                    onClick={handleNavOpen} 
                    style={{ color: '#EAE6DF', textDecoration: 'none', display: 'block' }}
                    onMouseOver={(e) => e.target.style.color = '#D4AF37'}
                    onMouseOut={(e) => e.target.style.color = '#EAE6DF'}
                  >
                    {item.n}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
