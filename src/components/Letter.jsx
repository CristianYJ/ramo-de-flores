import { motion } from 'framer-motion'

export default function Letter({ isOpen, onToggle, to = 'Para ti', message = '', from = '' }) {
  return (
    <div className="relative">
      <motion.div
        className="cursor-pointer select-none"
        onClick={onToggle}
        initial={false}
        animate={{ scale: 1 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative w-full max-w-md mx-auto bg-paper rounded-2xl shadow-xl border border-neutral-200">
          <motion.div
            className="absolute left-0 right-0 top-0 origin-top rounded-t-2xl"
            style={{
              height: 160,
              background:
                'linear-gradient(180deg, #f3eee8 0%, #e9e2d8 100%)',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%, 0 0)'
            }}
            animate={{ rotateX: isOpen ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          />
          <div className="pt-24 pb-8 px-6">
            <motion.div
              className="bg-white rounded-xl shadow-md border border-neutral-100 p-5"
              animate={{ y: isOpen ? -10 : 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 12 }}
            >
              <h3 className="font-display text-3xl text-rose-500 mb-2">{to}</h3>
              <p className="whitespace-pre-line text-slate-700 leading-relaxed">{message}</p>
              <p className="mt-4 text-right text-slate-500">{from}</p>
            </motion.div>

            <div className="mt-4 text-center">
              <span className="text-xs text-slate-500">
                {isOpen ? 'Toca para cerrar 💌' : 'Toca para abrir 💌'}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
