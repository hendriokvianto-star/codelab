/**
 * CodeLab — Rank Screen (Fase 3)
 * Badge collection gallery + leaderboard
 */
import React from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar, Pressable } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useThemeColors, useTranslation } from '@/hooks/useAppTheme';
import { useSettingsStore } from '@/stores/useSettingsStore';
import { useUserStore } from '@/stores/useUserStore';
import { BADGES } from '@/constants/Gamification';
import Card from '@/components/ui/Card';
import ProgressBar from '@/components/ui/ProgressBar';

const MOCK_LEADERBOARD = [
  { name: 'Andi', xp: 2450, level: 7, emoji: '🎓' },
  { name: 'Sari', xp: 1880, level: 6, emoji: '🏗️' },
  { name: 'Budi', xp: 1200, level: 5, emoji: '🔧' },
  { name: 'Dewi', xp: 950, level: 4, emoji: '⚙️' },
  { name: 'Raka', xp: 640, level: 4, emoji: '⚙️' },
];

export default function RankScreen() {
  const colors = useThemeColors();
  const { t, language } = useTranslation();
  const isDarkMode = useSettingsStore((s) => s.isDarkMode);
  const { totalXP, level, earnedBadges } = useUserStore();

  const allBadges = Object.values(BADGES);
  const earnedCount = earnedBadges.length;
  const totalBadges = allBadges.length;
  const badgeProgress = totalBadges > 0 ? earnedCount / totalBadges : 0;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Animated.View entering={FadeInDown.duration(400)}>
          <Text style={[styles.title, { color: colors.text }]}>
            {language === 'id' ? 'Peringkat & Badge' : 'Rank & Badges'}
          </Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            {language === 'id' ? 'Kumpulkan badge dan naik peringkat!' : 'Collect badges and climb the ranks!'}
          </Text>
        </Animated.View>

        {/* Badge Collection */}
        <Animated.View entering={FadeInDown.delay(100).duration(400)}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              🏅 {t('badge.your_badges')}
            </Text>
            <Text style={[styles.badgeCount, { color: colors.primary }]}>
              {earnedCount}/{totalBadges}
            </Text>
          </View>
          <ProgressBar progress={badgeProgress} color={colors.xpColor} height={6} style={{ marginBottom: 16 }} />

          <View style={styles.badgeGrid}>
            {allBadges.map((badge, i) => {
              const isEarned = earnedBadges.includes(badge.id);
              const name = language === 'id' ? badge.nameId : badge.name;
              const desc = language === 'id' ? badge.descriptionId : badge.description;

              return (
                <Animated.View key={badge.id} entering={FadeInUp.delay(i * 60).duration(300)}>
                  <Card style={[
                    styles.badgeCard,
                    {
                      opacity: isEarned ? 1 : 0.35,
                      borderColor: isEarned ? colors.xpColor : colors.border,
                      borderWidth: isEarned ? 1.5 : 1,
                    },
                  ]}>
                    <Text style={styles.badgeEmoji}>{badge.emoji}</Text>
                    <Text style={[styles.badgeName, { color: isEarned ? colors.text : colors.textMuted }]} numberOfLines={1}>
                      {name}
                    </Text>
                    <Text style={[styles.badgeDesc, { color: colors.textMuted }]} numberOfLines={2}>
                      {desc}
                    </Text>
                    {isEarned && (
                      <View style={[styles.earnedTag, { backgroundColor: colors.success + '20' }]}>
                        <Text style={[styles.earnedTagText, { color: colors.success }]}>✅</Text>
                      </View>
                    )}
                  </Card>
                </Animated.View>
              );
            })}
          </View>
        </Animated.View>

        {/* Leaderboard */}
        <Animated.View entering={FadeInDown.delay(300).duration(400)}>
          <Text style={[styles.sectionTitle, { color: colors.text, marginTop: 24, marginBottom: 12 }]}>
            🏆 {language === 'id' ? 'Papan Peringkat' : 'Leaderboard'}
          </Text>

          {/* Your position */}
          <Card style={[styles.yourRank, { borderColor: colors.primary, borderWidth: 1.5 }]}>
            <View style={styles.rankRow}>
              <View style={[styles.rankBadge, { backgroundColor: colors.primary + '20' }]}>
                <Text style={[styles.rankNumber, { color: colors.primary }]}>#6</Text>
              </View>
              <Text style={[styles.rankName, { color: colors.primary }]}>
                {language === 'id' ? 'Kamu' : 'You'} ⭐
              </Text>
              <Text style={[styles.rankXP, { color: colors.xpColor }]}>{totalXP} XP</Text>
              <Text style={[styles.rankLevel, { color: colors.textSecondary }]}>Lv.{level}</Text>
            </View>
          </Card>

          {MOCK_LEADERBOARD.map((user, i) => (
            <Animated.View key={user.name} entering={FadeInDown.delay(400 + i * 60).duration(250)}>
              <View style={[styles.leaderRow, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                <View style={[
                  styles.rankBadge,
                  { backgroundColor: i === 0 ? '#FDCB6E20' : i === 1 ? '#C0C0C020' : i === 2 ? '#CD7F3220' : colors.surfaceElevated },
                ]}>
                  <Text style={[
                    styles.rankNumber,
                    { color: i === 0 ? '#FDCB6E' : i === 1 ? '#C0C0C0' : i === 2 ? '#CD7F32' : colors.textSecondary },
                  ]}>
                    #{i + 1}
                  </Text>
                </View>
                <Text style={styles.leaderEmoji}>{user.emoji}</Text>
                <Text style={[styles.rankName, { color: colors.text }]}>{user.name}</Text>
                <Text style={[styles.rankXP, { color: colors.xpColor }]}>{user.xp} XP</Text>
                <Text style={[styles.rankLevel, { color: colors.textSecondary }]}>Lv.{user.level}</Text>
              </View>
            </Animated.View>
          ))}
        </Animated.View>

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
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  sectionTitle: { fontSize: 18, fontWeight: '700' },
  badgeCount: { fontSize: 14, fontWeight: '700' },
  badgeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  badgeCard: {
    width: 155,
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    position: 'relative',
  },
  badgeEmoji: { fontSize: 32, marginBottom: 6 },
  badgeName: { fontSize: 13, fontWeight: '700', textAlign: 'center', marginBottom: 2 },
  badgeDesc: { fontSize: 10, textAlign: 'center', lineHeight: 14 },
  earnedTag: { position: 'absolute', top: 6, right: 6, borderRadius: 10, paddingHorizontal: 4, paddingVertical: 2 },
  earnedTagText: { fontSize: 12 },
  yourRank: { marginBottom: 8 },
  rankRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  rankBadge: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  rankNumber: { fontSize: 14, fontWeight: '800' },
  rankName: { flex: 1, fontSize: 15, fontWeight: '700' },
  rankXP: { fontSize: 13, fontWeight: '700' },
  rankLevel: { fontSize: 12, fontWeight: '600', minWidth: 36, textAlign: 'right' },
  leaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    gap: 10,
    marginBottom: 6,
  },
  leaderEmoji: { fontSize: 18 },
});
