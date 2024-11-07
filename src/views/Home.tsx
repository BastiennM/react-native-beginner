import React, {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {useTheme} from '../providers/theme_provider';
import CarouselHome from '../components/home/CarouselHome';
import CtaHome from '../components/home/HeaderHome';
import MovieList, {Movie, TypeList} from '../components/MovieList';
import CarouselPagination from '../components/home/CarouselPagination';
import {Category, fetchBestMovies, fetchBestMoviesByGenre, fetchMarvelMovies, fetchMoviesByGenre} from '../data/api';
import CategoryList from "../components/home/CategoryList";
import BlackFriday from "../components/home/BlackFriday";

function Home() {
    const {theme} = useTheme();
    const style = createStyle(theme);

    const [currentPage, setCurrentPage] = useState(0);
    const [marvelAllMovies, setMarvelAllMovies] = useState<Movie[]>([]);
    const [popularAllMovies, setPopularAllMovies] = useState<Movie[]>([]);
    const [carouselImages, setCarouselImages] = useState<Movie[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);
    const [moviesByGenre, setMoviesByGenre] = useState<Movie[]>([]);
    const [bestMoviesByGenre, setBestMoviesByGenre] = useState<Movie[]>([]);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const fetchedMovies = await fetchMarvelMovies(selectedCategory);
                const fetchedPopularMovies = await fetchBestMovies(selectedCategory);
                const fetchedMoviesByGenre = await fetchMoviesByGenre(selectedCategory);
                const fetchedBestMoviesByGenre = await fetchBestMoviesByGenre(selectedCategory);

                setMarvelAllMovies(fetchedMovies);
                setPopularAllMovies(fetchedPopularMovies);

                setMoviesByGenre(fetchedMoviesByGenre);
                setBestMoviesByGenre(fetchedBestMoviesByGenre);
                setCarouselImages(fetchedBestMoviesByGenre.slice(0, 5));
            } catch (error) {
                console.error('Error loading movies:', error);
            }
        };

        loadMovies();
    }, [selectedCategory]); // Ajouter selectedCategory comme dépendance

    return (
        <View style={style.container}>
            <ScrollView>
                <CarouselHome onPageChange={setCurrentPage} carouselImages={carouselImages}/>
                <CategoryList
                    selectedCategory={selectedCategory}
                    onCategoryPress={setSelectedCategory}
                />
                <View>
                    <View style={style.topPageContainer}>
                        <CtaHome/>
                        <CarouselPagination currentPage={currentPage} carouselImages={carouselImages}/>
                    </View>
                    <View style={style.movieListContainer}>
                        <MovieList movies={selectedCategory === Category.ALL ? marvelAllMovies : moviesByGenre} headerLabel={'Marvel Studio'} type={TypeList.ByGenre}/>
                        <MovieList movies={selectedCategory === Category.ALL ? popularAllMovies : bestMoviesByGenre} headerLabel={'Best Movies'} type={TypeList.Best}/>
                    </View>
                    <BlackFriday/>
                </View>
            </ScrollView>
        </View>
    );
}

const createStyle = (theme: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    carouselContainer: {
        position: 'relative',
    },
    topPageContainer: {
        marginHorizontal: 24,
    },
    movieListContainer: {
        marginLeft: 24,
        gap: 32
    }
});

export default Home;
