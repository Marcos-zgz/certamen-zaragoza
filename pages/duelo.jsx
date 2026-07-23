import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";

export default function TerapiaDuelo() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Terapia del Duelo | Mayka Menacho</title>
      </Head>

      <Nav />

      <main style={{ maxWidth: '850px', margin: '0 auto', paddingTop: '140px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '100px' }}>
        
        <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', textAlign: 'left', marginBottom: '40px', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Terapia del Duelo
        </h1>

     
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'left' }}>
          
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>¿En qué consiste la terapia del duelo?</h2>
          
          <p>
            La terapia del duelo es un proceso terapéutico destinado a ayudar a las personas a hacer frente a la compleja experiencia de perder a un ser querido. Ya sea que se elija la modalidad <strong>individual o grupal</strong>, este enfoque brinda un espacio seguro y comprensivo para explorar las emociones intensas y desafiantes asociadas con la pérdida.
          </p>

        

          <p>
            En <strong>sesiones individuales</strong>, adaptamos el tratamiento a tus necesidades específicas. Esto facilita la exploración de pensamientos, sentimientos y recuerdos de manera íntima, ayudándote a procesar la pérdida de una manera que sea significativa para ti.
          </p>

          <p>
            Por otro lado, las <strong>sesiones grupales</strong> ofrecen un entorno de apoyo compartido. Al unirte a otros que también atraviesan este proceso, encuentras comprensión y empatía, creando conexiones con quienes comparten experiencias similares. El grupo actúa como una red de consuelo y aprendizaje de estrategias para afrontar el dolor.
          </p>

          {/* RECUADRO AZUL: EL CAMINO HACIA LA ADAPTACIÓN */}
          <div style={{ 
            padding: '30px 25px', borderRadius: '25px', border: '2px solid #FFFFFF',
            backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1000px #EBF8FF, 0 10px 30px rgba(0,0,0,0.05)',
            marginTop: '10px'
          }}>
            <p style={{ margin: 0 }}>
              La terapia busca promover la adaptación y el crecimiento personal. Proporciona herramientas prácticas para gestionar el dolor, abordar la culpa o la ira, y reconstruir una nueva realidad, transformando el sufrimiento en una experiencia de aprendizaje para avanzar hacia una vida plena.
            </p>
          </div>

        </div>

        {/* BOTÓN WHATSAPP */}
        <div style={{ marginTop: '80px', textAlign: 'center', padding: '40px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>PIDE TU CITA PARA UNA SESIÓN</h2>
          
          <a 
            href="https://wa.me/+34644267361?text=Hola%20Mayka,%20necesito%20información%20sobre%20la%20Terapia%20del%20Duelo" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: '#25D366', color: '#FFFFFF', padding: '16px 40px', borderRadius: '50px', 
              textDecoration: 'none', fontSize: '1rem', fontWeight: 'bold', display: 'inline-flex', 
              alignItems: 'center', gap: '12px', boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)', textTransform: 'uppercase'
            }}
          >
            CONTACTAR POR WHATSAPP
          </a>
          
          <p style={{ marginTop: '30px', color: '#1A1A1A', fontWeight: '600' }}>
            Estamos aquí para acompañarte en tu proceso.
          </p>
        </div>

      </main>

      <footer style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        &copy; 2026 Mayka Menacho
      </footer>
    </div>
  );
}
