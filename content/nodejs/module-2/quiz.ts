import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'nodejs-m2-quiz',
  courseId: 'nodejs',
  moduleId: 'nodejs-m2',
  title: 'Routing & Middleware Quiz',
  titleId: 'Kuis Routing & Middleware',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which method is used to handle data submission, like a login form?',
      questionId: 'Metode apa yang digunakan untuk menangani pengiriman data, seperti form login?',
      options: ['app.get()', 'app.post()', 'app.submit()', 'app.send()'],
      optionsId: ['app.get()', 'app.post()', 'app.submit()', 'app.send()'],
      correctIndex: 1,
      explanation: 'app.post() handles HTTP POST requests, which are typically used for submitting data.',
      explanationId: 'app.post() menangani permintaan HTTP POST, yang biasanya digunakan untuk mengirim data.',
    },
    {
      id: 'q2',
      question: 'How do you access the dynamic "id" in this route: /users/:id ?',
      questionId: 'Bagaimana cara mengakses "id" dinamis pada route ini: /users/:id ?',
      options: ['req.body.id', 'req.query.id', 'req.params.id', 'res.id'],
      optionsId: ['req.body.id', 'req.query.id', 'req.params.id', 'res.id'],
      correctIndex: 2,
      explanation: 'Route parameters are stored in the req.params object.',
      explanationId: 'Parameter route disimpan di dalam objek req.params.',
    },
    {
      id: 'q3',
      question: 'What MUST a custom middleware function call to pass control to the next handler?',
      questionId: 'Apa yang HARUS dipanggil oleh fungsi middleware kustom untuk meneruskan kontrol ke handler berikutnya?',
      options: ['continue()', 'next()', 'pass()', 'forward()'],
      optionsId: ['continue()', 'next()', 'pass()', 'forward()'],
      correctIndex: 1,
      explanation: 'If next() is not called, the request will be left hanging and the client will timeout.',
      explanationId: 'Jika next() tidak dipanggil, request akan menggantung dan klien akan mengalami timeout.',
    }
  ],
};

export default quiz;
