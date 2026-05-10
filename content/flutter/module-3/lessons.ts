import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'flutter-m3-l1',
    courseId: 'flutter',
    moduleId: 'flutter-m3',
    title: 'Screen Navigation (Routing)',
    titleId: 'Navigasi Layar (Routing)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Mobile apps usually consist of multiple screens. In Flutter, screens are just Widgets. You transition between them using a "Stack" concept managed by the `Navigator`.',
        contentId: 'Aplikasi seluler biasanya terdiri dari beberapa layar. Di Flutter, layar hanyalah sekumpulan Widget. Anda beralih di antara layar-layar tersebut menggunakan konsep "Tumpukan" (Stack) yang dikelola oleh `Navigator`.',
      },
      {
        type: 'text',
        content: 'To go to a new screen, you "push" it onto the stack. To go back, you "pop" it off the stack.',
        contentId: 'Untuk pergi ke layar baru, Anda "mendorong" (push) layar tersebut ke tumpukan. Untuk kembali, Anda "melepas" (pop) layar tersebut dari tumpukan.',
      },
      {
        type: 'code',
        language: 'dart',
        content: '// Go to a new screen\nNavigator.push(context, MaterialPageRoute(builder: (context) => DetailScreen()));\n\n// Go back to the previous screen\nNavigator.pop(context);',
      },
    ],
  },
  {
    id: 'flutter-m3-l2',
    courseId: 'flutter',
    moduleId: 'flutter-m3',
    title: 'Fetching Data from Internet',
    titleId: 'Mengambil Data dari Internet',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'To connect your app to a REST API, you use the `http` package to make network requests (GET, POST, etc.). Because network requests take time, they are asynchronous (`Future`).',
        contentId: 'Untuk menghubungkan aplikasi Anda ke REST API, Anda menggunakan paket `http` untuk membuat permintaan jaringan (GET, POST, dll.). Karena permintaan jaringan membutuhkan waktu, mereka bersifat asinkron (`Future`).',
      },
      {
        type: 'text',
        content: 'Flutter provides a brilliant widget called `FutureBuilder`. It automatically listens to a network request and updates the UI based on its state (Loading, Error, or Success).',
        contentId: 'Flutter menyediakan widget brilian bernama `FutureBuilder`. Ia secara otomatis mendengarkan permintaan jaringan dan memperbarui UI berdasarkan statusnya (Loading, Error, atau Sukses).',
      },
      {
        type: 'code',
        language: 'dart',
        content: 'FutureBuilder<String>(\n  future: fetchApiData(),\n  builder: (context, snapshot) {\n    if (snapshot.connectionState == ConnectionState.waiting) {\n      return CircularProgressIndicator(); // Show loading spinner\n    } else if (snapshot.hasError) {\n      return Text("Error!");\n    }\n    return Text("Data: ${snapshot.data}");\n  }\n)',
      },
    ],
  },
  {
    id: 'flutter-m3-l3',
    courseId: 'flutter',
    moduleId: 'flutter-m3',
    title: 'Compiling for Production',
    titleId: 'Kompilasi Menuju Production',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'During development, Flutter uses Just-In-Time (JIT) compilation. This enables "Hot Reload", allowing you to see UI changes instantly without restarting the app.',
        contentId: 'Selama pengembangan, Flutter menggunakan kompilasi Just-In-Time (JIT). Hal ini memungkinkan "Hot Reload", yang memungkinkan Anda melihat perubahan UI secara instan tanpa me-restart aplikasi.',
      },
      {
        type: 'text',
        content: 'However, when you are ready to publish your app to the App Store or Google Play, Flutter switches to Ahead-Of-Time (AOT) compilation.',
        contentId: 'Namun, ketika Anda siap mempublikasikan aplikasi Anda ke App Store atau Google Play, Flutter beralih ke kompilasi Ahead-Of-Time (AOT).',
      },
      {
        type: 'text',
        content: 'AOT compiles your Dart code directly into native ARM machine code. This removes the Dart runtime overhead, ensuring your app runs at a blazing fast 60 or 120 Frames Per Second (FPS).',
        contentId: 'AOT mengkompilasi kode Dart Anda secara langsung menjadi kode mesin ARM native. Ini menghilangkan overhead runtime Dart, memastikan aplikasi Anda berjalan sangat cepat pada 60 atau 120 Frame Per Detik (FPS).',
      },
    ],
  },
];

export default lessons;
