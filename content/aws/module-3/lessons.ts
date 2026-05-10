import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'aws-m3-l1',
    courseId: 'aws',
    moduleId: 'aws-m3',
    title: 'Amazon S3 (Simple Storage Service)',
    titleId: 'Amazon S3 (Penyimpanan Sederhana)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Amazon S3 is an object storage service that offers industry-leading scalability, data availability, and security. It is perfect for storing files, backups, images, and videos.',
        contentId: 'Amazon S3 adalah layanan penyimpanan objek yang menawarkan skalabilitas, ketersediaan data, dan keamanan terdepan di industri. Sangat cocok untuk menyimpan file, cadangan (backup), gambar, dan video.',
      },
      {
        type: 'text',
        content: 'Data in S3 is stored in containers called "Buckets". Every object (file) in a bucket is identified by a unique key (filename). Bucket names must be globally unique across all AWS accounts.',
        contentId: 'Data di S3 disimpan dalam wadah yang disebut "Buckets". Setiap objek (file) dalam bucket diidentifikasi dengan kunci unik (nama file). Nama bucket harus unik secara global di seluruh akun AWS.',
      },
    ],
  },
  {
    id: 'aws-m3-l2',
    courseId: 'aws',
    moduleId: 'aws-m3',
    title: 'Static Website Hosting on S3',
    titleId: 'Hosting Web Statis di S3',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'You can use Amazon S3 to host a static website without needing a web server (like EC2). A static website consists only of HTML, CSS, JavaScript, and images.',
        contentId: 'Anda dapat menggunakan Amazon S3 untuk menghosting situs web statis tanpa memerlukan server web (seperti EC2). Situs web statis hanya terdiri dari HTML, CSS, JavaScript, dan gambar.',
      },
      {
        type: 'text',
        content: 'To do this, you enable "Static website hosting" on the bucket properties and attach a Bucket Policy that grants public read access to your objects.',
        contentId: 'Untuk melakukannya, Anda mengaktifkan "Static website hosting" pada properti bucket dan melampirkan Bucket Policy (Kebijakan Bucket) yang memberikan akses baca publik ke objek Anda.',
      },
      {
        type: 'text',
        content: 'It is highly cost-effective and automatically scales to handle any amount of web traffic!',
        contentId: 'Cara ini sangat hemat biaya dan berskala otomatis (auto-scales) untuk menangani jumlah lalu lintas web berapapun besarnya!',
      },
    ],
  },
  {
    id: 'aws-m3-l3',
    courseId: 'aws',
    moduleId: 'aws-m3',
    title: 'Amazon RDS (Relational Database)',
    titleId: 'Amazon RDS (Database Relasional)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Amazon Relational Database Service (RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It supports engines like MySQL, PostgreSQL, and SQL Server.',
        contentId: 'Amazon Relational Database Service (RDS) memudahkan pengaturan, pengoperasian, dan penskalaan database relasional di cloud. Layanan ini mendukung engine seperti MySQL, PostgreSQL, dan SQL Server.',
      },
      {
        type: 'text',
        content: 'Why use RDS instead of installing a database on EC2? RDS is "Managed". AWS automatically handles routine database tasks such as provisioning, patching, backup, recovery, and scaling.',
        contentId: 'Mengapa menggunakan RDS daripada menginstal database sendiri di EC2? RDS bersifat "Dikelola" (Managed). AWS secara otomatis menangani tugas database rutin seperti instalasi, pembaruan (patching), pencadangan, pemulihan, dan penskalaan.',
      },
      {
        type: 'text',
        content: 'This frees you up to focus on your application logic rather than database administration.',
        contentId: 'Hal ini membebaskan Anda agar dapat fokus pada logika aplikasi Anda daripada berurusan dengan administrasi server database.',
      },
    ],
  },
];

export default lessons;
