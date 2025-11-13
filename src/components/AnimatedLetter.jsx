export default function AnimatedLetter({ onClose, children }) {
  return (
    <div className="mt-8 w-full flex justify-center px-4">
      <div className="love-card-wrapper max-w-[420px] w-full">
        {/* Encabezado */}
        <div className="flex justify-between items-center mb-2 px-1 text-pink-100">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            Carta 💌
          </h2>
          <button
            onClick={onClose}
            className="text-sm text-pink-300 hover:text-pink-200 transition"
          >
            Cerrar
          </button>
        </div>

        {/* Sobre y carta */}
        <div className="love-envelope-container">
          {/* Sobre */}
          <div className="love-envelope">
            <div className="love-envelope-body" />
            <div className="love-envelope-flap" />
          </div>

          {/* Carta que sale */}
          <div className="love-letter-sheet">
            <div className="bg-white/95 rounded-2xl p-4 shadow-xl border border-pink-100 text-sm leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
