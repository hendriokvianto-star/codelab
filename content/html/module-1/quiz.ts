import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'html-m1-quiz',
  courseId: 'html',
  moduleId: 'html-m1',
  title: 'Basic HTML Structure Quiz',
  titleId: 'Kuis Struktur Dasar HTML',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'What does HTML stand for?',
      questionId: 'Apa kepanjangan dari HTML?',
      options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyper Text Makeup Language'],
      optionsId: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyper Text Makeup Language'],
      correctIndex: 0,
      explanation: 'HTML stands for Hyper Text Markup Language.',
      explanationId: 'HTML adalah singkatan dari Hyper Text Markup Language.',
    },
    {
      id: 'q2',
      question: 'Which tag is used for the largest heading?',
      questionId: 'Tag mana yang digunakan untuk heading (judul) terbesar?',
      options: ['<head>', '<heading>', '<h6>', '<h1>'],
      optionsId: ['<head>', '<heading>', '<h6>', '<h1>'],
      correctIndex: 3,
      explanation: '<h1> is the largest heading, and <h6> is the smallest.',
      explanationId: '<h1> adalah judul terbesar, dan <h6> adalah yang terkecil.',
    },
    {
      id: 'q3',
      question: 'Which attribute specifies the destination of a link?',
      questionId: 'Atribut apa yang menentukan tujuan dari sebuah link?',
      options: ['src', 'href', 'link', 'dest'],
      optionsId: ['src', 'href', 'link', 'dest'],
      correctIndex: 1,
      explanation: 'The href attribute specifies the URL of the page the link goes to.',
      explanationId: 'Atribut href menentukan URL halaman tujuan link.',
    }
  ],
};

export default quiz;
