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
    fontWeight: 'bold'
  }
});

  return styles
}