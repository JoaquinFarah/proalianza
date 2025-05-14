import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Whatsapp from '@/app/components/Whatsapp';
import Footer from '@/app/components/Footer';

export default function ProfilePage() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Whatsapp />

      <div className="relative h-screen">
        <Image
          src="/perfil1.jpg"
          alt="Icono"
          width={2000}
          height={2000}
          className="absolute top-0 left-0 w-full h-full object-cover shadow-xl"
        />
        <div className="absolute top-1/3 left-1/5 transform -translate-x-1/7 -translate-y-1 text-white text-5xl font-semibold text-center rounded-lg bg-gray-900/50 p-5 backdrop-blur-xs">
          <p className="uppercase" style={{ textShadow: '2px 2px 4px #e5771b' }}>
          IMPULSAMOS EL ÉXITO DE TU PROYECTO CON
          SOLUCIONES PRÁCTICAS
          </p>
        </div>
      </div>



      {/* POR QUE ELEGIRNOS */}
      <div>
        <h1 className="text-5xl flex justify-center items-center mt-20">¿Por qué elegirnos?</h1>
        <p className="text-2xl flex justify-center text-justify items-center mt-10 px-20">En un mundo donde la seguridad y la eficiencia son primordiales, somos tu nuevo aliado estratégico. Con más de 20 años de experiencia en el sector, ofrecemos soluciones integrales que garantizan la protección de tus trabajadores y la optimización de tus recursos</p>   

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
            <p className="mt-3 text-lg">Ofrecemos soluciones avanzadas para identificar y mitigar riesgos en entornos laborales de alto peligro</p>
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
            <p className="mt-3 text-lg">Implementamos estrategias de seguridad industrial que protegen a los trabajadores y optimizan la productividad</p>
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
            <p className="mt-3 text-lg">Brindamos formación especializada para garantizar que los equipos estén preparados para enfrentar desafíos críticos</p>
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
            <p className="mt-3 text-lg">Los mejores materiales disponibles en el mercado para garantizar la excelencia tanto a nuestro personal como a nuestros clientes para asegurarles la tranquilidad para cumplir con las exigencias de los mismos</p>
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
            <p className="mt-3 text-lg">Porque nuestro staff ha pasado los últimos 20 años en áreas de seguridad laboral y capacitaciones permanentes, estamos  seguros que podemos ofrecer todo lo que sabemos. Cuando hay conocimiento se hace notar </p>
          </div>          
        </div>
    </div>



    

      {/* Description */}
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-2 lg:overflow-visible lg:px-8 mt-20 mb-20 mt-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 items-start">

          <div className="lg:pr-4 order-2 lg:order-1">
            <div className="max-w-3xl text-gray-700">
              <h1 className=" text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Nuestra Visión
              </h1>
              <p className="mt-6 text-xl leading-8">
                Ser una empresa líder en nuestra especialidad brindando servicios de excelencia que superen las expectativas de nuestros clientes y contribuyan al desarrollo sostenible.
              </p>
              <h1 className="mt-50 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Nuestro Criterio Empresarial
              </h1>
              <p className="mt-6 text-xl leading-8">
              Nuestro criterio empresarial se fundamenta en la excelencia operativa y la generación de valor sostenible. Nos destacamos por:</p>
              <p className="text-xl leading-8">• La búsqueda constante de la innovación y mejora continua</p>
              <p className="text-xl leading-8">• El desarrollo de relaciones comerciales sólidas y duraderas.</p>
              <p className="text-xl leading-8">• La formación y capacitación permanente de nuestro equipo.</p>
              <p className="text-xl leading-8">• El compromiso con la calidad y la satisfacción del cliente.</p>
              <p className="text-xl leading-8">• La responsabilidad social y ambiental en nuestras operaciones.</p>
              <p className="text-xl leading-8">• La transparencia y ética en todas nuestras acciones.</p>
              <p className="text-xl leading-8">Estos pilares nos permiten ofrecer soluciones integrales que maximizan la eficiencia y competitividad de nuestros clientes.
              </p>   
              <h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl mt-50">
                ¿Quiénes Somos?
              </h1>
              <p className="mt-6 text-xl leading-8">
                Pro Alianza® Es una empresa de Servicios de Asistencia Técnica, Capacitación, Entrenamiento, Calibración de Sistemas de Detección y Comercialización de Productos para la Seguridad bajo el esquema de Sociedad de Acciones Simplificada (S.A.S). Si bien la empresa es reciente, brinda un servicio único en su tipo contando a su vez con un equipo interdisciplinario con 30 años de experiencia en funciones claves del rubro Oil & Gas e industrial.
              </p>

              <h1 className="mt-50 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Nuestra Misión
              </h1>
              <p className="mt-6 text-xl leading-8">
                Volcar nuestra experiencia en el análisis de operaciones industriales con el fin de obtener su optimización, mejorando la eficiencia y la seguridad, al mismo tiempo que se reducen los costos.
              </p>
              <h1 className="mt-50 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Nuestro Criterio Industrial
              </h1>
              <p className="mt-6 text-xl leading-8">
              Se basa en la optimización de procesos y recursos, aplicando las mejores prácticas y tecnologías disponibles. Nos enfocamos en la seguridad, eficiencia y sostenibilidad de las operaciones, buscando siempre el equilibrio entre el rendimiento operativo y la gestión responsable de los recursos. Trabajamos de manera proactiva para identificar áreas de mejora y proponer soluciones innovadoras que agreguen valor real a nuestros clientes.
              </p>      
            </div>
          </div>

          <div className="p-1 lg:sticky lg:top-20 order-1 lg:order-2">
            <Image
              src="/perfil2.jpeg"
              alt="Icono"
              width={2000}
              height={2000}
              className="rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] lg:rounded-r-xl lg:object-cover lg:object-center lg:w-full lg:h-96 lg:bg-gray-900/50 lg:ring-5 lg:shadow-none"
            />
          </div>
        </div>
      </div>

     

      <Footer />
    </div>
    
  );
}