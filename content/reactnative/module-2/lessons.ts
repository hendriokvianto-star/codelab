import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'rn-m2-l1',
    courseId: 'reactnative',
    moduleId: 'rn-m2',
    title: 'Flex: 1',
    titleId: 'Flex: 1',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'All components in React Native use Flexbox by default. Adding flex: 1 tells a component to expand and fill the available space.',
        contentId: 'Semua komponen di React Native menggunakan Flexbox secara bawaan. Menambahkan flex: 1 menyuruh komponen untuk memuai dan mengisi ruang yang tersedia.',
      },
      {
        type: 'code',
        language: 'jsx',
        content: '<View style={{ flex: 1, backgroundColor: "red" }} />',
      },
    ],
    practiceCode: '// Tambahkan flex: 1 ke dalam style View ini\n<View style={{ backgroundColor: "blue" }} />',
    practiceHint: '{ flex: 1, backgroundColor: "blue" }',
    practiceHintId: 'Gunakan { flex: 1, backgroundColor: "blue" }',
  },
  {
    id: 'rn-m2-l2',
    courseId: 'reactnative',
    moduleId: 'rn-m2',
    title: 'Flex Direction',
    titleId: 'Arah Flex (Direction)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Unlike the web where the default direction is "row", React Native\'s default flexDirection is "column" (top to bottom).',
        contentId: 'Berbeda dengan web yang arah bawaannya "row" (baris), flexDirection bawaan React Native adalah "column" (kolom/atas ke bawah).',
      },
      {
        type: 'code',
        language: 'jsx',
        content: '<View style={{ flexDirection: "row" }}>\n  <Text>Left</Text>\n  <Text>Right</Text>\n</View>',
      },
    ],
    practiceCode: '// Ubah tata letak kedua item agar sejajar secara horizontal (kiri-kanan)\n<View style={{ flexDirection: "column" }}>\n  <Text>1</Text>\n  <Text>2</Text>\n</View>',
    practiceHint: 'flexDirection: "row"',
    practiceHintId: 'Ubah menjadi flexDirection: "row"',
  },
  {
    id: 'rn-m2-l3',
    courseId: 'reactnative',
    moduleId: 'rn-m2',
    title: 'Centering Content',
    titleId: 'Menengahkan Konten',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'To place content exactly in the center of the screen, use both justifyContent: "center" and alignItems: "center".',
        contentId: 'Untuk menempatkan konten persis di tengah layar, gunakan justifyContent: "center" dan alignItems: "center" sekaligus.',
      },
      {
        type: 'code',
        language: 'jsx',
        content: '<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>\n  <Text>Bulls Eye!</Text>\n</View>',
      },
    ],
    practiceCode: '// Tengahkan teks ini secara vertikal dan horizontal\n<View style={{ flex: 1 }}>\n  <Text>Center Me</Text>\n</View>',
    practiceHint: '{ flex: 1, justifyContent: "center", alignItems: "center" }',
    practiceHintId: 'Tambahkan justifyContent: "center" dan alignItems: "center"',
  }
];

export default lessons;
