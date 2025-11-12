import { motion } from 'framer-motion'

const petals = Array.from({ length: 16 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: 18 + Math.random() * 22,
  delay: Math.random() * 4,
  duration: 8 + Math.random() * 8,
  rotate: (Math.random() - 0.5) * 40
}))

export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-rose-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-pink-200/30 blur-3xl rounded-full" />

      {petals.map(p => (
        <motion.span
          key={p.id}
          initial={{ y: -80, rotate: p.rotate }}
          animate={{ y: '110vh', rotate: p.rotate + 180 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: p.duration,
            delay: p.delay
          }}
          className="absolute"
          style={{
            left: `${p.left}vw`,
            width: p.size,
            height: p.size * 1.3
          }}
        >
          <span
            className="block w-full h-full rounded-[60%_40%_60%_40%/60%_40%_60%_40%]"
            style={{
              background:
                'radial-gradient(100% 100% at 30% 30%, #ffd9e1 0%, #f7a1b6 50%, #e84a67 100%)',
              boxShadow:
                '0 6px 18px rgba(232,74,103,.25), inset 0 0 20px rgba(255,255,255,.35)'
            }}
          />
        </motion.span>
      ))}
    </div>
  )
}
