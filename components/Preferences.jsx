import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createSettingsStyles } from '../assets/styles/settings.styles';
import { useTheme } from '../hooks/useTheme';

const Preferences = () => {

    const [isAutoSync, setIsAutoSync] = useState(true);
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

    const { colors, isDarkMode, toggleDarkMode } = useTheme();
    const settingsStyles = createSettingsStyles(colors);

    return (
        <LinearGradient
            colors={colors.gradients.surface}
            style={settingsStyles.section}
        >
            <Text style={settingsStyles.sectionTitle}>Preferences</Text>

            {/* DarkMode */}
            <View style={settingsStyles.settingItem}>
                <View style={settingsStyles.settingLeft}>
                    <LinearGradient
                        colors={colors.gradients.primary}
                        style={settingsStyles.settingIcon}
                    >
                        <Ionicons name='moon' size={18} color={'#fff'} />
                    </LinearGradient>
                    <Text style={settingsStyles.settingText}>Dark Mode</Text>

                </View>
                <TouchableOpacity
                    onPress={toggleDarkMode}
                    style={{
                        width: 52,
                        height: 28,
                        borderRadius: 14,
                        backgroundColor: isDarkMode ? colors.primary : colors.border,
                        justifyContent: 'center',
                        padding: 3,
                    }}
                >
                    <View
                        style={{
                            width: 22,
                            height: 22,
                            borderRadius: 11,
                            backgroundColor: '#fff',
                            alignSelf: isDarkMode ? 'flex-end' : 'flex-start',
                        }}
                    />
                </TouchableOpacity>
            </View>

            {/* Notification */}
            <View style={settingsStyles.settingItem}>
                <View style={settingsStyles.settingLeft}>
                    <LinearGradient
                        colors={colors.gradients.warning}
                        style={settingsStyles.settingIcon}
                    >
                        <Ionicons name='notifications' size={18} color={'#fff'} />
                    </LinearGradient>
                    <Text style={settingsStyles.settingText}>Notifications</Text>
                </View>
                <TouchableOpacity
                    onPress={() => setIsNotificationEnabled(!isNotificationEnabled)}
                    style={{
                        width: 52,
                        height: 28,
                        borderRadius: 14,
                        backgroundColor: isNotificationEnabled ? colors.warning : colors.border,
                        justifyContent: 'center',
                        padding: 3,
                    }}
                >
                    <View
                        style={{
                            width: 22,
                            height: 22,
                            borderRadius: 11,
                            backgroundColor: '#fff',
                            alignSelf: isNotificationEnabled ? 'flex-end' : 'flex-start',
                        }}
                    />
                </TouchableOpacity>
            </View>

            {/* Auto Sync */}
            <View style={settingsStyles.settingItem}>
                <View style={settingsStyles.settingLeft}>
                    <LinearGradient
                        colors={colors.gradients.success}
                        style={settingsStyles.settingIcon}
                    >
                        <Ionicons name='sync' size={18} color={'#fff'} />
                    </LinearGradient>
                    <Text style={settingsStyles.settingText}>Auto Sync</Text>
                </View>
                <TouchableOpacity
                    onPress={() => setIsAutoSync(!isAutoSync)}
                    style={{
                        width: 52,
                        height: 28,
                        borderRadius: 14,
                        backgroundColor: isAutoSync ? colors.success : colors.border,
                        justifyContent: 'center',
                        padding: 3,
                    }}
                >
                    <View
                        style={{
                            width: 22,
                            height: 22,
                            borderRadius: 11,
                            backgroundColor: '#fff',
                            alignSelf: isAutoSync ? 'flex-end' : 'flex-start',
                        }}
                    />
                </TouchableOpacity>
            </View>


        </LinearGradient>
    )
}

export default Preferences