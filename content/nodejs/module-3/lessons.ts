import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'nodejs-m3-l1',
    courseId: 'nodejs',
    moduleId: 'nodejs-m3',
    title: 'Returning JSON',
    titleId: 'Mengembalikan JSON',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'REST APIs communicate using JSON. In Express, you can easily send JSON responses using res.json().',
        contentId: 'REST API berkomunikasi menggunakan JSON. Di Express, Anda bisa mengirim respons JSON dengan mudah menggunakan res.json().',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'app.get("/api/status", (req, res) => {\n  res.json({ status: "success", code: 200 });\n});',
      },
    ],
    practiceCode: '// Kirimkan respons JSON berisi { message: "Hello API" }\napp.get("/api", (req, res) => {\n  \n});',
    practiceHint: 'res.json({ message: "Hello API" });',
    practiceHintId: 'Gunakan res.json({ message: "Hello API" });',
  },
  {
    id: 'nodejs-m3-l2',
    courseId: 'nodejs',
    moduleId: 'nodejs-m3',
    title: 'HTTP Status Codes',
    titleId: 'Kode Status HTTP',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'You should return proper status codes. 200 = OK, 201 = Created, 400 = Bad Request, 404 = Not Found, 500 = Server Error.',
        contentId: 'Anda harus mengembalikan kode status yang tepat. 200 = OK, 201 = Dibuat, 400 = Permintaan Buruk, 404 = Tidak Ditemukan, 500 = Kesalahan Server.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'app.get("/not-found", (req, res) => {\n  res.status(404).json({ error: "Page not found" });\n});',
      },
    ],
    practiceCode: '// Set status HTTP menjadi 500 (Server Error) sebelum mengirim JSON\napp.get("/error", (req, res) => {\n  res.\n});',
    practiceHint: 'res.status(500).json({ error: "Server Error" });',
    practiceHintId: 'Gunakan res.status(500).json({ error: "Server Error" });',
  },
  {
    id: 'nodejs-m3-l3',
    courseId: 'nodejs',
    moduleId: 'nodejs-m3',
    title: 'The Full CRUD',
    titleId: 'CRUD Sepenuhnya',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'A complete REST API implements CRUD: Create (POST), Read (GET), Update (PUT/PATCH), and Delete (DELETE).',
        contentId: 'REST API yang lengkap mengimplementasikan CRUD: Create (POST), Read (GET), Update (PUT/PATCH), dan Delete (DELETE).',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'app.get("/users", ...);    // Read All\napp.post("/users", ...);   // Create\napp.put("/users/:id", ...); // Update\napp.delete("/users/:id", ...); // Delete',
      },
    ],
    practiceCode: '// Buat route untuk menghapus data (DELETE) ke path "/users/:id"\napp.\n',
    practiceHint: 'app.delete("/users/:id", (req, res) => {});',
    practiceHintId: 'Gunakan app.delete("/users/:id", (req, res) => {});',
  }
];

export default lessons;
