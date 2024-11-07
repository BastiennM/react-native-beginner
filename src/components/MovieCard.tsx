import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {useTheme} from '../providers/theme_provider';
import LinearGradient from "react-native-linear-gradient";
import Text from './Text';

interface MovieCardProps {
    imageUrl: string;
    movieName: string;
    rating: number;
}

const MovieCard: React.FC<MovieCardProps> = ({imageUrl, movieName, rating}) => {
    const {theme, isDark} = useTheme();
    const styles = createStyles(theme);
    const gradientColors = isDark
        ? [
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0.05)',
            'rgba(0, 0, 0, 0.1)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(0, 0, 0, 0.3)',
            'rgba(0, 0, 0, 0.5)',
            'rgba(0, 0, 0, 0.7)',
        ]
        : [
            'rgba(255, 255, 255, 0)',
            'rgba(255, 255, 255, 0.05)',
            'rgba(255, 255, 255, 0.1)',
            'rgba(255, 255, 255, 0.2)',
            'rgba(255, 255, 255, 0.3)',
            'rgba(255, 255, 255, 0.5)',
            'rgba(255, 255, 255, 0.7)',
        ];

    return (
        <View style={styles.container}>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <View style={styles.overlay}>
                <View style={styles.bottomContent}>
                    <Text semiBold style={styles.movieNameText}>{movieName}</Text>
                    <View style={styles.ratingContainer}>
                        <Text semiBold style={styles.star}>⭐</Text>
                        <Text semiBold style={styles.rating}>{rating.toFixed(1)}</Text>
                    </View>
                </View>
                <LinearGradient
                    colors={gradientColors}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}
                    style={styles.gradientOverlay}
                />
            </View>
        </View>
    );
};

const createStyles = (theme: any) => StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.33,
        height: 200,
        borderRadius: 16,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'flex-end',
    },
    bottomContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        zIndex: 1,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        fontSize: 12,
        marginRight: 4,
    },
    rating: {
        color: theme.colors.textCard,
        fontSize: 10,
    },
    movieNameText: {
        color: theme.colors.textCard,
        fontSize: 10,
        width: '80%',
    },
    gradientOverlay: {
        position: 'absolute',
        width: '100%',
        height: '35%', // Réduction de la hauteur du gradient (était à 30%)
        bottom: 0,
    },
});

export default MovieCard;
