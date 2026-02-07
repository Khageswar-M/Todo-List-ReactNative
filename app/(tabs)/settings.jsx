import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useTheme } from '@/hooks/useTheme'
import {createSettingsStyles} from '../../assets/styles/settings.styles.js'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import ProgressStates from '../../components/ProgressStates.jsx'
import Preferences from '../../components/Preferences.jsx'
import DangerZone from '../../components/DangerZone.jsx'


const settings = () => {

  const {colors, isDarkMode, toggleDarkMode} = useTheme();
  const settingsStyle = createSettingsStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingsStyle.container}
    >
      <SafeAreaView
        style={settingsStyle.safeArea}
      >
        <View style={settingsStyle.header}>
          <View style={settingsStyle.titleContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingsStyle.iconContainer}
            >
              <Ionicons name='settings-outline' size={28} color="#fff"/>
            </LinearGradient>
            <Text style={settingsStyle.title}>Settings</Text>
          </View>
        </View>
        
          

        <ScrollView
          style={settingsStyle.scrollView}
          contentContainerStyle={settingsStyle.content}
          showsVerticalScrollIndicator={false}
        >

          <ProgressStates/>

          <Preferences/>

          <DangerZone/>

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default settings