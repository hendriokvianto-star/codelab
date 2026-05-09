import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'tailwind-m1-l1',
    courseId: 'tailwind',
    moduleId: 'tailwind-m1',
    title: 'Utility-First Concept',
    titleId: 'Konsep Utility-First',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Tailwind CSS is a utility-first framework. Instead of writing custom CSS classes like .btn, you build designs directly in HTML using tiny, single-purpose classes.',
        contentId: 'Tailwind CSS adalah framework utility-first. Daripada menulis kelas CSS kustom seperti .btn, Anda mendesain langsung di HTML menggunakan kelas kecil yang memiliki satu tujuan.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">\n  Click me\n</button>',
      },
    ],
    practiceCode: '<!-- Tambahkan kelas "bg-red-500" untuk memberikan background merah pada div ini -->\n<div class="">\n  Warning Box\n</div>',
    practiceHint: 'class="bg-red-500"',
    practiceHintId: 'Gunakan class="bg-red-500"',
  },
  {
    id: 'tailwind-m1-l2',
    courseId: 'tailwind',
    moduleId: 'tailwind-m1',
    title: 'Typography & Colors',
    titleId: 'Tipografi & Warna',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'You can control text size (text-sm, text-xl), font weight (font-bold), text color (text-green-600), and background color (bg-gray-100).',
        contentId: 'Anda bisa mengatur ukuran teks (text-sm, text-xl), ketebalan (font-bold), warna teks (text-green-600), dan warna latar (bg-gray-100).',
      },
      {
        type: 'code',
        language: 'html',
        content: '<h1 class="text-3xl font-bold text-gray-900">\n  Hello World\n</h1>',
      },
    ],
    practiceCode: '<!-- Ubah ukuran teks menjadi "text-2xl" dan ketebalannya "font-bold" -->\n<p class="">\n  Judul Utama\n</p>',
    practiceHint: 'class="text-2xl font-bold"',
    practiceHintId: 'Gunakan class="text-2xl font-bold"',
  },
  {
    id: 'tailwind-m1-l3',
    courseId: 'tailwind',
    moduleId: 'tailwind-m1',
    title: 'Spacing (Margin & Padding)',
    titleId: 'Spasi (Margin & Padding)',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Spacing in Tailwind uses a scale. "p-4" means padding of 1rem. "m-2" means margin of 0.5rem. You can specify directions: pt (padding-top), px (padding left/right).',
        contentId: 'Spasi di Tailwind menggunakan skala. "p-4" berarti padding 1rem. "m-2" berarti margin 0.5rem. Anda bisa menentukan arah: pt (padding-top), px (padding horizontal).',
      },
      {
        type: 'code',
        language: 'html',
        content: '<div class="p-4 mt-2 px-6">\n  Spaced Box\n</div>',
      },
    ],
    practiceCode: '<!-- Berikan padding seragam sebesar skala 4 (p-4) pada div ini -->\n<div class="">\n  Content Here\n</div>',
    practiceHint: 'class="p-4"',
    practiceHintId: 'Gunakan class="p-4"',
  }
];

export default lessons;
