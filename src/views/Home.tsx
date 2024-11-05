import React from 'react';
import { View, ViewStyle, ScrollView, Text } from 'react-native';
import { useTheme } from '../providers/theme_provider';
import MovieBanner from '../components/MovieBanner';

function Home() {
    const { theme } = useTheme();
    const style: { container: ViewStyle; content: ViewStyle } = {
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
        },
        content: {
            flex: 1,
            backgroundColor: theme.colors.background, // Ajout de la couleur de fond ici aussi
        },
    };

    return (
        <View style={style.container}>
            <Text>Test</Text>
        </View>
    );
}

export default Home;
