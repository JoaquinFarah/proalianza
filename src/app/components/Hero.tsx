import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">ProAlianza</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              La mejor elección
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
              En Proalianza, nos enorgullece ofrecer soluciones de alta calidad que satisfacen las necesidades de nuestros clientes. Con años de experiencia en el sector, nos hemos consolidado como líderes en el campo de la seguridad laboral.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-10 -ml-12 p-12 lg:sticky lg:top-20 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
         
        <Image 
            src="/brigadistas.jpeg" 
            alt="Icono" 
            width={2000} 
            height={2000} 
            className=" rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] lg:rounded-none lg:rounded-l-xl lg:object-cover lg:object-center lg:top-0 lg:left-0 lg:w-full lg:h-96 lg:max-w-none lg:bg-gray-900/50 lg:ring-5 lg:shadow-none"
        />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
              En un mundo donde la seguridad y la eficiencia son primordiales, ofrecemos soluciones prácticas que garantizan el éxito de tu proyecto. Nuestra experiencia en el sector nos permite brindar un servicio integral, adaptándonos a tus necesidades específicas y asegurando resultados óptimos.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Soluciones inteligentes.</strong> Somos concientes de las necesidades de nuestros clientes y nos adaptamos a sus requerimientos.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Seguridad en lo que hacemos.</strong> Tanto nuestras vidas como las de nuestros clientes son lo más importante. Por eso, nos aseguramos de que todo lo que hacemos esté respaldado por la mejor calidad y seguridad.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Formación constante.</strong> Parte de crecer es enseñar. Por eso, nos aseguramos de que nuestros clientes estén siempre informados sobre lo que hacemos y cómo lo hacemos.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Nos destacamos por nuestra atención al cliente, compromiso con la calidad y un enfoque proactivo en la resolución de problemas. Con nosotros, no solo obtienes un proveedor, sino un socio estratégico que impulsa el éxito de tu proyecto.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">¿No tienen equipamiento? No hay problema.</h2>
              <p className="mt-6">
                Tenemos a nuestra disposicion el mejor equipamiento para garantizar la seguridad de nuestros trabajadores y de nuestros clientes. Nos aseguramos de que todo el personal esté capacitado y cuente con los materiales necesarios para realizar su trabajo de manera segura y eficiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
