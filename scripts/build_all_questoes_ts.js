import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TARGET_TS = path.resolve(__dirname, '../src/data/questoes.ts');
const TARGET_JSON = path.resolve(__dirname, '../src/data/questoes.json');

// 1. Carrega as 100 questões de Cardiologia Pediátrica
import { questions as cardioQuestions } from './sections/helper.js';
import { loadSec1 as loadCardioSec1 } from './sections/sec1_civ.js';
import { loadSec2 as loadCardioSec2 } from './sections/sec2_fallot.js';
import { loadSec3 as loadCardioSec3 } from './sections/sec3_coarctacao.js';
import { loadSec4 as loadCardioSec4 } from './sections/sec4_pca.js';
import { loadSec5 as loadCardioSec5 } from './sections/sec5_tga.js';
import { loadSec6 as loadCardioSec6 } from './sections/sec6_kawasaki.js';
import { loadSec7 as loadCardioSec7 } from './sections/sec7_febre_reumatica.js';
import { loadSec8 as loadCardioSec8 } from './sections/sec8_tsv.js';
import { loadSec9 as loadCardioSec9 } from './sections/sec9_coracaozinho.js';

loadCardioSec1();
loadCardioSec2();
loadCardioSec3();
loadCardioSec4();
loadCardioSec5();
loadCardioSec6();
loadCardioSec7();
loadCardioSec8();
loadCardioSec9();

console.log(`Carregadas ${cardioQuestions.length} questões de Cardiologia Pediátrica.`);
if (cardioQuestions.length !== 100) {
  console.error(`Erro: esperado 100 questões de Cardio, mas obteve ${cardioQuestions.length}`);
  process.exit(1);
}

// 2. Carrega as 100 questões de ITU Pediátrico
import { ituQuestions } from './sections_itu/helper_itu.js';
import { loadSec1 as loadItuSec1 } from './sections_itu/sec1_coleta.js';
import { loadSec2 as loadItuSec2 } from './sections_itu/sec2_criterios.js';
import { loadSec3 as loadItuSec3 } from './sections_itu/sec3_cistite_vs_pielonefrite.js';
import { loadSec4 as loadItuSec4 } from './sections_itu/sec4_antimicrobianos.js';
import { loadSec5 as loadItuSec5 } from './sections_itu/sec5_internacao.js';
import { loadSec6 as loadItuSec6 } from './sections_itu/sec6_usg.js';
import { loadSec7 as loadItuSec7 } from './sections_itu/sec7_ucm_rvu.js';
import { loadSec8 as loadItuSec8 } from './sections_itu/sec8_dmsa.js';
import { loadSec9 as loadItuSec9 } from './sections_itu/sec9_manejo_rvu.js';
import { loadSec10 as loadItuSec10 } from './sections_itu/sec10_vup.js';
import { loadSec11 as loadItuSec11 } from './sections_itu/sec11_quimioprofilaxia.js';
import { loadSec12 as loadItuSec12 } from './sections_itu/sec12_dtui_constipacao.js';

loadItuSec1();
loadItuSec2();
loadItuSec3();
loadItuSec4();
loadItuSec5();
loadItuSec6();
loadItuSec7();
loadItuSec8();
loadItuSec9();
loadItuSec10();
loadItuSec11();
loadItuSec12();

console.log(`Carregadas ${ituQuestions.length} questões de ITU Pediátrico.`);
if (ituQuestions.length !== 100) {
  console.error(`Erro: esperado 100 questões de ITU, mas obteve ${ituQuestions.length}`);
  process.exit(1);
}

// 3. Carrega as 100 questões de Crescimento e seus Distúrbios
import { crescimentoQuestions } from './sections_crescimento/helper_crescimento.js';
import { loadSec1 as loadCrescSec1 } from './sections_crescimento/sec1_velocidade_crescimento.js';
import { loadSec2 as loadCrescSec2 } from './sections_crescimento/sec2_curvas_oms.js';
import { loadSec3 as loadCrescSec3 } from './sections_crescimento/sec3_estatura_alvo.js';
import { loadSec4 as loadCrescSec4 } from './sections_crescimento/sec4_idade_ossea.js';
import { loadSec5 as loadCrescSec5 } from './sections_crescimento/sec5_variantes_normais.js';
import { loadSec6 as loadCrescSec6 } from './sections_crescimento/sec6_displasias_desproporcao.js';
import { loadSec7 as loadCrescSec7 } from './sections_crescimento/sec7_cromossomicas_sindromicas.js';
import { loadSec8 as loadCrescSec8 } from './sections_crescimento/sec8_rn_pig_catchup.js';
import { loadSec9 as loadCrescSec9 } from './sections_crescimento/sec9_causas_endocrinas.js';
import { loadSec10 as loadCrescSec10 } from './sections_crescimento/sec10_doencas_sistemicas.js';
import { loadSec11 as loadCrescSec11 } from './sections_crescimento/sec11_raquitismo.js';
import { loadSec12 as loadCrescSec12 } from './sections_crescimento/sec12_alta_estatura.js';

