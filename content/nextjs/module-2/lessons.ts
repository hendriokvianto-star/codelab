import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'next-m2-l1',
    courseId: 'nextjs',
    moduleId: 'next-m2',
    title: 'Server Components',
    titleId: 'Komponen Server (Default)',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'By default, all components inside the Next.js App Router are Server Components. They are rendered on the server, meaning no JavaScript is sent to the client. This makes pages load incredibly fast!',
        contentId: 'Secara bawaan, semua komponen di dalam Next.js App Router adalah Server Components. Mereka dirender di server, artinya tidak ada JavaScript yang dikirim ke browser klien. Ini membuat halaman memuat dengan sangat cepat!',
      },
      {
        type: 'code',
        language: 'tsx',
        content: "// This runs on the server!\nexport default function Home() {\n  return <h1>Hello World</h1>;\n}",
      },
    ],
    practiceCode: '// Buatlah sebuah Server Component bernama Page\n\nexport default function Page() {\n  return <div>Welcome to the Server</div>;\n}',
    practiceHint: 'Biarkan kodenya apa adanya dan jalankan',
    practiceHintId: 'Tidak perlu ada tambahan kode, jalankan saja.',
  },
  {
    id: 'next-m2-l2',
    courseId: 'nextjs',
    moduleId: 'next-m2',
    title: 'Use Client Directive',
    titleId: 'Direktif "use client"',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'If your component needs user interaction (like onClick), or React hooks (like useState or useEffect), you MUST make it a Client Component by adding "use client" at the very top of the file.',
        contentId: 'Jika komponen Anda membutuhkan interaksi pengguna (seperti onClick), atau hooks React (seperti useState atau useEffect), Anda HARUS menjadikannya Client Component dengan menambahkan "use client" di baris paling atas file.',
      },
      {
        type: 'code',
        language: 'tsx',
        content: "\"use client\";\n\nimport { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}",
      },
    ],
    practiceCode: '// Tambahkan direktif "use client" agar onClick bisa berfungsi\n\nexport default function AlertButton() {\n  return <button onClick={() => alert("Hi")}>Klik</button>;\n}',
    practiceHint: '"use client";',
    practiceHintId: 'Ketik "use client"; di baris pertama',
  },
  {
    id: 'next-m2-l3',
    courseId: 'nextjs',
    moduleId: 'next-m2',
    title: 'Mixing Client & Server',
    titleId: 'Mencampur Client & Server',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'You can pass a Server Component as a child (children prop) to a Client Component. This allows you to keep interactive parts on the client while keeping the rest of the page fast on the server.',
        contentId: 'Anda dapat memasukkan Server Component sebagai anak (properti children) ke dalam Client Component. Ini memungkinkan Anda untuk membuat bagian yang interaktif di klien, sambil menjaga sisa halaman tetap cepat dirender di server.',
      },
      {
        type: 'code',
        language: 'tsx',
        content: "// Server Component passing children to Client Component\nexport default function Page() {\n  return (\n    <ClientWrapper>\n      <ServerChild />\n    </ClientWrapper>\n  );\n}",
      },
    ],
    practiceCode: '// Latihan: Pastikan Anda memahami struktur ini.\n// Cukup tekan Jalankan.\nexport default function Mixing() {\n  return <div>Client & Server Mixed</div>;\n}',
    practiceHint: 'Jalankan saja',
    practiceHintId: 'Tekan Run Code',
  }
];

export default lessons;
