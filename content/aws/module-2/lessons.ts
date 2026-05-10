import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'aws-m2-l1',
    courseId: 'aws',
    moduleId: 'aws-m2',
    title: 'Introduction to Amazon EC2',
    titleId: 'Pengenalan Amazon EC2',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the AWS Cloud. It allows you to rent virtual machines (instances) instead of buying hardware.',
        contentId: 'Amazon Elastic Compute Cloud (Amazon EC2) menyediakan kapasitas komputasi yang dapat diskalakan di AWS Cloud. Layanan ini memungkinkan Anda menyewa mesin virtual (instance) daripada membeli perangkat keras fisik.',
      },
      {
        type: 'text',
        content: 'When launching an EC2 instance, you must select an Amazon Machine Image (AMI), which dictates the Operating System (like Ubuntu Linux, Windows Server, or Amazon Linux).',
        contentId: 'Saat meluncurkan instance EC2, Anda harus memilih Amazon Machine Image (AMI), yang menentukan Sistem Operasi (seperti Ubuntu Linux, Windows Server, atau Amazon Linux).',
      },
      {
        type: 'text',
        content: 'You also select an Instance Type, which determines the CPU, RAM, and network capacity. The `t2.micro` type is widely used for learning as it falls under the AWS Free Tier.',
        contentId: 'Anda juga memilih Tipe Instance (Instance Type), yang menentukan kapasitas CPU, RAM, dan jaringan. Tipe `t2.micro` sangat banyak digunakan untuk pembelajaran karena masuk dalam AWS Free Tier (Tier Gratis AWS).',
      },
    ],
  },
  {
    id: 'aws-m2-l2',
    courseId: 'aws',
    moduleId: 'aws-m2',
    title: 'Security Groups (Virtual Firewalls)',
    titleId: 'Security Groups (Firewall Virtual)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'A Security Group acts as a virtual firewall for your EC2 instances to control incoming (inbound) and outgoing (outbound) traffic.',
        contentId: 'Security Group bertindak sebagai firewall virtual untuk instance EC2 Anda guna mengontrol lalu lintas yang masuk (inbound) dan keluar (outbound).',
      },
      {
        type: 'text',
        content: 'By default, a new Security Group blocks all incoming traffic and allows all outgoing traffic. You must explicitly create Inbound Rules to allow traffic to reach your server.',
        contentId: 'Secara bawaan (default), Security Group baru memblokir semua lalu lintas masuk dan mengizinkan semua lalu lintas keluar. Anda harus secara eksplisit membuat Inbound Rules (Aturan Masuk) agar lalu lintas bisa mencapai server Anda.',
      },
      {
        type: 'text',
        content: 'Common ports to open: Port 22 (for SSH remote access), Port 80 (for HTTP web traffic), and Port 443 (for secure HTTPS web traffic).',
        contentId: 'Port umum yang biasa dibuka: Port 22 (untuk akses remote SSH), Port 80 (untuk lalu lintas web HTTP), dan Port 443 (untuk lalu lintas web HTTPS yang aman).',
      },
    ],
  },
  {
    id: 'aws-m2-l3',
    courseId: 'aws',
    moduleId: 'aws-m2',
    title: 'Connecting to EC2 (SSH)',
    titleId: 'Terhubung ke EC2 (SSH)',
    xp: 30,
    theory: [
      {
        type: 'text',
        content: 'To securely connect to your Linux EC2 instance from your computer, you use SSH (Secure Shell) along with a Key Pair.',
        contentId: 'Untuk terhubung dengan aman ke instance Linux EC2 Anda dari komputer, Anda menggunakan protokol SSH (Secure Shell) bersama dengan sebuah Key Pair.',
      },
      {
        type: 'text',
        content: 'A Key Pair consists of a public key that AWS stores on your instance, and a private key (`.pem` file) that you download and store securely on your computer.',
        contentId: 'Key Pair terdiri dari kunci publik yang disimpan AWS di instance Anda, dan kunci privat (file `.pem`) yang Anda unduh dan simpan dengan aman di komputer Anda.',
      },
      {
        type: 'code',
        language: 'bash',
        content: '# Example of connecting via SSH in terminal\nssh -i "my-key-pair.pem" ec2-user@54.123.45.67',
      },
    ],
  },
];

export default lessons;
