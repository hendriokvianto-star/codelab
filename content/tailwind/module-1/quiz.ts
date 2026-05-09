import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'tailwind-m1-quiz',
  courseId: 'tailwind',
  moduleId: 'tailwind-m1',
  title: 'Utility-First Quiz',
  titleId: 'Kuis Konsep Dasar',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'What is the core concept of Tailwind CSS?',
      questionId: 'Apa konsep utama dari Tailwind CSS?',
      options: ['Writing long CSS files', 'Utility-first classes', 'Using JavaScript for styles', 'Pre-built heavy components'],
      optionsId: ['Menulis file CSS yang panjang', 'Kelas berorientasi utilitas (utility-first)', 'Menggunakan JavaScript untuk gaya', 'Komponen bawaan yang berat'],
      correctIndex: 1,
      explanation: 'Tailwind is a utility-first CSS framework.',
      explanationId: 'Tailwind adalah framework CSS berorientasi utilitas.',
    },
    {
      id: 'q2',
      question: 'How do you apply a blue background color using Tailwind?',
      questionId: 'Bagaimana cara memberikan warna background biru menggunakan Tailwind?',
      options: ['background-blue', 'color: blue;', 'bg-blue-500', 'bg: blue'],
      optionsId: ['background-blue', 'color: blue;', 'bg-blue-500', 'bg: blue'],
      correctIndex: 2,
      explanation: 'Tailwind uses classes like bg-{color}-{shade} for background colors.',
      explanationId: 'Tailwind menggunakan kelas seperti bg-{warna}-{shade} untuk warna background.',
    },
    {
      id: 'q3',
      question: 'What does the class "px-4" do?',
      questionId: 'Apa yang dilakukan oleh kelas "px-4"?',
      options: ['Sets padding on the x-axis (left and right)', 'Sets padding on all sides', 'Sets margin on the x-axis', 'Sets pixels to 4'],
      optionsId: ['Memberi padding di sumbu x (kiri dan kanan)', 'Memberi padding di semua sisi', 'Memberi margin di sumbu x', 'Mengatur piksel menjadi 4'],
      correctIndex: 0,
      explanation: 'The "x" stands for the x-axis (horizontal), so it applies padding to the left and right.',
      explanationId: 'Huruf "x" singkatan dari sumbu x (horizontal), sehingga menerapkan padding ke kiri dan kanan.',
    }
  ],
};

export default quiz;
