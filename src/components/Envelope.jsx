import { motion, AnimatePresence } from "framer-motion";

export default function Envelope({ children, isOpen, onOpen, onClose }) {
  return (
    <div className="envelope-section relative flex flex-col items-center">

      {!isOpen && (
        <button onClick={onOpen} className="primary-button mb-4">
          Abrir carta 💌
        </button>
      )}

      <motion.div
        className={`relative w-[280px] sm:w-[320px] h-[190px] sm:h-[220px] ${
          !isOpen ? "envelope-idle" : ""
        }`}
        animate={isOpen ? { scale: 0.96, y: 26 } : { scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Glow detrás del sobre */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[85%] h-[70%] rounded-full bg-pink-300/20 blur-3xl"></div>
        </div>

        <motion.svg
          viewBox="0 0 350 260"
          className="absolute top-0 left-0 w-full h-full drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)]"
        >
          <defs>
            <linearGradient id="envelopeBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fce7ef" />
              <stop offset="55%" stopColor="#f8d5dc" />
              <stop offset="100%" stopColor="#efb7c5" />
            </linearGradient>

            <linearGradient id="envelopeFlap" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff4f7" />
              <stop offset="100%" stopColor="#f5cfd8" />
            </linearGradient>

            <linearGradient id="envelopeShine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.45)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>

            <filter id="softGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Cuerpo del sobre */}
          <rect
            x="25"
            y="80"
            width="300"
            height="160"
            rx="24"
            fill="url(#envelopeBody)"
            stroke="#d9a5ae"
            strokeWidth="4"
          />

          {/* brillo interno */}
          <path
            d="M45 98 Q175 72 305 98"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* pliegues decorativos */}
          <path
            d="M25 80 L175 172 L325 80"
            fill="none"
            stroke="rgba(190,120,140,0.28)"
            strokeWidth="3"
          />
          <path
            d="M25 240 L130 150"
            fill="none"
            stroke="rgba(190,120,140,0.16)"
            strokeWidth="2.5"
          />
          <path
            d="M325 240 L220 150"
            fill="none"
            stroke="rgba(190,120,140,0.16)"
            strokeWidth="2.5"
          />

          {/* corazón central */}
          <g filter="url(#softGlow)">
            <path
              d="M175 145
                 C168 132, 148 132, 148 148
                 C148 164, 166 172, 175 182
                 C184 172, 202 164, 202 148
                 C202 132, 182 132, 175 145 Z"
              fill="#f472b6"
              opacity="0.95"
            />
          </g>

          {/* Solapa */}
          <motion.path
            d="
              M25 80
              L175 20
              L325 80
              Q175 130 25 80
            "
            fill="url(#envelopeFlap)"
            stroke="#d9a5ae"
            strokeWidth="4"
            style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
            variants={{
              closed: { rotateX: 0 },
              open: { rotateX: -165 },
            }}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          />

          {/* línea brillante sutil en la solapa */}
          <path
            d="M52 75 Q175 38 298 75"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="card"
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: -150, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[88vw] max-w-[420px] z-20"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 bg-white/95 rounded-full shadow-lg p-3 hover:bg-gray-100 transition z-30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M6 18L18 6"
                />
              </svg>
            </button>

            <div
              className="
                bg-white/95 backdrop-blur-sm
                p-5 sm:p-8
                rounded-[28px]
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                border border-pink-100
                text-gray-800 love-card-wrapper
                max-h-[58vh] sm:max-h-[460px]
                overflow-y-auto scroll-smooth soft-scroll
                leading-8 text-[1rem] sm:text-[1.08rem]
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