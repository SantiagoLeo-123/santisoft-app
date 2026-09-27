import { cronogramaData } from '@/data/cronograma';
import { curriculum } from '@/data/curriculum';

export const MENTOR_STORAGE_KEY = 'santisoft_mentor_revisoes';

export type CicloRevisao = 'R1' | 'R2' | 'R3';

export interface CicloInfo {
  ciclo: CicloRevisao;
  diasAposConclusao: number; // 7, 30, 60
  dataPrevista: string; // YYYY-MM-DD
  concluido: boolean;
  dataConclusao?: string;
  pontuacaoSimulado?: { acertos: number; total: number };
}

export interface TemaRevisao {
  id: string; // e.g. lessonId or slugified tema
  tema: string; // ex: "CARDIOLOGIA PEDIATRICA", "ITU PEDIATRICO", etc.
  especialidade: string; // "Pediatria", "Clínica Médica", "Cirurgia", "Ginecologia e Obstetrícia", "Preventiva"
  dataConclusaoAula: string; // YYYY-MM-DD
  ciclos: {
    R1: CicloInfo;
    R2: CicloInfo;
    R3: CicloInfo;
  };
  cicloAtual: CicloRevisao | 'FINALIZADO';
}

export interface RevisaoPendente {
  temaId: string;
  tema: string;
  especialidade: string;
  ciclo: CicloRevisao;
  diasCiclo: number;
  dataPrevista: string;
  diasAtraso: number; // 0 = hoje, >0 = atrasada
}

export type MentorStore = Record<string, TemaRevisao>;

// Helpers de formatação de data YYYY-MM-DD local
export function toDateStr(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function parseDateStr(str: string): Date {
  const [year, month, day] = str.split('-').map(Number);
  return new Date(year, (month || 1) - 1, day || 1);
}

export function normalizeStr(str: string): string {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

const TEMA_CANONICAL_MAP: Record<string, string> = {
  'cardiologia pediatrica': 'CARDIOLOGIA PEDIATRICA',
  'itu pediatrico': 'ITU PEDIATRICO',
  'infeccao do trato urinario': 'ITU PEDIATRICO',
  'infeccao urinaria': 'ITU PEDIATRICO',
  'nefrologia pediatrica': 'ITU PEDIATRICO',
  'crescimento e seus disturbios': 'CRESCIMENTO E SEUS DISTURBIOS',
  'disturbios do crescimento': 'CRESCIMENTO E SEUS DISTURBIOS',
  'disturbios do crescimento desnutricao e baixa estatura': 'CRESCIMENTO E SEUS DISTURBIOS',
  'crescimento e desenvolvimento normais puberdade normal': 'CRESCIMENTO E SEUS DISTURBIOS',
  'crescimento': 'CRESCIMENTO E SEUS DISTURBIOS',
  'doencas exantematicas': 'DOENÇAS EXANTEMATICAS',
  'imunizacoes': 'IMUNIZAÇÕES',
};

// Mapeia áreas curtas do cronograma para nomes completos aceitos no filtro
export function normalizarEspecialidade(area: string): string {
  const map: Record<string, string> = {
    'Clínica': 'Clínica Médica',
    'Clínica Médica': 'Clínica Médica',
    'GO': 'Ginecologia e Obstetrícia',
    'Ginecologia e Obstetrícia': 'Ginecologia e Obstetrícia',
    'Cirurgia': 'Cirurgia',
    'Pediatria': 'Pediatria',
    'Preventiva': 'Preventiva',
  };
  return map[area] || area || 'Pediatria';
}

// Localiza o tema e especialidade a partir do ID da aula
export function resolverTemaEEspecialidade(lessonOrEntryId: string): {
  id: string;
  tema: string;
  especialidade: string;
} {
  // 1. Tenta achar no cronogramaData
  const cron = cronogramaData.find((c) => c.id === lessonOrEntryId);
  if (cron) {
    const rawTema = cron.aula || cron.titulo || 'Tema Geral';
    const canonical = TEMA_CANONICAL_MAP[normalizeStr(rawTema)] || rawTema;
    return {
      id: cron.id,
      tema: canonical,
      especialidade: normalizarEspecialidade(cron.area),
    };
  }

  // 2. Tenta achar no curriculum
  for (const area of curriculum) {
    for (const mod of area.modules) {
      for (const lesson of mod.lessons) {
        if (lesson.id === lessonOrEntryId) {
          const rawTema = lesson.title || mod.name;
          const canonical = TEMA_CANONICAL_MAP[normalizeStr(rawTema)] || rawTema;
          return {
            id: lesson.id,
            tema: canonical,
            especialidade: normalizarEspecialidade(area.name),
          };
        }
      }
    }
  }

  // Fallback
  return {
    id: lessonOrEntryId,
    tema: 'CARDIOLOGIA PEDIATRICA',
    especialidade: 'Pediatria',
  };
}

// Recupera a loja do LocalStorage
export function getMentorStore(): MentorStore {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(MENTOR_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as MentorStore;
  } catch (err) {
    console.error('Erro ao ler mentorStore do LocalStorage:', err);
    return {};
  }
}

// Salva a loja no LocalStorage e dispara evento reativo
export function saveMentorStore(store: MentorStore): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(MENTOR_STORAGE_KEY, JSON.stringify(store));
    window.dispatchEvent(new CustomEvent('santisoft_mentor_updated', { detail: store }));
  } catch (err) {
    console.error('Erro ao salvar mentorStore no LocalStorage:', err);
  }
}

