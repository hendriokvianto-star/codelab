import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'mongodb-m1-quiz',
  moduleId: 'mongodb-m1',
  courseId: 'mongodb',
  title: 'Quiz: Intro to NoSQL',
  titleId: 'Kuis: Pengenalan NoSQL',
  questions: [
    {
      id: 'q1',
      question: 'Which of the following best describes MongoDB?',
      questionId: 'Manakah dari berikut ini yang paling mendeskripsikan MongoDB?',
      options: [
        'A relational database using tables and rows',
        'A NoSQL database that stores data in flexible, JSON-like documents',
        'A tool for styling web pages',
        'A JavaScript framework for the backend'
      ],
      optionsId: [
        'Database relasional yang menggunakan tabel dan baris',
        'Database NoSQL yang menyimpan data dalam dokumen fleksibel mirip JSON',
        'Alat untuk memberi gaya (styling) pada halaman web',
        'Framework JavaScript untuk backend'
      ],
      correctIndex: 1,
      explanation: 'MongoDB is a document-oriented NoSQL database that stores data in BSON format.',
      explanationId: 'MongoDB adalah database NoSQL berorientasi dokumen yang menyimpan data dalam format BSON.',
    },
    {
      id: 'q2',
      question: 'What is the MongoDB equivalent of a SQL Table?',
      questionId: 'Apa padanan MongoDB untuk Tabel (Table) pada SQL?',
      options: [
        'Document',
        'Collection',
        'Database',
        'Row'
      ],
      optionsId: [
        'Document (Dokumen)',
        'Collection (Koleksi)',
        'Database',
        'Row (Baris)'
      ],
      correctIndex: 1,
      explanation: 'In MongoDB, a Collection is equivalent to a SQL Table, and a Document is equivalent to a SQL Row.',
      explanationId: 'Di MongoDB, Collection setara dengan Tabel SQL, dan Document setara dengan Baris (Row) SQL.',
    },
    {
      id: 'q3',
      question: 'Which command is used in mongosh to switch to a specific database?',
      questionId: 'Perintah manakah yang digunakan di mongosh untuk beralih ke database tertentu?',
      options: [
        'switch db_name',
        'change db_name',
        'use db_name',
        'select db_name'
      ],
      optionsId: [
        'switch nama_db',
        'change nama_db',
        'use nama_db',
        'select nama_db'
      ],
      correctIndex: 2,
      explanation: 'The `use` command is used to switch to a database, or create it lazily if it does not yet exist.',
      explanationId: 'Perintah `use` digunakan untuk beralih ke database, atau membuatnya secara otomatis jika belum ada.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
