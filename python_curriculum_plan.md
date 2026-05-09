# Rencana Implementasi: Kurikulum Dasar Pemrograman Python

Dokumen ini memaparkan langkah-langkah untuk menambahkan materi **Dasar Pemrograman Python** ke dalam aplikasi CodeLab. Python adalah salah satu bahasa paling populer saat ini yang sangat direkomendasikan untuk pemula karena sintaksnya yang sederhana dan kegunaannya yang luas (AI, Data Science, Web, Automation).

## 1. Desain Kurikulum

### Kursus: Dasar Pemrograman Python (ID: `python`)
*   **Module 1: Pengenalan & Sintaks Dasar**
    *   Sintaks sederhana (`print()`).
    *   Membuat variabel dan tipe data dasar (*Integer*, *Float*, *String*).
    *   Tidak menggunakan *semicolon* (`;`) melainkan *indentation*.
*   **Module 2: Struktur Kontrol (Logika)**
    *   Percabangan: `if`, `elif`, dan `else`.
    *   Perulangan: `for` *loop* dan fungsi `range()`.
    *   Perulangan: `while` *loop*.
*   **Module 3: Fungsi & Struktur Data Dasar**
    *   Membuat *List* / *Array* (`[]`) dan memodifikasinya (`.append()`).
    *   Membuat dan memanggil fungsi menggunakan kata kunci `def`.

## 2. Pembaruan Struktur File
Kita akan membuat hierarki konten baru di folder proyek:
```text
content/
├── python/
│   ├── meta.json
│   ├── module-1/ (lessons.ts, quiz.ts)
│   ├── module-2/ (lessons.ts, quiz.ts)
│   └── module-3/ (lessons.ts, quiz.ts)
```

## 3. Ekspansi Gamifikasi & Badge
Akan ditambahkan *badge* spesifik untuk keahlian Python di `constants/Gamification.ts`:
- 🐍 **Python Starter** (Syarat: Selesaikan Python Module 1)
- 🧙‍♂️ **Snake Charmer** (Syarat: Selesaikan seluruh modul Python)

## 4. Penyesuaian Simulator (Code Editor)
Berbeda dengan *JavaScript* yang berjalan secara *native* di *engine* aplikasi React Native, *Python* tidak dapat dievaluasi secara langsung tanpa mem- *bundling interpreter* CPython atau WebAssembly. Karena fokus aplikasi kita adalah pengenalan, kita akan membuat **Python Mock Simulator** di `LessonScreen`:
- **Ekstraksi Fungsi `print()`:** Kita akan menangkap teks di dalam `print("...")` menggunakan Regular Expression (*Regex*) untuk mencetak hasilnya ke layar *output* latihan pengguna.
- **Validasi Sintaks Sederhana:** Jika pengguna diminta menulis `def my_func():`, kita akan memastikan ada blok `def` serta *indentation* yang benar sebelum memberikan respons sukses.

## 5. Integrasi Dashboard Beranda
- **Kartu Kursus (CourseCard):** Menambahkan kartu baru bertemakan "Dasar Python" dengan ikon (🐍) dan kombinasi warna khas *Python Blue/Yellow* (`#3776AB`) di `app/(tabs)/index.tsx`.

---

## Tahapan Eksekusi (Checklist)

- [ ] **Fase 1: Setup Metadata & Gamifikasi**
  - Membuat `content/python/meta.json` dan mendaftarkan *badge*.
- [ ] **Fase 2: Penulisan Konten Modul (1, 2, 3)**
  - Menulis teori, praktik penulisan sintaks bersih ala Python, dan kuis pilihan ganda.
- [ ] **Fase 3: Registrasi ke Engine Pusat**
  - Mengimpor seluruh file modul ke `content/index.ts`.
- [ ] **Fase 4: Penyesuaian UI & Simulator Python**
  - Mengupdate halaman `LessonScreen` agar mampu mensimulasikan logika dasar Python (seperti menangkap *output* dari *statement* `print`).
  - Memunculkan kartu kursus di menu utama.
