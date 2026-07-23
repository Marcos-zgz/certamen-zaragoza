import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";

export default function Entrevistas() {
  const entrevistas = [
    {
      titulo: "Regresiones y Sueños Lúcidos",
      descripcion: "De la mano de Alejandro Carmona en el programa 'El Templo de las Ánimas', Mayka nos lleva a descubrir el enigmático y misterioso mundo de los sueños. Exploramos regresiones, sueños lúcidos, vidas pasadas y mucho más.",
      fecha: "1/03/2025",
      tipo: "youtube",
      url: "https://www.youtube.com/embed/6x2mVe6BXnM"
    },
    {
      titulo: "ENTREVISTA CON MIGUEL BLANCO",
      subtitulo: "Espacio en Blanco - Radio Nacional de España",
      descripcion: "Mayka Menacho nos introduce en el mundo de los sueños aportando explicaciones a los llamados sueños premonitorios en el mítico programa de Miguel Blanco.",
      fecha: "28/07/2024",
      tipo: "youtube",
      url: "https://www.youtube.com/embed/hReSBZ9a-AI"
    },
    {
      titulo: "Entrevista en Radio Alagón",
      descripcion: "Descubre un enfoque integral y holístico hacia el bienestar, fusionando mente, cuerpo y espíritu para una vida equilibrada.",
      tipo: "ivoox",
      urls: [
        "https://www.ivoox.com/player_ej_128648062_6_1.html?c1=5fd5f3",
        "https://www.ivoox.com/player_ej_125169486_6_1.html?c1=5fd5f3"
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Entrevistas | Mayka Menacho</title>
      </Head>

      <Nav />

      <main style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '140px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '100px' }}>
        
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'left', marginBottom: '50px', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Entrevistas y Medios
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {entrevistas.map((item, index) => (
            <section key={index} style={{ textAlign: 'left' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '10px', color: '#1A1A1A' }}>
                {item.titulo}
              </h2>
              {item.subtitulo && (
                <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '10px', fontWeight: '600' }}>{item.subtitulo}</p>
              )}
              {item.fecha && (
                <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '20px' }}>{item.fecha}</p>
              )}
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px', color: '#333' }}>
                {item.descripcion}
              </p>

              {/* RENDERIZADO DE VIDEOS O AUDIOS */}
              {item.tipo === "youtube" ? (
                <div style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe 
                      src={item.url}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {item.urls.map((audioUrl, i) => (
                    <iframe 
                      key={i}
                      id={`audio_${i}`}
                      src={audioUrl} 
                      width="100%" 
                      height="150" 
                      frameBorder="0" 
                      allowFullscreen="" 
                      scrolling="no" 
                      style={{ borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}
                    ></iframe>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* RECUADRO AZUL: COLABORACIONES */}
        <div style={{ 
          padding: '40px 25px', borderRadius: '25px', border: '2px solid #FFFFFF',
          backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1000px #EBF8FF, 0 10px 30px rgba(0,0,0,0.05)',
          marginTop: '100px', textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '15px' }}>¿Te gustaría colaborar conmigo?</h2>
          <p style={{ lineHeight: '1.7', marginBottom: '30px' }}>
            Si tienes un medio de comunicación, un podcast o un evento y quieres contar con mi participación para hablar sobre el mundo transpersonal, los sueños o la canalización, estaré encantada de escucharte.
          </p>
          <a 
            href="https://wa.me/+34644267361?text=Hola%20Mayka,%20me%20gustaría%20contactar%20contigo%20para%20una%20entrevista" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: '#25D366', color: '#FFFFFF', padding: '14px 35px', borderRadius: '50px', 
              textDecoration: 'none', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '10px' 
            }}
          >
            CONTACTO PARA PRENSA
          </a>
        </div>
      </main>

      <footer style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        &copy; 2026 Mayka Menacho
      </footer>
    </div>
  );
}
