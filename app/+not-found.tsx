/**
 * CodeLab — 404 Not Found Screen
 * Premium error page with navigation back to home
 */
import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Animated, { FadeInDown, BounceIn } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { useThemeColors, useTranslation } from '@/hooks/useAppTheme';

export default function NotFoundScreen() {
  const colors = useThemeColors();
  const { language } = useTranslation();
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Animated.View entering={BounceIn.delay(100)} style={styles.emojiWrap}>
        <Text style={styles.emoji}>🔍</Text>
      </Animated.View>

      <Animated.Text
        entering={FadeInDown.delay(200).duration(400)}
        style={[styles.title, { color: colors.text }]}
      >
        404
      </Animated.Text>

      <Animated.Text
        entering={FadeInDown.delay(300).duration(400)}
        style={[styles.subtitle, { color: colors.textSecondary }]}
      >
        {language === 'id'
          ? 'Halaman tidak ditemukan'
          : 'Page not found'}
      </Animated.Text>

      <Animated.View entering={FadeInDown.delay(400).duration(400)}>
        <Pressable
          onPress={() => router.replace('/(tabs)' as any)}
          style={[styles.button, { backgroundColor: colors.primary }]}
        >
          <Text style={styles.buttonText}>
            {language === 'id' ? '🏠 Kembali ke Beranda' : '🏠 Back to Home'}
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emojiWrap: { marginBottom: 16 },
  emoji: { fontSize: 64 },
  title: {
    fontSize: 56,
    fontWeight: '900',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 32,
  },
  button: {
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
