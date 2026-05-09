import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'css-m3-l1',
    courseId: 'css',
    moduleId: 'css-m3',
    title: 'Display: Flex',
    titleId: 'Display: Flex',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'The Flexible Box Layout Module (Flexbox) makes it easier to design flexible responsive layout structure. You start by setting "display: flex" on a container.',
        contentId: 'Modul Flexible Box Layout (Flexbox) memudahkan desain struktur tata letak yang responsif. Anda memulainya dengan mengatur "display: flex" pada sebuah wadah (container).',
      },
      {
        type: 'code',
        language: 'css',
        content: '.container {\n  display: flex;\n}',
      },
    ],
    practiceCode: '/* Jadikan .container sebagai flex container */\n.container {\n  \n}',
    practiceHint: 'display: flex;',
    practiceHintId: 'Gunakan display: flex;',
  },
  {
    id: 'css-m3-l2',
    courseId: 'css',
    moduleId: 'css-m3',
    title: 'Justify Content & Align Items',
    titleId: 'Justify Content & Align Items',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'justify-content aligns items horizontally (by default), and align-items aligns them vertically.',
        contentId: 'justify-content meratakan item secara horizontal (secara bawaan), dan align-items meratakannya secara vertikal.',
      },
      {
        type: 'code',
        language: 'css',
        content: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}',
      },
    ],
    practiceCode: '/* Posisikan item ke tengah secara horizontal dan vertikal */\n.container {\n  display: flex;\n  \n  \n}',
    practiceHint: 'justify-content: center; align-items: center;',
    practiceHintId: 'Gunakan justify-content: center; dan align-items: center;',
  },
  {
    id: 'css-m3-l3',
    courseId: 'css',
    moduleId: 'css-m3',
    title: 'Flex Direction',
    titleId: 'Arah Flex (Flex Direction)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'The flex-direction property specifies the direction of the flexible items inside the flex container (row or column).',
        contentId: 'Properti flex-direction menentukan arah item-item fleksibel di dalam wadah flex (row untuk baris, column untuk kolom).',
      },
      {
        type: 'code',
        language: 'css',
        content: '.container {\n  display: flex;\n  flex-direction: column;\n}',
      },
    ],
    practiceCode: '/* Susun item ke bawah (kolom) alih-alih menyamping */\n.container {\n  display: flex;\n  \n}',
    practiceHint: 'flex-direction: column;',
    practiceHintId: 'Gunakan flex-direction: column;',
  }
];

export default lessons;
