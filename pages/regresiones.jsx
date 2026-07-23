import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";

export default function Regresiones() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Terapia Regresiva | Mayka Menacho</title>
      </Head>

      <Nav />

      <main style={{ maxWidth: '850px', margin: '0 auto', paddingTop: '140px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '100px' }}>
        
        <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', textAlign: 'left', marginBottom: '40px', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Terapia Regresiva
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'left' }}>
          
          <p>
            La terapia regresiva es una modalidad terapéutica que implica retroceder en el tiempo durante una sesión, explorando recuerdos y eventos de la infancia o experiencias pasadas. Se basa en la premisa de que comprender y abordar eventos traumáticos o bloqueos emocionales del pasado puede tener un impacto positivo en la salud mental y emocional actual.
          </p>

          {/* FOTO DESPUÉS DEL PRIMER PÁRRAFO */}
          <div style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', margin: '10px 0' }}>
            <img 
              src="/assets/regresiones.png" 
              alt="Sesión de Terapia Regresiva" 
              style={{ width: '100%', display: 'block' }} 
            />
          </div>

          <p>
            Durante la terapia regresiva, el paciente es guiado por el terapeuta para revivir situaciones pasadas, permitiendo una exploración más profunda de las emociones y percepciones asociadas. Esta introspección puede llevar a la identificación y resolución de conflictos internos, liberación de traumas emocionales y facilitación del crecimiento personal.
          </p>

          <p>
            Los posibles beneficios de la terapia regresiva incluyen la superación de miedos, la mejora de la autoestima, la gestión del estrés y la ansiedad, así como el fortalecimiento de las habilidades de afrontamiento. Al abordar las raíces de los problemas, se busca proporcionar una perspectiva más completa y favorecer cambios positivos en la vida del individuo.
          </p>

          {/* RECUADRO AZUL: INVITACIÓN A EXPLORAR */}
          <div style={{ 
            padding: '35px 25px', borderRadius: '25px', border: '2px solid #FFFFFF',
            backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1000px #EBF8FF, 0 10px 30px rgba(0,0,0,0.05)',
            marginTop: '10px'
          }}>
            <p style={{ margin: 0 }}>
              Descubre cómo la terapia regresiva puede ser una herramienta efectiva para explorar y sanar aspectos subyacentes de tu pasado, contribuyendo así a un mayor bienestar emocional y desarrollo personal.
            </p>
          </div>
        </div>

        {/* SECCIÓN DE CONTACTO FINAL */}
        <div style={{ marginTop: '80px', textAlign: 'center', padding: '40px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>PIDE TU CITA</h2>
          
          <a 
            href="https://wa.me/+34644267361?text=Hola%20Mayka,%20me%20gustaría%20información%20sobre%20la%20Terapia%20Regresiva" 
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
            644 267 361 <br/>
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
