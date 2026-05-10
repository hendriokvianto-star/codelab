import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'flutter-m2-quiz',
  moduleId: 'flutter-m2',
  courseId: 'flutter',
  title: 'Quiz: State Management & Advanced UI',
  titleId: 'Kuis: State Management & UI Lanjutan',
  questions: [
    {
      id: 'q1',
      question: 'What is the "Prop Drilling" problem in Flutter?',
      questionId: 'Apa yang dimaksud dengan masalah "Prop Drilling" di Flutter?',
      options: [
        'When your app drills into the device storage too deeply',
        'When you have to pass data through many layers of widgets that don\'t actually need the data, just to get it to a child widget',
        'When a button click drills through multiple screens',
        'When you use too many stateless widgets'
      ],
      optionsId: [
        'Ketika aplikasi Anda mengebor/masuk ke penyimpanan perangkat terlalu dalam',
        'Ketika Anda harus meneruskan data melewati banyak lapisan widget yang sebenarnya tidak membutuhkan data tersebut, hanya untuk menyampaikannya ke widget anak (child widget)',
        'Ketika klik tombol menembus beberapa layar',
        'Ketika Anda menggunakan terlalu banyak widget stateless'
      ],
      correctIndex: 1,
      explanation: 'Prop drilling makes code messy because intermediate widgets must accept and pass down parameters they don\'t even use.',
      explanationId: 'Prop drilling membuat kode menjadi berantakan karena widget perantara (intermediate) harus menerima dan meneruskan parameter ke bawah padahal mereka tidak menggunakannya sama sekali.',
    },
    {
      id: 'q2',
      question: 'Packages like Provider and Riverpod are used primarily for what purpose?',
      questionId: 'Paket seperti Provider dan Riverpod utamanya digunakan untuk tujuan apa?',
      options: [
        'To add animations to the UI',
        'To connect to a SQL database',
        'To manage Global State and avoid Prop Drilling',
        'To compile the Dart code faster'
      ],
      optionsId: [
        'Untuk menambahkan animasi ke UI',
        'Untuk terhubung ke database SQL',
        'Untuk mengelola State Global dan menghindari Prop Drilling',
        'Untuk mengkompilasi kode Dart lebih cepat'
      ],
      correctIndex: 2,
      explanation: 'These are State Management tools. They allow any widget to listen to a central data source directly, bypassing the need to pass variables down the widget tree.',
      explanationId: 'Ini adalah alat State Management. Mereka memungkinkan widget mana pun untuk mendengarkan sumber data pusat secara langsung, melewati keharusan untuk meneruskan variabel ke bawah melalui widget tree.',
    },
    {
      id: 'q3',
      question: 'Why should you use `ListView.builder` instead of a `Column` with a `SingleChildScrollView` for very long lists?',
      questionId: 'Mengapa Anda harus menggunakan `ListView.builder` daripada `Column` yang dibungkus `SingleChildScrollView` untuk daftar yang sangat panjang?',
      options: [
        'Because Column does not support text styling',
        'Because ListView.builder only renders items currently visible on screen, saving memory',
        'Because ListView.builder automatically adds a search bar',
        'There is no difference, both are identical in performance'
      ],
      optionsId: [
        'Karena Column tidak mendukung penataan gaya teks (text styling)',
        'Karena ListView.builder hanya me-render item yang saat ini terlihat di layar, sehingga menghemat memori',
        'Karena ListView.builder secara otomatis menambahkan bilah pencarian (search bar)',
        'Tidak ada bedanya, keduanya identik dalam performa'
      ],
      correctIndex: 1,
      explanation: '`ListView.builder` builds children lazily on demand. A Column builds all of its children at once, which will cause memory crashes on huge lists.',
      explanationId: '`ListView.builder` membangun anak (children) secara malas (lazily) sesuai permintaan. Sebuah Column membangun semua anaknya sekaligus, yang akan menyebabkan crash memori pada daftar yang besar.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
