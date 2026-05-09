import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'css-m2-quiz',
  courseId: 'css',
  moduleId: 'css-m2',
  title: 'Box Model Quiz',
  titleId: 'Kuis Box Model',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which property creates space INSIDE an element, between the content and the border?',
      questionId: 'Properti mana yang menciptakan ruang DI DALAM elemen, antara konten dan border?',
      options: ['margin', 'padding', 'spacing', 'border-spacing'],
      optionsId: ['margin', 'padding', 'spacing', 'border-spacing'],
      correctIndex: 1,
      explanation: 'Padding creates space inside the element\'s border.',
      explanationId: 'Padding menciptakan ruang di dalam border elemen.',
    },
    {
      id: 'q2',
      question: 'How do you create a solid, 1px black border?',
      questionId: 'Bagaimana cara membuat border solid berwarna hitam setebal 1px?',
      options: ['border: solid black 1px;', 'border: 1px black solid;', 'border: 1px solid black;', 'All of the above'],
      optionsId: ['border: solid black 1px;', 'border: 1px black solid;', 'border: 1px solid black;', 'Semua jawaban benar'],
      correctIndex: 3,
      explanation: 'The order of border shorthand values does not matter.',
      explanationId: 'Urutan nilai pada properti shorthand border tidak mempengaruhi hasil.',
    },
    {
      id: 'q3',
      question: 'Why do we often use box-sizing: border-box?',
      questionId: 'Mengapa kita sering menggunakan box-sizing: border-box?',
      options: ['To make boxes round', 'To include padding/border in the element\'s width/height calculation', 'To add a shadow', 'To make boxes responsive'],
      optionsId: ['Membuat kotak menjadi bulat', 'Untuk menyertakan padding/border dalam perhitungan lebar/tinggi elemen', 'Untuk menambahkan bayangan', 'Membuat kotak responsif'],
      correctIndex: 1,
      explanation: 'border-box makes width and height calculations predictable.',
      explanationId: 'border-box membuat kalkulasi tinggi dan lebar lebih dapat diprediksi.',
    }
  ],
};

export default quiz;
