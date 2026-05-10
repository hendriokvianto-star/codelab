/**
 * CodeLab — User Store (Zustand + Persist)
 * Manages onboarding, lessons, and challenges progress
 * Data is persisted to AsyncStorage (native) / localStorage (web)
 */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Platform } from 'react-native';
import { zustandStorage } from '@/lib/storage';

interface UserStats {
  lessonsCompleted: number;
  challengesSolved: number;
  hasCompletedOnboarding: boolean;
}

interface UserState extends UserStats {
  // Actions
  incrementLessonsCompleted: () => void;
  incrementChallengesSolved: () => void;
  completeOnboarding: () => void;
  resetProgress: () => void;
}

const storeCreator = (set: any, get: any) => ({
  lessonsCompleted: 0,
  challengesSolved: 0,
  hasCompletedOnboarding: false,

  incrementLessonsCompleted: () =>
    set((state: UserStats) => ({ lessonsCompleted: state.lessonsCompleted + 1 })),

  incrementChallengesSolved: () =>
    set((state: UserStats) => ({ challengesSolved: state.challengesSolved + 1 })),

  completeOnboarding: () => set({ hasCompletedOnboarding: true }),

  resetProgress: () =>
    set({
      lessonsCompleted: 0,
      challengesSolved: 0,
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
          lessonsCompleted: state.lessonsCompleted,
          challengesSolved: state.challengesSolved,
          hasCompletedOnboarding: state.hasCompletedOnboarding,
        }),
      })
    );
