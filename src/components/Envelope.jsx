import { motion, AnimatePresence } from "framer-motion";

export default function Envelope({ children, isOpen, onOpen, onClose }) {
  return (
    <div className="envelope-section">

      {/* Botón para abrir carta */}
      {!isOpen && (
        <button onClick={onOpen} className="primary-button mb-4">
          Abrir carta 💌
        </button>
      )}

      {/* Sobre */}
      <motion.div
        className={`relative w-[290px] h-[200px] drop-shadow-xl ${
          !isOpen ? "envelope-idle" : ""
        }`}
        animate={isOpen ? { scale: 0.95, y: 25 } : { scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.svg
          viewBox="0 0 350 260"
          className="absolute top-0 left-0 w-full h-full"
        >
          {/* Cuerpo */}
          <rect
            x="25"
            y="80"
            width="300"
            height="160"
            rx="22"
            fill="#f8d5dc"
            stroke="#d9a5ae"
            strokeWidth="4"
          />

          {/* Solapa */}
          <motion.path
            d="
              M25 80 
              L175 20 
              L325 80 
              Q175 130 25 80
            "
            fill="#fce9ec"
            stroke="#d9a5ae"
            strokeWidth="4"
            variants={{
              closed: { rotateX: 0, originY: 1 },
              open: { rotateX: -165, originY: 1 },
            }}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>

      {/* Carta */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="card"
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: -160, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] z-20"
          >
            <button
              onClick={onClose}
              className="absolute -top-5 -right-5 bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6"/>
              </svg>
            </button>

            {/* === CARTA CON SCROLL === */}
            <div
              className="
                bg-white p-6 rounded-2xl shadow-2xl border border-gray-200 
                text-gray-800 love-card-wrapper
                max-h-[340px] overflow-y-auto scroll-smooth soft-scroll
              "
            >
              {children}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
