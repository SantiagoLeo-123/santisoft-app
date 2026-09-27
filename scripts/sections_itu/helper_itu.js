export const ituQuestions = [];

export function q(question) {
  ituQuestions.push({
    id: question.id,
    specialty: 'Pediatria',
    topic: 'ITU PEDIATRICO',
    subtema: question.subtopic,
    institution: question.inst || 'Residência Médica / SBP',
    year: question.year || 2024,
    statement: question.statement,
    options: [
      { letter: 'A', text: question.A },
      { letter: 'B', text: question.B },
      { letter: 'C', text: question.C },
      { letter: 'D', text: question.D },
    ],
    correctOption: question.ans,
    generalComment: question.comment,
    optionsExplanations: [
      { letter: 'A', text: question.A, isCorrect: question.ans === 'A', explanation: question.expA },
      { letter: 'B', text: question.B, isCorrect: question.ans === 'B', explanation: question.expB },
      { letter: 'C', text: question.C, isCorrect: question.ans === 'C', explanation: question.expC },
      { letter: 'D', text: question.D, isCorrect: question.ans === 'D', explanation: question.expD },
    ],
  });
}
