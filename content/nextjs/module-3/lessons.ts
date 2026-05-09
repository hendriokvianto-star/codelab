import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'next-m3-l1',
    courseId: 'nextjs',
    moduleId: 'next-m3',
    title: 'Async Server Components',
    titleId: 'Komponen Server Async',
    xp: 40,
    theory: [
      {
        type: 'text',
        content: 'Since Server Components run on the server, you can turn the React component itself into an "async" function and use "await" directly to fetch data. No need for useEffect!',
        contentId: 'Karena Server Components berjalan di server, Anda dapat mengubah komponen React itu sendiri menjadi fungsi "async" dan menggunakan "await" secara langsung untuk mengambil data. Tidak perlu lagi useEffect!',
      },
      {
        type: 'code',
        language: 'tsx',
        content: "export default async function UsersPage() {\n  // Fetch data securely on the server\n  const res = await fetch('https://api.example.com/users');\n  const users = await res.json();\n\n  return (\n    <ul>\n      {users.map(u => <li key={u.id}>{u.name}</li>)}\n    </ul>\n  );\n}",
      },
    ],
    practiceCode: '// Tambahkan kata kunci "async" sebelum function dan "await" sebelum fetch\nexport default function PostPage() {\n  const data = fetch("https://api.com/posts");\n  return <div>Post Loaded</div>;\n}',
    practiceHint: 'export default async function PostPage() {\n  const data = await fetch("https://api.com/posts");',
    practiceHintId: 'Ubah menjadi async function dan await fetch()',
  },
  {
    id: 'next-m3-l2',
    courseId: 'nextjs',
    moduleId: 'next-m3',
    title: 'Route Handlers (API)',
    titleId: 'Route Handlers (Membuat API)',
    xp: 40,
    theory: [
      {
        type: 'text',
        content: 'Next.js can also act as your backend! You can create custom API endpoints by adding a "route.ts" file inside the app folder.',
        contentId: 'Next.js juga dapat bertindak sebagai backend Anda! Anda dapat membuat endpoint API kustom dengan menambahkan file "route.ts" di dalam folder app.',
      },
      {
        type: 'code',
        language: 'tsx',
        content: "// File: app/api/hello/route.ts\nexport async function GET() {\n  return Response.json({ message: 'Hello from Next.js API' });\n}",
      },
    ],
    practiceCode: 'export async function POST() {\n  // Kembalikan Response.json berupa status: "success"\n  \n}',
    practiceHint: 'return Response.json({ status: "success" });',
    practiceHintId: 'Ketik return Response.json({ status: "success" });',
  },
  {
    id: 'next-m3-l3',
    courseId: 'nextjs',
    moduleId: 'next-m3',
    title: 'SEO (Metadata)',
    titleId: 'SEO & Metadata',
    xp: 40,
    theory: [
      {
        type: 'text',
        content: 'Next.js makes SEO easy. You can export a "metadata" object in any page.tsx or layout.tsx to dynamically set the <title> and <meta> tags.',
        contentId: 'Next.js membuat proses SEO menjadi sangat mudah. Anda dapat mengekspor objek "metadata" di page.tsx atau layout.tsx mana pun untuk mengatur tag <title> dan <meta> secara dinamis.',
      },
      {
        type: 'code',
        language: 'tsx',
        content: "export const metadata = {\n  title: 'My Awesome Blog',\n  description: 'Read the best articles here.',\n};\n\nexport default function BlogPage() {\n  return <div>Blog</div>;\n}",
      },
    ],
    practiceCode: '// Ekspor konstanta "metadata" dengan objek berisi title: "Beranda"\n\n\nexport default function HomePage() {\n  return <h1>Welcome</h1>;\n}',
    practiceHint: 'export const metadata = { title: "Beranda" };',
    practiceHintId: 'Ketik export const metadata = { title: "Beranda" }; di atas function',
  }
];

export default lessons;
