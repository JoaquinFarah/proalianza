import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Whatsapp from '@/app/components/Whatsapp';
import HeroSection from '@/app/components/Hero';
import Footer from '@/app/components/Footer';

export default function AboutPage() {
  return (
    <div className="bg-gray-50">      
      <Navbar />
      <Whatsapp />
      <div className="relative h-screen">
        <Image 
          src="/escalera.jpg" 
          alt="Icono" 
          width={2000} 
          height={2000} 
          className="absolute top-0 left-0 w-full h-full object-cover shadow-xl" 
        />
        <div className="absolute top-1/3 left-1/5 transform -translate-x-1/7 -translate-y-1 text-white text-5xl font-semibold text-center rounded-lg bg-gray-900/50 p-5 backdrop-blur-sm">
          <p className="uppercase" style={{ textShadow: '2px 2px 4px #e5771b' }}>Impulsando el Éxito de tu Proyecto con Soluciones Prácticas</p>
        </div>
      </div>
      <div>
        <h1 className="text-5xl flex justify-center items-center mt-20">¿Por qué elegirnos?</h1>
        <p className="text-2xl flex justify-center items-center mt-10 px-20">En un mundo donde la seguridad y la eficiencia son primordiales, somos tu aliado estratégico. Con más de 20 años de experiencia en el sector, ofrecemos soluciones integrales que garantizan la protección de tus trabajadores y la optimización de tus recursos.</p>        
        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-10">
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/Risk.svg" 
              alt="High Risk Company 1" 
              width={100} 
              height={100} 
              className="rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-5">Gestión de Riesgos</h2>
            <p className="mt-3 text-lg">Ofrecemos soluciones avanzadas para identificar y mitigar riesgos en entornos laborales de alto peligro.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/Protectionico.svg" 
              alt="High Risk Company 2" 
              width={100} 
              height={100} 
              className="rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-5">Seguridad Industrial</h2>
            <p className="mt-3 text-lg">Implementamos estrategias de seguridad industrial que protegen a los trabajadores y optimizan la productividad.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/Special.svg" 
              alt="High Risk Company 3" 
              width={100} 
              height={100} 
              className="rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-5">Capacitación Especializada</h2>
            <p className="mt-3 text-lg">Brindamos formación especializada para garantizar que los equipos estén preparados para enfrentar desafíos críticos.</p>
          </div>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 px-50">
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/Hat.svg" 
              alt="High Risk Company 1" 
              width={100} 
              height={100} 
              className="rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-5">Materiales de Óptima calidad</h2>
            <p className="mt-3 text-lg">Los mejores materiales disponibles en el mercado para garantizar la excelencia tanto a nuesro personal como a nuestros clientes para asegurarles la tranquilidad y cuplir con las exigencias de los mismos.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/Hands.svg" 
              alt="High Risk Company 2" 
              width={100} 
              height={100} 
              className="rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-5">Experiencia comprobable</h2>
            <p className="mt-3 text-lg">Despues de que nuestros staff haya pasado los ultimos 20 años en áreas de seguridad laboral y capacitaciones permanentes podemos ofrecer todo lo que sabemos. Cuando hay conocimiento se hace notar.</p>
          </div>          
        </div>

        <HeroSection />
        <Footer />

      </div>
    </div>
  );
}