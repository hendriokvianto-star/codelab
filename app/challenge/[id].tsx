/**
 * CodeLab — Challenge Screen
 * Solve coding challenges with live code editor and test runner
 */
import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar, TextInput, Platform, KeyboardAvoidingView } from 'react-native';
import Animated, { FadeInDown, FadeIn, FadeInRight } from 'react-native-reanimated';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useThemeColors, useTranslation } from '@/hooks/useAppTheme';
import { useSettingsStore } from '@/stores/useSettingsStore';
import { useUserStore } from '@/stores/useUserStore';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { getChallenge } from '@/content/challenges';
import { checkBadges, type BadgeNotification } from '@/lib/badgeEngine';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import BadgeToast from '@/components/ui/BadgeToast';

export default function ChallengeScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useThemeColors();
  const { t, language } = useTranslation();
  const isDarkMode = useSettingsStore((s) => s.isDarkMode);
  const router = useRouter();

  const addXP = useGamificationStore((s) => s.addXP);
  const incrementChallenges = useUserStore((s) => s.incrementChallengesSolved);
  const updateStreak = useGamificationStore((s) => s.updateStreak);

  const challenge = getChallenge(id || '');
  const [code, setCode] = useState(challenge?.starterCode || '');
  const [results, setResults] = useState<{ passed: boolean; input: string; expected: string; got: string }[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [isSolved, setIsSolved] = useState(false);
  const [badgeNotif, setBadgeNotif] = useState<BadgeNotification | null>(null);
  const startTime = useRef(Date.now());

  if (!challenge) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: colors.text, fontSize: 18 }}>Challenge not found</Text>
        <Button title="Go Back" onPress={() => router.back()} variant="outline" style={{ marginTop: 16 }} />
      </View>
    );
  }

  const title = language === 'id' ? challenge.titleId : challenge.title;
  const description = language === 'id' ? challenge.descriptionId : challenge.description;
  const hint = language === 'id' ? challenge.hintId : challenge.hint;
  const difficultyColor = challenge.difficulty === 'easy' ? colors.success : challenge.difficulty === 'medium' ? '#FDCB6E' : colors.error;

  const handleRunTests = () => {
    const testResults = challenge.testCases.map((tc) => {
      try {
        const logs: string[] = [];
        const fakeConsole = { log: (...a: any[]) => logs.push(a.map(String).join(' ')), warn: () => {}, error: () => {} };
        const fn = new Function('console', code + '\nreturn ' + tc.input);
        const result = fn(fakeConsole);
        const got = String(result);
        return { passed: got === tc.expected, input: tc.input, expected: tc.expected, got };
      } catch (err: any) {
        return { passed: false, input: tc.input, expected: tc.expected, got: `Error: ${err.message}` };
      }
    });

    setResults(testResults);
    const allPassed = testResults.every((r) => r.passed);

    if (allPassed && !isSolved) {
      setIsSolved(true);
      addXP(challenge.xp);
      incrementChallenges();
      updateStreak();

      // Check for speed coder badge
      const elapsed = (Date.now() - startTime.current) / 1000;
      if (elapsed < 120) {
        useGamificationStore.getState().earnBadge('speed_coder');
      }

      // Check for new badges
      const newBadges = checkBadges();
      if (newBadges.length > 0) {
        setBadgeNotif(newBadges[0]);
      }
    }
  };

  const allPassed = results.length > 0 && results.every((r) => r.passed);

  return (
    <KeyboardAvoidingView style={[styles.container, { backgroundColor: colors.background }]} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        {/* Header */}
        <Animated.View entering={FadeInDown.duration(400)} style={styles.header}>
          <Button title="←" onPress={() => router.back()} variant="ghost" size="sm" />
          <View style={styles.headerInfo}>
            <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
            <View style={styles.headerMeta}>
              <Badge text={`+${challenge.xp} XP`} emoji="⭐" size="sm" color={colors.xpColor} />
              <Badge
                text={challenge.difficulty.toUpperCase()}
                size="sm"
                color={difficultyColor}
              />
            </View>
          </View>
        </Animated.View>

        {/* Description */}
        <Animated.View entering={FadeInDown.delay(100).duration(400)}>
          <Card>
            <Text style={[styles.description, { color: colors.text }]}>{description}</Text>
          </Card>
        </Animated.View>

        {/* Code Editor */}
        <Animated.View entering={FadeInDown.delay(200).duration(400)}>
          <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>
            💻 {language === 'id' ? 'Kode Kamu' : 'Your Code'}
          </Text>
          <View style={[styles.editor, { backgroundColor: colors.codeBackground, borderColor: colors.border }]}>
            <TextInput
              style={[styles.codeInput, { color: colors.codeText }]}
              value={code}
              onChangeText={setCode}
              multiline
              autoCapitalize="none"
              autoCorrect={false}
              spellCheck={false}
              textAlignVertical="top"
              placeholderTextColor={colors.textMuted}
            />
          </View>
        </Animated.View>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <Button
            title={`▶ ${language === 'id' ? 'Jalankan Tes' : 'Run Tests'}`}
            onPress={handleRunTests}
            variant="primary"
            fullWidth
            size="lg"
          />
          <Button
            title={showHint ? `💡 ${hint}` : `💡 ${language === 'id' ? 'Petunjuk' : 'Hint'}`}
            onPress={() => setShowHint(!showHint)}
            variant="ghost"
            fullWidth
          />
        </View>

        {/* Test Results */}
        {results.length > 0 && (
          <Animated.View entering={FadeIn.duration(300)}>
            <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>
              📋 {language === 'id' ? 'Hasil Tes' : 'Test Results'}
            </Text>
            {results.map((r, i) => (
              <Animated.View key={i} entering={FadeInRight.delay(i * 80).duration(250)}>
                <View style={[
                  styles.testRow,
                  {
                    backgroundColor: r.passed ? colors.success + '15' : colors.error + '15',
                    borderColor: r.passed ? colors.success : colors.error,
                  },
                ]}>
                  <Text style={{ fontSize: 18 }}>{r.passed ? '✅' : '❌'}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.testInput, { color: colors.textSecondary }]}>
                      {r.input}
                    </Text>
                    <Text style={[styles.testExpected, { color: colors.text }]}>
                      {language === 'id' ? 'Diharapkan' : 'Expected'}: {r.expected}
                    </Text>
                    {!r.passed && (
                      <Text style={[styles.testGot, { color: colors.error }]}>
                        {language === 'id' ? 'Didapat' : 'Got'}: {r.got}
                      </Text>
                    )}
                  </View>
                </View>
              </Animated.View>
            ))}

            {/* Success Banner */}
            {allPassed && (
              <Animated.View entering={FadeIn.delay(300).duration(400)}>
                <Card style={[styles.successBanner, { borderColor: colors.success }]}>
                  <Text style={styles.successEmoji}>🎉</Text>
                  <Text style={[styles.successTitle, { color: colors.success }]}>
                    {language === 'id' ? 'Semua Tes Berhasil!' : 'All Tests Passed!'}
                  </Text>
                  <Text style={[styles.successXP, { color: colors.xpColor }]}>
                    ⭐ +{challenge.xp} XP
                  </Text>
                </Card>
              </Animated.View>
            )}
          </Animated.View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>

      {badgeNotif && (
        <BadgeToast
          emoji={badgeNotif.emoji}
          name={badgeNotif.name}
          nameId={badgeNotif.nameId}
          onDismiss={() => setBadgeNotif(null)}
        />
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 50, paddingBottom: 20 },
  header: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginBottom: 16 },
  headerInfo: { flex: 1 },
  title: { fontSize: 22, fontWeight: '800', marginBottom: 6 },
  headerMeta: { flexDirection: 'row', gap: 8 },
  description: { fontSize: 15, lineHeight: 24 },
  sectionLabel: { fontSize: 14, fontWeight: '700', marginTop: 20, marginBottom: 8, letterSpacing: 0.5 },
  editor: { borderRadius: 12, borderWidth: 1, minHeight: 200, overflow: 'hidden' },
  codeInput: { fontSize: 13, fontFamily: 'SpaceMono', padding: 14, lineHeight: 20, minHeight: 200 },
  actionRow: { marginTop: 12, gap: 4 },
  testRow: { flexDirection: 'row', alignItems: 'flex-start', padding: 14, borderRadius: 12, borderWidth: 1, gap: 10, marginBottom: 8 },
  testInput: { fontSize: 12, fontFamily: 'SpaceMono', marginBottom: 2 },
  testExpected: { fontSize: 13, fontWeight: '600' },
  testGot: { fontSize: 13, fontWeight: '600', marginTop: 2 },
  successBanner: { alignItems: 'center', borderWidth: 2, marginTop: 16, paddingVertical: 20 },
  successEmoji: { fontSize: 48, marginBottom: 8 },
  successTitle: { fontSize: 20, fontWeight: '800' },
  successXP: { fontSize: 16, fontWeight: '700', marginTop: 4 },
});
