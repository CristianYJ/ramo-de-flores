import { useState } from "react";
import GalacticBouquet from "./components/Bouquet"; // o Bouquet si así se llama tu componente
import AnimatedLetter from "./components/AnimatedLetter";
import "./index.css";

export default function App() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#0f172a] text-pink-100 pb-16">
      {/* Título */}
      <h1 className="text-3xl font-bold text-pink-100 mb-2 mt-6 bg-pink-600 px-8 py-3 rounded-2xl shadow-lg">
        A Special Bouquet ✨
      </h1>

      <p className="text-sm mb-6 text-pink-200">
        hecho con cariño — 100% interactivo y listo para móvil
      </p>

      {/* Tarjeta del ramo */}
      <div className="max-w-[420px] w-full bg-[#050b1b] rounded-3xl shadow-2xl border border-white/10 px-6 pt-6 pb-4">
        <div className="flex justify-center mb-4">
          <GalacticBouquet />
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowLetter(true)}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition flex items-center gap-2"
          >
            Abrir carta 💌
          </button>
        </div>
      </div>

      {/* Carta animada (sobre que se abre) */}
      {showLetter && (
        <AnimatedLetter onClose={() => setShowLetter(false)}>
          <p className="text-gray-800">
            Para ti, con todo mi cariño. Quise regalarte un jardín de estrellas
            convertido en flores — cada pétalo es un “gracias” y cada brillo,
            un “te quiero”. 🌸
          </p>

          <p className="mt-4 text-gray-800">
            Que este ramo acompañe tus días y te recuerde lo esencial que eres.
            Gracias por ser tú. 💖
          </p>
        </AnimatedLetter>
      )}
    </div>
  );
}
