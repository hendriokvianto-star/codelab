import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'html-m2-quiz',
  courseId: 'html',
  moduleId: 'html-m2',
  title: 'Lists & Tables Quiz',
  titleId: 'Kuis List & Tabel',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which tag is used to create a numbered list?',
      questionId: 'Tag apa yang digunakan untuk membuat daftar bernomor (ordered list)?',
      options: ['<ul>', '<ol>', '<li>', '<list>'],
      optionsId: ['<ul>', '<ol>', '<li>', '<list>'],
      correctIndex: 1,
      explanation: '<ol> stands for ordered list, which creates a numbered list.',
      explanationId: '<ol> adalah singkatan dari ordered list, yang membuat daftar bernomor.',
    },
    {
      id: 'q2',
      question: 'In an HTML table, which tag denotes a table cell containing data?',
      questionId: 'Dalam tabel HTML, tag mana yang menunjukkan sel tabel yang berisi data?',
      options: ['<tr>', '<th>', '<td>', '<table>'],
      optionsId: ['<tr>', '<th>', '<td>', '<table>'],
      correctIndex: 2,
      explanation: '<td> stands for table data.',
      explanationId: '<td> adalah singkatan dari table data (data tabel).',
    },
    {
      id: 'q3',
      question: 'Which of the following is considered a semantic HTML tag?',
      questionId: 'Manakah dari berikut ini yang dianggap sebagai tag HTML semantik?',
      options: ['<div>', '<span>', '<footer>', '<br>'],
      optionsId: ['<div>', '<span>', '<footer>', '<br>'],
      correctIndex: 2,
      explanation: '<footer> clearly describes its purpose (the footer of a page or section).',
      explanationId: '<footer> dengan jelas menggambarkan tujuannya (bagian bawah halaman atau bagian).',
    }
  ],
};

export default quiz;
