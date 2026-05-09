# Rencana Implementasi: Kurikulum TypeScript

Dokumen ini memaparkan rancangan penambahan kursus **TypeScript** ke dalam aplikasi CodeLab. TypeScript merupakan superset dari JavaScript yang sangat penting dalam pengembangan web modern untuk meminimalisasi *runtime error*.

## 1. Desain Kurikulum

### Kursus: TypeScript (ID: `typescript`)
*   **Module 1: Tipe Data Dasar & Type Inference**
    *   Pengenalan tipe statis: `string`, `number`, `boolean`.
    *   Bagaimana TypeScript menebak tipe data (*type inference*) tanpa perlu kita tulis secara eksplisit.
*   **Module 2: Interface & Objek**
    *   Mendefinisikan bentuk (*shape*) dari sebuah objek menggunakan kata kunci `interface`.
    *   Properti opsional menggunakan tanda tanya (`?`).
*   **Module 3: Fungsi & Bahaya "any"**
    *   Memberikan tipe pada parameter fungsi dan nilai kembaliannya (*return type*).
    *   Mengenal tipe `any` dan mengapa kita harus menghindarinya.

## 2. Struktur File (Content Tree)
Kita akan membuat hierarki konten baru di folder proyek:
```text
content/
├── typescript/
│   ├── meta.json
│   ├── module-1/ (lessons.ts, quiz.ts)
│   ├── module-2/ (lessons.ts, quiz.ts)
│   └── module-3/ (lessons.ts, quiz.ts)
```

## 3. Sistem Gamifikasi (Badges)
Penambahan *badge* eksklusif di `constants/Gamification.ts`:
- 🛡️ **TS Starter** (Syarat: Selesaikan TypeScript Module 1)
- 🗡️ **Type Defender** (Syarat: Selesaikan seluruh modul TypeScript)

## 4. Simulator Evaluasi Kode (TypeScript Checker Mock)
Eksekusi JavaScript biasa pada simulator bawaan kita berjalan lancar karena memanfaatkan `new Function()`. Namun, TypeScript secara alami perlu dikompilasi (diubah ke JS) sebelum dijalankan. 
Karena menjalankan kompilator asli (`tsc`) di sisi *client/browser* sangat berat, kita akan mendesain simulasi (Mock) cerdas di `lib/codeSimulator.ts`:
- **Pengecekan Tipe Palsu (Regex):** Simulator akan memindai adanya kata kunci khusus seperti `interface`, `type`, atau deklarasi bertipe ganda (misal `let nama: string`).
- Simulator akan memberikan umpan balik kompilasi sukses, seperti `[TypeScript Compiler] 0 errors found. Compiled successfully.`
- Apabila mendeteksi kesalahan deklarasi yang jelas (di dalam soal ujian), simulator akan memunculkan pesan error seperti `TS2322: Type 'string' is not assignable to type 'number'.`

## 5. UI Dashboard (Kartu Kursus)
- **CourseCard:** Akan ditambahkan pada `app/(tabs)/index.tsx`.
- **Identitas Visual:** Ikon (🛡️ atau 📘) dengan warna khas TypeScript, yakni Biru Tua (`#3178C6`).

---

## Tahapan Eksekusi
- [ ] **Langkah 1:** Menambahkan konfigurasi *badge* baru di `Gamification.ts`.
- [ ] **Langkah 2:** Membuat *file* silabus dan soal (`module 1-3` beserta `meta.json`).
- [ ] **Langkah 3:** Menambahkan `typescript` ke `content/index.ts`.
- [ ] **Langkah 4:** Menambahkan *CourseCard* ke Halaman Beranda.
- [ ] **Langkah 5:** Memperbarui fungsi `simulateCode` di `lib/codeSimulator.ts` untuk mengenali sintaks TypeScript.
