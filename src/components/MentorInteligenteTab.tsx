import React, { useState, useEffect } from 'react';
import {
  Brain,
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  BookOpen,
  ChevronRight,
  Award,
  Search,
  Filter,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import {
  getRevisoesDeHoje,
  getProximasRevisoes,
  getMentorStore,
  limparDadosTesteMentor,
  type RevisaoPendente,
  type TemaRevisao,
  type CicloRevisao,
} from '@/services/mentorService';

interface MentorScreenProps {
  onIniciarRevisao: (revisao: RevisaoPendente) => void;
  onGoBackToCronograma?: () => void;
  onGoToQuestoes?: () => void;
}

export const MentorInteligenteTab: React.FC<MentorScreenProps> = ({
  onIniciarRevisao,
  onGoBackToCronograma,
  onGoToQuestoes,
}) => {
  const [revisoesHoje, setRevisoesHoje] = useState<RevisaoPendente[]>([]);
  const [proximas, setProximas] = useState<ReturnType<typeof getProximasRevisoes>>([]);
  const [todosTemas, setTodosTemas] = useState<TemaRevisao[]>([]);
  const [activeSubTab, setActiveSubTab] = useState<'pendentes' | 'proximas' | 'historico'>('pendentes');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEspecialidade, setFilterEspecialidade] = useState<string>('todas');

  const loadData = () => {
    limparDadosTesteMentor();
    const pendentes = getRevisoesDeHoje();
    const futuras = getProximasRevisoes();
    const store = getMentorStore();
    const todos = Object.values(store).filter((item) => {
      if (!item || !item.id) return false;
      const isTest =
        item.id.startsWith('revisao-teste') ||
        item.id.toLowerCase().includes('teste') ||
        item.tema.toLowerCase().includes('teste');
      return !isTest;
    });

    setRevisoesHoje(pendentes);
    setProximas(futuras);
    setTodosTemas(todos);
  };

  useEffect(() => {
    loadData();

    const handleUpdate = () => loadData();
    window.addEventListener('santisoft_mentor_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('santisoft_mentor_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  // Cores e labels por ciclo
  const getCicloBadge = (ciclo: CicloRevisao | string, dias?: number) => {
    if (ciclo === 'R1') {
      return {
        bg: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
        text: 'text-cyan-400',
        label: `R1 (${dias || 7} dias)`,
        desc: '1º Ciclo de Fixação (24h - 7d)',
      };
    }
    if (ciclo === 'R2') {
      return {
        bg: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
        text: 'text-purple-400',
        label: `R2 (${dias || 30} dias)`,
        desc: '2º Ciclo de Memória (30 dias)',
      };
    }
    return {
      bg: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
      text: 'text-amber-400',
      label: `R3 (${dias || 60} dias)`,
      desc: '3º Ciclo de Longo Prazo (60 dias)',
    };
  };

  // Histórico de revisões concluídas
  const concluidas = todosTemas.flatMap((tema) => {
    const arr: Array<{
      temaId: string;
      tema: string;
      especialidade: string;
      ciclo: CicloRevisao;
      dataConclusao?: string;
      pontuacao?: { acertos: number; total: number };
    }> = [];

    (['R1', 'R2', 'R3'] as CicloRevisao[]).forEach((cicloKey) => {
      const c = tema.ciclos[cicloKey];
      if (c && c.concluido) {
        arr.push({
          temaId: tema.id,
          tema: tema.tema,
          especialidade: tema.especialidade,
          ciclo: cicloKey,
          dataConclusao: c.dataConclusao,
          pontuacao: c.pontuacaoSimulado,
        });
      }
    });

    return arr;
  });

  // Especialidades únicas cadastradas
  const especialidades = Array.from(
    new Set(todosTemas.map((t) => t.especialidade).filter(Boolean)),
  );

  // Filtros aplicados
  const filterBySearchAndSpec = <T extends { tema: string; especialidade: string }>(items: T[]) => {
    return items.filter((item) => {
      const matchesSearch =
        !searchTerm ||
        item.tema.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.especialidade.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpec =
        filterEspecialidade === 'todas' || item.especialidade === filterEspecialidade;
      return matchesSearch && matchesSpec;
    });
  };

  const filteredPendentes = filterBySearchAndSpec(revisoesHoje);
  const filteredProximas = filterBySearchAndSpec(proximas);
  const filteredConcluidas = filterBySearchAndSpec(concluidas);

  // Iniciar revisão direto
  const handleStartDirect = (revisao: RevisaoPendente) => {
    onIniciarRevisao(revisao);
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-y-auto scrollbar-thin bg-ink-950 text-white animate-fade-in pb-16 md:pb-8">
      {/* Top Banner / Header da Aba Dedicada */}
      <div className="border-b border-ink-875 bg-ink-900/60 backdrop-blur-md px-4 sm:px-8 py-6">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-amber-600 text-white shadow-lg shadow-red-600/25 shrink-0">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                    <Brain className="w-6 h-6 text-red-500 inline-block shrink-0 sm:hidden" />
                    <span>Mentor Inteligente</span>
                  </h1>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-600/15 text-red-400 border border-red-600/30">
                    <Sparkles className="w-3 h-3" /> Repetição Espaçada Medcurso
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                  Algoritmo inteligente de retenção e revisão contínua em ciclos de 24h, 7d, 30d e 60d com simulados direcionados.
                </p>
              </div>
            </div>

            {/* Ações de atalho */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              {onGoBackToCronograma && (
                <button
                  type="button"
                  onClick={onGoBackToCronograma}
                  className="px-3.5 py-2 rounded-xl bg-ink-850 hover:bg-ink-800 border border-ink-800 text-xs font-semibold text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Cronograma</span>
                </button>
              )}
              {onGoToQuestoes && (
                <button
                  type="button"
                  onClick={onGoToQuestoes}
                  className="px-3.5 py-2 rounded-xl bg-red-600/15 hover:bg-red-600/25 border border-red-600/30 text-xs font-semibold text-red-400 hover:text-red-300 transition-all flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Banco Completo</span>
                </button>
              )}
            </div>
          </div>

          {/* Cards de Métricas / Status Geral */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-ink-900 border border-ink-875 flex flex-col justify-between">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-red-400" /> Pendentes Hoje
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className={`text-2xl sm:text-3xl font-black ${revisoesHoje.length > 0 ? 'text-red-400' : 'text-zinc-200'}`}>
                  {revisoesHoje.length}
                </span>
                <span className="text-xs text-zinc-500 font-semibold">tópicos</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-ink-900 border border-ink-875 flex flex-col justify-between">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" /> Agendadas
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-cyan-400">
                  {proximas.length}
                </span>
                <span className="text-xs text-zinc-500 font-semibold">nos ciclos</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-ink-900 border border-ink-875 flex flex-col justify-between">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Concluídas
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                  {concluidas.length}
                </span>
                <span className="text-xs text-zinc-500 font-semibold">revisões</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-ink-900 border border-ink-875 flex flex-col justify-between">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" /> Aulas Mapeadas
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-amber-400">
                  {todosTemas.length}
                </span>
                <span className="text-xs text-zinc-500 font-semibold">no plano</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-8 py-6 space-y-6">
        
        {/* Abas Internas de Navegação (Pendentes / Agendadas / Histórico) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-ink-875 pb-4">
          <div className="flex items-center gap-2 p-1 bg-ink-900 border border-ink-875 rounded-xl self-start">
            <button
              type="button"
              onClick={() => setActiveSubTab('pendentes')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeSubTab === 'pendentes'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Pendentes de Hoje</span>
              {revisoesHoje.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
                  {revisoesHoje.length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveSubTab('proximas')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeSubTab === 'proximas'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Próximas Agendadas</span>
              {proximas.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
                  {proximas.length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveSubTab('historico')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeSubTab === 'historico'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Histórico Concluído</span>
              {concluidas.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
                  {concluidas.length}
                </span>
              )}
            </button>
          </div>

          {/* Barra de Filtro e Busca */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar tema..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-ink-900 border border-ink-875 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>

            {especialidades.length > 1 && (
              <div className="flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-zinc-500 hidden sm:block" />
                <select
                  value={filterEspecialidade}
                  onChange={(e) => setFilterEspecialidade(e.target.value)}
                  className="px-2.5 py-1.5 rounded-xl bg-ink-900 border border-ink-875 text-xs text-zinc-300 focus:outline-none focus:border-red-600"
                >
                  <option value="todas">Todas as Áreas</option>
                  {especialidades.map((esp) => (
                    <option key={esp} value={esp}>
                      {esp}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* 1. ABA: REVISÕES PENDENTES DE HOJE */}
        {activeSubTab === 'pendentes' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  Revisões Prontas para Resolução
                </h2>
                <p className="text-xs text-zinc-400">
                  Temas cuja data calculada pelo método de repetição espaçada venceu ou é hoje.
                </p>
              </div>
            </div>

            {filteredPendentes.length === 0 ? (
              <div className="p-8 sm:p-12 rounded-2xl bg-ink-900/60 border border-ink-875 text-center space-y-4 max-w-2xl mx-auto">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Nenhuma revisão pendente para hoje!
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Você está em dia com seus ciclos de repetição espaçada. Ao marcar novas aulas como assistidas no Cronograma de Estudos, o Mentor Inteligente agendará automaticamente os ciclos de revisão (24h, 7d, 30d e 60d).
                  </p>
                </div>
                {onGoBackToCronograma && (
                  <button
                    type="button"
                    onClick={onGoBackToCronograma}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-red-600/25 transition-all"
                  >
                    <span>Abrir Cronograma de Aulas</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3">
                {filteredPendentes.map((item) => {
                  const badge = getCicloBadge(item.ciclo, item.diasCiclo);
                  return (
                    <div
                      key={`${item.temaId}-${item.ciclo}`}
                      className="p-4 sm:p-5 rounded-2xl bg-ink-900 border border-ink-875 hover:border-red-600/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-md"
                    >
                      <div className="space-y-2 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`text-[11px] font-black uppercase px-2.5 py-0.5 rounded-lg border ${badge.bg}`}>
                            {badge.label}
                          </span>
                          <span className="text-[11px] font-semibold text-zinc-400 px-2.5 py-0.5 rounded-lg bg-ink-850 border border-ink-800">
                            {item.especialidade}
                          </span>
                          {item.diasAtraso > 0 ? (
                            <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                              <Clock className="w-3 h-3" /> Atrasada há {item.diasAtraso} dia(s)
                            </span>
                          ) : (
                            <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 px-2 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                              <Sparkles className="w-3 h-3" /> Prevista para Hoje
                            </span>
                          )}
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                            {item.tema}
                          </h3>
                          <p className="text-xs text-zinc-400 mt-0.5">
                            {badge.desc} • Simulado recomendado para consolidação da memória sináptica.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleStartDirect(item)}
                          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-lg shadow-red-600/25 active:scale-95 transition-all"
                        >
                          <BookOpen className="w-4 h-4" />
                          <span>Iniciar Simulado de Revisão</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* 2. ABA: PRÓXIMAS REVISÕES AGENDADAS (FUTURO) */}
        {activeSubTab === 'proximas' && (
          <div className="space-y-4">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Cronograma de Repetição Espaçada Futuro
              </h2>
              <p className="text-xs text-zinc-400">
                Acompanhe as próximas janelas de revisão calculadas para reter cada assunto estudado.
              </p>
            </div>

            {filteredProximas.length === 0 ? (
              <div className="p-8 rounded-2xl bg-ink-900/60 border border-ink-875 text-center space-y-3">
                <Calendar className="w-10 h-10 text-zinc-500 mx-auto" />
                <p className="text-sm font-semibold text-zinc-300">
                  Nenhuma revisão futura agendada no momento.
                </p>
                <p className="text-xs text-zinc-500">
                  Marque aulas como assistidas no Cronograma para ativar o algoritmo de fixação espaçada.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredProximas.map((item) => {
                  const badge = getCicloBadge(item.ciclo);
                  return (
                    <div
                      key={`${item.temaId}-${item.ciclo}`}
                      className="p-4 rounded-xl bg-ink-900 border border-ink-875 hover:border-ink-800 transition-all space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md border ${badge.bg}`}>
                            {item.ciclo}
                          </span>
                          <span className="text-[10px] font-semibold text-zinc-400 px-2 py-0.5 rounded-md bg-ink-850">
                            {item.especialidade}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white truncate" title={item.tema}>
                          {item.tema}
                        </h4>
                      </div>

                      <div className="pt-2 border-t border-ink-875 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 text-zinc-400">
                          <Clock className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Em <strong className="text-white">{item.diasFaltando}</strong> dia(s)</span>
                        </div>
                        <span className="text-[11px] font-medium text-zinc-500">
                          {item.dataPrevista}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* 3. ABA: HISTÓRICO DE REVISÕES CONCLUÍDAS */}
        {activeSubTab === 'historico' && (
          <div className="space-y-4">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Histórico de Revisões Realizadas
              </h2>
              <p className="text-xs text-zinc-400">
                Registro de todos os ciclos de retenção já concluídos e aproveitamento.
              </p>
            </div>

            {filteredConcluidas.length === 0 ? (
              <div className="p-8 rounded-2xl bg-ink-900/60 border border-ink-875 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-zinc-500 mx-auto" />
                <p className="text-sm font-semibold text-zinc-300">
                  Nenhum ciclo de revisão concluído ainda.
                </p>
                <p className="text-xs text-zinc-500">
                  Resolva os simulados quando estiverem pendentes para consolidar o histórico de retenção.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredConcluidas.map((item, idx) => {
                  const badge = getCicloBadge(item.ciclo);
                  const acertos = item.pontuacao?.acertos ?? 0;
                  const total = item.pontuacao?.total ?? 10;
                  const pct = total > 0 ? Math.round((acertos / total) * 100) : 0;

                  return (
                    <div
                      key={`${item.temaId}-${item.ciclo}-${idx}`}
                      className="p-4 rounded-xl bg-ink-900 border border-emerald-500/20 space-y-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md border ${badge.bg}`}>
                            {item.ciclo} CONCLUÍDO
                          </span>
                          <span className="text-[10px] font-semibold text-zinc-400">
                            {item.especialidade}
                          </span>
                        </div>
                        {item.dataConclusao && (
                          <span className="text-[10px] text-zinc-500">
                            {item.dataConclusao}
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm font-bold text-white">
                        {item.tema}
                      </h4>

                      {item.pontuacao && (
                        <div className="pt-2 border-t border-ink-875 flex items-center justify-between">
                          <span className="text-xs text-zinc-400">Aproveitamento no Simulado:</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white">
                              {acertos}/{total} ({pct}%)
                            </span>
                            <div className="w-16 h-1.5 bg-ink-850 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${pct >= 70 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-red-500'}`}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Guia Didático: Como funciona a Repetição Espaçada Medcurso */}
        <div className="rounded-2xl bg-gradient-to-r from-ink-900 via-ink-900 to-ink-950 border border-ink-875 p-5 space-y-4">
          <div className="flex items-center gap-2.5">
            <TrendingUp className="w-5 h-5 text-red-500" />
            <h3 className="text-sm sm:text-base font-bold text-white">
              Como funciona o Algoritmo do Mentor SantiSOFT?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-ink-950/60 border border-cyan-500/20 space-y-1">
              <span className="text-[11px] font-black text-cyan-400 block uppercase">
                1. Ciclo R1 (24h - 7 Dias)
              </span>
              <p className="text-zinc-400 leading-relaxed">
                Combate a Curva do Esquecimento imediata de Ebbinghaus, reforçando o traço de memória nas primeiras horas após assistir a aula.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-ink-950/60 border border-purple-500/20 space-y-1">
              <span className="text-[11px] font-black text-purple-400 block uppercase">
                2. Ciclo R2 (30 Dias)
              </span>
              <p className="text-zinc-400 leading-relaxed">
                Transfere o conteúdo da memória de trabalho/recente para a memória de médio e longo prazo com resolução ativa de casos clínicos.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-ink-950/60 border border-amber-500/20 space-y-1">
              <span className="text-[11px] font-black text-amber-400 block uppercase">
                3. Ciclo R3 (60 Dias)
              </span>
              <p className="text-zinc-400 leading-relaxed">
                Consolidação definitiva para as provas de Residência Médica (R1). Conteúdo pronto para evocação instantânea sob pressão.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
