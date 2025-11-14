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
          Para ti, Lariza.
          <br />
          Porque a pesar de todo siempre te quiero mucho. ❤️
        </h1>

        <div className="romantic-underline mx-auto mt-3"></div>

        <p className="text-pink-300 text-sm mt-3 opacity-90 italic">
          Como te quiero mi lindota. 💗
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
    Lariza… de tanto que hemos hablado, a veces siento que ya ni sé qué decirte.  
    Pero aun así, siempre vuelvo a querer decirte algo bonito, algo verdadero,  
    porque lo que siento por vos nunca deja de crecer.
  </p>

  <p className="mt-4">
    Esta carta no es más que mis propias palabras, tal como me nacen,  
    para decirte lo mucho que te quiero, lo mucho que te amo.  
    Si me pusiera a describir cada cosa que me gusta de vos,  
    no terminaría nunca.
  </p>

  <p className="mt-4">
    Amo tu voz, aunque la he escuchado pocas veces.  
    Amo la forma en que sos, lo que transmitís, lo que me hacés sentir.  
    Cada parte de vos tiene algo que me encanta.
  </p>

  <p className="mt-4">
    Este ramo es por todo lo que no puedo darte físicamente.  
    Es un pedacito de mi esfuerzo, de mi cariño,  
    para que tengas algo que venga directamente de mí hacia vos.
  </p>

  <p className="mt-4">
    Lariza, te quiero un montón.  
    Y Cristian Leandro Rodríguez Vásquez siempre va a quererte un montón.  
    Te amo muchísimo, mi niña linda. ❤️
  </p>
        </>
      </Envelope>

    </div>
  );
}
