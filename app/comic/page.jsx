"use client";
import { useState, useEffect, useRef } from "react";

/* ─── CAST DATA ─── */
const cast = [
  {
    id: 1,
    name: "ALEX",
    alias: "La Estrella Rosa",
    role: "PROTAGONISTA · LÍDER",
    color: "#ff69b4",
    glow: "#ff1493",
    bg: ["#2a0012", "#4a0025", "#1a000d"],
    description:
      "Rubia, hermosa y letal. Líder de las porristas de día, líder de las Guardianas cuando el destino lo exige. Su carisma esconde una guerrera implacable: cinturón negro en Tae Kwon Do, capaz de destrozar la oscuridad con una sonrisa y un roundhouse kick.",
    quote: '"El universo eligió a la chica equivocada para quedarse quieta."',
    powers: ["Tae Kwon Do Estelar", "Carisma Devastadora", "Liderazgo Absoluto"],
    panelStyle: "shattered",
  },
  {
    id: 2,
    name: "SARAH",
    alias: "Puños de Tormenta",
    role: "BRAWLER · FUERZA BRUTA",
    color: "#ff2222",
    glow: "#cc0000",
    bg: ["#2a0000", "#4a0000", "#1a0000"],
    description:
      "Ruda, directa y sin filtro. Sarah no pide permiso para entrar en combate: invoca guantes de energía pura que pulverizan todo a su paso. Puede ajustarlos, hacerlos enormes, convertir sus puños en martillos cósmicos. Si hay un muro, ella lo atraviesa.",
    quote: '"¿Diplomacia? Mis puños son bastante diplomáticos."',
    powers: ["Guantes de Combate Cósmico", "Impacto Colosal", "Puño de Supernova"],
    panelStyle: "cracked",
  },
  {
    id: 3,
    name: "EVELYN",
    alias: "Mente Absoluta",
    role: "TELEQUINÉTICA · ESTRATEGA",
    color: "#c77dff",
    glow: "#9b2dca",
    bg: ["#1a0033", "#330066", "#0d001a"],
    description:
      "29 años. Madre de dos. La más seria del equipo. Evelyn no necesita levantar un dedo: su telequinesis es tan poderosa que puede aplastar una nave espacial con el pensamiento. Maternal con las suyas, despiadada con el enemigo. La mente más peligrosa del cosmos.",
    quote: '"Puedo sentir cada átomo en esta habitación. Y puedo mover cada uno."',
    powers: ["Telequinesis Omega", "Barrera Psíquica", "Aplastamiento Gravitacional"],
    panelStyle: "distorted",
  },
  {
    id: 4,
    name: "ELEN",
    alias: "Viento Esmeralda",
    role: "SANADORA · VIENTO CÓSMICO",
    color: "#50c878",
    glow: "#2ecc71",
    bg: ["#001a0d", "#003320", "#000d06"],
    description:
      "Pelo corto, mirada aguda, manos que curan. Estudiante de medicina por vocación, guardiana por destino. Elen manipula los vientos cósmicos para sanar heridas imposibles o desatar tormentas que arrasan campos de batalla. La calma antes del huracán.",
    quote: '"Primero te curo. Después decido si me caes bien."',
    powers: ["Sanación Cósmica", "Viento Esmeralda", "Tormenta del Destino"],
    panelStyle: "fragmented",
  },
];

