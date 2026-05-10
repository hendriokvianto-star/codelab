/**
 * CodeLab — Badge Engine
 * Checks conditions and auto-awards badges after user actions.
 * Call checkBadges() after XP gain, lesson complete, streak update, etc.
 */
import { BADGES } from '@/constants/Gamification';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { useUserStore } from '@/stores/useUserStore';
import { useLessonStore } from '@/stores/useLessonStore';
import { getCourseMeta, getModuleLessons } from '@/content/index';

export type BadgeNotification = {
  id: string;
  emoji: string;
  name: string;
  nameId: string;
};

/**
 * Run all badge checks and return any newly earned badges.
 */
export function checkBadges(): BadgeNotification[] {
  const userState = useUserStore.getState();
  const gamificationState = useGamificationStore.getState();
  const lessonState = useLessonStore.getState();
  const earned = gamificationState.earnedBadges;
  const newBadges: BadgeNotification[] = [];

  const tryAward = (badge: typeof BADGES[keyof typeof BADGES]) => {
    if (!earned.includes(badge.id)) {
      useGamificationStore.getState().earnBadge(badge.id);
      newBadges.push({ id: badge.id, emoji: badge.emoji, name: badge.name, nameId: badge.nameId });
    }
  };

  // 🔥 First Flame — complete first lesson
  if (userState.lessonsCompleted >= 1) {
    tryAward(BADGES.FIRST_FLAME);
  }

  // 📅 Week Warrior — 7-day streak
  if (gamificationState.streakDays >= 7) {
    tryAward(BADGES.WEEK_WARRIOR);
  }

  // 🏔️ Month Master — 30-day streak
  if (gamificationState.streakDays >= 30) {
    tryAward(BADGES.MONTH_MASTER);
  }

  // 📘 JS Starter — complete JS Module 1
  if (isModuleComplete('javascript', 'js-m1', lessonState)) {
    tryAward(BADGES.JS_STARTER);
  }

  // 📗 Laravel Starter — complete Laravel Module 1
  if (isModuleComplete('laravel', 'lv-m1', lessonState)) {
    tryAward(BADGES.LARAVEL_STARTER);
  }

  // 🏆 JS Master — complete all JS modules (m1-m3 for now)
  if (['js-m1', 'js-m2', 'js-m3'].every((m) => isModuleComplete('javascript', m, lessonState))) {
    tryAward(BADGES.JS_MASTER);
  }

  // 🏆 Laravel Master — complete all Laravel modules (m1-m3 for now)
  if (['lv-m1', 'lv-m2', 'lv-m3'].every((m) => isModuleComplete('laravel', m, lessonState))) {
    tryAward(BADGES.LARAVEL_MASTER);
  }

  // 🌟 Collector — earn 10 badges
  if (useGamificationStore.getState().earnedBadges.length >= 10) {
    tryAward(BADGES.COLLECTOR);
  }

  return newBadges;
}

function isModuleComplete(courseId: string, moduleId: string, lessonState: ReturnType<typeof useLessonStore.getState>): boolean {
  const lessons = getModuleLessons(courseId, moduleId);
  if (lessons.length === 0) return false;
  return lessons.every((l) => lessonState.getLessonStatus(courseId, moduleId, l.id) === 'completed');
}
