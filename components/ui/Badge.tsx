/**
 * CodeLab — Badge Component
 * Display a small badge/chip with icon and text
 */
import React from 'react';
import { StyleSheet, View, Text, type ViewStyle, type StyleProp } from 'react-native';
import { useThemeColors } from '@/hooks/useAppTheme';

interface BadgeProps {
  text: string;
  emoji?: string;
  color?: string;
  backgroundColor?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: StyleProp<ViewStyle>;
}

export default function Badge({
  text,
  emoji,
  color,
  backgroundColor,
  size = 'md',
  style,
}: BadgeProps) {
  const colors = useThemeColors();

  const sizes = {
    sm: { paddingH: 8, paddingV: 3, fontSize: 11, emojiSize: 12 },
    md: { paddingH: 12, paddingV: 5, fontSize: 13, emojiSize: 14 },
    lg: { paddingH: 16, paddingV: 7, fontSize: 15, emojiSize: 18 },
  };

  const s = sizes[size];

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: s.paddingH,
          paddingVertical: s.paddingV,
          borderRadius: 20,
          backgroundColor: backgroundColor || colors.surfaceElevated,
          alignSelf: 'flex-start',
          gap: 4,
        },
        style,
      ]}
    >
      {emoji && (
        <Text style={{ fontSize: s.emojiSize }}>{emoji}</Text>
      )}
      <Text
        style={{
          fontSize: s.fontSize,
          fontWeight: '600',
          color: color || colors.text,
        }}
      >
        {text}
      </Text>
    </View>
  );
}
