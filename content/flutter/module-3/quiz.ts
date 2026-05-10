import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'flutter-m3-quiz',
  moduleId: 'flutter-m3',
  courseId: 'flutter',
  title: 'Quiz: Navigation & API Integration',
  titleId: 'Kuis: Navigasi & Integrasi API',
  questions: [
    {
      id: 'q1',
      question: 'Which method should you use to go back to the previous screen in Flutter?',
      questionId: 'Metode mana yang harus Anda gunakan untuk kembali ke layar sebelumnya di Flutter?',
      options: [
        'Navigator.push()',
        'Navigator.back()',
        'Navigator.pop()',
        'Screen.close()'
      ],
      optionsId: [
        'Navigator.push()',
        'Navigator.back()',
        'Navigator.pop()',
        'Screen.close()'
      ],
      correctIndex: 2,
      explanation: 'Navigation in Flutter works like a stack of cards. You `push` a new card on top, and `pop` it to reveal the card underneath.',
      explanationId: 'Navigasi di Flutter bekerja seperti tumpukan kartu. Anda menempatkan (`push`) kartu baru di atas, dan mengambil/membuangnya (`pop`) untuk menampilkan kartu di bawahnya.',
    },
    {
      id: 'q2',
      question: 'What is the main benefit of using a `FutureBuilder` widget?',
      questionId: 'Apa manfaat utama dari penggunaan widget `FutureBuilder`?',
      options: [
        'It speeds up your internet connection',
        'It automatically updates the UI based on the state of an asynchronous task (like showing a loading spinner while waiting for an API)',
        'It predicts what the user will type next',
        'It manages routing automatically'
      ],
      optionsId: [
        'Hal ini mempercepat koneksi internet Anda',
        'Secara otomatis memperbarui UI berdasarkan status tugas asinkron (seperti menampilkan spinner pemuatan/loading saat menunggu API)',
        'Fungsi ini memprediksi apa yang akan diketik pengguna selanjutnya',
        'Fungsi ini mengelola rute (routing) secara otomatis'
      ],
      correctIndex: 1,
      explanation: 'FutureBuilder handles all the complex logic of checking if data is loading, has failed, or has successfully arrived, and renders the correct UI for each phase.',
      explanationId: 'FutureBuilder menangani semua logika kompleks untuk memeriksa apakah data sedang dimuat (loading), gagal, atau telah berhasil tiba, dan merender UI yang tepat untuk setiap fasenya.',
    },
    {
      id: 'q3',
      question: 'Why are production Flutter apps so fast compared to some other cross-platform frameworks?',
      questionId: 'Mengapa aplikasi produksi Flutter begitu cepat dibandingkan dengan beberapa kerangka kerja lintas platform lainnya?',
      options: [
        'Because they only run on iPhones',
        'Because the Dart code is compiled Ahead-Of-Time (AOT) directly into native machine code (ARM)',
        'Because they don\'t use graphics',
        'Because they use HTML and CSS'
      ],
      optionsId: [
        'Karena hanya berjalan di iPhone',
        'Karena kode Dart dikompilasi Ahead-Of-Time (AOT) secara langsung ke dalam kode mesin bawaan (ARM)',
        'Karena mereka tidak menggunakan grafik',
        'Karena mereka menggunakan HTML dan CSS'
      ],
      correctIndex: 1,
      explanation: 'By compiling to native machine code, Flutter apps don\'t need a slow "bridge" to talk to the device hardware, allowing them to run at a smooth 60-120 FPS.',
      explanationId: 'Dengan kompilasi ke kode mesin bawaan (native machine code), aplikasi Flutter tidak memerlukan "jembatan" yang lambat untuk berbicara dengan perangkat keras, memungkinkannya berjalan pada 60-120 FPS yang mulus.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
