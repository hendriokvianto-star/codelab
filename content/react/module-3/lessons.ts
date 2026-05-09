import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'react-m3-l1',
    courseId: 'react',
    moduleId: 'react-m3',
    title: 'The useEffect Hook',
    titleId: 'Hook useEffect',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'The useEffect hook allows you to perform side effects in your components, such as data fetching, subscriptions, or manually changing the DOM.',
        contentId: 'Hook useEffect memungkinkan Anda melakukan efek samping (side effects) di komponen Anda, seperti mengambil data, langganan event, atau mengubah DOM secara manual.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'import { useEffect } from "react";\n\nuseEffect(() => {\n  console.log("Component mounted!");\n}, []);',
      },
    ],
    practiceCode: 'function App() {\n  // Buat useEffect yang berjalan hanya sekali saat komponen dimuat\n  \n  return <h1>Hello</h1>;\n}',
    practiceHint: 'useEffect(() => { /* do something */ }, []);',
    practiceHintId: 'Gunakan useEffect(() => { /* kode */ }, []);',
  },
  {
    id: 'react-m3-l2',
    courseId: 'react',
    moduleId: 'react-m3',
    title: 'Data Fetching',
    titleId: 'Pengambilan Data (Data Fetching)',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'We often use useEffect combined with fetch() to load data from an API when the component first renders.',
        contentId: 'Kita sering menggunakan useEffect yang digabungkan dengan fetch() untuk memuat data dari API saat komponen pertama kali di-render.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'useEffect(() => {\n  fetch("https://api.example.com/data")\n    .then(res => res.json())\n    .then(data => setData(data));\n}, []);',
      },
    ],
    practiceCode: '// Panggil fetch("https://api.test") di dalam useEffect\nuseEffect(() => {\n  \n}, []);',
    practiceHint: 'Use fetch("https://api.test")',
    practiceHintId: 'Gunakan fetch("https://api.test")',
  },
  {
    id: 'react-m3-l3',
    courseId: 'react',
    moduleId: 'react-m3',
    title: 'Conditional Rendering',
    titleId: 'Rendering Bersyarat',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.',
        contentId: 'Di React, Anda dapat merender komponen yang berbeda tergantung pada state aplikasi Anda. Sering menggunakan operator ternary (?:) atau logical AND (&&).',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'return (\n  <div>\n    {isLoggedIn ? <LogoutButton /> : <LoginButton />}\n    {unreadMessages > 0 && <p>You have new messages!</p>}\n  </div>\n);',
      },
    ],
    practiceCode: 'function App({ isOnline }) {\n  // Render "Online" jika isOnline true, dan "Offline" jika false\n  return (\n    <h1></h1>\n  );\n}',
    practiceHint: '{isOnline ? "Online" : "Offline"}',
    practiceHintId: 'Gunakan {isOnline ? "Online" : "Offline"}',
  }
];

export default lessons;
