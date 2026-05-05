import { useRef } from 'react';

function MagneticButton() {
  const compRef = useRef<HTMLButtonElement>(null);
  // const prefersReduced = useRef(
  //   window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  // );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const comp = compRef.current;
    if (!comp) return;

    comp.style.transition = 'transform 0.1s ease';

    const rect = comp.getBoundingClientRect();

    // Pendekatan baru: hitung offset dari center, lalu kalikan dengan faktor untuk efek magnet
    // Faktor 0.3 adalah untuk mengurangi intensitas gerakan
    // Center elemen relatif ke viewport
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.3;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.3;

    // my previous approach: direct translation based on normalized mouse position
    // const x = ((e.clientX - rect.left) / rect.width - 0.5) * 80;
    // const y = ((e.clientY - rect.top) / rect.height - 0.5) * 80;

    comp.style.transform = `
      translateX(${x}px)
      translateY(${y}px)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    const comp = compRef.current;
    if (!comp) return;

    comp.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'; // spring back effect
    comp.style.transform = `translateX(0) translateY(0) scale(1)`;
  };

  return (
    <div
      className="w-full h-screen cursor-pointer border-2 flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={compRef}
        className="w-64 h-40 bg-red-500 rounded-xl shadow-xl cursor-pointer"
        style={{
          transition: 'transform 0.1s ease',
        }}
      >
        Hover me
      </button>
    </div>
  );
}

export default MagneticButton;
