/**
 * CodeLab — Lesson Store (Zustand + Persist)
 * Manages course progress, bookmarks, and notes
 * Persist on native only (web uses in-memory for SSR compatibility)
 */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Platform } from 'react-native';
import { zustandStorage } from '@/lib/storage';

export interface LessonProgress {
  courseId: string;
  moduleId: string;
  lessonId: string;
  status: 'locked' | 'active' | 'completed';
  score: number;
  completedAt: string | null;
}

export interface Bookmark {
  courseId: string;
  lessonId: string;
  createdAt: string;
}

export interface Note {
  id: string;
  courseId: string;
  lessonId: string;
  content: string;
  updatedAt: string;
}

interface LessonState {
  progress: Record<string, LessonProgress>;
  bookmarks: Bookmark[];
  notes: Note[];
  currentCourse: string | null;
  currentModule: string | null;
  currentLesson: string | null;

  setCurrentPath: (courseId: string, moduleId: string, lessonId: string) => void;
  completeLesson: (courseId: string, moduleId: string, lessonId: string, score: number) => void;
  unlockLesson: (courseId: string, moduleId: string, lessonId: string) => void;
  addBookmark: (courseId: string, lessonId: string) => void;
  removeBookmark: (courseId: string, lessonId: string) => void;
  isBookmarked: (courseId: string, lessonId: string) => boolean;
  addNote: (courseId: string, lessonId: string, content: string) => void;
  deleteNote: (noteId: string) => void;
  getLessonStatus: (courseId: string, moduleId: string, lessonId: string) => LessonProgress['status'];
  getModuleProgress: (courseId: string, moduleId: string) => number;
  getCourseProgress: (courseId: string) => number;
}

const storeCreator = (set: any, get: any) => ({
  progress: {} as Record<string, LessonProgress>,
  bookmarks: [] as Bookmark[],
  notes: [] as Note[],
  currentCourse: null,
  currentModule: null,
  currentLesson: null,

  setCurrentPath: (courseId: string, moduleId: string, lessonId: string) =>
    set({ currentCourse: courseId, currentModule: moduleId, currentLesson: lessonId }),

  completeLesson: (courseId: string, moduleId: string, lessonId: string, score: number) =>
    set((state: any) => {
      const key = `${courseId}/${moduleId}/${lessonId}`;
      return {
        progress: {
          ...state.progress,
          [key]: { courseId, moduleId, lessonId, status: 'completed', score, completedAt: new Date().toISOString() },
        },
      };
    }),

  unlockLesson: (courseId: string, moduleId: string, lessonId: string) =>
    set((state: any) => {
      const key = `${courseId}/${moduleId}/${lessonId}`;
      if (state.progress[key]?.status === 'completed') return state;
      return {
        progress: {
          ...state.progress,
          [key]: { courseId, moduleId, lessonId, status: 'active', score: 0, completedAt: null },
        },
      };
    }),

  addBookmark: (courseId: string, lessonId: string) =>
    set((state: any) => ({
      bookmarks: [...state.bookmarks, { courseId, lessonId, createdAt: new Date().toISOString() }],
    })),

  removeBookmark: (courseId: string, lessonId: string) =>
    set((state: any) => ({
      bookmarks: state.bookmarks.filter((b: Bookmark) => !(b.courseId === courseId && b.lessonId === lessonId)),
    })),

  isBookmarked: (courseId: string, lessonId: string) => {
    return get().bookmarks.some((b: Bookmark) => b.courseId === courseId && b.lessonId === lessonId);
  },

  addNote: (courseId: string, lessonId: string, content: string) =>
    set((state: any) => ({
      notes: [...state.notes, { id: `${Date.now()}`, courseId, lessonId, content, updatedAt: new Date().toISOString() }],
    })),

  deleteNote: (noteId: string) =>
    set((state: any) => ({
      notes: state.notes.filter((n: Note) => n.id !== noteId),
    })),

  getLessonStatus: (courseId: string, moduleId: string, lessonId: string) => {
    const key = `${courseId}/${moduleId}/${lessonId}`;
    return get().progress[key]?.status || 'locked';
  },

  getModuleProgress: (courseId: string, moduleId: string) => {
    const progress = get().progress;
    const moduleKeys = Object.keys(progress).filter((k: string) => k.startsWith(`${courseId}/${moduleId}/`));
    if (moduleKeys.length === 0) return 0;
    const completed = moduleKeys.filter((k: string) => progress[k].status === 'completed').length;
    return completed / moduleKeys.length;
  },

  getCourseProgress: (courseId: string) => {
    const progress = get().progress;
    const courseKeys = Object.keys(progress).filter((k: string) => k.startsWith(`${courseId}/`));
    if (courseKeys.length === 0) return 0;
    const completed = courseKeys.filter((k: string) => progress[k].status === 'completed').length;
    return completed / courseKeys.length;
  },
});

export const useLessonStore = Platform.OS === 'web'
  ? create<LessonState>()(storeCreator as any)
  : create<LessonState>()(
      persist(storeCreator as any, {
        name: 'codelab-lessons',
        storage: createJSONStorage(() => zustandStorage),
        partialize: (state: any) => ({
          progress: state.progress,
          bookmarks: state.bookmarks,
          notes: state.notes,
        }),
      })
    );
