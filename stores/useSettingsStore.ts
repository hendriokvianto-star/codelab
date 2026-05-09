/**
 * CodeLab — Settings Store (Zustand + Persist)
 * Manages user preferences: language, theme, etc.
 * Persist on native only (web uses in-memory for SSR compatibility)
 */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Platform } from 'react-native';
import type { Language } from '@/constants/i18n';
import { zustandStorage } from '@/lib/storage';

interface SettingsState {
  language: Language;
  isDarkMode: boolean;
  soundEnabled: boolean;
  notificationsEnabled: boolean;

  setLanguage: (lang: Language) => void;
  toggleDarkMode: () => void;
  toggleSound: () => void;
  toggleNotifications: () => void;
}

const storeCreator = (set: any) => ({
  language: 'id' as Language,
  isDarkMode: true,
  soundEnabled: true,
  notificationsEnabled: true,

  setLanguage: (lang: Language) => set({ language: lang }),
  toggleDarkMode: () => set((state: any) => ({ isDarkMode: !state.isDarkMode })),
  toggleSound: () => set((state: any) => ({ soundEnabled: !state.soundEnabled })),
  toggleNotifications: () => set((state: any) => ({ notificationsEnabled: !state.notificationsEnabled })),
});

export const useSettingsStore = Platform.OS === 'web'
  ? create<SettingsState>()(storeCreator as any)
  : create<SettingsState>()(
      persist(storeCreator as any, {
        name: 'codelab-settings',
        storage: createJSONStorage(() => zustandStorage),
      })
    );
