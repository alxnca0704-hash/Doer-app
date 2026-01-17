import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createAddTaskStyles = (colors: ColorScheme) => {
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
  availTaskText: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30 ,
    color: colors.text
  }
});

  return styles
}