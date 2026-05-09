import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'next-m2-quiz',
  courseId: 'nextjs',
  moduleId: 'next-m2',
  title: 'Server vs Client Quiz',
  titleId: 'Kuis Server vs Client',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'What is the default rendering strategy for components in the Next.js App Router?',
      questionId: 'Apa strategi rendering bawaan (default) untuk komponen-komponen di dalam Next.js App Router?',
      options: ['Client Components', 'Server Components', 'Static Generation Only', 'Mixed Components'],
      optionsId: ['Client Components (Klien)', 'Server Components (Server)', 'Hanya Generasi Statis', 'Komponen Campuran'],
      correctIndex: 1,
      explanation: 'To maximize performance and SEO, everything is a Server Component by default unless explicitly stated otherwise.',
      explanationId: 'Untuk memaksimalkan performa dan SEO, semuanya adalah Server Component secara default kecuali dinyatakan lain secara eksplisit.',
    },
    {
      id: 'q2',
      question: 'When must you add the "use client" directive to a file?',
      questionId: 'Kapan Anda diwajibkan untuk menambahkan direktif "use client" pada sebuah file?',
      options: ['When fetching data from a database', 'When you want to use standard HTML tags', 'When using React Hooks (useState, useEffect) or event listeners (onClick)', 'When defining a layout.tsx file'],
      optionsId: ['Ketika mengambil data dari database', 'Ketika ingin menggunakan tag HTML standar', 'Ketika menggunakan React Hooks (useState, useEffect) atau event listener (onClick)', 'Ketika mendefinisikan file layout.tsx'],
      correctIndex: 2,
      explanation: 'Interactivity and browser APIs require the component to be shipped and executed on the client-side.',
      explanationId: 'Interaktivitas dan API browser mengharuskan komponen dikirimkan dan dieksekusi di sisi klien.',
    },
    {
      id: 'q3',
      question: 'Can you import a Server Component directly into a Client Component?',
      questionId: 'Bisakah Anda mengimpor sebuah Server Component secara langsung ke dalam Client Component?',
      options: ['Yes, always', 'No, it will convert the Server Component into a Client Component', 'Yes, but it will cause an error', 'Only if the Server component has no logic'],
      optionsId: ['Ya, selalu', 'Tidak, itu akan mengubah Server Component menjadi Client Component', 'Ya, tetapi akan menyebabkan error', 'Hanya jika Server component tidak memiliki logika'],
      correctIndex: 1,
      explanation: 'Importing a Server Component into a Client Component forces it to become a Client Component. Instead, you should pass it as a {children} prop.',
      explanationId: 'Mengimpor Server Component ke dalam Client Component memaksanya menjadi Client Component. Sebagai gantinya, Anda harus memasukkannya sebagai properti {children}.',
    }
  ],
};

export default quiz;
