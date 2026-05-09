import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'react-m2-l1',
    courseId: 'react',
    moduleId: 'react-m2',
    title: 'State & Hooks (useState)',
    titleId: 'State & Hooks (useState)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'State allows React components to change their output over time in response to user actions. We use the useState hook for this.',
        contentId: 'State memungkinkan komponen React mengubah outputnya dari waktu ke waktu sebagai respons terhadap aksi pengguna. Kita menggunakan hook useState untuk ini.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <p>Count: {count}</p>;\n}',
      },
    ],
    practiceCode: 'function Profile() {\n  // Buat state "name" dengan nilai awal "Guest"\n  \n  return <h1>Hello, {name}</h1>;\n}',
    practiceHint: 'const [name, setName] = useState("Guest");',
    practiceHintId: 'Gunakan: const [name, setName] = useState("Guest");',
  },
  {
    id: 'react-m2-l2',
    courseId: 'react',
    moduleId: 'react-m2',
    title: 'Event Handlers',
    titleId: 'Event Handlers',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'React events are named using camelCase, rather than lowercase. With JSX you pass a function as the event handler.',
        contentId: 'Event React dinamai menggunakan camelCase, bukan huruf kecil. Dengan JSX, Anda meneruskan fungsi sebagai event handler.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '<button onClick={() => alert("Clicked!")}>\n  Click me\n</button>',
      },
    ],
    practiceCode: 'function Clicker() {\n  // Tambahkan event onClick ke tombol ini untuk memanggil alert("Halo")\n  return <button>Click Here</button>;\n}',
    practiceHint: 'Use onClick={() => alert("Halo")}',
    practiceHintId: 'Gunakan onClick={() => alert("Halo")}',
  },
  {
    id: 'react-m2-l3',
    courseId: 'react',
    moduleId: 'react-m2',
    title: 'Rendering Lists',
    titleId: 'Merender List Data',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'You can build collections of elements and include them in JSX using curly braces {}. We usually use the JavaScript .map() function.',
        contentId: 'Anda dapat membangun koleksi elemen dan menyertakannya di JSX menggunakan kurung kurawal {}. Biasanya kita menggunakan fungsi JavaScript .map().',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'const fruits = ["Apple", "Banana", "Cherry"];\nreturn (\n  <ul>\n    {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}\n  </ul>\n);',
      },
      {
        type: 'warning',
        content: 'Always include a unique "key" prop when rendering lists!',
        contentId: 'Selalu sertakan prop "key" yang unik saat merender list!',
      }
    ],
    practiceCode: 'function List() {\n  const items = ["One", "Two"];\n  // Tampilkan variabel items sebagai list (li) menggunakan .map()\n  return (\n    <ul>\n      \n    </ul>\n  );\n}',
    practiceHint: '{items.map((item, i) => <li key={i}>{item}</li>)}',
    practiceHintId: 'Gunakan {items.map((item, i) => <li key={i}>{item}</li>)}',
  }
];

export default lessons;
