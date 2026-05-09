import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'js-m3-l1',
    courseId: 'javascript',
    moduleId: 'js-m3',
    title: 'if, else if, else',
    titleId: 'if, else if, else',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Percabangan memungkinkan program mengambil keputusan berdasarkan kondisi.\n\nBranching allows programs to make decisions based on conditions.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'let nilai = 85;\n\nif (nilai >= 90) {\n  console.log("A — Excellent!");\n} else if (nilai >= 80) {\n  console.log("B — Good!");\n} else if (nilai >= 70) {\n  console.log("C — Average");\n} else {\n  console.log("D — Need improvement");\n}\n\n// Operator perbandingan:\n// ==  sama nilai (loose)\n// === sama nilai & tipe (strict) ✅\n// !=  tidak sama\n// !== tidak sama (strict)\n// >   lebih besar\n// <   lebih kecil\n// >=  lebih besar atau sama\n// <=  lebih kecil atau sama',
      },
      {
        type: 'tip',
        content: 'Selalu gunakan === (strict equality) daripada == untuk menghindari konversi tipe otomatis.\n\nAlways use === (strict equality) instead of == to avoid automatic type conversion.',
      },
    ],
    practiceCode: '// Buat pengecekan umur\nlet umur = 18;\n\nif (umur >= 18) {\n  console.log("Boleh masuk");\n} else {\n  console.log("Belum cukup umur");\n}\n',
    practiceHintId: 'Coba ubah nilai umur dan lihat hasilnya',
    practiceHint: 'Try changing the age value and see the result',
  },
  {
    id: 'js-m3-l2',
    courseId: 'javascript',
    moduleId: 'js-m3',
    title: 'switch Statement',
    titleId: 'Statement switch',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'switch digunakan ketika kamu perlu membandingkan satu nilai dengan banyak kemungkinan.\n\nswitch is used when you need to compare one value against many possibilities.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'let hari = "Senin";\n\nswitch (hari) {\n  case "Senin":\n  case "Selasa":\n  case "Rabu":\n  case "Kamis":\n  case "Jumat":\n    console.log("Hari kerja 💼");\n    break;\n  case "Sabtu":\n  case "Minggu":\n    console.log("Weekend! 🎉");\n    break;\n  default:\n    console.log("Hari tidak valid");\n}',
      },
      {
        type: 'warning',
        content: 'Jangan lupa break! Tanpa break, kode akan "fall through" ke case berikutnya.\n\nDon\'t forget break! Without break, code will "fall through" to the next case.',
      },
    ],
    practiceCode: '// Buat switch untuk menentukan musim\nlet bulan = 1; // Januari\n\nswitch (bulan) {\n  case 12: case 1: case 2:\n    console.log("Musim Dingin ❄️");\n    break;\n  case 3: case 4: case 5:\n    console.log("Musim Semi 🌸");\n    break;\n  default:\n    console.log("Musim lainnya");\n}\n',
    practiceHintId: 'Coba tambahkan case untuk musim lainnya',
    practiceHint: 'Try adding cases for other seasons',
  },
  {
    id: 'js-m3-l3',
    courseId: 'javascript',
    moduleId: 'js-m3',
    title: 'for & while Loops',
    titleId: 'Loop for & while',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Loop memungkinkan kamu menjalankan kode berulang kali.\n\nLoops allow you to run code repeatedly.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// for loop — ketika tahu jumlah pengulangan\nfor (let i = 1; i <= 5; i++) {\n  console.log(`Pengulangan ke-${i}`);\n}\n\n// while loop — ketika tidak tahu pasti\nlet count = 0;\nwhile (count < 3) {\n  console.log(`Count: ${count}`);\n  count++;\n}\n\n// for...of — untuk array\nconst colors = ["red", "green", "blue"];\nfor (const color of colors) {\n  console.log(color);\n}\n\n// for...in — untuk object keys\nconst user = { name: "Ali", age: 25 };\nfor (const key in user) {\n  console.log(`${key}: ${user[key]}`);\n}',
      },
      {
        type: 'tip',
        content: 'for...of untuk array, for...in untuk object. Jangan tertukar!\n\nfor...of for arrays, for...in for objects. Don\'t mix them up!',
      },
    ],
    practiceCode: '// Cetak angka 1 sampai 10\nfor (let i = 1; i <= 10; i++) {\n  console.log(i);\n}\n\n// Hitung mundur\nlet n = 5;\nwhile (n > 0) {\n  console.log(`Countdown: ${n}`);\n  n--;\n}\nconsole.log("🚀 Launch!");\n',
    practiceHintId: 'Coba ubah batas loop',
    practiceHint: 'Try changing the loop bounds',
  },
  {
    id: 'js-m3-l4',
    courseId: 'javascript',
    moduleId: 'js-m3',
    title: 'break & continue',
    titleId: 'break & continue',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'break menghentikan loop sepenuhnya. continue melompati iterasi saat ini dan lanjut ke iterasi berikutnya.\n\nbreak stops the loop entirely. continue skips the current iteration and moves to the next one.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// break — berhenti saat menemukan target\nfor (let i = 1; i <= 10; i++) {\n  if (i === 5) {\n    console.log("Ditemukan!");\n    break; // keluar dari loop\n  }\n  console.log(i);\n}\n// Output: 1, 2, 3, 4, "Ditemukan!"\n\n// continue — lewati angka genap\nfor (let i = 1; i <= 10; i++) {\n  if (i % 2 === 0) {\n    continue; // skip ke iterasi berikutnya\n  }\n  console.log(i);\n}\n// Output: 1, 3, 5, 7, 9',
      },
    ],
    practiceCode: '// Cetak angka 1-20, tapi skip kelipatan 3\nfor (let i = 1; i <= 20; i++) {\n  if (i % 3 === 0) {\n    continue;\n  }\n  console.log(i);\n}\n',
    practiceHintId: 'Coba modifikasi kondisi skip',
    practiceHint: 'Try modifying the skip condition',
  },
];

export default lessons;
