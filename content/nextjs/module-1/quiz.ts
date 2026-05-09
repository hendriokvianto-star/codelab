import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'next-m1-quiz',
  courseId: 'nextjs',
  moduleId: 'next-m1',
  title: 'App Router Quiz',
  titleId: 'Kuis Routing App',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'In the Next.js App Router, what is the exact name of the file required to make a folder publicly accessible as a web page?',
      questionId: 'Pada Next.js App Router, apa nama pasti dari file yang dibutuhkan agar sebuah folder dapat diakses publik sebagai halaman web?',
      options: ['index.html', 'route.tsx', 'page.tsx', 'view.js'],
      optionsId: ['index.html', 'route.tsx', 'page.tsx', 'view.js'],
      correctIndex: 2,
      explanation: 'Folders define routes, but they only become accessible URLs if they contain a page.tsx (or .jsx) file.',
      explanationId: 'Folder mendefinisikan rute, namun mereka hanya akan menjadi URL yang bisa diakses jika di dalamnya terdapat file page.tsx (atau .jsx).',
    },
    {
      id: 'q2',
      question: 'Why should you use Next.js <Link> instead of an HTML <a> tag?',
      questionId: 'Mengapa Anda harus menggunakan <Link> Next.js daripada tag HTML <a>?',
      options: ['Because <a> tags are banned in React', 'It pre-fetches data and prevents a full page reload, making transitions instantly fast', 'It makes the text bold automatically', 'It is the only way to style links'],
      optionsId: ['Karena tag <a> dilarang di React', 'Ia melakukan pra-muat (pre-fetch) data dan mencegah muat ulang halaman secara penuh, membuat transisi sekejap mata', 'Membuat teks menjadi tebal secara otomatis', 'Satu-satunya cara memberi gaya pada link'],
      correctIndex: 1,
      explanation: '<Link> allows for client-side navigation within a Single Page Application (SPA) architecture without downloading the whole HTML again.',
      explanationId: '<Link> memungkinkan navigasi sisi klien dalam arsitektur Single Page Application (SPA) tanpa perlu mengunduh ulang seluruh HTML.',
    },
    {
      id: 'q3',
      question: 'What is the purpose of layout.tsx?',
      questionId: 'Apa tujuan dari file layout.tsx?',
      options: ['To write CSS styles', 'To configure the database', 'To share common UI (like a Navbar) across multiple pages', 'To handle API requests'],
      optionsId: ['Untuk menulis gaya CSS', 'Untuk mengonfigurasi database', 'Untuk membagikan UI yang sama (seperti Navbar) ke banyak halaman', 'Untuk menangani permintaan API'],
      correctIndex: 2,
      explanation: 'Layouts preserve their state and do not re-render when the user navigates between sibling pages.',
      explanationId: 'Layout mempertahankan state-nya dan tidak di-render ulang ketika pengguna berpindah antar halaman yang bersaudara (sibling).',
    }
  ],
};

export default quiz;
