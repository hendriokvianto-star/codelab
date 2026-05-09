import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'next-m1-l1',
    courseId: 'nextjs',
    moduleId: 'next-m1',
    title: 'File-based Routing',
    titleId: 'Routing Berbasis File',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'In Next.js, routes are created automatically based on your folder structure inside the "app" directory. A file named page.tsx becomes a web page.',
        contentId: 'Di Next.js, rute dibuat secara otomatis berdasarkan struktur folder Anda di dalam direktori "app". Sebuah file bernama page.tsx akan menjadi halaman web.',
      },
      {
        type: 'code',
        language: 'tsx',
        content: "// File: app/about/page.tsx\n// This creates the URL: yoursite.com/about\n\nexport default function AboutPage() {\n  return <h1>About Us</h1>;\n}",
      },
    ],
    practiceCode: '// Buatlah komponen halaman untuk file app/contact/page.tsx\n\nexport default function ContactPage() {\n  return <h1></h1>;\n}',
    practiceHint: 'return <h1>Contact</h1>;',
    practiceHintId: 'Isi tag <h1> dengan kata "Contact"',
  },
  {
    id: 'next-m1-l2',
    courseId: 'nextjs',
    moduleId: 'next-m1',
    title: 'Navigation (<Link>)',
    titleId: 'Navigasi (<Link>)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'To move between pages, never use an HTML <a> tag directly, as it causes a full page reload. Instead, use the Next.js <Link> component.',
        contentId: 'Untuk berpindah antar halaman, jangan pernah menggunakan tag HTML <a> secara langsung, karena akan memuat ulang (reload) halaman secara penuh. Gunakan komponen <Link> dari Next.js.',
      },
      {
        type: 'code',
        language: 'tsx',
        content: "import Link from 'next/link';\n\nexport default function Navbar() {\n  return <Link href=\"/about\">Go to About</Link>;\n}",
      },
    ],
    practiceCode: 'import Link from "next/link";\n\nexport default function Menu() {\n  // Buat link yang mengarah ke "/dashboard"\n  return <Link href="">Dashboard</Link>;\n}',
    practiceHint: 'href="/dashboard"',
    practiceHintId: 'Isi atribut href dengan "/dashboard"',
  },
  {
    id: 'next-m1-l3',
    courseId: 'nextjs',
    moduleId: 'next-m1',
    title: 'Layouts',
    titleId: 'Tata Letak (Layouts)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'A layout.tsx file is a wrapper that applies to all page.tsx files within its folder. It is perfect for Navbars and Footers.',
        contentId: 'File layout.tsx adalah pembungkus (wrapper) yang diterapkan ke semua file page.tsx di dalam foldernya. Sangat cocok untuk Navbar dan Footer.',
      },
      {
        type: 'code',
        language: 'tsx',
        content: "// File: app/layout.tsx\nexport default function RootLayout({ children }) {\n  return (\n    <html>\n      <body>\n        <nav>My Site</nav>\n        {children}\n      </body>\n    </html>\n  );\n}",
      },
    ],
    practiceCode: 'export default function DashboardLayout({ children }) {\n  return (\n    <div>\n      <header>Admin Panel</header>\n      {/* Panggil properti children di bawah ini */}\n      \n    </div>\n  );\n}',
    practiceHint: '{children}',
    practiceHintId: 'Ketik {children} di bawah header',
  }
];

export default lessons;
