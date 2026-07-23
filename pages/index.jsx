import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";
import Image from "next/image";

export default function Home() {
  const servicios = [
    { t: "CONVERSACIONES CON MAriky", d: "Sesiones de coaching personalizadas para desbloquear tu potencial.", p: "/conversaciones" },
    { t: "CONSULTORÍA ORGANIZACIONAL", d: "Acompañamiento estratégico para empresas y equipos con alma.", p: "/consultoria" },
    { t: "MENSAJES DEL MÁS ALLÁ", d: "Conexión y guía en tu viaje personal a través de la intuición.", p: "/mensajes" },
    { t: "CANALIZACIÓN A DISTANCIA", d: "Conecta con tus guías, seres queridos o tu esencia interior. Informe detallado o audio personalizado.", p: "/canalizacion" },
    { t: "REGISTROS AKÁSHICOS", d: "Viaje al pasado para sanar el presente y entender tu historia.", p: "/regresiones" },
    { t: "REGRESIONES", d: "Accede a la memoria universal de tu alma para obtener claridad, sanación y propósito.", p: "/registros" },
    { t: "ANÁLISIS DE SUEÑO", d: "Descifra el lenguaje de tu subconsciente y sus mensajes ocultos.", p: "/suenos" },
    { t: "TERAPIA DEL DUELO", d: "Acompañamiento compasivo en procesos de pérdida y transición.", p: "/duelo" }
  ];

  const testimonios = [
    { n: "Vivian", t: "Una experiencia transformadora. Mayka tiene una sensibilidad única para captar lo que no se dice." },
    { n: "Lola", t: "Me ayudó a encontrar la paz en un momento de mucho ruido mental. Su estrategia es pura magia." },
    { n: "Ana María", t: "Increíble conexión. Los mensajes que recibí me dieron la fuerza que necesitaba para avanzar." },
    { n: "Sofia", t: "El análisis de sueños fue un antes y un después en mi vida. Ahora entiendo mucho mejor mis emociones." },
    { n: "Mari Carmen", t: "Una guía maravillosa. Gracias a sus sesiones he recuperado la ilusión por mis proyectos." },
    { n: "Jose Manuel", t: "Claridad y estrategia. Mayka sabe cómo aterrizar la intuición al mundo real de forma brillante." }
  ];

  return (
    <div style={{ backgroundColor: '#131210', minHeight: '100vh', color: '#EAE6DF', margin: 0, padding: 0, fontFamily: 'serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Certamen Senior & Silver | Mayka Menacho</title>
      </Head>

      <Nav />

      {/* CABECERA PRINCIPAL (HERO) */}
      <header style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '120px', paddingLeft: '20px', paddingRight: '20px', textAlign: 'center' }}>
        
        {/* CORONA DORA CENTRADA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img 
            src="/assets/logocertamen.jpg" 
            alt="Corona Real" 
            style={{ width: '180px', height: 'auto', filter: 'drop-shadow(0px 5px 15px rgba(212, 175, 55, 0.4))' }} 
          />
        </div>

        {/* TÍTULO PRINCIPAL EN ORO */}
        <h1 style={{ 
          fontSize: '2.8rem', 
          fontWeight: 'normal', 
          letterSpacing: '3px', 
          color: '#D4AF37', 
          margin: '0 0 10px 0',
          fontFamily: 'serif' 
        }}>
          CERTAMEN SENIOR & SILVER
        </h1>

        {/* SUBTÍTULOS */}
        <h2 style={{ fontSize: '1.4rem', fontWeight: '300', color: '#C5A059', margin: '0 0 5px 0' }}>
          In Zaragoza, Spain – Organizado por Mayka Menacho
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#B39250', margin: '0 0 60px 0', fontStyle: 'italic' }}>
          Delegada Regional de Aragón, Navarra y La Rioja
        </p>

        {/* SECCIÓN QUIÉNES SOMOS (TEXTO A LA IZQUIERDA + 2 IMÁGENES A LA DERECHA) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', marginBottom: '80px' }}>
          
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h3 style={{ fontSize: '2rem', color: '#D4AF37', letterSpacing: '2px', marginBottom: '20px', fontWeight: 'normal' }}>
              QUIÉNES SOMOS
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#D0C8B8', marginBottom: '20px' }}>
              "Libera tu esencia, sana tu historia y diseña el futuro que mereces: Cree, Crea y Crece". Un espacio único diseñado para celebrar la elegancia, la experiencia y la madurez.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#D0C8B8' }}>
              Nuestro certamen reúne el talento y la presencia de candidatos de Aragón, Navarra y La Rioja en un evento inolvidable lleno de distinción.
            </p>
          </div>

          <div style={{ flex: '1', minWidth: '320px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <div style={{ border: '1px solid #C5A059', padding: '4px', borderRadius: '4px' }}>
              <img src="/assets/mayka.jpg" alt="Certamen Pareja" style={{ width: '100%', maxWidth: '220px', height: '260px', objectFit: 'cover' }} />
            </div>
            <div style={{ border: '1px solid #C5A059', padding: '4px', borderRadius: '4px' }}>
              <img src="/images/mayka2.jpg" alt="Certamen Grupo" style={{ width: '100%', maxWidth: '220px', height: '260px', objectFit: 'cover' }} />
            </div>
          </div>

        </div>
      </header>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'normal', marginBottom: '40px', textAlign: 'center', letterSpacing: '3px', color: '#D4AF37' }}>SERVICIOS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
          {servicios.map((s, i) => (
            <div key={i} style={{ padding: '30px 20px', backgroundColor: '#1A1916', borderRadius: '4px', textAlign: 'center', border: '1px solid #C5A059' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: '#D4AF37', fontWeight: 'normal' }}>{s.t}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#C0B8A8', marginBottom: '25px' }}>{s.d}</p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href={s.p} style={{ backgroundColor: '#D4AF37', color: '#131210', padding: '8px 22px', borderRadius: '20px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1px' }}>SABER MÁS</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN TESTIMONIOS */}
      <section id="testimonios" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'normal', marginBottom: '40px', textAlign: 'center', letterSpacing: '3px', color: '#D4AF37' }}>TESTIMONIOS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {testimonios.map((t, i) => (
            <div key={i} style={{ padding: '35px 25px', borderRadius: '4px', border: '1px solid #C5A059', backgroundColor: '#1A1916' }}>
              <p style={{ fontSize: '0.95rem', fontStyle: 'italic', lineHeight: '1.7', marginBottom: '20px', color: '#D0C8B8' }}>"{t.t}"</p>
              <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#D4AF37', textAlign: 'right' }}>- {t.n}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* SECCIÓN CONTACTO / BARRA INFERIOR DE LA TARJETA */}
      <footer id="contacto" style={{ maxWidth: '1200px', margin: '60px auto 0 auto', padding: '40px 20px 20px 20px' }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          
          {/* DATOS DE CONTACTO E ICONOS */}
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D4AF37', fontSize: '1.1rem' }}>
              <span>📞</span>
              <a href="tel:644267361" style={{ color: '#D4AF37', textDecoration: 'none' }}>644 267 361</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D4AF37', fontSize: '1.1rem' }}>
              <span>✉️</span>
              <a href="mailto:mayka.morteroyal@gmail.com" style={{ color: '#D4AF37', textDecoration: 'none' }}>mayka.morteroyal@gmail.com</a>
            </div>
          </div>

          {/* QR Y FIRMA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Código QR */}
            <div style={{ backgroundColor: '#D4AF37', padding: '5px', borderRadius: '4px' }}>
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=70x70&data=https://maykamenacho.com" 
                alt="QR Code" 
                style={{ width: '60px', height: '60px', display: 'block' }}
              />
            </div>
            {/* Nombre/Firma */}
            <span style={{ fontSize: '1.5rem', fontFamily: 'cursive', color: '#D4AF37' }}>
              Mayka Menacho
            </span>
          </div>

        </div>

        {/* FRANJA DE LÍNEA DORADA INFERIOR */}
        <div style={{ 
          height: '12px', 
          width: '100%', 
          background: 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
          borderRadius: '2px',
          marginBottom: '30px'
        }}></div>

        <p style={{ textAlign: 'center', color: '#888', fontSize: '0.8rem' }}>
          &copy; 2026 Mayka Menacho – Certamen Senior & Silver
        </p>
      </footer>
    </div>
  );
}
