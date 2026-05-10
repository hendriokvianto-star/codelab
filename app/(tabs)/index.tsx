/**
 * CodeLab — Home Screen (Fase 4)
 * Dashboard with search, streak, XP, daily challenge, and course cards
 */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar, Pressable, Platform, TextInput, Modal } from 'react-native';
import Animated, { FadeInDown, BounceIn } from 'react-native-reanimated';
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
  const { totalXP, lessonsCompleted, challengesSolved, currentStreak, loginToday } = useUserStore();
  const lessonStore = useLessonStore();
  const [showStreakModal, setShowStreakModal] = useState(false);

  useEffect(() => {
    if (hasCompletedOnboarding && Platform.OS !== 'web') {
      const streakUpdated = loginToday();
      if (streakUpdated) {
        setShowStreakModal(true);
      }
    }
  }, [hasCompletedOnboarding, loginToday]);

  // Gate: redirect to onboarding if first-time user (native only — web SSR breaks touch events)
  if (!hasCompletedOnboarding && Platform.OS !== 'web') {
    return <Redirect href="/onboarding" />;
  }

  const dailyChallenge = getDailyChallenges()[0];
  const levelInfo = getLevelFromXP(totalXP);

  // Course categorization & filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  const CATEGORIES = ['Semua', 'Frontend', 'Backend', 'Database', 'Mobile', 'DevOps', 'Fundamental'];

  const COURSES = [
    { id: 'javascript', icon: '⚡', title: 'JavaScript', desc: t('course.javascript_desc'), category: 'Frontend', color: '#F7DF1E', modules: 3, lessons: 12 },
    { id: 'laravel', icon: '🔺', title: 'Laravel', desc: t('course.laravel_desc'), category: 'Backend', color: '#FF2D20', modules: 3, lessons: 12 },
    { id: 'html', icon: '📄', title: 'HTML', desc: language === 'id' ? 'Pelajari struktur dasar web' : 'Learn basic web structure', category: 'Frontend', color: '#E34F26', modules: 3, lessons: 9 },
    { id: 'css', icon: '🎨', title: 'CSS', desc: language === 'id' ? 'Desain halaman web yang interaktif' : 'Style beautiful web pages', category: 'Frontend', color: '#1572B6', modules: 3, lessons: 9 },
    { id: 'react', icon: '⚛️', title: 'React.js', desc: language === 'id' ? 'Bangun UI modern dengan React' : 'Build modern UIs with React', category: 'Frontend', color: '#61DAFB', modules: 3, lessons: 9 },
    { id: 'sql', icon: '🗄️', title: 'SQL & Databases', desc: language === 'id' ? 'Kelola data dengan relasional database' : 'Manage data with relational databases', category: 'Database', color: '#336791', modules: 3, lessons: 9 },
    { id: 'tailwind', icon: '🪶', title: 'Tailwind CSS', desc: language === 'id' ? 'Bangun UI dengan cepat menggunakan utility classes' : 'Build UIs rapidly with utility classes', category: 'Frontend', color: '#0ED3CF', modules: 3, lessons: 9 },
    { id: 'nodejs', icon: '🟢', title: 'Node.js & Express', desc: language === 'id' ? 'Bangun backend API yang cepat dan skalabel' : 'Build fast and scalable backend APIs', category: 'Backend', color: '#68A063', modules: 3, lessons: 9 },
    { id: 'git', icon: '🐙', title: 'Git & GitHub', desc: language === 'id' ? 'Kuasai sistem versi kontrol dan kolaborasi' : 'Master version control and collaboration', category: 'DevOps', color: '#F05032', modules: 3, lessons: 9 },
    { id: 'python', icon: '🐍', title: 'Dasar Python', desc: language === 'id' ? 'Pelajari bahasa pemrograman terpopuler' : 'Learn the world\'s most popular language', category: 'Fundamental', color: '#3776AB', modules: 3, lessons: 9 },
    { id: 'reactnative', icon: '📱', title: 'React Native', desc: language === 'id' ? 'Bangun aplikasi mobile dengan React' : 'Build mobile apps with React', category: 'Mobile', color: '#06B6D4', modules: 3, lessons: 9 },
    { id: 'typescript', icon: '📘', title: 'TypeScript', desc: language === 'id' ? 'JavaScript dengan sintaks penulisan tipe' : 'JavaScript with syntax for types', category: 'Frontend', color: '#3178C6', modules: 3, lessons: 9 },
    { id: 'nextjs', icon: '⬛', title: 'Next.js', desc: language === 'id' ? 'Framework React untuk Web' : 'The React Framework for the Web', category: 'Frontend', color: '#111111', modules: 3, lessons: 9 },
    { id: 'aws', icon: '☁️', title: 'AWS Cloud', desc: language === 'id' ? 'Pelajari komputasi cloud dengan Amazon Web Services' : 'Learn cloud computing with Amazon Web Services', category: 'DevOps', color: '#FF9900', modules: 3, lessons: 9 },
    { id: 'docker', icon: '🐳', title: 'Docker & DevOps', desc: language === 'id' ? 'Pelajari kontainerisasi dan CI/CD dasar' : 'Learn containerization and basic CI/CD', category: 'DevOps', color: '#2496ED', modules: 3, lessons: 9 },
    { id: 'mongodb', icon: '🍃', title: 'MongoDB', desc: language === 'id' ? 'Pelajari database NoSQL berbasis dokumen' : 'Learn NoSQL document database', category: 'Database', color: '#47A248', modules: 3, lessons: 9 }
  ];

  const filteredCourses = COURSES.filter(c => {
    const matchCategory = activeCategory === 'Semua' || c.category === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

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
              <Text style={[styles.quickStatValue, { color: colors.error }]}>{currentStreak}</Text>
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

        {/* Search & Filter */}
        <Animated.View entering={FadeInDown.delay(450).duration(500)} style={{ marginBottom: 16 }}>
          <View style={[styles.inlineSearchBox, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Text style={{ fontSize: 16 }}>🔍</Text>
            <TextInput
              style={[styles.inlineSearchInput, { color: colors.text }]}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder={language === 'id' ? 'Cari React, SQL...' : 'Search React, SQL...'}
              placeholderTextColor={colors.textMuted}
            />
            {searchQuery.length > 0 && (
              <Pressable onPress={() => setSearchQuery('')}>
                <Text style={{ fontSize: 16, color: colors.textMuted }}>✕</Text>
              </Pressable>
            )}
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 12 }}>
            <View style={{ flexDirection: 'row', gap: 8, paddingRight: 20 }}>
              {CATEGORIES.map(cat => (
                <Pressable
                  key={cat}
                  onPress={() => setActiveCategory(cat)}
                  style={[
                    styles.filterChip,
                    { 
                      backgroundColor: activeCategory === cat ? colors.primary : colors.surface,
                      borderColor: activeCategory === cat ? colors.primary : colors.border
                    }
                  ]}
                >
                  <Text style={{ 
                    color: activeCategory === cat ? '#FFF' : colors.text,
                    fontWeight: activeCategory === cat ? '700' : '500',
                    fontSize: 13
                  }}>
                    {cat}
                  </Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </Animated.View>

        {/* Course Cards */}
        {filteredCourses.length > 0 ? (
          filteredCourses.map((c, idx) => (
            <CourseCard
              key={c.id}
              courseId={c.id}
              icon={c.icon}
              title={c.title}
              description={c.desc}
              modules={c.modules}
              lessons={c.lessons}
              progress={lessonStore.getCourseProgress(c.id)}
              color={c.color}
              onPress={() => router.push('/(tabs)/learn' as any)}
              index={idx}
            />
          ))
        ) : (
          <View style={{ paddingVertical: 32, alignItems: 'center' }}>
            <Text style={{ fontSize: 15, color: colors.textMuted }}>
              {language === 'id' ? 'Kursus tidak ditemukan' : 'Course not found'}
            </Text>
          </View>
        )}

        {/* Bottom spacer */}
        <View style={{ height: 32 }} />
      </ScrollView>

      {/* Daily Streak Modal */}
      <Modal transparent visible={showStreakModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <Animated.View entering={BounceIn.duration(600)} style={[styles.modalContent, { backgroundColor: colors.background, borderColor: colors.border }]}>
            <Text style={{ fontSize: 64, marginBottom: 16 }}>🔥</Text>
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              {language === 'id' ? 'Streak Hari ke-' : 'Day '}{currentStreak}{language === 'id' ? '!' : ' Streak!'}
            </Text>
            <Text style={[styles.modalText, { color: colors.textSecondary }]}>
              {language === 'id' 
                ? 'Luar biasa! Kamu kembali belajar hari ini. Teruskan semangatmu!' 
                : 'Awesome! You came back to learn today. Keep up the momentum!'}
            </Text>
            <Pressable 
              style={[styles.modalBtn, { backgroundColor: colors.primary }]}
              onPress={() => setShowStreakModal(false)}
            >
              <Text style={styles.modalBtnText}>
                {language === 'id' ? 'Lanjutkan Belajar' : 'Continue Learning'}
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>
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
  inlineSearchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  inlineSearchInput: {
    flex: 1,
    fontSize: 15,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 340,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  modalBtn: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
  },
  modalBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
