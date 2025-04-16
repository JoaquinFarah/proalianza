import React from 'react';
import Whatsapp from '@/app/components/Whatsapp';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const TrainingPage = () => {
  return (    
    <div className="bg-gray-50">
        <Navbar />
        <Whatsapp />
    <div className="w-full py-16 px-4">        
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 mt-10">
        
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center">
            Capacitaciones
          </h1>
          <p className="text-gray-600 text-base py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem a porro repellat. Explicabo dignissimos amet expedita molestiae obcaecati soluta, ab dolores fugit vel? A, beatae eum. In, cum est?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium dolores est optio itaque praesentium eligendi blanditiis exercitationem nihil dolor deserunt ipsum placeat, obcaecati vel atque eum. Dolorum, exercitationem ipsam?
          </p>
        </div>

        {/* Right Column - Training Image */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          {/* <img 
            className="w-full mx-auto bg-white" 
            src="/thirdman.jpg" 
            alt="Training"
          /> */}
          <Image 
              src="/thirdman.jpg" 
              alt="Icono" 
              width={2000} 
              height={2000} 
              className="object-cover object-center w-full h-96 max-w-none rounded-lg"
            />
        </div>
      </div>

      {/* Training Categories Grid */}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 pt-16">
        
        {/* Category 1 */}
        <div className="w-full shadow-xl bg-gradient-to-r from-gray-50 to-amber-500 flex flex-col p-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">Habilidades Técnicas</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">Equipamiento</p>
            <p className="py-2 border-b mx-8">Estrategias</p>
            <p className="py-2 border-b mx-8">Primeros Auxilios</p>
            <p className="py-2 mx-8">Trabajo en equipo</p>
          </div>
        </div>

        {/* Category 2 */}
        <div className="w-full shadow-xl bg-amber-500 text-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">Desarrollo</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">Trabajo bajo stress</p>
            <p className="py-2 border-b mx-8">Colaboración</p>
            <p className="py-2 border-b mx-8">Comunicación efectiva</p>
            <p className="py-2 mx-8">Creación de equipos</p>
          </div>
        </div>

        {/* Category 3 */}
        <div className="w-full shadow-xl bg-gradient-to-l from-gray-50 to-amber-500 flex flex-col p-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">Especialistas</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">Trabajo en altura</p>
            <p className="py-2 border-b mx-8">Espacios confinados</p>
            <p className="py-2 border-b mx-8">Equipos autonomos</p>
            <p className="py-2 mx-8">Detectores de gases</p>
          </div>
        </div>

      </div>

      {/* CTA Section */}
      <div className="w-full py-16">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">¿Listos para empezar a capacitarse?</h2>
          <Link href="/pages/contact" className="bg-amber-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Contáctenos
          </Link>
        </div>
      </div>
      
    </div>
    <Footer />
    </div>
  );
};

export default TrainingPage;