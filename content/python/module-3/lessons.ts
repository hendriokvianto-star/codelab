import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'python-m3-l1',
    courseId: 'python',
    moduleId: 'python-m3',
    title: 'Lists (Arrays)',
    titleId: 'Daftar (List)',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'A list allows you to store multiple items in a single variable. Lists are created using square brackets [].',
        contentId: 'List (daftar) memungkinkan Anda menyimpan beberapa item dalam satu variabel. List dibuat menggunakan tanda kurung siku [].',
      },
      {
        type: 'code',
        language: 'python',
        content: 'fruits = ["apple", "banana", "cherry"]\nprint(fruits[0]) # Output: apple',
      },
    ],
    practiceCode: '# Buatlah list bernama "cars" yang berisi dua mobil: "BMW" dan "Toyota"\n\nprint(cars)',
    practiceHint: 'cars = ["BMW", "Toyota"]',
    practiceHintId: 'Gunakan cars = ["BMW", "Toyota"]',
  },
  {
    id: 'python-m3-l2',
    courseId: 'python',
    moduleId: 'python-m3',
    title: 'List Methods',
    titleId: 'Fungsi pada List',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'You can modify lists easily. The .append() method adds an item to the end of the list.',
        contentId: 'Anda dapat memodifikasi list dengan mudah. Fungsi .append() menambahkan sebuah item ke akhir dari sebuah list.',
      },
      {
        type: 'code',
        language: 'python',
        content: 'fruits = ["apple", "banana"]\nfruits.append("orange")\nprint(fruits)',
      },
    ],
    practiceCode: 'numbers = [1, 2, 3]\n# Tambahkan angka 4 ke dalam list numbers\n\nprint(numbers)',
    practiceHint: 'numbers.append(4)',
    practiceHintId: 'Gunakan numbers.append(4)',
  },
  {
    id: 'python-m3-l3',
    courseId: 'python',
    moduleId: 'python-m3',
    title: 'Functions (def)',
    titleId: 'Fungsi (def)',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'A function is a block of code which only runs when it is called. You define it using the "def" keyword.',
        contentId: 'Fungsi adalah blok kode yang hanya berjalan ketika dipanggil. Anda mendefinisikannya menggunakan kata kunci "def".',
      },
      {
        type: 'code',
        language: 'python',
        content: 'def say_hello(name):\n    print("Hello " + name)\n\nsay_hello("Alice")',
      },
    ],
    practiceCode: '# Buatlah sebuah fungsi bernama greet yang tidak menerima parameter\n\n    print("Welcome!")',
    practiceHint: 'def greet():\n    print("Welcome!")',
    practiceHintId: 'Ketik def greet():',
  }
];

export default lessons;
