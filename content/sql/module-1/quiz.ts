import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'sql-m1-quiz',
  courseId: 'sql',
  moduleId: 'sql-m1',
  title: 'Queries Quiz',
  titleId: 'Kuis Kueri (Queries)',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which statement is used to extract data from a database?',
      questionId: 'Perintah mana yang digunakan untuk mengambil data dari sebuah database?',
      options: ['EXTRACT', 'GET', 'SELECT', 'OPEN'],
      optionsId: ['EXTRACT', 'GET', 'SELECT', 'OPEN'],
      correctIndex: 2,
      explanation: 'SELECT is the standard command for querying data.',
      explanationId: 'SELECT adalah perintah standar untuk mengambil data.',
    },
    {
      id: 'q2',
      question: 'What does the asterisk (*) stand for in a SELECT statement?',
      questionId: 'Apa arti tanda bintang (*) dalam sebuah perintah SELECT?',
      options: ['Select all tables', 'Select all columns', 'Multiply data', 'Select a random row'],
      optionsId: ['Pilih semua tabel', 'Pilih semua kolom', 'Mengalikan data', 'Pilih baris acak'],
      correctIndex: 1,
      explanation: 'The * character is a wildcard that means "all columns".',
      explanationId: 'Karakter * adalah wildcard yang berarti "semua kolom".',
    },
    {
      id: 'q3',
      question: 'Which clause is used to filter the data?',
      questionId: 'Klausa mana yang digunakan untuk memfilter data?',
      options: ['FILTER', 'WHERE', 'ORDER BY', 'SORT BY'],
      optionsId: ['FILTER', 'WHERE', 'ORDER BY', 'SORT BY'],
      correctIndex: 1,
      explanation: 'The WHERE clause specifies the conditions that records must meet.',
      explanationId: 'Klausa WHERE menentukan kondisi yang harus dipenuhi oleh setiap baris.',
    }
  ],
};

export default quiz;
