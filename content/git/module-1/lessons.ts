import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'git-m1-l1',
    courseId: 'git',
    moduleId: 'git-m1',
    title: 'Initializing a Repository',
    titleId: 'Inisialisasi Repositori',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Git is a Version Control System. To start tracking your files, you need to initialize a repository in your project folder using the command "git init".',
        contentId: 'Git adalah Version Control System. Untuk mulai melacak perubahan file, Anda harus menginisialisasi repositori di folder proyek menggunakan perintah "git init".',
      },
      {
        type: 'code',
        language: 'bash',
        content: '$ cd my-project\n$ git init',
      },
    ],
    practiceCode: '# Ketik perintah untuk menginisialisasi repositori Git kosong\n',
    practiceHint: 'git init',
    practiceHintId: 'Ketik git init',
  },
  {
    id: 'git-m1-l2',
    courseId: 'git',
    moduleId: 'git-m1',
    title: 'Tracking Files (Add)',
    titleId: 'Melacak File (Add)',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Before saving changes, you must "stage" them. You use "git add <file>" to stage a specific file, or "git add ." to stage everything.',
        contentId: 'Sebelum menyimpan perubahan, Anda harus memasukkannya ke tahap "stage". Gunakan "git add <file>" untuk satu file, atau "git add ." untuk semuanya.',
      },
      {
        type: 'code',
        language: 'bash',
        content: '$ git add index.html\n$ git add .',
      },
    ],
    practiceCode: '# Ketik perintah untuk menambahkan SEMUA file ke staging area\n',
    practiceHint: 'git add .',
    practiceHintId: 'Ketik git add .',
  },
  {
    id: 'git-m1-l3',
    courseId: 'git',
    moduleId: 'git-m1',
    title: 'Saving Changes (Commit)',
    titleId: 'Menyimpan Perubahan (Commit)',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'A "commit" is like taking a snapshot of your code at a specific time. You must include a message describing what you changed.',
        contentId: 'Sebuah "commit" itu seperti mengambil foto (snapshot) dari kode Anda pada waktu tertentu. Anda wajib menyertakan pesan yang mendeskripsikan perubahan Anda.',
      },
      {
        type: 'code',
        language: 'bash',
        content: '$ git commit -m "initial commit"',
      },
    ],
    practiceCode: '# Buatlah commit dengan pesan "first commit"\n',
    practiceHint: 'git commit -m "first commit"',
    practiceHintId: 'Ketik git commit -m "first commit"',
  }
];

export default lessons;
