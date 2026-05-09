/**
 * CodeLab — Zustand Persist Storage Adapter
 * Platform-safe storage: AsyncStorage for native, localStorage for web
 */
import { Platform } from 'react-native';
import { type StateStorage } from 'zustand/middleware';

// Web-safe storage using localStorage
const webStorage: StateStorage = {
  getItem: (name: string) => {
    if (typeof window === 'undefined') return null;
    return window.localStorage.getItem(name) ?? null;
  },
  setItem: (name: string, value: string) => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(name, value);
  },
  removeItem: (name: string) => {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(name);
  },
};

// Native storage using AsyncStorage (lazy loaded)
const nativeStorage: StateStorage = {
  getItem: async (name: string) => {
    const AsyncStorage = (await import('@react-native-async-storage/async-storage')).default;
    const value = await AsyncStorage.getItem(name);
    return value ?? null;
  },
  setItem: async (name: string, value: string) => {
    const AsyncStorage = (await import('@react-native-async-storage/async-storage')).default;
    await AsyncStorage.setItem(name, value);
  },
  removeItem: async (name: string) => {
    const AsyncStorage = (await import('@react-native-async-storage/async-storage')).default;
    await AsyncStorage.removeItem(name);
  },
};

export const zustandStorage: StateStorage = Platform.OS === 'web' ? webStorage : nativeStorage;
