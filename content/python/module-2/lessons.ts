import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'python-m2-l1',
    courseId: 'python',
    moduleId: 'python-m2',
    title: 'If Statements',
    titleId: 'Percabangan (If)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'You can make decisions using if, elif (else if), and else. Don\'t forget the colon (:) at the end of the line!',
        contentId: 'Anda bisa membuat keputusan menggunakan if, elif (else if), dan else. Jangan lupa tanda titik dua (:) di akhir baris!',
      },
      {
        type: 'code',
        language: 'python',
        content: 'if score >= 80:\n    print("Lulus")\nelif score >= 50:\n    print("Remedial")\nelse:\n    print("Gagal")',
      },
    ],
    practiceCode: 'score = 90\n# Tambahkan kondisi if jika score > 80, maka print("Bagus!")\n',
    practiceHint: 'if score > 80:\n    print("Bagus!")',
    practiceHintId: 'Gunakan if score > 80: dan indentasi',
  },
  {
    id: 'python-m2-l2',
    courseId: 'python',
    moduleId: 'python-m2',
    title: 'For Loops',
    titleId: 'Perulangan (For)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'A for loop in Python is used to iterate over a sequence (like a list or a string). You can also use range() to loop a specific number of times.',
        contentId: 'Perulangan "for" di Python digunakan untuk mengulangi urutan (seperti list atau teks). Anda juga bisa menggunakan range() untuk mengulang sebanyak angka tertentu.',
      },
      {
        type: 'code',
        language: 'python',
        content: 'for i in range(3):\n    print(i) # Output: 0, 1, 2',
      },
    ],
    practiceCode: '# Gunakan for loop dan range(5) untuk mencetak tulisan "Hello"\n',
    practiceHint: 'for i in range(5):\n    print("Hello")',
    practiceHintId: 'Ketik for i in range(5): diikuti dengan indentasi print()',
  },
  {
    id: 'python-m2-l3',
    courseId: 'python',
    moduleId: 'python-m2',
    title: 'While Loops',
    titleId: 'Perulangan (While)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'A while loop executes a set of statements as long as a condition is true.',
        contentId: 'Perulangan "while" akan mengeksekusi serangkaian instruksi selama kondisinya bernilai benar (true).',
      },
      {
        type: 'code',
        language: 'python',
        content: 'count = 0\nwhile count < 3:\n    print(count)\n    count = count + 1',
      },
    ],
    practiceCode: 'x = 0\n# Buat perulangan while selama x kurang dari 5\nwhile \n    print(x)\n    x += 1',
    practiceHint: 'while x < 5:',
    practiceHintId: 'Gunakan kondisi while x < 5:',
  }
];

export default lessons;
