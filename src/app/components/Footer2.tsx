import React from 'react';
import Image from 'next/image';


export default function Footer2() {
  return (
    <div>      

      <div className="relative h-screen">
        <Image        
          src="/footer.jpg"
          alt="Icono"
          width={2000}
          height={2000}
          className="absolute top-0 left-0 w-full h-full object-fill shadow-xl brightness-65"
        />

        <div style={{ backgroundColor: '#f7950a' }} className="absolute text-3xl flex justify-center items-center mt-20 p-2 font-bold text-center text-white">
            Somos un equipo de trabajo, con amplia experiencia en el ámbito industrial, lo que nos convierte en tu mejor elección
        </div>        

        <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-3xl font-semibold p-5 max-w-4lg text-center">
          <p>
            Precisión que <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded">impulsa</span> tu industria,
          </p>
          <p>
            <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded">formación</span> que salva vidas
          </p>
        </div>


      </div>
    </div>
  );
}