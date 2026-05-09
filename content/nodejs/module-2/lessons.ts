import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'nodejs-m2-l1',
    courseId: 'nodejs',
    moduleId: 'nodejs-m2',
    title: 'POST Requests',
    titleId: 'Permintaan POST',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'While GET is for retrieving data, POST is for sending data (like submitting a form). Use app.post() to handle it.',
        contentId: 'Jika GET untuk mengambil data, POST digunakan untuk mengirim data (seperti mengirim formulir). Gunakan app.post() untuk menanganinya.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'app.post("/users", (req, res) => {\n  const newUser = req.body;\n  res.send("User created");\n});',
      },
    ],
    practiceCode: '// Buat route POST untuk "/login"\napp.\n',
    practiceHint: 'app.post("/login", (req, res) => {});',
    practiceHintId: 'Gunakan app.post("/login", (req, res) => {});',
  },
  {
    id: 'nodejs-m2-l2',
    courseId: 'nodejs',
    moduleId: 'nodejs-m2',
    title: 'URL Parameters',
    titleId: 'Parameter URL',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'You can capture dynamic values from the URL using req.params. For example, /users/:id captures the ID.',
        contentId: 'Anda bisa menangkap nilai dinamis dari URL menggunakan req.params. Contohnya, /users/:id akan menangkap nilai ID.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'app.get("/users/:id", (req, res) => {\n  const userId = req.params.id;\n  res.send("Fetching user " + userId);\n});',
      },
    ],
    practiceCode: '// Ambil parameter "id" dari request\napp.get("/books/:id", (req, res) => {\n  const bookId = \n});',
    practiceHint: 'req.params.id;',
    practiceHintId: 'Gunakan req.params.id;',
  },
  {
    id: 'nodejs-m2-l3',
    courseId: 'nodejs',
    moduleId: 'nodejs-m2',
    title: 'Middleware',
    titleId: 'Middleware',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Middleware are functions that run before your final route handler. They can modify requests or check authentication.',
        contentId: 'Middleware adalah fungsi yang berjalan sebelum handler route akhir Anda. Mereka dapat memodifikasi request atau mengecek otentikasi.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'app.use(express.json()); // Built-in middleware for JSON\n\napp.use((req, res, next) => {\n  console.log("Request received!");\n  next(); // Go to the next function\n});',
      },
    ],
    practiceCode: '// Panggil fungsi next() agar middleware ini melanjutkan proses\napp.use((req, res, next) => {\n  console.log("Time:", Date.now());\n  \n});',
    practiceHint: 'next();',
    practiceHintId: 'Panggil next();',
  }
];

export default lessons;
