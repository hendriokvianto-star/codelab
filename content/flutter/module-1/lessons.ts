import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'flutter-m1-l1',
    courseId: 'flutter',
    moduleId: 'flutter-m1',
    title: 'Introduction to Dart',
    titleId: 'Pengenalan Bahasa Dart',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Flutter applications are written in Dart, an object-oriented, strongly-typed programming language developed by Google.',
        contentId: 'Aplikasi Flutter ditulis dalam bahasa Dart, bahasa pemrograman berorientasi objek dengan tipe data yang kuat (strongly-typed) yang dikembangkan oleh Google.',
      },
      {
        type: 'code',
        language: 'dart',
        content: 'void main() {\n  // Dart uses type inference, but you can also be explicit\n  var name = "Gopher"; \n  String greeting = "Hello, $name!";\n  \n  print(greeting);\n}',
      },
      {
        type: 'text',
        content: 'Dart is designed to be highly familiar to developers who already know JavaScript, Java, or C#. It also heavily supports async programming using `Future` and `async/await`.',
        contentId: 'Dart dirancang agar sangat familiar bagi developer yang sudah mengetahui JavaScript, Java, atau C#. Dart juga sangat mendukung pemrograman asinkron menggunakan `Future` dan `async/await`.',
      },
    ],
  },
  {
    id: 'flutter-m1-l2',
    courseId: 'flutter',
    moduleId: 'flutter-m1',
    title: 'Everything is a Widget',
    titleId: 'Segalanya adalah Widget',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'In Flutter, almost everything on the screen is a Widget. A button is a widget, text is a widget, even the padding around an element is a widget.',
        contentId: 'Di Flutter, hampir semua yang ada di layar adalah Widget. Tombol adalah widget, teks adalah widget, bahkan jarak (padding) di sekitar elemen juga merupakan widget.',
      },
      {
        type: 'text',
        content: 'There are two main types of widgets: \n1. **StatelessWidget**: Immutable. The UI does not change once drawn.\n2. **StatefulWidget**: Mutable. The UI can redraw itself when its internal data (state) changes.',
        contentId: 'Ada dua jenis widget utama: \n1. **StatelessWidget**: Tidak dapat diubah (Immutable). UI tidak berubah setelah digambar.\n2. **StatefulWidget**: Dapat diubah (Mutable). UI dapat menggambar ulang dirinya sendiri ketika data internalnya (state) berubah.',
      },
      {
        type: 'code',
        language: 'dart',
        content: 'class MyText extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Text("I will never change");\n  }\n}',
      },
    ],
  },
  {
    id: 'flutter-m1-l3',
    courseId: 'flutter',
    moduleId: 'flutter-m1',
    title: 'Basic Layouts (Row & Column)',
    titleId: 'Layout Dasar (Row & Column)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Instead of HTML/CSS, you build UI layouts in Flutter by composing widgets together in a tree structure.',
        contentId: 'Alih-alih HTML/CSS, Anda membangun layout UI di Flutter dengan menyusun widget bersama-sama dalam struktur pohon (tree structure).',
      },
      {
        type: 'text',
        content: 'To arrange widgets vertically, use a `Column`. To arrange them horizontally, use a `Row`.',
        contentId: 'Untuk menyusun widget secara vertikal, gunakan `Column`. Untuk menyusunnya secara horizontal, gunakan `Row`.',
      },
      {
        type: 'code',
        language: 'dart',
        content: 'Column(\n  mainAxisAlignment: MainAxisAlignment.center, // Center vertically\n  children: [\n    Text("Top text"),\n    Text("Bottom text"),\n  ],\n)',
      },
      {
        type: 'text',
        content: 'You can use a `Container` widget to add padding, margins, colors, and borders to any other widget.',
        contentId: 'Anda dapat menggunakan widget `Container` untuk menambahkan padding, margin, warna, dan border ke widget apa pun lainnya.',
      },
    ],
  },
];

export default lessons;
