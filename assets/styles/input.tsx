import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createInputStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 16,
      paddingBottom: 40,
      gap: 12,
      
    },
    header: {
      height: 80,
      paddingHorizontal: 20,
      justifyContent: 'center'
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    input: {
      flex: 1,
      height: 50,
      backgroundColor: colors.input,
      borderRadius: 12,
      paddingHorizontal: 16,
      fontSize: 16,
      color: colors.text,
    },
    addButton: {
      backgroundColor: colors.button,
      paddingHorizontal: 24,
      paddingVertical: 14,
      borderRadius: 12,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: 80,
    },
    addButtonText: {
      color: colors.text,
      fontSize: 16,
      fontWeight: '600',
    }
  });

  return styles;
}