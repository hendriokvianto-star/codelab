/**
 * CodeLab — Learn Screen (Updated for Fase 2)
 * Shows learning paths with navigable module/lesson breakdowns
 */
import React from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar, Pressable } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { useThemeColors, useTranslation } from '@/hooks/useAppTheme';
import { useSettingsStore } from '@/stores/useSettingsStore';
import { useLessonStore } from '@/stores/useLessonStore';
import { getCourseMeta, getModuleLessons } from '@/content/index';
import type { ModuleMeta, LessonData } from '@/content/index';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

function LessonRow({
  lesson,
  lang,
  status,
  onPress,
}: {
  lesson: LessonData;
  lang: string;
  status: 'locked' | 'active' | 'completed';
  onPress: () => void;
}) {
  const colors = useThemeColors();
  const title = lang === 'id' ? lesson.titleId : lesson.title;
  const isLocked = status === 'locked';
  const isCompleted = status === 'completed';
  const icon = isCompleted ? '✅' : isLocked ? '🔒' : '📖';

  return (
    <Pressable
      onPress={isLocked ? undefined : onPress}
      style={[
        styles.lessonRow,
        {
          backgroundColor: colors.surface,
          borderColor: isCompleted ? colors.success : isLocked ? colors.border : colors.primary,
          borderWidth: 1,
          opacity: isLocked ? 0.45 : 1,
        },
      ]}
    >
      <Text style={{ fontSize: 18 }}>{icon}</Text>
      <View style={{ flex: 1 }}>
        <Text style={[styles.lessonTitle, { color: isLocked ? colors.textMuted : colors.text }]}>
          {title}
        </Text>
        <Text style={[styles.lessonXP, { color: colors.xpColor }]}>+{lesson.xp} XP</Text>
      </View>
      {!isLocked && <Text style={{ fontSize: 16, color: colors.textSecondary }}>→</Text>}
    </Pressable>
  );
}

function ModuleSection({
  module,
  courseId,
  index,
  lang,
  onLessonPress,
  onQuizPress,
}: {
  module: ModuleMeta;
  courseId: string;
  index: number;
  lang: string;
  onLessonPress: (lessonId: string) => void;
  onQuizPress: (quizId: string) => void;
}) {
  const colors = useThemeColors();
  const { t } = useTranslation();
  const lessonStore = useLessonStore();
  const lessons = getModuleLessons(courseId, module.id);
  const moduleTitle = lang === 'id' ? module.titleId : module.title;

  // First 3 modules are unlocked, rest are locked
  const isModuleLocked = index > 2;

  // Calculate how many lessons in this module are completed
  const completedLessons = lessons.filter(
    (l) => lessonStore.getLessonStatus(courseId, module.id, l.id) === 'completed'
  ).length;
  const allDone = completedLessons === lessons.length && lessons.length > 0;

  return (
    <Animated.View entering={FadeInDown.delay(index * 100).duration(400)}>
      <View style={styles.moduleHeader}>
        <Text style={[styles.moduleNum, { color: colors.primary }]}>
          {isModuleLocked ? '🔒' : `M${index + 1}`}
        </Text>
        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.moduleTitle,
              { color: isModuleLocked ? colors.textMuted : colors.text },
            ]}
          >
            {moduleTitle}
          </Text>
          <Text style={[styles.moduleProgress, { color: colors.textSecondary }]}>
            {isModuleLocked
              ? lang === 'id' ? 'Segera hadir' : 'Coming soon'
              : `${completedLessons}/${lessons.length} ${t('learn.lessons')}`}
          </Text>
        </View>
        {allDone && <Text style={{ fontSize: 20 }}>✅</Text>}
      </View>

      {!isModuleLocked &&
        lessons.map((lesson, li) => {
          // First lesson always active, others unlock after previous is completed
          let status: 'locked' | 'active' | 'completed' = 'locked';
          const savedStatus = lessonStore.getLessonStatus(courseId, module.id, lesson.id);
          if (savedStatus === 'completed') {
            status = 'completed';
          } else if (li === 0) {
            status = 'active';
          } else {
            const prevLesson = lessons[li - 1];
            const prevStatus = lessonStore.getLessonStatus(courseId, module.id, prevLesson.id);
            status = prevStatus === 'completed' ? 'active' : 'locked';
          }

          return (
            <LessonRow
              key={lesson.id}
              lesson={lesson}
              lang={lang}
              status={status}
              onPress={() => onLessonPress(lesson.id)}
            />
          );
        })}

      {/* Quiz button */}
      {!isModuleLocked && module.quizId && allDone && (
        <Button
          title={`🎯 ${lang === 'id' ? 'Mulai Kuis' : 'Start Quiz'}`}
          onPress={() => onQuizPress(module.quizId!)}
          variant="outline"
          fullWidth
          style={{ marginTop: 4, marginBottom: 8 }}
        />
      )}

      {/* Quiz button when lessons not all done */}
      {!isModuleLocked && module.quizId && !allDone && lessons.length > 0 && (
        <View style={[styles.quizLocked, { backgroundColor: colors.surfaceElevated, borderColor: colors.border }]}>
          <Text style={{ color: colors.textMuted, fontSize: 13 }}>
            🎯 {lang === 'id' ? 'Selesaikan semua pelajaran untuk membuka kuis' : 'Complete all lessons to unlock the quiz'}
          </Text>
        </View>
      )}
    </Animated.View>
  );
}

