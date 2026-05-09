import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'rn-m3-quiz',
  courseId: 'reactnative',
  moduleId: 'rn-m3',
  title: 'Interactions Quiz',
  titleId: 'Kuis Interaksi',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which prop is used to handle click events on a <Button> in React Native?',
      questionId: 'Properti apa yang digunakan untuk menangani event klik pada <Button> di React Native?',
      options: ['onClick', 'onPress', 'onTap', 'onChange'],
      optionsId: ['onClick', 'onPress', 'onTap', 'onChange'],
      correctIndex: 1,
      explanation: 'In mobile development, "clicks" are called "presses", so React Native uses onPress instead of onClick.',
      explanationId: 'Dalam pengembangan seluler, "klik" disebut "tekanan" (press), jadi React Native menggunakan onPress alih-alih onClick.',
    },
    {
      id: 'q2',
      question: 'How do you set the label text of a <Button> component?',
      questionId: 'Bagaimana cara mengatur teks label dari sebuah komponen <Button>?',
      options: ['<Button>Click Me</Button>', '<Button text="Click Me" />', '<Button title="Click Me" />', '<Button label="Click Me" />'],
      optionsId: ['<Button>Click Me</Button>', '<Button text="Click Me" />', '<Button title="Click Me" />', '<Button label="Click Me" />'],
      correctIndex: 2,
      explanation: 'The built-in <Button> component doesn\'t support child elements, it requires a "title" string prop.',
      explanationId: 'Komponen <Button> bawaan tidak mendukung elemen anak, ia membutuhkan properti string "title".',
    },
    {
      id: 'q3',
      question: 'Which component is used to capture keyboard input?',
      questionId: 'Komponen mana yang digunakan untuk menangkap input keyboard?',
      options: ['<Input>', '<Keyboard>', '<TextField>', '<TextInput>'],
      optionsId: ['<Input>', '<Keyboard>', '<TextField>', '<TextInput>'],
      correctIndex: 3,
      explanation: '<TextInput> is the foundational component for inputting text into the app via the keyboard.',
      explanationId: '<TextInput> adalah komponen dasar untuk memasukkan teks ke dalam aplikasi melalui keyboard.',
    }
  ],
};

export default quiz;
