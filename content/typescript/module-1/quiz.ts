import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'ts-m1-quiz',
  courseId: 'typescript',
  moduleId: 'ts-m1',
  title: 'Basic Types Quiz',
  titleId: 'Kuis Tipe Dasar',
  xpPerQuestion: 10,
  questions: [
    {
      id: 'q1',
      question: 'What happens if you try to assign a string to a variable explicitly typed as number?',
      questionId: 'Apa yang terjadi jika Anda mencoba memasukkan string ke variabel yang secara eksplisit bertipe number?',
      options: ['It converts it to a number', 'It throws a runtime error in the browser', 'It throws a compilation error during build', 'It works fine'],
      optionsId: ['Nilai diubah menjadi angka', 'Muncul runtime error di browser', 'Muncul error kompilasi saat build', 'Berjalan lancar saja'],
      correctIndex: 2,
      explanation: 'TypeScript catches type mismatches during compilation, preventing the bad code from reaching production.',
      explanationId: 'TypeScript menangkap ketidakcocokan tipe selama proses kompilasi, mencegah kode buruk mencapai tahap produksi.',
    },
    {
      id: 'q2',
      question: 'What is "Type Inference"?',
      questionId: 'Apa yang dimaksud dengan "Inferensi Tipe" (Type Inference)?',
      options: ['Converting numbers to strings automatically', 'When TypeScript automatically guesses the correct type based on the initial value', 'A tool to format code', 'A feature of HTML5'],
      optionsId: ['Mengubah angka menjadi string secara otomatis', 'Ketika TypeScript secara otomatis menebak tipe yang benar berdasarkan nilai awal', 'Alat untuk merapikan kode', 'Sebuah fitur dari HTML5'],
      correctIndex: 1,
      explanation: 'If you write let x = 10, TypeScript infers that x is a number without you writing : number.',
      explanationId: 'Jika Anda menulis let x = 10, TypeScript menyimpulkan bahwa x adalah angka tanpa Anda perlu menuliskan : number.',
    },
    {
      id: 'q3',
      question: 'How do you type an array of strings?',
      questionId: 'Bagaimana cara Anda memberikan tipe untuk sebuah array yang berisi string?',
      options: ['string[]', 'Array<text>', '[string]', '{string}'],
      optionsId: ['string[]', 'Array<text>', '[string]', '{string}'],
      correctIndex: 0,
      explanation: 'string[] is the standard syntax for an array containing strings.',
      explanationId: 'string[] adalah sintaks standar untuk array yang berisi sekumpulan string.',
    }
  ],
};

export default quiz;
