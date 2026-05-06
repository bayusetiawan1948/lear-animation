import React from 'react';

function KeyFrameMultiStep() {
  return (
    <style>
      {`/* ─── 1. BASIC: fade + slide up (entrance pattern paling umum) ─── */
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-text {
  animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
  /*                                        ↑ ease-out-expo custom — terasa premium */
}


/* ─── 2. MULTI-STEP: shimmer loading skeleton ─── */
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #e2e8f0 25%,
    #f8fafc 50%,   /* highlight */
    #e2e8f0 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}


/* ─── 3. MULTI-STEP: attention seeker — jangan overuse ─── */
@keyframes pulseRing {
  0%   { transform: scale(1);    opacity: 1; }
  50%  { transform: scale(1.15); opacity: 0.7; }
  100% { transform: scale(1);    opacity: 1; }
}


/* ─── 4. STAGGERED CHILDREN dengan CSS custom property ─── */
.card-list .card {
  animation: fadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: calc(var(--index) * 80ms); /* set di HTML: style="--index: 0" */
}

/* HTML: 
  <div class="card" style="--index: 0">...</div>
  <div class="card" style="--index: 1">...</div>
  <div class="card" style="--index: 2">...</div>
*/


/* ─── 5. ACCESSIBILITY — wajib ada ─── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`}
    </style>
  );
}

export default KeyFrameMultiStep;
