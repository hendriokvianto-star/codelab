# Rencana Refactoring CodeLab

Seiring dengan bertambahnya bahasa pemrograman dan *framework* yang didukung (mulai dari HTML, CSS, JS, Laravel, React, SQL, Tailwind, Node.js, Git, Python, hingga React Native), komponen UI utama kita di `app/lesson/[id].tsx` telah mengalami pembengkakan kode (*code bloat*). 

Fungsi `handleRunCode` saat ini sangat panjang karena mengandung logika simulasi (berbasis regex dan `if/else`) untuk **10+ modul** berbeda di dalam satu file presentasional.

Dokumen ini memaparkan rencana *refactoring* untuk memisahkan logika (Logika Bisnis/Simulasi) dari Komponen Tampilan (UI).

## 1. Tujuan Refactoring
- **Separation of Concerns (SoC):** Memisahkan logika evaluasi kode dari file *React Component*.
- **Maintainability:** Membuat penambahan kursus baru di masa depan lebih mudah tanpa harus mengganggu logika UI.
- **Readability:** Membersihkan file `[id].tsx` agar ukurannya lebih kecil dan berfokus murni pada tata letak, *state* lokal, dan animasi.

## 2. Struktur File Baru
Kita akan membuat sebuah utilitas/*service* baru di dalam direktori `lib/` atau `services/`:

```text
lib/
└── codeSimulator.ts    <-- Tempat baru untuk semua logika evaluasi
```

## 3. Desain `codeSimulator.ts`
File ini akan mengekspor sebuah fungsi utama bernama `simulateCode(courseId, codeInput)` yang akan mengembalikan string berupa kumpulan log (*output* konsol).

```typescript
export function simulateCode(courseId: string, codeInput: string): string {
    const logs: string[] = [];
    const execCode = codeInput;

    // Pindahkan semua if/else dari [id].tsx ke sini
    if (courseId === 'sql') {
       // ... logika SQL ...
    } else if (courseId === 'tailwind') {
       // ... logika Tailwind ...
    }
    // ... dst
    
    return logs.join('\n') || '(no output)';
}
```

*Catatan: Evaluasi JavaScript murni (menggunakan `new Function()`) juga dapat diletakkan di dalam modul ini dengan membuat `fakeConsole` internal.*

## 4. Perubahan pada `[id].tsx`
Fungsi `handleRunCode` di `app/lesson/[id].tsx` akan dipersingkat menjadi sangat elegan:

```typescript
import { simulateCode } from '@/lib/codeSimulator';

// Di dalam komponen:
const handleRunCode = () => {
  try {
    const outputString = simulateCode(lesson.courseId, codeInput);
    setOutput(outputString);
  } catch (err: any) {
    setOutput(`❌ Error: ${err.message}`);
  }
};
```

## 5. Tahapan Eksekusi

1. **Pembuatan File:** Membuat `lib/codeSimulator.ts`.
2. **Migrasi:** Memotong (*Cut*) semua blok `if/else` dari rentang baris ~60 hingga ~228 di file `[id].tsx`.
3. **Penyisipan (*Paste*):** Memasukkan kode tersebut ke dalam fungsi `simulateCode` yang baru.
4. **Pembersihan UI:** Mengubah `handleRunCode` untuk hanya memanggil fungsi dari modul simulasi.
5. **Type Checking:** Menjalankan `npx tsc --noEmit` untuk memastikan tidak ada kesalahan tipe data, perlakuan khusus pada evaluasi *Javascript* akan ditangani dengan hati-hati.
6. **Commit:** Mengunggah hasil refactoring ke *version control*.

Jika rencana ini sudah terlihat rapi dan Anda siap mengeksekusinya, mari kita mulai "bersih-bersih"!
