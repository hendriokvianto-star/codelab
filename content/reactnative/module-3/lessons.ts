import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'rn-m3-l1',
    courseId: 'reactnative',
    moduleId: 'rn-m3',
    title: 'Buttons & onPress',
    titleId: 'Tombol & onPress',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'To make something clickable, we can use the <Button> component. Unlike web buttons, it requires a "title" prop and an "onPress" event.',
        contentId: 'Untuk membuat sesuatu yang bisa diklik, kita bisa menggunakan komponen <Button>. Berbeda dengan tombol di web, komponen ini membutuhkan properti "title" dan event "onPress".',
      },
      {
        type: 'code',
        language: 'jsx',
        content: '<Button \n  title="Press Me" \n  onPress={() => alert("Hello!")} \n/>',
      },
    ],
    practiceCode: 'import { View, Button } from "react-native";\n\n// Tambahkan properti title="Kirim" pada Button di bawah ini\n<View>\n  <Button />\n</View>',
    practiceHint: 'title="Kirim"',
    practiceHintId: 'Tambahkan title="Kirim" di dalam tag Button',
  },
  {
    id: 'rn-m3-l2',
    courseId: 'reactnative',
    moduleId: 'rn-m3',
    title: 'Text Input',
    titleId: 'Input Teks',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: '<TextInput> is used to capture user keyboard input. Use the "onChangeText" prop to read what the user types.',
        contentId: '<TextInput> digunakan untuk menangkap input keyboard pengguna. Gunakan properti "onChangeText" untuk membaca apa yang diketik pengguna.',
      },
      {
        type: 'code',
        language: 'jsx',
        content: '<TextInput \n  placeholder="Enter your name" \n  onChangeText={(text) => console.log(text)} \n/>',
      },
    ],
    practiceCode: 'import { View, TextInput } from "react-native";\n\n// Berikan properti placeholder="Cari..." pada TextInput\n<View>\n  <TextInput />\n</View>',
    practiceHint: 'placeholder="Cari..."',
    practiceHintId: 'Gunakan placeholder="Cari..."',
  },
  {
    id: 'rn-m3-l3',
    courseId: 'reactnative',
    moduleId: 'rn-m3',
    title: 'Using State',
    titleId: 'Menggunakan State',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'You can use React hooks like useState in React Native just like you do in React Web to store dynamic data.',
        contentId: 'Anda bisa menggunakan hooks React seperti useState di React Native sama seperti di React Web untuk menyimpan data dinamis.',
      },
      {
        type: 'code',
        language: 'jsx',
        content: 'const [name, setName] = useState("");\n\n<TextInput onChangeText={setName} />\n<Text>Hello {name}</Text>',
      },
    ],
    practiceCode: 'import { useState } from "react";\nimport { Text } from "react-native";\n\nexport default function App() {\n  // Buat state count dengan nilai awal 0\n  \n  return <Text>{count}</Text>;\n}',
    practiceHint: 'const [count, setCount] = useState(0);',
    practiceHintId: 'Ketik const [count, setCount] = useState(0);',
  }
];

export default lessons;
