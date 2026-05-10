import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'ai-m3-l1',
    courseId: 'ai',
    moduleId: 'ai-m3',
    title: 'AI APIs & Structured Outputs',
    titleId: 'API AI & Output Terstruktur',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'To use AI inside your software, you interact with APIs provided by companies like OpenAI (GPT), Anthropic (Claude), or Google (Gemini).',
        contentId: 'Untuk menggunakan AI di dalam perangkat lunak Anda, Anda berinteraksi dengan API yang disediakan oleh perusahaan seperti OpenAI (GPT), Anthropic (Claude), atau Google (Gemini).',
      },
      {
        type: 'text',
        content: 'Because your code (like Node.js or Python) expects structured data to function properly, you must force the AI to return data in a specific format, almost always JSON.',
        contentId: 'Karena kode Anda (seperti Node.js atau Python) mengharapkan data terstruktur untuk berfungsi dengan baik, Anda harus memaksa AI untuk mengembalikan data dalam format tertentu, hampir selalu berupa JSON.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// Example forcing JSON output via OpenAI API\nconst response = await openai.chat.completions.create({\n  model: "gpt-4-turbo",\n  response_format: { type: "json_object" },\n  messages: [\n    { role: "system", content: "You extract names from text. Output strictly as JSON: {\"names\": []}." }\n  ]\n});',
      },
      {
        type: 'text',
        content: 'Without forcing structured outputs, the AI might add polite conversational text (like "Here is your JSON:") which will break your application\'s `JSON.parse()`.',
        contentId: 'Tanpa memaksa keluaran terstruktur, AI mungkin menambahkan teks percakapan yang sopan (seperti "Berikut adalah JSON Anda:") yang mana akan merusak fungsi `JSON.parse()` aplikasi Anda.',
      },
    ],
  },
  {
    id: 'ai-m3-l2',
    courseId: 'ai',
    moduleId: 'ai-m3',
    title: 'RAG (Retrieval-Augmented Generation)',
    titleId: 'RAG (Retrieval-Augmented Generation)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'LLMs are frozen in time based on their training data. They don\'t know about your company\'s internal documents or today\'s news. RAG solves this.',
        contentId: 'LLM dibekukan dalam waktu berdasarkan data pelatihan mereka. Mereka tidak tahu tentang dokumen internal perusahaan Anda atau berita hari ini. RAG memecahkan masalah ini.',
      },
      {
        type: 'text',
        content: 'RAG workflow: \n1. User asks a question.\n2. Your system searches a Vector Database for documents relevant to the question.\n3. Your system pastes those documents into the prompt.\n4. The AI reads the documents and answers the user.',
        contentId: 'Alur kerja RAG:\n1. Pengguna mengajukan pertanyaan.\n2. Sistem Anda mencari dokumen yang relevan dengan pertanyaan tersebut di Vector Database.\n3. Sistem Anda menempelkan (paste) dokumen-dokumen tersebut ke dalam prompt.\n4. AI membaca dokumen dan menjawab pengguna.',
      },
      {
        type: 'text',
        content: 'This guarantees the AI uses your factual, up-to-date, private data instead of hallucinating answers.',
        contentId: 'Ini menjamin AI menggunakan data privat Anda yang faktual dan mutakhir (up-to-date), alih-alih berhalusinasi mengarang jawaban.',
      },
    ],
  },
  {
    id: 'ai-m3-l3',
    courseId: 'ai',
    moduleId: 'ai-m3',
    title: 'AI Agents & Tool Calling',
    titleId: 'Agen AI & Tool Calling (Fungsi Alat)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Standard AI interactions are reactive: you ask, it answers. AI Agents are proactive. They are given a goal and can take actions to achieve it.',
        contentId: 'Interaksi AI standar bersifat reaktif: Anda bertanya, ia menjawab. Agen AI bersifat proaktif. Mereka diberi tujuan dan dapat mengambil tindakan untuk mencapainya.',
      },
      {
        type: 'text',
        content: 'This is achieved via "Tool Calling" (or Function Calling). You provide the AI with a list of functions it can run (e.g., `search_web`, `read_database`, `send_email`).',
        contentId: 'Hal ini dicapai melalui "Tool Calling" (Pemanggilan Alat/Fungsi). Anda memberi AI daftar fungsi yang dapat dijalankannya (misalnya, `search_web`, `read_database`, `send_email`).',
      },
      {
        type: 'text',
        content: 'When the AI realizes it needs more information, it pauses its response and tells your application to execute one of the tools. Your app runs the code and feeds the result back to the AI to continue its thinking process.',
        contentId: 'Ketika AI menyadari bahwa ia membutuhkan lebih banyak informasi, ia menjeda responsnya dan menyuruh aplikasi Anda untuk mengeksekusi salah satu alat (tool). Aplikasi Anda menjalankan kode tersebut dan memberikan hasilnya kembali ke AI untuk melanjutkan proses pemikirannya.',
      },
    ],
  },
];

export default lessons;
