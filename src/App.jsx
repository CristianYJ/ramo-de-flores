import { useState, useRef } from "react";
import GalacticBouquet from "./components/Bouquet";
import Envelope from "./components/Envelope";
import audioFile from "./assets/mensaje.mp3";
import "./index.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(audioFile));

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }

    audio.onended = () => setIsPlaying(false);
  };

  return (
    <div className="app-shell">

      {/* ====== HEADER ====== */}
      <div
        className="
          romantic-header relative mx-auto mt-8 px-6 py-4 text-center select-none
        "
      >
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
          Para mi preciosa Ale
          <br />
          Hecho con todo mi corazón
        </h1>

        <div className="romantic-underline mx-auto mt-3"></div>

        <p className="text-pink-300 text-sm mt-3 opacity-90 italic">
          Para Valeria Alexandra, la niña más linda
        </p>

        {/* Brillitos */}
        <div className="sparkle sparkle-1"></div>
        <div className="sparkle sparkle-2"></div>
        <div className="sparkle sparkle-3"></div>
      </div>

      {/* ====== BOTÓN DE AUDIO ====== */}
      <button onClick={toggleAudio} className="voice-button my-2">
        {isPlaying ? "⏸️ Pausar mensaje" : "🎧 Escuchar mi mensaje de voz 💞"}
      </button>

      {/* ====== RAMO ====== */}
      <section className="bouquet-card">
        <div className="bouquet-inner animate-float flex justify-center">
          <GalacticBouquet />
        </div>
      </section>

      {/* ====== SOBRE Y CARTA ====== */}
      <Envelope
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        <>
          <p>
            Ale… a veces me pongo a pensar en vos y me doy cuenta de lo mucho que me gustás.
            No es algo simple, es de esas cosas que se sienten bonito de verdad,
            que te sacan una sonrisa sin darte cuenta.
          </p>

          <p className="mt-4">
            Valeria Alexandra, sos una niña increíblemente especial.
            Tenés una forma de ser que transmite paz, ternura
            y algo que no cualquiera tiene.
            Me encanta cómo sos, cómo hablás
            y cómo lográs hacerme sentir incluso sin estar cerca.
          </p>

          <p className="mt-4">
            Este detalle lo hice pensando en vos,
            como una forma de darte algo mío,
            algo que aunque no sea físico como quisiera,
            lleva todo mi cariño y mi intención.
          </p>

          <p className="mt-4">
            Me gustás muchísimo, Ale.
            Me gustás de esa forma sincera,
            de la que nace sin forzar nada,
            de la que simplemente se siente correcta.
          </p>

          <p className="mt-4">
            Y quiero que siempre tengás una forma de encontrarme,
            por eso te dejo mi número:
            <br />
            <span className="font-semibold text-pink-300">
              [TU NÚMERO AQUÍ]
            </span>
          </p>

          <p className="mt-4">
            Te quiero un montón, Ale.
            De verdad.
            Y todo esto es solo una pequeña forma
            de demostrarte lo importante que sos para mí.
            ❤️
          </p>
        </>
      </Envelope>

    </div>
  );
}