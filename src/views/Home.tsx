import {Text, View, ViewStyle, Image, Dimensions} from 'react-native';
import * as React from 'react';
import {useTheme} from '../providers/theme_provider';
import homeImage from '../images/png/home.png';

function HomeScreen() {
    const { theme } = useTheme();
    const style: { container: ViewStyle } = {
        container: {
            flex: 1,
            alignItems: 'flex-start',
            backgroundColor: theme.colors.background,
        },
    };

    const screenWidth = Dimensions.get('window').width;


    return (
        <View style={style.container}>
            <Image source={homeImage} style={{ width: screenWidth, height: 430 }} />
        </View>
    );
}

export default HomeScreen;
