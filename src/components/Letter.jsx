export default function Letter({ onClose }) {
  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-2 px-1">
        <h2 className="text-xl font-bold flex items-center gap-2">
          Carta 💌
        </h2>

        <button
          onClick={onClose}
          className="text-pink-300 hover:text-pink-400"
        >
          Cerrar
        </button>
      </div>

      <div className="bg-white/95 text-black p-5 rounded-2xl shadow-lg leading-relaxed backdrop-blur-md border border-pink-200">
        <p>
          Para ti, con todo mi cariño. Quise regalarte un jardín de estrellas
          convertido en flores — cada pétalo es un “gracias” y cada brillo,
          un “te quiero”. 🌸
        </p>

        <br />

        <p>
          Que este ramo acompañe tus días y te recuerde lo esencial que eres.
          Gracias por ser tú. 💖
        </p>
      </div>
    </div>
  );
}
