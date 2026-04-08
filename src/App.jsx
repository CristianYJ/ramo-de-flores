import { useState, useRef } from "react";
import GalacticBouquet from "./components/Bouquet";
import Envelope from "./components/Envelope";
import audioFile from "./assets/mensaje.mp3";
import gatoVideo from "./assets/GATO.mp4";
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
          Para Valeria Alexandra
          <br />
          Con mucho cariño
        </h1>

        <div className="romantic-underline mx-auto mt-3"></div>

        <p className="text-pink-300 text-sm mt-3 opacity-90 italic">
          Un pequeño detalle hecho de corazón
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
            Quería hacerte este pequeño detalle porque me parecés una persona muy linda
            y, en tan poco tiempo, has logrado transmitirme algo muy bonito.
          </p>

          <p className="mt-4">
            Hay personas que simplemente tienen una forma especial de estar,
            de hablar y de hacer sentir bien a alguien,
            y vos sos una de ellas.
          </p>

          <p className="mt-4">
            Me gusta mucho la manera en que sos,
            tu energía, tu forma de expresarte
            y lo natural que se siente hablar con vos.
          </p>

          <p className="mt-4">
            Esto lo hice con mucho cariño,
            como una forma sencilla pero sincera
            de demostrarte que disfruto conocerte
            y que me encanta compartir tiempo con vos,
            aunque sea a la distancia.
          </p>

          <p className="mt-4">
            No quería hacer algo exagerado,
            solo algo bonito,
            especial
            y que pudiera sacarte una sonrisa.
          </p>

          <p className="mt-4">
            Y para que siempre tengás una forma de encontrarme,
            te dejo mi número:
            <br />
            <span className="font-semibold text-pink-300">
              [TU NÚMERO AQUÍ]
            </span>
          </p>

          <p className="mt-4">
            Gracias por inspirar algo tan bonito.
            Espero de corazón que este detalle te guste.
            ❤️
          </p>

          <p className="mt-4 italic text-pink-200">
            Con cariño,
            <br />
            [TU APODO O NOMBRE]
          </p>
          <div className="mt-6 flex justify-center">
  <video
    src={gatoVideo}
    autoPlay
    loop
    muted
    playsInline
    className="w-40 max-w-full rounded-2xl shadow-lg"
  />
</div>

          
        </>
      </Envelope>

    </div>
  );
}