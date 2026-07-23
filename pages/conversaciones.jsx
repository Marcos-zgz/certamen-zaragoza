import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";
import Link from "next/link";

export default function Conversaciones() {
  const secciones = [
    {
      q: "¿Cuál es mi horario de trabajo?",
      a: "Mi horario es variable y difícil de establecer, pues a veces atiendo de urgencia a personas que lo necesitan. Contacta conmigo y cuando tenga un hueco te contestaré, será pronto."
    },
    {
      q: "¿En qué consisten las sesiones privadas?",
      a: "Las sesiones privadas son entre la persona interesada y yo. Estas no tienen un tiempo estimado de duración pues no depende de nosotros los mensajes que se van a recibir. El precio es de 65€."
    },
    {
      q: "¿En qué consisten las sesiones grupales?",
      a: "En las sesiones grupales ocurre lo mismo que las privadas, salvo que habrá un máximo de 4-5 personas. El tiempo es variable. El precio por persona es de 45€."
    },
    {
      q: "Conversaciones con Mayka",
      a: "Estas sesiones abarcan un amplio abanico de herramientas para tu ayuda, desde un punto de vista del Coaching holístico. Te servirán para aprender a mejorar tu vida y a desbloquear energías atascadas en nuestro ser. Herramientas terapéuticas 3.0, terapia transpersonal, PNL, Coaching, método PRAE, análisis de sueños y muchas más a tu servicio. Sesiones de 60 min, 65€."
    },
    {
      q: "Terapia del duelo",
      a: "Un enfoque terapéutico transpersonal diseñado para ayudar a las personas a enfrentar y superar el dolor emocional asociado con la pérdida de un ser querido. Exploramos y expresamos emociones para desarrollar estrategias de afrontamiento y encontrar significado. Puede realizarse de manera individual o grupal, facilitando la adaptación a la nueva realidad."
    },
    {
      q: "¿Métodos de pago?",
      a: "Efectivo, Bizum, PayPal..."
    }
  ];

  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Conversaciones con Mayka</title>
      </Head>

      <Nav />

      <main style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '140px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '100px' }}>
        
        <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', textAlign: 'left', marginBottom: '40px', letterSpacing: '1px' }}>
          Conversaciones con Mayka
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {secciones.map((item, index) => (
            <div key={index} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '30px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '15px', color: '#1A1A1A' }}>
                {item.q}
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', textAlign: 'left' }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>

      {/* BOTÓN WHATSAPP DIRECTO */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <a 
            href="https://wa.me/+34644267361?text=Hola%20Mayka,%20me%20gustaría%20reservar%20una%20sesión%20contigo" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: '#25D366', // Color oficial de WhatsApp
              color: '#FFFFFF', 
              padding: '14px 35px', 
              borderRadius: '50px', 
              textDecoration: 'none', 
              fontSize: '0.9rem', 
              fontWeight: 'bold',
              letterSpacing: '0.5px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
              textTransform: 'uppercase'
            }}
          >
            {/* Icono de WhatsApp simple */}
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.973L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            RESERVAR POR WHATSAPP
          </a>
        </div>
      </main>

      <footer style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        &copy; 2026 Mayka Menacho
      </footer>
    </div>
  );
}
