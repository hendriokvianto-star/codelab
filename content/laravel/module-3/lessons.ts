import type { LessonData } from '../../index';
const lessons: LessonData[] = [
  { id: 'lv-m3-l1', courseId: 'laravel', moduleId: 'lv-m3', title: 'Blade Syntax', titleId: 'Sintaks Blade', xp: 25,
    theory: [
      { type: 'text', content: 'Blade adalah template engine bawaan Laravel. File Blade menggunakan ekstensi .blade.php dan mendukung template inheritance.\n\nBlade is Laravel\'s built-in template engine. Blade files use the .blade.php extension and support template inheritance.' },
      { type: 'code', language: 'php', content: '{{-- Menampilkan data (escaped) --}}\n<h1>{{ $title }}</h1>\n<p>{{ $user->name }}</p>\n\n{{-- Data mentah (unescaped) - hati-hati XSS --}}\n{!! $htmlContent !!}\n\n{{-- Komentar Blade --}}\n{{-- Ini tidak akan di-render --}}\n\n{{-- PHP di Blade --}}\n@php\n    $greeting = "Halo!";\n@endphp\n<p>{{ $greeting }}</p>' },
      { type: 'tip', content: 'Selalu gunakan {{ }} (double curly) untuk output. Ini otomatis mencegah serangan XSS!\n\nAlways use {{ }} for output. This automatically prevents XSS attacks!' },
    ] },
  { id: 'lv-m3-l2', courseId: 'laravel', moduleId: 'lv-m3', title: 'Layouts & Components', titleId: 'Layout & Komponen', xp: 25,
    theory: [
      { type: 'text', content: 'Layout memungkinkan kamu mendefinisikan struktur halaman yang konsisten. Komponen Blade membuat UI reusable.\n\nLayouts let you define consistent page structures. Blade components make reusable UI.' },
      { type: 'code', language: 'php', content: '{{-- resources/views/layouts/app.blade.php --}}\n<!DOCTYPE html>\n<html>\n<head>\n    <title>@yield(\'title\', \'CodeLab\')</title>\n</head>\n<body>\n    <nav>...</nav>\n    <main>\n        @yield(\'content\')\n    </main>\n    <footer>...</footer>\n</body>\n</html>\n\n{{-- resources/views/home.blade.php --}}\n@extends(\'layouts.app\')\n\n@section(\'title\', \'Beranda\')\n\n@section(\'content\')\n    <h1>Selamat Datang!</h1>\n    <p>Ini halaman beranda.</p>\n@endsection' },
    ] },
  { id: 'lv-m3-l3', courseId: 'laravel', moduleId: 'lv-m3', title: 'Blade Directives', titleId: 'Directive Blade', xp: 25,
    theory: [
      { type: 'text', content: 'Blade menyediakan directive (shortcut) untuk kontrol alur di template.\n\nBlade provides directives (shortcuts) for control flow in templates.' },
      { type: 'code', language: 'php', content: '{{-- Kondisi --}}\n@if($user->isAdmin())\n    <span class="badge">Admin</span>\n@elseif($user->isModerator())\n    <span class="badge">Moderator</span>\n@else\n    <span class="badge">User</span>\n@endif\n\n{{-- Loop --}}\n@foreach($users as $user)\n    <p>{{ $loop->iteration }}. {{ $user->name }}</p>\n@endforeach\n\n{{-- Empty check --}}\n@forelse($posts as $post)\n    <h2>{{ $post->title }}</h2>\n@empty\n    <p>Belum ada post.</p>\n@endforelse\n\n{{-- Auth --}}\n@auth\n    <p>Halo, {{ auth()->user()->name }}</p>\n@endauth\n@guest\n    <a href="/login">Login</a>\n@endguest' },
      { type: 'tip', content: '$loop adalah variabel spesial di @foreach yang berisi info seperti $loop->index, $loop->first, $loop->last.' },
    ] },
  { id: 'lv-m3-l4', courseId: 'laravel', moduleId: 'lv-m3', title: 'Blade Components', titleId: 'Komponen Blade', xp: 25,
    theory: [
      { type: 'text', content: 'Blade Component adalah cara modern untuk membuat UI reusable di Laravel. Mirip konsep komponen di React!\n\nBlade Components are the modern way to create reusable UI in Laravel. Similar to React components!' },
      { type: 'code', language: 'php', content: '{{-- Membuat komponen:\nphp artisan make:component Alert --}}\n\n{{-- resources/views/components/alert.blade.php --}}\n<div class="alert alert-{{ $type }}">\n    {{ $slot }}\n</div>\n\n{{-- app/View/Components/Alert.php --}}\nclass Alert extends Component\n{\n    public function __construct(\n        public string $type = \'info\'\n    ) {}\n\n    public function render()\n    {\n        return view(\'components.alert\');\n    }\n}\n\n{{-- Menggunakan komponen --}}\n<x-alert type="success">\n    Data berhasil disimpan!\n</x-alert>\n\n<x-alert type="error">\n    Terjadi kesalahan.\n</x-alert>' },
    ] },
];
export default lessons;
