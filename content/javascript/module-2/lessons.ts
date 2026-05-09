import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'js-m2-l1',
    courseId: 'javascript',
    moduleId: 'js-m2',
    title: 'var, let, and const',
    titleId: 'var, let, dan const',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Variabel adalah "wadah" untuk menyimpan data. Di JavaScript ada 3 cara mendeklarasikan variabel:\n\nVariables are "containers" for storing data. In JavaScript there are 3 ways to declare variables:',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// var — cara lama (hindari)\nvar nama = "Budi";\n\n// let — bisa diubah nilainya\nlet umur = 25;\numur = 26; // ✅ OK\n\n// const — tidak bisa diubah\nconst PI = 3.14;\n// PI = 3.15; // ❌ Error!',
      },
      {
        type: 'tip',
        content: 'Gunakan const secara default. Gunakan let hanya jika nilai perlu diubah. Hindari var!\n\nUse const by default. Use let only if the value needs to change. Avoid var!',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// Aturan penamaan variabel:\n// 1. Harus dimulai dengan huruf, _, atau $\n// 2. Case-sensitive (nama ≠ Nama)\n// 3. Tidak boleh menggunakan reserved words\n\nlet firstName = "John";   // camelCase ✅\nlet last_name = "Doe";    // snake_case (OK)\nlet $price = 100;         // OK\nlet _private = true;      // OK\n// let 1name = "error";   // ❌ Error',
      },
    ],
    practiceCode: '// Buat 3 variabel: nama (const), umur (let), kota (const)\nconst nama = "";\nlet umur = 0;\nconst kota = "";\n\nconsole.log(nama, umur, kota);\n',
    practiceHintId: 'Isi nilai variabel dengan data kamu',
    practiceHint: 'Fill the variables with your data',
  },
  {
    id: 'js-m2-l2',
    courseId: 'javascript',
    moduleId: 'js-m2',
    title: 'String, Number, Boolean',
    titleId: 'String, Number, Boolean',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'JavaScript memiliki beberapa tipe data dasar (primitive types):\n\nJavaScript has several basic data types (primitive types):',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// String — teks (dalam tanda kutip)\nlet nama = "CodeLab";\nlet pesan = \'Halo dunia\';\nlet template = `Selamat datang, ${nama}!`; // template literal\n\n// Number — angka (integer & decimal)\nlet umur = 25;\nlet harga = 99.99;\nlet negatif = -10;\n\n// Boolean — true atau false\nlet aktif = true;\nlet selesai = false;\n\n// Cek tipe data dengan typeof\nconsole.log(typeof nama);    // "string"\nconsole.log(typeof umur);    // "number"\nconsole.log(typeof aktif);   // "boolean"',
      },
      {
        type: 'tip',
        content: 'Template literal (backtick `) sangat berguna untuk menyisipkan variabel ke dalam string menggunakan ${variabel}.\n\nTemplate literals (backtick `) are very useful for inserting variables into strings using ${variable}.',
      },
    ],
    practiceCode: '// Buat variabel untuk setiap tipe data\nlet myName = "CodeLab";\nlet myAge = 20;\nlet isStudent = true;\n\nconsole.log(`Nama: ${myName}`);\nconsole.log(`Umur: ${myAge}`);\nconsole.log(`Mahasiswa: ${isStudent}`);\nconsole.log(`Tipe: ${typeof myName}`);\n',
    practiceHintId: 'Ganti nilai dan lihat hasilnya',
    practiceHint: 'Change the values and see the results',
  },
  {
    id: 'js-m2-l3',
    courseId: 'javascript',
    moduleId: 'js-m2',
    title: 'Arrays',
    titleId: 'Array',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Array adalah kumpulan data yang disimpan dalam satu variabel. Setiap item memiliki index yang dimulai dari 0.\n\nArray is a collection of data stored in one variable. Each item has an index starting from 0.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// Membuat array\nlet buah = ["Apel", "Jeruk", "Mangga"];\nlet angka = [1, 2, 3, 4, 5];\nlet campuran = ["teks", 42, true];\n\n// Mengakses elemen (index mulai dari 0)\nconsole.log(buah[0]); // "Apel"\nconsole.log(buah[2]); // "Mangga"\n\n// Properti & method penting\nconsole.log(buah.length);     // 3\nbuah.push("Anggur");          // tambah di akhir\nbuah.pop();                   // hapus dari akhir\nbuah.unshift("Pisang");       // tambah di awal\nconsole.log(buah.includes("Jeruk")); // true',
      },
      {
        type: 'warning',
        content: 'Index array dimulai dari 0, bukan 1! buah[1] adalah elemen KEDUA.\n\nArray index starts from 0, not 1! buah[1] is the SECOND element.',
      },
    ],
    practiceCode: '// Buat array hewan favorit dan tampilkan\nlet hewan = ["Kucing", "Anjing", "Kelinci"];\n\nconsole.log("Jumlah:", hewan.length);\nconsole.log("Pertama:", hewan[0]);\n\nhewan.push("Hamster");\nconsole.log("Setelah push:", hewan);\n',
    practiceHintId: 'Coba tambah dan hapus elemen array',
    practiceHint: 'Try adding and removing array elements',
  },
  {
    id: 'js-m2-l4',
    courseId: 'javascript',
    moduleId: 'js-m2',
    title: 'Objects',
    titleId: 'Objek',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'Object menyimpan data dalam pasangan key-value. Ini adalah tipe data paling penting di JavaScript!\n\nObjects store data in key-value pairs. This is the most important data type in JavaScript!',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// Membuat object\nconst mahasiswa = {\n  nama: "Budi",\n  umur: 21,\n  jurusan: "Informatika",\n  aktif: true,\n  hobi: ["coding", "gaming"]\n};\n\n// Mengakses properti\nconsole.log(mahasiswa.nama);        // "Budi"\nconsole.log(mahasiswa["jurusan"]);   // "Informatika"\n\n// Mengubah properti\nmahasiswa.umur = 22;\nmahasiswa.email = "budi@mail.com"; // tambah baru\n\n// Method (fungsi di dalam object)\nconst calc = {\n  tambah: function(a, b) { return a + b; },\n  kali: (a, b) => a * b\n};\nconsole.log(calc.tambah(5, 3)); // 8',
      },
      {
        type: 'tip',
        content: 'Gunakan dot notation (obj.key) untuk key sederhana, dan bracket notation (obj["key"]) untuk key dengan spasi atau karakter khusus.',
      },
    ],
    practiceCode: '// Buat object profil kamu\nconst profil = {\n  nama: "Coder",\n  level: 1,\n  bahasa: ["JavaScript"],\n};\n\nconsole.log(`Halo, ${profil.nama}!`);\nconsole.log(`Level: ${profil.level}`);\nconsole.log(`Bahasa: ${profil.bahasa.join(", ")}`);\n',
    practiceHintId: 'Tambahkan properti baru ke object profil',
    practiceHint: 'Add new properties to the profil object',
  },
];

export default lessons;
