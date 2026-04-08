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
        className={`relative w-[280px] sm:w-[320px] h-[190px] sm:h-[220px] drop-shadow-xl ${
          !isOpen ? "envelope-idle" : ""
        }`}
        animate={isOpen ? { scale: 0.95, y: 28 } : { scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.svg
          viewBox="0 0 350 260"
          className="absolute top-0 left-0 w-full h-full"
        >
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