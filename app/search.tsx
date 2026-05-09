/**
 * CodeLab — Search Screen
 * Search across all lessons and challenges
 */
import React, { useState, useMemo } from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar, TextInput, Pressable } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { useThemeColors, useTranslation } from '@/hooks/useAppTheme';
import { useSettingsStore } from '@/stores/useSettingsStore';
import { getAllLessons } from '@/content/index';
import { CHALLENGES } from '@/content/challenges';
import Card from '@/components/ui/Card';

export default function SearchScreen() {
  const colors = useThemeColors();
  const { language } = useTranslation();
  const isDarkMode = useSettingsStore((s) => s.isDarkMode);
  const router = useRouter();
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (query.trim().length < 2) return { lessons: [], challenges: [] };
    const q = query.toLowerCase();

    const allLessons = getAllLessons();
    const matchedLessons = allLessons.filter((l) => {
      const title = language === 'id' ? l.titleId : l.title;
      const theory = l.theory.map((t) =>
        t.type === 'text'
          ? (language === 'id' ? t.contentId || '' : t.content)
          : t.type === 'code'
          ? t.code || ''
          : ''
      ).join(' ');
      return title.toLowerCase().includes(q) || theory.toLowerCase().includes(q);
    });

    const matchedChallenges = CHALLENGES.filter((c) => {
      const title = language === 'id' ? c.titleId : c.title;
      const desc = language === 'id' ? c.descriptionId : c.description;
      return title.toLowerCase().includes(q) || desc.toLowerCase().includes(q);
    });

    return { lessons: matchedLessons.slice(0, 10), challenges: matchedChallenges.slice(0, 5) };
  }, [query, language]);

  const hasResults = results.lessons.length > 0 || results.challenges.length > 0;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Animated.View entering={FadeInDown.duration(300)} style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Text style={{ fontSize: 24, color: colors.text }}>←</Text>
          </Pressable>
          <Text style={[styles.title, { color: colors.text }]}>
            {language === 'id' ? 'Pencarian' : 'Search'}
          </Text>
        </Animated.View>

        {/* Search Input */}
        <View style={[styles.searchBox, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={{ fontSize: 18 }}>🔍</Text>
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            value={query}
            onChangeText={setQuery}
            placeholder={language === 'id' ? 'Cari pelajaran, tantangan...' : 'Search lessons, challenges...'}
            placeholderTextColor={colors.textMuted}
            autoFocus
          />
          {query.length > 0 && (
            <Pressable onPress={() => setQuery('')}>
              <Text style={{ fontSize: 18, color: colors.textMuted }}>✕</Text>
            </Pressable>
          )}
        </View>

        {/* Results */}
        {query.trim().length >= 2 && !hasResults && (
          <View style={styles.emptyState}>
            <Text style={{ fontSize: 48 }}>🔎</Text>
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              {language === 'id' ? 'Tidak ditemukan' : 'No results found'}
            </Text>
          </View>
        )}

        {results.lessons.length > 0 && (
          <Animated.View entering={FadeInDown.duration(300)}>
            <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>
              📚 {language === 'id' ? 'Pelajaran' : 'Lessons'} ({results.lessons.length})
            </Text>
            {results.lessons.map((lesson, i) => {
              const title = language === 'id' ? lesson.titleId : lesson.title;
              return (
                <Pressable key={lesson.id} onPress={() => router.push(`/lesson/${lesson.id}` as any)}>
                  <Card style={styles.resultCard}>
                    <View style={styles.resultRow}>
                      <Text style={{ fontSize: 16 }}>
                        {lesson.courseId === 'javascript' ? '⚡' : '🔺'}
                      </Text>
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.resultTitle, { color: colors.text }]}>{title}</Text>
                        <Text style={[styles.resultMeta, { color: colors.textMuted }]}>
                          {lesson.courseId === 'javascript' ? 'JavaScript' : 'Laravel'} • +{lesson.xp} XP
                        </Text>
                      </View>
                      <Text style={{ color: colors.textSecondary }}>→</Text>
                    </View>
                  </Card>
                </Pressable>
              );
            })}
          </Animated.View>
        )}

        {results.challenges.length > 0 && (
          <Animated.View entering={FadeInDown.delay(100).duration(300)}>
            <Text style={[styles.sectionLabel, { color: colors.textSecondary, marginTop: 16 }]}>
              ⚡ {language === 'id' ? 'Tantangan' : 'Challenges'} ({results.challenges.length})
            </Text>
            {results.challenges.map((ch) => {
              const title = language === 'id' ? ch.titleId : ch.title;
              return (
                <Pressable key={ch.id} onPress={() => router.push(`/challenge/${ch.id}` as any)}>
                  <Card style={styles.resultCard}>
                    <View style={styles.resultRow}>
                      <Text style={{ fontSize: 16 }}>🎯</Text>
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.resultTitle, { color: colors.text }]}>{title}</Text>
                        <Text style={[styles.resultMeta, { color: colors.textMuted }]}>
                          {ch.difficulty} • +{ch.xp} XP
                        </Text>
                      </View>
                      <Text style={{ color: colors.textSecondary }}>→</Text>
                    </View>
                  </Card>
                </Pressable>
              );
            })}
          </Animated.View>
        )}

        {query.trim().length < 2 && (
          <View style={styles.emptyState}>
            <Text style={{ fontSize: 48 }}>💡</Text>
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              {language === 'id' ? 'Ketik minimal 2 karakter untuk mencari' : 'Type at least 2 characters to search'}
            </Text>
          </View>
        )}

        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 50, paddingBottom: 20 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: '800' },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
    marginBottom: 20,
  },
  searchInput: { flex: 1, fontSize: 16, fontWeight: '500' },
  sectionLabel: { fontSize: 14, fontWeight: '700', marginBottom: 8, letterSpacing: 0.5 },
  resultCard: { marginBottom: 6 },
  resultRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  resultTitle: { fontSize: 15, fontWeight: '600' },
  resultMeta: { fontSize: 12, marginTop: 2 },
  emptyState: { alignItems: 'center', paddingVertical: 48, gap: 12 },
  emptyText: { fontSize: 15, textAlign: 'center' },
});
