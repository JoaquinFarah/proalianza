import React from 'react';
// import Image from 'next/image';
import Navbar from './components/Navbar';
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';
import Device from './components/Device';
import Services from './components/Services';
import Computer from './components/Computer';

export default function Index() {
  return (
    <div className="relative bg-gray-50">
      <Navbar />
      <Whatsapp />
      
      {/* Contenedor del video */}
      <div className="relative h-screen">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          {/* <source src="belen.mp4" type="video/mp4" /> */}
          <source src="recorte.mp4" type="video/mp4" />

          Tu navegador no soporta el video.
        </video>
        
        {/* Mensaje sobre el video tapando marca de agua */}
        {/* <div className="absolute top-1/2 left-1/5 transform -translate-x-1/7 -translate-y-19 text-white text-5xl font-semibold text-center backdrop-blur-sm bg-black/30 rounded-lg p-10 ">
          <p className="uppercase" style={{ textShadow: '2px 2px 4px #e5771b' }}>Precisión que impulsa tu industria, formación que salva vidas.</p>
        </div> */}
        <div className="absolute top-1/3 left-1/5 transform -translate-x-1/7 -translate-y-1 text-white text-5xl font-semibold text-center rounded-lg bg-gray-900/50 p-5 backdrop-blur-xs">
          <p className="uppercase" style={{ textShadow: '2px 2px 4px #e5771b' }}>Precisión que impulsa tu industria, formación que salva vidas.</p>
        </div>
      </div>

      {/* <div className="relative h-screen ">
        <Image 
          src="/tunel.jpg" 
          alt="Icono" 
          width={2000} 
          height={2000} 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
               
        <div className="absolute top-1/3 left-1/5 transform -translate-x-1/7 -translate-y-1 text-white text-5xl font-semibold text-center rounded-lg p-5">
          <p>Precisión que impulsa tu industria, formación que salva vidas.</p>
        </div>
      </div> */}


      <div className="mt-20">
        
        <h1 className="text-5xl flex justify-center items-center mt-20">¿Que hacemos?</h1>

        <Services />
        
        <Device />
        <Computer />
      </div>

      <Footer />
    </div>
  );
}
