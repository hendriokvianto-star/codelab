# Rencana Implementasi: Kurikulum Node.js & Express.js

Dokumen ini memaparkan langkah-langkah untuk menambahkan materi **Node.js & Express.js** ke dalam aplikasi CodeLab. Modul ini adalah pelengkap sempurna bagi pengguna yang telah mempelajari JavaScript dasar dan ingin membangun *Backend* menggunakan bahasa yang sama (menuju MERN/MEAN stack).

## 1. Desain Kurikulum

### Kursus: Node.js & Express (ID: `nodejs`)
*   **Module 1: Pengenalan Server & Express**
    *   Apa itu Node.js dan Express?
    *   Membuat *server* pertama (`app.listen`).
    *   Membuat *Route* GET sederhana (`app.get('/', ...)`).
*   **Module 2: Routing Lanjutan & Middleware**
    *   Menerima data (Metode POST, `req.body`).
    *   Parameter dinamis (`req.params` dan `req.query`).
    *   Konsep *Middleware* dasar (fungsi yang berjalan di tengah *request*).
*   **Module 3: REST API & Status Codes**
    *   Konsep CRUD (Create, Read, Update, Delete).
    *   Mengembalikan format JSON (`res.json()`).
    *   Kode status HTTP (200 OK, 404 Not Found, 500 Server Error).

## 2. Pembaruan Struktur File
Kita akan membuat hierarki konten baru di folder proyek:
```text
content/
├── nodejs/
│   ├── meta.json
│   ├── module-1/ (lessons.ts, quiz.ts)
│   ├── module-2/ (lessons.ts, quiz.ts)
│   └── module-3/ (lessons.ts, quiz.ts)
```

## 3. Ekspansi Gamifikasi & Badge
Akan ditambahkan *badge* spesifik untuk keahlian Node.js di `constants/Gamification.ts`:
- 🟢 **Node Starter** (Syarat: Selesaikan Node Module 1)
- 🚀 **API Master** (Syarat: Selesaikan seluruh modul Node.js)

## 4. Penyesuaian Simulator (Code Editor)
Mengeksekusi *server* Node.js sungguhan di dalam aplikasi *React Native* tidak dimungkinkan melalui fungsi *eval* biasa karena fungsi seperti `require()` atau `http` tidak tersedia secara bawaan. Oleh karena itu, kita akan:
- **Mencegat Eksekusi Node.js:** Simulator `handleRunCode` di layar `LessonScreen` akan dimodifikasi agar secara otomatis menangkap kode ber-ID `nodejs`.
- **Simulasi Interaktif:** Menggunakan *Regex* untuk memastikan pengguna memanggil fungsi yang diminta (contoh: memvalidasi adanya `app.get` atau `res.json`).
- **Pesan Konsol Mock:** Menampilkan pesan sukses *mock* seperti `[Server] Berjalan di port 3000` atau `[GET /] Merespons dengan JSON...`.

## 5. Integrasi Dashboard Beranda
- **Kartu Kursus (CourseCard):** Menambahkan kartu baru bertemakan "Node.js & Express" dengan ikon (🟢 atau 🚀) dan warna tema *Hijau Khas Node* (`#68A063` atau `#339933`) di `app/(tabs)/index.tsx`.

---

## Tahapan Eksekusi (Checklist)

- [ ] **Fase 1: Setup Metadata & Gamifikasi**
  - Membuat `content/nodejs/meta.json` dan mendaftarkan *badge* ke dalam sistem.
- [ ] **Fase 2: Penulisan Konten Modul (1, 2, 3)**
  - Menulis teori, praktik pembuatan *endpoint* Express, dan soal kuis pilihan ganda.
- [ ] **Fase 3: Registrasi ke Engine Pusat**
  - Mengimpor file-file pelajaran ke `content/index.ts`.
- [ ] **Fase 4: Penyesuaian UI Beranda & Simulator Evaluasi**
  - Mengupdate halaman `LessonScreen` untuk mensimulasikan hasil dari kode `nodejs`.
  - Memunculkan kartu kursus di beranda.
