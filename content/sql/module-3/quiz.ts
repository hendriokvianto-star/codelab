import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'sql-m3-quiz',
  courseId: 'sql',
  moduleId: 'sql-m3',
  title: 'Relationships Quiz',
  titleId: 'Kuis Relasi (Relationships)',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which key uniquely identifies a row in a database table?',
      questionId: 'Kunci apa yang secara unik mengidentifikasi sebuah baris di tabel database?',
      options: ['Unique Key', 'Primary Key', 'Foreign Key', 'Master Key'],
      optionsId: ['Unique Key', 'Primary Key', 'Foreign Key', 'Master Key'],
      correctIndex: 1,
      explanation: 'A Primary Key guarantees uniqueness for each row in a table.',
      explanationId: 'Primary Key menjamin keunikan untuk setiap baris dalam tabel.',
    },
    {
      id: 'q2',
      question: 'Which type of JOIN returns records that have matching values in both tables?',
      questionId: 'Jenis JOIN apa yang mengembalikan data yang memiliki nilai cocok di kedua tabel?',
      options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'OUTER JOIN'],
      optionsId: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'OUTER JOIN'],
      correctIndex: 0,
      explanation: 'INNER JOIN returns only the overlapping/matching records.',
      explanationId: 'INNER JOIN hanya mengembalikan record yang tumpang tindih/cocok.',
    },
    {
      id: 'q3',
      question: 'Which function is used to calculate the total sum of a numeric column?',
      questionId: 'Fungsi mana yang digunakan untuk menghitung jumlah total dari sebuah kolom numerik?',
      options: ['TOTAL()', 'COUNT()', 'SUM()', 'ADD()'],
      optionsId: ['TOTAL()', 'COUNT()', 'SUM()', 'ADD()'],
      correctIndex: 2,
      explanation: 'SUM() calculates the total value, while COUNT() calculates the number of rows.',
      explanationId: 'SUM() menghitung total nilainya, sementara COUNT() menghitung jumlah barisnya.',
    }
  ],
};

export default quiz;
