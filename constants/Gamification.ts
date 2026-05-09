/**
 * CodeLab — Gamification Constants
 * XP rewards, level thresholds, and badge definitions
 */

// XP reward values for different actions
export const XP_REWARDS = {
  COMPLETE_LESSON: 25,
  CORRECT_QUIZ: 10,
  COMPLETE_CHALLENGE: 50,
  COMPLETE_MODULE: 100,
  DAILY_STREAK: 15,
  COMPLETE_PROJECT: 200,
} as const;

// Level system configuration
export const LEVELS = [
  { level: 1, xpRequired: 0, title: 'Newbie', titleId: 'Pemula', emoji: '🌱' },
  { level: 2, xpRequired: 100, title: 'Apprentice', titleId: 'Murid', emoji: '📖' },
  { level: 3, xpRequired: 300, title: 'Coder', titleId: 'Koder', emoji: '💻' },
  { level: 4, xpRequired: 600, title: 'Developer', titleId: 'Pengembang', emoji: '⚙️' },
  { level: 5, xpRequired: 1000, title: 'Engineer', titleId: 'Insinyur', emoji: '🔧' },
  { level: 6, xpRequired: 1500, title: 'Architect', titleId: 'Arsitek', emoji: '🏗️' },
  { level: 7, xpRequired: 2500, title: 'Master', titleId: 'Master', emoji: '🎓' },
  { level: 8, xpRequired: 4000, title: 'Grandmaster', titleId: 'Grandmaster', emoji: '👑' },
  { level: 9, xpRequired: 6000, title: 'Legend', titleId: 'Legenda', emoji: '⭐' },
  { level: 10, xpRequired: 10000, title: 'CodeLab Hero', titleId: 'Pahlawan CodeLab', emoji: '🏆' },
] as const;

// Badge definitions
export const BADGES = {
  FIRST_FLAME: {
    id: 'first_flame',
    name: 'First Flame',
    nameId: 'Api Pertama',
    description: 'Complete your first lesson',
    descriptionId: 'Selesaikan pelajaran pertamamu',
    emoji: '🔥',
  },
  WEEK_WARRIOR: {
    id: 'week_warrior',
    name: 'Week Warrior',
    nameId: 'Pejuang Mingguan',
    description: '7-day learning streak',
    descriptionId: 'Streak belajar 7 hari berturut-turut',
    emoji: '📅',
  },
  MONTH_MASTER: {
    id: 'month_master',
    name: 'Month Master',
    nameId: 'Penguasa Bulanan',
    description: '30-day learning streak',
    descriptionId: 'Streak belajar 30 hari berturut-turut',
    emoji: '🏔️',
  },
  SPEED_CODER: {
    id: 'speed_coder',
    name: 'Speed Coder',
    nameId: 'Koder Kilat',
    description: 'Complete a challenge in under 2 minutes',
    descriptionId: 'Selesaikan tantangan dalam waktu kurang dari 2 menit',
    emoji: '⚡',
  },
  JS_STARTER: {
    id: 'js_starter',
    name: 'JS Starter',
    nameId: 'Pemula JS',
    description: 'Complete JavaScript Module 1',
    descriptionId: 'Selesaikan Module 1 JavaScript',
    emoji: '📘',
  },
  LARAVEL_STARTER: {
    id: 'laravel_starter',
    name: 'Laravel Starter',
    nameId: 'Pemula Laravel',
    description: 'Complete Laravel Module 1',
    descriptionId: 'Selesaikan Module 1 Laravel',
    emoji: '📗',
  },
  JS_MASTER: {
    id: 'js_master',
    name: 'JS Master',
    nameId: 'Master JS',
    description: 'Complete all JavaScript modules',
    descriptionId: 'Selesaikan semua module JavaScript',
    emoji: '🏆',
  },
  LARAVEL_MASTER: {
    id: 'laravel_master',
    name: 'Laravel Master',
    nameId: 'Master Laravel',
    description: 'Complete all Laravel modules',
    descriptionId: 'Selesaikan semua module Laravel',
    emoji: '🏆',
  },
  HTML_STARTER: {
    id: 'html_starter',
    name: 'HTML Starter',
    nameId: 'Pemula HTML',
    description: 'Complete HTML Module 1',
    descriptionId: 'Selesaikan Module 1 HTML',
    emoji: '📄',
  },
  CSS_STARTER: {
    id: 'css_starter',
    name: 'CSS Starter',
    nameId: 'Pemula CSS',
    description: 'Complete CSS Module 1',
    descriptionId: 'Selesaikan Module 1 CSS',
    emoji: '🎨',
  },
  HTML_ARCHITECT: {
    id: 'html_architect',
    name: 'HTML Architect',
    nameId: 'Arsitek HTML',
    description: 'Complete all HTML modules',
    descriptionId: 'Selesaikan semua module HTML',
    emoji: '🏗️',
  },
  CSS_GURU: {
    id: 'css_guru',
    name: 'CSS Guru',
    nameId: 'Guru CSS',
    description: 'Complete all CSS modules',
    descriptionId: 'Selesaikan semua module CSS',
    emoji: '🖌️',
  },
  WEB_MASTER: {
    id: 'web_master',
    name: 'Web Master',
    nameId: 'Master Web',
    description: 'Complete HTML, CSS, and JavaScript',
    descriptionId: 'Selesaikan semua module HTML, CSS, dan JS',
    emoji: '🌐',
  },
  PERFECT_SCORE: {
    id: 'perfect_score',
    name: 'Perfect Score',
    nameId: 'Nilai Sempurna',
    description: 'Answer all quiz questions correctly in one module',
    descriptionId: 'Jawab semua pertanyaan quiz dengan benar dalam 1 module',
    emoji: '💯',
  },
  COLLECTOR: {
    id: 'collector',
    name: 'Collector',
    nameId: 'Kolektor',
    description: 'Earn 10 badges',
    descriptionId: 'Kumpulkan 10 badge',
    emoji: '🌟',
  },
} as const;

/**
 * Get level info from XP amount
 */
export function getLevelFromXP(xp: number) {
  let currentLevel: typeof LEVELS[number] = LEVELS[0];
  for (const level of LEVELS) {
    if (xp >= level.xpRequired) {
      currentLevel = level;
    } else {
      break;
    }
  }
  const nextLevel = LEVELS.find((l) => l.level === currentLevel.level + 1);
  const xpForNext = nextLevel ? nextLevel.xpRequired - xp : 0;
  const progress = nextLevel
    ? (xp - currentLevel.xpRequired) / (nextLevel.xpRequired - currentLevel.xpRequired)
    : 1;

  return {
    ...currentLevel,
    xpForNextLevel: xpForNext,
    progress: Math.min(Math.max(progress, 0), 1),
    isMaxLevel: !nextLevel,
  };
}
