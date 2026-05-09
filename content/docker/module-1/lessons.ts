import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'docker-m1-l1',
    courseId: 'docker',
    moduleId: 'docker-m1',
    title: 'What is Docker?',
    titleId: 'Apa itu Docker?',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Docker is a platform designed to help developers build, share, and run modern applications. We handle the tedious setup, so you can focus on the code.',
        contentId: 'Docker adalah platform untuk mengembangkan, mengirim, dan menjalankan aplikasi di dalam environment terisolasi yang disebut Container.',
      },
      {
        type: 'text',
        content: 'Unlike Virtual Machines (VMs) which emulate an entire operating system, containers share the host OS kernel, making them much more lightweight and faster to start.',
        contentId: 'Berbeda dengan Virtual Machine (VM) yang mengemulasi seluruh sistem operasi, container berbagi kernel OS dari host, membuatnya jauh lebih ringan dan cepat.',
      },
    ],
  },
  {
    id: 'docker-m1-l2',
    courseId: 'docker',
    moduleId: 'docker-m1',
    title: 'Running Your First Container',
    titleId: 'Menjalankan Container Pertama',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'The `docker run` command is used to run a container from an image. An image is a read-only template with instructions for creating a Docker container.',
        contentId: 'Perintah `docker run` digunakan untuk menjalankan container dari sebuah image. Image adalah template read-only dengan instruksi untuk membuat Docker container.',
      },
      {
        type: 'code',
        language: 'bash',
        content: 'docker run hello-world',
      },
      {
        type: 'text',
        content: 'If the image does not exist locally, Docker will automatically pull it from Docker Hub (the public registry).',
        contentId: 'Jika image belum ada di komputer lokal, Docker akan otomatis mengunduhnya dari Docker Hub (registry publik).',
      },
    ],
  },
  {
    id: 'docker-m1-l3',
    courseId: 'docker',
    moduleId: 'docker-m1',
    title: 'Container Lifecycle',
    titleId: 'Siklus Hidup Container',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'You can view running containers using `docker ps`. To see all containers (including stopped ones), use `docker ps -a`.',
        contentId: 'Anda bisa melihat container yang sedang berjalan menggunakan `docker ps`. Untuk melihat semua container (termasuk yang berhenti), gunakan `docker ps -a`.',
      },
      {
        type: 'text',
        content: 'To stop a running container, use `docker stop <container_id>`. To permanently delete it, use `docker rm <container_id>`.',
        contentId: 'Untuk menghentikan container yang berjalan, gunakan `docker stop <container_id>`. Untuk menghapusnya secara permanen, gunakan `docker rm <container_id>`.',
      },
      {
        type: 'code',
        language: 'bash',
        content: 'docker ps\ndocker stop my_container\ndocker rm my_container',
      },
    ],
  },
];

export default lessons;
