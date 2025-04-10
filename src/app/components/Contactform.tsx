'use client';
import { EnvelopeIcon, MapPinIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid';

export default function ContactForm() {
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
  const handleAddress = () => {     
    const url = `https://www.google.com/maps?q=Cnel.+Terrada+3907,+Perdriel,+Luján+de+Cuyo,+Mendoza&output=embed`;
    window.open(url, '_blank');
  };
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
            <button onClick={handleClick} className="flex items-center gap-3 hover:cursor-pointer hover:text-amber-500">
              <DevicePhoneMobileIcon className="w-5 h-5 text-gray-500" />
              <p>+54 9 2616 84-8392</p>
            </button>
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="w-5 h-5 text-gray-500" />
              <button onClick={handleMail} className="flex items-center gap-3 hover:cursor-pointer hover:text-amber-500">
              <p>proalianzamdz@gmail.com</p>
              </button>
            </div>
            <div className="flex items-start gap-3">
              <MapPinIcon className="w-6 h-6 mt-1 text-gray-500" />
              <div>
              <button onClick={handleAddress} className="flex items-center gap-3 hover:cursor-pointer hover:text-amber-500">
                <p>Cnel.Terrada 3907 - Perdriel, Luján de Cuyo, Mendoza</p>
                </button>
              </div>
            </div>            
          </div>          
        </div> 
        {/* Right side */} 
          <div className="mt-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Cnel.+Terrada+3907,+Perdriel,+Luján+de+Cuyo,+Mendoza&output=embed"
              className="w-full h-80 rounded-md border border-gray-300 shadow-lg"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
      </div>
    </section>
    
  );
}


