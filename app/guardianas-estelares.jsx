"use client";
import { useState, useEffect, useRef } from "react";

const characters = [
  {
    id: 1,
    name: "Ana",
    title: "Guardiana de las Estrellas",
    classes: ["Líder", "Táctica", "Melé"],
    element: "Luz Estelar",
    color: "#2dd4bf",
    glow: "#14b8a6",
    gradient: ["#001a18", "#003d38", "#000f0e"],
    orb: ["#2dd4bf", "#14b8a6", "#0f766e"],
    description:
      "La primera en despertar. Su alma resuena con la canción de las constelaciones. Con liderazgo innato y precisión táctica, Ana guía a las guardianas hacia la victoria.",
    stats: { Poder: 80, Velocidad: 80, Defensa: 70, Magia: 60 },
    skills: ["Portal Celestial", "Lluvia de Estrellas", "Vacío Cósmico"],
  },
  {
    id: 2,
    name: "Yen",
    title: "Guardiana del Alba",
    classes: ["Protectora", "Melé"],
    element: "Fuego Solar",
    color: "#ffd166",
    glow: "#ff9f1c",
    gradient: ["#3a1a00", "#7a3900", "#1a0d00"],
    orb: ["#ffd166", "#ff9f1c", "#ff6b35"],
    description:
      "Forjada en el primer rayo del amanecer, Yen dobla la gravedad a su voluntad y golpea con la fuerza de un meteoro. Su presencia en el campo de batalla es inamovible.",
    stats: { Poder: 100, Velocidad: 60, Defensa: 90, Magia: 70 },
    skills: ["Atracción Gravitacional", "Distorsión Espacial", "Caída Meteórica"],
  },
  {
    id: 3,
    name: "Fiora",
    title: "Guardiana del Cosmos",
    classes: ["Espadachina", "Sublíder"],
    element: "Vacío Espacial",
    color: "#90e0ef",
    glow: "#48cae4",
    gradient: ["#0a1628", "#0d3b6e", "#061022"],
    orb: ["#90e0ef", "#48cae4", "#0077b6"],
    description:
      "Velocidad hecha carne. Fiora traza arcos de luz con su espada antes de que el enemigo pueda parpadear. Su precisión y liderazgo la convierten en el filo del equipo.",
    stats: { Poder: 90, Velocidad: 100, Defensa: 80, Magia: 50 },
    skills: ["Estocada de Rayo", "Mil Cortes", "Overdrive Comet"],
  },
  {
    id: 4,
    name: "Xaya",
    title: "Guardiana de las Sombras",
    classes: ["Táctica", "Ejecutora", "Artillera"],
    element: "Oscuridad Lunar",
    color: "#bf5af2",
    glow: "#9b2dca",
    gradient: ["#0f0020", "#2d004d", "#0a0015"],
    orb: ["#bf5af2", "#9b2dca", "#6e0db5"],
    description:
      "Xaya analiza, calcula y ejecuta. Manipula la psique del enemigo antes de descargar un impacto devastador. Táctica implacable con la potencia de una artillería estelar.",
    stats: { Poder: 70, Velocidad: 90, Defensa: 60, Magia: 90 },
    skills: ["Transmutación Psónica", "Desfase", "Impact Boom"],
  },
  {
    id: 5,
    name: "Lissie",
    title: "Guardiana del Amanecer",
    classes: ["Artillera", "Caótica"],
    element: "Viento Sagrado",
    color: "#80ffdb",
    glow: "#52efca",
    gradient: ["#003320", "#006644", "#001a10"],
    orb: ["#80ffdb", "#52efca", "#06d6a0"],
    description:
      "Lissie no combate, ella desata. Con magia desbordante invoca criaturas colosales y distorsiona la realidad misma. El caos es su lenguaje y el cosmos su lienzo.",
    stats: { Poder: 80, Velocidad: 60, Defensa: 90, Magia: 100 },
    skills: ["Invocación Animada", "Materialización Cósmica", "Gigantomaquia"],
  },
  {
    id: 6,
    name: "Sarah",
    title: "Guardiana del Cielo Eterno",
    classes: ["Soporte", "Sanadora"],
    element: "Luz Rosa",
    color: "#ffb3d9",
    glow: "#ff80bf",
    gradient: ["#2a0018", "#5c0035", "#1a000f"],
    orb: ["#ffb3d9", "#ff80bf", "#e0559a"],
    description:
      "El escudo del equipo. Sarah envuelve a sus aliadas en burbujas de energía estelar y sana sus heridas con ternura infinita. Cuando todo parece perdido, Sarah sostiene la esperanza.",
    stats: { Poder: 50, Velocidad: 50, Defensa: 100, Magia: 90 },
    skills: ["Escudo Burbuja", "Sanación Estelar", "Burbuja Explosiva"],
  },
];