/**
 * 1. Registra a conclusão de uma aula e agenda automaticamente R1 (7d), R2 (30d) e R3 (60d)
 */
export function registrarConclusaoAula(
  lessonId: string,
  temaForced?: string,
  especialidadeForced?: string,
): TemaRevisao {
  const store = getMentorStore();
  const info = resolverTemaEEspecialidade(lessonId);
  const tema = temaForced || info.tema;
  const especialidade = especialidadeForced || info.especialidade;

  const now = new Date();
  const todayStr = toDateStr(now);

  const r1Date = toDateStr(addDays(now, 7));
  const r2Date = toDateStr(addDays(now, 30));
  const r3Date = toDateStr(addDays(now, 60));

  const novoTema: TemaRevisao = {
    id: lessonId,
    tema,
    especialidade,
    dataConclusaoAula: todayStr,
    ciclos: {
      R1: {
        ciclo: 'R1',
        diasAposConclusao: 7,
        dataPrevista: r1Date,
        concluido: false,
      },
      R2: {
        ciclo: 'R2',
        diasAposConclusao: 30,
        dataPrevista: r2Date,
        concluido: false,
      },
      R3: {
        ciclo: 'R3',
        diasAposConclusao: 60,
        dataPrevista: r3Date,
        concluido: false,
      },
    },
    cicloAtual: 'R1',
  };

  store[lessonId] = novoTema;
  saveMentorStore(store);
  return novoTema;
}

/**
 * Remove agendamento se usuário desmarcar aula (opcional)
 */
export function removerConclusaoAula(lessonId: string): void {
  const store = getMentorStore();
  if (store[lessonId]) {
    delete store[lessonId];
    saveMentorStore(store);
  }
}

/**
 * 2. Retorna revisões pendentes com data prevista menor ou igual à data de hoje
 */
export function getRevisoesDeHoje(): RevisaoPendente[] {
  const store = getMentorStore();
  const todayStr = toDateStr(new Date());
  const todayDate = parseDateStr(todayStr);

  const pendentes: RevisaoPendente[] = [];

  for (const item of Object.values(store)) {
    if (item.cicloAtual === 'FINALIZADO') continue;

    const cicloAtivo = item.ciclos[item.cicloAtual];
    if (!cicloAtivo || cicloAtivo.concluido) continue;

    // Se data prevista <= hoje, está pronta para revisão!
    if (cicloAtivo.dataPrevista <= todayStr) {
      const prevDate = parseDateStr(cicloAtivo.dataPrevista);
      const diffMs = todayDate.getTime() - prevDate.getTime();
      const diasAtraso = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));

      pendentes.push({
        temaId: item.id,
        tema: item.tema,
        especialidade: item.especialidade,
        ciclo: cicloAtivo.ciclo,
        diasCiclo: cicloAtivo.diasAposConclusao,
        dataPrevista: cicloAtivo.dataPrevista,
        diasAtraso,
      });
    }
  }

  // Ordena pelas mais antigas / atrasadas primeiro
  return pendentes.sort((a, b) => a.dataPrevista.localeCompare(b.dataPrevista));
}

/**
 * Retorna próximas revisões agendadas no futuro (dataPrevista > hoje)
 */
