# Rencana Implementasi: Kurikulum Git & GitHub (Version Control)

Dokumen ini merinci langkah-langkah untuk menambahkan materi **Git & GitHub** ke dalam aplikasi CodeLab. Keterampilan Version Control System (VCS) adalah keahlian mutlak yang harus dimiliki setiap developer perangkat lunak untuk melacak perubahan kode dan berkolaborasi dalam tim.

## 1. Desain Kurikulum

### Kursus: Git & GitHub (ID: `git`)
*   **Module 1: Dasar-dasar Git**
    *   Apa itu Git dan Version Control?
    *   Inisialisasi repositori (`git init`).
    *   Melacak perubahan dan menyimpannya (`git add` dan `git commit`).
*   **Module 2: Bekerja dengan Branch (Cabang)**
    *   Konsep *Branch* (Mengapa kita butuh cabang?).
    *   Membuat dan berpindah *branch* (`git branch`, `git checkout` / `git switch`).
    *   Menggabungkan kode antar cabang (`git merge`).
*   **Module 3: Kolaborasi dengan GitHub**
    *   Apa itu GitHub? (Perbedaan Git dan GitHub).
    *   Mendapatkan kode dari luar (`git clone`, `git pull`).
    *   Mengirimkan kode lokal ke server *cloud* (`git push`).

## 2. Pembaruan Struktur File
Kita akan membuat hierarki konten baru di folder proyek:
```text
content/
├── git/
│   ├── meta.json
│   ├── module-1/ (lessons.ts, quiz.ts)
│   ├── module-2/ (lessons.ts, quiz.ts)
│   └── module-3/ (lessons.ts, quiz.ts)
```

## 3. Ekspansi Gamifikasi & Badge
Akan ditambahkan *badge* spesifik untuk keahlian Version Control di `constants/Gamification.ts`:
- 🐙 **Git Starter** (Syarat: Selesaikan Git Module 1)
- 🔀 **Version Master** (Syarat: Selesaikan seluruh modul Git & GitHub)

## 4. Penyesuaian Simulator (Code Editor / Terminal Simulator)
Karena Git bukan bahasa pemrograman melainkan CLI (Command Line Interface), layar latihan (*Practice*) di CodeLab perlu diubah konsepnya menjadi sebuah **Terminal Simulator**:
- **Validasi Perintah Teks:** Editor akan membaca teks yang diketikkan pengguna seperti selayaknya *Terminal*.
- **Regex Cerdas:** Kita akan mencocokkan pola perintah, misal memastikan kode berawalan `git add` atau mengandung `git commit -m`.
- **Feedback Ala Terminal:** Jika pengguna mengetik `git commit -m "init"`, konsol *mock* kita akan merespons seperti `[main (root-commit)] init\n 1 file changed`.

## 5. Integrasi Dashboard Beranda
- **Kartu Kursus (CourseCard):** Menambahkan kartu baru bertemakan "Git & GitHub" dengan ikon (🐙 atau 🔀) dan warna tema *Oranye/Merah Khas Git* (`#F05032`) di `app/(tabs)/index.tsx`.

---

## Tahapan Eksekusi (Checklist)

- [ ] **Fase 1: Setup Metadata & Gamifikasi**
  - Membuat `content/git/meta.json` dan mendaftarkan *badge*.
- [ ] **Fase 2: Penulisan Konten Modul (1, 2, 3)**
  - Menulis teori, latihan berbasis CLI, dan soal kuis pilihan ganda.
- [ ] **Fase 3: Registrasi ke Engine Pusat**
  - Mengimpor file-file ke `content/index.ts`.
- [ ] **Fase 4: Penyesuaian UI & Simulator Terminal**
  - Mengupdate `LessonScreen` untuk mensimulasikan lingkungan Terminal (*mock shell*) khusus untuk pelajaran ber-ID `git`.
  - Menambahkan kartu Git ke layar beranda.
