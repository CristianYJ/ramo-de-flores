import { useState } from "react";
import Bouquet from "./components/Bouquet";
import Letter from "./components/Letter";
import PetalRain from "./components/PetalRain";

export default function App() {
  const [open, setOpen] = useState(false);
  const [rain, setRain] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a1129] text-white flex flex-col items-center p-4">

      {/* TÍTULO */}
      <div className="bg-pink-500 px-6 py-3 rounded-xl mt-4 shadow-lg shadow-pink-400/30">
        <h1 className="text-2xl font-bold text-white">A Special Bouquet ✨</h1>
      </div>

      <p className="mt-2 text-pink-200 text-sm">
        hecho con cariño — 100% interactivo y listo para móvil
      </p>

      {/* CONTENEDOR DEL RAMO */}
      <div className="mt-6 bg-[#0f172a] p-6 rounded-3xl shadow-2xl max-w-[420px] w-full border border-white/10 backdrop-blur-md">
        <div className="flex justify-center">
          <Bouquet />
        </div>

        {/* BOTÓN CARTA */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg"
          >
            Abrir carta ✉️
          </button>
        </div>
      </div>

      {/* CARTA ❤️ */}
      {open && (
        <div className="mt-6 max-w-[420px] w-full bg-[#0f172a] border border-white/10 p-4 rounded-2xl shadow-xl">
          <Letter onClose={() => setOpen(false)} />

          <div className="mt-4 flex justify-evenly">
            <button
              onClick={() => setRain(true)}
              className="bg-pink-500 px-4 py-2 rounded-lg text-white hover:bg-pink-600 shadow-md"
            >
              Lanzar pétalos 🌸
            </button>

            <button
              onClick={() => setOpen(true)}
              className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 shadow-md"
            >
              Abrir carta ✉️
            </button>
          </div>
        </div>
      )}

      {/* PÉTALOS */}
      {rain && <PetalRain />}
    </div>
  );
}
