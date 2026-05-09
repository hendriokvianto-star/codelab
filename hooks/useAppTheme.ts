/**
 * CodeLab — Custom hooks
 */
import { useSettingsStore } from '@/stores/useSettingsStore';
import { Colors, type ThemeColors } from '@/constants/Colors';
import { t, type TranslationKey } from '@/constants/i18n';

/**
 * Returns current theme colors based on dark mode setting
 */
export function useThemeColors(): ThemeColors {
  const isDarkMode = useSettingsStore((s) => s.isDarkMode);
  return isDarkMode ? Colors.dark : Colors.light;
}

/**
 * Returns translated string based on current language setting
 */
export function useTranslation() {
  const language = useSettingsStore((s) => s.language);
  return {
    t: (key: TranslationKey) => t(key, language),
    language,
  };
}
