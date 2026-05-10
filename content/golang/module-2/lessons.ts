import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'golang-m2-l1',
    courseId: 'golang',
    moduleId: 'golang-m2',
    title: 'Standard Library `net/http`',
    titleId: 'Standard Library `net/http`',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Unlike many other languages, Go has a very powerful standard library. You can build a robust, production-ready web server using just the built-in `net/http` package without downloading any external frameworks.',
        contentId: 'Tidak seperti banyak bahasa lain, Go memiliki pustaka standar (standard library) yang sangat kuat. Anda dapat membangun server web yang tangguh dan siap produksi hanya menggunakan paket bawaan `net/http` tanpa mengunduh framework eksternal apa pun.',
      },
      {
        type: 'code',
        language: 'go',
        content: 'import (\n    "fmt"\n    "net/http"\n)\n\nfunc helloHandler(w http.ResponseWriter, r *http.Request) {\n    fmt.Fprintf(w, "Hello, World!")\n}\n\nfunc main() {\n    http.HandleFunc("/hello", helloHandler)\n    http.ListenAndServe(":8080", nil)\n}',
      },
    ],
  },
  {
    id: 'golang-m2-l2',
    courseId: 'golang',
    moduleId: 'golang-m2',
    title: 'Modern Frameworks (Gin & Fiber)',
    titleId: 'Framework Modern (Gin & Fiber)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'While `net/http` is great, routing complex URLs (like `/users/:id`) and handling middleware can become verbose. To solve this, Go developers often use frameworks like Gin or Fiber.',
        contentId: 'Meskipun `net/http` sangat bagus, melakukan perutean URL kompleks (seperti `/users/:id`) dan menangani middleware bisa menjadi panjang dan rumit. Untuk mengatasinya, pengembang Go sering menggunakan framework seperti Gin atau Fiber.',
      },
      {
        type: 'text',
        content: 'Gin is heavily used in the industry for its speed and Express.js-like API. Fiber is an even faster framework built on top of `fasthttp`, designed for extreme performance.',
        contentId: 'Gin sangat banyak digunakan di industri karena kecepatannya dan API-nya yang mirip Express.js. Fiber adalah framework yang lebih cepat lagi, dibangun di atas `fasthttp`, dirancang untuk performa ekstrem.',
      },
      {
        type: 'code',
        language: 'go',
        content: '// Example using Gin\nr := gin.Default()\nr.GET("/ping", func(c *gin.Context) {\n  c.JSON(200, gin.H{"message": "pong"})\n})\nr.Run(":8080")',
      },
    ],
  },
  {
    id: 'golang-m2-l3',
    courseId: 'golang',
    moduleId: 'golang-m2',
    title: 'JSON Serialization in Go',
    titleId: 'Serialisasi JSON di Go',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'APIs communicate mostly using JSON. In Go, you convert between JSON data and Go Structs using the `encoding/json` package.',
        contentId: 'API berkomunikasi sebagian besar menggunakan JSON. Di Go, Anda mengonversi data JSON dengan Struct Go menggunakan paket `encoding/json`.',
      },
      {
        type: 'text',
        content: 'Converting a Struct to JSON is called "Marshal" (or Encoding). Converting JSON back into a Struct is called "Unmarshal" (or Decoding).',
        contentId: 'Mengonversi Struct menjadi JSON disebut "Marshal" (atau Encoding). Mengonversi JSON kembali menjadi Struct disebut "Unmarshal" (atau Decoding).',
      },
      {
        type: 'code',
        language: 'go',
        content: '// Notice the struct tags mapping fields to JSON keys\ntype Product struct {\n    Name  string  `json:"name"`\n    Price float64 `json:"price"`\n}\n\n// Marshalling\njsonData, err := json.Marshal(myProduct)',
      },
    ],
  },
];

export default lessons;
