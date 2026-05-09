import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'mongodb-m2-quiz',
  moduleId: 'mongodb-m2',
  courseId: 'mongodb',
  title: 'Quiz: Basic CRUD Operations',
  titleId: 'Kuis: Operasi CRUD Dasar',
  questions: [
    {
      id: 'q1',
      question: 'Which method is used to insert multiple documents at once in MongoDB?',
      questionId: 'Metode manakah yang digunakan untuk menyisipkan banyak dokumen sekaligus di MongoDB?',
      options: [
        'insertAll()',
        'addMany()',
        'insertMany()',
        'createMultiple()'
      ],
      optionsId: [
        'insertAll()',
        'addMany()',
        'insertMany()',
        'createMultiple()'
      ],
      correctIndex: 2,
      explanation: '`insertMany()` takes an array of objects and inserts them all into the collection.',
      explanationId: '`insertMany()` menerima array berisi objek dan menyisipkan semuanya ke dalam koleksi.',
    },
    {
      id: 'q2',
      question: 'What happens if you run `db.users.find()` with no arguments?',
      questionId: 'Apa yang terjadi jika Anda menjalankan `db.users.find()` tanpa argumen?',
      options: [
        'It returns an error',
        'It returns all documents in the "users" collection',
        'It deletes all users',
        'It returns only the first user'
      ],
      optionsId: [
        'Akan mengembalikan pesan error',
        'Akan mengembalikan semua dokumen di koleksi "users"',
        'Akan menghapus semua pengguna (users)',
        'Akan mengembalikan hanya pengguna pertama'
      ],
      correctIndex: 1,
      explanation: 'Calling `find()` without any arguments (or with an empty object `{}`) retrieves all documents from the collection.',
      explanationId: 'Memanggil `find()` tanpa argumen (atau dengan objek kosong `{}`) mengambil semua dokumen dari koleksi.',
    },
    {
      id: 'q3',
      question: 'Which operator must be used to safely update specific fields without overwriting the entire document?',
      questionId: 'Operator manakah yang harus digunakan untuk memperbarui field tertentu dengan aman tanpa menimpa seluruh dokumen?',
      options: [
        '$update',
        '$modify',
        '$set',
        '$change'
      ],
      optionsId: [
        '$update',
        '$modify',
        '$set',
        '$change'
      ],
      correctIndex: 2,
      explanation: 'The `$set` operator replaces the value of a field with the specified value, leaving the rest of the document untouched.',
      explanationId: 'Operator `$set` mengganti nilai sebuah field dengan nilai yang ditentukan, tanpa mengubah sisa isi dokumen tersebut.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
