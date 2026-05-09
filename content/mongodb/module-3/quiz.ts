import type { QuizData } from '../../index';

const quiz: QuizData = {
  id: 'mongodb-m3-quiz',
  moduleId: 'mongodb-m3',
  courseId: 'mongodb',
  title: 'Quiz: Advanced Query & Aggregation',
  titleId: 'Kuis: Query Lanjutan & Agregasi',
  questions: [
    {
      id: 'q1',
      question: 'Which query operator is used to find values greater than a specified value?',
      questionId: 'Operator kueri manakah yang digunakan untuk mencari nilai yang lebih besar dari nilai yang ditentukan?',
      options: [
        '$greater',
        '$gt',
        '$in',
        '$large'
      ],
      optionsId: [
        '$greater',
        '$gt',
        '$in',
        '$large'
      ],
      correctIndex: 1,
      explanation: 'The `$gt` (greater than) operator matches values that are greater than a specified value.',
      explanationId: 'Operator `$gt` (greater than) cocok dengan nilai yang lebih besar dari nilai yang ditentukan.',
    },
    {
      id: 'q2',
      question: 'Why are Indexes important in MongoDB?',
      questionId: 'Mengapa Index penting di MongoDB?',
      options: [
        'They compress the database to save disk space',
        'They prevent documents from being deleted',
        'They improve the speed of read/search queries',
        'They automatically translate JSON to SQL'
      ],
      optionsId: [
        'Index mengompresi database untuk menghemat ruang disk',
        'Index mencegah dokumen dihapus',
        'Index meningkatkan kecepatan kueri baca/pencarian',
        'Index secara otomatis menerjemahkan JSON ke SQL'
      ],
      correctIndex: 2,
      explanation: 'Indexes allow MongoDB to quickly locate documents without having to scan every document in a collection.',
      explanationId: 'Index memungkinkan MongoDB untuk menemukan dokumen dengan cepat tanpa harus memindai setiap dokumen dalam sebuah koleksi.',
    },
    {
      id: 'q3',
      question: 'In the Aggregation Pipeline, which stage acts similarly to the WHERE clause in SQL?',
      questionId: 'Dalam Aggregation Pipeline, tahapan (stage) manakah yang bertindak mirip dengan klausa WHERE pada SQL?',
      options: [
        '$group',
        '$project',
        '$sort',
        '$match'
      ],
      optionsId: [
        '$group',
        '$project',
        '$sort',
        '$match'
      ],
      correctIndex: 3,
      explanation: 'The `$match` stage filters the documents to pass only the documents that match the specified condition(s) to the next pipeline stage.',
      explanationId: 'Tahapan `$match` memfilter dokumen untuk meneruskan hanya dokumen yang cocok dengan kondisi yang ditentukan ke tahap pipa berikutnya.',
    }
  ],
  xpPerQuestion: 100,
};

export default quiz;
