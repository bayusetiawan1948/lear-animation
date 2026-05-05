import { Link } from 'react-router-dom';
import { ArrowRight, Sparkle } from '@phosphor-icons/react';
import { experiments } from '../data/experiments';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-8 md:p-16 lg:p-24 font-sans selection:bg-indigo-500/30">
      <header className="max-w-5xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
          <Sparkle weight="fill" className="text-yellow-400" />
          <span>Animation Learning Journey</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Lab Eksperimen Animasi
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
          Kumpulan hasil praktik animasi web, transisi CSS, dan efek interaktif.
          Pilih salah satu kartu di bawah ini untuk melihat detailnya.
        </p>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiments.map((exp) => (
          <Link
            key={exp.id}
            to={exp.path}
            className="group relative flex flex-col justify-between h-64 p-6 bg-zinc-900/40 rounded-2xl border border-zinc-800/60 hover:bg-zinc-900 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 overflow-hidden"
          >
            {/* Background Gradient Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-300 bg-zinc-800/80 rounded-full border border-zinc-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-indigo-300 transition-colors duration-300 truncate">
                {exp.title}
              </h2>
              <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3">
                {exp.description}
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-6 pt-4 border-t border-zinc-800/50 group-hover:border-indigo-500/20 transition-colors duration-300">
              <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">
                Lihat Eksperimen
              </span>
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-indigo-500 transition-colors duration-300">
                <ArrowRight
                  weight="bold"
                  className="text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:-rotate-45"
                />
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
