import { createSettingsStyles } from '@/assets/styles/settings.ts'
import Header from '@/components/Header'
import useTheme from '@/hooks/useTheme'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SettingsScreen = () => {
  const {colors} = useTheme();
  const settingsStyle = createSettingsStyles(colors)
  return (
    <SafeAreaView style={settingsStyle.container}>
      <Header title='Settings'/>
    </SafeAreaView>
  )
}

export default SettingsScreen