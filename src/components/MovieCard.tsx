import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useTheme} from '../providers/theme_provider';

interface MovieCardProps {
    imageUrl: string;
    movieName: string;
    rating: number;
}

const MovieCard: React.FC<MovieCardProps> = ({imageUrl, movieName, rating}) => {
    const {theme} = useTheme();
    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <View style={styles.overlay}>
                <View style={styles.bottomContent}>
                    <Text style={styles.movieNameText}>{movieName}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.star}>⭐</Text>
                        <Text style={styles.rating}>{rating.toFixed(1)}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const createStyles = (theme: any) => StyleSheet.create({
    container: {
        width: '35%',
        height: 200,
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
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
        fontSize: 12,
        fontWeight: 'bold',
    },
    movieNameText: {
        color: theme.colors.textCard,
        fontWeight: 'bold',
        fontSize: 12,
    },
});

export default MovieCard;