export default function LearnScreen() {
  const colors = useThemeColors();
  const { t, language } = useTranslation();
  const isDarkMode = useSettingsStore((s) => s.isDarkMode);
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState<string>('javascript');

  const ACTIVE_COURSES = [
    { id: 'javascript', icon: '⚡', title: 'JavaScript', color: '#F7DF1E' },
    { id: 'laravel', icon: '🔺', title: 'Laravel', color: '#FF2D20' },
    { id: 'flutter', icon: '📱', title: 'Flutter', color: '#02569B' },
    { id: 'golang', icon: '🐹', title: 'Go', color: '#00ADD8' },
    { id: 'security', icon: '🛡️', title: 'Security', color: '#E3242B' },
    { id: 'ai', icon: '🤖', title: 'AI', color: '#8A2BE2' }
  ];

  const courseMeta = getCourseMeta(activeTab);

  const handleLessonPress = (lessonId: string) => {
    router.push(`/lesson/${lessonId}` as any);
  };

  const handleQuizPress = (quizId: string) => {
    router.push(`/quiz/${quizId}` as any);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Animated.View entering={FadeInDown.duration(400)} style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>
            {t('learn.title')}
          </Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            {t('learn.subtitle')}
          </Text>
        </Animated.View>

        {/* Course Tabs */}
        <View style={{ marginBottom: 24, marginHorizontal: -20 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}
          >
            {ACTIVE_COURSES.map((course) => (
              <Pressable
                key={course.id}
                onPress={() => setActiveTab(course.id)}
                style={[
                  styles.tab,
                  { backgroundColor: colors.surface, borderColor: colors.border },
                  activeTab === course.id && { backgroundColor: `${course.color}20`, borderColor: course.color },
                ]}
              >
                <Text style={styles.tabIcon}>{course.icon}</Text>
                <Text
                  style={[
                    styles.tabText,
                    {
                      color: activeTab === course.id ? course.color : colors.textSecondary,
                      fontWeight: activeTab === course.id ? '700' : '500',
                    },
                  ]}
                >
                  {course.title}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Modules */}
        {courseMeta.modules.map((module, index) => (
          <ModuleSection
            key={module.id}
            module={module}
            courseId={activeTab}
            index={index}
            lang={language}
            onLessonPress={handleLessonPress}
            onQuizPress={handleQuizPress}
          />
        ))}

        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 60, paddingBottom: 20 },
  header: { marginBottom: 20 },
  title: { fontSize: 28, fontWeight: '800', marginBottom: 4 },
  subtitle: { fontSize: 15 },
  tabBar: {
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    padding: 4,
    marginBottom: 24,
    gap: 4,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
    borderWidth: 1,
  },
  tabIcon: { fontSize: 18 },
  tabText: { fontSize: 15 },
  moduleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 16,
    marginBottom: 10,
    paddingBottom: 8,
  },
  moduleNum: { fontSize: 16, fontWeight: '800', width: 32 },
  moduleTitle: { fontSize: 17, fontWeight: '700' },
  moduleProgress: { fontSize: 12, marginTop: 2 },
  lessonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    gap: 12,
    marginBottom: 6,
  },
  lessonTitle: { fontSize: 14, fontWeight: '600', marginBottom: 2 },
  lessonXP: { fontSize: 11, fontWeight: '600' },
  quizLocked: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 8,
  },
});
