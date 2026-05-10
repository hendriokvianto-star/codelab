/**
 * CodeLab — StreakWidget
 * Shows daily learning streak with fire animation
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import { useThemeColors, useTranslation } from '@/hooks/useAppTheme';
import { useGamificationStore } from '@/stores/useGamificationStore';
import Card from '@/components/ui/Card';

export default function StreakWidget() {
  const colors = useThemeColors();
  const { t } = useTranslation();
  const streakDays = useGamificationStore((s) => s.streakDays);

  // Fire animation — gentle floating effect
  const fireScale = useSharedValue(1);
  const fireRotate = useSharedValue(0);

  React.useEffect(() => {
    fireScale.value = withRepeat(
      withSequence(
        withTiming(1.15, { duration: 600 }),
        withTiming(1, { duration: 600 })
      ),
      -1,
      true
    );
    fireRotate.value = withRepeat(
      withSequence(
        withTiming(-5, { duration: 400 }),
        withTiming(5, { duration: 800 }),
        withTiming(0, { duration: 400 })
      ),
      -1,
      true
    );
  }, []);

  const fireAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: fireScale.value },
      { rotate: `${fireRotate.value}deg` },
    ],
  }));

  return (
    <Card style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textSection}>
          <Text style={[styles.label, { color: colors.textSecondary }]}>
            🔥 {t('streak.title')}
          </Text>
          <View style={styles.countRow}>
            <Text style={[styles.count, { color: colors.streakColor }]}>
              {streakDays}
            </Text>
            <Text style={[styles.days, { color: colors.textSecondary }]}>
              {streakDays === 1 ? 'day' : 'days'}
            </Text>
          </View>
          <Text style={[styles.motivation, { color: colors.textMuted }]}>
            {streakDays >= 7 ? t('streak.great') : t('streak.keep_going')}
          </Text>
        </View>

        <Animated.Text style={[styles.fireEmoji, fireAnimatedStyle]}>
          🔥
        </Animated.Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textSection: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  countRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
  },
  count: {
    fontSize: 36,
    fontWeight: '800',
  },
  days: {
    fontSize: 16,
    fontWeight: '500',
  },
  motivation: {
    fontSize: 13,
    marginTop: 2,
  },
  fireEmoji: {
    fontSize: 48,
  },
});
