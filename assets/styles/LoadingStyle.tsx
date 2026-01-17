import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createLoadingStyles = (colors: ColorScheme) => {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bg,
      },
      spinner: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
      },
      arc: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 4,
        borderColor: 'transparent',
        borderTopColor: colors.text,
        borderRightColor: colors.text,
      },
      text: {
        fontSize: 16,
        color: colors.text,
        fontWeight: '500',
      },
    })

  return styles;
}