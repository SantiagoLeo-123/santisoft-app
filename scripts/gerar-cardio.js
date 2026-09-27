/**
 * Script gerador de 300 questões de CARDIOLOGIA PEDIÁTRICA via Google Gemini API
 * Endpoint: gemini-2.5-flash com fetch nativo
 * Execução: node scripts/gerar-cardio.js
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_FILE = path.resolve(__dirname, '../src/data/questoes.json');
const API_KEY = process.env.GEMINI_API_KEY;

// 20 Subtemas Clínicos Detalhados de Cardiologia Pediátrica
const SUBTEMAS_CARDIOLOGIA = [
  { slug: 'civ', nome: 'Comunicação Interventricular (CIV) - Tipos, Fisiopatologia, Hiperfluxo e Fechamento' },
  { slug: 'cia', nome: 'Comunicação Interatrial (CIA) - Ostium Secundum, Ostium Primum e B2 Desdobrada Fixa' },
  { slug: 'pca', nome: 'Persistência do Canal Arterial (PCA) - Prematuros, Fechamento Farmacológico e Cirúrgico' },
  { slug: 'coarctacao', nome: 'Coarctação de Aorta - Gradiente Pressórico, Valva Bicúspide e Síndrome de Turner' },
  { slug: 'fallot', nome: 'Tetralogia de Fallot - Componentes Anatômicos, Crises Hipoxêmicas e Cirurgias' },
  { slug: 'tga', nome: 'Transposição das Grandes Artérias (TGA) - Circulação em Paralelo, Rashkind e Jatene' },
  { slug: 'kawasaki', nome: 'Doença de Kawasaki - Critérios Diagnósticos, Aneurismas de Coronária e Imunoglobulina IV' },
  { slug: 'febre-reumatica', nome: 'Febre Reumática e Cardite - Critérios de Jones, Insuficiência Mitral e Penicilina' },
  { slug: 'tsv', nome: 'Taquicardia Supraventricular (TSV) - Manobras Vagais, Adenosina e Estabilidade Hemodinâmica' },
  { slug: 'teste-coracaozinho', nome: 'Teste do Coraçãozinho (Oximetria de Pulso) - Triagem Neonatal de Cardiopatias Críticas' },
  { slug: 'dsav', nome: 'Defeito do Septo Atrioventricular (DSAV) - Síndrome de Down e Desvio de Eixo no ECG' },
  { slug: 'ebstein', nome: 'Anomalia de Ebstein - Cúspides Tricúspides Bbaixas, Lítio Gestacional e Galope' },
  { slug: 'miocardite', nome: 'Miocardite Viral Aguda - Pródromo Viral, Disfunção Ventricular e Choque Cardiogênico' },
  { slug: 'eisenmenger', nome: 'Síndrome de Eisenmenger - Hipertensão Arterial Pulmonar Fixa e Inversão de Shunt' },
  { slug: 'sopro-still', nome: 'Sopro Inocente de Still - Timbre Musical, Ausculta Dinâmica e Conduta Benigna' },
  { slug: 'shce', nome: 'Síndrome do Coração Esquerdo Hipoplásico (SHCE) - Cardiopatia Sistêmica Canal-Dependente' },
  { slug: 'datvp', nome: 'Drenagem Anômala Total de Veias Pulmonares (DATVP) - Formas Obstrutivas e Tempestade de Neve' },
  { slug: 'estenoses', nome: 'Estenose Pulmonar e Aórtica Congênitas - Valvoplastia por Cateter-Balão e Gradientes' },
  { slug: 'lqts', nome: 'Canalopatias e Síndrome do QT Longo Congênito (LQTS) - Gatilhos, Genética e Betabloqueador' },
  { slug: 'endocardite', nome: 'Endocardite Infecciosa Pediátrica - Profilaxia Antimicrobiana em Odontologia e Critérios de Duke' },
];

const QUESTIONS_PER_SUBTHEME = 15; // 20 * 15 = 300 questões

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function callGeminiGenerate(prompt) {
  // Tenta gemini-2.5-flash conforme solicitado; se a API indicar depreciação (404), usa gemini-3.8-flash
  const models = ['gemini-2.5-flash', 'gemini-3.8-flash'];
  let lastError = null;

  for (const model of models) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.7,
          },
        }),
      });

      if (response.status === 404 && model === 'gemini-2.5-flash') {
        // Modelo 2.5 não disponível nesta chave/região, tenta o 3.8 recomendado
        continue;
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro na API do Gemini [${model}] (${response.status}): ${errorText}`);
      }

      const data = await response.json();
      const textOutput = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!textOutput) {
        throw new Error('Nenhum texto retornado na resposta do Gemini.');
      }

      return JSON.parse(textOutput);
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError;
}

async function main() {
  console.log('='.repeat(70));
  console.log('  SantiSOFT - Gerador de 300 Questões de Cardiologia Pediátrica');
  console.log('  Modelo: gemini-2.5-flash | Meta: 20 subtemas x 15 questões');
  console.log('='.repeat(70));

  if (!API_KEY) {
    console.error('\n[AVISO CRÍTICO] A variável de ambiente GEMINI_API_KEY não foi encontrada.');
    console.log('Para gerar novas questões com a API do Gemini, execute:');
    console.log('  export GEMINI_API_KEY="sua_chave_aqui"');
    console.log('  node scripts/gerar-cardio.js\n');
    console.log(`Verificando arquivo existente em: ${OUTPUT_FILE}`);
    if (fs.existsSync(OUTPUT_FILE)) {
      const existing = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
      console.log(`-> O arquivo já existe com ${existing.length} questões cadastradas.`);
    }
    process.exit(0);
  }

  // Carrega questões pré-existentes se houver
  let allQuestions = [];
  if (fs.existsSync(OUTPUT_FILE)) {
    try {
      allQuestions = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
      console.log(`-> Base existente carregada com ${allQuestions.length} questões.`);
    } catch {
      allQuestions = [];
    }
  }

  const existingIds = new Set(allQuestions.map((q) => q.id));

  for (let i = 0; i < SUBTEMAS_CARDIOLOGIA.length; i++) {
    const subtema = SUBTEMAS_CARDIOLOGIA[i];
    const prefix = `ped-cardio-${subtema.slug}`;
    console.log(`\n[${i + 1}/${SUBTEMAS_CARDIOLOGIA.length}] Gerando ${QUESTIONS_PER_SUBTHEME} questões sobre: "${subtema.nome}"...`);

    const prompt = `
Você é um professor especialista em Cardiologia Pediátrica e elaborador de questões para concursos de Residência Médica do Brasil (estilo Medcurso, USP, UNICAMP, ENARE).
Gere exatamente ${QUESTIONS_PER_SUBTHEME} questões médicas de múltipla escolha INÉDITAS, ricas e detalhadas sobre o subtema: "${subtema.nome}".

Cada questão deve ser formatada como um objeto JSON com o seguinte schema obrigatório:
[
  {
    "id": "${prefix}-01",
    "especialidade": "Pediatria",
    "tema": "CARDIOLOGIA PEDIATRICA",
    "enunciado": "Caso clínico rico com história, exame físico detalhado, parâmetros vitais, ausculta e pergunta direta...",
    "alternativas": [
      { "id": "A", "texto": "..." },
      { "id": "B", "texto": "..." },
      { "id": "C", "texto": "..." },
      { "id": "D", "texto": "..." }
    ],
    "correta": "A", // ou "B", "C", "D"
    "comentarioGeral": "Explicação completa e fundamentada da fisiopatologia, conduta ou diagnóstico...",
    "comentariosAlternativas": {
      "A": "Justificativa detalhada de acerto ou erro...",
      "B": "Justificativa detalhada de acerto ou erro...",
      "C": "Justificativa detalhada de acerto ou erro...",
      "D": "Justificativa detalhada de acerto ou erro..."
    }
  }
]

Regras importantes:
- Os IDs devem ser sequenciais: "${prefix}-01" até "${prefix}-${String(QUESTIONS_PER_SUBTHEME).padStart(2, '0')}".
- Casos clínicos realistas e de alto rendimento.
- 4 alternativas por questão (A, B, C, D).
- Justificativa clara para cada uma das 4 alternativas.
Retorne SOMENTE a lista JSON válida sem markdown ao redor.
`;

    try {
      const generated = await callGeminiGenerate(prompt);
      if (Array.isArray(generated)) {
        let addedCount = 0;
        for (const q of generated) {
          if (!existingIds.has(q.id)) {
            allQuestions.push(q);
            existingIds.add(q.id);
            addedCount++;
          }
        }
        console.log(`  ✓ ${addedCount} questões adicionadas com sucesso (Total acumulado: ${allQuestions.length}).`);
        
        // Salva incrementalmente
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allQuestions, null, 2), 'utf-8');
      } else {
        console.warn(`  ! Resposta não foi um array para o subtema ${subtema.nome}.`);
      }
    } catch (err) {
      console.error(`  ✗ Erro ao gerar para ${subtema.nome}:`, err.message);
    }

    // Intervalo de segurança para respeitar cotas de requisição
    await sleep(2000);
  }

  console.log('\n' + '='.repeat(70));
  console.log(`  Sucesso! Total final de ${allQuestions.length} questões salvas em:`);
  console.log(`  ${OUTPUT_FILE}`);
  console.log('='.repeat(70));
}

main().catch(console.error);
