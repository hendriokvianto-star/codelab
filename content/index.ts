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
import htmlMeta from './html/meta.json';
import cssMeta from './css/meta.json';
import reactMeta from './react/meta.json';

import htmlM1Lessons from './html/module-1/lessons';
import htmlM1Quiz from './html/module-1/quiz';
import htmlM2Lessons from './html/module-2/lessons';
import htmlM2Quiz from './html/module-2/quiz';
import htmlM3Lessons from './html/module-3/lessons';
import htmlM3Quiz from './html/module-3/quiz';

import cssM1Lessons from './css/module-1/lessons';
import cssM1Quiz from './css/module-1/quiz';
import cssM2Lessons from './css/module-2/lessons';
import cssM2Quiz from './css/module-2/quiz';
import cssM3Lessons from './css/module-3/lessons';
import cssM3Quiz from './css/module-3/quiz';

import reactM1Lessons from './react/module-1/lessons';
import reactM1Quiz from './react/module-1/quiz';
import reactM2Lessons from './react/module-2/lessons';
import reactM2Quiz from './react/module-2/quiz';
import reactM3Lessons from './react/module-3/lessons';
import reactM3Quiz from './react/module-3/quiz';

import sqlMeta from './sql/meta.json';
import sqlM1Lessons from './sql/module-1/lessons';
import sqlM1Quiz from './sql/module-1/quiz';
import sqlM2Lessons from './sql/module-2/lessons';
import sqlM2Quiz from './sql/module-2/quiz';
import sqlM3Lessons from './sql/module-3/lessons';
import sqlM3Quiz from './sql/module-3/quiz';

import tailwindMeta from './tailwind/meta.json';
import tailwindM1Lessons from './tailwind/module-1/lessons';
import tailwindM1Quiz from './tailwind/module-1/quiz';
import tailwindM2Lessons from './tailwind/module-2/lessons';
import tailwindM2Quiz from './tailwind/module-2/quiz';
import tailwindM3Lessons from './tailwind/module-3/lessons';
import tailwindM3Quiz from './tailwind/module-3/quiz';

import nodejsMeta from './nodejs/meta.json';
import nodejsM1Lessons from './nodejs/module-1/lessons';
import nodejsM1Quiz from './nodejs/module-1/quiz';
import nodejsM2Lessons from './nodejs/module-2/lessons';
import nodejsM2Quiz from './nodejs/module-2/quiz';
import nodejsM3Lessons from './nodejs/module-3/lessons';
import nodejsM3Quiz from './nodejs/module-3/quiz';

import gitMeta from './git/meta.json';
import gitM1Lessons from './git/module-1/lessons';
import gitM1Quiz from './git/module-1/quiz';
import gitM2Lessons from './git/module-2/lessons';
import gitM2Quiz from './git/module-2/quiz';
import gitM3Lessons from './git/module-3/lessons';
import gitM3Quiz from './git/module-3/quiz';

import pythonMeta from './python/meta.json';
import pythonM1Lessons from './python/module-1/lessons';
import pythonM1Quiz from './python/module-1/quiz';
import pythonM2Lessons from './python/module-2/lessons';
import pythonM2Quiz from './python/module-2/quiz';
import pythonM3Lessons from './python/module-3/lessons';
import pythonM3Quiz from './python/module-3/quiz';

import reactnativeMeta from './reactnative/meta.json';
import reactnativeM1Lessons from './reactnative/module-1/lessons';
import reactnativeM1Quiz from './reactnative/module-1/quiz';
import reactnativeM2Lessons from './reactnative/module-2/lessons';
import reactnativeM2Quiz from './reactnative/module-2/quiz';
import reactnativeM3Lessons from './reactnative/module-3/lessons';
import reactnativeM3Quiz from './reactnative/module-3/quiz';

import typescriptMeta from './typescript/meta.json';
import typescriptM1Lessons from './typescript/module-1/lessons';
import typescriptM1Quiz from './typescript/module-1/quiz';
import typescriptM2Lessons from './typescript/module-2/lessons';
import typescriptM2Quiz from './typescript/module-2/quiz';
import typescriptM3Lessons from './typescript/module-3/lessons';
import typescriptM3Quiz from './typescript/module-3/quiz';

import nextjsMeta from './nextjs/meta.json';
import nextjsM1Lessons from './nextjs/module-1/lessons';
import nextjsM1Quiz from './nextjs/module-1/quiz';
import nextjsM2Lessons from './nextjs/module-2/lessons';
import nextjsM2Quiz from './nextjs/module-2/quiz';
import nextjsM3Lessons from './nextjs/module-3/lessons';
import nextjsM3Quiz from './nextjs/module-3/quiz';

import dockerMeta from './docker/meta.json';
import dockerM1Lessons from './docker/module-1/lessons';
import dockerM1Quiz from './docker/module-1/quiz';
import dockerM2Lessons from './docker/module-2/lessons';
import dockerM2Quiz from './docker/module-2/quiz';
import dockerM3Lessons from './docker/module-3/lessons';
import dockerM3Quiz from './docker/module-3/quiz';

import mongodbMeta from './mongodb/meta.json';
import mongodbM1Lessons from './mongodb/module-1/lessons';
import mongodbM1Quiz from './mongodb/module-1/quiz';
import mongodbM2Lessons from './mongodb/module-2/lessons';
import mongodbM2Quiz from './mongodb/module-2/quiz';
import mongodbM3Lessons from './mongodb/module-3/lessons';
import mongodbM3Quiz from './mongodb/module-3/quiz';

