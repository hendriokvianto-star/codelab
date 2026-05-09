import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'react-m2-quiz',
  courseId: 'react',
  moduleId: 'react-m2',
  title: 'State & Events Quiz',
  titleId: 'Kuis State & Event',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which Hook is used to manage state in functional components?',
      questionId: 'Hook apa yang digunakan untuk mengelola state di komponen fungsional?',
      options: ['useEffect', 'useReducer', 'useState', 'useContext'],
      optionsId: ['useEffect', 'useReducer', 'useState', 'useContext'],
      correctIndex: 2,
      explanation: 'useState is the hook used to declare state variables.',
      explanationId: 'useState adalah hook yang digunakan untuk mendeklarasikan variabel state.',
    },
    {
      id: 'q2',
      question: 'How do you handle a click event in React?',
      questionId: 'Bagaimana cara menangani event klik di React?',
      options: ['onclick={...}', 'onClick={...}', 'on-click={...}', 'click={...}'],
      optionsId: ['onclick={...}', 'onClick={...}', 'on-click={...}', 'click={...}'],
      correctIndex: 1,
      explanation: 'React events use camelCase, so it is onClick.',
      explanationId: 'Event React menggunakan camelCase, jadi menggunakan onClick.',
    },
    {
      id: 'q3',
      question: 'What JavaScript array method is best used for rendering lists in React?',
      questionId: 'Metode array JavaScript apa yang terbaik digunakan untuk merender list di React?',
      options: ['.forEach()', '.filter()', '.map()', '.reduce()'],
      optionsId: ['.forEach()', '.filter()', '.map()', '.reduce()'],
      correctIndex: 2,
      explanation: 'The .map() method returns a new array of JSX elements.',
      explanationId: 'Metode .map() mengembalikan array baru yang berisi elemen-elemen JSX.',
    }
  ],
};

export default quiz;
