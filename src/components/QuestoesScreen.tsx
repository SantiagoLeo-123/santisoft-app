import { useState, useMemo, useEffect, useRef } from 'react';
import {
  BookOpen,
  Play,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sparkles,
  Award,
  AlertTriangle,
  Layers,
  ArrowRight,
  Filter,
} from 'lucide-react';
import {
  questoesData,
  TEMAS_PEDIATRIA,
  QUESTOES_CARDIOLOGIA_PEDIATRICA,
  QUESTOES_CARDIOLOGIA_PEDIATRICA_PARTE_2,
  QUESTOES_CARDIOLOGIA_PEDIATRICA_PARTE_3,
} from '@/data/questoes';
import questoesJsonRaw from '@/data/questoes.json';
import { cronogramaData } from '@/data/cronograma';
import { curriculum } from '@/data/curriculum';
import { concluirCicloRevisao } from '@/services/mentorService';
import type { Question } from '@/types';

export {
  TEMAS_PEDIATRIA,
  QUESTOES_CARDIOLOGIA_PEDIATRICA,
  QUESTOES_CARDIOLOGIA_PEDIATRICA_PARTE_2,
  QUESTOES_CARDIOLOGIA_PEDIATRICA_PARTE_3,
};

// Lista unificada de aulas existentes para as demais especialidades
const aulas = [
  ...cronogramaData.map((c) => ({
    ...c,
    area: c.area,
    especialidade: c.area,
    titulo: c.titulo || c.aula,
  })),
  ...curriculum.flatMap((area) =>
    area.modules.flatMap((mod) =>
      mod.lessons.map((lesson) => ({
        id: lesson.id,
        area: area.name,
        especialidade: area.name,
        titulo: lesson.title,
      }))
    )
  ),
];

// Mapeamento dinâmico de temas por Grande Área
const getTemasPorArea = (area: SpecialtySelection): string[] => {
  if (area === 'Pediatria') {
    return TEMAS_PEDIATRIA;
  }
  if (area === 'Todas') {
    return Array.from(new Set(aulas.map((a) => a.titulo))).sort();
  }
  const areaMapping: Record<string, string> = {
    'Clínica Médica': 'Clínica',
    'Ginecologia e Obstetrícia': 'GO',
    'Cirurgia': 'Cirurgia',
    'Preventiva': 'Preventiva',
  };
  const targetArea = areaMapping[area] || area;
  return Array.from(
    new Set(
      aulas
        .filter((aula) => aula.area === targetArea || aula.especialidade === area || aula.area === area)
        .map((aula) => aula.titulo)
    )
  );
};

