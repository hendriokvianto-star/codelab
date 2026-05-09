import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'js-m3-quiz',
  courseId: 'javascript',
  moduleId: 'js-m3',
  title: 'Control Flow Quiz',
  titleId: 'Kuis Kontrol Alur',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'js-m3-q1',
      question: 'What does the === operator check?',
      questionId: 'Apa yang diperiksa oleh operator ===?',
      options: ['Value only', 'Type only', 'Value and type', 'Reference'],
      optionsId: ['Nilai saja', 'Tipe saja', 'Nilai dan tipe', 'Referensi'],
      correctIndex: 2,
      explanation: '=== checks both value and type (strict equality).',
      explanationId: '=== memeriksa nilai dan tipe (strict equality).',
    },
    {
      id: 'js-m3-q2',
      question: 'What happens if you forget "break" in a switch case?',
      questionId: 'Apa yang terjadi jika lupa "break" di switch case?',
      options: ['Syntax error', 'Only that case runs', 'Fall through to next cases', 'Loop restarts'],
      optionsId: ['Error sintaks', 'Hanya case itu yang jalan', 'Fall through ke case berikutnya', 'Loop restart'],
      correctIndex: 2,
      explanation: 'Without break, execution falls through to subsequent cases.',
      explanationId: 'Tanpa break, eksekusi akan jatuh ke case-case berikutnya.',
    },
    {
      id: 'js-m3-q3',
      question: 'Which loop is best for iterating over array values?',
      questionId: 'Loop mana yang paling tepat untuk iterasi nilai array?',
      options: ['for...in', 'for...of', 'while', 'do...while'],
      optionsId: ['for...in', 'for...of', 'while', 'do...while'],
      correctIndex: 1,
      explanation: 'for...of iterates over array values directly.',
      explanationId: 'for...of mengiterasi nilai array secara langsung.',
    },
    {
      id: 'js-m3-q4',
      question: 'What does "continue" do inside a loop?',
      questionId: 'Apa yang dilakukan "continue" di dalam loop?',
      options: ['Stops the loop', 'Skips current iteration', 'Restarts the loop', 'Exits the function'],
      optionsId: ['Menghentikan loop', 'Melewati iterasi saat ini', 'Memulai ulang loop', 'Keluar dari fungsi'],
      correctIndex: 1,
      explanation: 'continue skips the rest of the current iteration and jumps to the next one.',
      explanationId: 'continue melewati sisa iterasi saat ini dan lompat ke iterasi berikutnya.',
    },
  ],
};

export default quiz;
