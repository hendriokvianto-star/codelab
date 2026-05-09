import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'ts-m2-quiz',
  courseId: 'typescript',
  moduleId: 'ts-m2',
  title: 'Interfaces Quiz',
  titleId: 'Kuis Interfaces',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'What is the primary purpose of an interface in TypeScript?',
      questionId: 'Apa tujuan utama dari sebuah interface di TypeScript?',
      options: ['To create a new class', 'To define the shape of an object', 'To import modules', 'To loop through arrays'],
      optionsId: ['Membuat class baru', 'Mendefinisikan bentuk/struktur dari sebuah objek', 'Mengimpor modul', 'Melakukan looping pada array'],
      correctIndex: 1,
      explanation: 'Interfaces are used to enforce a specific structure on objects, ensuring they have the correct properties and types.',
      explanationId: 'Interfaces digunakan untuk memaksakan struktur spesifik pada objek, memastikannya memiliki properti dan tipe yang benar.',
    },
    {
      id: 'q2',
      question: 'How do you make a property optional in an interface?',
      questionId: 'Bagaimana cara membuat sebuah properti menjadi opsional di dalam interface?',
      options: ['Using the keyword "optional"', 'Adding a question mark (?) after the property name', 'Setting it to null', 'Using a double asterisk (**)'],
      optionsId: ['Menggunakan kata kunci "optional"', 'Menambahkan tanda tanya (?) setelah nama properti', 'Mengaturnya menjadi null', 'Menggunakan bintang ganda (**)'],
      correctIndex: 1,
      explanation: 'Example: "age?: number" makes the age property optional.',
      explanationId: 'Contoh: "age?: number" membuat properti age menjadi opsional.',
    },
    {
      id: 'q3',
      question: 'Which of the following allows you to combine multiple types like string | number?',
      questionId: 'Mana di bawah ini yang memungkinkan Anda menggabungkan berbagai tipe seperti string | number?',
      options: ['interface', 'class', 'type', 'enum'],
      optionsId: ['interface', 'class', 'type', 'enum'],
      correctIndex: 2,
      explanation: 'A "type" alias supports union types (using the | operator).',
      explanationId: 'Alias "type" mendukung tipe union/gabungan (menggunakan operator |).',
    }
  ],
};

export default quiz;
