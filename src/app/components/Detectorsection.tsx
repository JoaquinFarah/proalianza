import Image from "next/image";
import React from "react";
import { ShieldCheckIcon } from '@heroicons/react/20/solid';


export default function DetectorSection() {
  return (
  <div className="w-full max-w-[90%] mx-auto bg-[#F5F5F5] pt-8 rounded-3xl mt-20 ring-2 ring-gray-300 shadow-lg">
    <h2 className="font-light text-2xl md:text-4xl text-center">
      <br/> <span className="font-sans from-neutral-400 text-3xl font-bold" style={{ textShadow: '2px 2px 4px #e5771b' }}>DETECTORES DE GASES</span>
    </h2>
    <div className="mb-10 mt-10 bg-[#F5F5F5] flex flex-col lg:flex-row items-center justify-center pb-10 px-5 rounded-3xl gap-8">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-start justify-start py-6 gap-6"> 

            <div className="flex items-center justify-center gap-6 p-2 w-full max-w-md">
              <span>
                <ShieldCheckIcon className="w-5 h-5 text-amber-500" />
              </span>
              <div className="flex flex-col items-start justify-start gap-1 w-full"> 
                <h3 className="md:text-xl font-medium">Capacitación uso detector de gases</h3>                
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 p-2 w-full max-w-md">
              <span>
                <ShieldCheckIcon className="w-5 h-5 text-amber-500" />
              </span>
              <div className="flex flex-col items-start justify-start gap-1 w-full"> 
                <h3 className="md:text-xl font-medium">Mantenimiento preventivo</h3>                
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 p-2 w-full max-w-md">
              <span>
                <ShieldCheckIcon className="w-5 h-5 text-amber-500" />
              </span>
              <div className="flex flex-col items-start justify-start gap-1 w-full"> 
                <h3 className="md:text-xl font-medium">Calibración</h3>                
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 p-2 w-full max-w-md">
              <span>
                <ShieldCheckIcon className="w-5 h-5 text-amber-500" />
              </span>
              <div className="flex flex-col items-start justify-start gap-1 w-full"> 
                <h3 className="md:text-xl font-medium">Alquiler</h3>                
              </div>
            </div>
            
        </div>
      </div>

      <Image
        src="/gasdetector.jpg"
        width={0}
        height={0}
        sizes="100vw"
        alt="tangocalle"
        className="w-full lg:max-w-[60%] h-96 object-cover md:px-10 lg:px-10 drop-shadow-2xl"
      />
    </div>
  </div>
  )
}
