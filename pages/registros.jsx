import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";

export default function RegistrosAkashicos() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Registros Akáshicos | Mayka Menacho</title>
      </Head>

      <Nav />

      <main style={{ maxWidth: '850px', margin: '0 auto', paddingTop: '140px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '100px' }}>
        
        <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Registros Akáshicos Online
        </h1>
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '40px', color: '#444' }}>
          Tu Guía Evolutiva
        </p>

     
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'left' }}>
          
          <p>
            Accede a la memoria universal de tu alma para obtener claridad, sanación y propósito. En este espacio, realizamos una lectura profunda del "Libro de la Vida" para comprender tu presente y potenciar tu futuro.
          </p>

         
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '10px' }}>¿Qué es una Consulta de Registros Akáshicos?</h2>
          <p>
            Es una herramienta de terapia transpersonal que permite conectar con una frecuencia elevada de información (el Akasha). El objetivo no es la adivinación, sino la <strong>comprensión evolutiva</strong>: entender para qué atraemos ciertas experiencias y cómo podemos liberar patrones que ya no nos sirven.
          </p>

          {/* RECUADRO AZUL: BENEFICIOS */}
          <div style={{ 
            padding: '35px 25px', borderRadius: '25px', border: '2px solid #FFFFFF',
            backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1000px #EBF8FF, 0 10px 30px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '20px' }}>Beneficios de la Lectura Online</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li><strong>• Identificación de Bloqueos:</strong> Comprender el origen de miedos o patrones repetitivos.</li>
              <li><strong>• Claridad en el Propósito:</strong> Reconocer tus talentos y capacidades innatas para alinearlas con tu vida actual.</li>
              <li><strong>• Sanación de Vínculos:</strong> Explorar las relaciones desde una perspectiva álmica para fomentar el perdón y la paz.</li>
              <li><strong>• Alineación con el Ser:</strong> Conectar con tu esencia más pura para tomar decisiones en armonía con el universo.</li>
            </ul>
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px' }}>¿Cómo funciona la sesión?</h2>
          <p>
            1. <strong>Sintonización:</strong> Iniciamos con una breve meditación de conexión para centrar la energía y elevar la conciencia.<br/>
            2. <strong>Consulta:</strong> Podrás plantear preguntas abiertas sobre cualquier área de tu vida (salud, relaciones, trabajo, crecimiento espiritual).<br/>
            3. <strong>Integración:</strong> Traducimos la información recibida en pasos prácticos y acciones concretas para tu día a día.
          </p>

          <p style={{ fontWeight: 'bold', borderLeft: '4px solid #BDE0FE', paddingLeft: '15px', fontStyle: 'italic' }}>
            Se entregará la lectura por medio de Audio o PDF.
          </p>

          {/* RECUADRO AZUL: ÉTICA */}
          <div style={{ 
            padding: '30px 25px', borderRadius: '25px', border: '2px solid #FFFFFF',
            backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1000px #EBF8FF, 0 10px 30px rgba(0,0,0,0.05)',
            marginTop: '10px'
          }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px' }}>Nuestra Ética de Consulta</h2>
            <p style={{ fontSize: '1.05rem', margin: 0 }}>
              Basamos este servicio en la veracidad y la responsabilidad. La información recibida es una guía para tu empoderamiento personal; tú siempre mantienes el libre albedrío y la capacidad de transformar tu realidad a través de acciones conscientes y loables.
            </p>
          </div>
        </div>

        {/* BOTÓN WHATSAPP */}
        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <a 
            href="https://wa.me/+34644267361?text=Hola%20Mayka,%20me%20gustaría%20reservar%20mi%20sesión%20de%20Registros%20Akáshicos" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: '#25D366', color: '#FFFFFF', padding: '16px 40px', borderRadius: '50px', 
              textDecoration: 'none', fontSize: '1rem', fontWeight: 'bold', display: 'inline-flex', 
              alignItems: 'center', gap: '12px', boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)', textTransform: 'uppercase'
            }}
          >
            RESERVAR MI SESIÓN DE REGISTROS
          </a>
        </div>

      </main>

      <footer style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        &copy; 2026 Mayka Menacho
      </footer>
    </div>
  );
}
