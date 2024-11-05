import {StyleSheet, View} from 'react-native';
import * as React from 'react';
import {useTheme} from '../providers/theme_provider';
import CustomButton from '../components/Button';
import AddIconDark from '../images/svg/dark/AddIcon.svg';
import AddIconWhite from '../images/svg/white/AddIcon.svg';
import MovieCard from '../components/MovieCard';
import MoviePoster from '../components/MoviePoster';

function Wishlist() {
    const { theme} = useTheme();
    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <CustomButton
                label="Label"
                variant="primary"
                onPress={() => console.log('Primary button pressed')}
                iconDark={<AddIconDark />}
                iconLight={<AddIconWhite />}
            />
            <CustomButton
                label="Label"
                variant="secondary"
                onPress={() => console.log('Primary button pressed')}
                iconDark={<AddIconDark />}
                iconLight={<AddIconWhite />}
            />
            <MovieCard
                imageUrl="https://placeholderimage.eu/api"
                movieName="Movie name"
                rating={4.7}
            />
            <MoviePoster
                imageUrl="https://placeholderimage.eu/api"
                title="Movie title"
            />
        </View>
    );
}

const createStyles = (theme: any) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        backgroundColor: theme.colors.background,
    },
});

export default Wishlist;
