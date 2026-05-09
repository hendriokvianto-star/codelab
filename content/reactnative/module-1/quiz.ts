import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'rn-m1-quiz',
  courseId: 'reactnative',
  moduleId: 'rn-m1',
  title: 'Mobile Components Quiz',
  titleId: 'Kuis Komponen Mobile',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which component is used to display text in React Native?',
      questionId: 'Komponen apa yang digunakan untuk menampilkan teks di React Native?',
      options: ['<p>', '<span>', '<Text>', '<Typography>'],
      optionsId: ['<p>', '<span>', '<Text>', '<Typography>'],
      correctIndex: 2,
      explanation: '<Text> is the core component for rendering text, supporting nesting and styling.',
      explanationId: '<Text> adalah komponen inti untuk merender teks, yang mendukung penyarangan (nesting) dan penataan gaya.',
    },
    {
      id: 'q2',
      question: 'What is the equivalent of a <div> in React Native?',
      questionId: 'Apa yang setara dengan <div> di React Native?',
      options: ['<Box>', '<Container>', '<Section>', '<View>'],
      optionsId: ['<Box>', '<Container>', '<Section>', '<View>'],
      correctIndex: 3,
      explanation: '<View> is the most fundamental component for building a UI, serving as a container that supports layout with flexbox.',
      explanationId: '<View> adalah komponen paling fundamental untuk membangun UI, berfungsi sebagai wadah yang mendukung tata letak dengan flexbox.',
    },
    {
      id: 'q3',
      question: 'How do you define styles efficiently in React Native?',
      questionId: 'Bagaimana cara Anda mendefinisikan gaya (styles) secara efisien di React Native?',
      options: ['CSS files (.css)', 'StyleSheet.create()', 'className', '<style> tags'],
      optionsId: ['File CSS (.css)', 'StyleSheet.create()', 'className', 'Tag <style>'],
      correctIndex: 1,
      explanation: 'StyleSheet.create() validates styles at runtime and improves performance.',
      explanationId: 'StyleSheet.create() memvalidasi gaya saat runtime dan meningkatkan performa.',
    }
  ],
};

export default quiz;
