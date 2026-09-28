import { useState, useMemo, useEffect, useRef } from 'react';
import {
  BookOpen,
  Play,
  CheckCircle2,
  XCircle,
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
  Check,
  RefreshCw,
} from 'lucide-react';
import { questoesData } from '@/data/questoes';
import { concluirCicloRevisao } from '@/services/mentorService';
import type { Question } from '@/types';

export type ScreenStage = 'navegacao_banco' | 'em_andamento' | 'resultado_gabarito';

export type SpecialtySelection =
  | 'Pediatria'
  | 'Clínica Médica'
  | 'Cirurgia'
  | 'Ginecologia e Obstetrícia'
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

function normalizeStr(str: string): string {
  return (str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

interface SubtemaItem {
  id: string;
  label: string;
  matches: (q: Question) => boolean;
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
    id: 'Pediatria',
    label: 'Pediatria',
    shortLabel: 'Pediatria',
    iconBg: 'bg-amber-950/60',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-800/50',
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
    id: 'Ginecologia e Obstetrícia',
    label: 'Ginecologia e Obstetrícia',
    shortLabel: 'G.O.',
    iconBg: 'bg-purple-950/60',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-800/50',
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

// Mapeamento estrito dos subtemas por Grande Área (Nível 2)
const SUBTEMAS_POR_AREA: Record<SpecialtySelection, SubtemaItem[]> = {
  Pediatria: [
    {
      id: 'doencas_exantematicas',
      label: 'Doenças Exantemáticas',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return top === 'doencas exantematicas' || sub === 'doencas exantematicas' || top.includes('exantema');
      },
    },
    {
      id: 'itu_pediatrico',
      label: 'Infecção do Trato Urinário',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return (
          top === 'itu pediatrico' ||
          sub === 'infeccao do trato urinario' ||
          top === 'infeccao do trato urinario' ||
          top.includes('urinario')
        );
      },
    },
    {
      id: 'neonatologia_1',
      label: 'Neonatologia I (Icterícia e Reanimação)',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        return (
          top.includes('neonatologia i ') ||
          top.includes('ictericia neonatal e reanimacao') ||
          (top.startsWith('neonatologia') && !top.includes('ii'))
        );
      },
    },
    {
      id: 'neonatologia_2',
      label: 'Neonatologia II (Infecções Congênitas e Distúrbios Respiratórios)',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        return top.includes('neonatologia ii ') || top.includes('infeccoes congenitas');
      },
    },
    {
      id: 'puberdade',
      label: 'Puberdade e seus Distúrbios',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return top === 'puberdade e seus disturbios' || sub === 'puberdade e seus disturbios' || top.includes('puberdade');
      },
    },
    {
      id: 'imunizacoes',
      label: 'Imunizações',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return top.startsWith('imunizac') || sub.startsWith('imunizac');
      },
    },
    {
      id: 'gastro_pediatrica',
      label: 'Doenças Gastrointestinais',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        return top === 'doencas gastrointestinais' || top.includes('gastrointestinal') || top.includes('diarreia aguda');
      },
    },
    {
      id: 'ira_baixa',
      label: 'Infecções Respiratórias Inferiores (IRA Baixa)',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        return (
          top === 'infeccoes respiratorias inferiores' ||
          top === 'ira infeccoes de vias aereas inferiores' ||
          top.includes('respiratorias inferiores') ||
          top.includes('ira baixa')
        );
      },
    },
    {
      id: 'ira_estridor',
      label: 'IRA com Estridor',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        return top === 'ira com estridor' || top.includes('estridor');
      },
    },
    {
      id: 'ira_ivas',
      label: 'IRA Infecções de Vias Aéreas Superiores (IVAS)',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        return top === 'ira infeccoes de vias aereas superiores' || top.includes('vias aereas superiores') || top.includes('ivas');
      },
    },
    {
      id: 'cardio_pediatrica',
      label: 'Cardiologia Pediátrica',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return top === 'cardiologia pediatrica' || sub === 'cardiologia pediatrica';
      },
    },
    {
      id: 'crescimento',
      label: 'Crescimento e seus Distúrbios',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        return top.includes('crescimento');
      },
    },
    {
      id: 'aleitamento',
      label: 'Aleitamento Materno',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        return top.includes('aleitamento');
      },
    },
    {
      id: 'infecto_ped',
      label: 'Infectologia Pediátrica',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        return top.includes('infectologia');
      },
    },
  ],
  'Clínica Médica': [
    {
      id: 'cm_cardiologia',
      label: 'Cardiologia',
      matches: (q) => normalizeStr(q.topic).includes('cardio'),
    },
    {
      id: 'cm_endocrinologia',
      label: 'Endocrinologia',
      matches: (q) => normalizeStr(q.topic).includes('endocrino'),
    },
    {
      id: 'cm_pneumologia',
      label: 'Pneumologia',
      matches: (q) => normalizeStr(q.topic).includes('pneumo'),
    },
    {
      id: 'cm_gastroenterologia',
      label: 'Gastroenterologia',
      matches: (q) => normalizeStr(q.topic).includes('gastro'),
    },
    {
      id: 'cm_nefrologia',
      label: 'Nefrologia',
      matches: (q) => normalizeStr(q.topic).includes('nefro'),
    },
    {
      id: 'cm_infectologia',
      label: 'Infectologia',
      matches: (q) => normalizeStr(q.topic).includes('infecto'),
    },
    {
      id: 'cm_hematologia',
      label: 'Hematologia',
      matches: (q) => normalizeStr(q.topic).includes('hemato'),
    },
    {
      id: 'cm_neurologia',
      label: 'Neurologia',
      matches: (q) => normalizeStr(q.topic).includes('neuro'),
    },
    {
      id: 'cm_reumatologia',
      label: 'Reumatologia',
      matches: (q) => normalizeStr(q.topic).includes('reumato'),
    },
  ],
  Cirurgia: [
    {
      id: 'cir_abdome_agudo',
      label: 'Abdome Agudo',
      matches: (q) => normalizeStr(q.topic) === 'abdome agudo' || normalizeStr(q.topic).includes('abdome agudo'),
    },
    {
      id: 'cir_trauma',
      label: 'Trauma',
      matches: (q) => normalizeStr(q.topic) === 'trauma' || normalizeStr(q.topic).includes('trauma'),
    },
    {
      id: 'cir_digestivo',
      label: 'Cirurgia do Aparelho Digestivo',
      matches: (q) => normalizeStr(q.topic).includes('digestivo'),
    },
    {
      id: 'cir_urologia',
      label: 'Urologia',
      matches: (q) => normalizeStr(q.topic).includes('urologia'),
    },
    {
      id: 'cir_vascular',
      label: 'Cirurgia Vascular',
      matches: (q) => normalizeStr(q.topic).includes('vascular'),
    },
    {
      id: 'cir_hernias',
      label: 'Hérnias da Parede Abdominal',
      matches: (q) => normalizeStr(q.topic).includes('hernia'),
    },
    {
      id: 'cir_plastica_queimaduras',
      label: 'Queimaduras e Cirurgia Plástica',
      matches: (q) => normalizeStr(q.topic).includes('queimadura') || normalizeStr(q.topic).includes('plastica'),
    },
  ],
  'Ginecologia e Obstetrícia': [
    {
      id: 'go_diag_gravidez',
      label: 'Diagnósticos de Gravidez e Modificações do Organismo',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return (
          top === 'diagnosticos de gravidez e modificacoes do organismo' ||
          (top.includes('modificacoes') && top.includes('organismo')) ||
          (top.includes('diagnostico') && top.includes('gravidez')) ||
          sub.includes('modificacoes do organismo')
        );
      },
    },
    {
      id: 'go_prenatal_estatica',
      label: 'Pré-natal, Estática Fetal e Indução de Parto',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return (
          top === 'pre natal estatica fetal e inducao de parto' ||
          top === 'pre natal e parto' ||
          top.includes('estatica fetal') ||
          top.includes('inducao') ||
          sub.includes('estatica fetal') ||
          (top.includes('pre natal') && !top.includes('modificacoes'))
        );
      },
    },
    {
      id: 'go_parto_prematuridade',
      label: 'Parto e Prematuridade',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return (
          top === 'parto e prematuridade' ||
          sub === 'parto e prematuridade' ||
          top.includes('prematuridade') ||
          (top.includes('parto') && !top.includes('inducao') && !top.includes('pre natal'))
        );
      },
    },
    {
      id: 'go_hemorragias_1',
      label: 'Hemorragias na Primeira Metade',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return (
          top === 'hemorragias na primeira metade' ||
          (top.includes('hemorragia') && top.includes('primeira')) ||
          (sub.includes('hemorragia') && sub.includes('primeira')) ||
          top.includes('abortamento') ||
          top.includes('ectopica')
        );
      },
    },
    {
      id: 'go_hemorragias_2',
      label: 'Hemorragias na Segunda Metade e DHP',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return (
          top === 'hemorragias na segunda metade e dhp' ||
          top === 'hemorragias da segunda metade da gravidez' ||
          (top.includes('hemorragia') && top.includes('segunda')) ||
          (sub.includes('hemorragia') && sub.includes('segunda')) ||
          top.includes('dhp') ||
          sub.includes('dhp') ||
          sub.includes('placenta previa') ||
          sub.includes('descolamento prematuro')
        );
      },
    },
    {
      id: 'go_doencas_clinicas',
      label: 'Doenças Clínicas da Gestação',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return (
          top === 'doencas clinicas da gestacao' ||
          top.includes('doencas clinicas') ||
          sub.includes('doencas clinicas') ||
          top.includes('dheg') ||
          top.includes('diabetes gestacional')
        );
      },
    },
    {
      id: 'go_sofrimento_fetal',
      label: 'Sofrimento Fetal',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return (
          top === 'sofrimento fetal' ||
          top.includes('sofrimento fetal') ||
          sub.includes('sofrimento fetal') ||
          top.includes('cardiotocografia')
        );
      },
    },
    {
      id: 'go_forcipe_puerperal',
      label: 'Fórcipe, Endometrite e Hemorragia Puerperal',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return (
          top === 'forceps endometrite e hemorragia puerperal' ||
          top === 'forcipe endometrite e hemorragia puerperal' ||
          top.includes('forcip') ||
          top.includes('forceps') ||
          top.includes('endometrite') ||
          top.includes('puerperal') ||
          sub.includes('puerperal')
        );
      },
    },
    {
      id: 'go_anticoncepcao',
      label: 'Anticoncepção',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return (
          top === 'anticoncepcao' ||
          top.includes('anticoncepcao') ||
          top.includes('contracepcao') ||
          sub.includes('anticoncepcao') ||
          sub.includes('contracepcao')
        );
      },
    },
    {
      id: 'go_endocrino_infertilidade',
      label: 'Endocrinoginecologia e Infertilidade',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return (
          top === 'endocrinoginecologia e infertilidade' ||
          top.includes('endocrinoginecologia') ||
          (top.includes('infertilidade') && !top.includes('endometriose')) ||
          sub.includes('endocrinoginecologia')
        );
      },
    },
    {
      id: 'go_neoplasias',
      label: 'Neoplasias Ginecológicas',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return (
          top === 'neoplasias ginecologicas' ||
          top === 'oncologia ginecologica' ||
          top.includes('neoplasia') ||
          top.includes('cancer de colo') ||
          sub.includes('cancer de colo') ||
          sub.includes('lesoes precursoras') ||
          top.includes('colo uterino')
        );
      },
    },
    {
      id: 'go_sua_endometriose',
      label: 'Sangramento Uterino Anormal e Endometriose',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return (
          top === 'sangramento uterino anormal e endometriose' ||
          top.includes('sangramento uterino anormal') ||
          top.includes('endometriose') ||
          sub.includes('sangramento uterino') ||
          sub.includes('endometriose')
        );
      },
    },
    {
      id: 'go_uroginecologia',
      label: 'Uroginecologia - Incontinência e Prolapso',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return (
          top === 'uroginecologia incontinencia e prolapso' ||
          top.includes('uroginecologia') ||
          top.includes('incontinencia') ||
          top.includes('prolapso') ||
          sub.includes('uroginecologia')
        );
      },
    },
    {
      id: 'go_ist',
      label: 'IST (Infecções Sexualmente Transmissíveis)',
      matches: (q) => {
        const top = normalizeStr(q.topic);
        const sub = normalizeStr(q.subtopic || '');
        return (
          top === 'ist infeccoes sexualmente transmissiveis' ||
          top.includes('sexualmente transmissiveis') ||
          top === 'ist' ||
          sub.includes('ist') ||
          top.includes('vulvovaginite') ||
          sub.includes('vulvovaginite')
        );
      },
    },
  ],
  Preventiva: [
    {
      id: 'prev_epidemiologia',
      label: 'Epidemiologia',
      matches: (q) => normalizeStr(q.topic).includes('epidemiologia'),
    },
    {
      id: 'prev_sus',
      label: 'SUS e Saúde Coletiva',
      matches: (q) => normalizeStr(q.topic).includes('sus') || normalizeStr(q.topic).includes('saude coletiva'),
    },
    {
      id: 'prev_mbe',
      label: 'Medicina Baseada em Evidências',
      matches: (q) => normalizeStr(q.topic).includes('evidencia') || normalizeStr(q.topic).includes('mbe'),
    },
    {
      id: 'prev_vigilancia',
      label: 'Vigilância em Saúde',
      matches: (q) => normalizeStr(q.topic).includes('vigilancia'),
    },
    {
      id: 'prev_trabalhador_etica',
      label: 'Saúde do Trabalhador e Ética Médica',
      matches: (q) => normalizeStr(q.topic).includes('trabalhador') || normalizeStr(q.topic).includes('etica'),
    },
  ],
};

