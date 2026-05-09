# Rencana Implementasi: Kurikulum Next.js

Dokumen ini menjelaskan strategi penambahan kursus **Next.js** ke dalam ekosistem CodeLab. Next.js adalah kelanjutan organik dari kursus React yang sangat populer dan merupakan fondasi standar industri modern.

## 1. Desain Kurikulum

### Kursus: Next.js (ID: `nextjs`)
*   **Module 1: App Router & File-based Routing**
    *   Pengenalan folder `app/` dan penamaan file unik (`page.tsx`, `layout.tsx`).
    *   Bagaimana *routing* terjadi secara otomatis tanpa mengkonfigurasi `React Router`.
*   **Module 2: Server vs Client Components**
    *   Konsep *Server-Side Rendering* (SSR) bawaan (tanpa `"use client"`).
    *   Kapan dan mengapa kita harus menggunakan `"use client"` (saat butuh *useState* atau *event listener*).
*   **Module 3: Data Fetching & SEO**
    *   Kemudahan *fetching* data langsung di dalam komponen *Server* (menggunakan fungsi *async/await* langsung pada komponen React).
    *   Pengaruhnya pada kecepatan *load* dan *Search Engine Optimization* (SEO).

## 2. Struktur File (Content Tree)
Sama seperti kursus lainnya, kita akan membuat kerangka direktori berikut:
```text
content/
├── nextjs/
│   ├── meta.json
│   ├── module-1/ (lessons.ts, quiz.ts)
│   ├── module-2/ (lessons.ts, quiz.ts)
│   └── module-3/ (lessons.ts, quiz.ts)
```

## 3. Sistem Gamifikasi (Badges)
Pembaruan koleksi *badge* di `constants/Gamification.ts`:
- ⬛ **Next Starter** (Syarat: Selesaikan Modul 1)
- ⚡ **Next-Gen Dev** (Syarat: Selesaikan seluruh modul Next.js)

## 4. Simulasi Eksekusi (Next.js Server Mock)
Karena Next.js bergantung erat pada server Node.js untuk melakukan *build* dan me-render HTML dari sisi *server* (SSR), kita tidak bisa mengeksekusi sintaks `app/page.tsx` di dalam satu aplikasi *client-side* Expo. 

Sebagai gantinya, kita memperbarui `lib/codeSimulator.ts`:
- **Pemindai Server/Client:** Simulator akan mengecek keberadaan direktif `"use client"`. Jika tidak ada, simulator mencetak `[Server] Rendered on the Server-side`.
- **Validasi Struktur:** Jika kode memuat `export default function Page`, sistem akan menganggapnya sebagai proses rendering *App Router* dan mencetak output simulasi `[Route Compilation] /page compiled successfully`.

## 5. UI Dashboard
- **CourseCard:** Akan ditempatkan di halaman `/app/(tabs)/index.tsx`.
- **Estetika:** Menggunakan warna ikonik Next.js, yakni Hitam Vantablack atau Abu-Abu Gelap (`#000000` atau `#111111`) berpadu dengan tulisan putih, lengkap dengan logo/ikon ⬛ atau ⚡.

---

## Tahapan Eksekusi

1. Mendaftarkan status dan atribut *badge* Next.js pada file `Gamification.ts`.
2. Menulis seluruh silabus teori, tugas simulasi kode, dan kuis (M1, M2, M3).
3. Meregistrasikan rute *Next.js* pada *database master* di `content/index.ts`.
4. Menyematkan *CourseCard* Next.js di daftar menu Beranda.
5. Memperbarui `lib/codeSimulator.ts` dengan kecerdasan simulasi *Server-Side Rendering* ala Next.js.
