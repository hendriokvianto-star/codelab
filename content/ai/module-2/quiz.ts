import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'ai-m2-quiz',
  moduleId: 'ai-m2',
  courseId: 'ai',
  title: 'Quiz: Advanced Prompt Engineering',
  titleId: 'Kuis: Teknik Prompt Engineering (Lanjutan)',
  questions: [
    {
      id: 'q1',
      question: 'Which prompting technique involves showing the AI 2 or 3 examples of the desired input/output format before asking the actual question?',
      questionId: 'Teknik prompting manakah yang melibatkan pemberian 2 atau 3 contoh format input/output yang diinginkan kepada AI sebelum menanyakan pertanyaan yang sebenarnya?',
      options: [
        'Zero-shot Prompting',
        'Chain of Thought Prompting',
        'Few-shot Prompting',
        'System Prompting'
      ],
      optionsId: [
        'Zero-shot Prompting',
        'Chain of Thought Prompting',
        'Few-shot Prompting',
        'System Prompting'
      ],
      correctIndex: 2,
      explanation: 'Few-shot prompting provides a few examples to "train" the AI\'s output format on the fly.',
      explanationId: 'Few-shot prompting memberikan beberapa contoh untuk "melatih" format output AI secara langsung.',
    },
    {
      id: 'q2',
      question: 'Why does adding the phrase "Let\'s think step by step" improve an AI\'s ability to solve complex math or logic puzzles?',
      questionId: 'Mengapa menambahkan kalimat "Mari berpikir langkah demi langkah" (Let\'s think step by step) dapat meningkatkan kemampuan AI dalam memecahkan teka-teki matematika atau logika yang rumit?',
      options: [
        'It forces the AI to search Google for the answer',
        'It allows the AI to output intermediate reasoning tokens, which helps it calculate the correct final answer sequentially',
        'It upgrades the AI to a smarter model version automatically',
        'It forces the AI to ignore its context window'
      ],
      optionsId: [
        'Kalimat itu memaksa AI untuk mencari jawaban di Google',
        'Kalimat itu memungkinkan AI mengeluarkan token penalaran menengah (intermediate), yang membantunya menghitung jawaban akhir yang benar secara berurutan',
        'Kalimat itu meningkatkan versi AI ke model yang lebih cerdas secara otomatis',
        'Kalimat itu memaksa AI untuk mengabaikan jendela konteksnya (context window)'
      ],
      correctIndex: 1,
      explanation: 'This technique, called Chain of Thought (CoT), prevents the AI from rushing to a wrong conclusion by forcing it to process the logic explicitly in the text.',
      explanationId: 'Teknik ini, yang disebut Chain of Thought (CoT), mencegah AI bergegas ke kesimpulan yang salah dengan memaksanya memproses logika secara eksplisit di dalam teks.',
    },
    {
      id: 'q3',
      question: 'In the API architecture, which type of message is used to set the strict, overarching behavior and persona of the AI (e.g., "You are a helpful coding assistant")?',
      questionId: 'Dalam arsitektur API, jenis pesan manakah yang digunakan untuk menetapkan perilaku dan persona AI yang ketat dan menyeluruh (misalnya, "Anda adalah asisten pengkodean yang sangat membantu")?',
      options: [
        'The User Message',
        'The Assistant Message',
        'The Grounding Message',
        'The System Message'
      ],
      optionsId: [
        'Pesan Pengguna (User Message)',
        'Pesan Asisten (Assistant Message)',
        'Pesan Dasar (Grounding Message)',
        'Pesan Sistem (System Message)'
      ],
      correctIndex: 3,
      explanation: 'The System Message acts as the core instruction set that governs the AI\'s personality and rules before it responds to the User.',
      explanationId: 'Pesan Sistem (System Message) bertindak sebagai set instruksi inti yang mengatur kepribadian dan aturan AI sebelum ia merespons Pengguna.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
