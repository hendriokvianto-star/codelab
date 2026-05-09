import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'git-m2-quiz',
  courseId: 'git',
  moduleId: 'git-m2',
  title: 'Branching Quiz',
  titleId: 'Kuis Branching',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'Why do developers use branches in Git?',
      questionId: 'Mengapa para developer menggunakan branch di Git?',
      options: ['To isolate new features or experiments from the main code', 'To delete files permanently', 'To make the code run faster', 'To connect to the internet'],
      optionsId: ['Untuk mengisolasi fitur atau eksperimen baru dari kode utama', 'Untuk menghapus file secara permanen', 'Untuk membuat kode berjalan lebih cepat', 'Untuk terhubung ke internet'],
      correctIndex: 0,
      explanation: 'Branches allow you to work on multiple features concurrently without messing up the stable code.',
      explanationId: 'Branch memungkinkan Anda mengerjakan beberapa fitur secara bersamaan tanpa mengacaukan kode yang stabil.',
    },
    {
      id: 'q2',
      question: 'Which command allows you to change your active branch?',
      questionId: 'Perintah mana yang memungkinkan Anda mengubah branch aktif Anda?',
      options: ['git branch', 'git change', 'git checkout', 'git move'],
      optionsId: ['git branch', 'git change', 'git checkout', 'git move'],
      correctIndex: 2,
      explanation: 'You use "git checkout" (or "git switch") to change between branches.',
      explanationId: 'Anda menggunakan "git checkout" (atau "git switch") untuk berpindah antar branch.',
    },
    {
      id: 'q3',
      question: 'What is the purpose of "git merge"?',
      questionId: 'Apa tujuan dari perintah "git merge"?',
      options: ['To delete a branch', 'To integrate changes from one branch into another', 'To rename a branch', 'To undo a commit'],
      optionsId: ['Untuk menghapus branch', 'Untuk mengintegrasikan perubahan dari satu branch ke branch lainnya', 'Untuk mengubah nama branch', 'Untuk membatalkan commit'],
      correctIndex: 1,
      explanation: 'git merge combines the work from an independent line of development into a single branch.',
      explanationId: 'git merge menggabungkan pekerjaan dari jalur pengembangan independen menjadi satu branch utama.',
    }
  ],
};

export default quiz;
