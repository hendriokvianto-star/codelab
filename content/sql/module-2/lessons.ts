import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'sql-m2-l1',
    courseId: 'sql',
    moduleId: 'sql-m2',
    title: 'INSERT INTO',
    titleId: 'Memasukkan Data (INSERT)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'The INSERT INTO statement is used to insert new records in a table.',
        contentId: 'Perintah INSERT INTO digunakan untuk memasukkan rekaman data baru ke dalam tabel.',
      },
      {
        type: 'code',
        language: 'sql',
        content: 'INSERT INTO users (name, age) VALUES ("Alice", 25);',
      },
    ],
    practiceCode: '-- Masukkan pengguna baru bernama "Budi" (name) dengan usia 20 (age) ke tabel "users"\nINSERT INTO \n',
    practiceHint: 'INSERT INTO users (name, age) VALUES ("Budi", 20);',
    practiceHintId: 'Gunakan INSERT INTO users (name, age) VALUES ("Budi", 20);',
  },
  {
    id: 'sql-m2-l2',
    courseId: 'sql',
    moduleId: 'sql-m2',
    title: 'UPDATE Data',
    titleId: 'Memperbarui Data (UPDATE)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'The UPDATE statement is used to modify the existing records in a table. Be careful when updating records in a table! Notice the WHERE clause.',
        contentId: 'Perintah UPDATE digunakan untuk memodifikasi data yang sudah ada di sebuah tabel. Hati-hati saat mengupdate! Perhatikan klausa WHERE.',
      },
      {
        type: 'code',
        language: 'sql',
        content: 'UPDATE users SET age = 26 WHERE name = "Alice";',
      },
      {
        type: 'warning',
        content: 'If you omit the WHERE clause, ALL records will be updated!',
        contentId: 'Jika Anda lupa menggunakan WHERE, SEMUA data di tabel akan di-update!',
      }
    ],
    practiceCode: '-- Ubah nilai "score" menjadi 100 untuk user yang memiliki id = 5 di tabel "scores"\nUPDATE scores SET \n',
    practiceHint: 'UPDATE scores SET score = 100 WHERE id = 5;',
    practiceHintId: 'Gunakan UPDATE scores SET score = 100 WHERE id = 5;',
  },
  {
    id: 'sql-m2-l3',
    courseId: 'sql',
    moduleId: 'sql-m2',
    title: 'DELETE Data',
    titleId: 'Menghapus Data (DELETE)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'The DELETE statement is used to delete existing records in a table.',
        contentId: 'Perintah DELETE digunakan untuk menghapus data yang ada di tabel.',
      },
      {
        type: 'code',
        language: 'sql',
        content: 'DELETE FROM users WHERE age < 18;',
      },
    ],
    practiceCode: '-- Hapus data dari tabel "users" jika id-nya adalah 10\nDELETE \n',
    practiceHint: 'DELETE FROM users WHERE id = 10;',
    practiceHintId: 'Gunakan DELETE FROM users WHERE id = 10;',
  }
];

export default lessons;
