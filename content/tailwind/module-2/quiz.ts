import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'tailwind-m2-quiz',
  courseId: 'tailwind',
  moduleId: 'tailwind-m2',
  title: 'Layouts Quiz',
  titleId: 'Kuis Layout',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which class aligns flex items vertically to the center in Tailwind?',
      questionId: 'Kelas apa yang meratakan item flex secara vertikal ke tengah di Tailwind?',
      options: ['justify-center', 'align-middle', 'items-center', 'center-y'],
      optionsId: ['justify-center', 'align-middle', 'items-center', 'center-y'],
      correctIndex: 2,
      explanation: 'items-center is equivalent to align-items: center in standard CSS.',
      explanationId: 'items-center setara dengan align-items: center di CSS standar.',
    },
    {
      id: 'q2',
      question: 'How do you create a CSS Grid with 4 equal columns?',
      questionId: 'Bagaimana Anda membuat CSS Grid dengan 4 kolom yang sama besar?',
      options: ['grid cols-4', 'grid-4', 'grid grid-cols-4', 'display-grid columns-4'],
      optionsId: ['grid cols-4', 'grid-4', 'grid grid-cols-4', 'display-grid columns-4'],
      correctIndex: 2,
      explanation: 'You must first enable grid with "grid", then define columns with "grid-cols-4".',
      explanationId: 'Anda harus mengaktifkan grid dengan "grid", lalu menentukan kolom dengan "grid-cols-4".',
    },
    {
      id: 'q3',
      question: 'What does the "w-full" class do?',
      questionId: 'Apa yang dilakukan oleh kelas "w-full"?',
      options: ['Sets width to 100vw', 'Sets width to 100%', 'Makes the screen full', 'Sets weight to full'],
      optionsId: ['Mengatur width menjadi 100vw', 'Mengatur width menjadi 100%', 'Membuat layar penuh', 'Mengatur weight menjadi penuh'],
      correctIndex: 1,
      explanation: '"w-full" translates to width: 100%.',
      explanationId: '"w-full" diterjemahkan menjadi width: 100%.',
    }
  ],
};

export default quiz;
