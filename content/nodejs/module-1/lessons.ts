import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'nodejs-m1-l1',
    courseId: 'nodejs',
    moduleId: 'nodejs-m1',
    title: 'Hello Node.js',
    titleId: 'Halo Node.js',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Node.js lets you run JavaScript on the server. Express is a framework that makes building servers much easier.',
        contentId: 'Node.js memungkinkan Anda menjalankan JavaScript di server. Express adalah kerangka kerja yang membuat pembuatan server menjadi jauh lebih mudah.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'const express = require("express");\nconst app = express();',
      },
    ],
    practiceCode: '// Inisialisasi Express app\nconst express = require("express");\n',
    practiceHint: 'const app = express();',
    practiceHintId: 'Gunakan const app = express();',
  },
  {
    id: 'nodejs-m1-l2',
    courseId: 'nodejs',
    moduleId: 'nodejs-m1',
    title: 'Creating a Route',
    titleId: 'Membuat Route (Rute)',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'A route defines how your app responds to a client request. The most common is app.get().',
        contentId: 'Route mendefinisikan bagaimana aplikasi Anda merespons permintaan klien. Yang paling umum adalah app.get().',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'app.get("/", (req, res) => {\n  res.send("Hello World");\n});',
      },
    ],
    practiceCode: '// Buat route GET untuk "/" yang mengirimkan teks "Welcome"\napp.get("/", (req, res) => {\n  \n});',
    practiceHint: 'res.send("Welcome");',
    practiceHintId: 'Gunakan res.send("Welcome");',
  },
  {
    id: 'nodejs-m1-l3',
    courseId: 'nodejs',
    moduleId: 'nodejs-m1',
    title: 'Starting the Server',
    titleId: 'Menjalankan Server',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'To make your server listen for requests, you use app.listen(port).',
        contentId: 'Untuk membuat server Anda mendengarkan permintaan, Anda menggunakan app.listen(port).',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'app.listen(3000, () => {\n  console.log("Server running on port 3000");\n});',
      },
    ],
    practiceCode: '// Jalankan server di port 3000\napp.\n',
    practiceHint: 'app.listen(3000);',
    practiceHintId: 'Gunakan app.listen(3000);',
  }
];

export default lessons;
