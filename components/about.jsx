import Image from "next/image";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A' }}>
      <header>
        <Nav logo="MM" />
      </header>
      
      <main className="max-w-6 cotton-mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          
          {/* LADO IZQUIERDO: TEXTO Y BOTÓN */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p style={{ fontSize: '1.5rem', lineHeight: '1.6', fontWeight: '300', marginBottom: '30px' }}>
              ¿Buscas claridad en tu vida? Une tu intuición y estrategia para alcanzar tu propósito.
            </p>

            <a 
              href="https://wa.me/+34644267361" 
              target="_blank" 
              style={{ 
                backgroundColor: '#1A1A1A', 
                color: '#FFFFFF', 
                padding: '15px 40px', 
                borderRadius: '50px', 
                textDecoration: 'none', 
                fontSize: '1.1rem',
                fontWeight: '500',
                display: 'inline-block'
              }}
            >
              Hablemos por WhatsApp
            </a>
          </div>

          {/* LADO DERECHO: LA FOTO RECUPERADA */}
          <div className="flex justify-center">
            <Image
              className="rounded-2xl shadow-xl"
              src="/images/projects-img/big-unsplash-party.png" // Esta es la foto que venía por defecto
              alt="Mayka Menacho"
              height={500}
              width={500}
              priority
            />
          </div>

        </div>
      </main>
    </div>
  );
}
