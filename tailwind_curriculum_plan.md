# Rencana Implementasi: Kurikulum Tailwind CSS

Dokumen ini menjelaskan langkah-langkah untuk menambahkan materi **Tailwind CSS** ke dalam aplikasi CodeLab. Tailwind CSS adalah *framework* berorientasi utilitas (utility-first) yang menjadi standar industri saat ini untuk membangun antarmuka pengguna (UI) modern dengan cepat. Kursus ini adalah pasangan sempurna setelah pengguna menyelesaikan kelas HTML dan Dasar CSS.

## 1. Desain Kurikulum

### Kursus: Tailwind CSS (ID: `tailwind`)
*   **Module 1: Pengenalan Konsep Utility-First**
    *   Apa itu Tailwind CSS? (Perbedaan dengan CSS Konvensional).
    *   Mengatur Tipografi (Teks, Ukuran, dan Ketebalan: `text-xl`, `font-bold`).
    *   Warna & Spasi (Background, Teks, Padding, Margin: `bg-blue-500`, `text-white`, `p-4`, `m-2`).
*   **Module 2: Membangun Tata Letak (Layouting)**
    *   Menguasai Flexbox di Tailwind (`flex`, `justify-center`, `items-center`).
    *   Menguasai Grid di Tailwind (`grid`, `grid-cols-3`, `gap-4`).
    *   Posisi & Ukuran (`w-full`, `h-screen`, `relative`, `absolute`).
*   **Module 3: Responsivitas & State**
    *   Desain Responsif (Breakpoints: `sm:`, `md:`, `lg:`).
    *   State Interaktif (Hover, Focus, Active: `hover:bg-blue-700`).
    *   Transisi Dasar (`transition`, `duration-300`).

## 2. Pembaruan Struktur File
Kita akan membuat hierarki konten baru di folder proyek:
```text
content/
├── tailwind/
│   ├── meta.json
│   ├── module-1/ (lessons.ts, quiz.ts)
│   ├── module-2/ (lessons.ts, quiz.ts)
│   └── module-3/ (lessons.ts, quiz.ts)
```

## 3. Ekspansi Gamifikasi & Badge
Akan ditambahkan *badge* spesifik untuk keahlian Tailwind di `constants/Gamification.ts`:
- 🪶 **Tailwind Starter** (Syarat: Selesaikan Tailwind Module 1)
- 🎨 **Utility Master** (Syarat: Selesaikan seluruh modul Tailwind)

## 4. Penyesuaian Simulator (Code Editor)
Mengevaluasi Tailwind di aplikasi *React Native* membutuhkan sedikit penyesuaian:
- **Validasi Kelas HTML:** Simulator `handleRunCode` di layar `LessonScreen` akan menggunakan *Regex/String Matcher* untuk memastikan atribut `class="..."` yang diketik pengguna mengandung utilitas yang diminta (contoh: memvalidasi adanya `bg-blue-500` dan `p-4` di dalam kode praktik).
- **Simulasi Render Teks:** Output akan mengabarkan bahwa kelas berhasil diterapkan: `[Tailwind Render] Classes "bg-blue-500 p-4" applied successfully!`

## 5. Integrasi Dashboard Beranda
- **Kartu Kursus (CourseCard):** Menambahkan kartu baru bertemakan "Tailwind CSS" dengan ikon (🪶 atau 🌬️) dan warna tema *Cyan/Teal* (`#0ED3CF`) di `app/(tabs)/index.tsx`.

---

## Tahapan Eksekusi (Checklist)

- [ ] **Fase 1: Setup Metadata & Gamifikasi**
  - Membuat `content/tailwind/meta.json` dan mendaftarkan *badge* ke dalam sistem.
- [ ] **Fase 2: Penulisan Konten Modul (1, 2, 3)**
  - Menulis teori, praktik penulisan HTML dengan kelas Tailwind, dan soal kuis pilihan ganda.
- [ ] **Fase 3: Registrasi ke Engine Pusat**
  - Mengimpor file-file pelajaran ke `content/index.ts`.
- [ ] **Fase 4: Penyesuaian UI Beranda & Simulator Evaluasi**
  - Mengupdate halaman `LessonScreen` untuk memvalidasi atribut `class` jika kursusnya adalah `tailwind`.
  - Memunculkan kartu kursus di aplikasi utama.
