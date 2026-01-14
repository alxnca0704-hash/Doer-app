import BottomNavBar from '@/components/BottomNavBar';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={() => <BottomNavBar />}
      screenOptions={{
        headerShown: false,
      }}/>
  );
}