function StarField({ count = 180 }) {
  const stars = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      delay: Math.random() * 5,
      dur: Math.random() * 4 + 2,
      opacity: Math.random() * 0.7 + 0.3,
    }))
  ).current;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {stars.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: "50%",
            backgroundColor: "white",
            opacity: s.opacity,
            animation: `twinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

function FloatingParticles() {
  const particles = useRef(
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 6 + 3,
      dur: Math.random() * 8 + 6,
      delay: Math.random() * 10,
      color: ["#ff9ed8", "#c77dff", "#90e0ef", "#ffd166", "#80ffdb"][Math.floor(Math.random() * 5)],
    }))
  ).current;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            bottom: "-20px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            animation: `floatUp ${p.dur}s ${p.delay}s ease-in infinite`,
          }}
        />
      ))}
    </div>
  );
}

function StatBar({ label, value, color }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(value), 300);
    return () => clearTimeout(t);
  }, [value]);

  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1" style={{ fontSize: "11px" }}>
        <span style={{ color: "#aaa", letterSpacing: "0.05em" }}>{label.toUpperCase()}</span>
        <span style={{ color, fontWeight: 700 }}>{value}</span>
      </div>
      <div
        style={{
          height: "4px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            borderRadius: "2px",
            transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: `0 0 8px ${color}`,
          }}
        />
      </div>
    </div>
  );
}

function CharacterCard({ char, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(char)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "pointer",
        borderRadius: "20px",
        background: `linear-gradient(160deg, ${char.gradient[0]}, ${char.gradient[1]}, ${char.gradient[2]})`,
        border: `1px solid ${char.color}33`,
        boxShadow: hovered
          ? `0 0 40px ${char.glow}55, 0 0 80px ${char.glow}22, inset 0 0 30px ${char.glow}11`
          : `0 4px 20px rgba(0,0,0,0.5)`,
        transform: hovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        padding: "28px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Shimmer overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 0%, ${char.color}15, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Orb / Portrait */}
      <div
        style={{
          width: "90px",
          height: "90px",
          margin: "0 auto 20px",
          borderRadius: "50%",
          background: `radial-gradient(circle at 35% 35%, ${char.orb[0]}, ${char.orb[1]}, ${char.orb[2]})`,
          boxShadow: `0 0 30px ${char.glow}99, 0 0 60px ${char.glow}44, inset 0 0 20px ${char.glow}44`,
          animation: `pulseOrb 3s ease-in-out infinite`,
          animationDelay: `${char.id * 0.4}s`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Star icon inside orb */}
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 4L23.5 14.5H35L25.5 21L29 31.5L20 25L11 31.5L14.5 21L5 14.5H16.5Z"
            fill="white"
            fillOpacity="0.9"
          />
        </svg>
        {/* Orbit ring */}
        <div
          style={{
            position: "absolute",
            inset: "-8px",
            borderRadius: "50%",
            border: `1px solid ${char.color}44`,
            animation: "spinOrbit 6s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "-16px",
            borderRadius: "50%",
            border: `1px dashed ${char.color}22`,
            animation: "spinOrbit 10s linear infinite reverse",
          }}
        />
      </div>

      {/* Name & Title */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <h3
          style={{
            fontSize: "22px",
            fontWeight: 800,
            letterSpacing: "0.05em",
            color: char.color,
            textShadow: `0 0 20px ${char.glow}`,
            marginBottom: "4px",
            fontFamily: "'Georgia', serif",
          }}
        >
          {char.name}
        </h3>
        <p style={{ fontSize: "12px", color: "#aaa", letterSpacing: "0.08em" }}>{char.title}</p>
      </div>

      {/* Badges */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          marginBottom: "18px",
          flexWrap: "wrap",
        }}
      >
        {[...char.classes, char.element].map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "10px",
              padding: "3px 10px",
              borderRadius: "20px",
              background: `${char.color}18`,
              border: `1px solid ${char.color}44`,
              color: char.color,
              letterSpacing: "0.06em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div style={{ marginBottom: "16px" }}>
        {Object.entries(char.stats).map(([k, v]) => (
          <StatBar key={k} label={k} value={v} color={char.color} />
        ))}
      </div>

      {/* Skills */}
      <div>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.12em",
            color: "#777",
            marginBottom: "8px",
          }}
        >
          HABILIDADES
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          {char.skills.map((sk, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "12px",
                color: "#ddd",
              }}
            >
              <span style={{ color: char.color, fontSize: "8px" }}>✦</span>
              {sk}
            </div>
          ))}
        </div>
      </div>

      {/* Hover CTA */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: `linear-gradient(transparent, ${char.gradient[2]}cc)`,
          padding: "20px 24px 16px",
          textAlign: "center",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(10px)",
          transition: "all 0.3s ease",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: char.color,
            fontWeight: 700,
          }}
        >
          VER PERFIL COMPLETO →
        </span>
      </div>
    </div>
  );
}

function CharacterModal({ char, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!char) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(12px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: `linear-gradient(160deg, ${char.gradient[0]}, ${char.gradient[1]})`,
          border: `1px solid ${char.color}44`,
          borderRadius: "28px",
          boxShadow: `0 0 80px ${char.glow}55, 0 0 160px ${char.glow}22`,
          maxWidth: "520px",
          width: "100%",
          padding: "40px",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "20px",
            background: "transparent",
            border: "none",
            color: "#aaa",
            fontSize: "22px",
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        {/* Large orb */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div
            style={{
              width: "130px",
              height: "130px",
              margin: "0 auto 20px",
              borderRadius: "50%",
              background: `radial-gradient(circle at 35% 35%, ${char.orb[0]}, ${char.orb[1]}, ${char.orb[2]})`,
              boxShadow: `0 0 60px ${char.glow}aa, 0 0 120px ${char.glow}44`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 4L23.5 14.5H35L25.5 21L29 31.5L20 25L11 31.5L14.5 21L5 14.5H16.5Z"
                fill="white"
                fillOpacity="0.95"
              />
            </svg>
          </div>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 900,
              color: char.color,
              textShadow: `0 0 30px ${char.glow}`,
              fontFamily: "'Georgia', serif",
              letterSpacing: "0.04em",
              marginBottom: "6px",
            }}
          >
            {char.name}
          </h2>
          <p style={{ color: "#bbb", fontSize: "14px", letterSpacing: "0.08em" }}>{char.title}</p>
          <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "12px" }}>
            {[...char.classes, char.element].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "11px",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  background: `${char.color}22`,
                  border: `1px solid ${char.color}55`,
                  color: char.color,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            color: "#ccc",
            fontSize: "14px",
            lineHeight: "1.7",
            textAlign: "center",
            marginBottom: "28px",
            fontStyle: "italic",
          }}
        >
          "{char.description}"
        </p>

        {/* Stats */}
        <div style={{ marginBottom: "24px" }}>
          {Object.entries(char.stats).map(([k, v]) => (
            <StatBar key={k} label={k} value={v} color={char.color} />
          ))}
        </div>

        {/* Skills */}
        <div>
          <p style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#777", marginBottom: "12px" }}>
            HABILIDADES
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {char.skills.map((sk, i) => (
              <span
                key={i}
                style={{
                  padding: "6px 14px",
                  borderRadius: "20px",
                  background: `${char.color}15`,
                  border: `1px solid ${char.color}44`,
                  color: char.color,
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                {sk}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GuardianasEstelares() {
  const [selectedChar, setSelectedChar] = useState(null);
  const [filter, setFilter] = useState("Todas");

  const classes = ["Todas", ...new Set(characters.flatMap((c) => c.classes))];
  const filtered =
    filter === "Todas" ? characters : characters.filter((c) => c.classes.includes(filter));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #04010f 0%, #0a0220 30%, #06011a 60%, #020010 100%)",
        color: "white",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0.8; }
          100% { transform: translateY(-100vh) scale(0.3); opacity: 0; }
        }
        @keyframes pulseOrb {
          0%, 100% { box-shadow: 0 0 30px var(--glow)99, 0 0 60px var(--glow)44; transform: scale(1); }
          50% { box-shadow: 0 0 50px var(--glow)cc, 0 0 100px var(--glow)55; transform: scale(1.05); }
        }
        @keyframes spinOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes heroGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <StarField count={200} />
      <FloatingParticles />

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "16px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(180deg, rgba(4,1,15,0.95) 0%, transparent 100%)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M14 2L16.6 9.9H25L18.7 14.6L21.3 22.5L14 17.8L6.7 22.5L9.3 14.6L3 9.9H11.4Z"
              fill="#c77dff"
              style={{ filter: "drop-shadow(0 0 6px #c77dff)" }}
            />
          </svg>
          <span
            style={{
              fontWeight: 800,
              letterSpacing: "0.15em",
              fontSize: "14px",
              background: "linear-gradient(90deg, #ff9ed8, #c77dff, #90e0ef)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            GUARDIANAS ESTELARES
          </span>
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
          {["Historia", "Personajes", "Mundo", "Combate"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: "#aaa",
                textDecoration: "none",
                fontSize: "12px",
                letterSpacing: "0.12em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff9ed8")}
              onMouseLeave={(e) => (e.target.style.color = "#aaa")}
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 20px 60px",
          zIndex: 2,
        }}
      >
        {/* Background aurora */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "500px",
            background:
              "radial-gradient(ellipse, rgba(199,125,255,0.15) 0%, rgba(144,224,239,0.08) 40%, transparent 70%)",
            animation: "heroGlow 4s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* Large star decoration */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.06,
            animation: "rotateSlow 30s linear infinite",
          }}
        >
          <svg width="600" height="600" viewBox="0 0 100 100" fill="none">
            <path
              d="M50 5L56 34H86L63 52L71 81L50 64L29 81L37 52L14 34H44Z"
              fill="white"
            />
          </svg>
        </div>

        <div style={{ animation: "fadeSlideUp 1s ease-out forwards" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.35em",
              color: "#c77dff",
              marginBottom: "16px",
              textShadow: "0 0 20px #c77dff",
            }}
          >
            ✦ UN RPG DE FANTASÍA MÁGICA ✦
          </p>

          <h1
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              fontWeight: 900,
              fontFamily: "'Georgia', serif",
              lineHeight: 1.1,
              marginBottom: "24px",
              background: "linear-gradient(135deg, #ff9ed8 0%, #c77dff 35%, #90e0ef 65%, #ffd166 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 4s linear infinite",
            }}
          >
            GUARDIANAS
            <br />
            ESTELARES
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "#bbb",
              maxWidth: "560px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
              letterSpacing: "0.03em",
            }}
          >
            Cuando las estrellas lloran, seis guerreras despiertan. Forjadas por el cosmos,
            protegidas por la magia, unidas por el destino. El universo espera que ellas lo salven.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              style={{
                padding: "14px 36px",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #c77dff, #9b5de5)",
                border: "none",
                color: "white",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                cursor: "pointer",
                boxShadow: "0 0 30px #c77dff66, 0 4px 20px rgba(0,0,0,0.5)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 0 50px #c77dffaa, 0 8px 30px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 0 30px #c77dff66, 0 4px 20px rgba(0,0,0,0.5)";
              }}
            >
              JUGAR AHORA
            </button>
            <button
              style={{
                padding: "14px 36px",
                borderRadius: "50px",
                background: "transparent",
                border: "1px solid rgba(199,125,255,0.4)",
                color: "#c77dff",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(199,125,255,0.1)";
                e.target.style.borderColor = "rgba(199,125,255,0.8)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.borderColor = "rgba(199,125,255,0.4)";
              }}
            >
              VER HISTORIA
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0.5,
          }}
        >
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#aaa" }}>DESCUBRIR</span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(180deg, #c77dff, transparent)",
              animation: "fadeSlideUp 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* LORE SECTION */}
      <section
        style={{
          position: "relative",
          zIndex: 2,
          padding: "80px 40px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(199,125,255,0.06), rgba(144,224,239,0.04))",
            border: "1px solid rgba(199,125,255,0.12)",
            borderRadius: "24px",
            padding: "60px 40px",
          }}
        >
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.35em",
              color: "#90e0ef",
              marginBottom: "20px",
              textShadow: "0 0 15px #90e0ef",
            }}
          >
            ✦ EL ORIGEN ✦
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              fontFamily: "'Georgia', serif",
              marginBottom: "20px",
              color: "white",
            }}
          >
            Cuando el cosmos llamó, ellas respondieron
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#bbb",
              lineHeight: "1.9",
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            En los confines de la galaxia, una oscuridad antigua amenaza con devorar cada estrella.
            Seis almas elegidas por el firmamento han despertado con poderes más allá de la comprensión mortal.
            Juntas forman la última línea de defensa. <em style={{ color: "#c77dff" }}>Las Guardianas Estelares.</em>
          </p>
        </div>
      </section>

      {/* CHARACTERS SECTION */}
      <section
        id="personajes"
        style={{ position: "relative", zIndex: 2, padding: "40px 24px 100px" }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.35em",
                color: "#ffd166",
                marginBottom: "14px",
                textShadow: "0 0 15px #ffd166",
              }}
            >
              ✦ LAS GUERRERAS ✦
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 900,
                fontFamily: "'Georgia', serif",
                background: "linear-gradient(135deg, #ffd166, #ff9ed8, #c77dff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "16px",
              }}
            >
              Elige tu Guardiana
            </h2>
            <p style={{ color: "#888", fontSize: "14px", letterSpacing: "0.05em" }}>
              Cada una con su propio poder, historia y destino en las estrellas
            </p>
          </div>

          {/* Filter pills */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              marginBottom: "48px",
              flexWrap: "wrap",
            }}
          >
            {classes.map((cls) => (
              <button
                key={cls}
                onClick={() => setFilter(cls)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "50px",
                  border: `1px solid ${filter === cls ? "#c77dff" : "rgba(255,255,255,0.1)"}`,
                  background: filter === cls ? "rgba(199,125,255,0.2)" : "transparent",
                  color: filter === cls ? "#c77dff" : "#888",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {cls.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {filtered.map((char) => (
              <CharacterCard key={char.id} char={char} onClick={setSelectedChar} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          position: "relative",
          zIndex: 2,
          borderTop: "1px solid rgba(199,125,255,0.1)",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "12px" }}>
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
            <path
              d="M14 2L16.6 9.9H25L18.7 14.6L21.3 22.5L14 17.8L6.7 22.5L9.3 14.6L3 9.9H11.4Z"
              fill="#c77dff"
              style={{ filter: "drop-shadow(0 0 4px #c77dff)" }}
            />
          </svg>
          <span
            style={{
              fontWeight: 800,
              letterSpacing: "0.15em",
              fontSize: "13px",
              background: "linear-gradient(90deg, #ff9ed8, #c77dff, #90e0ef)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            GUARDIANAS ESTELARES
          </span>
        </div>
        <p style={{ color: "#555", fontSize: "11px", letterSpacing: "0.08em" }}>
          © 2026 · Guardianas Estelares RPG · Todos los derechos reservados
        </p>
      </footer>

      {/* Modal */}
      {selectedChar && (
        <CharacterModal char={selectedChar} onClose={() => setSelectedChar(null)} />
      )}
    </div>
  );
}
