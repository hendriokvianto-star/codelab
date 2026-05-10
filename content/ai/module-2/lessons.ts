import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'ai-m2-l1',
    courseId: 'ai',
    moduleId: 'ai-m2',
    title: 'Zero-shot vs Few-shot Prompting',
    titleId: 'Zero-shot vs Few-shot Prompting',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Zero-shot prompting is when you ask the AI to perform a task without giving it any prior examples (e.g., "Translate this to French: Hello").',
        contentId: 'Zero-shot prompting adalah ketika Anda meminta AI untuk melakukan suatu tugas tanpa memberikan contoh sebelumnya (misalnya, "Terjemahkan ini ke bahasa Prancis: Halo").',
      },
      {
        type: 'text',
        content: 'Few-shot prompting is a technique where you provide the AI with 2-3 examples of the input and the expected output before asking the actual question.',
        contentId: 'Few-shot prompting adalah teknik di mana Anda memberikan AI 2-3 contoh input dan output yang diharapkan sebelum menanyakan pertanyaan yang sebenarnya.',
      },
      {
        type: 'code',
        language: 'text',
        content: 'Example Few-shot:\n\nReview: "The product broke after 2 days" -> Sentiment: Negative\nReview: "Absolutely love the color and fit!" -> Sentiment: Positive\nReview: "It works okay, but shipping was slow." -> Sentiment:',
      },
      {
        type: 'text',
        content: 'Few-shot is extremely powerful when you want the AI to respond in a very specific format (like JSON or a specific tone) consistently.',
        contentId: 'Few-shot sangat kuat ketika Anda ingin AI merespons dalam format yang sangat spesifik (seperti JSON atau nada tertentu) secara konsisten.',
      },
    ],
  },
  {
    id: 'ai-m2-l2',
    courseId: 'ai',
    moduleId: 'ai-m2',
    title: 'Chain of Thought (CoT)',
    titleId: 'Chain of Thought (CoT)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'When an AI tries to solve a complex math or logic problem in a single step, it often makes mistakes. "Chain of Thought" forces the AI to break the problem down into intermediate steps.',
        contentId: 'Ketika AI mencoba memecahkan masalah matematika atau logika yang kompleks dalam satu langkah, AI sering melakukan kesalahan. "Chain of Thought" (Rantai Pemikiran) memaksa AI untuk memecah masalah menjadi langkah-langkah menengah.',
      },
      {
        type: 'text',
        content: 'You can trigger CoT simply by adding "Let\'s think step by step" at the end of your prompt.',
        contentId: 'Anda dapat memicu CoT secara sederhana dengan menambahkan "Mari berpikir langkah demi langkah" (Let\'s think step by step) di akhir prompt Anda.',
      },
      {
        type: 'text',
        content: 'Because the AI generates text sequentially, writing out the intermediate reasoning steps allows the model to "see" its own logic, leading to a much higher probability of a correct final answer.',
        contentId: 'Karena AI menghasilkan teks secara berurutan, menuliskan langkah penalaran perantara (intermediate) memungkinkan model untuk "melihat" logikanya sendiri, yang mengarah pada probabilitas yang jauh lebih tinggi untuk mencapai jawaban akhir yang benar.',
      },
    ],
  },
  {
    id: 'ai-m2-l3',
    courseId: 'ai',
    moduleId: 'ai-m2',
    title: 'System Prompts & Role Playing',
    titleId: 'System Prompts & Permainan Peran (Role Playing)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Through the API, prompts are usually split into "System" and "User" messages.',
        contentId: 'Melalui API, prompt biasanya dibagi menjadi pesan "System" dan pesan "User".',
      },
      {
        type: 'text',
        content: 'The System Prompt acts as the ultimate rulebook or persona for the AI. It sets the behavior, tone, and constraints before the user even says anything.',
        contentId: 'System Prompt bertindak sebagai buku aturan (rulebook) atau persona utama untuk AI. Ini mengatur perilaku, nada, dan batasan sebelum pengguna mengatakan apa pun.',
      },
      {
        type: 'code',
        language: 'json',
        content: '[\n  {"role": "system", "content": "You are a Senior React Developer. You only answer with valid code. No explanations."},\n  {"role": "user", "content": "How do I center a div?"}\n]',
      },
      {
        type: 'text',
        content: 'By adopting a specific role, the AI activates relevant clusters of information in its neural network, providing much more accurate and targeted answers.',
        contentId: 'Dengan mengadopsi peran tertentu, AI mengaktifkan kelompok (clusters) informasi yang relevan dalam jaringan sarafnya, memberikan jawaban yang jauh lebih akurat dan tepat sasaran.',
      },
    ],
  },
];

export default lessons;
