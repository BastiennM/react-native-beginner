import {View, StyleSheet, ScrollView, FlatList, Text} from 'react-native';
import {useTheme} from '../providers/theme_provider';
import HeaderList from './home/HeaderList';
import MoviePoster from './MoviePoster';
import MovieCard from "./MovieCard";

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

export enum TypeList { ByGenre = 0, Best = 1}

interface MovieListProps {
    movies: Movie[];
    type: TypeList;
    headerLabel: string;
    seeMoreLabel?: string;
}

const MovieList: React.FC<MovieListProps> = ({
    movies,
    headerLabel,
    type
}) => {
    const {theme} = useTheme();

    return (
        <View style={styles.container}>
            <View style={{marginRight: 24}}>
                <HeaderList
                    headerLabel={headerLabel}
                />
            </View>
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.movieContainer}>
                        {type === TypeList.ByGenre ? (
                            <MoviePoster
                                imageUrl={item.poster_path}
                                title={item.title}
                            />
                        ) : (
                            <MovieCard
                                imageUrl={item.poster_path}
                                movieName={item.title}
                                rating={item.vote_average}
                            />
                        )}
                    </View>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                style={{flex: 1}}
            >
            </FlatList>
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
