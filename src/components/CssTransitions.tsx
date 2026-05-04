// AnimationDemo.tsx
// Demonstrasi transition vs animation + easing yang "premium"

export default function AnimationDemo() {
  return (
    <div className="flex flex-col gap-12 p-16 bg-zinc-950 min-h-screen">
      {/* Inline styles karena @keyframes tidak bisa di-inline — */}
      {/* di project nyata, taruh di global CSS atau CSS Module */}
      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1);   opacity: 0.6; }
          50%       { transform: scale(1.8); opacity: 1;   }
        }

        @keyframes slideIn {
          from { transform: translateX(-60px); opacity: 1; }
          to   { transform: translateX(0);     opacity: 1; }
        }

        /* Aksesibilitas — WAJIB di production */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms;
            transition-duration: 0.01ms;
          }
        }
      `}</style>
      {/* --- TRANSITION: bereaksi pada hover --- */}
      <div className="group">
        <p className="text-zinc-500 text-sm mb-3">transition — hover me</p>
        <div
          className="w-24 h-24 bg-indigo-500 rounded-xl cursor-pointer"
          style={{
            // property | duration | easing | delay
            transition: 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
            // cubic-bezier di atas = "back out" — ada slight overshoot
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = 'scale(1.15) rotate(8deg)')
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
        />
      </div>

      {/* --- ANIMATION: berjalan otomatis via @keyframes --- */}
      <div>
        <p className="text-zinc-500 text-sm mb-3">animation — auto-running</p>
        <div
          className="w-4 h-4 bg-emerald-400 rounded-full"
          style={{ animation: 'breathe 2s ease-in-out infinite' }}
        />
      </div>

      {/* --- FILL MODE: penting tapi sering salah --- */}
      <div className="flex gap-8 ">
        <div>
          <p className="text-zinc-500 text-xs mb-2">
            fill-mode: none (balik ke awal)
          </p>
          <div
            className="w-16 h-16 bg-rose-500 rounded-lg "
            style={{ animation: 'slideIn 10s ease-out 0.5s 1 normal none' }}
          />
        </div>
        <div>
          <p className="text-zinc-500 text-xs mb-2">
            fill-mode: forwards (stay di akhir)
          </p>
          <div
            className="w-16 h-16 bg-sky-500 rounded-lg"
            style={{
              animation: 'slideIn 10s ease-out 0.5s 1 normal forwards',
            }}
          />
        </div>
      </div>
    </div>
  );
}
