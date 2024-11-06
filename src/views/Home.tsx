import React, {useState} from 'react';
import {View, ViewStyle, ScrollView} from 'react-native';
import { useTheme } from '../providers/theme_provider';
import CarouselHome from '../components/home/CarouselHome';
import CtaHome from '../components/home/HeaderHome';
import MovieList from '../components/MovieList';
import {marvelMovies, popularMovies} from '../constants/movies';
import CarouselPagination from '../components/home/CarouselPagination';

function Home() {
    const { theme } = useTheme();
    const style: { container: ViewStyle, homeContainer: ViewStyle} = {
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
        },
        homeContainer: {
            marginHorizontal: 24,
        },
    };
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <View style={style.container}>
            <ScrollView>
                <CarouselHome onPageChange={setCurrentPage} />
                <View style={style.homeContainer}>
                    <CtaHome/>
                    <CarouselPagination currentPage={currentPage} />
                    <View style={{gap: 32}}>
                        <MovieList movies={marvelMovies} headerLabel={'Marvel Studio'}/>
                        <MovieList movies={popularMovies} headerLabel={'Best Movies'}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Home;
