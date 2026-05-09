# Rencana Implementasi: Kurikulum Database & SQL

Dokumen ini menjelaskan langkah-langkah untuk menambahkan materi **SQL & Database Fundamentals** ke dalam aplikasi CodeLab. Kursus ini sangat penting sebagai jembatan bagi pengguna yang ingin menguasai *Backend Development* dengan Laravel atau bahasa *server-side* lainnya.

## 1. Desain Kurikulum

### Kursus: Database & SQL (ID: `sql`)
*   **Module 1: Pengenalan & Pengambilan Data (Querying)**
    *   Apa itu Database Relasional? Pengenalan Tabel, Kolom, dan Baris.
    *   Sintaks `SELECT` dan `FROM`.
    *   Pemfilteran Data menggunakan `WHERE`, `ORDER BY`, dan `LIMIT`.
*   **Module 2: Manipulasi Data (DML)**
    *   Memasukkan data baru menggunakan `INSERT INTO`.
    *   Memperbarui data yang ada menggunakan `UPDATE`.
    *   Menghapus data menggunakan `DELETE` (dan pentingnya klausa WHERE!).
*   **Module 3: Hubungan Antar Tabel (Relational & Joins)**
    *   Pemahaman *Primary Key* (Kunci Utama) dan *Foreign Key* (Kunci Tamu).
    *   Menggabungkan data dari 2 tabel menggunakan `INNER JOIN`.
    *   Pengenalan agregasi dasar (`COUNT`, `SUM`, `AVG`).

## 2. Pembaruan Struktur File
Kita akan membuat hierarki konten baru di folder proyek:
```text
content/
├── sql/
│   ├── meta.json
│   ├── module-1/ (lessons.ts, quiz.ts)
│   ├── module-2/ (lessons.ts, quiz.ts)
│   └── module-3/ (lessons.ts, quiz.ts)
```

## 3. Ekspansi Gamifikasi & Badge
Akan ditambahkan *badge* spesifik untuk keahlian basis data di `constants/Gamification.ts`:
- 🗄️ **SQL Starter** (Syarat: Selesaikan SQL Module 1)
- 📊 **Data Master** (Syarat: Selesaikan seluruh modul SQL)

## 4. Penyesuaian Simulator (Code Editor)
Mengeksekusi SQL asli membutuhkan *engine database* seperti SQLite. Untuk kesederhanaan pada versi saat ini, kita akan:
- **Validasi Teks (Regex):** Simulator `handleRunCode` di layar `LessonScreen` akan memvalidasi *query* yang diketik pengguna (misalnya memastikan kueri mengandung `SELECT * FROM users;`).
- **Simulasi Output Table:** Jika sintaks SQL benar, kita dapat mengembalikan teks sederhana seperti `[ Menampilkan 5 baris dari tabel 'users' ]` agar terasa nyata bagi pengguna.

## 5. Integrasi Dashboard Beranda
- **Kartu Kursus (CourseCard):** Menambahkan kartu baru bertemakan "SQL & Database" dengan ikon (🗄️) dan warna tema *Teal* (`#008080`) atau *Dark Blue* (`#336791`, warna khas PostgreSQL) di `app/(tabs)/index.tsx`.

---

## Tahapan Eksekusi (Checklist)

- [ ] **Fase 1: Setup Metadata & Gamifikasi**
  - Membuat `content/sql/meta.json` dan menambahkan *badge* di `Gamification.ts`.
- [ ] **Fase 2: Penulisan Konten Modul (1, 2, 3)**
  - Menulis keseluruhan materi teori, tantangan kode, dan kuis.
- [ ] **Fase 3: Registrasi ke Engine**
  - Mengimpor file-file SQL tersebut ke dalam file pendaftar utama (`content/index.ts`).
- [ ] **Fase 4: Penyesuaian UI & Simulator**
  - Mendaftarkan progress SQL di layar Beranda.
  - Memperhalus sistem eksekusi agar *console output* memahami jika kodenya berupa SQL.
