import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'ai-m3-quiz',
  moduleId: 'ai-m3',
  courseId: 'ai',
  title: 'Quiz: AI Integration & Agents',
  titleId: 'Kuis: Integrasi AI & Agen Cerdas',
  questions: [
    {
      id: 'q1',
      question: 'Why is it critical to use "Structured Outputs" (like forcing JSON format) when integrating an AI API into a software application?',
      questionId: 'Mengapa sangat penting untuk menggunakan "Structured Outputs" (seperti memaksa format JSON) ketika mengintegrasikan API AI ke dalam sebuah aplikasi perangkat lunak?',
      options: [
        'Because AI models cannot output normal text',
        'So your application code can safely parse the response into objects and variables without crashing from conversational text',
        'It makes the API response significantly cheaper to compute',
        'It prevents hackers from using the API'
      ],
      optionsId: [
        'Karena model AI tidak dapat mengeluarkan teks normal',
        'Agar kode aplikasi Anda dapat mengurai (parse) respons menjadi objek dan variabel dengan aman tanpa mengalami crash karena teks percakapan',
        'Hal ini membuat respons API menjadi jauh lebih murah untuk dikomputasi',
        'Hal ini mencegah peretas (hacker) menggunakan API'
      ],
      correctIndex: 1,
      explanation: 'Code relies on predictable data structures. If the AI responds with conversational text like "Here is the data:", a JSON parser in your app will fail.',
      explanationId: 'Kode bergantung pada struktur data yang dapat diprediksi. Jika AI merespons dengan teks percakapan seperti "Ini datanya:", parser JSON di aplikasi Anda akan gagal.',
    },
    {
      id: 'q2',
      question: 'What is the primary purpose of the RAG (Retrieval-Augmented Generation) pattern?',
      questionId: 'Apa tujuan utama dari pola RAG (Retrieval-Augmented Generation)?',
      options: [
        'To make the AI generate images based on text',
        'To automatically retrieve your private/updated documents from a database and insert them into the prompt so the AI can answer factually',
        'To connect the AI to a social media account',
        'To translate languages in real-time'
      ],
      optionsId: [
        'Untuk membuat AI menghasilkan gambar berdasarkan teks',
        'Untuk mengambil dokumen pribadi/terbaru Anda secara otomatis dari database dan memasukkannya ke dalam prompt sehingga AI dapat menjawab secara faktual',
        'Untuk menghubungkan AI ke akun media sosial',
        'Untuk menerjemahkan bahasa secara real-time'
      ],
      correctIndex: 1,
      explanation: 'RAG bridges the gap between an AI\'s frozen training data and your live, proprietary data by injecting relevant facts directly into the conversation context.',
      explanationId: 'RAG menjembatani kesenjangan antara data pelatihan AI yang beku dengan data Anda yang hidup dan eksklusif dengan menyuntikkan fakta yang relevan langsung ke dalam konteks percakapan.',
    },
    {
      id: 'q3',
      question: 'How do "AI Agents" differ from standard AI chat interfaces?',
      questionId: 'Bagaimana "Agen AI" berbeda dari antarmuka obrolan (chat) AI standar?',
      options: [
        'Agents only work offline',
        'Agents are given specific "Tools" (functions) they can decide to call to perform actions or fetch data dynamically',
        'Agents do not use LLMs',
        'Agents cannot understand human language'
      ],
      optionsId: [
        'Agen hanya bekerja secara luring (offline)',
        'Agen diberi "Alat" (fungsi) spesifik yang dapat mereka putuskan untuk dipanggil guna melakukan tindakan atau mengambil data secara dinamis',
        'Agen tidak menggunakan LLM',
        'Agen tidak dapat memahami bahasa manusia'
      ],
      correctIndex: 1,
      explanation: 'Through Tool/Function Calling, an AI agent can execute code to interact with the outside world, making it an autonomous worker rather than just a text generator.',
      explanationId: 'Melalui Tool/Function Calling, sebuah agen AI dapat mengeksekusi kode untuk berinteraksi dengan dunia luar, menjadikannya pekerja otonom dan bukan sekadar generator teks.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
