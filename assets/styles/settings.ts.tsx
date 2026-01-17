import { ColorScheme } from '@/hooks/useTheme';
import { StyleSheet } from 'react-native';

export const createSettingsStyles = (colors: ColorScheme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
    marginBottom: 8,
    marginLeft: 4,
    letterSpacing: 0.5,
  },
  settingCard: {
    backgroundColor: colors.settingsCard,
    borderRadius: 12,
    overflow: 'hidden',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  settingSubtitle: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: colors.settingsDivider,
    marginLeft: 16,
  },
});