import awsMeta from './aws/meta.json';
import awsM1Lessons from './aws/module-1/lessons';
import awsM1Quiz from './aws/module-1/quiz';
import awsM2Lessons from './aws/module-2/lessons';
import awsM2Quiz from './aws/module-2/quiz';

// Combine all content into a central database

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

// Register HTML lessons
[...htmlM1Lessons, ...htmlM2Lessons, ...htmlM3Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register CSS lessons
[...cssM1Lessons, ...cssM2Lessons, ...cssM3Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register React lessons
[...reactM1Lessons, ...reactM2Lessons, ...reactM3Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register SQL lessons
[...sqlM1Lessons, ...sqlM2Lessons, ...sqlM3Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register Tailwind lessons
[...tailwindM1Lessons, ...tailwindM2Lessons, ...tailwindM3Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register Node.js lessons
[...nodejsM1Lessons, ...nodejsM2Lessons, ...nodejsM3Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register Git lessons
[...gitM1Lessons, ...gitM2Lessons, ...gitM3Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register Python lessons
[...pythonM1Lessons, ...pythonM2Lessons, ...pythonM3Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register React Native lessons
[...reactnativeM1Lessons, ...reactnativeM2Lessons, ...reactnativeM3Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register TypeScript lessons
[...typescriptM1Lessons, ...typescriptM2Lessons, ...typescriptM3Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register Next.js lessons
[...nextjsM1Lessons, ...nextjsM2Lessons, ...nextjsM3Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register Docker lessons
[...dockerM1Lessons, ...dockerM2Lessons, ...dockerM3Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register MongoDB lessons
[...mongodbM1Lessons, ...mongodbM2Lessons, ...mongodbM3Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register AWS lessons
[...awsM1Lessons, ...awsM2Lessons].forEach((l) => {
  allLessons[l.id] = l;
});

// Register quizzes
[
  jsM1Quiz, jsM2Quiz, jsM3Quiz, 
  lvM1Quiz, lvM2Quiz, lvM3Quiz, 
  htmlM1Quiz, htmlM2Quiz, htmlM3Quiz, 
  cssM1Quiz, cssM2Quiz, cssM3Quiz, 
  reactM1Quiz, reactM2Quiz, reactM3Quiz,
  sqlM1Quiz, sqlM2Quiz, sqlM3Quiz,
  tailwindM1Quiz, tailwindM2Quiz, tailwindM3Quiz,
  nodejsM1Quiz, nodejsM2Quiz, nodejsM3Quiz,
  gitM1Quiz, gitM2Quiz, gitM3Quiz,
  pythonM1Quiz, pythonM2Quiz, pythonM3Quiz,
  reactnativeM1Quiz, reactnativeM2Quiz, reactnativeM3Quiz,
  typescriptM1Quiz, typescriptM2Quiz, typescriptM3Quiz,
  nextjsM1Quiz, nextjsM2Quiz, nextjsM3Quiz,
  dockerM1Quiz, dockerM2Quiz, dockerM3Quiz,
  mongodbM1Quiz, mongodbM2Quiz, mongodbM3Quiz,
  awsM1Quiz, awsM2Quiz
].forEach((q) => {
  allQuizzes[q.id] = q;
});

export function getLesson(lessonId: string): LessonData | undefined {
  return allLessons[lessonId];
}

export function getQuiz(quizId: string): QuizData | undefined {
  return allQuizzes[quizId];
}

export function getCourseMeta(courseId: string): CourseMeta {
  if (courseId === 'javascript') return jsMeta as unknown as CourseMeta;
  if (courseId === 'laravel') return lvMeta as unknown as CourseMeta;
  if (courseId === 'html') return htmlMeta as unknown as CourseMeta;
  if (courseId === 'css') return cssMeta as unknown as CourseMeta;
  if (courseId === 'react') return reactMeta as unknown as CourseMeta;
  if (courseId === 'sql') return sqlMeta as unknown as CourseMeta;
  if (courseId === 'tailwind') return tailwindMeta as unknown as CourseMeta;
  if (courseId === 'nodejs') return nodejsMeta as unknown as CourseMeta;
  if (courseId === 'git') return gitMeta as unknown as CourseMeta;
  if (courseId === 'python') return pythonMeta as unknown as CourseMeta;
  if (courseId === 'reactnative') return reactnativeMeta as unknown as CourseMeta;
  if (courseId === 'typescript') return typescriptMeta as unknown as CourseMeta;
  if (courseId === 'nextjs') return nextjsMeta as unknown as CourseMeta;
  if (courseId === 'docker') return dockerMeta as unknown as CourseMeta;
  if (courseId === 'mongodb') return mongodbMeta as unknown as CourseMeta;
  if (courseId === 'aws') return awsMeta as unknown as CourseMeta;
  return jsMeta as unknown as CourseMeta;
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

export function getNextActivityId(courseId: string, currentLessonId: string): { type: 'lesson' | 'quiz' | null; id: string | null } {
  const meta = getCourseMeta(courseId);
  if (!meta) return { type: null, id: null };
  
  for (let mIdx = 0; mIdx < meta.modules.length; mIdx++) {
    const mod = meta.modules[mIdx];
    const lIdx = mod.lessons.indexOf(currentLessonId);
    if (lIdx !== -1) {
      if (lIdx + 1 < mod.lessons.length) {
        return { type: 'lesson', id: mod.lessons[lIdx + 1] };
      } else if (mod.quizId) {
        return { type: 'quiz', id: mod.quizId };
      } else if (mIdx + 1 < meta.modules.length) {
        const nextMod = meta.modules[mIdx + 1];
        if (nextMod.lessons.length > 0) {
          return { type: 'lesson', id: nextMod.lessons[0] };
        }
      }
      return { type: null, id: null };
    }
  }
  return { type: null, id: null };
}
