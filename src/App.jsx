import { useState } from "react";
import GalacticBouquet from "./components/Bouquet";
import Envelope from "./components/Envelope";
import "./index.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-shell">

      <h1 className="app-header-title">A Special Bouquet ✨</h1>

      <p className="app-subtitle">
        hecho con cariño — 100% interactivo y listo para móvil
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
