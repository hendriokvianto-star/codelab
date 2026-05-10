import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'golang-m2-quiz',
  moduleId: 'golang-m2',
  courseId: 'golang',
  title: 'Quiz: Building REST APIs',
  titleId: 'Kuis: Membangun REST API',
  questions: [
    {
      id: 'q1',
      question: 'Which built-in Go package allows you to create a production-ready web server without any external frameworks?',
      questionId: 'Paket bawaan Go manakah yang memungkinkan Anda membuat server web siap produksi tanpa kerangka kerja eksternal apa pun?',
      options: [
        'web/server',
        'io/network',
        'net/http',
        'golang/express'
      ],
      optionsId: [
        'web/server',
        'io/network',
        'net/http',
        'golang/express'
      ],
      correctIndex: 2,
      explanation: 'The `net/http` package provides HTTP client and server implementations that are incredibly robust and widely used in production.',
      explanationId: 'Paket `net/http` menyediakan implementasi klien dan server HTTP yang sangat tangguh dan banyak digunakan dalam produksi.',
    },
    {
      id: 'q2',
      question: 'Why might a developer choose to use a framework like Gin or Fiber instead of just using net/http?',
      questionId: 'Mengapa seorang developer mungkin memilih untuk menggunakan framework seperti Gin atau Fiber daripada hanya menggunakan net/http?',
      options: [
        'Because net/http cannot serve JSON data',
        'Because net/http is deprecated by Google',
        'To get easier dynamic routing (like /users/:id) and simpler middleware management',
        'Because frameworks compile faster than the standard library'
      ],
      optionsId: [
        'Karena net/http tidak dapat menyajikan data JSON',
        'Karena net/http sudah tidak digunakan (deprecated) oleh Google',
        'Untuk mendapatkan perutean dinamis yang lebih mudah (seperti /users/:id) dan manajemen middleware yang lebih sederhana',
        'Karena framework dikompilasi lebih cepat daripada pustaka standar'
      ],
      correctIndex: 2,
      explanation: 'Frameworks provide quality-of-life features like easy URL parameter extraction, grouping routes, and simplified JSON handling out of the box.',
      explanationId: 'Framework menyediakan fitur kemudahan seperti ekstraksi parameter URL yang mudah, pengelompokan rute, dan penanganan JSON yang disederhanakan secara langsung.',
    },
    {
      id: 'q3',
      question: 'In Go, what is the term used for converting a Go Struct into a JSON string format?',
      questionId: 'Di Go, apa istilah yang digunakan untuk mengonversi Go Struct ke dalam format string JSON?',
      options: [
        'Stringify',
        'Marshal',
        'Parse',
        'Unmarshal'
      ],
      optionsId: [
        'Stringify',
        'Marshal',
        'Parse',
        'Unmarshal'
      ],
      correctIndex: 1,
      explanation: 'In the `encoding/json` package, converting a struct to JSON is called "Marshal", while converting JSON to a struct is "Unmarshal".',
      explanationId: 'Dalam paket `encoding/json`, mengonversi struct menjadi JSON disebut "Marshal", sementara mengonversi JSON menjadi struct adalah "Unmarshal".',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
