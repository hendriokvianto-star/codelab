import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'docker-m3-l1',
    courseId: 'docker',
    moduleId: 'docker-m3',
    title: 'Intro to Docker Compose',
    titleId: 'Pengenalan Docker Compose',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Docker Compose is a tool that allows you to define and run multi-container applications. Instead of running multiple `docker run` commands manually, you use a single YAML file to configure all your application\'s services.',
        contentId: 'Docker Compose adalah alat yang memungkinkan Anda menentukan dan menjalankan aplikasi multi-container. Alih-alih menjalankan banyak perintah `docker run` secara manual, Anda menggunakan satu file YAML untuk mengonfigurasi semua layanan aplikasi Anda.',
      },
      {
        type: 'text',
        content: 'This is particularly useful when your application requires a database, a backend server, and a frontend client running together.',
        contentId: 'Ini sangat berguna ketika aplikasi Anda memerlukan database, server backend, dan klien frontend yang berjalan bersamaan.',
      },
    ],
  },
  {
    id: 'docker-m3-l2',
    courseId: 'docker',
    moduleId: 'docker-m3',
    title: 'Writing docker-compose.yml',
    titleId: 'Menulis docker-compose.yml',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'A `docker-compose.yml` file is structured into services. Each service defines a container that will be run.',
        contentId: 'File `docker-compose.yml` disusun ke dalam layanan (services). Setiap layanan mendefinisikan container yang akan dijalankan.',
      },
      {
        type: 'code',
        language: 'yaml',
        content: 'version: "3.8"\nservices:\n  web:\n    build: .\n    ports:\n      - "3000:3000"\n  db:\n    image: postgres:15\n    environment:\n      POSTGRES_PASSWORD: secret',
      },
      {
        type: 'text',
        content: 'In this example, we define two services: `web` (built from our local Dockerfile) and `db` (pulled from the official postgres image). They can automatically communicate with each other using their service names.',
        contentId: 'Dalam contoh ini, kita mendefinisikan dua layanan: `web` (dibangun dari Dockerfile lokal kita) dan `db` (diambil dari image postgres resmi). Mereka dapat secara otomatis berkomunikasi satu sama lain menggunakan nama layanan mereka.',
      },
    ],
  },
  {
    id: 'docker-m3-l3',
    courseId: 'docker',
    moduleId: 'docker-m3',
    title: 'Compose Commands',
    titleId: 'Perintah Compose',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'To start all services defined in your `docker-compose.yml`, you use the `docker-compose up` command. Add the `-d` flag to run them in the background (detached mode).',
        contentId: 'Untuk memulai semua layanan yang ditentukan dalam `docker-compose.yml`, Anda menggunakan perintah `docker-compose up`. Tambahkan flag `-d` untuk menjalankannya di latar belakang (mode terpisah).',
      },
      {
        type: 'code',
        language: 'bash',
        content: 'docker-compose up -d\ndocker-compose logs -f\ndocker-compose down',
      },
      {
        type: 'text',
        content: '`docker-compose logs -f` lets you view the logs of all running services. `docker-compose down` stops and removes all containers, networks, and volumes created by Compose.',
        contentId: '`docker-compose logs -f` memungkinkan Anda melihat log dari semua layanan yang berjalan. `docker-compose down` menghentikan dan menghapus semua container, jaringan, dan volume yang dibuat oleh Compose.',
      },
    ],
  },
];

export default lessons;
