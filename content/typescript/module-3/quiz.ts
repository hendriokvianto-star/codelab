import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'ts-m3-quiz',
  courseId: 'typescript',
  moduleId: 'ts-m3',
  title: 'Functions & Any Quiz',
  titleId: 'Kuis Fungsi & Tipe Any',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'What is the return type of a function that doesn\'t return anything?',
      questionId: 'Apa tipe kembalian (return type) untuk fungsi yang tidak mengembalikan nilai apa pun?',
      options: ['null', 'undefined', 'void', 'empty'],
      optionsId: ['null', 'undefined', 'void', 'empty'],
      correctIndex: 2,
      explanation: 'Functions that don\'t return a value should be typed as void.',
      explanationId: 'Fungsi yang tidak melakukan "return" nilai harus diberi tipe void.',
    },
    {
      id: 'q2',
      question: 'Why is the "any" type considered bad practice in TypeScript?',
      questionId: 'Mengapa penggunaan tipe "any" dianggap praktik yang buruk di TypeScript?',
      options: ['It slows down compilation', 'It disables type checking, effectively making it plain JavaScript', 'It takes up too much memory', 'It crashes the browser'],
      optionsId: ['Memperlambat kompilasi', 'Mematikan pengecekan tipe, sehingga kode kembali menjadi seperti JavaScript biasa', 'Memakan terlalu banyak memori', 'Membuat browser crash'],
      correctIndex: 1,
      explanation: 'Using "any" defeats the entire purpose of using TypeScript because it ignores type safety.',
      explanationId: 'Menggunakan "any" mengalahkan tujuan utama menggunakan TypeScript karena ia mengabaikan keamanan tipe.',
    },
    {
      id: 'q3',
      question: 'How do you type a function parameter named "age" to be a number?',
      questionId: 'Bagaimana cara Anda memberi tipe number pada parameter fungsi yang bernama "age"?',
      options: ['function(age = number)', 'function(number age)', 'function(age: number)', 'function(age) as number'],
      optionsId: ['function(age = number)', 'function(number age)', 'function(age: number)', 'function(age) as number'],
      correctIndex: 2,
      explanation: 'In TypeScript, the syntax is parameterName: type.',
      explanationId: 'Di TypeScript, sintaksnya adalah namaParameter: tipe.',
    }
  ],
};

export default quiz;
