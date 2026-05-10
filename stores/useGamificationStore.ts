/**
 * CodeLab — Gamification Store (Zustand + Persist)
 * Manages XP, level, streak, and badges
 */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Platform } from 'react-native';
import { getLevelFromXP, LEVELS } from '@/constants/Gamification';
import { zustandStorage } from '@/lib/storage';

interface GamificationStats {
  totalXP: number;
  level: number;
  streakDays: number;
  lastActiveDate: string | null;
  earnedBadges: string[];
  equippedBadge: string | null;
}

interface GamificationState extends GamificationStats {
  // Computed
  levelInfo: ReturnType<typeof getLevelFromXP>;
  currentStreak: number;

  // Actions
  addXP: (amount: number) => void;
  updateStreak: () => void;
  loginToday: () => boolean;
  earnBadge: (badgeId: string) => void;
  equipBadge: (badgeId: string | null) => void;
  resetGamification: () => void;
}

const getToday = () => new Date().toISOString().split('T')[0];

const storeCreator = (set: any, get: any) => ({
  totalXP: 0,
  level: 1,
  streakDays: 0,
  lastActiveDate: null,
  earnedBadges: [] as string[],
  equippedBadge: null,

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
    set((state: GamificationStats) => {
      const newXP = state.totalXP + amount;
      const newLevelInfo = getLevelFromXP(newXP);
      return { totalXP: newXP, level: newLevelInfo.level };
    }),

  updateStreak: () =>
    set((state: GamificationStats) => {
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
    return true; 
  },

  earnBadge: (badgeId: string) =>
    set((state: GamificationStats) => {
      if (state.earnedBadges.includes(badgeId)) return state;
      const newEquipped = state.equippedBadge === null ? badgeId : state.equippedBadge;
      return { earnedBadges: [...state.earnedBadges, badgeId], equippedBadge: newEquipped };
    }),

  equipBadge: (badgeId: string | null) =>
    set({ equippedBadge: badgeId }),

  resetGamification: () =>
    set({
      totalXP: 0,
      level: 1,
      streakDays: 0,
      lastActiveDate: null,
      earnedBadges: [],
      equippedBadge: null,
    }),
});

export const useGamificationStore = Platform.OS === 'web'
  ? create<GamificationState>()(storeCreator as any)
  : create<GamificationState>()(
      persist(storeCreator as any, {
        name: 'codelab-gamification',
        storage: createJSONStorage(() => zustandStorage),
        partialize: (state: any) => ({
          totalXP: state.totalXP,
          level: state.level,
          streakDays: state.streakDays,
          lastActiveDate: state.lastActiveDate,
          earnedBadges: state.earnedBadges,
          equippedBadge: state.equippedBadge,
        }),
      })
    );
