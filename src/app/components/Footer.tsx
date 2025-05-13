"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EnvelopeIcon, MapPinIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid';

export default function Footer() {
    const handleClick = () => {
        const phoneNumber = '2616848392';
        const message = '¡Buenos días! Me gustaria ponerme en contacto con ustedes para ser asesorado.';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
    const handleMail = () => {     
        const url = `https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqVwhkNhCvfVmGBMWZnpDcTtnxmkCmRStqzrKZnpjMmnNbnNgccrXwtzMCVSbcBCJvtBqV`;
        window.open(url, '_blank');
    };    
  return (    
    <footer style={{ backgroundColor: '#e5771b' }} className="relative bg-gradient-to-b from-gray-50 mt-10 pt-8 pb-6">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left justify-center">
        <div className="w-full lg:w-6/12 px-4">
        <div className="flex items-center flex-grow ml-10">
            <Link href="/">
              <Image                    
                src="/logocompleto.jpeg"
                alt="logo"
                width={350}
                height={350}
                className="object-contain max-h-16 mb-5"
                priority
              />              
            </Link>
            
          </div>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600 text-start font-semibold">
            Somos un equipo nuevo pero con amplia experiencia en el ámbito industrial, lo que nos convierte en su mejor elección
            </h5>
        </div>
        <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
                <Link href="/pages/service">
                <span className="block uppercase text-blueGray-500 text-xl font-semibold mb-2 hover:text-blue-600">Servicios</span>
                </Link>
                <ul className="list-unstyled">
                <li>
                <Link href="/pages/service">
                    <p className="hover:text-blue-600 font-semibold block pb-2 text-sm">Capacitaciones</p>
                </Link>
                </li>
                <li>
                <Link href="/pages/service">
                    <p className="hover:text-blue-600 font-semibold block pb-2 text-sm">Trabajos en Altura</p>
                </Link>
                </li>
                <li>
                <Link href="/pages/service">
                    <p className="hover:text-blue-600 font-semibold block pb-2 text-sm">Espacios Confinados</p>
                </Link>
                </li>
                <li>
                <Link href="/pages/service">
                    <p className="hover:text-blue-600 font-semibold block pb-2 text-sm">Equipos Autónomos</p>
                </Link>
                </li>
                <li>
                <Link href="/pages/service">
                    <p className="hover:text-blue-600 font-semibold block pb-2 text-sm">Mediciones Higiénicas</p>
                </Link>
                </li>
                <li>
                <Link href="/pages/service">
                    <p className="hover:text-blue-600 font-semibold block pb-2 text-sm">Detectores de Gases</p>
                </Link>
                </li>
                </ul>
            </div>
            <div className="w-full lg:w-4/8 px-4">
                <Link href="/pages/contact">
                <span className="block uppercase text-blueGray-500 text-xl font-semibold mb-2 hover:text-blue-600">Contacto</span>
                </Link>
                <ul className="list-unstyled">
                <li>
                    <div className="flex items-center gap-3">
                        <button onClick={handleClick} className="flex items-center gap-3 hover:cursor-pointer hover:text-blue-600">
                        <DevicePhoneMobileIcon className="w-5 h-5 text-gray-500" />
                        <p>+54 9 2616 84-8392</p>
                        </button>
                    </div>
                </li>                            
                <li>
                    <div className="flex items-center gap-3">                        
                        <EnvelopeIcon className="w-5 h-5 text-gray-500" />
                        <button onClick={handleMail} className="flex items-center gap-3 hover:cursor-pointer hover:text-blue-600">
                        <p>proalianzamdz@gmail.com</p>
                        </button>
                    </div>
                </li>                
                <li>
                    <div className="flex items-start gap-3">
                        <MapPinIcon className="w-6 h-6 mt-1 text-gray-500" />
                        <div>                        
                            <p>Cnel.Terrada 3907 - 
                            Perdriel, Luján de Cuyo, Mendoza</p>                       
                        </div>
                    </div>
                </li>   
                </ul>
            </div>
            </div>
        </div>
        </div>
        <div className="flex justify-center">
            <Image
                src="/banderaarg.jpg"
                alt="logo"
                width={350}
                height={350}
                className="object-contain max-h-16 mb-4"
            />          
        </div>

        <Link href="https://www.linkedin.com/in/joaquin-farah-695a15213/" className="font-light flex justify-center">by BrightInnovations®</Link>

    </div>
    </footer>
  )
}
