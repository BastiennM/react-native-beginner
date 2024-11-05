import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

interface MovieBannerProps {
    imageUrl: string;
}

const MovieBanner: React.FC<MovieBannerProps> = ({ imageUrl }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imageUrl }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.gradient} />
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
    gradient: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
});

export default MovieBanner;
