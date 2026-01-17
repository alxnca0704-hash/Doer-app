import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createHomeStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    height: 80,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.text
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginTop: 8,
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    letterSpacing: 0.3,
  },
  countBadge: {
    backgroundColor: colors.badge,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    minWidth: 28,
    alignItems: 'center',
  },
  sectionCount: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
});

  return styles
}