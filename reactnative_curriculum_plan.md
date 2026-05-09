# Rencana Implementasi: Kurikulum React Native (Mobile Dev)

Dokumen ini memaparkan langkah-langkah penambahan materi **React Native** ke dalam aplikasi CodeLab. Karena CodeLab sendiri dibangun menggunakan React Native (Expo), ini adalah kursus yang sangat relevan. Pengguna dapat mempelajari cara membuat aplikasi yang persis seperti yang sedang mereka gunakan!

## 1. Desain Kurikulum

### Kursus: React Native (ID: `reactnative`)
*   **Module 1: Pengenalan Komponen Mobile**
    *   Berbeda dengan web (HTML `div`, `p`), React Native menggunakan `<View>` dan `<Text>`.
    *   Struktur dasar aplikasi React Native.
    *   Pengenalan gaya menggunakan `StyleSheet.create()`.
*   **Module 2: Layout dengan Flexbox**
    *   Konsep `flex: 1` di aplikasi mobile.
    *   Mengatur arah elemen menggunakan `flexDirection: 'row'` atau `'column'`.
    *   Perataan menggunakan `justifyContent` dan `alignItems`.
*   **Module 3: Interaksi & Input Pengguna**
    *   Membuat tombol menggunakan `<Button title="Klik" />`.
    *   Mengelola teks yang diketik menggunakan `<TextInput>`.
    *   Menghubungkan interaksi ke dalam `useState`.

## 2. Pembaruan Struktur File
Kita akan membuat hierarki konten baru di folder proyek:
```text
content/
├── reactnative/
│   ├── meta.json
│   ├── module-1/ (lessons.ts, quiz.ts)
│   ├── module-2/ (lessons.ts, quiz.ts)
│   └── module-3/ (lessons.ts, quiz.ts)
```

## 3. Ekspansi Gamifikasi & Badge
Akan ditambahkan *badge* spesifik untuk keahlian Mobile Development di `constants/Gamification.ts`:
- 📱 **RN Starter** (Syarat: Selesaikan RN Module 1)
- 🏆 **Mobile Expert** (Syarat: Selesaikan seluruh modul React Native)

## 4. Penyesuaian Simulator (Code Editor)
Mengeksekusi kode React Native JSX mentah (`<View>`) tidak dapat dilakukan oleh simulator `eval()` bawaan kita saat ini karena ketiadaan koneksi virtual DOM / komponen native di layar tersebut. Oleh karena itu, kita akan menggunakan **Regex Mock Simulator**:
- Menangkap penggunaan `<Text>...</Text>` untuk mencetak pesan simulasi seperti `[Render] Menampilkan Teks: ...`
- Memvalidasi atribut `style={styles.container}` atau keberadaan `flexDirection`.
- Memberikan umpan balik (feedback) visual lewat konsol bahwa komponen mobile berhasil di- *render* secara virtual.

## 5. Integrasi Dashboard Beranda
- **Kartu Kursus (CourseCard):** Menambahkan kartu baru bertemakan "React Native" dengan ikon (📱) dan perpaduan warna biru tua/muda (`#06B6D4` atau `#20232A`) di `app/(tabs)/index.tsx`.

---

## Tahapan Eksekusi (Checklist)

- [ ] **Fase 1: Setup Metadata & Gamifikasi**
  - Membuat `content/reactnative/meta.json` dan mendaftarkan *badge* ke dalam sistem.
- [ ] **Fase 2: Penulisan Konten Modul (1, 2, 3)**
  - Menulis teori, praktik penulisan JSX komponen mobile, dan soal kuis.
- [ ] **Fase 3: Registrasi ke Engine Pusat**
  - Mengimpor file-file pelajaran ke `content/index.ts`.
- [ ] **Fase 4: Penyesuaian UI Beranda & Simulator Evaluasi**
  - Mengupdate halaman `LessonScreen` untuk menangkap tag `<View>` dan `<Text>` dalam skrip `reactnative`.
  - Memunculkan kartu kursus di beranda.
