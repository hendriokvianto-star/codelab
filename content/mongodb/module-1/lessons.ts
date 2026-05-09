import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'mongodb-m1-l1',
    courseId: 'mongodb',
    moduleId: 'mongodb-m1',
    title: 'What is NoSQL & MongoDB?',
    titleId: 'Apa itu NoSQL & MongoDB?',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'MongoDB is a NoSQL database. Unlike traditional SQL databases that use tables and rows, MongoDB is a document-oriented database that stores data in flexible, JSON-like documents.',
        contentId: 'MongoDB adalah database NoSQL. Tidak seperti database SQL tradisional yang menggunakan tabel dan baris, MongoDB adalah database berorientasi dokumen yang menyimpan data dalam dokumen fleksibel mirip JSON.',
      },
      {
        type: 'text',
        content: 'This schema-less approach means fields can vary from document to document, making it highly scalable and flexible for modern web applications.',
        contentId: 'Pendekatan tanpa skema (schema-less) ini berarti kolom (field) dapat bervariasi dari satu dokumen ke dokumen lainnya, menjadikannya sangat terukur (scalable) dan fleksibel untuk aplikasi web modern.',
      },
    ],
  },
  {
    id: 'mongodb-m1-l2',
    courseId: 'mongodb',
    moduleId: 'mongodb-m1',
    title: 'Collections & Documents',
    titleId: 'Collection & Dokumen',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'In SQL, you have Tables and Rows. In MongoDB, you have Collections and Documents. A Database contains Collections, and a Collection contains Documents.',
        contentId: 'Dalam SQL, Anda memiliki Tabel dan Baris. Di MongoDB, Anda memiliki Collection (koleksi) dan Dokumen. Sebuah Database berisi Collection, dan Collection berisi Dokumen.',
      },
      {
        type: 'code',
        language: 'json',
        content: '{\n  "_id": "5f1a2b3c4d5e",\n  "name": "Alex",\n  "age": 25,\n  "skills": ["JavaScript", "React"]\n}',
      },
      {
        type: 'text',
        content: 'Documents use BSON (Binary JSON). They support arrays and nested objects, meaning you can store complex data structures easily without needing complex table joins.',
        contentId: 'Dokumen menggunakan BSON (Binary JSON). Mereka mendukung array dan objek bersarang (nested objects), yang berarti Anda dapat menyimpan struktur data kompleks dengan mudah tanpa memerlukan join tabel yang rumit.',
      },
    ],
  },
  {
    id: 'mongodb-m1-l3',
    courseId: 'mongodb',
    moduleId: 'mongodb-m1',
    title: 'MongoDB Shell (mongosh)',
    titleId: 'MongoDB Shell (mongosh)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'The MongoDB Shell (`mongosh`) is the quickest way to interact with your database from the terminal.',
        contentId: 'MongoDB Shell (`mongosh`) adalah cara tercepat untuk berinteraksi dengan database Anda dari terminal.',
      },
      {
        type: 'code',
        language: 'bash',
        content: 'mongosh\n> show dbs\n> use myApp\n> show collections',
      },
      {
        type: 'text',
        content: '`show dbs` lists all databases. `use [dbName]` switches to a specific database (or creates it if it doesn\'t exist). `show collections` lists all collections in the current database.',
        contentId: '`show dbs` menampilkan semua database. `use [dbName]` beralih ke database tertentu (atau membuatnya jika belum ada). `show collections` menampilkan semua koleksi dalam database saat ini.',
      },
    ],
  },
];

export default lessons;
