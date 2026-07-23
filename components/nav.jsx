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
    <div className="flex justify-between bg-[#F7E9E3]/90 backdrop-blur-md border-b-[0.025rem] border-b-neutral-200/20 fixed min-w-full top-0 z-[100000]">
      <div className="ml-6 mt-6 lg:mt-8">
        <Link href="/">
          <span className={norican.className} style={{ fontSize: '1.8rem', color: '#1A1A1A', cursor: 'pointer' }}>
            Mayka Menacho
          </span>
        </Link>
      </div>
      
      <div onClick={handleNavOpen} className="fixed right-0 mr-6 mt-4 z-[100001] cursor-pointer">
        <button aria-label="Abrir menú">
          <Image
            src="/assets/Menu-Icon.svg"
            height={50}
            width={50}
            alt="menu icon"
            style={{ filter: navOpen ? 'invert(0)' : 'none' }} // Mantiene el icono visible
          />
        </button>
      </div>

      <div className={inter.className}>
        <nav
          className={
            navOpen
              ? "bg-[#EBF8FF] border-l-[0.025rem] border-l-neutral-200/10 min-h-screen fixed right-0 w-[85%] max-w-[320px] z-[100000] shadow-[-10px_0_30px_rgba(0,0,0,0.1)] overflow-y-auto"
              : "hidden"
          }
        >
          {/* Cambiamos a textAlign left y ajustamos padding */}
          <ul className="flex flex-col text-left text-[0.75rem] gap-y-5 px-8 pt-24 uppercase tracking-[0.15em] text-[#1A1A1A] font-bold">
            {menuItems.map((item, i) => (
              <li key={i} className="border-b border-black/5 pb-2 hover:opacity-50 transition-opacity">
                <Link href={item.l} onClick={handleNavOpen} style={{ lineHeight: '1.2', display: 'block' }}>
                  {item.n}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
