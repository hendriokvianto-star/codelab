import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'tailwind-m2-l1',
    courseId: 'tailwind',
    moduleId: 'tailwind-m2',
    title: 'Flexbox Layouts',
    titleId: 'Tata Letak Flexbox',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Tailwind makes flexbox super easy. You simply add the "flex" class to a container. Then use "justify-center" and "items-center" to align content.',
        contentId: 'Tailwind membuat flexbox menjadi sangat mudah. Cukup tambahkan kelas "flex" ke wadah. Lalu gunakan "justify-center" dan "items-center" untuk meratakan konten.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<div class="flex justify-center items-center">\n  <p>Centered Item</p>\n</div>',
      },
    ],
    practiceCode: '<!-- Jadikan div ini sebagai flex container dan posisikan konten di tengah secara horizontal -->\n<div class="">\n  <p>Hello Tailwind</p>\n</div>',
    practiceHint: 'class="flex justify-center"',
    practiceHintId: 'Gunakan class="flex justify-center"',
  },
  {
    id: 'tailwind-m2-l2',
    courseId: 'tailwind',
    moduleId: 'tailwind-m2',
    title: 'CSS Grid',
    titleId: 'CSS Grid',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Grid is great for 2D layouts. Use "grid" to enable it, "grid-cols-3" to create 3 equal columns, and "gap-4" to add space between them.',
        contentId: 'Grid sangat bagus untuk layout 2D. Gunakan "grid" untuk mengaktifkannya, "grid-cols-3" untuk 3 kolom sama besar, dan "gap-4" untuk spasi antar item.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<div class="grid grid-cols-2 gap-4">\n  <div>1</div>\n  <div>2</div>\n</div>',
      },
    ],
    practiceCode: '<!-- Buat grid dengan 3 kolom -->\n<div class="">\n  <div>A</div><div>B</div><div>C</div>\n</div>',
    practiceHint: 'class="grid grid-cols-3"',
    practiceHintId: 'Gunakan class="grid grid-cols-3"',
  },
  {
    id: 'tailwind-m2-l3',
    courseId: 'tailwind',
    moduleId: 'tailwind-m2',
    title: 'Sizing (Width & Height)',
    titleId: 'Ukuran (Width & Height)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Control element sizes using w-* and h-*. For example, "w-full" means width 100%, "h-screen" means 100vh, and "w-1/2" means 50% width.',
        contentId: 'Kendalikan ukuran elemen menggunakan w-* dan h-*. Contohnya, "w-full" berarti width 100%, "h-screen" berarti 100vh, dan "w-1/2" berarti 50% width.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<img src="cat.jpg" class="w-full h-64 object-cover" />',
      },
    ],
    practiceCode: '<!-- Berikan elemen ini lebar penuh (100%) -->\n<button class="bg-blue-500 ">\n  Submit\n</button>',
    practiceHint: 'class="bg-blue-500 w-full"',
    practiceHintId: 'Tambahkan utilitas "w-full"',
  }
];

export default lessons;
