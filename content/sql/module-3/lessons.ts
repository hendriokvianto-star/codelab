import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'sql-m3-l1',
    courseId: 'sql',
    moduleId: 'sql-m3',
    title: 'Primary & Foreign Keys',
    titleId: 'Primary & Foreign Keys',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'A PRIMARY KEY uniquely identifies each record in a table. A FOREIGN KEY is a field in one table that refers to the PRIMARY KEY in another table.',
        contentId: 'PRIMARY KEY (Kunci Utama) secara unik mengidentifikasi setiap record. FOREIGN KEY (Kunci Tamu) adalah kolom di satu tabel yang merujuk pada PRIMARY KEY di tabel lain.',
      },
      {
        type: 'code',
        language: 'sql',
        content: '-- "id" in users is a Primary Key\n-- "user_id" in orders is a Foreign Key referencing users.id',
      },
    ],
    practiceCode: '-- Praktik ini hanya teori. Cobalah ketik "Saya Paham" untuk melanjutkan.\n\n',
    practiceHint: 'Type "Saya Paham"',
    practiceHintId: 'Ketik "Saya Paham"',
  },
  {
    id: 'sql-m3-l2',
    courseId: 'sql',
    moduleId: 'sql-m3',
    title: 'INNER JOIN',
    titleId: 'INNER JOIN (Menggabungkan Tabel)',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'The INNER JOIN keyword selects records that have matching values in both tables.',
        contentId: 'Perintah INNER JOIN memilih record yang memiliki nilai yang cocok (sama) di kedua tabel.',
      },
      {
        type: 'code',
        language: 'sql',
        content: 'SELECT users.name, orders.product \nFROM users \nINNER JOIN orders \nON users.id = orders.user_id;',
      },
    ],
    practiceCode: '-- Gabungkan tabel "users" dan "posts" dengan INNER JOIN \n-- dimana users.id sama dengan posts.user_id\nSELECT users.name, posts.title \nFROM users\n',
    practiceHint: 'INNER JOIN posts ON users.id = posts.user_id;',
    practiceHintId: 'Gunakan INNER JOIN posts ON users.id = posts.user_id;',
  },
  {
    id: 'sql-m3-l3',
    courseId: 'sql',
    moduleId: 'sql-m3',
    title: 'Aggregation (COUNT, SUM)',
    titleId: 'Agregasi (COUNT, SUM)',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'SQL provides aggregate functions like COUNT(), SUM(), AVG(), MIN(), and MAX() to perform calculations on a set of values.',
        contentId: 'SQL menyediakan fungsi agregat seperti COUNT(), SUM(), AVG(), MIN(), dan MAX() untuk melakukan kalkulasi pada serangkaian nilai.',
      },
      {
        type: 'code',
        language: 'sql',
        content: 'SELECT COUNT(*) FROM users;\nSELECT SUM(price) FROM orders;',
      },
    ],
    practiceCode: '-- Hitung total keseluruhan baris (COUNT) dari tabel "products"\nSELECT \n',
    practiceHint: 'SELECT COUNT(*) FROM products;',
    practiceHintId: 'Gunakan SELECT COUNT(*) FROM products;',
  }
];

export default lessons;
