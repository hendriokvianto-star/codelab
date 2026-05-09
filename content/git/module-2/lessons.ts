import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'git-m2-l1',
    courseId: 'git',
    moduleId: 'git-m2',
    title: 'Creating Branches',
    titleId: 'Membuat Cabang (Branch)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Branches allow you to safely experiment with new features without breaking the main code. The default branch is usually called "main" or "master".',
        contentId: 'Cabang (branch) memungkinkan Anda bereksperimen dengan fitur baru secara aman tanpa merusak kode utama. Cabang bawaannya biasanya bernama "main" atau "master".',
      },
      {
        type: 'code',
        language: 'bash',
        content: '$ git branch feature-login\n$ git branch',
      },
    ],
    practiceCode: '# Buatlah sebuah branch baru bernama "new-ui"\n',
    practiceHint: 'git branch new-ui',
    practiceHintId: 'Ketik git branch new-ui',
  },
  {
    id: 'git-m2-l2',
    courseId: 'git',
    moduleId: 'git-m2',
    title: 'Switching Branches',
    titleId: 'Berpindah Cabang (Checkout)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'After creating a branch, you need to switch to it using "git checkout" or the newer "git switch" command.',
        contentId: 'Setelah membuat cabang, Anda harus berpindah ke sana menggunakan perintah "git checkout" atau perintah yang lebih baru "git switch".',
      },
      {
        type: 'code',
        language: 'bash',
        content: '$ git checkout feature-login\n# or\n$ git switch feature-login',
      },
    ],
    practiceCode: '# Berpindahlah ke branch bernama "new-ui" (gunakan checkout)\n',
    practiceHint: 'git checkout new-ui',
    practiceHintId: 'Ketik git checkout new-ui',
  },
  {
    id: 'git-m2-l3',
    courseId: 'git',
    moduleId: 'git-m2',
    title: 'Merging Code',
    titleId: 'Menggabungkan Kode (Merge)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Once your feature is complete, you switch back to the main branch and merge your feature branch into it.',
        contentId: 'Setelah fitur Anda selesai, Anda kembali ke cabang utama (main) dan menggabungkan cabang fitur Anda ke dalamnya.',
      },
      {
        type: 'code',
        language: 'bash',
        content: '$ git checkout main\n$ git merge feature-login',
      },
    ],
    practiceCode: '# Asumsikan Anda sedang berada di branch "main".\n# Gabungkan branch "new-ui" ke dalam branch Anda saat ini.\n',
    practiceHint: 'git merge new-ui',
    practiceHintId: 'Ketik git merge new-ui',
  }
];

export default lessons;