/* ─── GLITCH TEXT COMPONENT ─── */
function GlitchText({ text, color = "#ff0040", size = "72px", delay = 0 }) {
  const id = useRef(`glitch-${Math.random().toString(36).slice(2)}`).current;
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <style>{`
        @keyframes ${id}-glitch1 {
          0%, 100% { clip-path: inset(0 0 85% 0); transform: translate(-2px, 2px); }
          25% { clip-path: inset(15% 0 60% 0); transform: translate(2px, -1px); }
          50% { clip-path: inset(40% 0 30% 0); transform: translate(-3px, 1px); }
          75% { clip-path: inset(70% 0 5% 0); transform: translate(1px, -2px); }
        }
        @keyframes ${id}-glitch2 {
          0%, 100% { clip-path: inset(60% 0 0 0); transform: translate(2px, -2px); }
          25% { clip-path: inset(30% 0 40% 0); transform: translate(-1px, 2px); }
          50% { clip-path: inset(0 0 70% 0); transform: translate(3px, -1px); }
          75% { clip-path: inset(45% 0 25% 0); transform: translate(-2px, 1px); }
        }
      `}</style>
      <span
        style={{
          fontSize: size,
          fontWeight: 900,
          fontFamily: "'Impact', 'Arial Black', sans-serif",
          color,
          textShadow: `0 0 20px ${color}, 0 0 60px ${color}66, 0 0 100px ${color}33`,
          letterSpacing: "0.08em",
          position: "relative",
          display: "inline-block",
          animationDelay: `${delay}s`,
        }}
      >
        {text}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            color: "#0ff",
            animation: `${id}-glitch1 0.3s infinite linear`,
            opacity: 0.7,
          }}
        >
          {text}
        </span>
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            color: "#f0f",
            animation: `${id}-glitch2 0.3s infinite linear`,
            opacity: 0.5,
          }}
        >
          {text}
        </span>
      </span>
    </div>
  );
}

/* ─── CHAOS PARTICLES ─── */
function ChaosParticles() {
  const particles = useRef(
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      dur: Math.random() * 6 + 3,
      delay: Math.random() * 8,
      color: ["#ff0040", "#ff69b4", "#c77dff", "#50c878", "#ff2222", "#0ff", "#f0f"][
        Math.floor(Math.random() * 7)
      ],
      type: Math.random() > 0.5 ? "float" : "drift",
    }))
  ).current;

  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 1 }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: p.type === "float" ? "50%" : "0",
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animation: `chaosFloat${p.type === "float" ? "A" : "B"} ${p.dur}s ${p.delay}s ease-in-out infinite`,
            transform: p.type === "drift" ? "rotate(45deg)" : "none",
          }}
        />
      ))}
    </div>
  );
}

/* ─── LIGHTNING BOLT SVG ─── */
function Lightning({ style }) {
  return (
    <svg
      viewBox="0 0 100 300"
      fill="none"
      style={{ position: "absolute", opacity: 0.15, ...style }}
    >
      <path
        d="M50 0 L35 120 L55 115 L20 300 L65 140 L45 145 Z"
        fill="url(#lightning-grad)"
        filter="url(#lightning-glow)"
      />
      <defs>
        <linearGradient id="lightning-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="50%" stopColor="#ff0040" />
          <stop offset="100%" stopColor="#c77dff" />
        </linearGradient>
        <filter id="lightning-glow">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
    </svg>
  );
}

