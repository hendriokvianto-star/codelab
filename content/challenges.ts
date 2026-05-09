/**
 * CodeLab — Arena Challenges Data
 * Daily and weekly coding challenges with test cases
 */

export interface ChallengeTestCase {
  input: string;
  expected: string;
}

export interface Challenge {
  id: string;
  title: string;
  titleId: string;
  description: string;
  descriptionId: string;
  difficulty: 'easy' | 'medium' | 'hard';
  xp: number;
  category: 'daily' | 'weekly' | 'practice';
  starterCode: string;
  testCases: ChallengeTestCase[];
  hint: string;
  hintId: string;
}

export const CHALLENGES: Challenge[] = [
  {
    id: 'ch-1',
    title: 'Hello Function',
    titleId: 'Fungsi Hello',
    description: 'Create a function called `greet` that takes a name and returns "Hello, {name}!"',
    descriptionId: 'Buat fungsi bernama `greet` yang menerima nama dan mengembalikan "Hello, {nama}!"',
    difficulty: 'easy',
    xp: 50,
    category: 'daily',
    starterCode: '// Create the greet function\nfunction greet(name) {\n  // Your code here\n}\n\n// Test\nconsole.log(greet("World"));\nconsole.log(greet("CodeLab"));',
    testCases: [
      { input: 'greet("World")', expected: 'Hello, World!' },
      { input: 'greet("CodeLab")', expected: 'Hello, CodeLab!' },
    ],
    hint: 'Use template literal: `Hello, ${name}!`',
    hintId: 'Gunakan template literal: `Hello, ${name}!`',
  },
  {
    id: 'ch-2',
    title: 'Sum Array',
    titleId: 'Jumlahkan Array',
    description: 'Create a function `sumArray` that returns the sum of all numbers in an array.',
    descriptionId: 'Buat fungsi `sumArray` yang mengembalikan jumlah semua angka dalam array.',
    difficulty: 'easy',
    xp: 50,
    category: 'daily',
    starterCode: 'function sumArray(arr) {\n  // Your code here\n}\n\nconsole.log(sumArray([1, 2, 3]));    // 6\nconsole.log(sumArray([10, 20, 30])); // 60',
    testCases: [
      { input: 'sumArray([1, 2, 3])', expected: '6' },
      { input: 'sumArray([10, 20, 30])', expected: '60' },
      { input: 'sumArray([])', expected: '0' },
    ],
    hint: 'Use reduce: arr.reduce((sum, n) => sum + n, 0)',
    hintId: 'Gunakan reduce: arr.reduce((sum, n) => sum + n, 0)',
  },
  {
    id: 'ch-3',
    title: 'FizzBuzz',
    titleId: 'FizzBuzz',
    description: 'Write a function `fizzBuzz(n)` that returns "Fizz" for multiples of 3, "Buzz" for multiples of 5, "FizzBuzz" for both, or the number itself.',
    descriptionId: 'Tulis fungsi `fizzBuzz(n)` yang mengembalikan "Fizz" untuk kelipatan 3, "Buzz" untuk kelipatan 5, "FizzBuzz" untuk keduanya, atau angka itu sendiri.',
    difficulty: 'easy',
    xp: 50,
    category: 'practice',
    starterCode: 'function fizzBuzz(n) {\n  // Your code here\n}\n\nconsole.log(fizzBuzz(3));  // "Fizz"\nconsole.log(fizzBuzz(5));  // "Buzz"\nconsole.log(fizzBuzz(15)); // "FizzBuzz"\nconsole.log(fizzBuzz(7));  // "7"',
    testCases: [
      { input: 'fizzBuzz(3)', expected: 'Fizz' },
      { input: 'fizzBuzz(5)', expected: 'Buzz' },
      { input: 'fizzBuzz(15)', expected: 'FizzBuzz' },
      { input: 'fizzBuzz(7)', expected: '7' },
    ],
    hint: 'Check divisible by 15 first (both 3 and 5)',
    hintId: 'Cek habis dibagi 15 dulu (kelipatan 3 dan 5)',
  },
  {
    id: 'ch-4',
    title: 'Reverse String',
    titleId: 'Balik String',
    description: 'Create a function `reverseString` that reverses a given string.',
    descriptionId: 'Buat fungsi `reverseString` yang membalik string yang diberikan.',
    difficulty: 'easy',
    xp: 50,
    category: 'practice',
    starterCode: 'function reverseString(str) {\n  // Your code here\n}\n\nconsole.log(reverseString("hello")); // "olleh"\nconsole.log(reverseString("CodeLab")); // "baLedoC"',
    testCases: [
      { input: 'reverseString("hello")', expected: 'olleh' },
      { input: 'reverseString("CodeLab")', expected: 'baLedoC' },
    ],
    hint: 'Use split("").reverse().join("")',
    hintId: 'Gunakan split("").reverse().join("")',
  },
  {
    id: 'ch-5',
    title: 'Find Maximum',
    titleId: 'Cari Nilai Terbesar',
    description: 'Write a function `findMax` that returns the largest number in an array WITHOUT using Math.max.',
    descriptionId: 'Tulis fungsi `findMax` yang mengembalikan angka terbesar dalam array TANPA menggunakan Math.max.',
    difficulty: 'medium',
    xp: 75,
    category: 'weekly',
    starterCode: 'function findMax(arr) {\n  // Your code here (don\'t use Math.max)\n}\n\nconsole.log(findMax([3, 7, 2, 9, 1])); // 9\nconsole.log(findMax([-5, -1, -8]));     // -1',
    testCases: [
      { input: 'findMax([3, 7, 2, 9, 1])', expected: '9' },
      { input: 'findMax([-5, -1, -8])', expected: '-1' },
      { input: 'findMax([42])', expected: '42' },
    ],
    hint: 'Use a loop and compare each element',
    hintId: 'Gunakan loop dan bandingkan setiap elemen',
  },
  {
    id: 'ch-6',
    title: 'Count Vowels',
    titleId: 'Hitung Huruf Vokal',
    description: 'Write a function `countVowels` that counts the number of vowels (a, e, i, o, u) in a string.',
    descriptionId: 'Tulis fungsi `countVowels` yang menghitung jumlah huruf vokal (a, e, i, o, u) dalam string.',
    difficulty: 'medium',
    xp: 75,
    category: 'weekly',
    starterCode: 'function countVowels(str) {\n  // Your code here\n}\n\nconsole.log(countVowels("hello"));   // 2\nconsole.log(countVowels("CodeLab")); // 3',
    testCases: [
      { input: 'countVowels("hello")', expected: '2' },
      { input: 'countVowels("CodeLab")', expected: '3' },
      { input: 'countVowels("xyz")', expected: '0' },
    ],
    hint: 'Use match() with regex /[aeiou]/gi',
    hintId: 'Gunakan match() dengan regex /[aeiou]/gi',
  },
  {
    id: 'ch-7',
    title: 'Palindrome Check',
    titleId: 'Cek Palindrom',
    description: 'Write a function `isPalindrome` that checks if a string is the same forwards and backwards (case insensitive).',
    descriptionId: 'Tulis fungsi `isPalindrome` yang mengecek apakah string sama jika dibaca dari depan dan belakang (abaikan huruf besar/kecil).',
    difficulty: 'medium',
    xp: 75,
    category: 'practice',
    starterCode: 'function isPalindrome(str) {\n  // Your code here\n}\n\nconsole.log(isPalindrome("racecar")); // true\nconsole.log(isPalindrome("Hello"));   // false\nconsole.log(isPalindrome("Level"));   // true',
    testCases: [
      { input: 'isPalindrome("racecar")', expected: 'true' },
      { input: 'isPalindrome("Hello")', expected: 'false' },
      { input: 'isPalindrome("Level")', expected: 'true' },
    ],
    hint: 'Convert to lowercase, reverse, then compare',
    hintId: 'Konversi ke huruf kecil, balik, lalu bandingkan',
  },
  {
    id: 'ch-8',
    title: 'Flatten Array',
    titleId: 'Ratakan Array',
    description: 'Write a function `flatten` that converts a nested array into a single flat array.',
    descriptionId: 'Tulis fungsi `flatten` yang mengubah array bersarang menjadi array datar.',
    difficulty: 'hard',
    xp: 100,
    category: 'weekly',
    starterCode: 'function flatten(arr) {\n  // Your code here\n}\n\nconsole.log(flatten([1, [2, 3], [4, [5, 6]]]));\n// [1, 2, 3, 4, 5, 6]',
    testCases: [
      { input: 'JSON.stringify(flatten([1, [2, 3], [4, [5, 6]]]))', expected: '[1,2,3,4,5,6]' },
      { input: 'JSON.stringify(flatten([[1], [2], [3]]))', expected: '[1,2,3]' },
    ],
    hint: 'Use recursion or arr.flat(Infinity)',
    hintId: 'Gunakan rekursi atau arr.flat(Infinity)',
  },
];

export function getDailyChallenges(): Challenge[] {
  return CHALLENGES.filter((c) => c.category === 'daily');
}

export function getWeeklyChallenges(): Challenge[] {
  return CHALLENGES.filter((c) => c.category === 'weekly');
}

export function getPracticeChallenges(): Challenge[] {
  return CHALLENGES.filter((c) => c.category === 'practice');
}

export function getChallenge(id: string): Challenge | undefined {
  return CHALLENGES.find((c) => c.id === id);
}
