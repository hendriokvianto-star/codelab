/**
 * CodeLab — Content Types & Loader
 * Type definitions for course content and helper to load lessons
 */

export interface TheoryBlock {
  type: 'text' | 'code' | 'tip' | 'warning';
  content: string;
  contentId?: string; // Indonesian version for bilingual blocks
  code?: string;      // for code blocks
  language?: string;  // for code blocks: 'javascript', 'php', 'html'
}

export interface LessonData {
  id: string;
  courseId: string;
  moduleId: string;
  title: string;
  titleId: string;
  xp: number;
  theory: TheoryBlock[];
  practiceCode?: string;
  practiceHint?: string;
  practiceHintId?: string;
  expectedOutput?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionId: string;
  options: string[];
  optionsId: string[];
  correctIndex: number;
  explanation: string;
  explanationId: string;
}

export interface QuizData {
  id: string;
  courseId: string;
  moduleId: string;
  title: string;
  titleId: string;
  questions: QuizQuestion[];
  xpPerQuestion: number;
}

export interface ModuleMeta {
  id: string;
  title: string;
  titleId: string;
  lessons: string[];
  quizId: string | null;
}

export interface CourseMeta {
  id: string;
  title: string;
  titleId: string;
  description: string;
  descriptionId: string;
  icon: string;
  color: string;
  modules: ModuleMeta[];
}

// ── All lesson content stored inline for offline access ──

import jsM1Lessons from './javascript/module-1/lessons';
import jsM2Lessons from './javascript/module-2/lessons';
import jsM3Lessons from './javascript/module-3/lessons';
import jsM1Quiz from './javascript/module-1/quiz';
import jsM2Quiz from './javascript/module-2/quiz';
import jsM3Quiz from './javascript/module-3/quiz';

import lvM1Lessons from './laravel/module-1/lessons';
import lvM2Lessons from './laravel/module-2/lessons';
import lvM3Lessons from './laravel/module-3/lessons';
import lvM1Quiz from './laravel/module-1/quiz';
import lvM2Quiz from './laravel/module-2/quiz';
import lvM3Quiz from './laravel/module-3/quiz';

import jsMeta from './javascript/meta.json';
import lvMeta from './laravel/meta.json';

const allLessons: Record<string, LessonData> = {};
const allQuizzes: Record<string, QuizData> = {};

// Register JS lessons
[...jsM1Lessons, ...jsM2Lessons, ...jsM3Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register Laravel lessons
[...lvM1Lessons, ...lvM2Lessons, ...lvM3Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register quizzes
[jsM1Quiz, jsM2Quiz, jsM3Quiz, lvM1Quiz, lvM2Quiz, lvM3Quiz].forEach((q) => {
  allQuizzes[q.id] = q;
});

export function getLesson(lessonId: string): LessonData | undefined {
  return allLessons[lessonId];
}

export function getQuiz(quizId: string): QuizData | undefined {
  return allQuizzes[quizId];
}

export function getCourseMeta(courseId: string): CourseMeta {
  return courseId === 'javascript' ? (jsMeta as CourseMeta) : (lvMeta as CourseMeta);
}

export function getCourseModules(courseId: string): ModuleMeta[] {
  const meta = getCourseMeta(courseId);
  return meta.modules;
}

export function getModuleLessons(courseId: string, moduleId: string): LessonData[] {
  const meta = getCourseMeta(courseId);
  const mod = meta.modules.find((m) => m.id === moduleId);
  if (!mod) return [];
  return mod.lessons.map((lid) => allLessons[lid]).filter(Boolean);
}

export function getAllLessons(): LessonData[] {
  return Object.values(allLessons);
}
