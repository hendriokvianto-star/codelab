/**
 * CodeLab — i18n Translations
 * Bilingual support: English & Bahasa Indonesia
 */

export type Language = 'en' | 'id';

const translations = {
  // Navigation
  'nav.home': { en: 'Home', id: 'Beranda' },
  'nav.learn': { en: 'Learn', id: 'Belajar' },
  'nav.arena': { en: 'Arena', id: 'Arena' },
  'nav.rank': { en: 'Rank', id: 'Peringkat' },
  'nav.profile': { en: 'Profile', id: 'Profil' },

  // Home screen
  'home.greeting': { en: 'Hello, Coder!', id: 'Halo, Koder!' },
  'home.subtitle': { en: "Let's code today!", id: 'Ayo ngoding hari ini!' },
  'home.daily_challenge': { en: 'Daily Challenge', id: 'Tantangan Harian' },
  'home.continue_learning': { en: 'Continue Learning', id: 'Lanjutkan Belajar' },
  'home.your_progress': { en: 'Your Progress', id: 'Progresmu' },
  'home.recommended': { en: 'Recommended', id: 'Rekomendasi' },

  // Learn screen
  'learn.title': { en: 'Learning Paths', id: 'Jalur Belajar' },
  'learn.subtitle': { en: 'Choose a language to start', id: 'Pilih bahasa untuk memulai' },
  'learn.modules': { en: 'modules', id: 'modul' },
  'learn.lessons': { en: 'lessons', id: 'pelajaran' },
  'learn.start': { en: 'Start Learning', id: 'Mulai Belajar' },
  'learn.continue': { en: 'Continue', id: 'Lanjutkan' },
  'learn.completed': { en: 'Completed', id: 'Selesai' },

  // Lesson
  'lesson.theory': { en: 'Theory', id: 'Teori' },
  'lesson.practice': { en: 'Practice', id: 'Praktik' },
  'lesson.quiz': { en: 'Quiz', id: 'Kuis' },
  'lesson.next': { en: 'Next', id: 'Selanjutnya' },
  'lesson.previous': { en: 'Previous', id: 'Sebelumnya' },
  'lesson.run_code': { en: 'Run Code', id: 'Jalankan Kode' },
  'lesson.complete': { en: 'Complete Lesson', id: 'Selesaikan Pelajaran' },

  // Quiz
  'quiz.question': { en: 'Question', id: 'Pertanyaan' },
  'quiz.of': { en: 'of', id: 'dari' },
  'quiz.correct': { en: 'Correct!', id: 'Benar!' },
  'quiz.incorrect': { en: 'Incorrect', id: 'Salah' },
  'quiz.check': { en: 'Check Answer', id: 'Cek Jawaban' },
  'quiz.next_question': { en: 'Next Question', id: 'Pertanyaan Berikutnya' },
  'quiz.results': { en: 'Quiz Results', id: 'Hasil Kuis' },
  'quiz.score': { en: 'Score', id: 'Skor' },
  'quiz.retry': { en: 'Try Again', id: 'Coba Lagi' },

  // Gamification
  'xp.earned': { en: 'XP Earned', id: 'XP Didapat' },
  'xp.total': { en: 'Total XP', id: 'Total XP' },
  'level.current': { en: 'Level', id: 'Level' },
  'streak.title': { en: 'Day Streak', id: 'Hari Beruntun' },
  'streak.keep_going': { en: 'Keep going!', id: 'Terus semangat!' },
  'streak.great': { en: "You're on fire!", id: 'Kamu lagi semangat!' },
  'badge.earned': { en: 'Badge Earned!', id: 'Badge Didapat!' },
  'badge.your_badges': { en: 'Your Badges', id: 'Badge Kamu' },

  // Profile
  'profile.title': { en: 'Profile', id: 'Profil' },
  'profile.settings': { en: 'Settings', id: 'Pengaturan' },
  'profile.language': { en: 'Language', id: 'Bahasa' },
  'profile.theme': { en: 'Theme', id: 'Tema' },
  'profile.dark_mode': { en: 'Dark Mode', id: 'Mode Gelap' },
  'profile.statistics': { en: 'Statistics', id: 'Statistik' },
  'profile.lessons_completed': { en: 'Lessons Completed', id: 'Pelajaran Selesai' },
  'profile.challenges_solved': { en: 'Challenges Solved', id: 'Tantangan Diselesaikan' },
  'profile.total_xp': { en: 'Total XP', id: 'Total XP' },
  'profile.bookmarks': { en: 'Bookmarks', id: 'Bookmark' },
  'profile.notes': { en: 'Notes', id: 'Catatan' },
  'profile.about': { en: 'About CodeLab', id: 'Tentang CodeLab' },

  // Arena
  'arena.title': { en: 'Coding Arena', id: 'Arena Koding' },
  'arena.daily': { en: 'Daily Challenge', id: 'Tantangan Harian' },
  'arena.weekly': { en: 'Weekly Challenge', id: 'Tantangan Mingguan' },
  'arena.difficulty': { en: 'Difficulty', id: 'Tingkat Kesulitan' },
  'arena.easy': { en: 'Easy', id: 'Mudah' },
  'arena.medium': { en: 'Medium', id: 'Sedang' },
  'arena.hard': { en: 'Hard', id: 'Sulit' },
  'arena.solve': { en: 'Solve', id: 'Selesaikan' },
  'arena.submit': { en: 'Submit', id: 'Kirim' },

  // General
  'general.loading': { en: 'Loading...', id: 'Memuat...' },
  'general.error': { en: 'Something went wrong', id: 'Terjadi kesalahan' },
  'general.retry': { en: 'Retry', id: 'Coba Lagi' },
  'general.cancel': { en: 'Cancel', id: 'Batal' },
  'general.save': { en: 'Save', id: 'Simpan' },
  'general.delete': { en: 'Delete', id: 'Hapus' },
  'general.search': { en: 'Search...', id: 'Cari...' },
  'general.no_results': { en: 'No results found', id: 'Tidak ada hasil' },

  // Courses
  'course.javascript': { en: 'JavaScript', id: 'JavaScript' },
  'course.javascript_desc': {
    en: 'Master the language of the web',
    id: 'Kuasai bahasa pemrograman web',
  },
  'course.laravel': { en: 'Laravel', id: 'Laravel' },
  'course.laravel_desc': {
    en: 'Build powerful web apps with PHP',
    id: 'Bangun aplikasi web powerful dengan PHP',
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Language = 'id'): string {
  const entry = translations[key];
  return entry ? entry[lang] : key;
}

export default translations;
