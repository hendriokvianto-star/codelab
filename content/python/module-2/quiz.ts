import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'python-m2-quiz',
  courseId: 'python',
  moduleId: 'python-m2',
  title: 'Control Flow Quiz',
  titleId: 'Kuis Alur Kontrol',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'What keyword does Python use instead of "else if"?',
      questionId: 'Kata kunci apa yang digunakan Python sebagai pengganti "else if"?',
      options: ['elseif', 'else_if', 'elif', 'switch'],
      optionsId: ['elseif', 'else_if', 'elif', 'switch'],
      correctIndex: 2,
      explanation: '"elif" is the Python keyword for testing multiple conditions.',
      explanationId: '"elif" adalah kata kunci Python untuk menguji lebih dari satu kondisi.',
    },
    {
      id: 'q2',
      question: 'Which punctuation must be placed at the end of an "if", "for", or "while" statement?',
      questionId: 'Tanda baca apa yang harus ditempatkan di akhir statement "if", "for", atau "while"?',
      options: ['Semicolon (;)', 'Colon (:)', 'Period (.)', 'Comma (,)'],
      optionsId: ['Titik koma (;)', 'Titik dua (:)', 'Titik (.)', 'Koma (,)'],
      correctIndex: 1,
      explanation: 'A colon (:) is required to indicate the start of a new indented code block.',
      explanationId: 'Titik dua (:) diwajibkan untuk menandakan dimulainya blok kode baru yang memiliki indentasi.',
    },
    {
      id: 'q3',
      question: 'What does range(3) generate in a for loop?',
      questionId: 'Apa yang dihasilkan oleh fungsi range(3) dalam sebuah for loop?',
      options: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '1, 2'],
      optionsId: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '1, 2'],
      correctIndex: 1,
      explanation: 'range(3) starts from 0 and stops before reaching 3, generating 0, 1, and 2.',
      explanationId: 'range(3) dimulai dari angka 0 dan berhenti sebelum mencapai angka 3, menghasilkan 0, 1, dan 2.',
    }
  ],
};

export default quiz;
