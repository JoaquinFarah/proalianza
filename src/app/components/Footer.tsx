"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {
  const handleClick = () => {
    const phoneNumber = '2613829838';
    const message = '¡Buenos días! Me gustaría ponerme en contacto con ustedes para ser asesorado.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  const handleMail = () => {
    const url = `https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqVwhkNhCvfVmGBMWZnpDcTtnxmkCmRStqzrKZnpjMmnNbnNgccrXwtzMCVSbcBCJvtBqV`;
    window.open(url, '_blank');
  };
  const handleAddress = () => {     
    const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.983354692778!2d-68.87008154425357!3d-33.07509723188958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e75b74ddd56fb%3A0x12d4dd49a9ccc0c0!2sTerrada%203907%2C%20Mendoza%2C%20Argentina!5e0!3m2!1ses-419!2sus!4v1748361865236!5m2!1ses-419!2sus`;
    window.open(url, '_blank');
  };
  return (
    <div>

      <div className="relative h-96">
        <Image
          src="/Footer.jpg"
          alt="Icono"
          width={3000}
          height={3000}
          className="absolute top-0 left-0 w-screen h-auto object-cover shadow-xl brightness-65"
        />

        <div style={{ backgroundColor: '#f7950a' }} className="absolute text-3xl flex justify-center items-center mt-20 p-2 px-36 font-bold text-center text-white">
          Somos un equipo de trabajo, con amplia experiencia en el ámbito industrial, lo que nos convierte en tu mejor elección
        </div>

        <div className="absolute left-8 top-10/12 -translate-y-1/4 text-white text-3xl font-semibold p-5 max-w-4lg text-center">
          <p>
            Precisión que <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded">impulsa</span> tu industria,
          </p>
          <p>
            <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded">formación</span> que salva vidas
          </p>
        </div>



        <div className="absolute">
          <div className="mt-120 left-80"
            style={{
              padding: "40px 0 20px 0",
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "80px",
                flexWrap: "wrap",
                marginBottom: "30px",
              }}
            >

              <button onClick={handleAddress} className="text-center text-white hover: cursor-pointer">
                <div style={{ fontSize: "2rem" }}>📍</div>
                <div style={{ fontWeight: "bold", marginTop: 8 }}>
                  Terrada 3907, Perdriel,<br />
                  Luján de Cuyo, Mendoza.
                </div>
              </button>
              <button onClick={handleClick} className="text-center text-white hover: cursor-pointer">
                <div style={{ fontSize: "2rem" }}>📞</div>
                <div style={{ fontWeight: "bold", marginTop: 8 }}>
                  +54 9 261 3829838<br />
                  <br />
                </div>
              </button>
              <button onClick={handleMail} className="text-center text-white hover: cursor-pointer">
                <div style={{ fontSize: "2rem" }}>✉️</div>
                <div style={{ fontWeight: "bold", marginTop: 8 }}>
                  proalianzamdz@gmail.com<br />
                  <br />
                </div>
              </button>
              <Link href="https://www.instagram.com/proalianza.mdz/" target="_blank" className="text-center text-white hover: cursor-pointer">
                <div style={{ fontSize: "2rem" }}>📷</div>
                <div style={{ fontWeight: "bold", marginTop: 8 }}>
                  proalianza.mdz<br />
                  <br />
                </div>
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                alignItems: "center",
              }}
            >
              <div className="flex justify-center">
                <Image
                  src="/banderaarg.jpg"
                  alt="bandera"
                  width={350}
                  height={350}
                  className="object-contain max-h-16"
                />

                <Image
                  src="/logocompleto.jpeg"
                  alt="logo"
                  width={350}
                  height={350}
                  className="object-contain max-h-16"
                />
              </div>
            </div>            
          </div>
          
        </div>
      </div>
    </div>
  );
}