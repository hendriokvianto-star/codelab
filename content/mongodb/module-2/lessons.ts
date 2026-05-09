import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'mongodb-m2-l1',
    courseId: 'mongodb',
    moduleId: 'mongodb-m2',
    title: 'Insert Documents',
    titleId: 'Menyisipkan Dokumen',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'To add data to a MongoDB collection, you use the `insertOne()` or `insertMany()` methods.',
        contentId: 'Untuk menambahkan data ke koleksi MongoDB, Anda menggunakan metode `insertOne()` atau `insertMany()`.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'db.users.insertOne({\n  name: "Budi",\n  age: 28,\n  skills: ["JavaScript", "MongoDB"]\n});\n\n// Or insert multiple:\ndb.users.insertMany([\n  { name: "Siti", age: 24 },\n  { name: "Agus", age: 30 }\n]);',
      },
      {
        type: 'text',
        content: 'If the collection `users` doesn\'t exist, MongoDB will create it automatically when you insert the first document.',
        contentId: 'Jika koleksi `users` belum ada, MongoDB akan membuatnya secara otomatis saat Anda menyisipkan dokumen pertama.',
      },
    ],
  },
  {
    id: 'mongodb-m2-l2',
    courseId: 'mongodb',
    moduleId: 'mongodb-m2',
    title: 'Querying Data (Find)',
    titleId: 'Mencari Data (Find)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'To read data, you use `find()` to get multiple documents or `findOne()` to get the first document that matches your query.',
        contentId: 'Untuk membaca data, Anda menggunakan `find()` untuk mendapatkan banyak dokumen atau `findOne()` untuk mendapatkan dokumen pertama yang cocok dengan kueri Anda.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// Find all users\ndb.users.find();\n\n// Find users named "Budi"\ndb.users.find({ name: "Budi" });\n\n// Find exactly one user named "Siti"\ndb.users.findOne({ name: "Siti" });',
      },
      {
        type: 'text',
        content: 'Passing an empty object `{}` (or nothing) to `find()` will return all documents in the collection.',
        contentId: 'Meneruskan objek kosong `{}` (atau tidak ada argumen) ke `find()` akan mengembalikan semua dokumen di dalam koleksi.',
      },
    ],
  },
  {
    id: 'mongodb-m2-l3',
    courseId: 'mongodb',
    moduleId: 'mongodb-m2',
    title: 'Update & Delete',
    titleId: 'Update & Delete',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'To modify data, use `updateOne()` or `updateMany()`. You MUST use update operators like `$set` to change field values.',
        contentId: 'Untuk memodifikasi data, gunakan `updateOne()` atau `updateMany()`. Anda HARUS menggunakan operator pembaruan seperti `$set` untuk mengubah nilai kolom.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// Update: Change Budi\'s age to 29\ndb.users.updateOne(\n  { name: "Budi" },        // 1. The filter\n  { $set: { age: 29 } }    // 2. The update operation\n);\n\n// Delete: Remove user named Agus\ndb.users.deleteOne({ name: "Agus" });',
      },
      {
        type: 'text',
        content: 'If you omit `$set` and just pass an object, MongoDB will replace the ENTIRE document with that object (in older MongoDB versions using `.update()`). Always use `$set` to update specific fields!',
        contentId: 'Jika Anda menghilangkan `$set` dan hanya meneruskan objek, MongoDB akan mengganti SELURUH dokumen dengan objek tersebut (pada versi MongoDB lama dengan `.update()`). Selalu gunakan `$set` untuk memperbarui field tertentu!',
      },
    ],
  },
];

export default lessons;
