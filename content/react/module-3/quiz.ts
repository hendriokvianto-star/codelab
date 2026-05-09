import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'react-m3-quiz',
  courseId: 'react',
  moduleId: 'react-m3',
  title: 'Effects & APIs Quiz',
  titleId: 'Kuis Efek & API',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which hook is used for performing side effects like data fetching?',
      questionId: 'Hook apa yang digunakan untuk melakukan efek samping seperti pengambilan data?',
      options: ['useState', 'useContext', 'useEffect', 'useReducer'],
      optionsId: ['useState', 'useContext', 'useEffect', 'useReducer'],
      correctIndex: 2,
      explanation: 'useEffect is designed to handle side effects in React components.',
      explanationId: 'useEffect dirancang khusus untuk menangani efek samping di komponen React.',
    },
    {
      id: 'q2',
      question: 'What happens if you pass an empty array [] as the second argument to useEffect?',
      questionId: 'Apa yang terjadi jika Anda memberikan array kosong [] sebagai argumen kedua pada useEffect?',
      options: ['It runs on every render', 'It runs only once when the component mounts', 'It never runs', 'It throws an error'],
      optionsId: ['Berjalan pada setiap render', 'Hanya berjalan sekali saat komponen dimuat', 'Tidak pernah berjalan', 'Akan menghasilkan error'],
      correctIndex: 1,
      explanation: 'An empty dependency array tells React to run the effect only once after the initial render.',
      explanationId: 'Array dependensi yang kosong memberi tahu React untuk menjalankan efek hanya sekali setelah render awal.',
    },
    {
      id: 'q3',
      question: 'Which operator is frequently used for inline conditional rendering in React?',
      questionId: 'Operator apa yang sering digunakan untuk rendering bersyarat (inline) di React?',
      options: ['The logical AND (&&)', 'The addition (+) operator', 'The assignment (=) operator', 'The spread (...) operator'],
      optionsId: ['Logical AND (&&)', 'Operator penambahan (+)', 'Operator penugasan (=)', 'Operator spread (...)'],
      correctIndex: 0,
      explanation: 'The logical AND (&&) operator is used to render an element only if a condition is true.',
      explanationId: 'Operator Logical AND (&&) digunakan untuk merender elemen hanya jika kondisinya benar.',
    }
  ],
};

export default quiz;
