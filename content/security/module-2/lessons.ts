import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'security-m2-l1',
    courseId: 'security',
    moduleId: 'security-m2',
    title: 'Broken Authentication',
    titleId: 'Broken Authentication (Autentikasi Rusak)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Broken Authentication occurs when an application improperly verifies a user\'s identity or manages their session. This allows attackers to compromise passwords, keys, or session tokens.',
        contentId: 'Broken Authentication (Autentikasi Rusak) terjadi ketika aplikasi memverifikasi identitas pengguna atau mengelola sesi mereka secara tidak tepat. Hal ini memungkinkan penyerang menyusupi kata sandi, kunci, atau token sesi.',
      },
      {
        type: 'text',
        content: 'Common flaws include permitting brute-force attacks (no login rate limiting), allowing weak passwords like "123456", and exposing session IDs in the URL.',
        contentId: 'Kelemahan umum termasuk mengizinkan serangan brute-force (tidak ada pembatasan jumlah login), membiarkan kata sandi lemah seperti "123456", dan mengekspos ID sesi di URL.',
      },
      {
        type: 'text',
        content: 'Mitigation: Implement Multi-Factor Authentication (MFA), enforce password complexity rules, and limit failed login attempts.',
        contentId: 'Mitigasi: Terapkan Autentikasi Multi-Faktor (MFA), tegakkan aturan kerumitan kata sandi, dan batasi upaya login yang gagal.',
      },
    ],
  },
  {
    id: 'security-m2-l2',
    courseId: 'security',
    moduleId: 'security-m2',
    title: 'Secure Password Hashing',
    titleId: 'Hashing Kata Sandi yang Aman',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'NEVER store passwords in plain text! If your database is breached, hackers will instantly have everyone\'s password. Instead, passwords must be hashed.',
        contentId: 'JANGAN PERNAH menyimpan kata sandi dalam teks biasa (plain text)! Jika database Anda diretas, peretas akan langsung memiliki kata sandi semua orang. Sebaliknya, kata sandi harus di-hash.',
      },
      {
        type: 'text',
        content: 'Hashing is a one-way mathematical function. You cannot "decrypt" a hash back into the password. To verify a login, you hash the input password and compare it to the stored hash.',
        contentId: 'Hashing adalah fungsi matematika satu arah. Anda tidak dapat "mendekripsi" hash kembali menjadi kata sandi. Untuk memverifikasi login, Anda melakukan hash pada kata sandi yang dimasukkan dan membandingkannya dengan hash yang disimpan.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// Example using bcrypt in Node.js\nconst bcrypt = require(\'bcrypt\');\n\n// Generate a hash with a "salt" (random data added to the password)\nconst hash = await bcrypt.hash(\'mySecretPassword123\', 10);\n\n// Check if password is correct\nconst match = await bcrypt.compare(\'mySecretPassword123\', hash);',
      },
      {
        type: 'text',
        content: 'Always use algorithms designed for passwords like `bcrypt`, `Argon2`, or `scrypt`, as they are deliberately slow to prevent hackers from guessing passwords rapidly.',
        contentId: 'Selalu gunakan algoritma yang dirancang untuk kata sandi seperti `bcrypt`, `Argon2`, atau `scrypt`, karena algoritma tersebut sengaja dibuat lambat untuk mencegah peretas menebak kata sandi dengan cepat.',
      },
    ],
  },
  {
    id: 'security-m2-l3',
    courseId: 'security',
    moduleId: 'security-m2',
    title: 'JWT & Secure Cookies',
    titleId: 'JWT & Cookies yang Aman',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'JSON Web Tokens (JWT) are often used to maintain sessions in modern apps. However, storing a JWT in `localStorage` makes it vulnerable to theft via Cross-Site Scripting (XSS).',
        contentId: 'JSON Web Tokens (JWT) sering digunakan untuk mempertahankan sesi di aplikasi modern. Namun, menyimpan JWT di `localStorage` membuatnya rentan terhadap pencurian melalui Cross-Site Scripting (XSS).',
      },
      {
        type: 'text',
        content: 'To secure session tokens, store them in HTTP Cookies configured with the `HttpOnly` and `Secure` flags.',
        contentId: 'Untuk mengamankan token sesi, simpan di dalam Cookie HTTP yang dikonfigurasi dengan flag `HttpOnly` dan `Secure`.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// Setting a secure cookie in Express.js\nres.cookie(\'token\', jwtToken, {\n  httpOnly: true,  // JavaScript cannot access this cookie (prevents XSS theft)\n  secure: true,    // Cookie is only sent over HTTPS\n  sameSite: \'strict\' // Prevents CSRF attacks\n});',
      },
    ],
  },
];

export default lessons;
