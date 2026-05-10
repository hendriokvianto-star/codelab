import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'flutter-m1-quiz',
  moduleId: 'flutter-m1',
  courseId: 'flutter',
  title: 'Quiz: Dart Basics & Widgets',
  titleId: 'Kuis: Dasar Dart & Widget',
  questions: [
    {
      id: 'q1',
      question: 'Which programming language is used to build Flutter applications?',
      questionId: 'Bahasa pemrograman apa yang digunakan untuk membangun aplikasi Flutter?',
      options: [
        'JavaScript',
        'Swift',
        'Dart',
        'Kotlin'
      ],
      optionsId: [
        'JavaScript',
        'Swift',
        'Dart',
        'Kotlin'
      ],
      correctIndex: 2,
      explanation: 'Flutter uses Dart, a strongly-typed language created by Google that can compile to native machine code.',
      explanationId: 'Flutter menggunakan Dart, sebuah bahasa strongly-typed yang dibuat oleh Google yang dapat dikompilasi menjadi kode mesin native.',
    },
    {
      id: 'q2',
      question: 'If you want to create a screen element that updates its appearance when a user presses a button, which widget type should you use?',
      questionId: 'Jika Anda ingin membuat elemen layar yang memperbarui penampilannya saat pengguna menekan tombol, jenis widget apa yang harus Anda gunakan?',
      options: [
        'StatelessWidget',
        'StatefulWidget',
        'DynamicWidget',
        'UpdateWidget'
      ],
      optionsId: [
        'StatelessWidget',
        'StatefulWidget',
        'DynamicWidget',
        'UpdateWidget'
      ],
      correctIndex: 1,
      explanation: 'A StatefulWidget maintains a State object that can change over time, allowing the UI to rebuild dynamically.',
      explanationId: 'StatefulWidget menyimpan objek State yang dapat berubah seiring waktu, memungkinkan UI dibangun ulang secara dinamis.',
    },
    {
      id: 'q3',
      question: 'Which widget would you use to arrange multiple UI elements side-by-side horizontally?',
      questionId: 'Widget apa yang akan Anda gunakan untuk menyusun beberapa elemen UI secara berdampingan (horizontal)?',
      options: [
        'Column',
        'Stack',
        'Container',
        'Row'
      ],
      optionsId: [
        'Column',
        'Stack',
        'Container',
        'Row'
      ],
      correctIndex: 3,
      explanation: 'A `Row` displays its children in a horizontal array, while a `Column` displays them vertically.',
      explanationId: 'Sebuah `Row` menampilkan anak-anaknya dalam susunan horizontal, sementara `Column` menampilkannya secara vertikal.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
