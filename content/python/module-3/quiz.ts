import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'python-m3-quiz',
  courseId: 'python',
  moduleId: 'python-m3',
  title: 'Functions & Lists Quiz',
  titleId: 'Kuis Fungsi & List',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which of the following creates a valid list in Python?',
      questionId: 'Manakah dari berikut ini yang membuat list yang valid dalam bahasa Python?',
      options: ['items = {1, 2, 3}', 'items = <1, 2, 3>', 'items = (1, 2, 3)', 'items = [1, 2, 3]'],
      optionsId: ['items = {1, 2, 3}', 'items = <1, 2, 3>', 'items = (1, 2, 3)', 'items = [1, 2, 3]'],
      correctIndex: 3,
      explanation: 'Lists are always defined using square brackets [].',
      explanationId: 'List (daftar) selalu didefinisikan menggunakan kurung siku [].',
    },
    {
      id: 'q2',
      question: 'Which method is used to add a new item to the END of a list?',
      questionId: 'Fungsi (method) apa yang digunakan untuk menambahkan item baru ke bagian AKHIR sebuah list?',
      options: ['.add()', '.insert()', '.append()', '.push()'],
      optionsId: ['.add()', '.insert()', '.append()', '.push()'],
      correctIndex: 2,
      explanation: 'The append() method adds a single item to the end of a list.',
      explanationId: 'Metode append() menambahkan satu item ke akhir sebuah list.',
    },
    {
      id: 'q3',
      question: 'Which keyword is used to create a function in Python?',
      questionId: 'Kata kunci mana yang digunakan untuk membuat sebuah fungsi di Python?',
      options: ['function', 'def', 'create', 'func'],
      optionsId: ['function', 'def', 'create', 'func'],
      correctIndex: 1,
      explanation: '"def" stands for "define" and is used to create custom functions.',
      explanationId: '"def" adalah singkatan dari "define" (mendefinisikan) dan digunakan untuk membuat fungsi kustom.',
    }
  ],
};

export default quiz;
