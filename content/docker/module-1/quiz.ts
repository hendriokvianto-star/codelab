import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'docker-m1-quiz',
  moduleId: 'docker-m1',
  courseId: 'docker',
  title: 'Quiz: Docker Basics',
  titleId: 'Kuis: Dasar-dasar Docker',
  questions: [
    {
      id: 'q1',
      question: 'What is the main difference between a Container and a Virtual Machine?',
      questionId: 'Apa perbedaan utama antara Container dan Virtual Machine?',
      options: [
        'Containers share the host OS kernel, VMs have their own full OS',
        'Containers are only for Linux, VMs are for Windows',
        'Containers are much larger in file size than VMs',
        'There is no difference'
      ],
      optionsId: [
        'Container berbagi kernel OS host, VM memiliki OS penuh sendiri',
        'Container hanya untuk Linux, VM untuk Windows',
        'Ukuran file container jauh lebih besar daripada VM',
        'Tidak ada perbedaan'
      ],
      correctIndex: 0,
      explanation: 'Containers share the OS kernel, making them lightweight and fast.',
      explanationId: 'Container berbagi kernel OS, membuatnya ringan dan cepat.',
    },
    {
      id: 'q2',
      question: 'Which command will download an image and run a container from it?',
      questionId: 'Perintah manakah yang akan mengunduh image dan menjalankan container darinya?',
      options: [
        'docker pull',
        'docker start',
        'docker run',
        'docker execute'
      ],
      optionsId: [
        'docker pull',
        'docker start',
        'docker run',
        'docker execute'
      ],
      correctIndex: 2,
      explanation: '`docker run` pulls the image (if not found locally) and then starts a container from it.',
      explanationId: '`docker run` menarik image (jika tidak ada di lokal) lalu menjalankan container darinya.',
    },
    {
      id: 'q3',
      question: 'How do you view running containers?',
      questionId: 'Bagaimana cara melihat container yang sedang berjalan?',
      options: [
        'docker show',
        'docker ps',
        'docker run',
        'docker view'
      ],
      optionsId: [
        'docker show',
        'docker ps',
        'docker run',
        'docker view'
      ],
      correctIndex: 1,
      explanation: '`docker ps` lists running containers.',
      explanationId: '`docker ps` menampilkan container yang sedang berjalan.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
