import { useState } from "react";
import Bouquet from "./Bouquet";
import Letter from "./Letter";

export default function Scene() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center pt-10">

      {/* Ramo animado */}
      <div className="animate-float">
        <Bouquet />
      </div>

      {/* Botón abrir carta */}
      <button
        onClick={() => setOpen(true)}
        className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition"
      >
        Abrir carta 💌
      </button>

      {/* Carta */}
      {open && (
        <Letter onClose={() => setOpen(false)} />
      )}
    </div>
  );
}