/* ─── SCROLL-REVEAL PANEL ─── */
function ComicPanel({ char, index, isVisible }) {
  const isEven = index % 2 === 0;
  const rotation = isEven ? -2 + Math.random() * 4 : -3 + Math.random() * 6;
  const crackPatterns = {
    shattered: "polygon(2% 0%, 98% 3%, 100% 97%, 1% 100%, 5% 55%, 0% 50%)",
    cracked: "polygon(0% 0%, 100% 2%, 97% 100%, 3% 98%, 0% 60%)",
    distorted: "polygon(3% 2%, 97% 0%, 100% 100%, 0% 97%)",
    fragmented: "polygon(0% 0%, 100% 0%, 98% 98%, 2% 100%, 0% 45%)",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isEven ? "row" : "row-reverse",
        alignItems: "center",
        gap: "clamp(20px, 4vw, 60px)",
        padding: "40px clamp(20px, 5vw, 80px)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : `translateY(80px) scale(0.9) rotate(${isEven ? -5 : 5}deg)`,
        transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {/* CHARACTER PANEL */}
      <div
        style={{
          flex: "1 1 340px",
          maxWidth: "500px",
          minHeight: "400px",
          background: `linear-gradient(160deg, ${char.bg[0]}, ${char.bg[1]}, ${char.bg[2]})`,
          border: `2px solid ${char.color}44`,
          borderRadius: "4px",
          clipPath: crackPatterns[char.panelStyle],
          position: "relative",
          overflow: "hidden",
          transform: `rotate(${rotation}deg)`,
          boxShadow: `0 0 40px ${char.glow}44, 0 0 80px ${char.glow}22, 0 20px 60px rgba(0,0,0,0.8)`,
          padding: "40px 30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Scan lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* Diagonal speed lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `repeating-linear-gradient(${isEven ? 135 : 45}deg, transparent, transparent 8px, ${char.color}08 8px, ${char.color}08 9px)`,
            pointerEvents: "none",
          }}
        />

        {/* Glowing orb portrait */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: `radial-gradient(circle at 30% 30%, ${char.color}cc, ${char.glow}88, ${char.bg[1]})`,
            boxShadow: `0 0 40px ${char.glow}aa, 0 0 80px ${char.glow}44, 0 0 120px ${char.glow}22`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            position: "relative",
            zIndex: 3,
          }}
        >
          <span style={{ fontSize: "48px", fontWeight: 900, color: "white", textShadow: `0 0 20px ${char.color}` }}>
            {char.name[0]}
          </span>
          {/* Cracked ring */}
          <div
            style={{
              position: "absolute",
              inset: "-6px",
              borderRadius: "50%",
              border: `2px dashed ${char.color}66`,
              animation: "spinSlow 8s linear infinite",
            }}
          />
        </div>

        <h3
          style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 900,
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            color: char.color,
            textShadow: `0 0 20px ${char.glow}, 0 0 40px ${char.glow}66, 3px 3px 0 #000`,
            letterSpacing: "0.15em",
            textAlign: "center",
            position: "relative",
            zIndex: 3,
            marginBottom: "6px",
          }}
        >
          {char.name}
        </h3>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: char.color,
            opacity: 0.8,
            textAlign: "center",
            zIndex: 3,
            position: "relative",
            marginBottom: "12px",
          }}
        >
          {char.role}
        </p>
        <p
          style={{
            fontStyle: "italic",
            color: "#ccc",
            fontSize: "13px",
            textAlign: "center",
            zIndex: 3,
            position: "relative",
            lineHeight: 1.6,
          }}
        >
          {char.quote}
        </p>
      </div>

      {/* TEXT / BIO SIDE */}
      <div
        style={{
          flex: "1 1 340px",
          maxWidth: "500px",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.3em",
            color: char.color,
            marginBottom: "10px",
            textShadow: `0 0 10px ${char.color}`,
          }}
        >
          ✦ {char.alias.toUpperCase()} ✦
        </p>
        <p
          style={{
            fontSize: "clamp(14px, 1.8vw, 17px)",
            color: "#ccc",
            lineHeight: 1.9,
            marginBottom: "24px",
          }}
        >
          {char.description}
        </p>

        {/* Powers */}
        <div>
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "#777",
              marginBottom: "12px",
            }}
          >
            PODERES
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {char.powers.map((pw, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "8px 14px",
                  background: `${char.color}0a`,
                  border: `1px solid ${char.color}33`,
                  borderRadius: "4px",
                  borderLeft: `3px solid ${char.color}`,
                }}
              >
                <span style={{ color: char.color, fontSize: "16px" }}>⚡</span>
                <span style={{ color: "#ddd", fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em" }}>
                  {pw}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMIC PAGE
   ───────────────────────────────────────────── */
export default function ComicPage() {
  const [visiblePanels, setVisiblePanels] = useState(new Set());
  const [introDone, setIntroDone] = useState(false);
  const panelRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setIntroDone(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setVisiblePanels((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.15 }
    );

    panelRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [introDone]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "white",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* ─── GLOBAL ANIMATIONS ─── */}
      <style>{`
        @keyframes chaosFloatA {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.6; }
          25% { transform: translateY(-30px) translateX(20px) scale(1.5); opacity: 1; }
          50% { transform: translateY(-60px) translateX(-15px) scale(0.8); opacity: 0.3; }
          75% { transform: translateY(-20px) translateX(25px) scale(1.2); opacity: 0.8; }
        }
        @keyframes chaosFloatB {
          0%, 100% { transform: translateY(0) translateX(0) rotate(45deg); opacity: 0.4; }
          33% { transform: translateY(-40px) translateX(-20px) rotate(135deg); opacity: 0.9; }
          66% { transform: translateY(-80px) translateX(30px) rotate(225deg); opacity: 0.2; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes vhsFlicker {
          0% { opacity: 0.97; }
          5% { opacity: 0.9; }
          10% { opacity: 1; }
          15% { opacity: 0.85; }
          20% { opacity: 0.98; }
          50% { opacity: 1; }
          80% { opacity: 0.95; }
          85% { opacity: 0.88; }
          90% { opacity: 1; }
          100% { opacity: 0.97; }
        }
        @keyframes scanDown {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes introFlash {
          0% { opacity: 0; }
          10% { opacity: 1; }
          20% { opacity: 0; }
          30% { opacity: 0.8; }
          50% { opacity: 0; }
          55% { opacity: 1; }
          100% { opacity: 1; }
        }
        @keyframes shakeX {
          0%, 100% { transform: translateX(0); }
          10% { transform: translateX(-8px); }
          20% { transform: translateX(8px); }
          30% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          50% { transform: translateX(-4px); }
          60% { transform: translateX(4px); }
          70% { transform: translateX(-2px); }
          80% { transform: translateX(2px); }
        }
        @keyframes rippleOut {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(3); opacity: 0; }
        }
        @keyframes crackSpread {
          0% { clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%); }
          100% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); }
        }
        @keyframes textReveal {
          0% { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
        @keyframes emergencyPulse {
          0%, 100% { box-shadow: inset 0 0 60px rgba(255,0,0,0.1); }
          50% { box-shadow: inset 0 0 120px rgba(255,0,0,0.25); }
        }
        @keyframes driftSmoke {
          0% { transform: translateX(-5%) scaleX(1); opacity: 0.3; }
          50% { transform: translateX(5%) scaleX(1.1); opacity: 0.15; }
          100% { transform: translateX(-5%) scaleX(1); opacity: 0.3; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <ChaosParticles />

      {/* ─── NAV BAR ─── */}
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
          background: "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, transparent 100%)",
          backdropFilter: "blur(8px)",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M14 2L16.6 9.9H25L18.7 14.6L21.3 22.5L14 17.8L6.7 22.5L9.3 14.6L3 9.9H11.4Z"
              fill="#ff0040"
              style={{ filter: "drop-shadow(0 0 8px #ff0040)" }}
            />
          </svg>
          <span
            style={{
              fontWeight: 800,
              letterSpacing: "0.15em",
              fontSize: "14px",
              color: "#ff0040",
              textShadow: "0 0 15px #ff004066",
            }}
          >
            GUARDIANAS · COMIC
          </span>
        </a>
        <a
          href="/"
          style={{
            color: "#aaa",
            textDecoration: "none",
            fontSize: "12px",
            letterSpacing: "0.12em",
            transition: "color 0.2s",
            border: "1px solid #ffffff22",
            padding: "8px 20px",
            borderRadius: "4px",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#ff0040";
            e.target.style.borderColor = "#ff004066";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#aaa";
            e.target.style.borderColor = "#ffffff22";
          }}
        >
          ← VOLVER
        </a>
      </nav>

      {/* ─── INTRO SEQUENCE ─── */}
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
          overflow: "hidden",
          animation: "emergencyPulse 3s ease-in-out infinite",
        }}
      >
        {/* Chaotic background layers */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(255,0,64,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(199,125,255,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(80,200,120,0.08) 0%, transparent 40%)",
            pointerEvents: "none",
          }}
        />

        {/* VHS scan line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
            animation: "scanDown 4s linear infinite",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />

        {/* Smoke / fog layer */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "-10%",
            right: "-10%",
            height: "40%",
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(20,0,30,0.4) 50%, transparent 100%)",
            animation: "driftSmoke 8s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* Lightning decorations */}
        <Lightning style={{ width: "60px", top: "5%", left: "15%", opacity: 0.1 }} />
        <Lightning style={{ width: "50px", top: "10%", right: "20%", opacity: 0.08, transform: "scaleX(-1)" }} />
        <Lightning style={{ width: "40px", bottom: "20%", left: "10%", opacity: 0.06, transform: "rotate(15deg)" }} />

        {/* Main content */}
        <div
          style={{
            animation: introDone ? "none" : "shakeX 0.8s ease-in-out 1.5s 1",
            position: "relative",
            zIndex: 5,
          }}
        >
          {/* Warning text */}
          <div
            style={{
              animation: "introFlash 2.5s ease-out forwards",
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.5em",
                color: "#ff0040",
                fontWeight: 700,
                textShadow: "0 0 20px #ff0040",
                animation: "vhsFlicker 2s infinite",
              }}
            >
              ⚠ TRANSMISIÓN DE EMERGENCIA ⚠
            </p>
          </div>

          {/* Title */}
          <div style={{ marginBottom: "24px" }}>
            <GlitchText text="LAS" size="clamp(28px, 5vw, 48px)" color="#ffffff" />
            <br />
            <GlitchText text="GUARDIANAS" size="clamp(48px, 9vw, 110px)" color="#ff0040" delay={0.3} />
          </div>

          {/* Subtitle */}
          <div
            style={{
              animation: "textReveal 1.5s ease-out 1.8s both",
            }}
          >
            <p
              style={{
                fontSize: "clamp(12px, 2vw, 18px)",
                letterSpacing: "0.4em",
                color: "#c77dff",
                marginBottom: "30px",
                fontWeight: 300,
                textShadow: "0 0 15px #c77dff88",
              }}
            >
              EL DESTINO SE ROMPE · LA MAGIA SE DESBORDA
            </p>
          </div>

          {/* Apocalyptic description */}
          <div
            style={{
              animation: "fadeSlideUp 1s ease-out 2.2s both",
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                fontSize: "clamp(14px, 1.5vw, 17px)",
                color: "#999",
                lineHeight: 1.9,
                marginBottom: "40px",
              }}
            >
              El tejido de la realidad se desgarra. Las estrellas agonizan una por una.
              Cuatro guerreras son todo lo que queda entre el cosmos y la aniquilación total.
              Esta es su historia. Este es el final... o el comienzo.
            </p>
          </div>

          {/* Character color dots preview */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              animation: "fadeSlideUp 1s ease-out 2.5s both",
            }}
          >
            {cast.map((c) => (
              <div
                key={c.id}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: c.color,
                  boxShadow: `0 0 12px ${c.color}, 0 0 24px ${c.color}66`,
                  animation: `chaosFloatA ${3 + c.id}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Scroll down */}
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
            animation: "fadeSlideUp 1s ease-out 3s both",
          }}
        >
          <span style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#ff0040" }}>
            DESCENDER AL CAOS
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(180deg, #ff0040, transparent)",
            }}
          />
        </div>
      </section>

      {/* ─── TRANSITION: REALITY BREAKING ─── */}
      <section
        style={{
          position: "relative",
          zIndex: 2,
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "40px",
            background: "linear-gradient(135deg, rgba(255,0,64,0.06), rgba(199,125,255,0.04), rgba(0,0,0,0.5))",
            border: "1px solid rgba(255,0,64,0.15)",
            borderRadius: "4px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Crack overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(45deg, transparent 40%, rgba(255,0,64,0.05) 50%, transparent 60%), linear-gradient(-45deg, transparent 40%, rgba(199,125,255,0.05) 50%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#ff0040", marginBottom: "16px" }}>
            ARCHIVO CLASIFICADO · NIVEL OMEGA
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 40px)",
              fontWeight: 900,
              fontFamily: "'Impact', 'Arial Black', sans-serif",
              color: "white",
              marginBottom: "16px",
              letterSpacing: "0.06em",
            }}
          >
            EL ELENCO
          </h2>
          <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto" }}>
            Cuatro almas marcadas por el caos. Cada una porta un fragmento del poder que
            mantiene el universo unido. Si caen... todo cae con ellas.
          </p>
        </div>
      </section>

      {/* ─── CHARACTER PANELS (SCROLL REVEAL) ─── */}
      <section style={{ position: "relative", zIndex: 2, padding: "20px 0 80px" }}>
        {/* Background chaos lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,0,64,0.02) 50px, rgba(255,0,64,0.02) 51px)",
            pointerEvents: "none",
          }}
        />

        {cast.map((char, i) => (
          <div
            key={char.id}
            ref={(el) => (panelRefs.current[i] = el)}
            data-index={i}
            style={{ marginBottom: "60px" }}
          >
            <ComicPanel char={char} index={i} isVisible={visiblePanels.has(i)} />
          </div>
        ))}
      </section>

      {/* ─── FINAL PANEL: THE TEAM ─── */}
      <section
        style={{
          position: "relative",
          zIndex: 2,
          padding: "80px 20px 60px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "60px 40px",
            background:
              "linear-gradient(135deg, rgba(255,0,64,0.08), rgba(199,125,255,0.06), rgba(80,200,120,0.04))",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "4px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Pulsing border effect */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "4px",
              animation: "emergencyPulse 4s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />

          <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#ff0040", marginBottom: "20px" }}>
            ✦ JUNTAS SON IMPARABLES ✦
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 900,
              fontFamily: "'Impact', 'Arial Black', sans-serif",
              background: "linear-gradient(135deg, #ff69b4, #ff2222, #c77dff, #50c878)",
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "24px",
              letterSpacing: "0.06em",
            }}
          >
            EL CAOS ES SU PODER
          </h2>

          {/* Team lineup */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "clamp(16px, 3vw, 40px)",
              marginBottom: "30px",
              flexWrap: "wrap",
            }}
          >
            {cast.map((c) => (
              <div key={c.id} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "clamp(50px, 8vw, 80px)",
                    height: "clamp(50px, 8vw, 80px)",
                    borderRadius: "50%",
                    background: `radial-gradient(circle at 30% 30%, ${c.color}cc, ${c.glow}66, #000)`,
                    boxShadow: `0 0 30px ${c.glow}88, 0 0 60px ${c.glow}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 10px",
                  }}
                >
                  <span style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 900, color: "white" }}>
                    {c.name[0]}
                  </span>
                </div>
                <p style={{ fontSize: "11px", fontWeight: 800, color: c.color, letterSpacing: "0.1em" }}>
                  {c.name}
                </p>
                <p style={{ fontSize: "9px", color: "#666", letterSpacing: "0.05em", marginTop: "2px" }}>
                  {c.alias}
                </p>
              </div>
            ))}
          </div>

          <p style={{ color: "#777", fontSize: "14px", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto 30px" }}>
            Cuando la realidad se fractura y las estrellas gritan, ellas responden.
            No por obligación. Por destino.
          </p>

          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "14px 36px",
              borderRadius: "4px",
              background: "linear-gradient(135deg, #ff0040, #cc0030)",
              border: "none",
              color: "white",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              cursor: "pointer",
              textDecoration: "none",
              boxShadow: "0 0 30px #ff004066, 0 4px 20px rgba(0,0,0,0.5)",
              transition: "all 0.3s ease",
            }}
          >
            VOLVER AL INICIO
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        style={{
          position: "relative",
          zIndex: 2,
          borderTop: "1px solid rgba(255,0,64,0.15)",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            color: "#444",
          }}
        >
          GUARDIANAS ESTELARES · COMIC · © 2026
        </p>
      </footer>
    </div>
  );
}
