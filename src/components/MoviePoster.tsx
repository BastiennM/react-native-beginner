import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {useTheme} from '../providers/theme_provider';
import Text from './Text';

interface MoviePosterProps {
    imageUrl: string;
    title: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({imageUrl, title}) => {
    const {theme} = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{uri: imageUrl}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <Text semiBold
                style={[
                    styles.title,
                    {color: theme.colors.text},
                ]}
                numberOfLines={1}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.33,
        gap: 8,
    },
    imageContainer: {
        width: '100%',
        height: 200,
        borderRadius: 16,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 14,
        textAlign: 'left',
    },
});

export default MoviePoster;
