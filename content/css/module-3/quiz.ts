import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'css-m3-quiz',
  courseId: 'css',
  moduleId: 'css-m3',
  title: 'Flexbox Quiz',
  titleId: 'Kuis Flexbox',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'How do you initialize a Flexbox layout on a container?',
      questionId: 'Bagaimana cara mengaktifkan layout Flexbox pada sebuah wadah (container)?',
      options: ['display: flexbox;', 'layout: flex;', 'display: flex;', 'float: flex;'],
      optionsId: ['display: flexbox;', 'layout: flex;', 'display: flex;', 'float: flex;'],
      correctIndex: 2,
      explanation: 'Using display: flex; turns the element into a flex container.',
      explanationId: 'Menggunakan display: flex; mengubah elemen menjadi flex container.',
    },
    {
      id: 'q2',
      question: 'Which property aligns flex items along the main axis (usually horizontally)?',
      questionId: 'Properti mana yang meratakan item flex di sepanjang sumbu utama (biasanya secara horizontal)?',
      options: ['align-items', 'justify-content', 'flex-direction', 'align-content'],
      optionsId: ['align-items', 'justify-content', 'flex-direction', 'align-content'],
      correctIndex: 1,
      explanation: 'justify-content is used to align items on the main axis.',
      explanationId: 'justify-content digunakan untuk meratakan item di sumbu utama.',
    },
    {
      id: 'q3',
      question: 'If you want flex items to stack vertically from top to bottom, what should you use?',
      questionId: 'Jika Anda ingin item flex ditumpuk secara vertikal dari atas ke bawah, apa yang harus Anda gunakan?',
      options: ['flex-direction: row;', 'flex-direction: column;', 'align-items: center;', 'justify-content: vertical;'],
      optionsId: ['flex-direction: row;', 'flex-direction: column;', 'align-items: center;', 'justify-content: vertical;'],
      correctIndex: 1,
      explanation: 'flex-direction: column makes the main axis vertical.',
      explanationId: 'flex-direction: column membuat sumbu utamanya menjadi vertikal.',
    }
  ],
};

export default quiz;
