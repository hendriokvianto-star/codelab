import type { LessonData } from '../../index';
const lessons: LessonData[] = [
  { id: 'lv-m2-l1', courseId: 'laravel', moduleId: 'lv-m2', title: 'Basic Routes', titleId: 'Route Dasar', xp: 25,
    theory: [
      { type: 'text', content: 'Route adalah peta URL di aplikasi Laravel. Setiap URL dihubungkan ke aksi tertentu.\n\nRoutes are URL maps in a Laravel application. Each URL is connected to a specific action.' },
      { type: 'code', language: 'php', content: '// routes/web.php\n\n// GET route sederhana\nRoute::get(\'/\', function () {\n    return \'Hello, World!\';\n});\n\n// Route dengan view\nRoute::get(\'/welcome\', function () {\n    return view(\'welcome\');\n});\n\n// HTTP Methods\nRoute::get(\'/users\', ...);    // Ambil data\nRoute::post(\'/users\', ...);   // Kirim data baru\nRoute::put(\'/users/1\', ...);  // Update data\nRoute::delete(\'/users/1\', ...); // Hapus data' },
      { type: 'tip', content: 'Gunakan php artisan route:list untuk melihat semua route yang terdaftar.\n\nUse php artisan route:list to see all registered routes.' },
    ],
    practiceCode: '<?php\n// Contoh route sederhana\n// Route::get(\'/hello\', function () {\n//     return \'Halo dari Laravel!\';\n// });\n\necho "Route: GET /hello => Halo dari Laravel!";\n?>', practiceHintId: 'Pahami pola Route::method', practiceHint: 'Understand the Route::method pattern' },
  { id: 'lv-m2-l2', courseId: 'laravel', moduleId: 'lv-m2', title: 'Route Parameters', titleId: 'Parameter Route', xp: 25,
    theory: [
      { type: 'text', content: 'Route parameter memungkinkan kamu menangkap bagian dari URL sebagai variabel.\n\nRoute parameters allow you to capture parts of the URL as variables.' },
      { type: 'code', language: 'php', content: '// Parameter wajib\nRoute::get(\'/user/{id}\', function ($id) {\n    return "User ID: $id";\n});\n\n// Parameter opsional\nRoute::get(\'/user/{name?}\', function ($name = \'Guest\') {\n    return "Hello, $name!";\n});\n\n// Constraint (validasi)\nRoute::get(\'/user/{id}\', function ($id) {\n    return "User #$id";\n})->where(\'id\', \'[0-9]+\'); // hanya angka\n\n// Multiple parameters\nRoute::get(\'/post/{year}/{month}\', function ($year, $month) {\n    return "Posts: $year-$month";\n});' },
    ],
    practiceCode: '<?php\n// Simulasi route parameter\n$id = 42;\necho "GET /user/$id => User ID: $id";\n?>', practiceHintId: 'Coba ganti nilai parameter', practiceHint: 'Try changing parameter values' },
  { id: 'lv-m2-l3', courseId: 'laravel', moduleId: 'lv-m2', title: 'Controllers', titleId: 'Controller', xp: 25,
    theory: [
      { type: 'text', content: 'Controller mengelompokkan logika request handling. Lebih rapi daripada menulis semua di routes/web.php.\n\nControllers group request handling logic. Cleaner than writing everything in routes/web.php.' },
      { type: 'code', language: 'php', content: '// Membuat controller:\n// php artisan make:controller UserController\n\n// app/Http/Controllers/UserController.php\nclass UserController extends Controller\n{\n    public function index()\n    {\n        $users = User::all();\n        return view(\'users.index\', compact(\'users\'));\n    }\n\n    public function show($id)\n    {\n        $user = User::findOrFail($id);\n        return view(\'users.show\', compact(\'user\'));\n    }\n\n    public function store(Request $request)\n    {\n        User::create($request->validated());\n        return redirect(\'/users\');\n    }\n}\n\n// Menghubungkan route ke controller:\nRoute::get(\'/users\', [UserController::class, \'index\']);\nRoute::get(\'/users/{id}\', [UserController::class, \'show\']);' },
    ] },
  { id: 'lv-m2-l4', courseId: 'laravel', moduleId: 'lv-m2', title: 'Resource Controllers', titleId: 'Resource Controller', xp: 25,
    theory: [
      { type: 'text', content: 'Resource controller secara otomatis membuat 7 method CRUD standar. Ini cara paling efisien!\n\nResource controllers automatically create 7 standard CRUD methods. This is the most efficient way!' },
      { type: 'code', language: 'php', content: '// Membuat resource controller:\n// php artisan make:controller PostController --resource\n\n// Satu baris route = 7 endpoint!\nRoute::resource(\'posts\', PostController::class);\n\n// Hasilnya:\n// GET    /posts           → index    (daftar)\n// GET    /posts/create    → create   (form buat)\n// POST   /posts           → store    (simpan)\n// GET    /posts/{id}      → show     (detail)\n// GET    /posts/{id}/edit → edit     (form edit)\n// PUT    /posts/{id}      → update   (update)\n// DELETE /posts/{id}      → destroy  (hapus)' },
      { type: 'tip', content: 'Gunakan Route::resource() untuk CRUD lengkap. Gunakan Route::apiResource() untuk API tanpa form views.\n\nUse Route::resource() for full CRUD. Use Route::apiResource() for API without form views.' },
    ] },
];
export default lessons;
