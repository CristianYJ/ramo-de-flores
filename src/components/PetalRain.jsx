import { useEffect, useState } from "react";
import petal from "../assets/petal.png";

export default function PetalRain() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPetals((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * 100,
          size: 18 + Math.random() * 25,
          duration: 6 + Math.random() * 6,
          rotation: Math.random() * 360,
        },
      ]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="petal-container">
      {petals.map((p) => (
        <img
          key={p.id}
          src={petal}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotation}deg)`
          }}
        />
      ))}
    </div>
  );
}
