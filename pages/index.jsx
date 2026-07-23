import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";
import Image from "next/image";
import Script from "next/script"; // Importamos el componente de Script

export default function Home() {
  const servicios = [
    { t: "CONVERSACIONES CON MAYKA", d: "Sesiones de coaching personalizadas para desbloquear tu potencial.", p: "/conversaciones" },
    { t: "CONSULTORÍA ORGANIZACIONAL", d: "Acompañamiento estratégico para empresas y equipos con alma.", p: "/consultoria" },
    { t: "MENSAJES DEL MÁS ALLÁ", d: "Conexión y guía en tu viaje personal a través de la intuición.", p: "/mensajes" },
    { t: "CANALIZACIÓN A DISTANCIA", d: "Conecta con tus guías, seres queridos o tu esencia interior. Informe detallado o audio personalizado.", p: "/canalizacion" },
    { t: "REGISTROS AKÁSHICOS", d: "Viaje al pasado para sanar el presente y entender tu historia.", p: "/regresiones" },
    { t: "REGRESIONES", d: "Accede a la memoria universal de tu alma para obtener claridad, sanación y propósito.", p: "/registros" },
    { t: "ANÁLISIS DE SUEÑOS", d: "Descifra el lenguaje de tu subconsciente y sus mensajes ocultos.", p: "/suenos" },
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
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Mayka Menacho</title>
      </Head>

      <Nav />
      
      <main style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '140px', paddingLeft: '20px', paddingRight: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '40px' }}>
          
          <div style={{ width: '100%', maxWidth: '300px' }}>
            <Image 
              src="/assets/logo_mayka.png" 
              alt="Logo Mayka Menacho" 
              width={300} 
              height={300} 
              priority
              style={{ borderRadius: '50%' }}
            />
          </div>

          <div style={{ maxWidth: '700px' }}>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.6', color: '#1A1A1A' }}>
              "Libera tu esencia, sana tu historia y diseña el futuro que mereces: Cree, Crea y Crece"
            </p>
          </div>

          <div style={{ width: '100%', maxWidth: '500px' }}>
            <img 
              src="/assets/mayka.jpg" 
              alt="Mayka Menacho" 
              style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
            />
          </div>
        </div>
      </main>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 20px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '50px', textAlign: 'center', letterSpacing: '2px' }}>SERVICIOS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
          {servicios.map((s, i) => (
            <div key={i} style={{ padding: '30px 20px', backgroundColor: '#FFFFFF', borderRadius: '8px', textAlign: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', border: '2px solid #FFFFFF' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '15px', fontWeight: 'bold' }}>{s.t}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#666', marginBottom: '25px' }}>{s.d}</p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href={s.p} style={{ backgroundColor: '#BDE0FE', color: '#1A1A1A', padding: '8px 20px', borderRadius: '50px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '700' }}>SABER MÁS</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN TESTIMONIOS */}
      <section id="testimonios" style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 20px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '50px', textAlign: 'center', letterSpacing: '2px' }}>TESTIMONIOS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {testimonios.map((t, i) => (
            <div key={i} style={{ padding: '40px 30px', borderRadius: '12px', border: '2px solid #FFFFFF', backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1000px #EBF8FF, 0 15px 35px rgba(0,0,0,0.1)' }}>
              <p style={{ fontSize: '1rem', fontStyle: 'italic', lineHeight: '1.7', marginBottom: '25px' }}>"{t.t}"</p>
              <p style={{ fontSize: '0.85rem', fontWeight: '800' }}>- {t.n}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* SECCIÓN CONTACTO */}
      <section id="contacto" style={{ 
        scrollMarginTop: '100px', 
        maxWidth: '1100px', 
        margin: '80px auto', 
        padding: '60px 20px', 
        display: 'flex', 
        flexWrap: 'wrap', 
        alignItems: 'center', 
        gap: '40px', 
        justifyContent: 'center' 
      }}>
        <div style={{ 
          flex: '1', 
          minWidth: '300px', 
          padding: '40px', 
          borderRadius: '20px', 
          border: '2px solid #FFFFFF', 
          backgroundColor: 'transparent',
          boxShadow: 'inset 0 0 0 1000px #EBF8FF, 0 10px 30px rgba(0,0,0,0.05)',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#1A1A1A' }}>Contacto</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#1A1A1A' }}>
            ¿Interesado en comenzar un nuevo proceso conmigo?<br/>
            Escríbeme directamente a:<br/><br/>
            <a href="mailto:maykamenacholopez@gmail.com" style={{ 
              fontWeight: '600', 
              color: '#1A1A1A',
              textDecoration: 'underline'
            }}>
              maykamenacholopez@gmail.com
            </a>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center' }}>
          <a href="https://www.instagram.com/talk_to_mayka/"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" style={{ width: '32px' }} /></a>
          <a href="https://tiktok.com/conversacionesconmayka"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" style={{ width: '32px' }} /></a>
          <a href="https://www.youtube.com/@maykamenacho"><img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" style={{ width: '35px' }} /></a>
          <a href="https://wa.me/+34644267361"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '32px' }} /></a>
        </div>

        <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/images/mayka2.jpg" 
            alt="Mayka Menacho" 
            style={{ width: '100%', maxWidth: '380px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }} 
          />
        </div>
      </section>

      <footer style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        &copy; 2026 Mayka Menacho
      </footer>
    </div>
  );
}
