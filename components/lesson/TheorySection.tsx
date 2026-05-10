/**
 * CodeLab — TheorySection Component
 * Renders a theory block (text, code, tip, warning)
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useThemeColors, useTranslation } from '@/hooks/useAppTheme';
import type { TheoryBlock } from '@/content/index';
import CodeBlock from './CodeBlock';

interface TheorySectionProps {
  block: TheoryBlock;
}

export default function TheorySection({ block }: TheorySectionProps) {
  const colors = useThemeColors();
  const { language } = useTranslation();

  const textContent = language === 'id' && block.contentId ? block.contentId : block.content;

  if (block.type === 'code') {
    return <CodeBlock code={block.content} language={block.language} />;
  }

  if (block.type === 'tip') {
    return (
      <View style={[styles.callout, { backgroundColor: '#00B89415', borderColor: '#00B894' }]}>
        <Text style={styles.calloutIcon}>💡</Text>
        <Text style={[styles.calloutText, { color: colors.text }]}>
          {textContent}
        </Text>
      </View>
    );
  }

  if (block.type === 'warning') {
    return (
      <View style={[styles.callout, { backgroundColor: '#F8514915', borderColor: '#F85149' }]}>
        <Text style={styles.calloutIcon}>⚠️</Text>
        <Text style={[styles.calloutText, { color: colors.text }]}>
          {textContent}
        </Text>
      </View>
    );
  }

  // Default: text block
  // Simple markdown-like rendering for bold
  const parts = textContent.split(/(\*\*[^*]+\*\*)/g);
  return (
    <Text style={[styles.text, { color: colors.text }]}>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <Text key={i} style={{ fontWeight: '700' }}>
              {part.slice(2, -2)}
            </Text>
          );
        }
        return part;
      })}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    flexShrink: 1,
    flexWrap: 'wrap',
    fontSize: 15,
    lineHeight: 24,
    marginVertical: 8,
  },
  callout: {
    flexDirection: 'row',
    borderLeftWidth: 4,
    borderRadius: 8,
    padding: 14,
    marginVertical: 8,
    gap: 10,
    alignItems: 'flex-start',
  },
  calloutIcon: { fontSize: 18, marginTop: 2 },
  calloutText: { flex: 1, fontSize: 14, lineHeight: 22 },
});
