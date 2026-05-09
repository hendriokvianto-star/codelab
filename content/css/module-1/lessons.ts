import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'css-m1-l1',
    courseId: 'css',
    moduleId: 'css-m1',
    title: 'What is CSS?',
    titleId: 'Apa itu CSS?',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'CSS (Cascading Style Sheets) describes how HTML elements are displayed on screen.',
        contentId: 'CSS (Cascading Style Sheets) mendeskripsikan bagaimana elemen HTML ditampilkan di layar.',
      },
      {
        type: 'code',
        language: 'css',
        content: 'body {\n  background-color: lightblue;\n}',
      },
    ],
    practiceCode: 'body {\n  /* Set background-color to red */\n\n}',
    practiceHint: 'Use background-color: red;',
    practiceHintId: 'Gunakan background-color: red;',
  },
  {
    id: 'css-m1-l2',
    courseId: 'css',
    moduleId: 'css-m1',
    title: 'CSS Selectors',
    titleId: 'Selektor CSS',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Selectors are used to "find" (or select) the HTML elements you want to style.',
        contentId: 'Selektor digunakan untuk "menemukan" (atau memilih) elemen HTML yang ingin Anda desain.',
      },
      {
        type: 'code',
        language: 'css',
        content: '/* Class selector */\n.my-class {\n  color: blue;\n}\n\n/* ID selector */\n#my-id {\n  color: red;\n}',
      },
    ],
    practiceCode: '/* Target the class "highlight" and make text color yellow */\n',
    practiceHint: 'Use .highlight { color: yellow; }',
    practiceHintId: 'Gunakan .highlight { color: yellow; }',
  },
  {
    id: 'css-m1-l3',
    courseId: 'css',
    moduleId: 'css-m1',
    title: 'Fonts and Text',
    titleId: 'Font dan Teks',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'You can change the font family, size, weight, and alignment of text using CSS.',
        contentId: 'Anda dapat mengubah jenis huruf, ukuran, ketebalan, dan perataan teks menggunakan CSS.',
      },
      {
        type: 'code',
        language: 'css',
        content: 'p {\n  font-size: 16px;\n  text-align: center;\n}',
      },
    ],
    practiceCode: 'p {\n  /* Set font-size to 20px */\n\n}',
    practiceHint: 'Use font-size: 20px;',
    practiceHintId: 'Gunakan font-size: 20px;',
  }
];

export default lessons;
