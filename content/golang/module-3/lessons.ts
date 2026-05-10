import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'golang-m3-l1',
    courseId: 'golang',
    moduleId: 'golang-m3',
    title: 'Monolith vs Microservices',
    titleId: 'Monolitik vs Microservices',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'A Monolith is an application where all code (UI, business logic, data access) is combined into a single deployable unit. Microservices break this down into small, independent services that communicate over a network.',
        contentId: 'Monolitik adalah aplikasi di mana seluruh kode (UI, logika bisnis, akses data) digabungkan menjadi satu unit yang dapat di-deploy. Microservices memecah ini menjadi layanan kecil dan independen yang saling berkomunikasi melalui jaringan.',
      },
      {
        type: 'text',
        content: 'Go is famously the perfect language for microservices due to its tiny memory footprint and fast startup time. You can easily run hundreds of Go microservices on a single server.',
        contentId: 'Go sangat terkenal sebagai bahasa yang sempurna untuk microservices karena jejak memorinya yang kecil dan waktu startup (waktu nyala) yang cepat. Anda dapat dengan mudah menjalankan ratusan microservice Go di satu server.',
      },
    ],
  },
  {
    id: 'golang-m3-l2',
    courseId: 'golang',
    moduleId: 'golang-m3',
    title: 'gRPC & Protocol Buffers',
    titleId: 'gRPC & Protocol Buffers',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'When microservices talk to each other, using JSON over HTTP (REST) can be too slow. Instead, modern systems use gRPC.',
        contentId: 'Saat microservices saling berkomunikasi, menggunakan JSON melalui HTTP (REST) bisa menjadi terlalu lambat. Sebagai gantinya, sistem modern menggunakan gRPC.',
      },
      {
        type: 'text',
        content: 'gRPC uses Protocol Buffers (protobuf) to serialize data into binary format. This makes communication incredibly fast and uses less bandwidth than JSON.',
        contentId: 'gRPC menggunakan Protocol Buffers (protobuf) untuk membuat serialisasi data menjadi format biner. Ini membuat komunikasi menjadi luar biasa cepat dan menggunakan lebih sedikit bandwidth daripada JSON.',
      },
      {
        type: 'code',
        language: 'protobuf',
        content: '// Example of a .proto file defining a service\nsyntax = "proto3";\n\nservice Greeter {\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n}\n\nmessage HelloRequest {\n  string name = 1;\n}',
      },
    ],
  },
  {
    id: 'golang-m3-l3',
    courseId: 'golang',
    moduleId: 'golang-m3',
    title: 'Dockerizing Go Apps',
    titleId: 'Dockerizing Aplikasi Go',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Because Go compiles to a single, standalone binary file, it does not need a bulky runtime (like Node.js or Python) installed on the server.',
        contentId: 'Karena Go dikompilasi menjadi satu file biner mandiri, ia tidak memerlukan runtime yang besar (seperti Node.js atau Python) untuk diinstal di server.',
      },
      {
        type: 'text',
        content: 'You can use Docker "Multi-stage builds" to compile your Go app in a large image, and then copy ONLY the compiled binary into a minimal `scratch` or `alpine` image.',
        contentId: 'Anda dapat menggunakan Docker "Multi-stage builds" untuk mengkompilasi aplikasi Go Anda dalam image besar, lalu menyalin HANYA biner yang dikompilasi ke dalam image `scratch` atau `alpine` yang minimal.',
      },
      {
        type: 'code',
        language: 'dockerfile',
        content: '# Stage 1: Build\nFROM golang:1.21 AS builder\nWORKDIR /app\nCOPY . .\nRUN go build -o main .\n\n# Stage 2: Final Minimal Image\nFROM alpine:latest\nWORKDIR /root/\nCOPY --from=builder /app/main .\nCMD ["./main"]',
      },
      {
        type: 'text',
        content: 'This often results in a final Docker image size of under 20MB!',
        contentId: 'Hal ini seringkali menghasilkan ukuran image Docker akhir di bawah 20MB!',
      },
    ],
  },
];

export default lessons;
