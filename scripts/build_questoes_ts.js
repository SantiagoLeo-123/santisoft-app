import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TARGET_TS = path.resolve(__dirname, '../src/data/questoes.ts');
const TARGET_JSON = path.resolve(__dirname, '../src/data/questoes.json');

import { questions } from './sections/helper.js';
import { loadSec1 } from './sections/sec1_civ.js';
import { loadSec2 } from './sections/sec2_fallot.js';
import { loadSec3 } from './sections/sec3_coarctacao.js';
import { loadSec4 } from './sections/sec4_pca.js';
import { loadSec5 } from './sections/sec5_tga.js';
import { loadSec6 } from './sections/sec6_kawasaki.js';
import { loadSec7 } from './sections/sec7_febre_reumatica.js';
import { loadSec8 } from './sections/sec8_tsv.js';
import { loadSec9 } from './sections/sec9_coracaozinho.js';

loadSec1();
loadSec2();
loadSec3();
loadSec4();
loadSec5();
loadSec6();
loadSec7();
loadSec8();
loadSec9();

console.log(`Carregadas ${questions.length} questões de Cardiologia Pediátrica.`);

if (questions.length !== 100) {
  console.error(`Erro: esperado 100 questões, mas obteve ${questions.length}`);
  process.exit(1);
}

// Converte para o formato de RawJsonQuestion / RawCardioQuestion
const raw100 = questions.map((q) => {
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

// Salva em src/data/questoes.json
fs.writeFileSync(TARGET_JSON, JSON.stringify(raw100, null, 2), 'utf-8');
console.log(`Salvo src/data/questoes.json com sucesso (${raw100.length} questões).`);

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
import questoesJsonRaw from './questoes.json';

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
export const QUESTOES_CARDIOLOGIA_PEDIATRICA_100: RawCardioQuestion[] = ${JSON.stringify(raw100, null, 2)};

// Subconjuntos exportados para retrocompatibilidade
export const QUESTOES_CARDIOLOGIA_PEDIATRICA = QUESTOES_CARDIOLOGIA_PEDIATRICA_100.slice(0, 6);
export const QUESTOES_CARDIOLOGIA_PEDIATRICA_PARTE_2 = QUESTOES_CARDIOLOGIA_PEDIATRICA_100.slice(6, 12);
export const QUESTOES_CARDIOLOGIA_PEDIATRICA_PARTE_3 = QUESTOES_CARDIOLOGIA_PEDIATRICA_100.slice(12, 18);

// Mapeamento das 100 questões para a interface Question do simulado
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

// Questões estáticas base das demais especialidades (Clínica Médica, Cirurgia, Ginecologia, Preventiva)
const baseStaticQuestions: Question[] = [
  ${baseStaticBody}
];

// Unifica todas as questões sem duplicatas
const idsSet = new Set<string>();
const allCombined: Question[] = [];

for (const q of [...cardioPediatricaAsQuestions, ...baseStaticQuestions]) {
  if (!idsSet.has(q.id)) {
    idsSet.add(q.id);
    allCombined.push(q);
  }
}

export const questoesData: Question[] = allCombined;
`;

fs.writeFileSync(TARGET_TS, tsOutput, 'utf-8');
console.log(`src/data/questoes.ts escrito diretamente com sucesso (${raw100.length} questões de cardio pediátrica + ${baseStaticBody.length > 0 ? 'baseStaticQuestions incluído' : ''})!`);
