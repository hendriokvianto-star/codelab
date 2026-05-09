import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'docker-m2-l1',
    courseId: 'docker',
    moduleId: 'docker-m2',
    title: 'Introduction to Dockerfile',
    titleId: 'Pengenalan Dockerfile',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'A Dockerfile is a simple text file that contains a list of instructions that the Docker daemon uses to build an image. It automates the process of environment setup.',
        contentId: 'Dockerfile adalah file teks sederhana yang berisi daftar instruksi yang digunakan Docker untuk membuat sebuah image. File ini mengotomatiskan proses penyiapan environment.',
      },
      {
        type: 'text',
        content: 'To build an image from a Dockerfile, you use the `docker build` command.',
        contentId: 'Untuk membuat image dari sebuah Dockerfile, Anda menggunakan perintah `docker build`.',
      },
      {
        type: 'code',
        language: 'bash',
        content: 'docker build -t my-app-image:1.0 .\n# -t flags adds a tag (name:version)\n# . tells Docker to look for the Dockerfile in the current directory',
      },
    ],
  },
  {
    id: 'docker-m2-l2',
    courseId: 'docker',
    moduleId: 'docker-m2',
    title: 'Essential Commands',
    titleId: 'Perintah Esensial',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Every Dockerfile must start with a `FROM` instruction, which specifies the base image (e.g., node, python, ubuntu).',
        contentId: 'Setiap Dockerfile harus dimulai dengan instruksi `FROM`, yang menentukan base image (misalnya node, python, ubuntu).',
      },
      {
        type: 'code',
        language: 'dockerfile',
        content: 'FROM node:18-alpine\nWORKDIR /app\nCOPY package.json .\nRUN npm install\nCOPY . .',
      },
      {
        type: 'text',
        content: '`WORKDIR` sets the working directory inside the container. `COPY` moves files from your computer to the container. `RUN` executes commands (like installing dependencies) during the build process.',
        contentId: '`WORKDIR` menetapkan direktori kerja di dalam container. `COPY` memindahkan file dari komputer Anda ke container. `RUN` menjalankan perintah (seperti menginstal dependensi) selama proses build.',
      },
    ],
  },
  {
    id: 'docker-m2-l3',
    courseId: 'docker',
    moduleId: 'docker-m2',
    title: 'Executing the App',
    titleId: 'Mengeksekusi Aplikasi',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'To tell the container what command to run when it starts, we use `CMD` or `ENTRYPOINT`. Only one `CMD` instruction can take effect.',
        contentId: 'Untuk memberi tahu container perintah apa yang harus dijalankan saat dimulai, kita menggunakan `CMD` atau `ENTRYPOINT`. Hanya satu instruksi `CMD` yang akan dieksekusi.',
      },
      {
        type: 'code',
        language: 'dockerfile',
        content: 'EXPOSE 3000\nCMD ["npm", "start"]',
      },
      {
        type: 'text',
        content: '`EXPOSE` functions as documentation to let users know which port the application listens on. `CMD` provides the default command that runs when the container is started.',
        contentId: '`EXPOSE` berfungsi sebagai dokumentasi untuk memberi tahu pengguna port mana yang digunakan aplikasi. `CMD` menyediakan perintah default yang dijalankan saat container dimulai.',
      },
    ],
  },
];

export default lessons;
