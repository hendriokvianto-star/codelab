/**
 * CodeLab — Onboarding Screen (Fase 4)
 * Beautiful 3-step intro for first-time users
 * Uses TouchableOpacity for web compatibility
 */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useUserStore } from '@/stores/useUserStore';
import { useSettingsStore } from '@/stores/useSettingsStore';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface OnboardingSlide {
  emoji: string;
  titleEn: string;
  titleId: string;
  descEn: string;
  descId: string;
  color: string;
  features: { icon: string; textEn: string; textId: string }[];
}

const SLIDES: OnboardingSlide[] = [
  {
    emoji: '🚀',
    titleEn: 'Learn to Code',
    titleId: 'Belajar Ngoding',
    descEn: 'Master JavaScript & Laravel with interactive lessons, real code practice, and quizzes.',
    descId: 'Kuasai JavaScript & Laravel dengan pelajaran interaktif, praktik kode nyata, dan kuis.',
    color: '#6C5CE7',
    features: [
      { icon: '📖', textEn: '24 interactive lessons', textId: '24 pelajaran interaktif' },
      { icon: '💻', textEn: 'Write & run real code', textId: 'Tulis & jalankan kode nyata' },
      { icon: '📝', textEn: '6 quizzes with scoring', textId: '6 kuis dengan skor' },
    ],
  },
  {
    emoji: '🎮',
    titleEn: 'Gamified Learning',
    titleId: 'Belajar Itu Seru',
    descEn: 'Earn XP, level up, collect badges, and compete on the leaderboard!',
    descId: 'Dapatkan XP, naik level, kumpulkan badge, dan bersaing di papan peringkat!',
    color: '#00B894',
    features: [
      { icon: '⭐', textEn: 'Earn XP & level up', textId: 'Raih XP & naik level' },
      { icon: '🏅', textEn: '10 badges to collect', textId: '10 badge untuk dikumpulkan' },
      { icon: '🔥', textEn: 'Daily streak rewards', textId: 'Hadiah streak harian' },
    ],
  },
  {
    emoji: '⚡',
    titleEn: 'Code Challenges',
    titleId: 'Tantangan Koding',
    descEn: 'Solve coding challenges in the Arena with real test cases — all offline!',
    descId: 'Selesaikan tantangan koding di Arena dengan test case nyata — semua offline!',
    color: '#FDCB6E',
    features: [
      { icon: '🎯', textEn: 'Daily & weekly challenges', textId: 'Tantangan harian & mingguan' },
      { icon: '🧪', textEn: 'Automated test runner', textId: 'Test runner otomatis' },
      { icon: '📴', textEn: '100% works offline', textId: '100% bisa offline' },
    ],
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const completeOnboarding = useUserStore((s) => s.completeOnboarding);
  const language = useSettingsStore((s) => s.language);
  const setLanguage = useSettingsStore((s) => s.setLanguage);

  const slide = SLIDES[currentIndex];
  const isLast = currentIndex === SLIDES.length - 1;

  const handleNext = () => {
    if (isLast) {
      completeOnboarding();
      router.replace('/(tabs)' as any);
    } else {
      setCurrentIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
    }
  };

  const handleSkip = () => {
    completeOnboarding();
    router.replace('/(tabs)' as any);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Language Toggle */}
      <View style={styles.langRow}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setLanguage('en')}
          style={[styles.langBtn, language === 'en' && { backgroundColor: '#6C5CE730', borderColor: '#6C5CE7' }]}
        >
          <Text style={[styles.langText, language === 'en' && { color: '#FFF' }]}>🇺🇸 EN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setLanguage('id')}
          style={[styles.langBtn, language === 'id' && { backgroundColor: '#6C5CE730', borderColor: '#6C5CE7' }]}
        >
          <Text style={[styles.langText, language === 'id' && { color: '#FFF' }]}>🇮🇩 ID</Text>
        </TouchableOpacity>
      </View>

      {/* Slide Content */}
      <View style={styles.slideContainer}>
        {/* Emoji Hero */}
        <View style={[styles.emojiCircle, { backgroundColor: slide.color + '20' }]}>
          <Text style={styles.heroEmoji}>{slide.emoji}</Text>
        </View>

        {/* Title */}
        <Text style={styles.slideTitle}>
          {language === 'id' ? slide.titleId : slide.titleEn}
        </Text>

        {/* Description */}
        <Text style={styles.slideDesc}>
          {language === 'id' ? slide.descId : slide.descEn}
        </Text>

        {/* Features */}
        <View style={styles.featureList}>
          {slide.features.map((f, fi) => (
            <View
              key={fi}
              style={[styles.featureItem, { backgroundColor: slide.color + '10', borderColor: slide.color + '30' }]}
            >
              <Text style={styles.featureIcon}>{f.icon}</Text>
              <Text style={styles.featureText}>
                {language === 'id' ? f.textId : f.textEn}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Step indicator */}
        <Text style={styles.stepText}>
          {currentIndex + 1} / {SLIDES.length}
        </Text>

        {/* Dots */}
        <View style={styles.dotsRow}>
          {SLIDES.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                {
                  backgroundColor: i === currentIndex ? slide.color : '#333',
                  width: i === currentIndex ? 24 : 8,
                },
              ]}
            />
          ))}
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          {!isLast ? (
            <TouchableOpacity activeOpacity={0.7} onPress={handleSkip} style={styles.skipBtn}>
              <Text style={styles.skipText}>
                {language === 'id' ? 'Lewati' : 'Skip'}
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 80 }} />
          )}

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleNext}
            style={[styles.nextBtn, { backgroundColor: slide.color }]}
          >
            <Text style={[styles.nextText, { color: slide.color === '#FDCB6E' ? '#1A1A2E' : '#FFF' }]}>
              {isLast
                ? (language === 'id' ? 'Mulai Belajar 🚀' : 'Start Learning 🚀')
                : (language === 'id' ? 'Selanjutnya →' : 'Next →')
              }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
    minHeight: SCREEN_HEIGHT,
  },
  langRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingTop: 56,
    paddingBottom: 8,
  },
  langBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  langText: { color: '#888', fontSize: 14, fontWeight: '600' },
  slideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emojiCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  heroEmoji: { fontSize: 56 },
  slideTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 12,
  },
  slideDesc: {
    fontSize: 16,
    color: '#A0AEC0',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
    paddingHorizontal: 10,
    maxWidth: 420,
  },
  featureList: {
    gap: 10,
    width: '100%',
    maxWidth: 420,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    gap: 12,
  },
  featureIcon: { fontSize: 22 },
  featureText: { fontSize: 15, color: '#E2E8F0', fontWeight: '500' },
  bottomSection: {
    paddingHorizontal: 32,
    paddingBottom: 40,
    alignItems: 'center',
  },
  stepText: {
    color: '#555',
    fontSize: 13,
    marginBottom: 8,
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginBottom: 20,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    width: '100%',
    maxWidth: 420,
  },
  skipBtn: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  skipText: {
    color: '#666',
    fontSize: 15,
    fontWeight: '600',
  },
  nextBtn: {
    flex: 1,
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    ...Platform.select({
      web: { cursor: 'pointer' as any },
    }),
  },
  nextText: {
    fontSize: 17,
    fontWeight: '800',
  },
});
