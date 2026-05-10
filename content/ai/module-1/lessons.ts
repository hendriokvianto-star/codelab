import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'ai-m1-l1',
    courseId: 'ai',
    moduleId: 'ai-m1',
    title: 'How Large Language Models Work',
    titleId: 'Cara Kerja Large Language Models',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Large Language Models (LLMs) like GPT-4, Claude 3, and Llama are incredibly complex neural networks. However, fundamentally, they are just highly advanced "next word predictors".',
        contentId: 'Large Language Models (LLM) seperti GPT-4, Claude 3, dan Llama adalah jaringan saraf (neural networks) yang sangat kompleks. Namun, pada dasarnya, mereka hanyalah "mesin penebak kata berikutnya" yang sangat canggih.',
      },
      {
        type: 'text',
        content: 'They do not "think" or "understand" like humans. They calculate the mathematical probability of what the next word should be based on your prompt and their vast training data.',
        contentId: 'Mereka tidak "berpikir" atau "memahami" layaknya manusia. Mereka menghitung probabilitas matematis dari apa kata berikutnya yang seharusnya muncul berdasarkan prompt Anda dan data pelatihan mereka yang sangat besar.',
      },
      {
        type: 'text',
        content: 'Understanding this helps developers craft better prompts by providing clearer context, guiding the model toward higher-probability correct answers.',
        contentId: 'Memahami hal ini membantu developer menyusun prompt yang lebih baik dengan memberikan konteks yang lebih jelas, memandu model menuju jawaban benar dengan probabilitas yang lebih tinggi.',
      },
    ],
  },
  {
    id: 'ai-m1-l2',
    courseId: 'ai',
    moduleId: 'ai-m1',
    title: 'Tokens & Context Window',
    titleId: 'Token & Batas Jendela Konteks',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'AI models do not read text letter by letter or word by word. They process text in chunks called "Tokens". A token can be a single character, a syllable, or a whole word.',
        contentId: 'Model AI tidak membaca teks huruf demi huruf atau kata demi kata. Mereka memproses teks dalam potongan yang disebut "Token". Satu token bisa berupa satu karakter, satu suku kata, atau satu kata utuh.',
      },
      {
        type: 'text',
        content: 'Roughly, 1 token is about 4 characters of text in English (or 3/4 of a word).',
        contentId: 'Secara kasar, 1 token adalah sekitar 4 karakter teks dalam bahasa Inggris (atau 3/4 dari satu kata).',
      },
      {
        type: 'text',
        content: 'The "Context Window" is the maximum number of tokens the AI can "remember" at one time in a conversation (e.g., 128,000 tokens). If you exceed this limit, the AI will "forget" the earliest parts of the conversation.',
        contentId: '"Context Window" (Jendela Konteks) adalah jumlah token maksimum yang dapat "diingat" oleh AI pada satu waktu dalam percakapan (misalnya, 128.000 token). Jika Anda melampaui batas ini, AI akan "melupakan" bagian paling awal dari percakapan.',
      },
    ],
  },
  {
    id: 'ai-m1-l3',
    courseId: 'ai',
    moduleId: 'ai-m1',
    title: 'Mitigating AI Hallucinations',
    titleId: 'Memitigasi Halusinasi AI',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'A "Hallucination" occurs when an AI confidently generates false, fabricated, or nonsensical information as if it were a fact.',
        contentId: '"Halusinasi" terjadi ketika sebuah AI dengan meyakinkan menghasilkan informasi yang salah, dibuat-buat, atau tidak masuk akal seolah-olah itu adalah fakta.',
      },
      {
        type: 'text',
        content: 'Because LLMs are designed to generate text that sounds plausible, they will try to give you an answer even if they do not know it.',
        contentId: 'Karena LLM dirancang untuk menghasilkan teks yang terdengar masuk akal, mereka akan mencoba memberi Anda jawaban meskipun mereka tidak mengetahuinya.',
      },
      {
        type: 'code',
        language: 'text',
        content: 'To mitigate hallucinations, use strict prompting:\n"Answer the question using ONLY the provided text below. If the answer is not contained in the text, reply strictly with \'I DO NOT KNOW\'."',
      },
      {
        type: 'text',
        content: 'This forces the model to rely on provided facts (grounding) rather than its own predictive imagination.',
        contentId: 'Ini memaksa model untuk mengandalkan fakta yang diberikan (grounding) daripada imajinasi prediktifnya sendiri.',
      },
    ],
  },
];

export default lessons;
