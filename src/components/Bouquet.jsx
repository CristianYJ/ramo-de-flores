import { motion } from 'framer-motion'

function Rose({ x = 0, y = 0, scale = 1, hue = 0 }) {
  const base = `hsl(${350 + hue} 70% 56%)`
  const light = `hsl(${350 + hue} 100% 78%)`
  const dark = `hsl(${350 + hue} 70% 42%)`

  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      <defs>
        <radialGradient id={`rg-${hue}`} cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor={light} />
          <stop offset="60%" stopColor={base} />
          <stop offset="100%" stopColor={dark} />
        </radialGradient>
      </defs>
      {[...Array(7)].map((_, i) => {
        const r = 18 + i * 6
        return (
          <ellipse
            key={i}
            cx="0"
            cy="0"
            rx={r}
            ry={r * 0.72}
            fill={`url(#rg-${hue})`}
            transform={`rotate(${i * 18})`}
            opacity={0.95 - i * 0.08}
          />
        )
      })}
      <circle cx="0" cy="0" r="10" fill={dark} />
      <circle cx="0" cy="0" r="6" fill={light} />
    </g>
  )
}

export default function Bouquet() {
  return (
    <div className="relative">
      <svg viewBox="-140 -160 280 360" className="w-full drop-shadow-2xl">
        <defs>
          <linearGradient id="stemGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3f6b52" />
            <stop offset="100%" stopColor="#2c4c3a" />
          </linearGradient>
          <linearGradient id="paperGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f7f3ee" />
            <stop offset="100%" stopColor="#e9e2d8" />
          </linearGradient>
        </defs>

        {/* Tallos */}
        {[ -40, -20, 0, 20, 40 ].map((x,i) => (
          <motion.path
            key={i}
            d={`M ${x} -40 C ${x-10} 20, ${x+10} 100, 0 160`}
            stroke="url(#stemGrad)"
            strokeWidth="6"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 0.2 * i }}
            strokeLinecap="round"
            opacity="0.9"
          />
        ))}

        {/* Rosas */}
        <motion.g
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 70, damping: 12, delay: .2 }}
        >
          <Rose x={-50} y={-40} scale={1.05} hue={-10} />
          <Rose x={0} y={-60} scale={1.25} hue={0} />
          <Rose x={50} y={-35} scale={1.0} hue={12} />
        </motion.g>

        {/* Papel */}
        <motion.path
          d="M -110 80 C -40 10, 40 10, 110 80 L 80 150 C 40 170, -40 170, -80 150 Z"
          fill="url(#paperGrad)"
          stroke="#d9d0c5"
          strokeWidth="2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .6 }}
        />
      </svg>
    </div>
  )
}
