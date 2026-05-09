import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'ts-m1-l1',
    courseId: 'typescript',
    moduleId: 'ts-m1',
    title: 'Hello Types',
    titleId: 'Halo Tipe Data',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'TypeScript is JavaScript with static typing. You can explicitly declare the type of a variable using a colon (e.g., : string).',
        contentId: 'TypeScript adalah JavaScript dengan pengetikan statis. Anda dapat mendeklarasikan tipe dari suatu variabel secara eksplisit menggunakan titik dua (misalnya, : string).',
      },
      {
        type: 'code',
        language: 'typescript',
        content: "let username: string = 'Alex';\nlet age: number = 25;\nlet isStudent: boolean = true;",
      },
    ],
    practiceCode: '// Berikan tipe "string" pada variabel bahasa\nlet bahasa = "TypeScript";',
    practiceHint: 'let bahasa: string = "TypeScript";',
    practiceHintId: 'Tambahkan ": string" setelah nama variabel',
  },
  {
    id: 'ts-m1-l2',
    courseId: 'typescript',
    moduleId: 'ts-m1',
    title: 'Type Inference',
    titleId: 'Inferensi Tipe',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'TypeScript is smart. If you assign a value immediately, you don\'t always have to write the type. TS will infer it.',
        contentId: 'TypeScript itu pintar. Jika Anda langsung memberikan nilai, Anda tidak selalu harus menulis tipenya. TS akan menebaknya (inferensi).',
      },
      {
        type: 'code',
        language: 'typescript',
        content: "let score = 100; // TypeScript knows this is a 'number'\n\n// Error! Type 'string' is not assignable to type 'number'\nscore = 'A+';",
      },
    ],
    practiceCode: 'let poin = 50;\n\n// Baris di bawah ini akan menyebabkan error kompilasi.\n// Ganti nilai string menjadi angka agar valid.\npoin = "seratus";',
    practiceHint: 'poin = 100;',
    practiceHintId: 'Ganti "seratus" menjadi sebuah angka murni seperti 100',
  },
  {
    id: 'ts-m1-l3',
    courseId: 'typescript',
    moduleId: 'ts-m1',
    title: 'Arrays',
    titleId: 'Koleksi Array',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'To define an array of a specific type, add [] after the type name.',
        contentId: 'Untuk mendefinisikan array dari tipe tertentu, tambahkan [] setelah nama tipe.',
      },
      {
        type: 'code',
        language: 'typescript',
        content: "let skills: string[] = ['HTML', 'CSS', 'JS'];\nlet grades: number[] = [80, 90, 85];",
      },
    ],
    practiceCode: '// Buatlah array bernama "angka" yang berisi tipe data number\nlet angka = [1, 2, 3];',
    practiceHint: 'let angka: number[] = [1, 2, 3];',
    practiceHintId: 'Tambahkan ": number[]" setelah variabel angka',
  }
];

export default lessons;
