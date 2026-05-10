/**
 * CodeLab — CodeBlock Component
 * Syntax-highlighted code display with copy support
 */
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native';
import { useThemeColors } from '@/hooks/useAppTheme';

interface CodeBlockProps {
  code: string;
  language?: string;
}

// Simple keyword highlighting for JS/PHP
function highlightLine(line: string, lang?: string): React.ReactNode[] {
  const jsKeywords = /\b(const|let|var|function|return|if|else|for|while|switch|case|break|continue|class|import|export|from|default|new|this|typeof|null|undefined|true|false|async|await|try|catch|throw)\b/g;
  const phpKeywords = /\b(function|return|if|else|elseif|foreach|for|while|switch|case|break|echo|class|public|private|protected|static|new|use|namespace|extends|implements|true|false|null)\b/g;

  const keywords = lang === 'php' ? phpKeywords : jsKeywords;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  const lineStr = line;
  const regex = new RegExp(keywords.source, 'g');

  while ((match = regex.exec(lineStr)) !== null) {
    if (match.index > lastIndex) {
      parts.push(lineStr.slice(lastIndex, match.index));
    }
    parts.push(
      <Text key={match.index} style={{ color: '#C678DD', fontWeight: '700' }}>
        {match[0]}
      </Text>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < lineStr.length) {
    parts.push(lineStr.slice(lastIndex));
  }
  return parts.length > 0 ? parts : [lineStr];
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const colors = useThemeColors();
  const lines = code.split('\n');

  return (
    <View style={[styles.container, { backgroundColor: colors.codeBackground, borderColor: colors.border }]}>
      {/* Language badge */}
      {language && (
        <View style={[styles.langBadge, { backgroundColor: colors.surfaceElevated }]}>
          <Text style={[styles.langText, { color: colors.textSecondary }]}>
            {language.toUpperCase()}
          </Text>
        </View>
      )}

      <View style={styles.codeContent}>
        {lines.map((line, i) => {
          const isComment = line.trimStart().startsWith('//') || line.trimStart().startsWith('*') || line.trimStart().startsWith('{{--');
          const isString = /(['"`]).*?\1/.test(line);

          return (
            <View key={i} style={styles.codeRow}>
              <Text style={[styles.lineNum, { color: colors.textMuted }]}>
                {i + 1}
              </Text>
              <Text style={styles.codeLine}>
                {isComment ? (
                  <Text style={{ color: '#6A9955' }}>{line}</Text>
                ) : (
                  highlightLine(line, language)
                )}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    marginVertical: 8,
  },
  langBadge: {
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderBottomLeftRadius: 8,
  },
  langText: { fontSize: 10, fontWeight: '700', letterSpacing: 1 },
  codeContent: {
    padding: 12,
  },
  codeRow: {
    flexDirection: 'row',
    width: '100%',
  },
  lineNum: {
    width: 24,
    marginRight: 12,
    textAlign: 'right',
    fontSize: 12,
    fontFamily: 'SpaceMono',
    lineHeight: 20,
  },
  codeLine: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 13,
    fontFamily: 'SpaceMono',
    lineHeight: 20,
    color: '#ABB2BF',
  },
});
