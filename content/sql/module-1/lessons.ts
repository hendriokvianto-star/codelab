import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'sql-m1-l1',
    courseId: 'sql',
    moduleId: 'sql-m1',
    title: 'Introduction to SELECT',
    titleId: 'Pengenalan SELECT',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'SQL stands for Structured Query Language. It is used to communicate with a database. The SELECT statement is used to select data from a database.',
        contentId: 'SQL adalah singkatan dari Structured Query Language. Digunakan untuk berkomunikasi dengan database. Perintah SELECT digunakan untuk memilih data dari database.',
      },
      {
        type: 'code',
        language: 'sql',
        content: 'SELECT * FROM users;\nSELECT name, email FROM users;',
      },
    ],
    practiceCode: '-- Ambil semua kolom (*) dari tabel bernama "products"\nSELECT \n',
    practiceHint: 'SELECT * FROM products;',
    practiceHintId: 'Gunakan SELECT * FROM products;',
  },
  {
    id: 'sql-m1-l2',
    courseId: 'sql',
    moduleId: 'sql-m1',
    title: 'Filtering with WHERE',
    titleId: 'Memfilter dengan WHERE',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'The WHERE clause is used to filter records. It is used to extract only those records that fulfill a specified condition.',
        contentId: 'Klausa WHERE digunakan untuk memfilter record. Digunakan untuk mengekstrak hanya record yang memenuhi kondisi tertentu.',
      },
      {
        type: 'code',
        language: 'sql',
        content: 'SELECT * FROM users WHERE age > 18;\nSELECT name FROM users WHERE country = "ID";',
      },
    ],
    practiceCode: '-- Ambil data dari tabel "users" yang memiliki role "admin"\nSELECT * FROM users \n',
    practiceHint: 'WHERE role = "admin";',
    practiceHintId: 'Gunakan WHERE role = "admin";',
  },
  {
    id: 'sql-m1-l3',
    courseId: 'sql',
    moduleId: 'sql-m1',
    title: 'ORDER BY & LIMIT',
    titleId: 'ORDER BY & LIMIT',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'ORDER BY is used to sort the result-set in ascending (ASC) or descending (DESC) order. LIMIT specifies the maximum number of records to return.',
        contentId: 'ORDER BY digunakan untuk mengurutkan hasil (ASC untuk naik, DESC untuk turun). LIMIT menentukan jumlah maksimum baris yang dikembalikan.',
      },
      {
        type: 'code',
        language: 'sql',
        content: 'SELECT * FROM users ORDER BY age DESC LIMIT 5;',
      },
    ],
    practiceCode: '-- Ambil 3 data teratas dari tabel "scores" diurutkan dari nilai (score) tertinggi (DESC)\nSELECT * FROM scores\n',
    practiceHint: 'ORDER BY score DESC LIMIT 3;',
    practiceHintId: 'Gunakan ORDER BY score DESC LIMIT 3;',
  }
];

export default lessons;
