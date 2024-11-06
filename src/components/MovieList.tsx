import {View, StyleSheet, ScrollView} from 'react-native';
import {useTheme} from '../providers/theme_provider';
import HeaderList from './home/HeaderList';
import MoviePoster from './MoviePoster';

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
}

interface MovieListProps {
    movies: Movie[];
    headerLabel: string;
    seeMoreLabel?: string;
}

const MovieList: React.FC<MovieListProps> = ({
    movies,
    headerLabel,
}) => {
    const {theme} = useTheme();

    return (
        <View style={styles.container}>
            <HeaderList
                headerLabel={headerLabel}
            />
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {movies.map((movie) => (
                    <View key={movie.id} style={styles.movieContainer}>
                        <MoviePoster
                            imageUrl={movie.poster_path}
                            title={movie.title}
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 16,
    },
    scrollContent: {
        gap: 16,
    },
    movieContainer: {
        marginRight: 16,
    },
});

export default MovieList;
