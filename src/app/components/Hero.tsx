import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 -mr-10">
      {/* Fondo fijo */}
      <div
        className="pointer-events-none absolute left-0 right-0 -z-10"
        style={{
          top: '0px', // Ajusta este valor para mover el fondo más arriba o abajo
          bottom: 0,
          backgroundImage: "url('/fondo1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          opacity: 0.50, // Ajusta la opacidad si lo deseas
        }}
        aria-hidden="true"
      />
      
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-0 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">

              <p className="text-base/7 font-semibold text-amber-500 text-center">ProAlianza</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center">
              ¿QUIÉNES SOMOS?
              </h1>
              <p className="mt-20 text-3xl text-gray-700 text-center">
              <span className="bg-amber-500 font-bold">Pro Alianza®</span> es una empresa de <span className="bg-amber-500 font-bold">Servicios de Asistencia Técnica, Capacitación, Entrenamiento, Calibración de Sistemas de Detección y Comercialización de Productos</span> para la Seguridad bajo el esquema de Sociedad de Acciones Simplificada (S.A.S). Brinda un servicio de calidad en su tipo contando a su vez con un equipo interdisciplinario con 30 años de experiencia en funciones claves de diversas empresas.
              </p>

              <h1 className="mt-50 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center">
              NUESTRA MISIÓN
              </h1>
              <p className="mt-20 text-3xl text-gray-700 text-center">
               Volcar nuestra experiencia en el análisis de operaciones industriales, con el fin de obtener su <span className="bg-amber-500 font-bold">optimización</span>, mejorando la eficiencia y la seguridad, al mismo tiempo que se reducen los costos.
              </p>

              <h1 className="mt-50 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center">
              NUESTRO CRITERIO INDUSTRIAL
              </h1>
              <p className="mt-20 text-3xl text-gray-700 text-center">
              Se basa en la optimización de procesos y recursos, aplicando las mejores prácticas y tecnologías disponibles. Nos enfocamos en la seguridad, eficiencia y sostenibilidad de las operaciones, buscando siempre el equilibrio entre el rendimiento operativo y la gestión responsable de los recursos. Trabajamos de manera <span className="bg-amber-500 font-bold">proactiva</span> para identificar áreas de mejora y proponer soluciones innovadoras que agreguen valor real a nuestros clientes.
              </p>
            </div>
          </div>
        </div>   
        
        <div className="-mt-10 -ml-12 p-12 lg:sticky lg:top-20 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
         
        <Image 
            src="/quienes2.jpg" 
            alt="Icono" 
            width={2000} 
            height={2000} 
            className="bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] lg:rounded-xl lg:rounded-l-xl lg:object-cover lg:object-center lg:top-0 lg:left-0 lg:w-full lg:h-96 lg:max-w-none lg:bg-gray-900/50 lg:ring-5 lg:shadow-none"
        />
        </div>
      </div>
    </div>
  )
}
