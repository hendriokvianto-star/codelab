import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'css-m1-quiz',
  courseId: 'css',
  moduleId: 'css-m1',
  title: 'CSS Basics Quiz',
  titleId: 'Kuis Dasar CSS',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'What does CSS stand for?',
      questionId: 'Apa kepanjangan dari CSS?',
      options: ['Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'],
      optionsId: ['Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'],
      correctIndex: 2,
      explanation: 'CSS stands for Cascading Style Sheets.',
      explanationId: 'CSS adalah singkatan dari Cascading Style Sheets.',
    },
    {
      id: 'q2',
      question: 'Which HTML tag is used to define an internal style sheet?',
      questionId: 'Tag HTML apa yang digunakan untuk mendefinisikan internal style sheet?',
      options: ['<script>', '<css>', '<style>', '<design>'],
      optionsId: ['<script>', '<css>', '<style>', '<design>'],
      correctIndex: 2,
      explanation: 'The <style> tag is used for internal CSS.',
      explanationId: 'Tag <style> digunakan untuk CSS internal.',
    },
    {
      id: 'q3',
      question: 'Which property is used to change the background color?',
      questionId: 'Properti apa yang digunakan untuk mengubah warna latar belakang?',
      options: ['bgcolor', 'color', 'background-color', 'bg-color'],
      optionsId: ['bgcolor', 'color', 'background-color', 'bg-color'],
      correctIndex: 2,
      explanation: 'Use the background-color property.',
      explanationId: 'Gunakan properti background-color.',
    }
  ],
};

export default quiz;
