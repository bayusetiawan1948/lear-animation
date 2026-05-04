function MagneticCard() {
  return (
    <div className="group w-64 h-48 bg-blue-500 rounded-lg transition-transform duration-400 hover:scale-110 hover:rotate-6 cursor-pointer ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] flex flex-col items-center justify-center">
      <p
        className="text-white font-medium tracking-wide
        transition-colors duration-400
        ease-[cubic-bezier(0.34,1.56,0.64,1)]
        group-hover:text-yellow-300"
      >
        Magnetic Card
      </p>
      {/* Elemen kedua dengan delay lebih panjang = stagger effect */}
      <span
        className="
        text-white/40 text-xs
        transition duration-400 delay-250
        opacity-0 translate-y-2
        group-hover:opacity-100 group-hover:translate-y-0
      "
      >
        hover me
      </span>
    </div>
  );
}

export default MagneticCard;