loadCrescSec1();
loadCrescSec2();
loadCrescSec3();
loadCrescSec4();
loadCrescSec5();
loadCrescSec6();
loadCrescSec7();
loadCrescSec8();
loadCrescSec9();
loadCrescSec10();
loadCrescSec11();
loadCrescSec12();

console.log(`Carregadas ${crescimentoQuestions.length} questões de Crescimento e seus Distúrbios.`);
if (crescimentoQuestions.length !== 100) {
  console.error(`Erro: esperado 100 questões de Crescimento, mas obteve ${crescimentoQuestions.length}`);
  process.exit(1);
}

// Converte questões para o formato Raw
function formatRaw(list) {
  return list.map((q) => {
    const alts = q.options.map((opt) => ({
      id: opt.letter,
      texto: opt.text,
    }));
    const comAlts = {};
    for (const exp of q.optionsExplanations) {
      comAlts[exp.letter] = exp.explanation;
    }
    return {
      id: q.id,
      especialidade: q.specialty,
      tema: q.topic,
      subtema: q.subtema,
      enunciado: q.statement,
      alternativas: alts,
      correta: q.correctOption,
      comentarioGeral: q.generalComment,
      comentariosAlternativas: comAlts,
    };
  });
}

const rawCardio100 = formatRaw(cardioQuestions);
const rawItu100 = formatRaw(ituQuestions);
const rawCresc100 = formatRaw(crescimentoQuestions);
const allRaw300 = [...rawCardio100, ...rawItu100, ...rawCresc100];

// Salva em src/data/questoes.json
fs.writeFileSync(TARGET_JSON, JSON.stringify(allRaw300, null, 2), 'utf-8');
console.log(`Salvo src/data/questoes.json com sucesso (${allRaw300.length} questões no total: 100 Cardio + 100 ITU + 100 Crescimento).`);

// Lê o arquivo questoes.ts atual para extrair o array baseStaticQuestions
const currentContent = fs.readFileSync(TARGET_TS, 'utf-8');
const baseStaticMatch = currentContent.match(/const baseStaticQuestions:\s*Question\[\]\s*=\s*\[([\s\S]*?)\];/);

let baseStaticBody = '';
if (baseStaticMatch && baseStaticMatch[1]) {
  baseStaticBody = baseStaticMatch[1].trim();
} else {
  console.warn('Aviso: baseStaticQuestions não encontrado com regex exato. Verifique o arquivo.');
}

