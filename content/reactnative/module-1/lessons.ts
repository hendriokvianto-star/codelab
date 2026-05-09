import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'rn-m1-l1',
    courseId: 'reactnative',
    moduleId: 'rn-m1',
    title: 'Hello Mobile',
    titleId: 'Halo Mobile',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'In React Native, we don\'t use HTML tags like <div> or <p>. Instead, we use Core Components like <View> and <Text>.',
        contentId: 'Di React Native, kita tidak menggunakan tag HTML seperti <div> atau <p>. Sebagai gantinya, kita menggunakan Komponen Inti seperti <View> dan <Text>.',
      },
      {
        type: 'code',
        language: 'jsx',
        content: "import { View, Text } from 'react-native';\n\nexport default function App() {\n  return (\n    <View>\n      <Text>Hello Mobile!</Text>\n    </View>\n  );\n}",
      },
    ],
    practiceCode: 'import { View, Text } from "react-native";\n\nexport default function App() {\n  return (\n    // Ganti kata Hello dengan nama Anda\n    <View>\n      <Text>Hello</Text>\n    </View>\n  );\n}',
    practiceHint: '<Text>Your Name</Text>',
    practiceHintId: 'Gunakan <Text>Nama Anda</Text>',
  },
  {
    id: 'rn-m1-l2',
    courseId: 'reactnative',
    moduleId: 'rn-m1',
    title: 'Styling (StyleSheet)',
    titleId: 'Styling (StyleSheet)',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'To style components, you pass a JavaScript object to the "style" prop. The best way is to use StyleSheet.create().',
        contentId: 'Untuk memberi gaya pada komponen, Anda memberikan objek JavaScript ke properti "style". Cara terbaik adalah menggunakan StyleSheet.create().',
      },
      {
        type: 'code',
        language: 'jsx',
        content: "import { StyleSheet, Text } from 'react-native';\n\nconst styles = StyleSheet.create({\n  title: { fontSize: 24, color: 'blue' }\n});\n\n<Text style={styles.title}>Blue Title</Text>",
      },
    ],
    practiceCode: 'import { Text, StyleSheet } from "react-native";\n\n// Ubah warna menjadi "red"\nconst styles = StyleSheet.create({\n  text: { color: "black" }\n});\n\n<Text style={styles.text}>Danger!</Text>',
    practiceHint: '{ color: "red" }',
    practiceHintId: 'Ubah "black" menjadi "red"',
  },
  {
    id: 'rn-m1-l3',
    courseId: 'reactnative',
    moduleId: 'rn-m1',
    title: 'Multiple Styles',
    titleId: 'Gaya Beragam',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'You can pass an array of styles to a component. The last style in the array has precedence.',
        contentId: 'Anda bisa memberikan sebuah array yang berisi banyak gaya ke sebuah komponen. Gaya terakhir di dalam array akan menang menimpa yang sebelumnya.',
      },
      {
        type: 'code',
        language: 'jsx',
        content: "<Text style={[styles.base, styles.active]}>Hello</Text>",
      },
    ],
    practiceCode: '// Gabungkan styles.box dan styles.red ke dalam array style\n<View style={ } />',
    practiceHint: 'style={[styles.box, styles.red]}',
    practiceHintId: 'Gunakan tanda kurung siku style={[styles.box, styles.red]}',
  }
];

export default lessons;
