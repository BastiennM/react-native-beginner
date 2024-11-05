import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {useTheme} from "../providers/theme_provider";

const MovieBanner: React.FC = () => {
    const {isDark} = useTheme();
    const gradientColors = isDark
        ? ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)', 'black']
        : [
            'rgba(255, 255, 255, 0)',
            'rgba(255, 255, 255, 0.5)',
            'rgba(255, 255, 255, 0.8)',
            'white',
        ];

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg" }}
                style={styles.image}
                resizeMode="cover"
            />
            <LinearGradient
                colors={gradientColors}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                style={styles.gradientOverlay}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height * 0.5,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    gradientOverlay: {
        position: 'absolute',
        width: '100%',
        height: '30%',
        bottom: 0,
    },
});

export default MovieBanner;
