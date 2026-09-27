import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TARGET_FILE = path.resolve(__dirname, '../src/data/questoes.ts');

export const questions = [];

export function q({ id, subtopic, inst, year, statement, A, B, C, D, ans, comment, expA, expB, expC, expD }) {
  questions.push({
    id,
    specialty: 'Pediatria',
    topic: 'CARDIOLOGIA PEDIATRICA',
    subtopic,
    institution: inst,
    year,
    statement,
    options: [
      { letter: 'A', text: A },
      { letter: 'B', text: B },
      { letter: 'C', text: C },
      { letter: 'D', text: D },
    ],
    correctOption: ans,
    generalComment: comment,
    optionsExplanations: [
      { letter: 'A', text: A, isCorrect: ans === 'A', explanation: expA },
      { letter: 'B', text: B, isCorrect: ans === 'B', explanation: expB },
      { letter: 'C', text: C, isCorrect: ans === 'C', explanation: expC },
      { letter: 'D', text: D, isCorrect: ans === 'D', explanation: expD },
    ],
  });
}
