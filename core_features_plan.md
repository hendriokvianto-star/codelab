# Rencana Implementasi: Peningkatan Fitur Inti (Core App Features)

Kini CodeLab telah bertransformasi menjadi platform dengan 13 kursus komprehensif. Karena konten kita sudah sangat kaya, saatnya kita mengalihkan fokus untuk meningkatkan *User Experience* (UX) dan *Engagement* di tingkat aplikasi (Core App).

Berikut adalah rancangan 3 fitur inti baru yang akan mengangkat kualitas CodeLab menjadi aplikasi kelas produksi (*production-grade*):

## 1. Sistem Pencarian & Filter Cerdas (Smart Search & Categories)
**Masalah:** Menggulir layar melewati 13 *CourseCards* di halaman Beranda (Home) bisa melelahkan.
**Solusi:**
*   **Search Bar:** Menambahkan *input text* di bagian atas halaman Beranda untuk mencari kursus berdasarkan nama (misal: "React" atau "SQL").
*   **Kategori Filter (Chips):** Membuat deretan tombol filter interaktif: `Semua`, `Frontend`, `Backend`, `Mobile`, & `DevOps`.
*   **Implementasi:** Memperbarui `app/(tabs)/index.tsx` dengan *React State* (`useState`) untuk menyortir dan memfilter daftar kursus secara *real-time*.

## 2. Etalase Profil & Lencana (Profile & Badge Showcase)
**Masalah:** Pengguna sudah bersusah payah mendapatkan *XP* dan *Badge* eksklusif, namun belum ada tempat khusus untuk memamerkannya.
**Solusi:**
*   **Tab Profil Baru:** Jika belum ada, kita akan mendesain ulang atau menambahkan halaman Profil yang elegan.
*   **Statistik Global:** Menampilkan total *XP* yang terkumpul dari seluruh bahasa pemrograman.
*   **Grid Lencana (Badge Grid):** Etalase visual untuk melihat *badge* yang sudah terbuka (berwarna terang) dan yang masih terkunci (berwarna abu-abu/redup) menggunakan data dari `constants/Gamification.ts`.

## 3. Sistem Pembelajaran Harian (Daily Streak System)
**Masalah:** Pengguna butuh motivasi tambahan untuk kembali belajar setiap hari.
**Solusi:**
*   **Logika *Streak* (Zustand):** Memodifikasi penyimpanan lokal (`store/lessonStore.ts`) untuk mencatat `lastActivityDate` dan `currentStreak`.
*   **Indikator Visual:** Menampilkan ikon 🔥 (Api) beserta jumlah hari beruntun di sudut atas layar *Header*.
*   Jika pengguna menyelesaikan minimal satu pelajaran/kuis pada hari ini, *streak* bertambah +1. Jika bolos lebih dari 1 hari, *streak* kembali menjadi 0.

---

## Urutan Eksekusi yang Disarankan:
1.  **Fase 1 (Navigasi):** Membangun Filter Kategori & *Search Bar* di halaman Beranda. Ini sangat mendesak karena jumlah kursus yang banyak.
2.  **Fase 2 (Kebanggaan):** Membangun halaman Etalase Profil & Lencana (*Badge Grid*).
3.  **Fase 3 (Retensi):** Mengimplementasikan sistem *Daily Streak* 🔥 ke dalam kerangka kerja *Zustand* kita.

Silakan pelajari rancangan ini. Jika Anda siap untuk memulai, mohon konfirmasikan dengan mengetik **"Eksekusi Fase 1"** (atau fase mana pun yang paling Anda minati lebih dulu)!
