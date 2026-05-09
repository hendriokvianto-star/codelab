/**
 * CodeLab — Quiz Screen
 * Multiple choice quiz with scoring, explanations, and XP reward
 */
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar, Pressable } from 'react-native';
import Animated, { FadeInDown, FadeIn, FadeInRight } from 'react-native-reanimated';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useThemeColors, useTranslation } from '@/hooks/useAppTheme';
import { useSettingsStore } from '@/stores/useSettingsStore';
import { useUserStore } from '@/stores/useUserStore';
import { getQuiz } from '@/content/index';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ProgressBar from '@/components/ui/ProgressBar';

export default function QuizScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useThemeColors();
  const { t, language } = useTranslation();
  const isDarkMode = useSettingsStore((s) => s.isDarkMode);
  const router = useRouter();
  const addXP = useUserStore((s) => s.addXP);

  const quiz = getQuiz(id || '');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [showResults, setShowResults] = useState(false);

  if (!quiz) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: colors.text, fontSize: 18 }}>Quiz not found</Text>
        <Button title="Go Back" onPress={() => router.back()} variant="outline" style={{ marginTop: 16 }} />
      </View>
    );
  }

  const question = quiz.questions[currentIndex];
  const totalQ = quiz.questions.length;
  const progress = (currentIndex + (isAnswered ? 1 : 0)) / totalQ;
  const qText = language === 'id' ? question.questionId : question.question;
  const options = language === 'id' ? question.optionsId : question.options;
  const explanation = language === 'id' ? question.explanationId : question.explanation;
  const quizTitle = language === 'id' ? quiz.titleId : quiz.title;

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheck = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === question.correctIndex) {
      setCorrectCount((c) => c + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalQ - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Show results
      const totalXP = correctCount * quiz.xpPerQuestion;
      if (totalXP > 0) addXP(totalXP);
      setShowResults(true);
    }
  };

  if (showResults) {
    const totalXP = correctCount * quiz.xpPerQuestion;
    const percent = Math.round((correctCount / totalQ) * 100);
    const isPerfect = correctCount === totalQ;

    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView contentContainerStyle={[styles.scrollContent, { justifyContent: 'center', alignItems: 'center', flex: 1 }]}>
          <Animated.View entering={FadeInDown.duration(500)} style={styles.resultsCard}>
            <Text style={styles.resultEmoji}>{isPerfect ? '🏆' : percent >= 75 ? '🎉' : percent >= 50 ? '👍' : '📖'}</Text>
            <Text style={[styles.resultTitle, { color: colors.text }]}>
              {t('quiz.results')}
            </Text>
            <Text style={[styles.resultSubtitle, { color: colors.textSecondary }]}>
              {quizTitle}
            </Text>

            <View style={[styles.scoreCircle, { borderColor: isPerfect ? colors.success : colors.primary }]}>
              <Text style={[styles.scoreText, { color: isPerfect ? colors.success : colors.primary }]}>
                {correctCount}/{totalQ}
              </Text>
              <Text style={[styles.scorePercent, { color: colors.textSecondary }]}>
                {percent}%
              </Text>
            </View>

            <View style={[styles.xpBanner, { backgroundColor: colors.xpColor + '20' }]}>
              <Text style={[styles.xpBannerText, { color: colors.xpColor }]}>
                ⭐ +{totalXP} XP {language === 'id' ? 'didapat!' : 'earned!'}
              </Text>
            </View>

            <View style={styles.resultButtons}>
              <Button
                title={t('quiz.retry')}
                onPress={() => {
                  setCurrentIndex(0);
                  setSelectedOption(null);
                  setIsAnswered(false);
                  setCorrectCount(0);
                  setShowResults(false);
                }}
                variant="outline"
                fullWidth
              />
              <Button
                title={language === 'id' ? 'Kembali ke Module' : 'Back to Module'}
                onPress={() => router.back()}
                variant="primary"
                fullWidth
              />
            </View>
          </Animated.View>
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Animated.View entering={FadeInDown.duration(400)} style={styles.header}>
          <Button title="✕" onPress={() => router.back()} variant="ghost" size="sm" />
          <View style={styles.progressRow}>
            <Text style={[styles.progressText, { color: colors.textSecondary }]}>
              {t('quiz.question')} {currentIndex + 1} {t('quiz.of')} {totalQ}
            </Text>
            <ProgressBar progress={progress} color={colors.primary} height={6} style={{ flex: 1, marginLeft: 12 }} />
          </View>
        </Animated.View>

        {/* Question */}
        <Animated.View entering={FadeInDown.delay(100).duration(400)}>
          <Text style={[styles.question, { color: colors.text }]}>{qText}</Text>
        </Animated.View>

        {/* Options */}
        <View style={styles.options}>
          {options.map((option, i) => {
            const isSelected = selectedOption === i;
            const isCorrect = i === question.correctIndex;
            let bgColor = colors.surface;
            let borderColor = colors.border;
            let textColor = colors.text;

            if (isAnswered) {
              if (isCorrect) {
                bgColor = colors.success + '20';
                borderColor = colors.success;
                textColor = colors.success;
              } else if (isSelected && !isCorrect) {
                bgColor = colors.error + '20';
                borderColor = colors.error;
                textColor = colors.error;
              }
            } else if (isSelected) {
              bgColor = colors.primary + '15';
              borderColor = colors.primary;
              textColor = colors.primary;
            }

            return (
              <Animated.View key={i} entering={FadeInRight.delay(i * 80).duration(300)}>
                <Pressable
                  onPress={() => handleSelect(i)}
                  style={[styles.option, { backgroundColor: bgColor, borderColor }]}
                >
                  <View style={[styles.optionLetter, { borderColor }]}>
                    <Text style={[styles.optionLetterText, { color: textColor }]}>
                      {String.fromCharCode(65 + i)}
                    </Text>
                  </View>
                  <Text style={[styles.optionText, { color: textColor }]}>{option}</Text>
                  {isAnswered && isCorrect && <Text style={styles.checkMark}>✅</Text>}
                  {isAnswered && isSelected && !isCorrect && <Text style={styles.checkMark}>❌</Text>}
                </Pressable>
              </Animated.View>
            );
          })}
        </View>

        {/* Explanation (after answer) */}
        {isAnswered && (
          <Animated.View entering={FadeIn.duration(300)}>
            <Card style={[styles.explanationCard, { borderLeftColor: selectedOption === question.correctIndex ? colors.success : colors.error }]}>
              <Text style={[styles.explanationTitle, { color: selectedOption === question.correctIndex ? colors.success : colors.error }]}>
                {selectedOption === question.correctIndex ? t('quiz.correct') : t('quiz.incorrect')}
              </Text>
              <Text style={[styles.explanationText, { color: colors.textSecondary }]}>
                {explanation}
              </Text>
            </Card>
          </Animated.View>
        )}

        {/* Action Button */}
        <View style={{ marginTop: 20 }}>
          {!isAnswered ? (
            <Button
              title={t('quiz.check')}
              onPress={handleCheck}
              variant="primary"
              fullWidth
              disabled={selectedOption === null}
              size="lg"
            />
          ) : (
            <Button
              title={currentIndex < totalQ - 1 ? t('quiz.next_question') : t('quiz.results')}
              onPress={handleNext}
              variant="primary"
              fullWidth
              size="lg"
            />
          )}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 50, paddingBottom: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 24, gap: 8 },
  progressRow: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  progressText: { fontSize: 13, fontWeight: '600', minWidth: 100 },
  question: { fontSize: 20, fontWeight: '700', lineHeight: 28, marginBottom: 20 },
  options: { gap: 10 },
  option: { flexDirection: 'row', alignItems: 'center', padding: 16, borderRadius: 14, borderWidth: 1.5, gap: 12 },
  optionLetter: { width: 32, height: 32, borderRadius: 16, borderWidth: 1.5, alignItems: 'center', justifyContent: 'center' },
  optionLetterText: { fontSize: 14, fontWeight: '700' },
  optionText: { flex: 1, fontSize: 15, fontWeight: '500' },
  checkMark: { fontSize: 18 },
  explanationCard: { marginTop: 16, borderLeftWidth: 4 },
  explanationTitle: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  explanationText: { fontSize: 14, lineHeight: 20 },
  resultsCard: { alignItems: 'center', width: '100%', paddingVertical: 32 },
  resultEmoji: { fontSize: 64, marginBottom: 16 },
  resultTitle: { fontSize: 28, fontWeight: '800', marginBottom: 4 },
  resultSubtitle: { fontSize: 15, marginBottom: 24 },
  scoreCircle: { width: 120, height: 120, borderRadius: 60, borderWidth: 4, alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
  scoreText: { fontSize: 32, fontWeight: '800' },
  scorePercent: { fontSize: 14, fontWeight: '600' },
  xpBanner: { paddingHorizontal: 24, paddingVertical: 12, borderRadius: 20, marginBottom: 24 },
  xpBannerText: { fontSize: 16, fontWeight: '700' },
  resultButtons: { width: '100%', gap: 10 },
});
