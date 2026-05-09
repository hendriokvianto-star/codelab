import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'html-m1-l1',
    courseId: 'html',
    moduleId: 'html-m1',
    title: 'What is HTML?',
    titleId: 'Apa itu HTML?',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages.',
        contentId: 'HTML singkatan dari HyperText Markup Language. Ini adalah bahasa markup standar untuk membuat halaman web.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<h1>Hello World</h1>\n<p>This is a paragraph.</p>',
      },
    ],
    practiceCode: '<h1>Hello World</h1>\n<!-- Add a paragraph below this line -->\n',
    practiceHint: 'Use the <p> tag to create a paragraph.',
    practiceHintId: 'Gunakan tag <p> untuk membuat paragraf.',
  },
  {
    id: 'html-m1-l2',
    courseId: 'html',
    moduleId: 'html-m1',
    title: 'HTML Attributes',
    titleId: 'Atribut HTML',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Attributes provide additional information about HTML elements. They are always specified in the start tag.',
        contentId: 'Atribut memberikan informasi tambahan tentang elemen HTML. Mereka selalu didefinisikan di tag pembuka.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<a href="https://example.com">Visit Example</a>',
      },
    ],
    practiceCode: '<!-- Add an href attribute to the link below -->\n<a>Click me</a>',
    practiceHint: 'Set href to "https://google.com".',
    practiceHintId: 'Atur href menjadi "https://google.com".',
  },
  {
    id: 'html-m1-l3',
    courseId: 'html',
    moduleId: 'html-m1',
    title: 'Images',
    titleId: 'Gambar',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'The <img> tag is used to embed an image. It is empty, meaning it contains attributes only.',
        contentId: 'Tag <img> digunakan untuk menyematkan gambar. Ini adalah elemen kosong, yang berarti hanya berisi atribut.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<img src="image.jpg" alt="A descriptive text">',
      },
    ],
    practiceCode: '<!-- Add an img tag below -->\n',
    practiceHint: 'Use <img src="...">',
    practiceHintId: 'Gunakan <img src="...">',
  }
];

export default lessons;
