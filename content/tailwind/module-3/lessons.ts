import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'tailwind-m3-l1',
    courseId: 'tailwind',
    moduleId: 'tailwind-m3',
    title: 'Responsive Design',
    titleId: 'Desain Responsif',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'Tailwind uses mobile-first media queries. You use prefixes like md: (medium screens) and lg: (large screens) to change styles on larger devices.',
        contentId: 'Tailwind menggunakan kueri media mobile-first. Anda menggunakan awalan seperti md: (layar sedang) dan lg: (layar besar) untuk mengubah gaya pada perangkat yang lebih besar.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<div class="w-full md:w-1/2 lg:w-1/3">\n  Responsive Box\n</div>',
      },
    ],
    practiceCode: '<!-- Berikan bg-red-500 secara default, tapi ubah jadi bg-blue-500 di layar sedang (md:) -->\n<div class="">\n  Color shifting box\n</div>',
    practiceHint: 'class="bg-red-500 md:bg-blue-500"',
    practiceHintId: 'Gunakan class="bg-red-500 md:bg-blue-500"',
  },
  {
    id: 'tailwind-m3-l2',
    courseId: 'tailwind',
    moduleId: 'tailwind-m3',
    title: 'Hover & Focus States',
    titleId: 'Status Hover & Focus',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'You can style elements on hover or focus by adding the hover: or focus: prefix before the utility class.',
        contentId: 'Anda dapat menata elemen saat di-hover atau di-focus dengan menambahkan awalan hover: atau focus: sebelum kelas utilitas.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<button class="bg-blue-500 hover:bg-blue-700">\n  Hover Me\n</button>',
      },
    ],
    practiceCode: '<!-- Ubah warna tombol menjadi merah (bg-red-500) saat di-hover -->\n<button class="bg-gray-500 ">\n  Button\n</button>',
    practiceHint: 'Tambahkan utilitas "hover:bg-red-500"',
    practiceHintId: 'Tambahkan utilitas "hover:bg-red-500"',
  },
  {
    id: 'tailwind-m3-l3',
    courseId: 'tailwind',
    moduleId: 'tailwind-m3',
    title: 'Transitions & Animations',
    titleId: 'Transisi & Animasi',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'To make state changes smooth (like hovering), you can use the "transition" class along with duration classes like "duration-300".',
        contentId: 'Untuk membuat perubahan state menjadi halus (seperti hover), Anda dapat menggunakan kelas "transition" bersama dengan kelas durasi seperti "duration-300".',
      },
      {
        type: 'code',
        language: 'html',
        content: '<button class="bg-blue-500 hover:bg-blue-700 transition duration-300">\n  Smooth Button\n</button>',
      },
    ],
    practiceCode: '<!-- Tambahkan kelas "transition" agar efek hovernya mulus -->\n<button class="bg-blue-500 hover:bg-red-500 ">\n  Smooth\n</button>',
    practiceHint: 'Tambahkan kelas "transition"',
    practiceHintId: 'Tambahkan kelas "transition"',
  }
];

export default lessons;
