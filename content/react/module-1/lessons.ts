import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'react-m1-l1',
    courseId: 'react',
    moduleId: 'react-m1',
    title: 'Hello React & JSX',
    titleId: 'Halo React & JSX',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'React is a library for building user interfaces. It uses JSX, a syntax extension for JavaScript that looks like HTML.',
        contentId: 'React adalah library untuk membangun antarmuka pengguna. React menggunakan JSX, ekstensi sintaks untuk JavaScript yang terlihat seperti HTML.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'const element = <h1>Hello, React!</h1>;',
      },
      {
        type: 'tip',
        content: 'JSX allows you to write HTML inside JavaScript. Under the hood, it is converted to standard JavaScript objects.',
        contentId: 'JSX memungkinkan Anda menulis HTML di dalam JavaScript. Di balik layar, JSX diubah menjadi objek JavaScript standar.',
      }
    ],
    practiceCode: 'function App() {\n  // Kembalikan tag <h1> yang berisi teks "Halo Dunia"\n  return (\n    \n  );\n}',
    practiceHint: 'Return <h1>Halo Dunia</h1>',
    practiceHintId: 'Kembalikan <h1>Halo Dunia</h1>',
  },
  {
    id: 'react-m1-l2',
    courseId: 'react',
    moduleId: 'react-m1',
    title: 'Components',
    titleId: 'Komponen (Components)',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Components let you split the UI into independent, reusable pieces. Conceptually, components are like JavaScript functions.',
        contentId: 'Komponen memungkinkan Anda membagi UI menjadi bagian-bagian yang mandiri dan dapat digunakan kembali. Secara konsep, komponen seperti fungsi JavaScript.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'function Welcome() {\n  return <h1>Hello!</h1>;\n}\n\n// Menggunakan komponen:\nfunction App() {\n  return <Welcome />;\n}',
      },
    ],
    practiceCode: 'function Button() {\n  // Buat komponen yang mereturn tag <button> dengan teks "Klik Saya"\n  return \n}\n',
    practiceHint: 'Return <button>Klik Saya</button>',
    practiceHintId: 'Kembalikan <button>Klik Saya</button>',
  },
  {
    id: 'react-m1-l3',
    courseId: 'react',
    moduleId: 'react-m1',
    title: 'Props',
    titleId: 'Props',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Props (short for properties) are used to pass data from a parent component to a child component.',
        contentId: 'Props (singkatan dari properties) digunakan untuk meneruskan data dari komponen induk ke komponen anak.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\nfunction App() {\n  return <Welcome name="Budi" />;\n}',
      },
    ],
    practiceCode: 'function Greeting(props) {\n  // Gunakan props.title di dalam tag <h2>\n  return <h2></h2>;\n}\n',
    practiceHint: 'Use {props.title} inside <h2>',
    practiceHintId: 'Gunakan {props.title} di dalam <h2>',
  }
];

export default lessons;
