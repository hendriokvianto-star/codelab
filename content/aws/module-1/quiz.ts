import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'aws-m1-quiz',
  moduleId: 'aws-m1',
  courseId: 'aws',
  title: 'Quiz: Intro to Cloud & IAM',
  titleId: 'Kuis: Pengenalan Cloud & IAM',
  questions: [
    {
      id: 'q1',
      question: 'Which of the following describes the principle of Cloud Computing?',
      questionId: 'Manakah dari berikut ini yang mendeskripsikan prinsip dari Cloud Computing?',
      options: [
        'Buying physical servers and maintaining them in your office',
        'Paying only for the IT resources you consume over the internet',
        'Creating websites using HTML and CSS only',
        'Writing code without using any frameworks'
      ],
      optionsId: [
        'Membeli server fisik dan merawatnya di kantor Anda',
        'Hanya membayar sumber daya TI yang Anda gunakan melalui internet',
        'Membuat website hanya menggunakan HTML dan CSS',
        'Menulis kode tanpa menggunakan framework apa pun'
      ],
      correctIndex: 1,
      explanation: 'Cloud computing allows you to rent IT resources via the internet with pay-as-you-go pricing.',
      explanationId: 'Cloud computing memungkinkan Anda menyewa sumber daya TI melalui internet dengan sistem bayar-sesuai-pemakaian.',
    },
    {
      id: 'q2',
      question: 'What is an AWS Region?',
      questionId: 'Apa itu AWS Region?',
      options: [
        'A single data center building',
        'A specific department within Amazon',
        'A physical geographic location containing multiple Availability Zones',
        'A virtual machine instance'
      ],
      optionsId: [
        'Satu bangunan pusat data (data center)',
        'Sebuah departemen khusus di dalam Amazon',
        'Lokasi geografis fisik yang berisi beberapa Availability Zone',
        'Sebuah instance mesin virtual (virtual machine)'
      ],
      correctIndex: 2,
      explanation: 'A Region is a geographical area around the world where AWS houses multiple isolated data centers (Availability Zones).',
      explanationId: 'Region adalah area geografis di seluruh dunia tempat AWS menampung beberapa pusat data terisolasi (Availability Zones).',
    },
    {
      id: 'q3',
      question: 'Which AWS service is used to manage users, groups, and permissions?',
      questionId: 'Layanan AWS manakah yang digunakan untuk mengelola pengguna (users), grup, dan perizinan (permissions)?',
      options: [
        'Amazon S3',
        'Amazon EC2',
        'AWS IAM',
        'AWS Root'
      ],
      optionsId: [
        'Amazon S3',
        'Amazon EC2',
        'AWS IAM',
        'AWS Root'
      ],
      correctIndex: 2,
      explanation: 'IAM (Identity and Access Management) allows you to securely manage access to AWS services and resources.',
      explanationId: 'IAM (Identity and Access Management) memungkinkan Anda mengelola akses ke layanan dan sumber daya AWS dengan aman.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
