/**
 * CodeLab — Profile Screen
 * User statistics, settings, and preferences
 */
import React from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar, Switch, Pressable, Alert } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { useThemeColors, useTranslation } from '@/hooks/useAppTheme';
import { useSettingsStore } from '@/stores/useSettingsStore';
import { useLessonStore } from '@/stores/useLessonStore';
import { getLesson } from '@/content/index';
import { useUserStore } from '@/stores/useUserStore';
import { getLevelFromXP, BADGES } from '@/constants/Gamification';
import Card from '@/components/ui/Card';
import ProgressBar from '@/components/ui/ProgressBar';

function StatItem({
  emoji,
  label,
  value,
  color,
}: {
  emoji: string;
  label: string;
  value: string | number;
  color: string;
}) {
  const colors = useThemeColors();
  return (
    <View style={styles.statItem}>
      <Text style={styles.statEmoji}>{emoji}</Text>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: colors.textSecondary }]}>{label}</Text>
    </View>
  );
}

function SettingRow({
  emoji,
  label,
  right,
}: {
  emoji: string;
  label: string;
  right: React.ReactNode;
}) {
  const colors = useThemeColors();
  return (
    <View style={[styles.settingRow, { borderBottomColor: colors.border }]}>
      <Text style={styles.settingEmoji}>{emoji}</Text>
      <Text style={[styles.settingLabel, { color: colors.text }]}>{label}</Text>
      {right}
    </View>
  );
}

