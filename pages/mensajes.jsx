import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";

export default function MensajesMasAlla() {
  const beneficios = [
    { t: "Claridad en la confusión", d: "Obtén claridad en momentos de confusión y dilemas personales, ya que los mensajes pueden proporcionar ideas que van más allá de la comprensión convencional." },
    { t: "Guía para el crecimiento personal", d: "Recibe orientación para tu crecimiento personal, ya que estos mensajes están diseñados para ayudarte a avanzar en tu viaje interior y superar obstáculos." },
    { t: "Respuestas a preguntas sin respuesta", d: "Encuentra respuestas a esas preguntas persistentes que parecen no tener solución, brindando un sentido de comprensión y dirección." },
    { t: "Conexión espiritual", d: "Experimenta una conexión espiritual más profunda al acceder a mensajes que trascienden la realidad cotidiana, permitiéndote explorar dimensiones más allá de lo tangible." },
    { t: "Comodidad en la incertidumbre", d: "Encuentra consuelo en momentos de incertidumbre al recibir mensajes reconfortantes que pueden disipar dudas y ofrecer perspectivas tranquilizadoras." },
    { t: "Empoderamiento", d: "Experimenta un sentido de empoderamiento al utilizar estos mensajes como herramientas para tomar decisiones informadas y alinear tus acciones con tu verdadero propósito." },
    { t: "Sanación y Cierre", d: "Obtén sanación emocional y cierre en situaciones difíciles al recibir mensajes que pueden proporcionar consuelo y ayudar en el proceso de curación." },
    { t: "Conexión con el Yo Superior", d: "Establece una conexión más profunda con tu yo superior, permitiendo un mayor entendimiento de tu propósito y el significado detrás de tus experiencias de vida." },
    { t: "Estímulo para los desafíos", d: "Encuentra aliento para superar desafíos personales, ya que estos mensajes pueden ofrecer palabras inspiradoras que fortalecen tu determinación." },
    { t: "Transformación personal", d: "Experimenta una transformación personal significativa al integrar las lecciones y sabiduría transmitidas a través de los mensajes, impulsando tu evolución espiritual y emocional." }
  ];

  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Mensajes del Más Allá | Mayka Menacho</title>
      </Head>

      <Nav />

      <main style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '140px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '100px' }}>
        
        <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', textAlign: 'left', marginBottom: '40px', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Mensajes del Más Allá
        </h1>

        {/* VÍDEO DE YOUTUBE EMBEBIDO */}
        <div style={{ width: '100%', marginBottom: '50px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe 
              src="https://www.youtube.com/embed/ePNTfoROQo0" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="Canalización - Mayka Menacho"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* TEXTO INTRODUCTORIO */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '10px' }}>Descubre el Poder Transformador de Nuestro Servicio de Canalización</h2>
          
          <p>
            En un mundo influenciado por películas, opiniones externas y prejuicios, a veces es necesario explorar lo que va más allá de nuestra comprensión. El Servicio de Canalización se presenta como una puerta hacia el misterioso reino del más allá, donde el velo entre planos es sutil y accesible con corazón y amor.
          </p>

          <p>
            La canalización es el arte de ser un puente entre este mundo y el siguiente. En esos momentos en que el velo entre los dos planos es tenue, somos el medio por el cual los mensajes del más allá pueden fluir. Este servicio se convierte en una herramienta para recibir respuestas que trascienden la realidad cotidiana, llevándote a un nivel espiritual que la ciencia aún explora.
          </p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginTop: '20px' }}>Mensajes Transformadores:</h3>
          <p>
            Estos mensajes son experiencias que van más allá de la comprensión científica actual. Aunque la ciencia sigue investigando, hay una certeza: estos mensajes están destinados a ayudarte en tu crecimiento personal. Son respuestas a esas preguntas internas persistentes que a veces parecen no tener solución. Nosotros simplemente somos el instrumento a través del cual estos mensajes llegan, ofreciéndote una guía en tu viaje personal.
          </p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginTop: '20px' }}>Conclusión:</h3>
          <p>
            Explora el servicio de canalización como una oportunidad para conectarte con respuestas más allá de lo evidente. Enfrenta la posibilidad de recibir mensajes que, aunque desafían la explicación científica actual, pueden ser la clave para avanzar en tu camino y descubrir un significado más profundo. Nosotros estamos aquí como facilitadores, proporcionando un puente hacia lo desconocido, con la esperanza de guiarte hacia una comprensión más completa de ti mismo y del mundo que te rodea.
          </p>
        </div>

        {/* SECCIÓN BENEFICIOS */}
        <div style={{ marginTop: '80px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '40px', textAlign: 'left' }}>Beneficios de la canalización</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {beneficios.map((b, i) => (
              <div key={i} style={{ paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px' }}>{i + 1}. {b.t}</h4>
                <p style={{ color: '#444', lineHeight: '1.6' }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN FINAL DE CONTACTO */}
        <div style={{ marginTop: '80px', textAlign: 'center', padding: '40px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontWeight: 'bold', marginBottom: '10px' }}>PIDE TU CITA</h2>
          <p style={{ marginBottom: '30px', fontStyle: 'italic' }}>acelera el momento de cambio en tu vida.</p>
          
          <a 
            href="https://wa.me/+34644267361?text=Hola%20Mayka,%20me%20gustaría%20pedir%20cita%20para%20una%20sesión%20de%20Canalización" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: '#25D366', 
              color: '#FFFFFF', 
              padding: '16px 40px', 
              borderRadius: '50px', 
              textDecoration: 'none', 
              fontSize: '1rem', 
              fontWeight: 'bold',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
              textTransform: 'uppercase'
            }}
          >
            RESERVA TU CITA POR WHATSAPP
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
