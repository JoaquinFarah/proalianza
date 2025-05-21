import React from 'react';
import Image from 'next/image';


export default function Footer2() {
  return (
    <div>      

      <div className="relative h-screen">
        <Image        
          src="/footer.jpg"
          alt="Icono"
          width={2000}
          height={2000}
          className="absolute top-0 left-0 w-screen h-screen object-cover shadow-xl brightness-65"
        />

        <div style={{ backgroundColor: '#f7950a' }} className="absolute text-3xl flex justify-center items-center mt-20 p-2 font-bold text-center text-white">
            Somos un equipo de trabajo, con amplia experiencia en el ámbito industrial, lo que nos convierte en tu mejor elección
        </div>        

        <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-3xl font-semibold p-5 max-w-4lg text-center">
          <p>
            Precisión que <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded">impulsa</span> tu industria,
          </p>
          <p>
            <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded">formación</span> que salva vidas
          </p>
        </div>



<div className="absolute">
        {/* Contenido del footer */}
      <div className="mt-113 left-80"
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
            
          {/* Dirección */}
          <div style={{ textAlign: "center", color: "#fff" }}>
            <div style={{ fontSize: "2rem" }}>📍</div>
            <div style={{ fontWeight: "bold", marginTop: 8 }}>
              Terrada 3907, Perdriel,<br />
              Luján de Cuyo, Mendoza.
            </div>
          </div>
          {/* Teléfonos */}
          <div style={{ textAlign: "center", color: "#fff" }}>
            <div style={{ fontSize: "2rem" }}>📞</div>
            <div style={{ fontWeight: "bold", marginTop: 8 }}>
              +54 9 261 6848392              
            </div>
          </div>
          {/* Email */}
          <div style={{ textAlign: "center", color: "#fff" }}>
            <div style={{ fontSize: "2rem" }}>✉️</div>
            <div style={{ fontWeight: "bold", marginTop: 8 }}>
              proalianzamdz@gmail.com
            </div>
          </div>
          {/* Instagram */}
          <div style={{ textAlign: "center", color: "#fff" }}>
            <div style={{ fontSize: "2rem" }}>📷</div>
            <div style={{ fontWeight: "bold", marginTop: 8 }}>
              proalianza.mdz
            </div>
          </div>
        </div>
        {/* Logos */}
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
                    alt="logo"
                    width={350}
                    height={350}
                    className="object-contain max-h-16"
                />  

                <Image
                    src="/logosinfondo.png"
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