import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'ai-m1-quiz',
  moduleId: 'ai-m1',
  courseId: 'ai',
  title: 'Quiz: LLM Basics & Core Concepts',
  titleId: 'Kuis: Dasar LLM & Konsep Inti',
  questions: [
    {
      id: 'q1',
      question: 'At a fundamental technical level, what is a Large Language Model (LLM) doing when it answers your prompt?',
      questionId: 'Pada tingkat teknis yang mendasar, apa yang sebenarnya dilakukan oleh Large Language Model (LLM) saat menjawab prompt Anda?',
      options: [
        'It searches Wikipedia in real-time and copies the answer',
        'It calculates the mathematical probability to predict the most likely "next word"',
        'It thinks consciously about the meaning of your words',
        'It runs a hidden Google Search algorithm'
      ],
      optionsId: [
        'Ia mencari di Wikipedia secara real-time dan menyalin jawabannya',
        'Ia menghitung probabilitas matematis untuk memprediksi "kata berikutnya" yang paling mungkin muncul',
        'Ia berpikir secara sadar tentang arti kata-kata Anda',
        'Ia menjalankan algoritma Google Search yang tersembunyi'
      ],
      correctIndex: 1,
      explanation: 'LLMs are highly advanced next-word predictors based on vast amounts of training data.',
      explanationId: 'LLM adalah mesin prediksi kata berikutnya yang sangat canggih berdasarkan data pelatihan dalam jumlah besar.',
    },
    {
      id: 'q2',
      question: 'What happens when a conversation with an AI exceeds its "Context Window" limit?',
      questionId: 'Apa yang terjadi ketika percakapan dengan AI melampaui batas "Jendela Konteks" (Context Window)-nya?',
      options: [
        'The AI deletes its training data',
        'The AI stops working and crashes the application',
        'The AI begins to "forget" the earliest parts of the conversation',
        'The AI automatically upgrades to a larger model'
      ],
      optionsId: [
        'AI menghapus data pelatihannya',
        'AI berhenti bekerja dan membuat aplikasi mogok (crash)',
        'AI mulai "melupakan" bagian paling awal dari percakapan',
        'AI secara otomatis melakukan upgrade ke model yang lebih besar'
      ],
      correctIndex: 2,
      explanation: 'The context window acts as the AI\'s short-term memory. Once it is full, older tokens fall out of memory to make room for new ones.',
      explanationId: 'Jendela konteks bertindak sebagai memori jangka pendek AI. Setelah penuh, token yang lebih lama akan keluar dari memori untuk memberi ruang bagi token baru.',
    },
    {
      id: 'q3',
      question: 'Which of the following is a good strategy to mitigate an AI from "hallucinating" (making up facts)?',
      questionId: 'Manakah dari strategi berikut yang baik untuk memitigasi AI agar tidak "berhalusinasi" (mengarang fakta)?',
      options: [
        'Tell the AI to "be more creative"',
        'Instruct the AI to answer ONLY based on provided reference text, and say "I do not know" if the answer isn\'t there',
        'Make the prompt as short as possible',
        'Use all capital letters in your prompt'
      ],
      optionsId: [
        'Menyuruh AI untuk "lebih kreatif"',
        'Menginstruksikan AI untuk HANYA menjawab berdasarkan teks referensi yang diberikan, dan mengatakan "Saya tidak tahu" jika jawabannya tidak ada',
        'Membuat prompt sependek mungkin',
        'Menggunakan huruf kapital semua dalam prompt Anda'
      ],
      correctIndex: 1,
      explanation: 'Providing solid reference data and explicitly giving the AI permission to say "I don\'t know" prevents it from guessing and fabricating answers.',
      explanationId: 'Memberikan data referensi yang solid dan secara eksplisit memberikan izin kepada AI untuk mengatakan "Saya tidak tahu" mencegahnya menebak dan mengarang jawaban.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
