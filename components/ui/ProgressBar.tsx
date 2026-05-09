/**
 * CodeLab — ProgressBar Component
 * Animated progress bar with gradient fill
 */
import React, { useEffect } from 'react';
import { StyleSheet, View, type ViewStyle, type StyleProp } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useThemeColors } from '@/hooks/useAppTheme';

interface ProgressBarProps {
  progress: number; // 0 to 1
  color?: string;
  backgroundColor?: string;
  height?: number;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
  animated?: boolean;
}

export default function ProgressBar({
  progress,
  color,
  backgroundColor,
  height = 8,
  borderRadius = 4,
  style,
  animated = true,
}: ProgressBarProps) {
  const colors = useThemeColors();
  const width = useSharedValue(0);

  useEffect(() => {
    const clampedProgress = Math.min(Math.max(progress, 0), 1);
    if (animated) {
      width.value = withTiming(clampedProgress, {
        duration: 800,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      });
    } else {
      width.value = clampedProgress;
    }
  }, [progress, animated]);

  const animatedFillStyle = useAnimatedStyle(() => ({
    width: `${width.value * 100}%` as any,
  }));

  return (
    <View
      style={[
        {
          height,
          borderRadius,
          backgroundColor: backgroundColor || colors.surfaceElevated,
          overflow: 'hidden',
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          {
            height: '100%',
            borderRadius,
            backgroundColor: color || colors.primary,
          },
          animatedFillStyle,
        ]}
      />
    </View>
  );
}