export default function ProfileScreen() {
  const colors = useThemeColors();
  const router = useRouter();
  const { t, language } = useTranslation();
  const isDarkMode = useSettingsStore((s) => s.isDarkMode);
  const toggleDarkMode = useSettingsStore((s) => s.toggleDarkMode);
  const currentLang = useSettingsStore((s) => s.language);
  const setLanguage = useSettingsStore((s) => s.setLanguage);

  const totalXP = useUserStore((s) => s.totalXP);
  const currentStreak = useUserStore((s) => s.currentStreak);
  const lessonsCompleted = useUserStore((s) => s.lessonsCompleted);
  const challengesSolved = useUserStore((s) => s.challengesSolved);
  const earnedBadges = useUserStore((s) => s.earnedBadges);
  const equippedBadge = useUserStore((s) => s.equippedBadge);
  const bookmarks = useLessonStore((s) => s.bookmarks);

  const levelInfo = getLevelFromXP(totalXP);
  const levelTitle = language === 'id' ? levelInfo.titleId : levelInfo.title;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <Animated.View entering={FadeInDown.duration(400)} style={styles.header}>
          <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
            <Text style={styles.avatarText}>CL</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <Text style={[styles.name, { color: colors.text, marginBottom: 0 }]}>Coder</Text>
            {equippedBadge && (
              <View style={[styles.equippedHeaderTag, { backgroundColor: colors.primary + '20', borderColor: colors.primary }]}>
                <Text style={styles.equippedHeaderEmoji}>{BADGES[equippedBadge as keyof typeof BADGES]?.emoji}</Text>
              </View>
            )}
          </View>
          <View style={styles.levelRow}>
            <Text style={styles.levelEmoji}>{levelInfo.emoji}</Text>
            <Text style={[styles.levelTitle, { color: colors.primary }]}>
              {levelTitle}
            </Text>
          </View>
        </Animated.View>

        {/* Statistics */}
        <Animated.View entering={FadeInDown.delay(100).duration(400)}>
          <Card elevated style={styles.statsCard}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              📊 {t('profile.statistics')}
            </Text>
            <View style={styles.statsGrid}>
              <StatItem emoji="⭐" label="Total XP" value={totalXP} color={colors.xpColor} />
              <StatItem emoji="🔥" label={t('streak.title')} value={currentStreak} color={colors.streakColor} />
              <StatItem emoji="📖" label={t('profile.lessons_completed')} value={lessonsCompleted} color={colors.success} />
              <StatItem emoji="⚔️" label={t('profile.challenges_solved')} value={challengesSolved} color={colors.info} />
              <StatItem emoji="🎖️" label="Badges" value={earnedBadges.length} color={colors.primary} />
              <StatItem emoji="📈" label="Level" value={levelInfo.level} color={colors.levelColor} />
            </View>
          </Card>
        </Animated.View>

        {/* Badge Showcase */}
        <Animated.View entering={FadeInDown.delay(150).duration(400)}>
          <Card elevated style={styles.badgeCard}>
            <View style={styles.badgeCardHeader}>
              <Text style={[styles.sectionTitle, { color: colors.text, marginBottom: 0 }]}>
                🎖️ {language === 'id' ? 'Koleksi Lencana' : 'Badge Collection'} ({earnedBadges.length}/{Object.keys(BADGES).length})
              </Text>
              <Pressable onPress={() => router.push('/badges' as any)}>
                <Text style={{ color: colors.primary, fontWeight: '700', fontSize: 13 }}>
                  {language === 'id' ? 'Lihat Semua' : 'See All'}
                </Text>
              </Pressable>
            </View>
            
            <View style={styles.badgeGrid}>
              {/* Show only up to 4 earned badges, or the first 4 if none earned */}
              {Object.values(BADGES)
                .sort((a, b) => {
                  const aEarned = earnedBadges.includes(a.id) ? 1 : 0;
                  const bEarned = earnedBadges.includes(b.id) ? 1 : 0;
                  return bEarned - aEarned;
                })
                .slice(0, 4)
                .map((badge) => {
                  const isEarned = earnedBadges.includes(badge.id);
                  const isEquipped = badge.id === equippedBadge;
                  return (
                    <View key={badge.id} style={[styles.badgeItem, !isEarned && { opacity: 0.5 }]}>
                      <View style={[
                        styles.badgeIconWrapper, 
                        { 
                          backgroundColor: isEarned ? colors.primary + '20' : colors.border,
                          borderColor: isEquipped ? colors.primary : (isEarned ? colors.primary + '40' : colors.border),
                          borderWidth: isEquipped ? 2 : 1.5
                        }
                      ]}>
                        <Text style={[styles.badgeEmoji, !isEarned && { fontSize: 20 }]}>
                          {isEarned ? badge.emoji : '🔒'}
                        </Text>
                        {isEquipped && (
                          <View style={[styles.equippedBadgeTagSmall, { backgroundColor: colors.primary }]}>
                            <Text style={{ color: '#FFF', fontSize: 8, fontWeight: 'bold' }}>✓</Text>
                          </View>
                        )}
                      </View>
                      <Text style={[styles.badgeName, { color: colors.text }]} numberOfLines={2}>
                        {language === 'id' ? badge.nameId : badge.name}
                      </Text>
                    </View>
                  );
              })}
            </View>
          </Card>
        </Animated.View>

        {/* Settings */}
        <Animated.View entering={FadeInDown.delay(200).duration(400)}>
          <Card elevated style={styles.settingsCard}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              ⚙️ {t('profile.settings')}
            </Text>

            <SettingRow
              emoji="🌙"
              label={t('profile.dark_mode')}
              right={
                <Switch
                  value={isDarkMode}
                  onValueChange={toggleDarkMode}
                  trackColor={{ false: colors.border, true: colors.primary + '60' }}
                  thumbColor={isDarkMode ? colors.primary : '#f4f3f4'}
                />
              }
            />

            <SettingRow
              emoji="🌐"
              label={t('profile.language')}
              right={
                <View style={styles.langToggle}>
                  <Pressable
                    onPress={() => setLanguage('en')}
                    style={[
                      styles.langBtn,
                      currentLang === 'en' && {
                        backgroundColor: colors.primary,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.langBtnText,
                        { color: currentLang === 'en' ? '#FFF' : colors.textSecondary },
                      ]}
                    >
                      EN
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setLanguage('id')}
                    style={[
                      styles.langBtn,
                      currentLang === 'id' && {
                        backgroundColor: colors.primary,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.langBtnText,
                        { color: currentLang === 'id' ? '#FFF' : colors.textSecondary },
                      ]}
                    >
                      ID
                    </Text>
                  </Pressable>
                </View>
              }
            />
          </Card>
        </Animated.View>

        {/* About */}
        <Animated.View entering={FadeInDown.delay(300).duration(400)}>
          <Card style={styles.aboutCard}>
            <Text style={[styles.aboutTitle, { color: colors.text }]}>
              {t('profile.about')}
            </Text>
            <Text style={[styles.aboutText, { color: colors.textSecondary }]}>
              CodeLab v1.0.0 — {language === 'id'
                ? 'Belajar coding dengan cara menyenangkan!'
                : 'Learn coding the fun way!'}
            </Text>
          </Card>
        </Animated.View>

        {/* Bookmarks */}
        {bookmarks.length > 0 && (
          <Animated.View entering={FadeInDown.delay(350).duration(400)}>
            <Card elevated style={styles.settingsCard}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                🔖 {t('profile.bookmarks')} ({bookmarks.length})
              </Text>
              {bookmarks.map((bm, i) => {
                const lesson = getLesson(bm.lessonId);
                if (!lesson) return null;
                const title = language === 'id' ? lesson.titleId : lesson.title;
                return (
                  <Pressable key={i} onPress={() => router.push(`/lesson/${bm.lessonId}` as any)}>
                    <View style={[styles.settingRow, { borderBottomColor: colors.border }]}>
                      <Text style={styles.settingEmoji}>
                        {bm.courseId === 'javascript' ? '⚡' : '🔺'}
                      </Text>
                      <Text style={[styles.settingLabel, { color: colors.text }]}>{title}</Text>
                      <Text style={{ color: colors.textSecondary }}>→</Text>
                    </View>
                  </Pressable>
                );
              })}
            </Card>
          </Animated.View>
        )}

        {/* Danger Zone */}
        <Animated.View entering={FadeInDown.delay(400).duration(400)}>
          <Pressable
            onPress={() => {
              Alert.alert(
                language === 'id' ? 'Reset Progres' : 'Reset Progress',
                language === 'id'
                  ? 'Semua data XP, badge, streak, dan progres pelajaran akan dihapus. Lanjutkan?'
                  : 'All XP, badges, streak, and lesson progress will be deleted. Continue?',
                [
                  { text: language === 'id' ? 'Batal' : 'Cancel', style: 'cancel' },
                  {
                    text: language === 'id' ? 'Reset' : 'Reset',
                    style: 'destructive',
                    onPress: () => {
                      useUserStore.getState().resetProgress();
                    },
                  },
                ]
              );
            }}
            style={[styles.dangerBtn, { borderColor: colors.error }]}
          >
            <Text style={[styles.dangerText, { color: colors.error }]}>
              ⚠️ {language === 'id' ? 'Reset Semua Progres' : 'Reset All Progress'}
            </Text>
          </Pressable>
        </Animated.View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 60, paddingBottom: 20 },
  header: { alignItems: 'center', marginBottom: 24 },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: { fontSize: 28, fontWeight: '800', color: '#FFF' },
  name: { fontSize: 24, fontWeight: '800', marginBottom: 4 },
  equippedHeaderTag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  equippedHeaderEmoji: {
    fontSize: 14,
  },
  levelRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  levelEmoji: { fontSize: 18 },
  levelTitle: { fontSize: 16, fontWeight: '600' },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 16 },
  statsCard: { marginBottom: 16 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  statItem: {
    width: '30%',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 4,
  },
  statEmoji: { fontSize: 24 },
  statValue: { fontSize: 22, fontWeight: '800' },
  statLabel: { fontSize: 11, textAlign: 'center' },
  settingsCard: { marginBottom: 16 },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    gap: 12,
  },
  settingEmoji: { fontSize: 20 },
  settingLabel: { flex: 1, fontSize: 15, fontWeight: '500' },
  langToggle: { flexDirection: 'row', borderRadius: 10, overflow: 'hidden', gap: 2 },
  langBtn: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8 },
  langBtnText: { fontSize: 13, fontWeight: '700' },
  aboutCard: { alignItems: 'center', paddingVertical: 24 },
  aboutTitle: { fontSize: 16, fontWeight: '700', marginBottom: 6 },
  aboutText: { fontSize: 13, textAlign: 'center' },
  dangerBtn: {
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 14,
    borderWidth: 1.5,
    marginBottom: 16,
  },
  dangerText: { fontSize: 14, fontWeight: '700' },
  badgeCard: { marginBottom: 16 },
  badgeCardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  badgeGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  badgeItem: { width: '23%', alignItems: 'center', marginBottom: 16, gap: 6 },
  badgeIconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
  },
  badgeEmoji: { fontSize: 28 },
  badgeName: { fontSize: 10, textAlign: 'center', fontWeight: '600', lineHeight: 14 },
  equippedBadgeTagSmall: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#FFF',
  },
});
