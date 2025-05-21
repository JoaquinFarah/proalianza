import React from "react";
import Image from "next/image";

const Footer1 = () => {
  return (
    <div 
      style={{        
        backgroundImage: "url('/footer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",        
      }}
    >      

      {/* Contenido del footer */}
      <div className="mt-120"
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
          <Image
                              src="/banderaarg.jpg"
                              alt="bandera"
                              width={350}
                              height={350}
                              className="object-contain max-h-16"
                          />  
          <img
            src="/logosinfondo.png"
            alt="Logo ProAlianza"
            style={{ width: 200, height: 140, objectFit: "contain", borderRadius: 4, padding: 4 }}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Footer1;