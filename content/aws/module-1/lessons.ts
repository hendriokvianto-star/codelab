import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'aws-m1-l1',
    courseId: 'aws',
    moduleId: 'aws-m1',
    title: 'What is Cloud Computing?',
    titleId: 'Apa itu Cloud Computing?',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing. Instead of buying physical servers, you rent computing power and storage from a cloud provider like Amazon Web Services (AWS).',
        contentId: 'Cloud computing adalah penyediaan sumber daya TI sesuai permintaan melalui internet dengan harga bayar-sesuai-pemakaian. Daripada membeli server fisik, Anda menyewa daya komputasi dan penyimpanan dari penyedia cloud seperti Amazon Web Services (AWS).',
      },
      {
        type: 'text',
        content: 'There are 3 main service models: IaaS (Infrastructure as a Service), PaaS (Platform as a Service), and SaaS (Software as a Service).',
        contentId: 'Ada 3 model layanan utama: IaaS (Infrastruktur sebagai Layanan), PaaS (Platform sebagai Layanan), dan SaaS (Perangkat Lunak sebagai Layanan).',
      },
    ],
  },
  {
    id: 'aws-m1-l2',
    courseId: 'aws',
    moduleId: 'aws-m1',
    title: 'AWS Global Infrastructure',
    titleId: 'Infrastruktur Global AWS',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'AWS operates a massive global infrastructure consisting of Regions and Availability Zones (AZs).',
        contentId: 'AWS mengoperasikan infrastruktur global masif yang terdiri dari Region (Wilayah) dan Availability Zone / AZ (Zona Ketersediaan).',
      },
      {
        type: 'text',
        content: 'A Region is a physical location in the world where AWS has multiple data centers. An Availability Zone is one or more discrete data centers with redundant power and networking within a Region.',
        contentId: 'Region adalah lokasi fisik di dunia tempat AWS memiliki beberapa pusat data. Availability Zone adalah satu atau beberapa pusat data terpisah dengan daya dan jaringan redundan di dalam sebuah Region.',
      },
      {
        type: 'text',
        content: 'When deploying an application, you should choose a Region closest to your users to reduce latency (delay). For example, `ap-southeast-1` is the Singapore region, ideal for Indonesian users.',
        contentId: 'Saat me-deploy aplikasi, Anda harus memilih Region yang paling dekat dengan pengguna Anda untuk mengurangi latensi (jeda). Contohnya, `ap-southeast-1` adalah region Singapura, sangat ideal untuk pengguna di Indonesia.',
      },
    ],
  },
  {
    id: 'aws-m1-l3',
    courseId: 'aws',
    moduleId: 'aws-m1',
    title: 'IAM (Identity & Access Management)',
    titleId: 'IAM (Identitas & Akses)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'AWS Identity and Access Management (IAM) enables you to manage access to AWS services securely. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.',
        contentId: 'AWS Identity and Access Management (IAM) memungkinkan Anda mengelola akses ke layanan AWS dengan aman. Anda menggunakan IAM untuk mengontrol siapa yang diautentikasi (login) dan diotorisasi (memiliki izin) untuk menggunakan sumber daya.',
      },
      {
        type: 'text',
        content: 'Security Best Practice: Never use your AWS account Root User for daily tasks. Instead, create an IAM User with only the specific permissions needed (Principle of Least Privilege).',
        contentId: 'Praktik Terbaik Keamanan: Jangan pernah menggunakan Root User (akun utama) AWS Anda untuk tugas sehari-hari. Sebaiknya, buat IAM User (Pengguna IAM) dengan hanya izin khusus yang diperlukan (Prinsip Hak Akses Terkecil / Least Privilege).',
      },
      {
        type: 'text',
        content: 'You can organize Users into Groups, and attach Policies (JSON documents defining permissions) to those groups.',
        contentId: 'Anda dapat mengatur Users ke dalam Groups (Grup), dan melampirkan Policies (dokumen JSON yang mendefinisikan izin) ke grup tersebut.',
      },
    ],
  },
];

export default lessons;
