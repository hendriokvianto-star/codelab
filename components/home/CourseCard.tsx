/**
 * CodeLab — CourseCard Component
 * Displays a course (JavaScript / Laravel) with icon, progress, and action
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  FadeInDown,
} from 'react-native-reanimated';
import { useThemeColors, useTranslation } from '@/hooks/useAppTheme';
import Card from '@/components/ui/Card';
import ProgressBar from '@/components/ui/ProgressBar';
import Badge from '@/components/ui/Badge';

interface CourseCardProps {
  courseId: string;
  icon: string;
  title: string;
  description: string;
  modules: number;
  lessons: number;
  progress: number; // 0 to 1
  color: string;
  onPress: () => void;
  index?: number;
}

export default function CourseCard({
  courseId,
  icon,
  title,
  description,
  modules,
  lessons,
  progress,
  color,
  onPress,
  index = 0,
}: CourseCardProps) {
  const colors = useThemeColors();
  const { t } = useTranslation();

  const progressPercent = Math.round(progress * 100);
  const statusText =
    progress === 0
      ? t('learn.start')
      : progress >= 1
        ? t('learn.completed')
        : t('learn.continue');

  return (
    <Animated.View entering={FadeInDown.delay(index * 120).duration(500).springify()}>
      <Card onPress={onPress} elevated style={styles.card}>
        {/* Top color accent stripe */}
        <View style={[styles.accentStripe, { backgroundColor: color }]} />

        <View style={styles.content}>
          {/* Icon and Info */}
          <View style={styles.header}>
            <Text style={styles.icon}>{icon}</Text>
            <View style={styles.info}>
              <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
              <Text style={[styles.description, { color: colors.textSecondary }]}>
                {description}
              </Text>
            </View>
          </View>

          {/* Module / Lesson count badges */}
          <View style={styles.badges}>
            <Badge text={`${modules} ${t('learn.modules')}`} emoji="📦" size="sm" />
            <Badge text={`${lessons} ${t('learn.lessons')}`} emoji="📄" size="sm" />
          </View>

          {/* Progress */}
          <View style={styles.progressSection}>
            <View style={styles.progressHeader}>
              <Text style={[styles.progressLabel, { color: colors.textSecondary }]}>
                {statusText}
              </Text>
              <Text style={[styles.progressPercent, { color }]}>
                {progressPercent}%
              </Text>
            </View>
            <ProgressBar progress={progress} color={color} height={6} />
          </View>
        </View>
      </Card>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    overflow: 'hidden',
    padding: 0,
  },
  accentStripe: {
    height: 4,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 12,
  },
  icon: {
    fontSize: 40,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 2,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
  },
  badges: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 14,
  },
  progressSection: {
    gap: 6,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    fontSize: 13,
    fontWeight: '500',
  },
  progressPercent: {
    fontSize: 13,
    fontWeight: '700',
  },
});
