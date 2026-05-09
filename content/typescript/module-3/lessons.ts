import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'ts-m3-l1',
    courseId: 'typescript',
    moduleId: 'ts-m3',
    title: 'Typing Functions',
    titleId: 'Memberi Tipe pada Fungsi',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'In TypeScript, you can specify the types for both the arguments a function receives, and the value it returns.',
        contentId: 'Dalam TypeScript, Anda dapat menentukan tipe argumen yang diterima suatu fungsi, dan juga nilai yang dikembalikannya.',
      },
      {
        type: 'code',
        language: 'typescript',
        content: "function add(x: number, y: number): number {\n  return x + y;\n}",
      },
    ],
    practiceCode: '// Tambahkan tipe "string" untuk parameter nama, dan "string" untuk nilai kembaliannya\nfunction greet(nama) {\n  return "Hello " + nama;\n}',
    practiceHint: 'function greet(nama: string): string {',
    practiceHintId: 'Ubah menjadi function greet(nama: string): string',
  },
  {
    id: 'ts-m3-l2',
    courseId: 'typescript',
    moduleId: 'ts-m3',
    title: 'Void Return Type',
    titleId: 'Tipe Kembalian Void',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'If a function does not return any value (e.g., it just logs to the console), its return type is "void".',
        contentId: 'Jika suatu fungsi tidak mengembalikan nilai apa pun (misalnya, hanya mencetak ke konsol), tipe kembaliannya adalah "void".',
      },
      {
        type: 'code',
        language: 'typescript',
        content: "function logMessage(msg: string): void {\n  console.log(msg);\n}",
      },
    ],
    practiceCode: '// Berikan tipe void pada nilai kembalian fungsi ini\nfunction printError(err: string) {\n  console.error(err);\n}',
    practiceHint: 'function printError(err: string): void {',
    practiceHintId: 'Tambahkan ": void" sebelum kurung kurawal buka',
  },
  {
    id: 'ts-m3-l3',
    courseId: 'typescript',
    moduleId: 'ts-m3',
    title: 'The "any" Type',
    titleId: 'Tipe "any" (Harus Dihindari)',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'The "any" type turns off TypeScript\'s type checking for that variable. It should only be used as a last resort.',
        contentId: 'Tipe "any" akan mematikan pemeriksaan tipe TypeScript untuk variabel tersebut. Tipe ini hanya boleh digunakan sebagai pilihan terakhir.',
      },
      {
        type: 'code',
        language: 'typescript',
        content: "let data: any = 'hello';\ndata = 100; // Allowed, but dangerous!\ndata.map(); // No compile error, but will crash at runtime",
      },
    ],
    practiceCode: 'let userInput: any = 50;\n\n// Ubah "any" menjadi "number" untuk keamanan\n',
    practiceHint: 'let userInput: number = 50;',
    practiceHintId: 'Ubah any menjadi number',
  }
];

export default lessons;
