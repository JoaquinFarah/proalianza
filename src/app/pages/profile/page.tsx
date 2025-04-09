import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Whatsapp from '@/app/components/Whatsapp';
import Footer from '@/app/components/Footer';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'


export default function ProfilePage() {
  return (
    <div className="bg-gray-50">      
      <Navbar />
      <Whatsapp />
      <div className="relative h-screen">
        <Image 
          src="/shake.jpg" 
          alt="Icono" 
          width={2000} 
          height={2000} 
          className="absolute top-0 left-0 w-full h-full object-cover shadow-xl" 
        />
        <div className="absolute top-1/3 left-1/5 transform -translate-x-1/7 -translate-y-1 text-white text-5xl font-semibold text-center rounded-lg bg-gray-900/50 p-5 backdrop-blur-xs">
          <p className="uppercase" style={{ textShadow: '2px 2px 4px #e5771b' }}>Especialistas en la búsqueda y obtención del límite técnico tanto del personal, herramientas y equipos</p>
        </div>
      </div>
        

            {/* Seccion descriptiva */}

        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">        
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                ¿Quiénes Somos?
                </h1>
                <p className="mt-6 text-xl/8 text-gray-700">
                Pro Alianza® Es una empresa de Servicios de Asistencia Técnica, Capacitación, Entrenamiento, Calibración de Sistemas de Detección y Comercialización de Productos para la Seguridad bajo el esquema de Sociedad de Acciones Simplificada (S.A.S). Si bien la empresa es reciente, brinda un servicio único en su tipo contando a su vez con un equipo interdisciplinario con 30 años de experiencia en funciones claves del rubro Oil & Gas e industrial.
                </p>

                <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Nuestra Misión
                </h1>
                <p className="mt-6 text-xl/8 text-gray-700">
                Volcar nuestra experiencia en el análisis de operaciones industriales con el fin de obtener su optimización, mejorando la eficiencia y la seguridad al mismo tiempo que se reducen los costos.
                </p>
                
                <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Nuestra Visión
                </h1>
                <p className="mt-6 text-xl/8 text-gray-700">
                Ser una empresa líder en nuestra especialidad, reconocida y admirada por su calidad de servicios, pronta respuesta y resultados visibles en el corto y mediano plazo.
                </p>
                </div>
            </div>
            </div>
            <div className="-mt-10 -ml-12 p-12 lg:sticky lg:top-20 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            
            <Image 
                src="/mirror.jpg" 
                alt="Icono" 
                width={2000} 
                height={2000} 
                className=" rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] lg:rounded-none lg:rounded-l-xl lg:object-cover lg:object-center lg:top-0 lg:left-0 lg:w-full lg:h-96 lg:max-w-none lg:bg-gray-900/50 lg:ring-5 lg:shadow-none"
            />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
                <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">                
                <ul role="list" className="space-y-8 text-gray-600">
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
                
                </div>
            </div>
            </div>
        </div>
        </div>









    
    <Footer />
    </div>
  );
}