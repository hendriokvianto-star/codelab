import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'git-m3-l1',
    courseId: 'git',
    moduleId: 'git-m3',
    title: 'Cloning a Repository',
    titleId: 'Kloning Repositori',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'GitHub is a cloud platform for hosting Git repositories. To download a project from GitHub to your computer, use "git clone".',
        contentId: 'GitHub adalah platform cloud untuk menyimpan repositori Git. Untuk mengunduh proyek dari GitHub ke komputer Anda, gunakan "git clone".',
      },
      {
        type: 'code',
        language: 'bash',
        content: '$ git clone https://github.com/user/repo.git',
      },
    ],
    practiceCode: '# Download repository dari https://github.com/codelab/app.git\n',
    practiceHint: 'git clone https://github.com/codelab/app.git',
    practiceHintId: 'Ketik git clone https://github.com/codelab/app.git',
  },
  {
    id: 'git-m3-l2',
    courseId: 'git',
    moduleId: 'git-m3',
    title: 'Pushing Code',
    titleId: 'Mengunggah Kode (Push)',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'After making commits locally, you need to upload them to GitHub so others can see your work. This is done using "git push".',
        contentId: 'Setelah melakukan commit secara lokal, Anda perlu mengunggahnya ke GitHub agar orang lain dapat melihat hasil kerja Anda. Ini dilakukan menggunakan "git push".',
      },
      {
        type: 'code',
        language: 'bash',
        content: '$ git push origin main',
      },
    ],
    practiceCode: '# Unggah (push) commit Anda ke server remote bernama "origin" pada branch "main"\n',
    practiceHint: 'git push origin main',
    practiceHintId: 'Ketik git push origin main',
  },
  {
    id: 'git-m3-l3',
    courseId: 'git',
    moduleId: 'git-m3',
    title: 'Pulling Updates',
    titleId: 'Mengambil Pembaruan (Pull)',
    xp: 35,
    theory: [
      {
        type: 'text',
        content: 'If someone else made changes to the code on GitHub, you need to download and merge those changes into your local computer using "git pull".',
        contentId: 'Jika ada orang lain yang mengubah kode di GitHub, Anda harus mengunduh dan menggabungkan perubahan tersebut ke komputer lokal Anda menggunakan "git pull".',
      },
      {
        type: 'code',
        language: 'bash',
        content: '$ git pull origin main',
      },
    ],
    practiceCode: '# Tarik pembaruan (pull) dari server remote bernama "origin" pada branch "main"\n',
    practiceHint: 'git pull origin main',
    practiceHintId: 'Ketik git pull origin main',
  }
];

export default lessons;