const QUESTIONS_PER_PAGE = 10;

export function QuestoesScreen({
  initialRevision,
  onClearRevision,
  onGoBackToCronograma,
}: QuestoesScreenProps = {}) {
  // Etapa Atual da Tela
  const [stage, setStage] = useState<ScreenStage>('navegacao_banco');
  const [activeRevision, setActiveRevision] = useState<RevisionExamConfig | null>(
    initialRevision || null,
  );
  const [revisionCompletionMessage, setRevisionCompletionMessage] = useState<string | null>(null);

  // --- NAVEGAÇÃO EM 2 NÍVEIS (Estrita) ---
  // Nível 1: Grande Área (Inicia null: não exibe questões até que Área e Tema estejam escolhidos)
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtySelection | null>(null);
  // Nível 2: Subtema específico (Inicia null)
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);

  // Filtro de status de resolução no modo prática (Todas, Não Respondidas, Acertos, Erros)
  const [practiceStatusFilter, setPracticeStatusFilter] = useState<'todas' | 'pendentes' | 'acertos' | 'erros'>('todas');
  // Página atual na visualização das questões
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Respostas interativas em tempo real no Banco Livre { [questionId]: 'A' | 'B' | ... }
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>>({});
  // Comentários expandidos individualmente { [questionId]: boolean }
  const [expandedComments, setExpandedComments] = useState<Set<string>>(() => new Set());

  // --- ESTADO DO MODO SIMULADO / EXAME CRONOMETRADO ---
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentExamIndex, setCurrentExamIndex] = useState(0);
  const [examAnswers, setExamAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>>({});
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showConfirmFinishModal, setShowConfirmFinishModal] = useState(false);
  const [showSimuladoModal, setShowSimuladoModal] = useState(false);
  const [simuladoCountChoice, setSimuladoCountChoice] = useState<'10' | '20' | '30' | '50' | 'todas'>('20');
  const [showRevisionFallbackModal, setShowRevisionFallbackModal] = useState(false);
  const [pendingRevisionPayload, setPendingRevisionPayload] = useState<{
    spec: SpecialtySelection;
    theme: string;
  } | null>(null);

  // Subtemas disponíveis para a Grande Área atualmente selecionada
  const availableSubtopics = useMemo<SubtemaItem[]>(() => {
    if (!selectedSpecialty) return [];
    return SUBTEMAS_POR_AREA[selectedSpecialty] || [];
  }, [selectedSpecialty]);

  // Contagem estrita de questões por subtema (para exibir nos botões do Nível 2)
  const subtopicCounts = useMemo<Record<string, number>>(() => {
    if (!selectedSpecialty) return {};
    const subtopics = SUBTEMAS_POR_AREA[selectedSpecialty] || [];
    const counts: Record<string, number> = {};

    const baseQuestions = questoesData.filter((q) => {
      if (q.isRevisao === true) return false;
      return q.specialty === selectedSpecialty;
    });

    for (const sub of subtopics) {
      counts[sub.label] = baseQuestions.filter((q) => sub.matches(q)).length;
    }

    return counts;
  }, [selectedSpecialty]);

  // Ao trocar de Grande Área, reseta o Subtema e página
  const handleSelectSpecialty = (spec: SpecialtySelection) => {
    setSelectedSpecialty(spec);
    setSelectedSubtopic(null);
    setCurrentPage(1);
    setPracticeStatusFilter('todas');
  };

  // Ao selecionar um Subtema, reseta a página
  const handleSelectSubtopic = (subtemaLabel: string) => {
    setSelectedSubtopic(subtemaLabel);
    setCurrentPage(1);
    setPracticeStatusFilter('todas');
  };

  // --- FILTRO ESTRITO DAS QUESTÕES DO TEMA SELECIONADO ---
  // Ao selecionar um Subtema, renderiza EXCLUSIVAMENTE as questões daquele tema exato
  // com separação de isRevisao: false para o banco livre
  const filteredQuestions = useMemo<Question[]>(() => {
    if (!selectedSpecialty || !selectedSubtopic) return [];

    const activeSub = availableSubtopics.find((s) => s.label === selectedSubtopic);

    return questoesData.filter((q) => {
      // 1. Manter separação de isRevisao: false para o banco livre
      if (q.isRevisao === true) return false;

      // 2. Mesma especialidade
      if (q.specialty !== selectedSpecialty) return false;

      // 3. Filtro Estrito: normalização com trim e toLowerCase para evitar discrepâncias
      if (activeSub) {
        return activeSub.matches(q);
      }

      const needle = normalizeStr(selectedSubtopic);
      const top = normalizeStr(q.topic);
      const sub = normalizeStr(q.subtopic || '');
      return top === needle || sub === needle;
    });
  }, [selectedSpecialty, selectedSubtopic, availableSubtopics]);

  // Questões filtradas pelo status no banco livre (Todas / Pendentes / Acertos / Erros)
  const displayedQuestions = useMemo(() => {
    if (practiceStatusFilter === 'todas') return filteredQuestions;

    return filteredQuestions.filter((q) => {
      const ans = practiceAnswers[q.id];
      if (practiceStatusFilter === 'pendentes') return !ans;
      if (practiceStatusFilter === 'acertos') return ans === q.correctOption;
      if (practiceStatusFilter === 'erros') return ans && ans !== q.correctOption;
      return true;
    });
  }, [filteredQuestions, practiceStatusFilter, practiceAnswers]);

  // Paginação
  const totalPages = Math.max(1, Math.ceil(displayedQuestions.length / QUESTIONS_PER_PAGE));
  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * QUESTIONS_PER_PAGE;
    return displayedQuestions.slice(start, start + QUESTIONS_PER_PAGE);
  }, [displayedQuestions, currentPage]);

  // Estatísticas do tema atual
  const themeStats = useMemo(() => {
    const total = filteredQuestions.length;
    let answered = 0;
    let correct = 0;
    let wrong = 0;

    for (const q of filteredQuestions) {
      const ans = practiceAnswers[q.id];
      if (ans) {
        answered++;
        if (ans === q.correctOption) correct++;
        else wrong++;
      }
    }

    const percentage = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    return { total, answered, correct, wrong, percentage };
  }, [filteredQuestions, practiceAnswers]);

  // Timer effect para modo simulado
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
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  // Integração com initialRevision do Mentor Inteligente
  useEffect(() => {
    if (initialRevision) {
      setActiveRevision(initialRevision);
      const spec = (initialRevision.especialidade as SpecialtySelection) || 'Pediatria';
      setSelectedSpecialty(spec);
      setSelectedSubtopic(initialRevision.tema);

      if (initialRevision.autoStart) {
        const needle = normalizeStr(initialRevision.tema);
        const revisionPool = questoesData.filter((q) => {
          if (q.isRevisao !== true) return false;
          if (q.specialty !== spec) return false;
          const top = normalizeStr(q.topic);
          const sub = normalizeStr(q.subtopic || '');
          return top === needle || sub === needle || top.includes(needle) || needle.includes(top);
        });

        if (revisionPool.length >= 10) {
          startSimuladoWithPool(revisionPool.slice(0, 30));
        } else {
          setPendingRevisionPayload({ spec, theme: initialRevision.tema });
          setShowRevisionFallbackModal(true);
        }
      }
    }
  }, [initialRevision]);

  const handleBackToBanco = () => {
    setActiveRevision(null);
    setRevisionCompletionMessage(null);
    onClearRevision?.();
    setStage('navegacao_banco');
  };

  // Resposta em tempo real no Banco Livre
  const handleSelectPracticeAnswer = (questionId: string, letter: 'A' | 'B' | 'C' | 'D' | 'E') => {
    setPracticeAnswers((prev) => ({
      ...prev,
      [questionId]: letter,
    }));
    // Abre automaticamente o comentário da questão ao responder
    setExpandedComments((prev) => {
      const next = new Set(prev);
      next.add(questionId);
      return next;
    });
  };

  const toggleComment = (questionId: string) => {
    setExpandedComments((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) next.delete(questionId);
      else next.add(questionId);
      return next;
    });
  };

  const resetThemeAnswers = () => {
    if (window.confirm('Deseja limpar as respostas gravadas para este tema?')) {
      setPracticeAnswers((prev) => {
        const next = { ...prev };
        for (const q of filteredQuestions) {
          delete next[q.id];
        }
        return next;
      });
      setExpandedComments(new Set());
    }
  };

  // Iniciar Simulado Formal Cronometrado
  const startSimuladoWithPool = (pool: Question[]) => {
    if (pool.length === 0) return;
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    setExamQuestions(shuffled);
    setCurrentExamIndex(0);
    setExamAnswers({});
    setElapsedSeconds(0);
    setIsTimerRunning(true);
    setStage('em_andamento');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartSimuladoFromTheme = () => {
    if (filteredQuestions.length === 0) return;
    let count = filteredQuestions.length;
    if (simuladoCountChoice !== 'todas') {
      const target = parseInt(simuladoCountChoice, 10);
      count = Math.min(filteredQuestions.length, target);
    }
    const pool = [...filteredQuestions].sort(() => 0.5 - Math.random()).slice(0, count);
    setShowSimuladoModal(false);
    startSimuladoWithPool(pool);
  };

  const handlePromptFinishExam = () => {
    const total = examQuestions.length;
    const answeredCount = Object.keys(examAnswers).length;
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

    if (activeRevision) {
      let correct = 0;
      for (const q of examQuestions) {
        if (examAnswers[q.id] === q.correctOption) {
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

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const examStats = useMemo(() => {
    if (stage !== 'resultado_gabarito') {
      return { total: 0, correct: 0, wrong: 0, unanswered: 0, percentage: 0 };
    }
    const total = examQuestions.length;
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    for (const q of examQuestions) {
      const ans = examAnswers[q.id];
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
  }, [stage, examQuestions, examAnswers]);

  // ==========================================
  // RENDER ETAPA 2: PROVA EM ANDAMENTO (SIMULADO SILENCIOSO)
  // ==========================================
  if (stage === 'em_andamento') {
    const currentQ = examQuestions[currentExamIndex];
    const totalQ = examQuestions.length;
    const answeredCount = Object.keys(examAnswers).length;
    const currentSelectedLetter = currentQ ? examAnswers[currentQ.id] : undefined;

    return (
      <div className="flex-1 overflow-y-auto pb-32 sm:pb-20 bg-ink-950 text-white font-sans overflow-x-hidden animate-fade-in">
        {/* Barra Superior Fixa do Simulado */}
        <div className="sticky top-0 z-20 bg-ink-900/95 backdrop-blur-md border-b border-ink-875 px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3 safe-top">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => {
                if (window.confirm('Deseja interromper o simulado e voltar ao Banco de Questões?')) {
                  setIsTimerRunning(false);
                  setStage('navegacao_banco');
                }
              }}
              className="p-1.5 rounded-lg bg-ink-850 hover:bg-ink-800 text-zinc-400 hover:text-white transition-colors"
              title="Voltar ao Banco de Questões"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-extrabold text-white">
                Questão {currentExamIndex + 1}
              </span>
              <span className="text-xs text-zinc-500">de {totalQ}</span>
            </div>

            <span className="hidden sm:inline text-zinc-600">•</span>

            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-ink-850 border border-ink-800 text-zinc-400">
              {answeredCount}/{totalQ} respondidas
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-ink-850 border border-ink-800 text-xs sm:text-sm font-mono font-bold text-zinc-200">
            <Clock className="w-3.5 h-3.5 text-red-500" />
            <span>{formatTimer(elapsedSeconds)}</span>
          </div>

          <button
            type="button"
            onClick={handlePromptFinishExam}
            className="px-3 sm:px-4 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm transition-all active:scale-95 shadow-md shadow-red-600/25 flex items-center gap-1.5"
            title="Finalizar Simulado e Ver Gabarito"
          >
            <span>MOSTRAR GABARITO</span>
          </button>
        </div>

        {/* Banner do Mentor se aplicável */}
        {activeRevision && (
          <div className="bg-gradient-to-r from-red-600/20 via-amber-500/15 to-red-600/20 border-b border-red-500/30 px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-0.5 rounded-md bg-red-600 text-white font-black text-[10px] tracking-wide uppercase shadow-sm">
                {activeRevision.ciclo} ({activeRevision.diasCiclo} dias)
              </span>
              <span className="font-extrabold text-white">
                Mentor Inteligente: {activeRevision.tema}
              </span>
            </div>
            <span className="text-amber-400 font-semibold text-[11px] shrink-0">
              {totalQ} Questões de Fixação
            </span>
          </div>
        )}

        <div className="w-full max-w-4xl mx-auto px-3.5 sm:px-6 py-4 sm:py-6 space-y-4">
          {/* Navegação Rápida por Grade Numérica */}
          <div className="p-2.5 rounded-2xl bg-ink-900 border border-ink-875">
            <div className="flex items-center justify-between pb-1.5 px-1 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              <span>Navegação Rápida:</span>
              <span>Toque no número para saltar</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {examQuestions.map((q, idx) => {
                const isCurrent = idx === currentExamIndex;
                const isAnswered = !!examAnswers[q.id];

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentExamIndex(idx)}
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

          {/* Card da Questão do Simulado */}
          {currentQ && (
            <div className="rounded-2xl border border-ink-875 bg-ink-900 p-4 sm:p-6 shadow-xl space-y-4">
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

              <p className="text-sm sm:text-base text-zinc-100 leading-relaxed font-medium">
                {currentQ.statement}
              </p>

              <div className="space-y-2.5 pt-2">
                {currentQ.options.map((opt) => {
                  const isSelected = currentSelectedLetter === opt.letter;
                  return (
                    <button
                      key={opt.letter}
                      type="button"
                      onClick={() => setExamAnswers((prev) => ({ ...prev, [currentQ.id]: opt.letter }))}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border flex items-start gap-3 transition-all active:scale-[0.99] ${
                        isSelected
                          ? 'bg-zinc-800 border-zinc-400 text-white shadow-md ring-1 ring-zinc-400/50'
                          : 'bg-ink-850/80 border-ink-800 text-zinc-300 hover:bg-ink-800 hover:border-zinc-700'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-zinc-100 border-white text-zinc-950 font-black'
                            : 'bg-ink-900 border-ink-700 text-zinc-300'
                        }`}
                      >
                        {opt.letter}
                      </div>
                      <div className="flex-1 text-xs sm:text-sm leading-relaxed self-center">
                        {opt.text}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between gap-3 pt-3 border-t border-ink-875">
                <button
                  type="button"
                  onClick={() => setCurrentExamIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentExamIndex === 0}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-ink-850 hover:bg-ink-800 border border-ink-800 disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm font-semibold text-zinc-200 flex items-center justify-center gap-1.5 transition-all active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>
                <div className="text-xs text-zinc-500 font-semibold hidden sm:block">
                  Questão {currentExamIndex + 1} de {totalQ}
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentExamIndex((prev) => Math.min(totalQ - 1, prev + 1))}
                  disabled={currentExamIndex === totalQ - 1}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-ink-850 hover:bg-ink-800 border border-ink-800 disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm font-semibold text-zinc-200 flex items-center justify-center gap-1.5 transition-all active:scale-95"
                >
                  <span>Próxima</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {showConfirmFinishModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in safe-top safe-bottom">
              <div className="w-full max-w-md rounded-2xl bg-ink-900 border border-ink-850 p-5 sm:p-6 shadow-2xl space-y-4 animate-scale-up">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="text-center space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white">Finalizar e Ver Gabarito?</h3>
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
  // RENDER ETAPA 3: GABARITO E RESULTADO DO SIMULADO
  // ==========================================
  if (stage === 'resultado_gabarito') {
    return (
      <div className="flex-1 overflow-y-auto pb-32 sm:pb-20 bg-ink-950 text-white font-sans overflow-x-hidden animate-fade-in">
        <div className="w-full max-w-4xl mx-auto px-3.5 sm:px-6 py-4 sm:py-8 space-y-6">
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
                  <h3 className="text-base font-extrabold text-white">{revisionCompletionMessage}</h3>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    O tema <strong className="text-emerald-300">{activeRevision?.tema}</strong> foi concluído neste ciclo.
                  </p>
                </div>
              </div>
              {onGoBackToCronograma && (
                <button
                  type="button"
                  onClick={onGoBackToCronograma}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shrink-0 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-95 transition-all"
                >
                  <span>Voltar ao Cronograma</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

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
                  <h2 className="text-xl sm:text-2xl font-black text-white">Resultado e Gabarito</h2>
                </div>
              </div>
              <button
                type="button"
                onClick={handleBackToBanco}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5"
              >
                <ArrowRight className="w-4 h-4" />
                <span>Voltar ao Banco de Questões</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-ink-900 border border-ink-875 text-center">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Aproveitamento</span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums">{examStats.percentage}%</span>
              </div>
              <div className="p-3.5 rounded-xl bg-ink-900 border border-ink-875 text-center">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Acertos</span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums">
                  {examStats.correct}<span className="text-xs text-zinc-500 font-normal">/{examStats.total}</span>
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-ink-900 border border-ink-875 text-center">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Erros</span>
                <span className="text-2xl sm:text-3xl font-black text-red-400 tabular-nums">{examStats.wrong}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-ink-900 border border-ink-875 text-center">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Tempo</span>
                <span className="text-2xl sm:text-3xl font-black text-zinc-200 font-mono tabular-nums">{formatTimer(elapsedSeconds)}</span>
              </div>
            </div>
          </div>

          {/* Correção questão por questão */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-zinc-300 px-1">
              Correção Questão por Questão ({examQuestions.length}):
            </h3>
            {examQuestions.map((q, idx) => {
              const chosen = examAnswers[q.id];
              const isCorrect = chosen === q.correctOption;
              const isCommentsOpen = expandedComments.has(q.id);

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border p-4 sm:p-6 transition-all shadow-xl space-y-4 ${
                    !chosen
                      ? 'bg-ink-900 border-zinc-700/60'
                      : isCorrect
                      ? 'bg-emerald-950/15 border-emerald-500/50'
                      : 'bg-red-950/15 border-red-500/50'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-ink-875 text-xs">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-zinc-500 font-bold">#{idx + 1}</span>
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
                    <div>
                      {!chosen ? (
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

                  <p className="text-sm sm:text-base text-zinc-100 leading-relaxed font-medium">
                    {q.statement}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    {q.options.map((opt) => {
                      const isSelected = chosen === opt.letter;
                      const isThisCorrect = opt.letter === q.correctOption;

                      let optionStyle = 'bg-ink-850/40 border-ink-875/60 text-zinc-400 opacity-60';
                      let letterBadgeStyle = 'bg-ink-900 border-ink-800 text-zinc-500';

                      if (isThisCorrect) {
                        optionStyle = 'bg-emerald-950/60 border-emerald-500/90 text-emerald-100 font-semibold ring-1 ring-emerald-500/50';
                        letterBadgeStyle = 'bg-emerald-600 border-emerald-400 text-white font-black';
                      } else if (isSelected && !isCorrect) {
                        optionStyle = 'bg-red-950/60 border-red-500/90 text-red-100 font-semibold ring-1 ring-red-500/50';
                        letterBadgeStyle = 'bg-red-600 border-red-400 text-white font-black';
                      }

                      return (
                        <div key={opt.letter} className={`w-full text-left p-3.5 sm:p-4 rounded-xl border flex items-start gap-3 transition-all ${optionStyle}`}>
                          <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 ${letterBadgeStyle}`}>
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

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => toggleComment(q.id)}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-ink-850/90 hover:bg-ink-800 border border-ink-800 text-xs sm:text-sm font-bold text-zinc-200 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-red-500" />
                        <span>Comentário da Questão &amp; Explicação do Professor</span>
                      </div>
                      {isCommentsOpen ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
                    </button>
                    {isCommentsOpen && (
                      <div className="mt-2.5 p-4 rounded-xl bg-ink-950/90 border border-ink-850 space-y-4 animate-fade-in text-xs sm:text-sm">
                        <div>
                          <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider block mb-1">Raciocínio Clínico Geral</span>
                          <p className="text-zinc-300 leading-relaxed">{q.generalComment}</p>
                        </div>
                        <div className="space-y-2 pt-2 border-t border-ink-875">
                          <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Justificativa de Cada Alternativa:</span>
                          {q.optionsExplanations.map((exp) => (
                            <div
                              key={exp.letter}
                              className={`p-3 rounded-lg border leading-relaxed ${
                                exp.isCorrect ? 'bg-emerald-950/40 border-emerald-600/40 text-emerald-200' : 'bg-ink-900 border-ink-850 text-zinc-400'
                              }`}
                            >
                              <strong className={`mr-1 font-bold ${exp.isCorrect ? 'text-emerald-400' : 'text-zinc-300'}`}>
                                Alternativa {exp.letter}:
                              </strong>{' '}
                              <span>{exp.explanation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-2xl bg-ink-900 border border-ink-875 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                setExamAnswers({});
                setElapsedSeconds(0);
                setIsTimerRunning(true);
                setCurrentExamIndex(0);
                setStage('em_andamento');
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-ink-850 hover:bg-ink-800 border border-ink-800 text-xs sm:text-sm font-bold text-zinc-200 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Refazer Este Simulado</span>
            </button>
            <button
              type="button"
              onClick={handleBackToBanco}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-4 h-4" />
              <span>Voltar ao Banco de Questões</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER ETAPA 1: NAVEGAÇÃO EM 2 NÍVEIS NO BANCO DE QUESTÕES
  // ==========================================
  return (
    <div className="flex-1 overflow-y-auto pb-32 sm:pb-16 bg-ink-950 text-white font-sans overflow-x-hidden animate-fade-in">
      <div className="w-full max-w-5xl mx-auto px-3.5 sm:px-6 py-4 sm:py-8 space-y-6">

        {/* Cabeçalho Oficial do Banco de Questões */}
        <div className="flex items-center justify-between pb-4 border-b border-ink-875 gap-3 flex-wrap">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600/20 to-red-800/20 border border-red-600/30 flex items-center justify-center text-red-500 shadow-lg shadow-red-600/10 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Banco de Questões
                </h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-red-600/15 text-red-400 border border-red-600/30">
                  SantiSOFT MED
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Navegação temática estrita em 2 níveis: selecione a área e o tema para praticar
              </p>
            </div>
          </div>
        </div>

        {/* NÍVEL 1: SELEÇÃO DA GRANDE ÁREA (SEM 'TODAS AS QUESTÕES') */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-red-500" />
            <label className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              1. Selecione a Grande Área:
            </label>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
            {SPECIALTIES_CONFIG.map((spec) => {
              const isSelected = selectedSpecialty === spec.id;
              return (
                <button
                  key={spec.id}
                  type="button"
                  onClick={() => handleSelectSpecialty(spec.id)}
                  className={`p-3 rounded-2xl border text-left flex flex-col justify-between gap-2 transition-all active:scale-[0.98] ${
                    isSelected
                      ? 'bg-red-600/15 border-red-500 text-white shadow-lg shadow-red-600/20 ring-1 ring-red-500/50'
                      : 'bg-ink-900 border-ink-875 text-zinc-300 hover:bg-ink-850 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-red-500 ring-2 ring-red-500/40' : 'bg-zinc-700'}`} />
                    {isSelected && <Check className="w-4 h-4 text-red-400" />}
                  </div>
                  <span className="text-xs sm:text-sm font-bold leading-tight">
                    {spec.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* NÍVEL 2: SELEÇÃO DE SUBTEMA (EXIBIDO AO SELECIONAR A GRANDE ÁREA) */}
        {selectedSpecialty && (
          <div className="space-y-3 animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-red-500" />
                <label className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  2. Selecione o Tema em {selectedSpecialty}:
                </label>
              </div>
              <span className="text-xs text-zinc-500">
                {availableSubtopics.length} temas disponíveis
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-ink-900 border border-ink-875">
              <div className="flex flex-wrap gap-2">
                {availableSubtopics.map((sub) => {
                  const isSelected = selectedSubtopic === sub.label;
                  const count = subtopicCounts[sub.label] ?? 0;

                  return (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => handleSelectSubtopic(sub.label)}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 flex items-center gap-2 border ${
                        isSelected
                          ? 'bg-red-600 border-red-500 text-white shadow-md shadow-red-600/30'
                          : 'bg-ink-850 border-ink-800 text-zinc-300 hover:text-white hover:bg-ink-800 hover:border-zinc-700'
                      }`}
                    >
                      <span>{sub.label}</span>
                      <span
                        className={`text-[10px] font-black px-1.5 py-0.5 rounded-md ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-ink-950 text-zinc-400 border border-ink-800'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* EMPTY STATE: ENQUANTO NÃO TIVER SELECIONADO UMA GRANDE ÁREA E UM SUBTEMA */}
        {(!selectedSpecialty || !selectedSubtopic) && (
          <div className="py-20 sm:py-28 px-4 rounded-3xl bg-ink-900/50 border border-dashed border-ink-800 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600/15 to-zinc-800/30 border border-red-500/20 flex items-center justify-center text-red-500 shadow-xl shadow-red-600/10">
              <BookOpen className="w-8 h-8" />
            </div>
            <div className="space-y-1.5 max-w-md">
              <p className="text-sm sm:text-base font-medium text-zinc-300 leading-relaxed">
                Selecione uma Grande Área e um tema acima para começar a resolver as questões.
              </p>
            </div>
          </div>
        )}

        {/* VISUALIZAÇÃO ESTRITA: RENDERIZA EXCLUSIVAMENTE AS QUESTÕES DO TEMA SELECIONADO */}
        {selectedSpecialty && selectedSubtopic && (
          <div className="space-y-5 animate-fade-in">
            
            {/* Header com Contador Exato no Topo (ex.: "Doenças Exantemáticas — 100 Questões") */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-ink-900 via-ink-925 to-ink-950 border border-ink-875 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold bg-red-600/15 text-red-400 border border-red-600/30">
                    {selectedSpecialty}
                  </span>
                  <span className="text-zinc-500 text-xs">• Banco Livre</span>
                </div>
                <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                  {selectedSubtopic} — {filteredQuestions.length} {filteredQuestions.length === 1 ? 'Questão' : 'Questões'}
                </h2>
                <div className="flex items-center gap-3 text-xs text-zinc-400 pt-0.5 flex-wrap">
                  <span>Respondidas: <strong className="text-white">{themeStats.answered}/{themeStats.total}</strong></span>
                  <span>•</span>
                  <span>Acertos: <strong className="text-emerald-400">{themeStats.correct}</strong></span>
                  <span>•</span>
                  <span>Erros: <strong className="text-red-400">{themeStats.wrong}</strong></span>
                  {themeStats.answered > 0 && (
                    <>
                      <span>•</span>
                      <span className="text-emerald-400 font-bold">{themeStats.percentage}% de acerto</span>
                    </>
                  )}
                </div>
              </div>

              {/* Botões de Ação do Tema */}
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => setShowSimuladoModal(true)}
                  disabled={filteredQuestions.length === 0}
                  className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-40 text-white font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-red-600/25 active:scale-95"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Iniciar Simulado Cronometrado</span>
                </button>

                {themeStats.answered > 0 && (
                  <button
                    type="button"
                    onClick={resetThemeAnswers}
                    className="p-2.5 rounded-xl bg-ink-850 hover:bg-ink-800 border border-ink-800 text-zinc-400 hover:text-white transition-all text-xs"
                    title="Limpar respostas deste tema"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Barra de Filtro Rápido no Tema */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-ink-900 border border-ink-875 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setPracticeStatusFilter('todas');
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    practiceStatusFilter === 'todas'
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Todas do Tema ({filteredQuestions.length})
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPracticeStatusFilter('pendentes');
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    practiceStatusFilter === 'pendentes'
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Pendentes ({filteredQuestions.length - themeStats.answered})
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPracticeStatusFilter('acertos');
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    practiceStatusFilter === 'acertos'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Acertos ({themeStats.correct})
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPracticeStatusFilter('erros');
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    practiceStatusFilter === 'erros'
                      ? 'bg-red-700 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Erros ({themeStats.wrong})
                </button>
              </div>

              {totalPages > 1 && (
                <div className="text-xs text-zinc-500 font-medium">
                  Página {currentPage} de {totalPages} ({displayedQuestions.length} questões)
                </div>
              )}
            </div>

            {/* LISTA DAS QUESTÕES DAQUELE TEMA EXATO */}
            {displayedQuestions.length === 0 ? (
              <div className="py-12 px-4 rounded-2xl bg-ink-900 border border-ink-875 text-center text-zinc-400 text-sm">
                Nenhuma questão encontrada com o filtro selecionado.
              </div>
            ) : (
              <div className="space-y-5">
                {paginatedQuestions.map((q, localIdx) => {
                  const absoluteIndex = (currentPage - 1) * QUESTIONS_PER_PAGE + localIdx + 1;
                  const chosenLetter = practiceAnswers[q.id];
                  const isAnswered = !!chosenLetter;
                  const isCorrect = isAnswered && chosenLetter === q.correctOption;
                  const isCommentsOpen = expandedComments.has(q.id);

                  return (
                    <div
                      key={q.id}
                      className={`rounded-2xl border p-4 sm:p-6 transition-all shadow-xl space-y-4 ${
                        !isAnswered
                          ? 'bg-ink-900 border-ink-875 hover:border-zinc-700'
                          : isCorrect
                          ? 'bg-emerald-950/15 border-emerald-500/50'
                          : 'bg-red-950/15 border-red-500/50'
                      }`}
                    >
                      {/* Metadados da Questão */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-ink-875 text-xs">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-zinc-400 font-bold px-2 py-0.5 rounded bg-ink-850 border border-ink-800">
                            Questão #{absoluteIndex}
                          </span>
                          <span className="px-2 py-0.5 rounded-md font-bold text-[11px] bg-red-600/15 text-red-400 border border-red-600/30">
                            {q.specialty}
                          </span>
                          {q.institution && (
                            <span className="px-2 py-0.5 rounded-md font-bold text-[11px] bg-ink-850 text-zinc-300 border border-ink-800">
                              {q.institution} {q.year}
                            </span>
                          )}
                          <span className="text-zinc-400 font-medium">
                            {q.topic}
                          </span>
                        </div>

                        {/* Indicador de Status */}
                        <div>
                          {!isAnswered ? (
                            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold text-zinc-400 bg-ink-850 border border-ink-800">
                              Não respondida
                            </span>
                          ) : isCorrect ? (
                            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-500/70 text-emerald-300 font-bold text-xs">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Você acertou!</span>
                            </span>
                          ) : (
                            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-red-950/80 border border-red-500/70 text-red-300 font-bold text-xs">
                              <XCircle className="w-3.5 h-3.5" />
                              <span>Você errou</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Enunciado do Caso Clínico */}
                      <p className="text-sm sm:text-base text-zinc-100 leading-relaxed font-medium">
                        {q.statement}
                      </p>

                      {/* Alternativas Interativas com Resposta Imediata */}
                      <div className="space-y-2.5 pt-1">
                        {q.options.map((opt) => {
                          const isSelected = chosenLetter === opt.letter;
                          const isThisCorrect = opt.letter === q.correctOption;

                          let optionStyle =
                            'bg-ink-850/80 border-ink-800 text-zinc-300 hover:bg-ink-800 hover:border-zinc-700';
                          let letterBadgeStyle = 'bg-ink-900 border-ink-700 text-zinc-300';

                          if (isAnswered) {
                            if (isThisCorrect) {
                              // Gabarito correto -> VERDE
                              optionStyle =
                                'bg-emerald-950/70 border-emerald-500 text-emerald-100 font-semibold ring-1 ring-emerald-500/50';
                              letterBadgeStyle = 'bg-emerald-600 border-emerald-400 text-white font-black';
                            } else if (isSelected && !isCorrect) {
                              // Resposta errada do aluno -> VERMELHO
                              optionStyle =
                                'bg-red-950/70 border-red-500 text-red-100 font-semibold ring-1 ring-red-500/50';
                              letterBadgeStyle = 'bg-red-600 border-red-400 text-white font-black';
                            } else {
                              optionStyle =
                                'bg-ink-850/40 border-ink-875/60 text-zinc-500 opacity-60';
                              letterBadgeStyle = 'bg-ink-900 border-ink-850 text-zinc-600';
                            }
                          }

                          return (
                            <button
                              key={opt.letter}
                              type="button"
                              onClick={() => handleSelectPracticeAnswer(q.id, opt.letter)}
                              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border flex items-start gap-3 transition-all active:scale-[0.99] ${optionStyle}`}
                            >
                              <div
                                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors ${letterBadgeStyle}`}
                              >
                                {opt.letter}
                              </div>

                              <div className="flex-1 text-xs sm:text-sm leading-relaxed self-center">
                                {opt.text}
                              </div>

                              {isAnswered && (
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
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Botão de Comentário Detalhado do Professor */}
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

                        {/* Conteúdo Expansível com Raciocínio Clínico e Alternativas */}
                        {isCommentsOpen && (
                          <div className="mt-2.5 p-4 rounded-xl bg-ink-950/90 border border-ink-850 space-y-4 animate-fade-in text-xs sm:text-sm">
                            <div>
                              <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                                Raciocínio Clínico Geral
                              </span>
                              <p className="text-zinc-300 leading-relaxed">
                                {q.generalComment}
                              </p>
                            </div>

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

                {/* Paginação */}
                {totalPages > 1 && (
                  <div className="p-4 rounded-2xl bg-ink-900 border border-ink-875 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentPage((prev) => Math.max(1, prev - 1));
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      disabled={currentPage === 1}
                      className="w-full sm:w-auto px-4 py-2 rounded-xl bg-ink-850 hover:bg-ink-800 disabled:opacity-30 border border-ink-800 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Anterior</span>
                    </button>

                    <div className="flex items-center gap-1.5 flex-wrap justify-center">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <button
                          key={pageNum}
                          type="button"
                          onClick={() => {
                            setCurrentPage(pageNum);
                            window.scrollTo({ top: 300, behavior: 'smooth' });
                          }}
                          className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                            currentPage === pageNum
                              ? 'bg-red-600 text-white shadow-md'
                              : 'bg-ink-850 text-zinc-400 hover:text-white border border-ink-800'
                          }`}
                        >
                          {pageNum}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      disabled={currentPage === totalPages}
                      className="w-full sm:w-auto px-4 py-2 rounded-xl bg-ink-850 hover:bg-ink-800 disabled:opacity-30 border border-ink-800 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>Próxima</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* MODAL PARA CONFIGURAÇÃO DO SIMULADO CRONOMETRADO */}
        {showSimuladoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in safe-top safe-bottom">
            <div className="w-full max-w-md rounded-2xl bg-ink-900 border border-red-600/30 p-5 sm:p-6 shadow-2xl space-y-4 animate-scale-up">
              <div className="flex items-center gap-3 pb-3 border-b border-ink-850">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 border border-red-600/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Iniciar Simulado Cronometrado</h3>
                  <p className="text-xs text-zinc-400">{selectedSubtopic}</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                  Quantidade de Questões para o Simulado:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['10', '20', '30', '50', 'todas'] as const).map((cnt) => {
                    const isSel = simuladoCountChoice === cnt;
                    const label = cnt === 'todas' ? `Todas (${filteredQuestions.length})` : `${cnt} Questões`;
                    return (
                      <button
                        key={cnt}
                        type="button"
                        onClick={() => setSimuladoCountChoice(cnt)}
                        className={`p-2.5 rounded-xl text-xs font-bold border text-center transition-all ${
                          isSel
                            ? 'bg-red-600 border-red-500 text-white shadow-md'
                            : 'bg-ink-850 border-ink-800 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-2.5 pt-2 border-t border-ink-850">
                <button
                  type="button"
                  onClick={() => setShowSimuladoModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-ink-850 hover:bg-ink-800 border border-ink-800 text-xs font-bold text-zinc-300"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleStartSimuladoFromTheme}
                  className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black shadow-lg shadow-red-600/30 transition-all"
                >
                  Começar Simulado
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Suave para Revisão Espaçada quando faltarem questões exclusivas */}
        {showRevisionFallbackModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in safe-top safe-bottom">
            <div className="w-full max-w-md rounded-2xl bg-ink-900 border border-amber-500/30 p-5 sm:p-6 shadow-2xl space-y-4 animate-scale-up">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="text-center space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-white">Mentor Inteligente</h3>
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
                    if (onGoBackToCronograma) onGoBackToCronograma();
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-ink-850 hover:bg-ink-800 text-zinc-300 text-xs font-bold text-center"
                >
                  Voltar ao Cronograma
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowRevisionFallbackModal(false);
                    if (pendingRevisionPayload) {
                      const pool = questoesData
                        .filter((q) => q.isRevisao !== true && q.specialty === pendingRevisionPayload.spec)
                        .slice(0, 30);
                      startSimuladoWithPool(pool);
                      setPendingRevisionPayload(null);
                    }
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black shadow-lg shadow-red-600/25 text-center"
                >
                  Sim, realizar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
