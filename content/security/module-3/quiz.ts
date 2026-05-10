import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'security-m3-quiz',
  moduleId: 'security-m3',
  courseId: 'security',
  title: 'Quiz: Data Protection & Defensive Practices',
  titleId: 'Kuis: Perlindungan Data & Praktik Defensif',
  questions: [
    {
      id: 'q1',
      question: 'What is the primary purpose of using HTTPS (TLS encryption) on your website?',
      questionId: 'Apa tujuan utama penggunaan HTTPS (enkripsi TLS) di situs web Anda?',
      options: [
        'To compress the data and make the website load faster',
        'To prevent Man-in-the-Middle attackers from intercepting or altering data in transit',
        'To prevent SQL Injection attacks on the server',
        'To hash passwords before sending them to the server'
      ],
      optionsId: [
        'Untuk mengompres data dan membuat situs web dimuat lebih cepat',
        'Untuk mencegah penyerang Man-in-the-Middle menyadap atau mengubah data saat transit',
        'Untuk mencegah serangan SQL Injection di server',
        'Untuk men-hash kata sandi sebelum mengirimkannya ke server'
      ],
      correctIndex: 1,
      explanation: 'HTTPS encrypts data while it is moving across the network (in transit), ensuring confidentiality and integrity against eavesdroppers.',
      explanationId: 'HTTPS mengenkripsi data saat bergerak melintasi jaringan (saat transit), memastikan kerahasiaan dan integritas terhadap penyadap.',
    },
    {
      id: 'q2',
      question: 'How do you mitigate Cross-Site Request Forgery (CSRF) attacks?',
      questionId: 'Bagaimana cara Anda memitigasi serangan Cross-Site Request Forgery (CSRF)?',
      options: [
        'By including a secret, unpredictable Anti-CSRF token in every state-changing form submission',
        'By using prepared statements in the database',
        'By encrypting passwords with bcrypt',
        'By escaping all HTML output'
      ],
      optionsId: [
        'Dengan menyertakan token Anti-CSRF yang rahasia dan tidak dapat diprediksi di setiap pengiriman form yang mengubah status',
        'Dengan menggunakan prepared statements di dalam database',
        'Dengan mengenkripsi kata sandi menggunakan bcrypt',
        'Dengan melakukan escaping terhadap seluruh output HTML'
      ],
      correctIndex: 0,
      explanation: 'An Anti-CSRF token ensures that the form submission originated from your actual application, not a malicious third-party site.',
      explanationId: 'Token Anti-CSRF memastikan bahwa pengiriman form berasal dari aplikasi Anda yang sebenarnya, bukan dari situs pihak ketiga yang berbahaya.',
    },
    {
      id: 'q3',
      question: 'Which HTTP Security Header prevents malicious sites from embedding your application in an iframe (Clickjacking)?',
      questionId: 'Header Keamanan HTTP manakah yang mencegah situs berbahaya menyematkan aplikasi Anda di dalam iframe (Clickjacking)?',
      options: [
        'Strict-Transport-Security',
        'Content-Security-Policy',
        'X-Frame-Options',
        'Authorization'
      ],
      optionsId: [
        'Strict-Transport-Security',
        'Content-Security-Policy',
        'X-Frame-Options',
        'Authorization'
      ],
      correctIndex: 2,
      explanation: 'The X-Frame-Options header dictates whether a browser should be allowed to render a page in a <frame>, <iframe>, <embed> or <object>.',
      explanationId: 'Header X-Frame-Options mendikte apakah browser diizinkan untuk merender halaman di dalam <frame>, <iframe>, <embed>, atau <object>.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
