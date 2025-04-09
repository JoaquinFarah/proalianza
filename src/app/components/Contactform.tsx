'use client';

import { EnvelopeIcon, MapPinIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid';

export default function ContactForm() {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {/* Left side */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Contáctenos</h2>
          <p className="text-lg text-gray-600">
            Nuestros horarios de atención son de lunes a viernes de 9:00 a 18:00. Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros. Estaremos encantados de ayudarte.
          </p>
          <div className="space-y-4 text-gray-700">            
            
            <div className="flex items-center gap-3">
              <DevicePhoneMobileIcon className="w-5 h-5 text-gray-500" />
              <p>+54 9 2616 84-8392</p>
            </div>
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="w-5 h-5 text-gray-500" />
              <p>proalianzamdz@gmail.com </p>
            </div>
            <div className="flex items-start gap-3">
              <MapPinIcon className="w-6 h-6 mt-1 text-gray-500" />
              <div>
                <p>Cnel.Terrada 3907 </p>
                <p>Perdriel, Luján de Cuyo, Mendoza</p>
              </div>
            </div>            
          </div>          
        </div> 
        {/* Right side */}      
        <div className="mt-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Luján%20de%20Cuyo%2C%20Mendoza%2C%20Argentina&output=embed"
              className="w-full h-80 rounded-md border border-gray-300 shadow-lg"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
      </div>
    </section>
    
  );
}


