import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'aws-m2-quiz',
  moduleId: 'aws-m2',
  courseId: 'aws',
  title: 'Quiz: Compute & Networking (EC2)',
  titleId: 'Kuis: Komputasi & Jaringan (EC2)',
  questions: [
    {
      id: 'q1',
      question: 'What is an Amazon Machine Image (AMI)?',
      questionId: 'Apa itu Amazon Machine Image (AMI)?',
      options: [
        'A logo generator for your website',
        'A template that contains the software configuration (OS, application server) required to launch an instance',
        'A physical hard drive shipped by Amazon',
        'A billing statement from AWS'
      ],
      optionsId: [
        'Sebuah pembuat logo untuk situs web Anda',
        'Sebuah templat yang berisi konfigurasi perangkat lunak (OS, aplikasi server) yang diperlukan untuk meluncurkan instance',
        'Sebuah hard drive fisik yang dikirim oleh Amazon',
        'Sebuah laporan tagihan dari AWS'
      ],
      correctIndex: 1,
      explanation: 'An AMI provides the information required to launch an instance, primarily the Operating System.',
      explanationId: 'AMI menyediakan informasi yang diperlukan untuk meluncurkan instance, terutama Sistem Operasi (OS).',
    },
    {
      id: 'q2',
      question: 'Which port needs to be opened in a Security Group to allow secure shell (SSH) remote access to a Linux instance?',
      questionId: 'Port manakah yang perlu dibuka di Security Group untuk mengizinkan akses remote secure shell (SSH) ke instance Linux?',
      options: [
        'Port 80',
        'Port 443',
        'Port 22',
        'Port 3306'
      ],
      optionsId: [
        'Port 80',
        'Port 443',
        'Port 22',
        'Port 3306'
      ],
      correctIndex: 2,
      explanation: 'Port 22 is the standard port for SSH traffic. Port 80 is for HTTP, and 443 is for HTTPS.',
      explanationId: 'Port 22 adalah port standar untuk lalu lintas SSH. Port 80 untuk HTTP, dan 443 untuk HTTPS.',
    },
    {
      id: 'q3',
      question: 'What file format is commonly downloaded as the private key for authenticating your SSH connection to an EC2 instance?',
      questionId: 'Format file apa yang umumnya diunduh sebagai kunci privat untuk mengautentikasi koneksi SSH Anda ke instance EC2?',
      options: [
        '.pem',
        '.exe',
        '.pdf',
        '.jpg'
      ],
      optionsId: [
        '.pem',
        '.exe',
        '.pdf',
        '.jpg'
      ],
      correctIndex: 0,
      explanation: 'AWS provides the private key in a `.pem` (Privacy Enhanced Mail) file format.',
      explanationId: 'AWS menyediakan kunci privat dalam format file `.pem` (Privacy Enhanced Mail).',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
