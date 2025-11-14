import { useState } from "react";
import GalacticBouquet from "./components/Bouquet";
import Envelope from "./components/Envelope";
import "./index.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-shell">

      {/* HEADER SUPER ROMÁNTICO */}
      <div
        className="
          relative mx-auto mt-8 px-6 py-4 
          max-w-[90%] md:max-w-[60%] 
          text-center select-none

          /* Animaciones */
          animate-soft-float animate-soft-glow animate-soft-beat
        "
      >
        {/* Texto con animación de escritura */}
        <h1
          className="
            romantic-text 
            text-2xl md:text-3xl 
            font-bold 
            text-pink-200 
            leading-snug
            whitespace-pre-wrap
          "
        >
          Para ti, Lariza. Porque mi corazón siempre vuelve a ti. ❤️
        </h1>

        {/* Subrayado animado */}
        <div className="romantic-underline mx-auto mt-2"></div>

        {/* Nota adicional */}
        <p className="text-pink-300 text-sm mt-3 opacity-90 italic">
          Siempre tuyo. Siempre contigo. 💗
        </p>

        {/* Brillitos */}
        <div className="sparkle sparkle-1"></div>
        <div className="sparkle sparkle-2"></div>
        <div className="sparkle sparkle-3"></div>
      </div>

      <p className="app-subtitle">
      </p>

      <section className="bouquet-card">
        <div className="bouquet-inner animate-float flex justify-center">
          <GalacticBouquet />
        </div>
      </section>

      <Envelope
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        <>
          <p>
            Para ti, con todo mi cariño. Quise regalarte un jardín de estrellas
            convertido en flores — cada pétalo es un “gracias” y cada brillo,
            un “te quiero”. 🌸
          </p>
          <p className="mt-4">
            Que este ramo acompañe tus días y te recuerde lo esencial que eres.
            Gracias por ser tú. 💖
          </p>
        </>
      </Envelope>

    </div>
  );
}
