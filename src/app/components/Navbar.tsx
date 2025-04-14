import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar: React.FC = () => {

  return (
    // style={{ backgroundColor: '#e5771b' }}
    // <nav  className="bg-gradient-to-br from-20% to-white shadow-md fixed w-full z-50 backdrop-blur-sm">
    <nav  className="fixed w-full z-50 backdrop-blur-sm rounded-b-lg bg-white/30 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-800/80 hover:bg-white/50 transition duration-300 ease-in-out">

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
          <div className="flex items-center justify-end space-x-6 mr-52">
          
            <Link href="/pages/about" className="no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400" style={{ textShadow: '2px 2px 4px #e5771b' }}>
            Nosotros
            </Link>

            <Link href="/pages/service" className="no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400" style={{ textShadow: '2px 2px 4px #e5771b' }}>
            Servicios
            </Link>

            <Link href="/pages/profile" className="no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400" style={{ textShadow: '2px 2px 4px #e5771b' }}>
            Perfil
            </Link>             

            <Link href="/pages/contact" className="no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400" style={{ textShadow: '2px 2px 4px #e5771b' }}>
            Contacto
            </Link> 



        <div className="relative inline-block text-left">
        <div className="group">
        <button type="button" className="inline-flex justify-center items-center w-full px-4 focus:outline-none no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400" style={{ textShadow: '2px 2px 4px #e5771b' }}>
            Dropdown
            <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
            </svg>
        </button>

        <div className="absolute left-0 w-40 origin-top-left backdrop-blur-lg rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:bg-white/50 transition duration-300 ease-in-out" style={{ textShadow: '2px 2px 4px #e5771b' }}>
            <div className="py-1">
                <a href="#" className="block px-4 py-2  no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400">Option 1</a>
                <a href="#" className="block px-4 py-2  no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400">Option 2</a>
                <a href="#" className="block px-4 py-2  no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400">Option 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50 no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400">Option 3</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50 no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400">Option 4</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50 no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400">Option 5</a>
            </div>
        </div>
    </div>
</div>





          </div>
        </div>
      </div>
      {/* <div className="h-0.5 bg-gradient-to-r from-amber-600 via-white to-amber-600"></div>
      <div className="h-0.5 bg-gradient-to-r from-white via-amber-600 to-white"></div> */}
      
    </nav>
  );
};

export default Navbar;
