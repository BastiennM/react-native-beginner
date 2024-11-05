import {View, StyleSheet, ScrollView} from 'react-native';
import {useTheme} from '../../providers/theme_provider';
import HeaderList from './HeaderList';
import MoviePoster from '../MoviePoster';

const MarvelStudioList = () => {
    const {theme} = useTheme();
    const styles = createStyles(theme);
    const marvelMovies = [
        {
            id: 1,
            title: 'Thor: Love and Thunder',
            imageUrl: 'https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
        },
        {
            id: 2,
            title: 'Doctor Strange in the Multiverse of Madness',
            imageUrl: 'https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
        },
        {
            id: 3,
            title: 'Spider-Man: No Way Home',
            imageUrl: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
        },
        {
            id: 4,
            title: 'Eternals',
            imageUrl: 'https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg',
        },
        {
            id: 5,
            title: 'Black Widow',
            imageUrl: 'https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg',
        },
    ];

    return (
        <View style={styles.container}>
            <HeaderList headerLabel={'Marvel Studios'} seeMoreLabel={'See more'}/>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {marvelMovies.map((movie) => (
                    <View key={movie.id} style={styles.movieContainer}>
                        <MoviePoster
                            imageUrl={movie.imageUrl}
                            title={movie.title}
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const createStyles = (theme: any) => StyleSheet.create({
    container: {
        marginVertical: 16,
        gap: 16,
    },
    scrollContent: {
        gap: 16,
    },
    movieContainer: {
        marginRight: 16,
    },
});

export default MarvelStudioList;
