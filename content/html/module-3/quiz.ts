import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'html-m3-quiz',
  courseId: 'html',
  moduleId: 'html-m3',
  title: 'Forms Quiz',
  titleId: 'Kuis Form',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which tag is used to create a user input field?',
      questionId: 'Tag apa yang digunakan untuk membuat kolom input pengguna?',
      options: ['<enter>', '<input>', '<textfield>', '<form>'],
      optionsId: ['<enter>', '<input>', '<textfield>', '<form>'],
      correctIndex: 1,
      explanation: '<input> is the standard tag for creating text, password, and other input fields.',
      explanationId: '<input> adalah tag standar untuk membuat teks, kata sandi, dan input lainnya.',
    },
    {
      id: 'q2',
      question: 'How do you define a password field?',
      questionId: 'Bagaimana cara mendefinisikan kolom kata sandi (password)?',
      options: ['<input type="password">', '<password>', '<input type="secret">', '<input secret="true">'],
      optionsId: ['<input type="password">', '<password>', '<input type="secret">', '<input secret="true">'],
      correctIndex: 0,
      explanation: 'Setting type="password" hides the characters the user types.',
      explanationId: 'Mengatur type="password" menyembunyikan karakter yang diketik pengguna.',
    },
    {
      id: 'q3',
      question: 'Which element is used to submit a form?',
      questionId: 'Elemen mana yang digunakan untuk mengirimkan sebuah form?',
      options: ['<submit>', '<button type="submit">', '<input type="form">', '<send>'],
      optionsId: ['<submit>', '<button type="submit">', '<input type="form">', '<send>'],
      correctIndex: 1,
      explanation: '<button type="submit"> is used to submit the form data.',
      explanationId: '<button type="submit"> digunakan untuk mengirimkan data form.',
    }
  ],
};

export default quiz;
