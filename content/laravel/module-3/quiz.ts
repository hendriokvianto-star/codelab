import type { QuizData } from '../../index';
const quiz: QuizData = {
  id: 'lv-m3-quiz', courseId: 'laravel', moduleId: 'lv-m3',
  title: 'Blade Templates Quiz', titleId: 'Kuis Template Blade', xpPerQuestion: 10,
  questions: [
    { id: 'lv-m3-q1', question: 'Which syntax safely outputs data in Blade?', questionId: 'Sintaks mana yang menampilkan data dengan aman di Blade?',
      options: ['{!! $data !!}', '{{ $data }}', '<%= data %>', '<?= $data ?>'],
      optionsId: ['{!! $data !!}', '{{ $data }}', '<%= data %>', '<?= $data ?>'],
      correctIndex: 1, explanation: '{{ }} auto-escapes output to prevent XSS.', explanationId: '{{ }} otomatis escape output untuk mencegah XSS.' },
    { id: 'lv-m3-q2', question: 'Which directive is used to inherit a layout?', questionId: 'Directive mana yang digunakan untuk mewarisi layout?',
      options: ['@include', '@extends', '@yield', '@section'],
      optionsId: ['@include', '@extends', '@yield', '@section'],
      correctIndex: 1, explanation: '@extends inherits from a parent layout.', explanationId: '@extends mewarisi dari layout parent.' },
    { id: 'lv-m3-q3', question: 'What does @forelse do?', questionId: 'Apa yang dilakukan @forelse?',
      options: ['Loop with break', 'Loop with fallback for empty', 'Infinite loop', 'Conditional loop'],
      optionsId: ['Loop dengan break', 'Loop dengan fallback jika kosong', 'Loop tak terbatas', 'Loop kondisional'],
      correctIndex: 1, explanation: '@forelse loops if data exists, shows @empty block otherwise.', explanationId: '@forelse melakukan loop jika ada data, menampilkan blok @empty jika tidak.' },
    { id: 'lv-m3-q4', question: 'How do you use a Blade component named Alert?', questionId: 'Bagaimana cara menggunakan komponen Blade bernama Alert?',
      options: ['@component("Alert")', '<x-alert />', '@include("alert")', '<Alert />'],
      optionsId: ['@component("Alert")', '<x-alert />', '@include("alert")', '<Alert />'],
      correctIndex: 1, explanation: 'Blade components use the <x-name /> syntax.', explanationId: 'Komponen Blade menggunakan sintaks <x-nama />.' },
  ],
};
export default quiz;
