import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'rn-m2-quiz',
  courseId: 'reactnative',
  moduleId: 'rn-m2',
  title: 'Flexbox Quiz',
  titleId: 'Kuis Flexbox',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'What is the default flexDirection in React Native?',
      questionId: 'Apa flexDirection bawaan pada React Native?',
      options: ['row', 'column', 'row-reverse', 'none'],
      optionsId: ['row', 'column', 'row-reverse', 'none'],
      correctIndex: 1,
      explanation: 'On mobile, elements stack vertically by default (column).',
      explanationId: 'Di perangkat mobile, elemen ditumpuk secara vertikal sebagai bawaan (kolom).',
    },
    {
      id: 'q2',
      question: 'What does "flex: 1" do when applied to a container?',
      questionId: 'Apa yang dilakukan "flex: 1" ketika diterapkan ke sebuah wadah (container)?',
      options: ['It hides the container', 'It shrinks the container to 1 pixel', 'It makes the container fill all available space', 'It changes the text color to black'],
      optionsId: ['Menyembunyikan container', 'Menyusutkan container menjadi 1 piksel', 'Membuat container mengisi semua ruang yang tersedia', 'Mengubah warna teks menjadi hitam'],
      correctIndex: 2,
      explanation: 'flex: 1 tells the component to expand proportionally to fill empty space.',
      explanationId: 'flex: 1 menyuruh komponen untuk mengembang secara proporsional guna mengisi ruang kosong.',
    },
    {
      id: 'q3',
      question: 'Which property aligns children along the main axis?',
      questionId: 'Properti mana yang meratakan elemen anak di sepanjang sumbu utama (main axis)?',
      options: ['alignItems', 'alignSelf', 'justifyContent', 'alignContent'],
      optionsId: ['alignItems', 'alignSelf', 'justifyContent', 'alignContent'],
      correctIndex: 2,
      explanation: 'justifyContent aligns items across the primary axis (vertical if column, horizontal if row).',
      explanationId: 'justifyContent menyejajarkan item di sepanjang sumbu primer (vertikal jika column, horizontal jika row).',
    }
  ],
};

export default quiz;
