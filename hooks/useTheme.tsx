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
  gradients: {
    background: [string, string];
    surface: [string, string];
    primary: [string, string];
    success: [string, string];
    warning: [string, string];
    danger: [string, string];
    muted: [string, string];
    empty: [string, string];
  };
  backgrounds: {
    input: string;
    editInput: string;
  };
  statusBarStyle: "light-content" | "dark-content";
}

const lightColors: ColorScheme = {
  bg: "#ffffffff",
  surface: "#eeeeeeff",
  text: "#000000",
  textMuted: "#8e8e93",
  border: "#e5e5ea",
  primary: "#007aff",
  success: "#34c759",
  warning: "#ff9500",
  danger: "#ff3b30",
  shadow: "#868686",
  gradients: {
    background: ["#f5f5f5", "#e5e5ea"],
    surface: ["#ffffff", "#f5f5f5"],
    primary: ["#007aff", "#0051d5"],
    success: ["#34c759", "#248a3d"],
    warning: ["#ff9500", "#c93400"],
    danger: ["#ff3b30", "#d70015"],
    muted: ["#c7c7cc", "#8e8e93"],
    empty: ["#f2f2f7", "#e5e5ea"],
  },
  backgrounds: {
    input: "#ffffff",
    editInput: "#f2f2f7",
  },
  statusBarStyle: "dark-content" as const,
};

const darkColors: ColorScheme = {
  bg: "#000000",
  surface: "#1c1c1e",
  text: "#ffffff",
  textMuted: "#8e8e93",
  border: "#38383a",
  primary: "#0a84ff",
  success: "#30d158",
  warning: "#ff9f0a",
  danger: "#ff453a",
  shadow: "#000000",
  gradients: {
    background: ["#000000", "#1c1c1e"],
    surface: ["#1c1c1e", "#2c2c2e"],
    primary: ["#0a84ff", "#007aff"],
    success: ["#30d158", "#248a3d"],
    warning: ["#ff9f0a", "#c93400"],
    danger: ["#ff453a", "#d70015"],
    muted: ["#48484a", "#636366"],
    empty: ["#2c2c2e", "#3a3a3c"],
  },
  backgrounds: {
    input: "#1c1c1e",
    editInput: "#000000",
  },
  statusBarStyle: "light-content" as const,
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