import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'git-m1-quiz',
  courseId: 'git',
  moduleId: 'git-m1',
  title: 'Git Basics Quiz',
  titleId: 'Kuis Dasar Git',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Which command is used to create a new, empty Git repository?',
      questionId: 'Perintah mana yang digunakan untuk membuat repositori Git baru yang kosong?',
      options: ['git start', 'git create', 'git init', 'git new'],
      optionsId: ['git start', 'git create', 'git init', 'git new'],
      correctIndex: 2,
      explanation: 'git init creates a new Git repository or reinitializes an existing one.',
      explanationId: 'git init membuat repositori Git baru atau menginisialisasi ulang yang sudah ada.',
    },
    {
      id: 'q2',
      question: 'What does "git add ." do?',
      questionId: 'Apa fungsi dari "git add ."?',
      options: ['Adds a new dot file', 'Stages all modified and new files in the current directory', 'Commits all files', 'Deletes all files'],
      optionsId: ['Menambahkan file dot baru', 'Memasukkan semua file yang dimodifikasi/baru ke staging area', 'Melakukan commit pada semua file', 'Menghapus semua file'],
      correctIndex: 1,
      explanation: 'The dot (.) represents the current directory, so it stages everything inside it.',
      explanationId: 'Tanda titik (.) mewakili direktori saat ini, jadi perintah ini men-stage semua yang ada di dalamnya.',
    },
    {
      id: 'q3',
      question: 'Why do we need to add a message when committing?',
      questionId: 'Mengapa kita perlu menambahkan pesan saat melakukan commit?',
      options: ['To describe what changes were made in that snapshot', 'Because Git requires an email address', 'To encrypt the code', 'To push to GitHub automatically'],
      optionsId: ['Untuk mendeskripsikan perubahan apa yang dibuat pada snapshot tersebut', 'Karena Git membutuhkan alamat email', 'Untuk mengenkripsi kode', 'Untuk push ke GitHub secara otomatis'],
      correctIndex: 0,
      explanation: 'A commit message tells you and your team what changes are included in that specific commit.',
      explanationId: 'Pesan commit memberitahu Anda dan tim Anda perubahan apa saja yang ada pada commit tersebut.',
    }
  ],
};

export default quiz;
