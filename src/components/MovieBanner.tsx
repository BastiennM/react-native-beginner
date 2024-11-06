import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '../providers/theme_provider';

const BANNER_IMAGES = [
    'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    'https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
    'https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    'https://image.tmdb.org/t/p/original/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg',
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const MovieBanner: React.FC = () => {
    const {isDark, theme} = useTheme();
    const [currentPage, setCurrentPage] = useState(0);
    const styles = createStyle(theme);

    const gradientColors = isDark
        ? ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)', 'black']
        : [
            'rgba(255, 255, 255, 0)',
            'rgba(255, 255, 255, 0.5)',
            'rgba(255, 255, 255, 0.8)',
            'white',
        ];

    const handleScroll = (event: any) => {
        const page = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
        setCurrentPage(page);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {BANNER_IMAGES.map((imageUrl, index) => (
                    <View key={index} style={styles.slideContainer}>
                        <Image
                            source={{ uri: imageUrl }}
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
                ))}
            </ScrollView>
            <View style={styles.pagination}>
                {BANNER_IMAGES.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.paginationDot,
                            currentPage === index && styles.paginationDotActive,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const createStyle  = (theme: any) => StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height * 0.5,
        position: 'relative',
    },
    slideContainer: {
        width: SCREEN_WIDTH,
        height: '100%',
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
    pagination: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    paginationDotActive: {
        backgroundColor: theme.colors.primary,
        width: 8,
    },
});

export default MovieBanner;
