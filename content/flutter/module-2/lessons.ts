import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'flutter-m2-l1',
    courseId: 'flutter',
    moduleId: 'flutter-m2',
    title: 'Lifting State Up',
    titleId: 'Mengangkat State (Lifting State Up)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'As your app grows, using `setState()` everywhere becomes unmanageable. If multiple widgets need to share the same data, you should "Lift the State Up".',
        contentId: 'Seiring berkembangnya aplikasi Anda, menggunakan `setState()` di mana-mana menjadi tidak terkendali. Jika beberapa widget perlu berbagi data yang sama, Anda harus "Mengangkat State" (Lifting State Up).',
      },
      {
        type: 'text',
        content: 'This means moving the state (the variable) to their closest common parent widget in the Widget Tree, and then passing it down as parameters.',
        contentId: 'Ini berarti memindahkan state (variabel) ke parent widget (widget induk) terdekat yang sama di Widget Tree, lalu meneruskannya ke bawah sebagai parameter.',
      },
      {
        type: 'text',
        content: 'However, passing data deeply through many layers of widgets is tedious. This problem is called "Prop Drilling".',
        contentId: 'Namun, meneruskan data dalam-dalam melewati banyak lapisan widget sangatlah merepotkan. Masalah ini disebut "Prop Drilling".',
      },
    ],
  },
  {
    id: 'flutter-m2-l2',
    courseId: 'flutter',
    moduleId: 'flutter-m2',
    title: 'Provider & Riverpod',
    titleId: 'Provider & Riverpod',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'To solve the Prop Drilling problem, the Flutter community relies on State Management packages. "Provider" is the most famous, while "Riverpod" is its modern, safer successor.',
        contentId: 'Untuk memecahkan masalah Prop Drilling, komunitas Flutter mengandalkan paket State Management. "Provider" adalah yang paling terkenal, sementara "Riverpod" adalah penerusnya yang lebih modern dan aman.',
      },
      {
        type: 'code',
        language: 'dart',
        content: '// Example conceptually using a Provider\nfinal counterProvider = StateProvider<int>((ref) => 0);\n\n// Any widget can read it directly:\nint count = ref.watch(counterProvider);',
      },
      {
        type: 'text',
        content: 'Using these tools, you can place data in a central "store". Any widget, no matter how deep in the tree, can "listen" to this data and rebuild automatically when it changes.',
        contentId: 'Dengan menggunakan alat ini, Anda dapat menempatkan data di sebuah "toko" terpusat. Widget apa pun, sedalam apa pun posisinya di dalam tree, dapat "mendengarkan" data ini dan membangun ulang secara otomatis ketika data tersebut berubah.',
      },
    ],
  },
  {
    id: 'flutter-m2-l3',
    courseId: 'flutter',
    moduleId: 'flutter-m2',
    title: 'ListView.builder',
    titleId: 'ListView.builder',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'If you want to display a list of 10,000 items, using a standard `Column` will crash your app because it tries to render all 10,000 widgets at once.',
        contentId: 'Jika Anda ingin menampilkan daftar berisi 10.000 item, menggunakan `Column` standar akan membuat aplikasi Anda crash karena ia mencoba merender semua 10.000 widget sekaligus.',
      },
      {
        type: 'text',
        content: 'To render long or infinite lists efficiently, use `ListView.builder`.',
        contentId: 'Untuk merender daftar (list) yang panjang atau tak terbatas secara efisien, gunakan `ListView.builder`.',
      },
      {
        type: 'code',
        language: 'dart',
        content: 'ListView.builder(\n  itemCount: items.length,\n  itemBuilder: (context, index) {\n    return ListTile(\n      title: Text(items[index]),\n    );\n  },\n)',
      },
      {
        type: 'text',
        content: 'It only renders the items that are currently visible on the screen, saving massive amounts of memory.',
        contentId: 'Fungsi ini hanya merender item yang saat ini terlihat di layar, sehingga menghemat memori dalam jumlah yang sangat besar.',
      },
    ],
  },
];

export default lessons;
