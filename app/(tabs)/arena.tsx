/**
 * CodeLab — Arena Screen (Fase 3)
 * Coding challenges: daily, weekly, and practice
 */
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar, Pressable } from 'react-native';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { useThemeColors, useTranslation } from '@/hooks/useAppTheme';
import { useSettingsStore } from '@/stores/useSettingsStore';
import { useUserStore } from '@/stores/useUserStore';
import { CHALLENGES, type Challenge } from '@/content/challenges';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

type TabKey = 'daily' | 'weekly' | 'practice';

function ChallengeCard({ challenge, lang, onPress, index }: { challenge: Challenge; lang: string; onPress: () => void; index: number }) {
  const colors = useThemeColors();
  const title = lang === 'id' ? challenge.titleId : challenge.title;
  const desc = lang === 'id' ? challenge.descriptionId : challenge.description;
  const diffColor = challenge.difficulty === 'easy' ? colors.success : challenge.difficulty === 'medium' ? '#FDCB6E' : colors.error;
  const diffLabel = challenge.difficulty === 'easy'
    ? (lang === 'id' ? 'Mudah' : 'Easy')
    : challenge.difficulty === 'medium'
    ? (lang === 'id' ? 'Sedang' : 'Medium')
    : (lang === 'id' ? 'Sulit' : 'Hard');

  return (
    <Animated.View entering={FadeInRight.delay(index * 80).duration(300)}>
      <Pressable onPress={onPress}>
        <Card style={[styles.challengeCard, { borderLeftColor: diffColor, borderLeftWidth: 3 }]}>
          <View style={styles.challengeTop}>
            <Text style={[styles.challengeTitle, { color: colors.text }]}>{title}</Text>
            <Badge text={diffLabel} size="sm" color={diffColor} />
          </View>
          <Text style={[styles.challengeDesc, { color: colors.textSecondary }]} numberOfLines={2}>
            {desc}
          </Text>
          <View style={styles.challengeBottom}>
            <Text style={[styles.challengeXP, { color: colors.xpColor }]}>⭐ +{challenge.xp} XP</Text>
            <Text style={[styles.challengeTests, { color: colors.textMuted }]}>
              {challenge.testCases.length} {lang === 'id' ? 'tes' : 'tests'}
            </Text>
            <View style={[styles.solveBtn, { backgroundColor: colors.primary + '20', borderColor: colors.primary }]}>
              <Text style={[styles.solveBtnText, { color: colors.primary }]}>
                {lang === 'id' ? 'Selesaikan →' : 'Solve →'}
              </Text>
            </View>
          </View>
        </Card>
      </Pressable>
    </Animated.View>
  );
}

export default function ArenaScreen() {
  const colors = useThemeColors();
  const { t, language } = useTranslation();
  const isDarkMode = useSettingsStore((s) => s.isDarkMode);
  const challengesSolved = useUserStore((s) => s.challengesSolved);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>('daily');

  const filtered = CHALLENGES.filter((c) => c.category === activeTab);

  const tabs: { key: TabKey; label: string; labelId: string; emoji: string }[] = [
    { key: 'daily', label: 'Daily', labelId: 'Harian', emoji: '🔥' },
    { key: 'weekly', label: 'Weekly', labelId: 'Mingguan', emoji: '📅' },
    { key: 'practice', label: 'Practice', labelId: 'Latihan', emoji: '💪' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Animated.View entering={FadeInDown.duration(400)}>
          <Text style={[styles.title, { color: colors.text }]}>{t('arena.title')}</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            {language === 'id'
              ? 'Uji kemampuan coding kamu dengan tantangan!'
              : 'Test your coding skills with challenges!'}
          </Text>
        </Animated.View>

        {/* Stats Banner */}
        <Animated.View entering={FadeInDown.delay(100).duration(400)}>
          <Card style={styles.statsBanner}>
            <View style={styles.statItem}>
              <Text style={styles.statEmoji}>🏆</Text>
              <Text style={[styles.statValue, { color: colors.text }]}>{challengesSolved}</Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
                {language === 'id' ? 'Diselesaikan' : 'Solved'}
              </Text>
            </View>
            <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
            <View style={styles.statItem}>
              <Text style={styles.statEmoji}>📝</Text>
              <Text style={[styles.statValue, { color: colors.text }]}>{CHALLENGES.length}</Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
                {language === 'id' ? 'Tersedia' : 'Available'}
              </Text>
            </View>
            <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
            <View style={styles.statItem}>
              <Text style={styles.statEmoji}>⚡</Text>
              <Text style={[styles.statValue, { color: colors.text }]}>
                {CHALLENGES.filter((c) => c.difficulty === 'easy').length}
              </Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
                {language === 'id' ? 'Mudah' : 'Easy'}
              </Text>
            </View>
          </Card>
        </Animated.View>

        {/* Tabs */}
        <View style={[styles.tabBar, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          {tabs.map((tab) => (
            <Pressable
              key={tab.key}
              onPress={() => setActiveTab(tab.key)}
              style={[
                styles.tab,
                activeTab === tab.key && { backgroundColor: colors.primary + '15', borderColor: colors.primary },
              ]}
            >
              <Text style={{ fontSize: 16 }}>{tab.emoji}</Text>
              <Text
                style={[
                  styles.tabText,
                  {
                    color: activeTab === tab.key ? colors.primary : colors.textSecondary,
                    fontWeight: activeTab === tab.key ? '700' : '500',
                  },
                ]}
              >
                {language === 'id' ? tab.labelId : tab.label}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Challenge List */}
        {filtered.length === 0 ? (
          <Card style={{ alignItems: 'center', paddingVertical: 32 }}>
            <Text style={{ fontSize: 40 }}>🚀</Text>
            <Text style={[{ color: colors.textSecondary, marginTop: 8, fontSize: 15 }]}>
              {language === 'id' ? 'Segera hadir!' : 'Coming soon!'}
            </Text>
          </Card>
        ) : (
          filtered.map((ch, i) => (
            <ChallengeCard
              key={ch.id}
              challenge={ch}
              lang={language}
              index={i}
              onPress={() => router.push(`/challenge/${ch.id}` as any)}
            />
          ))
        )}

        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 60, paddingBottom: 20 },
  title: { fontSize: 28, fontWeight: '800', marginBottom: 4 },
  subtitle: { fontSize: 15, marginBottom: 16 },
  statsBanner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingVertical: 16 },
  statItem: { alignItems: 'center', gap: 4 },
  statEmoji: { fontSize: 22 },
  statValue: { fontSize: 22, fontWeight: '800' },
  statLabel: { fontSize: 11, fontWeight: '600' },
  statDivider: { width: 1, height: 40 },
  tabBar: { flexDirection: 'row', borderRadius: 14, borderWidth: 1, padding: 4, marginVertical: 16, gap: 4 },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    gap: 6,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  tabText: { fontSize: 13 },
  challengeCard: { marginBottom: 10 },
  challengeTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  challengeTitle: { fontSize: 16, fontWeight: '700', flex: 1, marginRight: 8 },
  challengeDesc: { fontSize: 13, lineHeight: 20, marginBottom: 10 },
  challengeBottom: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  challengeXP: { fontSize: 12, fontWeight: '700' },
  challengeTests: { fontSize: 11 },
  solveBtn: { marginLeft: 'auto', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 8, borderWidth: 1 },
  solveBtnText: { fontSize: 12, fontWeight: '700' },
});
