import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'tailwind-m3-quiz',
  courseId: 'tailwind',
  moduleId: 'tailwind-m3',
  title: 'Responsiveness Quiz',
  titleId: 'Kuis Responsivitas',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which prefix is used to target medium-sized screens (like tablets) in Tailwind?',
      questionId: 'Awalan apa yang digunakan untuk menargetkan layar ukuran sedang (seperti tablet) di Tailwind?',
      options: ['sm:', 'md:', 'lg:', 'tablet:'],
      optionsId: ['sm:', 'md:', 'lg:', 'tablet:'],
      correctIndex: 1,
      explanation: 'The md: prefix targets medium screens (min-width: 768px).',
      explanationId: 'Awalan md: menargetkan layar sedang (min-width: 768px).',
    },
    {
      id: 'q2',
      question: 'How do you change the text color to red only when the user hovers over a link?',
      questionId: 'Bagaimana cara mengubah warna teks menjadi merah hanya saat pengguna mengarahkan kursor (hover) ke sebuah tautan?',
      options: ['hover-text-red', 'text-red:hover', 'hover:text-red-500', 'onhover:text-red-500'],
      optionsId: ['hover-text-red', 'text-red:hover', 'hover:text-red-500', 'onhover:text-red-500'],
      correctIndex: 2,
      explanation: 'The hover: prefix applies the utility class only on hover.',
      explanationId: 'Awalan hover: menerapkan kelas utilitas hanya saat status hover.',
    },
    {
      id: 'q3',
      question: 'What class must be present to enable smooth animations when hover states change?',
      questionId: 'Kelas apa yang harus ada untuk mengaktifkan animasi halus ketika status hover berubah?',
      options: ['animate', 'smooth', 'transition', 'hover-animate'],
      optionsId: ['animate', 'smooth', 'transition', 'hover-animate'],
      correctIndex: 2,
      explanation: 'The "transition" class enables smooth transitions for background, color, and more.',
      explanationId: 'Kelas "transition" mengaktifkan transisi halus untuk latar belakang, warna, dan banyak lagi.',
    }
  ],
};

export default quiz;
