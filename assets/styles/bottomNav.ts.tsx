import { ColorScheme } from "@/hooks/useTheme";
import { Platform, StyleSheet } from "react-native";

export const createBottomNavStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: Platform.OS === 'ios' ? 40 : 10,
      left: 20,
      right: 20,
    },
    navBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: colors.surface,
      borderRadius: 30,
      height: 90,
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.15,
      shadowRadius: 10,
      elevation: 5,
    },
    iconButton: {
      width: 60,
      height: 60,
      borderRadius: 15,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
    },
    centerButton: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: colors.text,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return styles;
};