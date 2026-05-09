import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'nodejs-m1-quiz',
  courseId: 'nodejs',
  moduleId: 'nodejs-m1',
  title: 'Server Basics Quiz',
  titleId: 'Kuis Dasar Server',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'What is Express.js?',
      questionId: 'Apa itu Express.js?',
      options: ['A database', 'A frontend framework', 'A Node.js web application framework', 'A programming language'],
      optionsId: ['Sebuah database', 'Framework frontend', 'Framework aplikasi web untuk Node.js', 'Bahasa pemrograman'],
      correctIndex: 2,
      explanation: 'Express is a fast, unopinionated, minimalist web framework for Node.js.',
      explanationId: 'Express adalah framework web yang cepat, tidak kaku, dan minimalis untuk Node.js.',
    },
    {
      id: 'q2',
      question: 'Which method handles HTTP GET requests?',
      questionId: 'Metode mana yang menangani HTTP GET requests?',
      options: ['app.post()', 'app.listen()', 'app.get()', 'app.request()'],
      optionsId: ['app.post()', 'app.listen()', 'app.get()', 'app.request()'],
      correctIndex: 2,
      explanation: 'app.get() is used to handle GET requests to a specific path.',
      explanationId: 'app.get() digunakan untuk menangani permintaan GET ke jalur tertentu.',
    },
    {
      id: 'q3',
      question: 'Which method starts the server and makes it listen for connections?',
      questionId: 'Metode mana yang memulai server dan membuatnya mendengarkan koneksi?',
      options: ['app.start()', 'app.listen()', 'server.run()', 'app.init()'],
      optionsId: ['app.start()', 'app.listen()', 'server.run()', 'app.init()'],
      correctIndex: 1,
      explanation: 'app.listen() binds and listens for connections on the specified host and port.',
      explanationId: 'app.listen() mengikat dan mendengarkan koneksi pada host dan port yang ditentukan.',
    }
  ],
};

export default quiz;
