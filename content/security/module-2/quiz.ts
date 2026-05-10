import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'security-m2-quiz',
  moduleId: 'security-m2',
  courseId: 'security',
  title: 'Quiz: Authentication & Sessions',
  titleId: 'Kuis: Autentikasi & Sesi',
  questions: [
    {
      id: 'q1',
      question: 'Why should you use an algorithm like bcrypt instead of MD5 for hashing passwords?',
      questionId: 'Mengapa Anda harus menggunakan algoritma seperti bcrypt daripada MD5 untuk melakukan hashing kata sandi?',
      options: [
        'MD5 produces longer hashes',
        'MD5 is too new and experimental',
        'bcrypt is deliberately slow to defend against rapid brute-force guessing',
        'bcrypt allows you to decrypt the password later if the user forgets it'
      ],
      optionsId: [
        'MD5 menghasilkan hash yang lebih panjang',
        'MD5 terlalu baru dan masih eksperimental',
        'bcrypt sengaja dibuat lambat untuk bertahan dari tebakan brute-force yang cepat',
        'bcrypt memungkinkan Anda mendekripsi kata sandi nanti jika pengguna lupa'
      ],
      correctIndex: 2,
      explanation: 'Password hashing algorithms like bcrypt are computationally slow by design. This makes it extremely difficult for hackers to crack passwords using massive computing power.',
      explanationId: 'Algoritma hashing kata sandi seperti bcrypt secara desain komputasinya lambat. Hal ini membuat peretas sangat sulit untuk meretas kata sandi menggunakan daya komputasi yang besar.',
    },
    {
      id: 'q2',
      question: 'Which vulnerability does limiting failed login attempts (Rate Limiting) primarily prevent?',
      questionId: 'Kerentanan apa yang utamanya dapat dicegah dengan membatasi upaya login yang gagal (Rate Limiting)?',
      options: [
        'SQL Injection',
        'Brute-force attacks (Broken Authentication)',
        'Cross-Site Scripting (XSS)',
        'Database crashes'
      ],
      optionsId: [
        'SQL Injection',
        'Serangan brute-force (Broken Authentication)',
        'Cross-Site Scripting (XSS)',
        'Database error/mogok'
      ],
      correctIndex: 1,
      explanation: 'Rate limiting prevents brute-force attacks, where an attacker automates thousands of login attempts trying to guess a user\'s password.',
      explanationId: 'Pembatasan laju (rate limiting) mencegah serangan brute-force, di mana penyerang mengotomatiskan ribuan upaya masuk yang mencoba menebak sandi pengguna.',
    },
    {
      id: 'q3',
      question: 'To prevent a JWT token from being stolen by a malicious JavaScript (XSS attack), how should it be stored?',
      questionId: 'Untuk mencegah token JWT dicuri oleh JavaScript berbahaya (serangan XSS), bagaimana token tersebut harus disimpan?',
      options: [
        'In localStorage',
        'In sessionStorage',
        'In a hidden HTML input field',
        'In an HttpOnly Cookie'
      ],
      optionsId: [
        'Di dalam localStorage',
        'Di dalam sessionStorage',
        'Di kolom input HTML yang tersembunyi (hidden)',
        'Di dalam HttpOnly Cookie'
      ],
      correctIndex: 3,
      explanation: 'Setting the HttpOnly flag on a cookie ensures that it cannot be accessed via client-side JavaScript, protecting it from XSS theft.',
      explanationId: 'Menyetel flag HttpOnly pada cookie memastikan bahwa cookie tersebut tidak dapat diakses melalui JavaScript di sisi klien, sehingga melindunginya dari pencurian XSS.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
