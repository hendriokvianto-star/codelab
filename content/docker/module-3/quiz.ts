import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'docker-m3-quiz',
  moduleId: 'docker-m3',
  courseId: 'docker',
  title: 'Quiz: Docker Compose',
  titleId: 'Kuis: Docker Compose',
  questions: [
    {
      id: 'q1',
      question: 'What is the primary purpose of Docker Compose?',
      questionId: 'Apa tujuan utama dari Docker Compose?',
      options: [
        'To write code faster',
        'To define and run multi-container Docker applications',
        'To replace Docker Hub',
        'To install the host operating system'
      ],
      optionsId: [
        'Untuk menulis kode lebih cepat',
        'Untuk menentukan dan menjalankan aplikasi Docker multi-container',
        'Untuk menggantikan Docker Hub',
        'Untuk menginstal sistem operasi host'
      ],
      correctIndex: 1,
      explanation: 'Compose lets you configure multiple services, networks, and volumes in a single YAML file, orchestrating them as a single application.',
      explanationId: 'Compose memungkinkan Anda mengonfigurasi beberapa layanan, jaringan, dan volume dalam satu file YAML, mengorkestrasikannya sebagai satu aplikasi tunggal.',
    },
    {
      id: 'q2',
      question: 'Which file format is used to configure Docker Compose services?',
      questionId: 'Format file apa yang digunakan untuk mengonfigurasi layanan Docker Compose?',
      options: [
        'JSON',
        'XML',
        'YAML',
        'INI'
      ],
      optionsId: [
        'JSON',
        'XML',
        'YAML',
        'INI'
      ],
      correctIndex: 2,
      explanation: 'Docker Compose uses YAML (docker-compose.yml) files to define its configuration.',
      explanationId: 'Docker Compose menggunakan file YAML (docker-compose.yml) untuk mendefinisikan konfigurasinya.',
    },
    {
      id: 'q3',
      question: 'Which command stops all containers and removes the networks created by Docker Compose?',
      questionId: 'Perintah manakah yang menghentikan semua container dan menghapus jaringan yang dibuat oleh Docker Compose?',
      options: [
        'docker-compose stop',
        'docker-compose delete',
        'docker-compose kill',
        'docker-compose down'
      ],
      optionsId: [
        'docker-compose stop',
        'docker-compose delete',
        'docker-compose kill',
        'docker-compose down'
      ],
      correctIndex: 3,
      explanation: '`docker-compose down` stops containers and removes containers, networks, volumes, and images created by `up`.',
      explanationId: '`docker-compose down` menghentikan container dan menghapus container, jaringan, volume, dan image yang dibuat oleh `up`.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
