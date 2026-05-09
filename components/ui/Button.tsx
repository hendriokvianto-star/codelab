/**
 * CodeLab — Button Component
 * Primary button with variants, loading state, and press animation
 */
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  type ViewStyle,
  type StyleProp,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { useThemeColors } from '@/hooks/useAppTheme';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  fullWidth?: boolean;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  style,
  fullWidth = false,
}: ButtonProps) {
  const colors = useThemeColors();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95, { damping: 15, stiffness: 200 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 200 });
  };

  const sizeStyles = {
    sm: { paddingH: 16, paddingV: 8, fontSize: 13, borderRadius: 10 },
    md: { paddingH: 24, paddingV: 12, fontSize: 15, borderRadius: 12 },
    lg: { paddingH: 32, paddingV: 16, fontSize: 17, borderRadius: 14 },
  };

  const s = sizeStyles[size];

  const getVariantStyles = (): { bg: string; textColor: string; borderColor?: string } => {
    switch (variant) {
      case 'primary':
        return { bg: colors.primary, textColor: '#FFFFFF' };
      case 'secondary':
        return { bg: colors.secondary, textColor: '#FFFFFF' };
      case 'outline':
        return {
          bg: 'transparent',
          textColor: colors.primary,
          borderColor: colors.primary,
        };
      case 'ghost':
        return { bg: 'transparent', textColor: colors.primary };
      default:
        return { bg: colors.primary, textColor: '#FFFFFF' };
    }
  };

  const v = getVariantStyles();

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled || loading}
      style={[
        animatedStyle,
        {
          backgroundColor: disabled ? colors.surfaceElevated : v.bg,
          paddingHorizontal: s.paddingH,
          paddingVertical: s.paddingV,
          borderRadius: s.borderRadius,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          opacity: disabled ? 0.5 : 1,
          ...(v.borderColor && { borderWidth: 1.5, borderColor: v.borderColor }),
          ...(fullWidth && { width: '100%' }),
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={v.textColor} />
      ) : (
        <>
          {icon}
          <Text
            style={{
              fontSize: s.fontSize,
              fontWeight: '700',
              color: disabled ? colors.textMuted : v.textColor,
            }}
          >
            {title}
          </Text>
        </>
      )}
    </AnimatedPressable>
  );
}
