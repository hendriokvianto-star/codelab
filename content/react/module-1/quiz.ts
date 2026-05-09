import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'react-m1-quiz',
  courseId: 'react',
  moduleId: 'react-m1',
  title: 'React Basics Quiz',
  titleId: 'Kuis Dasar React',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'What does JSX stand for?',
      questionId: 'Apa itu JSX dalam konteks React?',
      options: ['JavaScript XML', 'Java Syntax Extension', 'JavaScript Exchange', 'JSON XML'],
      optionsId: ['JavaScript XML', 'Java Syntax Extension', 'JavaScript Exchange', 'JSON XML'],
      correctIndex: 0,
      explanation: 'JSX stands for JavaScript XML, which allows writing HTML in React.',
      explanationId: 'JSX adalah ekstensi sintaks untuk JavaScript yang memungkinkan penulisan HTML dalam React.',
    },
    {
      id: 'q2',
      question: 'How do you pass data to a child component?',
      questionId: 'Bagaimana cara mengirim data ke komponen anak (child component)?',
      options: ['Using State', 'Using Props', 'Using HTML', 'Using Arrays'],
      optionsId: ['Menggunakan State', 'Menggunakan Props', 'Menggunakan HTML', 'Menggunakan Arrays'],
      correctIndex: 1,
      explanation: 'Props are used to pass data from parent to child components.',
      explanationId: 'Props digunakan untuk meneruskan data dari komponen induk ke komponen anak.',
    },
    {
      id: 'q3',
      question: 'What is a React component fundamentally?',
      questionId: 'Secara mendasar, apa itu komponen React?',
      options: ['A database table', 'A CSS file', 'A JavaScript function or class', 'A network request'],
      optionsId: ['Tabel database', 'File CSS', 'Fungsi atau Class JavaScript', 'Permintaan jaringan'],
      correctIndex: 2,
      explanation: 'A component is essentially a JS function or class that returns UI (JSX).',
      explanationId: 'Komponen pada dasarnya adalah fungsi atau kelas JavaScript yang mengembalikan antarmuka pengguna (JSX).',
    }
  ],
};

export default quiz;
