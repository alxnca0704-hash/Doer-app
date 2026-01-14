import { createHomeStyles } from '@/assets/styles/home.ts';
import useTheme from '@/hooks/useTheme';
import React from 'react';
import { Text, View } from 'react-native';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const { colors } = useTheme();
  const homestyle = createHomeStyles(colors);
  
  return (
    <View style={homestyle.header}>
      <Text style={homestyle.title}>{title}</Text>
    </View>
  );
};

export default Header;