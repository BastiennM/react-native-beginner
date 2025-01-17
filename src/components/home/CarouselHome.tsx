import React, {useEffect, useRef} from 'react';
import {View, Image, StyleSheet, Dimensions, ScrollView, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '../../providers/theme_provider';
import {Movie} from '../MovieList';

interface CarouselHomeProps {
    onPageChange: (page: number) => void;
    carouselImages: Movie[];
    currentPage: number;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const CarouselHome: React.FC<CarouselHomeProps> = ({ onPageChange, carouselImages }) => {    const {isDark, theme} = useTheme();
    const styles = createStyle(theme);
    const scrollViewRef = useRef<ScrollView>(null);

    // Effet pour forcer le scroll à la page 0 quand les images changent
    useEffect(() => {
        if (scrollViewRef.current) {
            // Force le scroll à 0 avec animation
            scrollViewRef.current.scrollTo({
                x: 0,
                animated: true,
            });
            // Force la mise à jour de l'index
            onPageChange(0);
        }
    }, [carouselImages, onPageChange]); // Ajout de onPageChange aux dépendances

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffset = event.nativeEvent.contentOffset;
        const viewSize = event.nativeEvent.layoutMeasurement;
        const newPage = Math.floor(contentOffset.x / viewSize.width);
        onPageChange(newPage);
    };

    const gradientColors = isDark
        ? [
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0.05)',
            'rgba(0, 0, 0, 0.1)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(0, 0, 0, 0.3)',
            'rgba(0, 0, 0, 0.5)',
            'rgba(0, 0, 0, 0.8)',
            'black']
        : [
            'rgba(255, 255, 255, 0)',
            'rgba(255, 255, 255, 0.05)',
            'rgba(255, 255, 255, 0.1)',
            'rgba(255, 255, 255, 0.2)',
            'rgba(255, 255, 255, 0.3)',
            'rgba(255, 255, 255, 0.5)',
            'rgba(255, 255, 255, 0.8)',
            'white',
        ];

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                ref={scrollViewRef}
            >
                {carouselImages.map((movie, index) => (
                    <View key={index} style={styles.slideContainer}>
                        <Image
                            source={{ uri: movie.poster_path }}
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

export default CarouselHome;
