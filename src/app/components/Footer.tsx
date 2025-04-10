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
        <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
        <div className="flex items-center flex-grow ml-10">
            <Link href="/">
              <Image                    
                src="/logonitido.png"
                alt="logo"
                width={350}
                height={350}
                className="object-contain max-h-16"
                priority
              />
            </Link>
          </div>
            <h4 className="text-3xl font-semibold text-blueGray-700">PROALIANZA</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
            Contamos con una amplia experiencia en el ámbito industrial, lo que nos convierte en su mejor elección.
            </h5>

            {/* Espacio para cuando esten las redes sociales */}
            {/* <div className="mt-6 lg:mb-0 mb-6">
            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-github"></i>
            </button>
            </div> */}
        </div>
        <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
                <Link href="/pages/service">
                <span className="block uppercase text-blueGray-500 text-xl font-semibold mb-2">Servicios</span>
                </Link>
                <ul className="list-unstyled">
                <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Capacitaciones</p>
                </li>
                <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Servicio Técnico</p>
                </li>
                <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Asesoramiento</p>
                </li>
                <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Alquileres</p>
                </li>
                </ul>
            </div>
            <div className="w-full lg:w-4/8 px-4">
                <Link href="/pages/contact">
                <span className="block uppercase text-blueGray-500 text-xl font-semibold mb-2">Contacto</span>
                </Link>
                <ul className="list-unstyled">
                
                <li>
                    <div className="flex items-center gap-3">
                        <button onClick={handleClick} className="flex items-center gap-3 hover:cursor-pointer">
                        <DevicePhoneMobileIcon className="w-5 h-5 text-gray-500" />
                        <p>+54 9 2616 84-8392</p>
                        </button>
                    </div>
                </li>                            
                <li>
                    <div className="flex items-center gap-3">                        
                        <EnvelopeIcon className="w-5 h-5 text-gray-500" />
                        <button onClick={handleMail} className="flex items-center gap-3 hover:cursor-pointer">
                        <p>proalianzamdz@gmail.com</p>
                        </button>
                    </div>
                </li>                
                <li>
                    <div className="flex items-start gap-3">
                        <MapPinIcon className="w-6 h-6 mt-1 text-gray-500" />
                        <div>
                            <p>Cnel.Terrada 3907 </p>
                            <p>Perdriel, Luján de Cuyo, Mendoza</p>
                        </div>
                    </div>
                </li>   
                </ul>
            </div>
            </div>
        </div>
        </div>
        
    </div>
    </footer>
  )
}
