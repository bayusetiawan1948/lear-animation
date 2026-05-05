// ─── React: Tilt card interaktif (mouse tracking) ───
// Ini contoh real-world: transform berbasis pointer position

import { useRef } from 'react';

export function TiltCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    // Normalisasi posisi mouse: -1 sampai 1
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    // Terapkan rotasi 3D — max 12deg
    card.style.transform = `
      perspective(800px)
      rotateY(${x * 12}deg)
      rotateX(${-y * 12}deg)
      scale(1.02)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    // Reset ke posisi awal — transition di CSS yang handle smoothing-nya
    card.style.transform =
      'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)';
  };

  return (
    <div
      className="w-80 h-52 cursor-pointer flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="w-64 h-40 bg-white rounded-xl shadow-xl cursor-pointer"
        style={{
          transition: 'transform 0.1s ease', // Saat bergerak: fast
          // Override di mouseLeave butuh transition lebih lambat →
          // solusi proper: gunakan CSS class toggle atau GSAP (Phase 3)
        }}
      >
        <p className="p-6 font-medium">Hover me</p>
      </div>
    </div>
  );
}
