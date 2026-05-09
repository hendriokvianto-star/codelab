/**
 * CodeLab — Lesson Detail Screen
 * Shows theory, practice code, and completion button
 */
import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar, TextInput, Platform, Pressable, KeyboardAvoidingView } from 'react-native';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useThemeColors, useTranslation } from '@/hooks/useAppTheme';
import { useSettingsStore } from '@/stores/useSettingsStore';
import { useUserStore } from '@/stores/useUserStore';
import { useLessonStore } from '@/stores/useLessonStore';
import { getLesson } from '@/content/index';
import TheorySection from '@/components/lesson/TheorySection';
import CodeBlock from '@/components/lesson/CodeBlock';
import { checkBadges, type BadgeNotification } from '@/lib/badgeEngine';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import BadgeToast from '@/components/ui/BadgeToast';

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useThemeColors();
  const { t, language } = useTranslation();
  const isDarkMode = useSettingsStore((s) => s.isDarkMode);
  const router = useRouter();

  const addXP = useUserStore((s) => s.addXP);
  const incrementLessonsCompleted = useUserStore((s) => s.incrementLessonsCompleted);
  const updateStreak = useUserStore((s) => s.updateStreak);
  const completeLesson = useLessonStore((s) => s.completeLesson);

  const lesson = getLesson(id || '');
  const [codeInput, setCodeInput] = useState(lesson?.practiceCode || '');
  const [output, setOutput] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showXPPopup, setShowXPPopup] = useState(false);
  const [badgeNotif, setBadgeNotif] = useState<BadgeNotification | null>(null);

  const isBookmarked = useLessonStore((s) => s.isBookmarked(lesson?.courseId || '', lesson?.id || ''));
  const addBookmark = useLessonStore((s) => s.addBookmark);
  const removeBookmark = useLessonStore((s) => s.removeBookmark);

  if (!lesson) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: colors.text, fontSize: 18 }}>Lesson not found</Text>
        <Button title="Go Back" onPress={() => router.back()} variant="outline" style={{ marginTop: 16 }} />
      </View>
    );
  }

  const title = language === 'id' ? lesson.titleId : lesson.title;
  const hint = language === 'id' ? lesson.practiceHintId : lesson.practiceHint;

  const handleRunCode = () => {
    try {
      // Capture console.log output
      const logs: string[] = [];
      const fakeConsole = {
        log: (...args: any[]) => logs.push(args.map(String).join(' ')),
        warn: (...args: any[]) => logs.push('⚠️ ' + args.map(String).join(' ')),
        error: (...args: any[]) => logs.push('❌ ' + args.map(String).join(' ')),
      };

      // Only run JavaScript code (strip PHP tags for display)
      let execCode = codeInput;
      if (lesson.courseId === 'laravel' || execCode.includes('<?php')) {
        // For PHP, we simulate output
        const echoMatch = execCode.match(/echo\s+["'](.+?)["']/g);
        if (echoMatch) {
          echoMatch.forEach((m) => {
            const text = m.replace(/echo\s+["']/, '').replace(/["'];?$/, '');
            logs.push(text);
          });
        }
        if (logs.length === 0) {
          logs.push('// PHP code — output simulated');
          logs.push('// In real Laravel, this runs on a server');
        }
      } else {
        // Run JavaScript
        const fn = new Function('console', 'alert', 'document', execCode);
        fn(fakeConsole, (msg: string) => logs.push(`Alert: ${msg}`), {
          write: (s: string) => logs.push(s),
          getElementById: () => ({ innerHTML: '' }),
        });
      }

      setOutput(logs.join('\n') || '(no output)');
    } catch (err: any) {
      setOutput(`❌ Error: ${err.message}`);
    }
  };

  const handleComplete = () => {
    if (isCompleted) return;

    completeLesson(lesson.courseId, lesson.moduleId, lesson.id, 100);
    addXP(lesson.xp);
    incrementLessonsCompleted();
    updateStreak();
    setIsCompleted(true);
    setShowXPPopup(true);

    // Check for new badges
    const newBadges = checkBadges();
    if (newBadges.length > 0) {
      setTimeout(() => setBadgeNotif(newBadges[0]), 1500);
    }

    setTimeout(() => setShowXPPopup(false), 3000);
  };

  return (
    <KeyboardAvoidingView style={[styles.container, { backgroundColor: colors.background }]} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        {/* Header */}
        <Animated.View entering={FadeInDown.duration(400)} style={styles.header}>
          <Button title="←" onPress={() => router.back()} variant="ghost" size="sm" />
          {/* Bookmark Button */}
          <Pressable
            onPress={() => {
              if (isBookmarked) {
                removeBookmark(lesson.courseId, lesson.id);
              } else {
                addBookmark(lesson.courseId, lesson.id);
              }
            }}
            style={styles.bookmarkBtn}
          >
            <Text style={{ fontSize: 22 }}>{isBookmarked ? '🔖' : '📑'}</Text>
          </Pressable>
        </Animated.View>

        {/* Header Info */}
        <Animated.View entering={FadeInDown.delay(50).duration(400)}>
          <View style={styles.headerInfo}>
            <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
            <View style={styles.headerMeta}>
              <Badge text={`+${lesson.xp} XP`} emoji="⭐" size="sm" color={colors.xpColor} />
              <Badge
                text={lesson.courseId === 'javascript' ? 'JavaScript' : 'Laravel'}
                emoji={lesson.courseId === 'javascript' ? '⚡' : '🔺'}
                size="sm"
              />
            </View>
          </View>
        </Animated.View>

        {/* Theory */}
        <Animated.View entering={FadeInDown.delay(100).duration(400)}>
          <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>
            📖 {t('lesson.theory')}
          </Text>
          {lesson.theory.map((block, i) => (
            <TheorySection key={i} block={block} />
          ))}
        </Animated.View>

        {/* Practice */}
        {lesson.practiceCode && (
          <Animated.View entering={FadeInDown.delay(200).duration(400)}>
            <Text style={[styles.sectionLabel, { color: colors.textSecondary, marginTop: 24 }]}>
              💻 {t('lesson.practice')}
            </Text>
            {hint && (
              <Text style={[styles.hint, { color: colors.textMuted }]}>💡 {hint}</Text>
            )}

            {/* Code Editor */}
            <View style={[styles.editor, { backgroundColor: colors.codeBackground, borderColor: colors.border }]}>
              <TextInput
                style={[styles.codeInput, { color: colors.codeText }]}
                value={codeInput}
                onChangeText={setCodeInput}
                multiline
                autoCapitalize="none"
                autoCorrect={false}
                spellCheck={false}
                textAlignVertical="top"
                placeholder="// Write your code here..."
                placeholderTextColor={colors.textMuted}
              />
            </View>

            {/* Run Button */}
            <Button
              title={`▶ ${t('lesson.run_code')}`}
              onPress={handleRunCode}
              variant="secondary"
              fullWidth
              style={{ marginTop: 8 }}
            />

            {/* Output */}
            {output !== null && (
              <Animated.View entering={FadeIn.duration(300)}>
                <Card style={[styles.outputCard, { borderColor: output.includes('Error') ? colors.error : colors.success }]}>
                  <Text style={[styles.outputLabel, { color: colors.textSecondary }]}>
                    📤 Output:
                  </Text>
                  <Text style={[styles.outputText, {
                    color: output.includes('Error') ? colors.error : colors.codeText,
                    fontFamily: 'SpaceMono',
                  }]}>
                    {output}
                  </Text>
                </Card>
              </Animated.View>
            )}
          </Animated.View>
        )}

        {/* Complete Button */}
        <Animated.View entering={FadeInDown.delay(300).duration(400)} style={{ marginTop: 24 }}>
          <Button
            title={isCompleted ? '✅ ' + t('learn.completed') : `🎯 ${t('lesson.complete')}`}
            onPress={handleComplete}
            variant={isCompleted ? 'secondary' : 'primary'}
            fullWidth
            disabled={isCompleted}
            size="lg"
          />
        </Animated.View>

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* XP Popup */}
      {showXPPopup && (
        <Animated.View entering={FadeIn.duration(300)} style={styles.xpPopup}>
          <Text style={styles.xpPopupText}>⭐ +{lesson.xp} XP!</Text>
        </Animated.View>
      )}

      {/* Badge Toast */}
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
  header: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginBottom: 20 },
  headerInfo: { flex: 1 },
  title: { fontSize: 22, fontWeight: '800', marginBottom: 6 },
  headerMeta: { flexDirection: 'row', gap: 8 },
  bookmarkBtn: { padding: 4 },
  sectionLabel: { fontSize: 16, fontWeight: '700', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 },
  hint: { fontSize: 13, marginBottom: 8, fontStyle: 'italic' },
  editor: { borderRadius: 12, borderWidth: 1, minHeight: 150, overflow: 'hidden' },
  codeInput: { fontSize: 13, fontFamily: 'SpaceMono', padding: 14, lineHeight: 20, minHeight: 150 },
  outputCard: { marginTop: 12, borderLeftWidth: 3 },
  outputLabel: { fontSize: 12, fontWeight: '600', marginBottom: 6 },
  outputText: { fontSize: 13, lineHeight: 20 },
  xpPopup: {
    position: 'absolute',
    top: 80,
    alignSelf: 'center',
    backgroundColor: '#FDCB6E',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  xpPopupText: { fontSize: 18, fontWeight: '800', color: '#1A1A2E' },
});
