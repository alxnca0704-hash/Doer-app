import { createBottomNavStyles } from '@/assets/styles/bottomNav.ts';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { Href, usePathname, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, View } from 'react-native';

const BottomNavBar = () => {
  const { colors } = useTheme();
  const styles = createBottomNavStyles(colors);
  const router = useRouter();
  const pathname = usePathname();

  const handleAddPress = () => {
    // Handle add button action here
    // You can add your logic for adding items
    console.log('Add button pressed');
  };

  const isHome = pathname === '/' || pathname === '/index';
  const isSettings = pathname === '/SettingScreen';

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {/* Left Icon - Home */}
        <Pressable
          style={styles.iconButton}
          onPress={() => router.push('/(tabs)' as Href)}
        >
          <Ionicons
            name="home-outline"
            size={24}
            color={isHome ? colors.text : colors.textMuted}
          />
          
        </Pressable>

        {/* Center Icon - Add Button (not a screen) */}
        <Pressable
          style={styles.centerButton}
          onPress={handleAddPress}
        >
          <Ionicons name="add" size={28} color="#FFFFFF" />
        </Pressable>

        {/* Right Icon - Settings */}
        <Pressable
          style={styles.iconButton}
          onPress={() => router.push('/(tabs)/SettingScreen' as Href)}
        >
          <Ionicons
            name="settings-outline"
            size={24}
            color={isSettings ? colors.text : colors.textMuted}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default BottomNavBar;