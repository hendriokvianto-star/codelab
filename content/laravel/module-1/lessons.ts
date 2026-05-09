import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'lv-m1-l1',
    courseId: 'laravel',
    moduleId: 'lv-m1',
    title: 'PHP Basics You Need to Know',
    titleId: 'Dasar PHP yang Perlu Diketahui',
    xp: 25,
    theory: [
      { type: 'text', content: 'Sebelum belajar Laravel, kamu perlu mengerti dasar PHP. PHP adalah bahasa server-side yang digunakan oleh 77% website di dunia!\n\nBefore learning Laravel, you need to understand PHP basics. PHP is a server-side language used by 77% of websites worldwide!' },
      { type: 'code', language: 'php', content: '<?php\n// Variabel dimulai dengan $\n$nama = "CodeLab";\n$umur = 5;\n$aktif = true;\n\n// Output\necho "Halo, $nama!";\necho "Umur: " . $umur; // concat dengan .\n\n// Array\n$buah = ["Apel", "Jeruk", "Mangga"];\necho $buah[0]; // "Apel"\n\n// Associative array (mirip object JS)\n$user = [\n    "nama" => "Budi",\n    "umur" => 25,\n];\necho $user["nama"];\n?>' },
      { type: 'tip', content: 'PHP menggunakan $ untuk variabel dan . untuk concat string (bukan + seperti JS).\n\nPHP uses $ for variables and . for string concatenation (not + like JS).' },
    ],
    practiceCode: '<?php\n// Buat variabel dan tampilkan\n$nama = "Coder";\n$level = 1;\necho "Halo, $nama! Level kamu: $level";\n?>',
    practiceHintId: 'Ganti nilai variabel',
    practiceHint: 'Change the variable values',
  },
  {
    id: 'lv-m1-l2',
    courseId: 'laravel',
    moduleId: 'lv-m1',
    title: 'What is Laravel?',
    titleId: 'Apa itu Laravel?',
    xp: 25,
    theory: [
      { type: 'text', content: 'Laravel adalah framework PHP paling populer. Dibuat oleh Taylor Otwell pada 2011, Laravel membuat pengembangan web menjadi ekspresif dan menyenangkan.\n\nLaravel is the most popular PHP framework. Created by Taylor Otwell in 2011, Laravel makes web development expressive and enjoyable.' },
      { type: 'code', language: 'php', content: '// Mengapa Laravel?\n// 1. Eloquent ORM — interaksi database yang elegan\n// 2. Blade Templates — template engine yang powerful\n// 3. Artisan CLI — command line tool\n// 4. Migration — version control untuk database\n// 5. Authentication — built-in\n// 6. Routing yang ekspresif\n\n// Instalasi Laravel\n// composer create-project laravel/laravel myapp\n\n// Menjalankan server\n// php artisan serve\n// => http://localhost:8000' },
      { type: 'text', content: 'Laravel mengikuti pola arsitektur MVC:\n- **Model** — Data & logika bisnis\n- **View** — Tampilan (HTML)\n- **Controller** — Penghubung Model & View\n\nLaravel follows the MVC architecture pattern:\n- **Model** — Data & business logic\n- **View** — Display (HTML)\n- **Controller** — Connects Model & View' },
    ],
  },
  {
    id: 'lv-m1-l3',
    courseId: 'laravel',
    moduleId: 'lv-m1',
    title: 'MVC Architecture',
    titleId: 'Arsitektur MVC',
    xp: 25,
    theory: [
      { type: 'text', content: 'MVC (Model-View-Controller) adalah pola desain yang memisahkan aplikasi menjadi 3 komponen utama. Ini membuat kode lebih terorganisir dan mudah dimaintain.\n\nMVC (Model-View-Controller) is a design pattern that separates an application into 3 main components. This makes code more organized and maintainable.' },
      { type: 'code', language: 'php', content: '// MODEL — app/Models/User.php\nclass User extends Model {\n    protected $fillable = [\'name\', \'email\'];\n}\n\n// CONTROLLER — app/Http/Controllers/UserController.php\nclass UserController extends Controller {\n    public function index() {\n        $users = User::all();\n        return view(\'users.index\', compact(\'users\'));\n    }\n}\n\n// VIEW — resources/views/users/index.blade.php\n// <h1>Daftar User</h1>\n// @foreach($users as $user)\n//   <p>{{ $user->name }}</p>\n// @endforeach' },
      { type: 'tip', content: 'Ingat alur MVC: Request → Route → Controller → Model → View → Response\n\nRemember the MVC flow: Request → Route → Controller → Model → View → Response' },
    ],
  },
  {
    id: 'lv-m1-l4',
    courseId: 'laravel',
    moduleId: 'lv-m1',
    title: 'Laravel Project Structure',
    titleId: 'Struktur Proyek Laravel',
    xp: 25,
    theory: [
      { type: 'text', content: 'Memahami struktur folder Laravel adalah kunci untuk navigasi proyek dengan efisien.\n\nUnderstanding Laravel\'s folder structure is key to navigating projects efficiently.' },
      { type: 'code', language: 'php', content: '// Struktur folder penting:\nmy-app/\n├── app/\n│   ├── Http/Controllers/   ← Controller\n│   ├── Models/              ← Model Eloquent\n│   └── Providers/           ← Service Provider\n├── config/                  ← Konfigurasi\n├── database/\n│   ├── migrations/          ← Skema database\n│   └── seeders/             ← Data dummy\n├── public/                  ← Entry point (index.php)\n├── resources/\n│   └── views/               ← Template Blade\n├── routes/\n│   ├── web.php              ← Route web\n│   └── api.php              ← Route API\n├── storage/                 ← File, cache, log\n├── .env                     ← Environment variables\n└── composer.json            ← Dependencies PHP' },
      { type: 'warning', content: 'File .env berisi data sensitif seperti database password. JANGAN commit ke Git!\n\nThe .env file contains sensitive data like database passwords. NEVER commit to Git!' },
    ],
  },
];

export default lessons;
