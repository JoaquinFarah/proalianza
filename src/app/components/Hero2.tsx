import Image from 'next/image'

export default function HeroSection2() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* Fondo fijo */}
      <div
        className="pointer-events-none absolute left-0 right-0 -z-10"
        style={{
          top: '0px', // Ajusta este valor para mover el fondo más arriba o abajo
          bottom: 0,
          backgroundImage: "url('/fondo2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          opacity: 0.50, // Ajusta la opacidad si lo deseas
        }}
        aria-hidden="true"
      />
      
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-0 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="w-full flex items-center">
    <div className="max-w-lg mx-auto">
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-end">
      NUESTRA VISIÓN
      </h1>
      <p className="mt-20 text-3xl text-gray-700 text-center">
        Ser reconocidos como una empresa líder en nuestra especialidad brindando servicios de <span className="bg-amber-500 font-bold">excelencia</span> que superen las expectativas de nuestros clientes y contribuyan al desarrollo sostenible.
      </p>
      <h1 className="mt-50 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-end">
      NUESTRO CRITERIO
      EMPRESARIAL
      </h1>
      <p className="mt-20 text-3xl text-gray-700 text-start">
      Nuestro criterio empresarial se fundamenta en la excelencia operativa y la generación de valor sostenible.
      <p className="text-start">Nos destacamos por:</p>
      <p className="text-start">• La búsqueda constante de la innovación y mejora continua</p>
      <p className="text-start">• El desarrollo de relaciones comerciales sólidas y
      duraderas</p>
      <p className="text-start">• La formación y capacitación permanente de nuestro
      equipo</p>
      <p className="text-start">• El compromiso con la calidad y la satisfacción del
      cliente</p>
      <p className="text-start">• La responsabilidad social y ambiental en nuestras
      operaciones</p>
      <p className="text-start">• La transparencia ética en todas nuestras acciones</p>
      <p className="text-start"></p>
      </p>
      <h1 className="mt-50 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-end">
        NUESTRO CRITERIO INDUSTRIAL
      </h1>
      <p className="mt-20 text-3xl text-gray-700 text-center">
      Estos pilares nos permiten ofrecer soluciones integrales que maximizan la <span className="bg-amber-500 font-bold">eficiencia</span> y <span className="bg-amber-500 font-bold">competitividad</span> de nuestros clientes.
      </p>
    </div>
  </div>
        
        <div className="-mt-10 -ml-10 p-12 lg:sticky lg:top-20 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
         
        <Image 
            src="/quienes3.jpg" 
            alt="Icono" 
            width={2000} 
            height={2000} 
            className=" rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] lg:rounded-none lg:rounded-l-xl lg:object-cover lg:object-center lg:top-0 lg:left-0 lg:w-full lg:h-96 lg:max-w-none lg:bg-gray-900/50 lg:ring-5 lg:shadow-none"
        />
        </div>
      </div>
    </div>
  )
}
