import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'aws-m3-quiz',
  moduleId: 'aws-m3',
  courseId: 'aws',
  title: 'Quiz: Storage & Database (S3 & RDS)',
  titleId: 'Kuis: Penyimpanan & Database (S3 & RDS)',
  questions: [
    {
      id: 'q1',
      question: 'In Amazon S3, what is the container used to store objects (files) called?',
      questionId: 'Di Amazon S3, apa sebutan untuk wadah yang digunakan untuk menyimpan objek (file)?',
      options: [
        'Folder',
        'Box',
        'Bucket',
        'Container'
      ],
      optionsId: [
        'Folder',
        'Box (Kotak)',
        'Bucket (Ember)',
        'Container (Kontainer)'
      ],
      correctIndex: 2,
      explanation: 'In Amazon S3, data is stored as objects within resources called "Buckets".',
      explanationId: 'Di Amazon S3, data disimpan sebagai objek di dalam sumber daya yang disebut "Buckets".',
    },
    {
      id: 'q2',
      question: 'Which AWS service is best suited for hosting a static HTML/CSS website without managing a server?',
      questionId: 'Layanan AWS manakah yang paling cocok untuk menghosting situs web statis HTML/CSS tanpa perlu mengelola server?',
      options: [
        'Amazon RDS',
        'Amazon EC2',
        'AWS IAM',
        'Amazon S3'
      ],
      optionsId: [
        'Amazon RDS',
        'Amazon EC2',
        'AWS IAM',
        'Amazon S3'
      ],
      correctIndex: 3,
      explanation: 'Amazon S3 provides a built-in feature to host static websites highly reliably and cheaply without managing any servers.',
      explanationId: 'Amazon S3 menyediakan fitur bawaan untuk menghosting situs web statis dengan sangat andal dan murah tanpa mengelola server apa pun.',
    },
    {
      id: 'q3',
      question: 'What is the main advantage of using Amazon RDS over installing a database on an EC2 instance?',
      questionId: 'Apa keuntungan utama menggunakan Amazon RDS dibandingkan menginstal database pada instance EC2?',
      options: [
        'RDS is completely free forever',
        'RDS automatically handles backups, patching, and administration',
        'RDS allows you to write HTML code inside the database',
        'RDS uses a NoSQL document structure'
      ],
      optionsId: [
        'RDS sepenuhnya gratis selamanya',
        'RDS secara otomatis menangani pencadangan (backup), pembaruan, dan administrasi',
        'RDS memungkinkan Anda menulis kode HTML di dalam database',
        'RDS menggunakan struktur dokumen NoSQL'
      ],
      correctIndex: 1,
      explanation: 'RDS is a managed service, meaning AWS automates time-consuming administration tasks like backups, software patching, and scaling.',
      explanationId: 'RDS adalah layanan terkelola (managed service), artinya AWS mengotomatiskan tugas administrasi yang memakan waktu seperti pencadangan, pembaruan perangkat lunak, dan penskalaan.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
