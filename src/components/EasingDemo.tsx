// interface EasingCardProps {
//   label: string;
//   easingClass: string;
// }

// const EasingCard = ({ label, easingClass }: EasingCardProps) => {
//   return (
//     <div className="group relative overflow-hidden rounded-xl bg-neutral-900 p-6 cursor-pointer">
//       {/* Box yang bergerak saat hover */}
//       <div
//         className={`
//           h-12 w-12 rounded-lg bg-violet-500
//           translate-x-0 group-hover:translate-x-40
//           transition-transform duration-700
//           ${easingClass}
//         `}
//       />
//       <span className="mt-4 block text-sm text-neutral-400 font-mono">
//         {label}
//       </span>
//     </div>
//   );
// };

// Tailwind tidak support arbitrary cubic-bezier secara langsung,
// jadi kita extend config atau gunakan inline style:

const EasingDemo = () => {
  const easings = [
    {
      label: 'ease (default)',
      style: { transitionTimingFunction: 'ease' },
    },
    {
      label: 'snappy-out',
      style: { transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' },
    },
    {
      label: 'expo-out',
      style: { transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    },
    {
      label: 'back-out (overshoot)',
      style: { transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
    },
  ];

  return (
    <div className="grid gap-4 p-8">
      {easings.map(({ label, style }) => (
        <div
          key={label}
          className="group flex items-center gap-4 cursor-pointer"
        >
          <div
            className="h-10 w-10 rounded-md bg-violet-500 transition-transform duration-700 group-hover:translate-x-64"
            style={style} // ← inject easing via inline style
          />
          <span className="font-mono text-sm text-neutral-500">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default EasingDemo;
