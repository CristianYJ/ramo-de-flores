import bouquet from "../assets/bouquet.svg";

export default function Bouquet() {
  return (
    <img
      src={bouquet}
      alt="bouquet"
      className="
        w-[280px] md:w-[330px]
        animate-float
        drop-shadow-[0_0_25px_rgba(171,134,255,0.25)]
        rounded-xl
      "
    />
  );
}
