import type { LessonData } from '../../index';

const lessons: LessonData[] = [
  {
    id: 'html-m3-l1',
    courseId: 'html',
    moduleId: 'html-m3',
    title: 'HTML Forms',
    titleId: 'Form HTML',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'The <form> element is used to collect user input. The user input is most often sent to a server for processing.',
        contentId: 'Elemen <form> digunakan untuk mengumpulkan input dari pengguna. Input ini paling sering dikirim ke server untuk diproses.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<form action="/submit.php">\n  <!-- Input fields go here -->\n</form>',
      },
    ],
    practiceCode: '<!-- Buat tag <form> yang membungkus teks "Hello" -->\n\n',
    practiceHint: 'Use <form>',
    practiceHintId: 'Gunakan <form>',
  },
  {
    id: 'html-m3-l2',
    courseId: 'html',
    moduleId: 'html-m3',
    title: 'Input Types',
    titleId: 'Tipe Input',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'The <input> element is the most used form element. It can be displayed in many ways, depending on the type attribute.',
        contentId: 'Elemen <input> adalah elemen form yang paling sering digunakan. Dapat ditampilkan dalam banyak cara, tergantung pada atribut type.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<input type="text" placeholder="Name">\n<input type="email" placeholder="Email">\n<input type="password" placeholder="Password">',
      },
    ],
    practiceCode: '<!-- Buat input dengan tipe "password" -->\n<input type="">',
    practiceHint: 'type="password"',
    practiceHintId: 'type="password"',
  },
  {
    id: 'html-m3-l3',
    courseId: 'html',
    moduleId: 'html-m3',
    title: 'Labels & Buttons',
    titleId: 'Label & Tombol',
    xp: 25,
    theory: [
      {
        type: 'text',
        content: 'The <label> element defines a label for several form elements. The <button> element is a clickable button.',
        contentId: 'Elemen <label> mendefinisikan label untuk elemen form. Elemen <button> adalah tombol yang dapat diklik.',
      },
      {
        type: 'code',
        language: 'html',
        content: '<label for="uname">Username:</label>\n<input type="text" id="uname" name="uname">\n<button type="submit">Submit</button>',
      },
    ],
    practiceCode: '<!-- Buat sebuah tag <button> dengan teks "Kirim" -->\n\n',
    practiceHint: '<button>Kirim</button>',
    practiceHintId: '<button>Kirim</button>',
  }
];

export default lessons;
