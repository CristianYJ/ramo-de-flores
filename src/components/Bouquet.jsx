import bouquet from "../assets/bouquet.svg";

export default function Bouquet() {
  return (
    <div
      className="
        relative flex items-center justify-center
        w-[280px] md:w-[330px]
      "
    >
      {/* Glow romántico detrás del ramo */}
      <div
        className="
          absolute w-[90%] h-[90%]
          bg-pink-400/20 blur-[55px]
          rounded-full
        "
      ></div>

      {/* Luz violeta suave */}
      <div
        className="
          absolute w-[75%] h-[75%]
          bg-purple-500/20 blur-[40px]
          rounded-full
        "
      ></div>

      {/* Imagen principal sin fondo */}
      <img
        src={bouquet}
        alt="bouquet"
        className="
          w-full z-10
          animate-float
          drop-shadow-[0_6px_25px_rgba(255,180,221,0.25)]
          select-none
          pointer-events-none
        "
      />
    </div>
  );
}
