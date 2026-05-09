# Rencana Implementasi: Ekspansi Kurikulum React.js

Rencana ini merinci langkah-langkah untuk menambahkan materi **React.js** ke dalam aplikasi CodeLab. Kursus ini adalah langkah logis selanjutnya setelah pengguna menguasai HTML, CSS, dan JavaScript, dan akan memberikan pemahaman mendalam tentang bagaimana aplikasi web modern (serta aplikasi seperti CodeLab itu sendiri) dibangun.

## 1. Desain Kurikulum

### Kursus: React.js Fundamentals (ID: `react`)
*   **Module 1: React Basics**
    *   Pengenalan Singkat: Apa itu React & Mengapa React?
    *   Sintaks JSX (JavaScript XML)
    *   Komponen (Components) & Reusability
    *   Props: Mengirim Data ke Komponen
*   **Module 2: State & Events**
    *   Pengenalan State & Hooks (`useState`)
    *   Mengelola Input Pengguna (Event Handlers: `onClick`, `onChange`)
    *   Merender List Data (`.map()`)
*   **Module 3: Lifecycle & Efek Samping**
    *   Pengenalan `useEffect`
    *   Mengambil Data dari API (Data Fetching)
    *   *Conditional Rendering* (Merender UI bersyarat)

## 2. Pembaruan Struktur File
Kita akan membuat struktur direktori baru untuk React.js di dalam direktori konten:
```text
content/
├── react/
│   ├── meta.json
│   ├── module-1/ (lessons.ts, quiz.ts)
│   ├── module-2/ (lessons.ts, quiz.ts)
│   └── module-3/ (lessons.ts, quiz.ts)
```
*Tindakan:* Setelah file konten dibuat, kita harus memperbarui `content/index.ts` untuk me-register kursus `react`.

## 3. Ekspansi Gamifikasi & Badge
Menambahkan *badge* baru di `constants/Gamification.ts`:
- ⚛️ **React Starter** (Syarat: Selesaikan React Module 1)
- 🌀 **React Master** (Syarat: Selesaikan seluruh modul React)
- 💻 **Frontend Expert** (Syarat: Selesaikan HTML, CSS, JavaScript, dan React)

## 4. Penyesuaian Mesin Eksekusi (Code Editor)
Mengeksekusi kode React.js (dengan sintaks JSX) secara langsung di dalam aplikasi React Native melalui `new Function()` membutuhkan *transpiler* (seperti Babel). Untuk tahap awal CodeLab:
- **Pendekatan Simulasi**: Sama seperti perlakuan pada kode PHP/HTML, kita akan menggunakan pendekatan simulasi teks atau *Regex Pattern Matching* di `app/lesson/[id].tsx` untuk menilai pemahaman pengguna terhadap sintaks React.
- **Kartu Beranda**: Menambahkan kartu "React" dengan warna aksen *Cyan* (`#61DAFB`) ke layar Beranda.

## 5. Checklist Eksekusi Bertahap (Phases)

- [ ] **Fase 1: Setup Metadata & Gamifikasi**
  - Membuat `meta.json` untuk React.
  - Menambahkan *badge* React di file `Gamification.ts`.
- [ ] **Fase 2: Penulisan Konten (Module 1)**
  - Menulis teori, latihan kode, dan kuis untuk Module 1 (Basics).
- [ ] **Fase 3: Registrasi Konten**
  - Menambahkan materi React ke `content/index.ts`.
- [ ] **Fase 4: Pembaruan UI & Beranda**
  - Mendaftarkan React ke komponen `CourseCard` di Beranda `app/(tabs)/index.tsx`.
- [ ] **Fase 5: Penyesuaian Simulator (Opsional)**
  - Mengupdate logika di `handleRunCode` (`LessonScreen`) jika diperlukan untuk memberikan *output* yang lebih cerdas saat mendeteksi sintaks React.
