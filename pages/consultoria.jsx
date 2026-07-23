import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";

export default function Consultoria() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Consultoría Organizacional | Mayka Menacho</title>
      </Head>

      <Nav />

      <main style={{ maxWidth: '850px', margin: '0 auto', paddingTop: '140px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '100px' }}>
        
        <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', textAlign: 'left', marginBottom: '40px', letterSpacing: '1px' }}>
          COACH ORGANIZACIONAL PARA EMPRESAS
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'left' }}>
          
          <p>
            1. <strong>Introducción</strong><br/>
            Vivimos tiempos en los que las empresas enfrentan desafíos cada vez más humanos. El estrés, la desmotivación y la falta de conexión emocional generan bajas laborales, conflictos internos y pérdida de talento. La consultoría holística propone una nueva forma de entender la empresa: un espacio vivo donde las personas son el corazón de todo.
          </p>

          {/* IMAGEN DEBAJO DEL PRIMER PÁRRAFO */}
          <div style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <img src="/assets/consultoria.jpg" alt="Consultoría Mayka Menacho" style={{ width: '100%', display: 'block' }} />
          </div>

          {/* RECUADRO AZUL EN EL OBJETIVO */}
          <div style={{ 
            padding: '30px 25px', borderRadius: '25px', border: '2px solid #FFFFFF',
            backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1000px #EBF8FF, 0 10px 30px rgba(0,0,0,0.05)'
          }}>
            <p>
              2. <strong>Objetivo del Proyecto</strong><br/>
              Promover una cultura organizacional consciente y saludable, donde el bienestar emocional y la conexión interior se traduzcan en mayor productividad, motivación y cohesión de equipo.
            </p>
          </div>

          <p>
            3. <strong>Enfoque de Trabajo</strong><br/>
            A través de un acompañamiento personalizado, la consultoría holística combina dinámicas de autoconocimiento, liderazgo consciente y conexión emocional. Se realizan talleres vivenciales, meditaciones guiadas y sesiones grupales para fomentar la comunicación y la cooperación entre empleados y directivos.
          </p>

          <p>
            4. <strong>Beneficios para la Empresa</strong><br/>
            • Reducción de bajas laborales<br/>
            • Incremento del compromiso y la satisfacción<br/>
            • Mejor comunicación interna y resolución de conflictos<br/>
            • Aumento de la creatividad y la eficiencia<br/>
            • Reputación corporativa positiva
          </p>

          <p>
            5. <strong>Metodología</strong><br/>
            1. Diagnóstico inicial del clima emocional.<br/>
            2. Diseño de un plan de acción holístico.<br/>
            3. Realización de talleres y seguimiento.<br/>
            4. Evaluación final con resultados observables.
          </p>

          <p>
            6. <strong>Modalidades y Contratación</strong><br/>
            • Consultoría individual para cada empresa<br/>
            • Talleres grupales puntuales o mensuales<br/>
            • Programas anuales con seguimiento integral
          </p>

          {/* RECUADRO AZUL EN LA CITA FINAL */}
          <div style={{ 
            padding: '35px 25px', borderRadius: '25px', border: '2px solid #FFFFFF',
            backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1000px #EBF8FF, 0 10px 30px rgba(0,0,0,0.05)',
            textAlign: 'center', marginTop: '20px'
          }}>
            <p style={{ fontSize: '1.3rem', fontStyle: 'italic', margin: 0 }}>
              “Transformando la productividad desde la conexión humana”
            </p>
            <p style={{ fontWeight: 'bold', marginTop: '10px', marginBottom: 0 }}>— Mayka Menacho López</p>
          </div>
        </div>

        {/* BOTÓN WHATSAPP */}
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <p style={{ marginBottom: '20px' }}>Si quieres más información, contacta conmigo por whatsapp o por email.</p>
          <a href="https://wa.me/+34644267361" style={{ 
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
