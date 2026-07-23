import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";

export default function CanalizacionDistancia() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Canalización a Distancia | Mayka Menacho</title>
      </Head>

      <Nav />

      <main style={{ maxWidth: '850px', margin: '0 auto', paddingTop: '140px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '100px' }}>
        
        <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Canalización a Distancia
        </h1>
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '40px', color: '#444' }}>
          Vida después de la Muerte con Mayka
        </p>

        {/* VÍDEO DE YOUTUBE EMBEBIDO */}
        <div style={{ width: '100%', marginBottom: '50px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe 
              src="https://www.youtube.com/embed/ePNTfoROQo0" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="Canalización a Distancia - Mayka Menacho"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* RECUADRO AZUL: SERVICIO A DISTANCIA */}
        <div style={{ 
            padding: '40px 25px', borderRadius: '25px', border: '2px solid #FFFFFF',
            backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1000px #EBF8FF, 0 10px 30px rgba(0,0,0,0.05)',
            marginBottom: '50px'
          }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '15px' }}>¿Sientes que necesitas claridad o una señal?</h2>
          <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
            Te ofrezco una canalización a distancia, un mensaje profundo desde el alma para ti. Conecta con tus guías, seres queridos o tu esencia interior. Recibirás tu canalización en formato <strong>audio o informe escrito (PDF)</strong>, con todo el amor y respeto que merece tu proceso.<br/><br/>
            <strong>Aportación: 65€</strong>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'left' }}>
          
          <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Descubre el Poder Transformador de la Canalización</h2>
          <p>
            En un mundo influenciado por prejuicios y opiniones externas, la canalización se presenta como una puerta hacia el misterioso reino del más allá. Es el arte de ser un puente: en esos momentos en que el velo entre los planos es sutil, somos el medio por el cual los mensajes pueden fluir.
          </p>

          <p>
            <strong>Mensajes Transformadores:</strong><br/>
            Estos mensajes están destinados a ayudarte en tu crecimiento personal. Son respuestas a esas preguntas internas persistentes que a veces parecen no tener solución. Nosotros simplemente somos el instrumento para que esta guía llegue a tu viaje personal.
          </p>

          <p>
            <strong>Conclusión:</strong><br/>
            Esta es una oportunidad para conectarte con respuestas más allá de lo evidente. Enfrenta la posibilidad de recibir mensajes que pueden ser la clave para avanzar en tu camino y descubrir un significado más profundo de ti mismo y del mundo que te rodea.
          </p>
        </div>

        {/* BOTÓN WHATSAPP */}
        <div style={{ marginTop: '80px', textAlign: 'center', padding: '40px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>PIDE TU CITA PARA UNA SESIÓN</h2>
          
          <a 
            href="https://wa.me/+34644267361?text=Hola%20Mayka,%20me%20gustaría%20solicitar%20una%20Canalización%20a%20Distancia" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: '#25D366', color: '#FFFFFF', padding: '16px 40px', borderRadius: '50px', 
              textDecoration: 'none', fontSize: '1rem', fontWeight: 'bold', display: 'inline-flex', 
              alignItems: 'center', gap: '12px', boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)', textTransform: 'uppercase'
            }}
          >
            SOLICITAR POR WHATSAPP
          </a>
          
          <p style={{ marginTop: '30px', color: '#1A1A1A', fontWeight: '600' }}>
            o escríbeme a: <br/>
            <a href="mailto:maykamenacholopez@gmail.com" style={{ textDecoration: 'underline' }}>maykamenacholopez@gmail.com</a>
          </p>
        </div>

      </main>

      <footer style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        &copy; 2026 Mayka Menacho
      </footer>
    </div>
  );
}
