import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar: React.FC = () => {

  return (
    // style={{ backgroundColor: '#e5771b' }}
    // <nav  className="bg-gradient-to-br from-20% to-white shadow-md fixed w-full z-50 backdrop-blur-sm">
    <nav  className="fixed w-full z-50 backdrop-blur-sm rounded-b-lg bg-white/30 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-800/80 hover:bg-amber-500/70 transition duration-300 ease-in-out">

      <div className="w-full mx-0 px-1 sm:px-1 lg:px-2">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo leftside */}
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
          
          {/* Links rightside */}
          <div className="flex items-center justify-end space-x-10 mr-60">

            <Link href="/" className="no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400 hover:text-white text-xl" style={{ textShadow: '2px 2px 4px #e5771b' }}>
            Inicio
            </Link>
          
            <Link href="/pages/about" className="no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400 hover:text-white text-xl" style={{ textShadow: '2px 2px 4px #e5771b' }}>
            Quiénes Somos
            </Link>

            <Link href="/pages/profile" className="no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400 hover:text-white text-xl" style={{ textShadow: '2px 2px 4px #e5771b' }}>
            Perfil
            </Link> 

            <div className="relative inline-block text-left">
              <div className="group">
              <button className="inline-flex justify-center items-center w-full px-1 focus:outline-none no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400 hover:cursor-pointer hover:text-white text-xl" style={{ textShadow: '2px 2px 4px #e5771b' }}>
                  Prestaciones
                  <svg className="w-4 h-4 -mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 15l-5-5h10l-5 5z" />
                  </svg>
              </button>

              <div className="absolute left-0 w-60 origin-top-left rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 hover:bg-amber-500/70 group-hover:visible bg-white/30 transition duration-300 ease-in-out text-xl" style={{ textShadow: '2px 2px 4px #e5771b' }}>
                  <div className="py-2">
                    <Link href="/pages/training" className="block px-4 py-2 hover:bg-gray-500 hover:text-white no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400">Capacitaciones</Link>
                    
                    <Link href="/pages/service" className="block px-4 py-2 hover:bg-gray-500 hover:text-white no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400">Servicios</Link>

                    <Link href="/pages/sales&rent" className="block px-4 py-2 hover:bg-gray-500 hover:text-white no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400">Venta y Alquileres</Link>
                  </div>
                </div>
              </div>
            </div> 

            <Link href="/pages/contact" className="no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400 hover:text-white text-xl" style={{ textShadow: '2px 2px 4px #e5771b' }}>
            Contacto
            </Link> 

        </div>
        </div>
      </div>
      {/* <div className="h-0.5 bg-gradient-to-r from-amber-600 via-white to-amber-600"></div>
      <div className="h-0.5 bg-gradient-to-r from-white via-amber-600 to-white"></div> */}
      
    </nav>
  );
};

export default Navbar;
