import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'golang-m1-l1',
    courseId: 'golang',
    moduleId: 'golang-m1',
    title: 'Introduction to Go & Basic Syntax',
    titleId: 'Pengenalan Go & Sintaks Dasar',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Go (or Golang) is an open-source, compiled programming language designed at Google. It is statically typed, highly performant, and incredibly efficient for building backend systems.',
        contentId: 'Go (atau Golang) adalah bahasa pemrograman open-source dan dikompilasi yang dirancang di Google. Bahasa ini diketik secara statis (statically typed), berkinerja tinggi, dan sangat efisien untuk membangun sistem backend.',
      },
      {
        type: 'code',
        language: 'go',
        content: 'package main\n\nimport "fmt"\n\nfunc main() {\n    // Short variable declaration\n    message := "Hello, Gophers!"\n    fmt.Println(message)\n}',
      },
      {
        type: 'text',
        content: 'Unlike interpreted languages (like Python or JavaScript), Go code is compiled directly into machine code, meaning it runs extremely fast without needing a virtual machine.',
        contentId: 'Tidak seperti bahasa interpreter (seperti Python atau JavaScript), kode Go dikompilasi langsung ke dalam kode mesin, yang berarti ia berjalan sangat cepat tanpa memerlukan mesin virtual (virtual machine).',
      },
    ],
  },
  {
    id: 'golang-m1-l2',
    courseId: 'golang',
    moduleId: 'golang-m1',
    title: 'Structs & Interfaces (No Classes!)',
    titleId: 'Structs & Interfaces (Tanpa Class!)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Go is not a traditional Object-Oriented language. It does not have "classes" or "inheritance". Instead, it uses `structs` to group data and `interfaces` to define behavior.',
        contentId: 'Go bukan bahasa Berorientasi Objek tradisional. Ia tidak memiliki "class" atau "pewarisan" (inheritance). Sebaliknya, Go menggunakan `structs` untuk mengelompokkan data dan `interfaces` untuk mendefinisikan perilaku.',
      },
      {
        type: 'code',
        language: 'go',
        content: 'type User struct {\n    Name string\n    Age  int\n}\n\n// A method attached to the User struct\nfunc (u User) Greet() string {\n    return "Hi, my name is " + u.Name\n}',
      },
      {
        type: 'text',
        content: 'This approach promotes composition over inheritance, leading to cleaner and more maintainable code.',
        contentId: 'Pendekatan ini mempromosikan komposisi (composition) daripada pewarisan (inheritance), yang mengarah pada kode yang lebih bersih dan mudah dikelola.',
      },
    ],
  },
  {
    id: 'golang-m1-l3',
    courseId: 'golang',
    moduleId: 'golang-m1',
    title: 'Goroutines & Channels',
    titleId: 'Goroutines & Channels',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Concurrency is a first-class citizen in Go. A `goroutine` is a lightweight thread managed by the Go runtime. You can run thousands of them simultaneously with minimal memory overhead.',
        contentId: 'Konkurensi adalah fitur kelas utama di Go. Sebuah `goroutine` adalah thread ringan yang dikelola oleh runtime Go. Anda dapat menjalankan ribuan goroutine secara bersamaan dengan overhead memori yang minimal.',
      },
      {
        type: 'code',
        language: 'go',
        content: 'func processTask(id int) {\n    fmt.Println("Processing task", id)\n}\n\nfunc main() {\n    // Start a new goroutine simply by using the "go" keyword\n    go processTask(1)\n    \n    // Main function will not wait for goroutine to finish automatically\n}',
      },
      {
        type: 'text',
        content: 'To safely share data between goroutines without race conditions, Go uses `channels` (pipes that connect concurrent goroutines).',
        contentId: 'Untuk berbagi data dengan aman antar goroutine tanpa terjadinya race condition, Go menggunakan `channels` (pipa yang menghubungkan goroutine yang berjalan secara konkuren).',
      },
    ],
  },
];

export default lessons;
