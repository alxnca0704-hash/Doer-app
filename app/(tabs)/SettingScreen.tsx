import { createSettingsStyles } from '@/assets/styles/settings.ts'
import Header from '@/components/Header'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, StatusBar, Switch, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SettingsScreen = () => {
  const {colors, toggleDarkMode, isDarkMode} = useTheme();
  const settingsStyle = createSettingsStyles(colors);
  
  return (
    <SafeAreaView style={settingsStyle.container}>
      <StatusBar barStyle={colors.statusBarStyle}/>
      <Header title='Settings'/>
      
      <ScrollView style={settingsStyle.scrollView}>
        {/* Appearance Section */}
        <View style={settingsStyle.section}>
          <Text style={settingsStyle.sectionTitle}>APPEARANCE</Text>
          
          <View style={settingsStyle.settingCard}>
            <View style={settingsStyle.settingRow}>
              <View style={settingsStyle.settingLeft}>
                <View style={settingsStyle.iconContainer}>
                  <Ionicons 
                    name={isDarkMode ? 'moon' : 'sunny'} 
                    size={20} 
                    color={colors.primary} 
                  />
                </View>
                <View>
                  <Text style={settingsStyle.settingTitle}>Dark Mode</Text>
                  <Text style={settingsStyle.settingSubtitle}>
                    {isDarkMode ? 'Enabled' : 'Disabled'}
                  </Text>
                </View>
              </View>
              
              <Switch
                value={isDarkMode}
                onValueChange={toggleDarkMode}
                trackColor={{ false: colors.border, true: "#030d7d" }}
                thumbColor='#ffffff'
              />
            </View>
          </View>
        </View>

        {/* General Section */}
        <View style={settingsStyle.section}>
          <Text style={settingsStyle.sectionTitle}>GENERAL</Text>
          
          <View style={settingsStyle.settingCard}>
            <TouchableOpacity style={settingsStyle.settingRow}>
              <View style={settingsStyle.settingLeft}>
                <Ionicons name="notifications-outline" size={20} color={colors.text} />
                <Text style={settingsStyle.settingTitle}>Notifications</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
            </TouchableOpacity>
            
            <View style={settingsStyle.divider} />
            
            <TouchableOpacity style={settingsStyle.settingRow}>
              <View style={settingsStyle.settingLeft}>
                <Ionicons name="lock-closed-outline" size={20} color={colors.text} />
                <Text style={settingsStyle.settingTitle}>Privacy</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
            </TouchableOpacity>
            
            <View style={settingsStyle.divider} />
            
            <TouchableOpacity style={settingsStyle.settingRow}>
              <View style={settingsStyle.settingLeft}>
                <Ionicons name="language-outline" size={20} color={colors.text} />
                <Text style={settingsStyle.settingTitle}>Language</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
            </TouchableOpacity>
            
            <View style={settingsStyle.divider} />
            
            <TouchableOpacity style={settingsStyle.settingRow}>
              <View style={settingsStyle.settingLeft}>
                <Ionicons name="information-circle-outline" size={20} color={colors.text} />
                <Text style={settingsStyle.settingTitle}>About</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SettingsScreen