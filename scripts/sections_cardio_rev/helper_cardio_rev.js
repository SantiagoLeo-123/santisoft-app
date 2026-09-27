export const cardioRevQuestions = [];

const TARGET_LETTERS = ['A', 'B', 'C', 'D'];

export function q(question) {
  const index = cardioRevQuestions.length;
  const targetAns = TARGET_LETTERS[index % 4];

  let optA = question.A;
  let optB = question.B;
  let optC = question.C;
  let optD = question.D;
  let expA = question.expA;
  let expB = question.expB;
  let expC = question.expC;
  let expD = question.expD;

  if (question.ans !== targetAns) {
    const opts = { A: optA, B: optB, C: optC, D: optD };
    const exps = { A: expA, B: expB, C: expC, D: expD };

    const oldCorrect = question.ans;
    const oldTarget = targetAns;

    const tempOpt = opts[oldTarget];
    const tempExp = exps[oldTarget];

    opts[oldTarget] = opts[oldCorrect];
    exps[oldTarget] = exps[oldCorrect];

    opts[oldCorrect] = tempOpt;
    exps[oldCorrect] = tempExp;

    optA = opts.A;
    optB = opts.B;
    optC = opts.C;
    optD = opts.D;
    expA = exps.A;
    expB = exps.B;
    expC = exps.C;
    expD = exps.D;
  }

  cardioRevQuestions.push({
    id: question.id,
    isRevisao: true,
    specialty: 'Pediatria',
    topic: 'CARDIOLOGIA PEDIATRICA',
    subtema: question.subtopic || 'Cardiologia Pediátrica - Revisão Mentor',
    institution: question.inst || 'Residência Médica / Mentor SantiSOFT',
    year: question.year || 2024,
    statement: question.statement,
    options: [
      { letter: 'A', text: optA },
      { letter: 'B', text: optB },
      { letter: 'C', text: optC },
      { letter: 'D', text: optD },
    ],
    correctOption: targetAns,
    generalComment: question.comment,
    optionsExplanations: [
      { letter: 'A', text: optA, isCorrect: targetAns === 'A', explanation: expA },
      { letter: 'B', text: optB, isCorrect: targetAns === 'B', explanation: expB },
      { letter: 'C', text: optC, isCorrect: targetAns === 'C', explanation: expC },
      { letter: 'D', text: optD, isCorrect: targetAns === 'D', explanation: expD },
    ],
  });
}
