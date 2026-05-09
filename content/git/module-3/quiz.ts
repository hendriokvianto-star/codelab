import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'git-m3-quiz',
  courseId: 'git',
  moduleId: 'git-m3',
  title: 'GitHub & Collaboration Quiz',
  titleId: 'Kuis GitHub & Kolaborasi',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'What is the main difference between Git and GitHub?',
      questionId: 'Apa perbedaan utama antara Git dan GitHub?',
      options: ['They are exactly the same thing', 'Git is a cloud platform, GitHub is local software', 'Git is a version control tool, GitHub is a cloud hosting service for Git repositories', 'GitHub is for Mac, Git is for Windows'],
      optionsId: ['Mereka adalah hal yang sama persis', 'Git adalah platform cloud, GitHub adalah perangkat lunak lokal', 'Git adalah alat kontrol versi, GitHub adalah layanan hosting cloud untuk repositori Git', 'GitHub untuk Mac, Git untuk Windows'],
      correctIndex: 2,
      explanation: 'Git is the underlying tool that tracks changes, while GitHub is a website that hosts those Git repositories online.',
      explanationId: 'Git adalah alat dasar yang melacak perubahan, sedangkan GitHub adalah situs web yang menghosting repositori Git secara online.',
    },
    {
      id: 'q2',
      question: 'Which command downloads an existing repository from the internet to your local computer?',
      questionId: 'Perintah mana yang mengunduh repositori yang ada dari internet ke komputer lokal Anda?',
      options: ['git clone', 'git download', 'git pull', 'git fetch'],
      optionsId: ['git clone', 'git download', 'git pull', 'git fetch'],
      correctIndex: 0,
      explanation: '"git clone" makes a complete copy of a remote repository on your local machine.',
      explanationId: '"git clone" membuat salinan lengkap dari repositori jarak jauh di mesin lokal Anda.',
    },
    {
      id: 'q3',
      question: 'Which command is used to upload your local commits to a remote repository like GitHub?',
      questionId: 'Perintah apa yang digunakan untuk mengunggah komit lokal Anda ke repositori jarak jauh seperti GitHub?',
      options: ['git upload', 'git send', 'git push', 'git update'],
      optionsId: ['git upload', 'git send', 'git push', 'git update'],
      correctIndex: 2,
      explanation: 'git push transfers commits from your local repository to a remote repo.',
      explanationId: 'git push mentransfer commit dari repositori lokal Anda ke repo remote (jarak jauh).',
    }
  ],
};

export default quiz;
