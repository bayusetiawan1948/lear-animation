function UpSideDown() {
  return (
    <>
      <style>
        {`
    @keyframes slideOut {
  0% {
    opacity: 0;
    transform: translateY(var(--from-y));
  }

  8% {
    opacity: 1;
    transform: translateY(0);
  }

  17% {
    opacity: 1;
    transform: translateY(0);
  }

  25% {
    opacity: 0;
    transform: translateY(var(--to-y));
  }

  100% {
    opacity: 0;
    transform: translateY(var(--to-y));
  }
}

@keyframes slideStay {
  0% {
    opacity: 0;
    transform: translateY(var(--from-y));
  }

  8% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

    .text-1-1,
    .text-1-2,
    .text-2-1,
    .text-2-2 {
      opacity: 0;
      animation-duration: 4s;
      animation-fill-mode: both;
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
      animation-iteration-count: 1;
      will-change: transform, opacity;
    }

    .text-1-1 {
      --from-y: 40px;
      --to-y: -40px;
      --op: 0;
      animation-name: slideOut;
      animation-delay: calc(0ms + (var(--index) * 40ms));
    }

    .text-2-1 {
      --from-y: -40px;
      --to-y: 40px;
      --op: 0;
      animation-name: slideOut;
      animation-delay: calc(800ms + (var(--index) * 40ms));
    }

    .text-1-2 {
      --from-y: 40px;
      --to-y: -40px;
      --op: 1;
      animation-name: slideStay;
      animation-delay: calc(1600ms + (var(--index) * 40ms));
    }

    .text-2-2 {
      --from-y: -40px;
      --to-y: 40px;
      --op: 1;
      animation-name: slideStay;
      animation-delay: calc(2400ms + (var(--index) * 40ms));
    }
  `}
      </style>
      <div className="flex flex-col items-center gap-2">
        <div className="grid text-4xl font-bold uppercase overflow-hidden">
          <div className="flex flex-row items-center gap-0.5 justify-center col-start-1 row-start-1">
            {'developer'.split('').map((char, index) => (
              <p
                className="text-1-1"
                style={{ '--index': index } as React.CSSProperties}
                key={index}
              >
                {char}
              </p>
            ))}
          </div>
          <div className="flex flex-row items-center gap-0.5 justify-center col-start-1 row-start-1">
            {'bayu'.split('').map((char, index) => (
              <p
                className="text-1-2"
                style={{ '--index': index } as React.CSSProperties}
                key={index}
              >
                {char}
              </p>
            ))}
          </div>
        </div>
        <div className="grid text-4xl font-bold uppercase overflow-hidden">
          <div className="flex flex-row items-center gap-0.5 justify-center col-start-1 row-start-1">
            {'thinker'.split('').map((char, index) => (
              <p
                className="text-2-1"
                style={{ '--index': index } as React.CSSProperties}
                key={index}
              >
                {char}
              </p>
            ))}
          </div>
          <div className="flex flex-row items-center gap-0.5 justify-center col-start-1 row-start-1">
            {'setiawan'.split('').map((char, index) => (
              <p
                className="text-2-2"
                style={{ '--index': index } as React.CSSProperties}
                key={index}
              >
                {char}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UpSideDown;

// text 1:fade in from button to top
// text 2:fade in from top to button
