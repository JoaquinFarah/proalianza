import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Whatsapp from '@/app/components/Whatsapp';
// import Footer from '@/app/components/Footer';
// import Footer1 from '@/app/components/Footer1';
import Footer2 from '@/app/components/Footer2';
import ProfileSection from '@/app/components/Profilesection';
import ChooseSection from '@/app/components/Choosesection';

export default function ProfilePage() {
  return (
    <div>
      <Navbar />
      <Whatsapp />

      <div className="relative h-screen">
        <Image
          src="/perfil1.jpg"
          alt="Icono"
          width={2000}
          height={2000}
          className="absolute top-0 left-0 w-full h-full object-cover shadow-xl brightness-65"
        />
        <div className="absolute top-1/3 left-1/5 transform -translate-x-1/7 -translate-y-1 text-white text-5xl font-semibold text-center rounded-lg bg-gray-900/50 p-5 backdrop-blur-xs">
          <p className="uppercase">
          IMPULSAMOS EL ÉXITO DE TU PROYECTO CON
          SOLUCIONES PRÁCTICAS
          </p>
        </div>
      </div>
  
    <ChooseSection />
    <ProfileSection />
    <Footer2 />

    </div>    
  );
}