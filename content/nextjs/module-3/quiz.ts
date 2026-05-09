import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'next-m3-quiz',
  courseId: 'nextjs',
  moduleId: 'next-m3',
  title: 'Data Fetching Quiz',
  titleId: 'Kuis Pengambilan Data',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'What is the massive advantage of fetching data directly inside an async Server Component?',
      questionId: 'Apa keuntungan masif dari mengambil data secara langsung di dalam sebuah Server Component yang bersifat async?',
      options: ['It automatically styles the component', 'It bypasses the need for a database', 'It reduces client-side JavaScript bundle size and fetches data closer to the database (faster)', 'It forces the browser to cache the data forever'],
      optionsId: ['Komponen akan diberi gaya secara otomatis', 'Mengabaikan kebutuhan akan database', 'Mengurangi ukuran bundel JavaScript sisi klien dan mengambil data lebih dekat ke database (lebih cepat)', 'Memaksa browser untuk melakukan cache data selamanya'],
      correctIndex: 2,
      explanation: 'Since it runs on the server, the data is fetched quickly and only the final HTML is sent to the browser, significantly reducing JS overhead.',
      explanationId: 'Karena berjalan di server, data diambil dengan cepat dan hanya HTML final yang dikirim ke browser, secara signifikan mengurangi beban JS.',
    },
    {
      id: 'q2',
      question: 'How do you create an API endpoint in the Next.js App Router?',
      questionId: 'Bagaimana cara Anda membuat endpoint API di dalam Next.js App Router?',
      options: ['By creating an api.js file', 'By creating a route.ts file exporting HTTP method functions like GET() or POST()', 'By writing PHP code', 'By using the <API> component'],
      optionsId: ['Dengan membuat file api.js', 'Dengan membuat file route.ts yang mengekspor fungsi metode HTTP seperti GET() atau POST()', 'Dengan menulis kode PHP', 'Dengan menggunakan komponen <API>'],
      correctIndex: 1,
      explanation: 'A file named route.ts inside the app folder is treated as a Route Handler (API Endpoint).',
      explanationId: 'Sebuah file bernama route.ts di dalam folder app akan diperlakukan sebagai Route Handler (Endpoint API).',
    },
    {
      id: 'q3',
      question: 'How do you add a custom page title for SEO in a specific page.tsx?',
      questionId: 'Bagaimana cara Anda menambahkan judul halaman (title) kustom untuk keperluan SEO di dalam page.tsx tertentu?',
      options: ['import <Head> from "next/head"', 'export const metadata = { title: "..." }', '<title>...</title> inside the return statement', 'document.title = "..."'],
      optionsId: ['import <Head> dari "next/head"', 'export const metadata = { title: "..." }', '<title>...</title> di dalam perintah return', 'document.title = "..."'],
      correctIndex: 1,
      explanation: 'The App Router introduced the metadata API, where exporting a "metadata" object automatically generates the correct <meta> tags in the document head.',
      explanationId: 'App Router memperkenalkan API metadata, di mana mengekspor objek "metadata" akan secara otomatis menghasilkan tag <meta> yang benar di bagian kepala (head) dokumen.',
    }
  ],
};

export default quiz;
