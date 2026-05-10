import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'golang-m3-quiz',
  moduleId: 'golang-m3',
  courseId: 'golang',
  title: 'Quiz: Microservice Architecture',
  titleId: 'Kuis: Arsitektur Microservices',
  questions: [
    {
      id: 'q1',
      question: 'Why is Go considered an excellent language for building microservices?',
      questionId: 'Mengapa Go dianggap sebagai bahasa yang sangat baik untuk membangun microservices?',
      options: [
        'It has a very small memory footprint and fast startup times',
        'It enforces Monolithic architecture by default',
        'It requires less code than HTML',
        'It runs exclusively on Windows'
      ],
      optionsId: [
        'Ia memiliki jejak memori yang sangat kecil dan waktu startup yang cepat',
        'Ia memaksakan arsitektur Monolitik secara bawaan',
        'Ia membutuhkan lebih sedikit kode daripada HTML',
        'Ia berjalan secara eksklusif di Windows'
      ],
      correctIndex: 0,
      explanation: 'Go compiles to a small binary, starts almost instantly, and consumes very little RAM, making it perfect for running hundreds of microservices.',
      explanationId: 'Go mengkompilasi menjadi biner kecil, menyala (start) hampir secara instan, dan menghabiskan sangat sedikit RAM, membuatnya sempurna untuk menjalankan ratusan microservice.',
    },
    {
      id: 'q2',
      question: 'In a microservice architecture, what technology is often used as a faster alternative to REST (JSON) for internal communication?',
      questionId: 'Dalam arsitektur microservice, teknologi apa yang sering digunakan sebagai alternatif yang lebih cepat dari REST (JSON) untuk komunikasi internal?',
      options: [
        'SOAP',
        'GraphQL',
        'gRPC (with Protocol Buffers)',
        'FTP'
      ],
      optionsId: [
        'SOAP',
        'GraphQL',
        'gRPC (dengan Protocol Buffers)',
        'FTP'
      ],
      correctIndex: 2,
      explanation: 'gRPC utilizes Protocol Buffers to serialize data into binary format, resulting in much faster, lower-bandwidth communication between services.',
      explanationId: 'gRPC menggunakan Protocol Buffers untuk menyerialisasi data ke dalam format biner, menghasilkan komunikasi dengan bandwidth yang lebih rendah dan jauh lebih cepat antar layanan.',
    },
    {
      id: 'q3',
      question: 'What is the benefit of using "Multi-stage builds" in a Dockerfile for a Go application?',
      questionId: 'Apa manfaat menggunakan "Multi-stage builds" di dalam Dockerfile untuk aplikasi Go?',
      options: [
        'It allows you to run Python and Go in the same container',
        'It compiles the code in one stage, and creates a tiny final image containing ONLY the compiled binary',
        'It downloads the internet to your local machine',
        'It automatically writes unit tests'
      ],
      optionsId: [
        'Hal ini memungkinkan Anda menjalankan Python dan Go dalam kontainer yang sama',
        'Hal ini mengkompilasi kode pada satu tahap, dan membuat image akhir yang sangat kecil yang HANYA berisi biner yang sudah dikompilasi',
        'Hal ini mengunduh internet ke mesin lokal Anda',
        'Hal ini secara otomatis menulis unit test'
      ],
      correctIndex: 1,
      explanation: 'Multi-stage builds separate the build environment (which needs the Go compiler and tools) from the production environment (which only needs the compiled binary), drastically reducing image size.',
      explanationId: 'Multi-stage builds memisahkan environment build (yang membutuhkan kompiler dan tools Go) dari environment produksi (yang hanya membutuhkan biner terkompilasi), secara drastis mengurangi ukuran image.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
