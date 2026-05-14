function UpSideDown() {
  return (
    <>
      <style>
        {`
    @keyframes slideFromBottom {
      0% {
        opacity: 0;
        transform: translateY(40px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideToTop {
      0% {
        opacity: 1;
        transform: translateY(0);
      }

      100% {
        opacity: 0;
        transform: translateY(-40px);
      }
    }

    @keyframes slideFromTop {
      0% {
        opacity: 0;
        transform: translateY(-40px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideToBottom {
      0% {
        opacity: 1;
        transform: translateY(0);
      }

      100% {
        opacity: 0;
        transform: translateY(40px);
      }
    }

    .text-1-1,
    .text-1-2,
    .text-2-1,
    .text-2-2 {
      opacity: 0;

      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
      will-change: transform, opacity;
    }

    .text-1-1 {
      animation:
        slideFromBottom 400ms forwards,
        slideToTop 400ms forwards;

      animation-delay:
        calc(0ms + (var(--index) * 40ms)),
        calc(2000ms + (var(--index) * 40ms));
    }

    .text-2-1 {
      animation:
        slideFromTop 400ms forwards,
        slideToBottom 400ms forwards;

      animation-delay:
        calc(1000ms + (var(--index) * 40ms)),
        calc(3000ms + (var(--index) * 40ms));
    }

    .text-1-2 {
      animation:
        slideFromBottom 400ms forwards;

      animation-delay:
        calc(2000ms + (var(--index) * 40ms));
    }

    .text-2-2 {
      animation:
        slideFromTop 400ms forwards;

      animation-delay:
        calc(3000ms + (var(--index) * 40ms));
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
