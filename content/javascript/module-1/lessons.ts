import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'js-m1-l1',
    courseId: 'javascript',
    moduleId: 'js-m1',
    title: 'What is JavaScript?',
    titleId: 'Apa itu JavaScript?',
    xp: 25,
    theory: [
      {
        type: 'text',
        content:
          'JavaScript adalah bahasa pemrograman yang paling populer di dunia. Awalnya dibuat untuk membuat halaman web menjadi interaktif, sekarang JavaScript digunakan di mana-mana: website, server, mobile app, bahkan AI!\n\nJavaScript is the most popular programming language in the world. Originally created to make web pages interactive, JavaScript is now used everywhere: websites, servers, mobile apps, and even AI!',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// Your first JavaScript code!\nconsole.log("Hello, World!");',
      },
      {
        type: 'tip',
        content:
          'console.log() adalah fungsi yang paling sering digunakan untuk menampilkan output di JavaScript. Gunakan ini untuk debugging!\n\nconsole.log() is the most commonly used function to display output in JavaScript. Use it for debugging!',
      },
      {
        type: 'text',
        content:
          'JavaScript berjalan di browser (Chrome, Firefox, Safari) dan juga di server menggunakan Node.js. Ini artinya kamu bisa membangun aplikasi lengkap hanya dengan satu bahasa!\n\nJavaScript runs in browsers (Chrome, Firefox, Safari) and also on servers using Node.js. This means you can build complete applications with just one language!',
      },
    ],
    practiceCode: '// Tulis kode untuk mencetak nama kamu\n// Write code to print your name\nconsole.log("Hello, ");\n',
    practiceHint: 'Replace the empty string with your name',
    practiceHintId: 'Ganti string kosong dengan nama kamu',
    expectedOutput: 'Hello,',
  },
  {
    id: 'js-m1-l2',
    courseId: 'javascript',
    moduleId: 'js-m1',
    title: 'Setting Up Your Environment',
    titleId: 'Menyiapkan Lingkungan Kerja',
    xp: 25,
    theory: [
      {
        type: 'text',
        content:
          'Untuk menulis JavaScript, kamu hanya perlu:\n1. **Browser** — Chrome, Firefox, atau Edge\n2. **Text Editor** — VS Code (gratis dan powerful)\n3. **Console** — Tekan F12 di browser untuk membuka Developer Tools\n\nTo write JavaScript, you only need:\n1. **Browser** — Chrome, Firefox, or Edge\n2. **Text Editor** — VS Code (free and powerful)\n3. **Console** — Press F12 in browser to open Developer Tools',
      },
      {
        type: 'code',
        language: 'html',
        content:
          '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First JS</title>\n</head>\n<body>\n  <h1>Hello JavaScript!</h1>\n  <script>\n    console.log("JS is running!");\n    alert("Welcome to JavaScript!");\n  </script>\n</body>\n</html>',
      },
      {
        type: 'tip',
        content:
          'Tag <script> diletakkan sebelum </body> agar HTML dimuat terlebih dahulu.\n\nThe <script> tag is placed before </body> so HTML loads first.',
      },
    ],
    practiceCode: '// Gunakan alert() untuk menampilkan pesan\n// Use alert() to display a message\nalert("Selamat belajar JavaScript!");\n',
    practiceHintId: 'Coba ganti pesan di dalam alert()',
    practiceHint: 'Try changing the message inside alert()',
  },
  {
    id: 'js-m1-l3',
    courseId: 'javascript',
    moduleId: 'js-m1',
    title: 'Hello World — Your First Program',
    titleId: 'Hello World — Program Pertamamu',
    xp: 25,
    theory: [
      {
        type: 'text',
        content:
          'Setiap programmer memulai dengan program "Hello World". Mari kita lihat beberapa cara menampilkan output di JavaScript:\n\nEvery programmer starts with a "Hello World" program. Let\'s see several ways to display output in JavaScript:',
      },
      {
        type: 'code',
        language: 'javascript',
        content:
          '// Method 1: Console (untuk debugging)\nconsole.log("Hello, World!");\n\n// Method 2: Alert (popup dialog)\nalert("Hello, World!");\n\n// Method 3: document.write (tulis ke halaman)\ndocument.write("Hello, World!");\n\n// Method 4: innerHTML (ubah elemen HTML)\ndocument.getElementById("demo").innerHTML = "Hello, World!";',
      },
      {
        type: 'warning',
        content:
          'document.write() sebaiknya hanya untuk testing. Jangan gunakan di production karena bisa menghapus semua konten halaman!\n\ndocument.write() should only be used for testing. Don\'t use in production as it can erase all page content!',
      },
    ],
    practiceCode:
      '// Cetak 3 baris output berbeda\n// Print 3 different output lines\nconsole.log("Baris 1");\nconsole.log("Baris 2");\nconsole.log("Baris 3");\n',
    practiceHintId: 'Coba ganti teks di setiap console.log',
    practiceHint: 'Try changing the text in each console.log',
  },
  {
    id: 'js-m1-l4',
    courseId: 'javascript',
    moduleId: 'js-m1',
    title: 'Comments & Code Structure',
    titleId: 'Komentar & Struktur Kode',
    xp: 25,
    theory: [
      {
        type: 'text',
        content:
          'Komentar adalah catatan di dalam kode yang tidak dijalankan. Komentar membantu programmer lain (dan dirimu di masa depan) memahami kode.\n\nComments are notes in code that are not executed. Comments help other programmers (and your future self) understand the code.',
      },
      {
        type: 'code',
        language: 'javascript',
        content:
          '// Ini komentar satu baris (single-line comment)\n\n/* \n  Ini komentar\n  multi-baris\n  (multi-line comment)\n*/\n\n// Komentar berguna untuk:\n// 1. Menjelaskan kode yang kompleks\n// 2. Menonaktifkan kode sementara\n// 3. Dokumentasi\n\nlet nama = "CodeLab"; // komentar inline\nconsole.log(nama);',
      },
      {
        type: 'tip',
        content:
          'Best Practice: Tulis komentar yang menjelaskan MENGAPA, bukan APA. Kode yang baik sudah menjelaskan apa yang dilakukan.\n\nBest Practice: Write comments that explain WHY, not WHAT. Good code already explains what it does.',
      },
      {
        type: 'text',
        content:
          'JavaScript menggunakan semicolon (;) di akhir setiap statement. Meskipun opsional, sangat disarankan untuk selalu menggunakannya.\n\nJavaScript uses semicolons (;) at the end of each statement. Although optional, it\'s highly recommended to always use them.',
      },
    ],
    practiceCode:
      '// Tambahkan komentar pada kode berikut\n// Add comments to the following code\nlet x = 10;\nlet y = 20;\nlet sum = x + y;\nconsole.log(sum);\n',
    practiceHintId: 'Tambahkan komentar yang menjelaskan setiap baris',
    practiceHint: 'Add comments explaining each line',
  },
];

export default lessons;