export function getProximasRevisoes(): {
  temaId: string;
  tema: string;
  especialidade: string;
  ciclo: CicloRevisao;
  dataPrevista: string;
  diasFaltando: number;
}[] {
  const store = getMentorStore();
  const todayStr = toDateStr(new Date());
  const todayDate = parseDateStr(todayStr);

  const futuras: {
    temaId: string;
    tema: string;
    especialidade: string;
    ciclo: CicloRevisao;
    dataPrevista: string;
    diasFaltando: number;
  }[] = [];

  for (const item of Object.values(store)) {
    if (item.cicloAtual === 'FINALIZADO') continue;

    const cicloAtivo = item.ciclos[item.cicloAtual];
    if (!cicloAtivo || cicloAtivo.concluido) continue;

    if (cicloAtivo.dataPrevista > todayStr) {
      const prevDate = parseDateStr(cicloAtivo.dataPrevista);
      const diffMs = prevDate.getTime() - todayDate.getTime();
      const diasFaltando = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

      futuras.push({
        temaId: item.id,
        tema: item.tema,
        especialidade: item.especialidade,
        ciclo: cicloAtivo.ciclo,
        dataPrevista: cicloAtivo.dataPrevista,
        diasFaltando,
      });
    }
  }

  return futuras.sort((a, b) => a.dataPrevista.localeCompare(b.dataPrevista));
}

/**
 * 3. Ao finalizar a resolução do simulado de revisão:
 * Marca o ciclo atual como concluído e agenda/avança para o próximo ciclo
 */
export function concluirCicloRevisao(
  temaId: string,
  cicloConcluido: CicloRevisao,
  pontuacao?: { acertos: number; total: number },
): TemaRevisao | null {
  const store = getMentorStore();
  let item = store[temaId];

  // Se não encontrar pela chave direta, busca por ID interno ou tema
  if (!item) {
    const targetNorm = normalizeStr(temaId);
    for (const entry of Object.values(store)) {
      if (
        entry.id === temaId ||
        normalizeStr(entry.tema) === targetNorm ||
        normalizeStr(entry.id) === targetNorm
      ) {
        item = entry;
        break;
      }
    }
  }

  if (!item) return null;

  const now = new Date();
  const todayStr = toDateStr(now);

  // Marca ciclo atual como concluído
  if (item.ciclos[cicloConcluido]) {
    item.ciclos[cicloConcluido].concluido = true;
    item.ciclos[cicloConcluido].dataConclusao = todayStr;
    if (pontuacao) {
      item.ciclos[cicloConcluido].pontuacaoSimulado = pontuacao;
    }
  }

  // Avança para o próximo ciclo
  if (cicloConcluido === 'R1') {
    item.cicloAtual = 'R2';
    // Garante que a data prevista de R2 seja no futuro (30 dias após hoje)
    const proximaData = toDateStr(addDays(now, 30));
    if (item.ciclos.R2.dataPrevista <= todayStr) {
      item.ciclos.R2.dataPrevista = proximaData;
    }
  } else if (cicloConcluido === 'R2') {
    item.cicloAtual = 'R3';
    const proximaData = toDateStr(addDays(now, 30));
    if (item.ciclos.R3.dataPrevista <= todayStr) {
      item.ciclos.R3.dataPrevista = proximaData;
    }
  } else if (cicloConcluido === 'R3') {
    item.cicloAtual = 'FINALIZADO';
  }

  saveMentorStore(store);
  return item;
}

/**
 * Helper para criar uma revisão de teste com data de hoje para demonstração imediata
 */
export function criarRevisaoTesteHoje(
  tema = 'CARDIOLOGIA PEDIATRICA',
  especialidade = 'Pediatria',
): TemaRevisao {
  const store = getMentorStore();
  const slug = tema.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const testId = `revisao-teste-${slug}`;
  const todayStr = toDateStr(new Date());

  const item: TemaRevisao = {
    id: testId,
    tema,
    especialidade,
    dataConclusaoAula: toDateStr(addDays(new Date(), -7)),
    ciclos: {
      R1: {
        ciclo: 'R1',
        diasAposConclusao: 7,
        dataPrevista: todayStr, // Hoje!
        concluido: false,
      },
      R2: {
        ciclo: 'R2',
        diasAposConclusao: 30,
        dataPrevista: toDateStr(addDays(new Date(), 23)),
        concluido: false,
      },
      R3: {
        ciclo: 'R3',
        diasAposConclusao: 60,
        dataPrevista: toDateStr(addDays(new Date(), 53)),
        concluido: false,
      },
    },
    cicloAtual: 'R1',
  };

  store[testId] = item;
  saveMentorStore(store);
  return item;
}
