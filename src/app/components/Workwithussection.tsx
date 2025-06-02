import React from "react";

const TripleRight = () => (
  <img
    src="/TripleRight.svg"
    alt="Triple Right"
    style={{ width: 100, height: 100, verticalAlign: "middle" }}
    loading="lazy"
  />
);

const TripleLeft = () => (
  <img
    src="/TripleLeft.svg"
    alt="Triple Left"
    style={{ width: 100, height: 100, verticalAlign: "middle" }}
    loading="lazy"
  />
);

const stats = [
  {
    value: "+7000",
    label: (
      <>
        Acciones de mejora<br />
        Gestionadas (solo en los<br />
        últimos 5 años)<br />
        Servicios de Inspección y<br />
        gestión de Acciones:<br />
        Perforación/<br />
        Workover/ Pulling &<br />
        Flush By/ Eq. Mineros/ Slik<br />
        Line/ Wire Line/ Eq. de<br />        
        Cementación & Fractura        
      </>
    ),
    bold: false,
  },
  {
    value: "+600",
    label: (
      <>
        Inspecciones<br />
        visuales<br />
        <b>NIVEL I</b>
      </>
    ),
    bold: false,
  },
  {
    value: "+200",
    label: (
      <>
        Inspecciones de<br />
        integridad<br />
        <b>NIVEL II</b>
      </>
    ),
    bold: false,
  },
];

const Workwithussection = () => (
  <section
    style={{
      background: "#f7950a",
      color: "#000",
      padding: "48px 0 40px 0",
      textAlign: "center",
      fontFamily: "inherit",
    }}
  >
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginBottom: 24}}>
      <TripleRight />
      <span
        style={{
          background: "#fff",
          color: "#111",
          fontWeight: 700,
          fontSize: 40,
          padding: "0 32px",
          letterSpacing: 1,
          borderRadius: 2,
          boxShadow: "0 2px 8px #0001",
        }}
      >
        TRABAJEMOS JUNTOS
      </span>
      <TripleLeft />
    </div>
    <div style={{maxWidth: 900, margin: "0 auto 32px auto"}}>
      <div style={{fontWeight: 700, fontSize: 26, marginBottom: 8}}>
        Nuestra experiencia y compromiso nos permiten ofrecerte soluciones<br />
        integrales y eficientes para tu proyecto.
      </div>
      <div style={{fontWeight: 700, fontSize: 26}}>
        Contáctanos y descubre cómo podemos ayudarte a alcanzar tus<br />
        objetivos de manera efectiva y sostenible.
      </div>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 32,
        flexWrap: "wrap",
        marginTop: 32,
      }}
    >
      {stats.map((stat, idx) => (
        <div
          key={idx}
          style={{
            background: "#7A6A4A",
            color: "#fff",
            minWidth: 180,
            padding: "24px 16px 12px 16px",
            borderRadius: 2,
            marginBottom: 16,
            boxShadow: "0 2px 8px #0002",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{fontSize: 32, fontWeight: 700, marginBottom: 8}}>
            {stat.value}
          </div>
          <div style={{fontSize: 18, color: "#000", fontWeight: 400, textAlign: "center"}}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Workwithussection;