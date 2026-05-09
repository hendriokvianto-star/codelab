import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'python-m1-l1',
    courseId: 'python',
    moduleId: 'python-m1',
    title: 'Hello Python',
    titleId: 'Halo Python',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Python is known for its simple and readable syntax. To output text to the screen, we use the print() function.',
        contentId: 'Python dikenal karena sintaksnya yang sederhana dan mudah dibaca. Untuk menampilkan teks ke layar, kita menggunakan fungsi print().',
      },
      {
        type: 'code',
        language: 'python',
        content: 'print("Hello World!")',
      },
    ],
    practiceCode: '# Cetak tulisan "Belajar Python"\n',
    practiceHint: 'print("Belajar Python")',
    practiceHintId: 'Gunakan print("Belajar Python")',
  },
  {
    id: 'python-m1-l2',
    courseId: 'python',
    moduleId: 'python-m1',
    title: 'Variables',
    titleId: 'Variabel',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'In Python, you do not need words like "let" or "const" to make variables. Just write the name and assign a value.',
        contentId: 'Di Python, Anda tidak perlu kata seperti "let" atau "const" untuk membuat variabel. Cukup tulis namanya dan masukkan nilainya.',
      },
      {
        type: 'code',
        language: 'python',
        content: 'name = "Alice"\nage = 25\nprint(name)',
      },
    ],
    practiceCode: '# Buat variabel bernama score dengan nilai 100\n\nprint(score)',
    practiceHint: 'score = 100',
    practiceHintId: 'Ketik score = 100',
  },
  {
    id: 'python-m1-l3',
    courseId: 'python',
    moduleId: 'python-m1',
    title: 'Indentation',
    titleId: 'Indentasi',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Python does not use curly brackets {} to group code. Instead, it uses indentation (spaces or tabs).',
        contentId: 'Python tidak menggunakan kurung kurawal {} untuk mengelompokkan kode. Sebagai gantinya, Python menggunakan indentasi (spasi atau tab).',
      },
      {
        type: 'code',
        language: 'python',
        content: 'if True:\n    print("This is indented")\n    print("Still inside the block")\nprint("Outside the block")',
      },
    ],
    practiceCode: '# Berikan indentasi (spasi) pada perintah print agar berada di dalam blok if\nif True:\nprint("Teks ini harus menjorok ke dalam")',
    practiceHint: '    print("Teks ini harus menjorok ke dalam")',
    practiceHintId: 'Tambahkan 4 spasi sebelum fungsi print()',
  }
];

export default lessons;
