/**
 * CodeLab — Badge Toast Notification
 * Animated toast that appears when a badge is earned
 */
import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withDelay,
  runOnJS,
  Easing,
} from 'react-native-reanimated';
import { useSettingsStore } from '@/stores/useSettingsStore';

interface BadgeToastProps {
  emoji: string;
  name: string;
  nameId: string;
  onDismiss: () => void;
}

export default function BadgeToast({ emoji, name, nameId, onDismiss }: BadgeToastProps) {
  const language = useSettingsStore((s) => s.language);
  const translateY = useSharedValue(-120);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  useEffect(() => {
    translateY.value = withSequence(
      withTiming(0, { duration: 500, easing: Easing.out(Easing.back(1.4)) }),
      withDelay(2500, withTiming(-120, { duration: 400 }))
    );
    opacity.value = withSequence(
      withTiming(1, { duration: 400 }),
      withDelay(2500, withTiming(0, { duration: 400 }))
    );
    scale.value = withSequence(
      withTiming(1, { duration: 500, easing: Easing.out(Easing.back(1.4)) }),
      withDelay(2500, withTiming(0.8, { duration: 400 }))
    );

    const timer = setTimeout(() => onDismiss(), 3300);
    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }, { scale: scale.value }],
    opacity: opacity.value,
  }));

  const displayName = language === 'id' ? nameId : name;

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.emojiContainer}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {language === 'id' ? '🎉 Badge Baru!' : '🎉 New Badge!'}
        </Text>
        <Text style={styles.name}>{displayName}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A2E',
    borderWidth: 1.5,
    borderColor: '#FDCB6E',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 12,
    shadowColor: '#FDCB6E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
    zIndex: 9999,
  },
  emojiContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FDCB6E20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: { fontSize: 24 },
  textContainer: { gap: 2 },
  title: { fontSize: 12, fontWeight: '700', color: '#FDCB6E', letterSpacing: 0.5 },
  name: { fontSize: 16, fontWeight: '800', color: '#E6EDF3' },
});
