import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createTodoItemStyle = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.itemCard,
      marginHorizontal: 20,
      marginBottom: 20,
      paddingHorizontal: 20,
      flexDirection: 'row',
      height: 80,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4, // Android
    },

    title: {
      fontWeight: 'bold',
      fontSize: 18,
      color: colors.text
    },

    checkbox: {
      width: 24,
      height: 24,
      borderWidth: 2,
      borderColor: colors.border,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return styles;
};
