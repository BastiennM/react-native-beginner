import React, {useState, useEffect} from 'react';
import {View, ViewStyle, ScrollView} from 'react-native';
import { useTheme } from '../providers/theme_provider';
import CarouselHome from '../components/home/CarouselHome';
import CtaHome from '../components/home/HeaderHome';
import MovieList from '../components/MovieList';
import CarouselPagination from '../components/home/CarouselPagination';
import {Category, fetchBestMovies, fetchMarvelMovies} from '../data/api';
import { Movie } from '../components/MovieList';

function Home() {
    const {theme} = useTheme();
    const style: { container: ViewStyle, homeContainer: ViewStyle } = {
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
        },
        homeContainer: {
            marginHorizontal: 24,
        },
    };
    const [currentPage, setCurrentPage] = useState(0);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const fetchedMovies = await fetchMarvelMovies(Category.ALL);
                const fetchedPopularMovies = await fetchBestMovies(Category.ALL);

                setMovies(fetchedMovies);
                setPopularMovies(fetchedPopularMovies);
            } catch (error) {
                console.error('Error loading movies:', error);
            }
        };

        loadMovies();
    }, []);

    return (
        <View style={style.container}>
            <ScrollView>
                <CarouselHome onPageChange={setCurrentPage}/>
                <View style={style.homeContainer}>
                    <CtaHome/>
                    <CarouselPagination currentPage={currentPage}/>
                    <View style={{gap: 32}}>
                        <MovieList movies={movies} headerLabel={'Marvel Studio'}/>
                        <MovieList movies={popularMovies} headerLabel={'Best Movies'}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Home;
