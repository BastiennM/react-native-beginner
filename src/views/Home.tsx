import React, {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {useTheme} from '../providers/theme_provider';
import CarouselHome from '../components/home/CarouselHome';
import CtaHome from '../components/home/HeaderHome';
import MovieList, {Movie, TypeList} from '../components/MovieList';
import CarouselPagination from '../components/home/CarouselPagination';
import {Category, fetchBestMovies, fetchBestMoviesByGenre, fetchMarvelMovies, fetchMoviesByGenre} from '../data/api';
import CategoryList from '../components/home/CategoryList';
import BlackFriday from '../components/home/BlackFriday';
import {capitalise} from '../utils/utils_text';

function Home() {
    const {theme} = useTheme();
    const style = createStyle(theme);

    //CurrentPageCarousel est un état qui stocke l'index de la page actuelle du carousel
    const [currentPageCarousel, setCurrentPageCarousel] = useState(0);

    //Dans le cas ou la catégorie est ALL, on affiche les films de Marvel
    //PopularAllMovies est un état qui stocke les films (tout les films) triés par popularité
    const [marvelAllMovies, setMarvelAllMovies] = useState<Movie[]>([]);
    const [popularAllMovies, setPopularAllMovies] = useState<Movie[]>([]);

    //Carousel images stock les 5 premiers films triés par popularité
    const [carouselImages, setCarouselImages] = useState<Movie[]>([]);

    //Catégorie actuelle sélectionnée
    const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);

    //Ces deux listes dynamiques stockent les films triés par genre et par popularité selon la catégorie sélectionnée
    const [moviesByGenre, setMoviesByGenre] = useState<Movie[]>([]);
    const [bestMoviesByGenre, setBestMoviesByGenre] = useState<Movie[]>([]);

    //On détermine les listes de films à afficher en fonction de la catégorie sélectionnée
    const secondMovieList = selectedCategory === Category.ALL ? popularAllMovies : bestMoviesByGenre;
    const headerLabelFirstList = selectedCategory === Category.ALL ? 'Marvel Studio' : `${capitalise(Category[selectedCategory])} movies`;
    const firstMoviesList = selectedCategory === Category.ALL ? marvelAllMovies : moviesByGenre;

    // Nouvelle fonction pour gérer le changement de catégorie
    const handleCategoryChange = (category: Category) => {
        setSelectedCategory(category);
        setCurrentPageCarousel(0); // Réinitialise l'index de pagination
    };

    //Fonction pour récupérer les films en fonction de la catégorie sélectionnée (appel API)
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
                <CarouselHome onPageChange={setCurrentPageCarousel} carouselImages={carouselImages} currentPage={currentPageCarousel}/>
                <CategoryList
                    selectedCategory={selectedCategory}
                    onCategoryPress={handleCategoryChange}
                />
                <View style={style.globalHomeStyle}>
                    <View style={style.topPageContainer}>
                        <CtaHome/>
                        <CarouselPagination currentPage={currentPageCarousel} carouselImages={carouselImages}/>
                    </View>
                    <View style={style.movieListContainer}>
                        <MovieList movies={firstMoviesList} headerLabel={headerLabelFirstList} type={TypeList.ByGenre}/>
                        <MovieList movies={secondMovieList} headerLabel={'Best Movies'} type={TypeList.Best}/>
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
        gap: 32,
    },
    globalHomeStyle: {
        paddingBottom:16,
    },
});

export default Home;
