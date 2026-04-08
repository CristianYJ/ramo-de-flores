import { useState } from "react";
import Bouquet from "./Bouquet";
import Letter from "./Letter";
import PetalRain from "./PetalRain";

export default function Scene() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-10 px-4">
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-[220px] h-[220px] bg-fuchsia-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute top-32 right-10 w-[180px] h-[180px] bg-purple-500/10 blur-[90px] rounded-full"></div>
      </div>

      {/* Lluvia de pétalos */}
      <PetalRain />

      {/* Texto decorativo */}
      <div className="relative z-10 text-center mb-6">
        <p className="text-pink-200/80 text-sm md:text-base italic tracking-wide">
          Un detalle hecho con cariño
        </p>
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Halo detrás del ramo */}
        <div className="absolute top-10 w-72 h-72 bg-pink-500/20 blur-[90px] rounded-full"></div>

        {/* Ramo animado */}
        <div className="relative animate-float">
          <Bouquet />
        </div>

        {/* Botón abrir carta */}
        <button
          onClick={() => setOpen(true)}
          className="
            mt-8 px-8 py-3
            bg-gradient-to-r from-pink-500 to-fuchsia-500
            text-white font-semibold
            rounded-full
            shadow-[0_0_30px_rgba(236,72,153,0.45)]
            hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.65)]
            transition duration-300
          "
        >
          Abrir carta 💌
        </button>
      </div>

      {/* Carta */}
      {open && <Letter onClose={() => setOpen(false)} />}
    </div>
  );
}