// Gera o novo conteúdo de src/data/questoes.ts
const tsOutput = `import type { Question } from '@/types';

export interface RawCardioQuestion {
  id: string;
  especialidade: string;
  tema: string;
  subtema?: string;
  enunciado: string;
  alternativas: { id: string; texto: string }[];
  correta: string;
  comentarioGeral: string;
  comentariosAlternativas: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

export type RawQuestion = RawCardioQuestion;

export const TEMAS_PEDIATRIA = [
  "CARDIOLOGIA PEDIATRICA",
  "CRESCIMENTO E SEUS DISTURBIOS",
  "DOENÇAS EXANTEMATICAS",
  "IMUNIZAÇÕES",
  "ITU PEDIATRICO",
  "Neonatologia I (Icterícia Neonatal e Reanimação)",
  "Neonatologia II (Infecções Congênitas e Distúrbios Respiratórios)",
  "Puberdade e seus Distúrbios",
  "IRA (Infecções de Vias Aéreas Inferiores)",
  "IRA com Estridor",
  "IRA Infecções de Vias Aéreas Superiores",
  "Doenças Gastrointestinais",
  "Aleitamento Materno e Suplementação com Micronutrientes"
];

// ============================================================================
// BANCO COM 100 QUESTÕES COMPLETAS DE CARDIOLOGIA PEDIÁTRICA
// Cobrindo CIV, Tetralogia de Fallot, Coarctação de Aorta, PCA, TGA,
// Doença de Kawasaki, Febre Reumática, TSV e Teste do Coraçãozinho.
// ============================================================================
export const QUESTOES_CARDIOLOGIA_PEDIATRICA_100: RawCardioQuestion[] = ${JSON.stringify(rawCardio100, null, 2)};

// Subconjuntos exportados para retrocompatibilidade
export const QUESTOES_CARDIOLOGIA_PEDIATRICA = QUESTOES_CARDIOLOGIA_PEDIATRICA_100.slice(0, 6);
export const QUESTOES_CARDIOLOGIA_PEDIATRICA_PARTE_2 = QUESTOES_CARDIOLOGIA_PEDIATRICA_100.slice(6, 12);
export const QUESTOES_CARDIOLOGIA_PEDIATRICA_PARTE_3 = QUESTOES_CARDIOLOGIA_PEDIATRICA_100.slice(12, 18);

// ============================================================================
// BANCO COM 100 QUESTÕES COMPLETAS DE ITU PEDIÁTRICO
// Cobrindo Métodos de Coleta, Critérios Diagnósticos, Cistite vs Pielonefrite,
// Tratamento Antimicrobiano, Indicações de Internação, USG de Vias Urinárias,
// UCM e Graus de RVU, Cintilografia com DMSA, Manejo do RVU,
// Válvula de Uretra Posterior (VUP), Quimioprofilaxia e DTUI/Constipação.
// ============================================================================
export const QUESTOES_ITU_PEDIATRICO_100: RawCardioQuestion[] = ${JSON.stringify(rawItu100, null, 2)};

// ============================================================================
// BANCO COM 100 QUESTÕES COMPLETAS DE CRESCIMENTO E SEUS DISTÚRBIOS
// Cobrindo Velocidade de Crescimento, Curvas da OMS, Estatura-Alvo Parental,
// Idade Óssea (Greulich & Pyle), Variantes Normais (RCCP e BEF),
// Displasias Ósseas (Acondroplasia e Léri-Weill), Causas Cromossômicas e
// Sindrômicas (Turner, Noonan, Prader-Willi, Silver-Russell), RN PIG e Catch-up,
// Causas Endócrinas (DGH, Hipotireoidismo, Cushing), Doenças Crônicas
// (Celíaca, DRC, Crohn), Raquitismo e Alta Estatura (Marfan, Klinefelter, Gigantismo).
// ============================================================================
export const QUESTOES_CRESCIMENTO_100: RawCardioQuestion[] = ${JSON.stringify(rawCresc100, null, 2)};

// Mapeamento das 100 questões de Cardio para a interface Question do simulado
const cardioPediatricaAsQuestions: Question[] = QUESTOES_CARDIOLOGIA_PEDIATRICA_100.map((q) => ({
  id: q.id,
  specialty: 'Pediatria',
  topic: 'CARDIOLOGIA PEDIATRICA',
  subtopic: q.subtema || 'CARDIOLOGIA PEDIATRICA',
  institution: 'Residência Médica / Medcurso',
  year: 2024,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    letter: alt.id as 'A' | 'B' | 'C' | 'D',
    text: alt.texto,
  })),
  correctOption: q.correta as 'A' | 'B' | 'C' | 'D',
  generalComment: q.comentarioGeral,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id as 'A' | 'B' | 'C' | 'D',
    text: alt.texto,
    isCorrect: alt.id === q.correta,
    explanation: q.comentariosAlternativas[alt.id as keyof typeof q.comentariosAlternativas] || '',
  })),
}));

// Mapeamento das 100 questões de ITU para a interface Question do simulado
const ituPediatricoAsQuestions: Question[] = QUESTOES_ITU_PEDIATRICO_100.map((q) => ({
  id: q.id,
  specialty: 'Pediatria',
  topic: 'ITU PEDIATRICO',
  subtopic: q.subtema || 'ITU PEDIATRICO',
  institution: 'Residência Médica / SBP',
  year: 2024,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    letter: alt.id as 'A' | 'B' | 'C' | 'D',
    text: alt.texto,
  })),
  correctOption: q.correta as 'A' | 'B' | 'C' | 'D',
  generalComment: q.comentarioGeral,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id as 'A' | 'B' | 'C' | 'D',
    text: alt.texto,
    isCorrect: alt.id === q.correta,
    explanation: q.comentariosAlternativas[alt.id as keyof typeof q.comentariosAlternativas] || '',
  })),
}));

// Mapeamento das 100 questões de Crescimento para a interface Question do simulado
const crescimentoPediatricoAsQuestions: Question[] = QUESTOES_CRESCIMENTO_100.map((q) => ({
  id: q.id,
  specialty: 'Pediatria',
  topic: 'CRESCIMENTO E SEUS DISTURBIOS',
  subtopic: q.subtema || 'CRESCIMENTO E SEUS DISTURBIOS',
  institution: 'Residência Médica / SBP',
  year: 2024,
  statement: q.enunciado,
  options: q.alternativas.map((alt) => ({
    letter: alt.id as 'A' | 'B' | 'C' | 'D',
    text: alt.texto,
  })),
  correctOption: q.correta as 'A' | 'B' | 'C' | 'D',
  generalComment: q.comentarioGeral,
  optionsExplanations: q.alternativas.map((alt) => ({
    letter: alt.id as 'A' | 'B' | 'C' | 'D',
    text: alt.texto,
    isCorrect: alt.id === q.correta,
    explanation: q.comentariosAlternativas[alt.id as keyof typeof q.comentariosAlternativas] || '',
  })),
}));

// Questões estáticas base das demais especialidades (Clínica Médica, Cirurgia, Ginecologia, Preventiva)
const baseStaticQuestions: Question[] = [
  ${baseStaticBody}
];

// Unifica todas as questões sem duplicatas
const idsSet = new Set<string>();
const allCombined: Question[] = [];

for (const q of [
  ...cardioPediatricaAsQuestions,
  ...ituPediatricoAsQuestions,
  ...crescimentoPediatricoAsQuestions,
  ...baseStaticQuestions,
]) {
  if (!idsSet.has(q.id)) {
    idsSet.add(q.id);
    allCombined.push(q);
  }
}

export const questoesData: Question[] = allCombined;
`;

fs.writeFileSync(TARGET_TS, tsOutput, 'utf-8');
console.log(`src/data/questoes.ts escrito com sucesso (100 Cardio + 100 ITU + 100 Crescimento + baseStatic)!`);
