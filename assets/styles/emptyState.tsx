import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createEmptyStateStyle = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: '500',
        color: colors.textMuted,
        fontSize: 35
    },
    message: {
        fontWeight: '500',
        color: colors.textMuted,
        fontSize: 15
    }
    
    
  });

  return styles;
};