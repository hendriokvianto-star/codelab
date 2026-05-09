import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'sql-m2-quiz',
  courseId: 'sql',
  moduleId: 'sql-m2',
  title: 'Data Manipulation Quiz',
  titleId: 'Kuis Manipulasi Data',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which statement is used to add a new row of data to a table?',
      questionId: 'Perintah apa yang digunakan untuk menambahkan baris data baru ke sebuah tabel?',
      options: ['ADD NEW', 'INSERT INTO', 'UPDATE DATA', 'CREATE ROW'],
      optionsId: ['ADD NEW', 'INSERT INTO', 'UPDATE DATA', 'CREATE ROW'],
      correctIndex: 1,
      explanation: 'INSERT INTO is used to insert new records.',
      explanationId: 'INSERT INTO digunakan untuk memasukkan data baru.',
    },
    {
      id: 'q2',
      question: 'What happens if you run an UPDATE statement without a WHERE clause?',
      questionId: 'Apa yang terjadi jika Anda menjalankan perintah UPDATE tanpa klausa WHERE?',
      options: ['Nothing happens', 'An error is thrown', 'It updates only the first row', 'It updates EVERY row in the table'],
      optionsId: ['Tidak terjadi apa-apa', 'Akan menghasilkan error', 'Hanya baris pertama yang ter-update', 'Akan meng-update SEMUA baris di tabel'],
      correctIndex: 3,
      explanation: 'Without a WHERE clause, the UPDATE applies to all rows in the table.',
      explanationId: 'Tanpa klausa WHERE, pembaruan berlaku untuk semua baris dalam tabel.',
    },
    {
      id: 'q3',
      question: 'Which statement is used to remove a record?',
      questionId: 'Perintah apa yang digunakan untuk menghapus data?',
      options: ['REMOVE FROM', 'DELETE FROM', 'DROP FROM', 'TRUNCATE'],
      optionsId: ['REMOVE FROM', 'DELETE FROM', 'DROP FROM', 'TRUNCATE'],
      correctIndex: 1,
      explanation: 'DELETE FROM removes rows from a table.',
      explanationId: 'DELETE FROM menghapus baris dari tabel.',
    }
  ],
};

export default quiz;
