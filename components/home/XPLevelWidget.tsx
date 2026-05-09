/**
 * CodeLab — XPLevelWidget
 * Displays current level, XP, and progress to next level
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useThemeColors } from '@/hooks/useAppTheme';
import { useUserStore } from '@/stores/useUserStore';
import { getLevelFromXP } from '@/constants/Gamification';
import { useSettingsStore } from '@/stores/useSettingsStore';
import Card from '@/components/ui/Card';
import ProgressBar from '@/components/ui/ProgressBar';

export default function XPLevelWidget() {
  const colors = useThemeColors();
  const language = useSettingsStore((s) => s.language);
  const totalXP = useUserStore((s) => s.totalXP);
  const levelInfo = getLevelFromXP(totalXP);

  const levelTitle = language === 'id' ? levelInfo.titleId : levelInfo.title;

  return (
    <Card style={styles.container}>
      {/* Level header */}
      <View style={styles.header}>
        <View style={styles.levelBadge}>
          <Text style={styles.levelEmoji}>{levelInfo.emoji}</Text>
          <View>
            <Text style={[styles.levelLabel, { color: colors.textSecondary }]}>
              Level {levelInfo.level}
            </Text>
            <Text style={[styles.levelTitle, { color: colors.levelColor }]}>
              {levelTitle}
            </Text>
          </View>
        </View>
        <View style={styles.xpBadge}>
          <Text style={[styles.xpText, { color: colors.xpColor }]}>
            ⭐ {totalXP} XP
          </Text>
        </View>
      </View>

      {/* Progress to next level */}
      {!levelInfo.isMaxLevel && (
        <View style={styles.progressSection}>
          <ProgressBar
            progress={levelInfo.progress}
            color={colors.levelColor}
            height={10}
            borderRadius={5}
          />
          <Text style={[styles.progressText, { color: colors.textMuted }]}>
            {levelInfo.xpForNextLevel} XP {language === 'id' ? 'menuju level berikutnya' : 'to next level'}
          </Text>
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  levelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  levelEmoji: {
    fontSize: 32,
  },
  levelLabel: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  levelTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  xpBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: 'rgba(253, 203, 110, 0.15)',
  },
  xpText: {
    fontSize: 14,
    fontWeight: '700',
  },
  progressSection: {
    gap: 6,
  },
  progressText: {
    fontSize: 12,
    textAlign: 'right',
  },
});
