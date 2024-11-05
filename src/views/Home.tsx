import React from 'react';
import {View, ViewStyle, ScrollView} from 'react-native';
import { useTheme } from '../providers/theme_provider';
import MovieBanner from '../components/MovieBanner';
import CtaHome from '../components/home/HeaderHome';
import MarvelStudioList from '../components/home/MarvelStudioList';

function Home() {
    const { theme } = useTheme();
    const style: { container: ViewStyle, homeContainer: ViewStyle} = {
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
        },
        homeContainer: {
            marginHorizontal: 24,
        }
    };

    return (
        <View style={style.container}>
            <ScrollView>
                <MovieBanner/>
                <View style={style.homeContainer}>
                    <CtaHome/>
                    <MarvelStudioList/>
                </View>
            </ScrollView>
        </View>
    );
}

export default Home;
