import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'js-m1-quiz',
  courseId: 'javascript',
  moduleId: 'js-m1',
  title: 'Introduction to JavaScript Quiz',
  titleId: 'Kuis Pengenalan JavaScript',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'js-m1-q1',
      question: 'What is JavaScript primarily used for?',
      questionId: 'JavaScript utamanya digunakan untuk apa?',
      options: ['Styling web pages', 'Making web pages interactive', 'Database management', 'Operating system development'],
      optionsId: ['Menata tampilan web', 'Membuat halaman web interaktif', 'Manajemen database', 'Pengembangan sistem operasi'],
      correctIndex: 1,
      explanation: 'JavaScript was created to make web pages interactive and dynamic.',
      explanationId: 'JavaScript dibuat untuk membuat halaman web menjadi interaktif dan dinamis.',
    },
    {
      id: 'js-m1-q2',
      question: 'Which function displays output in the browser console?',
      questionId: 'Fungsi mana yang menampilkan output di console browser?',
      options: ['print()', 'echo()', 'console.log()', 'System.out()'],
      optionsId: ['print()', 'echo()', 'console.log()', 'System.out()'],
      correctIndex: 2,
      explanation: 'console.log() is the standard way to output messages to the browser console.',
      explanationId: 'console.log() adalah cara standar untuk menampilkan pesan ke console browser.',
    },
    {
      id: 'js-m1-q3',
      question: 'How do you write a single-line comment in JavaScript?',
      questionId: 'Bagaimana cara menulis komentar satu baris di JavaScript?',
      options: ['<!-- comment -->', '# comment', '// comment', '** comment **'],
      optionsId: ['<!-- comment -->', '# comment', '// comment', '** comment **'],
      correctIndex: 2,
      explanation: 'Single-line comments in JavaScript start with //.',
      explanationId: 'Komentar satu baris di JavaScript dimulai dengan //.',
    },
    {
      id: 'js-m1-q4',
      question: 'Where should the <script> tag ideally be placed?',
      questionId: 'Di mana sebaiknya tag <script> diletakkan?',
      options: ['Inside <head>', 'Before </body>', 'Before <html>', 'After </html>'],
      optionsId: ['Di dalam <head>', 'Sebelum </body>', 'Sebelum <html>', 'Setelah </html>'],
      correctIndex: 1,
      explanation: 'Placing scripts before </body> ensures the HTML loads first for better performance.',
      explanationId: 'Meletakkan script sebelum </body> memastikan HTML dimuat terlebih dahulu untuk performa yang lebih baik.',
    },
  ],
};

export default quiz;
