import fs from 'fs';
import { cardioRevPart1 } from './sections_cardio_rev/part1.js';
import { cardioRevPart2 } from './sections_cardio_rev/part2.js';

const combined = [...cardioRevPart1, ...cardioRevPart2];
console.log('Total revision questions:', combined.length);

const content = `import type { RawCardioQuestion } from './questoes';

export const QUESTOES_REVISAO_CARDIOLOGIA_PEDIATRICA_30: RawCardioQuestion[] = ${JSON.stringify(combined, null, 2)};
`;

fs.writeFileSync('src/data/questoesRevisaoCardio.ts', content, 'utf8');
console.log('Successfully wrote src/data/questoesRevisaoCardio.ts');
