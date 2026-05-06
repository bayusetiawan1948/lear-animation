export interface Experiment {
  id: string;
  title: string;
  description: string;
  path: string;
  tags: string[];
}

export const experiments: Experiment[] = [
  {
    id: 'css-transitions',
    title: 'CSS Transitions & Animations',
    description:
      'Memahami dasar-dasar transisi CSS, @keyframes, delay, dan easing "premium".',
    path: '/experiments/css-transitions',
    tags: ['Keyframes', 'Transition', 'Topik-1'],
  },
  {
    id: 'magnetic-card',
    title: 'Magnetic Card Effect',
    description:
      'Efek kartu interaktif dengan transisi halus pada skala dan rotasi.',
    path: '/experiments/magnetic-card',
    tags: ['Hover Effect', 'Stagger', 'Topik-1'],
  },
  {
    id: 'tilt-card',
    title: 'Tilt Card Effect',
    description:
      'Efek kartu interaktif dengan transisi halus pada skala dan rotasi.',
    path: '/experiments/tilt-card',
    tags: ['Hover Effect', 'Topik-2'],
  },
  {
    id: 'magnetic-button',
    title: 'Magnetic Button Effect',
    description:
      'Efek tombol interaktif dengan transisi halus pada skala dan rotasi.',
    path: '/experiments/magnetic-button',
    tags: ['Hover Effect', 'Topik-2'],
  },
  {
    id: 'card-list-staggered',
    title: 'Card List Staggered Animation',
    description:
      'Efek tombol interaktif dengan transisi halus pada skala dan rotasi.',
    path: '/experiments/card-list-staggered',
    tags: ['Hover Effect', 'Topik-3'],
  },
];
