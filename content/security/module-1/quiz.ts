import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'security-m1-quiz',
  moduleId: 'security-m1',
  courseId: 'security',
  title: 'Quiz: OWASP & Injection Attacks',
  titleId: 'Kuis: OWASP & Serangan Injeksi',
  questions: [
    {
      id: 'q1',
      question: 'What is the primary purpose of the OWASP Top 10?',
      questionId: 'Apa tujuan utama dari OWASP Top 10?',
      options: [
        'To list the 10 most popular programming languages',
        'To rank the 10 best frameworks for web development',
        'To highlight the 10 most critical security risks to web applications',
        'To provide 10 free hosting providers'
      ],
      optionsId: [
        'Untuk membuat daftar 10 bahasa pemrograman paling populer',
        'Untuk memeringkat 10 framework terbaik untuk pengembangan web',
        'Untuk menyoroti 10 risiko keamanan paling kritis untuk aplikasi web',
        'Untuk menyediakan 10 penyedia hosting gratis'
      ],
      correctIndex: 2,
      explanation: 'The OWASP Top 10 is an awareness document that represents a broad consensus on the most critical security risks to web applications.',
      explanationId: 'OWASP Top 10 adalah dokumen kesadaran yang mewakili konsensus luas mengenai risiko keamanan paling kritis pada aplikasi web.',
    },
    {
      id: 'q2',
      question: 'What is the most effective defense against SQL Injection?',
      questionId: 'Apa pertahanan paling efektif terhadap serangan SQL Injection?',
      options: [
        'Hiding the database name',
        'Using Parameterized Queries (Prepared Statements)',
        'Disabling JavaScript in the browser',
        'Making passwords longer'
      ],
      optionsId: [
        'Menyembunyikan nama database',
        'Menggunakan Parameterized Queries (Prepared Statements)',
        'Menonaktifkan JavaScript di browser',
        'Membuat kata sandi lebih panjang'
      ],
      correctIndex: 1,
      explanation: 'Parameterized queries ensure that the database treats user input strictly as data, not as executable SQL commands.',
      explanationId: 'Parameterized queries (Kueri berparameter) memastikan bahwa database memperlakukan input pengguna secara ketat sebagai data, bukan sebagai perintah SQL yang dapat dieksekusi.',
    },
    {
      id: 'q3',
      question: 'Which vulnerability occurs when malicious JavaScript is injected and executed in the browsers of other users?',
      questionId: 'Kerentanan manakah yang terjadi ketika JavaScript berbahaya disuntikkan dan dieksekusi di browser pengguna lain?',
      options: [
        'SQL Injection (SQLi)',
        'Cross-Site Scripting (XSS)',
        'Broken Authentication',
        'Man-in-the-Middle (MITM)'
      ],
      optionsId: [
        'SQL Injection (SQLi)',
        'Cross-Site Scripting (XSS)',
        'Broken Authentication',
        'Man-in-the-Middle (MITM)'
      ],
      correctIndex: 1,
      explanation: 'Cross-Site Scripting (XSS) targets the client-side (browser) by tricking it into executing malicious scripts.',
      explanationId: 'Cross-Site Scripting (XSS) menargetkan sisi klien (browser) dengan mengelabuinya agar mengeksekusi skrip berbahaya.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
