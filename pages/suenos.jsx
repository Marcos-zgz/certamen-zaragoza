import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";

export default function AnalisisSuenos() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Análisis de Sueños | Mayka Menacho</title>
      </Head>

      <Nav />

      <main style={{ maxWidth: '850px', margin: '0 auto', paddingTop: '140px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '100px' }}>
        
        <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', textAlign: 'left', marginBottom: '40px', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Análisis de Sueños
        </h1>

        {/* VÍDEO DE YOUTUBE EMBEBIDO */}
        <div style={{ width: '100%', marginBottom: '50px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe 
              src="https://www.youtube.com/embed/ml793vHHh-M?si=Dgn5uEeY7QSa5B8z" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="Análisis de Sueños - Mayka Menacho"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'left' }}>
          
          <p>
            1. <strong>Introducción</strong><br/>
            Los sueños son la puerta de entrada a nuestro inconsciente, un espacio donde la mente se libera de las restricciones lógicas y se comunica a través de símbolos y metáforas. El análisis de sueños no busca dar una interpretación universal, sino descifrar el mensaje único que tu alma tiene para ti.
          </p>

     

          {/* RECUADRO AZUL: EL PROPÓSITO */}
          <div style={{ 
            padding: '30px 25px', borderRadius: '25px', border: '2px solid #FFFFFF',
            backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1000px #EBF8FF, 0 10px 30px rgba(0,0,0,0.05)'
          }}>
            <p>
              2. <strong>Objetivo del Análisis</strong><br/>
              Aprender a escuchar lo que tus sueños intentan decirte para resolver bloqueos emocionales, entender patrones repetitivos y recibir guía espiritual en tu vida cotidiana.
            </p>
          </div>

          <p>
            3. <strong>Enfoque Terapéutico</strong><br/>
            A través de una metodología transpersonal, trabajamos con los elementos del sueño para que seas tú quien reconozca la verdad que contienen. No utilizamos diccionarios genéricos; utilizamos tu propia simbología vital para encontrar respuestas profundas.
          </p>

          <p>
            4. <strong>Beneficios</strong><br/>
            • Mayor autoconocimiento y conexión interior.<br/>
            • Procesamiento de traumas o miedos latentes.<br/>
            • Claridad ante decisiones importantes.<br/>
            • Integración de partes de la personalidad olvidadas.
          </p>

          {/* RECUADRO AZUL: CITA FINAL */}
          <div style={{ 
            padding: '35px 25px', borderRadius: '25px', border: '2px solid #FFFFFF',
            backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1000px #EBF8FF, 0 10px 30px rgba(0,0,0,0.05)',
            textAlign: 'center', marginTop: '20px'
          }}>
            <p style={{ fontSize: '1.3rem', fontStyle: 'italic', margin: 0 }}>
              "El sueño es la pequeña puerta escondida en el más profundo y secreto lugar del alma"
            </p>
            <p style={{ fontWeight: 'bold', marginTop: '10px', marginBottom: 0 }}>— C.G. Jung</p>
          </div>
        </div>

        {/* BOTÓN WHATSAPP */}
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <p style={{ marginBottom: '20px' }}>Si tienes un sueño que te inquieta o quieres explorar este lenguaje, contacta conmigo.</p>
          <a href="https://wa.me/+34644267361?text=Hola%20Mayka,%20quiero%20información%20sobre%20el%20Análisis%20de%20Sueños" style={{ 
            backgroundColor: '#25D366', color: '#FFFFFF', padding: '14px 35px', borderRadius: '50px', 
            textDecoration: 'none', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '10px' 
          }}>
            RESERVAR POR WHATSAPP
          </a>
        </div>
      </main>
    </div>
  );
}
