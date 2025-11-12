import { useState } from 'react'
import Background from './components/Background.jsx'
import Bouquet from './components/Bouquet.jsx'
import Letter from './components/Letter.jsx'

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-rose-50 via-pink-50 to-white">
      <Background />
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10">
        <h1 className="font-display text-5xl md:text-6xl text-rose-500 drop-shadow-sm mb-6">
          Para ti 💖
        </h1>

        <p className="text-center text-slate-600 max-w-xl mb-8">
          Un pequeño detalle hecho con mucho cariño.  
          Toca la carta para abrirla y leer mi mensaje.
        </p>

        <div className="w-full max-w-2xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Letter
              isOpen={open}
              onToggle={() => setOpen(v => !v)}
              to="Naye"
              message={`Gracias por estar, por tu luz y por tu sonrisa.\n\nEste ramo es para recordarte lo especial que eres para mí.`}
              from="Con cariño, Lázaro"
            />
          </div>
          <div className="order-1 md:order-2">
            <Bouquet />
          </div>
        </div>

        <footer className="mt-10 text-xs text-slate-500">
          Hecho con React, Tailwind y Framer Motion 💐
        </footer>
      </section>
    </main>
  )
}
