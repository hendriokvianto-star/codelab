import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'security-m3-l1',
    courseId: 'security',
    moduleId: 'security-m3',
    title: 'Encryption in Transit & at Rest',
    titleId: 'Enkripsi Saat Transit & Saat Istirahat',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Data must be protected in two states: when it is moving across the network (In Transit) and when it is stored on a disk (At Rest).',
        contentId: 'Data harus dilindungi dalam dua keadaan: saat bergerak melintasi jaringan (In Transit / Saat Transit) dan saat disimpan di disk (At Rest / Saat Istirahat).',
      },
      {
        type: 'text',
        content: 'For Data In Transit, ALWAYS enforce HTTPS. HTTPS uses TLS encryption to ensure that attackers cannot intercept or modify the communication between the user and your server (Man-in-the-Middle attacks).',
        contentId: 'Untuk Data Saat Transit, SELALU wajibkan HTTPS. HTTPS menggunakan enkripsi TLS untuk memastikan penyerang tidak dapat menyadap atau memodifikasi komunikasi antara pengguna dan server Anda (Serangan Man-in-the-Middle).',
      },
      {
        type: 'text',
        content: 'For Data At Rest, highly sensitive information like credit card numbers or Social Security Numbers must be encrypted in your database using strong algorithms (like AES-256).',
        contentId: 'Untuk Data Saat Istirahat, informasi yang sangat sensitif seperti nomor kartu kredit atau Nomor Jaminan Sosial harus dienkripsi di database Anda menggunakan algoritma yang kuat (seperti AES-256).',
      },
    ],
  },
  {
    id: 'security-m3-l2',
    courseId: 'security',
    moduleId: 'security-m3',
    title: 'Cross-Site Request Forgery (CSRF)',
    titleId: 'Cross-Site Request Forgery (CSRF)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'CSRF occurs when a malicious website tricks a user\'s browser into performing an unwanted action on a trusted site where the user is currently authenticated.',
        contentId: 'CSRF terjadi ketika situs web berbahaya menipu browser pengguna untuk melakukan tindakan yang tidak diinginkan di situs terpercaya di mana pengguna sedang login (terautentikasi).',
      },
      {
        type: 'text',
        content: 'For example, if you are logged into your bank, a malicious site could secretly submit a form to transfer money out of your account without your knowledge.',
        contentId: 'Misalnya, jika Anda masuk ke bank Anda, situs berbahaya dapat secara diam-diam mengirimkan form untuk mentransfer uang dari rekening Anda tanpa sepengetahuan Anda.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<!-- Example of CSRF protection token in a form -->\n<form action="/transfer" method="POST">\n  <input type="hidden" name="csrf_token" value="abc123xyz_secure_random_token" />\n  <input type="number" name="amount" />\n  <button type="submit">Transfer</button>\n</form>',
      },
      {
        type: 'text',
        content: 'Mitigation: Require an unpredictable "Anti-CSRF Token" for any state-changing requests (POST, PUT, DELETE). The server rejects requests missing the correct token.',
        contentId: 'Mitigasi: Wajibkan "Token Anti-CSRF" yang tidak dapat diprediksi untuk setiap permintaan yang mengubah status (POST, PUT, DELETE). Server akan menolak permintaan yang tidak memiliki token yang benar.',
      },
    ],
  },
  {
    id: 'security-m3-l3',
    courseId: 'security',
    moduleId: 'security-m3',
    title: 'HTTP Security Headers',
    titleId: 'Header Keamanan HTTP',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Security Headers are HTTP response headers that tell the browser how to behave securely when handling your site\'s content.',
        contentId: 'Header Keamanan adalah header respons HTTP yang memberi tahu browser bagaimana harus berperilaku secara aman saat menangani konten situs Anda.',
      },
      {
        type: 'text',
        content: 'Content Security Policy (CSP): Prevents XSS by declaring which dynamic resources (like scripts) are allowed to load.',
        contentId: 'Content Security Policy (CSP): Mencegah XSS dengan mendeklarasikan sumber daya dinamis mana (seperti skrip) yang diizinkan untuk dimuat.',
      },
      {
        type: 'text',
        content: 'X-Frame-Options: Prevents your site from being loaded inside an iframe, defending against "Clickjacking" attacks.',
        contentId: 'X-Frame-Options: Mencegah situs Anda dimuat di dalam iframe, bertahan dari serangan "Clickjacking".',
      },
      {
        type: 'text',
        content: 'Strict-Transport-Security (HSTS): Forces browsers to only use HTTPS, preventing downgrade attacks.',
        contentId: 'Strict-Transport-Security (HSTS): Memaksa browser untuk HANYA menggunakan HTTPS, mencegah serangan downgrade ke HTTP.',
      },
    ],
  },
];

export default lessons;
