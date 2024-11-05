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
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50%',
        backgroundColor: 'transparent',
        backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))',
    },
});

export default MovieBanner;
