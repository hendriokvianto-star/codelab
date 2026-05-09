import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'css-m2-l1',
    courseId: 'css',
    moduleId: 'css-m2',
    title: 'Margin & Padding',
    titleId: 'Margin & Padding',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Margin clears an area outside the border. Padding clears an area around the content (inside the border).',
        contentId: 'Margin membersihkan area di luar batas (border). Padding membersihkan area di sekitar konten (di dalam border).',
      },
      {
        type: 'code',
        language: 'css',
        content: 'div {\n  margin: 20px;\n  padding: 10px;\n}',
      },
    ],
    practiceCode: '/* Berikan padding 15px pada div ini */\ndiv {\n  \n}',
    practiceHint: 'padding: 15px;',
    practiceHintId: 'Gunakan padding: 15px;',
  },
  {
    id: 'css-m2-l2',
    courseId: 'css',
    moduleId: 'css-m2',
    title: 'Borders',
    titleId: 'Garis Tepi (Border)',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'The border property allows you to specify the style, width, and color of an element\'s border.',
        contentId: 'Properti border memungkinkan Anda menentukan gaya, lebar, dan warna batas suatu elemen.',
      },
      {
        type: 'code',
        language: 'css',
        content: 'p {\n  border: 2px solid red;\n}',
      },
    ],
    practiceCode: '/* Tambahkan border berwarna biru, solid, setebal 1px pada h1 */\nh1 {\n  \n}',
    practiceHint: 'border: 1px solid blue;',
    practiceHintId: 'Gunakan border: 1px solid blue;',
  },
  {
    id: 'css-m2-l3',
    courseId: 'css',
    moduleId: 'css-m2',
    title: 'Box Sizing',
    titleId: 'Box Sizing',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'By default, width and height only apply to the content. If you add padding and borders, the element gets bigger. Using "box-sizing: border-box" includes padding and border in the element\'s total width and height.',
        contentId: 'Secara bawaan, width dan height hanya berlaku untuk konten. Jika Anda menambahkan padding dan border, elemen akan membesar. Menggunakan "box-sizing: border-box" menyertakan padding dan border ke dalam total width dan height elemen.',
      },
      {
        type: 'code',
        language: 'css',
        content: '* {\n  box-sizing: border-box;\n}',
      },
    ],
    practiceCode: '/* Ubah box-sizing ke border-box agar ukuran tetap konsisten */\ndiv {\n  width: 100%;\n  padding: 20px;\n  \n}',
    practiceHint: 'box-sizing: border-box;',
    practiceHintId: 'box-sizing: border-box;',
  }
];

export default lessons;
