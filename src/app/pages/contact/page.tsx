import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Whatsapp from '@/app/components/Whatsapp';
import Footer from '@/app/components/Footer';
import ContactBanner from '@/app/components/Contactbanner';
import ContactForm from '@/app/components/Contactform';

export default function ContactPage() {
  return (
    <div className="bg-gray-50">      
      <Navbar />
      <Whatsapp />
      <div className="relative h-screen">
        <Image 
          src="/tunel.jpg" 
          alt="Icono" 
          width={2000} 
          height={2000} 
          className="absolute top-0 left-0 w-full h-full object-cover shadow-xl" 
        />
        <div className="absolute top-1/3 left-1/5 transform -translate-x-1/7 -translate-y-1 text-white text-5xl font-semibold text-center rounded-lg bg-gray-900/50 p-5 backdrop-blur-xs">
          <p className="uppercase" style={{ textShadow: '2px 2px 4px #e5771b' }}>Contáctate con nosotros y adquiere de manera integral todos los datos y soluciones eficiencientes para tu proyecto.</p>
        </div>
      </div>
    <ContactForm />
    <ContactBanner />
    <Footer />
    </div>
  );
}