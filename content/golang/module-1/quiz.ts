import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'golang-m1-quiz',
  moduleId: 'golang-m1',
  courseId: 'golang',
  title: 'Quiz: Go Basics & Concurrency',
  titleId: 'Kuis: Dasar Golang & Konkurensi',
  questions: [
    {
      id: 'q1',
      question: 'Which of the following statements about Go (Golang) is TRUE?',
      questionId: 'Manakah dari pernyataan berikut tentang Go (Golang) yang BENAR?',
      options: [
        'Go runs on a Java Virtual Machine (JVM)',
        'Go code is compiled directly into machine code',
        'Go requires you to manage memory manually with malloc()',
        'Go is a dynamically typed language like Python'
      ],
      optionsId: [
        'Go berjalan di atas Java Virtual Machine (JVM)',
        'Kode Go dikompilasi secara langsung menjadi kode mesin',
        'Go mengharuskan Anda mengelola memori secara manual dengan malloc()',
        'Go adalah bahasa yang diketik secara dinamis (dynamically typed) seperti Python'
      ],
      correctIndex: 1,
      explanation: 'Go is a compiled language. The compiler turns your source code directly into an executable binary (machine code) that runs very fast.',
      explanationId: 'Go adalah bahasa kompilasi. Kompiler mengubah kode sumber Anda langsung menjadi biner yang dapat dieksekusi (kode mesin) yang berjalan sangat cepat.',
    },
    {
      id: 'q2',
      question: 'Since Go does not have Classes, how do you group related data fields together?',
      questionId: 'Karena Go tidak memiliki Class, bagaimana cara Anda mengelompokkan kolom data yang saling berhubungan?',
      options: [
        'Using Arrays',
        'Using Channels',
        'Using Structs',
        'Using Interfaces'
      ],
      optionsId: [
        'Menggunakan Array',
        'Menggunakan Channels',
        'Menggunakan Structs',
        'Menggunakan Interfaces'
      ],
      correctIndex: 2,
      explanation: 'In Go, a `struct` is a typed collection of fields, used to group data together similarly to how classes group properties in OOP.',
      explanationId: 'Di Go, `struct` adalah kumpulan field bertipe, yang digunakan untuk mengelompokkan data bersamaan seperti halnya class mengelompokkan properti di OOP.',
    },
    {
      id: 'q3',
      question: 'What keyword is used to spawn a lightweight concurrent thread in Go?',
      questionId: 'Kata kunci apa yang digunakan untuk memunculkan thread konkuren ringan di Go?',
      options: [
        'async',
        'thread',
        'spawn',
        'go'
      ],
      optionsId: [
        'async',
        'thread',
        'spawn',
        'go'
      ],
      correctIndex: 3,
      explanation: 'You simply place the `go` keyword in front of a function call to start it running concurrently as a goroutine.',
      explanationId: 'Anda cukup meletakkan kata kunci `go` di depan pemanggilan fungsi untuk mulai menjalankannya secara bersamaan (konkuren) sebagai sebuah goroutine.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
