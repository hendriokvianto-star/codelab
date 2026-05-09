import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'ts-m2-l1',
    courseId: 'typescript',
    moduleId: 'ts-m2',
    title: 'Interfaces',
    titleId: 'Mengenal Interfaces',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'An interface defines the structure or "shape" of an object. It acts as a contract that the object must follow.',
        contentId: 'Sebuah interface mendefinisikan struktur atau "bentuk" dari suatu objek. Ini bertindak seperti kontrak yang harus dipatuhi oleh objek tersebut.',
      },
      {
        type: 'code',
        language: 'typescript',
        content: "interface User {\n  name: string;\n  age: number;\n}\n\nconst user: User = {\n  name: 'Alex',\n  age: 25\n};",
      },
    ],
    practiceCode: 'interface Player {\n  username: string;\n  score: number;\n}\n\n// Berikan tipe Player pada objek ini\nconst p1 = {\n  username: "Hero",\n  score: 100\n};',
    practiceHint: 'const p1: Player = {',
    practiceHintId: 'Ubah menjadi const p1: Player',
  },
  {
    id: 'ts-m2-l2',
    courseId: 'typescript',
    moduleId: 'ts-m2',
    title: 'Optional Properties',
    titleId: 'Properti Opsional',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Sometimes an object doesn\'t need to have all properties. You can mark a property as optional using a question mark (?).',
        contentId: 'Terkadang sebuah objek tidak harus memiliki semua properti. Anda dapat menandai properti sebagai opsional menggunakan tanda tanya (?).',
      },
      {
        type: 'code',
        language: 'typescript',
        content: "interface User {\n  name: string;\n  age?: number; // Optional\n}\n\nconst user1: User = { name: 'Alex' }; // Valid",
      },
    ],
    practiceCode: 'interface Product {\n  title: string;\n  // Buat price menjadi opsional agar kode di bawah valid\n  price: number;\n}\n\nconst item: Product = { title: "Laptop" };',
    practiceHint: 'price?: number;',
    practiceHintId: 'Tambahkan tanda tanya menjadi price?: number;',
  },
  {
    id: 'ts-m2-l3',
    courseId: 'typescript',
    moduleId: 'ts-m2',
    title: 'Type Aliases',
    titleId: 'Alias Tipe (Type Aliases)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Besides interfaces, you can use "type" aliases. They are very similar, but "type" can also be used for union types (e.g., string | number).',
        contentId: 'Selain interface, Anda juga dapat menggunakan alias "type". Keduanya sangat mirip, tetapi "type" dapat digunakan untuk tipe gabungan (misalnya, string | number).',
      },
      {
        type: 'code',
        language: 'typescript',
        content: "type ID = string | number;\n\nlet userId: ID = 123;\nuserId = 'ABC'; // Also valid",
      },
    ],
    practiceCode: '// Buatlah tipe Status yang hanya boleh berisi "success" atau "error"\n\n\nlet currentStatus: Status = "success";',
    practiceHint: 'type Status = "success" | "error";',
    practiceHintId: 'Ketik type Status = "success" | "error"; di baris 2',
  }
];

export default lessons;
