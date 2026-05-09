import type { QuizData } from '../../index';
const quiz: QuizData = {
  id: 'lv-m2-quiz', courseId: 'laravel', moduleId: 'lv-m2',
  title: 'Routing & Controllers Quiz', titleId: 'Kuis Routing & Controller', xpPerQuestion: 10,
  questions: [
    { id: 'lv-m2-q1', question: 'Which file defines web routes in Laravel?', questionId: 'File mana yang mendefinisikan route web di Laravel?',
      options: ['routes/api.php', 'routes/web.php', 'app/routes.php', 'config/routes.php'],
      optionsId: ['routes/api.php', 'routes/web.php', 'app/routes.php', 'config/routes.php'],
      correctIndex: 1, explanation: 'Web routes are defined in routes/web.php.', explanationId: 'Route web didefinisikan di routes/web.php.' },
    { id: 'lv-m2-q2', question: 'How do you make a route parameter optional?', questionId: 'Bagaimana cara membuat parameter route opsional?',
      options: ['{param}', '{param?}', '[param]', '{param=default}'],
      optionsId: ['{param}', '{param?}', '[param]', '{param=default}'],
      correctIndex: 1, explanation: 'Adding ? after the parameter name makes it optional.', explanationId: 'Menambahkan ? setelah nama parameter membuatnya opsional.' },
    { id: 'lv-m2-q3', question: 'How many methods does a resource controller create?', questionId: 'Berapa method yang dibuat resource controller?',
      options: ['4', '5', '7', '10'], optionsId: ['4', '5', '7', '10'],
      correctIndex: 2, explanation: 'Resource controllers create 7 methods: index, create, store, show, edit, update, destroy.', explanationId: 'Resource controller membuat 7 method: index, create, store, show, edit, update, destroy.' },
    { id: 'lv-m2-q4', question: 'Which artisan command creates a controller?', questionId: 'Perintah artisan mana yang membuat controller?',
      options: ['php artisan create:controller', 'php artisan make:controller', 'php artisan new:controller', 'php artisan generate:controller'],
      optionsId: ['php artisan create:controller', 'php artisan make:controller', 'php artisan new:controller', 'php artisan generate:controller'],
      correctIndex: 1, explanation: 'php artisan make:controller is the correct command.', explanationId: 'php artisan make:controller adalah perintah yang benar.' },
  ],
};
export default quiz;
