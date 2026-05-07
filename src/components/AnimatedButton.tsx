import { useEffect, useState } from 'react';

type BehaviorType = 'idle' | 'hover' | 'click';

const EASING = {
  expoOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  backOut: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  anticipation: 'cubic-bezier(0.36, 0, 0.66, -0.56)',
} as const;

const behaviorStyles: Record<BehaviorType, React.CSSProperties> = {
  idle: {
    transform: 'scale(1)',
    transitionTimingFunction: EASING.expoOut,
    transitionDuration: '400ms',
  },
  hover: {
    transform: 'scale(1.05)',
    transitionTimingFunction: EASING.backOut,
    transitionDuration: '300ms',
  },
  click: {
    transform: 'scale(0.95)',
    transitionTimingFunction: EASING.anticipation,
    transitionDuration: '150ms',
  },
};

function AnimatedButton() {
  const [behavior, setBehavior] = useState<BehaviorType>('idle');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const getMatchMedia = async () => {
      const mq = await window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mq.matches);
      mq.addEventListener('change', (e) => setReducedMotion(e.matches));
      return () =>
        mq.removeEventListener('change', (e) => setReducedMotion(e.matches));
    };
    getMatchMedia();
  }, []);

  const currentStyle: React.CSSProperties = reducedMotion
    ? { transitionDuration: '0ms' }
    : behaviorStyles[behavior];

  return (
    <button
      className="bg-blue-500 text-white font-bold py-3 px-6 rounded cursor-pointer"
      style={{
        transitionProperty: 'transform',
        ...currentStyle,
      }}
      onMouseEnter={() => setBehavior('hover')}
      onMouseLeave={() => setBehavior('idle')}
      onMouseDown={() => setBehavior('click')}
      onMouseUp={() => setBehavior('hover')}
    >
      Hit Me!
    </button>
  );
}

export default AnimatedButton;
