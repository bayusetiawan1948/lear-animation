import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';
import { experiments } from '../data/experiments';

export default function ExperimentLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentExperiment = experiments.find((exp) => exp.path === location.pathname);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col font-sans">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 flex items-center px-6 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-400 bg-zinc-900/50 hover:text-white hover:bg-zinc-800 rounded-lg transition-all duration-300"
        >
          <ArrowLeft weight="bold" className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Dashboard
        </button>
        
        {currentExperiment && (
          <div className="ml-6 flex items-center gap-3">
            <h1 className="text-sm font-semibold tracking-wide text-zinc-200">
              {currentExperiment.title}
            </h1>
            <div className="flex gap-2">
              {currentExperiment.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* We use flex-1 to allow the child component to fill the screen if needed */}
        <Outlet />
      </main>
    </div>
  );
}
