/**
 * CodeLab Design System — Color Palette
 * Premium dark-first theme with vibrant accents for gamification
 */

const palette = {
  // Primary brand colors
  purple: '#6C5CE7',
  purpleLight: '#A29BFE',
  purpleDark: '#5A4BD1',

  // Secondary
  mint: '#00B894',
  mintLight: '#55EFC4',
  mintDark: '#00A381',

  // Accent / Gamification
  gold: '#FDCB6E',
  goldLight: '#FFEAA7',
  goldDark: '#E0B04E',

  // Semantic
  success: '#3FB950',
  error: '#F85149',
  warning: '#F0883E',
  info: '#58A6FF',

  // Neutrals
  white: '#FFFFFF',
  black: '#000000',
};

export const Colors = {
  light: {
    // Base
    text: '#1A1A2E',
    textSecondary: '#6B7280',
    textMuted: '#9CA3AF',
    background: '#F8F9FC',
    surface: '#FFFFFF',
    surfaceElevated: '#F1F3F8',
    border: '#E5E7EB',

    // Brand
    primary: palette.purple,
    primaryLight: palette.purpleLight,
    secondary: palette.mint,
    accent: palette.gold,

    // Navigation
    tint: palette.purple,
    tabIconDefault: '#9CA3AF',
    tabIconSelected: palette.purple,
    tabBar: '#FFFFFF',
    tabBarBorder: '#E5E7EB',

    // Semantic
    success: palette.success,
    error: palette.error,
    warning: palette.warning,
    info: palette.info,

    // Components
    cardBackground: '#FFFFFF',
    cardBorder: '#E5E7EB',
    inputBackground: '#F3F4F6',
    inputBorder: '#D1D5DB',
    codeBackground: '#1E1E2E',
    codeText: '#E6EDF3',

    // Gamification
    xpColor: palette.gold,
    streakColor: '#F97316',
    levelColor: palette.purple,
    badgeBackground: '#FEF3C7',

    // Gradients (start, end)
    gradientPrimary: [palette.purple, '#8B5CF6'],
    gradientSuccess: [palette.mint, '#10B981'],
    gradientGold: [palette.gold, '#F59E0B'],
  },
  dark: {
    // Base
    text: '#E6EDF3',
    textSecondary: '#8B949E',
    textMuted: '#6E7681',
    background: '#0D1117',
    surface: '#161B22',
    surfaceElevated: '#1C2129',
    border: '#30363D',

    // Brand
    primary: palette.purple,
    primaryLight: palette.purpleLight,
    secondary: palette.mint,
    accent: palette.gold,

    // Navigation
    tint: palette.purpleLight,
    tabIconDefault: '#6E7681',
    tabIconSelected: palette.purpleLight,
    tabBar: '#161B22',
    tabBarBorder: '#30363D',

    // Semantic
    success: palette.success,
    error: palette.error,
    warning: palette.warning,
    info: palette.info,

    // Components
    cardBackground: '#161B22',
    cardBorder: '#30363D',
    inputBackground: '#1C2129',
    inputBorder: '#30363D',
    codeBackground: '#0D1117',
    codeText: '#E6EDF3',

    // Gamification
    xpColor: palette.gold,
    streakColor: '#F97316',
    levelColor: palette.purpleLight,
    badgeBackground: '#3D2E00',

    // Gradients (start, end)
    gradientPrimary: [palette.purple, '#8B5CF6'],
    gradientSuccess: [palette.mint, '#10B981'],
    gradientGold: [palette.gold, '#F59E0B'],
  },
};

export type ThemeColors = typeof Colors.dark;
export default Colors;
