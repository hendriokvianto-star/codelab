import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'nodejs-m3-quiz',
  courseId: 'nodejs',
  moduleId: 'nodejs-m3',
  title: 'REST APIs Quiz',
  titleId: 'Kuis REST APIs',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which Express method is best for sending a JSON object as a response?',
      questionId: 'Metode Express mana yang terbaik untuk mengirim objek JSON sebagai respons?',
      options: ['res.send()', 'res.json()', 'res.text()', 'res.render()'],
      optionsId: ['res.send()', 'res.json()', 'res.text()', 'res.render()'],
      correctIndex: 1,
      explanation: 'res.json() converts the object to JSON and sets the correct Content-Type headers automatically.',
      explanationId: 'res.json() mengonversi objek menjadi JSON dan mengatur header Content-Type dengan benar secara otomatis.',
    },
    {
      id: 'q2',
      question: 'What HTTP status code generally means "Not Found"?',
      questionId: 'Kode status HTTP berapa yang secara umum berarti "Tidak Ditemukan"?',
      options: ['200', '404', '500', '401'],
      optionsId: ['200', '404', '500', '401'],
      correctIndex: 1,
      explanation: '404 indicates that the server cannot find the requested resource.',
      explanationId: '404 mengindikasikan bahwa server tidak dapat menemukan sumber daya yang diminta.',
    },
    {
      id: 'q3',
      question: 'In a RESTful API, which HTTP method is traditionally used to Update an existing record?',
      questionId: 'Dalam RESTful API, metode HTTP apa yang secara tradisional digunakan untuk Memperbarui (Update) data yang sudah ada?',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      optionsId: ['GET', 'POST', 'PUT', 'DELETE'],
      correctIndex: 2,
      explanation: 'PUT (or PATCH) is used to update existing data.',
      explanationId: 'PUT (atau PATCH) digunakan untuk memperbarui data yang sudah ada.',
    }
  ],
};

export default quiz;
