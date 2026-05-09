/**
 * CodeLab — Home Screen (Fase 4)
 * Dashboard with search, streak, XP, daily challenge, and course cards
 */
import React from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar, Pressable, Platform } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter, Redirect } from 'expo-router';
import { useThemeColors, useTranslation } from '@/hooks/useAppTheme';
import { useUserStore } from '@/stores/useUserStore';
import { useLessonStore } from '@/stores/useLessonStore';
import { useSettingsStore } from '@/stores/useSettingsStore';
import { getDailyChallenges } from '@/content/challenges';
import { getLevelFromXP } from '@/constants/Gamification';
import StreakWidget from '@/components/home/StreakWidget';
import XPLevelWidget from '@/components/home/XPLevelWidget';
import CourseCard from '@/components/home/CourseCard';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function HomeScreen() {
  const hasCompletedOnboarding = useUserStore((s) => s.hasCompletedOnboarding);
  const colors = useThemeColors();
  const { t, language } = useTranslation();
  const isDarkMode = useSettingsStore((s) => s.isDarkMode);
  const router = useRouter();
  const { totalXP, lessonsCompleted, challengesSolved, streakDays } = useUserStore();
  const lessonStore = useLessonStore();

  // Gate: redirect to onboarding if first-time user (native only — web SSR breaks touch events)
  if (!hasCompletedOnboarding && Platform.OS !== 'web') {
    return <Redirect href="/onboarding" />;
  }

  const dailyChallenge = getDailyChallenges()[0];
  const levelInfo = getLevelFromXP(totalXP);

  // Calculate real progress from lesson store
  const jsProgress = lessonStore.getCourseProgress('javascript');
  const lvProgress = lessonStore.getCourseProgress('laravel');

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header / Greeting + Search */}
        <Animated.View
          entering={FadeInDown.duration(500)}
          style={styles.header}
        >
          <View style={{ flex: 1 }}>
            <Text style={[styles.greeting, { color: colors.text }]}>
              {t('home.greeting')} 👋
            </Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              {t('home.subtitle')}
            </Text>
          </View>
          {/* Search Button */}
          <Pressable
            onPress={() => router.push('/search' as any)}
            style={[styles.searchBtn, { backgroundColor: colors.surface, borderColor: colors.border }]}
          >
            <Text style={{ fontSize: 18 }}>🔍</Text>
          </Pressable>
        </Animated.View>

        {/* Quick Stats */}
        <Animated.View entering={FadeInDown.delay(80).duration(500)}>
          <View style={styles.statsRow}>
            <View style={[styles.quickStat, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={styles.quickStatEmoji}>⭐</Text>
              <Text style={[styles.quickStatValue, { color: colors.xpColor }]}>{totalXP}</Text>
              <Text style={[styles.quickStatLabel, { color: colors.textMuted }]}>XP</Text>
            </View>
            <View style={[styles.quickStat, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={styles.quickStatEmoji}>🔥</Text>
              <Text style={[styles.quickStatValue, { color: colors.error }]}>{streakDays}</Text>
              <Text style={[styles.quickStatLabel, { color: colors.textMuted }]}>
                {language === 'id' ? 'Hari' : 'Days'}
              </Text>
            </View>
            <View style={[styles.quickStat, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={styles.quickStatEmoji}>📚</Text>
              <Text style={[styles.quickStatValue, { color: colors.primary }]}>{lessonsCompleted}</Text>
              <Text style={[styles.quickStatLabel, { color: colors.textMuted }]}>
                {language === 'id' ? 'Selesai' : 'Done'}
              </Text>
            </View>
            <View style={[styles.quickStat, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={styles.quickStatEmoji}>{levelInfo.emoji}</Text>
              <Text style={[styles.quickStatValue, { color: colors.text }]}>Lv.{levelInfo.level}</Text>
              <Text style={[styles.quickStatLabel, { color: colors.textMuted }]}>
                {language === 'id' ? levelInfo.titleId : levelInfo.title}
              </Text>
            </View>
          </View>
        </Animated.View>

        {/* Streak & XP Widgets */}
        <Animated.View entering={FadeInDown.delay(150).duration(500)}>
          <StreakWidget />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(220).duration(500)}>
          <XPLevelWidget />
        </Animated.View>

        {/* Daily Challenge */}
        {dailyChallenge && (
          <Animated.View entering={FadeInDown.delay(300).duration(500)}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              🔥 {t('home.daily_challenge')}
            </Text>
            <Pressable onPress={() => router.push(`/challenge/${dailyChallenge.id}` as any)}>
              <Card style={[styles.dailyCard, { borderColor: colors.accent }]}>
                <View style={styles.dailyRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.dailyTitle, { color: colors.text }]}>
                      {language === 'id' ? dailyChallenge.titleId : dailyChallenge.title}
                    </Text>
                    <Text style={[styles.dailyDesc, { color: colors.textSecondary }]} numberOfLines={2}>
                      {language === 'id' ? dailyChallenge.descriptionId : dailyChallenge.description}
                    </Text>
                  </View>
                  <View style={{ alignItems: 'center', gap: 4 }}>
                    <Badge text={`+${dailyChallenge.xp} XP`} emoji="⭐" size="sm" color={colors.xpColor} />
                    <Text style={[styles.dailySolve, { color: colors.primary }]}>
                      {language === 'id' ? 'Kerjakan →' : 'Solve →'}
                    </Text>
                  </View>
                </View>
              </Card>
            </Pressable>
          </Animated.View>
        )}

        {/* Section: Continue Learning */}
        <Animated.View entering={FadeInDown.delay(400).duration(500)}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            📚 {t('home.continue_learning')}
          </Text>
        </Animated.View>

        {/* Course Cards */}
        <CourseCard
          courseId="javascript"
          icon="⚡"
          title="JavaScript"
          description={t('course.javascript_desc')}
          modules={3}
          lessons={12}
          progress={jsProgress}
          color="#F7DF1E"
          onPress={() => router.push('/(tabs)/learn' as any)}
          index={0}
        />
        <CourseCard
          courseId="laravel"
          icon="🔺"
          title="Laravel"
          description={t('course.laravel_desc')}
          modules={3}
          lessons={12}
          progress={lvProgress}
          color="#FF2D20"
          onPress={() => router.push('/(tabs)/learn' as any)}
          index={1}
        />

        {/* Bottom spacer */}
        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  searchBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  quickStat: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    gap: 2,
  },
  quickStatEmoji: { fontSize: 18 },
  quickStatValue: { fontSize: 18, fontWeight: '800' },
  quickStatLabel: { fontSize: 10, fontWeight: '600' },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    marginTop: 8,
  },
  dailyCard: {
    borderWidth: 1,
  },
  dailyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dailyTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  dailyDesc: {
    fontSize: 13,
    lineHeight: 20,
  },
  dailySolve: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 4,
  },
});
