import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface ColorScheme {
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  primary: string;
  success: string;
  warning: string;
  danger: string;
  shadow: string;
  button: string;
  input: string;
  itemCard: string;
  icons: string;
  statusBarStyle: "light-content" | "dark-content";
  badge: string;
  modal: string;
  settingsCard: string;
  settingsDivider: string;
}

const lightColors: ColorScheme = {
  bg: "#ffffffff",
  surface: "#eeeeeeff",
  text: "#000000",
  textMuted: "#8e8e93",
  border: "#000000",
  primary: "#007aff",
  success: "#34c759",
  warning: "#ff9500",
  danger: "#ff3b30",
  shadow: "#868686",
  button: "#e8e8e8",
  input: "#ededed",
  itemCard: "#fff",
  statusBarStyle: "dark-content" as const,
  icons: "#ffffff",
  badge: "#e0e0e0",
  modal: "#ffffff",
  settingsCard: "#f5f5f5",
  settingsDivider: "#e0e0e0",
};

const darkColors: ColorScheme = {
  bg: "#000000",
  surface: "#1c1c1e",
  text: "#ffffff",
  textMuted: "#8e8e93",
  border: "#555555",
  primary: "#0a84ff",
  success: "#30d158",
  warning: "#ff9f0a",
  danger: "#ff453a",
  shadow: "#000000",
  button: "#4d4d4d",
  input: "#38383a",
  itemCard: "#2d2d2d",
  statusBarStyle: "light-content" as const,
  icons: "#000000",
  badge: "#232323",
  modal: "#0f0f0f",
  settingsCard: "#1e1e1e",
  settingsDivider: "#333333",
};

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: ColorScheme;
}

const ThemeContext = createContext<undefined | ThemeContextType>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // get the user's choice
    AsyncStorage.getItem("darkMode").then((value) => {
      if (value) setIsDarkMode(JSON.parse(value));
    });
  }, []);

  const toggleDarkMode = async () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    await AsyncStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  const colors = isDarkMode ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export default useTheme;