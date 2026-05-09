import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'js-m2-quiz',
  courseId: 'javascript',
  moduleId: 'js-m2',
  title: 'Variables & Data Types Quiz',
  titleId: 'Kuis Variabel & Tipe Data',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'js-m2-q1',
      question: 'Which keyword should you use for a variable that never changes?',
      questionId: 'Keyword mana yang harus digunakan untuk variabel yang tidak pernah berubah?',
      options: ['var', 'let', 'const', 'static'],
      optionsId: ['var', 'let', 'const', 'static'],
      correctIndex: 2,
      explanation: 'const declares a variable that cannot be reassigned.',
      explanationId: 'const mendeklarasikan variabel yang tidak bisa di-reassign.',
    },
    {
      id: 'js-m2-q2',
      question: 'What does typeof "42" return?',
      questionId: 'Apa hasil dari typeof "42"?',
      options: ['number', 'string', 'boolean', 'undefined'],
      optionsId: ['number', 'string', 'boolean', 'undefined'],
      correctIndex: 1,
      explanation: '"42" is in quotes, making it a string, not a number.',
      explanationId: '"42" berada dalam tanda kutip, menjadikannya string, bukan number.',
    },
    {
      id: 'js-m2-q3',
      question: 'What is the index of the first element in an array?',
      questionId: 'Berapa index dari elemen pertama dalam array?',
      options: ['1', '0', '-1', 'first'],
      optionsId: ['1', '0', '-1', 'first'],
      correctIndex: 1,
      explanation: 'Arrays in JavaScript are zero-indexed; the first element is at index 0.',
      explanationId: 'Array di JavaScript dimulai dari nol; elemen pertama berada di index 0.',
    },
    {
      id: 'js-m2-q4',
      question: 'How do you add an element to the end of an array?',
      questionId: 'Bagaimana cara menambah elemen di akhir array?',
      options: ['arr.add()', 'arr.push()', 'arr.append()', 'arr.insert()'],
      optionsId: ['arr.add()', 'arr.push()', 'arr.append()', 'arr.insert()'],
      correctIndex: 1,
      explanation: 'push() adds one or more elements to the end of an array.',
      explanationId: 'push() menambahkan satu atau lebih elemen di akhir array.',
    },
  ],
};

export default quiz;