function normalizeStr(str: string): string {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function matchesTheme(q: Question, theme: string): boolean {
  if (theme === 'todos') return true;
  const needle = normalizeStr(theme);
  const subtopic = normalizeStr(q.subtopic);
  const topic = normalizeStr(q.topic);

  if (topic === needle || subtopic === needle) return true;
  if (topic && needle && (topic.includes(needle) || needle.includes(topic))) return true;
  if (subtopic && needle && (subtopic.includes(needle) || needle.includes(subtopic))) return true;

  // Busca por termos relevantes do título (3 letras ou mais)
  const words = needle.split(/[\s,;:\-–/()]+/).filter((w) => w.length >= 3);
  for (const w of words) {
    if (topic.includes(w) || subtopic.includes(w)) {
      return true;
    }
  }

  return false;
}

type ScreenStage = 'configuracao' | 'em_andamento' | 'resultado_gabarito';

type SpecialtySelection =
  | 'Todas'
  | 'Pediatria'
  | 'Ginecologia e Obstetrícia'
  | 'Clínica Médica'
  | 'Cirurgia'
  | 'Preventiva';

export interface RevisionExamConfig {
  temaId: string;
  tema: string;
  especialidade: string;
  ciclo: 'R1' | 'R2' | 'R3';
  diasCiclo: number;
  autoStart?: boolean;
}

export interface QuestoesScreenProps {
  initialRevision?: RevisionExamConfig | null;
  onClearRevision?: () => void;
  onGoBackToCronograma?: () => void;
}

const SPECIALTIES_CONFIG: {
  id: SpecialtySelection;
  label: string;
  shortLabel: string;
  iconBg: string;
  textColor: string;
  borderColor: string;
}[] = [
  {
    id: 'Todas',
    label: 'Todas as Grandes Áreas (Simulado Geral)',
    shortLabel: 'Todas as Áreas',
    iconBg: 'bg-red-600/15',
    textColor: 'text-red-400',
    borderColor: 'border-red-600/30',
  },
  {
    id: 'Pediatria',
    label: 'Pediatria',
    shortLabel: 'Pediatria',
    iconBg: 'bg-amber-950/60',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-800/50',
  },
  {
    id: 'Ginecologia e Obstetrícia',
    label: 'Ginecologia e Obstetrícia',
    shortLabel: 'G.O.',
    iconBg: 'bg-purple-950/60',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-800/50',
  },
  {
    id: 'Clínica Médica',
    label: 'Clínica Médica',
    shortLabel: 'Clínica Médica',
    iconBg: 'bg-blue-950/60',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-800/50',
  },
  {
    id: 'Cirurgia',
    label: 'Cirurgia Geral',
    shortLabel: 'Cirurgia',
    iconBg: 'bg-emerald-950/60',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-800/50',
  },
  {
    id: 'Preventiva',
    label: 'Medicina Preventiva e Social',
    shortLabel: 'Preventiva',
    iconBg: 'bg-teal-950/60',
    textColor: 'text-teal-400',
    borderColor: 'border-teal-800/50',
  },
];

export function QuestoesScreen({
  initialRevision,
  onClearRevision,
  onGoBackToCronograma,
}: QuestoesScreenProps = {}) {
  // 1. Estado da Etapa
  const [stage, setStage] = useState<ScreenStage>('configuracao');
  const [activeRevision, setActiveRevision] = useState<RevisionExamConfig | null>(
    initialRevision || null,
  );
  const [revisionCompletionMessage, setRevisionCompletionMessage] = useState<string | null>(null);

  // --- CONFIGURAÇÃO ---
  const [selectedSpecialty, setSelectedSpecialty] =
    useState<SpecialtySelection>('Todas');
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>('todos');
  const [questionCountChoice, setQuestionCountChoice] = useState<
    '5' | '10' | '20' | '30' | '50' | '100' | 'todas'
  >('5');
  const [showRevisionFallbackModal, setShowRevisionFallbackModal] = useState(false);
  const [pendingRevisionPayload, setPendingRevisionPayload] = useState<{
    spec: SpecialtySelection;
    theme: string;
  } | null>(null);

  // Subtópicos dinâmicos baseados na Grande Área selecionada (para Pediatria, puxa direto da lista de aulas)
  const availableSubtopics = useMemo(() => {
    return getTemasPorArea(selectedSpecialty);
  }, [selectedSpecialty]);

  // Resetar subtópico ao mudar especialidade
  useEffect(() => {
    setSelectedSubtopic('todos');
  }, [selectedSpecialty]);

  // Contagem de questões disponíveis para os filtros selecionados (Treino Livre: apenas questões comuns, isRevisao !== true)
  const availableQuestionsCount = useMemo(() => {
    return questoesData.filter((q) => {
      if (q.isRevisao === true) return false;
      if (selectedSpecialty !== 'Todas' && q.specialty !== selectedSpecialty)
        return false;
      if (selectedSubtopic !== 'todos' && !matchesTheme(q, selectedSubtopic))
        return false;
      return true;
    }).length;
  }, [selectedSpecialty, selectedSubtopic]);

  // --- PROVA EM ANDAMENTO ---
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<
    Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>
  >({});
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showConfirmFinishModal, setShowConfirmFinishModal] = useState(false);

  // --- RESULTADO / GABARITO ---
  const [expandedComments, setExpandedComments] = useState<Set<string>>(
    () => new Set(),
  );

  // Timer effect
  const timerRef = useRef<number | null>(null);
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = window.setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning]);

  const formatTimer = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    if (hours > 0) {
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
        2,
        '0',
      )}:${String(seconds).padStart(2, '0')}`;
    }
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`;
  };

  // Sincroniza initialRevision quando recebido
  useEffect(() => {
    if (initialRevision) {
      setActiveRevision(initialRevision);
      const spec = (initialRevision.especialidade as SpecialtySelection) || 'Pediatria';
      setSelectedSpecialty(spec);
      setSelectedSubtopic(initialRevision.tema);
      setQuestionCountChoice('30');

      if (initialRevision.autoStart) {
        // Filtro Exclusivo no Mentor Inteligente: estritamente questões com isRevisao === true
        const revisionPool = questoesData.filter(
          (q) => q.isRevisao === true && matchesTheme(q, initialRevision.tema),
        );

        if (revisionPool.length >= 30) {
          startExamWithParams(spec, initialRevision.tema, '30', true);
        } else {
          // Caso o tema ainda não possua as 30 questões exclusivas de revisão cadastradas, exibe aviso suave
          setPendingRevisionPayload({ spec, theme: initialRevision.tema });
          setShowRevisionFallbackModal(true);
        }
      }
    }
  }, [initialRevision]);

  // Iniciar Prova Parametrizada
  const startExamWithParams = (
    specialty: SpecialtySelection,
    theme: string,
    countChoice: '5' | '10' | '20' | '30' | '50' | '100' | 'todas' = '10',
    isRevisionMode: boolean = false,
  ) => {
    let pool = questoesData.filter((q) => {
      if (isRevisionMode) {
        // Mentor Inteligente: apenas questões com isRevisao === true
        if (q.isRevisao !== true) return false;
      } else {
        // Treino Livre: apenas questões de treino comum (isRevisao !== true)
        if (q.isRevisao === true) return false;
      }
      if (specialty !== 'Todas' && q.specialty !== specialty) return false;
      if (theme !== 'todos' && !matchesTheme(q, theme)) return false;
      return true;
    });

    // Se o tema específico ainda não tiver questão isolada no modo livre, usa as da área
    if (pool.length === 0 && !isRevisionMode) {
      pool = questoesData.filter((q) => {
        if (q.isRevisao === true) return false;
        if (specialty !== 'Todas' && q.specialty !== specialty) return false;
        return true;
      });
    }

    if (pool.length === 0) return;

    // Embaralhar aleatoriamente
    const shuffled = [...pool].sort(() => 0.5 - Math.random());

    let count = shuffled.length;
    if (countChoice !== 'todas') {
      const num = parseInt(countChoice, 10);
      count = Math.min(num, shuffled.length);
    }

    const selectedExam = shuffled.slice(0, count);

    setExamQuestions(selectedExam);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setElapsedSeconds(0);
    setIsTimerRunning(true);
    setExpandedComments(new Set());
    setRevisionCompletionMessage(null);
    setStage('em_andamento');
  };

  // Iniciar Prova pelo botão da UI (Treino Livre)
  const handleStartExam = () => {
    startExamWithParams(selectedSpecialty, selectedSubtopic, questionCountChoice, false);
  };

  // Marcar alternativa na prova
  const handleSelectAnswer = (letter: 'A' | 'B' | 'C' | 'D' | 'E') => {
    const currentQ = examQuestions[currentQuestionIndex];
    if (!currentQ) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: letter,
    }));
  };

  // Botão Mostrar Gabarito
  const handlePromptFinish = () => {
    const total = examQuestions.length;
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < total) {
      setShowConfirmFinishModal(true);
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    setIsTimerRunning(false);
    setShowConfirmFinishModal(false);
    setStage('resultado_gabarito');

    // Se estiver em modo revisão com o Mentor Inteligente, conclui o ciclo e agenda o próximo
    if (activeRevision) {
      let correct = 0;
      for (const q of examQuestions) {
        if (answers[q.id] === q.correctOption) {
          correct++;
        }
      }

      concluirCicloRevisao(activeRevision.temaId, activeRevision.ciclo, {
        acertos: correct,
        total: examQuestions.length,
      });

      setRevisionCompletionMessage(
        `Ciclo [${activeRevision.ciclo}] concluído com sucesso (${correct}/${examQuestions.length} acertos)! Próxima revisão agendada no Mentor Inteligente.`,
      );
    }

    // Rolar ao topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleComment = (questionId: string) => {
    setExpandedComments((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) next.delete(questionId);
      else next.add(questionId);
      return next;
    });
  };

  const toggleAllComments = () => {
    if (expandedComments.size === examQuestions.length) {
      setExpandedComments(new Set());
    } else {
      setExpandedComments(new Set(examQuestions.map((q) => q.id)));
    }
  };

  // Estatísticas do Resultado
  const examStats = useMemo(() => {
    if (stage !== 'resultado_gabarito') {
      return { total: 0, correct: 0, wrong: 0, unanswered: 0, percentage: 0 };
    }
    const total = examQuestions.length;
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    for (const q of examQuestions) {
      const ans = answers[q.id];
      if (!ans) {
        unanswered++;
      } else if (ans === q.correctOption) {
        correct++;
      } else {
        wrong++;
      }
    }

    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { total, correct, wrong, unanswered, percentage };
  }, [stage, examQuestions, answers]);

  // ==========================================
  // RENDER ETAPA 1: CONFIGURAÇÃO DA PROVA
  // ==========================================
  if (stage === 'configuracao') {
    return (
      <div className="flex-1 overflow-y-auto pb-32 sm:pb-16 bg-ink-950 text-white font-sans overflow-x-hidden animate-fade-in">
        <div className="w-full max-w-4xl mx-auto px-3.5 sm:px-6 py-4 sm:py-8 space-y-6">
          
          {/* Header de Configuração */}
          <div className="flex items-center gap-3.5 pb-2 border-b border-ink-875">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600/20 to-red-800/20 border border-red-600/30 flex items-center justify-center text-red-500 shadow-lg shadow-red-600/10 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Simulado Personalizado
                </h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-red-600/15 text-red-400 border border-red-600/30">
                  Medcurso Pro
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Monte sua prova com casos clínicos, modo de teste silencioso e gabarito comentado
              </p>
            </div>
          </div>

          {/* 1. Seleção de Grande Tema */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-red-500" />
              <label className="text-sm font-bold text-white uppercase tracking-wider">
                1. Escolha a Grande Área:
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {SPECIALTIES_CONFIG.map((spec) => {
                const isSelected = selectedSpecialty === spec.id;
                return (
                  <button
                    key={spec.id}
                    type="button"
                    onClick={() => setSelectedSpecialty(spec.id)}
                    className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all active:scale-[0.98] ${
                      isSelected
                        ? 'bg-red-600/15 border-red-500 text-white shadow-md shadow-red-600/20 ring-1 ring-red-500/50'
                        : 'bg-ink-900 border-ink-875 text-zinc-300 hover:bg-ink-850 hover:text-white hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-3 h-3 rounded-full border ${
                          isSelected
                            ? 'bg-red-500 border-red-400 ring-2 ring-red-500/30'
                            : 'border-zinc-600 bg-ink-850'
                        }`}
                      />
                      <span className="text-xs sm:text-sm font-bold">
                        {spec.shortLabel}
                      </span>
                    </div>

                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Seleção de Conteúdo / Subtópicos Dinâmicos */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-red-500" />
                <label className="text-sm font-bold text-white uppercase tracking-wider">
                  2. Conteúdo / Subtópicos:
                </label>
              </div>
              <span className="text-xs text-zinc-500">
                {availableSubtopics.length} temas disponíveis
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-ink-900 border border-ink-875 space-y-2.5">
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedSubtopic('todos')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all active:scale-95 ${
                    selectedSubtopic === 'todos'
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'bg-ink-850 text-zinc-400 hover:text-zinc-200 border border-ink-800'
                  }`}
                >
                  {selectedSpecialty === 'Pediatria'
                    ? 'Todos os temas de Pediatria'
                    : selectedSpecialty !== 'Todas'
                    ? `Todos os temas de ${selectedSpecialty}`
                    : 'Todos os subtópicos'}
                </button>

                {availableSubtopics.map((sub) => {
                  const isSelected = selectedSubtopic === sub;
                  return (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => setSelectedSubtopic(sub)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all active:scale-95 ${
                        isSelected
                          ? 'bg-red-600 text-white shadow-sm'
                          : 'bg-ink-850 text-zinc-400 hover:text-zinc-200 border border-ink-800'
                      }`}
                    >
                      {sub}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3. Quantidade de Questões */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-red-500" />
              <label className="text-sm font-bold text-white uppercase tracking-wider">
                3. Quantidade de Questões:
              </label>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {(['5', '10', '20', '30', '50', '100', 'todas'] as const).map((count) => {
                const isSelected = questionCountChoice === count;
                const label =
                  count === 'todas'
                    ? `Todas (${availableQuestionsCount})`
                    : `${count} Questões`;
                return (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setQuestionCountChoice(count)}
                    className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold border text-center transition-all active:scale-95 ${
                      isSelected
                        ? 'bg-red-600 border-red-500 text-white shadow-md shadow-red-600/30'
                        : 'bg-ink-900 border-ink-875 text-zinc-300 hover:bg-ink-850 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Resumo e Ação de Iniciar Prova */}
          <div className="p-4 rounded-2xl bg-ink-900/90 border border-ink-875 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs text-zinc-400 block">
                Disponíveis no banco para estes filtros:
              </span>
              <span className="text-lg font-bold text-white">
                {availableQuestionsCount} questão(ões) encontrada(s)
              </span>
              {selectedSpecialty === 'Pediatria' && (
                <span className="text-[11px] text-zinc-400 block mt-0.5">
                  ({questoesJsonRaw.length} questões integradas via questoes.json)
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={handleStartExam}
              disabled={availableQuestionsCount === 0}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-red-600/30 active:scale-95"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Iniciar Prova</span>
            </button>
          </div>

          {/* Modal de Aviso Suave: Questões exclusivas de revisão em elaboração */}
          {showRevisionFallbackModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in safe-top safe-bottom">
              <div className="w-full max-w-md rounded-2xl bg-ink-900 border border-amber-500/30 p-5 sm:p-6 shadow-2xl space-y-4 animate-scale-up">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
                  <AlertTriangle className="w-6 h-6" />
                </div>

                <div className="text-center space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Mentor Inteligente
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                    Questões exclusivas de revisão em elaboração para este tema. Deseja realizar com as questões gerais disponíveis?
                  </p>
                  {pendingRevisionPayload?.theme && (
                    <div className="inline-block mt-2 px-2.5 py-1 rounded-lg bg-ink-850 border border-ink-800 text-[11px] font-bold text-amber-400">
                      Tema: {pendingRevisionPayload.theme}
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 pt-3 border-t border-ink-850">
                  <button
                    type="button"
                    onClick={() => {
                      setShowRevisionFallbackModal(false);
                      setPendingRevisionPayload(null);
                      if (onGoBackToCronograma) {
                        onGoBackToCronograma();
                      } else {
                        setStage('configuracao');
                      }
                    }}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-ink-850 hover:bg-ink-800 text-zinc-300 hover:text-white text-xs font-bold transition-all text-center"
                  >
                    Voltar ao Cronograma
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowRevisionFallbackModal(false);
                      if (pendingRevisionPayload) {
                        startExamWithParams(
                          pendingRevisionPayload.spec,
                          pendingRevisionPayload.theme,
                          '30',
                          false,
                        );
                        setPendingRevisionPayload(null);
                      }
                    }}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-black shadow-lg shadow-red-600/25 transition-all text-center"
                  >
                    Sim, realizar com questões gerais
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER ETAPA 2: PROVA EM ANDAMENTO (MODO SILENCIOSO / SEM SPOILER)
  // ==========================================
  if (stage === 'em_andamento') {
    const currentQ = examQuestions[currentQuestionIndex];
    const totalQ = examQuestions.length;
    const answeredCount = Object.keys(answers).length;
    const currentSelectedLetter = currentQ ? answers[currentQ.id] : undefined;

    return (
      <div className="flex-1 overflow-y-auto pb-32 sm:pb-20 bg-ink-950 text-white font-sans overflow-x-hidden animate-fade-in">
        {/* Barra Superior Fixa / Cabeçalho do Simulado */}
        <div className="sticky top-0 z-20 bg-ink-900/95 backdrop-blur-md border-b border-ink-875 px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3 safe-top">
          {/* Esquerda: Contador de Questão & Respondidas */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-extrabold text-white">
                Questão {currentQuestionIndex + 1}
              </span>
              <span className="text-xs text-zinc-500">de {totalQ}</span>
            </div>

            <span className="hidden sm:inline text-zinc-600">•</span>

            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-ink-850 border border-ink-800 text-zinc-400">
              {answeredCount}/{totalQ} respondidas
            </span>
          </div>

          {/* Centro: Cronômetro de Tempo Livre */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-ink-850 border border-ink-800 text-xs sm:text-sm font-mono font-bold text-zinc-200">
            <Clock className="w-3.5 h-3.5 text-red-500" />
            <span>{formatTimer(elapsedSeconds)}</span>
          </div>

          {/* Direita: Botão MOSTRAR GABARITO (Sempre visível) */}
          <button
            type="button"
            onClick={handlePromptFinish}
            className="px-3 sm:px-4 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm transition-all active:scale-95 shadow-md shadow-red-600/25 flex items-center gap-1.5"
            title="Finalizar Simulado e Ver Gabarito"
          >
            <span>MOSTRAR GABARITO</span>
          </button>
        </div>

        {/* Banner de Revisão Espaçada do Mentor Inteligente */}
        {activeRevision && (
          <div className="bg-gradient-to-r from-red-600/20 via-amber-500/15 to-red-600/20 border-b border-red-500/30 px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-0.5 rounded-md bg-red-600 text-white font-black text-[10px] tracking-wide uppercase shadow-sm">
                {activeRevision.ciclo} ({activeRevision.diasCiclo} dias)
              </span>
              <span className="font-extrabold text-white">
                Mentor Inteligente: {activeRevision.tema}
              </span>
              <span className="text-zinc-400 hidden sm:inline">
                • {activeRevision.especialidade}
              </span>
            </div>
            <span className="text-amber-400 font-semibold text-[11px] shrink-0">
              10 Questões de Fixação
            </span>
          </div>
        )}

        <div className="w-full max-w-4xl mx-auto px-3.5 sm:px-6 py-4 sm:py-6 space-y-4">
          
          {/* Grade Numérica de Questões (Navegação Rápida) */}
          <div className="p-2.5 rounded-2xl bg-ink-900 border border-ink-875">
            <div className="flex items-center justify-between pb-1.5 px-1 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              <span>Navegação Rápida:</span>
              <span>Toque no número para saltar</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {examQuestions.map((q, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const isAnswered = !!answers[q.id];

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all active:scale-95 flex items-center justify-center ${
                      isCurrent
                        ? 'bg-red-600 text-white ring-2 ring-red-400 ring-offset-2 ring-offset-ink-900'
                        : isAnswered
                        ? 'bg-zinc-700 text-white border border-zinc-500'
                        : 'bg-ink-850 text-zinc-400 border border-ink-800 hover:text-white'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card da Questão Atual */}
          {currentQ && (
            <div className="rounded-2xl border border-ink-875 bg-ink-900 p-4 sm:p-6 shadow-xl space-y-4">
              
              {/* Metadados da Questão */}
              <div className="flex items-center justify-between gap-2 flex-wrap pb-2 border-b border-ink-875 text-xs">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-md font-bold text-[11px] bg-red-600/15 text-red-400 border border-red-600/30">
                    {currentQ.specialty}
                  </span>

                  {currentQ.institution && (
                    <span className="px-2 py-0.5 rounded-md font-bold text-[11px] bg-ink-850 text-zinc-300 border border-ink-800">
                      {currentQ.institution} {currentQ.year}
                    </span>
                  )}

                  <span className="text-zinc-400 font-medium">
                    {currentQ.topic} {currentQ.subtopic ? `• ${currentQ.subtopic}` : ''}
                  </span>
                </div>

                <div className="text-[11px] text-zinc-500 font-mono">
                  {currentSelectedLetter ? 'Respondida' : 'Em branco'}
                </div>
              </div>

              {/* Enunciado do Caso Clínico */}
              <p className="text-sm sm:text-base text-zinc-100 leading-relaxed font-medium">
                {currentQ.statement}
              </p>

              {/* Alternativas A, B, C, D (Destaque Neutro Silencioso) */}
              <div className="space-y-2.5 pt-2">
                {currentQ.options.map((opt) => {
                  const isSelected = currentSelectedLetter === opt.letter;

                  return (
                    <button
                      key={opt.letter}
                      type="button"
                      onClick={() => handleSelectAnswer(opt.letter)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border flex items-start gap-3 transition-all active:scale-[0.99] ${
                        isSelected
                          ? 'bg-zinc-800 border-zinc-400 text-white shadow-md ring-1 ring-zinc-400/50'
                          : 'bg-ink-850/80 border-ink-800 text-zinc-300 hover:bg-ink-800 hover:border-zinc-700'
                      }`}
                    >
                      {/* Letra da Alternativa */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-zinc-100 border-white text-zinc-950 font-black'
                            : 'bg-ink-900 border-ink-700 text-zinc-300'
                        }`}
                      >
                        {opt.letter}
                      </div>

                      {/* Texto da Alternativa */}
                      <div className="flex-1 text-xs sm:text-sm leading-relaxed self-center">
                        {opt.text}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Botões de Navegação Anterior e Próxima */}
              <div className="flex items-center justify-between gap-3 pt-3 border-t border-ink-875">
                <button
                  type="button"
                  onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentQuestionIndex === 0}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-ink-850 hover:bg-ink-800 border border-ink-800 disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm font-semibold text-zinc-200 flex items-center justify-center gap-1.5 transition-all active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <div className="text-xs text-zinc-500 font-semibold hidden sm:block">
                  Questão {currentQuestionIndex + 1} de {totalQ}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setCurrentQuestionIndex((prev) => Math.min(totalQ - 1, prev + 1))
                  }
                  disabled={currentQuestionIndex === totalQ - 1}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-ink-850 hover:bg-ink-800 border border-ink-800 disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm font-semibold text-zinc-200 flex items-center justify-center gap-1.5 transition-all active:scale-95"
                >
                  <span>Próxima</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* Modal de Confirmação para Finalizar com Questões em Branco */}
          {showConfirmFinishModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in safe-top safe-bottom">
              <div className="w-full max-w-md rounded-2xl bg-ink-900 border border-ink-850 p-5 sm:p-6 shadow-2xl space-y-4 animate-scale-up">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
                  <AlertTriangle className="w-6 h-6" />
                </div>

                <div className="text-center space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Finalizar e Ver Gabarito?
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Você respondeu <strong className="text-white">{answeredCount}</strong> de{' '}
                    <strong className="text-white">{totalQ}</strong> questões. Restam{' '}
                    <strong className="text-amber-400">{totalQ - answeredCount}</strong> em branco.
                  </p>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowConfirmFinishModal(false)}
                    className="flex-1 py-2.5 rounded-xl bg-ink-850 border border-ink-800 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white"
                  >
                    Continuar Respondendo
                  </button>

                  <button
                    type="button"
                    onClick={finishExam}
                    className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-red-600/30"
                  >
                    Sim, Ver Gabarito
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER ETAPA 3: GABARITO E CORREÇÃO DETALHADA
  // ==========================================
  return (
    <div className="flex-1 overflow-y-auto pb-32 sm:pb-20 bg-ink-950 text-white font-sans overflow-x-hidden animate-fade-in">
      <div className="w-full max-w-4xl mx-auto px-3.5 sm:px-6 py-4 sm:py-8 space-y-6">
        
        {/* Banner Celebratório do Mentor Inteligente se ciclo foi concluído */}
        {revisionCompletionMessage && (
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/90 via-ink-900 to-ink-950 border border-emerald-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-scale-up">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase text-emerald-400 tracking-wider">
                  Mentor SantiSOFT • Repetição Espaçada
                </span>
                <h3 className="text-base font-extrabold text-white">
                  {revisionCompletionMessage}
                </h3>
                <p className="text-xs text-zinc-300 mt-0.5">
                  O tema <strong className="text-emerald-300">{activeRevision?.tema}</strong> foi concluído neste ciclo e removido das pendências de hoje.
                </p>
              </div>
            </div>

            {onGoBackToCronograma && (
              <button
                type="button"
                onClick={onGoBackToCronograma}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shrink-0 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-95 transition-all"
              >
                <span>Voltar ao Cronograma / Mentor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Card de Desempenho no Topo */}
        <div className="rounded-2xl border border-ink-875 bg-gradient-to-br from-ink-900 via-ink-925 to-ink-950 p-5 sm:p-6 shadow-2xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ink-875 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 border border-emerald-600/30 flex items-center justify-center text-emerald-400 shadow-lg shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                  Simulado Concluído
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  Resultado e Gabarito
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setStage('configuracao')}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5"
              >
                <ArrowRight className="w-4 h-4" />
                <span>Criar Novo Simulado</span>
              </button>
            </div>
          </div>

          {/* Indicadores Numéricos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Aproveitamento */}
            <div className="p-3.5 rounded-xl bg-ink-900 border border-ink-875 text-center">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                Aproveitamento
              </span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums">
                {examStats.percentage}%
              </span>
            </div>

            {/* Acertos */}
            <div className="p-3.5 rounded-xl bg-ink-900 border border-ink-875 text-center">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                Acertos
              </span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums">
                {examStats.correct}
                <span className="text-xs text-zinc-500 font-normal">/{examStats.total}</span>
              </span>
            </div>

            {/* Erros */}
            <div className="p-3.5 rounded-xl bg-ink-900 border border-ink-875 text-center">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                Erros
              </span>
              <span className="text-2xl sm:text-3xl font-black text-red-400 tabular-nums">
                {examStats.wrong}
              </span>
            </div>

            {/* Tempo Gasto */}
            <div className="p-3.5 rounded-xl bg-ink-900 border border-ink-875 text-center">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                Tempo Gasto
              </span>
              <span className="text-2xl sm:text-3xl font-black text-zinc-200 font-mono tabular-nums">
                {formatTimer(elapsedSeconds)}
              </span>
            </div>
          </div>

          {/* Feedback Clínico Motivacional */}
          <div className="p-3 rounded-xl bg-ink-850/80 border border-ink-800 flex items-center justify-between gap-3 text-xs sm:text-sm">
            <span className="text-zinc-300">
              {examStats.percentage >= 80 ? (
                <>🎉 <strong>Excelente resultado!</strong> Desempenho com margem folgada para aprovação nas principais bancas.</>
              ) : examStats.percentage >= 60 ? (
                <>👍 <strong>Bom rendimento!</strong> Revise com atenção os comentários dos itens que você errou.</>
              ) : (
                <>⚠️ <strong>Atenção aos pontos fracos!</strong> Aproveite o comentário detalhado do professor para sedimentar os conceitos.</>
              )}
            </span>

            <button
              type="button"
              onClick={toggleAllComments}
              className="text-red-400 hover:text-red-300 font-bold whitespace-nowrap text-xs underline decoration-red-500/50"
            >
              {expandedComments.size === examQuestions.length
                ? 'Recolher Comentários'
                : 'Expandir Todos'}
            </button>
          </div>
        </div>

        {/* Lista com a Correção Detalhada de Cada Questão */}
        <div className="space-y-5">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-zinc-300">
              Correção Questão por Questão ({examQuestions.length}):
            </h3>
          </div>

          {examQuestions.map((q, idx) => {
            const chosenLetter = answers[q.id];
            const isAnswered = !!chosenLetter;
            const isCorrect = isAnswered && chosenLetter === q.correctOption;
            const isCommentsOpen = expandedComments.has(q.id);

            return (
              <div
                key={q.id}
                className={`rounded-2xl border p-4 sm:p-6 transition-all shadow-xl space-y-4 ${
                  !isAnswered
                    ? 'bg-ink-900 border-zinc-700/60'
                    : isCorrect
                    ? 'bg-emerald-950/15 border-emerald-500/50'
                    : 'bg-red-950/15 border-red-500/50'
                }`}
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-ink-875 text-xs">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-zinc-500 font-bold">
                      #{idx + 1}
                    </span>

                    <span className="px-2.5 py-0.5 rounded-md font-bold text-[11px] bg-red-600/15 text-red-400 border border-red-600/30">
                      {q.specialty}
                    </span>

                    {q.institution && (
                      <span className="px-2 py-0.5 rounded-md font-bold text-[11px] bg-ink-850 text-zinc-300 border border-ink-800">
                        {q.institution} {q.year}
                      </span>
                    )}

                    <span className="text-zinc-400 font-medium">
                      {q.topic} {q.subtopic ? `• ${q.subtopic}` : ''}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div>
                    {!isAnswered ? (
                      <span className="px-2.5 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-400 font-bold text-xs">
                        Não respondida
                      </span>
                    ) : isCorrect ? (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 font-bold text-xs">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Acertou!</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-950/60 border border-red-600/60 text-red-400 font-bold text-xs">
                        <XCircle className="w-4 h-4" />
                        <span>Errou</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Enunciado */}
                <p className="text-sm sm:text-base text-zinc-100 leading-relaxed font-medium">
                  {q.statement}
                </p>

                {/* Alternativas com Gabarito Colorido (VERDE / VERMELHO) */}
                <div className="space-y-2.5 pt-1">
                  {q.options.map((opt) => {
                    const isSelected = chosenLetter === opt.letter;
                    const isThisCorrect = opt.letter === q.correctOption;

                    let optionStyle = 'bg-ink-850/40 border-ink-875/60 text-zinc-400 opacity-60';
                    let letterBadgeStyle = 'bg-ink-900 border-ink-800 text-zinc-500';

                    if (isThisCorrect) {
                      // Correta -> Sempre VERDE
                      optionStyle =
                        'bg-emerald-950/60 border-emerald-500/90 text-emerald-100 font-semibold shadow-md shadow-emerald-950/30 ring-1 ring-emerald-500/50';
                      letterBadgeStyle =
                        'bg-emerald-600 border-emerald-400 text-white font-black';
                    } else if (isSelected && !isCorrect) {
                      // Aluno marcou incorretamente -> VERMELHO
                      optionStyle =
                        'bg-red-950/60 border-red-500/90 text-red-100 font-semibold shadow-md shadow-red-950/30 ring-1 ring-red-500/50';
                      letterBadgeStyle =
                        'bg-red-600 border-red-400 text-white font-black';
                    }

                    return (
                      <div
                        key={opt.letter}
                        className={`w-full text-left p-3.5 sm:p-4 rounded-xl border flex items-start gap-3 transition-all ${optionStyle}`}
                      >
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 ${letterBadgeStyle}`}
                        >
                          {opt.letter}
                        </div>

                        <div className="flex-1 text-xs sm:text-sm leading-relaxed self-center">
                          {opt.text}
                        </div>

                        <div className="shrink-0 self-center">
                          {isThisCorrect && (
                            <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 uppercase">
                              <CheckCircle2 className="w-4 h-4" />
                              <span className="hidden sm:inline">Gabarito</span>
                            </span>
                          )}
                          {isSelected && !isThisCorrect && (
                            <span className="flex items-center gap-1 text-[11px] font-bold text-red-400 uppercase">
                              <XCircle className="w-4 h-4" />
                              <span className="hidden sm:inline">Sua Escolha</span>
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Botão Retrátil: Comentário da Questão */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => toggleComment(q.id)}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-ink-850/90 hover:bg-ink-800 border border-ink-800 text-xs sm:text-sm font-bold text-zinc-200 transition-all active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-500" />
                      <span>Comentário da Questão &amp; Explicação do Professor</span>
                    </div>
                    {isCommentsOpen ? (
                      <ChevronUp className="w-4 h-4 text-zinc-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-zinc-400" />
                    )}
                  </button>

                  {/* Conteúdo Expansível do Comentário */}
                  {isCommentsOpen && (
                    <div className="mt-2.5 p-4 rounded-xl bg-ink-950/90 border border-ink-850 space-y-4 animate-fade-in text-xs sm:text-sm">
                      {/* Raciocínio Clínico Geral */}
                      <div>
                        <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                          Raciocínio Clínico Geral
                        </span>
                        <p className="text-zinc-300 leading-relaxed">
                          {q.generalComment}
                        </p>
                      </div>

                      {/* Análise de Cada Alternativa */}
                      <div className="space-y-2 pt-2 border-t border-ink-875">
                        <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                          Justificativa de Cada Alternativa:
                        </span>
                        <div className="space-y-2">
                          {q.optionsExplanations.map((exp) => (
                            <div
                              key={exp.letter}
                              className={`p-3 rounded-lg border leading-relaxed ${
                                exp.isCorrect
                                  ? 'bg-emerald-950/40 border-emerald-600/40 text-emerald-200'
                                  : 'bg-ink-900 border-ink-850 text-zinc-400'
                              }`}
                            >
                              <strong
                                className={`mr-1 font-bold ${
                                  exp.isCorrect ? 'text-emerald-400' : 'text-zinc-300'
                                }`}
                              >
                                Alternativa {exp.letter}:
                              </strong>{' '}
                              <span>{exp.explanation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Rodapé de Ações */}
        <div className="p-4 rounded-2xl bg-ink-900 border border-ink-875 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            {onGoBackToCronograma && (
              <button
                type="button"
                onClick={onGoBackToCronograma}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-ink-800 hover:bg-ink-750 border border-ink-700 text-xs sm:text-sm font-bold text-white transition-all flex items-center justify-center gap-2"
              >
                <span>Voltar ao Cronograma</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                setAnswers({});
                setElapsedSeconds(0);
                setIsTimerRunning(true);
                setCurrentQuestionIndex(0);
                setStage('em_andamento');
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-ink-850 hover:bg-ink-800 border border-ink-800 text-xs sm:text-sm font-bold text-zinc-200 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Refazer Este Simulado</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setActiveRevision(null);
              setRevisionCompletionMessage(null);
              if (onClearRevision) onClearRevision();
              setStage('configuracao');
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Criar Novo Simulado</span>
          </button>
        </div>

      </div>
    </div>
  );
}
