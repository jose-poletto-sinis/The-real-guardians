use client";
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
  }
]