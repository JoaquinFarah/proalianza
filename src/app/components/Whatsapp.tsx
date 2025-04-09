import React from 'react';
import Image from 'next/image';

export default function Whatsapp() {
  return (
    <div className="fixed bottom-10 right-10 z-50 w-20 h-16">
      <div className="flex items-center justify-center">
        <button type="button" className="inline-flex flex-col items-center justify-center p-2 hover:cursor-pointer group backdrop-blur-sm bg-white/30 rounded-full shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-800/80 hover:bg-white/50 transition duration-300 ease-in-out">
          <Image 
            src="/whatsapp.png" 
            alt="Icono" 
            width={50} 
            height={50} 
            className="w-12 h-12 group-hover:opacity-70 transition-opacity duration-500 ease-in-out"
          />          
        </button>
      </div>
    </div>
  );
}
