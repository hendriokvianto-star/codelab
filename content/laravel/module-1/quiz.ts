import type { QuizData } from '../../index';
const quiz: QuizData = {
  id: 'lv-m1-quiz', courseId: 'laravel', moduleId: 'lv-m1',
  title: 'Intro to PHP & Laravel Quiz', titleId: 'Kuis Pengenalan PHP & Laravel', xpPerQuestion: 10,
  questions: [
    { id: 'lv-m1-q1', question: 'How do you declare a variable in PHP?', questionId: 'Bagaimana cara mendeklarasikan variabel di PHP?',
      options: ['let name', 'var name', '$name', 'name:'], optionsId: ['let name', 'var name', '$name', 'name:'],
      correctIndex: 2, explanation: 'PHP variables start with a $ sign.', explanationId: 'Variabel PHP dimulai dengan tanda $.' },
    { id: 'lv-m1-q2', question: 'What does MVC stand for?', questionId: 'Apa kepanjangan MVC?',
      options: ['Model-View-Controller', 'Main-Visual-Code', 'Module-View-Component', 'Model-Variable-Class'],
      optionsId: ['Model-View-Controller', 'Main-Visual-Code', 'Module-View-Component', 'Model-Variable-Class'],
      correctIndex: 0, explanation: 'MVC = Model-View-Controller.', explanationId: 'MVC = Model-View-Controller.' },
    { id: 'lv-m1-q3', question: 'Where are Blade templates stored?', questionId: 'Di mana template Blade disimpan?',
      options: ['app/Views/', 'public/views/', 'resources/views/', 'storage/views/'],
      optionsId: ['app/Views/', 'public/views/', 'resources/views/', 'storage/views/'],
      correctIndex: 2, explanation: 'Blade templates live in resources/views/.', explanationId: 'Template Blade ada di resources/views/.' },
    { id: 'lv-m1-q4', question: 'Which file should NEVER be committed to Git?', questionId: 'File mana yang TIDAK BOLEH di-commit ke Git?',
      options: ['composer.json', '.env', 'routes/web.php', 'app.php'],
      optionsId: ['composer.json', '.env', 'routes/web.php', 'app.php'],
      correctIndex: 1, explanation: '.env contains sensitive credentials.', explanationId: '.env berisi data sensitif.' },
  ],
};
export default quiz;
