import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'docker-m2-quiz',
  moduleId: 'docker-m2',
  courseId: 'docker',
  title: 'Quiz: Building Custom Images',
  titleId: 'Kuis: Membangun Custom Image',
  questions: [
    {
      id: 'q1',
      question: 'Which Dockerfile instruction is ALWAYS required and must be the first instruction?',
      questionId: 'Instruksi Dockerfile manakah yang SELALU wajib ada dan harus menjadi instruksi pertama?',
      options: [
        'RUN',
        'FROM',
        'CMD',
        'WORKDIR'
      ],
      optionsId: [
        'RUN',
        'FROM',
        'CMD',
        'WORKDIR'
      ],
      correctIndex: 1,
      explanation: 'The FROM instruction initializes a new build stage and sets the Base Image for subsequent instructions.',
      explanationId: 'Instruksi FROM menginisialisasi tahap build baru dan menetapkan Base Image untuk instruksi selanjutnya.',
    },
    {
      id: 'q2',
      question: 'What is the difference between RUN and CMD?',
      questionId: 'Apa perbedaan antara RUN dan CMD?',
      options: [
        'RUN is used for networking, CMD is for storage',
        'RUN executes during the build process, CMD executes when the container starts',
        'CMD executes during the build process, RUN executes when the container starts',
        'There is no difference'
      ],
      optionsId: [
        'RUN digunakan untuk jaringan, CMD untuk penyimpanan',
        'RUN dieksekusi selama proses build, CMD dieksekusi saat container dimulai',
        'CMD dieksekusi selama proses build, RUN dieksekusi saat container dimulai',
        'Tidak ada perbedaan'
      ],
      correctIndex: 1,
      explanation: 'RUN is used to install packages and configure the image. CMD is the default command that runs when the container starts.',
      explanationId: 'RUN digunakan untuk menginstal paket dan mengonfigurasi image. CMD adalah perintah default yang berjalan saat container dimulai.',
    },
    {
      id: 'q3',
      question: 'Which command is used to build an image from a Dockerfile?',
      questionId: 'Perintah manakah yang digunakan untuk membuat image dari Dockerfile?',
      options: [
        'docker compile',
        'docker create',
        'docker build',
        'docker run'
      ],
      optionsId: [
        'docker compile',
        'docker create',
        'docker build',
        'docker run'
      ],
      correctIndex: 2,
      explanation: '`docker build -t image_name .` builds an image from a Dockerfile in the current directory.',
      explanationId: '`docker build -t nama_image .` membangun image dari Dockerfile di direktori saat ini.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
