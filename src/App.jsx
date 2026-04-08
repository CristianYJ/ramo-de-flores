import { useState, useRef } from "react";
import GalacticBouquet from "./components/Bouquet";
import Envelope from "./components/Envelope";
import PetalRain from "./components/PetalRain";
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
    <div className="app-shell relative overflow-hidden">

      {/* ====== FONDO DECORATIVO ====== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-pink-500/10 blur-[130px]"></div>
        <div className="absolute top-[280px] left-[10%] w-[220px] h-[220px] rounded-full bg-fuchsia-500/10 blur-[100px]"></div>
        <div className="absolute top-[180px] right-[10%] w-[200px] h-[200px] rounded-full bg-purple-500/10 blur-[100px]"></div>
        <div className="absolute bottom-[120px] left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-pink-400/10 blur-[120px]"></div>
      </div>

      {/* ====== LLUVIA DE PÉTALOS ====== */}
      <PetalRain />

      {/* ====== HEADER ====== */}
      <div
        className="
          romantic-header relative z-10 mx-auto mt-8 px-6 py-4 text-center select-none
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
      <div className="relative z-10 flex justify-center">
        <button onClick={toggleAudio} className="voice-button my-2">
          {isPlaying ? "⏸️ Pausar mensaje" : "🎧 Escuchar mi mensaje de voz 💞"}
        </button>
      </div>

      {/* ====== RAMO ====== */}
      <section className="bouquet-card relative z-10">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-72 h-72 rounded-full bg-pink-500/20 blur-[90px]"></div>
        </div>

        <div className="bouquet-inner animate-float flex justify-center relative z-10">
          <GalacticBouquet />
        </div>
      </section>

      {/* ====== SOBRE Y CARTA ====== */}
      <div className="relative z-10">
        <Envelope
          isOpen={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
        >
          <>
            <p>
              Ale… quise hacerte este detalle porque en estos días me ha gustado mucho hablar con vos.
              Tenés una forma bien bonita de ser que se siente sincera, tranquila y especial.
            </p>

            <p className="mt-4">
              No quería hacer algo exagerado,
              solo algo lindo que pudiera sacarte una sonrisa
              y que de alguna manera te hiciera sentir lo bonito que es conocerte.
            </p>

            <p className="mt-4">
              Me gusta mucho la manera en que hablás,
              tu energía
              y lo natural que se siente todo cuando coincido con vos.
              Sos de esas personas que dejan una sensación bonita sin esfuerzo.
            </p>

            <p className="mt-4">
              Este detalle lo hice pensando en vos,
              con cariño,
              como una forma sencilla de expresarte que disfruto conocerte
              y que me parecés una niña muy especial.
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
              Espero de corazón que te guste este pequeño detalle.
              Está hecho con mucho cariño para vos.
              ❤️
            </p>
          </>
        </Envelope>
      </div>
    </div>
  );
}