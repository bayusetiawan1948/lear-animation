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
    description: 'Memahami dasar-dasar transisi CSS, @keyframes, delay, dan easing "premium".',
    path: '/experiments/css-transitions',
    tags: ['CSS', 'Keyframes', 'Transition'],
  },
  {
    id: 'magnetic-card',
    title: 'Magnetic Card Effect',
    description: 'Efek kartu interaktif dengan transisi halus pada skala dan rotasi.',
    path: '/experiments/magnetic-card',
    tags: ['CSS', 'Hover Effect', 'Stagger'],
  },
];
