import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'html-m2-l1',
    courseId: 'html',
    moduleId: 'html-m2',
    title: 'HTML Lists',
    titleId: 'List HTML (Daftar)',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Lists in HTML can be unordered (bullet points) using <ul> or ordered (numbered) using <ol>. Inside both, you use <li> for each item.',
        contentId: 'List dalam HTML dapat berupa unordered (titik bullet) menggunakan <ul> atau ordered (bernomor) menggunakan <ol>. Di dalam keduanya, Anda menggunakan <li> untuk setiap item.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>\n\n<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>',
      },
    ],
    practiceCode: '<!-- Buat unordered list (ul) dengan 2 item (li) di dalamnya -->\n\n',
    practiceHint: 'Use <ul> and <li>',
    practiceHintId: 'Gunakan <ul> dan <li>',
  },
  {
    id: 'html-m2-l2',
    courseId: 'html',
    moduleId: 'html-m2',
    title: 'HTML Tables',
    titleId: 'Tabel HTML',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Tables are defined with the <table> tag. Each table row is defined with a <tr> tag. A table header is defined with a <th> tag. By default, table headings are bold and centered. A table data/cell is defined with a <td> tag.',
        contentId: 'Tabel didefinisikan dengan tag <table>. Setiap baris tabel didefinisikan dengan tag <tr>. Header tabel didefinisikan dengan tag <th>. Sebuah data/sel tabel didefinisikan dengan tag <td>.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n</table>',
      },
    ],
    practiceCode: '<!-- Buat tabel sederhana dengan 1 baris dan 2 sel data (td) -->\n<table>\n  <tr>\n    \n  </tr>\n</table>',
    practiceHint: 'Use <td> inside <tr>',
    practiceHintId: 'Gunakan <td> di dalam <tr>',
  },
  {
    id: 'html-m2-l3',
    courseId: 'html',
    moduleId: 'html-m2',
    title: 'Semantic HTML',
    titleId: 'Semantik HTML',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Semantic HTML elements clearly describe their meaning to both the browser and the developer. Examples: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>.',
        contentId: 'Elemen HTML semantik menjelaskan maknanya dengan jelas kepada browser dan developer. Contoh: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<header>\n  <h1>Website Title</h1>\n</header>\n<main>\n  <article>\n    <p>Content goes here.</p>\n  </article>\n</main>\n<footer>\n  <p>Copyright 2026</p>\n</footer>',
      },
    ],
    practiceCode: '<!-- Bungkus <h1> ini dengan tag <header> yang tepat -->\n<h1>Welcome to my website</h1>',
    practiceHint: 'Wrap with <header>',
    practiceHintId: 'Bungkus dengan <header>',
  }
];

export default lessons;
