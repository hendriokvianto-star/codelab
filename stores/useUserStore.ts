/**
 * CodeLab — User Store (Zustand + Persist)
 * Manages XP, level, streak, badges, and overall progress
 * Data is persisted to AsyncStorage (native) / localStorage (web)
 */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Platform } from 'react-native';
import { getLevelFromXP, LEVELS } from '@/constants/Gamification';
import { zustandStorage } from '@/lib/storage';

interface UserStats {
  totalXP: number;
  level: number;
  streakDays: number;
  lastActiveDate: string | null;
  lessonsCompleted: number;
  challengesSolved: number;
  earnedBadges: string[];
  equippedBadge: string | null;
  hasCompletedOnboarding: boolean;
}

interface UserState extends UserStats {
  // Computed
  levelInfo: ReturnType<typeof getLevelFromXP>;
  currentStreak: number;

  // Actions
  addXP: (amount: number) => void;
  incrementLessonsCompleted: () => void;
  incrementChallengesSolved: () => void;
  updateStreak: () => void;
  loginToday: () => boolean;
  earnBadge: (badgeId: string) => void;
  equipBadge: (badgeId: string | null) => void;
  completeOnboarding: () => void;
  resetProgress: () => void;
}

const getToday = () => new Date().toISOString().split('T')[0];

const storeCreator = (set: any, get: any) => ({
  totalXP: 0,
  level: 1,
  streakDays: 0,
  lastActiveDate: null,
  lessonsCompleted: 0,
  challengesSolved: 0,
  earnedBadges: [] as string[],
  equippedBadge: null,
  hasCompletedOnboarding: false,

  get levelInfo() {
    return getLevelFromXP(get().totalXP);
  },

  get currentStreak() {
    const today = getToday();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    const lastActive = get().lastActiveDate;

    if (lastActive === today || lastActive === yesterdayStr) {
      return get().streakDays;
    }
    return 0;
  },

  addXP: (amount: number) =>
    set((state: UserStats) => {
      const newXP = state.totalXP + amount;
      const newLevelInfo = getLevelFromXP(newXP);
      return { totalXP: newXP, level: newLevelInfo.level };
    }),

  incrementLessonsCompleted: () =>
    set((state: UserStats) => ({ lessonsCompleted: state.lessonsCompleted + 1 })),

  incrementChallengesSolved: () =>
    set((state: UserStats) => ({ challengesSolved: state.challengesSolved + 1 })),

  updateStreak: () =>
    set((state: UserStats) => {
      const today = getToday();
      if (state.lastActiveDate === today) return state;
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      const newStreak = state.lastActiveDate === yesterdayStr ? state.streakDays + 1 : 1;
      return { streakDays: newStreak, lastActiveDate: today };
    }),

  loginToday: () => {
    const state = get();
    const today = getToday();
    if (state.lastActiveDate === today) return false;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    const newStreak = state.lastActiveDate === yesterdayStr ? state.streakDays + 1 : 1;

    set({ streakDays: newStreak, lastActiveDate: today });
    return true; // Return true if streak was updated today
  },

  earnBadge: (badgeId: string) =>
    set((state: UserStats) => {
      if (state.earnedBadges.includes(badgeId)) return state;
      // Auto equip if it's the first badge
      const newEquipped = state.equippedBadge === null ? badgeId : state.equippedBadge;
      return { earnedBadges: [...state.earnedBadges, badgeId], equippedBadge: newEquipped };
    }),

  equipBadge: (badgeId: string | null) =>
    set({ equippedBadge: badgeId }),

  completeOnboarding: () => set({ hasCompletedOnboarding: true }),

  resetProgress: () =>
    set({
      totalXP: 0,
      level: 1,
      streakDays: 0,
      lastActiveDate: null,
      lessonsCompleted: 0,
      challengesSolved: 0,
      earnedBadges: [],
      equippedBadge: null,
    }),
});

// Use persist only on native; on web, SSR can't access localStorage during rendering
export const useUserStore = Platform.OS === 'web'
  ? create<UserState>()(storeCreator as any)
  : create<UserState>()(
      persist(storeCreator as any, {
        name: 'codelab-user',
        storage: createJSONStorage(() => zustandStorage),
        partialize: (state: any) => ({
          totalXP: state.totalXP,
          level: state.level,
          streakDays: state.streakDays,
          lastActiveDate: state.lastActiveDate,
          lessonsCompleted: state.lessonsCompleted,
          challengesSolved: state.challengesSolved,
          earnedBadges: state.earnedBadges,
          equippedBadge: state.equippedBadge,
          hasCompletedOnboarding: state.hasCompletedOnboarding,
        }),
      })
    );
