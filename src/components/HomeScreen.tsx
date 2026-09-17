import { Activity, ArrowRight, BookOpen, Layers, Play } from 'lucide-react';

interface HomeScreenProps {
  onSelectCourse: () => void;
}

export function HomeScreen({ onSelectCourse }: HomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto scrollbar-thin animate-home-fade-in">
      {/* Brand */}
      <div className="flex items-center gap-3 mb-12 animate-splash-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600 text-white shadow-lg shadow-red-600/20">
          <Activity className="w-6 h-6" />
        </div>
        <span className="font-bold text-white text-2xl tracking-tight">SantiSOFT</span>
      </div>

      {/* Title */}
      <h1 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center animate-splash-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        Selecione o seu preparatório
      </h1>
      <p className="text-sm text-zinc-500 mb-10 text-center animate-splash-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
        Escolha um curso para acessar as videoaulas
      </p>

      {/* Course card */}
      <button
        onClick={onSelectCourse}
        className="group relative w-full max-w-md animate-home-card-in"
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
      >
        <div className="relative overflow-hidden rounded-2xl bg-ink-900 border border-ink-850 p-6 sm:p-8 text-left transition-all duration-300 group-hover:border-red-800 group-hover:shadow-2xl group-hover:shadow-red-900/20 group-hover:-translate-y-0.5">
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Icon */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
              <Layers className="w-3.5 h-3.5" />
              <span>Curso completo</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Intensivão Medicina
          </h2>

          {/* Subtitle */}
          <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
            As 5 Grandes Áreas • Foco em Provas de Residência
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-4 mb-6 text-xs text-zinc-500">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span>5 Áreas</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span>10+ Módulos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span>30+ Aulas</span>
            </div>
          </div>

          {/* CTA button */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 text-white font-semibold text-sm group-hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
              <Play className="w-4 h-4 fill-white" />
              Acessar Aulas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </button>

      {/* Footer */}
      <p className="mt-10 text-xs text-zinc-700 animate-splash-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
        SantiSOFT © 2026 — Preparatório Médico
      </p>
    </div>
  );
}
