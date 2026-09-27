import { useState, useEffect } from 'react';
import {
  Brain,
  CheckCircle2,
  Sparkles,
  Calendar,
  ChevronRight,
  ChevronDown,
  Clock,
  BookOpen,
} from 'lucide-react';
import {
  getRevisoesDeHoje,
  getProximasRevisoes,
  limparDadosTesteMentor,
  type RevisaoPendente,
} from '@/services/mentorService';

interface MentorCardProps {
  onStartRevision: (revisao: RevisaoPendente) => void;
  onOpenMentorTab?: () => void;
}

export function MentorCard({ onStartRevision, onOpenMentorTab }: MentorCardProps) {
  const [revisoesHoje, setRevisoesHoje] = useState<RevisaoPendente[]>([]);
  const [proximas, setProximas] = useState<ReturnType<typeof getProximasRevisoes>>([]);
  const [showProximas, setShowProximas] = useState(false);

  const loadData = () => {
    limparDadosTesteMentor();
    setRevisoesHoje(getRevisoesDeHoje());
    setProximas(getProximasRevisoes());
  };

  useEffect(() => {
    loadData();

    // Ouve atualizações automáticas do serviço de repetição espaçada
    const handleUpdate = () => loadData();
    window.addEventListener('santisoft_mentor_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('santisoft_mentor_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  // Cores por ciclo
  const getCicloBadge = (ciclo: string, dias: number) => {
    if (ciclo === 'R1') {
      return {
        bg: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
        label: `[R1 - ${dias} dias]`,
      };
    }
    if (ciclo === 'R2') {
      return {
        bg: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
        label: `[R2 - ${dias} dias]`,
      };
    }
    return {
      bg: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
      label: `[R3 - ${dias} dias]`,
    };
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-ink-900 via-ink-900 to-ink-950 border border-ink-875 shadow-xl overflow-hidden relative">
      {/* Glow de fundo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header do Card */}
      <div className="p-4 sm:p-5 border-b border-ink-875 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 text-white shadow-md shadow-red-600/30 shrink-0">
            <Brain className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-black text-white tracking-tight">
                Mentor - Suas Revisões de Hoje
              </h2>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-600/15 text-red-400 border border-red-600/30">
                <Sparkles className="w-3 h-3" /> Repetição Espaçada
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Ciclos inteligentes Medcurso: <span className="text-cyan-400 font-semibold">R1 (7d)</span> •{' '}
              <span className="text-purple-400 font-semibold">R2 (30d)</span> •{' '}
              <span className="text-amber-400 font-semibold">R3 (60d)</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onOpenMentorTab && (
            <button
              type="button"
              onClick={onOpenMentorTab}
              className="px-3 py-1.5 rounded-xl bg-ink-850 hover:bg-ink-800 border border-ink-800 text-xs font-semibold text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
            >
              <span>Acessar Mentor</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}

          {revisoesHoje.length > 0 && (
            <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-black shadow-md shadow-red-600/30">
              {revisoesHoje.length} {revisoesHoje.length === 1 ? 'revisão pendente' : 'revisões pendentes'}
            </span>
          )}
        </div>
      </div>

      {/* Corpo do Card */}
      <div className="p-4 sm:p-5 space-y-3">
        {revisoesHoje.length > 0 ? (
          <div className="space-y-2.5">
            {revisoesHoje.map((item) => {
              const badge = getCicloBadge(item.ciclo, item.diasCiclo);
              return (
                <div
                  key={`${item.temaId}-${item.ciclo}`}
                  className="p-3.5 sm:p-4 rounded-xl bg-ink-950/80 border border-ink-850 hover:border-red-600/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[11px] font-black uppercase px-2 py-0.5 rounded-md border ${badge.bg}`}
                      >
                        {badge.label}
                      </span>
                      <span className="text-[11px] font-semibold text-zinc-400 px-2 py-0.5 rounded-md bg-ink-875">
                        {item.especialidade}
                      </span>
                      {item.diasAtraso > 0 && (
                        <span className="text-[10px] font-bold text-amber-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> Atrasada há {item.diasAtraso}d
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-red-400 transition-colors truncate">
                      {item.tema}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => onStartRevision(item)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md shadow-red-600/20 active:scale-95 transition-all shrink-0"
                  >
                    <span>Fazer Simulado (10 Questões)</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          /* Mensagem limpa quando não há revisões pendentes para hoje */
          <div className="p-4 sm:p-5 rounded-xl bg-ink-950/60 border border-ink-875 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-emerald-300">
                  Nenhuma revisão pendente para hoje
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Ao concluir ou marcar aulas como assistidas no cronograma, os ciclos de revisão espaçada (R1: 7d, R2: 30d e R3: 60d) aparecerão aqui.
                </p>
              </div>
            </div>

            {onOpenMentorTab && (
              <button
                type="button"
                onClick={onOpenMentorTab}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-ink-850 hover:bg-ink-800 border border-ink-800 text-xs font-semibold text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Ver todas as revisões</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {/* Rodapé expansível: Próximas revisões agendadas no futuro */}
        {proximas.length > 0 && (
          <div className="pt-2 border-t border-ink-875/60">
            <button
              type="button"
              onClick={() => setShowProximas((v) => !v)}
              className="text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-zinc-500" />
              <span>
                {showProximas ? 'Ocultar' : 'Ver'} próximas revisões agendadas ({proximas.length})
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  showProximas ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showProximas && (
              <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {proximas.slice(0, 6).map((item) => (
                  <div
                    key={`${item.temaId}-${item.ciclo}`}
                    className="p-2.5 rounded-lg bg-ink-950/70 border border-ink-875 text-xs flex items-center justify-between gap-2"
                  >
                    <div className="truncate min-w-0">
                      <span className="font-semibold text-white block truncate">{item.tema}</span>
                      <span className="text-[10px] text-zinc-400">
                        {item.ciclo} • em {item.diasFaltando} dia(s) ({item.dataPrevista})
                      </span>
                    </div>
                    <BookOpen className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
