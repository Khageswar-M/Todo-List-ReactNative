import { Ionicons } from '@expo/vector-icons';
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { createSettingsStyles } from '../assets/styles/settings.styles';
import { api } from '../convex/_generated/api';
import { useTheme } from '../hooks/useTheme';

const DangerZone = () => {
    const { colors } = useTheme();

    const settingStyles = createSettingsStyles(colors);

    const clearAllTodos = useMutation(api.todos.clearAllTodos);

    const handleResetApp = () => {
        Alert.alert(
            "Reset App",
            "⚠️ This will delete all your todos permanently. This action can't be undone.",
            [
                {text: 'Cancel', style: "cancel"},
                {
                    text: 'Delete All',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            const result = await clearAllTodos();
                            Alert.alert(
                                "App Reset",
                                `Successfully deleted ${result.deletedCount} todo${result.deletedCount === 1 ? "" : "s"}. Your app has been reset.`
                            );
                        }catch(error){
                            console.log("Error deleting all todos", error);
                            Alert.alert("Error", "Failed to reset app");
                        }
                    }
                }
            ]
        )
    }

    return (
        <LinearGradient colors={colors.gradients.surface} style={settingStyles.section}>
            <Text style={settingStyles.sectionTitleDanger}>Danger Zone</Text>

            <TouchableOpacity
                style={[settingStyles.actionButton, { borderWidth: 0 }]}
                onPress={() => handleResetApp()}
                activeOpacity={0.8}

            >

                <View style={settingStyles.actionLeft}>
                    <LinearGradient
                        colors={colors.gradients.danger}
                        style={settingStyles.actionIcon}
                    >
                        <Ionicons name='trash' size={18} color={'#fff'} />
                    </LinearGradient>
                    <Text style={settingStyles.actionTextDanger}>
                        Reset App
                    </Text>
                </View>
                <Ionicons name='chevron-forward' size={18} color={colors.textMuted} />
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default DangerZone