import { createHomeStyles } from "@/assets/styles/home.styles";
import { useTheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoadingSpinner = () => {
  const { colors, isDarkMode } = useTheme();

  const homeStyles = createHomeStyles(colors);

  return (
    <>
      <StatusBar
        style={isDarkMode ? 'light' : 'dark'}
        backgroundColor={isDarkMode ? '#0b0b0b' : '#fff'}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
          <View style={homeStyles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={homeStyles.loadingText}>Loading your todos...</Text>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </>
  );
};

export default LoadingSpinner;