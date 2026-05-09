import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'mongodb-m3-l1',
    courseId: 'mongodb',
    moduleId: 'mongodb-m3',
    title: 'Advanced Query Operators',
    titleId: 'Operator Query Lanjutan',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'MongoDB provides powerful operators to filter data. For example, `$gt` (greater than), `$lt` (less than), and `$in` (matches any value in an array).',
        contentId: 'MongoDB menyediakan operator yang kuat untuk memfilter data. Misalnya, `$gt` (lebih besar dari), `$lt` (lebih kecil dari), dan `$in` (cocok dengan nilai apa pun dalam array).',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// Find users older than 25\ndb.users.find({ age: { $gt: 25 } });\n\n// Find users with specific names\ndb.users.find({ name: { $in: ["Budi", "Siti"] } });\n\n// Logical OR: age < 20 OR age > 30\ndb.users.find({\n  $or: [\n    { age: { $lt: 20 } },\n    { age: { $gt: 30 } }\n  ]\n});',
      },
    ],
  },
  {
    id: 'mongodb-m3-l2',
    courseId: 'mongodb',
    moduleId: 'mongodb-m3',
    title: 'Database Indexes',
    titleId: 'Pengenalan Indexes',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Indexes are special data structures that store a small portion of the collection\'s data set in an easy-to-traverse form. Without indexes, MongoDB must perform a "collection scan", scanning every document to select those that match the query statement.',
        contentId: 'Index adalah struktur data khusus yang menyimpan sebagian kecil dari kumpulan data koleksi dalam bentuk yang mudah ditelusuri. Tanpa index, MongoDB harus melakukan "pemindaian koleksi", memindai setiap dokumen untuk memilih dokumen yang cocok dengan pernyataan kueri.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: '// Create an index on the "name" field\ndb.users.createIndex({ name: 1 });\n\n// 1 specifies ascending order, -1 specifies descending',
      },
      {
        type: 'text',
        content: 'Creating indexes on frequently queried fields dramatically improves read performance, though it slightly slows down write operations.',
        contentId: 'Membuat index pada kolom yang sering dicari secara dramatis meningkatkan kinerja pembacaan, meskipun akan sedikit memperlambat operasi penulisan (write).',
      },
    ],
  },
  {
    id: 'mongodb-m3-l3',
    courseId: 'mongodb',
    moduleId: 'mongodb-m3',
    title: 'Aggregation Pipeline',
    titleId: 'Aggregation Pipeline',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'The aggregation pipeline is a framework for data aggregation. Documents enter a multi-stage pipeline that transforms them into aggregated results.',
        contentId: 'Aggregation pipeline adalah kerangka kerja untuk agregasi data. Dokumen memasuki pipa multi-tahap yang mengubahnya menjadi hasil gabungan/rekap.',
      },
      {
        type: 'code',
        language: 'javascript',
        content: 'db.orders.aggregate([\n  // Stage 1: Filter to only include completed orders\n  { $match: { status: "completed" } },\n  \n  // Stage 2: Group by customer ID and calculate total sum\n  { $group: {\n      _id: "$customerId",\n      totalSpent: { $sum: "$amount" }\n    }\n  }\n]);',
      },
      {
        type: 'text',
        content: 'Common stages include `$match` (filters data), `$group` (groups data), `$sort`, and `$project` (selects specific fields).',
        contentId: 'Tahapan (stages) umum meliputi `$match` (menyaring data), `$group` (mengelompokkan data), `$sort`, dan `$project` (memilih kolom tertentu).',
      },
    ],
  },
];

export default lessons;
