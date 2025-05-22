import Image from 'next/image'

export default function ProfileSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 -mr-10">
      {/* Sticky background */}
      <div
        className="pointer-events-none absolute left-0 right-0 -z-10"
        style={{
          top: '0px', 
          bottom: 0,
          backgroundImage: "url('/fondo4.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          opacity: 1, // Opacity adjust
        }}
        aria-hidden="true"
      />
    <h1 className="text-5xl flex justify-center items-center mt-20 p-5 uppercase font-bold bg-gray-50">LA MEJOR ELECCIÓN</h1>
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-2 lg:overflow-visible lg:px-8 mt-20 mb-20">
      
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 items-start">
          <div className="lg:pr-4 order-2 lg:order-1">
            <div>
              <div className="text-3xl flex text-center items-center mt-10 text-pretty">
                <p>
                Pro Alianza es una nueva opción que ofrece soluciones de alta calidad para satisfacer las necesidades del cliente.
                </p>
              </div>
              <div className="text-3xl flex text-center items-center mt-10 text-pretty">
                <p>
                En un mundo donde la seguridad y la eficiencia son primordiales, ofrecemos soluciones prácticas que garantizan el éxito de tu proyecto. Nuestra experiencia en el sector nos permite brindar un servicio integral, adaptándonos a tus necesidades específicas y asegurando resultados óptimos.
                </p>
              </div>              

              <h1 className="mt-30 px-2 py-2 text-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 bg-white sm:text-4xl">
              SOLUCIONES INTELIGENTES
              </h1>
              <p className="text-3xl flex text-center items-center mt-10 text-pretty">
              Conociendo las necesidades de nuestros clientes, nos adaptamos a sus requerimientos y planteamos la adecuada solución
              </p>   

              <h1 className="mt-30 px-2 py-2 text-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 bg-white sm:text-4xl">
              SEGURIDAD EN LO QUE HACEMOS
              </h1>
              <p className="text-3xl flex text-center items-center mt-10 text-pretty">
              Sabemos que lo más importante es nuestra vida y la de nuestros clientes. Por ello, todo lo que hacemos lo respaldamos con la mejor calidad y seguridad del servicio
              </p>   

              <h1 className="mt-30 px-2 py-2 text-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 bg-white sm:text-4xl">
              FORMACIÓN CONSTANTE
              </h1>
              <p className="text-3xl flex text-center items-center mt-10 text-pretty">
              Parte de crecer es enseñar. Nos aseguramos que nuestros clientes reciban propuestas de capacitación en continua revisión de acuerdo con los últimos estándares de la industria
              </p> 

              <h1 className="mt-30 px-2 py-2 text-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 bg-white sm:text-4xl">
              ¿NO TIENEN EQUIPAMIENTO? 
              </h1>
              <h1 className="px-2 pb-2 text-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 bg-white sm:text-4xl">
              ¡NO ES UN PROBLEMA!
              </h1>
              <p className="text-3xl flex text-center items-center mt-10 text-pretty">
              Tenemos a nuestra disposición el mejor equipamiento para garantizar el éxito de las operaciones,asegurándonos que todo el personal esté capacitado y cuente con los materiales necesarios para realizar su trabajo de manera segura y eficiente.
              </p> 
              <p className="text-3xl flex text-center items-center mt-10 text-pretty">
              Nos destacamos por nuestra atención al cliente, compromiso con la calidad y un enfoque proactivo en la resolución de sus problemas.
              </p> 
              <p className="text-3xl flex text-center items-center mt-10 text-pretty font-bold">
              No solo somos un proveedor, somos un socio estratégico que impulsa el éxito de tu proyecto.
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
    </div>
  )
}





// <h1 className=" text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
//               ¿QUIÉNES SOMOS?
//               </h1>
//               <p className="mt-6 text-xl leading-8">
//               <span className="bg-amber-500 font-bold">Pro Alianza®</span> es una empresa de <span className="bg-amber-500 font-bold">Servicios de Asistencia Técnica, Capacitación, Entrenamiento, Calibración de Sistemas de Detección y Comercialización de Productos</span> para la Seguridad bajo el esquema de Sociedad de Acciones Simplificada (S.A.S). Brinda un servicio de calidad en su tipo contando a su vez con un equipo interdisciplinario con 30 años de experiencia en funciones claves de diversas empresas.
//               </p>
//               <h1 className="mt-50 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
//               NUESTRA MISIÓN
//               </h1>
//               <p className="mt-6 text-xl leading-8">
//               Volcar nuestra experiencia en el análisis de operaciones industriales, con el fin de obtener su <span className="bg-amber-500 font-bold">optimización</span>, mejorando la eficiencia y la seguridad, al mismo tiempo que se reducen los costos.
              // </p>  
              // <h1 className="mt-50 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              // NUESTRO CRITERIO INDUSTRIAL
              // </h1>
              // <p className="mt-6 text-xl leading-8">
              // Se basa en la optimización de procesos y recursos, aplicando las mejores prácticas y tecnologías disponibles. Nos enfocamos en la seguridad, eficiencia y sostenibilidad de las operaciones, buscando siempre el equilibrio entre el rendimiento operativo y la gestión responsable de los recursos. Trabajamos de manera <span className="bg-amber-500 font-bold">proactiva</span> para identificar áreas de mejora y proponer soluciones innovadoras que agreguen valor real a nuestros clientes.
              // </p>   