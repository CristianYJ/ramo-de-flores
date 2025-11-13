import { useEffect, useState } from "react";

export default function PetalRain() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPetals((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          left: Math.random() * 100,
          size: 20 + Math.random() * 15,
          duration: 4 + Math.random() * 3,
          delay: Math.random() * 2,
        },
      ]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute text-pink-300 opacity-80 drop-shadow-lg animate-fall"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
}
