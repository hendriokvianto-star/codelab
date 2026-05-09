import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'python-m1-quiz',
  courseId: 'python',
  moduleId: 'python-m1',
  title: 'Python Basics Quiz',
  titleId: 'Kuis Dasar Python',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which function is used to output text to the screen in Python?',
      questionId: 'Fungsi mana yang digunakan untuk mencetak teks ke layar di Python?',
      options: ['echo()', 'console.log()', 'print()', 'output()'],
      optionsId: ['echo()', 'console.log()', 'print()', 'output()'],
      correctIndex: 2,
      explanation: 'print() is the built-in function to display text in Python.',
      explanationId: 'print() adalah fungsi bawaan untuk menampilkan teks di Python.',
    },
    {
      id: 'q2',
      question: 'How do you create a variable named "age" with a value of 20?',
      questionId: 'Bagaimana cara Anda membuat variabel bernama "age" dengan nilai 20?',
      options: ['let age = 20', 'int age = 20', 'age = 20', 'var age = 20'],
      optionsId: ['let age = 20', 'int age = 20', 'age = 20', 'var age = 20'],
      correctIndex: 2,
      explanation: 'Python uses dynamic typing. You just state the variable name and its value directly.',
      explanationId: 'Python menggunakan pengetikan dinamis (dynamic typing). Anda cukup menuliskan nama variabel dan nilainya secara langsung.',
    },
    {
      id: 'q3',
      question: 'Instead of curly braces {}, what does Python use to define code blocks?',
      questionId: 'Sebagai pengganti kurung kurawal {}, apa yang digunakan Python untuk menentukan blok kode?',
      options: ['Semicolons (;)', 'Indentation (spaces/tabs)', 'Parentheses ()', 'Square brackets []'],
      optionsId: ['Titik koma (;)', 'Indentasi (spasi/tab)', 'Tanda kurung biasa ()', 'Tanda kurung siku []'],
      correctIndex: 1,
      explanation: 'Indentation is strictly enforced in Python to determine which block code belongs to.',
      explanationId: 'Indentasi ditegakkan secara ketat di Python untuk menentukan kode tersebut milik blok yang mana.',
    }
  ],
};

export default quiz;
